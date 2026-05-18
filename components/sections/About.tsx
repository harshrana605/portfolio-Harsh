"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Brain, Layers, Zap, MapPin, GraduationCap } from "lucide-react";

const SKILLS = [
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB",
  "Python", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion",
  "Gemini API", "AssemblyAI", "Flask", "PostgreSQL", "Git",
];

const STATS = [
  { value: "10+", label: "Projects Built", icon: Code2, color: "#b44fff" },
  { value: "15+", label: "Technologies", icon: Layers, color: "#00c3ff" },
  { value: "8.0", label: "GPA Score", icon: GraduationCap, color: "#00fff5" },
  { value: "∞", label: "Problem Solving", icon: Brain, color: "#ff6eb4" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 -left-40 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #b44fff, transparent)" }}
        />
        <div
          className="absolute bottom-1/3 -right-40 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #00c3ff, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs text-purple-400 mb-3 tracking-widest uppercase" style={{ color: "#b44fff" }}>
            01. Who I Am
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white">
            About <span className="gradient-text-purple">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Avatar card */}
            <div
              className="glass rounded-2xl p-8 mb-8 relative overflow-hidden scanline"
              style={{ border: "1px solid rgba(180,79,255,0.15)" }}
            >
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(180,79,255,0.3), rgba(0,195,255,0.3))",
                    border: "1px solid rgba(180,79,255,0.4)",
                    boxShadow: "0 0 30px rgba(180,79,255,0.2)",
                  }}
                >
                  HR
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Harsh Rana</h3>
                  <p className="font-mono text-xs mt-1" style={{ color: "#b44fff" }}>Full Stack Developer & AI Engineer</p>
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin size={12} className="text-white/30" />
                    <span className="font-mono text-xs text-white/30">Delhi, India</span>
                  </div>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed mb-4">
                B.Tech CSE student at <span className="text-white/90">Delhi Technical Campus</span>, passionate
                about the intersection of <span style={{ color: "#b44fff" }}>Artificial Intelligence</span> and{" "}
                <span style={{ color: "#00c3ff" }}>Full Stack Development</span>.
              </p>
              <p className="text-white/60 leading-relaxed">
                I build scalable MERN applications, AI-powered systems, and modern web experiences
                that are both technically excellent and delightful to use. Currently exploring
                LLM integrations, agentic systems, and real-time AI pipelines.
              </p>

              {/* Gradient accent */}
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #b44fff, transparent)" }}
              />
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Code2, label: "Clean Code Architecture", color: "#b44fff" },
                { icon: Brain, label: "AI-Powered Solutions", color: "#00c3ff" },
                { icon: Zap, label: "Performance Obsessed", color: "#00fff5" },
                { icon: Layers, label: "Full Stack Versatility", color: "#ff6eb4" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-xl p-4 flex items-center gap-3 group transition-all duration-300"
                  style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${item.color}40`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${item.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <item.icon size={16} style={{ color: item.color }} />
                  <span className="font-mono text-xs text-white/50 group-hover:text-white/80 transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Skills + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-xl p-5 relative overflow-hidden"
                  style={{ border: `1px solid ${stat.color}20` }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <stat.icon size={20} style={{ color: stat.color, marginBottom: 8 }} />
                  <p className="font-display font-bold text-3xl text-white">{stat.value}</p>
                  <p className="font-mono text-xs mt-1" style={{ color: stat.color + "aa" }}>{stat.label}</p>
                  <div
                    className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-10 blur-2xl"
                    style={{ background: `radial-gradient(circle, ${stat.color}, transparent)` }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div className="glass rounded-2xl p-6" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="font-mono text-xs text-white/30 mb-4 uppercase tracking-widest">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-tag px-3 py-1.5 rounded-lg font-mono text-xs cursor-default transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.04 }}
                    onMouseEnter={(e) => {
                      const colors = ["#b44fff", "#00c3ff", "#00fff5", "#ff6eb4"];
                      const c = colors[i % colors.length];
                      (e.currentTarget as HTMLElement).style.borderColor = c + "60";
                      (e.currentTarget as HTMLElement).style.color = c;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 10px ${c}20`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
