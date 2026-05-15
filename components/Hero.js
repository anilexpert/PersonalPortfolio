import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Mail, MessageCircle, Download, Award, Layout, Layers } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-25 md:pt-32 pb-10 md:pb-20 overflow-hidden" id="home">
      {/* Side Social Links (Vertical) - Left Side */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 z-20">
        <div className="flex flex-col items-center gap-6">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-text-secondary/40 -rotate-90 origin-center whitespace-nowrap mb-8">Follow Me</span>
          <div className="w-[1px] h-12 bg-text-secondary/20 mb-4" />
          <a href="#" className="p-2 rounded-full hover:bg-primary/10 text-text-secondary hover:text-primary transition-all duration-300">
            <Globe size={18} />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-primary/10 text-text-secondary hover:text-primary transition-all duration-300">
            <Mail size={18} />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-primary/10 text-text-secondary hover:text-primary transition-all duration-300">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left: Content (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[12px] sm:text-[14px] md:text-[18px] font-medium text-secondary mb-3 md:mb-4 flex items-center gap-2 opacity-80">
                Hello, 👋 I'm Anil Kumar
              </span>
              <h1 className="text-[40px] sm:text-[48px] md:text-[58px] font-bold text-slate-800 leading-[1] md:leading-[1.00] mb-6 md:mb-8 tracking-tighter">
                I Design
                <span
                  className="text-transparent mx-2"
                  style={{ WebkitTextStroke: '2px #00DA99' }}
                >
                  Scalable Product
                </span>
                Experiences for
                <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent mx-2">
                  SaaS & AI
                </span> Platforms
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[12px] sm:text-[14px] md:text-[16px] text-text-secondary mb-6 md:mb-8 max-w-[580px] leading-relaxed"
            >
              <span className="text-primary font-semibold">Freelance Product Designer</span> helping startups and teams simplify complex workflows, improve usability, and build scalable digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col w-full sm:auto sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mb-6 md:mb-8"
            >
              <button className="px-4 sm:px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-gradient-to-r from-[#0D63CC] to-[#00DA99] text-white text-[12px] sm:text-[13px] md:text-base font-medium flex items-center justify-center gap-2 border-0 shadow-[0_8px_24px_rgba(13,99,204,0.15)] hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto">
                <ArrowUpRight size={18} className="stroke-[2]" /> View Case Studies
              </button>

              <button className="relative p-[1.5px] rounded-full overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_24px_rgba(13,99,204,0.05)] w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D63CC] to-[#00DA99]" />
                <div className="relative px-4 sm:px-6 md:px-8 py-3 md:py-3.5 bg-white rounded-full flex items-center justify-center gap-2 transition-all">
                  <ArrowUpRight size={18} className="text-[#0D63CC] stroke-[2]" />
                  <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent text-[12px] sm:text-[13px] md:text-base font-medium">
                    Hire Me
                  </span>
                </div>
              </button>
            </motion.div>

            {/* Latest Work Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="px-4 md:px-6 py-3 md:py-4 rounded-[20px] md:rounded-[24px] w-full max-w-[620px] relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
              }}
            >
              {/* Animated Glow Mask */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-50" />
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full animate-pulse-slow" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <span className="text-[10px] md:text-[12px] font-bold text-secondary uppercase">Selected Product Work</span>
                  <a href="#work" className="text-[10px] md:text-[12px] font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                    VIEW ALL <ArrowUpRight size={14} />
                  </a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { img: "/images/carevanata.png", name: "Carevanta", href: "#work" },
                    { img: "/images/spendid.png", name: "SPENDiD", href: "#work" },
                    { img: "/images/oasis-notes.png", name: "OasisNotes", href: "#work" },
                    { img: "/images/pulse-grid.png", name: "PulseGrid", href: "#work" },
                  ].map((project, i) => (
                    <a
                      key={i}
                      href={project.href}
                      className="group flex flex-col gap-1.5 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1"
                    >
                      {/* Thumbnail */}
                      <div
                        className="aspect-[3/2] rounded-lg overflow-hidden relative bg-gray-100 border border-white/50 shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all duration-300"
                      >
                        <Image
                          src={project.img}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Hover overlay with arrow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-1.5">
                          <div className="w-5 h-5 rounded-full bg-white/90 flex items-center justify-center">
                            <ArrowUpRight size={10} className="text-text-primary" />
                          </div>
                        </div>
                      </div>
                      {/* Project Name */}
                      <span className="text-[12px] w-full text-center font-medium text-text-secondary group-hover:text-primary transition-colors duration-300 truncate px-0.5 tracking-wide uppercase">
                        {project.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden z-10"
            >
              <Image
                src="/ProfileThumnail.png"
                alt="Freelancer"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay Text */}
              <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
                <span className="text-[60px] lg:text-[80px] font-black text-transparent uppercase tracking-tighter"
                  style={{
                    WebkitTextStroke: '2px rgb(2, 170, 173)',
                  }}
                >
                  FREELANCER
                </span>
              </div>
            </motion.div>



            {/* Background Decorative Element (Circle) */}
            <div className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%]" />

            {/* Circular Rotating Badge (Mockup Style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
              className="absolute -top-6 right-0 z-30 hidden xl:block"
            >
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Background Glass Circle with Glow Border */}
                <div className="absolute inset-4 rounded-full bg-white/20 backdrop-blur-2xl border border-white/40 shadow-2xl overflow-hidden">
                  {/* Subtle Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/6 via-transparent to-white/5 pointer-events-none" />
                  {/* Mask Glowing Border Style */}
                  <div className="absolute inset-0 rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
                </div>

                {/* Rotating Text */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -28, 0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"
                      />
                    </defs>
                    <text className="text-[7px] font-black uppercase tracking-[0.15em] fill-[#0D63CC]/80">
                      <textPath xlinkHref="#circlePath" startOffset="0%">
                        SaaS . Healthcare . AI-Products . Systems-Strategy .
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Center Content: Tilted Glass Diamond with Glow */}
                <div className="relative w-18 h-18 flex items-center justify-center">
                  <motion.div
                    initial={{ rotate: 45 }}
                    whileHover={{ rotate: 60, scale: 1.05 }}
                    className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-full shadow-sm shadow-black/5 flex items-center justify-center overflow-hidden"
                    style={{ transform: 'rotate(45deg)' }}
                  >
                    {/* Glowing Border for Diamond */}
                    <div className="absolute inset-0 border border-white/50 rounded-full" />
                    <div className="absolute inset-[1px] border border-white/20 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                  </motion.div>

                  {/* Icon with subtle pulse */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 text-[#00DA99] drop-shadow-lg"
                  >
                    <Award size={36} strokeWidth={2.5} />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating Pill Badges (Left Side of Image) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] -left-10 z-30 hidden xl:flex items-center gap-3 px-3 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-xl shadow-black/5"
            >
              <Layout size={16} className="text-secondary" />
              <span className="text-[12px] font-bold text-secondary whitespace-nowrap">AI Workflows</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[40%] left-0 z-30 hidden xl:flex items-center gap-3 px-3 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-xl shadow-black/5"
            >
              <Layers size={16} className="text-secondary" />
              <span className="text-[12px] font-bold text-secondary whitespace-nowrap">SaaS Scalability</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[60%] left-0 z-30 hidden xl:flex items-center gap-3 px-3 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-xl shadow-black/5"
            >
              <Layers size={16} className="text-secondary" />
              <span className="text-[12px] font-bold text-secondary whitespace-nowrap">UX-Strategy</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
