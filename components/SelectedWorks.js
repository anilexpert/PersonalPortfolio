import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: "01",
    name: "ALCD Systems",
    category: "COMPLIANCE & WORKFLOW DASHBOARD",
    color: "#00DA99",
    dotColor: "#00DA99",
    leftSub: "HEALTHCARE SYSTEMS",
    leftMain: "ADMIN DASHBOARD",
    rightSub: "UX OPTIMIZATION",
    rightMain: "PRODUCT STRATEGY",
    image: "/images/carevanta.png"
  },
  {
    id: "02",
    name: "SPENDiD",
    category: "FINTECH FINANCIAL PLANNING",
    color: "#0D63CC",
    dotColor: "#0D63CC",
    leftSub: "BUDGETING TOOLS",
    leftMain: "USER EXPERIENCE",
    rightSub: "DATA VISUALIZATION",
    rightMain: "FINANCIAL SAAS",
    image: "/images/spendid.png"
  },
  {
    id: "03",
    name: "OasisNotes",
    category: "PRACTICE MANAGEMENT SYSTEM",
    color: "#6B67CC",
    dotColor: "#6B67CC",
    leftSub: "HEALTHCARE TECH",
    leftMain: "SAAS PLATFORM",
    rightSub: "SYSTEM ARCHITECTURE",
    rightMain: "ENTERPRISE DESIGN",
    image: "/images/OasisNotes.png"
  },
  {
    id: "04",
    name: "Numantra",
    category: "AI-POWERED REGULATORY SUBMISSIONS",
    color: "#F43F5E",
    dotColor: "#F43F5E",
    leftSub: "AI INTEGRATION",
    leftMain: "SMART WORKFLOWS",
    rightSub: "COMPLEX DATA",
    rightMain: "PHARMA TECH",
    image: "/images/numantra.png"
  }
];

const SelectedWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="min-h-screen bg-transparent relative overflow-hidden py-24 flex flex-col justify-center font-['Poppins'] text-text-primary" id="work">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(rgba(0,218,153,0.9) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        {/* Ambient Glows for Light Mode */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(0,218,153,0.06)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(13,99,204,0.06)_0%,transparent_70%)] blur-[100px]" />
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto w-full px-12 relative z-10">

        {/* ── HEADER ROW ── */}
        <div className="flex justify-between items-start mb-24">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-primary text-xl">✳</span>
              <span className="text-primary text-[12px] font-black uppercase tracking-[0.4em]">Featured Projects</span>
            </div>
            <h2 className="text-[56px] md:text-[74px] font-black uppercase tracking-tighter leading-none text-text-primary">
              OUR CREATIVE <span className="text-transparent" style={{ WebkitTextStroke: '1.5px var(--primary-mint)' }}>SHOWCASE</span>
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-[13px] font-black uppercase tracking-[0.2em] flex items-center gap-3 text-white shadow-xl shadow-primary/20"
          >
            <span>View All Projects</span>
            <ArrowUpRight size={18} />
          </motion.button>
        </div>

        {/* ── MAIN CONTENT AREA ── */}
        <div className="relative flex items-center justify-center min-h-[550px] w-full">

          {/* Navigation Arrows (Floating) */}
          <motion.button
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            className="absolute left-0 top-1/2 -translate-y-[150%] z-50 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_30px_rgba(0,218,153,0.3)]"
          >
            <ArrowLeft size={24} strokeWidth={3} />
          </motion.button>

          <motion.button
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            className="absolute right-0 top-1/2 -translate-y-[150%] z-50 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_30px_rgba(0,218,153,0.3)]"
          >
            <ArrowRight size={24} strokeWidth={3} />
          </motion.button>

          {/* Left Vertical Labels */}
          <div className="absolute left-10 flex gap-12 py-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <span className="[writing-mode:vertical-rl] rotate-180 text-[12px] font-semibold text-text-secondary/30">{currentProject.leftSub}</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentProject.color }} />
              <motion.span
                key={currentIndex + 'l'}
                className="[writing-mode:vertical-rl] rotate-180 text-[13px] font-semibold text-text-primary"
              >
                {currentProject.leftMain}
              </motion.span>
            </div>
          </div>

          {/* Center Card (Glass) */}
          <div className="max-w-[900px] w-full relative z-10 px-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full flex flex-col items-center"
              >
                {/* Visual Area - Browser Frame */}
                <div className="relative w-full aspect-video rounded-[32px] bg-white/40 backdrop-blur-[15px] border border-white/60 shadow-2xl shadow-primary/5 flex flex-col mb-16 overflow-hidden group">
                  {/* Browser Header */}
                  <div className="w-full h-10 bg-white/80 border-b border-white/40 flex items-center px-6 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="mx-auto bg-gray-100/50 rounded-md px-12 py-1 text-[10px] text-text-secondary/60 font-medium">
                      www.{currentProject.name.toLowerCase().replace(' ', '')}.io
                    </div>
                  </div>
                  {/* Browser Content */}
                  <div className="relative flex-1 w-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                    // whileHover={{ y: -50 }}
                    // transition={{ duration: 3, ease: "linear" }}
                    >
                      <Image src={currentProject.image} alt={currentProject.name} fill className="object-cover object-center" />
                    </motion.div>
                    {/* Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Footer Content */}
                <div className="flex items-end justify-between w-full px-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentProject.dotColor }} />
                      <span className="text-[14px] font-black uppercase tracking-[0.4em]" style={{ color: currentProject.dotColor }}>{currentProject.name}</span>
                    </div>
                    <h3 className="text-[32px] md:text-[42px] font-black text-text-primary uppercase tracking-tighter leading-none">
                      {currentProject.category}
                    </h3>
                  </div>

                  <div className="flex items-center gap-10 group cursor-pointer mb-2">
                    <span className="text-[14px] font-black text-text-secondary uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">VIEW PROJECT</span>
                    <motion.div
                      whileHover={{ scale: 1.1, backgroundColor: "var(--electric-blue)" }}
                      className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-all group-hover:shadow-[0_0_30px_var(--primary-mint)] group-hover:text-white"
                    >
                      <ArrowUpRight size={28} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Vertical Labels */}
          <div className="absolute right-10 flex gap-12 py-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="[writing-mode:vertical-rl] text-[11px] font-semibold tracking-[0.4em] uppercase text-text-secondary/30">{currentProject.rightSub}</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentProject.color }} />
              <motion.span
                key={currentIndex + 'r'}
                className="[writing-mode:vertical-rl] text-[13px] font-black tracking-[0.3em] uppercase text-text-primary"
              >
                {currentProject.rightMain}
              </motion.span>
            </div>
          </div>

        </div>

        {/* ── BOTTOM NAV ── */}
        <div className="mt-24 flex items-center justify-center relative">
          <div className="flex items-center gap-4">
            {projects.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-primary shadow-[0_0_10px_var(--primary-mint)]' : 'w-2 bg-text-secondary/20 hover:bg-text-secondary/40'}`} />
            ))}
          </div>
          <div className="absolute right-0 flex items-center gap-3 font-black text-[18px] tracking-widest text-text-secondary/20">
            <span className="text-text-primary">0{currentIndex + 1}</span> / 0{projects.length}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SelectedWorks;
