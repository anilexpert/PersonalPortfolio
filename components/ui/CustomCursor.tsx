"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      {/* Outer Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-[0] opacity-30 mix-blend-soft-light"
        style={{
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(0,218,153,0.15) 0%, transparent 70%)",
        }}
      />
      
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-br from-[#00DA99] to-[#0D63CC] rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_rgba(0,218,153,0.5)]"
        style={{
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-primary/30 rounded-full pointer-events-none z-[9998]"
        style={{
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
