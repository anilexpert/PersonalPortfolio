import { motion } from 'framer-motion'
import { Globe, Smartphone, LayoutGrid, Moon, ArrowRight } from 'lucide-react'

const expertiseData = [
  {
    id: 1,
    number: '01',
    title: 'Web Design',
    icon: Globe,
    desc: 'E-commerce, finance & banking, travel, healthcare portals, and creative agency websites.',
    tags: ['E-commerce', 'Finance', 'Healthcare'],
    color: 'blue'
  },
  {
    id: 2,
    number: '02',
    title: 'App Design',
    icon: Smartphone,
    desc: 'Mobile apps for iOS & Android, tablet apps, cross-platform for seamless on-the-go experiences.',
    tags: ['iOS', 'Android', 'Tablet'],
    color: 'purple'
  },
  {
    id: 3,
    number: '03',
    title: 'Product Design',
    icon: LayoutGrid,
    desc: 'Digital interfaces, dashboard & admin panels, and custom software UI for daily-use products.',
    tags: ['Dashboards', 'Admin', 'Custom UI'],
    color: 'cyan'
  },
  {
    id: 4,
    number: '04',
    title: 'SaaS Design',
    icon: Moon,
    desc: 'SaaS platforms, healthcare EHR, subscription tools, and cloud software for retention & low friction.',
    tags: ['SaaS', 'EHR', 'Cloud'],
    color: 'emerald'
  }
]

// Theme mapper helper
const getTheme = (color) => {
  switch (color) {
    case 'blue':
      return { text: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20', hover: 'group-hover:bg-blue-500/20' }
    case 'purple':
      return { text: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20', hover: 'group-hover:bg-purple-500/20' }
    case 'cyan':
      return { text: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', hover: 'group-hover:bg-cyan-500/20' }
    case 'emerald':
      return { text: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', hover: 'group-hover:bg-emerald-500/20' }
    default:
      return { text: 'text-slate-500', bg: 'bg-slate-500/10', border: 'border-slate-500/20', hover: 'group-hover:bg-slate-500/20' }
  }
}

const DesignExpertise = () => {
  return (
    <section className="py-14 px-6 relative bg-transparent section-divide" id="expertise">
      
      {/* Subtle ambient light gradient background to match the "glassmorphism" premium styling */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00DA99]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[80rem] mx-auto relative z-10">
        
        {/* Section Header */}
        <h2 className="text-[46px] font-black italic tracking-tighter heading-gradient leading-tight mb-12 text-center">
          My Design Expertise
        </h2>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
           {expertiseData.map((item, i) => {
             const theme = getTheme(item.color)
             return (
               <motion.div
                 key={item.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.5 }}
                 className="glass-card p-8 flex flex-col h-full group"
               >
                 
                 <div className="relative z-10 flex flex-col h-full">
                   
                   {/* Card Header: Icon & Number */}
                   <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 rounded-[18px] bg-gradient-to-br from-white/90 to-blue-50/20 backdrop-blur-xl border-[1.5px] border-white shadow-[inset_0_2px_10px_rgba(255,255,255,1),0_8px_16px_rgba(13,99,204,0.06)] flex items-center justify-center transition-transform hover:scale-110 duration-500`}>
                         <div className={`bg-gradient-to-br from-transparent to-white/40 absolute inset-0 rounded-[18px] pointer-events-none`} />
                         <item.icon strokeWidth={1.5} size={24} className={`relative z-10 ${theme.text}`} />
                      </div>
                      <span className={`text-[12px] font-bold text-slate-400 opacity-60`}>
                        {item.number}
                      </span>
                   </div>

                   {/* Title & Description */}
                   <h3 className="text-xl font-bold mb-3 group-hover:text-[#0D63CC] transition-colors text-[#282360]">
                     {item.title}
                   </h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-8">
                     {item.desc}
                   </p>

                   {/* Bottom Tags & Explore Link */}
                   <div className="mt-auto">
                     
                     {/* Horizontal gradient divider mimicking the design */}
                     <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6 opacity-60" />

                     {/* Tags */}
                     <div className="flex flex-wrap gap-1.5 mt-auto">
                        {item.tags.map(tag => (
                          <span 
                            key={tag}
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-sm transition-colors ${theme.bg} ${theme.border} ${theme.text}`}
                          >
                            {tag}
                          </span>
                        ))}
                     </div>
                   </div>
                 </div>
               </motion.div>
             )
           })}
        </div>

      </div>
    </section>
  )
}

export default DesignExpertise
