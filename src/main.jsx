import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
const Brand = () => (
  <a className="brand" href="/">
    <span className="brandmark">
      iyr<span>®</span>
    </span>
    <span>
      improving
      <br />
      your reality
    </span>
  </a>
);
function App() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    fetch('/api/projects')
      .then((r) => {
        if (!r.ok) throw Error();
        return r.json();
      })
      .then(setProjects)
      .catch(() =>
        setError(
          'No pudimos cargar los proyectos. Volvé a intentarlo en unos minutos.',
        ),
      );
  }, []);
  return (
    <>
      <header>
        <Brand />
        <nav>
          <a href="/#nosotros">Nosotros</a>
          <a href="/#proyectos">Proyectos</a>
          <a href="/demos">Demos</a>
        </nav>
        <a className="admin-link" href="/admin">
          Acceso privado <span>↗</span>
        </a>
      </header>
      {location.pathname.startsWith('/admin') ? (
        <Admin />
      ) : (
        <>
          <main>
            <section className="hero">
              <div className="eyebrow">ESTUDIO DE PRODUCTOS DIGITALES</div>
              <h1>
                Buenas ideas.
                <br />
                Una realidad <em>mejor.</em>
              </h1>
              <div className="hero-bottom">
                <p>
                  Diseñamos tecnología que se siente humana.
                  <br />
                  Aplicaciones que conectan personas, simplifican
                  <br className="desktop" /> lo cotidiano y abren nuevas
                  posibilidades.
                </p>
                <a className="round-link" href="#proyectos">
                  Explorá nuestros proyectos <span>↓</span>
                </a>
              </div>
              <div className="palette-line">
                <i />
                <i />
                <i />
                <i />
              </div>
            </section>
            <section className="intro" id="nosotros">
              <span className="eyebrow">NUESTRA MIRADA</span>
              <h2>
                Lo digital tiene sentido
                <br />
                cuando mejora <em>lo real.</em>
              </h2>
              <p>
                Improving Your Reality es un espacio de creación de productos
                digitales. Partimos de las personas y de sus necesidades para
                transformar ideas en experiencias claras, útiles y cercanas.
              </p>
            </section>
            <section className="projects" id="proyectos">
              <div className="section-title">
                <div>
                  <span className="eyebrow">IDEAS EN MOVIMIENTO</span>
                  <h2>
                    {location.pathname === '/demos'
                      ? 'Probá una nueva posibilidad.'
                      : 'Nuestros proyectos.'}
                  </h2>
                </div>
                <span className="muted">Web · iOS · Android</span>
              </div>
              {error ? (
                <p role="alert">{error}</p>
              ) : projects.length ? (
                projects.map((p, i) => <Project key={p.id} p={p} i={i} />)
              ) : (
                <div className="empty">
                  <h3>Estamos preparando lo que viene.</h3>
                  <p>
                    Pronto vas a poder conocer nuestros proyectos y explorar sus
                    demos.
                  </p>
                </div>
              )}
            </section>
            <section className="closing">
              <span className="eyebrow">IMPROVING YOUR REALITY</span>
              <h2>
                La próxima buena idea
                <br />
                empieza en <em>la vida real.</em>
              </h2>
            </section>
          </main>
        </>
      )}
      <footer>
        <Brand />
        <span>Tecnología con una mirada humana.</span>
        <small>© {new Date().getFullYear()} Improving Your Reality</small>
      </footer>
    </>
  );
}
const PLATFORMS = [
  {
    id: 'androidtv',
    name: 'Android TV',
    match: /android\s*-?tv/i,
    icon: (
      <>
        <rect
          x="2"
          y="4"
          width="20"
          height="13"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M8 21h8" stroke="currentColor" strokeWidth="1.8" />
        <path
          fillRule="evenodd"
          d="M6.5 15a5.5 5.5 0 0 1 11 0zM9.1 12.9a.85.85 0 1 0 1.7 0a.85.85 0 1 0-1.7 0zM13.2 12.9a.85.85 0 1 0 1.7 0a.85.85 0 1 0-1.7 0z"
        />
      </>
    ),
  },
  {
    id: 'mac',
    name: 'Mac',
    match: /\.dmg\b|\.pkg\b|\bmac(os)?\b/i,
    icon: (
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    ),
  },
  {
    id: 'windows',
    name: 'Windows',
    match: /\.exe\b|\.msi\b|\bwindows\b/i,
    icon: (
      <path d="M0 3.449 9.75 2.1v9.451H0zm10.949-1.606L24 0v11.4H10.949zM0 12.6h9.75v9.451L0 20.699zm10.949 0H24V24l-12.9-1.801z" />
    ),
  },
  {
    id: 'android',
    name: 'Android',
    match: /\.apk\b|\bandroid\b/i,
    icon: (
      <>
        <path
          d="M5.4 6.2l2.3 4.4M18.6 6.2l-2.3 4.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          d="M2 20a10 10 0 0 1 20 0zM7 15.6a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0zM14.4 15.6a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0z"
        />
      </>
    ),
  },
];
const platformOf = (m) =>
  PLATFORMS.find((x) => x.match.test(m.label + ' ' + m.url));
