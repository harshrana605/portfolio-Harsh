"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ChevronDown, ExternalLink } from "lucide-react";
import gsap from "gsap";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

const TYPING_TEXTS = [
  "Full Stack Developer",
  "AI Engineer",
  "MERN Stack Developer",
  "Building Intelligent Systems",
  "React & Next.js Developer",
];

const TERMINAL_LINES = [
  { text: "$ npm run dev", color: "#00fff5", delay: 0 },
  { text: "▶ Starting development server...", color: "#8888aa", delay: 0.8 },
  { text: "✓ Compiled successfully", color: "#4ade80", delay: 1.6 },
  { text: "", delay: 2.0 },
  { text: "$ initializing AI systems...", color: "#00fff5", delay: 2.4 },
  { text: "  → Loading Gemini API          [OK]", color: "#4ade80", delay: 3.0 },
  { text: "  → Connecting AssemblyAI       [OK]", color: "#4ade80", delay: 3.5 },
  { text: "  → Neural interface ready      [OK]", color: "#4ade80", delay: 4.0 },
  { text: "", delay: 4.4 },
  { text: "$ deploying full stack apps...", color: "#00fff5", delay: 4.8 },
  { text: "  → MERN stack configured", color: "#8888aa", delay: 5.3 },
  { text: "  → Next.js 14 App Router       [OK]", color: "#4ade80", delay: 5.8 },
  { text: "  → TypeScript strict mode      [ON]", color: "#b44fff", delay: 6.3 },
  { text: "", delay: 6.7 },
  { text: "$ Loading portfolio...", color: "#00fff5", delay: 7.1 },
  { text: "✓ Welcome, World.", color: "#ffffff", delay: 7.8 },
];

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const termRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    TERMINAL_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        setTimeout(() => {
          if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
        }, 50);
      }, line.delay * 1000 + 500);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "rgba(5,5,5,0.9)", border: "1px solid rgba(180,79,255,0.3)", boxShadow: "0 0 40px rgba(180,79,255,0.15), 0 20px 60px rgba(0,0,0,0.5)" }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(20,20,25,0.9)" }}>
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-white/30">portfolio.terminal — harsh@ai-engineer</span>
      </div>
      <div ref={termRef} className="p-5 h-72 overflow-y-auto font-mono text-sm leading-6" style={{ scrollbarWidth: "none" }}>
        {TERMINAL_LINES.map((line, i) => (
          <div key={i} className="transition-all duration-300" style={{ opacity: visibleLines.includes(i) ? 1 : 0 }}>
            {line.text === "" ? <div className="h-3" /> : <p style={{ color: line.color || "#8888aa" }}>{line.text}</p>}
          </div>
        ))}
        {visibleLines.length === TERMINAL_LINES.length && (
          <div className="flex items-center mt-1">
            <span style={{ color: "#00fff5" }}>$ </span>
            <span className="terminal-cursor ml-1" style={{ color: "#00fff5" }} />
          </div>
        )}
      </div>
    </div>
  );
}

function TypingEffect() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex];
    let timeout: NodeJS.Timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, textIndex]);

  return (
    <span style={{ background: "linear-gradient(135deg, #00fff5, #44d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "brightness(1.3)" }}>
      {displayed}
      <span style={{ WebkitTextFillColor: "#00fff5" }}>█</span>
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(".hero-parallax", { x, y, duration: 0.8, ease: "power2.out" });
    };
    hero.addEventListener("mousemove", onMouseMove);
    return () => hero.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="hero-parallax absolute inset-0">
        <HeroCanvas />
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(180,79,255,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(0,195,255,0.1) 0%, transparent 60%), linear-gradient(to bottom, transparent 60%, #050505 100%)" }} />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 font-mono text-xs"
              style={{ background: "rgba(180,79,255,0.15)", border: "1px solid rgba(180,79,255,0.5)", color: "#d488ff", boxShadow: "0 0 20px rgba(180,79,255,0.2)" }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.25}
              className="font-display font-bold leading-none mb-4" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
              <span style={{ color: "#ffffff", textShadow: "0 0 40px rgba(255,255,255,0.4), 0 2px 20px rgba(0,0,0,0.8)" }}>
                Harsh
              </span>
              <br />
              <span style={{ background: "linear-gradient(135deg, #cc77ff, #44d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "brightness(1.4)" }}>
                Rana
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.4}
              className="font-mono text-xl md:text-2xl mb-6 h-8">
              <TypingEffect />
            </motion.p>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
              className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
              Building{" "}
              <span style={{ color: "#cc77ff", fontWeight: 600 }}>intelligent digital experiences</span>{" "}
              and scalable AI products. Based in Delhi, India.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.6} className="flex flex-wrap gap-4">
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #b44fff, #00c3ff)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(180,79,255,0.6)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                <span className="text-white flex items-center gap-2">View Projects <ExternalLink size={14} /></span>
              </a>

              <a href="https://github.com/harsh-rana" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.9)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,195,255,0.6)"; (e.currentTarget as HTMLElement).style.color = "#00c3ff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)"; }}>
                <Github size={16} /> GitHub
              </a>

              <a href="https://linkedin.com/in/harsh-rana" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.9)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(180,79,255,0.6)"; (e.currentTarget as HTMLElement).style.color = "#cc77ff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)"; }}>
                <Linkedin size={16} /> LinkedIn
              </a>

              <a href="/resume.pdf" download
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300"
                style={{ background: "rgba(0,255,245,0.1)", border: "1px solid rgba(0,255,245,0.4)", color: "#00fff5" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,255,245,0.2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                <Download size={16} /> Resume
              </a>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.75} className="flex gap-8 mt-12">
              {[{ value: "10+", label: "Projects" }, { value: "8.0", label: "CGPA" }, { value: "15+", label: "Technologies" }].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-2xl" style={{ background: "linear-gradient(135deg, #cc77ff, #44d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "brightness(1.3)" }}>
                    {s.value}
                  </p>
                  <p className="font-mono text-xs mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.5} className="hidden lg:block">
            <TerminalWindow />
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={16} style={{ color: "rgba(255,255,255,0.5)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}