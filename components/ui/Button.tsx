"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = "primary", className = "", onClick }: ButtonProps) {
  const baseStyles = "px-8 py-3.5 rounded-full font-bold transition-all duration-400 flex items-center justify-center gap-2 text-sm md:text-base";
  
  const variants = {
    primary: "bg-gradient-to-br from-[#00DA99] to-[#0D63CC] text-white shadow-[0_6px_20px_rgba(0,218,153,0.25)] hover:shadow-[0_10px_25px_rgba(0,218,153,0.35)]",
    secondary: "bg-white/60 backdrop-blur-md border border-white/40 text-[#0F172A] hover:bg-white/80"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
