const PIELES = {
  nocturna: {
    id: 'nocturna',
    fondo: '#1A1430', sectorA: '#241c3d', sectorB: '#141028', acento: '#FF3D8B',
    info: '#22E0E6', texto: '#F5F6FA', colores: ['#FF3D8B', '#22E0E6', '#9BE85A', '#FFB648'],
    fotoHueco: '#2c3142', fuente: '700 13px system-ui, sans-serif',
    sellos: { ruleta: 'Ruleta', votacion: 'Votación', mensaje: 'Mensaje', match: 'Match' },
    rueda: 'neon',
    mascota: 'voltio',
    efectos: {
      fondo: 'fx-fondo-neon', ambiente: 'fx-ambiente-neon', marco: 'fx-marco-neon',
      sello: 'fx-sello-neon', foto: 'fx-foto-circulo', globo: 'fx-globo-neon',
      impacto: 'fx-impacto-flash', entrada: 'fx-entrada-scale',
      apila: 'fx-apila-neon', rechazo: 'fx-rechazo-neon', ficha: 'fx-ficha-neon', lienzo: 'fx-lienzo-neon',
      sonidos: { clic: 'neon-clic', exito: 'neon-exito', decepcion: 'neon-decepcion' },
      particulas: { formas: ['recto', 'redondo', 'chispa'], colores: ['#FF3D8B', '#22E0E6', '#9BE85A', '#FFB648', '#F5F6FA'], cantidad: 40 },
      giro: { papel: false, trama: false, lineas: false, vineta: false },
      objetos: [
        { id: 'destello', clase: 'fx-obj-destello', en: ['match', 'ruleta'] },
        { id: 'halo', clase: 'fx-obj-halo', en: ['votacion', 'mensaje'] },
      ],
    },
  },
  manga: {
    id: 'manga',
    fondo: '#E8D4A8', sectorA: '#FFF6DC', sectorB: '#C4A86A', acento: '#C41E3A',
    info: '#111111', texto: '#111111', colores: ['#111111', '#C41E3A', '#111111', '#1F4E79'],
    fotoHueco: '#B89A5C', fuente: '700 19px Kalam, "Zen Maru Gothic", sans-serif',
    sellos: { ruleta: 'Ruleta', votacion: 'Votación', mensaje: 'Mensaje', match: 'Match' },
    rueda: 'tinta',
    mascota: 'sumi',
    efectos: {
      fondo: 'fx-fondo-papel', ambiente: 'fx-ambiente-lineas', marco: 'fx-marco-tinta',
      sello: 'fx-sello-hanko', foto: 'fx-foto-circulo', globo: 'fx-globo-fukidashi',
      impacto: 'fx-impacto-don', entrada: 'fx-entrada-slam',
      apila: 'fx-apila-tinta', rechazo: 'fx-rechazo-tinta', ficha: 'fx-ficha-tinta', lienzo: 'fx-lienzo-tinta',
      sonidos: { clic: 'taiko-clic', exito: 'don-exito', decepcion: 'shamisen-decepcion' },
      particulas: { formas: ['sakura', 'sello', 'tinta'], colores: ['#C41E3A', '#F4A7BB', '#1A1A1A', '#FBF3DC', '#2E5A88'], cantidad: 40 },
      giro: { papel: true, trama: true, lineas: true, vineta: false },
      objetos: [
        { id: 'onoma', clase: 'fx-obj-don', texto: 'ドン', en: ['match'] },
        { id: 'trama', clase: 'fx-obj-trama', en: ['ruleta', 'votacion', 'mensaje', 'match'] },
      ],
    },
  },
  meteoro: {
    id: 'meteoro',
    fondo: '#1A1A1A', sectorA: '#E31C23', sectorB: '#FFD100', acento: '#E31C23',
    info: '#FFFFFF', texto: '#111111', colores: ['#FFFFFF', '#1E4B9C', '#FFFFFF', '#111111'],
    fotoHueco: '#3a3a3a', fuente: 'italic 800 23px "Barlow Condensed", Impact, sans-serif',
    sellos: { ruleta: 'GO!', votacion: 'GRID', mensaje: 'RADIO', match: 'FINISH', cierre: 'FINISH' },
    rueda: 'llanta',
    mascota: 'turbo',
    efectos: {
      fondo: 'fx-fondo-pista', ambiente: 'fx-ambiente-velocidad', marco: 'fx-marco-carrera',
      sello: 'fx-sello-go', foto: 'fx-foto-circulo', globo: 'fx-globo-carrera',
      impacto: 'fx-impacto-turbo', entrada: 'fx-entrada-zoom',
      apila: 'fx-apila-carrera', rechazo: 'fx-rechazo-carrera', ficha: 'fx-ficha-carrera', lienzo: 'fx-lienzo-carrera',
      sonidos: { clic: 'motor-clic', exito: 'motor-exito', decepcion: 'motor-decepcion' },
      particulas: { formas: ['bandera', 'raya', 'chispa'], colores: ['#E31C23', '#FFD100', '#FFFFFF', '#1E4B9C', '#111111'], cantidad: 48 },
      giro: { papel: false, trama: false, lineas: true, vineta: false },
      objetos: [
        { id: 'rayas', clase: 'fx-obj-rayas', en: ['ruleta', 'votacion', 'mensaje', 'match'] },
        { id: 'bandera', clase: 'fx-obj-bandera', en: ['ruleta', 'votacion'] },
        { id: 'go', clase: 'fx-obj-go', texto: 'GO!', en: ['match'] },
      ],
    },
  },
  doraemon: {
    id: 'doraemon',
    fondo: '#7EC8E8', sectorA: '#2BA4D9', sectorB: '#FFFFFF', acento: '#E31C23',
    info: '#1A4A73', texto: '#1A4A73', colores: ['#F5C518', '#E31C23', '#2BA4D9', '#FFFFFF'],
    fotoHueco: '#5BB3D9', fuente: '800 14px "Zen Maru Gothic", "Comic Sans MS", sans-serif',
    sellos: { ruleta: 'ポン', votacion: 'どちら', mensaje: 'もしもし', match: '大好き' },
    efectos: {
      fondo: 'fx-fondo-cielo', ambiente: 'fx-ambiente-nubes', marco: 'fx-marco-globo',
      sello: 'fx-sello-cascabel', foto: 'fx-foto-circulo', globo: 'fx-globo-redondo',
      impacto: 'fx-impacto-destello', entrada: 'fx-entrada-rebote',
      apila: 'fx-apila-cielo', rechazo: 'fx-rechazo-cielo', ficha: 'fx-ficha-cielo', lienzo: 'fx-lienzo-cielo',
      sonidos: { clic: 'campana-clic', exito: 'campana-exito', decepcion: 'campana-decepcion' },
      particulas: { formas: ['nube', 'estrella', 'cascabel'], colores: ['#2BA4D9', '#FFFFFF', '#F5C518', '#E31C23', '#87CEEB'], cantidad: 40 },
      giro: { papel: false, trama: false, lineas: false, vineta: false },
      objetos: [
        { id: 'nubesfx', clase: 'fx-obj-nubes', en: ['ruleta', 'votacion', 'mensaje', 'match'] },
        { id: 'helice', clase: 'fx-obj-helice', en: ['ruleta', 'match'] },
        { id: 'gatoazul', clase: 'fx-obj-gatoazul', en: ['ruleta', 'votacion', 'mensaje', 'match'] },
        { id: 'estrellas', clase: 'fx-obj-estrellas', en: ['ruleta', 'votacion', 'mensaje', 'match'] },
      ],
    },
  },
};

function pielDe(id) {
  return PIELES[String(id || '').toLowerCase()] || PIELES.nocturna;
}

const AJUSTES_CLAVE = 'fonobar_entretenimiento_ajustes_piel';
const OBJETO_NOMBRES = {
  destello: 'Destello', halo: 'Halo', onoma: 'Don', trama: 'Trama', bandera: 'Bandera',
  go: 'GO!', rayas: 'Rayas', nubesfx: 'Nubes', helice: 'Hélice', gatoazul: 'Gadget', estrellas: 'Estrellas',
  mascota: 'Mascota',
};

function ajustesPorDefecto(id) {
  const objetos = {};
  for (const objeto of pielDe(id).efectos.objetos || []) objetos[objeto.id] = true;
  if (pielDe(id).mascota) objetos.mascota = true;
  return { sonido: true, efectos: true, objetos };
}

function leerMapaAjustes() {
  try {
    const crudo = JSON.parse(localStorage.getItem(AJUSTES_CLAVE) || '{}');
    return crudo && typeof crudo === 'object' ? crudo : {};
  } catch {
    return {};
  }
}

let pielesServidor = {};

function ajustesDe(id, extra) {
  const base = ajustesPorDefecto(id);
  const nube = pielesServidor[pielDe(id).id] || {};
  const guardado = leerMapaAjustes()[pielDe(id).id] || {};
  return {
    sonido: (extra && extra.sonido !== undefined ? extra.sonido : guardado.sonido !== undefined ? guardado.sonido : nube.sonido) !== false,
    efectos: (extra && extra.efectos !== undefined ? extra.efectos : guardado.efectos !== undefined ? guardado.efectos : nube.efectos) !== false,
    objetos: { ...base.objetos, ...(nube.objetos || {}), ...(guardado.objetos || {}), ...((extra && extra.objetos) || {}) },
  };
}

function guardarAjustesPiel(id, ajustes) {
  const limpio = ajustesDe(id, ajustes);
  try {
    const mapa = leerMapaAjustes();
    mapa[pielDe(id).id] = limpio;
    localStorage.setItem(AJUSTES_CLAVE, JSON.stringify(mapa));
  } catch { /* la pantalla sigue sin persistir */ }
  return limpio;
}

function fxDeCapa(capa) {
  const piel = pielDe(capa?.piel);
  const ajustes = ajustesDe(piel.id, capa?.ajustes);
  return {
    piel,
    ajustes,
    fx: {
      ...piel.efectos,
      objetos: ajustes.efectos
        ? (piel.efectos.objetos || []).filter((objeto) => ajustes.objetos[objeto.id] !== false)
        : [],
      mascota: ajustes.efectos && piel.mascota && ajustes.objetos.mascota !== false ? piel.mascota : '',
      ambiente: ajustes.efectos ? piel.efectos.ambiente : '',
      impacto: ajustes.efectos ? piel.efectos.impacto : '',
      particulas: ajustes.efectos ? piel.efectos.particulas : { ...(piel.efectos.particulas || {}), cantidad: 0 },
    },
  };
}

let audioFx = null;
let previaPila = 0;
let previoRechazo = '';
let previoCierre = false;

function prepararSonido() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  if (!audioFx) audioFx = new Ctx();
  void audioFx.resume();
}

function notaFx(frecuencia, tipo, volumen, cuando, duracion) {
  if (!audioFx) return;
  const osc = audioFx.createOscillator();
  const ganancia = audioFx.createGain();
  osc.type = tipo;
  osc.frequency.value = frecuencia;
  ganancia.gain.value = volumen;
  ganancia.gain.exponentialRampToValueAtTime(0.0001, cuando + duracion);
  osc.connect(ganancia);
  ganancia.connect(audioFx.destination);
  osc.start(cuando);
  osc.stop(cuando + duracion);
}

function ruidoFx(duracion, volumen, frecuencia, q, cuando) {
  if (!audioFx) return;
  const n = Math.max(32, Math.floor(audioFx.sampleRate * duracion));
  const buffer = audioFx.createBuffer(1, n, audioFx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < n; i += 1) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2.4);
  const src = audioFx.createBufferSource();
  src.buffer = buffer;
  const filtro = audioFx.createBiquadFilter();
  filtro.type = 'bandpass';
  filtro.frequency.value = frecuencia;
  filtro.Q.value = q;
  const ganancia = audioFx.createGain();
  ganancia.gain.setValueAtTime(Math.max(0.001, volumen), cuando);
  ganancia.gain.exponentialRampToValueAtTime(0.0001, cuando + duracion);
  src.connect(filtro);
  filtro.connect(ganancia);
  ganancia.connect(audioFx.destination);
  src.start(cuando);
}

function reanudarEscenario() {
  prepararSonido();
  const video = document.querySelector('#ahora-media video');
  if (video && video.paused) video.play().catch(() => {});
}

document.addEventListener('pointerdown', reanudarEscenario, { passive: true });
document.addEventListener('keydown', reanudarEscenario);

function tocarSonido(motor, fuerza = 1) {
  prepararSonido();
  if (!audioFx) return;
  if (audioFx.state !== 'running') {
    void audioFx.resume().then(() => {
      if (audioFx?.state === 'running') tocarSonido(motor, fuerza);
    });
    return;
  }
  const cuando = audioFx.currentTime;
  if (motor === 'ruleta-clic' || motor.endsWith('-clic')) {
    ruidoFx(0.028 + fuerza * 0.016, 0.15 + fuerza * 0.2, 1280 + fuerza * 980, 6.2, cuando);
    notaFx(190 + fuerza * 36, 'triangle', 0.01 + fuerza * 0.016, cuando, 0.016);
    return;
  }
  if (motor === 'ruleta-cae') {
    ruidoFx(0.1, 0.24, 480, 2.1, cuando);
    notaFx(72, 'sine', 0.09, cuando, 0.16);
    notaFx(148, 'triangle', 0.045, cuando + 0.018, 0.09);
    return;
  }
  if (motor === 'neon-exito') {
    [523, 659, 784].forEach((frecuencia, indice) => notaFx(frecuencia, 'triangle', 0.06, cuando + indice * 0.07, 0.18));
    return;
  }
  if (motor === 'don-exito') {
    notaFx(98, 'triangle', 0.14, cuando, 0.28);
    notaFx(196, 'sine', 0.09, cuando + 0.05, 0.22);
    notaFx(392, 'square', 0.05, cuando + 0.12, 0.14);
    return;
  }
  if (motor === 'motor-exito') {
    [392, 523, 784].forEach((frecuencia, indice) => notaFx(frecuencia, 'square', 0.055, cuando + indice * 0.08, 0.16));
    return;
  }
  if (motor === 'campana-exito') {
    [784, 988, 1174].forEach((frecuencia, indice) => notaFx(frecuencia, 'sine', 0.06, cuando + indice * 0.08, 0.2));
    return;
  }
  if (motor === 'neon-decepcion') {
    [392, 196].forEach((frecuencia, indice) => notaFx(frecuencia, 'triangle', 0.07, cuando + indice * 0.2, 0.24));
    return;
  }
  if (motor === 'shamisen-decepcion') {
    [349, 262, 196].forEach((frecuencia, indice) => notaFx(frecuencia, 'sine', 0.09, cuando + indice * 0.16, 0.38));
    return;
  }
  if (motor === 'motor-decepcion') {
    [196, 147, 98].forEach((frecuencia, indice) => notaFx(frecuencia, 'sawtooth', 0.05, cuando + indice * 0.12, 0.18));
    return;
  }
  if (motor === 'campana-decepcion') {
    [440, 349].forEach((frecuencia, indice) => notaFx(frecuencia, 'sine', 0.07, cuando + indice * 0.18, 0.28));
    return;
  }
}

function htmlConfeti(fx) {
  const formas = fx.particulas?.formas || ['recto'];
  const colores = fx.particulas?.colores || ['#fff'];
  const n = Math.min(40, fx.particulas?.cantidad || 0);
  if (n <= 0) return '';
  const bits = Array.from({ length: n }, (_, i) => {
    const left = Math.random() * 100;
    const dx = (Math.random() - 0.5) * 140;
    const giro = (Math.random() - 0.5) * 720;
    return `<i class="papel-${formas[i % formas.length]}" style="left:${left}%;background:${colores[i % colores.length]};width:${6 + Math.random() * 8}px;height:${8 + Math.random() * 12}px;animation-delay:${Math.random() * 0.45}s;animation-duration:${1.7 + Math.random() * 1.5}s;--dx:${dx}px;--giro:${giro}deg"></i>`;
  }).join('');
  return `<div class="papel-picado ${escapar(fx.impacto)}" aria-hidden="true">${bits}</div>`;
}

function localId() {
  return new URLSearchParams(location.search).get('local') || '';
}

function apiBase() {
  return location.origin;
}

const avataresListos = new Map();

function urlsDe(item) {
  if (!item) return [];
  const lista = [];
  if (item.foto) lista.push(item.foto);
  for (const foto of item.fotos || []) if (foto) lista.push(foto);
  return lista;
}

function imagenLista(url) {
  const imagen = avataresListos.get(url);
  return imagen && imagen.naturalWidth > 0 ? imagen : undefined;
}

function guardarAvatar(url, imagen) {
  if (url && imagen && imagen.naturalWidth > 0) avataresListos.set(url, imagen);
}

function decodificarFoto(url) {
  if (!url || avataresListos.has(url)) return Promise.resolve(imagenLista(url));
  return fetch(url, { cache: 'force-cache', mode: 'cors' }).then((respuesta) => {
    if (!respuesta.ok) throw new Error('foto');
    return respuesta.blob();
  }).then((blob) => {
    const objeto = URL.createObjectURL(blob);
    return new Promise((resolve) => {
      const imagen = new Image();
      imagen.onload = () => {
        guardarAvatar(url, imagen);
        resolve(imagenLista(url));
      };
      imagen.onerror = () => resolve(undefined);
      imagen.src = objeto;
    });
  }).catch(() => new Promise((resolve) => {
    const imagen = new Image();
    imagen.referrerPolicy = 'no-referrer';
    imagen.onload = () => {
      guardarAvatar(url, imagen);
      resolve(imagenLista(url));
    };
    imagen.onerror = () => resolve(undefined);
    imagen.src = url;
  }));
}

function precargarAvatares(items) {
  const urls = [];
  for (const item of items || []) {
    for (const url of urlsDe(item)) if (!urls.includes(url)) urls.push(url);
  }
  return Promise.all(urls.map(decodificarFoto));
}

