import { motion } from 'framer-motion';
import { Award, Rocket, TrendingUp, Package, Sparkles, ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const metrics = [
  { value: '10+', label: 'Years Experience', Icon: Award, color: '#0D63CC' },
  { value: '250+', label: 'Projects Shipped', Icon: Rocket, color: '#00DA99' },
  { value: '30%+', label: 'Conversion Lift', Icon: TrendingUp, color: '#0D63CC' },
  { value: '77+', label: 'Products Launched', Icon: Package, color: '#00DA99' },
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
      <div className="glass-card rounded-[24px] px-6 py-8 flex flex-col items-center gap-4 hover:-translate-y-2 group transition-all duration-500">
        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon size={24} className="text-secondary" />
        </div>
        <div className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
          {count}{suffix}
        </div>
        <div className="text-[12px] font-bold uppercase tracking-widest text-text-secondary">
          {label}
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
        <h2 className="text-[100px] md:text-[200px] font-bold text-text-primary uppercase tracking-tighter leading-none">
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <button className="btn-premium px-10 py-4 text-lg">
            <span>Let's Build Something Great</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


