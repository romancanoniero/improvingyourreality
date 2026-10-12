# Kirameki — revisión de las hojas de Gemini

## Qué llegó

| Hoja | Contenido | Uso |
|------|-----------|-----|
| H1 | Fondo (atardecer violeta con nubes y ciudad) | Se usa tal cual, redimensionado a 1920×1080 en `fonomusic/pantalla/arte/kirameki/fondo.webp` |
| H2 | Mascota Kira (zorrito chibi) y efectos | Kira se redibujó en SVG (`svgKira`) con las 4 poses: reposo, festeja, decepción, señala |
| H3 | Kit A (marcos, carteles, botones) | Se pasó a CSS: carteles amarillos con borde magenta, marcos con borde arcoíris, destellos |
| H4 | Kit B (ruleta, aros de foto, efectos) | Ruleta arcoíris con estrellas, centro de estrella dorada y puntero de corazón (`decorarRuedaKira`); aros de foto arcoíris |
| H6 | Bienvenida | Círculo mágico detrás del QR; Kira abajo a la derecha para no tapar la leyenda |
| H7 | ¡Hay pareja! | Líneas de velocidad, estallido, hilo rojo del destino, corazón; Kira a la izquierda |

## Qué falta

- **H5** (pantallas de juegos) y **H8**: no llegaron. Los juegos usan el kit general de la piel.

## Decisiones

- El ofuda con kanji inventados de H2 no se usó: el texto era ilegible o no tenía sentido.
- Todo menos el fondo está dibujado en código (SVG, canvas y CSS), así que se escala bien en cualquier pantalla.
- Rechazo: "¡NO!" de hielo. Match: rótulo "¡KYA!" y partículas de estrellas y corazones.
- Sonidos propios: `kira-exito` (arpegio brillante) y `kira-decepcion` (descenso suave).
