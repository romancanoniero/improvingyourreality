# Fonomusic: prompts para Gemini

Prompts para generar en Gemini el arte de la pantalla del salón. Las pieles nuevas (Maison, Kirameki, Trazo, Revista y Fileteado) tienen su prompt integral en [Pieles nuevas](#pieles-nuevas-t5t9-prompts-integrales). Para las cuatro primeras hay dos formas de usarlos: el **modo rápido**, con un prompt maestro por plantilla que genera todo en 5 imágenes, o un **prompt por elemento y por plantilla** para rehacer una pieza puntual. Los códigos P01–P20 son los del [brief por plantilla](./fonomusic-brief-plantillas.md).

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

## Pieles nuevas (T5–T23): prompts integrales

Cada prompt genera **la piel completa en 8 imágenes**, en el mismo chat: las 5 de siempre (fondo, mascota y efectos, kit A, kit B, juegos y "Ahora suena") más las 3 pantallas que en Nocturna, Manga, Meteoro y Cielo llegaron después: la **bienvenida con QR** (6), la celebración **"¡Hay pareja!"** (7) y la hoja de **estados de la app del celular** (8).

**Cómo se usa:** chat nuevo de Gemini por piel, pegar el prompt entero y escribir `siguiente` después de cada imagen. Guardá los archivos como `<piel>-H1.png` a `<piel>-H8.png`, por ejemplo `fileteado-H3.png`.

**Fechas especiales (T14–T17):** Halloween, Navidad y Año Nuevo, San Valentín y el Día del Amigo están pensadas para activarse unos días al año sin cambiar la piel habitual del bar.

**Marcas, autores y personajes:** los prompts describen cada estética en lugar de nombrar marcas, dibujantes o historietas. Si se nombran, Gemini se niega o copia logos, monogramas y personajes protegidos, y eso no se puede usar en la pantalla de un bar.

| Piel | Inspiración | Mascota | Archivos |
|---|---|---|---|
| T5 Maison | lujo de marroquinería | Bauli | `maison-H1.png` … `maison-H8.png` |
| T6 Kirameki | anime | Kira | `kirameki-H1.png` … `kirameki-H8.png` |
| T7 Trazo | historieta para adultos de los 80 | El Cronista | `trazo-H1.png` … `trazo-H8.png` |
| T8 Revista | humor gráfico argentino de los 40 | Gramo | `revista-H1.png` … `revista-H8.png` |
| T9 Fileteado | cultura argentina | Matecito | `fileteado-H1.png` … `fileteado-H8.png` |
| T10 Disco 70 | la disco clásica de los 70 | Lentejuela | `disco70-H1.png` … `disco70-H8.png` |
| T11 Disco 80 | pista disco y de patinaje de los 80 en Estados Unidos | Brillo | `disco80-H1.png` … `disco80-H8.png` |
| T12 Disco 90 | el boliche electrónico de los 90 | Glowy | `disco90-H1.png` … `disco90-H8.png` |
| T13 Rebobinado | cultura pop de los 90 en Estados Unidos | Rebo | `rebobinado-H1.png` … `rebobinado-H8.png` |
| T14 Halloween | fecha especial | Calabacín | `halloween-H1.png` … `halloween-H8.png` |
| T15 Navidad y Año Nuevo | fecha especial | Estrellita | `navidad-H1.png` … `navidad-H8.png` |
| T16 San Valentín | fecha especial | Flechi | `sanvalentin-H1.png` … `sanvalentin-H8.png` |
| T17 Día del Amigo | fecha especial (20 de julio) | Amigazo | `amigo-H1.png` … `amigo-H8.png` |
| T18 Bailanta | cumbia y cuarteto | Güiri | `bailanta-H1.png` … `bailanta-H8.png` |
| T19 Arcade | maquinitas de 8 bits | Pixi | `arcade-H1.png` … `arcade-H8.png` |
| T20 Hinchada | noche de partido | Bombito | `hinchada-H1.png` … `hinchada-H8.png` |
| T21 Cervecería | bar cervecero artesanal | Barrilito | `cerveceria-H1.png` … `cerveceria-H8.png` |
| T22 Fanzine | bar de rock | Púa | `fanzine-H1.png` … `fanzine-H8.png` |
| T23 Tiki | bar de playa | Coquito | `tiki-H1.png` … `tiki-H8.png` |

### T5 Maison (lujo de marroquinería)

Lujo de marroquinería clásica: lona color coñac con un monograma propio de Fonomusic, cuero, costuras, herrajes dorados y baúles de viaje. **El prompt no nombra la marca a propósito**: si se la nombra, Gemini se niega o copia el monograma y el logo, que están registrados. Se describe el estilo y se pide un monograma inventado.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

MAISON style: a heritage luxury leather-goods house and its vintage travel trunks. Coated canvas in cognac brown #6B3E1F with an ORIGINAL tone-on-tone Fonomusic monogram (a stylized "F", a music note and a four-petal flower, repeated in a diagonal grid, color #C8A27A), dark chocolate leather #2B1A10, cream #F3E7D3, oxblood red #6E1423 accents and polished brass gold #C9A24B hardware. Saddle stitching, brass corner protectors, rivets, buckles, leather straps, embossed tags and gold foil. High-contrast Didone serif lettering in spaced small caps, gold foil on leather. Quiet, elegant, expensive. Do not reproduce any existing brand monogram, logo, flower pattern or checkerboard canvas.

Mascot (original, identical in every image): "Bauli", a small vintage steamer trunk with brass corners, a leather handle on top like a little tuft, two round friendly eyes on the front plate, rosy cheeks, a tiny oxblood bow tie and short leather-strap legs, covered in the original Fonomusic monogram.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: Cognac canvas with the original Fonomusic monogram, very subtle in the center and clearer toward the edges, a frame of dark leather with saddle stitching, brass corner protectors in the four corners and a soft warm spotlight from the top.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Leather texture, gold stitching, brass shine, soft warm shadow.
- Middle row, decorative side objects: 1) a stack of two small travel trunks, 2) a brass padlock with a key, 3) a leather luggage tag with a gold "F", 4) a golden music note with a ribbon.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: tiny brass rivets, monogram flowers in gold, small leather tassels.
- Bottom center, a celebration burst radiating from an empty central circle: Gold foil rays and spinning monogram flowers, with a thin brass ring.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card gets a strap buckled across it and a brass padlock; the "NO" embossed in gold on a dark leather tag.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Dark chocolate leather border with saddle stitching, brass corner protectors, cognac monogram canvas interior very subtle, a thin gold inner line.
- Five game title labels with the same base shape: "RULETA", "VOTO", "CORREO", "PAREJA" and one empty. Embossed gold foil Didone small caps on a leather tag with a brass rivet on each side.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Cream leather card with stitched border and gold edge; photo ring a brass ring with tiny rivets; separator a gold monogram flower; adornment a small gold crown with a key.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Dark leather pill with saddle stitching and a brass buckle at the end; trail a thin gold ribbon.
- End-of-round title "Colección de la noche" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title is gold foil on a leather banner held by two brass buckles; the cell a cream leather card with stitching.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Cream leather luggage tag shaped balloon with stitched border and a brass eyelet, serif text in chocolate.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming cream leather tag with chocolate text; outgoing cognac monogram canvas with gold text; badge a small gold foil seal; panel a tall dark leather strip with stitching.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two luggage tags tied together with a gold ribbon into a bow, with a gold monogram heart; chip dark leather with gold stitching.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Dark leather band with a gold stitched line; plate a brass plaque engraved "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating cognac monogram canvas and dark chocolate leather, each with a generic avatar and a short name like "Mesa 3". Rim of stitched leather with brass rivets; hub a brass lock with a keyhole; pointer a brass key pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Cream leather cards with stitching; the winner gets a gold foil border, a soft gold glow and a brass seal badge "¡GANADORA!"; bar a leather strap with gold fill; countdown ring an elegant brass watch face.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a small open trunk with brass corners; label "AHORA SUENA" in gold foil on a leather tag; equalizer bars as gold bars like stacked brass ingots.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Dark leather and cognac monogram background; QR framed inside an open trunk lid with brass corners; icons as round brass medallions.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Pareja de colección!". Gold foil and monogram flowers raining down, photo frames as brass rings, the match icon a gold heart padlock, the ribbon a gold-trimmed leather banner.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Buttons in gold foil on leather; spinner a turning brass dial; the reaction icon of the style a small trunk.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T6 Kirameki (anime)

Anime de TV a color: cel shading, ojos brillantes, destellos, degradés de atardecer, líneas de acción de colores y letras de efecto. Es distinta de Manga (que es papel y tinta en blanco y negro con rojo). No copia ninguna serie.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

KIRAMEKI style: a colorful modern TV anime opening at sunset turning into night. Deep indigo #2A1B5C, magenta pink #FF4FA3, sky cyan #4FD8FF, sunshine yellow #FFE45C and white. Clean cel shading with two-tone shadows, glossy highlights, sparkles and lens flares, colorful speed lines, big bold anime sound-effect lettering with white outlines and colored drop shadows. Rounded heavy display font. Do not copy any existing anime, character or logo.

