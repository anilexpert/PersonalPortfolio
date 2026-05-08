import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Mail, MessageCircle, Download } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden" id="home">
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
              <span className="text-[14px] md:text-[18px] font-medium text-secondary mb-4 flex items-center gap-2 opacity-80">
                Hello, 👋 I'm Anil Kumar Product Designer
              </span>
              <h1 className="text-[64px] md:text-[110px] font-black uppercase leading-[0.85] mb-8 tracking-tighter">
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: '2px #282360' }}
                >
                  CRAFTING
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">
                  PRODUCT
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[15px] md:text-[16px] text-text-secondary mb-10 max-w-[580px] leading-relaxed"
            >
              <span className="text-primary font-bold">That Users Truly Love.</span> I'm a product designer who solves problems through clean, functional design — turning ideas into intuitive digital experiences that users actually enjoy using.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0D63CC] to-[#00DA99] text-white font-medium flex items-center gap-2 border-0 shadow-[0_8px_24px_rgba(13,99,204,0.15)] hover:scale-[1.02] transition-all duration-300">
                <ArrowUpRight size={18} className="stroke-[2]" /> View Selected Work
              </button>

              <button className="relative p-[1.5px] rounded-full overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_24px_rgba(13,99,204,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D63CC] to-[#00DA99]" />
                <div className="relative px-8 py-3.5 bg-white rounded-full flex items-center gap-2 transition-all">
                  <Download size={18} className="text-[#0D63CC] stroke-[2]" />
                  <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent font-medium">
                    Download Résumé
                  </span>
                </div>
              </button>
            </motion.div>

            {/* Latest Work Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-6 rounded-[24px] w-full max-w-[560px] relative overflow-hidden group"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
              }}
            >
              {/* Animated Glow Mask */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-50" />
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full animate-pulse-slow" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-bold text-text-primary uppercase tracking-[0.2em]">Latest Work</span>
                  <a href="#work" className="text-[12px] font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                    VIEW ALL <ArrowUpRight size={14} />
                  </a>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    "/images/carevanta.png",
                    "/images/spendid.png",
                    "/images/OasisNotes.png",
                    "/images/numantra.png"
                  ].map((img, i) => (
                    <div key={i} className="aspect-[3/2] rounded-lg overflow-hidden relative group cursor-pointer bg-gray-100">
                      <Image
                        src={img}
                        alt="Work"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
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
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
                <span className="text-[60px] md:text-[80px] font-black text-transparent uppercase tracking-tighter opacity-30"
                  style={{
                    WebkitTextStroke: '2px rgba(0, 190, 194, 0.6)',
                  }}
                >
                  FREELANCER
                </span>
              </div>
            </motion.div>

            {/* Floating 3D Element */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-48 h-48 z-20 pointer-events-none bg-transparent select-none"
            >
              <Image
                src="/3d_spiral.png"
                alt="3D Element"
                width={150}
                height={150}
                className="object-contain mix-blend-multiply"
              />
            </motion.div>

            {/* Background Decorative Element (Circle) */}
            <div className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
