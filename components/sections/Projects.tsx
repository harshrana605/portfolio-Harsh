"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Brain, FileText, Mic } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "AI Resume Builder",
    tagline: "ATS-Optimized Resume Generation",
    description:
      "Intelligent resume builder powered by AI that generates ATS-optimized content. Analyzes job descriptions, tailors bullet points, and scores your resume against real ATS criteria.",
    icon: FileText,
    tech: ["React.js", "Flask", "Python", "Gemini AI", "Tailwind CSS", "PDF.js"],
    color: "#b44fff",
    gradient: "from-purple-500/10 to-blue-500/10",
    github: "https://github.com/harsh-rana/ai-resume-builder",
    demo: "#",
    features: ["AI content generation", "ATS score analyzer", "PDF export", "Multiple templates"],
  },
  {
    id: 2,
    title: "BrainWave Quiz AI",
    tagline: "Gemini-Powered Quiz Platform",
    description:
      "Real-time quiz generation platform powered by Google Gemini AI. Generates context-aware questions from any topic, supports multiplayer sessions, and includes a full authentication system.",
    icon: Brain,
    tech: ["MERN Stack", "Gemini API", "Socket.io", "JWT Auth", "MongoDB", "Express"],
    color: "#00c3ff",
    gradient: "from-blue-500/10 to-cyan-500/10",
    github: "https://github.com/harsh-rana/brainwave-quiz",
    demo: "#",
    features: ["Real-time generation", "Multiplayer support", "Auth system", "Score tracking"],
  },
  {
    id: 3,
    title: "BrieflyAI",
    tagline: "AI Meeting Summarizer",
    description:
      "End-to-end AI pipeline that converts spoken meeting audio to structured summaries and actionable tasks. Uses AssemblyAI for transcription and Gemini for intelligent summarization.",
    icon: Mic,
    tech: ["Next.js", "AssemblyAI", "Gemini AI", "Node.js", "MongoDB", "Tailwind"],
    color: "#00fff5",
    gradient: "from-cyan-500/10 to-pink-500/10",
    github: "https://github.com/harsh-rana/brieflyai",
    demo: "#",
    features: ["Speech-to-text", "AI summarization", "Task extraction", "Meeting history"],
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    setTilt({ x, y });
  };

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: hovered ? "transform 0.1s ease" : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        background: "rgba(13, 13, 15, 0.8)",
        border: `1px solid ${hovered ? project.color + "40" : "rgba(255,255,255,0.06)"}`,
        boxShadow: hovered ? `0 0 40px ${project.color}15, 0 20px 60px rgba(0,0,0,0.5)` : "0 4px 30px rgba(0,0,0,0.3)",
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
    >
      {/* Animated gradient border on hover */}
      {hovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50}% ${50}%, ${project.color}10, transparent 70%)`,
          }}
        />
      )}

      {/* Spotlight */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}08, transparent)` }}
      />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
              border: `1px solid ${project.color}30`,
              boxShadow: hovered ? `0 0 20px ${project.color}30` : "none",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <project.icon size={20} style={{ color: project.color }} />
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#fff";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <Github size={15} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-200"
              style={{
                background: `${project.color}15`,
                border: `1px solid ${project.color}30`,
                color: project.color,
              }}
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-white mb-1">{project.title}</h3>
        <p className="font-mono text-xs mb-4" style={{ color: project.color }}>
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {project.features.map((f) => (
            <div key={f} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
              <span className="font-mono text-xs text-white/40">{f}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md font-mono text-xs"
              style={{
                background: `${project.color}10`,
                border: `1px solid ${project.color}20`,
                color: `${project.color}cc`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px opacity-30"
          style={{ background: "linear-gradient(90deg, transparent, #b44fff, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px opacity-30"
          style={{ background: "linear-gradient(90deg, transparent, #00c3ff, transparent)" }}
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
            02. What I've Built
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white">
            Featured <span className="gradient-text-purple">Projects</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/harsh-rana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm transition-all duration-300"
            style={{ color: "rgba(255,255,255,0.3)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#b44fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)";
            }}
          >
            <Github size={16} />
            View more on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
