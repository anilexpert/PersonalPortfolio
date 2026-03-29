import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const steps = [
  {
    id: 'discover',
    number: '01',
    tag: 'DISCOVER',
    title: 'Clarity Over Complexity',
    desc: 'I begin by understanding the system behind the interface—users, business goals, and constraints. Instead of jumping into solutions, I focus on defining the right problems, aligning stakeholders, and building a strong foundation for scalable design.',
    tags: ['User interviews', 'Stakeholder mapping', 'Competitive audit', 'Jobs-to-be-done'],
    color: 'from-[#0D63CC] to-blue-500',
    borderColor: 'border-[#00DA99]'
  },
  {
    id: 'define',
    number: '02',
    tag: 'DEFINE',
    title: 'Clarity Before Momentum',
    desc: 'Synthesize fragmented research into a precise problem definition. Establish clear trade-offs, align stakeholders early, and define measurable success criteria before execution begins.',
    tags: ['Problem framing', 'Success metrics', 'Design principles', 'Opportunity sizing'],
    color: 'from-purple-500 to-indigo-500',
    borderColor: 'border-purple-400'
  },
  {
    id: 'design',
    number: '03',
    tag: 'DESIGN',
    title: 'Systems Over Surfaces',
    desc: 'Design end-to-end flows, states, and edge cases—not just screens. Prioritize scalable architecture and reusable patterns to ensure consistency, efficiency, and long-term growth.',
    tags: ['Information architecture', 'Design systems', 'Prototyping', 'Component libraries'],
    color: 'from-[#00DA99] to-teal-400',
    borderColor: 'border-[#0D63CC]'
  },
  {
    id: 'validate',
    number: '04',
    tag: 'VALIDATE',
    title: 'Evidence Over Assumption',
    desc: 'Validate the highest-risk assumptions first using a balance of qualitative insights and quantitative signals. Focus on actionable evidence that drives confident product decisions.',
    tags: ['Usability testing', 'A/B testing', 'Analytics review', 'Iteration cycles'],
    color: 'from-orange-400 to-amber-500',
    borderColor: 'border-orange-400'
  }
]

