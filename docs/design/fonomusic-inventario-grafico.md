# Fonomusic: inventario de objetos gráficos para rediseño

Este documento es el encargo para el agente de diseño. Lista cada objeto gráfico que hoy existe en los módulos de Fonomusic, dónde vive en el código y qué estados tiene. El diseño que vuelva se implementa sobre estos mismos elementos, así que **no hay que inventar pantallas nuevas salvo las marcadas como "faltante"**.

Cada elemento tiene un código (por ejemplo `A3.2`). Usalo para nombrar los archivos y las especificaciones que entregues.

## 0. Regla principal: la skin cambia la estética, no los elementos

La pantalla del salón tiene 4 skins (`nocturna`, `manga`, `meteoro`, `doraemon`). Todas muestran **los mismos elementos en el mismo lugar**. Una skin sólo cambia:

| Qué cambia | Clave en el código | Ejemplo en `nocturna` |
|---|---|---|
| Colores base | `fondo`, `sectorA`, `sectorB`, `acento`, `info`, `texto`, `colores[4]`, `fotoHueco` | `#1A1430`, `#FF3D8B`, `#22E0E6` |
| Tipografía | `fuente` | `700 13px system-ui` |
| Texto del sello de cada juego | `sellos.{ruleta,votacion,mensaje,match}` | "Ruleta", "Votación" |
| Fondo de escena | `efectos.fondo` (`fx-fondo-*`) | `fx-fondo-neon` |
| Ambiente animado detrás de la capa | `efectos.ambiente` (`fx-ambiente-*`) | `fx-ambiente-neon` |
| Marco de la capa | `efectos.marco` (`fx-marco-*`) | `fx-marco-neon` |
| Estilo del sello | `efectos.sello` (`fx-sello-*`) | `fx-sello-neon` |
| Recorte de fotos | `efectos.foto` | `fx-foto-circulo` (igual en las 4) |
| Globo de texto | `efectos.globo` (`fx-globo-*`) | `fx-globo-neon` |
| Golpe visual al resolver | `efectos.impacto` (`fx-impacto-*`) | `fx-impacto-flash` |
| Animación de entrada | `efectos.entrada` (`fx-entrada-*`) | `fx-entrada-scale` |
| Ficha de persona o pareja | `efectos.ficha`, `efectos.apila`, `efectos.rechazo` | `fx-ficha-neon` |
| Contenedor de la ruleta | `efectos.lienzo` (`fx-lienzo-*`) | `fx-lienzo-neon` |
| Partículas o confeti | `efectos.particulas.formas[3]`, `colores[5]`, `cantidad` | recto, redondo, chispa |
| Texturas sobre la rueda | `efectos.giro.{papel,trama,lineas,vineta}` | todas apagadas |
| Objetos decorativos | `efectos.objetos[]` con `en: [juegos]` | destello, halo |
| Sonidos (fuera de este encargo) | `efectos.sonidos` | neon-clic, neon-exito |

Las skins actuales, para referencia:

| Skin | Idea | Sellos | Partículas | Objetos decorativos |
|---|---|---|---|---|
| `nocturna` | Neón de bar | Ruleta, Votación, Mensaje, Match | recto, redondo, chispa | destello (match, ruleta), halo (votación, mensaje) |
| `manga` | Papel, tinta y trama | ルーレット, 投票, 伝言, ドン | sakura, sello, tinta | onomatopeya ドン (match), trama (todos) |
| `meteoro` | Carrera, velocidad | GO!, GRID, RADIO, FINISH | bandera, raya, chispa | rayas (todos), bandera (ruleta, votación), GO! (match) |
| `doraemon` | Cielo, nubes, cascabel | ポン, どちら, もしもし, 大好き | nube, estrella, cascabel | nubes, hélice, "gato azul", estrellas |

**Entregable por skin:** un archivo de tokens (los colores, la fuente y los sellos de la tabla), más un asset o especificación por cada slot `fx-*` y por cada objeto decorativo. El mismo layout se tiene que ver bien con las 4 skins.

**Riesgo a resolver en el rediseño:** `doraemon` y su objeto `gatoazul` remiten a un personaje con marca registrada. Conviene reemplazarla por una skin original con la misma lógica (cielo, nubes, campanas).

**Hoy la skin no llega a todo.** El chat (`sms-*`), el bloque "Ahora" de la pantalla de nube y la pantalla local del reproductor (módulo B) ignoran la skin. El rediseño tiene que definir cómo se ven esos elementos en cada skin.

