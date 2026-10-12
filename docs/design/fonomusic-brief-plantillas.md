# Fonomusic: brief de diseño por plantilla (pantalla del salón)

Documento para el agente de diseño. Enumera **las plantillas (skins) que existen hoy** y **cada elemento gráfico de la pantalla del salón**, con lo que hace, cuándo aparece, dónde va, qué estados tiene y cómo se ve hoy en cada plantilla. Al final está la lista de archivos a entregar por plantilla.

Inventario general de todos los módulos: [`fonomusic-inventario-grafico.md`](./fonomusic-inventario-grafico.md). Prompts listos para Gemini: [`fonomusic-prompts-gemini.md`](./fonomusic-prompts-gemini.md).

## Regla de oro

Los **elementos son los mismos** en todas las plantillas: misma posición, mismo tamaño, mismo contenido. La plantilla sólo cambia la **estética**: colores, tipografía, textura, marcos, personajes, partículas, animaciones y sonidos.

Hoy **todo está dibujado con CSS** (gradientes, bordes y sombras). No hay imágenes. El objetivo es reemplazarlo por arte de verdad (SVG, PNG o Lottie) sin tocar el layout.

## Condiciones técnicas para todo el arte

- **Lienzo de referencia:** 1920×1080 (16:9). La pantalla escala con unidades de contenedor, así que el arte se tiene que ver bien también en 1280×720 y en 3840×2160.
- **Distancia de lectura:** 5 a 10 metros, en un bar con poca luz. Contraste alto y nada de detalles finos debajo de 2 px a 1080p.
- **Zonas que el arte no puede tapar:** fotos de participantes, nombres, texto de mensajes, opciones de votación y el puntero de la ruleta. Personajes y adornos van en los bordes o detrás, nunca encima.
- **Fotos de participantes:** siempre recortadas en **círculo** (en las cuatro plantillas). Si una persona no tiene foto, se muestra un círculo con sus iniciales en el color `fotoHueco` de la plantilla.
- **Formatos:**
  - fondos: PNG o WebP a 3840×2160, más una versión de 1920×1080 de menos de 400 KB;
  - marcos, fichas, globos y sellos: **SVG en 9-slice** (esquinas fijas y centro estirable), porque el contenido cambia de largo;
  - personajes y objetos animados: Lottie (JSON) o una tira de PNG con transparencia, en loop sin corte, de 2 a 8 s;
  - partículas de confeti: un SVG por forma, de 64×64;
  - sonidos (opcional): OGG y MP3, menos de 1 s para clics y menos de 3 s para éxito y decepción.
- **Propiedad intelectual:** nada de personajes, logos ni tipografías de terceros. Ver la nota sobre la plantilla 4.
- **Nombres de archivo:** `<plantilla>/<id-elemento>[-variante].<ext>`. Ejemplo: `manga/P05-marco.svg`, `meteoro/P12-confeti-bandera.svg`.

---

## Parte 1. Plantillas que existen hoy

Son cuatro. El local elige una en el panel (Música › Entretenimiento) y por cada una puede apagar sonido, efectos u objetos decorativos.

### T1. Nocturna (`nocturna`)

- **Concepto:** bar de noche con luces de neón. Es la plantilla por defecto.
- **Paleta:**

  | Token | Valor | Uso |
  |---|---|---|
  | fondo | `#1A1430` | fondo general, violeta muy oscuro |
  | sectorA / sectorB | `#241C3D` / `#141028` | sectores alternos de la ruleta |
  | acento | `#FF3D8B` | rosa neón: puntero, sellos, bordes |
  | info | `#22E0E6` | cian neón: globos, destellos |
  | texto | `#F5F6FA` | texto claro |
  | colores extra | `#FF3D8B`, `#22E0E6`, `#9BE85A`, `#FFB648` | confeti y sectores de color |
  | fotoHueco | `#2C3142` | círculo sin foto |

- **Tipografía:** `system-ui` 700, mayúsculas con tracking ancho en los sellos.
- **Sellos (títulos de juego):** "Ruleta", "Votación", "Mensaje", "Match".
- **Partículas:** rectas, redondas y chispas (40 piezas).
- **Objetos decorativos:** destello cian (en match y ruleta) y halo rosa (en votación y mensaje).
- **Sonidos:** neon-clic, neon-exito, neon-decepcion.
- **Personalidad:** elegante, nocturna, brillante sobre negro. Los bordes son líneas finas que brillan.

### T2. Manga (`manga`)