function escapar(valor) {
  return String(valor || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function formatearQueda(ms) {
  const s = Math.max(0, Math.ceil(Number(ms || 0) / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

const MODOS_JUEGO = [
  { id: 'seguir', nombre: 'Seguir igual', aviso: 'Durante los juegos el video sigue igual' },
  { id: 'mudo', nombre: 'Silenciar', aviso: 'Durante los juegos se silencia el video' },
  { id: 'pausa', nombre: 'Pausar', aviso: 'Durante los juegos se pausa el video' },
  { id: 'fondo', nombre: 'Fondo de la piel', aviso: 'Durante los juegos: fondo de la piel (la música sigue)' },
];

function claveModoJuego() {
  return 'fonomeets.pantalla.modoJuego.' + (localId() || 'demo');
}

function modoJuego() {
  try {
    const valor = localStorage.getItem(claveModoJuego());
    return MODOS_JUEGO.some((modo) => modo.id === valor) ? valor : '';
  } catch (error) {
    return '';
  }
}

function aplicarFondoEscena(escena, capa) {
  let fondo = capa?.fondo || 'juego';
  const modo = modoJuego();
  const juego = capa && (capa.tipo === 'ruleta' || capa.tipo === 'votacion');
  // La elección guardada en la pantalla manda sobre "sobre el video / fondo de la piel"; foto y logo se respetan.
  if (juego && modo && (fondo === 'actual' || fondo === 'juego')) fondo = modo === 'fondo' ? 'juego' : 'actual';
  escena.dataset.fondo = fondo;
  if ((capa?.fondo === 'foto' || capa?.fondo === 'logo') && capa.foto) {
    escena.style.setProperty('--foto-fondo', `url("${capa.foto}")`);
  } else {
    escena.style.removeProperty('--foto-fondo');
  }
}

function pesoDe(capa) {
  const pedido = String(capa?.peso || '').toLowerCase();
  if (pedido === 'destacado' || pedido === 'accesorio') return pedido;
  return (capa?.tipo || 'mensaje') === 'mensaje' ? 'accesorio' : 'destacado';
}

function htmlCapa(capa) {
  const { piel, fx } = fxDeCapa(capa);
  const tipo = capa.tipo || 'mensaje';
  const peso = pesoDe({ ...capa, tipo });
  const objetos = (fx.objetos || []).filter((objeto) => objeto.en.includes(tipo))
    .map((objeto) => `<i class="escena-obj ${escapar(objeto.clase)}" aria-hidden="true">${escapar(objeto.texto || '')}</i>`)
    .join('');
  let interior = '';
  if (tipo === 'ruleta') {
    const ruedas = Array.isArray(capa.ruedas) ? capa.ruedas.filter((rueda) => Array.isArray(rueda?.opciones) && rueda.opciones.length > 0) : [];
    const pila = Array.isArray(capa.pila) ? capa.pila : [];
    const cierre = Boolean(capa.cierre) || (pila.length > 0 && ruedas.length === 0);
    if (cierre) {
      interior = `${htmlConfeti(fx)}${htmlSalon(pila, fx)}`;
    } else {
      const lienzos = ruedas.length > 1
        ? `<div class="escena-ruletas">${ruedas.map((rueda) => `<div class="${escapar(fx.lienzo)}"><canvas class="escena-ruleta" width="720" height="720" data-sectores="${rueda.opciones.length}"></canvas></div>`).join('')}</div>`
        : ruedas.length === 1
          ? `<div class="${escapar(fx.lienzo)}"><canvas class="escena-ruleta" width="720" height="720" data-sectores="${ruedas[0].opciones.length}"></canvas></div>`
          : '';
      const fiesta = pila.length > 0 || (Array.isArray(capa.centro) && capa.centro.length > 0);
      interior = `${fiesta ? htmlConfeti(fx) : ''}${lienzos}${htmlCentro(capa.centro, fx)}${htmlPila(pila, fx)}${htmlRechazo(capa.rechazo, fx)}`;
    }
  } else if (tipo === 'votacion') {
    const opciones = (capa.opciones || []).map((opcion) => {
      const foto = opcion.foto || (opcion.fotos && opcion.fotos[0]) || '';
      const gana = capa.ganador && String(opcion.id) === String(capa.ganador) ? ' is-ganador' : '';
      return `<article class="escena-opcion ${escapar(fx.foto)}${gana}">${foto ? `<img src="${escapar(foto)}" alt="">` : ''}<strong>${escapar(opcion.titulo)}</strong></article>`;
    }).join('');
    interior = `<h2>${escapar(capa.texto || 'Votá')}</h2><div class="escena-opciones">${opciones}</div>`;
  } else if (tipo === 'mensaje') {
    interior = htmlHiloSms(Array.isArray(capa.filas) ? capa.filas : filasSmsDe(capa));
  } else {
    const fotoMatch = (nombre, lado) => {
      const foto = fotoSmsDe(nombre);
      return foto
        ? `<img class="escena-match-foto is-${lado}" src="${escapar(foto)}" alt="">`
        : `<span class="escena-match-foto is-${lado} is-hueco" aria-hidden="true">${escapar(inicialesSms(nombre))}</span>`;
    };
    interior = `<div class="escena-match"><div class="escena-match-par">${fotoMatch(capa.desde, 'a')}<h2>${escapar(capa.desde || '')}</h2><p>${escapar(capa.texto || 'Se gustaron')}</p><h2>${escapar(capa.hacia || '')}</h2>${fotoMatch(capa.hacia, 'b')}</div></div>`;
  }
  const pilaN = Array.isArray(capa.pila) ? capa.pila.length : 0;
  const ruedasVivas = Array.isArray(capa.ruedas) ? capa.ruedas.filter((rueda) => Array.isArray(rueda?.opciones) && rueda.opciones.length > 0).length : 0;
  const cierre = tipo === 'ruleta' && (Boolean(capa.cierre) || (pilaN > 0 && ruedasVivas === 0));
  const conPila = tipo === 'ruleta' && pilaN > 0 && !cierre;
  const cuerpo = cierre ? ' is-cierre' : conPila ? ' is-con-pila' : '';
  const reloj = !cierre && capa.quedaMs != null ? `<p class="escena-reloj">${formatearQueda(capa.quedaMs)}</p>` : '';
  const ambiente = tipo === 'mensaje' ? '' : (fx.ambiente ? `<div class="escena-fx ${escapar(fx.ambiente)}"></div>` : '');
  const impacto = tipo === 'mensaje' ? '' : (fx.impacto ? `<div class="escena-impacto ${escapar(fx.impacto)}"></div>` : '');
  const objetosCapa = tipo === 'mensaje' ? '' : objetos;
  const marco = tipo === 'mensaje'
    ? 'escena-marco sms-marco'
    : `escena-marco ${escapar(fx.marco)} ${escapar(fx.entrada)}`;
  const sello = tipo === 'mensaje' ? '' : `<p class="escena-sello ${escapar(fx.sello)}">${escapar((cierre && piel.sellos.cierre) || piel.sellos[tipo] || tipo)}</p>`;
  const relojCapa = tipo === 'mensaje' ? '' : reloj;
  return `<section class="escena-capa" data-tipo="${escapar(tipo)}" data-peso="${escapar(peso)}" data-salon="${cierre ? '1' : '0'}">${ambiente}${objetosCapa}${impacto}<div class="${marco}">${sello}${relojCapa}<div class="escena-cuerpo${cuerpo}" style="--n:${pilaN || 1}">${interior}</div></div></section>`;
}

function horaSms(cuando) {
  const fecha = cuando ? new Date(cuando) : new Date();
  if (Number.isNaN(fecha.getTime())) {
    const ahora = new Date();
    return `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}`;
  }
  return `${String(fecha.getHours()).padStart(2, '0')}:${String(fecha.getMinutes()).padStart(2, '0')}`;
}

function inicialesSms(nombre) {
  const partes = String(nombre || '').trim().split(/\s+/).filter(Boolean);
  return ((partes[0] || '?')[0] + (partes[1] ? partes[1][0] : '')).toUpperCase();
}

function fotoSmsDe(autor, extras) {
  const lista = [...(extras || []), ...avataresServidor, ...JUGADORES_DEMO];
  const n = String(autor || '').trim().toLowerCase();
  if (!n) return '';
  const hit = lista.find((persona) => {
    const titulo = String(persona.titulo || persona.nombre || persona.autor || '').toLowerCase();
    return titulo === n || titulo.startsWith(n) || String(persona.id || '').toLowerCase() === n;
  });
  return hit?.foto || (hit?.fotos && hit.fotos[0]) || '';
}

function claveSms(item, indice) {
  return item.id || `${item.autor || ''}|${item.texto || ''}|${item.cuando || ''}|${indice}`;
}

function completarFilaSms(item, indice, extras) {
  const clave = claveSms(item, indice);
  const nuevo = item.nuevo === true || !smsClavesVistas.has(clave);
  smsClavesVistas.add(clave);
  return {
    ...item,
    id: clave,
    autor: item.autor || 'Invitado',
    foto: item.foto || fotoSmsDe(item.autor, extras),
    lado: item.lado === 'out' ? 'out' : 'in',
    nuevo,
  };
}

function filasSmsDe(capa, extras) {
  const filas = Array.isArray(capa?.filas) ? capa.filas.map((item) => ({ ...item })) : [];
  if (!filas.length && capa && (capa.texto || capa.desde || capa.hacia)) {
    filas.push({
      autor: capa.desde || 'Mesa',
      texto: capa.texto || '…',
      lado: 'in',
      cuando: capa.cuando,
      foto: capa.fotoDesde || capa.foto || '',
    });
    if (capa.respuesta) {
      filas.push({
        autor: capa.hacia || 'Mesa',
        texto: capa.respuesta,
        lado: 'out',
        cuando: capa.cuando,
        foto: capa.fotoHacia || '',
      });
    }
  }
  (extras || []).forEach((item) => {
    filas.push({
      autor: item.autor || item.desde || 'Invitado',
      texto: item.texto || item.respuesta || '…',
      lado: filas.length % 2 ? 'out' : 'in',
      cuando: item.cuando,
      foto: item.foto || '',
    });
  });
  return filas;
}

function htmlHiloSms(filas) {
  return `<div class="sms-hilo"><div class="sms-cinta">${(filas || []).map((item) => {
    const lado = item.lado === 'out' ? 'out' : 'in';
    const nuevo = item.nuevo ? ' is-nuevo' : '';
    const autor = item.autor || 'Invitado';
    const avatar = item.foto
      ? `<img class="sms-avatar" src="${escapar(item.foto)}" alt="">`
      : `<span class="sms-avatar is-hueco" aria-hidden="true">${escapar(inicialesSms(autor))}</span>`;
    return `<article class="sms-fila is-${lado}${nuevo}">${avatar}<div class="sms-cuerpo"><p class="sms-meta"><strong>${escapar(autor)}</strong> // <em>${horaSms(item.cuando)}</em></p><div class="sms-burbuja">${escapar(item.texto || '…')}</div></div></article>`;
  }).join('')}</div></div>`;
}

// Rodillo: el hilo mide como máximo 4 celdas y apila desde abajo; lo viejo sube y, al acercarse al borde
// superior, se inclina hacia atrás y se apaga como si pasara por encima de un tambor.
let smsUltimaFila = '';
let smsRodilloHasta = 0;

function curvarRodillo(hilo) {
  const caja = hilo.getBoundingClientRect();
  if (!caja.height) return;
  hilo.querySelectorAll('.sms-fila').forEach((fila) => {
    const r = fila.getBoundingClientRect();
    const altura = (caja.bottom - (r.top + r.height / 2)) / caja.height;
    fila.style.setProperty('--rod', Math.max(0, Math.min(1.3, altura)).toFixed(3));
  });
}

function revelarSmsNuevo() {
  const hilo = document.querySelector('.sms-hilo');
  const cinta = hilo && hilo.querySelector('.sms-cinta');
  if (!hilo || !cinta) return;
  const filas = cinta.querySelectorAll('.sms-fila');
  const ultima = filas[filas.length - 1];
  const clave = ultima ? ultima.textContent : '';
  const llega = Boolean(ultima) && clave !== smsUltimaFila && smsUltimaFila !== '';
  smsUltimaFila = clave;
  curvarRodillo(hilo);
  if (!llega) return;
  const paso = ultima.offsetHeight + parseFloat(getComputedStyle(cinta).rowGap || '0');
  cinta.style.transition = 'none';
  cinta.style.transform = `translateY(${paso}px)`;
  void cinta.offsetHeight;
  cinta.style.transition = 'transform .9s cubic-bezier(.22, .8, .26, 1)';
  cinta.style.transform = 'translateY(0)';
  smsRodilloHasta = performance.now() + 950;
  const cuadro = () => {
    if (!hilo.isConnected) return;
    curvarRodillo(hilo);
    if (performance.now() < smsRodilloHasta) requestAnimationFrame(cuadro);
  };
  requestAnimationFrame(cuadro);
}

function escenarioAhora() {
  const escena = document.getElementById('escena');
  if (!escena) return null;
  let nodo = document.getElementById('escenario-ahora');
  if (!nodo) {
    nodo = document.createElement('div');
    nodo.id = 'escenario-ahora';
    nodo.className = 'escenario-ahora';
    nodo.hidden = true;
    nodo.innerHTML = '<div class="ahora-velo" aria-hidden="true"></div><div class="ahora-datos" id="ahora-datos"></div>';
    escena.prepend(nodo);
    // Safari de iOS no dibuja el iframe de YouTube dentro de un elemento escalado:
    // el video va en una capa aparte, sin transform, con la misma caja que la escena.
    const capa = document.createElement('div');
    capa.id = 'ahora-video';
    capa.className = 'ahora-video-capa';
    capa.innerHTML = '<div id="ahora-media"></div>';
    escena.before(capa);
    const observador = new MutationObserver(sincronizarVideo);
    observador.observe(nodo, { attributes: true, attributeFilter: ['hidden'] });
    observador.observe(escena, { attributes: true, attributeFilter: ['data-fondo', 'data-slots'] });
    escalarEscena();
    sincronizarVideo();
  }
  return nodo;
}

function sincronizarVideo() {
  const escena = document.getElementById('escena');
  const stage = document.getElementById('escenario-ahora');
  const capa = document.getElementById('ahora-video');
  if (!escena || !stage || !capa) return;
  const tapado = escena.dataset.fondo === 'juego' && String(escena.dataset.slots || '').split(' ').includes('escenario');
  const visible = !stage.hidden && !tapado;
  capa.style.visibility = visible ? 'visible' : 'hidden';
  escena.classList.toggle('con-video', visible);
  avisoReproducir();
}

function mediaAhora() {
  escenarioAhora();
  return document.getElementById('ahora-media');
}

function poseMascota(capas) {
  if (capas.some((capa) => capa.tipo === 'match')) return 'festeja';
  const juego = capas.find((capa) => capa.tipo === 'ruleta' || capa.tipo === 'votacion');
  if (!juego) return '';
  if (juego.tipo === 'votacion') return juego.ganador ? 'festeja' : 'senala';
  if (juego.rechazo && juego.rechazo.id) return 'decepcion';
  const ruedas = (juego.ruedas || []).filter((rueda) => Array.isArray(rueda?.opciones) && rueda.opciones.length > 0);
  const pila = Array.isArray(juego.pila) ? juego.pila.length : 0;
  if (juego.cierre || (pila > 0 && ruedas.length === 0)) return 'festeja';
  if (Array.isArray(juego.centro) && juego.centro.length > 0) return 'festeja';
  const gira = ruedas.some((rueda) => (rueda.animar !== undefined ? rueda.animar : juego.animar) !== false);
  return gira ? 'senala' : 'reposo';
}

const VOLTIO_POSES = {
  reposo: {
    brazos: 'M74 150 Q54 168 58 196 M126 150 Q146 168 142 196',
    manos: [[58, 202], [142, 202]],
    piernas: 'M88 186 L86 234 L72 237 M112 186 L114 234 L128 237',
    cara: '<circle cx="93" cy="74" r="4"/><circle cx="107" cy="74" r="4"/><path d="M90 84 Q100 93 110 84" fill="none"/>',
  },
  festeja: {
    brazos: 'M74 148 Q46 132 42 100 M126 148 Q154 132 158 100',
    manos: [[40, 92], [160, 92]],
    piernas: 'M88 186 Q72 204 84 224 L72 230 M112 186 Q128 204 116 224 L128 230',
    cara: '<path d="M89 75 Q93 69 97 75 M103 75 Q107 69 111 75" fill="none"/><path d="M88 82 Q100 100 112 82 Z"/>',
  },
  decepcion: {
    brazos: 'M76 152 Q68 178 72 206 M124 152 Q132 178 128 206',
    manos: [[72, 212], [128, 212]],
    piernas: 'M90 186 L95 234 L83 237 M110 186 L105 234 L117 237',
    cara: '<circle cx="93" cy="77" r="3.5"/><circle cx="107" cy="77" r="3.5"/><path d="M90 92 Q100 84 110 92" fill="none"/><path class="voltio-lagrima" d="M113 82 q4 7 0 10 q-4 -3 0 -10z"/>',
    cabeza: 'rotate(-9 100 80)',
  },
  senala: {
    brazos: 'M126 150 L178 134 M74 150 Q50 160 60 178 Q68 186 76 174',
    manos: [[184, 132]],
    dedo: 'M184 132 L198 128',
    piernas: 'M88 186 L86 234 L72 237 M112 186 L114 234 L128 237',
    cara: '<circle cx="97" cy="73" r="4"/><circle cx="111" cy="73" r="4"/><path d="M93 84 Q103 92 113 83" fill="none"/>',
    extra: '<path class="voltio-chispa" d="M186 112 l6 -10 M198 118 l10 -6 M200 134 l11 2" fill="none"/>',
  },
};

const SUMI_POSES = {
  reposo: {
    brazos: 'M176 176 Q192 186 188 204 M50 178 Q36 190 42 206',
    boca: '<path d="M106 176 Q116 187 126 176" fill="none"/>',
  },
  festeja: {
    brazos: 'M176 146 Q198 124 194 96 M52 150 Q30 128 34 102',
    boca: '<path d="M103 171 Q116 198 129 171 Z" fill="#111"/><path d="M109 184 Q116 192 123 184 Z" fill="#e0576b" stroke="none"/>',
    extra: '<path d="M200 74 l8 -14 M212 90 l14 -6 M26 80 l-8 -14 M14 98 l-12 -4" fill="none"/>',
  },
  decepcion: {
    brazos: 'M62 200 Q64 186 78 180 M162 198 Q160 184 148 178',
    boca: '<path d="M105 186 Q116 176 127 186" fill="none"/>',
    cejas: '<path d="M76 130 L100 122 M156 128 L132 120" fill="none"/>',
    extra: '<path d="M188 104 q7 11 0 16 q-7 -5 0 -16z" fill="#bfe0f2"/><path d="M176 52 a9 9 0 1 1 9 9 a5 5 0 1 1 -5 -5" fill="none"/>',
    cabeza: 'rotate(-6 112 150)',
  },
  senala: {
    brazos: 'M180 164 L210 150 M50 180 Q36 192 42 208',
    dedo: 'M210 150 L220 146',
    boca: '<path d="M106 172 Q116 190 128 172 Z" fill="#111"/>',
    cejas: '<path d="M78 124 L100 130 M154 122 L132 128" fill="none"/>',
  },
};

function svgSumi(pose) {
  const p = SUMI_POSES[pose] || SUMI_POSES.reposo;
  const cuerpo = 'M118 30 C132 62 186 98 184 156 C182 204 150 228 112 228 C72 228 42 204 42 158 C42 108 100 70 118 30 Z';
  const ojo = (x, y) => `<circle cx="${x}" cy="${y}" r="17" fill="#fff"/><circle cx="${x + 2}" cy="${y + 2}" r="11" fill="#111" stroke="none"/>`
    + `<circle cx="${x - 2}" cy="${y - 3}" r="4.6" fill="#fff" stroke="none"/><circle cx="${x + 7}" cy="${y + 7}" r="2" fill="#fff" stroke="none"/>`;
  const extremidad = (d) => `<path d="${d}" stroke="#111" stroke-width="17"/><path d="${d}" stroke="#fdfbf4" stroke-width="8"/>`;
  return `<svg class="sumi" viewBox="0 0 220 250" role="presentation"><defs>`
    + `<pattern id="sumi-trama" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><circle cx="3.5" cy="3.5" r="1.5" fill="#111"/></pattern>`
    + `<radialGradient id="sumi-luz" cx=".42" cy=".66" r=".62"><stop offset=".5" stop-color="#000"/><stop offset="1" stop-color="#fff"/></radialGradient>`
    + `<mask id="sumi-mascara"><rect width="220" height="250" fill="url(#sumi-luz)"/></mask><clipPath id="sumi-forma"><path d="${cuerpo}"/></clipPath></defs>`
    + `<g fill="none" stroke-linecap="round" stroke-linejoin="round">`
    + `<path d="M50 196 Q26 214 20 190" stroke="#111" stroke-width="6"/>`
    + `<path d="M20 184 C7 173 7 154 18 140 C31 154 31 173 20 184 Z" fill="#fdfbf4" stroke="#111" stroke-width="4.5"/>`
    + `<path d="M18 140 C13 150 14 159 19 164 C25 158 25 149 18 140 Z" fill="#111"/>`
    + `<path d="M14 182 L26 186" stroke="#c41e3a" stroke-width="6"/>`
    + extremidad(p.brazos) + (p.dedo ? extremidad(p.dedo) : '')
    + `<ellipse cx="94" cy="230" rx="14" ry="8" fill="#fdfbf4" stroke="#111" stroke-width="5"/><ellipse cx="132" cy="230" rx="14" ry="8" fill="#fdfbf4" stroke="#111" stroke-width="5"/>`
    + `<g transform="${p.cabeza || ''}">`
    + `<path d="${cuerpo}" transform="translate(-8 6)" fill="#c41e3a"/>`
    + `<path d="${cuerpo}" fill="#fdfbf4"/>`
    + `<rect width="220" height="250" fill="url(#sumi-trama)" mask="url(#sumi-mascara)" clip-path="url(#sumi-forma)"/>`
    + `<path d="${cuerpo}" stroke="#111" stroke-width="6"/>`
    + `<path d="M104 52 Q98 66 88 76" stroke="#fff" stroke-width="5"/>`
    + `<path d="M56 112 Q116 92 178 108 L181 128 Q116 112 48 134 Z" fill="#c41e3a" stroke="#111" stroke-width="4"/>`
    + `<path d="M46 118 Q24 102 8 108 Q20 116 18 126 Q32 120 44 126 Z M44 128 Q28 142 26 160 Q36 150 48 148 Q46 138 50 132 Z" fill="#c41e3a" stroke="#111" stroke-width="4"/>`
    + `<path d="M40 114 q12 -8 18 4 q-6 12 -18 6 z" fill="#c41e3a" stroke="#111" stroke-width="4"/>`
    + `<g stroke="#111" stroke-width="4.5">${ojo(92, 150)}${ojo(140, 148)}</g>`
    + `<ellipse cx="74" cy="174" rx="10" ry="5" fill="#f2a3b0" opacity=".85"/><ellipse cx="160" cy="172" rx="10" ry="5" fill="#f2a3b0" opacity=".85"/>`
    + `<g stroke="#111" stroke-width="4">${p.boca}${p.cejas || ''}</g>`
    + `</g><g stroke="#111" stroke-width="4">${p.extra || ''}</g></g></svg>`;
}

const TURBO_POSES = {
  reposo: {
    brazos: 'M76 178 Q58 196 48 214',
    manos: [[44, 218]],
    piernas: 'M112 188 Q140 206 164 200 M128 184 Q160 194 186 182',
    zapas: [[170, 200, -20], [192, 180, -30]],
    ojos: 'abiertos',
    boca: '<path d="M140 160 Q152 170 166 158" fill="none"/>',
  },
  festeja: {
    brazos: 'M50 146 Q20 118 16 82 M186 132 Q214 100 214 64',
    manos: [[14, 74], [214, 56]],
    piernas: 'M104 188 Q96 212 110 232 M136 186 Q146 210 138 232',
    zapas: [[112, 238, 10], [140, 238, -10]],
    ojos: 'felices',
    boca: '<path d="M138 156 Q154 180 172 154 Z" fill="#7a1010"/><path d="M146 166 Q154 174 164 166 Z" fill="#ff7a7a" stroke="none"/>',
    lineas: 'M30 214 l26 -6 M40 228 l22 -4',
  },
  decepcion: {
    brazos: 'M80 182 Q62 202 56 222',
    manos: [[52, 226]],
    piernas: 'M112 192 Q138 212 160 210 M128 190 Q156 202 180 194',
    zapas: [[166, 210, -12], [186, 192, -24]],
    ojos: 'tristes',
    boca: '<path d="M142 168 Q153 158 166 168" fill="none"/>',
    cejas: '<path d="M112 108 L130 116 M178 112 L160 118" fill="none"/>',
    cabeza: 'rotate(-7 112 120)',
  },
  senala: {
    brazos: 'M76 176 Q60 196 58 214 M186 140 L204 134',
    manos: [[56, 218]],
    dedo: [204, 132],
    piernas: 'M104 190 L100 228 M134 188 L142 228',
    zapas: [[100, 234, 0], [146, 234, 0]],
    ojos: 'abiertos',
    boca: '<path d="M140 154 Q154 174 170 152 Z" fill="#7a1010"/>',
  },
};

function svgTurbo(pose) {
  const p = TURBO_POSES[pose] || TURBO_POSES.reposo;
  const casco = 'M112 30 C162 30 194 66 194 112 C194 158 160 190 112 190 C64 190 32 158 32 110 C32 64 66 30 112 30 Z';
  const linea = (d, ancho) => `<path d="${d}" stroke="#fff" stroke-width="${ancho + 8}"/><path d="${d}" stroke="#111" stroke-width="${ancho}"/>`;
  const guante = ([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="#fff" stroke="#111" stroke-width="4"/><path d="M${x - 6} ${y - 2} q6 -5 12 0" stroke="#111" stroke-width="2.5"/>`;
  const zapa = ([x, y, giro]) => `<g transform="translate(${x} ${y}) rotate(${giro})"><path d="M-14 -4 Q-14 -14 -2 -14 L6 -12 Q16 -6 18 2 L18 6 L-14 6 Z" fill="#e31c23" stroke="#111" stroke-width="4"/><path d="M-14 6 L18 6" stroke="#fff" stroke-width="5"/><path d="M-4 -10 l6 5 M2 -11 l5 5" stroke="#fff" stroke-width="2.5"/></g>`;
  const ojo = (x, y) => {
    if (p.ojos === 'felices') return `<path d="M${x - 9} ${y + 3} Q${x} ${y - 9} ${x + 9} ${y + 3}" fill="none" stroke="#111" stroke-width="4.5"/>`;
    const cae = p.ojos === 'tristes' ? 3 : 0;
    return `<circle cx="${x + 2}" cy="${y + 2 + cae}" r="7" fill="#111" stroke="none"/><circle cx="${x}" cy="${y - 1 + cae}" r="2.6" fill="#fff" stroke="none"/>`;
  };
  const dedo = p.dedo ? `<g transform="translate(${p.dedo[0]} ${p.dedo[1]}) scale(1.5)"><path d="M-8 -9 Q4 -10 6 -4 L22 -6 Q28 -4 22 0 L6 2 Q8 10 -4 10 Q-12 8 -10 0 Z" fill="#fff" stroke="#111" stroke-width="4" stroke-linejoin="round"/></g>` : '';
  return `<svg class="turbo" viewBox="0 0 230 250" role="presentation"><defs>`
    + `<pattern id="turbo-cuadros" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(-14)"><rect width="16" height="16" fill="#fff"/><rect width="8" height="8" fill="#111"/><rect x="8" y="8" width="8" height="8" fill="#111"/></pattern>`
    + `<clipPath id="turbo-casco"><path d="${casco}"/></clipPath></defs>`
    + `<g fill="none" stroke-linecap="round" stroke-linejoin="round">`
    + `<path d="M6 96 h30 M2 112 h24 ${p.lineas || ''}" stroke="#111" stroke-width="4"/>`
    + `<path d="M66 124 C40 102 18 128 -10 108 L-2 166 C22 182 44 150 72 170 Z" fill="#e31c23" stroke="#e31c23" stroke-width="14"/>`
    + `<path d="M66 124 C40 102 18 128 -10 108 L-2 166 C22 182 44 150 72 170 Z" fill="url(#turbo-cuadros)" stroke="#fff" stroke-width="5"/>`
    + linea(p.brazos, 7) + linea(p.piernas, 8)
    + p.manos.map(guante).join('') + dedo + p.zapas.map(zapa).join('')
    + `<g transform="${p.cabeza || ''}">`
    + `<path d="${casco}" stroke="#e31c23" stroke-width="20"/><path d="${casco}" stroke="#fff" stroke-width="12"/>`
    + `<path d="${casco}" fill="#e31c23"/>`
    + `<g clip-path="url(#turbo-casco)"><path d="M88 22 L158 22 Q176 90 234 140 L204 214 Q110 128 88 22 Z" fill="#ffd100"/>`
    + `<path d="M32 150 Q112 210 194 150 L194 200 L32 200 Z" fill="#a8121a"/></g>`
    + `<path d="${casco}" stroke="#7a0c12" stroke-width="4"/>`
    + `<path d="M58 78 Q72 50 102 40" stroke="#fff" stroke-width="8" opacity=".85"/><path d="M50 98 l2 -8" stroke="#fff" stroke-width="7" opacity=".85"/>`
    + `<ellipse cx="148" cy="134" rx="46" ry="44" fill="#ffc21a" stroke="#7a0c12" stroke-width="5"/>`
    + `<path d="M118 160 Q150 182 182 156" stroke="#f0a000" stroke-width="5" opacity=".7"/>`
    + `<path d="M40 128 Q70 112 104 116" stroke="#3a1c0c" stroke-width="18"/><path d="M40 128 Q70 112 104 116" stroke="#8a4a22" stroke-width="11"/>`
    + `<g stroke="#3a1c0c" stroke-width="4"><rect x="104" y="104" width="40" height="34" rx="11" fill="#8a4a22"/><rect x="152" y="102" width="40" height="34" rx="11" fill="#8a4a22"/></g>`
    + `<rect x="110" y="109" width="28" height="24" rx="8" fill="#ffe680"/><rect x="158" y="107" width="28" height="24" rx="8" fill="#ffe680"/>`
    + `<path d="M144 120 L152 119" stroke="#3a1c0c" stroke-width="6"/>`
    + `<path d="M114 113 l8 -2" stroke="#fff" stroke-width="3" opacity=".8"/><path d="M162 111 l8 -2" stroke="#fff" stroke-width="3" opacity=".8"/>`
    + ojo(124, 121) + ojo(172, 119)
    + `<path d="M88 86 Q142 62 202 86" stroke="#3a1c0c" stroke-width="24"/><path d="M88 86 Q142 62 202 86" stroke="#fff" stroke-width="16"/>`
    + `<path d="M100 82 Q142 68 190 80" stroke="#d9d9d9" stroke-width="3"/><circle cx="102" cy="84" r="4.5" fill="#bbb" stroke="#3a1c0c" stroke-width="2"/>`
    + `<g stroke="#111" stroke-width="4.5">${p.boca}${p.cejas || ''}</g>`
    + `</g></g></svg>`;
}

function svgMascota(id, pose) {
  if (id === 'sumi') return svgSumi(pose);
  if (id === 'turbo') return svgTurbo(pose);
  if (id !== 'voltio') return '';
  const p = VOLTIO_POSES[pose] || VOLTIO_POSES.reposo;
  const manos = p.manos.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="8"/>`).join('');
  return `<svg class="voltio" viewBox="0 0 220 250" role="presentation">`
    + `<g class="voltio-tubo-rosa" fill="none"><path d="${p.brazos}"/><path d="${p.piernas}"/>${p.dedo ? `<path d="${p.dedo}"/>` : ''}<g fill="#1a1430">${manos}</g></g>`
    + `<rect class="voltio-torso" x="74" y="140" width="52" height="46" rx="12"/>`
    + `<g transform="${p.cabeza || ''}">`
    + `<circle class="voltio-disco" cx="100" cy="80" r="60"/>`
    + `<g class="voltio-surcos" fill="none"><circle cx="100" cy="80" r="50"/><circle cx="100" cy="80" r="42"/><path d="M58 62 A46 46 0 0 1 82 36"/><path d="M142 98 A46 46 0 0 1 118 124"/></g>`
    + `<circle class="voltio-etiqueta" cx="100" cy="80" r="24"/>`
    + `<g class="voltio-cara">${p.cara}</g>`
    + `</g>${p.extra || ''}</svg>`;
}

function pintarCapas(capas, dedicatorias, avatares) {
  const escena = document.getElementById('escena');
  const escenario = escenarioAhora();
  const lista = capas || [];
  const { piel, fx, ajustes } = fxDeCapa(lista[0] || { piel: pielSinCapas });
  const ruleta = lista.find((item) => item.tipo === 'ruleta');
  const pilaN = Array.isArray(ruleta?.pila) ? ruleta.pila.length : 0;
  const ruedasVivas = Array.isArray(ruleta?.ruedas) ? ruleta.ruedas.filter((rueda) => Array.isArray(rueda?.opciones) && rueda.opciones.length > 0).length : 0;
  const rechazoId = ruleta?.rechazo?.id || '';
  const cierre = Boolean(ruleta?.cierre) || (pilaN > 0 && ruedasVivas === 0);
  if (ajustes.sonido && pilaN > previaPila) tocarSonido('ruleta-cae');
  if (ajustes.sonido && cierre && !previoCierre) tocarSonido(fx.sonidos?.exito || 'neon-exito');
  if (ajustes.sonido && rechazoId && rechazoId !== previoRechazo) tocarSonido(fx.sonidos?.decepcion || 'neon-decepcion');
  previaPila = pilaN;
  previoRechazo = rechazoId;
  previoCierre = cierre;
  escena.className = `escena ${fx.fondo}`;
  escena.dataset.piel = piel.id;
  aplicarFondoEscena(escena, lista.find((capa) => capa.tipo === 'ruleta' || capa.tipo === 'votacion') || lista[0]);
  const pendientes = [...(avatares || [])];
  for (const capa of lista) for (const opcion of capa.opciones || []) pendientes.push(opcion);
  void precargarAvatares(pendientes);
  if (lista.length === 0 && !(dedicatorias || []).length) {
    delete escena.dataset.slots;
    [...escena.children].forEach((nodo) => { if (nodo !== escenario && nodo.id !== 'grilla') nodo.remove(); });
    actualizarJuego(false);
    return;
  }
  const dedicas = (dedicatorias || []).slice(0, 4);
  const fotosSms = [...(avatares || []), ...dedicas];
  const listaPintar = lista.map((capa) => {
    if (capa.tipo !== 'mensaje') return capa;
    return { ...capa, filas: filasSmsDe(capa, dedicas).map((item, indice) => completarFilaSms(item, indice, fotosSms)) };
  });
  if (dedicas.length && !listaPintar.some((capa) => capa.tipo === 'mensaje')) {
    listaPintar.push({
      tipo: 'mensaje',
      peso: 'accesorio',
      piel: piel.id,
      fondo: 'actual',
      filas: filasSmsDe(null, dedicas).map((item, indice) => completarFilaSms(item, indice, fotosSms)),
    });
  }
  [...escena.children].forEach((nodo) => { if (nodo !== escenario && nodo.id !== 'grilla') nodo.remove(); });
  const capasNodo = document.createElement('div');
  capasNodo.className = listaPintar.length > 1 ? 'escena-capas is-varias' : 'escena-capas';
  capasNodo.innerHTML = listaPintar.map(htmlCapa).join('');
  escena.appendChild(capasNodo);
  const slots = [];
  if (listaPintar.some((capa) => capa.tipo === 'mensaje')) slots.push('rail');
  if (listaPintar.some((capa) => capa.tipo === 'ruleta' || capa.tipo === 'votacion')) slots.push('escenario');
  if (listaPintar.some((capa) => capa.tipo === 'match')) slots.push('chip');
  if (slots.length) escena.dataset.slots = slots.join(' ');
  else delete escena.dataset.slots;
  actualizarJuego(slots.includes('escenario'));
  const pose = fx.mascota ? poseMascota(listaPintar) : '';
  if (pose) {
    const mascota = document.createElement('div');
    mascota.className = `fx-mascota fx-mascota-${fx.mascota}`;
    mascota.dataset.pose = pose;
    mascota.setAttribute('aria-hidden', 'true');
    mascota.innerHTML = svgMascota(fx.mascota, pose);
    escena.appendChild(mascota);
  }
  revelarSmsNuevo();
  if (cierre) return;
  escena.querySelectorAll('canvas.escena-ruleta').forEach((canvas, indice) => {
    const capa = lista.find((item) => item.tipo === 'ruleta');
    if (!capa || capa.cierre) return;
    const vivas = Array.isArray(capa.ruedas)
      ? capa.ruedas.filter((rueda) => Array.isArray(rueda?.opciones) && rueda.opciones.length > 0)
      : [];
    const rueda = vivas[indice] || null;
    const opciones = rueda?.opciones || [];
    if (opciones.length === 0) {
      canvas.dataset.sectores = '0';
      canvas.classList.add('is-vacia');
      canvas.style.display = 'none';
      if (canvas.parentElement) canvas.parentElement.style.display = 'none';
      return;
    }
    const hasta = rueda?.hasta || capa.hacia || capa.desde || '';
    const animar = rueda && rueda.animar !== undefined ? rueda.animar : capa.animar;
    void crearMotor(canvas, opciones, pielDe(capa.piel), hasta, animar);
  });
}

function personaVista(persona) {
  const foto = persona?.foto || (persona?.fotos && persona.fotos[0]) || '';
  return { id: persona?.id || '', titulo: persona?.titulo || persona?.nombre || '', foto };
}

function nombreFicha(titulo, corto) {
  if (!corto) return titulo || '';
  const partes = String(titulo || '').trim().split(/\s+/).filter(Boolean);
  if (partes.length < 2) return titulo || '';
  return `${partes[0]} ${partes[1][0]}.`;
}

function htmlElegido(persona, fx, corto) {
  const vista = personaVista(persona);
  const foto = vista.foto
    ? `<img src="${escapar(vista.foto)}" alt="" decoding="async">`
    : `<b class="escena-iniciales" aria-hidden="true">${escapar(inicialesSms(vista.titulo))}</b>`;
  return `<div class="escena-elegido ${escapar(fx.foto)}">${foto}<span>${escapar(nombreFicha(vista.titulo, corto))}</span></div>`;
}

document.addEventListener('error', (evento) => {
  const img = evento.target;
  const elegido = img instanceof HTMLImageElement ? img.closest('.escena-elegido') : null;
  if (!elegido) return;
  const iniciales = document.createElement('b');
  iniciales.className = 'escena-iniciales';
  iniciales.setAttribute('aria-hidden', 'true');
  iniciales.textContent = inicialesSms(elegido.querySelector('span')?.textContent);
  img.replaceWith(iniciales);
}, true);

function htmlPareja(grupo, fx, extra, corto) {
  if (!Array.isArray(grupo) || grupo.length === 0) return '';
  return `<div class="escena-pareja ${escapar(fx.ficha)} ${escapar(extra || '')}">${grupo.map((persona) => htmlElegido(persona, fx, corto)).join('')}</div>`;
}

function htmlCentro(centro, fx) {
  if (!Array.isArray(centro) || centro.length === 0) return '';
  return `<div class="escena-centro">${htmlPareja(centro.slice(0, 2), fx, fx.entrada)}</div>`;
}

function htmlPila(pila, fx) {
  if (!Array.isArray(pila) || pila.length === 0) return '';
  return `<div class="escena-pila is-tira" data-cupo="${pila.length}" style="--n:${pila.length}">${pila.map((grupo) => htmlPareja(grupo, fx, fx.apila, true)).join('')}</div>`;
}

function grillaSalon(cupo) {
  if (cupo <= 1) return { cols: 1, filas: 1 };
  if (cupo === 2) return { cols: 2, filas: 1 };
  if (cupo === 3) return { cols: 3, filas: 1 };
  if (cupo === 4) return { cols: 2, filas: 2 };
  if (cupo <= 6) return { cols: 3, filas: 2 };
  return { cols: 4, filas: 2 };
}

function htmlSalon(pila, fx) {
  if (!Array.isArray(pila) || pila.length === 0) return '';
  const grilla = grillaSalon(pila.length);
  return `<div class="escena-pila is-salon" data-cupo="${pila.length}" style="--n:${pila.length};--cols:${grilla.cols};--filas:${grilla.filas}">${pila.map((grupo, indice) => `<div class="escena-pareja ${escapar(fx.ficha)} ${escapar(fx.entrada || '')}" style="animation-delay:${indice * 90}ms">${grupo.map((persona) => htmlElegido(persona, fx, false)).join('')}</div>`).join('')}</div>`;
}

function htmlRechazo(rechazo, fx) {
  if (!rechazo || !rechazo.id) return '';
  const rueda = Number(rechazo.rueda);
  const lado = Number.isFinite(rueda) ? ` data-rueda="${rueda}"` : '';
  return `<div class="escena-rechazo ${escapar(fx.rechazo)}"${lado}><div class="escena-pareja ${escapar(fx.ficha)}">${htmlElegido(rechazo, fx)}</div></div>`;
}

function pintarPapel(ctx, w, h) {
  ctx.fillStyle = '#E8D4A8';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(17, 17, 17, 0.07)';
  for (let i = 0; i < 90; i += 1) ctx.fillRect((i * 47) % w, (i * 31) % h, 2, 2);
}

function pintarTrama(ctx, cx, cy, r, a0, a1) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.arc(cx, cy, r, a0, a1);
  ctx.closePath();
  ctx.clip();
  ctx.fillStyle = 'rgba(17, 17, 17, 0.34)';
  for (let y = cy - r; y < cy + r; y += 6) {
    for (let x = cx - r; x < cx + r; x += 6) {
      ctx.beginPath();
      ctx.arc(x, y, 1.15, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function pintarLineasVelocidad(ctx, cx, cy, r, fuerza, estilo) {
  ctx.save();
  if (estilo === 'meteoro') {
    const tintas = [`rgba(255,209,0,${0.28 + fuerza * 0.5})`, `rgba(255,255,255,${0.22 + fuerza * 0.4})`, `rgba(227,28,35,${0.2 + fuerza * 0.35})`];
    for (let i = 0; i < 26; i += 1) {
      const y = cy - r * 0.92 + (i / 25) * r * 1.84;
      const largo = r * (0.28 + fuerza * 0.62 + (i % 4) * 0.06);
      ctx.strokeStyle = tintas[i % 3];
      ctx.lineWidth = 2 + (i % 3);
      ctx.beginPath();
      ctx.moveTo(cx - largo, y);
      ctx.lineTo(cx + largo, y);
      ctx.stroke();
    }
    ctx.restore();
    return;
  }
  ctx.strokeStyle = `rgba(17, 17, 17, ${0.22 + fuerza * 0.45})`;
  ctx.lineWidth = 2.2;
  for (let i = 0; i < 42; i += 1) {
    const a = (i / 42) * Math.PI * 2 + fuerza * 0.4;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r * 0.2, cy + Math.sin(a) * r * 0.2);
    ctx.lineTo(cx + Math.cos(a) * r * (0.78 + fuerza * 0.18), cy + Math.sin(a) * r * (0.78 + fuerza * 0.18));
    ctx.stroke();
  }
  ctx.restore();
}

function decorarRuedaNeon(ctx, cx, cy, r, angulo, slice, n, fuerza, parte = 'todo', paridad = 0) {
  const ROSA = '#FF3D8B';
  const CIAN = '#22E0E6';
  const TAU = Math.PI * 2;
  ctx.save();
  if (parte !== 'fijo') {
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, TAU);
    ctx.clip();
    ctx.strokeStyle = 'rgba(34, 224, 230, .6)';
    ctx.shadowColor = CIAN;
    ctx.shadowBlur = 8;
    ctx.lineWidth = 2;
    for (let i = 0; i < n; i += 1) {
      const a = angulo + i * slice - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r * 0.2, cy + Math.sin(a) * r * 0.2);
      ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      ctx.stroke();
    }
    ctx.restore();

    ctx.lineWidth = 12;
    ctx.strokeStyle = ROSA;
    ctx.shadowColor = ROSA;
    ctx.shadowBlur = 26;
    ctx.beginPath();
    ctx.arc(cx, cy, r + 4, 0, TAU);
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = 'rgba(255, 220, 236, .75)';
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(34, 224, 230, .75)';
    ctx.shadowColor = CIAN;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(cx, cy, r - 9, 0, TAU);
    ctx.stroke();

    const rc = r * 0.21;
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#0c0a16';
    ctx.beginPath();
    ctx.arc(cx, cy, rc, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, .08)';
    ctx.lineWidth = 1.5;
    for (let j = 0; j < 5; j += 1) {
      ctx.beginPath();
      ctx.arc(cx, cy, rc * (0.48 + j * 0.11), 0, TAU);
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(34, 224, 230, .45)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, rc * 0.78, angulo * 1.6, angulo * 1.6 + 1.1);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, rc * 0.78, angulo * 1.6 + Math.PI, angulo * 1.6 + Math.PI + 1.1);
    ctx.stroke();
    ctx.strokeStyle = CIAN;
    ctx.shadowColor = CIAN;
    ctx.shadowBlur = 16;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, cy, rc, 0, TAU);
    ctx.stroke();
    ctx.fillStyle = CIAN;
    ctx.beginPath();
    ctx.arc(cx, cy, rc * 0.34, 0, TAU);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#0c0a16';
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, TAU);
    ctx.fill();
  }

  if (parte !== 'cara') {
    const bombitas = 20;
    for (let k = 0; k < bombitas; k += 1) {
      const a = (k / bombitas) * TAU;
      const prendida = fuerza > 0.05 ? (k + paridad) % 2 === 0 : true;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(a) * (r + 4), cy + Math.sin(a) * (r + 4), 5.5, 0, TAU);
      ctx.fillStyle = prendida ? '#E9FEFF' : 'rgba(34, 224, 230, .35)';
      ctx.shadowColor = CIAN;
      ctx.shadowBlur = prendida ? 16 : 0;
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.moveTo(cx - 22, cy - r - 30);
    ctx.lineTo(cx + 22, cy - r - 30);
    ctx.lineTo(cx, cy - r + 22);
    ctx.closePath();
    ctx.fillStyle = '#1a1430';
    ctx.fill();
    ctx.lineJoin = 'round';
    ctx.lineWidth = 5;
    ctx.strokeStyle = ROSA;
    ctx.shadowColor = ROSA;
    ctx.shadowBlur = 18;
    ctx.stroke();
  }
  ctx.restore();
}

async function crearMotor(canvas, opciones, pal, hasta, animar) {
  const ctx = canvas.getContext('2d');
  if (!ctx || opciones.length === 0) {
    canvas.dataset.sectores = '0';
    canvas.classList.add('is-vacia');
    canvas.style.display = 'none';
    canvas.style.visibility = 'hidden';
    canvas.style.boxShadow = 'none';
    if (canvas.parentElement) {
      canvas.parentElement.classList.add('is-vacia');
      canvas.parentElement.style.display = 'none';
    }
    return;
  }
  canvas.classList.remove('is-vacia');
  canvas.style.display = '';
  canvas.style.visibility = 'visible';
  canvas.dataset.sectores = String(opciones.length);
  const giro = pal.efectos.giro;
  await Promise.race([
    precargarAvatares(opciones),
    new Promise((resolve) => setTimeout(resolve, 800)),
  ]);
  const imagenes = opciones.map((opcion) => imagenLista(opcion.foto || (opcion.fotos && opcion.fotos[0]) || ''));
  let angulo = 0;
  let fuerzaGiro = 0;
  const slice = (Math.PI * 2) / opciones.length;
  const neon = pal.rueda === 'neon';
  const tinta = pal.rueda === 'tinta';
  const llanta = pal.rueda === 'llanta';
  if (neon) pal = { ...pal, fuente: '700 17px system-ui, sans-serif' };
  if (document.fonts && document.fonts.load) {
    await Promise.race([document.fonts.load(pal.fuente).catch(() => {}), new Promise((resolve) => setTimeout(resolve, 1200))]);
  }
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const r = Math.min(cx, cy) * 0.86;
  const lienzo = (w, h) => {
    const c = document.createElement('canvas');
    c.width = Math.ceil(w);
    c.height = Math.ceil(h);
    return c;
  };
  const radio = 28;
  const lado = 56;
  const margenFoto = 12;
  let cara = null;
  let lineas = null;
  const fotos = [];
  const nombres = [];
  const fijos = new Map();
  const pintarCara = () => {
    cara = lienzo(canvas.width, canvas.height);
    const c = cara.getContext('2d');
    c.save();
    c.beginPath();
    c.arc(cx, cy, r, 0, Math.PI * 2);
    c.clip();
    if (giro.papel) pintarPapel(c, canvas.width, canvas.height);
    c.fillStyle = pal.fondo;
    c.beginPath();
    c.arc(cx, cy, r, 0, Math.PI * 2);
    c.fill();
    opciones.forEach((opcion, i) => {
      const a0 = i * slice - Math.PI / 2;
      c.beginPath();
      c.moveTo(cx, cy);
      c.arc(cx, cy, r, a0, a0 + slice);
      c.closePath();
      c.fillStyle = i % 2 === 0 ? pal.sectorA : pal.sectorB;
      c.fill();
      if (giro.trama && i % 2 === 1) pintarTrama(c, cx, cy, r, a0, a0 + slice);
    });
    c.restore();
    if (neon) decorarRuedaNeon(c, cx, cy, r, 0, slice, opciones.length, 0, 'cara');
    else if (tinta) decorarRuedaTinta(c, cx, cy, r, 0, slice, opciones.length, 'cara');
    else if (llanta) decorarRuedaLlanta(c, cx, cy, r, 0, slice, opciones.length, 'cara');
  };
  const pintarFoto = (i) => {
    const t = (radio + margenFoto) * 2;
    const sprite = lienzo(t, t);
    const c = sprite.getContext('2d');
    const x = t / 2;
    const y = t / 2;
    const foto = opciones[i].foto || (opciones[i].fotos && opciones[i].fotos[0]) || '';
    const imagen = imagenes[i] || imagenLista(foto);
    c.save();
    c.beginPath();
    c.arc(x, y, radio, 0, Math.PI * 2);
    c.clip();
    if (imagen && imagen.naturalWidth > 0) c.drawImage(imagen, x - lado / 2, y - lado / 2, lado, lado);
    else {
      c.fillStyle = pal.fotoHueco;
      c.fill();
    }
    c.restore();
    c.beginPath();
    c.arc(x, y, radio, 0, Math.PI * 2);
    if (neon) {
      c.strokeStyle = i % 2 === 0 ? '#FF3D8B' : '#22E0E6';
      c.shadowColor = c.strokeStyle;
      c.shadowBlur = 10;
      c.lineWidth = 3;
    } else if (tinta) {
      c.strokeStyle = '#111';
      c.lineWidth = 5;
      c.stroke();
      c.beginPath();
      c.arc(x, y, radio + 5, 0, Math.PI * 2);
      c.strokeStyle = '#C41E3A';
      c.lineWidth = 3;
    } else if (llanta) {
      c.strokeStyle = '#111';
      c.lineWidth = 7;
      c.stroke();
      c.beginPath();
      c.arc(x, y, radio + 1, 0, Math.PI * 2);
      c.strokeStyle = '#fff';
      c.lineWidth = 3;
    } else {
      c.strokeStyle = pal.texto;
      c.lineWidth = 2;
    }
    c.stroke();
    fotos[i] = sprite;
  };
  const pintarNombre = (i) => {
    const opcion = opciones[i];
    const nombre = neon || tinta || llanta ? nombreFicha(opcion.titulo, true) : (opcion.titulo || '');
    const medida = canvas.getContext('2d');
    medida.font = pal.fuente;
    const alto = parseInt(String(pal.fuente).match(/(\d+)px/)?.[1] || '16', 10);
    const ancho = medida.measureText(nombre).width;
    const sprite = lienzo(ancho + 24, alto * 2 + 16);
    const c = sprite.getContext('2d');
    c.font = pal.fuente;
    c.textAlign = 'center';
    c.textBaseline = 'alphabetic';
    const nx = sprite.width / 2;
    const ny = sprite.height / 2 + alto * 0.35;
    if (neon) {
      c.shadowColor = 'rgba(0, 0, 0, .85)';
      c.shadowBlur = 4;
    }
    if (tinta || llanta) {
      c.lineJoin = 'round';
      c.lineWidth = 6;
      c.strokeStyle = tinta ? '#FFF6DC' : '#111';
      c.strokeText(nombre, nx, ny);
    }
    c.fillStyle = pal.texto;
    c.fillText(nombre, nx, ny);
    nombres[i] = { sprite, dy: alto * 0.35 };
  };
  const pintarFijo = (variante) => {
    const sprite = lienzo(canvas.width, canvas.height);
    const c = sprite.getContext('2d');
    if (neon) decorarRuedaNeon(c, cx, cy, r, 0, slice, opciones.length, variante === 'reposo' ? 0 : 1, 'fijo', variante === 'impar' ? 1 : 0);
    else if (tinta) decorarRuedaTinta(c, cx, cy, r, 0, slice, opciones.length, 'fijo');
    else if (llanta) decorarRuedaLlanta(c, cx, cy, r, 0, slice, opciones.length, 'fijo');
    else {
      c.beginPath();
      c.moveTo(cx, cy - r - 2);
      c.lineTo(cx - 10, cy - r + 16);
      c.lineTo(cx + 10, cy - r + 16);
      c.closePath();
      c.fillStyle = pal.acento;
      c.fill();
    }
    fijos.set(variante, sprite);
    return sprite;
  };
  const dibujar = () => {
    if (!cara) pintarCara();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angulo);
    ctx.drawImage(cara, -cx, -cy);
    ctx.restore();
    opciones.forEach((opcion, i) => {
      const mid = angulo + i * slice - Math.PI / 2 + slice / 2;
      if (!fotos[i]) pintarFoto(i);
      if (!nombres[i]) pintarNombre(i);
      const foto = fotos[i];
      ctx.drawImage(foto, cx + Math.cos(mid) * r * 0.52 - foto.width / 2, cy + Math.sin(mid) * r * 0.52 - foto.height / 2);
      const { sprite, dy } = nombres[i];
      ctx.drawImage(sprite, cx + Math.cos(mid) * r * 0.8 - sprite.width / 2, cy + Math.sin(mid) * r * 0.8 - sprite.height / 2 - dy);
    });
    if (giro.lineas && ajustesDe(pal.id).efectos && fuerzaGiro > 0.05) {
      if (!lineas) {
        lineas = lienzo(canvas.width, canvas.height);
        const c = lineas.getContext('2d');
        c.beginPath();
        c.arc(cx, cy, r, 0, Math.PI * 2);
        c.clip();
        pintarLineasVelocidad(c, cx, cy, r, 1, pal.id);
      }
      ctx.save();
      ctx.globalAlpha = 0.35 + fuerzaGiro * 0.65;
      ctx.drawImage(lineas, 0, 0);
      ctx.restore();
    }
    const variante = neon && fuerzaGiro > 0.05 ? (Math.floor(performance.now() / 110) % 2 ? 'impar' : 'par') : 'reposo';
    ctx.drawImage(fijos.get(variante) || pintarFijo(variante), 0, 0);
  };
  opciones.forEach((opcion, i) => {
    const src = opcion.foto || (opcion.fotos && opcion.fotos[0]);
    if (!src || imagenes[i]) return;
    void decodificarFoto(src).then((imagen) => {
      if (!imagen) return;
      imagenes[i] = imagen;
      fotos[i] = null;
      dibujar();
    });
  });
  const hastaId = String(hasta || '').split(',').pop();
  const idx = Math.max(0, opciones.findIndex((opcion) => {
    const id = String(opcion.id);
    return id === String(hasta) || id === hastaId || id.endsWith(`:${hastaId}`) || id.split(':').pop() === hastaId;
  }));
  const destino = -idx * slice;
  if (animar === false) {
    angulo = destino;
    dibujar();
    return;
  }
  dibujar();
  const t0 = performance.now();
  const delta = destino - (Math.PI * 2 * 6);
  let marca = 0;
  canvas.classList.add('is-girando');
  const paso = (ahora) => {
    const t = Math.min(1, (ahora - t0) / 6800);
    fuerzaGiro = 1 - t;
    angulo = delta * (1 - Math.exp(-4.4 * t)) / (1 - Math.exp(-4.4));
    const cruces = Math.abs(Math.floor(angulo / slice) - Math.floor(marca / slice));
    if (cruces > 0 && ajustesDe(pal.id).sonido) tocarSonido('ruleta-clic', fuerzaGiro);
    marca = angulo;
    dibujar();
    if (t < 1) requestAnimationFrame(paso);
    else {
      fuerzaGiro = 0;
      canvas.classList.remove('is-girando');
      if (ajustesDe(pal.id).sonido) tocarSonido('ruleta-cae');
      dibujar();
    }
  };
  requestAnimationFrame(paso);
}

// Meteoro (H5): neumático con dibujo y anillo amarillo, tapa de rueda cromada con espiral y puntero rojo
// con punta a cuadros.
function decorarRuedaLlanta(ctx, cx, cy, r, angulo, slice, n, parte = 'todo') {
  const TAU = Math.PI * 2;
  ctx.save();
  if (parte !== 'fijo') {
    ctx.lineCap = 'butt';
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    for (let i = 0; i < n; i += 1) {
      const a = angulo + i * slice - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r * 0.15, cy + Math.sin(a) * r * 0.15);
      ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(cx, cy, r + 40, 0, TAU);
    ctx.arc(cx, cy, r + 30, 0, TAU, true);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy, r + 36, 0, TAU);
    ctx.arc(cx, cy, r, 0, TAU, true);
    ctx.fillStyle = '#161616';
    ctx.fill();
    ctx.strokeStyle = '#2e2e2e';
    ctx.lineWidth = 7;
    const tacos = 56;
    for (let k = 0; k < tacos; k += 1) {
      const a = angulo + (k / tacos) * TAU;
      const b = a + 0.05;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * (r + 12), cy + Math.sin(a) * (r + 12));
      ctx.lineTo(cx + Math.cos(b) * (r + 22), cy + Math.sin(b) * (r + 22));
      ctx.lineTo(cx + Math.cos(a) * (r + 32), cy + Math.sin(a) * (r + 32));
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(cx, cy, r + 4, 0, TAU);
    ctx.strokeStyle = '#FFD100';
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, TAU);
    ctx.strokeStyle = '#111';
    ctx.lineWidth = 3;
    ctx.stroke();

    const hub = r * 0.16;
    const cromo = ctx.createRadialGradient(cx - hub * 0.4, cy - hub * 0.4, hub * 0.1, cx, cy, hub);
    cromo.addColorStop(0, '#ffffff');
    cromo.addColorStop(0.55, '#c9c9c9');
    cromo.addColorStop(1, '#6d6d6d');
    ctx.beginPath();
    ctx.arc(cx, cy, hub, 0, TAU);
    ctx.fillStyle = cromo;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#111';
    ctx.stroke();
    const interior = hub * 0.72;
    ctx.beginPath();
    ctx.arc(cx, cy, interior, 0, TAU);
    ctx.fillStyle = '#E31C23';
    ctx.fill();
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, interior, 0, TAU);
    ctx.clip();
    ctx.strokeStyle = '#FFD100';
    ctx.lineWidth = interior * 0.22;
    ctx.beginPath();
    for (let t = 0; t <= 1; t += 0.02) {
      const a = angulo + t * Math.PI * 4;
      const rr = interior * t;
      const x = cx + Math.cos(a) * rr;
      const y = cy + Math.sin(a) * rr;
      if (t === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();
    ctx.beginPath();
    ctx.arc(cx, cy, interior, 0, TAU);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#111';
    ctx.stroke();
  }
  if (parte === 'cara') {
    ctx.restore();
    return;
  }
  const top = cy - r - 48;
  const casilla = 9;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - 9, top + 18);
  ctx.lineTo(cx - 9, top + 34);
  ctx.lineTo(cx - 25, top + 34);
  ctx.lineTo(cx, top + 66);
  ctx.lineTo(cx + 25, top + 34);
  ctx.lineTo(cx + 9, top + 34);
  ctx.lineTo(cx + 9, top + 18);
  ctx.closePath();
  ctx.fillStyle = '#E31C23';
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#fff';
  ctx.stroke();
  for (let fila = 0; fila < 2; fila += 1) {
    for (let col = 0; col < 4; col += 1) {
      ctx.fillStyle = (fila + col) % 2 ? '#fff' : '#111';
      ctx.fillRect(cx - 2 * casilla + col * casilla, top + fila * casilla, casilla, casilla);
    }
  }
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 3;
  ctx.strokeRect(cx - 2 * casilla, top, casilla * 4, casilla * 2);
  ctx.restore();
}

function decorarRuedaTinta(ctx, cx, cy, r, angulo, slice, n, parte = 'todo') {
  ctx.save();
  if (parte !== 'fijo') {
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#111';
    ctx.lineWidth = 4;
    for (let i = 0; i < n; i += 1) {
      const a = angulo + i * slice - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r * 0.16, cy + Math.sin(a) * r * 0.16);
      ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(cx, cy, r - 6, 0, Math.PI * 2);
    ctx.strokeStyle = '#C41E3A';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx + 7, cy + 8, r + 9, 0, Math.PI * 2);
    ctx.strokeStyle = '#C41E3A';
    ctx.lineWidth = 16;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, r + 9, 0, Math.PI * 2);
    ctx.strokeStyle = '#111';
    ctx.lineWidth = 16;
    ctx.stroke();
    for (let i = 0; i < n; i += 1) {
      const a = angulo + i * slice - Math.PI / 2;
      ctx.save();
      ctx.translate(cx + Math.cos(a) * (r + 9), cy + Math.sin(a) * (r + 9));
      ctx.rotate(a);
      ctx.fillStyle = '#C41E3A';
      ctx.fillRect(-6, -6, 12, 12);
      ctx.restore();
    }
    const hub = r * 0.16;
    ctx.beginPath();
    ctx.arc(cx, cy, hub, 0, Math.PI * 2);
    ctx.fillStyle = '#C41E3A';
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#111';
    ctx.stroke();
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(-0.14);
    ctx.strokeStyle = '#FFF6DC';
    ctx.lineWidth = 3.5;
    ctx.strokeRect(-hub * 0.52, -hub * 0.52, hub * 1.04, hub * 1.04);
    ctx.strokeRect(-hub * 0.22, -hub * 0.22, hub * 0.44, hub * 0.44);
    ctx.restore();
  }
  if (parte === 'cara') {
    ctx.restore();
    return;
  }
  const top = cy - r - 30;
  ctx.beginPath();
  ctx.moveTo(cx - 22, top);
  ctx.quadraticCurveTo(cx - 4, top + 6, cx + 22, top - 2);
  ctx.lineTo(cx + 6, top + 40);
  ctx.lineTo(cx, top + 56);
  ctx.lineTo(cx - 7, top + 40);
  ctx.closePath();
  ctx.fillStyle = '#111';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx - 7, top + 40);
  ctx.lineTo(cx + 6, top + 40);
  ctx.lineTo(cx, top + 56);
  ctx.closePath();
  ctx.fillStyle = '#C41E3A';
  ctx.fill();
  ctx.restore();
}

const JUGADORES_DEMO = [
  { id: 'p01', titulo: 'Martina López', foto: './arte/demo/avatar-5.webp', mesa: '2', genero: 'mujer' },
  { id: 'p02', titulo: 'Santiago Ruiz', foto: './arte/demo/avatar-12.webp', mesa: '2', genero: 'hombre' },
  { id: 'p03', titulo: 'Valentina Gómez', foto: './arte/demo/avatar-9.webp', mesa: '4', genero: 'mujer' },
  { id: 'p04', titulo: 'Joaquín Fernández', foto: './arte/demo/avatar-15.webp', mesa: '4', genero: 'hombre' },
  { id: 'p05', titulo: 'Camila Torres', foto: './arte/demo/avatar-25.webp', mesa: '7', genero: 'mujer' },
  { id: 'p06', titulo: 'Mateo Herrera', foto: './arte/demo/avatar-33.webp', mesa: '7', genero: 'hombre' },
  { id: 'p07', titulo: 'Lucía Romero', foto: './arte/demo/avatar-47.webp', mesa: '9', genero: 'mujer' },
  { id: 'p08', titulo: 'Benjamín Díaz', foto: './arte/demo/avatar-52.webp', mesa: '9', genero: 'hombre' },
];
const DEDICAS_DEMO = [
  { autor: 'Mesa 4', destinatario: 'El salón', texto: '¡Qué noche!' },
  { autor: 'Invitado', destinatario: 'Mesa 2', texto: 'Los vemos en la pista.' },
];
const USUARIOS_SMS = [
  {
    id: 'p01',
    titulo: 'Martina López',
    foto: './arte/demo/avatar-5.webp',
    lado: 'in',
    frases: ['¿Bailamos la próxima?', 'Estoy en la mesa 2', 'Te veo en la pista'],
  },
  {
    id: 'p02',
    titulo: 'Santiago Ruiz',
    foto: './arte/demo/avatar-12.webp',
    lado: 'out',
    frases: ['Dale, nos vemos', 'Ya voy para allá', 'Te espero en la barra'],
  },
];

let capasServidor = [];
let dedicasServidor = [];
let avataresServidor = [];
let smsClavesVistas = new Set();
const smsFraseIdx = { p01: 0, p02: 0 };
const capasDemo = new Map();
let dedicasDemo = [];
const CLAVE_PIEL = 'fonomeets.pantalla.piel';
function pielGuardada() {
  try {
    const valor = localStorage.getItem(CLAVE_PIEL);
    return ['nocturna', 'manga', 'meteoro', 'doraemon'].includes(valor) ? valor : '';
  } catch (error) {
    return '';
  }
}
let demoPiel = pielGuardada() || 'nocturna';
let pielSinCapas = pielGuardada();
const demoAjustes = { cantidad: 2, rechazo: false, claseVoto: 'parejas', desde: 'Mesa 2', hacia: 'Mesa 7', texto: '¿Bailamos la próxima?', pesoMensaje: 'accesorio', fondo: 'actual' };
let demoDialogoTipo = '';
let demoTanda = 0;
const demoEsperas = [];

function guardarServidor(capas, dedicatorias, avatares) {
  capasServidor = capas || [];
  dedicasServidor = dedicatorias || [];
  avataresServidor = avatares || [];
}

function refrescarPantalla() {
  const porTipo = new Map();
  for (const capa of capasServidor) {
    if (capa && capa.tipo) porTipo.set(capa.tipo, capa);
  }
  for (const [tipo, capa] of capasDemo) porTipo.set(tipo, capa);
  pintarCapas([...porTipo.values()], [...dedicasServidor, ...dedicasDemo], [...avataresServidor, ...JUGADORES_DEMO]);
  pintarRielDemo();
}

function cancelarDemo() {
  demoTanda += 1;
  while (demoEsperas.length) clearTimeout(demoEsperas.pop());
}

function esperarDemo(ms, id) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      const i = demoEsperas.indexOf(timer);
      if (i >= 0) demoEsperas.splice(i, 1);
      resolve(id === demoTanda);
    }, ms);
    demoEsperas.push(timer);
  });
}

function ponerCapaDemo(capa) {
  const pedido = { fondo: demoAjustes.fondo === 'juego' ? 'juego' : 'actual', piel: demoPiel, ajustes: ajustesDe(demoPiel), ...capa };
  capasDemo.set(pedido.tipo, pedido);
  refrescarPantalla();
}

function armarSectoresDemo() {
  return JUGADORES_DEMO.map((jugador) => ({
    id: jugador.id,
    titulo: jugador.titulo,
    foto: jugador.foto,
    fotos: [jugador.foto],
  }));
}

function armarRuedasDemo() {
  const sectores = armarSectoresDemo();
  const corte = Math.ceil(sectores.length / 2);
  return [
    { sectores: sectores.slice(0, corte) },
    { sectores: sectores.slice(corte) },
  ];
}

function sinRepetirDemo(sectores, cantidad) {
  const bolsa = [...sectores];
  const salida = [];
  const tope = Math.max(0, Math.min(cantidad, bolsa.length));
  while (salida.length < tope) salida.push(bolsa.splice(Math.floor(Math.random() * bolsa.length), 1)[0]);
  return salida;
}

function escenarioRuletaDemo(ruedas, opciones, pareja, extra) {
  const fuera = new Set([...(extra.fuera || []), ...(extra.pila || []).flat().map((item) => item.id)]);
  return {
    tipo: 'ruleta',
    opciones: opciones.filter((item) => !fuera.has(item.id)),
    ruedas: extra.cierre ? [] : ruedas.map((rueda, indice) => ({
      opciones: rueda.sectores.filter((sector) => !fuera.has(sector.id)),
      hasta: extra.hasta?.[indice] ?? pareja.find((persona) => persona.rueda === indice)?.id ?? '',
      animar: extra.animar?.[indice] ?? false,
    })),
    pila: extra.pila || [],
    centro: extra.centro === undefined ? pareja.slice(0, 2) : extra.centro,
    rechazo: extra.cierre ? null : (extra.rechazo || null),
    cierre: Boolean(extra.cierre),
    quedaMs: extra.cierre ? undefined : 90000,
  };
}

async function demoRuleta(id, conRechazo) {
  const ruedas = armarRuedasDemo();
  const listas = ruedas.map((rueda) => sinRepetirDemo(rueda.sectores, demoAjustes.cantidad));
  const opciones = ruedas.flatMap((rueda) => rueda.sectores);
  const pila = [];
  const confirmados = [];
  const vueltas = Math.max(...listas.map((lista) => lista.length));
  for (let ronda = 0; ronda < vueltas; ronda += 1) {
    let pareja = listas
      .map((lista, indice) => (lista[ronda] ? { ...lista[ronda], rueda: indice } : null))
      .filter(Boolean)
      .slice(0, 2);
    if (pareja.length === 0) continue;
    ponerCapaDemo(escenarioRuletaDemo(ruedas, opciones, pareja, {
      pila, fuera: confirmados, centro: [], animar: ruedas.map((_, indice) => Boolean(pareja.find((persona) => persona.rueda === indice))),
    }));
    if (!(await esperarDemo(6800, id))) return;
    ponerCapaDemo(escenarioRuletaDemo(ruedas, opciones, pareja, { pila, fuera: confirmados }));
    if (!(await esperarDemo(1100, id))) return;
    if (conRechazo && ronda === 0 && pareja[0]) {
      const persona = pareja[0];
      ponerCapaDemo(escenarioRuletaDemo(ruedas, opciones, pareja, {
        pila, fuera: confirmados, centro: [], rechazo: { ...persona, rueda: persona.rueda },
      }));
      if (!(await esperarDemo(1100, id))) return;
      const usados = new Set([...pila.flat().map((item) => item.id), ...pareja.map((item) => item.id)]);
      const reemplazo = (ruedas[persona.rueda]?.sectores || []).find((sector) => !usados.has(sector.id));
      if (reemplazo) {
        ponerCapaDemo(escenarioRuletaDemo(ruedas, opciones, pareja, {
          pila, fuera: confirmados, centro: [],
          animar: ruedas.map((_, indice) => indice === persona.rueda),
          hasta: ruedas.map((_, indice) => (indice === persona.rueda ? reemplazo.id : pareja.find((item) => item.rueda === indice)?.id || '')),
        }));
        if (!(await esperarDemo(6800, id))) return;
        pareja = pareja.map((item) => (item.id === persona.id ? { ...reemplazo, rueda: persona.rueda } : item));
        ponerCapaDemo(escenarioRuletaDemo(ruedas, opciones, pareja, { pila, fuera: confirmados }));
        if (!(await esperarDemo(900, id))) return;
      }
    }
    pareja.forEach((item) => confirmados.push(item.id));
    if (pareja.length === 2) {
      pila.push(pareja.slice(0, 2));
      const ultima = ronda === vueltas - 1;
      ponerCapaDemo(escenarioRuletaDemo(ruedas, opciones, pareja, {
        pila: pila.map((grupo) => grupo.slice(0, 2)), fuera: confirmados, centro: [], cierre: ultima,
      }));
      if (!(await esperarDemo(ultima ? 1400 : 800, id))) return;
      if (ultima) return;
    }
  }
}

async function demoVotacion(id) {
  const clase = demoAjustes.claseVoto;
  const opciones = clase === 'temas'
    ? [
      { id: 't1', titulo: 'Levitating · Dua Lipa', foto: '', fotos: [] },
      { id: 't2', titulo: 'As It Was · Harry Styles', foto: '', fotos: [] },
      { id: 't3', titulo: 'Flowers · Miley Cyrus', foto: '', fotos: [] },
    ]
    : clase === 'videos'
      ? [
        { id: 'v1', titulo: 'Never Gonna Give You Up · Rick Astley', foto: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg' },
        { id: 'v2', titulo: 'Blinding Lights · The Weeknd', foto: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg' },
        { id: 'v3', titulo: 'Despacito · Luis Fonsi', foto: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg' },
      ]
      : clase === 'participantes'
        ? JUGADORES_DEMO.slice(0, 4).map((jugador) => ({ id: jugador.id, titulo: jugador.titulo, foto: jugador.foto, fotos: [jugador.foto] }))
        : [
          { id: 'par1', titulo: 'Martina López y Santiago Ruiz', foto: JUGADORES_DEMO[0].foto, fotos: [JUGADORES_DEMO[0].foto, JUGADORES_DEMO[1].foto] },
          { id: 'par2', titulo: 'Valentina Gómez y Joaquín Fernández', foto: JUGADORES_DEMO[2].foto, fotos: [JUGADORES_DEMO[2].foto, JUGADORES_DEMO[3].foto] },
          { id: 'par3', titulo: 'Camila Torres y Mateo Herrera', foto: JUGADORES_DEMO[4].foto, fotos: [JUGADORES_DEMO[4].foto, JUGADORES_DEMO[5].foto] },
        ];
  const texto = clase === 'temas' ? 'La más votada entra a la cola'
    : clase === 'videos' ? 'El video más votado'
      : clase === 'participantes' ? 'El participante más votado'
        : 'La pareja más votada';
  ponerCapaDemo({ tipo: 'votacion', texto, opciones, quedaMs: 8000, ganador: '' });
  if (!(await esperarDemo(5000, id))) return;
  ponerCapaDemo({ tipo: 'votacion', texto, opciones, quedaMs: 1800, ganador: opciones[0].id });
}

function htmlBotonesSms() {
  return '<div class="demo-sms-users">' + USUARIOS_SMS.map((user) => (
    `<button type="button" data-sms-user="${escapar(user.id)}"><img src="${escapar(user.foto)}" alt=""><span>${escapar(user.titulo.split(' ')[0])}</span></button>`
  )).join('') + '</div>';
}

function demoSmsUsuario(userId) {
  const user = USUARIOS_SMS.find((item) => item.id === userId) || USUARIOS_SMS[0];
  const escrito = String(demoAjustes.texto || '').trim();
  const idx = smsFraseIdx[user.id] || 0;
  smsFraseIdx[user.id] = idx + 1;
  const texto = escrito || user.frases[idx % user.frases.length];
  const previa = capasDemo.get('mensaje');
  const filas = Array.isArray(previa?.filas) ? previa.filas.map((item) => ({ ...item, nuevo: false })) : [];
  filas.push({
    id: `sms-${Date.now()}-${user.id}`,
    autor: user.titulo,
    foto: user.foto,
    texto,
    lado: user.lado,
    cuando: new Date().toISOString(),
    nuevo: true,
  });
  ponerCapaDemo({ tipo: 'mensaje', filas, peso: demoAjustes.pesoMensaje || 'accesorio' });
}

function demoMensaje() {
  if (!capasDemo.has('mensaje')) ponerCapaDemo({ tipo: 'mensaje', filas: [], peso: demoAjustes.pesoMensaje || 'accesorio' });
}

function demoMatch() {
  ponerCapaDemo({
    tipo: 'match',
    desde: demoAjustes.desde || 'Martina López',
    hacia: demoAjustes.hacia || 'Santiago Ruiz',
    texto: demoAjustes.texto || 'Se gustaron',
    quedaMs: 12000,
  });
}

function demoCerrar() {
  cancelarDemo();
  capasDemo.clear();
  dedicasDemo = [];
  smsClavesVistas = new Set();
  refrescarPantalla();
}

async function correrDemo(tipo) {
  prepararSonido();
  if (tipo === 'cerrar') {
    demoCerrar();
    return;
  }
  if (tipo === 'mensajes') {
    dedicasDemo = dedicasDemo.length ? [] : DEDICAS_DEMO;
    refrescarPantalla();
    return;
  }
  if (tipo === 'mensaje') {
    demoMensaje();
    return;
  }
  if (tipo === 'match') {
    demoMatch();
    return;
  }
  cancelarDemo();
  const id = demoTanda;
  if (tipo === 'votacion') {
    await demoVotacion(id);
    return;
  }
  await demoRuleta(id, tipo === 'rechazo');
}

const PIELES_DEMO = ['nocturna', 'manga', 'meteoro', 'doraemon'];
const PIELES_INFO = {
  nocturna: { nombre: 'Nocturna', estado: 'Arte final' },
  manga: { nombre: 'Manga', estado: 'Arte parcial' },
  meteoro: { nombre: 'Meteoro', estado: 'Arte parcial' },
  doraemon: { nombre: 'Cielo', estado: 'Arte pendiente' },
};

function mostrarElegirPiel() {
  ocultarModoJuego();
  let caja = document.getElementById('elige-piel');
  if (!caja) {
    caja = document.createElement('div');
    caja.id = 'elige-piel';
    caja.className = 'modo-juego elige-piel';
    caja.setAttribute('role', 'dialog');
    contenedorModoJuego().appendChild(caja);
  }
  caja.innerHTML = '<p>Piel de la pantalla</p><div class="modo-juego-opciones">'
    + PIELES_DEMO.map((id) => `<button type="button" data-elige-piel="${id}" class="${id === demoPiel ? 'is-on' : ''}"><b>${PIELES_INFO[id].nombre}</b><small>${PIELES_INFO[id].estado}</small></button>`).join('')
    + '</div>';
  caja.hidden = false;
}

function ocultarElegirPiel() {
  const caja = document.getElementById('elige-piel');
  if (caja) caja.hidden = true;
}

function elegirPielAbierto() {
  const caja = document.getElementById('elige-piel');
  return Boolean(caja && !caja.hidden);
}

document.addEventListener('click', (evento) => {
  const boton = evento.target.closest('[data-elige-piel]');
  if (!boton) return;
  const id = boton.getAttribute('data-elige-piel');
  try { localStorage.setItem(CLAVE_PIEL, id); } catch (error) { /* modo privado */ }
  cambiarPielDemo(id);
  ocultarElegirPiel();
  avisoDemo(`Piel: ${PIELES_INFO[id].nombre}`);
});
let demoAvisoTimer = 0;
let demoSmsTurno = 0;

function avisoDemo(texto) {
  const aviso = document.getElementById('demo-aviso');
  if (!aviso) return;
  aviso.textContent = texto;
  aviso.classList.add('is-on');
  clearTimeout(demoAvisoTimer);
  demoAvisoTimer = setTimeout(() => aviso.classList.remove('is-on'), 1600);
}

function cambiarPielDemo(id) {
  demoPiel = id;
  pielSinCapas = id;
  for (const [tipo, capa] of capasDemo) capasDemo.set(tipo, { ...capa, piel: demoPiel, ajustes: ajustesDe(demoPiel) });
  refrescarPantalla();
}

function botonesRielDemo() {
  const ajustes = ajustesDe(demoPiel);
  const piel = pielDe(demoPiel);
  const mascota = Boolean(piel.mascota) && ajustes.efectos && ajustes.objetos.mascota !== false;
  return [
    { id: 'ruleta', nombre: 'Ruleta', on: capasDemo.has('ruleta') },
    { id: 'votacion', nombre: 'Votación', on: capasDemo.has('votacion') },
    { id: 'mensaje', nombre: 'Chat', on: capasDemo.has('mensaje') },
    ...(capasDemo.has('mensaje') ? [{ id: 'sms', nombre: 'Nuevo mensaje', on: false }] : []),
    { id: 'match', nombre: 'Match', on: capasDemo.has('match') },
    { id: 'mensajes', nombre: 'Dedicatorias', on: dedicasDemo.length > 0 },
    { sep: true },
    { id: 'piel', nombre: `Elegir piel (${PIELES_INFO[piel.id]?.nombre || piel.id})`, on: false, texto: (PIELES_INFO[piel.id]?.nombre || piel.id).slice(0, 2).toUpperCase() },
    { id: 'fondo', nombre: `Video en juegos: ${(MODOS_JUEGO.find((modo) => modo.id === modoJuego()) || { nombre: 'sin elegir' }).nombre}`, on: Boolean(modoJuego()) && modoJuego() !== 'seguir' },
    ...(piel.mascota ? [{ id: 'mascota', nombre: 'Mascota', on: mascota }] : []),
    { id: 'efectos', nombre: 'Efectos', on: ajustes.efectos },
    { id: 'sonido', nombre: 'Sonido', on: ajustes.sonido },
    { id: 'grilla', nombre: 'Grilla', on: grillaVisible() },
    { id: 'video', nombre: 'Recargar video', on: false },
    { sep: true },
    { id: 'ajustes', nombre: 'Ajustes', on: false },
  ];
}

function pintarRielDemo() {
  const riel = document.getElementById('demo-riel');
  if (!riel) return;
  const html = botonesRielDemo().map((boton) => (boton.sep
    ? '<i class="demo-riel-sep"></i>'
    : `<button type="button" data-riel="${boton.id}" class="${boton.on ? 'is-on' : ''}" aria-pressed="${boton.on}" aria-label="${escapar(boton.nombre)}" title="${escapar(boton.nombre)}">`
      + (boton.texto ? `<b>${escapar(boton.texto)}</b>` : DEMO_ICONOS[boton.id])
      + '</button>'
  )).join('');
  // La pantalla se refresca muchas veces por segundo durante la ruleta: redibujar igual haría perder toques.
  if (riel.dataset.html === html) return;
  riel.dataset.html = html;
  riel.innerHTML = html;
}

let demoTocadoTimer = 0;

function accionRielDemo(id) {
  prepararSonido();
  const raiz = document.getElementById('demo-capas');
  if (raiz) {
    raiz.classList.add('is-tocado');
    clearTimeout(demoTocadoTimer);
    demoTocadoTimer = setTimeout(() => raiz.classList.remove('is-tocado'), 4000);
  }
  const ajustes = ajustesDe(demoPiel);
  const estado = (encendido) => (encendido ? 'sí' : 'no');
  if (id === 'ruleta' || id === 'votacion') {
    const estaba = capasDemo.has(id);
    cancelarDemo();
    capasDemo.delete('ruleta');
    capasDemo.delete('votacion');
    refrescarPantalla();
    if (!estaba) void correrDemo(id === 'ruleta' && demoAjustes.rechazo ? 'rechazo' : id);
    avisoDemo(`${id === 'ruleta' ? 'Ruleta' : 'Votación'}: ${estado(!estaba)}`);
  } else if (id === 'mensaje') {
    const estaba = capasDemo.has('mensaje');
    if (estaba) {
      capasDemo.delete('mensaje');
      refrescarPantalla();
    } else {
      demoMensaje();
      demoSmsUsuario('p01');
      demoSmsUsuario('p02');
    }
    avisoDemo(`Chat: ${estado(!estaba)}`);
  } else if (id === 'sms') {
    demoSmsTurno += 1;
    demoSmsUsuario(demoSmsTurno % 2 ? 'p01' : 'p02');
    avisoDemo('Mensaje enviado');
  } else if (id === 'match') {
    const estaba = capasDemo.has('match');
    if (estaba) {
      capasDemo.delete('match');
      refrescarPantalla();
    } else {
      ponerCapaDemo({ tipo: 'match', desde: JUGADORES_DEMO[0].titulo, hacia: JUGADORES_DEMO[1].titulo, texto: 'Se gustaron', quedaMs: 12000 });
    }
    avisoDemo(`Match: ${estado(!estaba)}`);
  } else if (id === 'mensajes') {
    void correrDemo('mensajes');
    avisoDemo(`Dedicatorias: ${estado(dedicasDemo.length > 0)}`);
  } else if (id === 'piel') {
    if (elegirPielAbierto()) ocultarElegirPiel();
    else mostrarElegirPiel();
  } else if (id === 'fondo') {
    if (modoJuegoAbierto()) ocultarModoJuego();
    else mostrarModoJuego(true);
  } else if (id === 'mascota' || id === 'efectos' || id === 'sonido') {
    const nuevo = id === 'mascota'
      ? { ...ajustes, efectos: true, objetos: { ...ajustes.objetos, mascota: !(ajustes.efectos && ajustes.objetos.mascota !== false) } }
      : { ...ajustes, [id]: !ajustes[id] };
    guardarAjustesPiel(demoPiel, nuevo);
    cambiarPielDemo(demoPiel);
    const valor = id === 'mascota' ? nuevo.objetos.mascota : nuevo[id];
    avisoDemo(`${id === 'mascota' ? 'Mascota' : id === 'efectos' ? 'Efectos' : 'Sonido'}: ${estado(valor)}`);
  } else if (id === 'video') {
    avisoDemo(recargarVideo(true) ? 'Recargando el video' : 'No hay video de YouTube');
  } else if (id === 'grilla') {
    alternarGrilla();
    avisoDemo(`Grilla: ${estado(grillaVisible())}`);
  } else if (id === 'ajustes') {
    const root = document.getElementById('demo-capas');
    if (root && root.classList.contains('is-dock')) cerrarDockDemo();
    else abrirDockDemo();
  }
  pintarRielDemo();
}

const DEMO_ICONOS = {
  video: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12a7 7 0 1 1-2.05-4.95" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M17.5 3.5v4h-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 9.2v5.6l4.6-2.8z" fill="currentColor"/></svg>',
  ruleta: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 3v9l6.5 3.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>',
  votacion: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="3.5" width="16" height="17" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 12.2 10.4 14.6 16 9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  mensaje: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h14v9.5H9L5 19z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  match: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  mensajes: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h11v8H8l-4 3z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M10 9h10v8h-6l-4 3z" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
  cerrar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  grilla: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v16H4zM9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  sms: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h14v9.5H9L5 19z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 8.2v5M9.5 10.7h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  fondo: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 16l5-5 4 4 2.5-2.5 5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="16" cy="9" r="1.6" fill="currentColor"/></svg>',
  mascota: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="6" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9" r="1.6" fill="currentColor"/><path d="M9 16.5h6v4H9zM9 18.5H6M15 18.5h3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  efectos: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M18 16v4M16 18h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  sonido: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M15.5 9a4 4 0 0 1 0 6M17.8 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  ajustes: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h9M18 7h1M5 12h3M12 12h7M5 17h11M20 17h-1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="16" cy="7" r="2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="10" cy="12" r="2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="17" r="2" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
};

const DEMO_FICHAS = [
  { id: 'ruleta', nombre: 'Ruleta' },
  { id: 'votacion', nombre: 'Votación' },
  { id: 'mensaje', nombre: 'Mensaje' },
  { id: 'match', nombre: 'Match' },
  { id: 'mensajes', nombre: 'Chats' },
  { id: 'cerrar', nombre: 'Quitar' },
];

let demoDockTimer = 0;

function htmlPielesDemo() {
  const ajustes = ajustesDe(demoPiel);
  const piel = pielDe(demoPiel);
  const modoActual = modoJuego();
  const objetos = [...(piel.efectos.objetos || []), ...(piel.mascota ? [{ id: 'mascota' }] : [])].map((objeto) => (
    `<button type="button" data-ajuste-objeto="${objeto.id}" class="${ajustes.efectos && ajustes.objetos[objeto.id] !== false ? 'is-on' : ''}">${OBJETO_NOMBRES[objeto.id] || objeto.id}</button>`
  )).join('');
  return '<div class="demo-dialog-pieles">' + ['nocturna', 'manga', 'meteoro', 'doraemon'].map((id) => (
    `<button type="button" data-piel="${id}" class="${id === demoPiel ? 'is-on' : ''}">${id}</button>`
  )).join('') + '</div>'
    + '<div class="demo-dialog-chips">'
    + MODOS_JUEGO.map((modo) => `<button type="button" data-modo-juego="${modo.id}" class="${modo.id === modoActual ? 'is-on' : ''}">${modo.nombre}</button>`).join('')
    + '</div>'
    + '<label class="demo-check" data-ajuste="sonido"><input type="checkbox"' + (ajustes.sonido ? ' checked' : '') + '> Sonido de la ruleta</label>'
    + '<label class="demo-check" data-ajuste="efectos"><input type="checkbox"' + (ajustes.efectos ? ' checked' : '') + '> Efectos y objetos</label>'
    + (objetos ? '<div class="demo-dialog-chips">' + objetos + '</div>' : '');
}

function htmlDialogoDemo(tipo) {
  if (tipo === 'cerrar') {
    return '<p>Saca las capas de prueba y deja el video.</p><div class="demo-dialog-acciones"><button type="button" data-run="cerrar">Quitar capas</button></div>';
  }
  if (tipo === 'mensajes') {
    return '<p>Mensajes de invitados, encima de lo que esté sonando.</p><div class="demo-dialog-acciones"><button type="button" data-run="mensajes">Mostrar u ocultar</button></div>';
  }
  if (tipo === 'mensaje') {
    const peso = demoAjustes.pesoMensaje === 'destacado' ? 'destacado' : 'accesorio';
    return htmlPielesDemo()
      + '<p>El chat es una capa accesoria al video. Destacalo sólo cuando quieras que robe la escena.</p>'
      + '<div class="demo-dialog-chips">'
      + `<button type="button" data-peso="accesorio" class="${peso === 'accesorio' ? 'is-on' : ''}">Accesorio</button>`
      + `<button type="button" data-peso="destacado" class="${peso === 'destacado' ? 'is-on' : ''}">Destacar</button>`
      + '</div>'
      + '<label>Texto <input id="demo-texto" value="' + escapar(demoAjustes.texto) + '" placeholder="Escribí o dejalo vacío"></label>'
      + htmlBotonesSms();
  }
  if (tipo === 'ruleta') {
    return htmlPielesDemo()
      + '<label>Parejas <input id="demo-cantidad" type="number" min="1" max="8" value="' + demoAjustes.cantidad + '"></label>'
      + '<label class="demo-check"><input id="demo-rechazo" type="checkbox"' + (demoAjustes.rechazo ? ' checked' : '') + '> Probar un rechazo</label>'
      + '<div class="demo-dialog-acciones"><button type="button" data-run="ruleta">Girar</button></div>';
  }
  if (tipo === 'votacion') {
    return htmlPielesDemo()
      + '<div class="demo-dialog-chips">' + ['temas', 'videos', 'participantes', 'parejas'].map((id) => (
        `<button type="button" data-voto="${id}" class="${id === demoAjustes.claseVoto ? 'is-on' : ''}">${id}</button>`
      )).join('') + '</div>'
      + '<div class="demo-dialog-acciones"><button type="button" data-run="votacion">Abrir votación</button></div>';
  }
  const titulo = tipo === 'match' ? 'Animar match' : 'Mostrar mensaje';
  return htmlPielesDemo()
    + '<label>Desde <input id="demo-desde" value="' + escapar(demoAjustes.desde) + '"></label>'
    + '<label>Hacia <input id="demo-hacia" value="' + escapar(demoAjustes.hacia) + '"></label>'
    + '<label>Texto <input id="demo-texto" value="' + escapar(demoAjustes.texto) + '"></label>'
    + '<div class="demo-dialog-acciones"><button type="button" data-run="' + tipo + '">' + titulo + '</button></div>';
}

function leerAjustesDialogo(caja) {
  const cantidad = caja.querySelector('#demo-cantidad');
  if (cantidad) demoAjustes.cantidad = Math.max(1, Math.min(8, Number(cantidad.value) || 2));
  const rechazo = caja.querySelector('#demo-rechazo');
  if (rechazo) demoAjustes.rechazo = rechazo.checked;
  const desde = caja.querySelector('#demo-desde');
  const hacia = caja.querySelector('#demo-hacia');
  const texto = caja.querySelector('#demo-texto');
  if (desde) demoAjustes.desde = desde.value;
  if (hacia) demoAjustes.hacia = hacia.value;
  if (texto) demoAjustes.texto = texto.value;
}

function cerrarDockDemo() {
  const root = document.getElementById('demo-capas');
  if (!root) return;
  root.classList.remove('is-dock');
  clearTimeout(demoDockTimer);
}

function cerrarDialogoDemo() {
  const root = document.getElementById('demo-capas');
  if (!root) return;
  demoDialogoTipo = '';
  root.classList.remove('is-dialogo');
  const dialogo = root.querySelector('#demo-dialogo');
  if (dialogo) dialogo.innerHTML = '';
}

function abrirDockDemo() {
  const root = document.getElementById('demo-capas');
  if (!root) return;
  cerrarDialogoDemo();
  root.classList.add('is-dock');
  clearTimeout(demoDockTimer);
  demoDockTimer = setTimeout(cerrarDockDemo, 6000);
}

function abrirDialogoDemo(tipo) {
  const root = document.getElementById('demo-capas');
  const dialogo = root && root.querySelector('#demo-dialogo');
  const ficha = DEMO_FICHAS.find((item) => item.id === tipo);
  if (!root || !dialogo || !ficha) return;
  clearTimeout(demoDockTimer);
  demoDialogoTipo = tipo;
  root.classList.remove('is-dock');
  root.classList.add('is-dialogo');
  dialogo.innerHTML = '<div class="demo-dialog-caja">'
    + '<header><strong>' + ficha.nombre + '</strong><button type="button" data-demo="cerrar-dialogo" aria-label="Cerrar">✕</button></header>'
    + htmlDialogoDemo(tipo)
    + '</div>';
}

function montarBarraDemo() {
  if (document.getElementById('demo-capas')) return;
  const root = document.createElement('div');
  root.id = 'demo-capas';
  root.className = 'demo-capas';
  root.innerHTML = '<nav class="demo-riel" id="demo-riel" aria-label="Funciones de prueba"></nav>'
    + '<p class="demo-aviso" id="demo-aviso" role="status"></p>'
    + '<div class="demo-dock" id="demo-dock">'
    + DEMO_FICHAS.map((item) => (
      `<button type="button" data-abrir="${item.id}" aria-label="${item.nombre}"><span>${DEMO_ICONOS[item.id]}</span><em>${item.nombre}</em></button>`
    )).join('')
    + '</div>'
    + '<div class="demo-dialogo" id="demo-dialogo"></div>';
  document.body.appendChild(root);
  root.addEventListener('click', (evento) => {
    const riel = evento.target.closest('[data-riel]');
    if (riel) {
      accionRielDemo(riel.getAttribute('data-riel'));
      return;
    }
    const piel = evento.target.closest('[data-piel]');
    if (piel) {
      cambiarPielDemo(piel.getAttribute('data-piel'));
      if (demoDialogoTipo) abrirDialogoDemo(demoDialogoTipo);
      return;
    }
    const objeto = evento.target.closest('[data-ajuste-objeto]');
    if (objeto) {
      const id = objeto.getAttribute('data-ajuste-objeto');
      const actual = ajustesDe(demoPiel);
      guardarAjustesPiel(demoPiel, { ...actual, objetos: { ...actual.objetos, [id]: actual.objetos[id] === false } });
      for (const [tipo, capa] of capasDemo) capasDemo.set(tipo, { ...capa, piel: demoPiel, ajustes: ajustesDe(demoPiel) });
      refrescarPantalla();
      if (demoDialogoTipo) abrirDialogoDemo(demoDialogoTipo);
      return;
    }
    const ajuste = evento.target.closest('[data-ajuste]');
    if (ajuste) {
      const clave = ajuste.getAttribute('data-ajuste');
      const input = ajuste.matches('input') ? ajuste : ajuste.querySelector('input');
      const actual = ajustesDe(demoPiel);
      guardarAjustesPiel(demoPiel, { ...actual, [clave]: input ? input.checked : !actual[clave] });
      for (const [tipo, capa] of capasDemo) capasDemo.set(tipo, { ...capa, piel: demoPiel, ajustes: ajustesDe(demoPiel) });
      refrescarPantalla();
      if (demoDialogoTipo) abrirDialogoDemo(demoDialogoTipo);
      return;
    }
    const voto = evento.target.closest('[data-voto]');
    if (voto) {
      demoAjustes.claseVoto = voto.getAttribute('data-voto');
      root.querySelectorAll('[data-voto]').forEach((boton) => boton.classList.toggle('is-on', boton === voto));
      return;
    }
    const peso = evento.target.closest('[data-peso]');
    if (peso) {
      demoAjustes.pesoMensaje = peso.getAttribute('data-peso') === 'destacado' ? 'destacado' : 'accesorio';
      const previa = capasDemo.get('mensaje');
      if (previa) ponerCapaDemo({ ...previa, peso: demoAjustes.pesoMensaje });
      root.querySelectorAll('[data-peso]').forEach((boton) => boton.classList.toggle('is-on', boton === peso));
      return;
    }
    const smsUser = evento.target.closest('[data-sms-user]');
    if (smsUser) {
      const caja = root.querySelector('.demo-dialog-caja');
      if (caja) leerAjustesDialogo(caja);
      cerrarDialogoDemo();
      demoSmsUsuario(smsUser.getAttribute('data-sms-user'));
      return;
    }
    const abrir = evento.target.closest('[data-abrir]');
    if (abrir) {
      abrirDialogoDemo(abrir.getAttribute('data-abrir'));
      return;
    }
    const run = evento.target.closest('[data-run]');
    if (run) {
      const caja = root.querySelector('.demo-dialog-caja');
      if (caja) leerAjustesDialogo(caja);
      const accion = run.getAttribute('data-run');
      cerrarDialogoDemo();
      void correrDemo(accion === 'ruleta' && demoAjustes.rechazo ? 'rechazo' : accion);
      return;
    }
    const demo = evento.target.closest('[data-demo]');
    if (!demo) {
      if (evento.target === root.querySelector('#demo-dialogo')) cerrarDialogoDemo();
      return;
    }
    const accion = demo.getAttribute('data-demo');
    if (accion === 'cerrar-dialogo') cerrarDialogoDemo();
  });
  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
      cerrarDialogoDemo();
      cerrarDockDemo();
    }
    if ((evento.key === 'g' || evento.key === 'G') && !evento.target.closest('input, textarea')) {
      alternarGrilla();
      pintarRielDemo();
    }
  });
}

async function leer() {
  const id = localId();
  if (!id) return;
  const respuesta = await fetch(`${apiBase()}/api/public/pantalla/${id}`).catch(() => null);
  const cuerpo = respuesta ? await respuesta.json().catch(() => null) : null;
  const avatares = cuerpo?.data?.avatares || [];
  pielesServidor = cuerpo?.data?.pieles || {};
  await precargarAvatares(avatares);
  guardarServidor(cuerpo?.data?.capas || [], cuerpo?.data?.dedicatorias || [], avatares);
  refrescarPantalla();
  aplicarAhora(cuerpo?.data);
}

function escuchar() {
  const id = localId();
  if (!id) return;
  const ws = new WebSocket(`${apiBase().replace(/^http/, 'ws')}/ws/musica?rol=pantalla&localId=${encodeURIComponent(id)}`);
  ws.onmessage = (evento) => {
    try {
      const data = JSON.parse(evento.data);
      if (data.tipo === 'avatares') void precargarAvatares(data.avatares || []);
      if (data.tipo === 'pantalla') {
        if (data.pieles) pielesServidor = data.pieles;
        void precargarAvatares(data.avatares || []);
        guardarServidor(data.capas || [], data.dedicatorias || [], data.avatares || []);
        refrescarPantalla();
        aplicarAhora(data);
      }
    } catch {
      // el poll cubre un frame roto
    }
  };
  ws.onclose = () => setTimeout(escuchar, 2000);
}

async function calentar() {
  const id = localId();
  if (!id) return;
  const respuesta = await fetch(`${apiBase()}/api/public/pantalla/${id}/avatares`).catch(() => null);
  const cuerpo = respuesta ? await respuesta.json().catch(() => null) : null;
  await precargarAvatares(cuerpo?.data?.avatares || []);
}

function playerBase() {
  return new URLSearchParams(location.search).get('en') || '';
}

function playerApi(path) {
  return playerBase() + path;
}

function postEnded(uid) {
  const base = playerBase();
  if (!base) return;
  fetch(playerApi('/api/playback/ended'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ trackUid: uid }),
  }).catch(() => {});
}

// Reproductor de YouTube sin la librería iframe_api: en algunos iPhone (bloqueadores, redes móviles) esa
// cadena de scripts no termina de cargar y el video nunca aparecía. Se habla con el iframe por postMessage,
// el mismo protocolo que usa la librería por dentro.
const YT_ORIGENES = ['https://www.youtube.com', 'https://www.youtube-nocookie.com'];
let ytSiguienteId = 1;
let ytMensajes = 0;

function reproductorYoutube(holder, videoId, vars, eventos) {
  const id = ytSiguienteId++;
  const params = new URLSearchParams({ ...vars, enablejsapi: '1', origin: location.origin, widgetid: String(id) });
  const iframe = document.createElement('iframe');
  iframe.id = holder.id;
  iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?${params}`;
  iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.setAttribute('allowfullscreen', '');
  iframe.title = 'Video de YouTube';
  holder.replaceWith(iframe);
  const info = { playerState: -1, muted: false, volume: undefined, currentTime: 0 };
  let listo = false;
  let ultimo = 0;
  const enviar = (mensaje) => {
    try { iframe.contentWindow?.postMessage(JSON.stringify({ ...mensaje, id, channel: 'widget' }), 'https://www.youtube.com'); } catch (error) { /* iframe ido */ }
  };
  const comando = (func, args = []) => enviar({ event: 'command', func, args });
  const escuchar = setInterval(() => enviar({ event: 'listening' }), 250);
  const alMensaje = (evento) => {
    if (evento.source !== iframe.contentWindow || !YT_ORIGENES.includes(evento.origin)) return;
    let datos;
    try { datos = typeof evento.data === 'string' ? JSON.parse(evento.data) : evento.data; } catch (error) { return; }
    if (!datos || !datos.event) return;
    ytMensajes += 1;
    ultimo = Date.now();
    iframe.classList.add('is-vivo');
    clearInterval(escuchar);
    if ((datos.event === 'infoDelivery' || datos.event === 'initialDelivery') && datos.info) {
      const antes = info.playerState;
      Object.assign(info, datos.info);
      if (typeof datos.info.playerState === 'number' && datos.info.playerState !== antes) eventos.onStateChange?.({ data: info.playerState, target: api });
    } else if (datos.event === 'onStateChange' && typeof datos.info === 'number' && datos.info !== info.playerState) {
      info.playerState = datos.info;
      eventos.onStateChange?.({ data: info.playerState, target: api });
    } else if (datos.event === 'onReady' && !listo) {
      listo = true;
      comando('addEventListener', ['onStateChange']);
      eventos.onReady?.({ target: api });
    }
  };
  window.addEventListener('message', alMensaje);
  iframe.addEventListener('load', () => enviar({ event: 'listening' }));
  const api = {
    playVideo: () => comando('playVideo'),
    pauseVideo: () => comando('pauseVideo'),
    unMute: () => comando('unMute'),
    mute: () => comando('mute'),
    setVolume: (v) => comando('setVolume', [v]),
    isMuted: () => Boolean(info.muted),
    getVolume: () => info.volume,
    getCurrentTime: () => Number(info.currentTime) || 0,
    getPlayerState: () => info.playerState,
    ultimoMensaje: () => ultimo,
    destroy: () => {
      clearInterval(escuchar);
      window.removeEventListener('message', alMensaje);
      iframe.remove();
    },
  };
  return api;
}

let stageKey = '';
let ytPlayer = null;
let ytEstado = -1;
let ytDesde = 0;
let ytPausaSala = false;
let ytEsperaToque = false;
let ytTocado = false;
let ytSonidoPendiente = false;
let ytListo = false;
let ytActual = null;
let ytRecargas = 0;

// En tablets con poca memoria Android cierra el proceso del iframe de YouTube y queda la página de error
// de Chrome. Si YouTube deja de hablar mientras reproduce, o nunca llegó a estar listo, se recrea.
function vigilarYoutube() {
  if (!ytPlayer || !ytPlayer.ultimoMensaje || !ytActual || ytActual.key !== stageKey) return;
  const ahora = Date.now();
  const callado = ytListo
    ? ytEstado === 1 && !ytPausaSala && ahora - ytPlayer.ultimoMensaje() > 15000
    : ahora - ytDesde > 25000;
  if (callado) recargarVideo(false);
}

function recargarVideo(porToque) {
  if (!ytActual || ytActual.key !== stageKey) return false;
  ytRecargas += 1;
  crearPlayerYoutube(ytActual.youtube, ytActual.now, ytActual.key, porToque && esIOS());
  return true;
}

document.addEventListener('click', (evento) => {
  if (!evento.target.closest('[data-recargar-video]')) return;
  recargarVideo(true);
});

function esIOS() {
  return /iP(hone|ad|od)/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
}

// Fuera de iOS el toque en la página habilita el sonido del iframe (allow="autoplay"): se evita recrear
// el reproductor, que en una tablet es volver a bajar más de 1 MB.
function sonarAlTocar(player, youtube, now, key) {
  ytSonidoPendiente = true;
  player.mute();
  player.playVideo();
  avisoReproducir();
  const revisar = (intentos) => {
    if (ytPlayer !== player || stageKey !== key) return;
    const cargando = ytEstado === -1 || ytEstado === 3;
    if (!ytMudo() && (ytEstado === 1 || ytEstado === 3)) {
      ytSonidoPendiente = false;
      avisoReproducir();
    } else if (cargando && intentos > 0) {
      setTimeout(() => revisar(intentos - 1), 2000);
    } else {
      ytSonidoPendiente = false;
      crearPlayerYoutube(youtube, now, key, true);
    }
  };
  const alTocar = () => {
    document.removeEventListener('pointerdown', alTocar, true);
    if (ytPlayer !== player || stageKey !== key) return;
    player.unMute();
    player.setVolume(100);
    player.playVideo();
    setTimeout(() => revisar(5), 2000);
  };
  document.addEventListener('pointerdown', alTocar, true);
}

// Un toque dentro del iframe le da el foco: sirve para saber que se tocó aunque YouTube no informe su estado.
window.addEventListener('blur', () => {
  setTimeout(() => {
    if (document.activeElement && document.activeElement.id === 'yt-frame') {
      ytTocado = true;
      avisoReproducir();
    }
  }, 0);
});

// En modo toque la capa del video pasa delante de la escena para que el toque caiga en el reproductor.
function avisoReproducir() {
  const capa = document.getElementById('ahora-video');
  if (!capa) return;
  let aviso = capa.querySelector('.ahora-tocar');
  const juego = String(document.getElementById('escena')?.dataset.slots || '').split(' ').includes('escenario');
  const mudo = ytMudo();
  const sonando = ytEstado === 1 && !mudo;
  const falta = Boolean(ytPlayer) && ytListo && ytEsperaToque && !sonando && !juego && !ytPausaSala;
  const pendiente = Boolean(ytPlayer) && ytSonidoPendiente && !juego && !ytPausaSala;
  capa.classList.toggle('is-al-frente', falta);
  // Si quedó sonando mudo hace falta el parlante de YouTube, que está en la barra superior.
  capa.classList.toggle('yt-recorte', !(ytEstado === 1 && mudo && medioCambiadoPorJuego !== 'mudo' && !ytSonidoPendiente));
  let recargar = capa.querySelector('.ahora-recargar');
  if (falta && !recargar) {
    recargar = document.createElement('button');
    recargar.type = 'button';
    recargar.className = 'ahora-recargar';
    recargar.setAttribute('data-recargar-video', '');
    recargar.textContent = '↻ Recargar video';
    capa.appendChild(recargar);
  } else if (!falta && recargar) {
    recargar.remove();
  }
  if (!falta && !pendiente) {
    if (aviso) aviso.remove();
    return;
  }
  if (!aviso) {
    aviso = document.createElement('p');
    aviso.className = 'ahora-tocar';
    capa.appendChild(aviso);
  }
  aviso.hidden = ytTocado && ytMensajes === 0;
  aviso.textContent = pendiente
    ? 'Tocá la pantalla para activar el sonido'
    : ytEstado === 1 && mudo
    ? 'Tocá el parlante del video para activar el sonido'
    : 'Tocá ▶ en el video para reproducirlo con sonido';
}

setInterval(() => {
  vigilarYoutube();
  if (ytPlayer) avisoReproducir();
  pintarDiagnostico();
}, 1000);

let enJuego = false;
let medioCambiadoPorJuego = '';
let modoChipTimer = 0;

function videoLocal() {
  return document.querySelector('#ahora-media video');
}

function medioSonando() {
  if (ytPlayer) return ytEstado === 1 || ytEstado === 3;
  const video = videoLocal();
  return Boolean(video && !video.paused);
}

function hayReproduccion() {
  const stage = document.getElementById('escenario-ahora');
  return Boolean(stage && !stage.hidden);
}

// Silenciar o pausar sólo deshace lo que hizo el juego: una pausa pedida por la sala no se reanuda.
function aplicarModoJuego(juego) {
  const modo = modoJuego();
  const video = videoLocal();
  if (medioCambiadoPorJuego && (!juego || modo !== medioCambiadoPorJuego)) {
    try {
      if (medioCambiadoPorJuego === 'mudo') {
        ytPlayer?.unMute();
        if (video) video.muted = false;
      } else if (medioCambiadoPorJuego === 'pausa' && !ytPausaSala) {
        ytPlayer?.playVideo();
        if (video) video.play().catch(() => {});
      }
    } catch (error) { /* el reproductor cambió */ }
    medioCambiadoPorJuego = '';
  }
  if (!juego || medioCambiadoPorJuego || !medioSonando()) return;
  try {
    if (modo === 'mudo') {
      ytPlayer?.mute();
      if (video) video.muted = true;
      medioCambiadoPorJuego = 'mudo';
    } else if (modo === 'pausa') {
      ytPlayer?.pauseVideo();
      if (video) video.pause();
      medioCambiadoPorJuego = 'pausa';
    }
  } catch (error) { /* el reproductor cambió */ }
}

function actualizarJuego(juego) {
  if (juego === enJuego) return;
  enJuego = juego;
  aplicarModoJuego(juego);
  if (juego && hayReproduccion()) mostrarModoJuego(!modoJuego());
  else ocultarModoJuego();
}

function guardarModoJuego(id) {
  try { localStorage.setItem(claveModoJuego(), id); } catch (error) { /* modo privado */ }
  aplicarModoJuego(enJuego);
  refrescarPantalla();
  pintarRielDemo();
  const modo = MODOS_JUEGO.find((item) => item.id === id);
  if (modo) avisoDemo(modo.aviso);
}

function contenedorModoJuego() {
  return document.getElementById('demo-capas') || document.body;
}

// Primera vez: panel con las 4 opciones. Con una elección guardada: un recordatorio corto que permite cambiarla.
function mostrarModoJuego(completo) {
  ocultarElegirPiel();
  let caja = document.getElementById('modo-juego');
  if (!caja) {
    caja = document.createElement('div');
    caja.id = 'modo-juego';
    caja.className = 'modo-juego';
    caja.setAttribute('role', 'dialog');
    contenedorModoJuego().appendChild(caja);
  }
  clearTimeout(modoChipTimer);
  const actual = modoJuego();
  if (completo) {
    caja.classList.remove('is-chip');
    caja.innerHTML = '<p>Hay algo reproduciéndose. Durante los juegos:</p><div class="modo-juego-opciones">'
      + MODOS_JUEGO.map((modo) => `<button type="button" data-modo-juego="${modo.id}" class="${modo.id === actual ? 'is-on' : ''}">${modo.nombre}</button>`).join('')
      + '</div><small>Se recuerda en esta pantalla hasta que lo cambies.</small>';
  } else {
    const modo = MODOS_JUEGO.find((item) => item.id === actual) || MODOS_JUEGO[0];
    caja.classList.add('is-chip');
    caja.innerHTML = `<button type="button" data-modo-abrir>Video en juegos: <b>${modo.nombre}</b> · cambiar</button>`;
    modoChipTimer = setTimeout(ocultarModoJuego, 7000);
  }
  caja.hidden = false;
}

function ocultarModoJuego() {
  clearTimeout(modoChipTimer);
  const caja = document.getElementById('modo-juego');
  if (caja) caja.hidden = true;
}

function modoJuegoAbierto() {
  const caja = document.getElementById('modo-juego');
  return Boolean(caja && !caja.hidden && !caja.classList.contains('is-chip'));
}

document.addEventListener('click', (evento) => {
  const opcion = evento.target.closest('[data-modo-juego]');
  if (opcion) {
    guardarModoJuego(opcion.getAttribute('data-modo-juego'));
    if (opcion.closest('#modo-juego')) ocultarModoJuego();
    else if (demoDialogoTipo) abrirDialogoDemo(demoDialogoTipo);
    return;
  }
  if (evento.target.closest('[data-modo-abrir]')) mostrarModoJuego(true);
});

function pintarDiagnostico() {
  if (new URLSearchParams(location.search).get('diag') !== '1') return;
  let caja = document.getElementById('diag');
  if (!caja) {
    caja = document.createElement('pre');
    caja.id = 'diag';
    caja.className = 'diag';
    document.body.appendChild(caja);
  }
  let vol = '-';
  let t = '-';
  try { vol = ytPlayer?.getVolume?.(); t = Math.round(ytPlayer?.getCurrentTime?.() || 0); } catch (error) { /* sin player */ }
  const capa = document.getElementById('ahora-video');
  caja.textContent = [
    navigator.userAgent.replace(/^Mozilla\/5\.0 /, '').slice(0, 90),
    `estado ${ytEstado}  mudo ${ytMudo()}  vol ${vol}  t ${t}s`,
    `modo toque ${ytEsperaToque}  al frente ${Boolean(capa?.classList.contains('is-al-frente'))}  visible ${capa?.style.visibility || '-'}`,
    `pausa sala ${ytPausaSala}  activación ${navigator.userActivation ? navigator.userActivation.hasBeenActive : '-'}`,
    `mensajes de YouTube ${ytMensajes}  iframe ${document.querySelector('#ahora-media iframe') ? 'sí' : 'no'}`,
    `último mensaje ${ytPlayer?.ultimoMensaje?.() ? Math.round((Date.now() - ytPlayer.ultimoMensaje()) / 1000) + 's' : '-'}  recargas ${ytRecargas}`,
  ].join('\n');
}

const ORIGEN_AHORA = { REQUEST: 'Pedido', VOTE: 'Voto', AUTOFILL: 'Automático', MODERATOR: 'Sala', YOUTUBE: 'YouTube' };

function aplicarAhora(data) {
  if (!data || !Object.prototype.hasOwnProperty.call(data, 'now')) return;
  if (!data.now) {
    if (!playerBase()) arrancarVideoEjemplo();
    else showStage({ now: null, paused: false });
    return;
  }
  showStage({ now: data.now, paused: Boolean(data.now.paused) });
}

const datosYoutubeCache = new Map();

function limpiarTituloYoutube(texto) {
  let t = String(texto || '');
  t = t.replace(/[\p{Extended_Pictographic}\p{Regional_Indicator}\u200d\ufe0f]/gu, '');
  t = t.replace(/\s*[\(\[][^\)\]]*(official|oficial|video|vídeo|clip|lyric|letra|audio|hd|4k|visuali[sz]er|subt[ií]tul|subbed|sub esp|traduc|translat|release|מתורגם|קליפ|רשמי)[^\)\]]*[\)\]]/giu, '');
  t = t.replace(/\s*\|.*$/, '');
  return t.replace(/\s{2,}/g, ' ').trim();
}

