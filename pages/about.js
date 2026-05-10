import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Pencil, Search, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import GlowDivider from '../components/GlowDivider';

// ─── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { label: 'Project Completed', value: '1.7K', accent: 'primary' },
  { label: 'Happy Customer', value: '24K+', accent: 'primary', pill: true },
  { label: 'Experience Members', value: '99+', accent: 'secondary' },
];

const workflow = [
  {
    icon: Lightbulb,
    title: 'Develop',
    color: '#00DA99',
    desc: 'We bring strategic clarity to a website, content, or campaign—through extensive research and ideation.',
  },
  {
    icon: Pencil,
    title: 'Design',
    color: '#0D63CC',
    desc: 'The team creates a cohesive visual language and design solutions that tell your brand\'s story.',
  },
  {
    icon: Search,
    title: 'Discover',
    color: '#6B67CC',
    desc: 'We begin by understanding your challenges, defining your goals, and your audience through research.',
  },
];

const team = [
  {
    name: 'Anil Kumar',
    role: 'Product Designer',
    image: '/images/team-anil.jpg',
    featured: true,
  },
  {
    name: 'Alex Hawkins',
    role: 'Frontend Engineer',
    image: '/images/team-alex.jpg',
    featured: false,
  },
  {
    name: 'Daniel Harris',
    role: 'Branding Specialist',
    image: '/images/team-daniel.jpg',
    featured: false,
  },
];

const testimonials = [
  {
    quote: 'The team delivered beyond expectations. From branding to web design, every detail reflected creativity and strategy. They truly understood our vision and made it a reality. Highly recommended for any business looking to grow.',
    name: 'Leslie Alexander',
    role: 'Web Designer',
    avatar: '/images/testimonial-1.jpg',
    rating: 5,
  },
  {
    quote: 'Working with Anil was a transformative experience. His attention to detail and deep understanding of user needs resulted in a product that exceeded all expectations.',
    name: 'Marcus Chen',
    role: 'Startup Founder',
    avatar: '/images/testimonial-2.jpg',
    rating: 5,
  },
];

