"use client";
import { services } from "@/data/services";
import GlassCard from "../ui/GlassCard";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            My Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-[#0F172A]"
          >
            Design that <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Drives Growth</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#64748B] max-w-2xl mx-auto text-lg"
          >
            I combine strategic thinking with premium execution to deliver digital products that stand out in crowded markets.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <GlassCard className="h-full flex flex-col !p-8 hover:border-secondary/40">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/10">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">{service.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-xs font-medium text-[#0F172A]">
                      <div className="w-4 h-4 rounded-full bg-[#00DA99]/20 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-[#00DA99]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full translate-x-1/3 -z-10" />
    </section>
  );
}
