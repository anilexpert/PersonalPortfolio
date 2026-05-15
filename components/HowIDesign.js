import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: 'understand',
    num: '01',
    label: 'UNDERSTAND',
    title: 'Align on the Core',
    desc: 'I start by understanding the problem space—users, business goals, and constraints. This phase ensures every decision is grounded in real needs, not assumptions.',
    tasks: [
      { label: 'User research', color: 'green' },
      { label: 'Stakeholder alignment', color: 'green' },
      { label: 'Problem framing', color: 'blue' }
    ]
  },
  {
    id: 'structure',
    num: '02',
    label: 'STRUCTURE',
    title: 'Define the Product Direction',
    desc: 'I translate insights into clear product flows, information architecture, and system logic—bringing structure to complexity before moving into design.',
    tasks: [
      { label: 'User flows', color: 'green' },
      { label: 'IA design', color: 'green' },
      { label: 'System mapping', color: 'blue' }
    ]
  },
  {
    id: 'design',
    num: '03',
    label: 'DESIGN',
    title: 'Craft the Experience',
    desc: 'I design intuitive, scalable interfaces that balance usability, clarity, and visual consistency—ensuring the product works seamlessly in real scenarios.',
    tasks: [
      { label: 'UI/UX design', color: 'green' },
      { label: 'Design systems', color: 'blue' },
      { label: 'Prototyping', color: 'blue' }
    ]
  },
  {
    id: 'deliver',
    num: '04',
    label: 'DELIVER',
    title: 'Build, Test & Improve',
    desc: 'I collaborate closely with developers and stakeholders to refine, validate, and iterate—ensuring the final product delivers real impact.',
    tasks: [
      { label: 'Handoff', color: 'green' },
      { label: 'Iteration', color: 'green' },
      { label: 'Continuous improvement', color: 'blue' }
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
    { top: '30%', left: '70%', text: 'Understand' }, // Top Right Quadrant
    { top: '70%', left: '70%', text: 'Structure' },   // Bottom Right Quadrant
    { top: '70%', left: '30%', text: 'Design' },   // Bottom Left Quadrant
    { top: '30%', left: '30%', text: 'Deliver' }, // Top Left Quadrant
  ];

  return (
    <section className="pt-10 pb-16 md:py-18 px-6 relative w-full overflow-hidden" id="process">
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
            <h2 className="text-[32px] sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              How I
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">Work</span>
            </h2>
            <p className="text-[14px] sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-lg">
              A simple, transparent process built around outcomes.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* Left Section: Architectural Graphic */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-0 sm:p-4 md:p-8">
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px]">

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
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <div
                    className="absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary shadow-[0_0_25px_var(--primary-mint),0_0_10px_#fff] border border-white/50"
                    style={{
                      right: 0,
                      top: '50%',
                      transform: 'translate(50%, -50%)'
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

                      <motion.div
                        animate={{
                          scale: isActive ? 1.2 : 1,
                        }}
                        className={`w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center border backdrop-blur-xl relative overflow-hidden transition-all duration-500 ${isActive ? 'shadow-md' : 'shadow-2xl'}`}
                        style={{
                          background: isActive
                            ? 'linear-gradient(135deg, #00DA99 0%, #0D63CC 100%)' // Premium Brand Gradient
                            : 'rgba(255, 255, 255, 0.7)',
                          borderColor: isActive ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)',
                        }}
                      >
                        {/* Inner Glass Shine */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none ${isActive ? 'opacity-40' : 'opacity-10'}`} />

                        <span className={`text-[8px] sm:text-[10px] md:text-xs font-bold transition-colors duration-300 ${isActive ? 'text-white/90' : 'text-text-secondary/60'}`}>
                          {step.num}
                        </span>
                        <span className={`text-[8px] sm:text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-white' : 'text-text-primary'}`}>
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
                    className="absolute text-[9px] sm:text-[12px] md:text-sm font-bold text-text-secondary uppercase"
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
          <div className="w-full lg:w-1/2 relative group">

            {/* Card Outer Glow/Border effect */}
            <div className="absolute -inset-[1px] rounded-lg lg:rounded-[24px] bg-gradient-to-br from-primary/30 via-white/10 to-secondary/30 blur-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="glass-card rounded-lg lg:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16 min-h-[460px] md:min-h-[520px] flex flex-col justify-between relative overflow-hidden bg-white/40 backdrop-blur-2xl border border-white/60 shadow-sm mt-8 lg:mt-0">

              {/* Animated Ambient Background for Card */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex-1 relative z-10"
                >
                  {/* Giant Watermark Number */}
                  <div className="absolute -top-12 -right-4 md:-right-8 text-[140px] md:text-[200px] font-black text-transparent pointer-events-none select-none opacity-20"
                    style={{
                      WebkitTextStroke: '2px var(--primary-mint)',
                    }}
                  >
                    {steps[activeIndex].num}
                  </div>

                  {/* Phase Tag */}
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-[#0D63CC]/10 to-[#00DA99]/10 border border-primary/30 backdrop-blur-md mb-10">
                    <span className="text-[12px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99] uppercase tracking-[0.2em]">
                      PHASE {steps[activeIndex].num} • {steps[activeIndex].label}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary mb-8 leading-[1.1] tracking-tight relative z-10 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    {steps[activeIndex].title}
                  </h2>

                  {/* Description */}
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-12 max-w-xl font-medium relative z-10">
                    {steps[activeIndex].desc}
                  </p>

                  {/* Trendy Task Pills */}
                  <div className="flex flex-wrap gap-4 relative z-10">
                    {steps[activeIndex].tasks.map((task, i) => (
                      <div
                        key={i}
                        className={`relative px-3 py-1.5 rounded-full hover:-translate-y-1 transition-all duration-300 cursor-default border backdrop-blur-md ${task.color === 'green' ? 'bg-[#00DA99]/10 border-[#00DA99]/30' : 'bg-[#0D63CC]/10 border-[#0D63CC]/30'}`}
                      >
                        <div className="relative flex items-center z-10">
                          <span className={`text-[12px] md:text-sm font-semibold tracking-wide ${task.color === 'green' ? 'text-primary' : 'text-secondary'}`}>
                            {task.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pagination Controls */}
              <div className="mt-16 flex items-end gap-3 relative z-10">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="group py-2 px-1 flex flex-col gap-2 items-center"
                  >
                    <span className={`text-[10px] font-bold transition-all duration-300 -translate-y-2 group-hover:translate-y-0 ${activeIndex === idx ? 'text-primary opacity-100 translate-y-0' : 'text-text-secondary/40 opacity-0 group-hover:opacity-100'}`}>0{idx + 1}</span>
                    <div className={`h-[5px] rounded-full transition-all duration-500 ${activeIndex === idx
                      ? 'w-14 bg-primary shadow-[0_0_15px_rgba(0,218,153,0.5)]'
                      : 'w-6 bg-text-secondary/10 group-hover:bg-text-secondary/30'
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

