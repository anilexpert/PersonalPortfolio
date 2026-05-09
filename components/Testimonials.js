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
          <div className="relative w-full lg:max-w-[50%] h-[480px] md:h-[450px] flex items-center justify-center">
            <div className="relative w-full h-full">
              {testimonials.map((testimonial, i) => {
                const position = getStackPosition(i);
                const isVisible = position < 3;
                // Precise transforms to match the mockup's fanned-out stack
                const rotate = position === 0 ? 0 : position === 1 ? 5 : -5;
                const scale = position === 0 ? 1 : position === 1 ? 0.98 : 0.95;
                const yOffset = position === 0 ? 0 : position === 1 ? -12 : -20;
                
                return (
                  <motion.div
                    key={i}
                    initial={false}
                    animate={{
                      scale: isVisible ? scale : 0.8,
                      y: isVisible ? yOffset : 60,
                      opacity: isVisible ? 1 : 0,
                      zIndex: 10 - position,
                      rotate: isVisible ? rotate : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25
                    }}
                    className="absolute inset-0 w-full"
                  >

                    <div className={`glass-card rounded-[32px] p-8 md:p-12 h-full flex flex-col justify-between shadow-2xl shadow-primary/5 transition-all duration-500 ${
                      position === 0 ? 'bg-white/80 glow-border backdrop-blur-xl' : position === 1 ? 'bg-secondary/50 backdrop-blur-lg border border-secondary/40' : 'bg-secondary/30 backdrop-blur-md border border-secondary/20'
                    }`}>
                      
                      {/* Top: Star Rating */}
                      <div className="bg-text-primary w-fit px-5 py-2.5 rounded-full flex items-center gap-1.5 mb-8 shadow-[0_8px_20px_rgba(0,218,153,0.2)] border border-primary/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
                        {[...Array(5)].map((_, starIdx) => (
                          <svg key={starIdx} className="w-5 h-5 text-[#FFC107] relative z-10 drop-shadow-[0_0_8px_rgba(255,193,7,0.5)]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Middle: Quote */}
                      <div className="flex-1 flex flex-col justify-center">
                        <p className="text-text-primary text-xl md:text-2xl leading-[1.6] mb-8 font-medium italic tracking-wide">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Separator Line (Highlighted Glow) */}
                      <div className="w-full h-[2px] bg-gradient-to-r from-primary/40 via-secondary/20 to-transparent mb-8 shadow-[0_0_10px_rgba(0,218,153,0.3)] rounded-full" />

                      {/* Bottom: Author & Quote Icon */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 p-0.5 bg-white shadow-lg shadow-primary/10">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              width={56}
                              height={56}
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <div className="font-bold text-text-primary text-lg tracking-tight mb-0.5">{testimonial.author}</div>
                            <div className="text-text-secondary text-sm font-medium">{testimonial.role}</div>
                          </div>
                        </div>
                        
                        {/* Neon Quote Icon Container */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_8px_20px_rgba(0,218,153,0.4)] hover:scale-110 transition-transform duration-300">
                          <Quote size={24} className="text-white fill-white drop-shadow-md" />
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

