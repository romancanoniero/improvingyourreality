# Nocturna: revisión de las imágenes de Gemini

Imágenes de 1376×768 en JPG. Sirven como referencia de diseño; las piezas finales se redibujan en SVG a partir de ellas.

| Imagen | Contenido | Veredicto | Observaciones |
|---|---|---|---|
| `nocturna-H1.jpg` | Fondo de escena | APROBADO | Trae líneas de neón propias en el borde. La tarjeta del juego queda adentro sin chocar; la línea cian derecha pasa por detrás del chat, con baja opacidad no molesta. |
| `nocturna-H2.jpg` | Mascota Voltio en 4 poses, objetos, confeti, impacto, rechazo | APROBADO | Poses coherentes entre sí y con el pedido. El rótulo "DECEPCION" sale repetido, pero los rótulos se recortan. Hay 3 formas de confeti en lugar de 5 variantes de cada una; las variantes las genero en código. |
| H3 | Kit A: marco, títulos, ficha del elegido, píldora de pareja, cierre | FALTA | No llegó. |
| `nocturna-H4.jpg` | Kit B: globo, chat, match, franja y logo | CORREGIBLE | El ícono de match se lee como "S2" o "Ω2", no como un corazón. El resto está bien. |
| `nocturna-H5.jpg` | Ruleta, votación, "Ahora suena" | APROBADO | El anillo de foto de la ruleta (pieza 4) sale gris metálico en vez de neón; lo hago en neón al redibujarlo. Los nombres de la rueda salen espejados, pero en pantalla los escribe el código. |
| `nocturna-L1.jpg` | Lámina de la ruleta con pareja formada | APROBADO como referencia de clima | "¡GIRA LA RULETA!" y "MESA VS MESA" son textos inventados que no se usan. En la pantalla real la ruleta va centrada y la pareja aparece en el centro cuando la rueda para. |

## Decisión técnica

El brillo del neón sobre fondo verde no se puede recortar limpio: el halo semitransparente queda teñido de verde. Por eso:

- el fondo (H1) se usa tal cual, escalado a 1920×1080;
- la mascota, los objetos y todas las piezas de interfaz se redibujan en SVG con trazos de neón, tomando estas imágenes como modelo. Quedan nítidas también en 4K.

## Correcciones para pedirle a Gemini

En el mismo chat de Nocturna:

**Ícono de match (H4):**

```
Same image 4, but replace the match icon, both inside the chip and alone, with a clear heart shape made of two neon tubes: the left half hot pink #FF3D8B and the right half cyan #22E0E6, touching at the bottom tip. It must read clearly as a heart, not as letters or numbers. Keep everything else identical.
```

**Kit A (H3), que falta:**

```
Now make IMAGE 3 — Interface kit A, exactly as described in my first message: the main game card frame, the five game title labels ("RULETA", "VOTACIÓN", "MENSAJE", "MATCH" and one empty), the participant card with photo ring, pair separator and adornment, the small pair pill with its motion trail, and the end-of-round title "PAREJAS DE LA NOCHE" with one grid cell. Same NOCTURNA style, flat solid green #00FF00 background.
```
