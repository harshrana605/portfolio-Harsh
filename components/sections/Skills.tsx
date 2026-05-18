"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    name: "Frontend",
    color: "#b44fff",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "GSAP", level: 75 },
      { name: "Framer Motion", level: 80 },
      { name: "TypeScript", level: 82 },
    ],
  },
  {
    name: "Backend",
    color: "#00c3ff",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Flask", level: 72 },
      { name: "REST APIs", level: 90 },
      { name: "MongoDB", level: 83 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    name: "AI / ML",
    color: "#00fff5",
    skills: [
      { name: "Gemini API", level: 88 },
      { name: "AssemblyAI", level: 82 },
      { name: "LLM Integration", level: 78 },
      { name: "Python", level: 80 },
      { name: "Prompt Engineering", level: 85 },
      { name: "AI Pipelines", level: 72 },
    ],
  },
  {
    name: "Languages",
    color: "#ff6eb4",
    skills: [
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 82 },
      { name: "Python", level: 80 },
      { name: "C++", level: 68 },
      { name: "Java", level: 65 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
];

const TECH_BADGES = [
  "React", "Next.js", "Node.js", "MongoDB", "Python",
  "Gemini AI", "AssemblyAI", "Express", "Flask", "TypeScript",
  "Tailwind", "GSAP", "Three.js", "Framer Motion", "Git",
  "Vercel", "Docker", "PostgreSQL", "Redis", "JWT",
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-xs text-white/60">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: `0 0 10px ${color}40`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #00c3ff, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs mb-3 tracking-widest uppercase" style={{ color: "#b44fff" }}>
            03. My Arsenal
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white">
            Skills & <span className="gradient-text-cyan">Technologies</span>
          </h2>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.name}
              className="glass rounded-2xl p-6"
              style={{ border: `1px solid ${cat.color}15` }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: cat.color }}>
                  {cat.name}
                </p>
              </div>
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  index={i}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Floating tech badges */}
        <motion.div
          className="glass rounded-2xl p-8 relative overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="font-mono text-xs text-white/20 mb-6 uppercase tracking-widest text-center">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_BADGES.map((badge, i) => {
              const colors = ["#b44fff", "#00c3ff", "#00fff5", "#ff6eb4"];
              const c = colors[i % colors.length];
              return (
                <motion.span
                  key={badge}
                  className="px-4 py-2 rounded-full font-mono text-xs cursor-default transition-all duration-300"
                  style={{
                    background: `${c}08`,
                    border: `1px solid ${c}20`,
                    color: `${c}99`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.03 }}
                  whileHover={{
                    scale: 1.1,
                    color: c,
                    borderColor: `${c}60`,
                    boxShadow: `0 0 15px ${c}20`,
                  }}
                >
                  {badge}
                </motion.span>
              );
            })}
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
            style={{ background: "radial-gradient(circle at 0% 0%, rgba(180,79,255,0.1), transparent)" }} />
          <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none"
            style={{ background: "radial-gradient(circle at 100% 100%, rgba(0,195,255,0.1), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
