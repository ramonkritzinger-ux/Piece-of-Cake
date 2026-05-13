"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8"
          style={{ background: "var(--charcoal)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 300,
                color: "var(--off-white)",
                letterSpacing: "0.12em",
              }}
            >
              Piece{" "}
              <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
                of
              </span>{" "}
              Cake
            </div>

            <div
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.5)",
              }}
            >
              Luxury Cake Atelier
            </div>
          </motion.div>

          {/* Progress bar */}
          <div
            className="relative z-10"
            style={{ width: "140px", height: "1px", background: "rgba(201,168,76,0.15)" }}
          >
            <motion.div
              style={{
                height: "100%",
                background: "var(--gold)",
                width: `${progress}%`,
                transition: "width 0.03s linear",
              }}
            />
          </div>

          {/* Decorative cake silhouette */}
          <motion.svg
            className="absolute opacity-5"
            width="200"
            height="280"
            viewBox="0 0 200 280"
            fill="none"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="20" y="210" width="160" height="60" rx="4" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
            <rect x="35" y="150" width="130" height="65" rx="4" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
            <rect x="55" y="95" width="90" height="60" rx="4" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
            <rect x="72" y="45" width="56" height="54" rx="3" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
            <line x1="100" y1="44" x2="100" y2="18" stroke="#C9A84C" strokeWidth="0.5" />
            <circle cx="100" cy="14" r="5" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
