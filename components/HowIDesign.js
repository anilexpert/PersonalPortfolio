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
  const [activeIndex, setActiveIndex] = useState(1);

  const nodePositions = [
    { top: '0%', left: '50%', transform: 'translate(-50%, -50%)' },
    { top: '50%', left: '100%', transform: 'translate(-50%, -50%)' },
    { top: '100%', left: '50%', transform: 'translate(-50%, -50%)' },
    { top: '50%', left: '0%', transform: 'translate(-50%, -50%)' }
  ];

  return (
    <section className="py-24 px-6 relative w-full overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">

            <div className="absolute inset-0 border-[1.5px] border-dashed border-text-secondary/20 rotate-45 scale-[0.707]" />
            <div className="absolute inset-0 border-[1.5px] border-dashed border-text-secondary/20 rounded-full" />
            <div className="absolute inset-1/4 border border-text-secondary/10 rounded-full" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary animate-pulse" />
            </div>

            {steps.map((step, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={step.id}
                  className="absolute z-10 transition-all duration-500 ease-out cursor-pointer"
                  style={nodePositions[i]}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="relative flex items-center justify-center">

                    {isActive && (
                      <motion.div
                        layoutId="activeRing"
                        className="absolute inset-[-12px] border border-primary/40 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="glass-card rounded-[40px] p-8 md:p-14 min-h-[450px] flex flex-col justify-between relative overflow-hidden glow-border">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[12px] font-bold text-secondary uppercase tracking-[0.2em]">
                    {steps[activeIndex].num} • {steps[activeIndex].label}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                  {steps[activeIndex].title}
                </h2>

                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-10">
                  {steps[activeIndex].desc}
                </p>

              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex items-center gap-2">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="py-2"
                >
                  <div className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx
                    ? 'w-10 bg-primary'
                    : 'w-6 bg-text-secondary/10 hover:bg-text-secondary/20'
                    }`} />
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
