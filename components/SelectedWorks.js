import { motion } from 'framer-motion'
import projects from '../data/case-studies.json'
import { ArrowUpRight, ArrowRight, Globe, Activity, LineChart, Monitor } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const ProjectCard = ({ project, i }) => {
  const [imgError, setImgError] = useState(false)

  // Determine placeholder icon based on title/tags for variety matching the mockup
  let PlaceholderIcon = Monitor;
  if (project.tags.includes('Healthcare')) PlaceholderIcon = Activity;
  else if (project.tags.includes('SaaS') || project.title.includes('System')) PlaceholderIcon = Globe;
  else if (project.tags.includes('Fintech')) PlaceholderIcon = LineChart;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`col-span-1 h-full`}
    >
      <div className="group relative flex flex-col h-full bg-white/70 backdrop-blur-xl border border-white rounded-[32px] overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(13,99,204,0.04)] hover:shadow-[0_20px_40px_rgba(13,99,204,0.08)] transition-all duration-500 z-20">
        
        {/* Top: Media Area */}
        <div className="relative w-full h-[280px] md:h-[320px] bg-gradient-to-br from-[#f3f8ff] to-[#eaf5ff] shrink-0 overflow-hidden flex items-center justify-center">
          {project.image && !imgError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            // Placeholder replicating the mockup's solid color vector icon style
            <motion.div 
               whileHover={{ scale: 1.1 }}
               className="transition-transform duration-500 text-teal-400"
            >
               <PlaceholderIcon size={80} strokeWidth={1.5} />
            </motion.div>
          )}

          {/* Premium Hover overlay */}
          <div className="absolute inset-0 bg-[#282360]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Bottom: Content Area */}
        <div className="flex-1 bg-white p-8 md:p-10 flex flex-col justify-between relative z-10">
          
          <div className="w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#141b2a] tracking-tight group-hover:text-[#0D63CC] transition-colors leading-tight">
                {project.title}
              </h3>
              
              {/* Arrow Indicator */}
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-slate-400 group-hover:bg-[#0D63CC] group-hover:text-white transition-all duration-300">
                 <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed font-medium text-[15px] mb-8 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-md text-[11px] font-bold text-slate-500 bg-[#f4f6fa]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  )
}

const SelectedWorks = () => {
  return (
    <section className="py-16 px-6 bg-transparent relative section-divide" id="works">
      {/* Subtle background nodes */}
      <div className="absolute top-[10%] right-[0%] w-[600px] h-[600px] bg-[#00DA99]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[80rem] mx-auto relative z-10">
        
        {/* Section Header */}
        <h2 className="text-[46px] font-black italic tracking-tighter heading-gradient leading-tight mb-12 text-center">
          Selected Works
        </h2>

        {/* CSS Grid Mapping */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
        
        {/* View full archive button */}
        <div className="mt-12 flex justify-center">
           <button className="btn-primary px-8 py-3.5 rounded-full text-[13px] md:text-sm font-bold flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#0D63CC]/20 hover:shadow-[#0D63CC]/40">
              <ArrowUpRight size={16} strokeWidth={2.5}/> View full archive
           </button>
        </div>

      </div>
    </section>
  )
}

export default SelectedWorks