- **Concepto:** página de manga japonés: papel crema, tinta negra, rojo de sello hanko y onomatopeyas.
- **Paleta:**

  | Token | Valor | Uso |
  |---|---|---|
  | fondo | `#E8D4A8` | papel envejecido |
  | sectorA / sectorB | `#FFF6DC` / `#C4A86A` | papel claro y papel tostado |
  | acento | `#C41E3A` | rojo hanko |
  | info / texto | `#111111` | tinta |
  | fotoHueco | `#B89A5C` | |

- **Tipografía:** "Zen Maru Gothic" 800 con Impact de respaldo.
- **Sellos:** ルーレット (ruleta), 投票 (votación), 伝言 (mensaje), ドン (match).
- **Partículas:** pétalos de sakura, mini sellos y manchas de tinta.
- **Objetos decorativos:** onomatopeya ドン gigante (en match) y trama de puntos screentone (en todo).
- **Texturas de ruleta:** papel, trama y líneas cinéticas.
- **Sonidos:** taiko-clic, don-exito, shamisen-decepcion.
- **Personalidad:** viñetas con borde de tinta grueso, sombras duras desplazadas en rojo, golpes de impacto.

### T3. Meteoro (`meteoro`)

- **Concepto:** carrera de autos retro, al estilo del anime de los 60: pista, bandera a cuadros, rojo, amarillo y velocidad.
- **Paleta:**

  | Token | Valor | Uso |
  |---|---|---|
  | fondo | `#1A1A1A` | asfalto |
  | sectorA / sectorB | `#E31C23` / `#FFD100` | rojo y amarillo alternos |
  | acento | `#E31C23` | rojo carrera |
  | info | `#FFFFFF` | blanco |
  | texto | `#111111` | |
  | fotoHueco | `#3A3A3A` | |

- **Tipografía:** Impact 800, cursiva simulada con `skew`, en mayúsculas.
- **Sellos:** GO! (ruleta), GRID (votación), RADIO (mensaje), FINISH (match).
- **Partículas:** banderitas a cuadros, rayas de velocidad y chispas (48 piezas).
- **Objetos decorativos:** rayas de velocidad (en todo), bandera a cuadros (en ruleta y votación) y GO! gigante (en match).
- **Textura de ruleta:** líneas de velocidad.
- **Sonidos:** motor (clic, éxito, decepción).
- **Personalidad:** todo inclinado hacia adelante, bordes blancos con contorno rojo, aros amarillos, sensación de vértigo.
- **Ojo:** no usar el auto Mach 5, ni el personaje, ni el logo de la serie. Sólo la estética.

### T4. Doraemon (`doraemon`)

- **Concepto:** cielo de caricatura infantil: celeste, nubes, cascabel amarillo, hélice y gato azul.
- **Paleta:**

  | Token | Valor | Uso |
  |---|---|---|
  | fondo | `#7EC8E8` | cielo |
  | sectorA / sectorB | `#2BA4D9` / `#FFFFFF` | azul y blanco |
  | acento | `#E31C23` | rojo collar |
  | info / texto | `#1A4A73` | azul marino |
  | fotoHueco | (sin definir; usar `#BFE3F3`) | |

- **Tipografía:** "Zen Maru Gothic" con "Comic Sans MS" de respaldo, redondeada.
- **Sellos:** ポン (ruleta), どちら (votación), もしもし (mensaje), 大好き (match).
- **Partículas:** nubecitas, estrellas y cascabeles.
- **Objetos decorativos:** nubes que flotan, hélice que gira (en ruleta y match), gato azul hecho de círculos (en todo) y estrellas titilantes (en todo).
- **Sonidos:** campana (clic, éxito, decepción).
- **Personalidad:** todo redondo, inflado, con sombra amarilla abajo y movimiento de rebote.
- **Riesgo legal:** el nombre y el "gato azul" remiten a una marca registrada. **Se recomienda rediseñarla como plantilla original** (nombre sugerido: `cielo`) que conserve la estética (cielo, nubes, redondez, cascabel) con un personaje propio, por ejemplo una mascota nube o un pajarito con hélice. Entregar el arte con ese nombre nuevo.

### Plantillas nuevas (opcional)

Si el agente de diseño propone plantillas nuevas, cada una tiene que definir lo mismo que las de arriba: los tokens de la paleta (fondo, sectorA, sectorB, acento, info, texto, colores extra, fotoHueco), la tipografía, los cuatro sellos, tres formas de partícula, de dos a cuatro objetos decorativos, tres sonidos y **todos los elementos de la Parte 2**.

