import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Anil doesn't just design interfaces—he structures entire product thinking. His ability to align business goals with user needs is exceptional.",
    author: "Sarah J.",
    role: "Product Manager, TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    quote: "The system design approach Anil brought to our project reduced our development friction by 40%. A true strategic partner.",
    author: "Michael R.",
    role: "CTO, HealthScale",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    quote: "Working with Anil was a game-changer for our SaaS platform. The AI-driven workflows he designed are incredibly intuitive.",
    author: "Elena M.",
    role: "Founder, AI-Stream",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  // Logic to determine card stack positions
  const getStackPosition = (i) => {
    const total = testimonials.length;
    const diff = (i - index + total) % total;
    
    // 0 is front, 1 is middle, 2 is back
    return diff;
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="testimonials">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16 lg:gap-24">

          {/* Left: Heading + Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-[42%] flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 w-fit">
              <span className="text-[12px] font-bold text-secondary uppercase tracking-[0.2em]">Social Proof</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight">
              Trusted by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Industry Leaders</span> <br />
              Globally.
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-md opacity-80">
              From high-growth startups to enterprise engineering teams — here's what partners say about the impact.
            </p>

            {/* Navigation Controls and Count Indicator */}
            <div className="flex items-center gap-8 mt-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg active:scale-95 group"
                >
                  <ChevronLeft size={20} className="text-text-primary group-hover:text-primary transition-colors" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg active:scale-95 group"
                >
                  <ChevronRight size={20} className="text-text-primary group-hover:text-primary transition-colors" />
                </button>
              </div>

              {/* Count Indicator */}
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-text-secondary/40 uppercase tracking-[0.3em] mb-1">Success Stories</span>
                <div className="flex items-end gap-1 font-mono">
                  <span className="text-2xl font-bold text-text-primary leading-none">0{index + 1}</span>
                  <span className="text-text-secondary/30 text-lg leading-none mb-0.5">/</span>
                  <span className="text-sm font-bold text-text-secondary/50 leading-none mb-0.5">0{testimonials.length}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stacked Cards Container */}
          <div className="relative w-full lg:max-w-[50%] h-[420px] md:h-[400px] flex items-center justify-center">
            <div className="relative w-full h-full">
              {testimonials.map((testimonial, i) => {
                const position = getStackPosition(i);
                const isVisible = position < 3;
                
                return (
                  <motion.div
                    key={i}
                    initial={false}
                    animate={{
                      scale: isVisible ? 1 - position * 0.06 : 0.8,
                      y: isVisible ? position * 25 : 60,
                      x: isVisible ? position * 10 : 0,
                      opacity: isVisible ? 1 - position * 0.35 : 0,
                      zIndex: 10 - position,
                      rotate: isVisible ? position * -1.5 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25
                    }}
                    className="absolute inset-0 w-full"
                  >
                    <div className={`glass-card rounded-[40px] p-10 md:p-12 relative glow-border h-full flex flex-col justify-between shadow-2xl shadow-secondary/5 ${position === 0 ? 'bg-white/70' : 'bg-white/40'}`}>
                      <Quote size={60} className="text-primary opacity-5 absolute top-10 right-10" />

                      <div className="flex-1 flex flex-col justify-center">
                        <p className="text-text-primary text-xl md:text-2xl leading-[1.4] mb-8 font-medium tracking-tight">
                          <span className="text-primary text-4xl leading-none font-serif">“</span>
                          {testimonial.quote}
                          <span className="text-primary text-4xl leading-none font-serif">”</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-5 mt-auto">
                        <div className="w-16 h-16 rounded-3xl overflow-hidden border-2 border-primary/20 p-1.5 bg-white shadow-xl shadow-primary/5 rotate-3">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={64}
                            height={64}
                            className="object-cover rounded-2xl -rotate-3"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-text-primary text-xl tracking-tight leading-none mb-1">{testimonial.author}</div>
                          <div className="text-text-secondary text-[11px] font-black uppercase tracking-[0.2em] opacity-60">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;

