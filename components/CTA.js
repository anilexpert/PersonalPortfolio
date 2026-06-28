import { motion } from 'framer-motion';
import { ArrowRight as ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-10 md:py-16 px-6 relative overflow-hidden" id="contact">
      {/* Background Neon Effects - On top of light base */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 blur-[150px] rounded-full -ml-[250px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/15 blur-[150px] rounded-full -mr-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-[24px] sm:text-[4vw] md:text-[5rem] lg:text-[6rem] font-black text-text-primary leading-none tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 sm:mb-4 text-center">
            Let's Build Your Next
          </h2>
     
          <div className="relative flex items-center justify-center w-full px-4 lg:px-20">
            {/* Desktop View Work Button (Left) */}
            <Link href="/contact" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05, rotate: -10, y: -5 }}
                className="hidden xl:flex absolute -left-30 -rotate-40 bg-gradient-to-br from-primary to-secondary px-8 py-4 rounded-full items-center gap-3 text-white font-semibold transition-all shadow-sm shadow-primary/20 hover:shadow-primary/40 group z-20"
              >
                <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse" />
                <span className="tracking-[0.2em] text-[12px] uppercase">Start a Conversation </span>
              </motion.a>
            </Link>

            <h2
              className="text-[24px] sm:text-[4vw] md:text-[5rem] lg:text-[6rem] font-black leading-none tracking-tighter uppercase text-center"
              style={{
                color: 'transparent',
                WebkitTextStroke: '3px var(--primary-mint)',
              }}
            >
              Product Together
            </h2>
 
            {/* Desktop Hire Now Button (Right) */}
            <motion.a
              href="mailto:anilkumar.folio@gmail.com"
              whileHover={{ scale: 1.05, rotate: 15, y: -5 }}
              className="hidden xl:flex absolute -right-20 rotate-40 bg-gradient-to-br from-secondary to-primary px-8 py-4 rounded-full items-center gap-3 text-white font-semibold transition-all shadow-sm shadow-secondary/20 hover:shadow-secondary/40 group z-20"
            >
              <span className="tracking-[0.2em] text-[12px] uppercase">Schedule a Call</span>
              <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse" />
            </motion.a>
          </div>

          <div className="flex xl:hidden flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6 mt-8 sm:mt-12 w-full max-w-sm sm:max-w-none mx-auto">
            <Link href="/contact" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary to-secondary px-6 sm:px-8 py-3.5 sm:py-4 rounded-full flex items-center justify-center gap-3 text-white font-bold shadow-xl shadow-primary/20 group"
              >
                <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse" />
                <span className="tracking-[0.2em] text-[12px] uppercase">Start a Conversation </span>
              </motion.a>
            </Link>

            <motion.a
              href="mailto:anilkumar.folio@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-secondary to-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-full flex items-center justify-center gap-3 text-white font-bold shadow-xl shadow-secondary/20 group"
            >
              <span className="tracking-[0.2em] text-[12px] uppercase">Schedule a Call</span>
              <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse" />
            </motion.a>
          </div>
          <div className="max-w-4xl mx-auto mt-8 md:mt-12">
          <p className="text-base md:text-xl font-medium text-text-secondary text-center leading-[1.4] md:leading-[1.3] tracking-tight">
            Looking for a Product Designer who can simplify complexity, align business goals with user needs, and build scalable digital products? Let's discuss your next product.
          </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default CTA;

