import Fastify from 'fastify';
import { randomUUID } from 'node:crypto';
import {
  installAgent,
  enqueue,
  active,
  validateHierarchy,
  publicCatalog,
} from './presentation-agent.mjs';
import fastifyStatic from '@fastify/static';
import rateLimit from '@fastify/rate-limit';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import { readFile, writeFile, rename, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = dirname(fileURLToPath(import.meta.url));
const publicProject = (p) =>
  Object.fromEntries(
    [
      'id',
      'name',
      'description',
      'category',
      'screenshots',
      'demoUrl',
      'modules',
      'iosUrl',
      'androidUrl',
      'kind',
    ].map((k) => [k, p[k]]),
  );
const keys = createRemoteJWKSet(
  new URL(
    'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com',
  ),
);
export function allowedIdentity(p) {
  return (
    p.email === 'romancanoniero@gmail.com' &&
    p.email_verified === true &&
    p.firebase?.sign_in_provider === 'google.com' &&
    typeof p.sub === 'string' &&
    p.sub.length > 0 &&
    p.sub.length <= 128 &&
    Number.isFinite(p.auth_time) &&
    p.auth_time <= Date.now() / 1000
  );
}
function safeUrl(s, hosts) {
  if (
    !hosts &&
    typeof s === 'string' &&
    /^\/projects\/[a-zA-Z0-9_./-]+$/.test(s) &&
    !s.includes('..')
  )
    return s;
  if (s === '') return s;
  if (typeof s !== 'string' || s.length > 2048) throw Error('URL inválida');
  const u = new URL(s);
  if (
    u.protocol !== 'https:' ||
    u.username ||
    u.password ||
    (hosts && !hosts.includes(u.hostname))
  )
    throw Error('Usá enlaces HTTPS válidos.');
  return u.href;
}
export function validateSettings(d) {
  if (!d || !Array.isArray(d.projects) || d.projects.length > 100)
    throw Error('Lista de proyectos inválida');
  const ids = new Set();
  const validated = {
    orchestratorUrl: safeUrl(d.orchestratorUrl),
    projects: d.projects.map((p) => {
      if (
        typeof p.id !== 'string' ||
        !/^[a-zA-Z0-9_-]{1,80}$/.test(p.id) ||
        ids.has(p.id)
      )
        throw Error('Proyecto inválido');
      ids.add(p.id);
      const text = (k, max) => {
        if (typeof p[k] !== 'string' || p[k].length > max)
          throw Error('Campo inválido: ' + k);
        return p[k].trim();
      };
      const name = text('name', 120),
        description = text('description', 3000);
      if (
        !name ||
        typeof p.published !== 'boolean' ||
        !Array.isArray(p.screenshots) ||
        p.screenshots.length > 12
      )
        throw Error('Completá los datos del proyecto');
      const screenshots = p.screenshots
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => safeUrl(s));
      if (p.published && (!description || (!p.parentId && !screenshots.length)))
        throw Error(
          'Para publicar, agregá una descripción y al menos una captura real.',
        );
      return {
        id: p.id,
        parentId: typeof p.parentId === 'string' ? p.parentId : '',
        kind: ['product', 'wearable', 'crm', 'backend', 'mobile'].includes(
          p.kind,
        )
          ? p.kind
          : 'product',
        name,
        description,
        repository: text('repository', 160),
        category: text('category', 80),
        published: p.published,
        screenshots,
        demoUrl: safeUrl(p.demoUrl),
        modules: (() => {
          if (
            p.modules !== undefined &&
            (!Array.isArray(p.modules) || p.modules.length > 12)
          )
            throw Error('Módulos inválidos');
          return (p.modules || [])
            .filter((m) => m.label || m.url)
            .map((m) => {
              if (
                typeof m.label !== 'string' ||
                !m.label.trim() ||
                m.label.length > 80 ||
                !m.url
              )
                throw Error('Completá el nombre y URL de cada módulo.');
              return { label: m.label.trim(), url: safeUrl(m.url) };
            });
        })(),
        privateUrl: safeUrl(p.privateUrl),
        iosUrl: safeUrl(p.iosUrl, ['apps.apple.com']),
        androidUrl: safeUrl(p.androidUrl, ['play.google.com']),
      };
    }),
  };
  validateHierarchy(validated.projects);
  return validated;
}
export async function createApp({
  dataDir = process.env.DATA_DIR || resolve(root, 'data'),
  firebaseProject = process.env.FIREBASE_PROJECT_ID || '',
  verifyToken,
  generate,
} = {}) {
  const app = Fastify({ logger: true, bodyLimit: 1000000 });
  await mkdir(dataDir, { recursive: true });
  const file = resolve(dataDir, 'settings.json');
  let settings;
  try {
    settings = JSON.parse(await readFile(file, 'utf8'));
  } catch (e) {
    if (e.code !== 'ENOENT') throw e;
    settings = JSON.parse(
      await readFile(resolve(root, 'data/settings.seed.json'), 'utf8'),
    );
  }
  let queue = Promise.resolve();
  const mutate = (change) => {
    const task = queue.then(async () => {
      const next = structuredClone(settings);
      change(next);
      if (JSON.stringify(next) === JSON.stringify(settings)) return settings;
      next.revision = (settings.revision || 0) + 1;
      await writeFile(file + '.tmp', JSON.stringify(next, null, 2), {
        mode: 0o600,
      });
      await rename(file + '.tmp', file);
      settings = next;
      return settings;
    });
    queue = task.catch(() => {});
    return task;
  };
  await app.register(rateLimit, { max: 120, timeWindow: '1 minute' });
  app.addHook('onSend', async (req, reply) => {
    reply.header('X-Content-Type-Options', 'nosniff');
    reply.header('Referrer-Policy', 'strict-origin-when-cross-origin');
    reply.header('X-Frame-Options', 'DENY');
    if (req.url.startsWith('/api/admin') || req.url.startsWith('/api/worker'))
      reply.header('Cache-Control', 'no-store');
  });
  app.get('/api/health', async () => ({ status: 'ok' }));
  app.get('/api/config', async () => ({
    firebase: firebaseProject
      ? {
          projectId: firebaseProject,
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          appId: process.env.FIREBASE_APP_ID,
        }
      : null,
  }));
  app.get('/api/projects', async () =>
    publicCatalog(settings.projects, publicProject),
  );
  const registerAgentAdmin = await installAgent({
    app,
    getSettings: () => settings,
    mutate,
    dataDir,
    generate,
  });
  await app.register(
    async (admin) => {
      admin.addHook('preHandler', async (req, reply) => {
        const token = req.headers.authorization?.match(/^Bearer (.+)$/)?.[1];
        if (!token)
          return reply.code(401).send({ message: 'Ingresá con Google.' });
        try {
          const payload = verifyToken
            ? await verifyToken(token)
            : (
                await jwtVerify(token, keys, {
                  issuer: 'https://securetoken.google.com/' + firebaseProject,
                  audience: firebaseProject,
                  algorithms: ['RS256'],
                  requiredClaims: ['exp', 'iat', 'auth_time', 'sub'],
                })
              ).payload;
          if ((!firebaseProject && !verifyToken) || !allowedIdentity(payload))
            throw Error();
        } catch {
          return reply.code(403).send({
            message: 'Esta cuenta no tiene acceso a la administración.',
          });
        }
      });
      admin.get('/settings', async () => settings);
      admin.put('/settings', async (req, reply) => {
        let next;
        try {
          next = validateSettings(req.body);
        } catch (e) {
          return reply.code(400).send({ message: e.message });
        }
        try {
          return await mutate((s) => {
            if ((req.body.revision || 0) !== (s.revision || 0))
              throw Error(
                'Hay una actualización del agente. Recargá los proyectos antes de guardar.',
              );
            for (const p of next.projects) {
              const previous = s.projects.find((q) => q.id === p.id);
              if (previous) {
                if (
                  active(previous.generation) &&
                  JSON.stringify(p) !==
                    JSON.stringify(
                      validateSettings({
                        orchestratorUrl: '',
                        projects: s.projects,
                      }).projects.find((q) => q.id === p.id),
                    )
                )
                  throw Error(
                    'Esperá a que termine la generación antes de editar ese proyecto.',
                  );
                p.generation = previous.generation;
                p.relatedSuggestions = previous.relatedSuggestions;
                p.copySuggestion = previous.copySuggestion;
              } else if (!p.published) enqueue(p, false);
            }
            Object.assign(s, next);
          });
        } catch (e) {
          return reply.code(409).send({ message: e.message });
        }
      });
      admin.post('/projects', async (req, reply) => {
        const r = req.body || {};
        if (
          !/^[\w.-]+\/[\w.-]+$/.test(r.repository || '') ||
          typeof r.autoPublish !== 'boolean'
        )
          return reply.code(400).send({ message: 'Repositorio inválido.' });
        try {
          return await mutate((s) => {
            if (
              s.projects.some(
                (p) =>
                  p.repository.toLowerCase() === r.repository.toLowerCase(),
              )
            )
              throw Error('El proyecto ya está agregado.');
            const p = {
              id: randomUUID(),
              name: r.repository.split('/')[1],
              repository: r.repository,
              description: '',
              category: '',
              published: false,
              screenshots: [],
              modules: [],
              demoUrl: '',
              iosUrl: '',
              androidUrl: '',
              privateUrl: '',
              parentId: r.parentId || '',
              kind: r.kind || 'product',
            };
            const checked = validateSettings({
              orchestratorUrl: s.orchestratorUrl,
              projects: [...s.projects, p],
            }).projects.at(-1);
            enqueue(checked, r.autoPublish);
            s.projects.push(checked);
          });
        } catch (e) {
          return reply.code(400).send({ message: e.message });
        }
      });
      registerAgentAdmin(admin);
      admin.get('/repositories', async () => {
        let seed = [];
        try {
          seed = JSON.parse(
            await readFile(
              resolve(root, 'data/repositories.seed.json'),
              'utf8',
            ),
          );
        } catch {}
        try {
          seed.push(
            ...JSON.parse(
              await readFile(
                resolve(dataDir, 'repository-catalog.json'),
                'utf8',
              ),
            ),
          );
        } catch {}
        const found = new Map(seed.map((r) => [r.full_name, r]));
        const headers = {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'improvingyourreality',
        };
        if (process.env.GITHUB_TOKEN)
          headers.Authorization = 'Bearer ' + process.env.GITHUB_TOKEN;
        for (let page = 1; page <= 10; page++) {
          const url = process.env.GITHUB_TOKEN
            ? `https://api.github.com/user/repos?per_page=100&page=${page}`
            : `https://api.github.com/users/romancanoniero/repos?per_page=100&page=${page}`;
          try {
            const r = await fetch(url, {
              headers,
              signal: AbortSignal.timeout(10000),
            });
            if (!r.ok) {
              if (found.size) break;
              throw Error('GitHub no está disponible');
            }
            const rows = await r.json();
            for (const p of rows)
              found.set(p.full_name, {
                name: p.name,
                full_name: p.full_name,
                description: p.description || '',
              });
            if (rows.length < 100) break;
          } catch (e) {
            if (!found.size) throw e;
            break;
          }
        }
        return [...found.values()].sort((a, b) => a.name.localeCompare(b.name));
      });
    },
    { prefix: '/api/admin' },
  );
  if (process.env.NODE_ENV === 'production') {
    await app.register(fastifyStatic, { root: resolve(root, 'dist') });
    app.setNotFoundHandler((req, reply) =>
      req.url.startsWith('/api/')
        ? reply.code(404).send({ message: 'No encontrado' })
        : reply.sendFile('index.html'),
    );
  }
  return app;
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const app = await createApp();
  await app.listen({
    host: process.env.HOST || '127.0.0.1',
    port: Number(process.env.PORT || 3180),
  });
}
