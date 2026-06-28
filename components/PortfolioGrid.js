import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import PortfolioCard from './PortfolioCard';
import Image from 'next/image';
import CTA from './CTA';
import Link from 'next/link';
import { Search, Target, Layers, PenTool, CheckCircle, ArrowRight, Lightbulb } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const filters = [
  "All",
  "AI Products",
  "Enterprise SaaS",
  "Healthcare",
  "Analytics",
  "EdTech",
  "Mobile Apps",
  "Design System",
  "Dashboard UX"
];

const industries = ["Healthcare", "AI", "Enterprise SaaS", "FinTech", "EdTech", "Analytics"];

const processSteps = [
  { id: 1, title: 'PROBLEM', desc: 'Business Problem', icon: Target, style: 'dashed' },
  { id: 2, title: 'RESEARCH', desc: 'Research & Discovery', icon: Search, style: 'dashed' },
  { id: 3, title: 'STRATEGY', desc: 'Product Strategy', icon: Lightbulb, style: 'solid' },
  { id: 4, title: 'ARCHITECT', desc: 'UX Architecture', icon: Layers, style: 'solid' },
  { id: 5, title: 'DESIGN', desc: 'Design Process', icon: PenTool, style: 'solid' },
  { id: 6, title: 'OUTCOMES', desc: 'Final Outcomes', icon: CheckCircle, style: 'filled' }
];

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.tags && p.tags.includes(activeFilter));

  return (
    <div className="bg-transparent text-text-primary">
      {/* Header Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
        {/* bg glows */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Breadcrumb */}
          <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-2 text-[10px] md:text-[12px] font-semibold text-text-secondary uppercase tracking-widest mb-4 md:mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary">Case Studies</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-[24px] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6"
          >
            Product Design Expertise
            {/* <br className="hidden md:block" /> */}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"> Across Complex Domains</span>
          </motion.h1>

          {/* <motion.p {...fadeUp(0.2)} className="max-w-3xl mx-auto text-[16px] md:text-[18px] text-text-secondary leading-relaxed mb-6">
            Over the past decade, I have designed AI products, enterprise SaaS platforms, healthcare ecosystems, analytics dashboards, and workflow-driven applications that solve complex operational challenges and create measurable business impact.
          </motion.p> */}
        </div>
      </section>

      {/* Enhanced Filters Section */}
      <section className="px-4 relative z-20 mt-6 lg:mt-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-nowrap items-center gap-3 md:gap-4 overflow-x-auto pb-4 pt-4 scrollbar-hide snap-x"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative transition-all duration-300 flex items-center justify-center whitespace-nowrap min-w-max px-5 py-2.5 md:px-6 md:py-3 rounded-[16px] text-[13px] md:text-[14px] font-bold ${activeFilter === filter
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-[0_8px_24px_rgba(0,218,153,0.3)] border border-transparent -translate-y-1'
                  : 'glass-card border border-white/40 bg-white/10 shadow-sm text-text-primary hover:scale-105 hover:bg-white/20'
                  }`}
              >
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto min-h-[400px]">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-8 lg:gap-y-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <PortfolioCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-text-secondary">
              <p>No projects found in this category.</p>
              <button onClick={() => setActiveFilter("All")} className="mt-4 text-primary font-bold hover:underline">
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="relative overflow-hidden p-8 md:p-16 rounded-[40px] glass-card border border-white/20 bg-white/5 shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="text-center relative z-10">
              <h2 className="text-[28px] md:text-[36px] font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-10">Every Case Study Includes</h2>

              <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-6 lg:gap-8 relative w-full mt-12 mb-8">
                {/* Connecting Dashed Line (Desktop only) */}
                <div className="hidden md:block absolute top-[44px] lg:top-[52px] left-[5%] right-[5%] h-[2px] border-t-2 border-dashed border-[#cbd5e1] z-0" />

                {processSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="relative z-10 flex flex-col items-center w-full md:w-28 lg:w-36 group">
                      {/* Arrow on the dashed line (Desktop) */}
                      {idx < processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-[34px] lg:top-[42px] -right-[16px] md:-right-[16px] lg:-right-[24px] text-[#cbd5e1] z-0">
                          <ArrowRight size={18} />
                        </div>
                      )}

                      <div className={`w-24 h-24 lg:w-28 lg:h-28 rounded-full flex flex-col items-center justify-center gap-2 mb-6 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl ${step.style === 'dashed'
                        ? 'bg-white border-[2px] border-dashed border-[#cbd5e1] text-[#1e293b]'
                        : step.style === 'solid'
                          ? 'bg-[#eff6ff] border-[2px] border-[#3b82f6] text-[#1e293b]'
                          : 'bg-[#1e1b4b] text-white shadow-lg'
                        }`}>
                        <Icon size={24} strokeWidth={1.5} />
                        <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.15em]">{step.title}</span>
                      </div>

                      <p className="text-[12px] lg:text-[13px] text-center text-text-secondary font-medium leading-relaxed max-w-[120px]">
                        {step.desc}
                      </p>

                      {/* Arrow for mobile (shown between items) */}
                      {idx < processSteps.length - 1 && (
                        <div className="md:hidden my-4 text-[#cbd5e1]">
                          <ArrowRight size={20} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators (Moved to bottom) */}
      <section className="py-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0.2)} className="relative overflow-hidden p-8 md:p-16 rounded-[40px] glass-card border border-white/20 bg-white/5 shadow-2xl text-center">
            <h2 className="text-[24px] md:text-[32px] font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-10">Industries Served</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 relative z-10">
              {industries.map((ind, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-4 rounded-[16px] glass-card border border-white/40 bg-white/10 shadow-sm hover:scale-105 transition-transform duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
                  <span className="text-[14px] md:text-[15px] font-bold text-text-primary">{ind}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="mt-10">
        <CTA />
      </div>
    </div>
  );
};

export default PortfolioGrid;
