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
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 w-fit">
              <span className="text-secondary text-sm">✳</span>
              <span className="text-secondary text-[12px] font-bold uppercase tracking-wider">Featured Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Our Creative
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">Showcase</span>
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-secondary to-primary rounded-full text-[16px] font-semibold flex items-center gap-3 text-white shadow-[0_8px_24px_rgba(13,99,204,0.15)] border border-white/20"
          >
            <span>View All Projects</span>
            <ArrowUpRight size={18} className="stroke-[2]" />
          </motion.button>
        </div>

        {/* ── MAIN CONTENT AREA ── */}
        <div className="relative flex items-center justify-center min-h-[550px] w-full">

          {/* Navigation Arrows (Floating) */}
          <div className="absolute inset-x-0 top-1 -translate-y-1/2 flex justify-between items-center pointer-events-none z-50">
            <motion.button
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm flex items-center justify-center text-secondary hover:text-primary transition-colors group ml-[-32px] md:ml-0"
            >
              <ArrowLeft size={24} strokeWidth={2} />
            </motion.button>

            <motion.button
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm flex items-center justify-center text-secondary hover:text-primary transition-colors group mr-[-32px] md:mr-0"
            >
              <ArrowRight size={24} strokeWidth={2} />
            </motion.button>
          </div>

          {/* Left Vertical Labels */}
          <div className="absolute left-0 flex gap-10 py-12 opacity-40 hover:opacity-100 transition-opacity duration-500 hidden xl:flex">
            <div className="flex flex-col items-center gap-6">
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-text-secondary/20 to-transparent" />
              <span className="[writing-mode:vertical-rl] rotate-180 text-[16px] font-semibold text-text-secondary">{currentProject.leftSub}</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
              <motion.span
                key={currentIndex + 'l'}
                className="[writing-mode:vertical-rl] rotate-180 text-[16px] font-semibol text-text-primary"
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
                <div className="relative w-full aspect-video rounded-[24px] bg-white/40 backdrop-blur-[12px] border border-white/60 shadow-sm shadow-primary/5 flex flex-col mb-10 overflow-hidden group">
                  {/* Browser Header */}
                  <div className="w-full h-10 bg-white/80 border-b border-white/40 flex items-center px-6 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="mx-auto bg-gray-100/50 rounded-md px-12 py-1 text-[12px] text-text-secondary/60 font-medium">
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
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: currentProject.dotColor }} />
                      <span className="text-[14px] font-semibold" style={{ color: currentProject.dotColor }}>{currentProject.name}</span>
                    </div>
                    <h3 className="text-[24px] md:text-[32px] font-semibold text-text-primary leading-none">
                      {currentProject.category}
                    </h3>
                  </div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 group cursor-pointer mb-2"
                  >
                    <span className="text-[16px] font-semibold text-primary opacity-80 group-hover:opacity-100 transition-opacity">View Project</span>
                    <motion.div
                      whileHover={{ backgroundColor: "var(--electric-blue)", color: "#fff" }}
                      className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center transition-all group-hover:shadow-sm"
                    >
                      <ArrowUpRight size={24} className="stroke-[2]" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Vertical Labels */}
          <div className="absolute right-0 flex gap-10 py-12 opacity-40 hover:opacity-100 transition-opacity duration-500 hidden xl:flex">
            <div className="flex flex-col items-center gap-6">
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
              <span className="[writing-mode:vertical-rl] text-[16px] font-semibold text-text-secondary">{currentProject.rightSub}</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-secondary/40 to-transparent" />
              <motion.span
                key={currentIndex + 'r'}
                className="[writing-mode:vertical-rl] text-[16px] font-semibold text-text-primary"
              >
                {currentProject.rightMain}
              </motion.span>
            </div>
          </div>

        </div>

        {/* ── BOTTOM NAV ── */}
        <div className="mt-10 flex items-center justify-between relative px-6">
          <div className="flex items-center gap-3">
            {projects.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)} 
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-secondary shadow-[0_0_15px_rgba(13,99,204,0.3)]' : 'w-1.5 bg-text-secondary/20 hover:bg-text-secondary/40'}`} 
              />
            ))}
          </div>
          <div className="flex items-center gap-4 font-semibold text-[16px] text-text-secondary/40">
            <span className="text-text-primary text-[24px] font-black">0{currentIndex + 1}</span> 
            <div className="w-8 h-[1px] bg-text-secondary/40" />
            <span>0{projects.length}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SelectedWorks;
