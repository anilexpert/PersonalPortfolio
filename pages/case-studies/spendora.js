import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, Brain, TrendingUp, Target, Smartphone, Shield, Zap,
   Search, Users, Grid, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase, HandCoins,
   PieChart, Handshake, MessageCircle, User, Award, BarChart3, Eye,
   Layers, Cpu, Workflow, Lock, Rocket, Clock, ArrowRight, Compass,
   Sparkles, Globe, ChevronDown, DollarSign, Wallet, CreditCard,
   Banknote, TrendingDown, AlertTriangle, HelpCircle, LineChart, Building, MapPin, GraduationCap, Building2, BookOpen, ArrowDown
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GlowDivider from '../../components/GlowDivider'
import RotatingBadge from '../../components/RotatingBadge'

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

   return (
      <>
         <Head>
            <title>SPENDORA™ | Career-Aligned Financial Literacy Platform</title>
            <meta name="description" content="SPENDORA™ is a career-aligned financial literacy and future planning platform designed to help students, educational institutions, and financial organizations bridge the gap between academic aspirations and real-world financial readiness." />
         </Head>

         <Navbar />

         <main className="min-h-screen pt-20 md:pt-24 pb-20 md:pb-32 relative z-10">

            {/* ── 1. PAGE HERO (Inner Banner) ───────────────────────────────────────────────── */}
            <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
               <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
               <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

               <div className="max-w-7xl mx-auto relative z-10 text-center">
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

                  <div className="absolute top-2 right-[6%] hidden lg:block">
                     <RotatingBadge
                        icon={Award}
                        labels={["EDTECH", "FINTECH", "SAAS"]}
                        iconColor="#00DA99"
                        size={150}
                     />
                  </div>
               </div>
            </section>

            <div className="w-full max-w-7xl mx-auto px-4 pt-10 lg:pt-14 md:px-6">

               {/* ── 1. HERO SECTION ─────────────────────────────────────────────────────── */}
               <section className="mb-12 md:mb-16 grid lg:grid-cols-12 gap-6 md:gap-8 items-start">
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
                     <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight text-text-primary">
                        SPENDORA™
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl leading-snug">
                        Designing an <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">AI-Powered Financial Literacy</span> & <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Expense Management</span> Platform
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-lg md:text-xl text-text-secondary max-w-3xl leading-relaxed font-medium italic mb-6">
                        Bridging the gap between academic aspirations and real-world financial readiness.
                     </motion.p>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-base md:text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        SPENDORA™ is an AI-powered financial platform designed to help users manage expenses, improve financial literacy, and make smarter money decisions through personalized insights and intuitive analytics.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:pl-10 lg:border-l border-slate-200/60 pt-4">
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Role</p>
                        <p className="font-bold text-sm text-text-primary">Lead Product Designer</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Industry</p>
                        <p className="font-bold text-sm text-text-primary">EdTech + FinTech</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Platform</p>
                        <p className="font-bold text-sm text-text-primary">Web + Mobile</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Duration</p>
                        <p className="font-bold text-sm text-text-primary">8 Months</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Team</p>
                        <p className="font-bold text-sm text-text-primary">Product Manager, Developers</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Responsibilities</p>
                        <p className="font-bold text-sm text-text-primary">Research, UX Strategy, UI Design, Prototyping, Design System</p>
                     </div>
                  </motion.div>
               </section>

               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-16 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[24px] overflow-hidden group-hover:shadow-lg transition-all duration-700 border border-white/60 shadow-sm">
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-20 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #00DA99 0%, #0D63CC 100%)' }}
                     />
                     <Image
                        src="/images/spendora/SpendoraBanner.png"
                        alt="SPENDORA Dashboard"
                        fill
                        className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                     />
                  </div>
               </motion.section>

               {/* ── 3. THE PROBLEM ───────────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16 glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100/50 blur-[100px] rounded-full pointer-events-none" />
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                     <div className="lg:col-span-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                           <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Problem</span>
                        </div>
                     </div>
                     <div className="lg:col-span-9">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-6">
                           The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Problem</span>
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Many individuals struggle to manage personal finances effectively due to fragmented financial tools, limited financial literacy, and a lack of personalized guidance. Existing solutions often focus on tracking expenses rather than helping users understand and improve their financial behavior.
                        </p>

                        {/* Visual Storytelling */}
                        <div className="flex flex-col md:flex-row items-center gap-4 justify-between bg-white/60 p-6 rounded-2xl border border-slate-100 shadow-sm mt-8">
                           <div className="flex flex-col items-center text-center max-w-[140px]">
                              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-3 shadow-sm">
                                 <Layers className="text-rose-500" size={24} />
                              </div>
                              <span className="text-sm font-bold text-slate-700 leading-tight">Scattered Financial Data</span>
                           </div>
                           <ArrowRight className="hidden md:block text-slate-300 flex-shrink-0" size={20} />
                           <ArrowDown className="md:hidden text-slate-300 flex-shrink-0" size={20} />

                           <div className="flex flex-col items-center text-center max-w-[140px]">
                              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3 shadow-sm">
                                 <HelpCircle className="text-orange-500" size={24} />
                              </div>
                              <span className="text-sm font-bold text-slate-700 leading-tight">Poor Financial Awareness</span>
                           </div>
                           <ArrowRight className="hidden md:block text-slate-300 flex-shrink-0" size={20} />
                           <ArrowDown className="md:hidden text-slate-300 flex-shrink-0" size={20} />

                           <div className="flex flex-col items-center text-center max-w-[140px]">
                              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-3 shadow-sm">
                                 <AlertTriangle className="text-yellow-500" size={24} />
                              </div>
                              <span className="text-sm font-bold text-slate-700 leading-tight">Inconsistent Budgeting</span>
                           </div>
                           <ArrowRight className="hidden md:block text-slate-300 flex-shrink-0" size={20} />
                           <ArrowDown className="md:hidden text-slate-300 flex-shrink-0" size={20} />

                           <div className="flex flex-col items-center text-center max-w-[140px]">
                              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3 shadow-sm">
                                 <TrendingDown className="text-red-500" size={24} />
                              </div>
                              <span className="text-sm font-bold text-slate-700 leading-tight">Overspending</span>
                           </div>
                           <ArrowRight className="hidden md:block text-slate-300 flex-shrink-0" size={20} />
                           <ArrowDown className="md:hidden text-slate-300 flex-shrink-0" size={20} />

                           <div className="flex flex-col items-center text-center max-w-[140px]">
                              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3 shadow-sm">
                                 <Wallet className="text-slate-500" size={24} />
                              </div>
                              <span className="text-sm font-bold text-slate-700 leading-tight">Low Savings Confidence</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── 4. BUSINESS CHALLENGE ─────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16 glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-slate-100/50 blur-[100px] rounded-full pointer-events-none" />
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                     <div className="lg:col-span-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                           <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Challenge</span>
                        </div>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Educational institutions and financial organizations faced several challenges connecting with their younger audiences:
                        </p>
                        <div className="grid md:grid-cols-2 gap-5">
                           <motion.div {...fadeIn} className="bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:border-white transition-all duration-300 p-5 md:p-6 group relative overflow-hidden border-t-[4px] border-t-[#0D63CC]">
                              <h4 className="font-bold text-lg text-text-primary mb-4 flex items-center gap-3">
                                 <Building2 className="text-[#0D63CC]" size={20} /> Colleges & Universities
                              </h4>
                              <ul className="space-y-3">
                                 {[
                                    "Limited student engagement in financial programs.",
                                    "Difficulty connecting academics with financial outcomes.",
                                    "Lack of measurable student success metrics.",
                                    "Traditional resources felt outdated and disconnected."
                                 ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-[13px] font-medium text-text-secondary">
                                       <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#0D63CC]/50" /> {item}
                                    </li>
                                 ))}
                              </ul>
                           </motion.div>

                           <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:border-white transition-all duration-300 p-5 md:p-6 group relative overflow-hidden border-t-[4px] border-t-[#00DA99]">
                              <h4 className="font-bold text-lg text-text-primary mb-4 flex items-center gap-3">
                                 <Building className="text-[#00DA99]" size={20} /> Credit Unions & Fin-Inst
                              </h4>
                              <ul className="space-y-3">
                                 {[
                                    "Low Gen Z engagement.",
                                    "Generic applications failed to resonate with youth.",
                                    "Limited tools to demonstrate long-term wellness.",
                                    "Need for member-focused digital experiences."
                                 ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-[13px] font-medium text-text-secondary">
                                       <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#00DA99]/50" /> {item}
                                    </li>
                                 ))}
                              </ul>
                           </motion.div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── 4.5 DESIGN PROCESS FLOW ─────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 pt-8">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Process</span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-4">Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Process</span></h2>
                  </div>
                  <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-4 max-w-5xl mx-auto">
                     {/* Dashed line */}
                     <div className="hidden md:block absolute top-[64px] left-[10%] right-[10%] h-[2px] border-t-[2px] border-dashed border-[#CBD5E1] z-0" />

                     {[
                        { title: "DISCOVER", desc: "Stakeholder interviews.", icon: Search, style: "dashed" },
                        { title: "DEFINE", desc: "Requirements & workflows.", icon: Target, style: "dashed" },
                        { title: "ARCHITECT", desc: "Information architecture.", icon: Layers, style: "solid" },
                        { title: "DESIGN", desc: "Wireframes & UI.", icon: PenTool, style: "solid" },
                        { title: "VALIDATE", desc: "Feedback iterations.", icon: CheckCircle2, style: "dark" }
                     ].map((step, j, arr) => {
                        let circleClasses = "w-[120px] h-[120px] lg:w-[130px] lg:h-[130px] rounded-full flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-2 z-10 mx-auto relative bg-white";
                        let iconColor = "text-[#1E1B4B]";
                        let textColor = "text-[#1E1B4B]";

                        if (step.style === "dashed") {
                           circleClasses += " border-[2px] border-dashed border-[#CBD5E1] shadow-sm";
                        } else if (step.style === "solid") {
                           circleClasses += " bg-[#F4F9FF] border-[2px] border-solid border-[#0D63CC] shadow-md";
                           iconColor = "text-[#0D63CC]";
                        } else if (step.style === "dark") {
                           circleClasses += " !bg-[#1E1B4B] border-none shadow-xl";
                           iconColor = "text-white";
                           textColor = "text-white";
                        }

                        return (
                           <div key={j} className="flex flex-col items-center relative group w-full md:flex-1">
                              {/* Arrow on line */}
                              {j < arr.length - 1 && (
                                 <div className="hidden md:flex absolute top-[55px] lg:top-[60px] -right-4 w-8 h-8 items-center justify-center z-0 bg-transparent">
                                    <ArrowRight size={20} className="text-[#94A3B8]" strokeWidth={2.5} />
                                 </div>
                              )}

                              {/* Circle Node */}
                              <div className={circleClasses}>
                                 <step.icon size={28} className={`mb-3 ${iconColor}`} strokeWidth={1.5} />
                                 <span className={`text-[12px] font-bold uppercase tracking-wider leading-tight ${textColor} px-2`}>
                                    {step.title}
                                 </span>
                              </div>

                              {/* Description Text */}
                              <p className="text-center mt-5 text-[13px] font-medium text-text-secondary max-w-[140px] mx-auto">
                                 {step.desc}
                              </p>
                           </div>
                        )
                     })}
                  </div>
               </section>

               {/* ── 5. RESEARCH & DISCOVERY ─────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <motion.div {...fadeIn} className="glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D63CC]/5 blur-[100px] rounded-full pointer-events-none" />
                     <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00DA99]/5 blur-[100px] rounded-full pointer-events-none" />

                     <div className="relative z-10 mb-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                           <Search size={14} className="text-primary" />
                           <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Discovery</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-3">Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Discovery</span></h2>
                        <p className="text-text-secondary font-medium max-w-3xl text-base">To better understand users' financial behaviors, motivations, and pain points, research was conducted across students, professionals, and financially independent users.</p>
                     </div>

                     <div className="relative z-10 mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {[
                           {
                              name: "User Interviews",
                              icon: MessageCircle,
                              color: "#0D63CC",
                              desc: "Conducted 1:1 interviews with college students and recent grads to uncover financial anxieties and goals."
                           },
                           {
                              name: "Competitive Analysis",
                              icon: Target,
                              color: "#00DA99",
                              desc: "Evaluated existing financial apps, identifying a lack of future-focused planning for young adults."
                           },
                           {
                              name: "Affinity Mapping",
                              icon: Layers,
                              color: "#8B5CF6",
                              desc: "Synthesized qualitative insights into key themes: personalized guidance, real-world benchmarks, and clear forecasting."
                           },
                           {
                              name: "User Journey Map",
                              icon: MapPin,
                              color: "#EC4899",
                              desc: "Mapped the emotional trajectory from academic planning to real-world financial independence."
                           },
                           {
                              name: "Empathy Map",
                              icon: Heart,
                              color: "#F59E0B",
                              desc: "Documented what users say, think, do, and feel regarding their personal finances and career paths."
                           },
                           {
                              name: "Surveys & Analysis",
                              icon: FileText,
                              color: "#14B8A6",
                              desc: "Distributed surveys to a broader demographic to validate qualitative findings and prioritize features."
                           }
                        ].map((activity, i) => (
                           <div key={i} className="bg-white/80 rounded-2xl p-6 border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group">
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: `${activity.color}15`, color: activity.color }}>
                                 <activity.icon size={22} strokeWidth={2} />
                              </div>
                              <h4 className="font-bold text-[15px] text-text-primary mb-2">{activity.name}</h4>
                              <p className="text-[13px] text-text-secondary leading-relaxed font-medium">{activity.desc}</p>
                           </div>
                        ))}
                     </div>

                     <h3 className="text-lg lg:text-xl font-bold text-text-primary mb-6 relative z-10">Key Research Findings</h3>
                     <div className="grid md:grid-cols-2 gap-5 relative z-10">
                        {[
                           { num: "01", title: "Connecting aspirations with reality", desc: "Students struggle to connect career aspirations with future financial realities.", quote: "I know what career I want, but I have no idea if I can actually afford the lifestyle I want." },
                           { num: "02", title: "Desire for personalized experiences", desc: "Students engage more when financial planning feels personalized. Users preferred experiences tailored to career choice, location, household composition, and education pathway." },
                           { num: "03", title: "Financial education feels abstract", desc: "Most students viewed budgeting as a school exercise rather than a life-planning tool." },
                           { num: "04", title: "Guidance over spreadsheets", desc: "Students wanted guidance—not spreadsheets. Users consistently expressed a desire for personalized recommendations, real-world benchmarks, and future forecasting." }
                        ].map((insight, i) => (
                           <motion.div
                              key={i}
                              whileHover={{ y: -4 }}
                              className="bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden"
                           >
                              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#0D63CC]/5 rounded-full blur-[20px]" />
                              <div className="relative z-10">
                                 <span className="text-[48px] font-bold text-slate-100 block mb-2 leading-none">{insight.num}</span>
                                 <h4 className="font-bold text-lg text-text-primary mb-3 leading-snug"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">{insight.title}</span></h4>
                                 <p className="text-[13px] text-text-secondary font-medium leading-relaxed mb-4">{insight.desc}</p>
                              </div>
                              {insight.quote && (
                                 <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-100/60 relative z-10 mt-auto">
                                    <MessageCircle size={16} className="text-[#0D63CC] mb-2 opacity-50" />
                                    <span className="text-[13px] font-semibold text-[#0D63CC] leading-relaxed block italic">"{insight.quote}"</span>
                                 </div>
                              )}
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               </section>

               {/* ── 6. OPPORTUNITY & VISION ───────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <motion.div {...fadeIn} className="glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-96 h-96 bg-[#00DA99]/8 blur-[100px] rounded-full pointer-events-none" />
                     <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0D63CC]/8 blur-[100px] rounded-full pointer-events-none" />

                     <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                        <div className="lg:col-span-4">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                              <Target size={14} className="text-primary" />
                              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Opportunity</span>
                           </div>
                           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-4">
                              Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Opportunity</span>
                           </h2>
                        </div>
                        <div className="lg:col-span-8">
                           <div className="p-6 md:p-8 bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative">
                              <div className="absolute -top-4 -left-4 text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99] font-serif leading-none">"</div>
                              <h3 className="text-lg md:text-xl font-bold text-text-primary leading-relaxed relative z-10">
                                 The opportunity was to create a unified financial platform that combines expense tracking, financial education, AI-driven recommendations, and personalized insights to help users build healthier financial habits.
                              </h3>
                           </div>
                        </div>
                     </div>

                     <div className="mt-12 md:mt-16 text-center max-w-5xl mx-auto relative z-10">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-text-primary mb-4">
                           Create a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] via-[#0D63CC] to-[#8B5CF6]">future-focused financial literacy ecosystem</span>
                        </h2>
                        <p className="text-base text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
                           Empowering students to confidently navigate adulthood through personalized financial planning and real-world scenario simulation.
                        </p>
                     </div>
                  </motion.div>
               </section>

               {/* ── 7. SOLUTION OVERVIEW ──────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
                     <div className="lg:col-span-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                           <Lightbulb size={14} className="text-secondary" />
                           <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Solution</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-4">
                           Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Approach</span>
                        </h2>
                     </div>
                     <div className="lg:col-span-8">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-5">
                           <span className="text-text-primary font-bold">SPENDORA™</span> enables students to build realistic future financial scenarios by combining career pathways, income projections, geographic cost benchmarks, expense simulations, student debt forecasting, and peer comparisons.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                           The platform then transforms this information into actionable insights that help students understand their future financial landscape. Instead of teaching budgeting theoretically, SPENDORA™ allows students to experience future financial realities interactively.
                        </p>
                     </div>
                  </div>

                  <div className="glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm relative overflow-hidden">
                     <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00DA99]/8 blur-[100px] rounded-full pointer-events-none" />
                     <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0D63CC]/8 blur-[100px] rounded-full pointer-events-none" />

                     <div className="text-center mb-10 relative z-10">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">Core Solution <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Pillars</span></h3>
                     </div>
                     <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
                        {[
                           { title: "Career-Aligned Planning", desc: "Budgeting begins with career aspirations.", icon: Briefcase, color: "#0D63CC" },
                           { title: "Personalized Simulation", desc: "Every scenario adapts based on user context.", icon: Layers, color: "#00DA99" },
                           { title: "Real-World Benchmarking", desc: "Users compare their assumptions against actual market and peer data.", icon: BarChart3, color: "#8B5CF6" },
                           { title: "Financial Wellness Education", desc: "Complex financial concepts are simplified through guided experiences.", icon: BookOpen, color: "#F59E0B" },
                           { title: "Predictive Insights", desc: "Users understand both current and future financial implications.", icon: TrendingUp, color: "#EC4899" }
                        ].map((pillar, idx) => (
                           <motion.div
                              key={idx}
                              {...fadeIn} transition={{ delay: idx * 0.1 }}
                              className="bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all duration-300 p-5 group hover:-translate-y-2 relative overflow-hidden text-center flex flex-col justify-start"
                           >
                              <div className="absolute -top-8 -right-8 w-24 h-24 blur-[30px] rounded-full opacity-10 group-hover:opacity-20 pointer-events-none transition-all" style={{ backgroundColor: pillar.color }} />
                              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center relative z-10 bg-white border border-slate-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                 <pillar.icon size={22} strokeWidth={2} style={{ color: pillar.color }} />
                              </div>
                              <h4 className="font-bold text-[15px] text-text-primary mb-2 relative z-10">{pillar.title}</h4>
                              <p className="text-[13px] text-text-secondary font-medium leading-relaxed relative z-10">{pillar.desc}</p>
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* ── 8. USER PERSONAS ─────────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           User Research
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Personas</span></h2>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-5">
                     {[
                        {
                           name: "Emily Johnson",
                           role: "Primary Persona • First-Year College Student",
                           age: "18",
                           image: "/images/spendora/sneha.png",
                           goals: ["Understand future living costs", "Estimate student loan impact", "Create realistic expectations"],
                           pains: ["Limited financial knowledge", "No understanding of post-graduation expenses", "Anxiety around student debt"],
                           motivation: "Make informed educational and financial decisions.",
                           color: "#0D63CC"
                        },
                        {
                           name: "Marcus Lee",
                           role: "High School Senior",
                           age: "17",
                           image: "/images/spendora/arjun.png",
                           goals: ["Explore career opportunities", "Understand salary expectations", "Compare career pathways"],
                           pains: ["Unsure which career path is financially sustainable", "Limited access to real-world salary info"],
                           motivation: "Select a career aligned with both interests and financial goals.",
                           color: "#00DA99"
                        },
                        {
                           name: "Sarah Thompson",
                           role: "Student Success Administrator",
                           age: "35+",
                           image: null,
                           goals: ["Increase student financial literacy", "Improve engagement", "Provide measurable outcomes"],
                           pains: ["Low participation rates", "Traditional financial programs feel ineffective"],
                           motivation: "Prepare students for long-term success.",
                           color: "#8B5CF6"
                        }
                     ].map((persona, idx) => (
                        <motion.div
                           key={idx}
                           {...fadeIn}
                           transition={{ delay: idx * 0.1 }}
                           className="glass-card rounded-[20px] p-6 md:p-10 lg:p-12 group relative overflow-hidden flex flex-col border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-md transition-all duration-500"
                        >
                           <div
                              className="absolute -top-24 -right-24 w-80 h-80 blur-[100px] rounded-full transition-all duration-1000 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: persona.color }}
                           />
                           <div className="flex items-center gap-6 mb-8 relative z-10">
                              {persona.image ? (
                                 <div className="w-16 h-16 rounded-[16px] overflow-hidden flex-shrink-0 relative border-2 border-white shadow-2xl flex items-center justify-center" style={{ backgroundColor: `${persona.color}15` }}>
                                    <Image src={persona.image} alt={persona.name} fill className="object-cover" />
                                 </div>
                              ) : (
                                 <div className="w-16 h-16 rounded-[16px] overflow-hidden flex-shrink-0 relative border-2 border-white shadow-2xl flex items-center justify-center" style={{ backgroundColor: `${persona.color}15` }}>
                                    <User size={28} style={{ color: persona.color }} strokeWidth={1.5} />
                                 </div>
                              )}
                              <div>
                                 <h4 className="font-bold text-2xl text-gray-800 tracking-tight">{persona.name}</h4>
                                 <p className="text-xs font-medium text-text-secondary mt-1 opacity-80">{persona.role} • Age {persona.age}</p>
                              </div>
                           </div>

                           <p className="text-base text-gray-800 leading-relaxed mb-8 relative z-10 font-medium">
                              &ldquo;{persona.motivation}&rdquo;
                           </p>

                           <div className="space-y-4 relative z-10">
                              <div className="p-5 rounded-2xl bg-[#0D63CC]/5 border border-[#0D63CC]/20">
                                 <h5 className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#0D63CC] mb-3 flex items-center gap-2">
                                    <CheckCircle2 size={13} strokeWidth={3} /> Core Goals
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.goals.map((n, i) => (
                                       <span key={i} className="px-3 py-1.5 bg-white/60 rounded-lg border border-[#0D63CC]/20 text-xs font-medium text-text-primary">
                                          {n}
                                       </span>
                                    ))}
                                 </div>
                              </div>

                              <div className="p-5 rounded-2xl bg-rose-50 border border-rose-100">
                                 <h5 className="font-bold text-[10px] uppercase tracking-[0.2em] text-rose-500 mb-3 flex items-center gap-2">
                                    <Activity size={13} strokeWidth={3} /> Frustrations
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.pains.map((p, i) => (
                                       <span key={i} className="px-3 py-1.5 bg-white/60 rounded-lg border border-rose-100 text-xs font-medium text-text-primary">
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

               {/* ── 9. USER JOURNEY ──────────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-10 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Flow</span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Journey</span></h2>
                  </div>

                  <div className="hidden lg:block relative max-w-6xl mx-auto">
                     <div className="absolute top-16 left-12 right-12 h-[2px] bg-gradient-to-r from-[#0D63CC] via-[#00DA99] to-[#8B5CF6] opacity-20 z-0" />
                     <div className="grid grid-cols-6 gap-4">
                        {[
                           { num: "01", title: "Financial Awareness", desc: "User realizes the need for better financial management.", icon: Eye, color: "#0D63CC" },
                           { num: "02", title: "Track Expenses", desc: "Connects accounts and starts categorizing spending.", icon: Wallet, color: "#0D63CC" },
                           { num: "03", title: "Analyze Spending", desc: "Reviews patterns and identifies areas for improvement.", icon: PieChart, color: "#00DA99" },
                           { num: "04", title: "Receive Recommendations", desc: "Gets AI-driven insights tailored to their habits.", icon: Sparkles, color: "#8B5CF6" },
                           { num: "05", title: "Set Goals", desc: "Establishes savings goals based on personalized insights.", icon: Target, color: "#F59E0B" },
                           { num: "06", title: "Improve Health", desc: "Builds long-term financial stability.", icon: TrendingUp, color: "#EC4899" }
                        ].map((step, i) => (
                           <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08 }} className="flex flex-col items-center text-center relative z-10">
                              <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center transition-transform duration-500 hover:scale-110 shadow-lg bg-white" style={{ border: `2px solid ${step.color}` }}>
                                 <step.icon size={22} strokeWidth={1.5} style={{ color: step.color }} />
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: step.color }}>{step.num}</span>
                              <h4 className="font-bold text-xs text-text-primary mb-2">{step.title}</h4>
                              <p className="text-[10px] text-text-secondary font-medium leading-relaxed max-w-[150px]">{step.desc}</p>
                           </motion.div>
                        ))}
                     </div>
                  </div>

                  <div className="lg:hidden space-y-8 max-w-md mx-auto">
                     {[
                        { num: "01", title: "Financial Awareness", desc: "User realizes the need for better financial management.", icon: Eye, color: "#0D63CC" },
                        { num: "02", title: "Track Expenses", desc: "Connects accounts and starts categorizing spending.", icon: Wallet, color: "#0D63CC" },
                        { num: "03", title: "Analyze Spending", desc: "Reviews patterns and identifies areas for improvement.", icon: PieChart, color: "#00DA99" },
                        { num: "04", title: "Receive Recommendations", desc: "Gets AI-driven insights tailored to their habits.", icon: Sparkles, color: "#8B5CF6" },
                        { num: "05", title: "Set Goals", desc: "Establishes savings goals based on personalized insights.", icon: Target, color: "#F59E0B" },
                        { num: "06", title: "Improve Health", desc: "Builds long-term financial stability.", icon: TrendingUp, color: "#EC4899" }
                     ].map((step, i) => (
                        <div key={i} className="flex items-start gap-5 relative">
                           {i < 5 && <div className="absolute top-14 left-7 w-[2px] h-8 bg-slate-200" />}
                           <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-md bg-white" style={{ border: `2px solid ${step.color}` }}>
                              <step.icon size={22} strokeWidth={1.5} style={{ color: step.color }} />
                           </div>
                           <div>
                              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: step.color }}>{step.num}</span>
                              <h4 className="font-bold text-sm text-text-primary">{step.title}</h4>
                              <p className="text-xs text-text-secondary font-medium leading-relaxed">{step.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* ── 10. INFORMATION ARCHITECTURE ─────────────────────────────────────── */}
               <section className="mb-10 md:mb-16 glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100/50 blur-[100px] rounded-full pointer-events-none" />
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                     <div className="lg:col-span-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                           <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Architecture</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Structuring the Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Experience</span></h2>
                     </div>
                     <div className="lg:col-span-9">
                        <div className="bg-white/80 p-5 md:p-6 rounded-2xl font-mono text-sm leading-loose border border-white/80 shadow-sm text-slate-700">
                           <pre className="overflow-x-auto">
                              {`Dashboard
├── Scenario Setup
├── Career Planning
├── Income Sources
├── Expense Planning
├── Student Loan Estimator
├── Peer Benchmarking
├── Results Dashboard
├── Reports
└── Saved Scenarios`}
                           </pre>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-4">
                           <div className="flex items-center gap-3 bg-white/80 px-4 py-3 rounded-xl border border-slate-100 shadow-sm">
                              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                 <Layers className="text-[#0D63CC]" size={20} />
                              </div>
                              <span className="text-sm font-bold text-slate-700">Sitemap</span>
                           </div>
                           <div className="flex items-center gap-3 bg-white/80 px-4 py-3 rounded-xl border border-slate-100 shadow-sm">
                              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                                 <Compass className="text-[#00DA99]" size={20} />
                              </div>
                              <span className="text-sm font-bold text-slate-700">Navigation Hierarchy</span>
                           </div>
                           <div className="flex items-center gap-3 bg-white/80 px-4 py-3 rounded-xl border border-slate-100 shadow-sm">
                              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                                 <Workflow className="text-[#8B5CF6]" size={20} />
                              </div>
                              <span className="text-sm font-bold text-slate-700">User Flow</span>
                           </div>
                        </div>
                        <p className="text-[13px] text-text-secondary font-medium leading-relaxed mt-5 italic bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
                           The information architecture was designed to simplify financial management while balancing analytics, educational content, and personalized recommendations.
                        </p>
                     </div>
                  </div>
               </section>

               {/* ── 11. DESIGN STRATEGY ─────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <motion.div {...fadeIn} className="glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm relative overflow-hidden">
                     <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00DA99]/8 blur-[100px] rounded-full pointer-events-none" />
                     <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0D63CC]/8 blur-[100px] rounded-full pointer-events-none" />

                     <div className="relative z-10 mb-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                           <Target size={14} className="text-secondary" />
                           <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Strategy</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-4">Core Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Principles</span></h2>
                     </div>

                     <div className="relative z-10 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                        {[
                           { num: "01", title: "Simplicity First", desc: "Reduce cognitive load and simplify financial decision-making.", icon: Layers, color: "#00DA99" },
                           { num: "02", title: "Actionable Insights", desc: "Present data in a way that drives meaningful action.", icon: Compass, color: "#0D63CC" },
                           { num: "03", title: "Personalization", desc: "Adapt recommendations based on user goals and spending behavior.", icon: MapPin, color: "#8B5CF6" },
                           { num: "04", title: "Trust & Transparency", desc: "Build confidence through clear communication and intuitive interactions.", icon: Shield, color: "#EC4899" }
                        ].map((principle, idx) => (
                           <motion.div
                              key={idx}
                              whileHover={{ y: -4 }}
                              className="bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all duration-300 p-5 flex flex-col sm:flex-row items-start gap-5 group"
                           >
                              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-white border border-slate-100 shadow-sm">
                                 <principle.icon size={22} style={{ color: principle.color }} />
                              </div>
                              <div>
                                 <div className="flex items-center gap-2.5 mb-2">
                                    <span className="text-lg font-bold opacity-70" style={{ color: principle.color }}>{principle.num}</span>
                                    <h4 className="font-bold text-lg text-text-primary">{principle.title}</h4>
                                 </div>
                                 <p className="text-[13px] text-text-secondary leading-relaxed font-medium">{principle.desc}</p>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               </section>               {/* ── 12. DESIGN PROCESS ────────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <motion.div {...fadeIn} className="glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/5 blur-[100px] rounded-full pointer-events-none" />
                     <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00DA99]/5 blur-[100px] rounded-full pointer-events-none" />

                     <div className="mb-12 text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4 bg-white/60 backdrop-blur-sm border-white shadow-sm">
                           <Workflow size={14} className="text-slate-500" />
                           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Workflow</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-primary">Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Process</span></h2>
                     </div>

                     <div className="relative max-w-6xl mx-auto z-10">
                        {/* Connecting Line */}
                        <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#0D63CC]/20 to-transparent z-0" />

                        <div className="grid lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
                           {[
                              { step: "Discover", items: ["Stakeholder Interviews", "User Research", "Competitive Analysis"], icon: Search, color: "#0D63CC" },
                              { step: "Define", items: ["Personas", "Journey Maps", "Problem Statements"], icon: Target, color: "#0D63CC" },
                              { step: "Ideate", items: ["User Flows", "Wireframes", "Information Architecture"], icon: Lightbulb, color: "#00DA99" },
                              { step: "Design", items: ["Design System", "High-Fidelity UI", "Interactive Prototypes"], icon: PenTool, color: "#8B5CF6" },
                              { step: "Validate", items: ["Prototype Testing", "Feedback Sessions", "Iterations"], icon: CheckCircle2, color: "#EC4899" }
                           ].map((phase, idx) => (
                              <motion.div
                                 key={idx}
                                 {...fadeIn} transition={{ delay: idx * 0.1 }}
                                 className="flex flex-col items-center text-center group"
                              >
                                 {/* Step Icon Node */}
                                 <div className="w-20 h-20 rounded-2xl bg-white/90 border-2 shadow-sm flex items-center justify-center mb-6 z-10 relative group-hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm" style={{ borderColor: `${phase.color}30` }}>
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent rounded-2xl pointer-events-none" />
                                    <phase.icon size={28} style={{ color: phase.color }} className="relative z-10" />
                                    <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-white border shadow-sm flex items-center justify-center text-[10px] font-extrabold" style={{ color: phase.color, borderColor: `${phase.color}20` }}>
                                       0{idx + 1}
                                    </div>
                                 </div>

                                 {/* Content Card */}
                                 <div className="bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] p-5 w-full flex-1 group-hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: phase.color }} />
                                    <h4 className="font-extrabold text-sm uppercase tracking-widest mb-4 mt-2 text-text-primary">{phase.step}</h4>
                                    <ul className="space-y-2">
                                       {phase.items.map((item, i) => (
                                          <li key={i} className="text-[12px] font-semibold text-text-secondary bg-white py-2 px-3 rounded-xl border border-slate-100 shadow-sm text-left flex items-start gap-2 leading-tight">
                                             <div className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: phase.color }} />
                                             {item}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               </section>

               {/* ── 13. KEY PRODUCT FEATURES ─────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="text-center mb-10">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Core Value</span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">Key Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Features</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                     {[
                        { num: "01", title: "Smart Expense Tracking", desc: "Automatically organize and visualize spending patterns for better financial awareness.", outcome: "Students understand career possibilities and earning potential.", color: "#00DA99", image: "/images/spendora/CareerClusterExplorerThumnail.png" },
                        { num: "02", title: "Goal-Based Planning", desc: "Help users set, monitor, and achieve financial goals through personalized recommendations.", outcome: "Improves awareness of career affordability.", color: "#0D63CC", image: "/images/spendora/OccupationSalaryExplorerThumnail.png" },
                        { num: "03", title: "Predictive Intelligence", desc: "Leverage AI-driven insights to anticipate financial trends and improve decision-making.", outcome: "Improves understanding of real-world living costs.", color: "#8B5CF6", image: "/images/spendora/ExpenseSimulatorThumbnail.png" },
                        { num: "04", title: "Interactive Analytics", desc: "Transform complex financial data into intuitive, actionable visualizations.", outcome: "Students better understand long-term debt implications.", color: "#F59E0B", image: "/images/spendora/PredictiveSavingsProjectionThumbnail.png" }
                     ].map((feature, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                           className="bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.07)] hover:border-white transition-all duration-300 p-5 group relative overflow-hidden hover:-translate-y-1"
                        >
                           <div className="absolute -top-12 -right-12 w-32 h-32 blur-[40px] rounded-full opacity-10 group-hover:opacity-20 pointer-events-none" style={{ backgroundColor: feature.color }} />

                           <div className="flex items-center justify-between mb-4 relative z-10">
                              <div
                                 className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs bg-white shadow-sm"
                                 style={{ color: feature.color, border: `1px solid ${feature.color}25` }}
                              >
                                 {feature.num}
                              </div>
                              <Layout size={16} className="text-slate-200" />
                           </div>
                           <h4 className="font-bold text-lg text-text-primary mb-2 relative z-10">{feature.title}</h4>
                           <p className="text-[13px] text-text-secondary font-medium leading-relaxed mb-3 relative z-10">{feature.desc}</p>

                           <div className="mb-4 relative z-10 p-3 rounded-xl bg-slate-50/60 border border-slate-100">
                              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">User Outcome</span>
                              <p className="text-[12px] font-medium text-text-primary mt-1">{feature.outcome}</p>
                           </div>

                           <div className="relative z-10 w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md transition-all duration-500">
                              <Image src={feature.image} alt={feature.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* ── 14. DESIGN SYSTEM ───────────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-10 text-center">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">Building a Scalable FinTech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Design System</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto mt-3 text-[15px]">
                        A scalable design system was created to support multiple audiences and maintain consistency across the platform.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-5 max-w-7xl mx-auto px-4">
                     <div className="lg:col-span-6 bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all duration-300 p-5 lg:p-6 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D63CC]/8 blur-[40px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-lg text-text-primary mb-3 flex items-center gap-2">
                           <div className="w-2 h-2 bg-[#00DA99] rounded-full" /> Color Strategy
                        </h4>
                        <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
                           {[
                              { bg: 'bg-[#00DA99]', label: 'Teal', hex: '#00DA99', desc: 'Growth & Wellness' },
                              { bg: 'bg-[#8B5CF6]', label: 'Purple', hex: '#8B5CF6', desc: 'Education & Guidance' },
                              { bg: 'bg-[#0D63CC]', label: 'Blue', hex: '#0D63CC', desc: 'Trust & Stability' }
                           ].map((color, i) => (
                              <div key={i} className="flex flex-col gap-2 group/color">
                                 <div className={`w-full aspect-square rounded-2xl ${color.bg} shadow-lg border border-white/20 group-hover/color:scale-110 group-hover/color:shadow-2xl transition-all duration-300`} />
                                 <div>
                                    <span className="block text-[10px] font-bold text-text-primary uppercase tracking-wider">{color.label}</span>
                                    <span className="block text-[9px] text-text-secondary font-medium uppercase opacity-50">{color.hex}</span>
                                    <span className="block text-[10px] text-text-secondary font-medium mt-1 leading-tight">{color.desc}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="lg:col-span-6 glass-card rounded-[24px] md:rounded-[32px] border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 p-6 lg:p-8 group relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00DA99]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3 relative z-10">
                           <div className="w-2 h-2 bg-[#00DA99] rounded-full" /> Typography & Accessibility
                        </h4>

                        <div className="flex-1 flex flex-col justify-center mb-8 relative z-10">
                           <div className="text-[80px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-400 tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">
                              Poppins
                           </div>
                           <div className="text-[12px] font-medium text-text-secondary mt-1.5 tracking-wider">
                              Sans-serif, geometric, modern
                           </div>
                        </div>

                        <div className="space-y-2 relative z-10">
                           <p className="text-sm font-medium text-text-secondary">Selected for readability across dense analytical interfaces.</p>
                           <p className="text-xs font-medium text-text-secondary">✅ WCAG-compliant contrast ratios.</p>
                           <p className="text-xs font-medium text-text-secondary">✅ Clear visual hierarchy and large interaction targets.</p>
                        </div>
                     </div>

                     {/* Component Gallery & Grid System */}
                     <div className="lg:col-span-12 glass-card rounded-[24px] md:rounded-[32px] border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 p-6 lg:p-8 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/10 blur-[60px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />

                        <div className="grid md:grid-cols-2 gap-8 relative z-10">
                           <div>
                              <h4 className="font-bold text-xl text-text-primary mb-6 flex items-center gap-3">
                                 <div className="w-2 h-2 bg-[#8B5CF6] rounded-full" /> Grid System & Layout
                              </h4>
                              <p className="text-[13px] text-text-secondary font-medium leading-relaxed mb-6">
                                 A responsive 12-column grid ensures consistency across viewports, utilizing an 8pt spacing system to maintain vertical rhythm and visual harmony throughout the complex analytical interfaces.
                              </p>
                              <div className="flex gap-2">
                                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((col) => (
                                    <div key={col} className="flex-1 h-20 bg-indigo-50 rounded border border-indigo-100 flex justify-center pt-2">
                                       <div className="w-full h-full border-x border-dashed border-indigo-200/50" />
                                    </div>
                                 ))}
                              </div>
                           </div>

                           <div>
                              <h4 className="font-bold text-xl text-text-primary mb-6 flex items-center gap-3">
                                 <div className="w-2 h-2 bg-[#EC4899] rounded-full" /> Component Gallery
                              </h4>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                 {["Buttons", "Inputs", "Cards", "Charts", "Navigation", "Modals"].map((item, i) => (
                                    <div key={i} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col items-center justify-center gap-2 hover:shadow-md hover:border-slate-200 transition-all">
                                       <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
                                          <Layers className="text-slate-400" size={16} />
                                       </div>
                                       <span className="text-[11px] font-bold text-slate-700">{item}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── 15. LANDING EXPERIENCE ──────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                        <Layout size={14} className="text-secondary" />
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Acquisition</span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-4">Landing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Experience</span></h2>
                     <p className="text-text-secondary font-medium max-w-3xl mx-auto text-lg leading-relaxed">Two distinct acquisition experiences were designed sharing a unified platform while adapting messaging to specific audience needs.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                     <motion.div {...fadeIn} className="glass-card rounded-[24px] md:rounded-[32px] border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0D63CC]/10 blur-[60px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />

                        <div className="w-14 h-14 rounded-2xl bg-[#0D63CC] flex items-center justify-center mb-8 shadow-lg shadow-[#0D63CC]/30 group-hover:scale-110 transition-transform duration-500">
                           <Building2 size={24} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-text-primary mb-8 tracking-tight">Higher Education <span className="text-[#0D63CC]">Experience</span></h3>

                        <div className="space-y-4 relative z-10">
                           {["Student Success Focus", "Financial Literacy Metrics", "Career Readiness Alignment", "FERPA Compliance & Security"].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-4 bg-white/60 p-4 rounded-2xl shadow-sm border border-slate-100 backdrop-blur-sm">
                                 <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 size={16} className="text-[#0D63CC]" />
                                 </div>
                                 <span className="text-sm font-bold text-slate-700">{item}</span>
                              </div>
                           ))}
                        </div>
                     </motion.div>

                     <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="glass-card rounded-[24px] md:rounded-[32px] border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00DA99]/10 blur-[60px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />

                        <div className="w-14 h-14 rounded-2xl bg-[#00DA99] flex items-center justify-center mb-8 shadow-lg shadow-[#00DA99]/30 group-hover:scale-110 transition-transform duration-500">
                           <Users size={24} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-text-primary mb-8 tracking-tight">Credit Union <span className="text-[#00DA99]"> Experience</span></h3>

                        <div className="space-y-4 relative z-10">
                           {["Member Engagement", "Financial Wellness", "Retention", "Community Impact"].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-4 bg-white/60 p-4 rounded-2xl shadow-sm border border-slate-100 backdrop-blur-sm">
                                 <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 size={16} className="text-[#00DA99]" />
                                 </div>
                                 <span className="text-sm font-bold text-slate-700">{item}</span>
                              </div>
                           ))}
                        </div>
                     </motion.div>
                  </div>
               </section>




               {/* ── WIREFRAMES (New) ──────────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-10 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Evolution</span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
                        From Concept to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Final Experience</span>
                     </h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto mt-3 text-[15px]">
                        Iterative process from initial low-fidelity concepts to the final polished UI.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                     <div className="bg-white/80 rounded-2xl border border-white/80 shadow-sm p-6 text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center mb-4">
                           <PenTool className="text-slate-500" size={24} />
                        </div>
                        <h4 className="font-bold text-lg text-text-primary mb-2">Low Fidelity</h4>
                        <p className="text-sm text-text-secondary">Initial sketches & user flows</p>
                     </div>
                     <div className="bg-white/80 rounded-2xl border border-white/80 shadow-sm p-6 text-center relative">
                        <div className="hidden md:block absolute top-1/2 -left-3 w-6 h-[2px] bg-slate-300" />
                        <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-4">
                           <Layers className="text-[#0D63CC]" size={24} />
                        </div>
                        <h4 className="font-bold text-lg text-text-primary mb-2">Mid Fidelity</h4>
                        <p className="text-sm text-text-secondary">Wireframes & layout structure</p>
                     </div>
                     <div className="bg-white/80 rounded-2xl border border-white/80 shadow-sm p-6 text-center relative">
                        <div className="hidden md:block absolute top-1/2 -left-3 w-6 h-[2px] bg-slate-300" />
                        <div className="w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-4">
                           <CheckCircle2 className="text-[#00DA99]" size={24} />
                        </div>
                        <h4 className="font-bold text-lg text-text-primary mb-2">Final UI</h4>
                        <p className="text-sm text-text-secondary">Polished visual design</p>
                     </div>
                  </div>
               </section>

               {/* ── 16. USABILITY TESTING ─────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <motion.div {...fadeIn} className="glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8B5CF6]/6 blur-[100px] rounded-full pointer-events-none" />
                     <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00DA99]/6 blur-[100px] rounded-full pointer-events-none" />

                     <div className="relative z-10 mb-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                           <Settings size={14} className="text-secondary" />
                           <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Validation</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">Usability <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Testing</span></h2>
                        <p className="text-text-secondary font-medium max-w-3xl mx-auto mt-4 text-base leading-relaxed">
                           Usability testing sessions were conducted to validate assumptions, identify friction points, and refine interactions before final delivery.
                        </p>
                     </div>

                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10 max-w-6xl mx-auto">
                        {[
                           { num: "01", title: "Key Finding", desc: "Users wanted faster expense categorization.", icon: Zap, color: "#8B5CF6" },
                           { num: "02", title: "Key Finding", desc: "Users preferred simplified analytics terminology.", icon: FileText, color: "#00DA99" },
                           { num: "03", title: "Key Finding", desc: "Users expected personalized savings recommendations.", icon: Sparkles, color: "#0D63CC" }
                        ].map((finding, i) => (
                           <motion.div
                              key={i}
                              whileHover={{ y: -4 }}
                              className="bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all duration-300 p-5 flex flex-col sm:flex-row gap-5 group"
                           >
                              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-white border border-slate-100 shadow-sm">
                                 <finding.icon size={22} style={{ color: finding.color }} />
                              </div>
                              <div>
                                 <span className="text-[10px] font-bold uppercase tracking-widest mb-1.5 block" style={{ color: finding.color }}>Insight {finding.num}</span>
                                 <h4 className="font-bold text-lg text-text-primary mb-2 leading-tight">{finding.title}</h4>
                                 <p className="text-[13px] text-text-secondary font-medium leading-relaxed">{finding.desc}</p>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               </section>


               {/* ── 17. IMPACT & RESULTS ───────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-10 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <TrendingUp size={14} className="text-primary" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Results</span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Impact</span></h2>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
                     <motion.div {...fadeIn} className="bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.07)] hover:border-white transition-all duration-300 p-6 md:p-8 relative overflow-hidden group border-t-[4px] border-t-[#0D63CC]">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#0D63CC]/6 blur-[60px] rounded-full pointer-events-none" />
                        <div className="flex items-center gap-4 mb-7 relative z-10">
                           <div className="w-14 h-14 bg-gradient-to-br from-[#0D63CC] to-blue-600 rounded-2xl flex items-center justify-center shadow-md shadow-[#0D63CC]/20">
                              <User className="text-white" size={28} />
                           </div>
                           <h3 className="text-2xl font-bold text-text-primary leading-tight">Expected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]"> Outcomes</span></h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3 relative z-10">
                           {[
                              "Improved visibility into personal finances",
                              "Simplified expense management workflows",
                              "Increased user engagement through personalized insights",
                              "Encouraged healthier financial behaviors"
                           ].map((g, i) => (
                              <div key={i} className="bg-blue-50/60 border border-blue-100/60 p-4 rounded-xl">
                                 <CheckCircle2 size={20} className="text-[#0D63CC] mb-2" />
                                 <p className="text-[13px] font-bold text-slate-700">{g}</p>
                              </div>
                           ))}
                        </div>
                     </motion.div>

                     <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.07)] hover:border-white transition-all duration-300 p-6 md:p-8 relative overflow-hidden group border-t-[4px] border-t-[#00DA99]">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#00DA99]/6 blur-[60px] rounded-full pointer-events-none" />
                        <div className="flex items-center gap-4 mb-7 relative z-10">
                           <div className="w-14 h-14 bg-gradient-to-br from-[#00DA99] to-emerald-500 rounded-2xl flex items-center justify-center shadow-md shadow-[#00DA99]/20">
                              <Rocket className="text-white" size={28} />
                           </div>
                           <h3 className="text-2xl font-bold text-text-primary leading-tight">Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Outcomes</span></h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3 relative z-10">
                           {[
                              "Increased student engagement",
                              "Improved program effectiveness",
                              "Stronger success initiatives",
                              "Measurable learning outcomes"
                           ].map((g, i) => (
                              <div key={i} className="bg-teal-50/60 border border-teal-100/60 p-4 rounded-xl">
                                 <CheckCircle2 size={20} className="text-[#00DA99] mb-2" />
                                 <p className="text-[13px] font-bold text-slate-700">{g}</p>
                              </div>
                           ))}
                        </div>
                     </motion.div>
                  </div>
               </section>

               {/* ── 18. KEY LEARNINGS ───────────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-10 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                        <Lightbulb size={14} className="text-secondary" />
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Takeaways</span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Learnings</span></h2>
                     <p className="text-text-secondary font-medium max-w-3xl mx-auto mt-4 text-base leading-relaxed">
                        Designing financial products requires balancing analytical depth with simplicity. The biggest challenge was presenting complex financial information in a way that remains understandable, actionable, and trustworthy.
                     </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 max-w-6xl mx-auto">
                     {[
                        { title: "Meaningful connections", desc: "Financial literacy becomes meaningful when directly connected to a student's personal goals rather than abstract principles.", color: "#0D63CC", icon: Eye },
                        { title: "Personalization is key", desc: "Students engage more deeply when experiences feel specifically tailored to their unique circumstances and aspirations.", color: "#00DA99", icon: Shield },
                        { title: "Power of visualization", desc: "Future visualization dramatically improves financial decision-making by making long-term consequences tangible today.", color: "#8B5CF6", icon: Brain },
                        { title: "Simplifying complexity", desc: "Simplifying financial complexity is both a critical UX challenge and an educational imperative for this demographic.", color: "#EC4899", icon: Sparkles }
                     ].map((learning, idx) => (
                        <motion.div
                           key={idx}
                           {...fadeIn} transition={{ delay: idx * 0.1 }}
                           className="bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.07)] hover:border-white transition-all duration-300 p-5 md:p-6 group relative overflow-hidden"
                        >
                           <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[80px] opacity-8 group-hover:opacity-15 transition-all duration-500 origin-top-right" style={{ backgroundColor: learning.color }} />

                           <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-white border border-slate-100 shadow-sm">
                                 <learning.icon size={22} strokeWidth={2} style={{ color: learning.color }} />
                              </div>
                              <div>
                                 <h4 className="font-bold text-xl text-text-primary mb-2 leading-tight">{learning.title}</h4>
                                 <p className="text-[13px] text-text-secondary font-medium leading-relaxed">{learning.desc}</p>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* ── 19. FUTURE ROADMAP ─────────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-10 text-center">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Roadmap</span></h2>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-8xl mx-auto">
                     {[
                        { phase: "Phase 01", items: ["Open Banking Integrations", "Automated Account Connections"], color: "#0D63CC", icon: Globe },
                        { phase: "Phase 02", items: ["Investment Recommendations", "Wealth Management"], color: "#00DA99", icon: TrendingUp },
                        { phase: "Phase 03", items: ["Family Financial Planning", "Collaborative Budgets"], color: "#8B5CF6", icon: Users },
                        { phase: "Phase 04", items: ["AI Financial Coach", "Predictive Alerts"], color: "#EC4899", icon: Sparkles }
                     ].map((phase, idx) => (
                        <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }} className="bg-white/80 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.07)] hover:border-white transition-all duration-500 hover:-translate-y-2 overflow-hidden group">
                           <div className="p-5 md:p-6 relative flex flex-col min-h-[200px]">
                              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ backgroundColor: phase.color }} />
                              <div className="flex flex-col gap-2.5 mb-5 relative z-20 mt-2">
                                 <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center border border-slate-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <phase.icon size={20} strokeWidth={1.5} style={{ color: phase.color }} />
                                 </div>
                                 <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: phase.color }}>{phase.phase}</span>
                              </div>
                              <ul className="space-y-2.5 flex-1 relative z-20">
                                 {phase.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-2.5">
                                       <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: phase.color, opacity: 0.6 }} />
                                       <span className="text-[13px] font-medium text-text-secondary leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* ── 20. FINAL REFLECTION ───────────────────────────────────────────────────── */}
               <section className="relative mb-10 md:mb-16 overflow-hidden">
                  <motion.div
                     {...fadeIn}
                     className="glass-card rounded-[24px] md:rounded-[32px] p-8 md:p-12 relative overflow-hidden group border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm transition-all duration-300"
                  >
                     <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00DA99]/8 blur-[120px] rounded-full pointer-events-none" />
                     <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0D63CC]/8 blur-[100px] rounded-full pointer-events-none" />

                     <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100">
                           <Award size={28} className="text-[#00DA99]" />
                        </div>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-8">
                           Final <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Reflection</span>
                        </h2>

                        <div className="relative">
                           <div className="absolute -top-6 -left-6 text-[80px] text-slate-100 text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC] font-serif leading-none select-none z-0">"</div>
                           <div className="absolute -bottom-6 -right-6 text-[80px] text-slate-100 font-serif leading-none select-none rotate-180 z-0">"</div>
                           <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed relative z-10 px-6 py-4">
                              SPENDORA demonstrated how thoughtful product design can transform financial complexity into empowering user experiences. By combining education, analytics, and AI-driven insights, the platform aims to help users build stronger financial habits and make more informed decisions.
                           </p>
                        </div>
                     </div>
                  </motion.div>
               </section>
               {/* ── 21. VISUAL SHOWCASE ──────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Interface
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-4">High-Fidelity <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">UI Screens</span></h2>
                  </div>

                  <div className="grid gap-6">
                     <div className="lg:col-span-12">
                        <div className="relative aspect-[21/9] z-10 w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-500">
                           <Image
                              src="/images/spendora/Visual-UI.png"
                              alt="Visual UI"
                              fill
                              className="object-cover relative z-10 duration-1000"
                           />

                           {/* Overlay with Glassy Effect */}
                           {/* <div className="absolute inset-x-0 bottom-0 pt-32 pb-8 md:pb-12 bg-gradient-to-t from-white/90 via-white/40 to-transparent backdrop-blur-sm z-20 flex flex-col items-center justify-end border-t border-white/20">
                              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-6 drop-shadow-sm">36 Visual Screens UI</h3>
                              <a href="#" className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-slate-900/20">
                                 <svg width="18" height="18" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                    <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19C14.7467 19 19 23.2533 19 28.5Z" fill="#1ABCFE"/>
                                    <path d="M0 47.5C0 52.7467 4.25329 57 9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5C4.25329 38 0 42.2533 0 47.5Z" fill="#0ACF83"/>
                                    <path d="M19 9.5C19 14.7467 14.7467 19 9.5 19H0V9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5Z" fill="#F24E1E"/>
                                    <path d="M19 19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19V19Z" fill="#FF7262"/>
                                    <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5Z" fill="#A259FF"/>
                                 </svg>
                                 View All High-Fidelity Screens
                              </a>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </section>

               {/* 21. FINAL CTA */}
               <section className="py-8 md:py-8 text-center relative">
                  <div className="relative max-w-9xl mx-auto">
                     <motion.div {...fadeIn} className="relative glass-card rounded-[32px] p-8 md:p-12 border border-white/60 shadow-lg overflow-hidden group">
                        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#0D63CC]/15 blur-[80px] rounded-full group-hover:bg-[#0D63CC]/25 transition-colors duration-1000 pointer-events-none" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#00DA99]/15 blur-[80px] rounded-full group-hover:bg-[#00DA99]/25 transition-colors duration-1000 pointer-events-none" />

                        <div className="relative z-10">
                           <div className="inline-flex items-center justify-center w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#0D63CC] to-[#00DA99] shadow-md text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                              <Sparkles size={28} className="animate-pulse" />
                           </div>
                           <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4 drop-shadow-sm">
                              Building the Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">FinTech Product?</span>
                           </h2>
                           <p className="text-base md:text-lg text-text-secondary mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                              I'm available to help startups and businesses design intuitive, scalable, and data-driven digital products.
                           </p>

                           <div className="flex flex-wrap justify-center gap-2 mb-10">
                              {["50+ High-Fidelity Screens", "Complete Design System", "Enterprise Components", "Workflow Prototypes"].map((tag, i) => (
                                 <span key={i} className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-200/50 hover:bg-white transition-colors">
                                    <span className="text-[#0D63CC] mr-1">✓</span> {tag}
                                 </span>
                              ))}
                           </div>

                           <Link href="#" className="inline-flex items-center gap-3 px-8 py-4 btn-premium text-white rounded-full font-bold transition-all shadow-[0_20px_40px_-10px_rgba(13,99,204,0.25)] group text-base overflow-hidden relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                              <span className="relative z-10 text-white">Let's Discuss Your Product</span>
                              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </motion.div>
                  </div>
               </section>

               {/* NEXT CASE STUDY NAVIGATION */}
               <section className="mt-6 md:mt-6 pt-6 md:pt-6 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4">Next Project</span>
                  <Link href="/case-studies/supercampus" className="group flex flex-col items-center">
                     <h3 className="text-4xl md:text-5xl font-bold text-text-primary group-hover:text-[#8B5CF6] transition-colors duration-300 mb-6">
                        SuperCampus
                     </h3>
                     <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#8B5CF6] group-hover:border-[#8B5CF6] transition-all duration-300">
                        <ArrowLeft className="rotate-180 text-text-secondary group-hover:text-white transition-colors" size={20} />
                     </div>
                  </Link>
               </section>

            </div>
         </main>
         <Footer />
      </>
   )
}
