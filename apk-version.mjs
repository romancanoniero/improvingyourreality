import { lookup as dnsLookup } from 'node:dns';
import https from 'node:https';
import { inflateRawSync } from 'node:zlib';

const VERSION_NAME_ID = 0x0101021c;
const FRESH_MS = 10 * 60 * 1000;

// En la VPS el contenedor no puede volver a la IP pública (hairpin). Con
// APK_VIA_TRAEFIK=1 la lectura del APK entra por el proxy `traefik`, que sí
// resuelve en la red Docker, y el certificado sigue siendo el del dominio.
export function usesTraefik(url, fetchImpl = fetch) {
  if (fetchImpl !== fetch || process.env.APK_VIA_TRAEFIK !== '1') return false;
  try {
    const host = new URL(url).hostname;
    return host === 'fonomeets.com' || host === 'www.fonomeets.com';
  } catch {
    return false;
  }
}

function rangeViaTraefik(url, from, to) {
  const target = new URL(url);
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        host: target.hostname,
        servername: target.hostname,
        path: `${target.pathname}${target.search}`,
        headers: { Host: target.host, Range: `bytes=${from}-${to}` },
        timeout: 5000,
        lookup(hostname, options, callback) {
          dnsLookup('traefik', options, (err, address, family) => {
            if (err) dnsLookup(hostname, options, callback);
            else callback(null, address, family);
          });
        },
      },
      (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () =>
          resolve({
            status: res.statusCode,
            arrayBuffer: async () => Buffer.concat(chunks),
          }),
        );
      },
    );
    req.on('timeout', () => req.destroy(Error('timeout')));
    req.on('error', reject);
    req.end();
  });
}

async function range(url, from, to, fetchImpl) {
  const r = usesTraefik(url, fetchImpl)
    ? await rangeViaTraefik(url, from, to)
    : await fetchImpl(url, {
        headers: { Range: `bytes=${from}-${to}` },
        redirect: 'follow',
        signal: AbortSignal.timeout(5000),
      });
  if (r.status !== 206) throw Error('El servidor no entrega rangos');
  return Buffer.from(await r.arrayBuffer());
}

function zipEntry(tail, name) {
  let eocd = -1;
  for (let i = tail.length - 22; i >= 0; i--)
    if (tail.readUInt32LE(i) === 0x06054b50) {
      eocd = i;
      break;
    }
  if (eocd < 0) throw Error('No es un APK');
  return {
    cdSize: tail.readUInt32LE(eocd + 12),
    cdOffset: tail.readUInt32LE(eocd + 16),
    find(cd) {
      for (let i = 0; i + 46 <= cd.length && cd.readUInt32LE(i) === 0x02014b50; ) {
        const nameLen = cd.readUInt16LE(i + 28);
        const skip = 46 + nameLen + cd.readUInt16LE(i + 30) + cd.readUInt16LE(i + 32);
        if (cd.toString('utf8', i + 46, i + 46 + nameLen) === name)
          return {
            method: cd.readUInt16LE(i + 10),
            size: cd.readUInt32LE(i + 20),
            offset: cd.readUInt32LE(i + 42),
          };
        i += skip;
      }
      return null;
    },
  };
}

function strings(xml, at) {
  const count = xml.readUInt32LE(at + 8);
  const utf8 = (xml.readUInt32LE(at + 16) & 0x100) !== 0;
  const base = at + xml.readUInt32LE(at + 20);
  const offsets = at + xml.readUInt16LE(at + 2);
  return (index) => {
    if (index < 0 || index >= count) return null;
    let p = base + xml.readUInt32LE(offsets + index * 4);
    if (utf8) {
      p += xml[p] & 0x80 ? 2 : 1;
      let len = xml[p];
      if (len & 0x80) len = ((len & 0x7f) << 8) | xml[++p];
      return xml.toString('utf8', p + 1, p + 1 + len);
    }
    let len = xml.readUInt16LE(p);
    if (len & 0x8000) {
      len = ((len & 0x7fff) << 16) | xml.readUInt16LE(p + 2);
      p += 2;
    }
    return xml.toString('utf16le', p + 2, p + 2 + len * 2);
  };
}

export function manifestVersionName(xml) {
  if (xml.readUInt16LE(0) !== 0x0003) throw Error('Manifiesto inválido');
  let text = null;
  let ids = [];
  for (let at = xml.readUInt16LE(2); at + 8 <= xml.length; ) {
    const type = xml.readUInt16LE(at);
    const size = xml.readUInt32LE(at + 4);
    if (!size) break;
    if (type === 0x0001) text = strings(xml, at);
    else if (type === 0x0180)
      for (let i = at + 8; i < at + size; i += 4) ids.push(xml.readUInt32LE(i));
    else if (type === 0x0102 && text) {
      if (text(xml.readUInt32LE(at + 20)) === 'manifest') {
        const start = at + 16 + xml.readUInt16LE(at + 24);
        const step = xml.readUInt16LE(at + 26);
        const count = xml.readUInt16LE(at + 28);
        for (let n = 0; n < count; n++) {
          const a = start + n * step;
          const name = xml.readUInt32LE(a + 4);
          if (ids[name] !== VERSION_NAME_ID && text(name) !== 'versionName') continue;
          const raw = xml.readInt32LE(a + 8);
          if (raw >= 0) return text(raw);
          if (xml[a + 15] === 0x03) return text(xml.readUInt32LE(a + 16));
          return null;
        }
        return null;
      }
    }
    at += size;
  }
  return null;
}

export async function readApkVersion(url, fetchImpl = fetch) {
  const tail = await range(url, '', 65557, fetchImpl);
  const zip = zipEntry(tail, 'AndroidManifest.xml');
  const cd = await range(url, zip.cdOffset, zip.cdOffset + zip.cdSize - 1, fetchImpl);
  const entry = zip.find(cd);
  if (!entry) throw Error('El APK no tiene manifiesto');
  const local = await range(url, entry.offset, entry.offset + 29, fetchImpl);
  const dataStart = entry.offset + 30 + local.readUInt16LE(26) + local.readUInt16LE(28);
  const data = await range(url, dataStart, dataStart + entry.size - 1, fetchImpl);
  const xml = entry.method === 8 ? inflateRawSync(data) : data;
  return manifestVersionName(xml);
}

export function apkVersions({ fetchImpl = fetch, now = Date.now } = {}) {
  const cache = new Map();
  const refresh = (url) => {
    const entry = cache.get(url) || { version: null, at: 0, pending: null };
    cache.set(url, entry);
    if (entry.pending) return entry.pending;
    entry.pending = readApkVersion(url, fetchImpl)
      .then((version) => {
        if (version) entry.version = version;
      })
      .catch(() => {})
      .finally(() => {
        entry.at = now();
        entry.pending = null;
      });
    return entry.pending;
  };
  return async (url) => {
    const entry = cache.get(url);
    if (!entry || now() - entry.at > FRESH_MS) {
      const pending = refresh(url);
      if (!entry?.version) {
        let timer;
        await Promise.race([pending, new Promise((r) => (timer = setTimeout(r, 6000)))]);
        clearTimeout(timer);
      }
    }
    return cache.get(url)?.version || null;
  };
}

export const isApk = (url) => {
  try {
    return new URL(url).pathname.toLowerCase().endsWith('.apk');
  } catch {
    return false;
  }
};
