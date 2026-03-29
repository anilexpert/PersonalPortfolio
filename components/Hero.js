import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, Cpu, Users, Award, Layout, Briefcase, ArrowUpRight, Download, Building2, TrendingUp, SendHorizonal } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { label: 'Years Experience', value: '10+', icon: Award, color: "text-[#0D63CC]", glow: "glow-blue" },
  { label: 'Projects Shipped', value: '50+', icon: Rocket, color: "text-[#00DA99]", glow: "glow-green" },
  // { label: 'Industries', value: '4', icon: Building2, color: "text-[#8B5CF6]", glow: "glow-blue" },
  { label: 'Avg. Conversion Lift', value: '30%+', icon: TrendingUp, color: "text-[#0D63CC]", glow: "glow-blue" },
]

const Hero = () => {
  return (
    <div className="relative pt-40 pb-20 overflow-hidden bg-transparent z-10" id="about">
      <section className="max-w-[80rem] mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-12 xl:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-[3rem] lg:text-[3.5rem] font-black italic tracking-tighter mb-8 leading-[0.95] translate-x-[-4px]">
              Designing intelligent products where strategy drives every <span className="heading-gradient animate-gradient drop-shadow-sm pb-2 inline-block">interface.</span>"
            </h1>

            <p className="text-slate-600 text-md md:text-lg max-w-xl leading-relaxed mb-10 border-l-4 border-indigo-200 pl-6 font-medium">
              I translate complex business systems into scalable, human-centered digital experiences.
              With a focus on AI-driven platforms and enterprise SaaS, I design products that are not just usable—but strategically impactful.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-5 mb-12">
              {/* Primary CTA - Glass + Glow */}
              <a
                href="#works"
                className="btn-primary group flex items-center gap-3 px-8 py-4 relative overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                <span>View Selected Work</span>
              </a>

              {/* Secondary CTA - Ghost with gradient border + icon */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold tracking-wide transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] overflow-hidden border-0"
              >
                {/* Gradient border via pseudo-layer */}
                <span className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#0D63CC] to-[#00DA99] opacity-70 group-hover:opacity-100 transition-opacity duration-300" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                {/* Subtle fill on hover */}
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0D63CC]/5 to-[#00DA99]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download size={16} className="text-[#0D63CC] group-hover:text-[#00DA99] transition-colors duration-300" />
                <span className="relative text-gradient">Download Résumé</span>
              </a>
            </div>

            {/* Micro Trust Layer */}
            {/* <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-card mb-14 hover:bg-white/60 transition-colors">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#00DA99] to-teal-500 shadow-lg shadow-teal-500/20 text-white">
                <ShieldCheck size={16} strokeWidth={2.5} />
              </div>
              <span className="text-sm font-extrabold text-[#282360] tracking-wide">
                Trusted by <span className="text-[#0D63CC]">10+ Enterprise Teams</span>
              </span>
            </div> */}

            {/* Metrics Cards */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (0.1 * i), duration: 0.5 }}
                  className="glass-card p-5 relative group overflow-hidden hover:glow-blue"
                >
                  <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 ${stat.color}`}>
                    <stat.icon size={56} />
                  </div>
                  <div className="text-3xl font-black text-[#282360] mb-1 tracking-tight relative z-10 drop-shadow-sm">{stat.value}</div>
                  <div className={`text-[10px] font-bold uppercase tracking-widest relative z-10 ${stat.color}`}>{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Profile & Badges */}
        <div className="lg:col-span-12 xl:col-span-5 relative flex justify-center items-center mt-12 xl:mt-0">

          {/* No abstract lines or extra shapes, clean canvas for profile image */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] z-10"
          >
            {/* Enhanced Soft Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0D63CC] to-[#00DA99] rounded-full blur-[80px] opacity-20 animate-pulse glow-blue" />

            {/* UPGRADED: Animated Gradient Ring */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#0D63CC] via-purple-500 to-[#00DA99] opacity-30 blur-xl animate-slow-rotate" />
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-[#0D63CC] via-indigo-400 to-[#00DA99] p-[3px] opacity-80 shadow-[0_0_30px_rgba(13,99,204,0.3)] hover:glow-blue transition-all duration-500 cursor-default">
              <div className="w-full h-full bg-white/10 rounded-full backdrop-blur-md" />
            </div>

            {/* Main Profile Image Wrapper */}
            <div className="relative w-full h-full p-4 !rounded-full overflow-hidden group glass-card">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-2xl">
                <Image
                  src="/ProfileThumnail.png"
                  alt="Profile"
                  fill
                  className="object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Rotating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 md:bottom-2 md:right-2 w-32 h-32 md:w-44 md:h-44 z-20"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 glass-card !rounded-full shadow-xl transition-all duration-500" />
                <svg viewBox="0 0 100 100" className="absolute w-full h-full fill-[#282360]/20 drop-shadow-sm">
                  <path id="badgePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="text-[8px] uppercase font-black tracking-[1.5px]">
                    <textPath xlinkHref="#badgePath" className="fill-[#282360]">
                      • Product Design • Systems Strategy • Growth Impact •
                    </textPath>
                  </text>
                </svg>
                <div className="relative z-10 p-5 glass-icon-container rounded-full">
                  <Award className="text-[#0D63CC] w-8 h-8 md:w-10 md:h-10" />
                </div>
              </div>
            </motion.div>

            {/* Floating Pills and Badges */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              <Pill text="UI/UX Expert" icon={<Layout size={14} />} className="-top-2 left-0 animate-float" />

              {/* Available for Work Badge */}
              <div className="absolute top-2 -right-8 animate-float pointer-events-auto" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 glass-card !rounded-full cursor-default">
                  <div className="w-2.5 h-2.5 bg-[#00DA99] rounded-full animate-pulse shadow-[0_0_8px_rgba(0,218,153,0.5)]" />
                  <span className="text-[10px] font-bold text-[#282360] uppercase tracking-widest">Available for work</span>
                </div>
              </div>

              <Pill text="SaaS Scalability" icon={<Briefcase size={14} />} className="bottom-[20%] -left-6 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Smooth Transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7faff] to-transparent z-10 pointer-events-none" />
    </div>
  )
}

const Pill = ({ text, icon, className, style }) => (
  <div
    style={style}
    className={`absolute ${className} glass-card px-5 py-2.5 !rounded-full flex items-center space-x-2 text-xs font-bold whitespace-nowrap z-30`}
  >
    <span className="text-[#0D63CC]">{icon}</span>
    <span className="text-[#282360] tracking-wide">{text}</span>
  </div>
)

export default Hero
