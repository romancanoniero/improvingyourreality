# Fonomusic: prompts para Gemini

Prompts para generar en Gemini el arte de la pantalla del salón. Hay dos formas de usarlos: el **modo rápido**, con un prompt maestro por plantilla que genera todo en 5 imágenes, o un **prompt por elemento y por plantilla** para rehacer una pieza puntual. Los códigos P01–P20 son los del [brief por plantilla](./fonomusic-brief-plantillas.md).

## Cómo usarlos

1. **Cada prompt es autónomo:** ya incluye qué es el elemento, cómo tiene que verse en esa plantilla, la paleta, la mascota y las reglas. Se puede pegar suelto.
2. **Igual conviene un chat por plantilla.** Si en ese chat pegás primero el ancla de estilo (sección "Anclas"), Gemini mantiene la misma mano en todas las piezas.
3. **Los prompts están en inglés** porque los modelos de imagen responden con más precisión. Los textos que aparecen en pantalla quedan en castellano o japonés según la plantilla.
4. **Formato:** en Google AI Studio elegí 16:9 (o 1:1 para P02). En la app de Gemini ya va pedido dentro del prompt.
5. **Fondo para recortar:** Gemini no entrega transparencia. Las piezas sueltas se piden sobre **verde liso `#00FF00`**, que después se quita.
6. **Si algo sale mal**, corregí en el mismo chat: "same image, but make the pointer bigger and remove the text at the bottom".
7. **Aprobación:** en el modo rápido, primero se aprueban las imágenes 1 y 3 de cada plantilla (fondo y kit A); con prompts sueltos, el ancla y P05 (marco). Con eso aprobado se generan las demás piezas, y nada se anima sin tu aprobación.
8. **Nombres de archivo:** `<plantilla>-<código>.png`, por ejemplo `manga-P05.png` o `meteoro-P03.png`.

P07 (animación de entrada) y P18 (movimiento de la escena) no llevan prompt de imagen: son especificaciones de animación que hago yo.

## Modo rápido: un prompt maestro por plantilla

Un solo prompt por plantilla genera todo el kit en **5 imágenes**, así que son 20 corridas en total en lugar de 80.

| Imagen | Contenido | Elementos |
|---|---|---|
| 1 | Fondo de escena | P01 |
| 2 | Mascota en 4 poses, objetos decorativos, confeti, impacto y rechazo | P03, P03b, P12, P04, P11 |
| 3 | Kit A: marco, títulos de juego, ficha del elegido, píldora de pareja, cierre de ronda | P05, P06, P09, P10, P13 |
| 4 | Kit B: globo de dedicatoria, chat, match, franja superior y placa del logo | P15, P16, P17, P19 |
| 5 | Ruleta, votación y piezas de "Ahora suena" | P08, P14, P20 |

**Cómo se usa:**
1. Abrí un chat nuevo de Gemini y pegá el prompt maestro de la plantilla.
2. Si Gemini devuelve una sola imagen, escribí `siguiente` para cada una de las demás. Como todo queda en el mismo chat, mantiene el estilo y la mascota.
3. Guardá las imágenes como `<plantilla>-H1.png` a `<plantilla>-H5.png`, por ejemplo `manga-H3.png`.

**La contra:** al entrar muchas piezas en una sola imagen, cada pieza sale más chica y con menos detalle. Para aprobar el estilo y para la mayoría de las piezas alcanza. Si alguna sale chica o confusa, se rehace sola con su prompt individual de la sección "Elementos".

No hace falta pedir el velo (P01b) ni el ambiente animado (P02): los saco yo del fondo con degradés.

### T1 Nocturna

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Mascot (original, identical in every image): "Voltio", a small friendly robot built from bent neon tubes, with a vinyl-record face, two dot eyes and a smile drawn in cyan light, and pink tube arms.

Generate 5 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: Deep violet night with a soft radial glow in the center fading to #1A1430 at the edges; neon tube lines in pink and cyan and blurred bokeh lights along the borders; a faint reflective floor at the bottom.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). The mascot glows softly like real neon, pink and cyan tubes.
- Middle row, decorative side objects: 1) a cyan lens flare, 2) a pink glowing halo ring, 3) a neon music note, 4) a small neon disco ball.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: thin neon strips, glowing dots, four-point sparkles.
- Bottom center, a celebration burst radiating from an empty central circle: Pink and cyan neon light rays with sparkles and a bloom ring.
- Bottom right, a rejection effect over an empty card plus a "NO" label: A neon tube flickering off and cracking, dim pink; the "NO" in broken flickering neon.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Thin pink neon tube border with soft glow, 22 px rounded corners, dark translucent violet interior #141028, small cyan accents on the corners.
- Five game title labels with the same base shape: "RULETA", "VOTACIÓN", "MENSAJE", "MATCH" and one empty. Glowing pink neon uppercase lettering with wide spacing inside a thin neon-tube capsule outline.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Dark violet card with 18 px radius and pink neon glow; pink neon photo ring; separator a neon heart; adornment a cyan neon star.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Dark pill with a thin pink neon outline; trail a pink light streak.
- End-of-round title "PAREJAS DE LA NOCHE" and one small grid cell with two avatars ("Ana", "Juan"): The title is a neon sign; the cell is a dark card with thin pink neon outline.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Translucent cyan glass balloon with a cyan neon edge glow and near-white text.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming bubble dark violet with a cyan edge; outgoing bubble a glowing pink gradient with white text; badge in pink neon; panel a dark glass column.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: A pink and a cyan neon tube meeting to form a heart; chip dark with neon outline.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Thin dark band with a pink neon line underneath; plate a neon-outlined rounded rectangle.

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating #241C3D and #141028 with thin pink and cyan dividers, each with a generic avatar and a short name like "Mesa 3". Rim of pink neon with small cyan light bulbs; hub shaped like a glowing vinyl record; pointer a pink glowing triangle.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Dark cards with thin cyan neon outline; the winner gets a thicker pink neon border and bloom; badge a neon crown; bar filled with cyan light; countdown ring in pink neon.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a glowing vinyl sleeve with a record peeking out; label a pink neon sign; equalizer bars in cyan neon.

Rules for all five images: no third-party characters, logos or brands; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all five images; no extra text except the one requested.
```

### T2 Manga

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Mascot (original, identical in every image): "Sumi", a chubby round ink-drop character with big expressive manga eyes, a red hachimaki headband and a small brush-tip tail, drawn with thick ink lines and screentone shading.

Generate 5 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: Aged cream manga paper with fine diagonal hatching, screentone dot gradients in the corners, very faint radial speed lines toward the edges, a soft red ink wash in one corner and rough panel borders around the frame.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Drawn in black ink with screentone shading and red accents, like a manga sticker.
- Middle row, decorative side objects: 1) a giant "ドン" sound-effect lettering in black ink with red outline, 2) a patch of screentone dots, 3) an ink splash, 4) a small red paper lantern.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: sakura petals, tiny round red stamps, ink splats.
- Bottom center, a celebration burst radiating from an empty central circle: Red concentric shock rings with black ink concentration lines and small "ドン" marks.
- Bottom right, a rejection effect over an empty card plus a "NO" label: A black ink splat with a big red ×; the "NO" as a red hanko stamp.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Thick black ink comic-panel border, cream interior #FFF6DC, hard red offset shadow to the bottom-right, screentone dots in the corners.
- Five game title labels with the same base shape: "ルーレット", "投票", "伝言", "ドン" and one empty. Red round hanko stamps rotated -8°, with ink texture and a small black offset shadow.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Cream card with thick ink border and hard red shadow; ink photo ring with a red stamp ring; separator a red ink heart with action lines; adornment a small ink-drawn crown.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Cream pill with black ink border and red shadow; trail black ink brush speed lines.
- End-of-round title "完" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title is a brush-lettered ink banner on a paper scroll; the cell an ink-bordered cream panel.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Classic manga fukidashi: white, 3 px black ink border, hard black offset shadow, sharp tail.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming a white fukidashi with ink border; outgoing cream with red hard shadow; badge a red stamp; panel a vertical manga page strip.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: A big "ドン" with the two avatars bumping together and a red ink heart; chip cream with ink border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Ink-bordered band with screentone; plate a cream paper tag with a red stamp in one corner.

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating #FFF6DC and #C4A86A with screentone texture, each with a generic avatar and a short name like "Mesa 3". Rim as a thick black ink circle with red hanko marks; hub a red hanko seal; pointer a black brush-stroke arrow with a red tip.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Cream cards with ink borders; the winner gets a red border, red hard shadow and a red "勝" stamp badge; bar filled with red screentone; countdown ring a brush-stroke circle.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a manga panel with ink border and speed lines; label a hand-lettered ink banner; equalizer bars as ink brush strokes.

Rules for all five images: no third-party characters, logos or brands; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all five images; no extra text except the one requested.
```

