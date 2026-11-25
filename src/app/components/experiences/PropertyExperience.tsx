import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Check, MessageCircle } from 'lucide-react';
import { contactLinks, propertyViews } from '../../data/experiences';
export function PropertyExperience() {
  const [selected,setSelected]=useState(0);
  const ref=useRef<HTMLElement>(null);
  const reduce=useReducedMotion();
  const {scrollYProgress}=useScroll({target:ref,offset:['start end','end start']});
  const scale=useTransform(scrollYProgress,[0,1],[1.12,1]);
  const y=useTransform(scrollYProgress,[0,1],[20,-20]);
  const item=propertyViews[selected];
  return <section ref={ref} className="property-experience section-space" id="inmobiliarias"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">DEL CATÁLOGO A LA CONSULTA</p><h2>Tus propiedades<br/><span>merecen destacar.</span></h2></div><p>Un catálogo con tu identidad. Información clara y un camino sencillo para que te contacten.</p></div><div className="property-experience-layout"><div className="property-showcase"><motion.img key={item.image} src={item.image} alt={`${item.type} de muestra de la campaña inmobiliaria`} width="1200" height="800" loading="lazy" style={reduce?undefined:{scale,y}}/><div className="property-showcase-label"><span>CATÁLOGO DE EJEMPLO</span><h3>{item.label}</h3><p>{item.type} · Imagen de campaña</p></div></div><div className="property-controls"><p className="eyebrow">CADA ESPACIO TIENE SU HISTORIA</p><div className="property-picker" aria-label="Explorar propiedades de muestra">{propertyViews.map((view,i)=><button key={view.type} onClick={()=>setSelected(i)} aria-pressed={selected===i}><img src={view.image} alt="" width="100" height="70" loading="lazy"/><span>{view.type}</span>{selected===i&&<Check size={17}/>}</button>)}</div><p className="property-description" role="status">{item.detail}</p><div className="property-service"><MessageCircle size={23}/><div><strong>Y detrás, una gestión más simple.</strong><p>Consultas, documentación y seguimiento. Podemos conectar tu catálogo con automatizaciones a medida.</p></div></div><a className="button button-dark" href={`${contactLinks.whatsapp}?text=${encodeURIComponent('Hola, quiero consultar por un catálogo y automatizaciones para mi inmobiliaria.')}`} target="_blank" rel="noopener noreferrer">Hablemos de tu inmobiliaria</a></div></div></div></section>;
}