---

## Parte 2. Elementos de la pantalla del salón

Las medidas en píxeles son para 1920×1080. La pantalla tiene dos estados de fondo:

- **"Ahora" (reposo):** la canción que suena.
- **Capa de juego:** se superpone cuando hay ruleta, votación, mensaje o match.

```
┌────────────────────────────────────────────────────────────────┐
│ P01 fondo + P02 ambiente                         P19 match chip│  ← franja superior 86 px
│                                                                │
│  P03 personajes          ┌───────────────────┐    ┌──────────┐ │
│  (bordes)                │ P05 marco         │    │ P16 chat │ │
│                          │  P06 sello        │    │  rail    │ │
│                          │  P08 ruleta / P14 │    │          │ │
│                          │  votación / P17   │    └──────────┘ │
│                          │  globos           │                 │
│                          └───────────────────┘                 │
│  P10 tira de parejas ─────────────────────────────────────     │
│  P20 "Ahora" (cuando no hay juego ocupa la pantalla)           │
└────────────────────────────────────────────────────────────────┘
```

### P01. Fondo de escena

- **Qué es:** la imagen de fondo detrás de todo mientras hay una capa de juego.
- **Cuándo aparece:** siempre que hay un juego activo. En reposo manda P20.
- **Tamaño:** pantalla completa, 1920×1080, sin zonas seguras.
- **Variantes de fondo que elige el local:** `actual` (la portada de la canción, desenfocada), `logo` (el logo del bar), `foto` (una foto subida por el local) y `juego` (el fondo de la plantilla). **Sólo `juego` lo dibuja la plantilla.** En las otras tres, la plantilla aporta un velo de color encima para que el contenido se lea.
- **Animación:** ninguna (lo animado es P02).
- **Cómo se ve hoy:**
  - Nocturna (`fx-fondo-neon`): degradé radial de `#2A2148` en el centro a `#1A1430` en los bordes.
  - Manga (`fx-fondo-papel`): papel `#E8D4A8` con líneas diagonales finas y un manchón radial rojo suave.
  - Meteoro (`fx-fondo-pista`): asfalto oscuro con bandas a cuadros arriba y abajo y líneas rojas y blancas de pista.
  - Doraemon (`fx-fondo-cielo`): degradé de azul a blanco con círculos blancos que hacen de nubes.
- **Entregar por plantilla:**
  - `P01-fondo.webp` a 3840×2160 y 1920×1080, con el centro (78 % del ancho y del alto) tranquilo, sin detalle fuerte;
  - `P01-velo.png`, un velo semitransparente para poner sobre foto, logo o portada.

### P02. Ambiente animado

- **Qué es:** una capa de movimiento suave sobre el fondo que le da vida a la escena.
- **Cuándo aparece:** con cualquier juego, si el local tiene los efectos activados.
- **Tamaño:** pantalla completa, por encima de P01 y por debajo de todo lo demás. Opacidad máxima del 35 %.
- **Cómo se ve hoy:**
  - Nocturna (`fx-ambiente-neon`): resplandor radial rosa que respira.
  - Manga (`fx-ambiente-lineas`): líneas cinéticas radiales (cónicas) desde el centro.
  - Meteoro (`fx-ambiente-velocidad`): rayas amarillas y blancas que corren hacia la izquierda en loop rápido (0,22 s).
  - Doraemon (`fx-ambiente-nubes`): círculos blancos que flotan (7 s).
- **Entregar por plantilla:** `P02-ambiente.json` (Lottie) o un PNG que se pueda repetir en mosaico, con loop sin corte.

### P03. Personajes y objetos decorativos de los costados

- **Qué es:** las figuras que "animan" al costado de los elementos interactivos: mascota, hélice, onomatopeya, bandera, halo, etc.
- **Cuándo aparece:** según el juego (tabla abajo). Se pueden apagar desde el panel ("objetos").
- **Posición:** en los bordes del escenario, fuera de la zona central de 78 % × 78 %. Hoy la hélice está en 84 % / 16 % (arriba a la derecha) y el gato azul abajo a la derecha. **Nunca encima del marco P05 ni del chat P16.**
- **Tamaño sugerido:** de 160 a 320 px de alto.
- **Cuáles hay hoy y en qué juego aparecen:**

  | Plantilla | Objeto | Juegos | Cómo es hoy |
  |---|---|---|---|
  | Nocturna | destello | match, ruleta | resplandor radial cian |
  | Nocturna | halo | votación, mensaje | resplandor radial rosa |
  | Manga | onoma ドン | match | texto ドン de 72 px, 18 % de opacidad, girado −12° |
  | Manga | trama | todos | trama de puntos screentone |
  | Meteoro | rayas | todos | rayas que se desplazan (0,28 s) |
  | Meteoro | bandera | ruleta, votación | cuadros al 14 % de opacidad |
  | Meteoro | go | match | GO! amarillo de 92 px, 16 % de opacidad, inclinado |
  | Doraemon | nubesfx | todos | nubes que flotan (8 s) |
  | Doraemon | helice | ruleta, match | cruz que gira (1,1 s) arriba a la derecha |
  | Doraemon | gatoazul | todos | nueve círculos abajo a la derecha que flotan (3,4 s) |
  | Doraemon | estrellas | todos | estrellas que titilan (1,6 s) |