### T3 Meteoro

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Mascot (original, identical in every image): "Turbo", a cheerful round racing helmet with goggles, a white visor stripe, a red and yellow paint job, a checkered scarf flying behind it and tiny sneakers.

Generate 5 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: Dark asphalt race track, checkered bands along the top and bottom edges, red and white curb stripes on the sides and faint horizontal speed streaks.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Glossy red and yellow paint with white highlights, motion lines behind it.
- Middle row, decorative side objects: 1) a block of speed stripes, 2) a waving checkered flag, 3) a giant skewed yellow "GO!", 4) a vertical race start light with five red lamps.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: small checkered flags, long thin speed streaks, sparks.
- Bottom center, a celebration burst radiating from an empty central circle: Red and yellow radial speed bursts with checkered fragments flying out.
- Bottom right, a rejection effect over an empty card plus a "NO" label: A puff of tire smoke and a black flag; the "NO" on a black skewed plate with white text.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Thick white border with a red outline and a yellow outer ring, near-black interior, checkered corner pieces.
- Five game title labels with the same base shape: "GO!", "GRID", "RADIO", "FINISH" and one empty. Red plates skewed -12° with heavy white italic text and a yellow offset shadow.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Black card with white border and red outline, name in yellow heavy italic; photo ring like a tire; separator a checkered plus sign; adornment a golden laurel.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Black pill with white border, red outline and a checkered end cap; trail red and yellow skid marks.
- End-of-round title "FINISH" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title is a checkered finish banner; the cell a black card with white border and red outline.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": White balloon with a thick yellow border, skewed -6°, red offset shadow, like a radio callout.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming white with black text and red outline; outgoing red with white italic text; badge a yellow skewed plate; panel like a pit-radio display.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two racing helmets crossing a checkered finish line side by side; chip black with white border and red outline.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Thin checkered band; plate like a race sponsor plate, white with red outline.

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating red #E31C23 and yellow #FFD100, each with a generic avatar and a short name like "Mesa 3". Rim like a racing tire with a yellow ring (no brand text); hub like a chrome hubcap; pointer red with a checkered tip.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Black cards with white border; the winner gets a yellow ring and a checkered flag badge; bar like a red-to-yellow rev gauge; countdown ring like a stopwatch.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover inside a speedometer dial; label on a red skewed plate; equalizer like tachometer LED segments.

Rules for all five images: no third-party characters, logos or brands; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all five images; no extra text except the one requested.
```

### T4 Cielo (reemplaza a Doraemon)

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Mascot (original, identical in every image): "Nubi", a small smiling white cloud with rosy cheeks, a golden bell on a red ribbon and a tiny yellow propeller on top (not a cat, not a robot).

Generate 5 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: Bright sky gradient from #7EC8E8 at the top to white at the bottom, big puffy white clouds along the edges and the bottom, a few small twinkling stars.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Puffy, soft, with a golden yellow shadow underneath and rosy cheeks.
- Middle row, decorative side objects: 1) a puffy cloud, 2) a small yellow propeller, 3) a group of twinkling stars, 4) a small red kite.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: little clouds, five-point stars, small golden bells.
- Bottom center, a celebration burst radiating from an empty central circle: A golden starburst with little stars and cloud puffs flying out.
- Bottom right, a rejection effect over an empty card plus a "NO" label: A small gray rain cloud dripping; the "NO" inside a gray cloud pill.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Thick rounded blue #2BA4D9 border with 48 px radius, white interior, golden yellow shadow underneath, small cloud puffs on the corners.
- Five game title labels with the same base shape: "ポン", "どちら", "もしもし", "大好き" and one empty. Golden yellow pills with a red bottom edge like a bell, with navy rounded text.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: White card with 36 px radius, blue border and yellow shadow; puffy blue photo ring; separator a pink heart-shaped cloud; adornment a crown made of golden bells.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: White pill with blue border and yellow shadow; trail a line of cloud puffs.
- End-of-round title "¡Listo!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title is a cloud banner with golden bells; the cell a white puffy card with blue border.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Round puffy cloud-like balloon with blue border and yellow shadow, navy text.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming a white cloud bubble; outgoing blue with white text; badge a yellow star; panel a soft sky column with clouds.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two little clouds merging into a heart-shaped cloud with stars; chip white with blue border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Band of small clouds; plate a white pill with blue border and yellow shadow.

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating blue #2BA4D9 and white, each with a generic avatar and a short name like "Mesa 3". Rim as a puffy blue ring with white cloud puffs and small yellow lights; hub a golden bell; pointer a rounded red drop.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. White puffy cards with blue border; the winner gets a yellow glow and a star badge; bar a blue fill with a cloud at the tip; countdown ring a smiling sun.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover inside a puffy cloud frame with a small propeller on top; label a yellow bell pill; equalizer as bouncing little clouds.

Rules for all five images: no third-party characters, logos or brands; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all five images; no extra text except the one requested.
```

---

## Índice

| Código | Elemento | Formato |
|---|---|---|
| P01 | Fondo de escena | 16:9 — pantalla completa |
| P01b | Velo sobre portada, logo o foto | 16:9 — pantalla completa |
| P02 | Ambiente animado | 1:1 — textura repetible |
| P03 | Mascota (4 poses) | 16:9 — hoja de personaje |
| P03b | Objetos decorativos de los costados | 16:9 — hoja |
| P04 | Impacto | 16:9 — pantalla completa |
| P05 | Marco del juego | 16:9 — pieza 9-slice |
| P06 | Títulos de juego (sellos) | 16:9 — hoja |
| P08 | Ruleta | 16:9 — hoja |
| P09 | Participante elegido y pareja | 16:9 — hoja |
| P10 | Tira de parejas formadas | 16:9 — hoja |
| P11 | Rechazo | 16:9 — hoja |
| P12 | Confeti | 16:9 — hoja |
| P13 | Cierre de la ronda | 16:9 — hoja |
| P14 | Votación de la próxima canción | 16:9 — hoja |
| P15 | Globo de dedicatoria | 16:9 — hoja |
| P16 | Chat en pantalla | 16:9 — hoja |
| P17 | Match | 16:9 — hoja |
| P19 | Franja superior y placa del logo | 16:9 — hoja |
| P20 | Pantalla "Ahora suena" (piezas) | 16:9 — hoja |

---

## Anclas de estilo (opcional, una por plantilla)

### T1. Nocturna

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a dark bar. Guests play games from their phones: a prize wheel, song voting, table-to-table chat and matches. I will ask you for several images; ALL of them must follow this exact style, which we call "NOCTURNA".

