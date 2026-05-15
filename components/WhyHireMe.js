import { motion } from 'framer-motion';
import { Brain, Zap, Layers, Target } from 'lucide-react';

const reasons = [
  {
    icon: Brain,
    title: "Clear Product Thinking",
    desc: "Not just screens—structured solutions for real problems.",
    color: "#00DA99" // Mint
  },
  {
    icon: Zap,
    title: "Fast & Reliable Delivery",
    desc: "Consistent communication and timely execution.",
    color: "#0D63CC" // Blue
  },
  {
    icon: Layers,
    title: "Scalable Design Systems",
    desc: "Designs built for growth, not rework.",
    color: "#8B5CF6" // Purple
  },
  {
    icon: Target,
    title: "Business-Focused UX",
    desc: "Decisions aligned with product goals and outcomes.",
    color: "#F43F5E" // Rose
  }
];

const WhyHireMe = () => {
  return (
    <section className="py-10 md:py-18 px-6 relative overflow-hidden" id="why-hire-me">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Why Hire Me</span>
          </div>
          <h2 className="text-[32px] sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-3 sm:mb-4">
            What You Get When You <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Work With Me</span>
          </h2>
          <p className="text-[15px] sm:text-base md:text-lg text-text-secondary leading-relaxed">
            A senior product partner — not just a screen-pusher.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((reason, i) => (
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
                style={{ backgroundColor: reason.color }}
              />
              {/* Honeycomb Texture Overlay */}
              <div
                className="absolute -top-12 -right-12 w-40 h-40 transition-all duration-700 group-hover:scale-[1.5] group-hover:opacity-40 opacity-10 pointer-events-none z-0 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10l12-7.5L24 10v15l-12 7.5L0 25V10zm12 25l12-7.5v-15L12 5 0 12.5v15L12 35z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 60%)'
                }}
              />

              <div
                className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 mb-6"
                style={{ backgroundColor: `${reason.color}15` }}
              >
                <reason.icon size={24} style={{ color: reason.color }} />
              </div>

              <h3 className="relative z-10 text-xl font-bold text-text-primary mb-3">
                {reason.title}
              </h3>

              <p className="relative z-10 text-sm leading-relaxed text-text-secondary">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
