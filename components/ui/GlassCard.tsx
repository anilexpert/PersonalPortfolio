"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className = "", hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, boxShadow: "0 12px 40px rgba(13, 99, 204, 0.12)" } : {}}
      className={`
        bg-white/55
        backdrop-blur-[18px]
        border border-white/40
        rounded-2xl
        shadow-[0_8px_32px_rgba(13,99,204,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]
        p-6
        transition-all duration-400 cubic-bezier(0.25, 0.8, 0.25, 1)
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
