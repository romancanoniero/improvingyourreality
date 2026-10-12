# Trazo — revisión de las hojas de Gemini

Historieta para adultos de los 80: papel crema `#F1E6D2`, tinta `#1C1C1C`, aguadas terracota `#C0563B`, azul humo `#3F5A73` y ocre `#D9A441`. Mascota: el Cronista.

## Qué llegó

Llegaron las 8 hojas; la H4 vino en dos versiones.

| Hoja | Archivo | Uso |
|------|---------|-----|
| H1 | `trazo-H1-fondo.jpg` | Fondo de la pantalla, bienvenida y "¡Hay pareja!" (`fonomusic/pantalla/arte/trazo/fondo.webp`, 1920×1080). El cartel "BAR LUNA" del bar de la derecha se cambió por "CAFÉ", porque cada local tiene otro nombre. |
| H2 | `trazo-H2-mascota.jpg` | El Cronista redibujado en SVG (`svgCronista`) con las 4 poses: reposo (manos en los bolsillos), festeja (salta con papeles volando), decepción (cabeza gacha, suspiro) y señala (libreta en una mano). Credencial "PRESS" en el sombrero y lápiz detrás de la oreja. Del resto de la hoja: máquina de escribir y trompeta como objetos de costado, papelitos de diario, gotas de tinta y aviones de papel como partículas, estallido de tinta con hojas volando, y rechazo con la cruz de lápiz rojo y el sello "RECHAZADO / NO". |
| H3 | `trazo-H3-kit-a.jpg` | Marco de viñeta con doble borde de tinta y recuadro de texto en la esquina; títulos "RULETA", "ENCUESTA", "CORREO" y "FLECHAZO" en recuadro crema con sombra terracota; ficha de papel con otra hoja detrás, aro de foto tramado, corazón atravesado por un lápiz y credencial de prensa para el elegido; píldora con líneas de movimiento; cierre "Última edición · Parejas de la noche" como titular de diario. |
| H4 | `trazo-H4-kit-b.jpg`, `trazo-H4-kit-b-alt.jpg` | Burbujas de chat (entrante blanca, saliente en aguada azul humo), autor en recuadro, chip de match de papel con dos siluetas bajo un paraguas, globo de dedicatoria con aguada ocre. |
| H5 | `trazo-H5-juegos.jpg` | Ruleta con sectores terracota y azul humo en aguada, aro de disco de vinilo, centro de tecla de máquina de escribir con una "F" y puntero de plumín (`decorarRuedaPluma`); votación con cartas de papel, círculo de lápiz rojo y "¡GANADORA!"; reloj de pared en la cuenta regresiva; "Ahora suena" como columna de diario con tapa enmarcada en viñeta y ecualizador tramado. |
| H6 | `trazo-H6-bienvenida.jpg` | QR sobre un papel clavado con chinche en un corcho, nombre del bar como cabecera de diario, el Cronista señalando desde la derecha. |
| H7 | `trazo-H7-pareja.jpg` | Titular "¡HAY PAREJA!" con "PAREJA" en terracota, estallido de tinta con aguada, paraguas en el centro, fotos con doble aro, hojas de diario volando, cinta "¡Exclusiva: estas mesas se unieron!" y el Cronista saltando a la derecha. |
| H8 | `trazo-H8-app.jpg` | Estados de botón, carga, estado vacío y reacciones: son de la app del invitado, no de la pantalla del salón. |

## Decisiones

- Todo menos el fondo está dibujado en código (SVG, canvas y CSS), así que se ve nítido en cualquier pantalla.
- Fuentes: Comic Neue para la rotulación de historieta y Playfair Display para los titulares de diario.
- Frases de "¡Hay pareja!": "¡Exclusiva: estas mesas se unieron!" cuando las dos partes son mesas y "¡Exclusiva: el Cronista los unió!" en los demás casos.
- Objetos que se pueden apagar: lluvia, máquina de escribir, trompeta y "¡EXTRA!" (sólo en el match).
- Sonidos propios: `trazo-exito` (teclas de máquina de escribir y campanilla del carro) y `trazo-decepcion` (trompeta con sordina que baja).
- Se quitó el cigarrillo que Gemini le puso al Cronista en la pose de reposo: en su lugar tiene las manos en los bolsillos.
