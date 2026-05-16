import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col gap-4"
    >
      {/* Dynamic Hover Glow Effect */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 blur-[100px] rounded-full transition-all duration-700 pointer-events-none z-0 opacity-10 scale-50 group-hover:opacity-60 group-hover:scale-125"
        style={{
          background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)`
        }}
      />

      {/* Image Container */}
      <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden glass-card border border-white/60 shadow-sm z-10 bg-white/20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
      </div>

      {/* Content - with top divider */}
      <div className="relative z-10 flex flex-col gap-4 px-2 pt-4 border-t border-slate-200/60 mt-2">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: project.accentColor,
              boxShadow: `0 0 10px ${project.accentColor}80`
            }}
          />
          <span
            className="text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.2em]"
            style={{ color: project.accentColor }}
          >
            {project.category}
          </span>
        </div>

        <div className="flex items-end justify-between gap-4">
          <h3 className="text-[18px] sm:text-[24px] font-bold text-text-primary capitalize leading-tight max-w-[60%]">
            {project.title.toLowerCase()}
          </h3>

          <Link href={`/case-studies/${project.slug}`} passHref>
            <motion.div
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { backgroundColor: "transparent", borderColor: project.accentColor, scale: 1 },
                hover: { backgroundColor: project.accentColor, borderColor: project.accentColor, scale: 1.05 }
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 cursor-pointer transition-all duration-300 group/btn"
            >
              <motion.span
                variants={{
                  initial: { color: project.accentColor },
                  hover: { color: "#ffffff" }
                }}
                className="hidden sm:block text-[12px] font-bold uppercase tracking-wider transition-colors duration-300"
              >
                View Project
              </motion.span>
              <motion.div
                variants={{
                  initial: { color: project.accentColor },
                  hover: { color: "#ffffff" }
                }}
                className="transition-colors duration-300"
              >
                <ArrowUpRight size={16} className="stroke-[2.5]" />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Glowing divider at the end of the grid item */}
      <div className="relative z-10 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-6 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default PortfolioCard;
