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
      className="group relative flex flex-col h-full rounded-[24px] p-4 md:p-5 glass-card border border-white/40 shadow-lg bg-white/5 hover:bg-white/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Dynamic Hover Glow Effect */}
      <div
        className="absolute inset-0 blur-[100px] rounded-full transition-all duration-700 pointer-events-none z-0 opacity-0 group-hover:opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${project.accentColor} 0%, transparent 70%)`
        }}
      />

      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden z-10 border border-white/20 mb-6 glass-card shadow-inner">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-101"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: project.accentColor,
                boxShadow: `0 0 10px ${project.accentColor}`
              }}
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 px-2 pb-2">
        <div className="mb-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary">
            {project.industryBadge}
          </span>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <h3 className="text-[20px] md:text-[24px] font-bold capitalize leading-tight transition-all duration-300 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            {project.title.toLowerCase()}
          </h3>
          {project.problemStatement && (
            <p className="text-[14px] text-text-secondary leading-relaxed">
              {project.problemStatement}
            </p>
          )}
        </div>

        {project.impactMetrics && (
          <ul className="flex flex-col gap-2 mb-6 border-l-2 border-white/10 pl-4 py-1">
            {project.impactMetrics.map((metric, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[13px] text-text-primary/90 font-medium">
                <span style={{ color: project.accentColor }} className="font-bold text-[14px]">✓</span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Button Wrapper to push to bottom */}
        <div className="mt-auto pt-4 flex items-start">
          <Link href={`/case-studies/${project.slug}`} passHref>
            <motion.div
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { backgroundColor: "transparent", borderColor: project.accentColor, scale: 1 },
                hover: { backgroundColor: project.accentColor, borderColor: project.accentColor, scale: 1.05 }
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 cursor-pointer transition-all duration-300 group/btn"
            >
              <motion.span
                variants={{
                  initial: { color: project.accentColor },
                  hover: { color: "#ffffff" }
                }}
                className="text-[12px] font-bold uppercase tracking-wider transition-colors duration-300"
              >
                Explore Case Study
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
    </motion.div>
  );
};

export default PortfolioCard;