---

## A. Pantalla del salón (nube)

- URL: `https://fonomeets.com/descargas/pantalla/?local=<id>`
- Código: `display.js` y `display.css` del contenedor `descargas`.
- Se ve en TV o proyector a 16:9 y escala con unidades `cq*`. Tiene que leerse a 5–10 m.

### A1. Escenario "Ahora" (siempre de fondo)
| Código | Elemento | Clase | Estados |
|---|---|---|---|
| A1.1 | Medio de fondo: video de YouTube, portada (`ahora-fondo`) o video local | `#ahora-media` | video, portada, sin medio |
| A1.2 | Velo para que el texto se lea sobre el medio | `ahora-velo` | — |
| A1.3 | Marca "FONOMEETS" | `ahora-marca` | — |
| A1.4 | Kicker de origen: SALA, PEDIDO, VOTO, AUTOMÁTICO, YOUTUBE o EN PAUSA | `ahora-kicker` | normal, en pausa |
| A1.5 | Título del tema | `ahora-titulo` | título largo (2 líneas) |
| A1.6 | Artista | `ahora-artista` | — |
| A1.7 | Meta: "YouTube · el video está en esta pantalla · Sala" | `ahora-meta` | — |
| A1.8 | Dedicatoria entre comillas | `ahora-dedicatoria` | con o sin |
| A1.9 | Estado "Preparando la noche" (sin tema) | — | vacío |

### A2. Contenedor común de cualquier juego (capa)
| Código | Elemento | Clase |
|---|---|---|
| A2.1 | Capa y su peso: `destacado` (ocupa el centro) o `accesorio` (al costado) | `escena-capa[data-peso]` |
| A2.2 | Marco | `escena-marco` + `fx-marco-*` |
| A2.3 | Sello con el nombre del juego | `escena-sello` + `fx-sello-*` |
| A2.4 | Reloj de cuenta regresiva (m:ss) | `escena-reloj` |
| A2.5 | Ambiente animado | `escena-fx` + `fx-ambiente-*` |
| A2.6 | Objetos decorativos | `escena-obj` + `fx-obj-*` |
| A2.7 | Impacto al resolver | `escena-impacto` + `fx-impacto-*` |
| A2.8 | Confeti | `papel-picado` con `papel-<forma>` |
| A2.9 | Fondo de la capa, elegido en el panel: lo que suena, logo del local, una foto, el juego | `escena[data-fondo=actual\|logo\|foto\|juego]` |
| A2.10 | Distribución cuando hay varias capas a la vez: chat en riel, juego en escenario, match en chip | `escena[data-slots="rail escenario chip"]` |

### A3. Votación (temas, videos, participantes o parejas)
| Código | Elemento | Clase | Estados |
|---|---|---|---|
| A3.1 | Consigna ("La más votada entra a la cola") | `escena-cuerpo h2` | — |
| A3.2 | Opción: imagen circular (tapa, miniatura o foto) y título | `escena-opcion` | normal, ganadora (`is-ganador`), sin imagen |
| A3.3 | Opción de pareja: dos fotos | `escena-opcion` con `fotos[2]` | — |
| A3.4 | Grupo de 3 o 4 opciones | `escena-opciones` | 3 y 4 opciones |
| — | Faltante: conteo o barra de votos en vivo por opción | — | por diseñar |

### A4. Ruleta (por mesa o por personas, una rueda o parejas)
| Código | Elemento | Clase o dónde | Notas |
|---|---|---|---|
| A4.1 | Contenedor de la rueda | `fx-lienzo-*` | 1 o 2 ruedas (`escena-ruletas`) |
| A4.2 | Rueda: sectores alternados A/B | `canvas.escena-ruleta` | se dibuja por código; entregar especificación, no imagen |
| A4.3 | Foto circular por sector, o hueco con `fotoHueco` | canvas | 56 px sobre un lienzo de 720 |
| A4.4 | Nombre en el borde del sector | canvas, `fuente` | — |
| A4.5 | Puntero (triángulo de color `acento`) | canvas | — |
| A4.6 | Efecto durante el giro: líneas de velocidad, trama, papel | canvas, `giro.*` | — |
| A4.7 | Persona elegida: foto y nombre | `escena-elegido` | — |
| A4.8 | Pareja elegida en el centro | `escena-centro` + `escena-pareja` + `fx-ficha-*` | — |
| A4.9 | Tira de parejas ya sorteadas | `escena-pila.is-tira` + `fx-apila-*` | de 1 a 8 |
| A4.10 | Rechazo: la persona sale y se reemplaza | `escena-rechazo` + `fx-rechazo-*` | — |
| A4.11 | Cierre: grilla final de parejas en el salón | `escena-pila.is-salon` | grillas de 1×1 a 4×2 |

