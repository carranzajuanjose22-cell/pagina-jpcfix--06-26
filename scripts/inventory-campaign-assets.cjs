const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const source='D:/publicidad jpcfix/videos-jpcfix-tiktok';
const files={
'burger.webp':'JPCFIX-Gastronomia-Motion-Premium-V002/proyecto/assets/burger.webp',
'pizza.webp':'JPCFIX-Gastronomia-Motion-Premium-V002/proyecto/assets/pizza.webp',
'combo.webp':'JPCFIX-Gastronomia-Motion-Premium-V002/proyecto/assets/combo.webp',
'cafe.webp':'jpcfix-carta-digital-editorial/proyecto/assets/miga.webp',
'casa.webp':'jpcfix-campana-inmobiliaria/shared-assets/casa-exterior.webp',
'interior.webp':'jpcfix-campana-inmobiliaria/shared-assets/casa-interior.webp',
'departamento.webp':'jpcfix-campana-inmobiliaria/shared-assets/departamento.webp'
};
const hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const manifest=Object.entries(files).map(([name,origin])=>({file:'public/media/campaigns/'+name,source:path.join(source,origin),sourceHash:hash(path.join(source,origin)),outputHash:hash('public/media/campaigns/'+name),bytes:fs.statSync('public/media/campaigns/'+name).size,treatment:'Original campaign image, resized to max 800px and WebP quality 82; no crop, brand redraw or new image generation.'}));
manifest.push({file:'public/herramientas/presupuestos/index.html',source:source+'/jpcfix-generador-presupuestos-gratis-v003/aplicacion-personalizable/index.html',sourceHash:hash(source+'/jpcfix-generador-presupuestos-gratis-v003/aplicacion-personalizable/index.html'),treatment:'Application logic preserved; static utility CSS, responsive styles, metadata and accessibility labels added.'});
fs.writeFileSync('docs/recursos-reutilizados.json',JSON.stringify(manifest,null,2));
