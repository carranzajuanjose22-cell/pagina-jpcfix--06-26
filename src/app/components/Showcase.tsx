import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import '../../styles/showcase.css';

// Add confirmed customers and their supplied logo paths here.
const clients: { name: string; detail: string; logo?: string }[] = [
  { name: 'Club 22', detail: 'Club 22 Vinería', logo: '/images/club22-transparent-web.png' },
  { name: 'Parrilla Sergio Andres', detail: 'Parrilla Sergio Andres', logo: '/images/parrilla-sergio-andres-transparent-web.png' },
  { name: 'Yofre Descartables', detail: 'Yofre Descartables', logo: '/images/yofre-transparent-web.png' },
  { name: 'Re Bueno', detail: 'Re Bueno', logo: '/images/rebueno-transparent-web.png' },
  { name: 'Librería Kolores', detail: 'Librería Kolores', logo: '/images/libreria-kolores-transparent-web.png' },
  { name: 'Instituto Mixto Secundario Justo José de Urquiza', detail: 'Instituto Mixto Secundario', logo: '/images/instituto-mixto-secundario-web.png' },
];

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
    logo: '/images/club22-transparent-web.png',
    summary: 'Un sistema web a medida que conecta ventas, mesas, comandas, stock y resultados en una sola operación.',
    className: 'system-club22',
    benefits: ['Conectá el salón con las comandas', 'Consultá stock y balances', 'Organizá la carta digital'],
    cards: [
      { src: '/images/club22-mesas.png', alt: 'Interfaz real de Club 22 para organizar las mesas del salón' },
    ],
  },
  {
    name: 'Re Bueno',
    category: 'GESTIÓN PARA SANGUCHERÍAS',
    logo: '/images/rebueno-transparent-web.png',
    summary: 'Una plataforma a medida para ordenar pedidos, ventas, caja, stock, proveedores, personal y clientes frecuentes.',
    className: 'system-rebueno',
    benefits: ['Ordená pedidos y ventas', 'Centralizá caja y proveedores', 'Gestioná personal y clientes'],
    cards: [
      { src: '/images/rebueno-gestion.png', alt: 'Panel real de Re Bueno para consultar ventas, compras, personal y resultados' },
    ],
  },
];

export function SystemsShowcase() {
  return (
    <section id="sistemas" className="systems-section section-space" aria-labelledby="systems-title">
      <div className="wrap">
        <div className="systems-heading">
          <p className="eyebrow">SISTEMAS EN FUNCIONAMIENTO</p>
          <h2 id="systems-title">Proyectos reales.<br /><em>Soluciones en marcha.</em></h2>
        </div>
        <div className="systems-list">
          {systems.map(system => (
            <article className={`system-case ${system.className}`} key={system.name}>
              <div className="system-summary">
                <img src={system.logo} alt={system.name} width="96" height="96" loading="lazy" />
                <div><span>{system.category}</span><h3>{system.name}</h3><p>{system.summary}</p></div>
              </div>
              <ul className="case-benefits">{system.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ul>
              <div className="system-cards" role="region" tabIndex={0} aria-label={`Presentación del sistema de ${system.name}`}>
                {system.cards.map(card => (
                  <figure className="system-card" key={card.src}><div className="case-screen-heading"><span>{system.name} / Vista del sistema</span><span>Desarrollo a medida por JPCFIX</span></div>
                    {system.name === 'Re Bueno' ? <div className="safe-system-view"><strong>Tu operación, conectada.</strong><div>{['Pedidos y ventas', 'Caja y stock', 'Proveedores', 'Personal y clientes'].map(label=><span key={label}>{label}</span>)}</div><p>Representación de módulos del sistema. Sin datos operativos.</p></div> : <img src={card.src} alt={card.alt} width="1920" height="1080" loading="lazy" />}
                    <figcaption>{system.name === 'Re Bueno' ? 'Representación funcional' : 'Interfaz real'} · {system.name} · Software a medida</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="systems-footer"><p>Dos negocios. Dos formas de trabajar. Sistemas hechos a su medida.</p><a href="#contacto">Quiero una solución para mi negocio <ArrowUpRight size={18} /></a></div>
      </div>
    </section>
  );
}
