import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle, Mail, Phone, MapPin, Instagram, Code2, Workflow, FileText, Check, Plus, ChevronDown } from 'lucide-react';
import { Clients, SystemsShowcase } from './components/Showcase';
import '../styles/showcase.css';
import '../styles/experiences.css';
import { InteractiveHero } from './components/experiences/InteractiveHero';
import { ScrollStory } from './components/experiences/ScrollStory';
import { MenuExperience } from './components/experiences/MenuExperience';
import { PropertyExperience } from './components/experiences/PropertyExperience';
import { BudgetExperience } from './components/experiences/BudgetExperience';

const whatsapp = 'https://wa.me/5493516121652';
const instagram = 'https://www.instagram.com/jpcfixsolutions/';
const nav = [['Inicio', 'inicio'], ['Soluciones', 'soluciones'], ['Herramientas', 'herramientas'], ['Proyectos', 'proyectos'], ['Nosotros', 'nosotros'], ['Contacto', 'contacto']];
function Brand() {
  return <a className="brand-logo" href="#inicio" aria-label="JPCFIX, volver al inicio"><img src="/images/jpcfix-oficial-web.png" alt="JPCFIX" width="2160" height="720" /></a>;
}
function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return <header className="site-header"><div className="wrap site-nav"><Brand />
    <button className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="main-nav" className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Navegación principal">{nav.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}<a className="button button-dark nav-cta" href="#contacto" onClick={() => setOpen(false)}>Hablemos de tu proyecto</a></nav>
  </div></header>;
}
const services = [
  { icon: Code2, color: 'blue', title: 'Software a medida.', desc: 'Tu forma de trabajar, convertida en un sistema. No al revés.', tags: ['Gestión comercial', 'Stock y ventas', 'Pedidos y reparto'], link: 'Pensemos tu sistema' },
  { icon: Workflow, color: 'green', title: 'Menos tareas. Más tiempo.', desc: 'Automatizamos lo repetitivo para que te ocupes de lo que hace crecer tu negocio.', tags: ['Mensajes y registros', 'Documentos', 'Integraciones'], link: 'Simplificá tus procesos' },
  { icon: FileText, color: 'sky', title: 'Herramientas digitales.', desc: 'Soluciones simples para necesidades concretas. A tu alcance, todos los días.', tags: ['Profesionales', 'Emprendedores', 'Pequeños negocios'], link: 'Conocé las herramientas' },
];
function Services() {
  return <section id="soluciones" className="section-space solutions"><span id="servicios" className="anchor-alias"/><div className="wrap"><div className="section-heading"><div><p className="eyebrow">LO QUE HACEMOS</p><h2>Un problema real.<br /><span>Una solución a medida.</span></h2></div><p>No todos los negocios necesitan lo mismo.<br />Por eso, empezamos por escucharte.</p></div><div className="services-grid">{services.map(({icon: Icon, color, title, desc, tags, link}) => <article className={`service-card tone-${color} reveal`} key={title}><Icon size={30} strokeWidth={1.6}/><h3>{title}</h3><p>{desc}</p><ul>{tags.map(tag => <li key={tag}><Check size={15}/>{tag}</li>)}</ul><a className="card-link" href={color === 'sky' ? '#herramientas' : '#contacto'}>{link}<Plus size={19}/></a></article>)}</div></div></section>;
}
function About() {
  const steps = [['Entendemos tu necesidad.', 'Nos contás cómo trabajás, qué te lleva tiempo y qué querés mejorar.'], ['Diseñamos una solución.', 'Definimos juntos qué necesitás y cómo llevarlo a la práctica.'], ['Desarrollamos y personalizamos.', 'Construimos el sistema alrededor de tu operación.'], ['Implementamos y acompañamos.', 'Te ayudamos a ponerlo en marcha y seguimos cerca.']];
  return <section id="nosotros" className="section-space about-section"><div className="wrap"><div className="about-intro"><div><p className="eyebrow">SOMOS JPCFIX</p><h2>Tecnología cercana.<br /><span>De persona a persona.</span></h2></div><div><p>Desde Córdoba Capital, creamos soluciones digitales para negocios reales. Escuchamos, proponemos y desarrollamos con vos.</p><p>No hace falta que sepas de tecnología. Hace falta que nos cuentes qué querés resolver.</p></div></div><div className="process-grid">{steps.map(([title, desc]) => <article key={title} className="reveal"><span className="process-mark" aria-hidden="true"><Plus size={24}/></span><h3>{title}</h3><p>{desc}</p></article>)}</div><details className="other-services"><summary>También acompañamos la seguridad de tu negocio<ChevronDown size={18}/></summary><p>Conservamos nuestros servicios de instalación de cámaras DVR/XVR/NVR, monitoreo remoto y alarmas perimetrales e interiores.</p><a href="#contacto" className="text-link">Consultar por cámaras y alarmas</a></details></div></section>;
}
function Contact() {
  const [form, setForm] = useState({name: '', email: '', message: ''});
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:jpcfixsolution@gmail.com?subject=${encodeURIComponent('Consulta desde JPCFIX')}&body=${encodeURIComponent(body)}`;
  }
  return <section id="contacto" className="contact-section section-space"><div className="wrap"><div className="contact-pitch"><p className="eyebrow">HAGAMOS QUE FUNCIONE PARA VOS</p><h2>Tu negocio tiene su propia<br />forma de trabajar.<br /><span>Tu software también debería.</span></h2><p>Contanos qué necesitás y encontremos una solución.</p><a href={whatsapp} className="button button-lime" target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/>Hablemos de tu proyecto</a></div><div className="contact-layout"><form onSubmit={handleSubmit} className="contact-form"><h3>¿Preferís escribirnos por email?</h3><div className="form-row"><div><label htmlFor="contact-name">Tu nombre</label><input id="contact-name" autoComplete="name" required placeholder="¿Cómo te llamás?" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div><div><label htmlFor="contact-email">Tu email</label><input id="contact-email" type="email" autoComplete="email" required placeholder="vos@tuempresa.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div></div><label htmlFor="contact-message">¿Qué te gustaría resolver?</label><textarea id="contact-message" rows={4} required placeholder="Contanos un poco sobre tu negocio…" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/><div className="form-bottom"><p>Se abrirá tu aplicación de correo para enviar la consulta.</p><button className="button button-light" type="submit">Preparar consulta</button></div></form><aside className="contact-details"><p className="eyebrow">ESTAMOS CERCA</p><a href="mailto:jpcfixsolution@gmail.com"><Mail size={20}/><span><small>Email</small>jpcfixsolution@gmail.com</span></a><a href="tel:+5493516121652"><Phone size={20}/><span><small>Teléfono</small>351 612 1652</span></a><a href="tel:+5493517594888"><Phone size={20}/><span><small>Otra línea de contacto</small>351 759 4888</span></a><div><MapPin size={20}/><span><small>Desde</small>Córdoba Capital, Argentina</span></div><a href={instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20}/><span><small>Instagram</small>@jpcfixsolutions</span></a></aside></div></div></section>;
}
export default function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div className="site-shell" id="inicio"><a href="#main" className="skip-link">Ir al contenido</a><Nav/><main id="main"><InteractiveHero/><ScrollStory/><Services/><MenuExperience/><PropertyExperience/><BudgetExperience/><div id="proyectos"><SystemsShowcase/></div><Clients/><About/><Contact/></main><footer className="site-footer"><div className="wrap footer-layout"><Brand/><p>© {new Date().getFullYear()} JPCFIX · Soluciones digitales.<br />Córdoba, Argentina.</p><a href={instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18}/> Sigamos conectados</a></div></footer><a className="whatsapp-fab" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle size={25}/></a></div>;
}
