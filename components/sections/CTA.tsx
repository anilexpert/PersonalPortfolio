"use client";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { ArrowRight, Mail } from "lucide-react";
import GlassCard from "../ui/GlassCard";

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <GlassCard className="relative overflow-hidden !p-12 md:!p-20 !rounded-[3rem] text-center border-white/80 shadow-2xl">
          {/* Animated background glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px] animate-pulse-slow" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 blur-[100px] animate-pulse-slow" />

          <div className="relative z-10 space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 text-xs font-bold uppercase tracking-widest text-[#64748B]"
            >
              <Mail className="w-3 h-3 text-primary" />
              Get in touch
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-bold text-[#0F172A] leading-tight"
            >
              Let's Build Something <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Extraordinary.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed"
            >
              Whether you're starting a new venture or scaling an existing one, I'm here to help you design products that people love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
            >
              <Button variant="primary" className="w-full sm:w-auto h-16 px-10 text-lg">
                Start a Project <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto h-16 px-10 text-lg">
                View Resume
              </Button>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
