import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createApp, allowedIdentity, validateSettings } from '../server.mjs';
const identity = {
  sub: 'owner',
  email: 'romancanoniero@gmail.com',
  email_verified: true,
  firebase: { sign_in_provider: 'google.com' },
  auth_time: 1,
};
test('Google verified owner only', () => {
  assert(allowedIdentity(identity));
  for (const p of [
    { ...identity, email: 'other@gmail.com' },
    { ...identity, email_verified: false },
    { ...identity, firebase: { sign_in_provider: 'password' } },
    { ...identity, auth_time: Infinity },
  ])
    assert(!allowedIdentity(p));
});
test('private data requires verified bearer and never leaks into public catalog', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'iyr-'));
  const app = await createApp({
    dataDir: dir,
    verifyToken: async (t) => {
      if (t !== 'valid') throw Error();
      return identity;
    },
  });
  try {
    assert.equal((await app.inject('/api/admin/settings')).statusCode, 401);
    assert.equal(
      (
        await app.inject({
          url: '/api/admin/settings',
          headers: { authorization: 'Bearer fake' },
        })
      ).statusCode,
      403,
    );
    const p = {
      id: 'one',
      name: 'App',
      description: 'Description',
      category: 'Apps',
      repository: 'private/repo',
      published: true,
      screenshots: ['https://example.com/screen.png'],
      demoUrl: 'https://example.com',
      privateUrl: 'https://private.example.com',
      iosUrl: '',
      androidUrl: '',
    };
    assert.equal(
      (
        await app.inject({
          method: 'PUT',
          url: '/api/admin/settings',
          headers: { authorization: 'Bearer valid' },
          payload: { orchestratorUrl: '', projects: [p] },
        })
      ).statusCode,
      200,
    );
    const publicData = (await app.inject('/api/projects')).json();
    assert.equal(publicData[0].name, 'App');
    assert(!('privateUrl' in publicData[0]));
    assert(!('repository' in publicData[0]));
    const privateData = await app.inject({
      url: '/api/admin/settings',
      headers: { authorization: 'Bearer valid' },
    });
    assert.equal(privateData.headers['cache-control'], 'no-store');
    assert.equal(
      privateData.json().projects[0].privateUrl,
      new URL(p.privateUrl).href,
    );
  } finally {
    await app.close();
    await rm(dir, { recursive: true, force: true });
  }
});
test('reject invalid URLs, missing screenshot and duplicate IDs', () => {
  const p = {
    id: 'one',
    name: 'App',
    description: 'Description',
    category: '',
    repository: 'a/b',
    published: true,
    screenshots: ['https://example.com/a.png'],
    demoUrl: '',
    privateUrl: '',
    iosUrl: '',
    androidUrl: '',
  };
  for (const projects of [
    [{ ...p, demoUrl: 'javascript:alert(1)' }],
    [{ ...p, screenshots: [] }],
    [p, p],
    [{ ...p, iosUrl: 'https://evil.com' }],
  ])
    assert.throws(() => validateSettings({ orchestratorUrl: '', projects }));
});
