import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Check, Code2, ChevronDown } from 'lucide-react';
export function InteractiveHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, .65], [2, -5]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const noteX = useTransform(scrollYProgress, [0, .65], [0, -90]);
  const noteY = useTransform(scrollYProgress, [0, .65], [0, -80]);
  const screenScale = useTransform(scrollYProgress, [0, .65], [1, 1.07]);
  return <section ref={ref} className="hero wrap interactive-hero" aria-labelledby="hero-title">
    <div className="hero-copy"><p className="eyebrow">SOLUCIONES DIGITALES. NEGOCIOS REALES.</p><h1 id="hero-title">Tecnología que<br/>hace crecer<br/><span>tu negocio.</span></h1><p className="hero-description">Desarrollamos software a medida, automatizamos procesos y creamos herramientas digitales para simplificar tu trabajo.</p><div className="hero-actions"><a className="button button-blue" href="#soluciones">Encontrá tu solución</a><a className="text-link" href="#herramientas">Explorá nuestras herramientas</a></div><p className="hero-note">Desde Córdoba. Cerca de tu negocio.</p></div>
    <div className="hero-stage"><motion.div className="hero-poster" style={reduce ? { rotate: 0 } : { rotate, y }}><div className="poster-label"><span>SOFTWARE A TU MEDIDA</span><Code2 size={21}/></div><h2>Tu negocio,<br/>bajo control.</h2><motion.div className="browser-frame" style={reduce ? undefined : { scale: screenScale }}><div className="browser-bar"><span/><span/><span/><p>JPCFIX / Gestión gastronómica</p></div><img src="/images/club22-mesas.png" alt="Interfaz real de Club 22 para organizar las mesas del salón" width="1920" height="1080"/></motion.div><div className="poster-bottom"><span>Menos vueltas. Más soluciones.</span><span>JPCFIX</span></div></motion.div><motion.div className="floating-note" style={reduce ? undefined : { x: noteX, y: noteY }}><span className="note-icon"><Check size={20}/></span><div><strong>Todo conectado.</strong><span>Más simple, todos los días.</span></div></motion.div><a className="stage-caption" href="#recorrido">Seguí bajando. Mirá cómo se conecta todo.</a></div>
    <div className="hero-baseline"><span>TECNOLOGÍA CON UN PROPÓSITO: HACERLO MÁS SIMPLE.</span><a href="#recorrido" aria-label="Explorar la experiencia de soluciones"><ChevronDown size={20}/></a></div>
  </section>;
}
