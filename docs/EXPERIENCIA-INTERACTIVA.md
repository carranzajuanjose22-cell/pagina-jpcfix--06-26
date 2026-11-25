# Recorrido interactivo de JPCFIX

## Punto de restauración

El rediseño anterior se conservó en `.local/baseline-redesign.zip`, antes de implementar esta etapa. El trabajo continúa en `codex/rediseno-jpcfix`. Los MP4 y proyectos de D: se consultaron en modo lectura; no se modificaron ni eliminaron.

## Análisis audiovisual

Se inventariaron los seis MP4 de la carpeta definitiva del 25/11/2026, las imágenes de control, los proyectos HTML editables, los guiones y sus recursos. Se extrajeron fotogramas directamente de cada MP4 cada tres segundos mediante FFmpeg. Las hojas de secuencia quedan en `qa/immersive/source-analysis/`. Los espacios negros al final de algunas hojas son celdas sobrantes del mosaico, no fotogramas del video.

- **Software a medida, 31,6 s.** Comercios con ventas, pedidos y stock dispersos. Alterna grafito, azul y fondos claros; módulos aislados se convierten en una operación unificada. Mensaje: software adaptado a la forma de trabajar. CTA: contanos qué necesitás. La voz y subtítulos se recuperaron del archivo de transcripción del proyecto correspondiente, cuyo inicio coincide con el video: «¿Todavía llevás las ventas, los pedidos y el stock de tu negocio por separado?». Se reutiliza la lógica de reunir módulos, sin publicar datos operativos nuevos.
- **Automatizaciones inmobiliarias, 28 s.** Presenta consultas, comprobantes, pagos y agenda. Las tarjetas pendientes pasan a un flujo con datos organizados y validación humana. Público: inmobiliarias y administración. CTA: contar qué se necesita automatizar. Se adapta a una simulación local; no se promete procesamiento autónomo sin revisión.
- **Catálogo inmobiliario, 28 s.** Fotografía de propiedades, catálogo responsive, filtros, ficha y consulta; también edición del catálogo. Mensaje: una vidriera propia con identidad. Se recuperan los WebP originales y se transforman en un catálogo exploratorio. NORTE y las propiedades son ejemplos de campaña, no clientes ni inmuebles en venta.
- **Carta digital, 28 s.** BRAVA, FORNO y miga. muestran tres identidades, categorías, cantidades, pedido y actualización de carta. La transición de papel a celular y el cambio de personalidad se trasladan a estilos seleccionables y un carrito local. Las identidades son ficticias y no se presentan como clientes.
- **Gastronomía, 29 s.** La hamburguesa se convierte en producto; sigue un pedido hacia comanda, preparación, reparto y comunicación. Mensaje: toda la operación conectada. Se recuperan hamburguesa, pizza y combo originales para interfaces responsive; las etapas se pueden recorrer sin ejecutar pedidos externos.
- **Presupuestos gratis, 28 s, V003.** Autónomos, oficios y emprendedores. Muestra empresa y logo propios, carga de servicios, cálculo y documento imprimible. Se recuperó la aplicación personalizable y se verificaron esas capacidades. El CTA ahora abre una copia local funcional. La publicidad original invitaba a pedir el acceso; la web brinda acceso directo a la herramienta incluida.

Cinco campañas usan música y efectos sin narración según sus fuentes de mezcla. Software contiene voz con texto disponible en la fuente. No se añadió audio ni reproducción automática a la web. No se reutilizó música: por tanto, las licencias musicales de los videos no se trasladan a esta web ni a sus grabaciones silenciosas.

## Storyboard implementado

1. **Marca y producto.** Titular existente, interfaz real de mesas de Club 22 y marca oficial. Al bajar, cambian la rotación y escala de la interfaz y la posición de su tarjeta de estado.
2. **Recorrido central.** Una ventana persistente acompaña tres escenas: software azul, automatización verde y gastronomía naranja. Color, inclinación y escala responden al progreso del scroll. Los mensajes cambian en puntos concretos y el recorrido funciona en sentido inverso.
3. **Software.** Módulos de stock y clientes se acercan a un panel central. Los textos explican el beneficio; el gráfico es ilustrativo y no muestra resultados comerciales.
4. **Automatización.** Un flujo ordena consulta, información y validación. Un botón permite probar los estados sin enviar mensajes ni procesar documentos reales.
5. **Gastronomía.** La ventana presenta teléfono y comanda. Los controles Carta/Pedido/Cocina/Reparto recorren la operación conceptual.
6. **Carta con identidad.** El visitante elige BRAVA, FORNO o miga., navega categorías, cambia cantidades y genera una comanda de ejemplo. No hay conexión con comercios, WhatsApp ni servicios de pedidos.
7. **Inmobiliarias.** Fotografías de campaña con un desplazamiento de profundidad moderado. Tres vistas seleccionables introducen catálogo, consulta y gestión.
8. **Herramientas.** El documento incorpora identidad, filas y total al avanzar. Nombre y cantidad se pueden cambiar. Los cuatro pasos también funcionan como controles directos. El acceso al generador completo siempre está disponible.
9. **Prueba y contacto.** Proyectos y clientes existentes, proceso de trabajo y contacto oficial. Se conservan los anclajes anteriores y el formulario por correo.