Style NOCTURNA: elegant late-night bar with neon lights. Deep violet-black background (#1A1430, panels #241C3D and #141028). Neon tubes in hot pink (#FF3D8B) as the main accent and electric cyan (#22E0E6) as the secondary color; small touches of lime (#9BE85A) and amber (#FFB648). Text is near-white (#F5F6FA) in a bold, clean geometric sans-serif, uppercase with wide letter spacing for titles. Thin glowing outlines, soft bloom, subtle reflections, no clutter.

Game title labels in this style read: "RULETA", "VOTACIÓN", "MENSAJE", "MATCH".
Confetti shapes: thin neon strips, glowing dots, four-point sparkles.
Decorative objects: a cyan light flare, a pink halo glow.

Mascot (original character, must stay identical in every image): "Voltio", a small friendly robot built from bent neon tubes, with a vinyl-record face, two dot eyes and a smile drawn in cyan light, pink tube arms. Cute, simple silhouette readable from far away.

Rules for every image: no third-party characters, logos or brands; no photos of real people (participants are generic illustrated avatars in circles); high contrast readable from 10 meters; no tiny details; keep the center of the screen calm for content.

First image: a 16:9 style board showing the palette swatches, the title font sample with the four labels, Voltio front view, the confetti shapes and the two decorative objects, on the NOCTURNA background.
```

### T2. Manga

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar. Guests play games from their phones: a prize wheel, song voting, table-to-table chat and matches. I will ask you for several images; ALL of them must follow this exact style, which we call "MANGA".

Style MANGA: a printed Japanese manga page. Aged cream paper (#E8D4A8, light panels #FFF6DC, toasted panels #C4A86A), thick black ink lines (#111111), hanko-stamp red (#C41E3A) as the only accent. Screentone dot patterns, speed lines, hard offset shadows in red, panel borders like comic frames. Bold rounded Japanese-style display lettering, heavy weight.

Game title labels in this style are red hanko stamps reading: "ルーレット" (wheel), "投票" (vote), "伝言" (message), "ドン" (match).
Confetti shapes: sakura petals, tiny round red stamps, ink splats.
Decorative objects: a giant "ドン" sound effect, screentone dot texture.

Mascot (original character, must stay identical in every image): "Sumi", a chubby round ink-drop character with big expressive manga eyes, a red hachimaki headband and a small brush tail. Drawn with thick ink lines and screentone shading.

Rules for every image: no third-party characters, logos or brands; no copying any existing manga or anime; no photos of real people (participants are generic illustrated avatars in circles); high contrast readable from 10 meters; no tiny details; keep the center of the screen calm for content.

First image: a 16:9 style board showing the palette swatches, the lettering sample with the four stamps, Sumi front view, the confetti shapes and the two decorative objects, on the MANGA paper background.
```

### T3. Meteoro

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar. Guests play games from their phones: a prize wheel, song voting, table-to-table chat and matches. I will ask you for several images; ALL of them must follow this exact style, which we call "METEORO".

Style METEORO: retro 1960s motor racing poster. Dark asphalt background (#1A1A1A), racing red (#E31C23) and signal yellow (#FFD100) as main colors, white (#FFFFFF) outlines, checkered flag patterns, speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy uppercase display font, italic.

Game title labels in this style are skewed red plates with white text: "GO!" (wheel), "GRID" (vote), "RADIO" (message), "FINISH" (match).
Confetti shapes: small checkered flags, speed streaks, sparks.
Decorative objects: speed stripes, a checkered flag, a giant "GO!".

Mascot (original character, must stay identical in every image): "Turbo", a cheerful round racing helmet with goggles, a white visor stripe, a red and yellow paint job, a checkered scarf flying behind and tiny sneakers. No cars or characters from any existing anime or brand.

Rules for every image: no third-party characters, logos, car designs or brands; no photos of real people (participants are generic illustrated avatars in circles); high contrast readable from 10 meters; no tiny details; keep the center of the screen calm for content.

First image: a 16:9 style board showing the palette swatches, the font sample with the four plates, Turbo front view, the confetti shapes and the three decorative objects, on the METEORO asphalt background.
```

### T4. Cielo (reemplaza a Doraemon)

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar. Guests play games from their phones: a prize wheel, song voting, table-to-table chat and matches. I will ask you for several images; ALL of them must follow this exact style, which we call "CIELO".

Style CIELO: a sunny children's-cartoon sky. Sky blue background (#7EC8E8), bright blue (#2BA4D9) and white panels, navy text (#1A4A73), red (#E31C23) accents and golden yellow (#F5C518) soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font.

Game title labels in this style are yellow pills with a red bottom edge, like a golden bell, reading: "ポン" (wheel), "どちら" (vote), "もしもし" (message), "大好き" (match).
Confetti shapes: little clouds, five-point stars, small golden bells.
Decorative objects: floating clouds, a spinning propeller, twinkling stars.

Mascot (original character, must stay identical in every image): "Nubi", a small smiling white cloud with rosy cheeks, a golden bell on a red ribbon and a tiny yellow propeller on top. It must NOT look like a cat, a robot or any existing cartoon character.

Rules for every image: no third-party characters, logos or brands (specifically nothing resembling Doraemon); no photos of real people (participants are generic illustrated avatars in circles); high contrast readable from 10 meters; no tiny details; keep the center of the screen calm for content.

First image: a 16:9 style board showing the palette swatches, the font sample with the four labels, Nubi front view, the confetti shapes and the three decorative objects, on the CIELO sky background.
```

---

## Elementos, un prompt por plantilla

### P01. Fondo de escena

Fondo que está detrás de cualquier juego. Ocupa toda la pantalla (1920×1080). El 78 % central tiene que quedar tranquilo porque encima va la tarjeta del juego; la decoración fuerte va en bordes y esquinas. Sin texto, sin interfaz, sin mascota.

**T1 Nocturna**

```
Create a full-screen 16:9 background for a game scene on a bar TV (3840x2160 look). Background only: no text, no UI, no characters. The central area (78% of width and height) must stay calm and low-detail because game cards sit on top of it; put the richest decoration near the edges and corners.

How it must look in this style: Deep violet night with a soft radial glow in the center fading to #1A1430 at the edges; neon tube lines in pink and cyan and blurred bokeh lights along the borders; a faint reflective floor at the bottom.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create a full-screen 16:9 background for a game scene on a bar TV (3840x2160 look). Background only: no text, no UI, no characters. The central area (78% of width and height) must stay calm and low-detail because game cards sit on top of it; put the richest decoration near the edges and corners.

How it must look in this style: Aged cream manga paper with fine diagonal hatching, screentone dot gradients in the corners, very faint radial speed lines toward the edges, a soft red ink wash in one corner and rough panel borders around the frame.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create a full-screen 16:9 background for a game scene on a bar TV (3840x2160 look). Background only: no text, no UI, no characters. The central area (78% of width and height) must stay calm and low-detail because game cards sit on top of it; put the richest decoration near the edges and corners.

How it must look in this style: Dark asphalt race track, checkered bands along the top and bottom edges, red and white curb stripes on the sides and faint horizontal speed streaks.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create a full-screen 16:9 background for a game scene on a bar TV (3840x2160 look). Background only: no text, no UI, no characters. The central area (78% of width and height) must stay calm and low-detail because game cards sit on top of it; put the richest decoration near the edges and corners.

How it must look in this style: Bright sky gradient from #7EC8E8 at the top to white at the bottom, big puffy white clouds along the edges and the bottom, a few small twinkling stars.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P01b. Velo sobre portada, logo o foto

Cuando el local elige como fondo la portada de la canción, su logo o una foto, se pone este velo encima para que el contenido se lea. Es un degradé: fuerte en bordes y abajo, casi transparente en el centro.

**T1 Nocturna**

```
Create a 16:9 overlay that will be placed over a blurred photo so text on top stays readable. Only a gradient vignette: strong at the edges and at the bottom, almost clear in the center. No objects, no text. Show it over a neutral mid-gray so the gradient is visible.

How it must look in this style: Violet-black edges #1A1430 with a subtle pink neon tint in the bottom corners.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create a 16:9 overlay that will be placed over a blurred photo so text on top stays readable. Only a gradient vignette: strong at the edges and at the bottom, almost clear in the center. No objects, no text. Show it over a neutral mid-gray so the gradient is visible.

How it must look in this style: Cream paper tint at the edges with a screentone dot fade and a thin ink border.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create a 16:9 overlay that will be placed over a blurred photo so text on top stays readable. Only a gradient vignette: strong at the edges and at the bottom, almost clear in the center. No objects, no text. Show it over a neutral mid-gray so the gradient is visible.

How it must look in this style: Black edges with thin red and yellow diagonal stripes in the bottom corners.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create a 16:9 overlay that will be placed over a blurred photo so text on top stays readable. Only a gradient vignette: strong at the edges and at the bottom, almost clear in the center. No objects, no text. Show it over a neutral mid-gray so the gradient is visible.

How it must look in this style: White-blue haze at the edges with soft cloud shapes at the bottom.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P02. Ambiente animado

Capa de movimiento suave encima del fondo; después se anima deslizándola o haciéndola latir, al 35 % de opacidad como máximo. Se pide como textura que se pueda repetir en mosaico sin que se note la unión.

**T1 Nocturna**

```
Create a seamless tileable texture (1:1, edges must match when repeated) to be used as a slow ambient motion layer over the game background at 35% opacity. Shapes only.

How it must look in this style: Soft pink and cyan light blobs and haze, like neon reflections on glass.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create a seamless tileable texture (1:1, edges must match when repeated) to be used as a slow ambient motion layer over the game background at 35% opacity. Shapes only.

How it must look in this style: Black ink concentration speed lines and a few screentone dots.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create a seamless tileable texture (1:1, edges must match when repeated) to be used as a slow ambient motion layer over the game background at 35% opacity. Shapes only.

How it must look in this style: Yellow and white horizontal speed stripes of different lengths.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create a seamless tileable texture (1:1, edges must match when repeated) to be used as a slow ambient motion layer over the game background at 35% opacity. Shapes only.

How it must look in this style: Small soft white clouds and tiny stars, evenly scattered.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P03. Mascota (4 poses)

Personaje que anima al costado de la tarjeta del juego, siempre en los bordes y mirando hacia el centro. Cuatro poses: reposo (en loop), festeja (ganador o pareja), decepción (rechazo) y señala (durante la ruleta o la votación).

**T1 Nocturna**

```
Create a character sheet of the mascot "Voltio", a small friendly robot built from bent neon tubes, with a vinyl-record face, two dot eyes and a smile drawn in cyan light, and pink tube arms. Show it four times at the same size in a row, each with a small label underneath: "reposo" (idle, relaxed, slight smile), "festeja" (jumping, arms up, very happy), "decepcion" (slumped, sad but cute, not dramatic), "señala" (pointing to the right with one arm, excited). Same design, colors and proportions in all four. Thick clean outlines, simple silhouette readable from far away. 16:9.

How it must look in this style: The mascot glows softly like real neon, pink and cyan tubes.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create a character sheet of the mascot "Sumi", a chubby round ink-drop character with big expressive manga eyes, a red hachimaki headband and a small brush-tip tail, drawn with thick ink lines and screentone shading. Show it four times at the same size in a row, each with a small label underneath: "reposo" (idle, relaxed, slight smile), "festeja" (jumping, arms up, very happy), "decepcion" (slumped, sad but cute, not dramatic), "señala" (pointing to the right with one arm, excited). Same design, colors and proportions in all four. Thick clean outlines, simple silhouette readable from far away. 16:9.

How it must look in this style: Drawn in black ink with screentone shading and red accents, like a manga sticker.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create a character sheet of the mascot "Turbo", a cheerful round racing helmet with goggles, a white visor stripe, a red and yellow paint job, a checkered scarf flying behind it and tiny sneakers. Show it four times at the same size in a row, each with a small label underneath: "reposo" (idle, relaxed, slight smile), "festeja" (jumping, arms up, very happy), "decepcion" (slumped, sad but cute, not dramatic), "señala" (pointing to the right with one arm, excited). Same design, colors and proportions in all four. Thick clean outlines, simple silhouette readable from far away. 16:9.

How it must look in this style: Glossy red and yellow paint with white highlights, motion lines behind it.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create a character sheet of the mascot "Nubi", a small smiling white cloud with rosy cheeks, a golden bell on a red ribbon and a tiny yellow propeller on top (not a cat, not a robot). Show it four times at the same size in a row, each with a small label underneath: "reposo" (idle, relaxed, slight smile), "festeja" (jumping, arms up, very happy), "decepcion" (slumped, sad but cute, not dramatic), "señala" (pointing to the right with one arm, excited). Same design, colors and proportions in all four. Thick clean outlines, simple silhouette readable from far away. 16:9.

How it must look in this style: Puffy, soft, with a golden yellow shadow underneath and rosy cheeks.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P03b. Objetos decorativos de los costados

Objetos que se mueven a los costados de la tarjeta del juego. Van en los bordes, nunca encima del contenido.

**T1 Nocturna**

```
Create a sheet of decorative side objects that will float or animate at the edges of a bar TV screen, next to the game card. Each object separated. 16:9.

How it must look in this style: 1) a cyan lens flare, 2) a pink glowing halo ring, 3) a neon music note, 4) a small neon disco ball.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create a sheet of decorative side objects that will float or animate at the edges of a bar TV screen, next to the game card. Each object separated. 16:9.

How it must look in this style: 1) a giant "ドン" sound-effect lettering in black ink with red outline, 2) a patch of screentone dots, 3) an ink splash, 4) a small red paper lantern.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create a sheet of decorative side objects that will float or animate at the edges of a bar TV screen, next to the game card. Each object separated. 16:9.

How it must look in this style: 1) a block of speed stripes, 2) a waving checkered flag, 3) a giant skewed yellow "GO!", 4) a vertical race start light with five red lamps.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create a sheet of decorative side objects that will float or animate at the edges of a bar TV screen, next to the game card. Each object separated. 16:9.

How it must look in this style: 1) a puffy cloud, 2) a small yellow propeller, 3) a group of twinkling stars, 4) a small red kite.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P04. Impacto

Golpe visual de medio segundo cuando hay ganador, pareja o match. Explota desde el centro hacia afuera; el círculo central queda vacío porque ahí está la foto del ganador.

**T1 Nocturna**

```
Create a full-screen 16:9 celebration burst as a flat graphic: an explosion radiating from the center outward. Leave an empty circle in the center (about 30% of the height) because the winner's photo goes there.

How it must look in this style: Pink and cyan neon light rays with sparkles and a bloom ring.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create a full-screen 16:9 celebration burst as a flat graphic: an explosion radiating from the center outward. Leave an empty circle in the center (about 30% of the height) because the winner's photo goes there.

How it must look in this style: Red concentric shock rings with black ink concentration lines and small "ドン" marks.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create a full-screen 16:9 celebration burst as a flat graphic: an explosion radiating from the center outward. Leave an empty circle in the center (about 30% of the height) because the winner's photo goes there.

How it must look in this style: Red and yellow radial speed bursts with checkered fragments flying out.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create a full-screen 16:9 celebration burst as a flat graphic: an explosion radiating from the center outward. Leave an empty circle in the center (about 30% of the height) because the winner's photo goes there.

How it must look in this style: A golden starburst with little stars and cloud puffs flying out.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P05. Marco del juego

Tarjeta grande que contiene la ruleta, la votación o los mensajes. Va centrada y mide hasta 1500×840 px. El interior es de un solo color y la decoración va sólo en bordes y esquinas, para poder estirarla (esquinas fijas, lados repetibles).

**T1 Nocturna**

```
Create the main game card frame of a bar TV game screen: a wide rectangle that will contain a prize wheel, vote options or chat. Interior must be a single flat fill with no decoration; all decoration only on the border and the four corners, so it can be stretched as a 9-slice (fixed corners, repeatable edges). Front view, 16:9.

How it must look in this style: Thin pink neon tube border with soft glow, 22 px rounded corners, dark translucent violet interior #141028, small cyan accents on the corners.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create the main game card frame of a bar TV game screen: a wide rectangle that will contain a prize wheel, vote options or chat. Interior must be a single flat fill with no decoration; all decoration only on the border and the four corners, so it can be stretched as a 9-slice (fixed corners, repeatable edges). Front view, 16:9.

How it must look in this style: Thick black ink comic-panel border, cream interior #FFF6DC, hard red offset shadow to the bottom-right, screentone dots in the corners.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create the main game card frame of a bar TV game screen: a wide rectangle that will contain a prize wheel, vote options or chat. Interior must be a single flat fill with no decoration; all decoration only on the border and the four corners, so it can be stretched as a 9-slice (fixed corners, repeatable edges). Front view, 16:9.

How it must look in this style: Thick white border with a red outline and a yellow outer ring, near-black interior, checkered corner pieces.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create the main game card frame of a bar TV game screen: a wide rectangle that will contain a prize wheel, vote options or chat. Interior must be a single flat fill with no decoration; all decoration only on the border and the four corners, so it can be stretched as a 9-slice (fixed corners, repeatable edges). Front view, 16:9.

How it must look in this style: Thick rounded blue #2BA4D9 border with 48 px radius, white interior, golden yellow shadow underneath, small cloud puffs on the corners.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P06. Títulos de juego (sellos)

Etiqueta que va arriba de la tarjeta y dice qué juego está corriendo; mide unos 64 px de alto. Son cuatro con la misma forma y distinto texto, más una base vacía.

**T1 Nocturna**

```
Create the game title labels shown above the game card on a bar TV, about 64 px tall at 1080p. Five pieces with the same base shape: four with the texts "RULETA", "VOTACIÓN", "MENSAJE", "MATCH" and one empty base without text. 16:9.

How it must look in this style: Glowing pink neon uppercase lettering with wide spacing inside a thin neon-tube capsule outline.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create the game title labels shown above the game card on a bar TV, about 64 px tall at 1080p. Five pieces with the same base shape: four with the texts "ルーレット", "投票", "伝言", "ドン" and one empty base without text. 16:9.

How it must look in this style: Red round hanko stamps rotated -8°, with ink texture and a small black offset shadow.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create the game title labels shown above the game card on a bar TV, about 64 px tall at 1080p. Five pieces with the same base shape: four with the texts "GO!", "GRID", "RADIO", "FINISH" and one empty base without text. 16:9.

How it must look in this style: Red plates skewed -12° with heavy white italic text and a yellow offset shadow.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create the game title labels shown above the game card on a bar TV, about 64 px tall at 1080p. Five pieces with the same base shape: four with the texts "ポン", "どちら", "もしもし", "大好き" and one empty base without text. 16:9.

How it must look in this style: Golden yellow pills with a red bottom edge like a bell, with navy rounded text.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P08. Ruleta

La rueda que sortea una mesa o una persona. Mide unos 626 px de diámetro (hasta 842 px si hay varias). La cantidad de gajos es variable, por eso se piden las partes por separado y una rueda de ejemplo.

**T1 Nocturna**

```
Create the parts of a prize wheel for a bar TV game, front view, perfectly circular: 1) the outer rim ring with an empty center, 2) the center hub, 3) the pointer that sits at the top and points down into the wheel, 4) a small ring that frames a participant photo inside each segment, 5) a full assembled example wheel with 8 segments alternating #241C3D and #141028 with thin pink and cyan dividers, each segment with a generic illustrated avatar circle and a short name like "Mesa 3". 16:9.

How it must look in this style: Rim of pink neon with small cyan light bulbs; hub shaped like a glowing vinyl record; pointer a pink glowing triangle.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create the parts of a prize wheel for a bar TV game, front view, perfectly circular: 1) the outer rim ring with an empty center, 2) the center hub, 3) the pointer that sits at the top and points down into the wheel, 4) a small ring that frames a participant photo inside each segment, 5) a full assembled example wheel with 8 segments alternating #FFF6DC and #C4A86A with screentone texture, each segment with a generic illustrated avatar circle and a short name like "Mesa 3". 16:9.

How it must look in this style: Rim as a thick black ink circle with red hanko marks; hub a red hanko seal; pointer a black brush-stroke arrow with a red tip.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create the parts of a prize wheel for a bar TV game, front view, perfectly circular: 1) the outer rim ring with an empty center, 2) the center hub, 3) the pointer that sits at the top and points down into the wheel, 4) a small ring that frames a participant photo inside each segment, 5) a full assembled example wheel with 8 segments alternating red #E31C23 and yellow #FFD100, each segment with a generic illustrated avatar circle and a short name like "Mesa 3". 16:9.

How it must look in this style: Rim like a racing tire with a yellow ring (no brand text); hub like a chrome hubcap; pointer red with a checkered tip.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create the parts of a prize wheel for a bar TV game, front view, perfectly circular: 1) the outer rim ring with an empty center, 2) the center hub, 3) the pointer that sits at the top and points down into the wheel, 4) a small ring that frames a participant photo inside each segment, 5) a full assembled example wheel with 8 segments alternating blue #2BA4D9 and white, each segment with a generic illustrated avatar circle and a short name like "Mesa 3". 16:9.

How it must look in this style: Rim as a puffy blue ring with white cloud puffs and small yellow lights; hub a golden bell; pointer a rounded red drop.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P09. Participante elegido y pareja

Cuando la ruleta para, la persona elegida (o la pareja formada) aparece grande en el centro: foto redonda de unos 150 px y nombre debajo. En pareja van dos fotos con un separador entre ellas.

**T1 Nocturna**

```
Create the pieces that show the chosen participant in the center of a bar TV after a prize wheel stops: 1) a participant card (stretchable 9-slice) with a round photo ring of 160 px on top and a name bar below, shown with a generic illustrated avatar and the name "Lucía"; 2) the round photo ring alone; 3) a pair separator icon that goes between two photos; 4) a small adornment for the chosen person (crown or similar). 16:9.