Mascot (original, identical in every image): "Kira", an original chibi fox spirit with big glossy anime eyes with star highlights, cream and orange fur, a fluffy tail with a glowing star at the tip, pink headphones and a tiny magenta scarf.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: Sunset sky fading from magenta and orange at the bottom to deep indigo at the top, a city skyline silhouette with lit windows along the bottom edge, floating sparkles and a few cel-shaded clouds in the corners.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Cel shading with crisp two-tone shadows, white outline sticker style and sparkles around.
- Middle row, decorative side objects: 1) a burst of colorful speed lines, 2) a cluster of star sparkles, 3) a big "¡KYA!" sound-effect lettering, 4) a floating paper charm with a star.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: stars, hearts, four-point sparkles.
- Bottom center, a celebration burst radiating from an empty central circle: A magical-girl transformation burst: pink and cyan rays, ribbons and sparkles from the center.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card shatters into glass shards with blue sweat-drop marks; the "NO" in big anime sound-effect lettering, cyan with a dark outline.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Glossy indigo card with a magenta-to-cyan gradient border, white outline and sparkles in two corners.
- Five game title labels with the same base shape: "¡GIRA!", "¡VOTA!", "CHAT", "¡MATCH!" and one empty. Bold anime title lettering in yellow with a magenta outline and white outer stroke, tilted, with sparkles.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: White card with a magenta outline and cel shadow; photo ring a gradient ring with a star; separator a pink heart with sparkles; adornment a small golden tiara.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Indigo pill with a pink outline; trail colorful speed lines and sparkles.
- End-of-round title "¡Fin del episodio!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title is anime episode-card lettering with a star; the cell an indigo card with a pink outline.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": White rounded anime speech bubble with a magenta outline and a pink cel shadow.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming white bubble with indigo text; outgoing magenta gradient with white text; badge a yellow star "NUEVO"; panel a translucent indigo column with sparkles.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two avatars with a pink heart and a red string of fate tying their little fingers; chip indigo with a gradient outline.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Indigo band with a thin magenta-to-cyan gradient line; plate a glossy pill with sparkles.

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating magenta and cyan, each with a generic avatar and a short name like "Mesa 3". Rim a glossy ring with small star lights; hub the mascot's glowing star; pointer a pink crystal.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. White cards with a cyan outline; the winner gets a golden glow, sparkles and a "¡GANADORA!" star badge; bar a gradient fill with sparkles; countdown ring a glowing magic circle.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as an anime episode card with a gradient border; label "AHORA SUENA" in anime title lettering; equalizer bars as gradient bars topped with stars.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Sunset city background; QR inside a glowing magic circle; icons as glossy round buttons.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡El destino los unió!". Pink and cyan transformation rays, a red string of fate between the two photo frames, hearts and stars as confetti.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Glossy gradient buttons; spinner a spinning star; the reaction icon of the style a fox face.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T7 Trazo (historieta para adultos de los 80)

La historieta para adultos europea y rioplatense de los años 80, la de las revistas de la época: línea de pluma fina y elegante, tramado, acuarela suave y personajes sensuales pero vestidos, en la noche porteña de esa década. **El prompt no nombra al dibujante ni a la historieta a propósito**: Gemini no imita a autores vivos ni personajes con derechos, así que se describen los rasgos del estilo. Todo queda apto para un bar: nada explícito.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

TRAZO style: a 1980s European and Rioplatense adult graphic novel, printed in a comics magazine of the era. Fine, elegant and very expressive pen-and-ink line, delicate cross-hatching, soft watercolor washes. Warm paper #F1E6D2, black ink #1C1C1C, washes of terracotta #C0563B, smoky blue #3F5A73 and ochre #D9A441. Setting: Buenos Aires at night in the 80s: a newsroom with typewriters, rain on cobblestones, neon reflections on wet streets, jazz clubs. Elegant, stylish adults with a sensual but fully clothed, tasteful look. Hand-lettered comic captions and newspaper headline typography. Do not copy any existing comic, author or character.

Mascot (original, identical in every image): "El Cronista", an original lanky night reporter with a thin mustache, a rumpled trench coat, a fedora with a press card in the band, a notebook and a pencil behind the ear, drawn with fine expressive pen lines.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A rainy Buenos Aires street at night in watercolor and ink: wet cobblestones reflecting warm neon at the bottom, building facades and a newsstand along the edges, falling rain lines, the center a soft calm wash.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Fine ink line with cross-hatching and watercolor washes, like a panel cut-out.
- Middle row, decorative side objects: 1) a typewriter, 2) a stack of newspapers tied with string, 3) a trumpet with a curl of music notes, 4) a street lamp with rain.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: newspaper scraps, ink drops, small paper airplanes.
- Bottom center, a celebration burst radiating from an empty central circle: Ink splash rays with flying newspaper pages and a watercolor bloom.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card gets torn like a newspaper page with a red pencil cross; the "NO" as a stamped red "RECHAZADO" newspaper mark with "NO" big.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Comic panel with a fine double ink border, warm paper interior with a very faint wash, a hand-lettered caption box in one corner.
- Five game title labels with the same base shape: "RULETA", "ENCUESTA", "CORREO", "FLECHAZO" and one empty. Newspaper headline lettering in black on a cream caption box with a terracotta underline.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Paper card with an ink border and a watercolor shadow; photo ring an ink circle with hatching; separator a red ink heart pierced by a pencil; adornment a small press badge.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Cream caption pill with an ink border; trail ink motion lines.
- End-of-round title "Última edición" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title is a newspaper front-page headline; the cell a small comic panel.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Classic comic speech balloon with a fine ink outline and hand lettering, a soft ochre wash inside.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming white balloon with ink outline; outgoing smoky blue wash with white hand lettering; badge a red "NUEVO" stamp; panel a tall comic strip column.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two silhouettes sharing an umbrella in the rain with a small red heart; chip a paper caption box with an ink border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": A thin band like a newspaper masthead rule; plate a cream newspaper masthead with "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating terracotta and smoky blue watercolor washes, each with a generic avatar and a short name like "Mesa 3". Rim like a vinyl record in ink and hatching; hub a typewriter key; pointer a fountain-pen nib pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Paper cards with ink borders; the winner gets a red pencil circle around it and a "¡GANADORA!" headline badge; bar a watercolor fill; countdown ring a wall clock drawn in ink.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a comic panel with a caption box; label "AHORA SUENA" as a newspaper headline; equalizer bars as hatched ink bars.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Rainy night street background; QR pinned on a corkboard like a newsroom note; icons drawn in ink inside circles.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Exclusiva: estas mesas se unieron!". A front page with the headline, two photo frames like newspaper portraits, flying newspaper pages and ink splashes.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Buttons as hand-lettered caption boxes; spinner a rolling typewriter carriage; the reaction icon of the style a fedora.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T8 Revista (humor gráfico argentino de los 40)

Las revistas de humor porteñas de los años 40: tapas a dos o tres tintas, trama de puntos, registro corrido, títulos art déco y caricaturas exageradas de tipos porteños (señores bajitos con sombrero y bigote, damas altísimas de cintura de avispa con vestidos de la época). Se describe el estilo sin copiar ningún personaje ni dibujante. Todo vestido y nada provocativo.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

REVISTA style: a 1940s Buenos Aires humor magazine cover. Cream newsprint #F4E9CF, tomato red #D7392B, mustard #E3A82B, teal #2F7F86 and black ink, printed in two or three spot colors with halftone dots and slightly off-register printing. Art Deco headline lettering with drop shadows. Exaggerated caricature style with bold brush outlines: short round gentlemen with hats and mustaches, very tall elegant ladies with tiny waists in 1940s dresses and hats, all fully clothed and tasteful. Do not copy any existing character, artist or magazine logo.

Mascot (original, identical in every image): "Gramo", an original round gramophone with a black bowler hat, a big curly mustache, a bow tie, little legs with spats, and the horn on top like a tuft of hair, drawn as a 1940s caricature.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: Cream newsprint with a large halftone sunburst in mustard and red from the center, an Art Deco frame along the edges, small caricature city rooftops at the bottom.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Bold brush outline, flat spot colors with halftone shading and a slightly off-register print look.
- Middle row, decorative side objects: 1) a bandoneon, 2) a bowler hat with a cane, 3) a 1940s radio, 4) a vintage microphone.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: halftone dots, small musical notes, paper streamers.
- Bottom center, a celebration burst radiating from an empty central circle: A halftone sunburst in red and mustard with Art Deco rays and stars.
- Bottom right, a rejection effect over an empty card plus a "NO" label: A caricature hat flying off with "¡PLAF!" lines; the "NO" in Art Deco letters on a red ribbon.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: An Art Deco frame in black and mustard with stepped corners, cream newsprint interior with a very faint halftone.
- Five game title labels with the same base shape: "¡LA RULETA!", "¡A VOTAR!", "CHISMES", "¡FLECHAZO!" and one empty. Art Deco headline lettering in red with a black drop shadow on a mustard banner.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Cream card with a black brush border and a red offset shadow; photo ring an Art Deco ring; separator a red heart with an arrow; adornment a small golden bowler hat.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Mustard pill with a black border; trail halftone dots.
- End-of-round title "¡Se acabó el baile!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title is a magazine cover headline on a red ribbon; the cell an Art Deco framed card.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Comic balloon with a black brush outline and a halftone shadow, hand-lettered text.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming cream balloon; outgoing teal with cream text; badge a red starburst "NUEVO"; panel a magazine column with an Art Deco header.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Cupid's arrow piercing two hats; chip mustard with a black border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Band like a magazine masthead with a thin double rule; plate an Art Deco nameplate "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating tomato red and mustard with halftone, each with a generic avatar and a short name like "Mesa 3". Rim an Art Deco ring with studs; hub a gramophone record; pointer a cane handle pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Cream cards with black brush borders; the winner gets a red starburst "¡GANADORA!" and a mustard glow; bar a halftone fill; countdown ring an Art Deco clock.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a 1940s magazine cover; label "AHORA SUENA" in Art Deco letters; equalizer bars as halftone bars.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Halftone sunburst background; QR framed as a magazine cover inset; icons as round Art Deco badges.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Flechazo en el salón!". A magazine cover headline, a halftone sunburst, Cupid arrows, hats flying and streamers.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Buttons as Art Deco plates; spinner a spinning record; the reaction icon of the style a bowler hat.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T9 Fileteado (cultura argentina)

