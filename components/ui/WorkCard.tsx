"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import GlassCard from "./GlassCard";

export default function WorkCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <GlassCard 
        className="group !p-3 !rounded-[2rem] overflow-hidden border-white/60 hover:border-primary/40"
        hoverEffect={false} // Custom hover below
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] mb-6">
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          {/* Category Tag */}
          <div className="absolute top-4 left-4 z-20">
            <div className="px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-[10px] font-bold uppercase tracking-wider text-[#0F172A]">
              {project.category}
            </div>
          </div>
        </div>

        <div className="px-4 pb-4 space-y-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[#64748B] line-clamp-2">
                {project.description}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#F7FAFC] border border-[#E2E8F0] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#E2E8F0]/50">
            <div className="flex gap-2">
              {project.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[10px] text-[#64748B] font-medium">#{tag}</span>
              ))}
            </div>
            <span className="text-xs font-bold text-primary">{project.results}</span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