How it must look in this style: Dark violet card with 18 px radius and pink neon glow; pink neon photo ring; separator a neon heart; adornment a cyan neon star.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create the pieces that show the chosen participant in the center of a bar TV after a prize wheel stops: 1) a participant card (stretchable 9-slice) with a round photo ring of 160 px on top and a name bar below, shown with a generic illustrated avatar and the name "Lucía"; 2) the round photo ring alone; 3) a pair separator icon that goes between two photos; 4) a small adornment for the chosen person (crown or similar). 16:9.

How it must look in this style: Cream card with thick ink border and hard red shadow; ink photo ring with a red stamp ring; separator a red ink heart with action lines; adornment a small ink-drawn crown.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create the pieces that show the chosen participant in the center of a bar TV after a prize wheel stops: 1) a participant card (stretchable 9-slice) with a round photo ring of 160 px on top and a name bar below, shown with a generic illustrated avatar and the name "Lucía"; 2) the round photo ring alone; 3) a pair separator icon that goes between two photos; 4) a small adornment for the chosen person (crown or similar). 16:9.

How it must look in this style: Black card with white border and red outline, name in yellow heavy italic; photo ring like a tire; separator a checkered plus sign; adornment a golden laurel.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create the pieces that show the chosen participant in the center of a bar TV after a prize wheel stops: 1) a participant card (stretchable 9-slice) with a round photo ring of 160 px on top and a name bar below, shown with a generic illustrated avatar and the name "Lucía"; 2) the round photo ring alone; 3) a pair separator icon that goes between two photos; 4) a small adornment for the chosen person (crown or similar). 16:9.

