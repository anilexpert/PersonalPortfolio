import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: 'discover',
    num: '01',
    label: 'DISCOVER',
    title: 'Uncover The Core',
    desc: 'I begin by understanding the system behind the interface—users, business goals, and technical constraints before drawing a single line.',
    tasks: [
      { label: 'User interviews', color: 'green' },
      { label: 'Stakeholder mapping', color: 'green' },
      { label: 'Competitive analysis', color: 'blue' }
    ]
  },
  {
    id: 'define',
    num: '02',
    label: 'DEFINE',
    title: 'Clarity Before Momentum',
    desc: 'Synthesize fragmented research into a precise problem definition. Establish clear trade-offs, align stakeholders early, and define measurable success criteria before execution begins.',
    tasks: [
      { label: 'Problem framing', color: 'green' },
      { label: 'Success metrics', color: 'green' },
      { label: 'Design principles', color: 'blue' },
      { label: 'Opportunity sizing', color: 'blue' }
    ]
  },
  {
    id: 'design',
    num: '03',
    label: 'DESIGN',
    title: 'Systematic Execution',
    desc: 'Design end-to-end flows, states, and edge cases—not just screens. I build scalable design systems that accelerate development and ensure consistency.',
    tasks: [
      { label: 'Information architecture', color: 'green' },
      { label: 'Design systems', color: 'blue' },
      { label: 'Prototyping', color: 'blue' }
    ]
  },
  {
    id: 'validate',
    num: '04',
    label: 'VALIDATE',
    title: 'Evidence-Based Refinement',
    desc: 'Validate the highest-risk assumptions first using a balance of qualitative and quantitative signals to ensure we built the right thing.',
    tasks: [
      { label: 'Usability testing', color: 'green' },
      { label: 'A/B testing', color: 'green' },
      { label: 'Analytics', color: 'blue' }
    ]
  }
];