- **Lo que más falta:** hoy no hay personajes reales, sólo formas abstractas. Pedimos **una mascota por plantilla** con estas poses:
  - `reposo`: idle, en loop;
  - `festeja`: cuando sale un ganador o se forma una pareja;
  - `decepcion`: cuando alguien rechaza;
  - `señala`: apunta hacia el centro durante la ruleta o la votación.
- **Entregar por plantilla:**
  - `P03-mascota-{reposo,festeja,decepcion,señala}.json` (o tiras de PNG), mirando hacia el centro de la pantalla, con una versión espejada para el otro lado;
  - los objetos de la tabla redibujados: `P03-obj-<nombre>.svg` o `.json`.

### P04. Impacto

- **Qué es:** un golpe visual corto que ocupa toda la pantalla cuando pasa algo importante: la ruleta se detiene, gana una opción o se forma una pareja.
- **Duración:** de 0,5 a 0,8 s, una sola vez.
- **Cómo se ve hoy:**
  - Nocturna (`fx-impacto-flash`): flash radial rosa (0,8 s).
  - Manga (`fx-impacto-don`): anillos concéntricos rojos que se expanden (0,7 s).
  - Meteoro (`fx-impacto-turbo`): rayas rojas que cruzan (0,55 s).
  - Doraemon (`fx-impacto-destello`): destello radial amarillo.
- **Entregar por plantilla:** `P04-impacto.json` (Lottie, 1920×1080, fondo transparente).

### P05. Marco del juego (tarjeta contenedora)

- **Qué es:** la "tarjeta" que contiene el juego activo: la ruleta, la votación o los globos.
- **Posición:** centrado. Ocupa como máximo 78 % × 78 % de la pantalla (unos 1498×842 px). Su tamaño real depende del contenido, por eso **tiene que ser 9-slice**.
- **Cómo se ve hoy:**
  - Nocturna (`fx-marco-neon`): borde rosa de 1 px al 45 %, radio 22 px, fondo `rgba(20,16,40,.55)` y halo rosa de 48 px.
  - Manga (`fx-marco-tinta`): borde de tinta `#111` de 5 px, fondo `#FFF6DC` y sombra dura roja desplazada (12 px, 14 px).
  - Meteoro (`fx-marco-carrera`): borde blanco de 6 px, contorno rojo de 6 px, fondo `rgba(17,17,17,.92)` y aro amarillo de 12 px.
  - Doraemon (`fx-marco-globo`): borde azul `#2BA4D9` de 6 px, radio 48 px, fondo blanco al 88 % y sombra amarilla de 10 px abajo.
- **Entregar por plantilla:** `P05-marco.svg` en 9-slice, con las medidas de las esquinas indicadas, y el color de fondo del interior.

### P06. Sello (título del juego)

- **Qué es:** la etiqueta que dice qué juego está corriendo.
- **Posición:** arriba del marco P05, centrado o en la esquina superior izquierda, a unos 48 a 64 px de alto.
- **Contenido:** una palabra fija por juego y plantilla (ver Parte 1). Debajo puede aparecer una "ruta" corta, por ejemplo "MESA 4 → MESA 7", en el color del sello, en mayúsculas.
- **Cómo se ve hoy:**
  - Nocturna (`fx-sello-neon`): texto rosa en mayúsculas, tracking 0,16 em, con brillo.
  - Manga (`fx-sello-hanko`): sello circular rojo girado −8°, con sombra de 3 px.
  - Meteoro (`fx-sello-go`): placa roja con texto blanco Impact, inclinada −12° y con sombra amarilla.
  - Doraemon (`fx-sello-cascabel`): píldora amarilla con borde inferior rojo, como un cascabel.