Cultura argentina con el fileteado porteño como lenguaje gráfico: filetes, hojas de acanto, flores, cintas y letras con sombra, más íconos que se reconocen enseguida: el mate, el termo, el asado, las empanadas, los alfajores, el bandoneón, el colectivo y el Obelisco. Los textos van en castellano rioplatense.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

FILETEADO style: Argentine popular culture painted in the traditional Buenos Aires "fileteado" sign-painting style. Glossy black background #111111, ornamental scrolls with acanthus leaves, flowers, ribbons, little birds and shaded lettering, painted in red #D52B1E, green #1E8C45, yellow #F6C700, light blue #6CACE4 and white, with fine white highlights and dark shading lines. Iconic Argentine elements: mate gourd with a silver straw (bombilla), thermos, asado grill, empanadas, alfajores, bandoneon, a colectivo bus, the Obelisco silhouette, tango shoes and a gaucho beret. Hand-painted shaded lettering in Rioplatense Spanish. No logos, brands or real people.

Mascot (original, identical in every image): "Matecito", an original round mate gourd with a silver bombilla sticking up like an antenna, big friendly eyes, rosy cheeks, a black gaucho beret, a red neckerchief and tiny espadrilles, painted in fileteado style with white highlights.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: Glossy black with fileteado scrolls, acanthus leaves and flowers growing from the four corners, a ribbon banner border, a small Obelisco and colectivo silhouette along the bottom.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Glossy painted look with fileteado highlights and shading lines.
- Middle row, decorative side objects: 1) a thermos and mate set, 2) an asado grill with chorizos, 3) a bandoneon, 4) a fileteado flower with a little bird.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: small fileteado flowers, alfajores, ribbon pieces in light blue and white.
- Bottom center, a celebration burst radiating from an empty central circle: Fileteado scrolls bursting outward with flowers and golden rays.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card wrapped by a red ribbon with the mascot spilling the mate; the "NO" in shaded fileteado lettering on a ribbon.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Black card with a fileteado scroll border in red, green and yellow, acanthus leaves in the corners and a thin white line inside.
- Five game title labels with the same base shape: "RULETA", "¡VOTÁ!", "CHAMUYO", "FLECHAZO" and one empty. Shaded fileteado lettering in yellow and white on a light blue ribbon with curled ends.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Black card with fileteado corners; photo ring a scroll ring with small flowers; separator a fileteado heart with ribbons; adornment a small golden crown of flowers.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Black pill with a red fileteado line; trail light blue and white ribbon.
- End-of-round title "¡Qué noche, che!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title painted on a fileteado ribbon with scrolls; the cell a black card with fileteado corners.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Fileteado-framed speech balloon, cream inside, ornamental scrolls at the corners.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming cream balloon with red scroll border; outgoing light blue with white text; badge a yellow ribbon "NUEVO"; panel a tall black column with fileteado border.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two mates toasting with a heart of scrolls; chip black with fileteado border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Black band with a fileteado ribbon line; plate a fileteado sign "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating red and green with fileteado details, each with a generic avatar and a short name like "Mesa 3". Rim a scroll ring with small flowers; hub a mate gourd seen from above; pointer a bombilla pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Black cards with fileteado borders; the winner gets a golden scroll frame and a ribbon badge "¡GANADORA!"; bar filled in light blue and white; countdown ring a fileteado clock.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed with fileteado scrolls; label "AHORA SUENA" on a ribbon; equalizer bars as stacked painted flowers.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Black fileteado background with flowers; QR inside a painted frame; icons inside fileteado medallions.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Matecito unió a estas mesas!". Fileteado scrolls and flowers bursting, two mates toasting, light blue and white ribbons, small fireworks.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Buttons painted as fileteado signs; spinner a spinning mate; the reaction icon of the style a mate.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T10 Disco 70 (la disco clásica de los 70)

La disco de los 70 en su época de oro: lamé dorado, lentejuelas, terciopelo, pantalones oxford, plataformas, el piso de baldosas que se iluminan y letras redondas e infladas con rayas de arcoíris en tonos cálidos. Se distingue de Disco 80 por la paleta de tierra y dorado, las texturas de tela y la tipografía "groovy". No nombra discotecas, películas ni artistas.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

DISCO 70 style: a 1970s disco at its golden age. Warm earthy glam: chocolate brown #3B2314, burnt orange #D9541E, harvest gold #E8A33D, avocado green #8A9A3B, cream #F6E7C8 and shiny gold lamé. Light-up dance floor tiles in warm colors, sequins, velvet curtains, gold lamé fabric, wide rainbow stripes in orange-to-brown gradients, swirly flower shapes and starbursts. Puffy rounded "groovy" bubble lettering with a thick outline and a stacked stripe shadow. Do not copy any existing club, movie, album cover, artist or logo.

Mascot (original, identical in every image): "Lentejuela", an original small vinyl record with a sequined collar, big friendly eyes in the label and a wide smile, wearing gold bell-bottoms and platform boots, with little arms in a classic disco pose.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A dark brown disco hall with a warm light-up dance floor in perspective along the bottom edge, gold sequin curtains on the side edges, wide orange-to-brown rainbow stripes curving in from the top corners and a few sparkles, the center a calm warm glow.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Thick outline, warm flat colors with gold lamé shine and sequin sparkles, a soft orange glow.
- Middle row, decorative side objects: 1) a pair of platform boots, 2) a gold microphone on a stand, 3) a turntable with a spinning record, 4) a disco swirl flower.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: sequins, small gold stars, groovy daisies.
- Bottom center, a celebration burst radiating from an empty central circle: Wide rainbow stripes in orange, gold and brown radiating from the center with sequin sparkles and a gold lamé ring.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The dance floor tiles under the card go dark and a record needle scratches across it; the "NO" in puffy groovy letters with a stacked brown shadow.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Chocolate brown card with a gold lamé border, a thin rainbow stripe line inside and sparkles in two corners.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Puffy groovy bubble lettering in harvest gold with a thick brown outline and an orange stacked stripe shadow, on a rounded cream plate.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Cream card with a gold border and an orange shadow; photo ring a gold sequin ring; separator a gold heart with sparkles; adornment a small gold crown with a star.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Gold lamé pill with a brown border; trail wide orange and brown rainbow stripes.
- End-of-round title "¡Último baile!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title in puffy groovy letters on a rainbow stripe arch; the cell a glowing warm dance floor tile.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Rounded cream balloon with a thick brown outline and an orange stacked shadow, brown text.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming cream bubble with brown text; outgoing burnt orange with cream text; badge a gold starburst "NUEVO"; panel a tall brown velvet column with a gold edge.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two platform boots dancing toe to toe with a gold sequin heart between them; chip brown with a gold border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Brown band with a thin rainbow stripe line; plate a gold lamé marquee with small bulbs "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating burnt orange, harvest gold, avocado green and cream like glowing warm dance floor tiles, each with a generic avatar and a short name like "Mesa 3". Rim a gold ring with small bulbs; hub a spinning vinyl record; pointer a platform boot pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Cream cards with brown borders; the winner gets gold sparkles, a rainbow stripe frame and a gold starburst badge "¡GANADORA!"; bar an orange-to-gold stripe fill; countdown ring a ring of warm bulbs.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a record sleeve with a gold edge and a rainbow stripe; label "AHORA SUENA" in groovy letters; equalizer bars as stacks of glowing warm floor tiles.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Warm disco hall background with the light-up floor; QR inside a gold marquee frame with bulbs; icons as round glowing floor tiles.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Lentejuela los puso a bailar!". Rainbow stripes bursting from the center, the dance floor lighting up in a heart shape, sequins and gold stars falling.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Puffy gold buttons with a brown outline; spinner a spinning record; the reaction icon of the style a platform boot.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T11 Disco 80 (pista disco y de patinaje de los 80 en Estados Unidos)

La pista de baile de una disco o una pista de patinaje de Estados Unidos a comienzos de los 80: bola de espejos, piso de baldosas que se iluminan, cromo, patines, rayos de luz de colores y letras cromadas con destellos. Para que no se parezca a Nocturna, que es neón violeta sobre negro, esta piel es brillante y cromada: atardecer naranja, fucsia, dorado y cromo. Frente a Disco 70 (tierra, lamé y letras "groovy") y Disco 90 (luz negra y láseres), esta es la del cromo, los patines y las rayas de atardecer. No nombra discotecas, películas ni artistas.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

DISCO 80 style: an early-1980s American disco and roller-rink dance floor. Warm and shiny: deep plum #2B0F3A, hot magenta #FF2E88, sunset orange #FF7A1A, golden yellow #FFC93C, turquoise #1ED6C4 and polished chrome silver. A mirror ball scattering sparkles, a light-up checkerboard dance floor in glowing colored tiles, colored spotlight beams, roller skates, glitter, sunset gradient stripes (orange to magenta to plum) and airbrushed chrome. Chrome script and bold rounded 80s display lettering with star glints and a glossy airbrush shine. Glamorous, happy and danceable. Do not copy any existing club, movie, album cover, artist or logo.

