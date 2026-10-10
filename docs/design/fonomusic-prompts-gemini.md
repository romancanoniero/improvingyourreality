# Fonomusic: prompts para Gemini

Prompts para generar en Gemini el arte de la pantalla del salón. Los códigos P01–P20 son los del [brief por plantilla](./fonomusic-brief-plantillas.md).

## Cómo usarlos

1. **Un chat nuevo por plantilla.** Así Gemini mantiene el mismo estilo y la misma mascota en todas las imágenes de esa plantilla.
2. **Primero pegá el prompt 0 (ancla de estilo)** de la plantilla. Después pegá, en orden y en el mismo chat, los prompts generales 1 a 8. Los generales son iguales para las cuatro plantillas porque se apoyan en el ancla.
3. **Los prompts están en inglés** porque los modelos de imagen responden con más precisión. Se pueden pegar tal cual.
4. **Formato:** si usás Google AI Studio, elegí la relación de aspecto 16:9 en el panel. En la app de Gemini ya va pedido dentro del prompt.
5. **Fondo para recortar:** Gemini no entrega transparencia. Las piezas sueltas se piden sobre un **fondo verde liso `#00FF00`**, que después se quita en un paso.
6. **Si algo sale mal**, no regeneres todo: respondé en el mismo chat con la corrección, por ejemplo "same image, but make the pointer bigger and remove the text at the bottom".
7. **Aprobación:** primero se aprueban el ancla (prompt 0) y la lámina de la ruleta (prompt 5a). Recién después se generan el resto de las piezas, y ninguna se anima sin tu aprobación.

## Reglas que ya van dentro de cada prompt

- Sin personajes, logos ni marcas de terceros.
- Sin fotos de personas reales: los participantes se dibujan como avatares ilustrados genéricos.
- Legible a 5–10 metros: contraste alto y nada de líneas finas.
- El centro de la pantalla queda limpio para el contenido.

---

## Prompt 0. Ancla de estilo (uno por plantilla)

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

### T4. Cielo (reemplazo original de Doraemon)

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

## Prompts generales (pegar en el mismo chat, después del ancla)

### 1. Fondo de escena (P01)

```
Using the established style, create the full-screen background for the game scene, 16:9, 3840x2160 look. Only background: no text, no UI, no mascot, no people. Keep the central area (about 78% of width and height) calm and low-detail so cards and text sit on top; put the richest decoration near the edges and corners.
```

Variante para el velo que va sobre la portada, el logo o la foto del bar:

```
Now create a 16:9 overlay to place on top of a blurred photo: a gradient vignette in the style's colors, dark/strong at the edges and bottom, mostly clear in the center. No text, no objects.
```

### 2. Hoja de personaje de la mascota (P03)

```
Create a character sheet of the mascot, 16:9, on a flat solid green #00FF00 background, no shadows on the background. Show the mascot four times at the same size, in a row, with a small label under each:
1) "reposo": idle, relaxed, slight smile;
2) "festeja": jumping, arms up, very happy;
3) "decepcion": slumped, sad but cute, not dramatic;
4) "señala": pointing to the right with one arm, excited.
Same design, colors and proportions in all four. Thick clean outlines, readable from far away.
```

Después, una por una, para tener cada pose grande:

```
Now only pose "reposo", large, centered, full body, on flat solid green #00FF00, square 1:1.
```

(repetir cambiando `reposo` por `festeja`, `decepcion` y `señala`).

### 3. Kit de interfaz (P05, P06, P09, P10, P14, P15, P16, P17, P19)

```
Create a UI kit sheet in the established style, 16:9, on a flat solid green #00FF00 background, elements well separated with space between them, no overlaps, no mascot. Show empty containers (no placeholder text except where noted):
1) a large game card frame (wide rectangle) — the main container;
2) the four game title labels with their texts;
3) a participant card with a round photo ring on top and a name bar below;
4) a small pill for a pair: two tiny round photo slots side by side;
5) a song-vote option card with a square cover slot, in two versions: normal, and "winner" (bigger glow/border plus a winner badge);
6) a horizontal vote progress bar, empty and 60% filled;
7) a speech balloon for a dedication, with its tail separate;
8) two chat bubbles: incoming (tail left) and outgoing (tail right), plus a small "NUEVO" badge;
9) a match chip: a pill with two round photo slots joined by the style's match icon;
10) a plate to hold the bar's logo.
Flat front view, crisp edges, consistent line width.
```

### 4. Ruleta (P08)

