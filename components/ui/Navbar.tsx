"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className={`
        flex items-center justify-between px-6 py-3 rounded-2xl
        transition-all duration-500
        ${isScrolled ? "w-full max-w-4xl bg-white/70 shadow-lg" : "w-auto bg-white/50"}
        backdrop-blur-md border border-white/40
      `}>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-[#00DA99] to-[#0D63CC] bg-clip-text text-transparent">
            Designer.
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {["Work", "Services", "About", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00DA99] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00DA99]" />
              </Link>
            ))}
          </div>
        </div>

        <button className="bg-[#0F172A] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-black transition-all">
          Let's Talk
        </button>
      </div>
    </motion.nav>
  );
}
