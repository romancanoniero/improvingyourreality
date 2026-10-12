# Cielo: revisión de las hojas

En el código la piel sigue llamándose `doraemon` (así queda guardada en las pantallas y en `?piel=doraemon`); en el selector aparece como **Cielo**.

## Qué llegó

| Archivo | Contenido | Estado |
| --- | --- | --- |
| `cielo-H2-mascota.jpg` | Nubi en 4 poses, nube, hélice, estrellas, cometa, confeti, festejo y rechazo | Aplicada |
| `cielo-H3a-kit.jpg` | Kit A: marco con nubes, etiquetas VOTA / MESA / CHAT / PAREJA, tarjeta de participante, anillo de foto, separador de pareja, corona del elegido, píldora de pareja, banner "¡Listo! Parejas de la noche" y celda | Aplicada |
| `cielo-H3b-kit.jpg` | Kit B: globo de dedicatoria, chat entrante y saliente, anillo de avatar, chip de match, franja superior y placa del logo | Aplicada |
| `cielo-H4-juegos.jpg` | Ruleta, votación (carta normal y ganadora, barras, medalla, cuenta regresiva) y "Ahora suena" | Aplicada |
| `cielo-pareja.jpg` | Pantalla "¡Hay pareja!" | Aplicada |
| `cielo-estados.jpg` | Botones, carga, estado vacío y reacciones | App del invitado |

Falta la H1 (fondo de pantalla completa). Hasta que llegue, `fonomusic/pantalla/arte/cielo/fondo.webp` es un cielo generado por código, con nubes con borde amarillo y destellos.

## Cómo quedó en la pantalla

- **Nubi** (SVG, 4 poses): koala gris con gorro de hélice que gira, collar rojo y cascabel. Reposo, festeja (brazos arriba), decepción (sentado, con lágrimas) y señala.
- **Ruleta:** sectores azules y blancos, aro azul y aro blanco con remaches dorados, nubes en el borde, campana dorada en el centro y gota roja como puntero. Las fotos llevan un anillo blanco con borde azul marino.
- **Etiquetas:** píldoras amarillas con base roja: "Mesa" (ruleta), "Vota", "Chat" y "Pareja". El cierre es "¡Listo!" con campanas y "Parejas de la noche".
- **Ficha y pareja:** tarjeta blanca con borde azul marino y sombra amarilla, corona con cascabeles sobre la pareja elegida y corazón sobre una nube entre las dos fotos. En la tira, píldora blanca.
- **Rechazo:** la ficha pasa a gris, con una nube de lluvia triste y "NO" en una nube gris.
- **Votación:** cartas blancas; la ganadora tiene borde dorado con brillo, la etiqueta "¡GANADORA!" y una estrella.
- **Chat:** globos redondos, blanco el entrante y azul el saliente, con la mesa en una etiqueta roja.
- **Chip de match:** píldora blanca con los dos avatares y el corazón en la nube.
- **Ahora suena:** portada en un marco con nubes abajo y hélice arriba, etiqueta amarilla, dedicatoria en un globo y ecualizador de barras redondas azules y amarillas.
- **Efectos:** ráfaga de rayos amarillos con estrellas y nubes al elegir; cometa y nubes flotando en ruleta y votación.
- **"¡Hay pareja!":** cinta roja con letras amarillas y campanas, panel blanco con borde azul y nubes en las esquinas, fotos con anillo celeste, placas "Mesa X", corazón rosa con estrellas sobre una nube, confeti de estrellas y cascabeles, Nubi festejando y la cinta "¡Nubi ha unido a estas mesas!" con moños rojos.
- **Bienvenida con QR:** no vino una hoja propia de Cielo; se armó con el kit (logo blanco con borde azul marino, placa del bar, tarjeta con nubes, íconos en píldoras amarillas y Nubi señalando).
- Fuente: Fredoka.
- Con la CPU 6 veces más lenta, la ruleta gira a 26 cuadros por segundo.

## Para la app del invitado (`cielo-estados.jpg`)

Botón "¡A jugar!" en cuatro estados (normal, presionado, deshabilitado y cargando con Nubi), hélice girando y Nubi mareado como animación de carga, estado vacío "Sin mensajes" con Nubi durmiendo en una nube, y reacciones (corazón, estrella, nube riendo y Nubi).

## Pedido para la H1

```
Same CIELO style as the other sheets (flat cartoon, navy #1B3A66 outlines, soft yellow offset shadows). IMAGE 1 — Full-screen background 16:9, 1920×1080, no text, no characters: bright sky gradient from #4EA4DE at the top to #D6EEFB at the bottom, a band of big fluffy white clouds along the bottom edge, two cloud clusters in the top corners, a few small faint clouds and white sparkles in the middle. Keep the center 60% calm and empty so the game cards can sit on top.
```