How it must look in this style: White card with 36 px radius, blue border and yellow shadow; puffy blue photo ring; separator a pink heart-shaped cloud; adornment a crown made of golden bells.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P10. Tira de parejas formadas

Historial de parejas de la ronda, en fila abajo de la pantalla. Cada una es una píldora de unos 44 px de alto con dos fotitos y los nombres. También se pide la estela que deja la pareja al volar del centro a la tira.

**T1 Nocturna**

```
Create: 1) a small horizontal pill (stretchable 9-slice, about 44 px tall at 1080p) for a strip of formed pairs at the bottom of a bar TV screen, with two tiny round avatar slots side by side and space for short names; show it empty and with the names "Lucía + Martín"; 2) a motion trail graphic left behind when a pair flies from the center of the screen to the strip. 16:9.

How it must look in this style: Dark pill with a thin pink neon outline; trail a pink light streak.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create: 1) a small horizontal pill (stretchable 9-slice, about 44 px tall at 1080p) for a strip of formed pairs at the bottom of a bar TV screen, with two tiny round avatar slots side by side and space for short names; show it empty and with the names "Lucía + Martín"; 2) a motion trail graphic left behind when a pair flies from the center of the screen to the strip. 16:9.

How it must look in this style: Cream pill with black ink border and red shadow; trail black ink brush speed lines.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create: 1) a small horizontal pill (stretchable 9-slice, about 44 px tall at 1080p) for a strip of formed pairs at the bottom of a bar TV screen, with two tiny round avatar slots side by side and space for short names; show it empty and with the names "Lucía + Martín"; 2) a motion trail graphic left behind when a pair flies from the center of the screen to the strip. 16:9.

How it must look in this style: Black pill with white border, red outline and a checkered end cap; trail red and yellow skid marks.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create: 1) a small horizontal pill (stretchable 9-slice, about 44 px tall at 1080p) for a strip of formed pairs at the bottom of a bar TV screen, with two tiny round avatar slots side by side and space for short names; show it empty and with the names "Lucía + Martín"; 2) a motion trail graphic left behind when a pair flies from the center of the screen to the strip. 16:9.

How it must look in this style: White pill with blue border and yellow shadow; trail a line of cloud puffs.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P11. Rechazo

Cuando la persona elegida rechaza, su tarjeta se cae. Se pide el efecto que va encima de la tarjeta y una etiqueta "NO". Tiene que ser simpático, no triste.

**T1 Nocturna**

```
Create: 1) a rejection effect drawn over a participant card (flat graphic, shown over an empty card silhouette), used when a chosen participant declines; 2) a "NO" label. Playful and funny, not sad or aggressive. 16:9.