function normalizarNombre(texto) {
  return String(texto || '').toLowerCase().normalize('NFD').replace(/[^\p{L}\p{N}]/gu, '');
}

function separarTituloYoutube(titulo, canal) {
  const limpio = limpiarTituloYoutube(titulo);
  const partes = limpio.split(/\s+[-–—]\s+/);
  if (partes.length >= 2 && partes[0] && partes[1]) {
    return { artista: partes[0].trim(), titulo: partes.slice(1).join(' - ').trim() };
  }
  // Sin "Artista - Tema" el canal sólo es el artista si parece oficial: en subidas de fans es el usuario.
  const crudo = String(canal || '');
  const autor = crudo.replace(/\s*-\s*Topic$/i, '').replace(/VEVO$/i, '').replace(/\s*(official|oficial)\s*$/i, '').trim();
  const oficial = /-\s*Topic$|VEVO$|official|oficial/i.test(crudo)
    || (normalizarNombre(autor).length > 2 && normalizarNombre(limpio).includes(normalizarNombre(autor)));
  return { artista: oficial ? autor : '', titulo: limpio || String(titulo || '') };
}

function datosYoutube(id) {
  if (!datosYoutubeCache.has(id)) {
    const url = 'https://www.youtube.com/oembed?format=json&url='
      + encodeURIComponent('https://www.youtube.com/watch?v=' + id);
    datosYoutubeCache.set(id, fetch(url)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => (j && j.title ? separarTituloYoutube(j.title, j.author_name) : null))
      .catch(() => null));
  }
  return datosYoutubeCache.get(id);
}

