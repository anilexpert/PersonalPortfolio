import { motion } from 'framer-motion';
import { Award, Rocket, TrendingUp, Package, Sparkles, ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const metrics = [
  { value: '10+', label: 'Years Experience', Icon: Award, color: '#0D63CC' }, // Blue
  { value: '250+', label: 'Product Screens Designed', Icon: Rocket, color: '#00DA99' }, // Mint
  { value: '30%+', label: 'Average Workflow Efficiency Improvement', Icon: TrendingUp, color: '#818CF8' }, // Purple
  { value: '77+', label: 'Features Designed & Delivered', Icon: Package, color: '#FB923C' }, // Orange
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
      className="w-full min-w-0"
    >
      <div className="relative group p-[1px] rounded-[24px] overflow-hidden">
        {/* Masking Border Effect */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, transparent 50%, ${color} 100%)`
          }}
        />

        <div className="relative glass-card rounded-[23px] px-4 py-5 sm:px-6 sm:py-8 flex flex-col items-center gap-2 sm:gap-4 hover:-translate-y-1 transition-all duration-500 bg-white/60 backdrop-blur-md">
          <div
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-sm"
            style={{
              backgroundColor: `${color}15`,
              border: `1px solid ${color}30`
            }}
          >
            <Icon size={24} className="w-5 h-5 sm:w-7 sm:h-7" style={{ color }} strokeWidth={1.5} />
          </div>
          <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            {count}{suffix}
          </div>
          <div className="text-[12px] sm:text-[14px] md:text-[16px] font-medium text-text-secondary opacity-60 text-center">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="py-10 md:py-18 px-4 md:px-6 relative overflow-hidden" id="about">
      {/* Background Large Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03]">
        <h2 className="text-[60px] sm:text-[100px] md:text-[150px] font-bold text-text-primary uppercase tracking-tighter leading-none">
          Design Excellence
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <span className="text-[10px] md:text-[12px] font-bold text-primary uppercase tracking-wider">The Designer Behind the Work</span>
          </div>
          <p className="text-xl md:text-4xl font-medium text-text-primary leading-[1.4] md:leading-[1.3] tracking-tight">
            I blend <span className="text-primary font-bold">user needs</span> with <span className="text-secondary font-bold">business goals</span> to design thoughtful digital products balancing clarity, usability, and aesthetics.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} value={m.value} label={m.label} Icon={m.Icon} color={m.color} delay={i * 0.1} />
          ))}
        </div>
         <div className="max-w-3xl mx-auto mt-8 md:mt-12">
          <p className="text-base md:text-2xl font-medium text-text-secondary text-center leading-[1.4] md:leading-[1.3] tracking-tight">
            Focused on creating measurable impact through usability, efficiency, and scalable product systems.
          </p>
          </div> 

        {/* Premium Skills Cloud */}
        <div className="mt-14 md:mt-20 mb-10 w-full max-w-4xl mx-auto flex justify-center relative">
          
          {/* Subtle background glow for the skills section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 px-2 relative z-10">
            {[
              { name: 'Figma', icon: '🎨', color: '#F24E1E' },
              { name: 'React', icon: '⚛️', color: '#61DAFB' },
              { name: 'Next.js', icon: '▲', color: '#000000' },
              { name: 'Tailwind CSS', icon: '🌀', color: '#06B6D4' },
              { name: 'JavaScript', icon: '🟨', color: '#F7DF1E' },
              { name: 'Webflow', icon: '🌐', color: '#4353FF' },
              { name: 'Vue.js', icon: '💚', color: '#4FC08D' },
              { name: 'TypeScript', icon: '📘', color: '#3178C6' },
              { name: 'Sketch', icon: '💎', color: '#F7B500' },
              { name: 'Nuxt.js', icon: '🏔️', color: '#00DC82' },
              { name: 'WordPress', icon: '🔵', color: '#21759B' },
              { name: 'Vite', icon: '⚡', color: '#646CFF' },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.04,
                  type: 'spring',
                  stiffness: 100,
                  damping: 10
                }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                >
                  <div className="group relative flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3.5 bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:border-white transition-all duration-300 cursor-default overflow-hidden">
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `linear-gradient(135deg, transparent, ${skill.color})` }}
                    />
                    <div 
                      className="absolute -inset-2 opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-300 z-0 pointer-events-none"
                      style={{ background: skill.color }}
                    />
                    
                    <span className="text-lg md:text-2xl drop-shadow-sm relative z-10">{skill.icon}</span>
                    <span className="text-[13px] md:text-[15px] font-bold text-text-primary tracking-tight transition-colors duration-300 relative z-10 group-hover:text-primary">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 flex justify-center pb-16 md:pb-24"
        >
          <Link href="#contact" passHref>
            <button className="btn-premium px-8 md:px-10 py-3 md:py-4 text-base md:text-lg whitespace-nowrap">
              <span>Let's Build Something Great</span>
              <ArrowRight size={20} />
            </button>
          </Link>
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
                  <div key={`${arrayIndex}-${i}`} className="flex items-center gap-4 md:gap-8 px-4">
                    <span
                      className="text-[28px] sm:text-3xl md:text-[38px] font-black tracking-tighter text-transparent whitespace-nowrap"
                      style={{ WebkitTextStroke: '2px #0D63CC' }}
                    >
                      {item.label}
                    </span>
                    <span className="text-primary text-xl md:text-3xl opacity-60">
                      ◆
                    </span>
                    <span className="text-xl sm:text-2xl md:text-[38px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] via-[#00B8D4] to-[#00DA99] whitespace-nowrap">
                      {item.value}
                    </span>
                    <span className="text-primary text-xl md:text-2xl opacity-60">
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


