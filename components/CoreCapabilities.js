import { motion } from 'framer-motion';
import { Heart, Cpu, Building, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Heart,
    title: "Healthcare Systems",
    desc: "Designed compliance-driven healthcare and EHR platforms supporting complex operational workflows.",
    tags: ["EHR / EMR", "Healthcare", "Usability"],
    color: "#0D63CC" // Blue
  },
  {
    icon: Cpu,
    title: "AI-Driven Platforms",
    desc: "Crafted intelligent product experiences integrating automation, insights, and human-centered AI interactions.",
    tags: ["AI UX", "Automation", "Intuitive"],
    color: "#00DA99" // Mint
  },
  {
    icon: Building,
    title: "Enterprise SaaS",
    desc: "Designed scalable dashboards, workflows, and management systems for enterprise operations.",
    tags: ["Enterprise", "Scale", "Roles"],
    color: "#8B5CF6" // Purple
  }
];

const CoreCapabilities = () => {
  return (
    <section className="py-10 md:py-18 px-6 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Domain Focus</span>
          </div>
          <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-3 sm:mb-4">
            Proven Experience Across <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Complex Industries</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-[24px] p-6 flex flex-col group hover:-translate-y-2 hover:glow-border relative overflow-hidden"
            >
              {/* Top Right Glow Effect */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 blur-[40px] rounded-full transition-all duration-700 group-hover:scale-[1.5] group-hover:opacity-60 opacity-20 pointer-events-none z-0"
                style={{ backgroundColor: service.color }}
              />

              <div className="flex items-start justify-between mb-6 relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon size={24} style={{ color: service.color }} />
                </div>
                <span className="text-sm font-bold text-text-secondary opacity-30">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3 relative z-10">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-text-secondary mb-8 flex-grow relative z-10">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {service.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: `${service.color}10`,
                      color: service.color,
                      border: `1px solid ${service.color}20`
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── View All Domains Button ── */}
        <div className="flex justify-center mt-12">
          <Link href="/services" passHref>
            <button className="px-6 md:px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-[#0D63CC] to-[#00DA99] text-white text-[13px] md:text-base font-medium flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(13,99,204,0.15)] hover:scale-[1.02] transition-all duration-300">
              View All Domains <ArrowUpRight size={18} className="stroke-[2]" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
