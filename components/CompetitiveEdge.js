import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock } from 'lucide-react'

const stats = [
  { label: 'Avg conversion boost', value: '40%', icon: <TrendingUp className="text-accent" /> },
  { label: 'Happy Stakeholders', value: '100%', icon: <Users className="text-primary" /> },
  { label: 'Design System Scale', value: '500+', icon: <Clock className="text-purple-400" /> }
]

const CompetitiveEdge = () => {
  return (
    <section className="py-24 px-6 bg-transparent relative section-divide" id="about">
      {/* Abstract Background Blobs */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[46px] font-black italic tracking-tighter heading-gradient leading-tight mb-6">Competitive Edge</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I don't just push pixels; I design systems that solve business problems. 
              My expertise spans the entire product lifecycle, from initial research 
              to final handoff, ensuring every detail serves a purpose.
            </p>
            <div className="space-y-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center space-x-6 glass-card p-6 rounded-2xl"
                >
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="glass-card aspect-square rounded-[3rem] p-12 relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/10 to-transparent" />
             <div className="grid grid-cols-5 items-end gap-4 h-64 w-full">
                {[40, 70, 55, 90, 65].map((h, i) => (
                   <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="bg-gradient-primary rounded-t-lg w-full"
                   />
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompetitiveEdge
