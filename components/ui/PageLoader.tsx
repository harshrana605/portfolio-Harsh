"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = [
    "Initializing systems...",
    "Loading neural interface...",
    "Deploying portfolio...",
    "Ready.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return p + 2;
      });
    }, 30);

    const phaseInterval = setInterval(() => {
      setPhase((p) => Math.min(p + 1, phases.length - 1));
    }, 600);

    return () => {
      clearInterval(interval);
      clearInterval(phaseInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Animated rings */}
          <div className="relative mb-12">
            {[80, 60, 40].map((size, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-purple-500/20"
                style={{
                  width: size,
                  height: size,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  animation: `spin ${3 + i}s linear infinite ${i % 2 === 0 ? "" : "reverse"}`,
                  borderColor: i === 0 ? "rgba(180, 79, 255, 0.4)" : i === 1 ? "rgba(0, 195, 255, 0.3)" : "rgba(0, 255, 245, 0.2)",
                }}
              />
            ))}
            <div className="relative z-10 flex items-center justify-center w-20 h-20">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  background: "radial-gradient(circle, #b44fff, #00c3ff)",
                  boxShadow: "0 0 20px rgba(180, 79, 255, 0.8), 0 0 40px rgba(0, 195, 255, 0.4)",
                }}
              />
            </div>
          </div>

          {/* Name */}
          <motion.h1
            className="text-3xl font-display font-bold mb-2 gradient-text-purple tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            HARSH RANA
          </motion.h1>

          {/* Phase text */}
          <motion.p
            className="font-mono text-sm text-cyan-neon/70 mb-8 h-5"
            key={phase}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {phases[phase]}
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-px bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #b44fff, #00c3ff, #00fff5)",
                boxShadow: "0 0 10px rgba(180, 79, 255, 0.8)",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="font-mono text-xs text-white/20 mt-2">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