- **Entregar por plantilla:** `P06-sello-{ruleta,votacion,mensaje,match}.svg`, con el texto como trazo o en una capa aparte para poder traducirlo, y `P06-sello-base.svg` vacío en 9-slice.
- **Nota:** el reloj de cuenta regresiva (`escena-reloj`) existe en el código pero hoy está oculto. Si se diseña, que sea un anillo pequeño junto al sello: `P06-reloj.svg`.

### P07. Animación de entrada

- **Qué es:** cómo aparece el marco P05 cuando arranca un juego.
- **Cómo se ve hoy:**
  - Nocturna (`fx-entrada-scale`): crece desde escala 0,92 (0,55 s).
  - Manga (`fx-entrada-slam`): golpe desde escala 1,12 y giro −2° (0,45 s).
  - Meteoro (`fx-entrada-zoom`): zoom desde escala 1,35 con inclinación −8° (0,4 s).
  - Doraemon (`fx-entrada-rebote`): cae 18 px desde arriba con rebote, desde escala 0,9 (0,55 s).
- **Entregar por plantilla:** una especificación de la curva y la duración (texto o Lottie de referencia). Puede ir con un efecto de partículas opcional, `P07-entrada.json`.

### P08. Ruleta

- **Qué es:** la rueda que sortea una mesa o una persona.
- **Cuándo aparece:** juego "ruleta". Puede haber **una rueda** o **varias a la vez** (modo parejas).
- **Tamaño:** una rueda mide unos 626 px de diámetro (58 % del alto). Con varias ruedas, cada una mide hasta 842 px y se reparten el espacio. Se dibuja en un canvas de 720 px.
- **Partes:**
  - **P08a. Sectores:** gajos alternando `sectorA` y `sectorB` (en Nocturna también los colores extra). La cantidad es variable, de 2 a 40 o más. **Tienen que funcionar con cualquier cantidad**, así que se entrega una textura, no gajos dibujados uno por uno.
  - **P08b. Foto por sector:** círculo de 56 px de diámetro (radio 28 en el canvas) con la foto o las iniciales.
  - **P08c. Etiqueta por sector:** nombre o número de mesa, ubicado al 82 % del radio y siguiendo el ángulo del gajo.
  - **P08d. Puntero:** triángulo en color `acento`, fijo arriba.
  - **P08e. Centro (buje):** hoy no tiene. Se pide uno decorativo de unos 120 px.
  - **P08f. Aro exterior:** hoy no tiene. Se pide un borde con tachas o luces.
- **Animación:** gira 6,8 s con frenado exponencial. Al detenerse dispara P04 y P12.
- **Textura de giro:** Manga usa papel, trama y líneas; Meteoro usa líneas; Nocturna y Doraemon no tienen.
- **Cómo se ve hoy:**
  - Nocturna: gajos violetas oscuros alternos con toques de colores neón y puntero rosa.
  - Manga: gajos de papel claro y tostado con textura de trama y puntero rojo.
  - Meteoro: gajos rojos y amarillos, como un neumático o un semáforo, con líneas de velocidad.
  - Doraemon: gajos azules y blancos, como un globo, con puntero rojo.
- **Entregar por plantilla:**
  - `P08-aro.svg` (720×720, centro transparente);
  - `P08-centro.svg` (120×120);
  - `P08-puntero.svg` (80×96);
  - `P08-textura-sector.png` (512×512, para enmascarar en cada gajo, con opacidad baja);
  - `P08-marco-foto.svg` (un anillo de 64 px para la foto de cada sector);
  - opcional, `P08-luces.json`: luces del aro que corren mientras gira.

### P09. Participante elegido y pareja en el centro

- **Qué es:** cuando la ruleta para, la persona elegida, o la pareja formada, aparece grande en el centro.
- **Tamaño:** foto de 151 px de diámetro (14 % del alto) con un borde de 3 px del color del sello. Nombre debajo. En pareja, dos fotos lado a lado con un separador ("+", corazón o "vs" según la plantilla).
- **Contenedor (`fx-ficha`), cómo se ve hoy:**
  - Nocturna: radio 18, fondo oscuro, brillo rosa.
  - Manga: borde `#111` de 4 px, fondo crema y sombra roja desplazada (6 px, 7 px).
  - Meteoro: borde blanco de 3 px, contorno rojo, fondo `#111` y texto amarillo Impact en mayúsculas.
  - Doraemon: borde azul de 4 px, radio 36, fondo blanco y sombra amarilla abajo.
