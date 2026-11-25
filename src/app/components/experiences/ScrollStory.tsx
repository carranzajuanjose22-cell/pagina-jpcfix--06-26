import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Check, FileText, MessageCircle, ShoppingBag, Package, Users, BarChart3, Plus } from 'lucide-react';
import { solutionScenes, contactLinks } from '../../data/experiences';

function BusinessScreen() {
  return <div className="business-screen"><div className="dashboard-heading"><strong>Tu negocio.</strong><span>Todo conectado</span></div><div className="dashboard-stats">{[['Ventas', 'En un lugar'], ['Stock', 'Organizado'], ['Clientes', 'Conectados']].map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><div className="dashboard-chart"><div className="chart-caption"><span>Una mirada de toda tu operación</span><BarChart3 size={18}/></div><div className="demo-bars" aria-hidden="true">{[32,48,38,64,51,76,62,90,78,100].map((height,i)=><span key={i} style={{height:`${height}%`}}/>)}</div></div><div className="dashboard-row"><Check size={17}/>Ventas, productos y movimientos en el mismo sistema.</div><p className="demo-disclaimer">Interfaz conceptual. Datos ilustrativos.</p></div>;
}
function AutomationScreen() {
  const [done,setDone]=useState(false);
  return <div className="automation-screen"><div className="dashboard-heading"><strong>De pendiente a resuelto.</strong><span>Automatización a medida</span></div><div className="workflow-pipeline">{[{icon:MessageCircle,title:'Llega una consulta',detail:done?'Consulta clasificada':'Mensaje recibido'}, {icon:FileText,title:'Se organiza la información',detail:done?'Datos registrados':'Documento por procesar'}, {icon:Check,title:'Vos validás el resultado',detail:done?'Listo para revisar':'Tu control, siempre'}].map(({icon:Icon,title,detail},i)=><div className={`pipeline-item ${done?'is-done':''}`} key={title}><span className="pipeline-icon"><Icon size={20}/></span><div><strong>{title}</strong><span>{detail}</span></div><span className="pipeline-state">{done?<Check size={18}/>:<span aria-hidden="true">· · ·</span>}</span>{i<2&&<div className="pipeline-connector"/>}</div>)}</div><button type="button" className="button button-green" onClick={()=>setDone(!done)}>{done?'Volver al inicio':'Probar el flujo'}</button><p role="status" className="demo-disclaimer">{done?'Ejemplo completado. No se enviaron mensajes ni se procesaron documentos reales.':'Ejemplo conceptual. No procesa información real.'}</p></div>;
}
function KitchenScreen() {
  const [step,setStep]=useState(0);
  const steps=['Carta','Pedido','Cocina','Reparto'];
  return <div className="kitchen-screen"><div className="kitchen-preview"><div className="mini-phone"><span className="phone-notch"/><strong>BRASA</strong><img src="/media/campaigns/burger.webp" alt="Hamburguesa de la campaña gastronómica" width="500" height="500" loading="lazy"/><h4>Doble Brasa</h4><p>{steps[step]==='Carta'?'Tu producto, protagonista.':steps[step]==='Pedido'?'Pedido de ejemplo confirmado.':steps[step]==='Cocina'?'Comanda en preparación.':'Pedido de ejemplo en camino.'}</p><span className="mini-status">{steps[step]}</span></div><div className="kitchen-ticket"><ShoppingBag size={23}/><span>PEDIDO DE EJEMPLO</span><strong>Todo sigue<br/>su curso.</strong><p>De la elección del cliente a la operación de tu local.</p><Check size={20}/></div></div><div className="flow-controls" aria-label="Explorar etapas del pedido">{steps.map((label,i)=><button key={label} aria-pressed={step===i} onClick={()=>setStep(i)}>{label}</button>)}</div><p className="demo-disclaimer" role="status">{steps[step]} · Simulación local. No genera pedidos reales.</p></div>;
}
export function ScrollStory() {
  const ref=useRef<HTMLElement>(null);
  const reduce=useReducedMotion();
  const [compactViewport,setCompactViewport]=useState(()=>typeof window!=='undefined'&&window.matchMedia('(max-height: 760px)').matches);
  useEffect(()=>{
    const query=window.matchMedia('(max-height: 760px)');
    const update=(event:MediaQueryListEvent)=>setCompactViewport(event.matches);
    query.addEventListener('change',update);
    return ()=>query.removeEventListener('change',update);
  },[]);
  const staticScene=reduce||compactViewport;
  const [active,setActive]=useState(0);
  const [manual,setManual]=useState<number|null>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:['start 88px','end end']});
  useMotionValueEvent(scrollYProgress,'change',p=>{if(staticScene)return;setActive(Math.min(2,Math.floor(p*3)));setManual(null);});
  const index=manual??active;
  const scene=solutionScenes[index];
  const backgroundColor=useTransform(scrollYProgress,[0,.28,.40,.61,.76,1],['#1249d8','#1249d8','#00785d','#00785d','#ff893e','#ff893e']);
  const readableInk=useTransform(backgroundColor,color=>{
    const values=color.startsWith('#')?[1,3,5].map(i=>parseInt(color.slice(i,i+2),16)):(color.match(/[\d.]+/g)?.slice(0,3).map(Number)??[0,0,0]);
    const rgb=values.map(v=>{const n=v/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4;});
    return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2]>.179?'#000000':'#ffffff';
  });
  const sceneBackground=useTransform(()=>{
    const scrollColor=backgroundColor.get();
    return staticScene||manual!==null?scene.color:scrollColor;
  });
  const sceneInk=useTransform(()=>{
    const scrollInk=readableInk.get();
    return staticScene||manual!==null?scene.ink:scrollInk;
  });
  const scale=useTransform(scrollYProgress,[0,.12,.55,.8,1],[.9,1,1,.94,.94]);
  const rotate=useTransform(scrollYProgress,[0,.3,.55,.8,1],[-4,0,0,3,0]);
  const scatterX=useTransform(scrollYProgress,[0,.22,.34],[0,85,85]);
  const scatterY=useTransform(scrollYProgress,[0,.22,.34],[0,48,48]);
  function choose(i:number){setManual(i);}
  return <section ref={ref} id="recorrido" className={`scroll-story ${staticScene?'motion-static':''}`} aria-label="Explorá cómo conectamos tus soluciones">
    {solutionScenes.map((item,i)=><span className="scene-anchor" id={item.id} key={item.id} style={{top:`${i*31}%`}}/>)}
    <motion.div className="story-sticky" style={{backgroundColor:sceneBackground,color:sceneInk}}>
      <div className="wrap story-content"><div className="story-intro"><p className="eyebrow">DE LO COMPLICADO A LO SIMPLE</p><div className="scene-nav" aria-label="Elegir solución">{solutionScenes.map((item,i)=><button key={item.id} aria-pressed={index===i} onClick={()=>choose(i)}>{item.label}</button>)}</div><AnimatePresence initial={false} mode="wait"><motion.div key={scene.id} className="scene-copy" initial={reduce?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reduce?0:-8}} transition={{duration:reduce?0:.18}}><p className="scene-category">{scene.label}</p><h2>{scene.title}</h2><p className="scene-description">{scene.description}</p><ul className="scene-tags">{scene.tags.map(tag=><li key={tag}><Check size={15}/>{tag}</li>)}</ul><a href={`${contactLinks.whatsapp}?text=${encodeURIComponent(`Hola, quiero consultar por ${scene.label.toLowerCase()}.`)}`} className="button button-light" target="_blank" rel="noopener noreferrer">{scene.cta}</a></motion.div></AnimatePresence><a className="story-skip" href="#carta-digital">Seguir explorando</a></div>
      <div className="story-stage"><motion.div className="story-window" style={staticScene?undefined:{scale,rotate}}><div className="story-window-bar"><span/><span/><span/><strong>JPCFIX / {scene.label}</strong></div><div className="story-window-body"><AnimatePresence initial={false} mode="wait"><motion.div key={scene.id} initial={reduce?false:{opacity:0,scale:.98}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:reduce?0:.18}}>{index===0?<BusinessScreen/>:index===1?<AutomationScreen/>:<KitchenScreen/>}</motion.div></AnimatePresence></div></motion.div>{index===0&&<><motion.div className="floating-module module-stock" style={staticScene?undefined:{x:scatterX,y:scatterY}}><Package size={20}/><span>Stock</span></motion.div><motion.div className="floating-module module-clients" style={staticScene?undefined:{x:scatterY,y:scatterX}}><Users size={20}/><span>Clientes</span></motion.div></>}<div className="story-stage-note"><Plus size={17}/><span>{scene.result}</span></div></div></div>
      <div className="wrap story-bottom"><span>{staticScene?'Elegí una solución para explorarla.':'El recorrido cambia con tu scroll. También podés elegir una solución.'}</span><div className="story-progress" aria-hidden="true"><motion.span style={{scaleX:staticScene?(index+1)/3:scrollYProgress}}/></div></div>
    </motion.div>
  </section>;
}