### A5. Mensajes entre mesas (chat)
| Código | Elemento | Clase | Estados |
|---|---|---|---|
| A5.1 | Marco del hilo | `sms-marco`, `sms-hilo` | accesorio o destacado |
| A5.2 | Fila de mensaje | `sms-fila.is-in` / `.is-out` | entrante, saliente, nuevo (`is-nuevo`) |
| A5.3 | Avatar: foto o iniciales | `sms-avatar` / `.is-hueco` | con o sin foto |
| A5.4 | Meta: "Autor // 04:35" | `sms-meta` | — |
| A5.5 | Burbuja con cola | `sms-burbuja` | texto corto o hasta 160 caracteres |
| A5.6 | Globos de dedicatoria | `escena-globos`, `escena-globo`, `fx-globo-*` | hasta 4 |

### A6. Match
| Código | Elemento | Clase |
|---|---|---|
| A6.1 | Par de nombres con texto ("Se gustaron") | `escena-match`, `escena-match-par`, `escena-match-nombre` |
| A6.2 | Ruta o animación que une a los dos | `escena-ruta` |
| A6.3 | Versión chip, cuando convive con otra capa | slot `chip` |

### A7. Barra de demo (sólo en la demo pública)
- Botón "…" (`demo-mas`) y dock (`demo-dock`) con 6 íconos: Ruleta, Votación, Mensaje, Match, Chats, Quitar.
- Diálogo (`demo-dialogo`) con selector de skin, chips y campos.
- Basta con alinearlo al resto del sistema; no es prioritario.

---

## B. Pantalla local del reproductor (la máquina del bar)

- URL: `http://127.0.0.1:8731/`
- Código: `display/index.html` y `display.css` dentro de `fonomeets-player.jar`.
- **Hoy no usa skins y es otro diseño que A.** Recomendación: unificarla con A y que use la misma skin del local.

| Código | Elemento | Clase o id | Estados |
|---|---|---|---|
| B1 | Marca "FONOMEETS" | `.brand` | — |
| B2 | Indicador en vivo (punto) y etiqueta | `#live`, `.dot` | en sala (pulso), en pausa, inactivo |
| B3 | Código de sala y "Mostrale este código al teléfono" | `.sala`, `#code` | — |
| B4 | Avisos ("El audio de esta máquina no está listo…") | `.warn` | — |
| B5 | Píldora "Pausa" | `.paused-pill` | — |
| B6 | Escenario: portada a pantalla completa, video local o YouTube | `#stage`, `.stage-cover`, `.stage-video` | portada, video, sin medio |
| B7 | Letra sincronizada (3 líneas, la activa resaltada) | `#lyrics p.on` | con o sin letra |
| B8 | Bloque AHORA: kicker, título, artista, meta, dedicatoria | `.now-*`, `#dedication` | normal; con portada (versión reducida) |
| B9 | Cola SIGUE, una fila por tema: número, tapa mini, "título · artista", dedicatoria, "N votos" u origen | `.next .row`, `.row-cover` | con votos, pedido, automático, vacía |
| B10 | Pie: "Biblioteca de esta máquina" y "N temas · N para revisar" | `.bottom`, `#count` | — |
| B11 | Estados vacíos: "Esta máquina todavía no tiene música", "La noche sigue en automático" | `#title`, `#artist` | — |

**Bug a corregir al implementar:** con portada, `.stage.is-cover` (fijo, `z-index: 0`, fondo negro) tapa el texto. Hay que bajarlo a `z-index: -2`.

## C. Control del reproductor (en la misma máquina)

- URL: `http://127.0.0.1:8731/control`
- Código: `display/control.html`.
- Tarjetas apiladas en una columna.

