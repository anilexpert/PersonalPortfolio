import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const PortfolioCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col gap-6"
    >
      {/* Dynamic Hover Glow Effect */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 blur-[100px] rounded-full transition-all duration-700 pointer-events-none z-0 opacity-10 scale-50 group-hover:opacity-60 group-hover:scale-125"
        style={{ 
          background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)` 
        }}
      />

      {/* Image Container */}
      <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden glass-card border border-white/60 shadow-xl z-10 bg-white/20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 px-2">
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
          <h3 className="text-[22px] sm:text-[26px] font-black text-text-primary leading-tight tracking-tight uppercase max-w-[70%]">
            {project.title}
          </h3>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group/btn cursor-pointer"
          >
            <span className="hidden sm:block text-[11px] font-bold uppercase tracking-wider text-text-secondary group-hover/btn:text-primary transition-colors">
              View Project
            </span>
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm"
              style={{ backgroundColor: project.accentColor }}
            >
              <ArrowUpRight size={20} className="text-white stroke-[3]" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
