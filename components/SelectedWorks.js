import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    slug: "spendora",
    id: "01",
    name: "Spendora™",
    category: "AI-POWERED SMART EXPENSE ECOSYSTEM",
    color: "#00DA99",
    dotColor: "#00DA99",
    leftSub: "FINTECH SOLUTIONS",
    leftMain: "SMART BUDGETING",
    rightSub: "AI ANALYTICS",
    rightMain: "FINANCIAL SAAS",
    image: "/images/spendora.png"
  },
  {
    id: "02",
    slug: "carenova",
    name: "carenova Systems™",
    category: "FACILITY & COMPLIANCE PLATFORM",
    color: "#0D63CC",
    dotColor: "#0D63CC",
    leftSub: "ENTERPRISE SAAS",
    leftMain: "COMPLIANCE TRACKING",
    rightSub: "WORKFLOW AUTOMATION",
    rightMain: "FACILITY OPS",
    image: "/images/carevanata.png"
  },
  {
    id: "03",
    slug: "oasispad",
    name: "OasisPad™",
    category: "SMART KNOWLEDGE & PRODUCTIVITY",
    color: "#6B67CC",
    dotColor: "#6B67CC",
    leftSub: "KNOWLEDGE MGMT",
    leftMain: "AI NOTE-TAKING",
    rightSub: "PRODUCTIVITY",
    rightMain: "COLLABORATION",
    image: "/images/oasispad.png"
  },
  {
    id: "04",
    slug: "ticketstack",
    name: "TicketStack™",
    category: "RETAIL TICKETING REDESIGN",
    color: "#F43F5E",
    dotColor: "#F43F5E",
    leftSub: "RETAIL ECOSYSTEM",
    leftMain: "CLOUD TICKETING",
    rightSub: "SCALABLE MGMT",
    rightMain: "UX REDESIGN",
    image: "/images/ticketstack.png"
  },
  {
    id: "05",
    slug: "marketvisionai",
    name: "MarketVisionAI™",
    category: "AI-POWERED MARKET INTELLIGENCE",
    color: "#F59E0B",
    dotColor: "#F59E0B",
    leftSub: "PREDICTIVE ANALYTICS",
    leftMain: "MARKET INSIGHTS",
    rightSub: "STRATEGIC TRENDS",
    rightMain: "BUSINESS INTEL",
    image: "/images/marketvisionai.png"
  },
  {
    id: "06",
    slug: "carenova",
    name: "PulseGrid™",
    category: "SAAS ANALYTICS & BI PLATFORM",
    color: "#8B5CF6",
    dotColor: "#8B5CF6",
    leftSub: "REAL-TIME KPIs",
    leftMain: "SAAS ANALYTICS",
    rightSub: "CONVERSION TRACKING",
    rightMain: "EXECUTIVE REPORTING",
    image: "/images/pulse-grid.png"
  },
  {
    id: "07",
    slug: "mri-logic",
    name: "MRI Logic™",
    category: "AI-ASSISTED DEVICE VALIDATION",
    color: "#06B6D4",
    dotColor: "#06B6D4",
    leftSub: "HEALTHCARE TECH",
    leftMain: "MRI VALIDATION",
    rightSub: "AI COMPLIANCE",
    rightMain: "MEDTECH PLATFORM",
    image: "/images/pulse-grid.png"
  },
  {
    id: "08",
    slug: "carevation",
    name: "Carevation™",
    category: "SMART CAREGIVING PLATFORM",
    color: "#00DA99",
    dotColor: "#00DA99",
    leftSub: "HEALTHCARE TECH",
    leftMain: "CARE COORDINATION",
    rightSub: "FAMILY CARE",
    rightMain: "MOBILE APP",
    image: "/images/Carevation-Card-Folio.png"
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
    <section className="min-h-screen bg-transparent relative overflow-hidden py-24 flex flex-col justify-center text-text-primary" id="work">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(rgba(0,218,153,0.9) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        {/* Ambient Glows for Light Mode */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-[15%] -left-[15%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(0,218,153,0.06)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute -bottom-[15%] -right-[15%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(13,99,204,0.06)_0%,transparent_70%)] blur-[100px]" />
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

          <Link href="/case-studies" passHref legacyBehavior>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-secondary to-primary rounded-full text-[16px] font-semibold flex items-center gap-3 text-white shadow-[0_8px_24px_rgba(13,99,204,0.15)] border border-white/20 cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowUpRight size={18} className="stroke-[2]" />
            </motion.button>
          </Link>
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
                variants={{
                  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.98 }),
                  center: { opacity: 1, x: 0, scale: 1 },
                  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.98 })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

                  <Link href={`/case-studies/${currentProject.slug}`} passHref>
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
                  </Link>
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