| Código | Tarjeta | Elementos | Problemas actuales |
|---|---|---|---|
| C1 | Emparejamiento | estado ("Emparejado. Eventos pendientes: 0") | — |
| C2 | Noche | botones Pausar, Seguir, Saltar, Reintentar dañados; enlace "Abrir pantalla" | — |
| C3 | Directorios de música | botón "Establecer directorios", campo de ruta, Agregar, Todos, explorador de carpetas, chip de carpeta "Música del salón · 4", Quitar | botones desalineados |
| C4 | Política | dos campos numéricos, casilla "Automático si no hay pedidos", Guardar | **los números (45 y 20) no tienen etiqueta** |
| C5 | Videos de YouTube | buscador y resultados con miniatura | — |
| C6 | Biblioteca | buscador y tabla (tapa, nombre, autor, álbum, duración, Reproducir, Editar, Eliminar) | **la fila de edición queda siempre visible** |
| C7 | Búsquedas sin resultado | lista o vacío | — |

## D. Panel del local, sección Música (web, staff)

- URL: `https://fonomeets.com/local/musica/*`
- Código: chunks `Musica-*.js` y `Entretenimiento-*.js` del contenedor `local`.
- Comparte el estilo del panel: sidebar, títulos Bebas y la familia de clases `cabina-*`.

### D1. Emparejar
- Kicker "FONOMUSIC" y título.
- Tarjeta "Código de la pantalla" con el código grande de 6 dígitos y la cuenta regresiva ("Cambia en 24 s").
- Estado del equipo ("El equipo está en salida") y enlace "Abrir la bandeja musical".

### D2. Descargar reproductor
- Botón "Generar link".
- Lista de instaladores por plataforma (Mac, Windows, Android, Android TV).

### D3. Bandeja musical
| Código | Elemento | Clase o etiqueta |
|---|---|---|
| D3.1 | Selector de show/playlist y chips de playlists | `cabina-show`, `cabina-chips` |
| D3.2 | Acciones de playlist: nueva, cambiar nombre, editar | `title`: Nueva playlist, Cambiar nombre, Editar |
| D3.3 | Contador "3 EN ESPERA" / "SIN ESPERA" y botón biblioteca | `cabina-badge`, "Abrir biblioteca" |
| D3.4 | Indicador "EN EL AIRE" y botón "Pausar sistema general" | `cabina-aire`, `cabina-pausa` |
| D3.5 | Tarjeta "en el aire": portada con menú (ver, volver a buscar o cargar tapa), título, "artista — álbum", badge de origen, transporte anterior/reproducir/pausar/próxima | `cabina-portada*`, `cabina-transporte` |
| D3.6 | Fila de playlist: manija para arrastrar, índice, tapa, título, artista, badge (LOCAL, VIDEO, YA SONÓ), reproducir/pausar, encolar detrás | `cabina-row`, `cabina-index`, `cabina-arrastre` |
| D3.7 | Biblioteca del salón: chips de carpeta, buscador, "Tapas/Letras de toda la biblioteca", tabla con casillas y acciones | `cabina-crate`, `cabina-table` |
| D3.8 | Sección Video: "+" y diálogo Ficha (URL, Nombre, Autor) | `cabina-dialogo`, `cabina-ficha-*` |
| D3.9 | Zoom de tapa y aviso "Ningún directorio tiene la tapa de ese álbum" | `cabina-tapa-zoom*`, `cabina-tapa-nota` |
| D3.10 | Ajustes del módulo: política, pedidos desde los teléfonos, cola | `cabina-ajustes*` |
| D3.11 | Explorador de directorios (librería de terceros, clases `fm-*`) | `explorador-directorios` |
| D3.12 | Estados vacíos: "Primero emparejá el equipo del local", "Todavía no hay temas…", "El equipo de música no está en esta máquina" | `cabina-vacio` |

### D4. Entretenimiento
| Código | Elemento | Notas |
|---|---|---|
| D4.1 | Interruptor "Mensajes de los invitados en la pantalla" | `toggle` |
| D4.2 | Grilla de 4 cartas ilustradas: Ruleta, Votación, Mensaje, Match | ilustraciones en `entretenimiento/{ruleta,votacion,mensaje,match}.svg` |
| D4.3 | "Volver a los juegos" y chips "Fondo de la capa" | — |
| D4.4 | Formulario de Votación: chips de tipo (Temas, Videos, Participantes, Parejas), "Segundos para votar", buscador, resultados, seleccionados, "Abrir votación" | **los campos se ven como cajas blancas sin estilo** |
| D4.5 | Formulario de Ruleta: Por mesa o Por personas, Separar por sexo, Hombres o Mujeres, Usar los sorteados, vista previa de la rueda (`ruleta-*`), "Girar la ruleta" | — |
| D4.6 | Formulario de Mensaje entre mesas: Desde, Hacia, Texto, "Mostrar mensaje" | mismo problema de estilo que D4.4 |
| D4.7 | Match: "Animar match" | — |
| D4.8 | "Quitar capas" | — |

