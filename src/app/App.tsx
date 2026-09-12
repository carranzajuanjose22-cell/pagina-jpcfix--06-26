import { useState, useEffect } from 'react';
import { Code2, LayoutDashboard, Camera, ShieldCheck, Mail, Phone, MapPin, Menu, X, MessageCircle, ArrowUpRight, Zap, Globe, Lock } from 'lucide-react';
import { ShowcaseHero, Clients } from './components/Showcase';

const whatsapp = 'https://wa.me/5493516121652';
const services = [
  { icon: Code2, title: 'Desarrollo web', desc: 'Sitios y aplicaciones web rápidas, modernas y escalables, adaptadas a tu negocio y optimizadas para conversión.', tags: ['Sitios web', 'Aplicaciones', 'Integraciones'] },
  { icon: LayoutDashboard, title: 'Sistemas de gestión', desc: 'Software a medida para control de stock, ventas y administración de comercios con reportes en tiempo real.', tags: ['Stock', 'Ventas', 'Reportes'] },
  { icon: Camera, title: 'Cámaras de seguridad', desc: 'Instalación y configuración de sistemas DVR/XVR/NVR para monitoreo 24/7 con acceso remoto desde tu celular.', tags: ['Monitoreo', 'Cámaras IP', 'Acceso remoto'] },
  { icon: ShieldCheck, title: 'Alarmas', desc: 'Protección perimetral e interior de alta precisión con sensores, sirenas y monitoreo ante intrusiones.', tags: ['Perimetral', 'Interior', 'Alertas'] },
];

function Brand() {
  return <a className="brand-logo" href="#inicio" aria-label="JPCFIX, volver al inicio"><img src="/images/jpcfix.png" alt="JPCFIX Soluciones Tecnológicas e Integrales" width="1920" height="1080" /></a>;
}
function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function closeOnEscape(e: KeyboardEvent) { if (e.key === 'Escape') setOpen(false); }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);
  return <header className="site-header"><div className="site-nav wrap">
    <Brand />
    <button className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="main-nav" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Navegación principal">
      {['Servicios', 'Clientes', 'Nosotros', 'Contacto'].map(label => <a key={label} className={label === 'Contacto' ? 'nav-contact' : ''} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)}>{label}{label === 'Contacto' && <ArrowUpRight size={16} />}</a>)}
    </nav>
  </div></header>;
}
function Services() {
  return <section id="servicios" className="services-section section-space"><div className="wrap">
    <div className="section-heading"><div><p className="eyebrow">LO QUE HACEMOS</p><h2>Todo lo que tu empresa<br /><em>necesita para avanzar.</em></h2></div><p>De tu presencia online a la seguridad de tu espacio. Encontramos la solución para cada parte de tu negocio.</p></div>
    <div className="services-grid">{services.map(({ icon: Icon, title, desc, tags }) => <article className="service-card" key={title}>
      <div className="service-top"><Icon size={27} strokeWidth={1.5} /></div>
      <h3>{title}</h3><p>{desc}</p><div className="service-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <a href="#contacto">Hablemos de {title.toLowerCase()} <ArrowUpRight size={18} /></a>
    </article>)}</div>
  </div></section>;
}

function About() {
  const pillars = [
    { icon: Zap, label: 'Respuesta rápida', desc: 'Diagnóstico y ejecución sin burocracia.' },
    { icon: Globe, label: 'Visión integral', desc: 'Software y seguridad física de la mano.' },
    { icon: Lock, label: 'Confiabilidad', desc: 'Sistemas estables que funcionan cuando más los necesitás.' },
  ];
  return <section id="nosotros" className="about-section section-space"><div className="wrap about-layout">
    <div><p className="eyebrow">SOMOS JPCFIX</p><h2>Tecnología cercana.<br /><em>Un impulso real.</em></h2>
      <p>Somos un equipo cordobés especializado en resolver problemas complejos con soluciones concretas. Trabajamos codo a codo con vos para entender tu operación y crear sistemas que realmente funcionan.</p>
      <p>Desde Córdoba Capital acompañamos a comercios, empresas de logística, consultorios y oficinas. Cada proyecto recibe atención personalizada desde el primer diagnóstico hasta el soporte postventa.</p>
      <div className="about-signature"><span>CÓRDOBA → TU NEGOCIO</span><ArrowUpRight size={24} /></div>
    </div>
    <div className="pillars">{pillars.map(({icon: Icon, label, desc}) => <article key={label}><div className="pillar-icon"><Icon size={24} strokeWidth={1.5} /></div><div><h3>{label}</h3><p>{desc}</p></div></article>)}</div>
  </div></section>;
}

function Contact() {
  const [form, setForm] = useState({name: '', email: '', message: ''});
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:jpcfixsolution@gmail.com?subject=${encodeURIComponent('Consulta desde JPCFIX')}&body=${encodeURIComponent(body)}`;
  }
  return <section id="contacto" className="contact-section section-space"><div className="wrap">
    <div className="section-heading"><div><p className="eyebrow">EL PRIMER PASO</p><h2>Tu próximo proyecto<br /><em>empieza con una charla.</em></h2></div><p>Contanos qué necesitás. Pensemos juntos cómo hacerlo realidad.</p></div>
    <div className="contact-layout"><form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row"><div><label htmlFor="contact-name">Tu nombre</label><input id="contact-name" autoComplete="name" required placeholder="¿Cómo te llamás?" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></div>
      <div><label htmlFor="contact-email">Tu email</label><input id="contact-email" type="email" autoComplete="email" required placeholder="vos@tuempresa.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div></div>
      <label htmlFor="contact-message">¿En qué podemos ayudarte?</label><textarea id="contact-message" rows={5} required placeholder="Contanos un poco sobre tu negocio y tu idea…" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
      <div className="form-bottom"><p>Se abrirá tu aplicación de correo para enviar la consulta.</p><button type="submit" className="showcase-primary">Preparar consulta <ArrowUpRight size={18} /></button></div>
    </form>
    <aside className="contact-details"><p className="eyebrow">TAMBIÉN NOS ENCONTRÁS ACÁ</p>
      <a href="mailto:jpcfixsolution@gmail.com"><Mail size={20}/><span><small>Email</small>jpcfixsolution@gmail.com</span></a>
      <a href="tel:+5493516121652"><Phone size={20}/><span><small>Teléfono</small>351 612 1652</span></a>
      <a href="tel:+5493517594888"><Phone size={20}/><span><small>Otra línea de contacto</small>351 759 4888</span></a>
      <div className="contact-location"><MapPin size={20}/><span><small>Desde</small>Córdoba Capital, Argentina</span></div>
      <a className="contact-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={21}/>Escribinos por WhatsApp<ArrowUpRight size={18}/></a>
    </aside></div>
  </div></section>;
}

export default function App() {
  return <div className="site-shell" id="inicio"><Nav /><main><ShowcaseHero /><Clients /><Services /><About /><Contact /></main>
    <footer className="site-footer"><div className="wrap footer-layout"><Brand /><p>© {new Date().getFullYear()} JPCFIX · Córdoba, Argentina</p><a href="https://www.instagram.com/jpcfixsolutions/" target="_blank" rel="noopener noreferrer">Seguinos en Instagram <ArrowUpRight size={17}/></a></div></footer>
    <a className="whatsapp-fab" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle size={26}/></a>
  </div>;
}

