import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, Brain, TrendingUp, Target, Smartphone, Shield, Zap,
   Search, Users, Grid, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase, HandCoins,
   PieChart, Handshake, MessageCircle, User
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GlowDivider from '../../components/GlowDivider'

export default function SpendoraCaseStudy() {
   const fadeIn = {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }
   }

   const staggerChildren = {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-100px" },
      transition: { staggerChildren: 0.15 }
   }

   const StickyNote = ({ color, text, rotate = "0deg" }) => (
      <motion.div
         whileHover={{ scale: 1.05, rotate: "0deg", zIndex: 30 }}
         style={{ rotate }}
         className={`w-40 h-40 ${color} p-4 shadow-lg flex flex-col justify-between relative overflow-hidden group transition-all duration-300`}
      >
         <p className="text-[13px] font-bold text-slate-800 leading-tight">
            {text}
         </p>
         <div className="absolute bottom-0 right-0 w-8 h-8 bg-black/5 rounded-tl-full" />
      </motion.div>
   );

   const SwotCard = ({ title, items, color, align = "text-left" }) => (
      <div className={`p-8 glass-card rounded-[24px] border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 ${align} transition-all duration-500`}>
         <h4 className={`text-xl font-black uppercase tracking-widest mb-4 ${color}`}>{title}</h4>
         <ul className="space-y-2">
            {items.map((item, i) => (
               <li key={i} className="text-sm font-bold text-text-secondary opacity-70">{item}</li>
            ))}
         </ul>
      </div>
   );

   // Premium Glass Placeholder Component
   const PremiumPlaceholder = ({ icon: Icon, label, glowCls = "bg-[#0D63CC]", textCls = "text-[#0D63CC]", aspect = "aspect-[16/9]" }) => (
      <div className={`w-full ${aspect} glass-card rounded-3xl flex flex-col items-center justify-center overflow-hidden relative group transition-all duration-500 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-lg`}>
         {/* Top Right Glow Effect */}
         <div
            className="absolute -top-24 -right-24 w-64 h-64 blur-[60px] rounded-full transition-all duration-700 group-hover:scale-[1.5] group-hover:opacity-20 opacity-10 pointer-events-none z-0"
            style={{ backgroundColor: glowCls.replace('bg-[', '').replace(']', '') }}
         />

         <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
         {Icon && <Icon className={`w-14 h-14 mb-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-500 relative z-10 ${textCls} opacity-30`} strokeWidth={1.2} />}
         <span className={`font-bold tracking-[0.2em] text-[10px] uppercase px-8 text-center text-text-secondary relative z-10 opacity-50 group-hover:opacity-100 transition-opacity`}>
            {label}
         </span>
      </div>
   );

   return (
      <>
         <Head>
            <title>Spendora | Case Study - AI-Powered Smart Expense Ecosystem</title>
         </Head>

         <Navbar />

         <main className="min-h-screen pt-20 md:pt-24 pb-20 md:pb-32 relative z-10">

            {/* ── 1. PAGE HERO (Inner Banner) ───────────────────────────────────────────────── */}
            <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
               {/* bg glows */}
               <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
               <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

               <div className="max-w-7xl mx-auto relative z-10 text-center">
                  {/* Breadcrumb */}
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex items-center justify-center gap-2 text-[10px] md:text-[12px] font-semibold text-text-secondary uppercase tracking-widest mb-4 md:mb-6">
                     <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                     <span>/</span>
                     <span className="text-primary">Case Studies</span>
                  </motion.div>

                  <motion.h1
                     initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                     className="text-[24px] sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 md:mb-6"
                  >
                     Case
                     <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">Studies</span>
                  </motion.h1>

                  {/* Decorative scribble SVG */}
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="absolute top-8 right-[8%] opacity-30 pointer-events-none hidden lg:block">
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

            <div className="w-full max-w-7xl mx-auto px-4 pt-10 lg:pt-14 md:px-6">

               {/* HERO SECTION */}
               <section className="mb-12 md:mb-16 grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
                  <div className="lg:col-span-8">
                     <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6"
                     >
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Case Study
                        </span>
                     </motion.div>
                     <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-[0.9] text-text-primary">
                        Spendora™
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        AI-Powered <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Smart Expense Ecosystem</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        A modern fintech platform that helps individuals and businesses track, analyze, and optimize expenses using intelligent automation, real-time insights, and AI-driven recommendations.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Category</p>
                        <p className="font-bold text-sm text-text-primary">Fintech / SaaS</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">My Role</p>
                        <p className="font-bold text-sm text-text-primary">Product Designer</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Duration</p>
                        <p className="font-bold text-sm text-text-primary">10 Weeks</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Year</p>
                        <p className="font-bold text-sm text-text-primary">2026</p>
                     </div>
                  </motion.div>
               </section>

               {/* MAIN HERO IMAGE */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-20 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[32px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                     {/* Top Right Glow Effect */}
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-30 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #00DA99 0%, #0D63CC 100%)' }}
                     />
                     <Image
                        src="/images/spendora/SpendoraBanner.png"
                        alt="Spendora Dashboard"
                        fill
                        className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.02]"
                     />
                  </div>
               </motion.section>

               {/* OVERVIEW / CHALLENGES / SOLUTION */}
               <section className="mb-16 md:mb-24 lg:mb-32 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Overview</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                           Spendora™ is a modern fintech expense management platform designed to help users track, analyze, and optimize their spending through AI-powered insights, automation, and intuitive financial workflows. The goal was to move beyond traditional expense tracking and create a smart financial ecosystem that empowers users to make better financial decisions with minimal effort.
                        </p>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Challenges</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Most expense management tools are either too manual and time-consuming, too data-heavy and difficult to interpret, or lack actionable insights. Users struggle to understand where their money is going, maintain consistent budgeting habits, and make informed financial decisions.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              "Overwhelmed by raw financial data",
                              "Manual tracking leads to inconsistency",
                              "Lack of predictive foresight",
                              "Complex tax-friendly summaries"
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-4 glass-card rounded-2xl">
                                 <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(13,99,204,0.5)]" />
                                 <span className="text-sm font-bold text-text-primary">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Solution</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                           Spendora™ introduces an AI-powered expense ecosystem that automatically categorizes transactions, provides real-time spending insights, offers smart budgeting recommendations, and visualizes financial data in an intuitive way. The platform focuses on clarity, automation, and user control, ensuring users feel confident managing their finances.
                        </p>
                     </div>
                  </div>
               </section>

               {/* KEY FEATURES GRID */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Core Value
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Key Features & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Smart Solutions</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">High-fidelity functionalities designed to empower users with intelligent automation.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Smart Expense Tracking", desc: "Automated categorization of transactions using proprietary AI models.", color: "#00DA99", image: "/images/spendora/SmartExpenseTracking.png" },
                        { num: "02", title: "AI Budget Recommendations", desc: "Personalized spending limits based on historical data and future goals.", color: "#0D63CC", image: "/images/spendora/AIBudgetRecommendations.png" },
                        { num: "03", title: "Interactive Dashboards", desc: "Real-time financial health visualised with high-fidelity analytics.", color: "#8B5CF6", image: "/images/spendora/InteractiveDashboards.png" },
                        { num: "04", title: "Goal-Based Planning", desc: "Dedicated spaces for multi-phase savings with progress forecasting.", color: "#F59E0B", image: "/images/spendora/GoalBasedPlanning.png" },
                        { num: "05", title: "Multi-Device Sync", desc: "Seamless experience across web, iOS, and Android ecosystems.", color: "#10B981", image: "/images/spendora/Multi-DeviceSync.png" },
                        { num: "06", title: "Predictive Intelligence", desc: "Anomaly detection and proactive financial advice powered by ML.", color: "#3B82F6", image: "/images/spendora/PredictiveIntelligence.png" }
                     ].map((feature, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                           className="glass-card p-6 md:p-8 rounded-[24px] group hover:-translate-y-2 relative overflow-hidden"
                        >
                           {/* Top Right Glow */}
                           <div
                              className="absolute -top-16 -right-16 w-40 h-40 blur-[50px] rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: feature.color }}
                           />

                           <div className="flex items-center justify-between mb-8 relative z-10">
                              <div
                                 className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all duration-300 group-hover:scale-110"
                                 style={{ backgroundColor: `${feature.color}20`, color: feature.color, border: `1px solid ${feature.color}30` }}
                              >
                                 {feature.num}
                              </div>
                              <Layout size={20} className="text-text-secondary opacity-20" />
                           </div>
                           <h4 className="font-bold text-xl text-text-primary mb-3 relative z-10">{feature.title}</h4>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed mb-8 relative z-10">{feature.desc}</p>

                           <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500">
                              <Image 
                                 src={feature.image} 
                                 alt={feature.title} 
                                 fill 
                                 className="object-cover transition-transform duration-700 group-hover:scale-105" 
                              />
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* USER PERSONAS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           User Research
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Personas</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        We identified key user groups to understand their goals, pain points, and motivations. These personas guided our design decisions and feature prioritization.
                     </p>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                     {[
                        {
                           name: "Arjun Mehta",
                           role: "Young Professional (Primary User)",
                           image: "/images/spendora/arjun.png",
                           bio: "Needs better control over monthly spending. Wants automation instead of manual tracking. Seeks clear insights without complexity.",
                           needs: ["Automated tracking", "Clear, quick insights", "Goal setting"],
                           pains: ["Overspending without realizing", "Lack of financial discipline", "Manual input is tedious"],
                           color: "#0D63CC"
                        },
                        {
                           name: "Sneha Iyer",
                           role: "Small Business Owner",
                           image: "/images/spendora/sneha.png",
                           bio: "Tracks multiple expenses and categories. Needs a quick overview of financial health to make rapid business decisions.",
                           needs: ["Quick overview of health", "Categorized reports", "Tax-friendly summaries"],
                           pains: ["Time-consuming tracking", "Difficulty analyzing data", "Mixing personal/business"],
                           color: "#00DA99"
                        }
                     ].map((persona, idx) => (
                        <motion.div
                           key={idx}
                           {...fadeIn}
                           className="glass-card rounded-[20px] p-6 md:p-10 lg:p-12 group relative overflow-hidden flex flex-col border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-md"
                        >
                           {/* Dynamic Background Glow */}
                           <div
                              className="absolute -top-24 -right-24 w-80 h-80 blur-[100px] rounded-full transition-all duration-1000 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: persona.color }}
                           />

                           <div className="flex items-center gap-8 mb-12 relative z-10">
                              <div className="w-24 h-24 rounded-[16px] overflow-hidden glass-card flex-shrink-0 relative border-2 border-white shadow-2xl">
                                 <Image src={persona.image} alt={persona.name} fill className="object-cover" />
                              </div>
                              <div>
                                 <h4 className="font-bold text-3xl text-gray-800 tracking-tight">{persona.name}</h4>
                                 <p className="text-xs font-medium text-secondary  mt-2 opacity-80">{persona.role}</p>
                              </div>
                           </div>

                           <p className="text-base text-gray-800 leading-relaxed mb-12 relative z-10 font-medium">
                              "{persona.bio}"
                           </p>

                           <div className="space-y-6 relative z-10">
                              <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                                    <CheckCircle2 size={14} strokeWidth={3} /> Core Needs
                                 </h5>
                                 <div className="flex flex-wrap gap-3">
                                    {persona.needs.map((n, i) => (
                                       <span key={i} className="px-4 py-2 bg-white/60 rounded-lg border border-primary/20 text-xs font-medium text-text-primary">
                                          {n}
                                       </span>
                                    ))}
                                 </div>
                              </div>

                              <div className="p-6 rounded-3xl bg-rose-50 border border-rose-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-rose-500 mb-4 flex items-center gap-2">
                                    <Activity size={14} strokeWidth={3} /> Critical Pain Points
                                 </h5>
                                 <div className="flex flex-wrap gap-3">
                                    {persona.pains.map((p, i) => (
                                       <span key={i} className="px-4 py-2 bg-white/60 rounded-lg border border-rose-100 text-xs font-medium text-text-primary">
                                          {p}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* DESIGN APPROACH & PROCESS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-20 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Process
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design Approach & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Process</span></h2>
                     <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
                        A systematic approach to solving complex financial challenges through user-centric design and iterative refinement.
                     </p>
                  </div>

                  <div className="relative max-w-6xl mx-auto px-4">
                     <div className="hidden lg:block absolute top-16 left-24 right-24 h-1 z-0 pointer-events-none">
                        <svg width="100%" height="80" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none" className="opacity-30">
                           <path
                              d="M0,40 Q125,0 250,40 T500,40 T750,40 T1000,40"
                              stroke="#0D63CC"
                              strokeWidth="2"
                              strokeDasharray="8 8"
                              className="animate-dash"
                           />
                        </svg>
                     </div>

                     {/* DESKTOP VIEW (Horizontal) */}
                     <div className="hidden lg:flex items-start justify-between relative z-10">
                        {[
                           { num: "01", title: "Empathize", desc: "User research, interviews, understanding pain points.", icon: Heart, type: "dashed" },
                           { num: "02", title: "Define", desc: "User personas, problem definition & prioritization.", icon: Target, type: "dashed" },
                           { num: "03", title: "Ideate", desc: "Brainstorming, user flows, information architecture.", icon: Lightbulb, type: "solid-light" },
                           { num: "04", title: "Design", desc: "Wireframes, visual design, UI system.", icon: PenTool, type: "solid-light" },
                           { num: "05", title: "Test", desc: "Usability testing, feedback, iterative improvements.", icon: CheckCircle2, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className={`flex flex-col items-center w-48 relative ${i % 2 !== 0 ? 'translate-y-8' : ''} transition-transform duration-1000`}>
                              {/* Circle Node */}
                              <motion.div
                                 {...fadeIn}
                                 transition={{ delay: i * 0.1 }}
                                 className={`w-32 h-32 rounded-full mb-8 flex flex-col items-center justify-center transition-all duration-500 group relative
                                 ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                                 ${step.type === 'solid-light' ? 'border-2 border-[#0D63CC] bg-[#E8F1FF] shadow-md' : ''}
                                 ${step.type === 'solid-dark' ? 'bg-[#282360] text-white shadow-xl' : ''}
                                 hover:scale-110 hover:shadow-2xl
                              `}
                              >
                                 <step.icon size={28} strokeWidth={step.type === 'solid-dark' ? 2 : 1.5} className={step.type === 'solid-dark' ? 'text-white' : 'text-[#282360]'} />
                                 <span className={`text-[11px] font-black uppercase tracking-widest mt-2 ${step.type === 'solid-dark' ? 'text-white' : 'text-[#282360]'}`}>
                                    {step.title}
                                 </span>
                              </motion.div>

                              {/* Description */}
                              <motion.p
                                 {...fadeIn}
                                 transition={{ delay: i * 0.1 + 0.2 }}
                                 className="text-[11px] text-text-secondary font-bold text-center leading-relaxed max-w-[140px]"
                              >
                                 {step.desc}
                              </motion.p>

                              {/* Connector Arrows (Aligned to path) */}
                              {i < 4 && (
                                 <div className={`absolute top-16 -right-12 translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center pointer-events-none opacity-40
                                 ${i % 2 === 0 ? 'rotate-[15deg] translate-y-4' : '-rotate-[15deg] -translate-y-4'}
                              `}>
                                    {i === 1 ? (
                                       <Activity size={20} className="text-secondary animate-pulse" />
                                    ) : (
                                       <ArrowLeft size={18} className="text-slate-400 rotate-180" />
                                    )}
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>

                     {/* MOBILE VIEW (Vertical) */}
                     <div className="lg:hidden space-y-16">
                        {[
                           { num: "01", title: "Empathize", desc: "User research, interviews, understanding pain points.", icon: Heart, type: "dashed" },
                           { num: "02", title: "Define", desc: "User personas, problem definition & prioritization.", icon: Target, type: "dashed" },
                           { num: "03", title: "Ideate", desc: "Brainstorming, user flows, information architecture.", icon: Lightbulb, type: "solid-light" },
                           { num: "04", title: "Design", desc: "Wireframes, visual design, UI system.", icon: PenTool, type: "solid-light" },
                           { num: "05", title: "Test", desc: "Usability testing, feedback, iterative improvements.", icon: CheckCircle2, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className="flex flex-col items-center relative">
                              <div className={`w-32 h-32 rounded-full mb-6 flex flex-col items-center justify-center 
                              ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                              ${step.type === 'solid-light' ? 'border-2 border-[#0D63CC] bg-[#E8F1FF] shadow-md' : ''}
                              ${step.type === 'solid-dark' ? 'bg-[#282360] text-white shadow-xl' : ''}
                           `}>
                                 <step.icon size={28} strokeWidth={1.5} className={step.type === 'solid-dark' ? 'text-white' : 'text-[#282360]'} />
                                 <span className={`text-[11px] font-black uppercase tracking-widest mt-2 ${step.type === 'solid-dark' ? 'text-white' : 'text-[#282360]'}`}>
                                    {step.title}
                                 </span>
                              </div>
                              <p className="text-[11px] text-text-secondary font-bold text-center max-w-[200px]">
                                 {step.desc}
                              </p>
                              {i < 4 && (
                                 <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-slate-200" />
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* DESIGN SYSTEM & VISUALS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Visual Identity
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design System & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Visuals</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        A clean, modern, and consistent design system was created to ensure accessibility, clarity, and a premium fintech user experience.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4">

                     {/* Colors - Spans 4 cols */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Color Palette
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { bg: 'bg-[#00DA99]', label: 'Mint', hex: '#00DA99' },
                              { bg: 'bg-[#0D63CC]', label: 'Primary', hex: '#0D63CC' },
                              { bg: 'bg-[#282360]', label: 'Depth', hex: '#282360' },
                              { bg: 'bg-[#A5C9FF]', label: 'Light', hex: '#A5C9FF' },
                              { bg: 'bg-rose-500', label: 'Accent', hex: '#F43F5E' },
                              { bg: 'bg-slate-800', label: 'Dark', hex: '#1E293B' }
                           ].map((color, i) => (
                              <div key={i} className="flex flex-col gap-2 group/color">
                                 <div className={`w-full aspect-square rounded-2xl ${color.bg} shadow-lg border border-white/20 group-hover/color:scale-110 group-hover/color:shadow-2xl transition-all duration-300`} />
                                 <div>
                                    <span className="block text-[10px] font-bold text-text-primary uppercase tracking-wider">{color.label}</span>
                                    <span className="block text-[9px] text-text-secondary font-medium uppercase opacity-50">{color.hex}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Typography - Spans 4 cols */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#00DA99]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00DA99]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#00DA99] rounded-full" /> Typography
                        </h4>

                        <div className="flex-1 flex flex-col justify-center mb-8">
                           <div className="text-[100px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-400 tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">
                              Aa
                           </div>
                        </div>

                        <div className="space-y-4">
                           <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                              <span className="text-3xl font-black text-text-primary tracking-tight">Poppins</span>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Primary Font</span>
                           </div>
                           <div className="flex justify-between text-xs font-medium text-text-secondary">
                              <span>Regular</span>
                              <span className="font-bold">Bold</span>
                              <span className="font-black">Black</span>
                           </div>
                        </div>
                     </div>

                     {/* Iconography - Spans 4 cols */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-rose-500/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-1/2 right-0 w-32 h-32 bg-rose-500/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-rose-500 rounded-full" /> Iconography
                        </h4>

                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { icon: Layout, color: "text-[#0D63CC]" },
                              { icon: PieChart, color: "text-[#00DA99]" },
                              { icon: CheckSquare, color: "text-rose-500" },
                              { icon: Activity, color: "text-[#0D63CC]" },
                              { icon: Settings, color: "text-[#282360]" },
                              { icon: Zap, color: "text-amber-500" },
                              { icon: Shield, color: "text-[#00DA99]" },
                              { icon: Smartphone, color: "text-[#0D63CC]" },
                              { icon: Target, color: "text-rose-500" }
                           ].map((Item, i) => (
                              <div key={i} className="aspect-square rounded-2xl bg-white/50 border border-slate-200 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                 <Item.icon size={24} strokeWidth={1.5} className={`${Item.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* UI Components Preview - Spans 12 cols */}
                     <div className="lg:col-span-12 glass-card rounded-[40px] p-6 lg:p-10 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-8 min-h-[300px]">
                        {/* Decorative background */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTMsOTksMjA0LDAuMDUpIi8+PC9zdmc+')] opacity-50" />

                        {/* Abstract Component 1: Metric Card */}
                        <div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 border border-slate-200 relative z-10 hover:-translate-y-2 transition-transform duration-500">
                           <div className="flex justify-between items-center mb-6">
                              <div className="w-10 h-10 rounded-full bg-[#0D63CC]/10 flex items-center justify-center">
                                 <Activity size={18} className="text-[#0D63CC]" />
                              </div>
                              <span className="text-xs font-bold text-[#00DA99] bg-[#00DA99]/10 px-2 py-1 rounded-full">+12.5%</span>
                           </div>
                           <div className="space-y-1">
                              <span className="text-sm font-semibold text-text-secondary">Total Savings</span>
                              <h3 className="text-3xl font-bold text-text-primary">$12,450.00</h3>
                           </div>
                        </div>

                        {/* Abstract Component 2: Action List */}
                        <div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 border border-slate-200 relative z-10 hover:-translate-y-2 transition-transform duration-500 delay-100">
                           <h4 className="text-sm font-bold text-text-primary mb-4">Recent Transactions</h4>
                           <div className="space-y-4">
                              {[1, 2].map((i) => (
                                 <div key={i} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100" />
                                    <div className="flex-1 space-y-2">
                                       <div className="h-2 bg-slate-200 rounded w-full" />
                                       <div className="h-2 bg-slate-100 rounded w-2/3" />
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>

                        {/* Abstract Component 3: Graph Mini */}
                        <div className="w-full lg:w-1/3 bg-[#282360] rounded-3xl p-6 relative z-10 hover:-translate-y-2 transition-transform duration-500 delay-200 overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-[#00DA99]/20 blur-[30px] rounded-full pointer-events-none" />
                           <h4 className="text-sm font-semibold text-white mb-6 relative z-10">Monthly Burn Rate</h4>
                           <div className="flex items-end gap-2 h-24 relative z-10">
                              {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                                 <div key={i} className="flex-1 bg-white/20 rounded-t-sm hover:bg-[#00DA99] transition-colors" style={{ height: `${h}%` }} />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* EMPATHY MAP */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Research Insight
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Empathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Mapping</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Visualizing user attitudes and behaviors to align our team on a deep understanding of end users.</p>
                  </div>

                  <div className="max-w-6xl mx-auto relative glass-card rounded-[40px] md:rounded-[60px] p-6 md:p-12 lg:p-16 overflow-hidden shadow-[0_20px_60px_-15px_rgba(13,99,204,0.2)] border border-[#0D63CC]/20 hover:border-[#00DA99]/50 transition-all duration-700 bg-white/30 backdrop-blur-3xl group shadow-[inset_0_0_100px_rgba(255,255,255,0.6)]">

                     {/* Ambient inner neon glows */}
                     <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0D63CC]/15 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#0D63CC]/20 transition-all duration-1000 -translate-x-1/4 -translate-y-1/4" />
                     <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00DA99]/15 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#00DA99]/20 transition-all duration-1000 translate-x-1/4 translate-y-1/4" />

                     {/* Decorative dashed X background (hidden on mobile) */}
                     <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                        <svg width="100%" height="100%">
                           <line x1="0" y1="0" x2="100%" y2="100%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="12 12" className="opacity-50" />
                           <line x1="100%" y1="0" x2="0" y2="100%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="12 12" className="opacity-50" />
                        </svg>
                     </div>

                     <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 md:gap-12 items-center">

                        {/* Top Row: THINKS */}
                        <div className="md:col-start-2 md:row-start-1 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#0D63CC]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <motion.div
                                 animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                 className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#0D63CC]/15"
                              />
                              <div className="flex flex-col items-center gap-4 mb-4 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#0D63CC]/30 group-hover/card:border-[#0D63CC] transition-colors duration-500">
                                    <Brain className="w-6 h-6 text-[#0D63CC]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#0D63CC]">think</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "“Am I spending more than I actually earn?”",
                                    "“I wish I had a clearer picture of my monthly finances.”",
                                    "“There must be a smarter way to manage this.”",
                                    "“Are these expenses necessary or just habits?”"
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors hover:border-white/60">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0D63CC] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* Middle Row Left: SAYS */}
                        <div className="md:col-start-1 md:row-start-2 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#F59E0B]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
                              <motion.div
                                 animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                 className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#F59E0B]/15"
                              />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#F59E0B]/30 group-hover/card:border-[#F59E0B] transition-colors duration-500">
                                    <MessageCircle className="w-6 h-6 text-[#F59E0B]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#F59E0B]">say</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "“I don’t know where my money goes every month.”",
                                    "“Tracking expenses manually is too time-consuming.”",
                                    "“I just need something simple that works.”",
                                    "“Why are these apps so complicated?”"
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors hover:border-white/60">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F59E0B] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* Middle Row Center: PROFILE CIRCLE */}
                        <div className="hidden md:flex md:col-start-2 md:row-start-2 justify-center items-center relative z-10 w-full h-full min-h-[240px]">
                           <div className="absolute inset-0 bg-[#00DA99]/20 blur-[60px] rounded-full animate-pulse z-0" />
                           <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#0D63CC] to-[#00DA99] p-2 shadow-[0_0_50px_rgba(13,99,204,0.3)] relative z-10 hover:scale-105 transition-transform duration-700">
                              <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(13,99,204,0.2)]">
                                 <User className="w-16 h-16 text-[#0D63CC] opacity-90" strokeWidth={1.5} />
                              </div>
                           </div>
                        </div>

                        {/* Middle Row Right: FEELS */}
                        <div className="md:col-start-3 md:row-start-2 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-rose-500/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-end text-center md:text-right relative overflow-hidden">
                              <motion.div
                                 animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                 className="absolute top-[-20%] right-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-rose-500/15"
                              />
                              <div className="flex flex-col items-center md:items-end gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-rose-500/30 group-hover/card:border-rose-500 transition-colors duration-500">
                                    <Heart className="w-6 h-6 text-rose-500" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-rose-500">feel</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "Overwhelmed by scattered financial information",
                                    "Anxious about overspending and lack of control",
                                    "Frustrated with manual tracking and unclear insights",
                                    "Motivated to improve financial discipline but unsure how"
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors hover:border-white/60">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500 opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* Bottom Row: DOES */}
                        <div className="md:col-start-2 md:row-start-3 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#00DA99]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <motion.div
                                 animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                 className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#00DA99]/15"
                              />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#00DA99]/30 group-hover/card:border-[#00DA99] transition-colors duration-500">
                                    <Activity className="w-6 h-6 text-[#00DA99]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#00DA99]">do</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "Checks bank balance frequently without deeper analysis",
                                    "Uses multiple apps or notes inconsistently",
                                    "Ignores budgeting tools after initial setup",
                                    "Makes spending decisions without structured insights"
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors hover:border-white/60">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00DA99] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                     </div>
                  </div>
               </section>

               {/* SWOT ANALYSIS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Strategic Analysis
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">SWOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Analysis</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Evaluating Spendora's competitive stance to ensure viability and identify risks.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        {
                           title: "Strengths",
                           items: ["AI-driven automation", "Clean UX", "Scalable system"],
                           color: "text-[#00DA99]",
                           borderGlow: "from-[#00DA99]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#00DA99]/15",
                           borderColor: "border-[#00DA99]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Briefcase size={24} strokeWidth={2} className="text-[#00DA99] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Weaknesses",
                           items: ["Initial learning curve for new users"],
                           color: "text-[#F59E0B]",
                           borderGlow: "from-[#F59E0B]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#F59E0B]/15",
                           borderColor: "border-[#F59E0B]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Activity size={24} strokeWidth={2} className="text-[#F59E0B] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Opportunities",
                           items: ["Integration with banking APIs", "Expansion into financial planning"],
                           color: "text-[#0D63CC]",
                           borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#0D63CC]/15",
                           borderColor: "border-[#0D63CC]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Search size={24} strokeWidth={2} className="text-[#0D63CC] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Threats",
                           items: ["Existing fintech competitors", "User trust in AI decisions"],
                           color: "text-rose-500",
                           borderGlow: "from-rose-500/30 via-white/10 to-transparent",
                           innerGlow: "bg-rose-500/15",
                           borderColor: "border-rose-500/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <FileText size={24} strokeWidth={2} className="text-rose-500 group-hover:scale-110 transition-transform duration-500" />
                        }
                     ].map((box, i) => (
                        <div key={i} className={`relative rounded-[24px] p-[2px] border border-slate-200 bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>

                           {/* Inner Container */}
                           <div className={`bg-gradient-to-b ${box.gradientFill} backdrop-blur-2xl w-full h-full rounded-[22px] p-6 md:p-8 relative z-10 flex flex-col min-h-[300px] overflow-hidden`}>

                              {/* Soft Animated Neon Bloom */}
                              <motion.div
                                 animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                                 className={`absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none ${box.innerGlow}`}
                              />

                              {/* Content */}
                              <div className="flex flex-col gap-4 mb-6 relative z-20">
                                 <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center border-2 ${box.borderColor} group-hover:border-opacity-100 transition-colors duration-500`}>
                                    {box.icon}
                                 </div>
                                 <h5 className={`font-semibold text-[20px] ${box.color}`}>
                                    {box.title}
                                 </h5>

                              </div>

                              <ul className="space-y-2 flex-1 relative z-20">
                                 {box.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 group/li">
                                       <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-current ${box.color} opacity-60 transition-transform duration-300 group-hover/li:scale-[2]`} />
                                       <span className="text-[13px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* VISUAL OVERVIEW */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Interface
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Overview</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">A seamless experience across all screens — from dashboard to specific tracking insights.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {/* Top row */}
                     <div className="lg:col-span-2">
                        <PremiumPlaceholder aspect="aspect-[4/3]" label="Main Dashboard" glowCls="bg-secondary" />
                     </div>
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Mobile List" glowCls="bg-primary" />
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Mobile Analytics" glowCls="bg-secondary" />

                     {/* Bottom row */}
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="AI Insights" glowCls="bg-primary" />
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Budget Setup" glowCls="bg-secondary" />
                     <div className="lg:col-span-2">
                        <PremiumPlaceholder aspect="aspect-[4/3]" label="Goal Planning UI" glowCls="bg-primary" />
                     </div>
                  </div>
               </section>

               {/* OUTCOMES & CONCLUSION */}
               <section className="relative mb-20 overflow-hidden">
                  <motion.div
                     {...fadeIn}
                     className="glass-card rounded-[24px] p-6 md:p-10 lg:p-14 relative overflow-hidden group shadow-3xl border-2 border-[#0D63CC]/20 hover:border-[#00DA99]/40"
                  >
                     {/* High-Fidelity Ambient Patterns */}
                     <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]" />
                     <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]" />

                     <div className="relative z-10">
                        <div className="mb-12 text-center max-w-4xl mx-auto">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                                 Epilogue
                              </span>
                           </div>
                           <h2 className="text-4xl font-bold text-text-primary mb-4">
                              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Future</span> of Personal Finance.
                           </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 mb-20">
                           {[
                              {
                                 title: "Design Decisions",
                                 items: ["Reduced visual clutter in dashboards", "Used progressive disclosure for advanced data", "Designed modular components for scalability", "Focused on mobile-first usability"],
                                 color: "text-[#0D63CC]",
                                 borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#0D63CC]/15",
                                 borderColor: "border-[#0D63CC]/30 hover:border-[#0D63CC]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#0D63CC] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(13,99,204,0.3)]" />
                              },
                              {
                                 title: "Impact & Outcome",
                                 items: ["Improved clarity in financial tracking", "Reduced manual effort significantly", "Increased user confidence in managing expenses", "Created a scalable system for future features"],
                                 color: "text-[#00DA99]",
                                 borderGlow: "from-[#00DA99]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#00DA99]/15",
                                 borderColor: "border-[#00DA99]/30 hover:border-[#00DA99]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#00DA99] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(0,218,153,0.3)]" />
                              },
                              {
                                 title: "Key Learnings",
                                 items: ["Simplicity is critical in financial products", "AI must be transparent to build trust", "Data visualization directly impacts usability", <span key="highlight">Users value <strong className="text-text-primary font-bold">insights over raw data</strong></span>],
                                 color: "text-rose-500",
                                 borderGlow: "from-rose-500/30 via-white/10 to-transparent",
                                 innerGlow: "bg-rose-500/15",
                                 borderColor: "border-rose-500/30 hover:border-rose-500",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-rose-500 rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(244,63,94,0.3)]" />
                              }
                           ].map((box, i) => (
                              <div key={i} className={`relative border-1 border-[#0D63CC]/20 hover:border-[#00DA99]/40 rounded-[22px] p-[2px] bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>

                                 {/* Inner Container */}
                                 <div className={`bg-gradient-to-b ${box.gradientFill} backdrop-blur-3xl w-full h-full rounded-[18px] p-5 md:p-8 relative z-10 flex flex-col min-h-[300px] overflow-hidden`}>

                                    {/* Soft Animated Neon Bloom */}
                                    <motion.div
                                       animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                                       className={`absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none ${box.innerGlow}`}
                                    />

                                    {/* Content */}
                                    <div className="flex items-center gap-4 mb-6 relative z-20">
                                       <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center border-2 ${box.borderColor} transition-colors duration-500 flex-shrink-0`}>
                                          {box.icon}
                                       </div>
                                       <h4 className="font-bold text-xl text-text-primary leading-tight">
                                          {box.title}
                                       </h4>
                                    </div>

                                    <ul className="space-y-3 flex-1 relative z-20">
                                       {box.items.map((item, j) => (
                                          <li key={j} className="flex items-start gap-3 group/li">
                                             <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-current ${box.color} opacity-50 transition-transform duration-300 group-hover/li:scale-[2] flex-shrink-0`} />
                                             <span className="text-[13px] font-semibold text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">
                                                {item}
                                             </span>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           ))}
                        </div>

                        {/* Final Conclusion */}
                        <div className="mb-6">
                           <div className="p-6 md:p-8 lg:p-10 glass-card rounded-[24px] border-2 border-[#0D63CC]/10 hover:border-[#0D63CC]/40 shadow-2xl transition-all duration-500 relative overflow-hidden group">
                              {/* Decorative background glow */}
                              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#0D63CC]/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />

                              <h4 className="font-bold text-2xl text-text-primary mb-6 flex items-center gap-4 relative z-10">
                                 <div className="w-8 h-8 bg-[#0D63CC] rounded flex-shrink-0" />
                                 Conclusion
                              </h4>
                              <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed relative z-10">
                                 Spendora™ transforms expense tracking into a smart, user-friendly financial experience, combining AI, design clarity, and system thinking to help users take control of their financial lives.
                              </p>
                           </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-slate-100 pt-10">
                           <Link href="/#projects" className="btn-premium px-12 py-5 text-sm">
                              <span>View Next Project</span>
                              <ArrowLeft size={18} className="rotate-180" />
                           </Link>
                           <p className="text-xs font-bold text-text-secondary uppercase tracking-widest opacity-40">
                              Thank you for reading the Spendora Case Study.
                           </p>
                        </div>
                     </div>
                  </motion.div>
               </section>
            </div>
         </main>
         <Footer />
      </>
   )
}
