"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 22, stiffness: 200, mass: 0.4 };
  const followerX = useSpring(cursorX, springConfig);
  const followerY = useSpring(cursorY, springConfig);

  const dotRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 4 + "px";
        dotRef.current.style.top = e.clientY - 4 + "px";
      }
    };

    const addHover = () => {
      isHovering.current = true;
    };
    const removeHover = () => {
      isHovering.current = false;
    };

    document.addEventListener("mousemove", move);

    const interactives = document.querySelectorAll(
      "a, button, .cursor-hover, [data-cursor]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          width: "8px",
          height: "8px",
          background: "var(--gold)",
          mixBlendMode: "multiply",
          transition: "transform 0.1s",
        }}
      />
      {/* Follower ring */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full"
        style={{
          width: "32px",
          height: "32px",
          border: "1px solid var(--gold)",
          left: followerX,
          top: followerY,
          x: -16,
          y: -16,
          mixBlendMode: "multiply",
        }}
      />
    </>
  );
}
