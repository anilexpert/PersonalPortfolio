import { motion } from 'framer-motion';
import { ArrowRight as ArrowUpRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="contact">
      {/* Background Neon Effects - On top of light base */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 blur-[150px] rounded-full -ml-[250px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/15 blur-[150px] rounded-full -mr-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-[10vw] md:text-[6rem] lg:text-[7rem] font-black text-text-primary leading-none tracking-tighter uppercase mb-4">
            LET'S DISCUSS YOUR
          </h2>
          
          <div className="relative flex items-center justify-center w-full px-4 lg:px-20">
            {/* Desktop View Work Button (Left) */}
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05, rotate: -15, y: -5 }}
              className="hidden xl:flex absolute left-0 -rotate-12 bg-gradient-to-br from-primary to-secondary px-8 py-4 rounded-full items-center gap-3 text-white font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 group z-20"
            >
              <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse" />
              <span className="tracking-[0.2em] text-[12px] uppercase">VIEW WORK</span>
            </motion.a>

            <h2 
              className="text-[12vw] md:text-[8rem] lg:text-[9rem] font-black leading-none tracking-tighter uppercase text-center"
              style={{ 
                color: 'transparent',
                WebkitTextStroke: '2px var(--primary-mint)',
                textStroke: '2px var(--primary-mint)',
              }}
            >
              NEXT PROJECT
            </h2>

            {/* Desktop Hire Now Button (Right) */}
            <motion.a
              href="mailto:anilkumar.folio@gmail.com"
              whileHover={{ scale: 1.05, rotate: 15, y: -5 }}
              className="hidden xl:flex absolute right-0 rotate-12 bg-gradient-to-br from-secondary to-primary px-8 py-4 rounded-full items-center gap-3 text-white font-bold transition-all shadow-xl shadow-secondary/20 hover:shadow-secondary/40 group z-20"
            >
              <span className="tracking-[0.2em] text-[12px] uppercase">HIRE NOW</span>
              <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse" />
            </motion.a>
          </div>

          {/* Mobile/Tablet Buttons Container */}
          <div className="flex xl:hidden flex-wrap justify-center items-center gap-6 mt-12">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary to-secondary px-8 py-4 rounded-full flex items-center gap-3 text-white font-bold shadow-xl shadow-primary/20 group"
            >
              <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse" />
              <span className="tracking-[0.2em] text-[12px] uppercase">VIEW WORK</span>
            </motion.a>

            <motion.a
              href="mailto:anilkumar.folio@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-secondary to-primary px-8 py-4 rounded-full flex items-center gap-3 text-white font-bold shadow-xl shadow-secondary/20 group"
            >
              <span className="tracking-[0.2em] text-[12px] uppercase">HIRE NOW</span>
              <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse" />
            </motion.a>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default CTA;

