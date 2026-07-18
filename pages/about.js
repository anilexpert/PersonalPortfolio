import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Pencil, Search, ChevronLeft, ChevronRight, Star, Target, Box, FlaskConical, Flag, Briefcase, Brain, Layers, MessageSquare, Code } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import GlowDivider from '../components/GlowDivider';
import RotatingBadge from '../components/RotatingBadge';
// ─── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { label: 'SaaS & Enterprise Products Designed', value: '15+', accent: 'primary' },
  { label: 'Product Screens Designed', value: '200+', accent: 'primary', pill: true },
  { label: 'Complex Workflows Simplified', value: '20+', accent: 'secondary' },
];

const workflow = [
  {
    icon: Target,
    title: 'Discover',
    color: '#FBBF24', // Yellow
    labelPos: 'top',
    desc: 'Understand users, business goals, and product challenges.'
  },
  {
    icon: Lightbulb,
    title: 'Define',
    color: '#818CF8', // Purple/Indigo
    labelPos: 'bottom',
    desc: 'Translate research into clear opportunities and product direction.'
  },
  {
    icon: Box,
    title: 'Ideate',
    color: '#F472B6', // Pink
    labelPos: 'top',
    desc: 'Explore concepts and validate potential solutions.'
  },
  {
    icon: FlaskConical,
    title: 'Prototype & Test',
    color: '#2DD4BF', // Teal
    labelPos: 'bottom',
    desc: 'Validate assumptions and refine experiences through feedback.'
  },
  {
    icon: Flag,
    title: 'Deliver & Scale',
    color: '#FB923C', // Orange
    labelPos: 'top',
    desc: 'Create scalable systems and collaborate through implementation.'
  },
];