function textoGenerico(texto, id) {
  const t = String(texto || '').trim();
  return !t || t === id || t === 'yt_' + id || /^https?:\/\//i.test(t) || /^(youtube|video de youtube|video)$/i.test(t);
}

// Sólo completa lo que el operador dejó vacío o genérico: nunca pisa un título cargado a mano.
function completarDatosYoutube(now) {
  const uid = String(now.trackUid || '');
  if (uid.indexOf('yt_') !== 0) return now;
  const id = uid.slice(3);
  const faltaTitulo = now.autoDatos || textoGenerico(now.title, id);
  const faltaArtista = now.autoDatos || textoGenerico(now.artist, id);
  if (!faltaTitulo && !faltaArtista) return now;
  const listo = datosYoutubeCache.get(id + ':ok');
  if (listo) {
    return {
      ...now,
      title: faltaTitulo ? listo.titulo : now.title,
      artist: faltaArtista ? listo.artista : now.artist,
    };
  }
  datosYoutube(id).then((datos) => {
    if (!datos || datosYoutubeCache.has(id + ':ok')) return;
    datosYoutubeCache.set(id + ':ok', datos);
    if (ultimoAhora && String(ultimoAhora.now?.trackUid || '') === uid) {
      pintarDatosAhora(ultimoAhora.now, ultimoAhora.paused);
    }
  });
  return { ...now, title: faltaTitulo ? '' : now.title, artist: faltaArtista ? '' : now.artist };
}

