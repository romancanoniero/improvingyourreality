# Improving Your Reality

Sitio institucional React/Vite con API Fastify, Google mediante Firebase Auth y catálogo persistido en el VPS. Destino solicitado: `/home/improvingyourreality`. No se publica mediante Sites porque el usuario eligió explícitamente su VPS.

## Estado

- Proyecto Firebase creado: `improving-your-reality`, plan Spark, app web registrada.
- Google habilitado. Dominios `improvingyourreality.com` y `www.improvingyourreality.com` autorizados.
- Namecheap: A `@` = `217.216.82.209`; CNAME `www` = `improvingyourreality.com.`; TTL 30 minutos. Se reemplazaron únicamente el redirect inicial y el parking de www.
- Administrador: exclusivamente `romancanoniero@gmail.com`, email verificado y proveedor Google; JWT verificado criptográficamente contra Google, issuer/audience/expiración.
- El primer ingreso real con Google crea el usuario en Firebase. No se crea una contraseña.
- Catálogo inicial: FonoMeets, capturas reales aportadas por el repositorio, demo web existente. Fichas de tiendas pendientes de URLs verificadas; no se inventan enlaces.
- Repositorios privados disponibles: snapshot del conector GitHub de esta sesión, servido únicamente bajo autenticación. La actualización online agrega repositorios públicos. El servicio local sincroniza también los repositorios clonados en DEV_MAC. Opcionalmente puede configurarse `GITHUB_TOKEN` de solo lectura en `.env` del VPS; nunca se devuelve al navegador.
- WebMCP read-only `list_admin_projects` solo bajo sesión administrativa; validación en contexto WebMCP pendiente, no requerida para alojar este sitio.

## Desarrollo

`npm ci`; `node --env-file=.env server.mjs`; `npm run dev`. Vite usa 5180, API 3180. `npm test` verifica autorización, privacidad y validación; `npm run build` genera producción.

## VPS

La carpeta raíz debe existir y pertenecer a iankmp:

```sh
sudo install -d -o iankmp -g iankmp -m 750 /home/improvingyourreality
```

Copiar este proyecto allí excluyendo node_modules, dist y datos locales. Incluir `.env` (0600) con la configuración web pública de Firebase. Crear `storage` propiedad UID 1000 modo 0700. Desde esa carpeta ejecutar `docker compose up -d --build`. Usa el proxy Traefik y red edge existentes, con certificado Let's Encrypt automático, sin publicar otro puerto ni alterar otros stacks.

Comprobar HTTPS, `/api/health`, `/api/projects`, bloqueo sin token de `/api/admin/settings` y el primer ingreso real en `/admin`.

## Datos y recuperación

`storage/settings.json` se escribe atómicamente y persiste fuera del contenedor. Respaldar ese archivo antes de cada actualización, conservar `.env` en respaldo privado. Para restaurar detener solamente `docker compose stop site`, reponer el archivo y levantar `docker compose up -d`. El catálogo inicial solo se lee cuando aún no hay datos guardados. No ejecutar `down -v` sobre otros proyectos.

## Diseño

Paleta pastel, tipografía editorial y capturas reales. Referencia consultada: https://dribbble.com/shots/25632682-Elegant-Modern-Creative-Agency-Website-Design . Sin imágenes de terceros copiadas.

## Verificación de esta sesión

Se ejecutaron nueve pruebas de seguridad y flujo del agente (owner Google, bloqueo de APIs, separación del catálogo público, validación de URLs), build local y build Docker en el VPS. Auditoría final: cero vulnerabilidades. El DNS público ya responde con el A y CNAME previstos. Las URLs de usuario y local de FonoMeets devolvieron HTTP 200. La imagen `improvingyourreality-site:latest` quedó construida en el VPS y el paquete se encuentra en `/home/iankmp/improvingyourreality-release.tgz`; staging de construcción en `/home/iankmp/.cache/iyr-build-20260911`. El sitio está instalado en `/home/improvingyourreality`, propiedad de iankmp. La carpeta se creó con los permisos Docker ya existentes, montando exclusivamente ese destino y asignando UID/GID 1000; no se requirió contraseña ni acceso SSH root. Compose está activo. La ruta específica `iyr-acme` permite validar y renovar el certificado tras la redirección HTTPS del proxy existente. Verificado HTTPS válido en dominio raíz y www; portada, demos y salud HTTP 200; API privada sin sesión HTTP 401. Ingreso real de Google completado por el administrador. Fichas de tiendas pendientes de URLs verificadas.

