"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Terminal } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  const contacts = [
    { icon: Mail, label: "Email", value: "harsh@gmail.com", href: "mailto:harsh.rana.605@gmail.com", color: "#b44fff" },
    { icon: Github, label: "GitHub", value: "github.com", href: "https://github.com/harshrana605", color: "#00c3ff" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/harsh-rana", href: "https://linkedin.com/in/harsh-rana", color: "#00fff5" },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 contact-grid opacity-50" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(180,79,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs mb-3 tracking-widest uppercase" style={{ color: "#b44fff" }}>
            05. Get In Touch
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">
            Let's <span className="gradient-text-purple">Connect</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            Open for collaborations, freelance projects, and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Terminal style info block */}
            <div
              className="rounded-2xl overflow-hidden mb-8"
              style={{
                background: "rgba(5,5,5,0.9)",
                border: "1px solid rgba(180,79,255,0.25)",
                boxShadow: "0 0 40px rgba(180,79,255,0.1)",
              }}
            >
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(20,20,25,0.9)" }}
              >
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <Terminal size={12} className="ml-2" style={{ color: "#b44fff" }} />
                <span className="font-mono text-xs text-white/20">contact.sh</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <span style={{ color: "#00fff5" }}>$ </span>
                  <span className="text-white/40">whoami</span>
                  <div className="mt-1 ml-4 text-white/70">Harsh Rana — Full Stack Dev & AI Engineer</div>
                </div>
                <div>
                  <span style={{ color: "#00fff5" }}>$ </span>
                  <span className="text-white/40">location</span>
                  <div className="mt-1 ml-4 flex items-center gap-1 text-white/70">
                    <MapPin size={12} style={{ color: "#b44fff" }} /> Delhi, India
                  </div>
                </div>
                <div>
                  <span style={{ color: "#00fff5" }}>$ </span>
                  <span className="text-white/40">status</span>
                  <div className="mt-1 ml-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span style={{ color: "#4ade80" }}>Available for opportunities</span>
                  </div>
                </div>
                <div className="flex items-center gap-0">
                  <span style={{ color: "#00fff5" }}>$ </span>
                  <span className="terminal-cursor ml-1" style={{ color: "#00fff5" }} />
                </div>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-4">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass transition-all duration-300 group"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${c.color}30`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${c.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${c.color}15`,
                      border: `1px solid ${c.color}30`,
                    }}
                  >
                    <c.icon size={18} style={{ color: c.color }} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-white/30 uppercase tracking-widest">{c.label}</p>
                    <p className="font-mono text-sm text-white/70 group-hover:text-white transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="glass rounded-2xl p-8"
              style={{ border: "1px solid rgba(180,79,255,0.15)" }}
            >
              <p className="font-display font-bold text-lg text-white mb-6">Send me a message</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-mono text-xs text-white/30 mb-2 block uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    className="neon-input w-full px-4 py-3 rounded-xl font-mono text-sm text-white placeholder:text-white/20"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-white/30 mb-2 block uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="neon-input w-full px-4 py-3 rounded-xl font-mono text-sm text-white placeholder:text-white/20"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-white/30 mb-2 block uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                    placeholder="What's on your mind?"
                    className="neon-input w-full px-4 py-3 rounded-xl font-mono text-sm text-white placeholder:text-white/20 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: sent
                      ? "linear-gradient(135deg, #4ade80, #22c55e)"
                      : "linear-gradient(135deg, #b44fff, #00c3ff)",
                    color: "white",
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={(e) => {
                    if (!sending && !sent) {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(180,79,255,0.5)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : sent ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