- **Entregar por plantilla:**
  - `P09-ficha.svg` en 9-slice;
  - `P09-anillo-foto.svg` (160 px);
  - `P09-separador-pareja.svg` (64 px);
  - opcional, `P09-corona.svg` o un adorno para la persona elegida.

### P10. Tira de parejas formadas (pila)

- **Qué es:** el historial de las parejas o personas que ya salieron en esta ronda.
- **Posición:** una franja abajo de todo, con "píldoras" en fila. Cada píldora lleva dos fotos de 22 px y los nombres cortos.
- **Animación de llegada:** la pareja "vuela" desde el centro hasta la tira. Hoy sale desde un desplazamiento de (−28 % del ancho, −32 % del alto) con escala 1,25 y una sombra de color, en 0,75 s.
- **Cómo se ve hoy:**
  - Nocturna (`fx-apila-neon`): sombra rosa.
  - Manga (`fx-apila-tinta`): golpe con tinta.
  - Meteoro (`fx-apila-carrera`): entra derrapando.
  - Doraemon (`fx-apila-cielo`): flota.
- **Entregar por plantilla:** `P10-pildora.svg` en 9-slice (unos 44 px de alto) y `P10-estela.json`, la estela del vuelo.

### P11. Rechazo

- **Qué es:** cuando una persona elegida rechaza (o no responde), su ficha "se cae" y se descarta.
- **Animación hoy:** una salida específica por plantilla (`fx-rechazo-*`) con el sonido de decepción.
- **Entregar por plantilla:**
  - `P11-rechazo.json`, el efecto encima de la ficha (por ejemplo: un neón que se apaga, una mancha de tinta con ×, una bandera negra o una nube que llueve);
  - `P11-sello-rechazo.svg`, una etiqueta "PASO", "NO" o equivalente en el idioma de la plantilla.

### P12. Confeti y partículas

- **Qué es:** la lluvia de partículas cuando hay ganador, pareja o match.
- **Animación:** caen desde arriba (`papel-cae`) con giro, durante unos 2,5 a 4 s. De 40 a 48 piezas.
- **Formas por plantilla:**
  - Nocturna: recta, redonda, chispa (estrella).
  - Manga: sakura, sello, tinta.
  - Meteoro: bandera, raya (28×3), chispa.
  - Doraemon: nube, estrella, cascabel.
- **Entregar por plantilla:** `P12-confeti-<forma>.svg` (64×64), monocromos para poder teñirlos con la paleta, y una o dos formas nuevas si suman.

### P13. Cierre del salón (grilla final)

- **Qué es:** al terminar una ronda de ruleta por parejas, se muestra un resumen con todas las parejas formadas.
- **Layout:** grilla de 1×1 hasta 4×2 celdas dentro del marco P05. Cada celda es una ficha P09 en chico.
- **Animación hoy:** `fx-cierre-*`, las celdas entran en cascada.
- **Entregar por plantilla:** `P13-titulo.svg` (por ejemplo: "Parejas de la noche", "完", "FINISH" o "¡Listo!") y `P13-celda.svg` en 9-slice, si es distinta de P09.

### P14. Votación de la próxima canción (u otra votación)

- **Qué es:** el público vota desde el teléfono cuál canción (o video, participante o pareja) va después.
- **Contenido:** una pregunta (`texto`), de 2 a 4 opciones, cada una con foto o portada (`foto` o `fotos`) y título, y un tiempo restante (`quedaMs`).
- **Layout:** las opciones van en fila dentro del marco P05. Cada opción tiene una portada cuadrada de 173 px (16 % del alto) y el título debajo, en 12 a 16 px y en negrita.
- **Estados:**
  - **votando:** todas iguales, con una barra o porcentaje en vivo (hoy no se muestra el porcentaje; se pide diseñar una barra);
  - **ganador:** la opción ganadora crece, recibe el borde del sello y dispara P04 y P12, y las demás se apagan al 40 %.
- **Entregar por plantilla:**
  - `P14-tarjeta-opcion.svg` en 9-slice, en dos versiones, normal y ganadora;
  - `P14-barra-votos.svg` (fondo y relleno);
  - `P14-insignia-ganador.svg` (por ejemplo: corona, bandera a cuadros, sello 勝 o estrella);
  - `P14-tiempo.svg`, un anillo o barra de cuenta regresiva.

### P15. Globo de dedicatoria (`fx-globo`)