## E. App del invitado (teléfono)

- URL: `https://fonomeets.com/app/*`
- Código: chunk `Dedicatoria-*.js` del contenedor `usuario`.

| Código | Elemento | Estado |
|---|---|---|
| E1 | "Mensaje a la pantalla": Volver, título, explicación, selector "Para" (El salón o una persona), texto (160 caracteres), "Enviar a la pantalla", aviso del resultado | existe |
| E2 | Tarjeta "X para vos": texto, campo "Tu respuesta", "Contestar en la pantalla" | existe |
| E3 | Lista de mis mensajes ("Para el salón: …") | existe |
| E4 | Aviso "El local todavía no muestra estos mensajes" | existe |
| E5 | **Faltante:** qué suena ahora y qué sigue en el salón (`/api/musica/salon`) | por diseñar |
| E6 | **Faltante:** pedir un tema, con buscador y dedicatoria (`/api/musica/pedir`) | por diseñar |
| E7 | **Faltante:** votar en la votación abierta (`/api/musica/votar`) | por diseñar |
| E8 | **Faltante:** ingresar el código de sala que muestra la pantalla (B3) | por diseñar |

**A corregir al implementar:** la app muestra a todos los usuarios un indicador de depuración "WS: connected/disconnected".

## F. Identidad de los reproductores

- **F1. Íconos de app.** Mac (`.icns`), Windows (`.ico`) y Android (launcher adaptativo). Hoy el APK no trae ícono propio.
- **F2. Banner de Android TV** (320×180). Hoy es un XML genérico (`tv_banner.xml`).
- **F3. Favicon e ícono web** de la pantalla del salón.
- **F4. Página "Cómo instalarlo"** (`descargas/instalar.html`).

## G. Iconografía compartida

Hoy cada módulo dibuja sus íconos por su cuenta. Hace falta un set único, en trazo y en relleno:

- reproducir, pausar, anterior, próxima, silencio;
- encolar detrás, sumar a la cola, quitar de la playlist;
- arrastrar, editar, eliminar, guardar, cancelar, cerrar;
- nueva playlist, cambiar nombre, abrir biblioteca, expandir, carpeta, agregar video;
- portada, volver a buscar tapa, letra;
- los cuatro juegos (ruleta, votación, mensaje, match), chats y quitar capas.

---

## Qué tiene que entregar el agente de diseño

1. **Sistema base:** tipografías, escala tipográfica para TV (A y B), para escritorio (C y D) y para móvil (E); grilla y espaciados; set de íconos (G).
2. **Por cada skin:**
   - Tokens en JSON con las claves de la tabla de la sección 0.
   - Un asset o especificación por slot `fx-*`: fondo, ambiente, marco, sello, globo, impacto, entrada, ficha, apila, rechazo y lienzo.
   - Las 3 formas de partícula y los objetos decorativos.
   - Cómo se ven el chat (A5) y el bloque "Ahora" (A1, B) en esa skin.
3. **Pantallas en 1920×1080**, cada una en las 4 skins:
   - A1 sola.
   - A1 con votación (A3).
   - A1 con chat accesorio (A5).
   - Ruleta girando, con pareja al centro y cierre (A4).
   - Match (A6).
   - Combinación chat, votación y match (A2.10).
   - Pantalla local B con portada, cola con votos y letra.
4. **Pantallas de escritorio a 1440×900:** C completo y las pantallas D1 a D4, con sus estados vacíos.
5. **Pantallas de móvil a 390×844:** E1 a E8.
6. **Animaciones:** duración y curva de entrada, impacto, giro (hoy 6,8 s con desaceleración exponencial), mensaje nuevo y confeti.
7. **Formato de entrega:**
   - SVG para lo vectorial y PNG/WebP @2x para lo bitmap.
   - Archivos nombrados con el código de este documento (`A3.2-opcion-ganadora-nocturna.svg`) o con la clase CSS (`fx-marco-neon.svg`), para implementarlos sin traducir nombres.
8. **Restricciones técnicas:**
   - La rueda (A4.2 a A4.6) se dibuja en canvas: entregar medidas, colores y capas, no una imagen fija.
   - Las fotos de personas y las tapas son contenido variable: diseñar con caso sin foto y con títulos largos.
   - Nada de logos ni personajes de terceros.