function Platforms({ modules }) {
  if (!modules.length) return null;
  return (
    <div className="platforms">
      <h4>Reproductor disponible en</h4>
      <div>
        {modules.map(({ m, platform }) => (
          <a
            key={m.url}
            className={'platform platform-' + platform.id}
            href={m.url}
            target="_blank"
            rel="noreferrer"
            title={m.label}
            aria-label={m.label}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              {platform.icon}
            </svg>
            <span>{platform.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
function Project({ p, i }) {
  const modules = (p.modules || []).map((m) => ({ m, platform: platformOf(m) }));
  return (
    <article className={'project tone-' + (i % 3)}>
      <div className="project-art">
        {p.screenshots?.length ? (
          <div className="screens">
            {p.screenshots.slice(0, 3).map((s, n) => (
              <img
                key={s}
                src={s}
                alt={`${p.name}, pantalla ${n + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        ) : (
          <span className="project-wordmark">{p.name}</span>
        )}
      </div>
      <div className="project-info">
        <span className="eyebrow">{p.category || 'PRODUCTO DIGITAL'}</span>
        <h3>{p.name}</h3>
        <p>{p.description}</p>
        {!!p.children?.length && (
          <div className="ecosystem">
            <h4>Un mismo ecosistema</h4>
            {p.children.map((c) => (
              <div key={c.id}>
                <strong>{c.name}</strong>
                <p>{c.description}</p>
                {c.demoUrl && (
                  <a href={c.demoUrl} target="_blank" rel="noreferrer">
                    Explorar módulo ↗
                  </a>
                )}
                {c.iosUrl && (
                  <a href={c.iosUrl} target="_blank" rel="noreferrer">
                    App Store ↗
                  </a>
                )}
                {c.androidUrl && (
                  <a href={c.androidUrl} target="_blank" rel="noreferrer">
                    Google Play ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="links">
          {p.demoUrl && (
            <a
              className="button"
              href={p.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Explorar demo ↗
            </a>
          )}
          {modules
            .filter((x) => !x.platform)
            .map(({ m }) => (
              <a key={m.url} href={m.url} target="_blank" rel="noreferrer">
                {m.label} ↗
              </a>
            ))}
          {p.iosUrl && (
            <a href={p.iosUrl} target="_blank" rel="noreferrer">
              App Store ↗
            </a>
          )}
          {p.androidUrl && (
            <a href={p.androidUrl} target="_blank" rel="noreferrer">
              Google Play ↗
            </a>
          )}
        </div>
        <Platforms modules={modules.filter((x) => x.platform)} />
      </div>
    </article>
  );
}
function ScreensPreview({ screenshots, user }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    let stopped = false;
    const temporary = [];
    Promise.all(
      screenshots.filter(Boolean).map(async (src) => {
        if (!src.startsWith('/projects/generated/')) return src;
        const token = await user.getIdToken();
        const r = await fetch('/api/admin/media/' + src.split('/').at(-1), {
          headers: { Authorization: 'Bearer ' + token },
        });
        if (!r.ok) return null;
        const url = URL.createObjectURL(await r.blob());
        if (stopped) {
          URL.revokeObjectURL(url);
          return null;
        }
        temporary.push(url);
        return url;
      }),
    )
      .then((rows) => {
        if (!stopped) setImages(rows.filter(Boolean));
      })
      .catch(() => {
        if (!stopped) setImages([]);
      });
    return () => {
      stopped = true;
      temporary.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [screenshots.join('\n'), user]);
  return images.length ? (
    <div className="admin-screens">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={'Vista previa de la captura ' + (i + 1)}
        />
      ))}
    </div>
  ) : null;
}
function Admin() {
  const [user, setUser] = useState(null),
    [auth, setAuth] = useState(null),
    [status, setStatus] = useState(''),
    [ready, setReady] = useState(false),
    [data, setData] = useState(null),
    [repos, setRepos] = useState([]),
    [tab, setTab] = useState('projects'),
    [busy, setBusy] = useState(false),
    [agent, setAgent] = useState(null),
    [dirty, setDirty] = useState(false),
    [parentId, setParentId] = useState(''),
    [autoPublish, setAutoPublish] = useState(true);
  useEffect(() => {
    let stop;
    fetch('/api/config')
      .then((r) => r.json())
      .then(async (c) => {
        if (!c.firebase?.apiKey) {
          setStatus(
            'El acceso privado estará disponible cuando termine la configuración de Google.',
          );
          return;
        }
        const { initializeApp } = await import('firebase/app');
        const { getAuth, onAuthStateChanged } = await import('firebase/auth');
        const a = getAuth(initializeApp(c.firebase));
        setAuth(a);
        stop = onAuthStateChanged(a, async (u) => {
          setUser(u);
          setReady(true);
          if (u) {
            try {
              const r = await fetch('/api/admin/settings', {
                headers: { Authorization: 'Bearer ' + (await u.getIdToken()) },
              });
              if (!r.ok)
                throw Error('Esta cuenta no tiene acceso a la administración.');
              setData(await r.json());
              setStatus('');
            } catch (e) {
              setStatus(e.message);
              setData(null);
            }
          } else setData(null);
        });
      })
      .catch(() =>
        setStatus('No se pudo iniciar el acceso. Recargá la página.'),
      );
    return () => stop?.();
  }, []);
  async function api(path, method = 'GET', body) {
    const r = await fetch('/api/admin/' + path, {
      method,
      headers: {
        Authorization: 'Bearer ' + (await user.getIdToken()),
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const result = await r.json();
    if (!r.ok)
      throw Error(result.message || 'No se pudo completar la operación.');
    return result;
  }
  async function login() {
    try {
      setBusy(true);
      const { signInWithPopup, GoogleAuthProvider } =
        await import('firebase/auth');
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch {
      setStatus(
        'No se pudo completar el ingreso con Google. Intentá nuevamente.',
      );
    } finally {
      setBusy(false);
    }
  }
  useEffect(() => {
    if (!user || !data || !document.modelContext?.registerTool) return;
    const lifecycle = new AbortController();
    Promise.resolve(
      document.modelContext.registerTool(
        {
          name: 'list_admin_projects',
          description: 'List saved projects for the signed-in administrator.',
          inputSchema: {
            type: 'object',
            properties: {},
            additionalProperties: false,
          },
          annotations: { readOnlyHint: true, untrustedContentHint: true },
          execute: async (input) => {
            if (Object.keys(input || {}).length)
              throw Error('No arguments expected');
            const saved = await api('settings');
            return saved.projects.map((p) => ({
              id: p.id,
              name: p.name,
              published: p.published,
            }));
          },
        },
        { signal: lifecycle.signal },
      ),
    ).catch(() => {});
    return () => lifecycle.abort();
  }, [user, data]);
  async function save(e) {
    e.preventDefault();
    try {
      setBusy(true);
      setData(await api('settings', 'PUT', data));
      setDirty(false);
      setStatus('Cambios guardados. La selección pública ya está actualizada.');
    } catch (e) {
      setStatus(e.message);
    } finally {
      setBusy(false);
    }
  }
  async function loadRepos() {
    try {
      setBusy(true);
      setRepos(await api('repositories'));
      setStatus('');
    } catch (e) {
      setStatus(e.message);
    } finally {
      setBusy(false);
    }
  }
  useEffect(() => {
    if (!user || !data) return;
    let stopped = false;
    const poll = async () => {
      try {
        const a = await api('agent');
        if (!stopped) setAgent(a);
      } catch {}
    };
    poll();
    const timer = setInterval(poll, 5000);
    return () => {
      stopped = true;
      clearInterval(timer);
    };
  }, [user, !!data]);
  async function reload() {
    if (dirty) {
      setStatus(
        'Guardá tus cambios antes de cargar los resultados del agente.',
      );
      return;
    }
    try {
      setData(await api('settings'));
      setStatus('Proyectos actualizados.');
    } catch (e) {
      setStatus(e.message);
    }
  }
  async function addProject(repository, parent = parentId, kind = 'product') {
    if (dirty) {
      setStatus('Guardá tus cambios antes de agregar un proyecto.');
      return;
    }
    try {
      setBusy(true);
      await api('projects', 'POST', {
        repository,
        parentId: parent,
        kind,
        autoPublish: parent ? false : autoPublish,
      });
      await reload();
      setStatus(
        'Proyecto agregado. El agente generará su presentación automáticamente.',
      );
    } catch (e) {
      setStatus(e.message);
    } finally {
      setBusy(false);
    }
  }
  async function generateProject(p) {
    if (dirty) {
      setStatus('Guardá tus cambios antes de generar una presentación.');
      return;
    }
    try {
      setBusy(true);
      setData(
        await api('projects/' + p.id + '/generate', 'POST', {
          autoPublish: p.parentId ? false : autoPublish,
        }),
      );
      setStatus(
        'Tarea enviada al agente. Podés cerrar esta página; el proceso continúa.',
      );
    } catch (e) {
      setStatus(e.message);
    } finally {
      setBusy(false);
    }
  }
  async function improveCopy(p) {
    try {
      setBusy(true);
      if (dirty) {
        const saved = await api('settings', 'PUT', data);
        setData(saved);
        setDirty(false);
      }
      setData(await api('projects/' + p.id + '/improve', 'POST', {}));
      setStatus(
        'El agente preparará una propuesta de redacción para que la revises.',
      );
    } catch (e) {
      setStatus(e.message);
    } finally {
      setBusy(false);
    }
  }
  async function applyCopy(p) {
    if (dirty) {
      setStatus('Guardá tus cambios antes de aplicar la propuesta.');
      return;
    }
    try {
      setBusy(true);
      setData(await api('projects/' + p.id + '/apply-copy', 'POST', {}));
      setStatus('Nueva redacción aplicada.');
    } catch (e) {
      setStatus(e.message);
    } finally {
      setBusy(false);
    }
  }
  function update(id, key, value) {
    setDirty(true);
    setData({
      ...data,
      projects: data.projects.map((p) =>
        p.id === id ? { ...p, [key]: value } : p,
      ),
    });
  }
  if (!data)
    return (
      <main className="login">
        <span className="eyebrow">TU ESPACIO DE TRABAJO</span>
        <h1>
          Bienvenido
          <br />
          <em>a tu realidad.</em>
        </h1>
        <p>
          Ingresá con tu cuenta de Google para administrar
          <br />
          los proyectos y la presentación del estudio.
        </p>
        <button className="button" disabled={!auth || busy} onClick={login}>
          G · Continuar con Google
        </button>
        {status && <p role="status">{status}</p>}
        {user && (
          <button onClick={() => auth.signOut()}>Usar otra cuenta</button>
        )}
      </main>
    );
  return (
    <main className="workspace">
      <aside>
        <span className="eyebrow">ADMINISTRACIÓN</span>
        <h2>Tu estudio.</h2>
        <button
          className={tab === 'projects' ? 'active' : ''}
          onClick={() => setTab('projects')}
        >
          Proyectos
        </button>
        <button
          className={tab === 'settings' ? 'active' : ''}
          onClick={() => {
            setTab('settings');
            loadRepos();
          }}
        >
          Settings
        </button>
        {data.orchestratorUrl && (
          <a href={data.orchestratorUrl} target="_blank" rel="noreferrer">
            Abrir orquestador ↗
          </a>
        )}
        <small>{user.email}</small>
        <button onClick={() => auth.signOut()}>Cerrar sesión</button>
      </aside>
      <form onSubmit={save} className="workspace-content">
        <div className="section-title">
          <h2>{tab === 'projects' ? 'Tus proyectos' : 'Settings'}</h2>
          <button className="button" disabled={busy}>
            Guardar cambios
          </button>
        </div>
        {status && (
          <p role="status" className="notice">
            {status}
          </p>
        )}
        <div className="agent-summary">
          <strong>Agente de presentaciones</strong>
          <p>
            {agent?.workerOnline
              ? 'Servicio de capturas conectado.'
              : 'Esperando conexión de DEV_MAC. Las tareas pendientes se retomarán al conectarse.'}
          </p>
          <label className="inline">
            <input
              type="checkbox"
              checked={autoPublish}
              onChange={(e) => setAutoPublish(e.target.checked)}
            />{' '}
            Publicar automáticamente las nuevas presentaciones de proyectos
            principales
          </label>
          <button type="button" onClick={reload} disabled={busy}>
            Actualizar resultados
          </button>
          {dirty && (
            <button
              type="button"
              onClick={async () => {
                try {
                  setData(await api('settings'));
                  setDirty(false);
                  setStatus('Se cargó la última versión guardada.');
                } catch (e) {
                  setStatus(e.message);
                }
              }}
            >
              Descartar cambios sin guardar
            </button>
          )}
        </div>
        {tab === 'settings' ? (
          <>
            <label>
              Acceso al orquestador
              <input
                type="url"
                value={data.orchestratorUrl}
                onChange={(e) => (
                  setDirty(true),
                  setData({ ...data, orchestratorUrl: e.target.value })
                )}
              />
            </label>
            <h3>Proyectos de GitHub</h3>
            <p>
              Al agregar un repositorio, el agente busca documentación y
              capturas reales y genera su presentación. Los módulos se agrupan
              bajo su proyecto principal.
            </p>
            <button type="button" disabled={busy} onClick={loadRepos}>
              Actualizar repositorios
            </button>
            <label>
              Proyecto principal
              <select
                value={parentId}
                onChange={(e) => setParentId(e.target.value)}
              >
                <option value="">Proyecto independiente</option>
                {data.projects
                  .filter((p) => !p.parentId)
                  .map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
              </select>
            </label>
            <p className="muted">
              Los auxiliares se generan como borradores. Elegí cuáles mostrar
              dentro del producto; los CRM y backends pueden permanecer
              privados.
            </p>
            <div className="repo-list">
              {repos.map((r) => (
                <div key={r.full_name}>
                  <span>{r.full_name}</span>
                  <button
                    type="button"
                    disabled={
                      busy ||
                      data.projects.some((p) => p.repository === r.full_name)
                    }
                    onClick={() => addProject(r.full_name)}
                  >
                    {data.projects.some((p) => p.repository === r.full_name)
                      ? 'Agregado'
                      : 'Agregar'}
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : data.projects.length ? (
          data.projects.map((p) => (
            <section className="edit-card" key={p.id}>
              <div className="section-title">
                <h3>{p.name}</h3>
                <label className="inline">
                  <input
                    type="checkbox"
                    checked={p.published}
                    onChange={(e) =>
                      update(p.id, 'published', e.target.checked)
                    }
                  />{' '}
                  Mostrar en el sitio
                </label>
              </div>
              <span className="muted">{p.repository}</span>
              <div className="generation-status" role="status">
                {(() => {
                  const g =
                    agent?.jobs.find((j) => j.projectId === p.id)?.generation ||
                    p.generation;
                  return g ? (
                    <>
                      <strong>
                        {
                          {
                            queued: 'En espera',
                            collecting: 'Reuniendo evidencia',
                            generating: 'Generando con IA',
                            ready: 'Presentación lista',
                            blocked: 'Requiere atención',
                          }[g.status]
                        }
                      </strong>
                      <p>{g.message}</p>
                      {g.status === 'ready' && (
                        <button type="button" onClick={reload}>
                          Ver resultado del agente
                        </button>
                      )}
                    </>
                  ) : (
                    <p>Todavía no se generó una presentación con el agente.</p>
                  );
                })()}
                <button
                  type="button"
                  disabled={
                    busy ||
                    ['queued', 'collecting', 'generating'].includes(
                      (
                        agent?.jobs.find((j) => j.projectId === p.id)
                          ?.generation || p.generation
                      )?.status,
                    )
                  }
                  onClick={() => generateProject(p)}
                >
                  Generar presentación con IA
                </button>
              </div>
              <label>
                Parte de
                <select
                  value={p.parentId || ''}
                  onChange={(e) => update(p.id, 'parentId', e.target.value)}
                >
                  <option value="">Proyecto independiente</option>
                  {data.projects
                    .filter((q) => q.id !== p.id && !q.parentId)
                    .map((q) => (
                      <option key={q.id} value={q.id}>
                        {q.name}
                      </option>
                    ))}
                </select>
              </label>
              <label>
                Tipo de proyecto
                <select
                  value={p.kind || 'product'}
                  onChange={(e) => update(p.id, 'kind', e.target.value)}
                >
                  {[
                    ['product', 'Producto'],
                    ['wearable', 'Reloj / wearable'],
                    ['crm', 'CRM'],
                    ['backend', 'Backend'],
                    ['mobile', 'Aplicación auxiliar'],
                  ].map(([v, l]) => (
                    <option key={v} value={v}>
                      {l}
                    </option>
                  ))}
                </select>
              </label>
              {!!p.relatedSuggestions?.length && (
                <div className="related-suggestions">
                  <h4>Auxiliares detectados por el agente</h4>
                  {p.relatedSuggestions.map((r) => (
                    <div key={r.repository}>
                      <strong>{r.name}</strong>
                      <p>{r.description}</p>
                      <button
                        type="button"
                        disabled={
                          busy ||
                          data.projects.some(
                            (q) => q.repository === r.repository,
                          )
                        }
                        onClick={() => addProject(r.repository, p.id, r.kind)}
                      >
                        {data.projects.some(
                          (q) => q.repository === r.repository,
                        )
                          ? 'Ya agregado'
                          : 'Agregar dentro de ' + p.name}
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="fields">
                {[
                  ['name', 'Nombre'],
                  ['category', 'Categoría'],
                  ['demoUrl', 'Demo web'],
                  ['iosUrl', 'Ficha de App Store'],
                  ['androidUrl', 'Ficha de Google Play'],
                  ['privateUrl', 'Acceso privado al proyecto'],
                ].map(([k, l]) => (
                  <label key={k}>
                    {l}
                    <input
                      type={k.endsWith('Url') ? 'url' : 'text'}
                      value={p[k]}
                      onChange={(e) => update(p.id, k, e.target.value)}
                    />
                  </label>
                ))}
              </div>
              <label>
                Descripción
                <textarea
                  rows="3"
                  value={p.description}
                  onChange={(e) => update(p.id, 'description', e.target.value)}
                />
              </label>
              <button
                type="button"
                disabled={
                  busy ||
                  !p.description.trim() ||
                  ['queued', 'collecting', 'generating'].includes(
                    (
                      agent?.jobs.find((j) => j.projectId === p.id)
                        ?.generation || p.generation
                    )?.status,
                  )
                }
                onClick={() => improveCopy(p)}
              >
                Mejorar redacción con IA
              </button>
              {p.copySuggestion && (
                <div className="generation-status">
                  <strong>Propuesta de redacción</strong>
                  <p>{p.copySuggestion.description}</p>
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => applyCopy(p)}
                  >
                    Aplicar esta redacción
                  </button>
                </div>
              )}
              <label>
                Módulos web (nombre | URL, uno por línea)
                <textarea
                  rows="3"
                  value={(p.modules || [])
                    .map((m) => m.label + ' | ' + m.url)
                    .join('\n')}
                  onChange={(e) =>
                    update(
                      p.id,
                      'modules',
                      e.target.value.split('\n').map((line) => {
                        const [label, ...url] = line.split('|');
                        return {
                          label: label.trim(),
                          url: url.join('|').trim(),
                        };
                      }),
                    )
                  }
                />
              </label>
              <label>
                Capturas de pantalla (una URL por línea)
                <textarea
                  rows="3"
                  value={p.screenshots.join('\n')}
                  onChange={(e) =>
                    update(p.id, 'screenshots', e.target.value.split('\n'))
                  }
                />
              </label>
              <ScreensPreview screenshots={p.screenshots} user={user} />
              <div className="links">
                {p.privateUrl && (
                  <a href={p.privateUrl} target="_blank" rel="noreferrer">
                    Abrir proyecto ↗
                  </a>
                )}
                {p.demoUrl && (
                  <a href={p.demoUrl} target="_blank" rel="noreferrer">
                    Abrir demo ↗
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setTab('settings');
                    loadRepos();
                  }}
                >
                  Agregar otro proyecto
                </button>
              </div>
            </section>
          ))
        ) : (
          <div className="empty">
            <h3>Tu próximo proyecto empieza acá.</h3>
            <button
              type="button"
              onClick={() => {
                setTab('settings');
                loadRepos();
              }}
            >
              Seleccionar desde GitHub
            </button>
          </div>
        )}
      </form>
    </main>
  );
}
createRoot(document.getElementById('root')).render(<App />);
