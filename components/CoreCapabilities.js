import { motion } from 'framer-motion';
import { Globe, Smartphone, LayoutGrid, RefreshCw } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "E-commerce, finance & banking, travel, healthcare portals, and creative agency websites.",
    tags: ["E-Commerce", "Finance", "Healthcare"],
    color: "#0D63CC" // Blue
  },
  {
    icon: Smartphone,
    title: "App Design",
    desc: "Mobile apps for iOS & Android, tablet apps, cross-platform for seamless on-the-go experiences.",
    tags: ["iOS", "Android", "Tablet"],
    color: "#00DA99" // Mint
  },
  {
    icon: LayoutGrid,
    title: "Product Design",
    desc: "Digital interfaces, dashboard & admin panels, and custom software UI for daily-use products.",
    tags: ["Dashboards", "Admin", "Custom UI"],
    color: "#8B5CF6" // Purple
  },
  {
    icon: RefreshCw,
    title: "SaaS Design",
    desc: "SaaS platforms, healthcare EHR, subscription tools, and cloud software for retention & low friction.",
    tags: ["SaaS", "EHR", "Cloud"],
    color: "#F43F5E" // Rose
  }
];

const CoreCapabilities = () => {
  return (
    <section className="py-10 md:py-24 px-6 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4 sm:mb-6">
            <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Our Core Services</span>
          </div>
          <h2 className="text-[32px] sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            My Design <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Expertise.</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-[24px] p-6 flex flex-col group hover:-translate-y-2 hover:glow-border"
            >
              <div className="flex items-start justify-between mb-6">
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

              <h3 className="text-xl font-bold text-text-primary mb-3">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-text-secondary mb-8 flex-grow">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2">
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
      </div>
    </section>
  );
};

export default CoreCapabilities;
