import { useState } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import '../../styles/showcase.css';

// Add confirmed customers and their supplied logo paths here.
const clients: { name: string; detail: string; logo?: string }[] = [
  { name: 'Club 22', detail: 'Club 22 Vinería', logo: '/images/club22-transparent.png' },
  { name: 'Parrilla Sergio Andres', detail: 'Parrilla Sergio Andres', logo: '/images/parrilla-sergio-andres-transparent.png' },
  { name: 'Yofre Descartables', detail: 'Yofre Descartables', logo: '/images/yofre-transparent.png' },
  { name: 'Re Bueno', detail: 'Re Bueno', logo: '/images/rebueno-transparent.png' },
  { name: 'Librería Kolores', detail: 'Librería Kolores', logo: '/images/libreria-kolores-transparent.png' },
  { name: 'Instituto Mixto Secundario Justo José de Urquiza', detail: 'Instituto Mixto Secundario', logo: '/images/instituto-mixto-secundario.png' },
];

export function ShowcaseHero() {
  return (
    <section className="showcase-hero">
      <div className="showcase-layout">
        <div className="showcase-copy">
          <p className="eyebrow">CÓRDOBA, ARGENTINA / SOLUCIONES TECNOLÓGICAS</p>
          <h1>Tu negocio.<br />Su próxima<br /><em>gran versión.</em></h1>
          <p className="hero-description">Software a medida, desarrollo web y seguridad. Conectamos lo que tu negocio necesita para trabajar mejor, todos los días.</p>
          <div className="showcase-actions">
            <a className="showcase-primary" href="#contacto">Hablemos de tu proyecto <ArrowUpRight size={19} /></a>
            <a className="showcase-secondary" href="#servicios">Explorá los servicios <ChevronRight size={17} /></a>
          </div>
          <div className="hero-note"><span /> Tecnología a medida. Atención de persona a persona.</div>
        </div>
        <div className="project-poster">
          <div className="poster-top"><span>JPCFIX / PROYECTOS</span><span>CLUB 22</span></div>
          <p className="poster-category">SOFTWARE PARA GASTRONOMÍA</p>
          <h2>Cada pedido,<br /><em>en su lugar.</em></h2>
          <div className="project-screen"><img src="/images/club22-mesas.png" alt="Pantalla real del sistema de Club 22 para gestionar las mesas del salón" width="1440" height="900" /></div>
          <div className="poster-bottom"><span>Mesas. Comandas. Control.</span><a href="#clientes" aria-label="Conocer el proyecto de Club 22"><ArrowUpRight size={23} /></a></div>
        </div>
      </div>
      <div className="expertise-strip"><span>DESARROLLO WEB</span><span aria-hidden="true">✳</span><span>SISTEMAS A MEDIDA</span><span aria-hidden="true">✳</span><span>SEGURIDAD ELECTRÓNICA</span></div>
    </section>
  );
}

export function Clients() {
  const [paused, setPaused] = useState(false);
  const clientCards = (copy: 'primary' | 'duplicate') => clients.map(client => (
    <article
      className={client.name === 'Club 22' ? 'client-item client-white-logo' : client.name.startsWith('Instituto Mixto') ? 'client-item client-round-logo' : 'client-item'}
      key={`${copy}-${client.name}`}
      aria-hidden={copy === 'duplicate' ? true : undefined}
    >
      {client.logo ? <img src={client.logo} alt={copy === 'duplicate' ? '' : client.name} width="180" height="72" loading="lazy" /> : <span className="client-wordmark">{client.name}</span>}
      <p>{client.detail}</p>
    </article>
  ));

  return (
    <section id="clientes" className="clients-section" aria-labelledby="clients-title">
      <div className="clients-inner">
        <div><p className="eyebrow">TECNOLOGÍA QUE YA ESTÁ EN MARCHA</p><h2 id="clients-title">Negocios que<br /><em>confían en nosotros.</em></h2></div>
        <div className={paused ? 'client-carousel is-paused' : 'client-carousel'}>
          <div className="client-track">
            <div className="client-group">{clientCards('primary')}</div>
            <div className="client-group" aria-hidden="true">{clientCards('duplicate')}</div>
          </div>
        </div>
        <button className="client-motion-toggle" onClick={() => setPaused(!paused)}>{paused ? 'Reanudar movimiento' : 'Pausar movimiento'}</button>
      </div>
    </section>
  );
}

const systems = [
  {
    name: 'Club 22',
    category: 'GESTIÓN GASTRONÓMICA',
    logo: '/images/club22-transparent.png',
    summary: 'Un sistema web a medida que conecta ventas, mesas, comandas, stock y resultados en una sola operación.',
    className: 'system-club22',
    cards: [
      { src: '/images/club22-portada.png', alt: 'Presentación general del sistema gastronómico desarrollado para Club 22' },
      { src: '/images/club22-operacion.png', alt: 'Funciones de ventas, mesas y comandas del sistema de Club 22' },
      { src: '/images/club22-control.png', alt: 'Funciones de stock, balances y carta digital del sistema de Club 22' },
    ],
  },
  {
    name: 'Re Bueno',
    category: 'GESTIÓN PARA SANGUCHERÍAS',
    logo: '/images/rebueno-transparent.png',
    summary: 'Una plataforma a medida para ordenar pedidos, ventas, caja, stock, proveedores, personal y clientes frecuentes.',
    className: 'system-rebueno',
    cards: [
      { src: '/images/rebueno-pedidos-ventas.png', alt: 'Funciones de pedidos, comandas y ventas del sistema de Re Bueno' },
      { src: '/images/rebueno-stock-proveedores.png', alt: 'Funciones de caja, stock y proveedores del sistema de Re Bueno' },
      { src: '/images/rebueno-personal-clientes.png', alt: 'Funciones de personal, gestión y clientes frecuentes del sistema de Re Bueno' },
    ],
  },
];

export function SystemsShowcase() {
  return (
    <section id="sistemas" className="systems-section section-space" aria-labelledby="systems-title">
      <div className="wrap">
        <div className="systems-heading">
          <p className="eyebrow">SISTEMAS EN FUNCIONAMIENTO</p>
          <h2 id="systems-title">Soluciones pensadas<br /><em>para cada negocio.</em></h2>
        </div>
        <div className="systems-list">
          {systems.map(system => (
            <article className={`system-case ${system.className}`} key={system.name}>
              <div className="system-summary">
                <img src={system.logo} alt={system.name} width="96" height="96" loading="lazy" />
                <div><span>{system.category}</span><h3>{system.name}</h3><p>{system.summary}</p></div>
              </div>
              <div className="system-cards" aria-label={`Presentación del sistema de ${system.name}`}>
                {system.cards.map(card => (
                  <figure className="system-card" key={card.src}>
                    <img src={card.src} alt={card.alt} width="1080" height="1350" loading="lazy" />
                    <figcaption>{system.name.toUpperCase()} / SISTEMA DE GESTIÓN</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="systems-footer"><p>Este espacio crecerá con cada sistema que desarrollamos.</p><a href="#contacto">Quiero una solución para mi negocio <ArrowUpRight size={18} /></a></div>
      </div>
    </section>
  );
}