Mascot (original, identical in every image): "Brillo", an original round mirror ball made of tiny reflective tiles with big friendly eyes and a wide smile, a terry-cloth headband in magenta, little arms with white gloves, and legs ending in white roller skates with orange wheels and rainbow stripes on the socks.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A dark plum dance hall with a mirror ball high in the top center scattering small sparkles, colored spotlight beams sweeping in from the top corners, a light-up checkerboard dance floor in perspective along the bottom edge, and sunset gradient stripes along the side edges.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Glossy airbrushed chrome look, reflective tiles with sparkles, soft magenta glow.
- Middle row, decorative side objects: 1) a pair of white roller skates with rainbow laces, 2) a chrome microphone with a star glint, 3) a stack of vinyl records with colorful labels, 4) a small mirror ball hanging from a chain.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: four-point star glints, small mirror tiles, glitter circles.
- Bottom center, a celebration burst radiating from an empty central circle: Spotlight beams in magenta, orange and turquoise radiating from the center with mirror-ball sparkles and a chrome ring.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The dance floor tiles under the card go dark one by one and a record scratches with a broken zigzag; the "NO" in chrome letters with a cracked shine.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Plum card with a polished chrome border, a thin sunset gradient line inside and small star glints in two corners.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Chrome script lettering with a magenta outline and star glints on a sunset-striped plate.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Plum card with a chrome edge and a turquoise glow; photo ring a mirror-tile ring; separator a glittering magenta heart; adornment a small chrome crown with a star.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Chrome pill with a magenta border; trail rainbow roller-skate speed stripes.
- End-of-round title "¡Última canción!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title in chrome script under a mirror ball; the cell a glowing dance floor tile.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Rounded balloon with a chrome border and a soft magenta glow, cream inside, plum text.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming cream bubble with plum text; outgoing magenta-to-orange gradient with white text; badge a golden star "NUEVO"; panel a tall translucent plum column with a chrome edge.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two roller skates touching toes with a glittering heart between them; chip chrome with a magenta border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Plum band with a thin sunset gradient line; plate a chrome marquee sign with small bulbs "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating magenta, orange, turquoise and golden yellow like glowing dance floor tiles, each with a generic avatar and a short name like "Mesa 3". Rim a chrome ring with small light bulbs; hub a mirror ball; pointer a white roller skate pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Plum cards with chrome borders; the winner gets spotlight beams, glitter and a golden star badge "¡GANADORA!"; bar a sunset gradient fill with sparkles; countdown ring a ring of light bulbs.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a spinning vinyl record sleeve with a chrome edge; label "AHORA SUENA" in chrome script; equalizer bars as stacks of glowing dance floor tiles.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Dance hall background with the mirror ball and light-up floor; QR inside a chrome marquee frame with light bulbs; icons as glowing round dance floor tiles.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Brillo los puso a bailar!". Spotlight beams crossing, the mirror ball exploding in sparkles, the dance floor lighting up in a heart shape, glitter falling.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Chrome buttons with a magenta glow; spinner a spinning mirror ball; the reaction icon of the style a roller skate.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T12 Disco 90 (el boliche electrónico de los 90)

La pista electrónica de los 90: luz negra, láseres, estroboscópicas, pulseras luminosas, bandejas de CD, holográficos y letras de flyer de fiesta. Es la más fría y fluorescente de las tres discos: violeta de luz negra, verde ácido y azul eléctrico sobre negro. No nombra boliches, sellos, DJs ni temas, y no usa la carita sonriente amarilla ni otros símbolos conocidos de esa época.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

DISCO 90 style: a 1990s electronic dance club at peak time. Black #0A0A12 under UV blacklight, with fluorescent UV purple #8B2CFF, acid lime #C6FF00, electric blue #00B3FF, hot pink #FF2BD6 and holographic silver. Green and blue laser beams through haze, strobe flashes, glow sticks and glow bracelets, CD decks and a mixer, speaker stacks, iridescent holographic foil and chunky futuristic rave-flyer lettering with chrome bevels and glitch slices. Energetic and fluorescent. Do not copy any existing club, label, DJ, record, smiley symbol or logo.

Mascot (original, identical in every image): "Glowy", an original glow stick character, bending happily, glowing acid lime with a soft halo, big friendly eyes, round dark sunglasses pushed up on the head, big headphones around the neck and chunky platform sneakers.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A black club under blacklight with green and blue laser beams fanning from the top corners through light haze, speaker stacks and a DJ booth silhouette along the bottom edge, UV-fluorescent dots floating near the edges, the center a calm dark haze.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Fluorescent glow with a soft halo, black outline and holographic highlights, as if lit by blacklight.
- Middle row, decorative side objects: 1) a pair of CD decks with a mixer, 2) a speaker stack, 3) a bundle of glow sticks, 4) a holographic party flyer with a blank center.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: glow stick pieces, holographic squares, laser stars.
- Bottom center, a celebration burst radiating from an empty central circle: Laser beams in lime, blue and pink shooting from the center with a strobe flash and holographic sparks.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card glitches into horizontal slices and a strobe goes off; the "NO" in chrome rave-flyer letters with a pink glitch.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Black card with a glowing UV purple border, holographic corner pieces and a thin lime laser line inside.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Chunky futuristic chrome lettering with a lime glow and a small glitch slice, on a holographic plate.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Black card with a glowing pink edge; photo ring a holographic ring; separator a glowing lime heart; adornment a small chrome crown with a laser star.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Black pill with a glowing blue outline; trail laser streaks.
- End-of-round title "¡Se prendieron las luces!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title in chrome rave lettering with laser beams; the cell a glowing holographic tile.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Rounded black balloon with a glowing lime outline, white text.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming dark bubble with a blue glow and white text; outgoing UV purple with white text; badge a lime laser star "NUEVO"; panel a tall black column with a glowing edge.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two glow sticks crossing to form a glowing heart; chip black with a holographic border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Black band with a thin laser line in lime and blue; plate a holographic plate "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating UV purple, acid lime, electric blue and hot pink, glowing, each with a generic avatar and a short name like "Mesa 3". Rim a glowing ring with small LEDs; hub a spinning CD; pointer a laser beam ending in an arrow pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Black cards with glowing borders; the winner gets laser beams, a strobe flash and a holographic badge "¡GANADORA!"; bar a glowing lime fill; countdown ring a glowing LED ring.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a CD case under blacklight; label "AHORA SUENA" in chrome rave letters; equalizer bars as glowing LED segments.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Black club background with lasers; QR inside a holographic flyer frame; icons as glowing round buttons.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Glowy les prendió las luces!". Laser beams crossing over the two photo frames, strobe flashes, glow sticks flying and holographic confetti.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Glowing pill buttons; spinner a spinning CD; the reaction icon of the style a glow stick.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T13 Rebobinado (cultura pop de los 90 en Estados Unidos)

Los 90 en Estados Unidos: estampados geométricos de colores con garabatos y triángulos, papel picado de confeti, casetes, walkman, CD, beeper, VHS y consolas, letras de grafiti y stickers. Es plana y gráfica, sin cromo ni neón, para que no se confunda con Disco 90 ni con Nocturna. No nombra programas de TV, marcas ni bandas.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

REBOBINADO style: 1990s American pop culture, bold and flat. Off-white #FFF6E5 and black backgrounds with loud geometric patterns: squiggles, zigzags, triangles, dots and confetti shapes in teal #00A6A6, purple #6B3FA0, hot pink #FF3E8A, lime #B5E61D and yellow #FFD23F. Thick black outlines, flat colors with hard offset shadows, sticker-like shapes with white borders, spray-paint graffiti lettering and chunky rounded display type. Objects of the era: cassette tapes and a pencil to rewind them, portable cassette players with foam headphones, CDs, pagers, VHS tapes, a boombox, a chunky game controller, a skateboard and slap bracelets. Fun, loud and nostalgic. Do not copy any existing TV show, brand, band, console or logo.

Mascot (original, identical in every image): "Rebo", an original cassette tape with two reel eyes that spin, a big grin under the label, a backwards cap in teal, foam headphones around the neck, skinny arms and legs and chunky high-top sneakers; the tape ribbon sometimes curls out like a ponytail.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: An off-white wall with a loud 90s geometric pattern (squiggles, zigzags, triangles and dots) concentrated in the four corners and fading toward a calm center, a strip of graffiti-style shapes and a boombox, skateboard and cassettes stuck like stickers along the bottom edge.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Thick black outline, flat colors, hard offset shadow and a white sticker border.
- Middle row, decorative side objects: 1) a boombox, 2) a portable cassette player with foam headphones, 3) a pager with a tiny screen showing "143", 4) a skateboard with a squiggle pattern.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: squiggles, triangles, small CDs.
- Bottom center, a celebration burst radiating from an empty central circle: A pop-art burst of zigzags, triangles and squiggles in all the palette colors with a thick black outline.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card gets the tape pulled out in a tangled mess and a "pause" symbol; the "NO" in graffiti letters with a drip.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Off-white card with a thick black border, a hard purple offset shadow and geometric squiggles in two corners.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Graffiti-style lettering in hot pink and yellow with a black outline on a teal sticker with a white border.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Off-white card with a black border and a hard teal shadow; photo ring a CD-like ring with a rainbow shine; separator a pink heart sticker; adornment a small yellow crown sticker.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Purple pill with a black border; trail a curl of cassette tape ribbon.
- End-of-round title "¡Fin del lado A!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title as a handwritten cassette label with a marker underline; the cell a sticker card.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Chunky balloon with a thick black outline and a hard pink offset shadow, off-white inside, marker handwriting.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming off-white bubble with black text; outgoing teal with white text; badge a lime starburst sticker "NUEVO"; panel a tall pager-screen green column with a black frame.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two cassette tapes joined by one tape ribbon that forms a heart; chip black with a pink border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Black band with a thin zigzag line in the palette colors; plate a big cassette label sticker "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating teal, purple, hot pink and yellow with small geometric patterns, each with a generic avatar and a short name like "Mesa 3". Rim a thick black ring with white dots; hub a CD with a rainbow shine; pointer a pencil pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Off-white sticker cards with black borders; the winner gets a lime starburst "¡GANADORA!" and a zigzag frame; bar a fill in teal with squiggles; countdown ring a cassette reel.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a CD case with a hard shadow; label "AHORA SUENA" on a cassette label; equalizer bars as a boombox LED meter in blocky segments.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Geometric pattern background; QR shown on the screen of a chunky retro TV set; icons as round stickers.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Rebo les grabó un compilado!". A pop-art burst, tape ribbon forming hearts, squiggles and triangles as confetti, a pager showing "143".

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Chunky sticker buttons with a hard shadow; spinner a rewinding cassette reel; the reaction icon of the style a cassette.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T14 Halloween (fecha especial)

