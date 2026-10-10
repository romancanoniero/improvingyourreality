# Manga: revisión de las imágenes de Gemini

Imágenes de 1376×768 en JPG. Sirven como referencia de diseño; las piezas finales se redibujan en SVG y CSS a partir de ellas.

| Imagen | Contenido | Veredicto | Observaciones |
|---|---|---|---|
| `manga-H1.jpg` | Fondo de escena | FALTA | Mientras tanto la pantalla usa un fondo generado por código con lo que pide el prompt: papel crema, trama en las esquinas, líneas de velocidad suaves, mancha roja y marco de viñeta (`fonomusic/pantalla/arte/manga/fondo.webp`). |
| `manga-H2.jpg` | Mascota Sumi en 4 poses, objetos, confeti, impacto, rechazo | APROBADO | Poses coherentes entre sí. Sumi sale blanca con trama en vez de gota negra, y queda mejor: se lee sobre el papel. Los sellos del confeti traen kanji inventados; en pantalla el confeti lo genera el código. |
| `manga-H3.jpg` | Kit A: marco, títulos, ficha del elegido, píldora de pareja, cierre | APROBADO | Los títulos salen en castellano ("RULETA", "VOTACIÓN", "MENSAJE", "MATCH") en lugar de japonés; se adopta así porque se leen mejor en el bar. El cierre dice "FIN" en lugar de "完"; también se adopta. La estela de la píldora sale verde, igual que el fondo: se redibuja en tinta negra. |
| `manga-L2.jpg` | Lámina de la pantalla "Ahora suena" completa | APROBADO como referencia | De acá salen el sello "AHORA SUENA", la funda con disco, el globo de dedicatoria, el chat en globos de manga y el ecualizador en pinceladas. "BAR LUNA", "MENSAJES" y "CHAT EN VIVO" son textos de ejemplo que no se usan. |
| `manga-H4.jpg` | Kit B: globo, chat, match, franja y logo | FALTA | En el lote llegó la H4 de Nocturna repetida. El chat y la dedicatoria se resolvieron con la L2. |
| `manga-H5.jpg` | Ruleta, votación, "Ahora suena" | FALTA | En el lote llegó la H3 de Nocturna repetida. La ruleta, el sello "勝" del ganador y las tarjetas de votación se dibujaron según el texto del prompt. |

## Lo aplicado en la pantalla

- Sumi redibujada en SVG en las 4 poses, a partir de H2.
- Sellos hanko redondos con banda crema y el nombre del juego en castellano (H3).
- Ficha del elegido, píldora de pareja, corazón de tinta y corona (H3).
- Rueda en tinta: aro negro con marcas rojas, centro como sello rojo, puntero de pincel con punta roja.
- Ráfaga de H2: aros rojos y líneas de concentración, compacta detrás de la pareja.
- Rechazo: tachado rojo y sello "NO".
- Votación: tarjetas crema con borde de tinta; la ganadora con borde y sombra roja y el sello "勝".
- Chat y match: globos blancos y crema con borde de tinta y sombra dura (L2).
- "Ahora suena": papel detrás de la portada, sello, funda con disco, dedicatoria en globo y ecualizador en pinceladas (L2).

## Para pedirle a Gemini

En el mismo chat de Manga, para que mantenga a Sumi y el estilo:

**H1, fondo:**

```
Now make IMAGE 1 — Scene background, exactly as described in my first message. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail. Same MANGA style.
```

**H4, kit B:**

```
Now make IMAGE 4 — Interface kit B, exactly as described in my first message: the dedication fukidashi with separate tails, the incoming and outgoing chat bubbles with avatars, the "NUEVO" badge and chat column, the match chip and icon, the top strip and the "BAR LUNA" logo plate. Same MANGA style and the same mascot, flat solid green #00FF00 background.
```

**H5, ruleta, votación y "Ahora suena":**

```
Now make IMAGE 5 — Wheel, voting and now playing, exactly as described in my first message. Same MANGA style, flat solid green #00FF00 background. Write the names on the wheel normally, not mirrored.
```

## Pantallas extra (`manga-extra.jpg`)

- **Bienvenida con QR (arriba):** aplicada. Placa "BAR LUNA" arriba a la izquierda con sello 楽, logo sobre un globo de explosión, tarjeta de papel inclinada, texto a mano con flecha sobre el QR, Sumi dentro de la tarjeta señalando el QR, y Votá / Canciones / Conectá como sellos rojos con la palabra adentro. El sello "MENSAJES" bajo el logo no se aplicó: en las otras pieles ese lugar es el nombre del bar y no tiene función en la pantalla.
- **"¡Hay pareja!" (derecha):** aplicada. Líneas de concentración negras y rojas, título en globo de explosión, fotos con aro rojo, placas "MESA X", corazón rojo con rayos amarillos, papelitos, estrellas y pétalos, y Sumi festejando abajo al centro. La cinta dice "¡Sumi ha unido a estas mesas!", porque la frase de la hoja ("¡Se ha unido a estas mesas!") no tiene sujeto. Dura 7 s y después queda el chip del match.
- **Estados de interacción (centro):** botón "¡A jugar!" (normal, presionado, deshabilitado, cargando), engranaje girando, Sumi mareado y decepcionado, estado vacío "Sin mensajes" y reacciones (corazón, estrella, ドン): son de la app del invitado (celular), que no está en este repositorio.
