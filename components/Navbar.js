import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${isScrolled ? "top-0 w-full" : "top-6 w-[95%] max-w-[80rem]"}`}>
      
      {/* Background Glass Plate */}
      <div className={`absolute inset-0 shadow-2xl shadow-[#282360]/10 -z-10 transition-all duration-500 ease-in-out ${isScrolled ? "bg-white/90 backdrop-blur-xl rounded-none" : "glass-card !rounded-full"}`} />

      {/* 1.5px Gradient Border Overlay - Pill Mode */}
      <div 
        className={`absolute inset-0 p-[1.5px] bg-gradient-to-r from-[#0D63CC] via-indigo-400 to-[#00DA99] pointer-events-none -z-10 transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-80 !rounded-full"}`} 
        style={{WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}} 
      />

      {/* 1.5px Gradient Border Overlay - Scrolled Bottom Only Mode */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-[#0D63CC] via-indigo-400 to-[#00DA99] pointer-events-none -z-10 transition-opacity duration-300 ${isScrolled ? "opacity-80" : "opacity-0"}`} 
      />

      <div className="px-8 py-3 flex w-full max-w-[80rem] mx-auto justify-between items-center h-full relative z-10">
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Image src="/MyLogo.png" alt="Logo" width={60} height={40} className="w-auto h-9 object-contain" />
          </motion.div>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-bold">
          {['About', 'Expertise', 'Works', 'Process', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-slate-500 hover:text-[#0D63CC] transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0D63CC] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <button className="flex items-center gap-2 bg-gradient-to-r from-[#0D63CC] to-[#00DA99] px-7 py-2.5 rounded-full text-white text-[13px] font-bold shadow-lg shadow-[#00DA99]/20 hover:shadow-xl hover:shadow-[#0D63CC]/30 transition-all duration-300 hover:scale-105">
          <span>Let's Talk</span>
          <MessageCircle size={15} strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
