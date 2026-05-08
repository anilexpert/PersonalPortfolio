"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 space-y-8"
        >
          {/* Latest Work Capsule */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#00DA99] animate-pulse" />
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Available for new projects</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-[#0F172A]">
              Crafting <span className="bg-gradient-to-r from-[#00DA99] to-[#0D63CC] bg-clip-text text-transparent">Intelligent</span> <br />
              Digital Experiences.
            </h1>
            <p className="text-lg md:text-xl text-[#64748B] max-w-xl leading-relaxed">
              Senior Product Designer specializing in high-fidelity interface design and enterprise-grade design systems.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button variant="primary">
              View Portfolio <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary">
              Our Process <Play className="w-4 h-4 fill-current" />
            </Button>
          </motion.div>

          {/* Mini Work Slider / Capsule */}
          <motion.div variants={itemVariants}>
            <GlassCard className="max-w-md !p-4 !rounded-3xl border-white/80">
              <div className="flex items-center gap-4">
                <div className="w-16 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/40">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">Latest: AI Analytics Dashboard</h4>
                  <p className="text-xs text-[#64748B]">Fintech Case Study • 2024</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1], delay: 0.5 }}
          className="lg:col-span-6 relative"
        >
          {/* Main Glass Container */}
          <div className="relative group">
            {/* Glow behind */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-1000" />
            
            <GlassCard className="relative aspect-[4/3] !p-2 overflow-hidden border-white/60 shadow-2xl !rounded-[2.5rem]">
               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10" />
               <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-[#F7FAFC]">
                 {/* Replace with your actual hero image */}
                 <Image 
                    src="/3d_spiral.png" 
                    alt="Hero Visual" 
                    fill 
                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                 />
                 
                 {/* Floating Micro-elements */}
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-8 right-8 z-20"
                 >
                   <GlassCard className="!p-3 !rounded-2xl border-white/40 shadow-xl backdrop-blur-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs font-bold text-[#0F172A]">AI Enhanced</span>
                      </div>
                   </GlassCard>
                 </motion.div>

                 <motion.div 
                   animate={{ y: [0, 10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-12 left-8 z-20"
                 >
                   <GlassCard className="!p-3 !rounded-2xl border-white/40 shadow-xl backdrop-blur-xl">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                           {[1,2,3].map(i => (
                             <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                           ))}
                        </div>
                        <span className="text-xs font-medium text-[#64748B]">+24 clients</span>
                      </div>
                   </GlassCard>
                 </motion.div>
               </div>
            </GlassCard>

            {/* Gradient border glow overlay */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-transparent bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
