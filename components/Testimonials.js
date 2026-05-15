import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Anil helped us simplify a complex product and brought clarity to our workflows. Reliable and easy to work with.",
    author: "Sarah Chen",
    role: "Product Lead, HealthTech Startup",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    quote: "Strategic thinker. Delivered a design system that our team still uses two years later. Highly recommended",
    author: "Marcus Rivera",
    role: "CTO, AI SaaS Platform",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    quote: "He understood our domain quickly and shipped beautiful, usable interfaces. A true product partner.",
    author: "Priya Nair",
    role: "Founder, Enterprise SaaS",
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
    <section className="py-10 md:py-18 px-6 relative overflow-hidden" id="testimonials">
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
              <span className="text-[12px] font-bold text-secondary uppercase tracking-[0.2em]">Testimonials</span>
            </div>
            <h2 className="text-[24px] sm:text-3xl md:text-5xl font-bold text-text-primary leading-[1.1] tracking-tight">
              Trusted by
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ml-2">Clients Say</span>

            </h2>
            <p className="text-text-secondary text-base md:text-xl leading-relaxed max-w-md opacity-80">
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

                // Both background cards use the SAME scale to cross perfectly in the center
                // Opposite rotations create the symmetrical X-fanning effect seen in the mockup
                const scale = position === 0 ? 1 : 1.06;
                const rotate = position === 0 ? 0 : position === 1 ? 3 : -3;
                const yOffset = 0;

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

                    <div className={`glass-card rounded-[32px] p-6 sm:p-8 md:p-12 h-full flex flex-col justify-between transition-all duration-500 border relative overflow-hidden ${position === 0
                      ? 'bg-white/95 border-white backdrop-blur-3xl shadow-[0_24px_60px_rgba(0,218,153,0.3),inset_0_0_30px_rgba(255,255,255,0.8)] z-10'
                      : 'bg-white/40 border-white/60 backdrop-blur-xl shadow-lg'
                      }`}>

                      {/* Ambient Inner Glow for Active Card */}
                      {position === 0 && (
                        <>
                          <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
                          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/15 rounded-full blur-[80px] pointer-events-none" />
                        </>
                      )}

                      {/* Top: Star Rating */}
                      <div className="relative flex items-center gap-1.5 mb-4 sm:mb-8 z-10">
                        {[...Array(5)].map((_, starIdx) => (
                          <svg key={starIdx} className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFC107] drop-shadow-[0_0_8px_rgba(255,193,7,0.4)]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Middle: Quote */}
                      <div className="flex-1 flex flex-col justify-center">
                        <p className="text-text-primary text-[17px] sm:text-xl md:text-[26px] leading-[1.6] mb-4 sm:mb-8 font-bold italic tracking-wide">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Separator Line */}
                      <div className="w-full h-[1px] bg-gradient-to-r from-primary/30 to-transparent mb-4 sm:mb-8" />

                      {/* Bottom: Author & Quote Icon */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden border border-white/50 shadow-sm">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              width={48}
                              height={48}
                              className="object-cover rounded-full w-full h-full"
                            />
                          </div>
                          <div>
                            <div className="font-bold text-text-primary text-base sm:text-lg tracking-tight mb-0.5">{testimonial.author}</div>
                            <div className="text-text-secondary text-[13px] sm:text-sm font-medium">{testimonial.role}</div>
                          </div>
                        </div>

                        {/* Neon Quote Icon Container */}
                        <div className="text-primary drop-shadow-[0_0_12px_rgba(0,218,153,0.4)]">
                          <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 7H4C4 4.79086 5.79086 3 8 3C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1C4.68629 1 2 3.68629 2 7V15C2 17.7614 4.23858 20 7 20C9.76142 20 12 17.7614 12 15V11C12 8.79086 11.1046 7 10 7ZM22 7H16C16 4.79086 17.7908 3 20 3C20.5523 3 21 2.55228 21 2C21 1.44772 20.5523 1 20 1C16.6863 1 14 3.68629 14 7V15C14 17.7614 16.2386 20 19 20C21.7614 20 24 17.7614 24 15V11C24 8.79086 23.1046 7 22 7Z" />
                          </svg>
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