How it must look in this style: A neon tube flickering off and cracking, dim pink; the "NO" in broken flickering neon.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create: 1) a rejection effect drawn over a participant card (flat graphic, shown over an empty card silhouette), used when a chosen participant declines; 2) a "NO" label. Playful and funny, not sad or aggressive. 16:9.

How it must look in this style: A black ink splat with a big red ×; the "NO" as a red hanko stamp.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create: 1) a rejection effect drawn over a participant card (flat graphic, shown over an empty card silhouette), used when a chosen participant declines; 2) a "NO" label. Playful and funny, not sad or aggressive. 16:9.

How it must look in this style: A puff of tire smoke and a black flag; the "NO" on a black skewed plate with white text.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create: 1) a rejection effect drawn over a participant card (flat graphic, shown over an empty card silhouette), used when a chosen participant declines; 2) a "NO" label. Playful and funny, not sad or aggressive. 16:9.

How it must look in this style: A small gray rain cloud dripping; the "NO" inside a gray cloud pill.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P12. Confeti

Partículas que caen cuando hay festejo. Cada forma, de un solo color, para después teñirlas con la paleta.

**T1 Nocturna**

```
Create a sheet of confetti pieces for a celebration on a bar TV: three shapes, five variants of each (different angles), each piece large and a single flat color from the palette, all separated. 16:9.

How it must look in this style: Shapes: thin neon strips, glowing dots, four-point sparkles.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create a sheet of confetti pieces for a celebration on a bar TV: three shapes, five variants of each (different angles), each piece large and a single flat color from the palette, all separated. 16:9.

How it must look in this style: Shapes: sakura petals, tiny round red stamps, ink splats.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create a sheet of confetti pieces for a celebration on a bar TV: three shapes, five variants of each (different angles), each piece large and a single flat color from the palette, all separated. 16:9.

How it must look in this style: Shapes: small checkered flags, long thin speed streaks, sparks.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create a sheet of confetti pieces for a celebration on a bar TV: three shapes, five variants of each (different angles), each piece large and a single flat color from the palette, all separated. 16:9.

How it must look in this style: Shapes: little clouds, five-point stars, small golden bells.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P13. Cierre de la ronda

Al terminar una ronda de parejas se muestra un resumen en grilla (hasta 4×2). Se piden el título y una celda.

**T1 Nocturna**

```
Create: 1) a title banner for the end-of-round summary with the text "PAREJAS DE LA NOCHE"; 2) one small grid cell card (stretchable 9-slice) with two round avatar slots side by side and two short names below ("Ana", "Juan"). 16:9.

How it must look in this style: The title is a neon sign; the cell is a dark card with thin pink neon outline.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create: 1) a title banner for the end-of-round summary with the text "完" with the subtitle "Parejas de la noche"; 2) one small grid cell card (stretchable 9-slice) with two round avatar slots side by side and two short names below ("Ana", "Juan"). 16:9.

How it must look in this style: The title is a brush-lettered ink banner on a paper scroll; the cell an ink-bordered cream panel.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create: 1) a title banner for the end-of-round summary with the text "FINISH" with the subtitle "Parejas de la noche"; 2) one small grid cell card (stretchable 9-slice) with two round avatar slots side by side and two short names below ("Ana", "Juan"). 16:9.

How it must look in this style: The title is a checkered finish banner; the cell a black card with white border and red outline.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create: 1) a title banner for the end-of-round summary with the text "¡Listo!" with the subtitle "Parejas de la noche"; 2) one small grid cell card (stretchable 9-slice) with two round avatar slots side by side and two short names below ("Ana", "Juan"). 16:9.

How it must look in this style: The title is a cloud banner with golden bells; the cell a white puffy card with blue border.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P14. Votación de la próxima canción

El público vota desde el teléfono qué canción va después. Hay de 2 a 4 opciones, cada una con portada cuadrada (unos 173 px) y título. Estados: votando (con barra de votos) y ganadora (más grande, borde fuerte, insignia). Lleva cuenta regresiva.

**T1 Nocturna**

```
Create the song-voting pieces for a bar TV: 1) an option card with a square album-cover slot and a title bar below, normal state, with an invented album cover (no real artists) and the fictional title "Noche de Verano"; 2) the same card in winner state: bigger, stronger border and glow; 3) a winner badge; 4) a horizontal vote bar, shown empty and 60% filled; 5) a countdown ring. 16:9.

How it must look in this style: Dark cards with thin cyan neon outline; the winner gets a thicker pink neon border and bloom; badge a neon crown; bar filled with cyan light; countdown ring in pink neon.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create the song-voting pieces for a bar TV: 1) an option card with a square album-cover slot and a title bar below, normal state, with an invented album cover (no real artists) and the fictional title "Noche de Verano"; 2) the same card in winner state: bigger, stronger border and glow; 3) a winner badge; 4) a horizontal vote bar, shown empty and 60% filled; 5) a countdown ring. 16:9.

How it must look in this style: Cream cards with ink borders; the winner gets a red border, red hard shadow and a red "勝" stamp badge; bar filled with red screentone; countdown ring a brush-stroke circle.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create the song-voting pieces for a bar TV: 1) an option card with a square album-cover slot and a title bar below, normal state, with an invented album cover (no real artists) and the fictional title "Noche de Verano"; 2) the same card in winner state: bigger, stronger border and glow; 3) a winner badge; 4) a horizontal vote bar, shown empty and 60% filled; 5) a countdown ring. 16:9.

How it must look in this style: Black cards with white border; the winner gets a yellow ring and a checkered flag badge; bar like a red-to-yellow rev gauge; countdown ring like a stopwatch.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create the song-voting pieces for a bar TV: 1) an option card with a square album-cover slot and a title bar below, normal state, with an invented album cover (no real artists) and the fictional title "Noche de Verano"; 2) the same card in winner state: bigger, stronger border and glow; 3) a winner badge; 4) a horizontal vote bar, shown empty and 60% filled; 5) a countdown ring. 16:9.

How it must look in this style: White puffy cards with blue border; the winner gets a yellow glow and a star badge; bar a blue fill with a cloud at the tip; countdown ring a smiling sun.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P15. Globo de dedicatoria

Globo de texto para una dedicatoria o un mensaje destacado dentro de la tarjeta, de 1 a 3 líneas y hasta 920 px de ancho. El cuerpo se estira y la colita va aparte para ponerla a la izquierda o a la derecha.

**T1 Nocturna**

```
Create a speech balloon for a dedication message on a bar TV (1 to 3 lines of text, up to 920 px wide): 1) the empty balloon body as a stretchable 9-slice, 2) its tail as a separate piece, shown on the left and on the right, 3) one example with the text "Para Caro, ¡feliz cumple!". 16:9.