let ultimoAhora = null;

function pintarDatosAhora(nowOriginal, paused) {
  const caja = document.getElementById('ahora-datos');
  if (!caja || !nowOriginal) return;
  ultimoAhora = { now: nowOriginal, paused };
  const now = completarDatosYoutube(nowOriginal);
  const origen = ORIGEN_AHORA[now.origin] || now.origin || '';
  const youtube = String(now.trackUid || '').indexOf('yt_') === 0;
  const bits = [];
  if (youtube) bits.push('YouTube', 'el video está en esta pantalla');
  if (origen) bits.push(origen);
  if (paused) bits.push('En pausa');
  const kicker = paused ? 'EN PAUSA' : (ORIGEN_AHORA[now.origin] || 'Ahora').toUpperCase();
  const portada = portadaAhora(now);
  const html = `<div class="ahora-disco${paused ? ' is-pausa' : ''}" aria-hidden="true"><span class="ahora-vinilo"></span>`
    + `<span class="ahora-funda">${portada ? `<img src="${escapar(portada)}" alt="">` : ''}</span></div>`
    + `<p class="ahora-marca">FONOMEETS</p>`
    + `<p class="ahora-sello">${paused ? 'En pausa' : 'Ahora suena'}</p>`
    + `<p class="ahora-kicker">${escapar(kicker)}</p>`
    + `<h1 class="ahora-titulo" dir="auto">${escapar(now.title || (youtube ? 'Cargando datos del video…' : 'Preparando la noche'))}</h1>`
    + `<p class="ahora-artista" dir="auto">${escapar(now.artist || '')}</p>`
    + (bits.length ? `<p class="ahora-meta">${escapar(bits.join(' · '))}</p>` : '')
    + (now.dedication ? `<p class="ahora-dedicatoria">“${escapar(now.dedication)}”</p>` : '')
    + `<div class="ahora-eq${paused ? ' is-pausa' : ''}" aria-hidden="true">${Array.from({ length: 12 }, (_, i) => `<i style="--i:${i}"></i>`).join('')}</div>`;
  // Cada frame del player vuelve a llamar acá: reescribir igual reinicia el giro del disco.
  if (caja.dataset.html === html) return;
  caja.dataset.html = html;
  caja.innerHTML = html;
}

