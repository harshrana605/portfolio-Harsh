"use client";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Terminal size={16} style={{ color: "#b44fff" }} />
          <span className="font-mono text-sm gradient-text-purple font-bold">HARSH.DEV</span>
        </div>
        <p className="font-mono text-xs text-white/20 text-center">
          Built with Next.js · TypeScript · GSAP · Three.js · Framer Motion
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/harsh-rana" },
            { icon: Linkedin, href: "https://linkedin.com/in/harsh-rana" },
            { icon: Mail, href: "mailto:harsh@example.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <p className="text-center font-mono text-xs text-white/15 mt-6">
        © 2025 Harsh Rana · Delhi, India
      </p>
    </footer>
  );
}
