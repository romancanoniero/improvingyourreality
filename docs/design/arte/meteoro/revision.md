# Meteoro: revisión de las imágenes de Gemini

Imágenes de 1376×768 en JPG. Sirven como referencia de diseño; las piezas finales se redibujan en SVG, CSS y canvas a partir de ellas.

| Imagen | Contenido | Veredicto | Observaciones |
|---|---|---|---|
| `meteoro-H1.jpg` | Fondo de escena | FALTA | Mientras tanto la pantalla usa un fondo generado por código con lo que pide el prompt: asfalto, bandas a cuadros arriba y abajo, cordones rojos y blancos a los costados y estelas de velocidad suaves (`fonomusic/pantalla/arte/meteoro/fondo.webp`). |
| `meteoro-H2.jpg` | Mascota Turbo en 4 poses, objetos, confeti, ráfaga, rechazo | APROBADO | Poses coherentes entre sí. Los rótulos de las poses no se usan. El semáforo de largada no se usa todavía: no hay un momento de cuenta regresiva que lo pida. |
| `meteoro-H3.jpg` | Kit A: marco, títulos, ficha, píldora de pareja, cierre | APROBADO | Títulos "GO!", "GRID", "RADIO" y "FINISH" en placas rojas inclinadas con sombra amarilla. El cierre "FINISH" con "Parejas de la noche" se adopta tal cual. |
| `meteoro-H4.jpg` | Kit B: dedicatoria, chat, match, franja y logo | APROBADO | El chip de match lleva dos cascos cruzando la meta; en pantalla se simplifica a dos banderas a cuadros cruzadas, que se leen mejor a 44 px. "BAR LUNA" es texto de ejemplo. |
| `meteoro-H5.jpg` | Ruleta, votación, "Ahora suena" | APROBADO | La ruleta sale con los nombres bien escritos. La insignia del ganador dice "winner ¡GANADOR!"; en pantalla queda sólo "¡GANADOR!". |

## Lo aplicado en la pantalla

- Turbo redibujado en SVG en las 4 poses, a partir de H2.
- Títulos en placas rojas inclinadas -12° con borde blanco y sombra amarilla (H3). En el cierre, la bandera de llegada "FINISH" con "Parejas de la noche".
- Ficha del elegido negra con borde blanco y contorno rojo, nombre en amarillo, foto en aro de neumático, cruz a cuadros entre la pareja y laurel dorado arriba (H3).
- Píldora de pareja negra con remate a cuadros y estela roja y amarilla (H3).
- Ruleta como neumático con dibujo y anillo amarillo, tapa cromada con espiral roja y amarilla y puntero rojo con punta a cuadros (H5).
- Ráfaga de rayos rojos y amarillos con fragmentos a cuadros (H2).
- Rechazo: humo de neumático, bandera negra y placa "NO" (H2).
- Votación: tarjetas negras con borde blanco; la ganadora con aro amarillo y la insignia "¡GANADOR!" (H5).
- Chat: entrante blanco con contorno rojo, saliente rojo con texto blanco, avatares en aro de neumático (H4).
- Match: chip negro con borde blanco y contorno rojo (H4).
- "Ahora suena": portada dentro de un velocímetro, placa roja "AHORA SUENA", dedicatoria en globo con borde amarillo y ecualizador de LED verde, amarillo y rojo (H5).
- Objetos de los costados: bloque de rayas de velocidad, bandera a cuadros flameando y "GO!" amarillo (H2).
- Tipografía: Barlow Condensed 800 itálica.

## Para pedirle a Gemini

En el mismo chat de Meteoro, para que mantenga el estilo:

**H1, fondo:**

```
Now make IMAGE 1 — Scene background, exactly as described in my first message. 16:9, full screen, background only: no text, no UI, no characters. Keep the central 78% calm and low-detail. Same METEORO style.
```

## Pantallas extra (`meteoro-extra.jpg`)

- **Bienvenida con QR (arriba):** aplicada. El QR va dentro de un neumático, la tarjeta lleva esquinas a cuadros y Turbo se ubica a la izquierda señalando el QR.
- **"¡Hay pareja!" (abajo):** aplicada. Fotos en neumáticos, placas amarillas "MESA X", banderas a cuadros cruzadas con rayos rojos y amarillos, estelas de velocidad, confeti y la cinta "¡Turbo ha unido a estas mesas!", con Turbo festejando a la izquierda. Dura 7 s y después queda el chip del match.
- **Estados de interacción (centro):** botones "¡A jugar!" (normal, presionado, deshabilitado, cargando), la espera con el velocímetro, el estado vacío "Sin mensajes" y las reacciones rápidas son de la app del invitado (celular), que no está en este repositorio.
