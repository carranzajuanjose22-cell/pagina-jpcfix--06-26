export const contactLinks = {
  whatsapp: 'https://wa.me/5493516121652',
  instagram: 'https://www.instagram.com/jpcfixsolutions/',
  budget: '/herramientas/presupuestos/index.html',
};
export const solutionScenes = [
  { id: 'software', label: 'Software a medida', color: '#1249d8', ink: '#ffffff', title: 'Todo por separado.\nHasta ahora.', result: 'Tu negocio, bajo control.', description: 'Ventas, productos, stock y clientes. Conectamos la información en un sistema que se adapta a tu forma de trabajar.', tags: ['Ventas conectadas', 'Stock organizado', 'Información a mano'], cta: 'Pensemos tu sistema', source: 'Software-a-Medida' },
  { id: 'automatizaciones', label: 'Automatización', color: '#00785d', ink: '#ffffff', title: 'Menos tareas.\nMás tiempo.', result: 'De lo repetitivo a lo resuelto.', description: 'Una consulta llega, la información se registra y el proceso sigue. Automatizamos tareas; vos conservás el control.', tags: ['Consultas', 'Comprobantes', 'Seguimiento'], cta: 'Quiero automatizar', source: 'Inmobiliaria-Automatizaciones' },
  { id: 'gastronomia', label: 'Gastronomía', color: '#ff893e', ink: '#241a13', title: 'Cada pedido,\nen su lugar.', result: 'De la carta a la cocina.', description: 'Carta digital, pedidos y comandas conectados. Una forma de acompañar toda la operación de tu local.', tags: ['Carta digital', 'Comandas', 'Reparto'], cta: 'Hablemos de tu local', source: 'Gastronomia' },
];
export const menuBrands = [
  { id: 'brava', name: 'BRAVA', tagline: 'Buenas rondas. Mejores encuentros.', color: '#f78944', background: '#1c2522', text: '#ffffff', categories: ['Para compartir', 'Bebidas'], items: [{ name: 'Doble Brasa', price: 9500, image: '/media/campaigns/burger.webp', category: 'Para compartir' }, { name: 'Combo de la casa', price: 14000, image: '/media/campaigns/combo.webp', category: 'Para compartir' }, { name: 'Café de especialidad', price: 3500, image: '/media/campaigns/cafe.webp', category: 'Bebidas' }] },
  { id: 'forno', name: 'FORNO', tagline: 'Fuego, masa y buenos momentos.', color: '#a21c2d', background: '#faf2df', text: '#263b2b', categories: ['Pizzas', 'Bebidas'], items: [{ name: 'Diavola', price: 12000, image: '/media/campaigns/pizza.webp', category: 'Pizzas' }, { name: 'Café de la casa', price: 3000, image: '/media/campaigns/cafe.webp', category: 'Bebidas' }] },
  { id: 'miga', name: 'miga.', tagline: 'Tu pequeño gran momento.', color: '#725438', background: '#faf6ec', text: '#443427', categories: ['Café', 'Brunch'], items: [{ name: 'Café y croissant', price: 4800, image: '/media/campaigns/cafe.webp', category: 'Café' }, { name: 'Brunch de la casa', price: 9500, image: '/media/campaigns/combo.webp', category: 'Brunch' }] },
];
export const propertyViews = [
  { image: '/media/campaigns/casa.webp', label: 'Espacios para vivir mejor.', type: 'Casa', detail: 'Una ficha clara. Todas las fotos. Una consulta directa.' },
  { image: '/media/campaigns/departamento.webp', label: 'Tu próxima historia.', type: 'Departamento', detail: 'Catálogos personalizados para mostrar cada propiedad.' },
  { image: '/media/campaigns/interior.webp', label: 'Cada detalle cuenta.', type: 'Interior', detail: 'Tu identidad y tus propiedades, en su mejor versión.' },
];
export const currency = (value: number) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value);