// ─── Section Components ──────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Anil Kumar – Senior Product Designer</title>
        <meta name="description" content="Learn about Anil Kumar, a senior product designer driven by creativity and powered by purpose." />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-24">

        {/* ── 1. PAGE HERO ───────────────────────────────────────────────── */}
        <section className="relative py-20 px-6 overflow-hidden">
          {/* bg glows */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Breadcrumb */}
            <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-2 text-[12px] font-semibold text-text-secondary uppercase tracking-widest mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">About Us</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="text-6xl md:text-8xl font-black tracking-tighter text-text-primary uppercase leading-none">
              About Us
            </motion.h1>

            {/* Decorative scribble SVG */}
            <motion.div {...fadeUp(0.3)} className="absolute top-8 right-[8%] opacity-30 pointer-events-none hidden lg:block">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <path d="M100 10C100 10 60 50 60 60C60 70 100 110 100 110" stroke="url(#g1)" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M80 20C80 20 50 55 50 65C50 75 80 110 80 110" stroke="url(#g2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <defs>
                  <linearGradient id="g1" x1="60" y1="10" x2="100" y2="110" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00DA99" />
                    <stop offset="1" stopColor="#0D63CC" />
                  </linearGradient>
                  <linearGradient id="g2" x1="50" y1="20" x2="80" y2="110" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0D63CC" />
                    <stop offset="1" stopColor="#00DA99" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </section>

        {/* ── 2. INTRO / STATS ───────────────────────────────────────────── */}
        <section className="relative py-16 px-6 overflow-hidden">
          {/* subtle bg glow */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/8 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-start">

              {/* ── LEFT COL ── */}
              <motion.div {...fadeUp(0)} className="relative">

                {/* Headline */}
                <h2 className="text-3xl md:text-4xl xl:text-[34px] font-black text-text-primary leading-[1.15] tracking-tight uppercase mb-10">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Driven by</span>{' '}
                  <span
                    className="relative inline-block"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '2px var(--primary-mint)',
                      textStroke: '2px var(--primary-mint)',
                    }}
                  >
                    Creativity
                  </span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Powered</span><br />
                  <div className="flex items-center gap-4 mt-2 flex-wrap">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">by Purpose</span>

                    {/* Agency tag — dot + line + label */}
                    <div className="flex items-center gap-3 flex-1 min-w-[200px]">
                      <span className="text-primary text-sm">✳</span>
                      <span className="text-[11px] font-black text-text-secondary uppercase tracking-[0.2em] whitespace-nowrap">About Me</span>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/60 to-transparent max-w-[100px]" />
                      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary-mint)]" />
                    </div>
                  </div>
                </h2>

                {/* Giant 10+ display & Years of Experience */}
                <div className="flex items-center gap-6 md:gap-8 select-none">
                  <span
                    className="text-[130px] md:text-[180px] font-black leading-none tracking-tighter"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '4px var(--primary-mint)',
                      textStroke: '4px var(--primary-mint)',
                    }}
                  >
                    10+
                  </span>

                  <div className="text-[14px] md:text-[16px] font-semibold uppercase text-text-secondary leading-[1.3]">
                    Years of<br />Experience
                  </div>
                </div>
              </motion.div>

              {/* ── RIGHT COL ── */}
              <motion.div {...fadeUp(0.12)} className="flex flex-col gap-8 pt-2">

                {/* Description */}
                <p className="text-[15px] md:text-base text-text-secondary leading-relaxed">
                  We blend imagination with intention to craft designs that not only look stunning but
                  deliver results. Every idea we shape is rooted in strategy, ensuring your brand
                  connects, communicates, and grows meaningfully.
                </p>

                {/* Horizontal stat rows */}
                <div className="flex flex-col mt-2">
                  {stats.map((s, i) => {
                    // Cascade widths and stack them like the mockup
                    const widths = ['w-full', 'w-[85%]', 'w-[70%]'];
                    const zIndexes = ['z-30', 'z-20', 'z-10'];
                    const margins = i === 0 ? '' : '-mt-3';

                    return (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                        className={`relative glass-card rounded-full px-6 py-4 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300 group shadow-md ${widths[i]} ${zIndexes[i]} ${margins}`}
                      >
                        <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-text-secondary group-hover:text-text-primary transition-colors">
                          {s.label}
                        </span>

                        <span
                          className="text-2xl font-bold tracking-tight"
                          style={{
                            color: s.accent === 'primary' ? 'var(--primary-mint)' : 'var(--electric-blue)',
                            textShadow: s.accent === 'primary'
                              ? '0 0 20px rgba(0,218,153,0.4)'
                              : '0 0 20px rgba(13,99,204,0.4)',
                          }}
                        >
                          {s.value}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GlowDivider */}
        <div className="w-full py-0 flex items-center justify-center my-4 px-6">
          <div className="w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* ── 3. CREATIVE WORKFLOW ───────────────────────────────────────── */}
        <section className="relative py-20 px-6 overflow-hidden" id="workflow">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp(0)} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <span className="text-secondary text-sm">✳</span>
                <span className="text-secondary text-[12px] font-bold uppercase tracking-wider">Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
                Our Creative{' '}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Workflow
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {workflow.map((step, i) => (
                <motion.div
                  key={step.title}
                  {...fadeUp(i * 0.12)}
                  className="glass-card rounded-[28px] p-8 flex flex-col gap-5 hover:-translate-y-2 transition-transform duration-500 group"
                >
                  {/* Icon circle */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${step.color}18`, border: `1px solid ${step.color}30` }}
                  >
                    <step.icon size={28} style={{ color: step.color }} />
                  </div>

                  {/* Step number */}
                  <div className="text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: step.color }}>
                    0{i + 1} / {step.title}
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-[15px]">{step.desc}</p>

                  {/* Bottom glow line */}
                  <div className="mt-auto h-[2px] w-0 group-hover:w-full rounded-full transition-all duration-500"
                    style={{ background: `linear-gradient(to right, ${step.color}, transparent)` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ── 5. CLIENT FEEDBACK MARQUEE ─────────────────────────────────── */}
        <div className="relative w-full bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 backdrop-blur-xl py-5 border-y border-primary/20 overflow-hidden flex items-center my-8">
          <motion.div
            animate={{ x: [0, '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
            className="flex whitespace-nowrap w-max"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-6">
                <span
                  className="text-4xl md:text-[48px] font-black tracking-tighter text-transparent whitespace-nowrap"
                  style={{ WebkitTextStroke: '2px #0D63CC' }}
                >
                  CLIENT FEEDBACK
                </span>
                <span className="text-primary text-3xl opacity-60">✳</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── 6. TESTIMONIAL SECTION ────────────────────────────────────── */}
        <section className="relative py-10 px-4 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>

        <GlowDivider />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

// ─── Testimonial Slider ──────────────────────────────────────────────────────

function TestimonialSlider({ testimonials }) {
  const [idx, setIdx] = useState(0);
  const current = testimonials[idx];

  return (
    <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-16 items-center max-w-6xl mx-auto py-10">

      {/* ── LEFT – Glassy Avatar Card with Cutout Badge ── */}
      <motion.div
        key={idx + '-image'}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex-shrink-0 group"
      >
        {/* Main Glass Surface */}
        <div className="w-[320px] md:w-[440px] aspect-square md:aspect-[1/1.1] rounded-[20px] relative overflow-hidden glass-card flex items-center justify-center p-3 border-white/50 shadow-sm">

          {/* Glossy Overlay Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none z-10" />

          {/* Inner Mint Container (Mockup Style) */}
          <div className="absolute inset-5 rounded-[10px] bg-primary/10 backdrop-blur-lg flex items-center justify-center border border-white/30 overflow-hidden">
            {/* Character/Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-[50%] h-[50%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-4xl hidden">
                🙋‍♂️
              </div>
            </div>
          </div>
        </div>

        {/* Quote Badge Overlapping (Centered at Bottom with Masking Border) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-sm border-[4px] border-white dark:border-[#0F172A] z-30 bg-primary"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#000">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ── RIGHT – Content & Interactive Nav ── */}
      <div className="flex-1 relative flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">

        <motion.div
          key={idx + '-content'}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 flex flex-col pt-6"
        >
          <blockquote className="text-[16px] md:text-[18px] font-medium text-text-primary leading-[1.7] italic mb-8 relative tracking-tight">
            {/* Decorative scribble marker */}
            <div className="absolute top-[-35px] left-[30%] opacity-50 pointer-events-none hidden md:block">
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                <path d="M5 35C25 25 45 5 65 15C75 18 75 35 55 35C45 35 25 25 55 10" stroke="var(--primary-mint)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            {current.quote}
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-10">
            <div>
              <div className="font-medium text-primary text-[12px] leading-none mb-3">{current.name}</div>
              <div className="text-[14px] text-text-secondary font-semibold opacity-80 ">{current.role}</div>
            </div>

            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-md px-2 py-1 rounded-full shadow-sm">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={14} className="text-[#FFC107] fill-[#FFC107]" />
              ))}
            </div>
          </div>

          {/* Navigation bottom */}
          <div className="flex items-center gap-8 mt-auto">
            <button
              onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm shadow-primary/25 bg-primary text-black"
            >
              <ArrowRight size={16} className="rotate-[225deg]" />
            </button>

            <div className="flex items-baseline gap-4 font-bold tracking-tighter">
              <span className="text-xl md:text-2xl text-text-primary tabular-nums">0{idx + 1}</span>
              <span className="text-lg md:text-xl text-text-secondary opacity-20">/ 0{testimonials.length}</span>
            </div>

            <button
              onClick={() => setIdx((idx + 1) % testimonials.length)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 bg-[#0F172A] text-white shadow-sm"
            >
              <ArrowRight size={16} className="-rotate-45" />
            </button>
          </div>
        </motion.div>

        {/* ── VERTICAL TIMELINE / PAGINATION ── */}
        <div className="hidden xl:flex flex-col justify-center gap-6 border-l-2 border-text-secondary/8 pl-16 relative">
          {testimonials.map((_, i) => (
            <div key={i} className="relative flex items-center group cursor-pointer" onClick={() => setIdx(i)}>
              <span className={`text-[14px] font-semibold transition-all duration-500 ${idx === i ? 'text-text-primary scale-125' : 'text-text-secondary/15 group-hover:text-text-secondary/50'}`}>
                0{i + 1}
              </span>

              {idx === i && (
                <motion.div
                  layoutId="testimonial-active-bubble"
                  className="absolute -left-[80px] flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[14px] font-semibold text-text-primary shadow-sm shadow-primary/40 ring-[4px] ring-white">
                    0{i + 1}
                  </div>
                  <div className="w-6 h-[2px] bg-primary rounded-full shadow-[0_0_15px_var(--primary-mint)]" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