function portadaAhora(now) {
  const uid = String(now?.trackUid || '');
  if (uid.indexOf('yt_') === 0) return 'https://i.ytimg.com/vi/' + uid.slice(3) + '/hqdefault.jpg';
  if (now?.cover) return now.cover;
  return uid && playerBase() ? playerApi('/api/library/' + encodeURIComponent(uid) + '/cover') : '';
}

const GRILLA_COLUMNAS = 16;
const GRILLA_FILAS = 9;

function ponerGrilla(visible) {
  const escena = document.getElementById('escena');
  if (!escena) return;
  let grilla = document.getElementById('grilla');
  if (!visible) {
    if (grilla) grilla.remove();
    return;
  }
  if (!grilla) {
    grilla = document.createElement('div');
    grilla.id = 'grilla';
    grilla.className = 'grilla';
    grilla.setAttribute('aria-hidden', 'true');
    let celdas = '';
    for (let fila = 0; fila < GRILLA_FILAS; fila += 1) {
      for (let col = 1; col <= GRILLA_COLUMNAS; col += 1) celdas += `<span>${String.fromCharCode(65 + fila)}${col}</span>`;
    }
    grilla.innerHTML = celdas;
  }
  escena.appendChild(grilla);
}

function grillaVisible() {
  return Boolean(document.getElementById('grilla'));
}

