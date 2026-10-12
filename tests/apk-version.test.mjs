import test from 'node:test';
import assert from 'node:assert/strict';
import { deflateRawSync } from 'node:zlib';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { apkVersions, manifestVersionName, readApkVersion, usesTraefik } from '../apk-version.mjs';
import { createApp } from '../server.mjs';

const u16 = (n) => {
  const b = Buffer.alloc(2);
  b.writeUInt16LE(n);
  return b;
};
const u32 = (n) => {
  const b = Buffer.alloc(4);
  b.writeUInt32LE(n >>> 0);
  return b;
};

function manifest(version, { named = true } = {}) {
  const list = [named ? 'versionName' : '', 'manifest', version];
  const bodies = list.map((s) => Buffer.concat([u16(s.length), Buffer.from(s, 'utf16le'), u16(0)]));
  let offset = 0;
  const offsets = bodies.map((b) => {
    const at = offset;
    offset += b.length;
    return u32(at);
  });
  let data = Buffer.concat(bodies);
  if (data.length % 4) data = Buffer.concat([data, Buffer.alloc(4 - (data.length % 4))]);
  const pool = Buffer.concat([
    u16(1), u16(28), u32(28 + offsets.length * 4 + data.length),
    u32(list.length), u32(0), u32(0), u32(28 + offsets.length * 4), u32(0),
    ...offsets, data,
  ]);
  const ids = Buffer.concat([u16(0x0180), u16(8), u32(12), u32(0x0101021c)]);
  const attr = Buffer.concat([u32(0xffffffff), u32(0), u32(2), u16(8), Buffer.from([0, 3]), u32(2)]);
  const start = Buffer.concat([
    u16(0x0102), u16(16), u32(36 + attr.length),
    u32(1), u32(0xffffffff),
    u32(0xffffffff), u32(1), u16(20), u16(20), u16(1), u16(0), u16(0), u16(0),
    attr,
  ]);
  const body = Buffer.concat([pool, ids, start]);
  return Buffer.concat([u16(3), u16(8), u32(8 + body.length), body]);
}

function apk(xml) {
  const name = Buffer.from('AndroidManifest.xml');
  const packed = deflateRawSync(xml);
  const local = Buffer.concat([
    u32(0x04034b50), u16(20), u16(0), u16(8), u16(0), u16(0), u32(0),
    u32(packed.length), u32(xml.length), u16(name.length), u16(0), name, packed,
  ]);
  const central = Buffer.concat([
    u32(0x02014b50), u16(20), u16(20), u16(0), u16(8), u16(0), u16(0), u32(0),
    u32(packed.length), u32(xml.length), u16(name.length), u16(0), u16(0), u16(0), u16(0),
    u32(0), u32(0), name,
  ]);
  const end = Buffer.concat([
    u32(0x06054b50), u16(0), u16(0), u16(1), u16(1),
    u32(central.length), u32(local.length), u16(0),
  ]);
  return Buffer.concat([local, central, end]);
}

const serve = (file, calls = []) => async (url, options) => {
  calls.push(options.headers.Range);
  const [a, b] = options.headers.Range.slice(6).split('-');
  const from = a === '' ? Math.max(file.length - Number(b), 0) : Number(a);
  const to = a === '' ? file.length - 1 : Math.min(Number(b), file.length - 1);
  return new Response(file.subarray(from, to + 1), { status: 206 });
};

test('routes fonomeets downloads through traefik only when asked', () => {
  const prev = process.env.APK_VIA_TRAEFIK;
  try {
    delete process.env.APK_VIA_TRAEFIK;
    assert.equal(usesTraefik('https://fonomeets.com/descargas/a.apk'), false);
    process.env.APK_VIA_TRAEFIK = '1';
    assert.equal(usesTraefik('https://fonomeets.com/descargas/a.apk'), true);
    assert.equal(usesTraefik('https://www.fonomeets.com/descargas/a.apk'), true);
    assert.equal(usesTraefik('https://example.com/descargas/a.apk'), false);
    assert.equal(usesTraefik('https://fonomeets.com/descargas/a.apk', async () => {}), false);
  } finally {
    if (prev === undefined) delete process.env.APK_VIA_TRAEFIK;
    else process.env.APK_VIA_TRAEFIK = prev;
  }
});

test('reads versionName by attribute name or by resource id', () => {
  assert.equal(manifestVersionName(manifest('0.1.4')), '0.1.4');
  assert.equal(manifestVersionName(manifest('0.1.5', { named: false })), '0.1.5');
});

test('reads the version from an APK with range requests only', async () => {
  const calls = [];
  assert.equal(await readApkVersion('https://x.test/a.apk', serve(apk(manifest('0.1.5')), calls)), '0.1.5');
  assert(calls.every((r) => r.startsWith('bytes=')));
});

test('refuses servers without ranges and keeps the last good version', async () => {
  const whole = async () => new Response('x', { status: 200 });
  await assert.rejects(readApkVersion('https://x.test/a.apk', whole));
  let clock = 0;
  let file = apk(manifest('0.1.4'));
  let broken = false;
  const versions = apkVersions({
    fetchImpl: (url, o) => (broken ? whole() : serve(file)(url, o)),
    now: () => clock,
  });
  assert.equal(await versions('https://x.test/a.apk'), '0.1.4');
  file = apk(manifest('0.1.5'));
  assert.equal(await versions('https://x.test/a.apk'), '0.1.4');
  clock = 11 * 60 * 1000;
  broken = true;
  assert.equal(await versions('https://x.test/a.apk'), '0.1.4');
  await new Promise((r) => setTimeout(r, 0));
  clock = 22 * 60 * 1000;
  broken = false;
  await versions('https://x.test/a.apk');
  await new Promise((r) => setTimeout(r, 0));
  assert.equal(await versions('https://x.test/a.apk'), '0.1.5');
});

test('public catalog shows the version only on APK modules', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'iyr-'));
  const asked = [];
  const app = await createApp({
    dataDir: dir,
    verifyToken: async () => ({
      sub: 'owner',
      email: 'romancanoniero@gmail.com',
      email_verified: true,
      firebase: { sign_in_provider: 'google.com' },
      auth_time: 1,
    }),
    apkVersion: async (url) => {
      asked.push(url);
      return '0.1.4';
    },
  });
  try {
    const project = {
      id: 'fun',
      name: 'FonoMeets Fun',
      description: 'Reproductor',
      category: '',
      repository: 'a/b',
      published: true,
      screenshots: ['https://example.com/a.png'],
      demoUrl: '',
      privateUrl: '',
      iosUrl: '',
      androidUrl: '',
      modules: [
        { label: 'Reproductor para Android', url: 'https://example.com/descargas/App.apk' },
        { label: 'Cómo instalarlo', url: 'https://example.com/instalar.html' },
      ],
    };
    const saved = await app.inject({
      method: 'PUT',
      url: '/api/admin/settings',
      headers: { authorization: 'Bearer valid' },
      payload: { orchestratorUrl: '', projects: [project] },
    });
    assert.equal(saved.statusCode, 200);
    const [fun] = (await app.inject('/api/projects')).json();
    assert.equal(fun.modules[0].version, '0.1.4');
    assert(!('version' in fun.modules[1]));
    assert.deepEqual(asked, ['https://example.com/descargas/App.apk']);
  } finally {
    await app.close();
    await rm(dir, { recursive: true, force: true });
  }
});
