"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          scrolled ? "glass border-b border-white/5 py-3" : "py-5 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #b44fff30, #00c3ff30)", border: "1px solid rgba(180,79,255,0.4)" }}>
              <Terminal size={14} className="text-purple-neon relative z-10" style={{ color: "#b44fff" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #b44fff50, #00c3ff50)" }} />
            </div>
            <span className="font-mono text-sm font-bold gradient-text-purple">
              HARSH.DEV
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative font-mono text-xs text-white/50 hover:text-white transition-colors duration-300 group uppercase tracking-widest"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6 + i * 0.1 }}
              >
                <span className="text-purple-400/60 mr-1" style={{ color: "rgba(180,79,255,0.5)" }}>0{i + 1}.</span>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-neon to-blue-electric group-hover:w-full transition-all duration-300"
                  style={{ background: "linear-gradient(90deg, #b44fff, #00c3ff)" }} />
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="/resume.pdf"
            download
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all duration-300 magnetic"
            style={{
              background: "linear-gradient(135deg, rgba(180,79,255,0.1), rgba(0,195,255,0.1))",
              border: "1px solid rgba(180,79,255,0.3)",
              color: "#b44fff",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(180,79,255,0.3)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(180,79,255,0.8)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(180,79,255,0.3)";
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
          >
            Resume
          </motion.a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[8999] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-2xl" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute top-20 left-0 right-0 p-8 flex flex-col gap-6"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left font-mono text-xl text-white/70 hover:text-white transition-colors py-2 border-b border-white/5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span style={{ color: "rgba(180,79,255,0.7)" }}>0{i + 1}. </span>
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
