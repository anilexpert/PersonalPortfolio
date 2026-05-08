import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, ArrowRight } from 'lucide-react';

const contactOptions = [
  {
    icon: Mail,
    label: "Email Me",
    value: "anilkumar.folio@gmail.com",
    href: "mailto:anilkumar.folio@gmail.com",
    accent: "blue"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 8437152327",
    href: "https://wa.me/918437152327",
    accent: "green"
  },
  {
    icon: Phone,
    label: "Call Directly",
    value: "+91 8437152327",
    href: "tel:+918437152327",
    accent: "blue"
  }
];

const CTA = () => {
  return (
    <section className="py-24 px-6 relative" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 text-center relative overflow-hidden rounded-[40px] glow-border"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] -ml-32 -mt-32" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] -mr-32 -mb-32" />

          <h2 className="text-4xl md:text-7xl font-black uppercase leading-[0.9] mb-8 tracking-tighter">
            Let’s Build <br />
            Something <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">That Scales.</span>
          </h2>

          <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
            I partner with teams to design intelligent, high-impact products—from
            early-stage ideas to enterprise platforms.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactOptions.map((option, i) => (
              <motion.a
                key={i}
                href={option.href}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-8 group flex flex-col items-center rounded-[24px] border-white/60 hover:bg-white/60 shadow-lg shadow-black/5"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${option.accent === 'green' ? 'var(--primary-mint)' : 'var(--electric-blue)'}15` }}
                >
                  <option.icon 
                    size={20} 
                    style={{ color: option.accent === 'green' ? 'var(--primary-mint)' : 'var(--electric-blue)' }} 
                  />
                </div>
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary opacity-60 mb-2">{option.label}</div>
                <div className="text-base font-bold text-text-primary break-all tracking-tight">{option.value}</div>
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-premium px-10 py-4 text-lg"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