How it must look in this style: Translucent cyan glass balloon with a cyan neon edge glow and near-white text.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create a speech balloon for a dedication message on a bar TV (1 to 3 lines of text, up to 920 px wide): 1) the empty balloon body as a stretchable 9-slice, 2) its tail as a separate piece, shown on the left and on the right, 3) one example with the text "Para Caro, ¡feliz cumple!". 16:9.

How it must look in this style: Classic manga fukidashi: white, 3 px black ink border, hard black offset shadow, sharp tail.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create a speech balloon for a dedication message on a bar TV (1 to 3 lines of text, up to 920 px wide): 1) the empty balloon body as a stretchable 9-slice, 2) its tail as a separate piece, shown on the left and on the right, 3) one example with the text "Para Caro, ¡feliz cumple!". 16:9.

How it must look in this style: White balloon with a thick yellow border, skewed -6°, red offset shadow, like a radio callout.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create a speech balloon for a dedication message on a bar TV (1 to 3 lines of text, up to 920 px wide): 1) the empty balloon body as a stretchable 9-slice, 2) its tail as a separate piece, shown on the left and on the right, 3) one example with the text "Para Caro, ¡feliz cumple!". 16:9.

How it must look in this style: Round puffy cloud-like balloon with blue border and yellow shadow, navy text.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P16. Chat en pantalla

Mensajes entre mesas, en un riel a la derecha de 350 a 420 px de ancho. Burbuja entrante (colita a la izquierda), saliente (colita a la derecha), anillo para el avatar (48 px), insignia "NUEVO" y, opcional, un fondo para el riel.

**T1 Nocturna**

```
Create the on-screen chat pieces for messages between bar tables, shown in a side panel 350 to 420 px wide on a bar TV: 1) incoming bubble (tail on the left), 2) outgoing bubble (tail on the right), both stretchable 9-slice; show one example of each with a 48 px round avatar, the author "Mesa 4", the text "¿Bailamos?" and the time "23:41"; 3) the round avatar ring alone; 4) a "NUEVO" badge; 5) an optional tall panel background for the chat column. 16:9.

How it must look in this style: Incoming bubble dark violet with a cyan edge; outgoing bubble a glowing pink gradient with white text; badge in pink neon; panel a dark glass column.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create the on-screen chat pieces for messages between bar tables, shown in a side panel 350 to 420 px wide on a bar TV: 1) incoming bubble (tail on the left), 2) outgoing bubble (tail on the right), both stretchable 9-slice; show one example of each with a 48 px round avatar, the author "Mesa 4", the text "¿Bailamos?" and the time "23:41"; 3) the round avatar ring alone; 4) a "NUEVO" badge; 5) an optional tall panel background for the chat column. 16:9.

How it must look in this style: Incoming a white fukidashi with ink border; outgoing cream with red hard shadow; badge a red stamp; panel a vertical manga page strip.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create the on-screen chat pieces for messages between bar tables, shown in a side panel 350 to 420 px wide on a bar TV: 1) incoming bubble (tail on the left), 2) outgoing bubble (tail on the right), both stretchable 9-slice; show one example of each with a 48 px round avatar, the author "Mesa 4", the text "¿Bailamos?" and the time "23:41"; 3) the round avatar ring alone; 4) a "NUEVO" badge; 5) an optional tall panel background for the chat column. 16:9.

How it must look in this style: Incoming white with black text and red outline; outgoing red with white italic text; badge a yellow skewed plate; panel like a pit-radio display.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create the on-screen chat pieces for messages between bar tables, shown in a side panel 350 to 420 px wide on a bar TV: 1) incoming bubble (tail on the left), 2) outgoing bubble (tail on the right), both stretchable 9-slice; show one example of each with a 48 px round avatar, the author "Mesa 4", the text "¿Bailamos?" and the time "23:41"; 3) the round avatar ring alone; 4) a "NUEVO" badge; 5) an optional tall panel background for the chat column. 16:9.

How it must look in this style: Incoming a white cloud bubble; outgoing blue with white text; badge a yellow star; panel a soft sky column with clouds.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P17. Match

Aviso de que dos personas o mesas se eligieron mutuamente. Un chip arriba de la pantalla (unos 64 px de alto) y una ilustración de las dos fotos juntándose.

**T1 Nocturna**

```
Create the match pieces for a bar TV (two people chose each other): 1) a top chip pill about 64 px tall with two round avatar slots joined by the match icon (stretchable 9-slice); 2) the match icon alone; 3) an illustration of two round generic avatars coming together with a celebration. 16:9.

How it must look in this style: A pink and a cyan neon tube meeting to form a heart; chip dark with neon outline.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create the match pieces for a bar TV (two people chose each other): 1) a top chip pill about 64 px tall with two round avatar slots joined by the match icon (stretchable 9-slice); 2) the match icon alone; 3) an illustration of two round generic avatars coming together with a celebration. 16:9.

How it must look in this style: A big "ドン" with the two avatars bumping together and a red ink heart; chip cream with ink border.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create the match pieces for a bar TV (two people chose each other): 1) a top chip pill about 64 px tall with two round avatar slots joined by the match icon (stretchable 9-slice); 2) the match icon alone; 3) an illustration of two round generic avatars coming together with a celebration. 16:9.

How it must look in this style: Two racing helmets crossing a checkered finish line side by side; chip black with white border and red outline.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create the match pieces for a bar TV (two people chose each other): 1) a top chip pill about 64 px tall with two round avatar slots joined by the match icon (stretchable 9-slice); 2) the match icon alone; 3) an illustration of two round generic avatars coming together with a celebration. 16:9.

How it must look in this style: Two little clouds merging into a heart-shaped cloud with stars; chip white with blue border.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P19. Franja superior y placa del logo

Franja de 86 px arriba de la pantalla, donde va el chip de match y el logo del bar (hasta 448×70 px). Tiene que ser sutil.

**T1 Nocturna**

```
Create: 1) a subtle top strip for a bar TV screen (1920x86 proportion) that will hold a match chip in the center; 2) a plate to hold a bar's logo (up to 448x70 proportion), shown empty and with the fictional logo text "BAR LUNA". 16:9 sheet.

How it must look in this style: Thin dark band with a pink neon line underneath; plate a neon-outlined rounded rectangle.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create: 1) a subtle top strip for a bar TV screen (1920x86 proportion) that will hold a match chip in the center; 2) a plate to hold a bar's logo (up to 448x70 proportion), shown empty and with the fictional logo text "BAR LUNA". 16:9 sheet.

How it must look in this style: Ink-bordered band with screentone; plate a cream paper tag with a red stamp in one corner.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create: 1) a subtle top strip for a bar TV screen (1920x86 proportion) that will hold a match chip in the center; 2) a plate to hold a bar's logo (up to 448x70 proportion), shown empty and with the fictional logo text "BAR LUNA". 16:9 sheet.

How it must look in this style: Thin checkered band; plate like a race sponsor plate, white with red outline.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create: 1) a subtle top strip for a bar TV screen (1920x86 proportion) that will hold a match chip in the center; 2) a plate to hold a bar's logo (up to 448x70 proportion), shown empty and with the fictional logo text "BAR LUNA". 16:9 sheet.

How it must look in this style: Band of small clouds; plate a white pill with blue border and yellow shadow.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

### P20. Pantalla "Ahora suena" (piezas)

Cuando no hay juego, la pantalla muestra la canción que suena. Se piden el marco de la portada (480×480), la etiqueta "AHORA SUENA", un globito para la dedicatoria y unas barras de ecualizador. La pantalla completa se pide en L2.

**T1 Nocturna**

```
Create the pieces of the "now playing" idle screen of a bar TV: 1) a frame for a square album cover (480x480), shown with an invented cover; 2) the label "AHORA SUENA"; 3) a small dedication balloon with the text "Dedicado a la Mesa 12"; 4) a set of equalizer bars. 16:9.

