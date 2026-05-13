"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/app/lib/constants";
import Button from "@/app/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "18px 60px" : "28px 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.5s ease",
          background: scrolled ? "rgba(250,247,242,0.93)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.18)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "22px",
            fontWeight: 400,
            letterSpacing: "0.08em",
            color: "var(--charcoal)",
          }}
          className="cursor-hover"
        >
          Piece{" "}
          <span style={{ color: "var(--gold)", fontStyle: "italic" }}>of</span>{" "}
          Cake
        </Link>

        {/* Desktop nav */}
        <ul
          style={{
            display: "flex",
            gap: "40px",
            listStyle: "none",
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--charcoal)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  opacity: 0.65,
                  transition: "opacity 0.3s",
                  fontWeight: 400,
                  padding: "4px 0",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.65")}
                className="cursor-hover"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("#contact")}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              background: "var(--gold)",
              color: "var(--off-white)",
              padding: "12px 28px",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--charcoal)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
            className="cursor-hover"
          >
            Book a Consultation
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden cursor-hover"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "var(--charcoal)",
                transformOrigin: "center",
              }}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 6 }
                    : i === 1
                    ? { opacity: 0 }
                    : { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "var(--charcoal)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "36px",
                  fontWeight: 300,
                  color: "var(--cream)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                  fontStyle: "italic",
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