Halloween divertido y no de terror: calabazas talladas, murciélagos, fantasmitas, telarañas, velas y una luna llena grande, en naranja, violeta y verde limón. Nada sangriento ni que asuste.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

HALLOWEEN style: a fun, cute and spooky Halloween party, never gory or scary. Night purple #2A1240, pumpkin orange #FF7A00, slime green #8BE33A, candy-corn yellow #FFD23F, bone white #F4F0E6 and black. Carved jack-o'-lanterns glowing from inside, cute bats, little friendly ghosts, cobwebs, candles, a huge full moon, wonky haunted house shapes and candy. Wobbly hand-drawn spooky lettering with drips of glowing slime. Do not copy any existing movie, character or logo.

Mascot (original, identical in every image): "Calabacín", an original round carved pumpkin glowing from inside with a friendly toothy grin, a little witch hat with a purple band, a tiny cape and short leafy vine arms.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A purple night with a huge full moon in the top center, bare twisted trees and a wonky haunted house silhouette along the bottom edge, cobwebs in the top corners, little bats flying near the edges and glowing pumpkins on the ground in the bottom corners.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Bold outline, glowing orange light from inside the pumpkin, soft purple shadows, cute and round.
- Middle row, decorative side objects: 1) a stack of three glowing jack-o'-lanterns, 2) a cauldron bubbling with green slime, 3) a candle holder with three candles and a cobweb, 4) a little friendly ghost holding a lollipop.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: small bats, candy corn, tiny stars.
- Bottom center, a celebration burst radiating from an empty central circle: Orange and green magic rays from a bubbling cauldron with bats and stars flying out.
- Bottom right, a rejection effect over an empty card plus a "NO" label: A cute ghost blows the card away and it gets wrapped in cobweb; the "NO" in wobbly dripping slime letters.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Purple card with a wobbly black border, cobwebs in two corners and a thin orange glow line inside.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Wobbly spooky lettering in orange with a black outline and green slime drips, on a crooked wooden sign.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Purple card with an orange glowing edge; photo ring a ring of little pumpkins; separator an orange heart with bat wings; adornment a small witch hat.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Black pill with an orange outline; trail a puff of purple mist with bats.
- End-of-round title "¡Se terminó el hechizo!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title in dripping slime letters under the moon; the cell a small tombstone-shaped card, cute and not scary.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": A cute ghost-shaped speech balloon, white with a black outline.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming white ghost bubble with purple text; outgoing orange pumpkin bubble with black text; badge a green slime drop "NUEVO"; panel a tall purple column with cobwebs.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two pumpkins whose stems twist together into a heart; chip purple with an orange border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Purple band with a thin cobweb line; plate a crooked wooden sign "BAR LUNA" with a bat.

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating pumpkin orange and night purple, each with a generic avatar and a short name like "Mesa 3". Rim a ring of little glowing pumpkins; hub a cauldron seen from above; pointer a witch hat tip pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Purple cards with orange borders; the winner gets a green glow, bats around it and a slime badge "¡GANADORA!"; bar a bubbling green slime fill; countdown ring a full moon with a clock.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed by a cobweb in a crooked frame; label "AHORA SUENA" in spooky letters; equalizer bars as stacks of little pumpkins.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Night background with the full moon; QR inside a haunted house window; icons as round glowing pumpkins.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Calabacín les hizo un hechizo!". A cauldron bursting with green and orange magic, bats and candy flying, the full moon glowing behind.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Pumpkin orange buttons with a black outline; spinner a spinning bat; the reaction icon of the style a pumpkin.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T15 Navidad y Año Nuevo (fecha especial)

Una sola piel para diciembre: Navidad y brindis de Año Nuevo. Pino, guirnaldas, luces, regalos, estrellas, burbujas de champaña y fuegos artificiales, en rojo, verde pino y dorado. El cierre y "¡Hay pareja!" ya tienen guiños al brindis, así que sirve las dos semanas.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

NAVIDAD style: a warm and festive Christmas and New Year's Eve party. Deep pine green #0F4D2E, berry red #C8102E, gold #E5B53A, snow white #FFFFFF and a warm night blue #12233D. Christmas tree, garlands with warm string lights, wrapped gifts with ribbons, gold stars, snowflakes, candy canes, sparkling champagne glasses with bubbles, a clock near midnight and fireworks. Elegant gold script mixed with friendly rounded lettering. Do not copy any existing character, brand or logo.

Mascot (original, identical in every image): "Estrellita", an original golden Christmas tree-top star with big friendly eyes, rosy cheeks, a red knitted scarf, a tiny Santa-style red hat with a white pompom and little mitten hands, glowing softly.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A warm night blue with a garland of warm string lights hanging along the top edge, a decorated Christmas tree in one bottom corner and stacked gifts in the other, snowflakes falling near the edges and a few gold fireworks in the top corners.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Soft glow, warm gold highlights, rounded friendly shapes with a red and gold outline.
- Middle row, decorative side objects: 1) a decorated Christmas tree, 2) a stack of wrapped gifts with ribbons, 3) two champagne glasses clinking with bubbles, 4) a wall clock about to strike midnight.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: snowflakes, gold stars, champagne bubbles.
- Bottom center, a celebration burst radiating from an empty central circle: Gold fireworks and a burst of champagne bubbles from the center with snowflakes and stars.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card gets wrapped like a gift that will not open, with a tangled ribbon; the "NO" in gold letters on a red bow tag.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Pine green card with a gold border, a garland of small warm lights along the top and a red bow in one corner.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Gold script lettering with a red outline on a white gift tag with a red ribbon.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Snow white card with a gold edge and a red ribbon; photo ring a wreath of pine and berries; separator a red heart ornament; adornment a small gold star.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Red pill with a gold border; trail a sparkling gold ribbon.
- End-of-round title "¡Feliz brindis!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title in gold script with two champagne glasses clinking; the cell a small wrapped gift card.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Rounded snow white balloon with a red outline and a little holly in the corner.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming white bubble with green text; outgoing red with white text; badge a gold star "NUEVO"; panel a tall pine green column with a light garland along the edge.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two Christmas ornaments hanging from the same ribbon, forming a heart with mistletoe on top; chip green with a gold border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Night blue band with a thin garland of warm lights; plate a gold plate with a red bow "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating berry red and pine green with tiny gold sparkles, each with a generic avatar and a short name like "Mesa 3". Rim a pine wreath with small warm lights; hub a red ornament ball; pointer a gold star pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. White cards with red borders; the winner gets a gold glow, snowflakes and a gold star badge "¡GANADORA!"; bar a candy cane stripe fill; countdown ring a clock near midnight.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as an open gift box with a ribbon; label "AHORA SUENA" in gold script; equalizer bars as stacks of little gifts.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Warm night background with the tree and the light garland; QR inside a gold ornament frame; icons as round red ornaments.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Estrellita brindó por ustedes!". Gold fireworks, champagne bubbles and snowflakes, a garland of lights framing the two photos.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Red buttons with a gold outline; spinner a spinning snowflake; the reaction icon of the style a Christmas ornament.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T16 San Valentín (fecha especial)

San Valentín romántico y con humor: corazones, cartas de amor, flechas, rosas, cajas de bombones y labiales, en rojo, rosa y crema. Es la fecha en la que más se juega con los matches, así que el chat y "¡Hay pareja!" mandan.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

SAN VALENTIN style: a romantic and playful Valentine's Day party. Deep red #B3001B, candy pink #FF6FA5, blush #FFD6E0, cream #FFF4EC, chocolate #4A2420 and gold #D9A441. Hearts of every size, love letters with wax seals, Cupid arrows, red roses, heart-shaped chocolate boxes, lace doilies and lipstick kisses. Romantic script lettering mixed with chunky candy-heart lettering. Tender and fun, never suggestive. Do not copy any existing character, brand or logo.

Mascot (original, identical in every image): "Flechi", an original chubby little red heart with tiny white wings, a small bow and a heart-tipped arrow, big shiny eyes, rosy cheeks and a shy happy smile.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A blush pink background with a soft lace pattern on the edges, floating hearts and red roses in the corners, love letters and a chocolate box along the bottom edge, a few Cupid arrows crossing the top corners.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Soft rounded shading, glossy highlights like candy, a thin white outline like a sticker.
- Middle row, decorative side objects: 1) a bouquet of red roses, 2) a love letter with a heart wax seal, 3) an open heart-shaped chocolate box, 4) a bow with a heart-tipped arrow.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: small hearts, rose petals, lipstick kisses.
- Bottom center, a celebration burst radiating from an empty central circle: Hearts and rose petals bursting from the center with pink and red rays and little arrows.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card's heart cracks in two with a sad little sigh cloud; the "NO" in red candy-heart letters on a broken heart.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Cream card with a lace border in pink, little hearts in two corners and a thin red line inside.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Chunky candy-heart lettering in red with a white outline on a pink heart-shaped plate.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Cream card with a red edge and a lace pattern; photo ring a ring of little hearts; separator a red heart pierced by an arrow; adornment a small gold crown with a heart.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Pink pill with a red outline; trail a line of little hearts.
- End-of-round title "¡Se enamoró el salón!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title in romantic script on a red ribbon with hearts; the cell a love letter card with a wax seal.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Heart-cornered cream balloon with a red outline and a small wax seal.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming cream bubble with chocolate text; outgoing red with white text; badge a pink heart "NUEVO"; panel a tall blush column with a lace edge.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two hearts joined by a Cupid arrow with a small bow; chip red with a gold border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Blush band with a thin red line of little hearts; plate a heart-shaped gold plate "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating deep red and candy pink with small heart patterns, each with a generic avatar and a short name like "Mesa 3". Rim a ring of lace with small hearts; hub a heart-shaped chocolate; pointer a Cupid arrow pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Cream cards with red borders; the winner gets a pink glow, falling petals and a heart badge "¡GANADORA!"; bar a pink fill with little hearts; countdown ring a heart-shaped clock.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as an open love letter; label "AHORA SUENA" in romantic script; equalizer bars as stacks of little hearts.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Blush lace background with roses; QR inside a love letter envelope; icons as round candy hearts.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Flechi los flechó!". A big heart burst, rose petals raining, Cupid arrows crossing between the two photo frames.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Glossy red candy buttons; spinner a spinning heart; the reaction icon of the style a rose.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T17 Día del Amigo (fecha especial, 20 de julio)