```
Create the prize wheel parts in the established style, on flat solid green #00FF00, front view, perfectly circular, well separated:
1) the outer ring of the wheel (decorated rim, center empty and transparent-looking);
2) the center hub (decorative, round);
3) the pointer (points down, sits on top of the wheel);
4) a small ring to frame each participant photo on the wheel;
5) a full assembled example wheel with 8 segments alternating the style's two segment colors, with a generic illustrated avatar circle and a short name in each segment.
No mascot.
```

### 5. Láminas de momentos (P08–P17), todas 16:9

Antes de cada lámina, la pantalla tiene siempre la misma estructura: fondo de la plantilla; franja superior fina con el logo de un bar ficticio "BAR LUNA" a la izquierda; contenido centrado; chat a la derecha cuando corresponde.

**5a. Ruleta girando**

```
Create a full 16:9 TV screen mockup in the established style: the "wheel" game in progress. Top strip with a small fictional bar logo "BAR LUNA" on the left. Center: the big game card with the wheel title label on top and the prize wheel spinning (motion blur on the segments), 10 segments with generic illustrated avatar circles and names like "Mesa 3", "Mesa 7". The mascot stands at the bottom left, pose "señala", pointing at the wheel. Light ambient effect from the style. Nothing covers the wheel or the pointer.
```

**5b. Pareja formada**

```
Same screen, next moment: the wheel stopped. Center card shows the formed pair: two big round avatar photos side by side with the style's pair separator between them and the names "Lucía" and "Martín" under them. Celebration impact effect and confetti of the style falling. At the bottom, a strip of small pills with three previously formed pairs. The mascot at the bottom left in pose "festeja".
```

**5c. Votación con ganador**

```
Same style, new screen: song voting result. Center card with the vote title label and the question "¿Qué suena después?". Three option cards in a row, each with an invented album cover illustration (no real artists) and a fictional song title under it, plus a vote bar. The middle option is the winner: bigger, with the winner border and badge; the other two dimmed. Confetti. Mascot at the bottom left in pose "festeja".
```

**5d. Chat destacado con dedicatoria**

```
Same style, new screen: table-to-table messages. On the right side, a tall chat panel with 5 bubbles alternating incoming (left) and outgoing (right), each with a small round avatar, author ("Mesa 4", "Mesa 9"), short friendly Spanish messages and a time; the newest bubble has the "NUEVO" badge. In the center, the game card with the message title label, the route "MESA 4 → MESA 9" and a big dedication balloon: "Para Caro, ¡feliz cumple! 🎂". Mascot at the bottom left in pose "reposo".
```

**5e. Rechazo**

```
Same style, new screen: the wheel picked "Mesa 5" but they declined. Center: the participant card falling away with the style's rejection effect and a "NO" / "PASO" label in the style's lettering. Mascot at the bottom left in pose "decepcion". Keep it playful, not sad.
```

**5f. Cierre de la ronda**

```
Same style, new screen: end of the pairing round. Center card titled in the style's lettering ("Parejas de la noche" or the style's equivalent) with a 4x2 grid of small pair cards, each with two round avatars and names. Light confetti. Mascot in pose "festeja".
```

### 6. Pantalla de reposo "Ahora" (P20)

```
Same style, new 16:9 screen with no game: "now playing". Background: a big blurred version of an invented album cover with the style's overlay gradient. Left: the album cover framed in the style (vinyl / manga panel / speedometer / cloud frame, as fits the style). Right: the label "AHORA SUENA" in the style's lettering, a big fictional song title "Luces de Neón", artist "Los Satélites", and a small dedication balloon "Dedicado a la Mesa 12". Small animated-looking equalizer bars. Fictional bar logo "BAR LUNA" in the top strip. No real artists or covers.
```

### 7. Efectos y confeti (P04, P11, P12)

```
On flat solid green #00FF00, create a sheet with: 1) the celebration impact burst of the style as a flat graphic (center explosion, radial); 2) the rejection effect of the style as a flat graphic; 3) each confetti shape of the style, large, one color each, separated; 4) each decorative object of the style, separated. No text except inside the decorative objects that have it.
```

### 8. Prueba de legibilidad

```
Take the "wheel spinning" screen and the "chat with dedication" screen you made and show them small, side by side, as they would look on a TV seen from 10 meters in a dark bar. Point out anything that becomes unreadable and propose the fix.
```

---

## Qué guardar de cada chat

Descargá cada imagen con este nombre: `<plantilla>-<número de prompt>.png`. Por ejemplo `manga-0.png`, `manga-2-festeja.png`, `meteoro-5c.png`.

Pasame primero el `-0` y el `-5a` de cada plantilla para aprobarlos. Con las imágenes aprobadas, las piezas del kit (prompts 3, 4 y 7) se vectorizan en Recraft y yo hago los recortes, las animaciones y la integración.