const reasonsToChoose = [
  {
    title: 'Product Thinking Beyond UI',
    desc: 'I solve business problems, not just design screens.',
    icon: Lightbulb
  },
  {
    title: 'Enterprise Experience',
    desc: 'Experienced in designing complex, multi-role platforms.',
    icon: Briefcase
  },
  {
    title: 'AI-First Mindset',
    desc: 'Designing intelligent experiences that balance automation and usability.',
    icon: Brain
  },
  {
    title: 'Scalable Systems Thinking',
    desc: 'Building reusable, future-ready design foundations.',
    icon: Layers
  },
  {
    title: 'Clear Communication',
    desc: 'Transparent collaboration throughout the product lifecycle.',
    icon: MessageSquare
  },
  {
    title: 'Developer-Friendly Handoff',
    desc: 'Delivering production-ready design assets and documentation.',
    icon: Code
  }
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
    quote: 'I had a great experience working with Anil. He managed to solve our problems and fix the bugs on the website, while communicating clearly.',
    name: 'Henk-Jan Kamstra',
    role: 'Netherlands, Amsterdam',
    avatar: '/images/default-avatar-photo-placeholder-profile-picture-vector.webp',
    rating: 5,
  },
  {
    quote: 'He provided me clear specification document. So I do not have any problem or miscommunication with him.It is a valuable experience to work for him.',
    name: 'Jimmy Rongmei',
    role: 'United States Alpharetta',
    avatar: '/images/default-avatar-photo-placeholder-profile-picture-vector.webp',
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

            {/* Circular Rotating Badge */}
            <div className="absolute top-2 right-[6%] hidden lg:block">
              <RotatingBadge
                icon={Star}
                labels={["ABOUT ME", "CREATIVE", "DESIGN"]}
                iconColor="#FBBF24"
                size={150}
              />
            </div>
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Designing Products</span>{' '}That
                  <span
                    className="relative inline-block"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '2px var(--primary-mint)',
                      textStroke: '2px var(--primary-mint)',
                    }}
                  >
                    Simplify Complexity
                  </span>{' '}
                  and<br />
                  <div className="flex items-center gap-4 mt-2 flex-wrap">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Drive Business Growth</span>

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
                <div className="flex items-center gap-4 md:gap-6 lg:gap-8 select-none mb-4 lg:mb-8">
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

              {/* ── RIGHT COL ── */}
              <div className="max-w-full mx-auto relative z-10">
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start mb-6 md:mb-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative shrink-0 group"
                  >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl md:rounded-[2rem] overflow-hidden border border-primary/20 p-2 relative z-10 bg-surface/50 backdrop-blur-sm shadow-xl transition-transform duration-500 group-hover:scale-105">
                      <div className="w-full h-full rounded-[14px] md:rounded-[28px] overflow-hidden relative">
                        <Image
                          src="/Anil-Avatar.png"
                          alt="Anil Kumar Profile"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/* decorative background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl rounded-full z-0 -m-4 transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 pt-2 sm:pt-4 md:pt-6"
                  >
                    <h2 className="text-[24px] sm:text-xl md:text-2xl font-bold text-text-primary mb-2">
                      Hello, 👋 I'm Anil Kumar —
                      <span className="block mt-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">AI-Driven Product Designer </span>
                      <span className="text-lg md:text-xl font-medium mt-1 block text-text-secondary">for SaaS & Enterprise Products</span>
                    </h2>
                  </motion.div>
                </div>

                <motion.div {...fadeUp(0.12)} className="flex flex-col gap-6">

                  {/* Description */}
                  <p className="text-[15px] md:text-base text-text-secondary leading-relaxed">
                    Hi, I'm Anil Kumar — an AI-Driven Product Designer with 10+ years of experience designing SaaS, healthcare, and enterprise products.
                  </p>
                  <p className="text-[15px] md:text-base text-text-secondary leading-relaxed">
                    I specialize in transforming complex workflows into intuitive, scalable digital experiences that align user needs with business goals.
                  </p>
                  <p className="text-[15px] md:text-base text-text-secondary leading-relaxed">
                    Over the years, I've partnered with startups, SMEs, and product teams to simplify operations, improve usability, and create products that drive measurable impact.
                  </p>
                  <p className="text-[15px] md:text-base text-text-secondary leading-relaxed">
                    My work goes beyond creating interfaces. I focus on understanding business challenges, user behaviors, and operational workflows to design products that are both intuitive and scalable.
                  </p>
                  <p className="text-[15px] md:text-base text-text-secondary leading-relaxed">
                    From AI-powered platforms and enterprise dashboards to healthcare ecosystems and data-driven SaaS applications, I enjoy solving complex problems through systems thinking, product strategy, and user-centered design.
                  </p>

                </motion.div>
              </div>
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
              <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 md:mb-6">
                How I Approach
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">Product Design</span>
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

        {/* GlowDivider */}
        <div className="w-full py-0 flex items-center justify-center my-4 px-6">
          <div className="w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* ── 4. WHY CLIENTS CHOOSE ME ──────────────────────────────────── */}
        <section className="relative py-12 md:py-16 px-4 md:px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 md:mb-6">
                Why Clients
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">Choose Me</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {reasonsToChoose.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  {...fadeUp(i * 0.1)}
                  className="glass-card p-6 md:p-8 rounded-[16px] lg:rounded-[24px] border border-white/20 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
                    <reason.icon size={24} className="text-primary" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-[18px] md:text-[20px] font-bold text-text-primary mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-text-secondary leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4.5. CURRENTLY AVAILABLE FOR ──────────────────────────────── */}
        <section className="relative py-8 px-4 md:px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 rounded-[32px] border border-primary/20 shadow-sm text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-50 pointer-events-none" />

              <h2 className="text-[20px] md:text-[24px] font-bold text-text-primary mb-8 inline-flex items-center justify-center gap-3 w-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                Currently Available For
              </h2>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
                {[
                  "SaaS Product Design",
                  "AI Product Design",
                  "Enterprise UX Consulting",
                  "Dashboard Design",
                  "Long-Term Product Partnerships"
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2.5 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/40 dark:border-white/10 px-4 md:px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-default"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[13px] md:text-[15px] font-semibold text-text-secondary">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              // onError={(e) => {
              //   e.target.src = "https://ui-avatars.com/api/?name=" + current.name;
              // }}
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
