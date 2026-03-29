import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, Cpu, Target } from 'lucide-react'

const capabilities = [
  {
    icon: <Rocket size={24} />,
    title: "Product Strategy",
    desc: "Aligning business vision with user needs through structured thinking, ensuring every product decision delivers measurable value.",
    color: "#0D63CC"
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Systems Design",
    desc: "Designing scalable architectures, design systems, and workflows that support long-term product evolution.",
    color: "#00DA99"
  },
  {
    icon: <Cpu size={24} />,
    title: "UX Engineering",
    desc: "Bridging design and development with implementation-ready solutions that reduce friction and accelerate delivery.",
    color: "#8B5CF6"
  },
  {
    icon: <Target size={24} />,
    title: "Conversion Optimization",
    desc: "Crafting experiences that guide users toward action, improving engagement, retention, and business outcomes.",
    color: "#0D63CC"
  }
]

const CoreCapabilities = () => {
  return (
    <section className="py-14 px-6 relative section-divide">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-[#00DA99]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#0D63CC]/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-[46px] font-black italic tracking-tighter heading-gradient leading-tight mb-12 text-center">Core Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:glow-blue"
            >
              <div
                className="w-14 h-14 glass-icon-container mb-6 text-[#0D63CC] group-hover:text-[#00DA99] transition-colors"
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#0D63CC] transition-colors text-[#282360]">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreCapabilities
