# JPCFIX · Sitio y experiencias interactivas

## Visualizar localmente

- `pnpm install`
- `pnpm dev`: desarrollo con actualización en vivo.
- `pnpm build` y `pnpm preview`: revisión del build de producción.
- `pnpm lint`: revisión TS/TSX y reglas de hooks.
- `pnpm qa:interactive`: pruebas de navegador, PDF, movimiento reducido, capturas y grabaciones. Requiere el runtime de navegador instalado; ver variables de configuración en la documentación.

La publicación fue aprobada para https://jpcfix.vercel.app/. Vercel despliega producción desde `main`; el rediseño se trabajó en `codex/rediseno-jpcfix`. El estado anterior de esta etapa está conservado en `.local/baseline-redesign.zip`.

## Contenido y arquitectura

React 18 + Vite 6 + Motion ya instalado. Sin nuevos motores de animación. Los tokens y componentes del rediseño siguen en `src/styles/showcase.css`. La narrativa y sus demostraciones están en `src/app/components/experiences/`, con contenido y recursos centralizados en `src/app/data/experiences.ts` y estilos en `src/styles/experiences.css`.

La documentación completa, el análisis de las seis campañas y el storyboard están en [docs/EXPERIENCIA-INTERACTIVA.md](docs/EXPERIENCIA-INTERACTIVA.md). La procedencia y hashes de imágenes reutilizadas están en `docs/recursos-reutilizados.json`.

El logo oficial suministrado se conserva sin redibujar. Los WebP se recuperaron de los proyectos originales de las campañas; las tipografías Archivo e Inter se sirven en WOFF2. Las interfaces ficticias se identifican como ejemplos. Club 22 utiliza una captura de mesas sin datos personales; Re Bueno presenta sus módulos sin nombres ni importes operativos. Las imágenes originales siguen preservadas. El build sólo incluye imágenes revisadas mediante la lista de `vite.config.ts`.

## Herramienta gratuita

El generador recuperado de la producción V003 está en `/herramientas/presupuestos/index.html`, enlazado desde la portada. Conserva personalización de empresa y logo, cálculo, identidad local, cinco ítems por hoja e impresión/guardado PDF. Tiene CSS estático, fuentes locales, etiquetas accesibles y adaptación móvil. Los datos no se envían al servidor.

## Funcionalidad conservada

Anclajes `#sistemas`, `#servicios`, `#clientes`, `#nosotros`, `#contacto`, `#inicio`; WhatsApp, teléfonos, correo e Instagram existentes; contacto vía mailto; cámaras y alarmas en Nosotros. Las nuevas simulaciones de carta y automatización no generan pedidos ni mensajes externos.

## Validación

Resultados y capturas de la etapa interactiva en `qa/immersive/validation.json` y `qa/immersive/`. Incluyen seis resoluciones, scroll reversible, controles y simulaciones, generador, paginación, impresión y movimiento reducido. Los videos `recorrido-desktop` y `recorrido-mobile` registran el recorrido completo. Las métricas de rendimiento son de laboratorio y no equivalen a datos de campo de visitantes.

## Publicación

Dominio confirmado: https://jpcfix.vercel.app/. Canonical, og:url, imágenes sociales absolutas, robots y sitemap están preparados para ese dominio. La publicación se activa al actualizar `main`. Los videos originales no se modificaron.

La revisión responsive previa al push incluye ocho tamaños y comprueba controles alcanzables, pantallas bajas y menú horizontal. El registro está en `docs/validacion-responsive.json`. La evidencia multimedia generada permanece local e ignorada por Git bajo `qa/`.
