import { motion } from 'framer-motion';
import { Award, Rocket, TrendingUp, Package, Sparkles, ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const metrics = [
  { value: '10+', label: 'Years Experience', Icon: Award, color: '#0D63CC' }, // Blue
  { value: '250+', label: 'Projects Shipped', Icon: Rocket, color: '#00DA99' }, // Mint
  { value: '30%+', label: 'Conversion Lift', Icon: TrendingUp, color: '#818CF8' }, // Purple
  { value: '77+', label: 'Products Launched', Icon: Package, color: '#FB923C' }, // Orange
];

const MetricCard = ({ value, label, Icon, color, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const numericEnd = parseInt(value) || 0;
  const suffix = value.replace(String(numericEnd), '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const increment = numericEnd / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericEnd) { setCount(numericEnd); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, numericEnd]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 min-w-[200px]"
    >
      <div className="relative group p-[1px] rounded-[24px] overflow-hidden">
        {/* Masking Border Effect */}
        <div 
          className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            background: `linear-gradient(135deg, ${color} 0%, transparent 50%, ${color} 100%)` 
          }}
        />
        
        <div className="relative glass-card rounded-[23px] px-6 py-8 flex flex-col items-center gap-4 hover:-translate-y-1 transition-all duration-500 bg-white/60 backdrop-blur-md">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-sm"
            style={{ 
              backgroundColor: `${color}15`,
              border: `1px solid ${color}30`
            }}
          >
            <Icon size={28} style={{ color }} strokeWidth={1.5} />
          </div>
          <div className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
            {count}{suffix}
          </div>
          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary opacity-60">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="about">
      {/* Background Large Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03]">
        <h2 className="text-[100px] md:text-[150px] font-bold text-text-primary uppercase tracking-tighter leading-none">
          Design Excellence
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-[12px] font-bold text-primary uppercase tracking-wider">The Designer Behind the Work</span>
          </div>
          <p className="text-2xl md:text-4xl font-medium text-text-primary leading-[1.3] tracking-tight">
            I blend <span className="text-primary font-bold">user needs</span> with <span className="text-secondary font-bold">business goals</span> to design thoughtful digital products balancing clarity, usability, and aesthetics.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} value={m.value} label={m.label} Icon={m.Icon} color={m.color} delay={i * 0.1} />
          ))}
        </div>

        {/* Skills Cloud */}
        <div className="mt-16 mb-8 w-full max-w-3xl mx-auto flex flex-col items-center gap-2">
          {/* Top Row - scattered with rotations */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            {[
              { name: "Wordpress", icon: "🔵", rotate: 0, y: 0 },
              { name: "vitejs", icon: "⚡", rotate: -12, y: -6 },
              { name: "React.js", icon: "⚛️", rotate: 8, y: 4 },
              { name: "Figma", icon: "🎨", rotate: -10, y: -8 },
              { name: "nuxt.js", icon: "💚", rotate: 6, y: -10 },
              { name: "nextjs", icon: "▲", rotate: -5, y: 8 },
              { name: "WebFlow", icon: "🌐", rotate: 10, y: -6 },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                style={{ rotate: `${skill.rotate}deg`, translateY: `${skill.y}px` }}
                className="flex items-center gap-1.5 whitespace-nowrap bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm rounded-full px-3 py-1.5 hover:bg-white/90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <span className="text-sm leading-none">{skill.icon}</span>
                <span className="text-[12px] font-semibold text-text-primary tracking-tight">{skill.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - flat, aligned */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {[
              { name: "Sketch", icon: "💎" },
              { name: "JavaScript (ES6+)", icon: "🟨" },
              { name: "tailwindcss & CSS3", icon: "🌀" },
              { name: "ReactJS", icon: "⚛️" },
              { name: "FIGMA", icon: "🎨" },
              { name: "VueJS", icon: "⚡" }
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.04, duration: 0.4 }}
                className="flex items-center gap-1.5 whitespace-nowrap bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm rounded-full px-3 py-1.5 hover:bg-white/90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <span className="text-sm leading-none">{skill.icon}</span>
                <span className="text-[12px] font-bold text-text-primary tracking-tight">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 flex justify-center pb-24"
        >
          <button className="btn-premium px-10 py-4 text-lg">
            <span>Let's Build Something Great</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>

      {/* Marquee Stripe Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-primary/10 via-[#0D63CC]/5 to-primary/10 backdrop-blur-xl py-4 border-t border-primary/20 overflow-hidden flex items-center z-20 shadow-sm">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 90000 }}
          className="flex whitespace-nowrap w-max"
        >
          {/* Create enough duplicate items to ensure a seamless loop */}
          {[...Array(8)].map((_, arrayIndex) => {
            const contactItems = [
              { label: "Email Me", value: "anilkumar.folio@gmail.com" },
              { label: "WhatsApp", value: "+91 8437152327" },
              { label: "Call Directly", value: "+91 8437152327" },
            ];

            return (
              <div key={arrayIndex} className="flex items-center">
                {contactItems.map((item, i) => (
                  <div key={`${arrayIndex}-${i}`} className="flex items-center gap-8 px-4">
                    <span
                      className="text-4xl md:text-[38px] font-black tracking-tighter text-transparent whitespace-nowrap"
                      style={{ WebkitTextStroke: '2px #0D63CC' }}
                    >
                      {item.label}
                    </span>
                    <span className="text-primary text-3xl opacity-60">
                      ◆
                    </span>
                    <span className="text-3xl md:text-[38px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] via-[#00B8D4] to-[#00DA99] whitespace-nowrap">
                      {item.value}
                    </span>
                    <span className="text-primary text-2xl opacity-60">
                      ◆
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
};

export default About;


