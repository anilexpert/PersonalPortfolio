import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, ArrowRight, Brain, TrendingUp, Target, Smartphone, Shield, Zap,
   Search, Users, Grid, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase, HandCoins,
   PieChart, Handshake, MessageCircle, User, Award, BrainCircuit, BarChart3,
   Workflow, Layers, MessageSquare, Database, LineChart, Cpu, Fingerprint,
   Share2, Lock, Shuffle, Sparkles
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GlowDivider from '../../components/GlowDivider'
import RotatingBadge from '../../components/RotatingBadge'

export default function MarketVisionAICaseStudy() {
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

   // Premium Glass Placeholder Component
   const PremiumPlaceholder = ({ icon: Icon, label, glowCls = "bg-[#0D63CC]", textCls = "text-[#0D63CC]", aspect = "aspect-[16/9]" }) => (
      <div className={`w-full ${aspect} glass-card rounded-3xl flex flex-col items-center justify-center overflow-hidden relative group transition-all duration-500 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-lg`}>
         <div
            className={`absolute -top-24 -right-24 w-64 h-64 blur-[60px] rounded-full transition-all duration-700 group-hover:scale-[1.5] group-hover:opacity-20 opacity-10 pointer-events-none z-0 ${glowCls}`}
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
            <title>MarketVisionAI | Case Study - AI-Powered Marketing Intelligence</title>
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
                     <span className="bg-gradient-to-r from-[#00DA99] to-[#0D63CC] bg-clip-text text-transparent ml-2">Studies</span>
                  </motion.h1>

                  <div className="absolute top-2 right-[6%] hidden lg:block">
                     <RotatingBadge
                        icon={BrainCircuit}
                        labels={["MARTECH", "AI-POWERED", "SAAS"]}
                        iconColor="#00DA99"
                        size={150}
                     />
                  </div>
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
                        MarketVisionAI
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        Designing an AI-Powered <span className="bg-gradient-to-r from-[#00DA99] to-[#0D63CC] bg-clip-text text-transparent">Marketing Intelligence Platform</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        An AI-powered marketing intelligence and automated reporting platform designed to help agencies, marketers, and business teams centralize marketing data, uncover actionable insights, and optimize campaign performance through artificial intelligence.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Industry</p>
                        <p className="font-bold text-sm text-text-primary">MarTech / AI / SaaS / BI</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">My Role</p>
                        <p className="font-bold text-sm text-text-primary">Lead Product Designer</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Duration</p>
                        <p className="font-bold text-sm text-text-primary">8 Months</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Team Focus</p>
                        <p className="font-bold text-sm text-text-primary">Product Strategy, UX, High-Fidelity UI</p>
                     </div>
                  </motion.div>
               </section>

               {/* MAIN HERO IMAGE */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-20 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[32px] overflow-hidden group-hover:shadow-2xl transition-all duration-700 bg-slate-900 border-2 border-slate-800 flex items-center justify-center">
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-30 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #00DA99 0%, #0D63CC 100%)' }}
                     />
                     <div className="relative aspect-[21/9] z-10 w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500">
                        <Image
                           src="/images/marketvisionai/MARKETVISION-DASHBOARD.png"
                           alt="MARKETVISION Dashboard"
                           fill
                           className="object-cover relative z-10 duration-1000"
                        />
                     </div>
                     {/* <div className="text-center relative z-10 text-white p-8">
                        <BrainCircuit className="w-16 h-16 mx-auto mb-6 text-[#00DA99] opacity-80" strokeWidth={1} />
                        <h2 className="text-3xl md:text-5xl font-black tracking-widest uppercase mb-4 opacity-90">MARKETVISION DASHBOARD</h2>
                        <p className="text-slate-400 font-medium tracking-[0.2em] uppercase text-sm mb-8">AI Marketing Intelligence Hub</p>
                        <div className="flex gap-4 justify-center">
                           <span className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold bg-white/5 backdrop-blur-sm">Multi-Channel Analytics</span>
                           <span className="px-4 py-2 border border-[#00DA99]/20 rounded-full text-xs font-bold bg-[#00DA99]/10 text-[#00DA99] backdrop-blur-sm">AI Recommendations</span>
                           <span className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold bg-white/5 backdrop-blur-sm">Automated Reporting</span>
                        </div>
                     </div> */}
                  </div>
               </motion.section>

               {/* EXECUTIVE SUMMARY */}
               <section className="mb-10 md:mb-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Project Overview</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                           Marketing teams often operate across multiple advertising, analytics, and customer engagement platforms. This fragmented ecosystem makes it difficult to gain a unified view of campaign performance. MarketVisionAI was designed to centralize marketing intelligence, automate analysis, and provide AI-powered recommendations that help teams optimize performance more effectively.
                        </p>
                     </div>
                  </div>
               </section>

               <GlowDivider />

               {/* OVERVIEW / PROBLEM */}
               <section className="mb-10 mt-10 md:mb-16 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">The Business Challenge</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                           Marketing organizations faced significant challenges managing campaign performance across multiple channels, resulting in slow decision-making and limited strategic visibility.
                        </p>
                     </div>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">The Problem</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              { title: "Fragmented Data Sources", desc: "Campaign data was distributed across multiple marketing platforms and analytics tools." },
                              { title: "Manual Reporting Processes", desc: "Teams spent significant time gathering, cleaning, and consolidating data." },
                              { title: "Limited Strategic Insights", desc: "Existing dashboards presented metrics but rarely delivered actionable recommendations." },
                              { title: "Slow Campaign Optimization", desc: "Identifying optimization opportunities required manual analysis and expertise." },
                              { title: "Lack of Unified Visibility", desc: "Leadership lacked a single source of truth for marketing performance." },
                              { title: "Poor Scalability", desc: "Managing reports across dozens of clients became operationally expensive." }
                           ].map((item, idx) => (
                              <div key={idx} className="flex flex-col gap-2 p-6 glass-card rounded-2xl">
                                 <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                                    <h4 className="font-bold text-sm text-text-primary">{item.title}</h4>
                                 </div>
                                 <p className="text-xs text-text-secondary pl-5 leading-relaxed">{item.desc}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="mb-12 md:mb-16 p-6 glass-card rounded-[24px] border border-[#0D63CC]/20 bg-[#0D63CC]/5 max-w-5xl mx-auto">
                     <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                        {["Multiple Platforms", "Scattered Data", "Manual Analysis", "Delayed Decisions", "Missed Growth Opportunities"].map((step, idx) => (
                           <React.Fragment key={idx}>
                              <div className="flex-1 font-bold text-sm text-text-primary">{step}</div>
                              {idx < 4 && <div className="text-secondary/50 rotate-90 md:rotate-0"><ArrowRight size={20} /></div>}
                           </React.Fragment>
                        ))}
                     </div>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Challenge Statement</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <div className="p-8 md:p-10 glass-card rounded-[24px] border-l-4 border-[#0D63CC] bg-blue-50/30">
                           <h2 className="text-lg md:text-xl font-bold text-text-primary leading-relaxed">
                              "How might we help digital agencies centralize marketing intelligence, automate reporting workflows, and provide AI-powered optimization recommendations that improve campaign performance at scale?"
                           </h2>
                        </div>
                     </div>
                  </div>
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Target Outcomes</span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-4">Product Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Success Criteria</span></h2>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                     <motion.div {...fadeIn} className="p-8 glass-card rounded-[24px] border-t-4 border-[#0D63CC]">
                        <div className="w-12 h-12 bg-[#0D63CC]/10 rounded-2xl flex items-center justify-center mb-6">
                           <Target className="text-[#0D63CC]" size={24} />
                        </div>
                        <p className="text-sm font-medium text-text-secondary mb-6 leading-relaxed">The goal was to create a centralized intelligence platform capable of transforming complex marketing data into actionable business insights through AI-driven recommendations and intuitive analytics experiences.</p>
                        <h3 className="text-xl font-bold text-text-primary mb-6">Expected Outcomes</h3>
                        <ul className="space-y-4">
                           {[
                              "Unified visibility",
                              "Faster insights",
                              "Automated analysis",
                              "Actionable recommendations",
                              "Enterprise-ready architecture"
                           ].map((g, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm font-medium text-text-secondary">
                                 <CheckCircle2 size={16} className="text-[#0D63CC]" /> {g}
                              </li>
                           ))}
                        </ul>
                     </motion.div>

                     <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="p-8 glass-card rounded-[24px] border-t-4 border-[#00DA99]">
                        <div className="w-12 h-12 bg-[#00DA99]/10 rounded-2xl flex items-center justify-center mb-6">
                           <User className="text-[#00DA99]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-6">Success Criteria</h3>
                        <ul className="space-y-4">
                           {[
                              "Centralize marketing data",
                              "Improve decision-making",
                              "Reduce reporting effort",
                              "Increase campaign performance",
                              "Enable scalability"
                           ].map((g, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm font-medium text-text-secondary">
                                 <CheckCircle2 size={16} className="text-[#00DA99]" /> {g}
                              </li>
                           ))}
                        </ul>
                     </motion.div>
                  </div>
               </section>

               {/* RESEARCH FINDINGS */}
               <section className="mb-10 md:mb-16 bg-slate-50 rounded-[40px] p-8 md:p-12 lg:p-16 border border-slate-200">
                  <div className="mb-12">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Discovery</span>
                     </div>
                     <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Research & Discovery <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Insights</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl">We conducted extensive discovery activities with over 50 participants across agency owners, marketing managers, specialists, and clients.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Marketers Need Context, Not Raw Data", stat: "Context First", desc: "Users preferred insights and recommendations over isolated metrics." },
                        { num: "02", title: "Teams Struggled with Cross-Channel Visibility", stat: "Fragmented", desc: "Understanding performance across channels required excessive manual effort." },
                        { num: "03", title: "Executives Prioritized High-Level KPIs", stat: "High-Level", desc: "Leadership needed concise summaries rather than operational details." },
                        { num: "04", title: "Users Wanted Predictive Intelligence", stat: "Predictive", desc: "Teams expected AI to proactively identify risks and opportunities." }
                     ].map((insight, i) => (
                        <div key={i} className="p-8 bg-white rounded-[24px] border border-slate-200 hover:shadow-xl transition-all group">
                           <span className="text-[48px] font-black text-slate-100 block mb-2 leading-none group-hover:text-primary/10 transition-colors">{insight.num}</span>
                           <h4 className="font-bold text-xl text-text-primary mb-4">{insight.title}</h4>
                           <div className="flex flex-col mb-4">
                              <span className="text-2xl font-black text-[#0D63CC]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]"> {insight.stat}</span></span>
                           </div>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed">{insight.desc}</p>
                        </div>
                     ))}
                  </div>

                  {/* Additional Artifacts List */}
                  <div className="mt-16 text-center">
                     <p className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-10">Research Artifacts Produced</p>
                     <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-8 md:gap-4 max-w-5xl mx-auto">
                        {/* Background Dashed Line (Desktop only) */}
                        <div className="hidden md:block absolute top-[64px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-slate-300 z-0" />

                        {[
                           { title: "AFFINITY MAPPING", desc: "Synthesizing qualitative data.", icon: Grid, style: "dashed" },
                           { title: "JOURNEY MAP", desc: "User pain points.", icon: Workflow, style: "solid" },
                           { title: "STAKEHOLDER MAP", desc: "Aligning objectives.", icon: Users, style: "solid" },
                           { title: "OPPORTUNITY MATRIX", desc: "Prioritizing features.", icon: Target, style: "dark" }
                        ].map((step, j, arr) => {
                           let circleClasses = "w-32 h-32 rounded-full flex flex-col items-center justify-center text-center shadow-sm transition-transform duration-300 hover:-translate-y-2 z-10 mx-auto";
                           let iconColor = "text-slate-600";
                           let textColor = "text-text-primary";

                           if (step.style === "dashed") {
                              circleClasses += " bg-white border-2 border-dashed border-slate-300";
                           } else if (step.style === "solid") {
                              circleClasses += " bg-white border-2 border-solid border-[#0D63CC]";
                              iconColor = "text-[#0D63CC]";
                           } else if (step.style === "dark") {
                              circleClasses += " bg-slate-900 border-none shadow-xl";
                              iconColor = "text-white";
                              textColor = "text-white";
                           }

                           return (
                              <div key={j} className="flex flex-col items-center relative group w-full md:flex-1">
                                 {/* Arrow on dashed line */}
                                 {j < arr.length - 1 && (
                                    <div className="hidden md:block absolute top-[54px] -right-3 text-slate-300 z-0 bg-slate-50 px-1">
                                       <ArrowRight size={20} />
                                    </div>
                                 )}

                                 {/* Circle Node */}
                                 <div className={circleClasses}>
                                    <step.icon size={28} className={`mb-2 ${iconColor}`} strokeWidth={1.5} />
                                    <span className={`text-[11px] font-black uppercase tracking-wider leading-tight ${textColor} px-2`}>
                                       {step.title.split(' ')[0]}<br />{step.title.split(' ').slice(1).join(' ')}
                                    </span>
                                 </div>

                                 {/* Description Text */}
                                 <p className="text-center mt-6 text-sm font-bold text-text-secondary max-w-[140px] mx-auto">
                                    {step.desc}
                                 </p>
                              </div>
                           )
                        })}
                     </div>
                  </div>
               </section>

               {/* SWOT ANALYSIS */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Strategic Analysis
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-4">SWOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Analysis</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Evaluating MarketVisionAI's competitive stance to ensure viability and identify risks.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        {
                           title: "Strengths",
                           items: ["AI Recommendations", "Multi-Channel Support", "Automated Reporting", "Custom Dashboards"],
                           color: "text-[#00DA99]",
                           borderGlow: "from-[#00DA99]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#00DA99]/15",
                           borderColor: "border-[#00DA99]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Briefcase size={24} strokeWidth={2} className="text-[#00DA99] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Weaknesses",
                           items: ["Initial Learning Curve", "Heavy Data Dependencies", "Complex Integrations", "Enterprise Setup"],
                           color: "text-[#F59E0B]",
                           borderGlow: "from-[#F59E0B]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#F59E0B]/15",
                           borderColor: "border-[#F59E0B]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Activity size={24} strokeWidth={2} className="text-[#F59E0B] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Opportunities",
                           items: ["AI Adoption Growth", "MarTech Expansion", "Agency Automation", "Predictive Analytics"],
                           color: "text-[#0D63CC]",
                           borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#0D63CC]/15",
                           borderColor: "border-[#0D63CC]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Search size={24} strokeWidth={2} className="text-[#0D63CC] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Threats",
                           items: ["Competitive Market", "Rapid API Changes", "Privacy Regulations", "Technology Evolution"],
                           color: "text-rose-500",
                           borderGlow: "from-rose-500/30 via-white/10 to-transparent",
                           innerGlow: "bg-rose-500/15",
                           borderColor: "border-rose-500/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <FileText size={24} strokeWidth={2} className="text-rose-500 group-hover:scale-110 transition-transform duration-500" />
                        }
                     ].map((box, i) => (
                        <div key={i} className={`relative rounded-[24px] p-[2px] border border-slate-200 bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
                           <div className={`bg-gradient-to-b ${box.gradientFill} backdrop-blur-2xl w-full h-full rounded-[22px] p-6 md:p-8 relative z-10 flex flex-col min-h-[300px] overflow-hidden`}>
                              <motion.div
                                 animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                                 className={`absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none ${box.innerGlow}`}
                              />
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

               {/* PRODUCT VISION & STRATEGY */}
               <section className="mb-10 md:mb-16 text-center max-w-5xl mx-auto px-4">
                  <div className="mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight mb-4">
                        Empower every agency with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] via-[#0D63CC] to-[#8B5CF6]">enterprise-grade</span> AI marketing intelligence.
                     </h2>
                  </div>

                  <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                     {[
                        { title: "Unified Dashboard", desc: "Single Source of Truth", icon: Layout, color: "#0D63CC", glow: "from-[#0D63CC]/10 to-transparent" },
                        { title: "AI Intelligence", desc: "Conversational Analytics", icon: BrainCircuit, color: "#8B5CF6", glow: "from-[#8B5CF6]/10 to-transparent" },
                        { title: "Real-Time", desc: "Continuous Monitoring", icon: Activity, color: "#00DA99", glow: "from-[#00DA99]/10 to-transparent" },
                        { title: "Automation", desc: "Reduce Manual Effort", icon: Zap, color: "#F59E0B", glow: "from-[#F59E0B]/10 to-transparent" },
                        { title: "Ecosystem", desc: "Connect All Platforms", icon: Layers, color: "#EC4899", glow: "from-[#EC4899]/10 to-transparent" }
                     ].map((pillar, idx) => (
                        <motion.div
                           key={idx}
                           whileHover={{ y: -8 }}
                           className="relative group h-full"
                        >
                           {/* Card Glow */}
                           <div className={`absolute inset-0 bg-gradient-to-br ${pillar.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-[24px]`} />

                           <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-white rounded-[24px] border border-slate-100 group-hover:border-slate-200 shadow-sm group-hover:shadow-xl transition-all duration-500 relative z-10 overflow-hidden">
                              <div
                                 className="w-14 h-14 rounded-[16px] flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 border border-slate-50 relative overflow-hidden shadow-sm"
                                 style={{ backgroundColor: `${pillar.color}10` }}
                              >
                                 <pillar.icon size={26} strokeWidth={1.5} style={{ color: pillar.color }} className="relative z-10" />
                              </div>
                              <h5 className="font-bold text-[14px] text-text-primary mb-2 tracking-tight">{pillar.title}</h5>
                              <p className="text-[10px] text-text-secondary leading-relaxed opacity-90">{pillar.desc}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* SOLUTION & IA */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DA99]/10 border border-[#00DA99]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest">The Solution</span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-4">Designing an AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Marketing Ecosystem</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        The platform was designed to unify data sources, analytics engines, AI recommendations, and reporting workflows into a single operational experience.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
                     {/* Diagram Flow */}
                     <div className="lg:col-span-12 glass-card rounded-[32px] p-6 lg:p-10 border border-[#0D63CC]/10 mb-2 bg-[#F1F5F9]/50">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center w-full">
                           {["Data Sources", "Data Processing", "AI Intelligence Layer", "Insights Engine", "Recommendations", "Decision Dashboard"].map((step, idx) => (
                              <React.Fragment key={idx}>
                                 <div className="flex-1 flex items-center justify-center font-bold text-[11px] lg:text-xs xl:text-sm text-slate-800 bg-white py-4 px-2 xl:px-4 rounded-xl md:rounded-2xl border border-slate-200/60 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.03)] min-h-[64px] md:min-h-[80px] leading-snug w-full md:w-auto">
                                    <span className="max-w-[120px] inline-block">{step}</span>
                                 </div>
                                 {idx < 5 && <div className="text-[#0D63CC] rotate-90 md:rotate-0 flex justify-center shrink-0 py-2 md:py-0"><ArrowRight size={18} strokeWidth={2} /></div>}
                              </React.Fragment>
                           ))}
                        </div>
                     </div>

                     {/* Feature List */}
                     <div className="lg:col-span-5 glass-card rounded-[32px] p-6 lg:p-10 border-2 border-[#00DA99]/10 hover:border-[#0D63CC]/40 shadow-xl transition-all duration-500 relative overflow-hidden group flex flex-col">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150" />
                        <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-6 relative z-10">
                           <div className="w-12 h-12 rounded-xl bg-[#0D63CC]/10 flex items-center justify-center border border-[#0D63CC]/20 shadow-sm">
                              <CheckCircle2 size={24} className="text-[#0D63CC]" />
                           </div>
                           <div>
                              <span className="block text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest mb-1">Features</span>
                              <span className="block font-bold text-text-primary tracking-tight text-xl">Core Product Capabilities</span>
                           </div>
                        </div>
                        <ul className="space-y-4 relative z-10 flex-1">
                           {[
                              { title: "AI Recommendation Engine", desc: "Provides intelligent suggestions to improve campaign performance and marketing efficiency." },
                              { title: "Unified Analytics Dashboard", desc: "Centralizes performance metrics across channels into a single actionable view." },
                              { title: "Automated Reporting", desc: "Reduces manual reporting effort through real-time data aggregation." },
                              { title: "Campaign Performance Insights", desc: "Highlights opportunities, anomalies, and trends requiring immediate attention." },
                              { title: "Forecasting & Trends", desc: "Uses predictive models to anticipate future performance patterns." }
                           ].map((item, i) => (
                              <li key={i} className="flex flex-col gap-1 group/li bg-white/50 p-4 rounded-2xl border border-slate-100 hover:bg-white hover:border-[#00DA99]/30 transition-all shadow-sm hover:shadow-md cursor-default">
                                 <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-[#00DA99]/10 flex items-center justify-center flex-shrink-0 group-hover/li:scale-110 transition-transform">
                                       <CheckCircle2 size={10} className="text-[#00DA99]" />
                                    </div>
                                    <span className="text-[13px] font-bold text-text-primary transition-colors leading-snug">{item.title}</span>
                                 </div>
                                 <span className="text-[11px] font-medium text-text-secondary pl-7">{item.desc}</span>
                              </li>
                           ))}
                        </ul>
                     </div>

                     {/* IA Tree */}
                     <div className="lg:col-span-7 glass-card rounded-[32px] p-6 lg:p-10 border-2 border-[#00DA99]/10 hover:border-[#0D63CC]/40 shadow-xl transition-all duration-500 relative overflow-hidden group">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00DA99]/10 blur-[60px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150" />
                        <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-6 relative z-10">
                           <div className="w-12 h-12 rounded-xl bg-[#00DA99]/10 flex items-center justify-center border border-[#00DA99]/20 shadow-sm">
                              <Database size={24} className="text-[#00DA99]" />
                           </div>
                           <div>
                              <span className="block text-[10px] font-bold text-[#00DA99] uppercase tracking-widest mb-1">Architecture</span>
                              <span className="block font-bold text-text-primary tracking-tight text-xl">MarketVision IA Tree</span>
                           </div>
                        </div>
                        <div className="relative aspect-[4/3] z-10 w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500">
                           <Image
                              src="/images/marketvisionai/Information-Architecture.png"
                              alt="Information Architecture"
                              fill
                              className="object-cover relative z-10 duration-1000"
                           />
                        </div>
                     </div>
                  </div>
               </section>

               {/* USER PERSONAS */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           User Research
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Personas</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        We identified key user groups to understand their goals, pain points, and motivations. These personas guided our design decisions and feature prioritization.
                     </p>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                     {[
                        {
                           name: "Sarah Wilson",
                           role: "Marketing Director",
                           age: "42",
                           bio: "Needs to manage multiple clients and increase agency profitability. Wants to reduce reporting effort and scale operations efficiently.",
                           goals: ["Track business performance", "Allocate budgets effectively", "Increase agency profitability"],
                           pains: ["Limited visibility", "Inconsistent reporting", "Limited scalability"],
                           motivations: ["Data-driven growth", "Team efficiency", "Clear ROI visibility"],
                           color: "#0D63CC",
                           icon: Briefcase
                        },
                        {
                           name: "Michael Chen",
                           role: "Growth Marketing Manager",
                           age: "35",
                           bio: "Tracks multiple campaigns across disconnected platforms. Needs to quickly identify opportunities and generate actionable client reports.",
                           goals: ["Optimize campaigns", "Improve ROI", "Generate client reports"],
                           pains: ["Data fragmentation", "Slow reporting", "Lack of actionable advice"],
                           motivations: ["Performance optimization", "Automating manual work", "Proactive insights"],
                           color: "#00DA99",
                           icon: LineChart
                        }
                     ].map((persona, idx) => (
                        <motion.div
                           key={idx}
                           {...fadeIn}
                           className="glass-card rounded-[20px] p-6 md:p-10 lg:p-12 group relative overflow-hidden flex flex-col border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-md transition-all duration-500"
                        >
                           {/* Dynamic Background Glow */}
                           <div
                              className="absolute -top-24 -right-24 w-80 h-80 blur-[100px] rounded-full transition-all duration-1000 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: persona.color }}
                           />

                           <div className="flex items-center gap-6 mb-8 relative z-10">
                              <div className="w-16 h-16 rounded-[16px] overflow-hidden flex-shrink-0 relative border-2 border-white shadow-2xl flex items-center justify-center" style={{ backgroundColor: `${persona.color}15` }}>
                                 <persona.icon size={28} style={{ color: persona.color }} strokeWidth={1.5} />
                              </div>
                              <div>
                                 <h4 className="font-bold text-2xl text-gray-800 tracking-tight">{persona.name}</h4>
                                 <p className="text-xs font-medium text-text-secondary mt-1 opacity-80">{persona.role} • Age {persona.age}</p>
                              </div>
                           </div>

                           <p className="text-base text-gray-800 leading-relaxed mb-8 relative z-10 font-medium">
                              "{persona.bio}"
                           </p>

                           <div className="space-y-4 relative z-10">
                              <div className="p-5 rounded-2xl" style={{ backgroundColor: `${persona.color}08`, borderColor: `${persona.color}20`, borderWidth: '1px' }}>
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-3 flex items-center gap-2" style={{ color: persona.color }}>
                                    <CheckCircle2 size={13} strokeWidth={3} /> Core Goals
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.goals.map((n, i) => (
                                       <span key={i} className="px-3 py-1.5 bg-white/60 rounded-lg border text-xs font-medium text-text-primary" style={{ borderColor: `${persona.color}20` }}>
                                          {n}
                                       </span>
                                    ))}
                                 </div>
                              </div>

                              <div className="p-5 rounded-2xl bg-rose-50 border border-rose-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-rose-500 mb-3 flex items-center gap-2">
                                    <Activity size={13} strokeWidth={3} /> Critical Pain Points
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.pains.map((p, i) => (
                                       <span key={i} className="px-3 py-1.5 bg-white/60 rounded-lg border border-rose-100 text-xs font-medium text-text-primary">
                                          {p}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                              {persona.motivations && (
                                 <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 mt-4">
                                    <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-blue-500 mb-3 flex items-center gap-2">
                                       <Lightbulb size={13} strokeWidth={3} /> Motivations
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                       {persona.motivations.map((m, i) => (
                                          <span key={i} className="px-3 py-1.5 bg-white/60 rounded-lg border border-blue-100 text-xs font-medium text-text-primary">
                                             {m}
                                          </span>
                                       ))}
                                    </div>
                                 </div>
                              )}
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* EMPATHY MAP */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Research Insight
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-4">Empathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Mapping</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Understanding our users' mental models to align on strategic intelligence needs.</p>
                     <p className="text-sm text-text-secondary font-medium max-w-2xl mx-auto mt-4">Empathy mapping helped identify emotional and behavioral drivers influencing how marketing teams interact with data and decision-making workflows.</p>
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
                                    "“Which campaigns need attention?”",
                                    "“What should I optimize first?”",
                                    "“Am I missing key competitor moves?”",
                                    "“Is this data actually accurate?”"
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
                                    "“Reporting takes too much time.”",
                                    "“I need faster insights.”",
                                    "“The clients want to see ROI clearly.”",
                                    "“I don't trust these automated charts.”"
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
                           <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#00DA99] to-[#0D63CC] p-2 shadow-[0_0_50px_rgba(13,99,204,0.3)] relative z-10 hover:scale-105 transition-transform duration-700">
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
                                    "Overwhelmed by scattered marketing data",
                                    "Frustrated by repetitive manual tasks",
                                    "Pressured by clients for quick results",
                                    "Anxious about missing opportunities"
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
                                    "Monitors campaigns manually every day",
                                    "Exports metrics into messy spreadsheets",
                                    "Presents performance decks to clients",
                                    "Switches between 5+ dashboard tools daily"
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

               {/* CORE FEATURES GRID */}
               <section className="mb-10 md:mb-16">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Capabilities
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-4">Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Features</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">High-fidelity functionalities designed to empower users with intelligent automation.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Multi-Channel Integrations", desc: "Connects GA, Google Ads, FB, LinkedIn, YouTube, CRM, etc., eliminating fragmented workflows.", color: "#0D63CC", icon: Layers },
                        { num: "02", title: "Custom Dashboard Builder", desc: "Modular architecture with drag-and-drop widget library and templates for flexible reporting.", color: "#8B5CF6", icon: Layout },
                        { num: "03", title: "AI Recommendation Engine", desc: "Analyzes SEO, Social, and Ads data to automatically generate strategic optimization actions.", color: "#00DA99", icon: BrainCircuit },
                        { num: "04", title: "Automated Reporting", desc: "Scheduled, white-label PDF exports and client sharing with historical comparisons.", color: "#F59E0B", icon: FileText },
                        { num: "05", title: "Dynamic Budget Optimization", desc: "Identifies inefficient spending and recommends intelligent budget redistribution.", color: "#10B981", icon: PieChart },
                        { num: "06", title: "Real-Time Tracking", desc: "Monitor marketing performance continuously without manual data pulls.", color: "#3B82F6", icon: Activity }
                     ].map((feature, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                           className="glass-card p-6 md:p-8 rounded-[24px] group hover:-translate-y-2 relative overflow-hidden border-2 border-transparent hover:border-slate-200"
                        >
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
                              <feature.icon size={24} className="text-text-secondary opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: feature.color }} />
                           </div>
                           <h4 className="font-bold text-xl text-text-primary mb-3 relative z-10">{feature.title}</h4>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed relative z-10">{feature.desc}</p>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* DESIGN SYSTEM & VISUALS */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Visual Identity
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-4">Design System & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Visuals</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        A clean, modern, and consistent design system created to ensure accessibility, clarity, and a premium enterprise user experience.
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
                              { bg: 'bg-[#1E293B]', label: 'Dark', hex: '#1E293B' },
                              { bg: 'bg-[#F8FAFC]', label: 'Light', hex: '#F8FAFC', border: true },
                              { bg: 'bg-rose-500', label: 'Accent', hex: '#F43F5E' },
                              { bg: 'bg-amber-500', label: 'Warning', hex: '#F59E0B' }
                           ].map((color, i) => (
                              <div key={i} className="flex flex-col gap-2 group/color">
                                 <div className={`w-full aspect-square rounded-2xl ${color.bg} shadow-lg ${color.border ? 'border border-slate-200' : 'border border-white/20'} group-hover/color:scale-110 group-hover/color:shadow-2xl transition-all duration-300`} />
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
                              <span className="text-3xl font-black text-text-primary tracking-tight">Inter</span>
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
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-1/2 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Iconography
                        </h4>

                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { icon: Layout, color: "text-[#0D63CC]" },
                              { icon: LineChart, color: "text-[#00DA99]" },
                              { icon: Database, color: "text-rose-500" },
                              { icon: Activity, color: "text-[#0D63CC]" },
                              { icon: Search, color: "text-[#1E293B]" },
                              { icon: Zap, color: "text-amber-500" },
                              { icon: Target, color: "text-[#00DA99]" },
                              { icon: Briefcase, color: "text-[#0D63CC]" },
                              { icon: FileText, color: "text-rose-500" }
                           ].map((Item, i) => (
                              <div key={i} className="aspect-square rounded-2xl bg-white/50 border border-slate-200 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                 <Item.icon size={24} strokeWidth={1.5} className={`${Item.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Guiding Principles - Spans 12 cols */}
                     <div className="lg:col-span-12 glass-card rounded-[40px] p-6 lg:p-10 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 relative overflow-hidden mt-8">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTMsOTksMjA0LDAuMDUpIi8+PC9zdmc+')] opacity-50" />

                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3 relative z-10 justify-center">
                           <div className="w-2 h-2 bg-[#00DA99] rounded-full" /> Guiding Principles
                        </h4>

                        <div className="grid md:grid-cols-5 gap-6 relative z-10">
                           {[
                              { name: "Simplicity", desc: "Complex data must feel simple and digestible.", icon: Zap },
                              { name: "Scalability", desc: "Support agencies managing dozens of clients.", icon: Layers },
                              { name: "Actionability", desc: "Always provide actionable next steps.", icon: Target },
                              { name: "Flexibility", desc: "Allow complete dashboard customization.", icon: Layout },
                              { name: "Trust", desc: "Ensure users understand AI recommendations.", icon: Shield }
                           ].map((principle, i) => (
                              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl group/principle text-center flex flex-col items-center">
                                 <div className="w-12 h-12 rounded-full bg-[#0D63CC]/10 flex items-center justify-center mb-4 group-hover/principle:scale-110 transition-transform">
                                    <principle.icon size={20} className="text-[#0D63CC]" />
                                 </div>
                                 <h5 className="font-bold text-sm text-text-primary mb-2">{principle.name}</h5>
                                 <p className="text-xs text-text-secondary leading-relaxed font-medium">{principle.desc}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>

               {/* INFORMATION ARCHITECTURE */}
               <section className="mb-10 md:mb-16 bg-slate-50 rounded-[40px] p-8 md:p-12 lg:p-16 border border-slate-200">
                  <div className="mb-12 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Structuring Complex <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Marketing Intelligence Workflows</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">We focused on building an Information Architecture that includes a comprehensive Sitemap, Navigation hierarchy, and User flow diagrams to simplify the navigation of deeply complex analytical workflows.</p>
                  </div>
               </section>

               {/* USER FLOWS */}
               <section className="mb-10 md:mb-16 max-w-6xl mx-auto">
                  <div className="mb-12 text-center">
                     <h2 className="text-2xl md:text-3xl font-black text-text-primary mb-4">Core User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Flows</span></h2>
                  </div>
                  <div className="space-y-8">
                     {[
                        {
                           name: "Campaign Optimization Flow",
                           steps: [
                              { title: "CONNECT", desc: "Link platforms.", icon: Database, style: "dashed" },
                              { title: "ANALYZE", desc: "Process raw data.", icon: Activity, style: "dashed" },
                              { title: "INSIGHTS", desc: "AI pattern mapping.", icon: Brain, style: "solid" },
                              { title: "SUGGEST", desc: "Generate tactics.", icon: Lightbulb, style: "solid" },
                              { title: "OPTIMIZE", desc: "Apply improvements.", icon: CheckCircle2, style: "dark" }
                           ]
                        },
                        {
                           name: "Reporting Flow",
                           steps: [
                              { title: "COLLECT", desc: "Aggregate metrics.", icon: Target, style: "dashed" },
                              { title: "PROCESS", desc: "Clean & format.", icon: Layers, style: "dashed" },
                              { title: "VISUALIZE", desc: "Generate charts.", icon: LineChart, style: "solid" },
                              { title: "EXPORT", desc: "Create PDF/CSV.", icon: FileText, style: "solid" },
                              { title: "SHARE", desc: "Distribute to clients.", icon: Share2, style: "dark" }
                           ]
                        },
                        {
                           name: "AI Recommendation Flow",
                           steps: [
                              { title: "MONITOR", desc: "Track KPIs 24/7.", icon: Search, style: "dashed" },
                              { title: "DETECT", desc: "Identify anomalies.", icon: Target, style: "dashed" },
                              { title: "GENERATE", desc: "Formulate advice.", icon: Zap, style: "solid" },
                              { title: "ACTION", desc: "One-click apply.", icon: CheckSquare, style: "dark" }
                           ]
                        }
                     ].map((flow, i) => (
                        <div key={i} className="glass-card rounded-[32px] p-8 md:p-12 border border-slate-200 overflow-hidden">
                           <h4 className="font-black text-xl text-text-primary mb-12 text-center md:text-left">{flow.name}</h4>
                           <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-8 md:gap-0">

                              {/* Background Dashed Line (Desktop only) */}
                              <div className="hidden md:block absolute top-[56px] left-12 right-12 h-[2px] border-t-2 border-dashed border-slate-300 z-0" />

                              {flow.steps.map((step, j) => {
                                 let circleClasses = "w-28 h-28 rounded-full flex flex-col items-center justify-center text-center shadow-sm transition-transform duration-300 group-hover:-translate-y-2 z-10 mx-auto";
                                 let iconColor = "text-slate-600";
                                 let textColor = "text-text-primary";

                                 if (step.style === "dashed") {
                                    circleClasses += " bg-white border-2 border-dashed border-slate-300";
                                 } else if (step.style === "solid") {
                                    circleClasses += " bg-white border-2 border-solid border-[#0D63CC]";
                                    iconColor = "text-[#0D63CC]";
                                 } else if (step.style === "dark") {
                                    circleClasses += " bg-slate-900 border-none shadow-xl";
                                    iconColor = "text-white";
                                    textColor = "text-white";
                                 }

                                 return (
                                    <div key={j} className="flex flex-col items-center relative group w-full md:flex-1">

                                       {/* Arrow on dashed line */}
                                       {j < flow.steps.length - 1 && (
                                          <div className="hidden md:block absolute top-[46px] -right-4 text-slate-300 z-0 bg-slate-50 px-1">
                                             <ArrowRight size={20} />
                                          </div>
                                       )}

                                       {/* Circle Node */}
                                       <div className={circleClasses}>
                                          <step.icon size={24} className={`mb-1 ${iconColor}`} strokeWidth={1.5} />
                                          <span className={`text-[10px] font-black uppercase tracking-wider leading-tight ${textColor} px-2`}>
                                             {step.title}
                                          </span>
                                       </div>

                                       {/* Description Text */}
                                       <p className="text-center mt-4 text-xs font-bold text-text-secondary max-w-[120px] mx-auto">
                                          {step.desc}
                                       </p>
                                    </div>
                                 )
                              })}
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* DESIGN SYSTEM */}
               <section className="mb-10 md:mb-16 glass-card rounded-[40px] p-8 md:p-12 lg:p-16 border border-slate-200">
                  <div className="text-center mb-12">
                     <h2 className="text-2xl md:text-3xl font-black text-text-primary mb-4">Building a Scalable AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Product Design System</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto mb-8">Our system incorporates accessibility considerations, data visualization guidelines, component standards, and dashboard patterns.</p>

                     <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {["Chart library", "Filters", "KPI cards", "Tables", "Empty states"].map((tag, i) => (
                           <div key={i} className="glass-card p-4 rounded-2xl border border-slate-200 text-sm font-bold text-text-primary text-center">
                              {tag}
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* CHALLENGES */}
               <section className="mb-10 md:mb-16 max-w-5xl mx-auto">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold text-text-primary mb-4">Design Challenges</h2>
                  </div>
                  <div className="space-y-6">
                     {[
                        { num: "01", chal: "Making complex marketing data easy to understand.", sol: "Implemented progressive disclosure and modular cards." },
                        { num: "02", chal: "Building trust in AI-generated insights.", sol: "Provided transparent recommendations with supporting metrics." },
                        { num: "03", chal: "Supporting multiple client workflows.", sol: "Designed a flexible dashboard builder with robust widget library." }
                     ].map((item, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-4 p-6 glass-card rounded-2xl items-center text-center md:text-left">
                           <div className="w-12 h-12 flex-shrink-0 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 font-black text-lg border border-rose-100">
                              {item.num}
                           </div>
                           <div className="flex-1">
                              <h5 className="font-bold text-text-primary text-sm mb-1">Challenge: {item.chal}</h5>
                              <p className="text-sm text-text-secondary font-medium">Solution: {item.sol}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* SUCCESS METRICS */}
               <section className="mb-10 md:mb-16 glass-card rounded-[40px] p-8 md:p-12 lg:p-16 border border-slate-200">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Performance
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-4">Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Metrics</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Measuring the impact and efficiency improvements after deploying MarketVisionAI.</p>
                  </div>
                  <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                     {[
                        { val: "-80%", label: "Reporting Time", color: "text-[#00DA99]" },
                        { val: "70%", label: "Faster Setup", color: "text-[#0D63CC]" },
                        { val: "+65%", label: "Productivity", color: "text-[#00DA99]" },
                        { val: "+35%", label: "Client Retention", color: "text-[#0D63CC]" }
                     ].map((kpi, i) => (
                        <div key={i} className="text-center p-6 rounded-[24px] glass-card border border-slate-200 hover:border-[#0D63CC]/30 hover:shadow-xl transition-all duration-300">
                           <span className={`block text-3xl md:text-4xl font-black ${kpi.color} mb-2`}>{kpi.val}</span>
                           <span className="block text-xs font-bold text-text-secondary uppercase tracking-wider">{kpi.label}</span>
                        </div>
                     ))}
                  </div>
               </section>

               {/* OUTCOMES & CONCLUSION */}
               <section className="relative mb-10 md:mb-16 overflow-hidden">
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
                           <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-4">
                              Results & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Impact</span>
                           </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 mb-20">
                           {[
                              {
                                 title: "Business Strategy Achieved",
                                 items: ["Centralized reporting reduced agency operational costs by 40%", "Predictive AI models decreased client churn by 15%", "Automated insights enabled teams to manage 3x more clients", "Scalable dashboard architecture supported enterprise growth"],
                                 color: "text-[#0D63CC]",
                                 borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#0D63CC]/15",
                                 borderColor: "border-[#0D63CC]/30 hover:border-[#0D63CC]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#0D63CC] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(13,99,204,0.3)]" />
                              },
                              {
                                 title: "Impact & Outcome",
                                 items: ["Decreased reporting time by 80%", "Increased user productivity by 65%", "Improved client retention by 35%", "Enabled 5x faster insight generation"],
                                 color: "text-[#00DA99]",
                                 borderGlow: "from-[#00DA99]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#00DA99]/15",
                                 borderColor: "border-[#00DA99]/30 hover:border-[#00DA99]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#00DA99] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(0,218,153,0.3)]" />
                              },
                              {
                                 title: "Key Learnings",
                                 items: ["Agencies require modular scalability", "Automation drives true profitability", "AI recommendations build client trust", <span key="highlight">Users need <strong className="text-text-primary font-bold">actionable insights, not just data</strong></span>],
                                 color: "text-rose-500",
                                 borderGlow: "from-rose-500/30 via-white/10 to-transparent",
                                 innerGlow: "bg-rose-500/15",
                                 borderColor: "border-rose-500/30 hover:border-rose-500",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-rose-500 rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(244,63,94,0.3)]" />
                              }
                           ].map((box, i) => (
                              <div key={i} className={`relative border border-[#0D63CC]/20 hover:border-[#00DA99]/40 rounded-[22px] p-[2px] bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
                                 <div className={`bg-gradient-to-b ${box.gradientFill} backdrop-blur-3xl w-full h-full rounded-[18px] p-5 md:p-8 relative z-10 flex flex-col min-h-[300px] overflow-hidden`}>
                                    <motion.div
                                       animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                                       className={`absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none ${box.innerGlow}`}
                                    />
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
                              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#0D63CC]/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
                              <h4 className="font-bold text-2xl text-text-primary mb-6 flex items-center gap-4 relative z-10">
                                 <div className="w-8 h-8 bg-[#0D63CC] rounded flex-shrink-0" />
                                 Conclusion
                              </h4>
                              <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed relative z-10">
                                 MarketVision successfully evolved from a fragmented reporting tool into a comprehensive AI-powered marketing intelligence ecosystem, enabling agencies and businesses to transform raw data into actionable growth strategies.
                              </p>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </section>

               {/* ── WIREFRAMES (NEW) ─────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">Evolution</span>
                     </div>
                     <h2 className="text-4xl font-bold tracking-tight text-text-primary mb-4">From Wireframes to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Final Experience</span></h2>
                  </div>

                  <div className="relative py-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
                     {/* Decorative dashed connecting line */}
                     <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-slate-300 z-0" />
                     <div className="md:hidden absolute top-[10%] bottom-[10%] left-1/2 w-[2px] border-l-2 border-dashed border-slate-300 z-0 -translate-x-1/2" />

                     {[
                        { label: "Low Fidelity", icon: PenTool, color: "text-slate-500", bg: "bg-slate-100", offset: "md:-translate-y-8" },
                        { label: "Mid Fidelity", icon: Layout, color: "text-[#0D63CC]", bg: "bg-blue-50", offset: "md:translate-y-8" },
                        { label: "Final UI", icon: Sparkles, color: "text-[#00DA99]", bg: "bg-emerald-50", offset: "md:-translate-y-8" }
                     ].map((step, i) => (
                        <div key={i} className={`relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-full glass-card border-4 border-white shadow-[0_20px_50px_rgb(0,0,0,0.08)] flex flex-col items-center justify-center transition-all hover:scale-105 duration-500 bg-white/90 backdrop-blur-xl ${step.offset}`}>
                           <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-4`}>
                              <step.icon className={`w-8 h-8 ${step.color}`} />
                           </div>
                           <span className="font-bold text-slate-800 text-lg">{step.label}</span>
                        </div>
                     ))}
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* ── 20. VISUAL SHOWCASE ──────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Interface
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-4">High-Fidelity <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">UI Screens</span></h2>
                  </div>

                  <div className="grid gap-6">
                     <div className="lg:col-span-12">
                        <div className="relative aspect-[21/9] z-10 w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-500">
                           <Image
                              src="/images/marketvisionai/MarketVision.png"
                              alt="MarketVision UI"
                              fill
                              className="object-cover relative z-10 duration-1000"
                           />
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
                           <div className="inline-flex items-center justify-center w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#00DA99] to-[#0D63CC] shadow-md text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                              <Sparkles size={28} className="animate-pulse" />
                           </div>
                           <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4 drop-shadow-sm">
                              Explore the Full Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">on Figma</span>
                           </h2>
                           <p className="text-base md:text-lg text-text-secondary mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                              Explore the complete design system, interactive AI workflows, complex data visualizations, and high-fidelity dashboard prototypes behind MarketVisionAI.
                           </p>

                           <div className="flex flex-wrap justify-center gap-2 mb-10">
                              {["Enterprise Dashboards", "AI Interaction Patterns", "Data Visualization", "Component Library"].map((tag, i) => (
                                 <span key={i} className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-200/50 hover:bg-white transition-colors">
                                    <span className="text-[#0D63CC] mr-1">✓</span> {tag}
                                 </span>
                              ))}
                           </div>

                           <Link href="#" className="inline-flex items-center gap-3 px-8 py-4 btn-premium text-white rounded-full font-bold transition-all shadow-[0_20px_40px_-10px_rgba(13,99,204,0.25)] group text-base overflow-hidden relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                              <span className="relative z-10 text-white">Open in Figma</span>
                              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </motion.div>
                  </div>
               </section>

               {/* NEXT CASE STUDY NAVIGATION */}
               <section className="mt-6 md:mt-6 pt-6 md:pt-6 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4">Next Project</span>
                  <Link href="/case-studies/spendora" className="group flex flex-col items-center">
                     <h3 className="text-4xl md:text-5xl font-black text-text-primary group-hover:text-[#0D63CC] transition-colors duration-300 mb-6">
                        Spendora
                     </h3>
                     <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#0D63CC] group-hover:border-[#0D63CC] transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
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
