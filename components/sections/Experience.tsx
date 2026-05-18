"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";

const TIMELINE = [
  {
    type: "education",
    icon: GraduationCap,
    title: "B.Tech Computer Science Engineering",
    org: "Delhi Technical Campus",
    period: "2022 – 2026",
    desc: "Pursuing B.Tech in CSE with focus on AI, full stack development, and software engineering. Active in tech clubs and hackathons.",
    highlight: "CGPA: 8.003",
    color: "#b44fff",
    tags: ["DSA", "OS", "DBMS", "AI/ML", "Web Dev"],
  },
  {
    type: "cert",
    icon: Award,
    title: "NPTEL Cloud Computing",
    org: "National Programme on Technology Enhanced Learning",
    period: "2024",
    desc: "Completed NPTEL's Cloud Computing certification covering distributed systems, cloud architectures, virtualization, and deployment strategies.",
    highlight: "Certified",
    color: "#00c3ff",
    tags: ["Cloud", "AWS", "Distributed Systems", "Virtualization"],
  },
  {
    type: "education",
    icon: BookOpen,
    title: "Intermediate (Class XII)",
    org: "CBSE Board",
    period: "2022",
    desc: "Completed senior secondary education with exceptional academic performance in Mathematics and Physics.",
    highlight: "93.4%",
    color: "#00fff5",
    tags: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    type: "education",
    icon: Star,
    title: "High School (Class X)",
    org: "CBSE Board",
    period: "2020",
    desc: "Completed secondary education with strong foundation in core subjects.",
    highlight: "89.2%",
    color: "#ff6eb4",
    tags: ["Science", "Mathematics"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute -top-40 right-0 w-96 h-96 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(180,79,255,0.15), transparent)" }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs mb-3 tracking-widest uppercase" style={{ color: "#b44fff" }}>
            04. My Journey
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white">
            Education & <span className="gradient-text-purple">Achievements</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, #b44fff, #00c3ff, #00fff5, transparent)" }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-12">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}25, ${item.color}10)`,
                      border: `2px solid ${item.color}50`,
                      boxShadow: `0 0 20px ${item.color}30`,
                    }}
                    whileInView={{
                      boxShadow: [`0 0 20px ${item.color}30`, `0 0 40px ${item.color}50`, `0 0 20px ${item.color}30`],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-1/2" />

                {/* Content card */}
                <div className="pl-20 md:pl-0 md:w-1/2">
                  <div
                    className="glass rounded-2xl p-6 transition-all duration-300 group"
                    style={{ border: `1px solid ${item.color}15` }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${item.color}30`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${item.color}10`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${item.color}15`;
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display font-bold text-lg text-white">{item.title}</h3>
                        <p className="font-mono text-xs mt-1" style={{ color: item.color }}>{item.org}</p>
                      </div>
                      <span className="font-mono text-xs text-white/30 flex-shrink-0 ml-4">{item.period}</span>
                    </div>

                    <p className="text-white/50 text-sm leading-relaxed mb-4">{item.desc}</p>

                    {/* Highlight badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded font-mono text-xs"
                            style={{
                              background: `${item.color}10`,
                              border: `1px solid ${item.color}20`,
                              color: `${item.color}99`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span
                        className="font-display font-bold text-xl ml-4 flex-shrink-0"
                        style={{ color: item.color }}
                      >
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