- **Qué es:** el globo de texto con el que se muestra una dedicatoria o un mensaje destacado dentro del marco.
- **Tamaño:** ancho máximo de 922 px (48 % del ancho), con un padding de 24 a 36 px. Hay uno o varios apilados con una separación de 17 px.
- **Cómo se ve hoy:**
  - Nocturna (`fx-globo-neon`): fondo cian al 12 % con brillo.
  - Manga (`fx-globo-fukidashi`): globo de historieta con borde `#111` de 3 px, radio "18 18 18 4" (pico abajo a la izquierda) y sombra dura de 6 px.
  - Meteoro (`fx-globo-carrera`): borde amarillo de 4 px, fondo blanco, inclinado −6° y sombra roja.
  - Doraemon (`fx-globo-redondo`): borde azul de 4 px, radio 40 y sombra amarilla.
- **Entregar por plantilla:** `P15-globo.svg` en 9-slice, con el pico (la colita del globo) como pieza aparte para poder ponerlo a la izquierda o a la derecha.

### P16. Chat en pantalla (mensajes entre mesas)

- **Qué es:** los mensajes que se mandan las mesas, en forma de conversación.
- **Posición:** un riel a la derecha, a 61 px del borde derecho y 130 px desde arriba.
- **Tamaño según el peso del mensaje:**

  | Peso | Ancho | Alto máximo |
  |---|---|---|
  | accesorio (acompaña a otro juego) | 352 px | 448 px |
  | destacado (el chat es el protagonista) | 416 px | 640 px |

- **Contenido por fila:** autor, foto o iniciales, texto, lado (`in` es de otra mesa y va a la izquierda; `out` es de la mesa destinataria y va a la derecha), hora (`cuando`) y la marca `nuevo`.
- **Animación:** el mensaje nuevo entra con un giro 3D en perspectiva (`sms-entra`, 0,62 s).
- **Cómo se ve hoy:** **ignora la plantilla.** Son burbujas blancas con degradé en perspectiva 3D (estilo SMS), iguales en las cuatro. **Hay que diseñarlo por plantilla.**
- **Entregar por plantilla:**
  - `P16-riel.svg`, el fondo o marco del riel (opcional, puede ser transparente);
  - `P16-burbuja-in.svg` y `P16-burbuja-out.svg` en 9-slice, con pico;
  - `P16-avatar-anillo.svg` (48 px);
  - `P16-insignia-nuevo.svg`;
  - una especificación de los colores de texto y de meta (autor y hora) para cada burbuja.

### P17. Match

- **Qué es:** el aviso de que dos personas o mesas hicieron match (se eligieron mutuamente).
- **Dos formatos:**
  - **chip superior:** una píldora centrada arriba (a 59 px del borde superior) con las dos fotos y los nombres. Aparece encima de lo que haya en pantalla;
  - **capa match completa:** las dos fotos grandes juntas, el texto (`texto`) y los nombres (`desde` y `hacia`) en 14 a 20 px, con P04, P12 y el objeto decorativo de match (ドン, GO!, destello, hélice).
- **Entregar por plantilla:**
  - `P17-chip.svg` en 9-slice (unos 64 px de alto);
  - `P17-union.json`, la animación que une las dos fotos (por ejemplo: dos neones que se tocan, un ドン, dos autos que cruzan la meta o dos nubes que se juntan);
  - `P17-icono.svg`, el ícono de match de la plantilla.

### P18. Lienzo (efecto de la escena completa)

- **Qué es:** un movimiento leve de toda la escena mientras el juego está en su momento de tensión, por ejemplo mientras la ruleta gira.
- **Cómo se ve hoy:**
  - Nocturna: pulso.
  - Manga: temblor.
  - Meteoro: turbo (vibración horizontal).
  - Doraemon: flota.
- **Entregar por plantilla:** sólo una especificación (amplitud y período). No requiere arte.

### P19. Franja superior (chrome)

- **Qué es:** una franja de 86 px de alto (8 % de la pantalla) arriba de todo, reservada para el chip de match P17 y la identidad del bar.
- **Identidad del bar:** nombre o logo del local, como máximo 448 px de ancho.
- **Entregar por plantilla:** `P19-franja.svg` (1920×86, opcional, sutil) y `P19-placa-logo.svg` en 9-slice, una placa donde se apoya el logo del bar.

### P20. "Ahora" (pantalla de reposo con la canción que suena)