export default function HowIDesign() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nodePositions = [
    { top: '0%', left: '50%' },   // 01: Top
    { top: '50%', left: '100%' }, // 02: Right
    { top: '100%', left: '50%' }, // 03: Bottom
    { top: '50%', left: '0%' }    // 04: Left
  ];

  const floatingLabels = [
    { top: '30%', left: '70%', text: 'Discover' }, // Top Right Quadrant
    { top: '70%', left: '70%', text: 'Define' },   // Bottom Right Quadrant
    { top: '70%', left: '30%', text: 'Design' },   // Bottom Left Quadrant
    { top: '30%', left: '30%', text: 'Validate' }, // Top Left Quadrant
  ];

  return (
    <section className="py-24 px-6 relative w-full overflow-hidden" id="process">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* ── HEADER ROW ── */}
        <div className="flex justify-between items-start mb-16 md:mb-24 px-4 lg:px-0">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 w-fit">
              <span className="text-secondary text-sm">✳</span>
              <span className="text-secondary text-[12px] font-bold uppercase tracking-wider">Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              How I
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">Design</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

        {/* Left Section: Architectural Graphic */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8">
          <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px]">
            
            {/* 1. Outer Multi-color Glowing Circle Path */}
            <div className="absolute inset-0 rounded-full p-[1px] opacity-60">
              <div className="absolute inset-0 rounded-full border border-dashed border-text-secondary/10" />
              <div className="absolute inset-0 rounded-full border border-transparent" 
                style={{
                  background: 'linear-gradient(135deg, var(--primary-mint), var(--electric-blue), #7C3AED) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  opacity: 0.4
                }}
              />
              <div className="absolute inset-0 rounded-full blur-[2px] opacity-30"
                style={{
                  border: '2px solid var(--primary-mint)',
                  filter: 'drop-shadow(0 0 8px var(--primary-mint))'
                }}
              />
            </div>
            
            {/* 2. Inner Solid Glassy Path */}
            <div className="absolute inset-[15%] rounded-full border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-[2px]" />

            {/* 3. Multi-color Glowing Diamond */}
            <div className="absolute inset-0 rotate-45 scale-[0.707] p-[1px]">
               <div className="absolute inset-0 border border-dashed border-text-secondary/10" />
               <div className="absolute inset-0 border border-transparent"
                style={{
                  background: 'linear-gradient(45deg, #7C3AED, var(--primary-mint), var(--electric-blue)) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  opacity: 0.3
                }}
               />
            </div>

            {/* 4. Moving Scout (Glowing Orbiting Dot) */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <motion.div
                className="absolute top-1/2 left-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ width: 0, height: 0 }}
              >
                <div 
                  className="absolute w-5 h-5 rounded-full bg-primary shadow-[0_0_25px_var(--primary-mint),0_0_10px_#fff] border border-white/50"
                  style={{
                    left: 250, 
                    top: 0,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              </motion.div>
            </div>

            {/* 5. Center Core (Glass Sphere) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-xl shadow-[inset_0_0_15px_rgba(255,255,255,0.2),0_10px_30px_rgba(0,0,0,0.1)] z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
              <div className="w-4 h-4 rounded-full bg-primary animate-pulse shadow-[0_0_15px_var(--primary-mint)]" />
            </div>

            {/* 6. Step Nodes */}
            {steps.map((step, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={step.id}
                  className="absolute z-30 transition-all duration-700 ease-in-out cursor-pointer"
                  style={{
                    ...nodePositions[i],
                    transform: 'translate(-50%, -50%)',
                  }}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="relative group">
                    {/* Active Halo & Glow */}
                    {isActive && (
                      <>
                        <motion.div
                          layoutId="nodeGlow"
                          className="absolute inset-[-20px] rounded-full bg-primary/20 blur-xl"
                        />
                        <motion.div
                          layoutId="nodeBorder"
                          className="absolute inset-[-10px] border border-primary/40 rounded-full"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                        />
                        <motion.div
                          layoutId="nodeBorderOuter"
                          className="absolute inset-[-20px] border border-primary/10 rounded-full"
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                        />
                      </>
                    )}

                    {/* Main Node Circle (High Glassmorphism) */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : 1,
                      }}
                      className={`w-20 h-20 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center border backdrop-blur-xl relative overflow-hidden transition-all duration-500 ${isActive ? 'shadow-md' : 'shadow-2xl'}`}
                      style={{
                        background: isActive 
                          ? 'linear-gradient(135deg, #00DA99 0%, #0D63CC 100%)' // Premium Brand Gradient
                          : 'rgba(255, 255, 255, 0.7)',
                        borderColor: isActive ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)',
                      }}
                    >
                      {/* Inner Glass Shine */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none ${isActive ? 'opacity-40' : 'opacity-10'}`} />
                      
                      <span className={`text-[10px] md:text-xs font-bold transition-colors duration-300 ${isActive ? 'text-white/90' : 'text-text-secondary/60'}`}>
                        {step.num}
                      </span>
                      <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-white' : 'text-text-primary'}`}>
                        {step.label}
                      </span>
                    </motion.div>
                  </div>
                </div>
              );
            })}


            <div className="absolute inset-0 pointer-events-none opacity-40">
              {floatingLabels.map((label, idx) => (
                <div 
                  key={idx} 
                  className="absolute text-[12px] md:text-sm font-bold text-text-secondary uppercase"
                  style={{ 
                    top: label.top, 
                    left: label.left,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {label.text}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Right Section: Content Card */}
        <div className="w-full lg:w-1/2">
          <div className="glass-card rounded-[40px] p-8 md:p-14 min-h-[480px] flex flex-col justify-between relative overflow-hidden glow-border">
            
            {/* Animated Gradient Background for Card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-1"
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-8 h-[2px] bg-primary" />
                  <span className="text-[12px] font-bold text-secondary uppercase tracking-[0.2em]">
                    PHASE {steps[activeIndex].num} • {steps[activeIndex].label}
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-8 leading-[1.1]">
                  {steps[activeIndex].title}
                </h2>

                <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12 max-w-xl">
                  {steps[activeIndex].desc}
                </p>

                {/* Task Pills */}
                <div className="flex flex-wrap gap-3">
                  {steps[activeIndex].tasks.map((task, i) => (
                    <span 
                      key={i}
                      className="px-5 py-2.5 rounded-full bg-white/40 border border-white/50 text-sm font-semibold text-text-primary shadow-sm backdrop-blur-sm"
                    >
                      {task.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            <div className="mt-16 flex items-center gap-3">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="group py-2 px-1"
                >
                  <div className={`h-[5px] rounded-full transition-all duration-500 ${activeIndex === idx
                    ? 'w-12 bg-primary shadow-[0_0_10px_rgba(0,218,153,0.4)]'
                    : 'w-4 bg-text-secondary/10 group-hover:bg-text-secondary/30'
                    }`} />
                </button>
              ))}
            </div>

          </div>
        </div>

        </div>
      </div>
    </section>
  );
}

