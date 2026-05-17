import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Pencil, Search, ChevronLeft, ChevronRight, Star, Target, Box, FlaskConical, Flag } from 'lucide-react';
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
    icon: Target,
    title: 'Research and Analysis',
    color: '#FBBF24', // Yellow
    labelPos: 'top',
    desc: 'Deep dive into user needs, market trends, and business goals to build a solid foundation.'
  },
  {
    icon: Lightbulb,
    title: 'Ideation',
    color: '#818CF8', // Purple/Indigo
    labelPos: 'bottom',
    desc: 'Brainstorming creative solutions and exploring multiple design directions.'
  },
  {
    icon: Box,
    title: 'Concept Development',
    color: '#F472B6', // Pink
    labelPos: 'top',
    desc: 'Refining selected ideas into concrete design concepts and architectural structures.'
  },
  {
    icon: FlaskConical,
    title: 'Prototyping and Testing',
    color: '#2DD4BF', // Teal
    labelPos: 'bottom',
    desc: 'Creating interactive prototypes and validating designs with real users.'
  },
  {
    icon: Flag,
    title: 'Final Design and Production',
    color: '#FB923C', // Orange
    labelPos: 'top',
    desc: 'Polishing every pixel and preparing assets for a seamless development handoff.'
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
    avatar: '/images/testimonial-1.png',
    rating: 5,
  },
  {
    quote: 'Working with Anil was a transformative experience. His attention to detail and deep understanding of user needs resulted in a product that exceeded all expectations.',
    name: 'Marcus Chen',
    role: 'Startup Founder',
    avatar: '/images/testimonial-2.png',
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

      <main className="min-h-screen pt-20 md:pt-24">

        {/* ── 1. PAGE HERO ───────────────────────────────────────────────── */}
        <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
          {/* bg glows */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Breadcrumb */}
            <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-2 text-[10px] md:text-[12px] font-semibold text-text-secondary uppercase tracking-widest mb-4 md:mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">About Us</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-[24px] sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 md:mb-6"
            >
              About
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">Us</span>
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
        <section className="relative py-12 md:py-16 px-4 md:px-6 overflow-hidden">
          {/* subtle bg glow */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/8 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 md:gap-12 xl:gap-20 items-start">

              {/* ── LEFT COL ── */}
              <motion.div {...fadeUp(0)} className="relative">

                {/* Headline */}
                <h2 className="text-[28px] sm:text-3xl md:text-4xl xl:text-[34px] font-black text-text-primary leading-[1.15] tracking-tight uppercase mb-8 md:mb-10">
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
                <div className="flex items-center gap-4 md:gap-6 lg:gap-8 select-none">
                  <span
                    className="text-[100px] sm:text-[130px] md:text-[180px] font-black leading-none tracking-tighter"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '4px var(--primary-mint)',
                      textStroke: '4px var(--primary-mint)',
                    }}
                  >
                    10+
                  </span>

                  <div className="text-[12px] md:text-[14px] lg:text-[16px] font-semibold uppercase text-text-secondary leading-[1.3]">
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
                        className={`relative glass-card rounded-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300 group shadow-md ${widths[i]} ${zIndexes[i]} ${margins}`}
                      >
                        <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-text-secondary group-hover:text-text-primary transition-colors">
                          {s.label}
                        </span>

                        <span
                          className="text-xl md:text-2xl font-bold tracking-tight"
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

        {/* ── 3. CREATIVE WORKFLOW (PROCESS) ────────────────────────────── */}
        <section className="relative py-12 md:py-16 px-4 md:px-6 overflow-hidden" id="workflow">
          {/* Intense Neon Background Glows */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 blur-[140px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/40 blur-[100px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-4"
            >
              <h2 className="text-[32px] sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 md:mb-6">
                Process of Product
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">Design</span>
              </h2>
            </motion.div>

            {/* Desktop Timeline Layout */}
            <div className="hidden lg:block relative min-h-[350px]">
              {/* SVG Wavy Flowing Dashed Line */}
              <svg
                viewBox="0 0 1200 300"
                fill="none"
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              >
                <motion.path
                  initial={{ pathLength: 0, strokeDashoffset: 100 }}
                  whileInView={{
                    pathLength: 1,
                    strokeDashoffset: [100, 0],
                  }}
                  viewport={{ once: true }}
                  transition={{
                    pathLength: { duration: 2, ease: "easeInOut" },
                    strokeDashoffset: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  d="M0 150 C 100 150, 100 230, 200 230 S 300 70, 400 70 S 500 230, 600 230 S 700 70, 800 70 S 900 230, 1000 230 S 1100 150, 1200 150"
                  stroke="url(#lineGradient)"
                  strokeWidth="2.5"
                  strokeDasharray="12 12"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CBD5E1" />
                    <stop offset="0.5" stopColor="#94A3B8" />
                    <stop offset="1" stopColor="#CBD5E1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Stage Nodes */}
              <div className="relative w-full h-[200px]">
                {workflow.map((step, i) => {
                  const xPerc = ((200 + i * 200) / 1200) * 100;
                  const yPos = step.labelPos === 'top' ? 200 : 160;

                  return (
                    <div
                      key={step.title}
                      className="absolute"
                      style={{ left: `${xPerc}%`, top: `${yPos}px` }}
                    >
                      {/* Label and Arrow Container */}
                      <motion.div
                        initial={{ opacity: 0, y: step.labelPos === 'top' ? -20 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
                        className="absolute left-0 w-64 -translate-x-1/2 flex flex-col items-center group/label"
                        style={{
                          top: step.labelPos === 'top' ? '-140px' : '60px'
                        }}
                      >
                        {step.labelPos === 'top' ? (
                          <>
                            <p className="text-[14px] font-bold text-[#1A1A1A] mb-3 leading-tight group-hover/label:text-primary transition-colors">
                              {step.title}
                            </p>
                            <motion.div
                              animate={{ y: [0, 5, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="opacity-40">
                                <path d="M12 0 V30 M7 25 L12 30 L17 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </motion.div>
                          </>
                        ) : (
                          <>
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="mb-3 opacity-40">
                                <path d="M12 40 V10 M7 15 L12 10 L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </motion.div>
                            <p className="text-[14px] font-bold text-[#1A1A1A] leading-tight group-hover/label:text-secondary transition-colors">
                              {step.title}
                            </p>
                          </>
                        )}
                      </motion.div>

                      {/* Circle Node */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.4 + i * 0.15,
                          type: "spring",
                          stiffness: 120,
                          damping: 12
                        }}
                        className="relative w-28 h-28 rounded-full flex items-center justify-center z-20 group -translate-x-1/2 -translate-y-1/2"
                      >
                        {/* Outer Pulse Ring */}
                        <div
                          className="absolute inset-[-10px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                          style={{ backgroundColor: step.color }}
                        />

                        {/* Circle Body */}
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-full h-full rounded-full border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-center relative z-10 overflow-hidden cursor-pointer"
                          style={{
                            backgroundColor: step.color,
                            boxShadow: `0 20px 40px ${step.color}30, inset 0 0 20px rgba(0,0,0,0.1)`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/30 pointer-events-none" />
                          <step.icon size={42} className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] relative z-10" strokeWidth={2.5} />

                          {/* Inner Shine */}
                          <div className="absolute top-2 left-2 w-1/3 h-1/3 bg-white/20 rounded-full blur-md" />
                        </motion.div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Vertical Layout */}
            <div className="lg:hidden flex flex-col gap-8 relative pt-6">
              {/* Vertical Dashed Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-slate-300 -translate-x-1/2 z-0" />

              {workflow.map((step, i) => (
                <motion.div
                  key={step.title}
                  {...fadeUp(i * 0.1)}
                  className={`flex items-center gap-4 relative z-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <p className="text-[14px] font-bold text-[#333] leading-snug">{step.title}</p>
                  </div>

                  <div className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center shadow-lg relative shrink-0 z-10" style={{ backgroundColor: step.color }}>
                    <step.icon size={22} className="text-white" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ── 5. CLIENT FEEDBACK MARQUEE ─────────────────────────────────── */}
        <div className="relative w-full bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 backdrop-blur-xl py-3 md:py-5 border-y border-primary/20 overflow-hidden flex items-center my-6 md:my-8">
          <motion.div
            animate={{ x: [0, '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
            className="flex whitespace-nowrap w-max"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-8 px-4 md:px-6">
                <span
                  className="text-3xl sm:text-4xl md:text-[48px] font-black tracking-tighter text-transparent whitespace-nowrap"
                  style={{ WebkitTextStroke: '2px #0D63CC' }}
                >
                  CLIENT FEEDBACK
                </span>
                <span className="text-primary text-xl md:text-3xl opacity-60">✳</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── 6. TESTIMONIAL SECTION ────────────────────────────────────── */}
        <section className="relative py-8 md:py-10 px-4 overflow-hidden">
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
        className="relative flex-shrink-0 group mx-auto md:mx-0"
      >
        {/* Main Glass Surface */}
        <div className="w-[260px] sm:w-[320px] md:w-[440px] aspect-square md:aspect-[1/1.1] rounded-[20px] relative overflow-hidden glass-card flex items-center justify-center p-2 md:p-3 border-white/50 shadow-sm">

          {/* Glossy Overlay Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none z-10" />

          {/* Inner Mint Container (Mockup Style) */}
          <div className="absolute inset-3 md:inset-5 rounded-[10px] bg-primary/10 backdrop-blur-lg flex items-center justify-center border border-white/30 overflow-hidden">
            {/* Character/Image */}
            <div className="relative w-full h-full">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=" + current.name;
                }}
              />
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
          <blockquote className="text-[15px] md:text-[18px] font-medium text-text-primary leading-[1.6] md:leading-[1.7] italic mb-6 md:mb-8 relative tracking-tight">
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
