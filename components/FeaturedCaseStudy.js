import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FeaturedCaseStudy = () => {
  return (
    <section className="py-16 px-6 relative z-10" id="case-study">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">
              Featured Case Study
            </span>
          </div>
          <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            Solving Complex <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Product Challenges</span>
          </h2>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden glass-card bg-white/40 border border-white/40 rounded-[24px] lg:rounded-[32px] transition-all duration-500 hover:shadow-2xl hover:bg-white/50"
        >
          {/* Top Right Glow Effect */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 blur-[80px] rounded-full transition-all duration-700 pointer-events-none z-0 opacity-30 scale-100 group-hover:opacity-70 group-hover:scale-125"
            style={{ background: 'linear-gradient(135deg, #00DA99 0%, #0D63CC 100%)' }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
            {/* Left: Graphic */}
            <div className="p-6 md:p-8 lg:p-4">
              <div className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-2xl bg-gradient-to-br from-[#00DA99] to-[#0D63CC] p-2 flex items-center justify-center relative overflow-hidden shadow-inner">
                {/* Project Image */}
                <img
                  src="/images/Carenova-Case-Study.png"
                  alt="carenova Health Workflow System"
                  className="w-full h-auto object-cover rounded-xl shadow-2xl relative z-10"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00DA99] mb-2 block">
                    PROJECT
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                    Healthcare Workflow System
                  </h3>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary mb-2 block opacity-70">
                    PROBLEM
                  </span>
                  <p className="text-base text-text-secondary leading-relaxed font-medium">
                    Complex workflows causing inefficiency and clinician fatigue.
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary mb-2 block opacity-70">
                    SOLUTION
                  </span>
                  <p className="text-base text-text-secondary leading-relaxed font-medium">
                    Redesigned the structure and simplified core interactions around real tasks.
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary mb-2 block opacity-70">
                    OUTCOME
                  </span>
                  <p className="text-base text-text-secondary leading-relaxed font-medium">
                    Improved usability and a measurable reduction in cognitive load.
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="/case-studies/carenova" passHref>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-premium w-full sm:w-auto"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight size={18} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