El Día del Amigo argentino: mesas largas llenas de amigos, choque de vasos, pizza y fernet, una ronda de mate, guitarra, fotos instantáneas pegadas con cinta y abrazos. En celeste, amarillo, naranja y blanco, alegre y canchero. "¡Hay pareja!" acá celebra a "nuevos amigos".

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

DIA DEL AMIGO style: an Argentine Friendship Day celebration (July 20th) with friends at the bar. Sky blue #4FB3E8, sunny yellow #FFC93C, tangerine #FF8A3D, white and navy #1D2B53. Glasses clinking, a big pizza, a round of mate, a guitar, friendship bracelets, instant photos taped together, high-fives and group hugs. Friendly hand-drawn marker lettering and rounded chunky type. Warm, cheerful and inclusive. Do not show any brand, label or logo on drinks or objects.

Mascot (original, identical in every image): "Amigazo", an original round, friendly instant camera with big eyes on the lens, a wide smile, a colorful woven friendship bracelet on its little arm, sneakers, and a photo popping out of the top like a tongue.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A sunny sky blue background with strings of colorful bunting along the top edge, instant photos taped to the side edges, a long bar table with glasses, pizza and a mate along the bottom edge, and a few doodled hearts and stars in the corners.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Bold marker outline, flat cheerful colors with a soft paper texture, like stickers.
- Middle row, decorative side objects: 1) two glasses clinking with no labels, 2) a mate with a thermos, 3) a guitar with a friendship bracelet on the neck, 4) a big pizza with one slice pulled.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: friendship bracelet beads, little stars, tiny instant photos.
- Bottom center, a celebration burst radiating from an empty central circle: A sunny burst of yellow and sky blue rays with high-five hands and stars from the center.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card's high-five misses with a funny swoosh line; the "NO" in marker letters on a yellow sticky note.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: White card with a thick navy marker border, washi tape strips on two corners and a thin sky blue line inside.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Chunky hand-drawn marker lettering in navy with a yellow shadow, on a tangerine washi-tape label.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Instant photo style card with a white border and tape on top; photo ring a woven bracelet ring; separator two hands in a high-five; adornment a small yellow star.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Sky blue pill with a navy border; trail a doodled motion line with stars.
- End-of-round title "¡Qué grupo, eh!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title in marker letters on a sky blue banner with bunting; the cell two instant photos taped together.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Rounded white balloon with a navy marker outline and a little doodle star.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming white bubble with navy text; outgoing tangerine with white text; badge a yellow star sticker "NUEVO"; panel a tall corkboard-like column with tape.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two hands in a pinky promise inside a heart made of a friendship bracelet; chip sky blue with a navy border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Navy band with a thin bunting line; plate a taped-on sign "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating sky blue, sunny yellow, tangerine and white, each with a generic avatar and a short name like "Mesa 3". Rim a woven friendship bracelet ring; hub a pizza seen from above; pointer a pizza slice pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. White instant photo cards; the winner gets a yellow glow, stars and a sticker badge "¡GANADORA!"; bar a woven bracelet fill; countdown ring a round wall clock with doodles.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as an instant photo taped to the wall; label "AHORA SUENA" in marker letters; equalizer bars as stacked colorful beads.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Sunny background with bunting; QR taped in the middle like an instant photo; icons as round stickers.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Amigazo les presentó amigos nuevos!". A burst of high-fives, bunting, confetti and instant photos flying around the two frames.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Chunky marker-outlined buttons; spinner a spinning pizza; the reaction icon of the style a mate.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T18 Bailanta (cumbia y cuarteto)

La bailanta argentina: carteles pintados a mano de colores saturados, luces de colores, parlantes gigantes, palmeras y güira, letras con contorno grueso y brillos. Para noches de cumbia y cuarteto. Se describe la estética sin nombrar grupos, cantantes ni boliches.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

BAILANTA style: an Argentine cumbia and cuarteto dance hall at full party. Saturated and joyful: tropical magenta #FF1F8E, electric yellow #FFE600, parrot green #13C16B, turquoise #00C2D1, orange #FF7A00 and deep night blue #10124A. Hand-painted dance-hall posters with thick outlines and glitter, colorful stage lights, giant speaker stacks, palm trees, a keyboard, a güiro and congas, star bursts and sparkles. Bold italic display lettering with a thick white outline, a dark drop shadow and shine stars. Do not copy any existing band, singer, venue or logo.

Mascot (original, identical in every image): "Güiri", an original güiro (cumbia scraper) with big happy eyes, a wide smile, a colorful printed shirt with palm trees, a little gold chain, dancing legs in white shoes, and holding the scraper stick like a microphone.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A night blue dance hall with colorful stage lights fanning from the top corners, giant speaker stacks along the side edges, palm tree silhouettes in the bottom corners and a dance floor with colored reflections along the bottom edge.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Thick black and white double outline, saturated flat colors with glitter shine stars, like a hand-painted poster.
- Middle row, decorative side objects: 1) a giant speaker stack, 2) a keyboard on a stand, 3) a pair of congas, 4) a palm tree with a disco ball hanging from it.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: shine stars, palm leaves, music notes.
- Bottom center, a celebration burst radiating from an empty central circle: Saturated rays in magenta, yellow and turquoise from the center with shine stars and music notes.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card gets a speaker that blows a fuse with a puff of smoke; the "NO" in bold italic letters with a thick white outline.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Night blue card with a thick magenta and white double border, shine stars in two corners and a thin yellow line inside.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Bold italic poster lettering in yellow with a thick white outline and a magenta drop shadow, on a turquoise banner.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: White card with a magenta border and a yellow shadow; photo ring a ring of colorful stage lights; separator a magenta heart with shine stars; adornment a small gold crown.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Yellow pill with a magenta border; trail colorful light streaks.
- End-of-round title "¡Se armó la bailanta!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title in bold italic poster letters with shine stars; the cell a small poster card.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Bold rounded balloon with a thick black outline and a yellow drop shadow.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming white bubble with night blue text; outgoing magenta with white text; badge a yellow star "NUEVO"; panel a tall night blue column with colored light edges.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two congas with a magenta heart made of shine stars between them; chip night blue with a magenta border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Night blue band with a thin line of colorful bulbs; plate a hand-painted poster plate "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating magenta, electric yellow, parrot green and turquoise, each with a generic avatar and a short name like "Mesa 3". Rim a ring of colorful stage bulbs; hub a speaker cone; pointer the güiro scraper stick pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. White cards with thick magenta borders; the winner gets shine stars and a yellow starburst "¡GANADORA!"; bar a rainbow light fill; countdown ring a ring of bulbs.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a hand-painted poster with shine stars; label "AHORA SUENA" in bold italic letters; equalizer bars as colorful bulb columns.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Dance hall background with stage lights and palms; QR inside a hand-painted poster frame; icons as round colorful bulbs.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Güiri los hizo bailar juntos!". Stage lights crossing, shine stars and music notes bursting, palm trees swaying on the sides.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Bold buttons with a thick white outline; spinner a spinning speaker cone; the reaction icon of the style a palm tree.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T19 Arcade (maquinitas de 8 bits)

Las maquinitas de los 80 en pixel art: pantalla CRT con líneas de barrido, sprites, marcadores de puntaje, monedas, joystick y "INSERT COIN". La ruleta es una pantalla de juego y el rechazo es "GAME OVER". No copia ningún juego ni personaje.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

ARCADE style: a 1980s video arcade in crisp pixel art. Black screen #000000 with CRT scanlines and a soft glow, bright pixel colors: arcade cyan #00E5FF, arcade yellow #FFE600, red #FF2A2A, green #39FF14, magenta #FF3EDB and white. Pixel sprites, high-score tables, coins, joysticks and buttons, pixel hearts and stars, arcade cabinet side art. Blocky pixel font for all text. Clean pixel grid, no blur except the CRT glow. Do not copy any existing game, character, maze, ghost, plumber, alien invader or logo.