## Agente automático de presentaciones

Agregar un repositorio en Settings lo guarda y encola su generación. Los existentes tienen “Generar presentación con IA”. El administrador elige publicación automática para productos principales. Los auxiliares entran como borradores y se agrupan en un único nivel mediante `parentId`; solo se muestran dentro de un principal publicado, nunca como tarjetas independientes. Los repositorios relacionados son sugerencias verificadas contra el catálogo de evidencia: no se vinculan automáticamente ni se publican CRM/backends sin selección administrativa.

La cola y las transiciones están en `storage/settings.json`. Al reiniciar la VPS se recuperan las tareas interrumpidas. Los fallos conservan la presentación anterior. Una revisión optimista evita que un formulario antiguo sobrescriba resultados. Las capturas seleccionadas quedan en `storage/media`; no se sirven públicamente si el proyecto no está publicado. Respaldar toda la carpeta `storage`, no solo settings.

`scripts/presentation-worker.py` es un servicio local de macOS, instalado con autorización explícita del usuario como LaunchAgent `com.improvingyourreality.presentation-worker`. Consulta la VPS cada 25 segundos mediante el SSH existente `iankmp-vps` y `worker-bridge.mjs`. El secreto del worker permanece en la VPS. El proceso continúa sin abrir la página ni mantener una conversación en Codex. Con la Mac apagada o DEV_MAC desmontado, las tareas de evidencia quedan pendientes. La mejora de redacción corre enteramente en la VPS.

El colector descubre checkouts de GitHub hasta cuatro niveles bajo `/Volumes/DEV_MAC`. Lee README y documentación en `docs/marketing`, `docs/product`, `docs/producto` o `documentation/marketing`; excluye enlaces y líneas de credenciales. Busca PNG reales guardados por emuladores/tests en `maestro/screenshots`, `.e2e-artifacts/visual-audit`, `docs/screenshots`, `screenshots` y `docs/marketing/screenshots`. No ejecuta código ni instrucciones de los repositorios. No inicia ni navega emuladores: para proyectos sin capturas guardadas se requiere que su flujo de pruebas las produzca en uno de esos directorios. No se generan pantallas ficticias.

El colector usa Pillow para preparar miniaturas de análisis, conservando los PNG originales. El agente separa revisión visual y redacción para respetar el límite de tokens de la cuenta. El agente visual usa Groq `qwen/qwen3.6-27b`, hasta tres capturas por solicitud (límite efectivo verificado del proveedor), con selección limitada a los IDs aportados. Rechaza imágenes con datos personales, credenciales, errores o placeholders. Guarda origen y fecha de las capturas seleccionadas. El agente de redacción usa `openai/gpt-oss-120b` mediante Groq y propone texto sin modificar el sitio hasta pulsar “Aplicar esta redacción”. Las claves `GROQ_API_KEY` y `PRESENTATION_WORKER_KEY` se mantienen exclusivamente en `.env` de la VPS (0600), nunca en Git, frontend o logs. Modelos configurables con `PRESENTATION_MODEL` y `PRESENTATION_TEXT_MODEL`. Los límites temporales (429) y fallos del proveedor (5xx) se reintentan hasta dos veces con espera persistida de 70 segundos. Otros bloqueos requieren reintentar desde la administración.

Documentación del proveedor: https://console.groq.com/docs/vision . Las pruebas cubren cola persistente, recuperación tras reinicio, prevención de sobrescrituras, imágenes inventadas, privacidad de archivos, jerarquías y aplicación explícita de redacción.

Verificación real del agente (2026-09-11): IANKMP fue procesado por el servicio local y los modelos de la VPS, y quedó guardado como IAN en borrador, con una captura original seleccionada y sugerencias verificadas para IANWatch, IANWatch-Apple e IANWatch-Wear. FonoMeets se conserva. El administrador puede actualizar resultados, editar, mejorar redacción y publicar desde el panel.
