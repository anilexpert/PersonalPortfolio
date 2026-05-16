import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import PortfolioCard from './PortfolioCard';
import Image from 'next/image';
import CTA from './CTA';
import Link from 'next/link';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const PortfolioGrid = () => {
  return (
    <div className="bg-transparent text-text-primary">
      {/* Header Section (Matching About Page Style) */}
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
            className="text-[36px] sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 md:mb-6"
          >
            Case
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">Studies</span>
          </motion.h1>

          {/* Decorative scribble SVG */}
          <motion.div {...fadeUp(0.3)} className="absolute top-8 right-[8%] opacity-30 pointer-events-none hidden lg:block">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <path d="M100 10C100 10 60 50 60 60C60 70 100 110 100 110" stroke="url(#g1)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M80 20C80 20 50 55 50 65C50 75 80 110 80 110" stroke="url(#g2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
              <defs>
                <linearGradient id="g1" x1="60" y1="10" x2="100" y2="110" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00DA99" />
                  <stop offset="1" stopColor="#0D63CC" />
                </linearGradient>
                <linearGradient id="g2" x1="50" y1="20" x2="80" y2="110" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0D63CC" />
                  <stop offset="1" stopColor="#00DA99" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Footer CTA - Reusing the CTA component style from index */}
      <div className="mt-10">
        <CTA />
      </div>
    </div>
  );
};

export default PortfolioGrid;