Mascot (original, identical in every image): "Pixi", an original round little pixel creature with a joystick antenna on its head, big pixel eyes, a happy pixel smile, tiny legs and a coin-slot belly, drawn as a clean pixel sprite.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A black CRT screen with faint scanlines, a pixel star field, arcade cabinet silhouettes with glowing screens along the side edges, a pixel city skyline along the bottom edge and a pixel border in the corners.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Clean pixel sprite with a 2-pixel black outline and a soft CRT glow.
- Middle row, decorative side objects: 1) an arcade cabinet, 2) a joystick with two buttons, 3) a stack of arcade coins, 4) a pixel high-score board with blank names.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: pixel stars, pixel hearts, pixel coins.
- Bottom center, a celebration burst radiating from an empty central circle: Pixel explosion of stars and coins from the center with a "+1000" pop.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card turns into pixels and falls apart; the "NO" in big red blocky pixel letters with "GAME OVER" small below.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Black card with a pixel border in cyan, pixel corner pieces and faint scanlines inside.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Blocky pixel lettering in yellow with a red pixel shadow, on a black plate with a cyan pixel border.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Black card with a pixel border; photo ring a pixel ring; separator a pixel heart; adornment a small pixel crown.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Black pill with a magenta pixel border; trail a pixel speed trail.
- End-of-round title "GAME OVER · ¡Gracias por jugar!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title in big pixel letters with a blinking "PRESS START" feeling; the cell a pixel high-score row.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Pixel speech balloon with a 2-pixel black border, white inside, pixel text.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming white pixel bubble with black text; outgoing cyan pixel bubble with black text; badge a yellow pixel "NUEVO"; panel a tall black column like a game log.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two pixel sprites with a pixel heart popping above them and "+1UP"; chip black with a pixel border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Black band with a pixel dotted line; plate a pixel marquee "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating cyan, yellow, magenta and green in flat pixel colors, each with a generic avatar and a short name like "Mesa 3". Rim a pixel ring with blinking pixel lights; hub a pixel coin; pointer a pixel arrow pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Black cards with pixel borders; the winner gets a blinking pixel frame and a pixel trophy badge "¡GANADORA!"; bar a pixel health bar; countdown ring a pixel timer.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a CRT screen with scanlines; label "AHORA SUENA" in pixel letters; equalizer bars as pixel blocks.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Arcade background with cabinets; QR on the screen of an arcade cabinet; icons as round pixel buttons.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡PLAYER 1 + PLAYER 2!". A pixel explosion of hearts, stars and coins, "+1UP" pops and a blinking pixel border.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Pixel buttons with a pressed state; spinner a spinning pixel coin; the reaction icon of the style a joystick.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T20 Hinchada (noche de partido)

Fútbol para noches de partido, del lado de la tribuna: banderas, papelitos, bombos, bengalas de humo de colores, la red del arco, la pelota y la pizarra táctica. Usa celeste y blanco de selección sin escudos ni camisetas de clubes reales, para que sirva para cualquier partido.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

HINCHADA style: football match night at the bar, from the stands. Sky blue #6CACE4, white, gold #F2C94C, grass green #2E8B3A, night navy #0C1B33. Waving flags and long banners, shredded paper confetti raining from the stands, big drums, colored smoke, stadium floodlights, the goal net, a classic ball, a tactics chalkboard and a scoreboard. Bold condensed sports lettering with an outline and a slanted shadow. No real club, crest, kit, sponsor, league, tournament or player.

Mascot (original, identical in every image): "Bombito", an original round football with big happy eyes and a wide grin, a sky blue and white striped scarf, a little gold star on the forehead, gloves and boots, and drum sticks in its hands.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A night stadium seen from the stands: floodlights glowing in the top corners, a crowd silhouette with waving flags and long sky blue and white banners along the bottom edge, shredded paper confetti falling near the edges, the pitch a calm green glow in the center.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Bold outline, flat colors with a slight sports-poster shine and motion lines.
- Middle row, decorative side objects: 1) a big drum with sticks, 2) a waving sky blue and white flag, 3) a tactics chalkboard with Xs and Os, 4) a scoreboard with blank teams.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: shredded paper strips in sky blue and white, small stars, mini balls.
- Bottom center, a celebration burst radiating from an empty central circle: A goal celebration: the ball hitting the net with sky blue and white rays and paper confetti.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The ball hits the post with a "¡UH!" shake; the "NO" in bold sports letters on a red card held up.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Navy card with a sky blue and white striped border, a goal net pattern in two corners and a thin gold line inside.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Bold condensed sports lettering in white with a sky blue outline and a slanted navy shadow, on a gold banner.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: White card with a sky blue stripe edge; photo ring a ring like a ball's seams; separator a heart made of a striped scarf; adornment a small gold trophy.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Sky blue pill with a white stripe; trail a ball's motion lines.
- End-of-round title "¡Final del partido!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title on a scoreboard with floodlights; the cell a small sticker card like a collectible.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Rounded white balloon with a navy outline, like a chant shout.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming white bubble with navy text; outgoing sky blue with white text; badge a gold star "NUEVO"; panel a tall navy column with stripes on the edge.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two scarves tied into a heart above a ball; chip navy with a sky blue border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Navy band with a thin sky blue and white stripe; plate a scoreboard plate "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating sky blue and white with thin gold lines, each with a generic avatar and a short name like "Mesa 3". Rim a ring like stadium lights; hub a ball; pointer a referee whistle pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. White cards with sky blue borders; the winner gets paper confetti and a gold trophy badge "¡GANADORA!"; bar a grass green fill with pitch lines; countdown ring a match clock.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a big stadium screen; label "AHORA SUENA" in sports letters; equalizer bars as crowd flags rising.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Stadium background with floodlights and flags; QR on the big stadium screen; icons as round badges like balls.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Golazo! ¡Bombito unió a estas mesas!". Paper confetti raining, colored smoke, flags waving and the ball in the net between the two photos.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Bold sports buttons; spinner a spinning ball; the reaction icon of the style a ball.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T21 Cervecería (bar cervecero artesanal)

Bar cervecero artesanal: madera, barriles, pizarra escrita con tiza, lúpulo, espuma, chapas de hierro y lamparitas colgantes, en ámbar, cobre y verde. No muestra marcas ni etiquetas de cerveza reales.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

CERVECERIA style: a cozy craft beer bar. Warm wood brown #5A3A22, amber #E39B2B, copper #B8693A, foam cream #FFF3D6, hop green #7FA33A and chalkboard black #1F2421. Wooden barrels and planks, a chalkboard menu with chalk lettering, hops and barley, frothy beer foam, copper brewing kettles, metal signs and hanging Edison bulbs. Chalk hand lettering and bold vintage label type with ribbons. No real beer brand, label or logo.

Mascot (original, identical in every image): "Barrilito", an original small round wooden barrel with copper hoops, big friendly eyes, a big foam mustache, a hop cone on top like a hat, a little apron and short legs.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A wood plank wall with hanging warm Edison bulbs along the top edge, a chalkboard frame on the side edges with chalk doodles of hops and barley, barrels stacked in the bottom corners and a bar counter along the bottom edge.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Warm wood texture, bold outline, cozy amber highlights.
- Middle row, decorative side objects: 1) a stack of three wooden barrels, 2) a copper brewing kettle, 3) a hop cone branch, 4) a hanging Edison bulb.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: hop cones, barley grains, foam bubbles.
- Bottom center, a celebration burst radiating from an empty central circle: A big burst of foam and amber bubbles from the center with hops flying.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card gets a spilled glass with foam dripping; the "NO" in chalk letters on a little chalkboard.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Chalkboard black card with a wooden plank frame, copper corner pieces and chalk doodles in two corners.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Bold vintage label lettering in amber with a cream outline, on a wooden sign with a ribbon.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Foam cream card with a wood edge; photo ring a copper hoop ring; separator a heart made of foam; adornment a small hop crown.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Amber pill with a copper border; trail rising foam bubbles.
- End-of-round title "¡Última ronda!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title in chalk letters on a chalkboard with a ribbon; the cell a round beer coaster with no brand.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Round beer coaster style balloon with a wood brown border, cream inside.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming cream bubble with brown text; outgoing amber with cream text; badge a hop green "NUEVO"; panel a tall chalkboard column with a wooden frame.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two glasses clinking with a foam heart rising between them; chip wood brown with a copper border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Wood band with a thin copper line; plate a metal sign "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating amber and wood brown with a soft barrel texture, each with a generic avatar and a short name like "Mesa 3". Rim a barrel hoop of copper with rivets; hub a beer coaster with no brand; pointer a tap handle pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Cream cards with wood borders; the winner gets a foam glow and a copper badge "¡GANADORA!"; bar an amber fill with bubbles; countdown ring a round wooden clock.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed on a chalkboard with chalk doodles; label "AHORA SUENA" in chalk letters; equalizer bars as stacks of coasters.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Wood wall background with hanging bulbs; QR drawn inside a chalkboard menu; icons as round coasters.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Barrilito les sirvió una ronda juntos!". Foam bursting, glasses clinking, hops and bubbles flying, warm bulbs glowing.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Wooden buttons with copper edges; spinner a spinning coaster; the reaction icon of the style a glass of beer.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T22 Fanzine (bar de rock)

Un fanzine de rock fotocopiado: recortes, cinta adhesiva, tachas, flyers pegados, letras de nota de rescate, cuero y púas de guitarra, en negro, blanco y un rojo fuerte. No nombra bandas ni usa logos de bandas.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

FANZINE style: a photocopied rock fanzine and gig flyer wall. Photocopy black #111111 and paper white #F2F0EA with a single strong red #E5202E and a touch of safety yellow #FFD400. Torn paper, duct tape, staples, cut-out ransom-note letters, halftone photocopy grain, safety pins, studs and spikes, leather textures, guitar picks, amplifiers and cables. Rough stencil and ransom-note lettering. Loud and raw but friendly. No real band names, band logos or album covers.