## Arquitectura y movimiento

- Configuración comercial y recursos: `src/app/data/experiences.ts`.
- Componentes: `src/app/components/experiences/`.
- Estilos responsive: `src/styles/experiences.css`, sobre los tokens existentes.
- Motion ya formaba parte del proyecto. Se usan `useScroll`, `useTransform`, `useReducedMotion` y `AnimatePresence`; no se añadieron GSAP, Three.js, canvas ni otro motor.
- El scroll es nativo. No se interceptan ruedas ni gestos, no hay scroll artificial y se puede saltar el recorrido.
- Los cambios continuos usan transformaciones y color. Los cambios de escena usan transiciones breves. No hay audio, reproducción en bucle ni videos pesados descargados por el visitante.
- Con movimiento reducido se elimina la altura extendida de la sección sticky, se estabilizan las composiciones y se mantienen controles para explorar las tres soluciones. En pantallas bajas se ofrece una composición compacta con esos mismos controles.
- Los recursos fotográficos se recuperaron de fuentes originales, no de MP4 comprimidos, y se optimizaron a WebP. Las fuentes Archivo e Inter se tomaron del sistema de marca y se convirtieron a WOFF2 con subconjunto latino/español.

## Generador recuperado

Ruta: `/herramientas/presupuestos/index.html`.

Fuente: `jpcfix-generador-presupuestos-gratis-v003/aplicacion-personalizable`. Se conservó la lógica de cálculo, identidad en localStorage, cinco ítems por hoja y `window.print()`. Se añadieron metadatos, navegación de regreso, nombres accesibles, CSS responsive y una hoja estática equivalente a las utilidades de Tailwind. La compilación de Tailwind en el navegador se retiró. Las fuentes compartidas se sirven localmente. Los datos no se envían al servidor.

## Enlaces para campañas

`/#software`, `/#automatizaciones`, `/#gastronomia`, `/#carta-digital`, `/#inmobiliarias`, `/#herramientas` y `/herramientas/presupuestos/index.html`.

Los metadatos generales y de la herramienta están preparados. Falta el dominio público para URLs sociales absolutas y canonical. Se conserva noindex durante la revisión. No hubo despliegue.

## Verificación y evidencias

`pnpm lint`, `pnpm build` y `pnpm qa:interactive`.

La prueba de navegador usa el runtime instalado y admite `JPCFIX_PLAYWRIGHT_MODULE`, `JPCFIX_BROWSER_EXE` y `JPCFIX_FFMPEG_EXE` para otros equipos. Sirve `dist/` sólo en 127.0.0.1:4173 y cierra ese servidor al terminar. Prueba las seis resoluciones, reversibilidad del recorrido, controles, carrito, cálculos, herramienta, logo, paginación, impresión, identidad local, navegación móvil y movimiento reducido. Guarda resultados, capturas y grabaciones en `qa/immersive/`.

La medición de rendimiento es de laboratorio con build de producción local y CPU ralentizada. No representa métricas de campo de visitantes ni un certificado de Core Web Vitals. Ver condiciones y valores en el JSON de validación.

Para revisar manualmente: `pnpm dev`. Para revisar el build: `pnpm build` y `pnpm preview`.

## Resultados de la validación final

68 comprobaciones automatizadas aprobadas. Sin errores de consola ni desbordamientos en las seis resoluciones. Se verificaron dos páginas A4 físicas para seis ítems y un total de 600 en el PDF de prueba; sus PNG se inspeccionaron con Poppler.

Medición local con build de producción, Chromium a 390 × 844 y CPU ralentizada 4×, sin limitación de red: LCP 2.13 s; CLS 0.053; muestra de scroll de 2.22 s a 60.0 FPS de media, sin frames de más de 50 ms en esa muestra. No se midió INP de campo.

Las grabaciones finales se entregan como MP4, sin audio, además de los originales WebM.

## Revisión responsive previa al push

Se amplió la revisión a 360×640, 360×800, 390×844, 768×1024, 1024×768, 1440×900, 1920×1080 y 844×390. Se encontró y corrigió el acceso a controles del recorrido en móvil horizontal: las pantallas de hasta 760 px de alto ahora mantienen las escenas en el flujo normal y la selección manual no se reinicia al desplazarse. El menú móvil limita su altura al espacio disponible y permite scroll interno para alcanzar su acción final.

La comprobación verifica ancho del documento en todas las secciones, visibilidad y recepción de toques de controles sticky, interacción con las escenas compactas y acceso al botón de contacto del menú. El registro compacto versionado está en `docs/validacion-responsive.json`; las capturas y grabaciones se conservan localmente bajo `qa/`, fuera del repositorio. Ejecutar `node scripts/qa-responsive.cjs` después de `pnpm build`.

La revisión visual también detectó y corrigió la sincronización de la paleta al elegir una escena manualmente; esa comprobación se incorporó a los ocho tamaños del test.
