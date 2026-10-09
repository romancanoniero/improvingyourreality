import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createApp, validateSettings } from '../server.mjs';
import {
  validatePresentation,
  validateHierarchy,
  publicCatalog,
} from '../presentation-agent.mjs';
const identity = {
  sub: 'owner',
  email: 'romancanoniero@gmail.com',
  email_verified: true,
  firebase: { sign_in_provider: 'google.com' },
  auth_time: 1,
};
const headers = { authorization: 'Bearer owner' };
const wh = { authorization: 'Bearer test-worker-secret' };
const image = {
  id: 'screen-1',
  path: 'maestro/screenshots/screen.png',
  base64:
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jH8kAAAAASUVORK5CYII=',
};
const evidence = {
  documents: 'SOURCE: README.md\nA useful project.',
  images: [image],
  related: [],
};
const output = {
  name: 'Generated app',
  description: 'Description supported by evidence.',
  category: 'Product',
  screenshotIds: ['screen-1'],
  related: [],
};
test('adding queues a persistent job; real pipeline publishes selected evidence, hides private fields and rejects stale edits', async () => {
  process.env.PRESENTATION_WORKER_KEY = 'test-worker-secret';
  const dir = await mkdtemp(join(tmpdir(), 'iyr-agent-'));
  let calls = 0;
  const app = await createApp({
    dataDir: dir,
    verifyToken: async () => identity,
    generate: async (e, p) => {
      calls++;
      assert.equal(e.documents, evidence.documents);
      assert.equal(p.repository, 'owner/app');
      return { result: output, model: 'test-vision' };
    },
  });
  try {
    assert.equal(
      (
        await app.inject({
          method: 'POST',
          url: '/api/worker/claim',
          payload: {},
        })
      ).statusCode,
      403,
    );
    const added = await app.inject({
      method: 'POST',
      url: '/api/admin/projects',
      headers,
      payload: { repository: 'owner/app', autoPublish: true },
    });
    assert.equal(added.statusCode, 200);
    const saved = added.json(),
      p = saved.projects.at(-1);
    assert.equal(p.generation.status, 'queued');
    assert.equal(p.published, false);
    assert.equal(
      JSON.parse(await readFile(join(dir, 'settings.json'))).projects.at(-1)
        .generation.status,
      'queued',
    );
    const claim = (
      await app.inject({
        method: 'POST',
        url: '/api/worker/claim',
        headers: wh,
        payload: {},
      })
    ).json();
    assert.equal(claim.job.projectId, p.id);
    assert.equal(
      (
        await app.inject({
          method: 'POST',
          url: '/api/worker/claim',
          headers: wh,
          payload: {},
        })
      ).json().job,
      null,
    );
    const done = await app.inject({
      method: 'POST',
      url: '/api/worker/evidence',
      headers: wh,
      payload: { ...claim.job, evidence },
    });
    assert.equal(done.statusCode, 200);
    assert.equal(done.json().ok, true);
    assert.equal(calls, 1);
    const catalog = (await app.inject('/api/projects')).json();
    const generated = catalog.find((x) => x.id === p.id);
    assert.equal(generated.name, output.name);
    assert(!('generation' in generated));
    assert(!('repository' in generated));
    assert.equal((await app.inject(generated.screenshots[0])).statusCode, 200);
    const stale = await app.inject({
      method: 'PUT',
      url: '/api/admin/settings',
      headers,
      payload: saved,
    });
    assert.equal(stale.statusCode, 409);
    assert.equal(
      (
        await app.inject({
          method: 'POST',
          url: '/api/worker/evidence',
          headers: wh,
          payload: { ...claim.job, evidence },
        })
      ).statusCode,
      409,
    );
    const latest = (
      await app.inject({ url: '/api/admin/settings', headers })
    ).json();
    latest.projects.find((x) => x.id === p.id).published = false;
    assert.equal(
      (
        await app.inject({
          method: 'PUT',
          url: '/api/admin/settings',
          headers,
          payload: latest,
        })
      ).statusCode,
      200,
    );
    assert.equal((await app.inject(generated.screenshots[0])).statusCode, 404);
    const privateMedia =
      '/api/admin/media/' + generated.screenshots[0].split('/').at(-1);
    assert.equal((await app.inject(privateMedia)).statusCode, 401);
    assert.equal(
      (await app.inject({ url: privateMedia, headers })).statusCode,
      200,
    );
  } finally {
    await app.close();
    await rm(dir, { recursive: true, force: true });
  }
});
test('running jobs recover after restart; failed generations retain existing presentation', async () => {
  process.env.PRESENTATION_WORKER_KEY = 'test-worker-secret';
  const dir = await mkdtemp(join(tmpdir(), 'iyr-restart-'));
  let app = await createApp({
    dataDir: dir,
    verifyToken: async () => identity,
  });
  try {
    const saved = (
      await app.inject({ url: '/api/admin/settings', headers })
    ).json();
    const id = saved.projects[0].id;
    await app.inject({
      method: 'POST',
      url: `/api/admin/projects/${id}/generate`,
      headers,
      payload: { autoPublish: false },
    });
    await app.inject({
      method: 'POST',
      url: '/api/worker/claim',
      headers: wh,
      payload: {},
    });
    await app.close();
    app = await createApp({
      dataDir: dir,
      verifyToken: async () => identity,
      generate: async () => ({
        result: { ...output, screenshotIds: ['invented'] },
        model: 'test',
      }),
    });
    const claim = (
      await app.inject({
        method: 'POST',
        url: '/api/worker/claim',
        headers: wh,
        payload: {},
      })
    ).json();
    assert.equal(claim.job.projectId, id);
    const fail = (
      await app.inject({
        method: 'POST',
        url: '/api/worker/evidence',
        headers: wh,
        payload: { ...claim.job, evidence },
      })
    ).json();
    assert.equal(fail.ok, false);
    const after = (
      await app.inject({ url: '/api/admin/settings', headers })
    ).json().projects[0];
    assert.equal(after.generation.status, 'blocked');
    assert.equal(after.description, saved.projects[0].description);
    assert.deepEqual(after.screenshots, saved.projects[0].screenshots);
  } finally {
    await app.close();
    await rm(dir, { recursive: true, force: true });
  }
});
test('hierarchy rejects cycles and hidden children do not become independent public products', () => {
  assert.throws(() =>
    validateHierarchy([
      { id: 'a', parentId: 'b' },
      { id: 'b', parentId: 'a' },
    ]),
  );
  assert.throws(() => validateHierarchy([{ id: 'a', parentId: 'missing' }]));
  const p = [
    { id: 'a', published: true },
    { id: 'b', parentId: 'a', published: true },
    { id: 'c', parentId: 'a', published: false },
  ];
  assert.deepEqual(
    publicCatalog(p, (p) => ({ id: p.id })),
    [{ id: 'a', children: [{ id: 'b' }] }],
  );
  p[0].published = false;
  assert.deepEqual(
    publicCatalog(p, (p) => p),
    [],
  );
  assert.throws(() =>
    validatePresentation(
      { ...output, screenshotIds: ['fake'] },
      evidence,
      false,
    ),
  );
  assert.throws(() =>
    validatePresentation({ ...output, screenshotIds: [] }, evidence, false),
  );
});
test('copy editor proposes text without publishing until applied and preserves media and links', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'iyr-copy-'));
  let calls = 0;
  const app = await createApp({
    dataDir: dir,
    verifyToken: async () => identity,
    generate: async (e, p) => {
      calls++;
      assert.equal(p.generation.kind, 'rewrite');
      return {
        result: { description: 'Una propuesta más clara y cercana.' },
        model: 'test-editor',
      };
    },
  });
  try {
    const before = (
      await app.inject({ url: '/api/admin/settings', headers })
    ).json().projects[0];
    const started = await app.inject({
      method: 'POST',
      url: `/api/admin/projects/${before.id}/improve`,
      headers,
      payload: {},
    });
    assert.equal(started.statusCode, 200);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    const after = (
      await app.inject({ url: '/api/admin/settings', headers })
    ).json().projects[0];
    assert.equal(calls, 1);
    assert.equal(after.description, before.description);
    assert.equal(
      after.copySuggestion.description,
      'Una propuesta más clara y cercana.',
    );
    const applied = await app.inject({
      method: 'POST',
      url: `/api/admin/projects/${before.id}/apply-copy`,
      headers,
      payload: {},
    });
    assert.equal(applied.statusCode, 200);
    const p = applied.json().projects[0];
    assert.equal(p.description, after.copySuggestion.description);
    assert.deepEqual(p.screenshots, before.screenshots);
    assert.equal(p.demoUrl, before.demoUrl);
    assert(!p.copySuggestion);
  } finally {
    await app.close();
    await rm(dir, { recursive: true, force: true });
  }
});

test('rate limits use bounded delayed retries', async () => {
  const { failedGeneration } = await import('../presentation-agent.mjs');
  const e = Object.assign(Error('rate limit'), { status: 429 });
  const first = failedGeneration({}, e);
  assert.equal(first.status, 'queued');
  assert(Date.parse(first.retryAt) > Date.now() + 60000);
  assert.equal(failedGeneration({ retries: 2 }, e).status, 'blocked');
});

test('optional auxiliary suggestions cannot introduce unknown repositories', () => {
  const e = {
    ...evidence,
    related: [{ repository: 'owner/Watch', summary: 'companion' }],
  };
  const r = validatePresentation(
    {
      ...output,
      related: [
        {
          repository: 'owner/watch',
          name: 'Watch',
          description: 'Companion',
          kind: 'wearable',
        },
        { repository: 'invented/repo', name: 'Fake', description: 'Fake' },
      ],
    },
    e,
    false,
  );
  assert.deepEqual(
    r.related.map((x) => x.repository),
    ['owner/Watch'],
  );
});