Mascot (original, identical in every image): "Púa", an original guitar pick with big friendly eyes, a cheeky grin, a studded leather jacket, a spiky red hair crest and black boots, doing the rock hand sign.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A wall of torn photocopied flyers and duct tape in black and white with red accents near the edges and corners, an amplifier and guitar cables along the bottom edge, the center a calm gray paper.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Rough black ink outline, photocopy halftone grain, red spot color, like a cut-out pasted with tape.
- Middle row, decorative side objects: 1) a guitar amplifier, 2) an electric guitar with a cable, 3) a studded leather jacket on a hanger, 4) a roll of duct tape with safety pins.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: guitar picks, torn paper bits, small lightning bolts.
- Bottom center, a celebration burst radiating from an empty central circle: A red and black burst of lightning bolts and torn paper from the center.
- Bottom right, a rejection effect over an empty card plus a "NO" label: The card gets torn in half and taped back badly; the "NO" in ransom-note letters on red tape.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Paper white card with a rough black photocopy border, duct tape on two corners and staples.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Ransom-note cut-out lettering in black and red on a strip of duct tape.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Photocopied paper card with a torn edge and tape; photo ring a studded ring; separator a red heart with a lightning bolt; adornment a small safety pin crown.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Black pill with a red border; trail a streak of torn paper.
- End-of-round title "¡Fin del show!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title as a gig flyer headline with tape; the cell a small torn ticket stub.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Rough hand-drawn balloon with a thick black outline and photocopy grain.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming white paper bubble with black text; outgoing red with white text; badge a yellow tape "NUEVO"; panel a tall wall of flyers column.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two guitar picks forming a red heart with a lightning bolt; chip black with a red border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Black band with a thin red tape line; plate a stencil plate "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating black and red with photocopy grain, each with a generic avatar and a short name like "Mesa 3". Rim a studded leather ring; hub a speaker cone; pointer a guitar pick pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Photocopied paper cards with rough borders; the winner gets a red marker circle and a stencil badge "¡GANADORA!"; bar a red tape fill; countdown ring an amplifier knob.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed as a taped gig flyer; label "AHORA SUENA" in stencil letters; equalizer bars as stacked amplifier lights.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Wall of flyers background; QR taped like a gig flyer; icons as round guitar picks.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Púa los juntó en primera fila!". Lightning bolts, torn paper and guitar picks flying, a red burst behind the two photos.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Taped paper buttons; spinner a spinning guitar pick; the reaction icon of the style a lightning bolt.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
```

### T23 Tiki (bar de playa)

Bar tiki de playa: bambú, antorchas, hojas de palmera, tragos con sombrillita, flores de hibisco, atardecer y olas, en turquesa, coral y verde. Pensada para terrazas y verano. Las tallas son tazas de cerámica inventadas y alegres, sin imitar ídolos ni símbolos religiosos de ninguna cultura.

```
You are the art director for "Fonomusic", an entertainment screen shown on a big TV or projector in a bar (1920x1080). Guests play from their phones: a prize wheel that picks tables or people and forms pairs, song voting, chat between tables and matches. I need the complete art kit for ONE style.

TIKI style: a cheerful beach tiki bar at sunset. Sunset coral #FF6B5B, mango #FFB238, lagoon turquoise #1FC2C2, palm green #2E9E5B, bamboo tan #D9B26F and deep evening teal #0E3B43. Bamboo poles and thatch, palm leaves, hibiscus flowers, tiki torches, tropical drinks with little umbrellas and fruit, playful ceramic tiki mugs, a sunset over the sea and waves. Chunky bamboo-style lettering and rounded beach type. Do not imitate any real religious idol or cultural symbol, and no brands or logos.

Mascot (original, identical in every image): "Coquito", an original round coconut with big happy eyes, a wide smile, a hibiscus flower behind the ear, a little straw sticking out like a hair tuft, a flower necklace and flip-flops.

Generate 8 separate images, in this order, each one complete and on its own. If you can only make one image per reply, make IMAGE 1 now and make the next one each time I write "siguiente".

IMAGE 1 — Scene background. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail (game cards go on top); decoration near the edges and corners. Look: A sunset over the sea with the sun low in the center bottom (soft and calm), bamboo poles with thatch along the top edge, palm leaves in the top corners, tiki torches on the side edges and a sandy bar along the bottom edge.

IMAGE 2 — Characters and effects sheet. 16:9, on flat solid green #00FF00.
- Top row: the mascot four times at the same size, labeled "reposo" (idle), "festeja" (jumping, arms up), "decepcion" (slumped, sad but cute), "señala" (pointing right, excited). Bold outline, flat tropical colors with a warm sunset light and a soft sheen.
- Middle row, decorative side objects: 1) a playful ceramic tiki mug with a straw, 2) a lit tiki torch, 3) a tropical drink with an umbrella and fruit, 4) a ukulele with a hibiscus.
- Bottom left, confetti, five variants of each shape, single flat colors. Shapes: hibiscus flowers, palm leaves, little umbrellas.
- Bottom center, a celebration burst radiating from an empty central circle: A tropical burst of coral and mango sun rays with flowers and palm leaves from the center.
- Bottom right, a rejection effect over an empty card plus a "NO" label: A wave washes the card away with a splash; the "NO" in bamboo letters on a broken surfboard.

IMAGE 3 — Interface kit A. 16:9, on flat solid green #00FF00. Empty containers with decoration only on borders and corners, so they can be stretched (9-slice).
- Main game card frame, a wide rectangle with a flat interior: Evening teal card with a bamboo border, palm leaves in two corners and a thin mango line inside.
- Five game title labels with the same base shape: "¡A GIRAR!", "¡VOTÁ!", "CHAT", "¡MATCH!" and one empty. Chunky bamboo lettering in mango with a teal outline, on a carved wooden plank sign.
- Participant card with a 160 px round photo ring on top and a name bar ("Lucía"), plus the ring alone, a pair separator icon and a small adornment for the chosen one: Bamboo tan card with a coral edge; photo ring a flower necklace ring; separator a hibiscus heart; adornment a small flower crown.
- Small pair pill about 44 px tall with two tiny avatar slots ("Lucía + Martín") and a motion trail: Turquoise pill with a bamboo border; trail a little wave.
- End-of-round title "¡Se puso el sol!" with the subtitle "Parejas de la noche" and one small grid cell with two avatars ("Ana", "Juan"): The title in bamboo letters over a sunset; the cell a small surfboard-shaped card.

IMAGE 4 — Interface kit B. 16:9, on flat solid green #00FF00. Stretchable containers.
- Dedication speech balloon, empty body plus separate tail (left and right), and one example "Para Caro, ¡feliz cumple!": Rounded balloon shaped like a cloud with a teal outline, cream inside.
- Chat between tables: incoming bubble (tail left) and outgoing bubble (tail right), each with a 48 px round avatar, author "Mesa 4", text "¿Bailamos?" and time "23:41"; a 48 px avatar ring alone; a "NUEVO" badge; a tall chat column background. Incoming cream bubble with teal text; outgoing coral with white text; badge a mango sun "NUEVO"; panel a tall bamboo column with leaves.
- Match: a 64 px top chip with two round avatar slots joined by the match icon, the icon alone, and two avatars coming together: Two coconuts with straws toasting with a hibiscus heart; chip teal with a bamboo border.
- A subtle top strip (1920x86 proportion) and a logo plate with the fictional text "BAR LUNA": Teal band with a thin bamboo line; plate a carved wooden plank "BAR LUNA".

IMAGE 5 — Wheel, voting and now playing. 16:9, on flat solid green #00FF00.
- Left: prize wheel parts, perfectly circular, front view: outer rim with empty center, center hub, pointer at the top pointing down, small photo ring for each segment, and one assembled wheel with 8 segments alternating coral, mango, turquoise and palm green, each with a generic avatar and a short name like "Mesa 3". Rim a bamboo ring with small flowers; hub a coconut seen from above; pointer a drink umbrella pointing down.
- Center: song voting: an option card with an invented square album cover and the title "Noche de Verano" in normal state, the same card in winner state (bigger, stronger border), a winner badge, a vote bar empty and 60% filled, a countdown ring. Cream cards with bamboo borders; the winner gets a sunset glow, flowers and a sun badge "¡GANADORA!"; bar a turquoise wave fill; countdown ring a sun dial.
- Right: now playing: a frame for a square album cover with an invented cover, the label "AHORA SUENA", a small balloon "Dedicado a la Mesa 12", equalizer bars. Cover framed by bamboo with palm leaves; label "AHORA SUENA" in bamboo letters; equalizer bars as stacked tiki mugs.

IMAGE 6 — Welcome and QR onboarding screen, a full 16:9 screen mockup in context (this is what the TV shows while nothing is playing). The fictional bar name "BAR LUNA" on a plate; the logo "FONOMUSIC"; a big card with an empty white square for the QR code on the left, the caption "¡Escaneá y jugá desde tu celular!" next to it, the headline "¡Jugá con tu mesa!" on the right and three round icons with the labels "Votá", "Canciones" and "Conectá". The mascot in pose "señala" pointing at the QR. Leave the QR square plain white with no code inside. Sunset beach background with torches; QR on a carved wooden sign; icons as round hibiscus flowers.

IMAGE 7 — "¡HAY PAREJA!" celebration overlay, a full 16:9 screen mockup in context that takes over the screen for 7 seconds when two tables match. Big title "¡HAY PAREJA!"; two big round photo frames with generic illustrated avatars and the name plates "Mesa 4" and "Mesa 8"; the style's match icon between them with a celebration burst; confetti; the mascot in pose "festeja"; a ribbon at the bottom with the text "¡Coquito les pidió dos tragos!". A tropical burst of flowers and leaves, torches glowing, drinks toasting between the two photos.

IMAGE 8 — Phone app states sheet, on flat solid green #00FF00 (these go in the guests' phone app). A pill button "¡A JUGAR!" in four states labeled "normal", "presionado", "deshabilitado" (gray) and "cargando" (with a small spinner); a loading indicator with the label "Espera..."; the mascot dizzy as a loading animation; an empty-state card with the mascot sleeping and the text "Sin mensajes. ¡Enviá el primero!"; four quick chat reaction buttons (heart, star, laughing face and one icon of the style). Bamboo buttons; spinner a spinning coconut; the reaction icon of the style a hibiscus flower.

Rules for all eight images: no third-party characters, logos, monograms or brands, and no imitation of any existing logo, pattern or character; no photos of real people (participants are generic illustrated avatars in circles); invented album covers only; everyone fully clothed and nothing suggestive; high contrast, readable on a TV from 10 meters; no lines thinner than 4 px; on the green sheets, pieces well separated with empty green space around them and nothing touching the image edges; the green must be flat with no shadows; same style, palette and mascot in all eight images; no extra text except the one requested.
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
