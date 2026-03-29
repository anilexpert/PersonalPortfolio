import { motion } from 'framer-motion'
import { LayoutGrid, Monitor, BarChart2, Users2, Heart, Search } from 'lucide-react'

const expertise = [
  {
    icon: LayoutGrid,
    title: 'Design Systems & Scalability',
    sub: 'Token architecture · Component libraries',
    color: 'from-[#0D63CC] to-indigo-500',
    bg: 'bg-white/50',
    border: 'border-white/60',
    text: 'text-[#0D63CC]',
  },
  {
    icon: Monitor,
    title: 'Complex SaaS UX',
    sub: 'Enterprise workflows · Information architecture',
    color: 'from-purple-500 to-indigo-500',
    bg: 'bg-white/50',
    border: 'border-white/60',
    text: 'text-purple-600',
  },
  {
    icon: BarChart2,
    title: 'Data-Heavy Dashboards',
    sub: 'Data viz · Analytics interfaces',
    color: 'from-[#00DA99] to-teal-500',
    bg: 'bg-white/50',
    border: 'border-white/60',
    text: 'text-[#00DA99]',
  },
  {
    icon: Users2,
    title: 'Cross-functional Collaboration',
    sub: 'Embedded in Eng · PM partnership',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-white/50',
    border: 'border-white/60',
    text: 'text-emerald-600',
  },
  {
    icon: Heart,
    title: 'Healthcare & Regulated UX',
    sub: 'Accessibility · Compliance-aware design',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-white/50',
    border: 'border-white/60',
    text: 'text-pink-600',
  },
  {
    icon: Search,
    title: 'User Research & Testing',
    sub: 'Usability studies · Jobs-to-be-done',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-white/50',
    border: 'border-white/60',
    text: 'text-amber-600',
  },
]

export default function AreasOfExpertise() {
  return (
    <section className="py-14 px-6 relative overflow-hidden section-divide">
      {/* Abstract background blobs */}
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-[#0D63CC]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-[#00DA99]/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[80rem] mx-auto">
        {/* Section Header */}
        <h2 className="text-[46px] font-black italic tracking-tighter heading-gradient leading-tight mb-12 text-center">
          Areas of Expertise
        </h2>

        {/* Grid Container as an Elevated Glass Card */}
        <div className="relative glass-card elevated overflow-hidden">
          {/* Inner top shine */}
          <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none z-0" />

          <div className="relative z-10 grid md:grid-cols-2 divide-y divide-white/40 md:divide-y-0">
            {expertise.map((item, i) => {
              const Icon = item.icon
              const isRightCol = i % 2 === 1
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`group flex items-start gap-5 p-8 md:p-10 transition-all duration-300 hover:bg-white/40 cursor-default
                    ${isRightCol ? 'md:border-l border-white/40' : ''}
                    ${i < expertise.length - 2 ? 'border-b border-white/40' : ''}
                  `}
                >
                  {/* Icon box - Standardised via glass-icon-container */}
                  <div className={`shrink-0 w-12 h-12 glass-icon-container flex items-center justify-center`}>
                    <Icon size={20} className={`${item.text} transition-colors duration-300`} strokeWidth={2} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base font-black text-[#282360] tracking-tight mb-1 group-hover:text-[#0D63CC] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {item.sub}
                    </p>
                  </div>

                  {/* Hover accent dot */}
                  <div className={`ml-auto shrink-0 w-2 h-2 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2`} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