How it must look in this style: Cover framed as a glowing vinyl sleeve with a record peeking out; label a pink neon sign; equalizer bars in cyan neon.

NOCTURNA style: an elegant late-night bar lit by neon. Violet-black background #1A1430, panels #241C3D and #141028, hot pink neon #FF3D8B as the main accent, electric cyan #22E0E6 as the secondary accent, small touches of lime #9BE85A and amber #FFB648, near-white text #F5F6FA. Bold geometric sans-serif, uppercase with wide letter spacing. Thin glowing neon-tube outlines with soft bloom.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T2 Manga**

```
Create the pieces of the "now playing" idle screen of a bar TV: 1) a frame for a square album cover (480x480), shown with an invented cover; 2) the label "AHORA SUENA"; 3) a small dedication balloon with the text "Dedicado a la Mesa 12"; 4) a set of equalizer bars. 16:9.

How it must look in this style: Cover framed as a manga panel with ink border and speed lines; label a hand-lettered ink banner; equalizer bars as ink brush strokes.

MANGA style: a printed Japanese manga page. Aged cream paper #E8D4A8, light panels #FFF6DC, toasted panels #C4A86A, thick black ink lines #111111, hanko-stamp red #C41E3A as the only accent. Screentone dot patterns, speed lines, hard red offset shadows, comic panel borders. Heavy rounded Japanese-style display lettering. Do not copy any existing manga or anime.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T3 Meteoro**

```
Create the pieces of the "now playing" idle screen of a bar TV: 1) a frame for a square album cover (480x480), shown with an invented cover; 2) the label "AHORA SUENA"; 3) a small dedication balloon with the text "Dedicado a la Mesa 12"; 4) a set of equalizer bars. 16:9.

How it must look in this style: Cover inside a speedometer dial; label on a red skewed plate; equalizer like tachometer LED segments.

METEORO style: a retro 1960s motor-racing poster. Dark asphalt #1A1A1A, racing red #E31C23 and signal yellow #FFD100 as main colors, white #FFFFFF outlines. Checkered-flag patterns and speed stripes. Everything leans forward: italic, skewed shapes, thick white borders with red outlines and yellow rings. Condensed heavy italic uppercase font. No cars, logos or characters from any existing anime or brand.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

**T4 Cielo (reemplaza a Doraemon)**

```
Create the pieces of the "now playing" idle screen of a bar TV: 1) a frame for a square album cover (480x480), shown with an invented cover; 2) the label "AHORA SUENA"; 3) a small dedication balloon with the text "Dedicado a la Mesa 12"; 4) a set of equalizer bars. 16:9.

How it must look in this style: Cover inside a puffy cloud frame with a small propeller on top; label a yellow bell pill; equalizer as bouncing little clouds.

CIELO style: a sunny children's-cartoon sky. Sky blue #7EC8E8, bright blue #2BA4D9 and white panels, navy text #1A4A73, red #E31C23 accents and golden yellow #F5C518 soft shadows under every shape. Everything is round, puffy and bouncy: thick rounded blue borders, pill shapes, fluffy clouds, twinkling stars. Rounded friendly display font. Nothing may resemble Doraemon or any existing cartoon: no blue cat, no robot cat.

Background: flat solid pure green #00FF00, no shadows or texture on the green, every piece well separated with empty space around it, nothing touching the image edges.

Rules: no third-party characters, logos or brands; no photos of real people (any participant is a generic illustrated avatar inside a circle); high contrast, readable on a TV seen from 10 meters; no lines thinner than 4 px; crisp clean edges; no extra text except the one requested.
```

---

## Láminas completas (para aprobar el conjunto)

Se piden en el mismo chat de cada plantilla, después del ancla.

### L1. Láminas de momentos, todas 16:9

En todas las láminas la pantalla tiene la misma estructura: fondo de la plantilla; franja superior fina con el logo de un bar ficticio "BAR LUNA" a la izquierda; contenido centrado; chat a la derecha cuando corresponde.

**L1a. Ruleta girando**

```
Create a full 16:9 TV screen mockup in the established style: the "wheel" game in progress. Top strip with a small fictional bar logo "BAR LUNA" on the left. Center: the big game card with the wheel title label on top and the prize wheel spinning (motion blur on the segments), 10 segments with generic illustrated avatar circles and names like "Mesa 3", "Mesa 7". The mascot stands at the bottom left, pose "señala", pointing at the wheel. Light ambient effect from the style. Nothing covers the wheel or the pointer.
```

**L1b. Pareja formada**

```
Same screen, next moment: the wheel stopped. Center card shows the formed pair: two big round avatar photos side by side with the style's pair separator between them and the names "Lucía" and "Martín" under them. Celebration impact effect and confetti of the style falling. At the bottom, a strip of small pills with three previously formed pairs. The mascot at the bottom left in pose "festeja".
```

**L1c. Votación con ganador**

```
Same style, new screen: song voting result. Center card with the vote title label and the question "¿Qué suena después?". Three option cards in a row, each with an invented album cover illustration (no real artists) and a fictional song title under it, plus a vote bar. The middle option is the winner: bigger, with the winner border and badge; the other two dimmed. Confetti. Mascot at the bottom left in pose "festeja".
```

**L1d. Chat destacado con dedicatoria**

```
Same style, new screen: table-to-table messages. On the right side, a tall chat panel with 5 bubbles alternating incoming (left) and outgoing (right), each with a small round avatar, author ("Mesa 4", "Mesa 9"), short friendly Spanish messages and a time; the newest bubble has the "NUEVO" badge. In the center, the game card with the message title label, the route "MESA 4 → MESA 9" and a big dedication balloon: "Para Caro, ¡feliz cumple! 🎂". Mascot at the bottom left in pose "reposo".
```

**L1e. Rechazo**

```
Same style, new screen: the wheel picked "Mesa 5" but they declined. Center: the participant card falling away with the style's rejection effect and a "NO" / "PASO" label in the style's lettering. Mascot at the bottom left in pose "decepcion". Keep it playful, not sad.
```

**L1f. Cierre de la ronda**

```
Same style, new screen: end of the pairing round. Center card titled in the style's lettering ("Parejas de la noche" or the style's equivalent) with a 4x2 grid of small pair cards, each with two round avatars and names. Light confetti. Mascot in pose "festeja".
```

### L2. Pantalla de reposo "Ahora" completa

```
Same style, new 16:9 screen with no game: "now playing". Background: a big blurred version of an invented album cover with the style's overlay gradient. Left: the album cover framed in the style (vinyl / manga panel / speedometer / cloud frame, as fits the style). Right: the label "AHORA SUENA" in the style's lettering, a big fictional song title "Luces de Neón", artist "Los Satélites", and a small dedication balloon "Dedicado a la Mesa 12". Small animated-looking equalizer bars. Fictional bar logo "BAR LUNA" in the top strip. No real artists or covers.
```

### L3. Prueba de legibilidad

```
Take the "wheel spinning" screen and the "chat with dedication" screen you made and show them small, side by side, as they would look on a TV seen from 10 meters in a dark bar. Point out anything that becomes unreadable and propose the fix.
```

---

---

## Qué me tenés que pasar

Pasame primero, de cada plantilla, el ancla y `P05` para aprobarlos. Después, el resto de las piezas con el nombre `<plantilla>-<código>.png`. Las piezas planas (P05, P06, P09, P10, P14, P15, P16, P17, P19) se pueden vectorizar en Recraft; yo hago los recortes 9-slice, las animaciones y la integración en `display.js`.
