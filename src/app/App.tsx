import { useState, useEffect, useRef } from "react";
import {
  Code2,
  LayoutDashboard,
  Camera,
  ShieldCheck,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  MessageCircle,
  ArrowUpRight,
  Zap,
  Globe,
  Lock,
} from "lucide-react";

// --- Utility: fade-in-on-scroll hook ---
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const { ref, visible } = useFadeIn();
  const translate =
    direction === "up"
      ? "translateY(28px)"
      : direction === "left"
      ? "translateX(-28px)"
      : direction === "right"
      ? "translateX(28px)"
      : "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translate,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// --- Nav ---
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(9,9,11,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(42,146,255,0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
            style={{
              background: "linear-gradient(135deg, #2a92ff, #00d1ff)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.04em",
              color: "#09090b",
            }}
          >
            JPC
          </div>
          <span
            className="font-semibold text-sm tracking-wide"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#f0f4ff" }}
          >
            JPCFIX
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm transition-colors duration-200"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#8892a4",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00d1ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8892a4")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-4 py-2 text-sm font-semibold rounded transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #2a92ff, #00d1ff)",
              color: "#09090b",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.85";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
          Contacto
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded"
          style={{ color: "#f0f4ff" }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(9,9,11,0.98)", borderTop: "1px solid rgba(42,146,255,0.1)" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm py-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8892a4" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-sm font-semibold rounded text-center"
            style={{ background: "linear-gradient(135deg, #2a92ff, #00d1ff)", color: "#09090b" }}
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}

// --- Hero ---
function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden"
      style={{ background: "#09090b" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(42,146,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(42,146,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 400,
          background: "radial-gradient(ellipse, rgba(42,146,255,0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "15%",
          right: "-5%",
          width: 400,
          height: 400,
          background: "radial-gradient(ellipse, rgba(0,209,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-2"
          style={{
            border: "1px solid rgba(42,146,255,0.3)",
            background: "rgba(42,146,255,0.08)",
            color: "#00d1ff",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.08em",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#00d1ff" }}
          />
          Córdoba Capital · Argentina
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "-0.01em",
            color: "#f0f4ff",
            textTransform: "uppercase",
          }}
        >
          Soluciones{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2a92ff, #00d1ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tecnológicas
          </span>
          <br />
          Integrales para tu Negocio
        </h1>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg max-w-2xl leading-relaxed"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#8892a4",
          }}
        >
          Expertos en desarrollo de software, sistemas a medida y seguridad física.
          Soluciones concretas, atención personalizada y resultados que escalan con vos.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="#contacto"
            className="group flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #2a92ff, #00d1ff)",
              color: "#09090b",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(42,146,255,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
          Contactar ahora
            <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#servicios"
            className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded transition-all duration-200"
            style={{
              border: "1px solid rgba(42,146,255,0.35)",
              color: "#2a92ff",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(42,146,255,0.08)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,146,255,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,146,255,0.35)";
            }}
          >
            Nuestros Servicios
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-12 pt-10"
          style={{ borderTop: "1px solid rgba(42,146,255,0.1)" }}
        >
          {[
            { val: "+80", label: "Proyectos entregados" },
            { val: "100%", label: "Clientes satisfechos" },
            { val: "24/7", label: "Soporte técnico" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span
                className="text-3xl font-extrabold"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  background: "linear-gradient(135deg, #2a92ff, #00d1ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.val}
              </span>
              <span
                className="text-xs"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8892a4" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Services ---
const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    desc: "Sitios y aplicaciones web rápidas, modernas y escalables, adaptadas a tu negocio y optimizadas para conversión.",
    tags: ["React", "Next.js", "APIs REST"],
  },
  {
    icon: LayoutDashboard,
    title: "Sistemas de Gestión",
    desc: "Software a medida para control de stock, ventas y administración de comercios con reportes en tiempo real.",
    tags: ["Stock", "Facturación", "Dashboard"],
  },
  {
    icon: Camera,
    title: "Cámaras de Seguridad",
    desc: "Instalación y configuración de sistemas DVR/XVR/NVR para monitoreo 24/7 con acceso remoto desde tu celular.",
    tags: ["DVR/XVR", "IP", "Remoto"],
  },
  {
    icon: ShieldCheck,
    title: "Alarmas",
    desc: "Protección perimetral e interior de alta precisión con sensores, sirenas y monitoreo ante intrusiones.",
    tags: ["Perimetral", "Interior", "Alerta"],
  },
];

function ServiceCard({
  icon: Icon,
  title,
  desc,
  tags,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  tags: string[];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-full flex flex-col gap-5 p-7 rounded-xl transition-all duration-300 cursor-default"
        style={{
          background: hovered ? "rgba(15,17,23,0.9)" : "#0f1117",
          border: hovered
            ? "1px solid rgba(0,209,255,0.45)"
            : "1px solid rgba(42,146,255,0.12)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? "0 20px 48px rgba(0,209,255,0.08), 0 0 0 1px rgba(0,209,255,0.12)" : "none",
        }}
      >
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            background: hovered
              ? "linear-gradient(135deg, rgba(42,146,255,0.2), rgba(0,209,255,0.2))"
              : "rgba(42,146,255,0.08)",
            border: hovered ? "1px solid rgba(0,209,255,0.4)" : "1px solid rgba(42,146,255,0.15)",
          }}
        >
          <Icon
            size={22}
            style={{ color: hovered ? "#00d1ff" : "#2a92ff", transition: "color 0.3s" }}
          />
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <h3
            className="text-lg font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#f0f4ff", letterSpacing: "0.02em", textTransform: "uppercase" }}
          >
            {title}
          </h3>
          <p
            className="text-sm leading-relaxed flex-1"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8892a4" }}
          >
            {desc}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-xs"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: "rgba(42,146,255,0.06)",
                border: "1px solid rgba(42,146,255,0.15)",
                color: "#8892a4",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="flex items-center gap-1 text-xs font-medium transition-colors duration-200"
          style={{
            color: hovered ? "#00d1ff" : "#2a92ff",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Saber más <ArrowUpRight size={13} />
        </div>
      </div>
    </FadeIn>
  );
}

function Services() {
  return (
    <section id="servicios" className="py-24 px-6" style={{ background: "#09090b" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <span
              className="text-xs font-medium mb-3 block"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#2a92ff",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              // Servicios
            </span>
            <h2
              className="text-4xl md:text-5xl font-extrabold"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#f0f4ff", textTransform: "uppercase" }}
            >
              Todo lo que tu empresa{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2a92ff, #00d1ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                necesita
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- About ---
function About() {
  const pillars = [
    { icon: Zap, label: "Respuesta rápida", desc: "Diagnóstico y ejecución sin burocracia." },
    { icon: Globe, label: "Visión integral", desc: "Software y seguridad física de la mano." },
    { icon: Lock, label: "Confiabilidad", desc: "Sistemas estables que funcionan cuando más los necesitás." },
  ];

  return (
    <section
      id="nosotros"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "#0a0c11" }}
    >
      {/* Decorative line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(to bottom, transparent, #2a92ff40, transparent)" }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <FadeIn direction="left">
          <span
            className="text-xs font-medium mb-4 block"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#2a92ff",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            // Sobre Nosotros
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#f0f4ff", textTransform: "uppercase" }}
          >
            Tecnología al servicio de tu{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2a92ff, #00d1ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              crecimiento
            </span>
          </h2>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8892a4" }}
          >
            Somos JPCFIX Soluciones Tecnológicas, un equipo cordobés especializado en resolver
            problemas complejos con soluciones concretas. Trabajamos codo a codo con nuestros
            clientes para entender su operación y entregar sistemas que realmente funcionan.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8892a4" }}
          >
            Desde Córdoba Capital operamos para negocios de toda escala: comercios, empresas de
            logística, consultorios, oficinas y más. Cada proyecto recibe atención personalizada
            desde el primer diagnóstico hasta el soporte postventa.
          </p>
        </FadeIn>

        {/* Pillars side */}
        <div className="flex flex-col gap-5">
          {pillars.map((p, i) => (
            <FadeIn key={p.label} direction="right" delay={i * 120}>
              <div
                className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300 group"
                style={{
                  background: "#0f1117",
                  border: "1px solid rgba(42,146,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,209,255,0.3)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,146,255,0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(42,146,255,0.1)", border: "1px solid rgba(42,146,255,0.2)" }}
                >
                  <p.icon size={18} style={{ color: "#00d1ff" }} />
                </div>
                <div>
                  <h4
                    className="font-bold mb-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#f0f4ff",
                      fontSize: "0.95rem",
                    }}
                  >
                    {p.label}
                  </h4>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8892a4" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contact ---
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputStyle = {
    background: "rgba(42,146,255,0.04)",
    border: "1px solid rgba(42,146,255,0.15)",
    borderRadius: 8,
    color: "#f0f4ff",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    padding: "0.75rem 1rem",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contacto" className="py-24 px-6" style={{ background: "#09090b" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <span
              className="text-xs font-medium mb-3 block"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#2a92ff",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              // Contacto
            </span>
            <h2
              className="text-4xl md:text-5xl font-extrabold"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#f0f4ff", textTransform: "uppercase" }}
            >
              Hablemos de tu{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2a92ff, #00d1ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                proyecto
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <FadeIn direction="left" className="lg:col-span-3">
            {sent ? (
              <div
                className="h-full flex flex-col items-center justify-center gap-4 p-10 rounded-xl text-center"
                style={{
                  background: "#0f1117",
                  border: "1px solid rgba(0,209,255,0.3)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #2a92ff, #00d1ff)" }}
                >
                  <Mail size={24} style={{ color: "#09090b" }} />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#f0f4ff", textTransform: "uppercase" }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8892a4", fontSize: "0.9rem" }}>
                  Nos ponemos en contacto en menos de 24hs hábiles.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-8 rounded-xl"
                style={{ background: "#0f1117", border: "1px solid rgba(42,146,255,0.1)" }}
              >
                <div>
                  <label
                    className="block mb-1.5 text-xs font-semibold uppercase tracking-widest"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8892a4" }}
                  >
                    Nombre
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Tu nombre completo"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,209,255,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(42,146,255,0.15)")}
                  />
                </div>
                <div>
                  <label
                    className="block mb-1.5 text-xs font-semibold uppercase tracking-widest"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8892a4" }}
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,209,255,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(42,146,255,0.15)")}
                  />
                </div>
                <div>
                  <label
                    className="block mb-1.5 text-xs font-semibold uppercase tracking-widest"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8892a4" }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Contanos qué necesitás..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,209,255,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(42,146,255,0.15)")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-bold rounded transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #2a92ff, #00d1ff)",
                    color: "#09090b",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: "0.04em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "0.88";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  Enviar Mensaje
                </button>
              </form>
            )}
          </FadeIn>

          {/* Info */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div className="flex flex-col gap-5 h-full">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "jpcfixsolution@gmail.com",
                  href: "mailto:jpcfixsolution@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Teléfono",
                  value: "3516121652 / 3517594888",
                  href: "tel:+5493516121652",
                },
                {
                  icon: MapPin,
                  label: "Ubicación",
                  value: "Córdoba Capital, Argentina",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-5 rounded-xl transition-all duration-200 no-underline"
                  style={{
                    background: "#0f1117",
                    border: "1px solid rgba(42,146,255,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,209,255,0.3)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,146,255,0.1)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(42,146,255,0.08)", border: "1px solid rgba(42,146,255,0.18)" }}
                  >
                    <item.icon size={18} style={{ color: "#2a92ff" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8892a4" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#f0f4ff" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/5493516121652"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-bold transition-all duration-200 mt-2"
                style={{
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.3)",
                  color: "#25d366",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.2)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.12)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                <MessageCircle size={18} />
                Escribinos por WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{
        background: "#0a0c11",
        borderTop: "1px solid rgba(42,146,255,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded flex items-center justify-center text-xs font-bold"
            style={{
              background: "linear-gradient(135deg, #2a92ff, #00d1ff)",
              fontFamily: "'Barlow Condensed', sans-serif",
              color: "#09090b",
            }}
          >
            JPC
          </div>
          <span
            className="text-sm font-semibold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#f0f4ff" }}
          >
            JPCFIX Soluciones Tecnológicas
          </span>
        </div>

        <p
          className="text-xs text-center"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8892a4" }}
        >
          © {new Date().getFullYear()} JPCFIX · Córdoba, Argentina
        </p>

        <div className="flex items-center gap-4">
          {[
            { name: "Instagram", href: "https://www.instagram.com/jpcfixsolutions/" },
            { name: "LinkedIn", href: "#" },
            { name: "GitHub", href: "#" },
          ].map((net) => (
            <a
              key={net.name}
              href={net.href}
              target={net.href !== "#" ? "_blank" : undefined}
              rel={net.href !== "#" ? "noopener noreferrer" : undefined}
              className="text-xs transition-colors duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8892a4" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00d1ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8892a4")}
            >
              {net.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// --- WhatsApp FAB ---
function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/5493516121652"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
      style={{
        background: "#25d366",
        boxShadow: "0 4px 24px rgba(37,211,102,0.35)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.12)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(37,211,102,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(37,211,102,0.35)";
      }}
      title="Contactar por WhatsApp"
    >
      <MessageCircle size={26} color="#fff" />
    </a>
  );
}

// --- App ---
export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#09090b",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      <Nav />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