export default function HowIDesign() {
  const [active, setActive] = useState(0)
  const [locked, setLocked] = useState(false)

  // Auto-cycle every 3.8s
  useEffect(() => {
    if (locked) return
    const t = setInterval(() => setActive(p => (p + 1) % steps.length), 3800)
    return () => clearInterval(t)
  }, [locked])

  const step = steps[active]

  return (
    <section className="py-16 px-6 relative overflow-hidden bg-transparent section-divide" id="process">

      {/* Ambient background blob based on active step */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`absolute top-1/2 -translate-y-1/2 -left-[10%] w-[600px] h-[600px] rounded-full blur-[160px] bg-gradient-to-br ${step.color} pointer-events-none -z-10`}
        />
      </AnimatePresence>

      <div className="max-w-[80rem] mx-auto">

        {/* Section Header */}
        <h2 className="text-[46px] font-black italic tracking-tighter heading-gradient leading-tight mb-12 text-center">
          How I Design
        </h2>

        {/* 2-Column Orbital Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">

          {/* LEFT: Orbital SVG Interactive Area */}
          <div className="relative flex justify-center items-center h-[400px] md:h-[500px] w-full max-w-[500px] mx-auto scale-90 md:scale-100">

            {/* Background SVG Lines exactly matching reference */}
            <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute inset-0 pointer-events-none">
              {/* Outer Dashed Orbit Circle (r=180, center=250,250) */}
              <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" className="text-slate-300" />

              {/* Inner Solid Circle (r=90) */}
              <circle cx="250" cy="250" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200" />

              {/* Diamond Lines connecting nodes */}
              <polygon points="250,70 430,250 250,430 70,250" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" className="text-[#0D63CC]/20" />
            </svg>

            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00DA99] shadow-[0_0_10px_rgba(0,218,153,0.8)]" />
            </div>

            {/* Dynamic Orbiter Dot tracked perfectly to Outer Circle radius 180 */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
              initial={false}
              animate={{ rotate: active * 90 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <div className="absolute top-[70px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#0D63CC] to-[#00DA99] shadow-[0_0_15px_rgba(0,218,153,0.8)] z-30" />
            </motion.div>

            {/* 4 Clickable Nodes */}
            {steps.map((s, i) => {
              const isActive = i === active;
              // Node Position mapping: Top, Right, Bottom, Left for 500x500 container
              let posClass = "";
              let labelPos = "";
              if (i === 0) { posClass = "top-[70px] left-[250px]"; labelPos = "top-[130px] left-[250px]"; }
              if (i === 1) { posClass = "top-[250px] left-[430px]"; labelPos = "top-[250px] left-[360px]"; }
              if (i === 2) { posClass = "top-[430px] left-[250px]"; labelPos = "top-[370px] left-[250px]"; }
              if (i === 3) { posClass = "top-[250px] left-[70px]"; labelPos = "top-[250px] left-[140px]"; }

              return (
                <div key={s.id}>
                  {/* Inner Center Label (e.g. Discover) */}
                  <div className={`absolute ${labelPos} -translate-x-1/2 -translate-y-1/2 text-[13px] font-bold tracking-widest transition-colors duration-500 pointer-events-none capitalize ${isActive ? 'text-[#0D63CC]' : 'text-slate-400'}`}>
                    {s.tag.toLowerCase()}
                  </div>

                  {/* Node Interactive Hitbox */}
                  <div
                    onClick={() => { setActive(i); setLocked(true) }}
                    className={`absolute ${posClass} -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full flex items-center justify-center cursor-pointer group z-20`}
                  >
                    {/* Double border styling exactly matching reference */}
                    <motion.div
                      initial={false}
                      animate={{ scale: isActive ? 1.05 : 1 }}
                      className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-500 border-[1.5px] ${isActive ? s.borderColor : 'border-slate-300/50'
                        }`}
                    >
                      {/* Inner Circle content padding */}
                      <div className={`w-[76px] h-[76px] rounded-full flex flex-col items-center justify-center transition-all duration-500 shadow-inner ${isActive ? `bg-gradient-to-br ${s.color} text-white shadow-[0_10px_20px_rgba(13,99,204,0.2)]` : 'bg-slate-50/80 backdrop-blur-md text-slate-500 group-hover:bg-slate-100'
                        }`}>
                        <span className="text-[14px] font-black tracking-widest leading-none mb-1">{s.number}</span>
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${isActive ? 'text-white/90' : 'text-slate-400'}`}>
                          {s.tag}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* RIGHT: Sliding Detail Panel */}
          <div className="relative h-[430px] md:h-[450px] w-full max-w-[600px] mx-auto lg:mx-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[32px] p-8 md:p-12 shadow-[0_8px_40px_rgba(13,99,204,0.06)] flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-black tracking-[4px] uppercase text-[#00DA99] mb-4 md:mb-6">
                    {step.number} • {step.tag}
                  </span>

                  <h3 className="text-3xl md:text-[42px] font-black italic tracking-tighter text-[#141b2a] mb-5 leading-[1.1]">
                    {step.title}
                  </h3>

                  <p className="text-slate-500 font-medium text-sm md:text-[15px] leading-relaxed mb-10 max-w-[440px]">
                    {step.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {step.tags.map((tag, idx) => (
                      <span
                        key={tag}
                        className={`px-4 py-2 rounded-full text-[11px] md:text-[12px] font-bold tracking-wide border ${idx === 0 || active === idx ? 'border-[#00DA99]/40 bg-[#00DA99]/5 text-[#00DA99]' : 'border-[#0D63CC]/20 bg-[#0D63CC]/5 text-[#0D63CC]'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Navigation Dashes bottom aligned */}
                <div className="flex items-center gap-3 pt-6">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setActive(i); setLocked(true) }}
                      className={`h-[4px] rounded-full transition-all duration-500 ${i === active ? 'w-10 bg-gradient-to-r from-[#0D63CC] to-[#00DA99]' : 'w-6 bg-slate-200 hover:bg-slate-300'
                        }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