function alternarGrilla() {
  ponerGrilla(!grillaVisible());
}

function vaciarMedia() {
  const media = mediaAhora();
  if (media) media.innerHTML = '';
  ytPlayer = null;
  ytActual = null;
  ytEsperaToque = false;
  ytSonidoPendiente = false;
  avisoReproducir();
}

function ytMudo() {
  try { return Boolean(ytPlayer && ytPlayer.isMuted && ytPlayer.isMuted()); } catch (error) { return false; }
}

// Los navegadores sólo habilitan el sonido con un toque dentro del reproductor de YouTube. Si no arranca
// sonando solo, se recrea en modo "toque": sin autoplay y con los controles propios de YouTube (▶ y parlante).
function crearPlayerYoutube(youtube, now, key, esperarToque) {
  const media = mediaAhora();
  if (!media || stageKey !== key) return;
  if (ytPlayer && ytPlayer.destroy) {
    try { ytPlayer.destroy(); } catch (error) { /* ya no estaba */ }
  }
  ytPlayer = null;
  const viejo = document.getElementById('yt-frame');
  if (viejo) viejo.remove();
  const holder = document.createElement('div');
  holder.id = 'yt-frame';
  media.appendChild(holder);
  ytEsperaToque = esperarToque;
  ytSonidoPendiente = false;
  ytListo = false;
  ytTocado = false;
  ytEstado = -1;
  ytDesde = Date.now();
  ytActual = { youtube, now, key };
  const uid = now.trackUid;
  const player = reproductorYoutube(holder, youtube, {
    autoplay: esperarToque ? '0' : '1',
    controls: esperarToque ? '1' : '0',
    rel: '0', modestbranding: '1', playsinline: '1', fs: '0',
    widget_referrer: location.origin,
    ...(now.mute ? { mute: '1' } : {}),
    ...(now.repetir ? { loop: '1', playlist: youtube } : {}),
  }, {
    onStateChange: (event) => {
      ytEstado = event.data;
      if (event.data === 1 && !now.mute && ytMudo() && medioCambiadoPorJuego !== 'mudo' && !ytSonidoPendiente) {
        // En modo toque el ▶ ya fue un toque dentro del reproductor: ahí desmutear sí se permite.
        try { event.target.unMute(); event.target.setVolume(100); } catch (error) { /* sigue mudo */ }
      }
      avisoReproducir();
      if (event.data === 0) postEnded(uid);
    },
    // En una tablet el reproductor tarda varios segundos en cargar: el sonido se evalúa desde que está listo.
    onReady: () => {
      if (ytPlayer !== player) return;
      ytListo = true;
      avisoReproducir();
      if (esperarToque || now.mute) return;
      setTimeout(() => {
        if (ytPlayer !== player || stageKey !== key) return;
        const sonando = (ytEstado === 1 || ytEstado === 3) && !ytMudo();
        if (sonando || ytPausaSala) return;
        if (esIOS()) crearPlayerYoutube(youtube, now, key, true);
        else sonarAlTocar(player, youtube, now, key);
      }, 3000);
    },
  });
  ytPlayer = player;
  avisoReproducir();
}