- **Qué es:** cuando no hay juego, la pantalla muestra la canción actual: portada, título, artista, "AHORA SUENA" y, si la hay, la dedicatoria.
- **Layout:** la portada de fondo, grande y desenfocada, con un velo de degradé (`ahora-velo`). Título en 22 a 56 px, artista debajo, el texto "AHORA" en rosa y la dedicatoria en `#FFB648`.
- **Cómo se ve hoy:** **ignora la plantilla.** Usa siempre los colores de Nocturna.
- **Entregar por plantilla:**
  - `P20-velo.png`, el degradé que va encima de la portada (1920×1080);
  - `P20-marco-portada.svg` (480×480), por ejemplo un vinilo, un manga, un velocímetro o una nube;
  - `P20-etiqueta-ahora.svg`, el texto "AHORA SUENA" en el estilo de la plantilla;
  - `P20-dedicatoria.svg`, un globo pequeño para la dedicatoria (puede reutilizar P15);
  - opcional, `P20-ecualizador.json`, unas barras que bailan.

---

## Parte 3. Lista de entrega (elementos × plantillas)

Marcar cada celda al entregar. Si se rediseña Doraemon como `cielo`, esa columna pasa a llamarse `cielo`.

| ID | Elemento | Archivos | Nocturna | Manga | Meteoro | Doraemon / cielo |
|---|---|---|---|---|---|---|
| P01 | Fondo de escena | fondo.webp, velo.png | ☐ | ☐ | ☐ | ☐ |
| P02 | Ambiente animado | ambiente.json | ☐ | ☐ | ☐ | ☐ |
| P03 | Mascota y objetos | mascota ×4 poses, obj-* | ☐ | ☐ | ☐ | ☐ |
| P04 | Impacto | impacto.json | ☐ | ☐ | ☐ | ☐ |
| P05 | Marco del juego | marco.svg (9-slice) | ☐ | ☐ | ☐ | ☐ |
| P06 | Sellos | sello ×4, sello-base, reloj | ☐ | ☐ | ☐ | ☐ |
| P07 | Entrada | especificación (+ json opcional) | ☐ | ☐ | ☐ | ☐ |
| P08 | Ruleta | aro, centro, puntero, textura, marco-foto, luces | ☐ | ☐ | ☐ | ☐ |
| P09 | Elegido y pareja | ficha, anillo-foto, separador | ☐ | ☐ | ☐ | ☐ |
| P10 | Tira de parejas | pildora, estela | ☐ | ☐ | ☐ | ☐ |
| P11 | Rechazo | rechazo.json, sello-rechazo | ☐ | ☐ | ☐ | ☐ |
| P12 | Confeti | confeti ×3 formas | ☐ | ☐ | ☐ | ☐ |
| P13 | Cierre del salón | titulo, celda | ☐ | ☐ | ☐ | ☐ |
| P14 | Votación | tarjeta normal y ganadora, barra, insignia, tiempo | ☐ | ☐ | ☐ | ☐ |
| P15 | Globo de dedicatoria | globo, pico | ☐ | ☐ | ☐ | ☐ |
| P16 | Chat | burbuja in y out, avatar, nuevo, riel | ☐ | ☐ | ☐ | ☐ |
| P17 | Match | chip, union.json, icono | ☐ | ☐ | ☐ | ☐ |
| P18 | Lienzo | especificación | ☐ | ☐ | ☐ | ☐ |
| P19 | Franja superior | franja, placa-logo | ☐ | ☐ | ☐ | ☐ |
| P20 | "Ahora" | velo, marco-portada, etiqueta, dedicatoria | ☐ | ☐ | ☐ | ☐ |
| — | Sonidos | clic, exito, decepcion | ☐ | ☐ | ☐ | ☐ |

## Parte 4. Qué tiene que devolver el agente de diseño, además de los archivos

1. **Una lámina por plantilla** a 1920×1080 que muestre cuatro momentos:
   - la ruleta girando, con la mascota señalando;
   - la pareja formada, con la tira abajo;
   - la votación en estado ganador;
   - el chat destacado con un globo de dedicatoria.
2. **Una lámina de "Ahora"** por plantilla.
3. **Tokens actualizados** (paleta y tipografía) si cambian, en formato JSON:

   ```json
   {"fondo":"","sectorA":"","sectorB":"","acento":"","info":"","texto":"","colores":[],"fotoHueco":"","fuente":""}
   ```

4. **Una prueba de legibilidad:** las láminas reducidas a 480×270 tienen que seguir leyéndose.

Con eso se implementa cambiando las clases `fx-*` y la tabla `PIELES` de `display.js` por los archivos entregados, sin tocar posiciones ni lógica.