function showStage(state) {
  const stage = escenarioAhora();
  const media = mediaAhora();
  if (!stage || !media) return;
  const now = state && state.now;
  if (!now) {
    stageKey = '';
    vaciarMedia();
    stage.hidden = true;
    return;
  }
  stage.hidden = false;
  ytPausaSala = Boolean(state.paused);
  pintarDatosAhora(now, Boolean(state.paused));
  const youtube = String(now.trackUid || '').indexOf('yt_') === 0 ? now.trackUid.slice(3) : '';
  if (/^[A-Za-z0-9_-]{11}$/.test(youtube)) {
    const key = 'yt:' + youtube;
    if (stageKey !== key) {
      stageKey = key;
      vaciarMedia();
      const fondo = document.createElement('img');
      fondo.className = 'ahora-fondo';
      fondo.alt = '';
      fondo.src = 'https://i.ytimg.com/vi/' + youtube + '/hqdefault.jpg';
      media.appendChild(fondo);
      crearPlayerYoutube(youtube, now, key, false);
    }
    if (ytPlayer && ytPlayer.pauseVideo) {
      try {
        if (state.paused) ytPlayer.pauseVideo();
        // Sólo se reanuda una pausa de la sala: un play desde afuera sin toque hace que YouTube arranque mudo.
        else if (ytEstado === 2 && !ytEsperaToque && medioCambiadoPorJuego !== 'pausa') ytPlayer.playVideo();
      } catch (error) { /* sigue */ }
    }
    return;
  }
  ytPlayer = null;
  if (now.videoUrl) {
    const key = 'url:' + now.videoUrl;
    if (stageKey !== key) {
      stageKey = key;
      vaciarMedia();
      const video = document.createElement('video');
      video.className = 'ahora-video';
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.preload = 'auto';
      video.src = now.videoUrl;
      video.onerror = () => { if (stageKey === key) stage.hidden = true; };
      media.appendChild(video);
      video.play().catch(() => {});
    }
    const vivo = media.querySelector('video');
    if (vivo) {
      if (state.paused) vivo.pause();
      else vivo.play().catch(() => {});
    }
    return;
  }
  if (now.video && playerBase()) {
    const key = 'file:' + now.trackUid;
    if (stageKey !== key) {
      stageKey = key;
      vaciarMedia();
      const video = document.createElement('video');
      video.autoplay = true;
      video.playsInline = true;
      video.src = playerApi('/api/now/media');
      video.onended = () => postEnded(now.trackUid);
      media.appendChild(video);
    }
    const video = media.querySelector('video');
    if (video) {
      if (state.paused) video.pause();
      else video.play().catch(() => {});
    }
    return;
  }
  const key = 'cover:' + now.trackUid;
  if (stageKey !== key) {
    stageKey = key;
    vaciarMedia();
    const uid = String(now.trackUid || '');
    const src = uid.indexOf('yt_') === 0
      ? 'https://i.ytimg.com/vi/' + uid.slice(3) + '/hqdefault.jpg'
      : (uid ? playerApi('/api/library/' + encodeURIComponent(uid) + '/cover') : '');
    if (!src) {
      stage.hidden = true;
      return;
    }
    const img = document.createElement('img');
    img.alt = '';
    img.src = src;
    img.onerror = () => { img.remove(); if (!media.firstChild) stage.hidden = true; };
    media.appendChild(img);
  }
}

function conectarPlayer() {
  const base = playerBase();
  if (!base) return;
  fetch(playerApi('/api/state')).then((respuesta) => respuesta.json()).then(showStage).catch(() => {});
  let remoto;
  try { remoto = new URL(base); } catch { return; }
  const ws = new WebSocket((remoto.protocol === 'https:' ? 'wss:' : 'ws:') + '//' + remoto.host + '/ws');
  ws.onmessage = (evento) => {
    try { showStage(JSON.parse(evento.data)); } catch { /* el siguiente frame alcanza */ }
  };
  ws.onclose = () => setTimeout(conectarPlayer, 1000);
}

function urlVideoEjemplo() {
  return `${location.origin}/descargas/pieles/pieles-16x9.mp4`;
}

const YT_DEMO_ID = 'BFOLLBUoxf8';

function arrancarVideoEjemplo() {
  if (playerBase()) return;
  if (!localId()) {
    const elegido = new URLSearchParams(location.search).get('yt') || '';
    const propio = /^[A-Za-z0-9_-]{11}$/.test(elegido);
    showStage({
      now: {
        trackUid: 'yt_' + (propio ? elegido : YT_DEMO_ID),
        title: '',
        artist: '',
        autoDatos: true,
        origin: 'MODERATOR',
        repetir: true,
      },
      paused: false,
    });
    return;
  }
  showStage({
    now: {
      trackUid: 'demo_video',
      title: 'Noche de ejemplo',
      artist: 'FonoMeets',
      origin: 'MODERATOR',
      videoUrl: urlVideoEjemplo(),
    },
    paused: false,
  });
}

function escalarEscena() {
  const escena = document.getElementById('escena');
  if (!escena) return;
  const raiz = document.documentElement;
  const escala = Math.min(raiz.clientWidth / 1920, raiz.clientHeight / 1080);
  escena.style.setProperty('--escala', String(escala));
  const capa = document.getElementById('ahora-video');
  if (capa) {
    const ancho = 1920 * escala;
    const alto = 1080 * escala;
    capa.style.left = `${(raiz.clientWidth - ancho) / 2}px`;
    capa.style.top = `${(raiz.clientHeight - alto) / 2}px`;
    capa.style.width = `${ancho}px`;
    capa.style.height = `${alto}px`;
  }
}

escalarEscena();
window.addEventListener('resize', escalarEscena);
window.addEventListener('orientationchange', escalarEscena);
leer();
setInterval(leer, 4000);
calentar();
setInterval(calentar, 15000);
escuchar();
conectarPlayer();
montarBarraDemo();
if (pielSinCapas) refrescarPantalla();
if (new URLSearchParams(location.search).get('grilla') === '1') ponerGrilla(true);
pintarRielDemo();
arrancarVideoEjemplo();
document.addEventListener('pointerdown', () => {
  const video = document.querySelector('#ahora-media video');
  if (!video) return;
  video.muted = false;
  video.play().catch(() => {});
}, { once: true });
