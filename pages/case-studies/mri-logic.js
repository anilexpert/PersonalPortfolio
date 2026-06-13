import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
   ArrowLeft, Brain, TrendingUp, Target, Shield, Zap,
   Search, Users, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase,
   MessageCircle, User, Award, ClipboardList, AlertTriangle,
   Database, BarChart2, Bell, Globe, Lock, Cpu
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GlowDivider from '../../components/GlowDivider'
import RotatingBadge from '../../components/RotatingBadge'

export default function MRILogicCaseStudy() {
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
   const PremiumPlaceholder = ({ icon: Icon, label, glowCls = "bg-[#06B6D4]", textCls = "text-[#06B6D4]", aspect = "aspect-[16/9]" }) => (
      <div className={`w-full ${aspect} glass-card rounded-3xl flex flex-col items-center justify-center overflow-hidden relative group transition-all duration-500 border-2 border-[#06B6D4]/10 hover:border-[#06B6D4]/40 shadow-lg`}>
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
            <title>MRI Logic™ | Case Study — AI-Assisted Medical Device Validation Platform</title>
            <meta name="description" content="MRI Logic™ is an AI-assisted medical device validation platform designed to streamline regulatory compliance, clinical validation, risk assessment, and testing workflows for MRI-compatible medical devices." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>

         <Navbar />

         <main className="min-h-screen pt-20 md:pt-24 pb-20 md:pb-32 relative z-10">

            {/* ── 1. PAGE HERO (Inner Banner) ───────────────────────────────────────────────── */}
            <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
               {/* bg glows */}
               <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#06B6D4]/10 blur-[150px] rounded-full pointer-events-none" />
               <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#0EA5E9]/10 blur-[150px] rounded-full pointer-events-none" />

               <div className="max-w-7xl mx-auto relative z-10 text-center">
                  {/* Breadcrumb */}
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex items-center justify-center gap-2 text-[10px] md:text-[12px] font-semibold text-text-secondary uppercase tracking-widest mb-4 md:mb-6">
                     <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                     <span>/</span>
                     <Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
                     <span>/</span>
                     <span className="text-[#06B6D4]">MRI Logic™</span>
                  </motion.div>

                  <motion.h1
                     initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                     className="text-[24px] sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 md:mb-6"
                  >
                     Case
                     <span className="bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] bg-clip-text text-transparent ml-2">Studies</span>
                  </motion.h1>

                  {/* Circular Rotating Badge */}
                  <div className="absolute top-2 right-[6%] hidden lg:block">
                     <RotatingBadge
                        icon={Award}
                        labels={["HEALTHTECH", "AI-POWERED", "MEDTECH"]}
                        iconColor="#06B6D4"
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
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-6"
                     >
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">
                           Case Study
                        </span>
                     </motion.div>
                     <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-[0.9] text-text-primary">
                        MRI Logic™
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        AI-Assisted <span className="bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] bg-clip-text text-transparent">Medical Device Validation Platform</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        Accelerating MRI Device Compliance, Risk Analysis, and Clinical Validation Through Artificial Intelligence.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-[#06B6D4] mb-1 opacity-50">Industry</p>
                        <p className="font-bold text-sm text-text-primary">Healthcare Technology</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-[#06B6D4] mb-1 opacity-50">Platform</p>
                        <p className="font-bold text-sm text-text-primary">Web Application</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-[#06B6D4] mb-1 opacity-50">Duration</p>
                        <p className="font-bold text-sm text-text-primary">8 Months</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-[#06B6D4] mb-1 opacity-50">Model</p>
                        <p className="font-bold text-sm text-text-primary">Enterprise SaaS</p>
                     </div>
                  </motion.div>
               </section>

               {/* MAIN HERO IMAGE / PLACEHOLDER */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-20 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[32px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                     {/* Top Right Glow Effect */}
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-30 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #0EA5E9 100%)' }}
                     />
                     <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-4">
                        <Cpu className="w-16 h-16 text-[#06B6D4] opacity-20" strokeWidth={1} />
                        <span className="font-bold tracking-[0.25em] text-[11px] uppercase text-text-secondary opacity-40 text-center px-8">
                           MRI Logic Dashboard Overview — Validation Workflows · Risk Assessments · AI Recommendations · Compliance Tracking · Device Performance Analytics · Approval Status Monitoring
                        </span>
                     </div>
                     {/* animated shimmer lines */}
                     <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 via-transparent to-[#0EA5E9]/5 pointer-events-none" />
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
                           MRI Logic™ is an AI-assisted medical device validation platform designed to streamline regulatory compliance, clinical validation, risk assessment, and testing workflows for MRI-compatible medical devices. The platform centralizes the entire validation lifecycle into a unified AI-powered ecosystem that automates evidence collection, identifies compliance gaps, predicts validation risks, and accelerates approval readiness while maintaining complete audit traceability.
                        </p>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Business Problem</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Medical device validation involves numerous stakeholders, strict regulatory requirements, and extensive documentation processes. Organizations faced critical operational challenges that fragmented their validation lifecycle and created compliance blind spots.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              "Fragmented validation processes across disconnected tools",
                              "Compliance delays from manual regulatory reviews",
                              "Thousands of validation artifacts requiring constant tracking",
                              "Risk visibility gaps — failures discovered too late",
                              "Inefficient collaboration between engineering & clinical teams",
                              "Extended approval cycles exceeding project schedules"
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-4 glass-card rounded-2xl">
                                 <div className="w-2 h-2 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                                 <span className="text-sm font-bold text-text-primary">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Solution Strategy</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                           MRI Logic was designed around four core pillars: an AI Validation Assistant providing compliance recommendations, gap analysis, and risk prediction; Intelligent Risk Management with automated scoring and failure prediction; a centralized Evidence Management system with automated tagging and audit trails; and Regulatory Intelligence featuring FDA monitoring, ISO tracking, and submission readiness scoring.
                        </p>
                     </div>
                  </div>
               </section>

               {/* PROJECT SUMMARY TABLE */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">
                           Project At a Glance
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Summary</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Key metadata and team structure powering the MRI Logic™ platform.</p>
                  </div>

                  <div className="glass-card rounded-[32px] overflow-hidden border-2 border-[#06B6D4]/10 hover:border-[#06B6D4]/30 transition-all duration-500 shadow-lg">
                     <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
                        {[
                           { label: "Industry", value: "Healthcare Technology" },
                           { label: "Product Type", value: "AI-Assisted Validation Platform" },
                           { label: "Platform", value: "Web Application" },
                           { label: "Users", value: "Quality Engineers, Regulatory Affairs, Clinical Researchers, Validation Specialists" },
                           { label: "Duration", value: "8 Months" },
                           { label: "Team", value: "PM, UX Designer, AI Engineers, Compliance Experts, Frontend & Backend Devs" },
                           { label: "Methodology", value: "Agile Scrum" },
                           { label: "Business Model", value: "Enterprise SaaS" },
                        ].map((row, i) => (
                           <div key={i} className="flex items-start gap-4 p-6 md:p-8 group hover:bg-[#06B6D4]/5 transition-colors duration-300">
                              <div className="w-2 h-2 rounded-full bg-[#06B6D4] mt-2 flex-shrink-0" />
                              <div>
                                 <p className="text-[11px] font-bold uppercase tracking-widest text-[#06B6D4] opacity-60 mb-1">{row.label}</p>
                                 <p className="font-semibold text-sm text-text-primary leading-relaxed">{row.value}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* KEY FEATURES GRID */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">
                           Core Value
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Core Features & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Smart Solutions</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">High-fidelity functionalities designed to accelerate validation workflows and ensure regulatory confidence.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Validation Program Management", desc: "Project setup, validation planning, milestone tracking, and resource allocation across programs.", color: "#06B6D4", icon: ClipboardList },
                        { num: "02", title: "AI Compliance Engine", desc: "Regulatory mapping, compliance gap detection, automated recommendations, and readiness scoring.", color: "#0EA5E9", icon: Brain },
                        { num: "03", title: "Risk Assessment Workspace", desc: "FMEA support, hazard analysis, risk matrices, and corrective action management.", color: "#8B5CF6", icon: AlertTriangle },
                        { num: "04", title: "Device Testing Hub", desc: "Test execution, evidence capture, result verification, and performance analytics.", color: "#10B981", icon: Activity },
                        { num: "05", title: "Collaboration Center", desc: "Team comments, review workflows, approval routing, and intelligent notifications.", color: "#F59E0B", icon: Users },
                        { num: "06", title: "Audit Readiness Module", desc: "Documentation verification, traceability matrix, audit reports, and submission packages.", color: "#F43F5E", icon: Shield }
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
                              <feature.icon size={20} className="text-text-secondary opacity-20" />
                           </div>
                           <h4 className="font-bold text-xl text-text-primary mb-3 relative z-10">{feature.title}</h4>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed mb-8 relative z-10">{feature.desc}</p>

                           {/* Decorative mini UI preview */}
                           <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
                              <feature.icon size={48} strokeWidth={0.8} style={{ color: `${feature.color}30` }} />
                              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* USER PERSONAS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">
                           User Research
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Personas</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        We identified three key user groups through stakeholder interviews. These personas guided our design decisions and feature prioritization across the validation lifecycle.
                     </p>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-8">
                     {[
                        {
                           name: "Sarah Mitchell",
                           role: "Regulatory Affairs Manager",
                           age: "42 · 15 Years Experience",
                           needs: ["Faster submission readiness", "Improved audit outcomes", "Reduced compliance risk"],
                           pains: ["Regulatory changes hard to track", "Large volumes of documentation", "Manual compliance reviews", "No real-time validation visibility"],
                           color: "#06B6D4",
                           icon: FileText
                        },
                        {
                           name: "Michael Rodriguez",
                           role: "Validation Engineer",
                           age: "36 · 10 Years Experience",
                           needs: ["Automated workflows", "Faster validation cycles", "Centralized project visibility"],
                           pains: ["Repetitive validation documentation", "Test evidence management", "Cross-team coordination delays"],
                           color: "#0EA5E9",
                           icon: Activity
                        },
                        {
                           name: "Dr. Emily Parker",
                           role: "Clinical Research Specialist",
                           age: "39 · 12 Years Experience",
                           needs: ["Evidence-driven decision making", "Streamlined collaboration", "Faster review processes"],
                           pains: ["Data fragmentation", "Manual report generation", "Approval bottlenecks"],
                           color: "#8B5CF6",
                           icon: Brain
                        }
                     ].map((persona, idx) => (
                        <motion.div
                           key={idx}
                           {...fadeIn}
                           className="glass-card rounded-[20px] p-6 md:p-8 group relative overflow-hidden flex flex-col border-2 border-[#06B6D4]/10 hover:border-[#06B6D4]/40 shadow-md"
                        >
                           {/* Dynamic Background Glow */}
                           <div
                              className="absolute -top-24 -right-24 w-80 h-80 blur-[100px] rounded-full transition-all duration-1000 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: persona.color }}
                           />

                           <div className="flex items-center gap-5 mb-8 relative z-10">
                              <div
                                 className="w-16 h-16 rounded-[16px] flex items-center justify-center flex-shrink-0 border-2"
                                 style={{ backgroundColor: `${persona.color}15`, borderColor: `${persona.color}30` }}
                              >
                                 <persona.icon size={28} strokeWidth={1.5} style={{ color: persona.color }} />
                              </div>
                              <div>
                                 <h4 className="font-bold text-xl text-gray-800 tracking-tight">{persona.name}</h4>
                                 <p className="text-xs font-semibold mt-1 opacity-70" style={{ color: persona.color }}>{persona.role}</p>
                                 <p className="text-[11px] text-text-secondary font-medium mt-0.5">{persona.age}</p>
                              </div>
                           </div>

                           <div className="space-y-4 relative z-10">
                              <div className="p-5 rounded-3xl bg-[#06B6D4]/5 border border-[#06B6D4]/20">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-3 flex items-center gap-2" style={{ color: persona.color }}>
                                    <CheckCircle2 size={14} strokeWidth={3} /> Goals
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.needs.map((n, i) => (
                                       <span key={i} className="px-3 py-1.5 bg-white/60 rounded-lg border border-[#06B6D4]/20 text-xs font-medium text-text-primary">
                                          {n}
                                       </span>
                                    ))}
                                 </div>
                              </div>

                              <div className="p-5 rounded-3xl bg-rose-50 border border-rose-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-rose-500 mb-3 flex items-center gap-2">
                                    <Activity size={14} strokeWidth={3} /> Pain Points
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

               {/* DESIGN PROCESS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-20 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">
                           Process
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design Approach & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Process</span></h2>
                     <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
                        A systematic approach to solving complex medical validation challenges through user-centric design and iterative refinement.
                     </p>
                  </div>

                  <div className="relative max-w-6xl mx-auto px-4">
                     {/* Dashed connector line (desktop) */}
                     <div className="hidden lg:block absolute top-16 left-24 right-24 h-1 z-0 pointer-events-none">
                        <svg width="100%" height="80" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none" className="opacity-30">
                           <path
                              d="M0,40 Q125,0 250,40 T500,40 T750,40 T1000,40"
                              stroke="#06B6D4"
                              strokeWidth="2"
                              strokeDasharray="8 8"
                              className="animate-dash"
                           />
                        </svg>
                     </div>

                     {/* DESKTOP VIEW (Horizontal) */}
                     <div className="hidden lg:flex items-start justify-between relative z-10">
                        {[
                           { num: "01", title: "Empathize", desc: "Stakeholder interviews, research, understanding validation pain points.", icon: Heart, type: "dashed" },
                           { num: "02", title: "Define", desc: "User personas, problem definition & compliance prioritization.", icon: Target, type: "dashed" },
                           { num: "03", title: "Ideate", desc: "Brainstorming, validation flows, information architecture.", icon: Lightbulb, type: "solid-light" },
                           { num: "04", title: "Design", desc: "Wireframes, enterprise UI system, accessibility compliance.", icon: PenTool, type: "solid-light" },
                           { num: "05", title: "Validate", desc: "Usability testing, expert review, iterative improvements.", icon: CheckCircle2, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className={`flex flex-col items-center w-48 relative ${i % 2 !== 0 ? 'translate-y-8' : ''} transition-transform duration-1000`}>
                              <motion.div
                                 {...fadeIn}
                                 transition={{ delay: i * 0.1 }}
                                 className={`w-32 h-32 rounded-full mb-8 flex flex-col items-center justify-center transition-all duration-500 group relative
                                 ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                                 ${step.type === 'solid-light' ? 'border-2 border-[#06B6D4] bg-[#E0F9FF] shadow-md' : ''}
                                 ${step.type === 'solid-dark' ? 'bg-[#0C4A6E] text-white shadow-xl' : ''}
                                 hover:scale-110 hover:shadow-2xl
                              `}
                              >
                                 <step.icon size={28} strokeWidth={step.type === 'solid-dark' ? 2 : 1.5} className={step.type === 'solid-dark' ? 'text-white' : 'text-[#0C4A6E]'} />
                                 <span className={`text-[11px] font-black uppercase tracking-widest mt-2 ${step.type === 'solid-dark' ? 'text-white' : 'text-[#0C4A6E]'}`}>
                                    {step.title}
                                 </span>
                              </motion.div>
                              <motion.p
                                 {...fadeIn}
                                 transition={{ delay: i * 0.1 + 0.2 }}
                                 className="text-[11px] text-text-secondary font-bold text-center leading-relaxed max-w-[140px]"
                              >
                                 {step.desc}
                              </motion.p>
                              {i < 4 && (
                                 <div className={`absolute top-16 -right-12 translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center pointer-events-none opacity-40
                                 ${i % 2 === 0 ? 'rotate-[15deg] translate-y-4' : '-rotate-[15deg] -translate-y-4'}
                              `}>
                                    <ArrowLeft size={18} className="text-slate-400 rotate-180" />
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>

                     {/* MOBILE VIEW (Vertical) */}
                     <div className="lg:hidden space-y-16">
                        {[
                           { num: "01", title: "Empathize", desc: "Stakeholder interviews, research, understanding validation pain points.", icon: Heart, type: "dashed" },
                           { num: "02", title: "Define", desc: "User personas, problem definition & compliance prioritization.", icon: Target, type: "dashed" },
                           { num: "03", title: "Ideate", desc: "Brainstorming, validation flows, information architecture.", icon: Lightbulb, type: "solid-light" },
                           { num: "04", title: "Design", desc: "Wireframes, enterprise UI system, accessibility compliance.", icon: PenTool, type: "solid-light" },
                           { num: "05", title: "Validate", desc: "Usability testing, expert review, iterative improvements.", icon: CheckCircle2, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className="flex flex-col items-center relative">
                              <div className={`w-32 h-32 rounded-full mb-6 flex flex-col items-center justify-center 
                              ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                              ${step.type === 'solid-light' ? 'border-2 border-[#06B6D4] bg-[#E0F9FF] shadow-md' : ''}
                              ${step.type === 'solid-dark' ? 'bg-[#0C4A6E] text-white shadow-xl' : ''}
                           `}>
                                 <step.icon size={28} strokeWidth={1.5} className={step.type === 'solid-dark' ? 'text-white' : 'text-[#0C4A6E]'} />
                                 <span className={`text-[11px] font-black uppercase tracking-widest mt-2 ${step.type === 'solid-dark' ? 'text-white' : 'text-[#0C4A6E]'}`}>
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
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">
                           Visual Identity
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design System & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Visuals</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        A clean, enterprise-grade design system created to ensure WCAG compliance, clarity, and a premium medical-grade user experience.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4">

                     {/* Colors */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#06B6D4]/10 hover:border-[#06B6D4]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#06B6D4]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#06B6D4] rounded-full" /> Color Palette
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { bg: 'bg-[#06B6D4]', label: 'Cyan', hex: '#06B6D4' },
                              { bg: 'bg-[#0EA5E9]', label: 'Sky', hex: '#0EA5E9' },
                              { bg: 'bg-[#0C4A6E]', label: 'Deep', hex: '#0C4A6E' },
                              { bg: 'bg-[#BAE6FD]', label: 'Light', hex: '#BAE6FD' },
                              { bg: 'bg-emerald-500', label: 'Success', hex: '#10B981' },
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

                     {/* Typography */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#0EA5E9]/10 hover:border-[#06B6D4]/40 shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0EA5E9]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0EA5E9] rounded-full" /> Typography
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
                           <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                              <span className="text-2xl font-black text-text-primary tracking-tight" style={{ fontFamily: 'monospace' }}>IBM Plex</span>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Secondary</span>
                           </div>
                           <div className="flex justify-between text-xs font-medium text-text-secondary">
                              <span>Regular</span>
                              <span className="font-bold">Bold</span>
                              <span className="font-black">Black</span>
                           </div>
                        </div>
                     </div>

                     {/* Iconography */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-emerald-500/10 hover:border-[#06B6D4]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-1/2 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-emerald-500 rounded-full" /> Iconography
                        </h4>

                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { icon: ClipboardList, color: "text-[#06B6D4]" },
                              { icon: Brain, color: "text-[#0EA5E9]" },
                              { icon: Shield, color: "text-emerald-500" },
                              { icon: AlertTriangle, color: "text-[#06B6D4]" },
                              { icon: Database, color: "text-[#0C4A6E]" },
                              { icon: BarChart2, color: "text-amber-500" },
                              { icon: Globe, color: "text-[#06B6D4]" },
                              { icon: Lock, color: "text-[#0EA5E9]" },
                              { icon: Bell, color: "text-rose-500" }
                           ].map((Item, i) => (
                              <div key={i} className="aspect-square rounded-2xl bg-white/50 border border-slate-200 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                 <Item.icon size={24} strokeWidth={1.5} className={`${Item.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* UI Components Preview */}
                     <div className="lg:col-span-12 glass-card rounded-[40px] p-6 lg:p-10 border-2 border-[#06B6D4]/10 hover:border-[#06B6D4]/40 shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-8 min-h-[300px]">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoNiwyMTIsMjEyLDAuMDUpIi8+PC9zdmc+')] opacity-50" />

                        {/* Component 1: Compliance Metric */}
                        <div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 border border-slate-200 relative z-10 hover:-translate-y-2 transition-transform duration-500">
                           <div className="flex justify-between items-center mb-6">
                              <div className="w-10 h-10 rounded-full bg-[#06B6D4]/10 flex items-center justify-center">
                                 <Shield size={18} className="text-[#06B6D4]" />
                              </div>
                              <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">+68% Improved</span>
                           </div>
                           <div className="space-y-1">
                              <span className="text-sm font-semibold text-text-secondary">Compliance Score</span>
                              <h3 className="text-3xl font-bold text-text-primary">94.7%</h3>
                           </div>
                        </div>

                        {/* Component 2: Risk Summary */}
                        <div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 border border-slate-200 relative z-10 hover:-translate-y-2 transition-transform duration-500 delay-100">
                           <h4 className="text-sm font-bold text-text-primary mb-4">Active Risk Items</h4>
                           <div className="space-y-3">
                              {["Critical · 2 items", "High · 5 items"].map((i, idx) => (
                                 <div key={idx} className="flex items-center gap-4">
                                    <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-rose-500' : 'bg-amber-500'}`} />
                                    <div className="flex-1 space-y-1">
                                       <div className="h-2 bg-slate-100 rounded w-full" />
                                       <p className="text-xs text-text-secondary">{i}</p>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>

                        {/* Component 3: Validation Progress */}
                        <div className="w-full lg:w-1/3 bg-[#0C4A6E] rounded-3xl p-6 relative z-10 hover:-translate-y-2 transition-transform duration-500 delay-200 overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-[#06B6D4]/20 blur-[30px] rounded-full pointer-events-none" />
                           <h4 className="text-sm font-semibold text-white mb-6 relative z-10">Validation Progress</h4>
                           <div className="flex items-end gap-2 h-24 relative z-10">
                              {[55, 80, 40, 95, 70, 85, 100].map((h, i) => (
                                 <div key={i} className="flex-1 bg-white/20 rounded-t-sm hover:bg-[#06B6D4] transition-colors" style={{ height: `${h}%` }} />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* EMPATHY MAP */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">
                           Research Insight
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Empathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Mapping</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Visualizing validation specialist attitudes and behaviors to align our team on a deep understanding of end users.</p>
                  </div>

                  <div className="max-w-6xl mx-auto relative glass-card rounded-[40px] md:rounded-[60px] p-6 md:p-12 lg:p-16 overflow-hidden shadow-[0_20px_60px_-15px_rgba(6,182,212,0.2)] border border-[#06B6D4]/20 hover:border-[#06B6D4]/50 transition-all duration-700 bg-white/30 backdrop-blur-3xl group shadow-[inset_0_0_100px_rgba(255,255,255,0.6)]">

                     {/* Ambient glows */}
                     <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#06B6D4]/15 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#06B6D4]/20 transition-all duration-1000 -translate-x-1/4 -translate-y-1/4" />
                     <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0EA5E9]/15 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#0EA5E9]/20 transition-all duration-1000 translate-x-1/4 translate-y-1/4" />

                     {/* Decorative dashed X background */}
                     <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                        <svg width="100%" height="100%">
                           <line x1="0" y1="0" x2="100%" y2="100%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="12 12" className="opacity-50" />
                           <line x1="100%" y1="0" x2="0" y2="100%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="12 12" className="opacity-50" />
                        </svg>
                     </div>

                     <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 md:gap-12 items-center">

                        {/* THINKS */}
                        <div className="md:col-start-2 md:row-start-1 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#06B6D4]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <motion.div
                                 animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                 className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#06B6D4]/15"
                              />
                              <div className="flex flex-col items-center gap-4 mb-4 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#06B6D4]/30 group-hover/card:border-[#06B6D4] transition-colors duration-500">
                                    <Brain className="w-6 h-6 text-[#06B6D4]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#06B6D4]">think</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    '"Are we missing a compliance requirement?"',
                                    '"I need a single source of truth for all validation evidence."',
                                    '"There must be a smarter way to track regulatory changes."',
                                    '"How do I know this device is truly safe to submit?"'
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors hover:border-white/60">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#06B6D4] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* SAYS */}
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
                                    '"Our validation data is scattered across five different tools."',
                                    '"We need better visibility into our compliance gaps."',
                                    '"Every submission cycle takes longer than the last."',
                                    '"I cannot trust manual tracking for critical submissions."'
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors hover:border-white/60">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F59E0B] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* PROFILE CIRCLE */}
                        <div className="hidden md:flex md:col-start-2 md:row-start-2 justify-center items-center relative z-10 w-full h-full min-h-[240px]">
                           <div className="absolute inset-0 bg-[#06B6D4]/20 blur-[60px] rounded-full animate-pulse z-0" />
                           <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0EA5E9] p-2 shadow-[0_0_50px_rgba(6,182,212,0.3)] relative z-10 hover:scale-105 transition-transform duration-700">
                              <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(6,182,212,0.2)]">
                                 <User className="w-16 h-16 text-[#06B6D4] opacity-90" strokeWidth={1.5} />
                              </div>
                           </div>
                        </div>

                        {/* FEELS */}
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
                                    "Overwhelmed by regulatory complexity and documentation volume",
                                    "Anxious about missing critical compliance requirements",
                                    "Frustrated with disconnected tools and manual processes",
                                    "Motivated to deliver safe, approved devices on time"
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors hover:border-white/60">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500 opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* DOES */}
                        <div className="md:col-start-2 md:row-start-3 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#06B6D4]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <motion.div
                                 animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                 className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#06B6D4]/15"
                              />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#06B6D4]/30 group-hover/card:border-[#06B6D4] transition-colors duration-500">
                                    <Activity className="w-6 h-6 text-[#06B6D4]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#06B6D4]">do</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "Manually compiles evidence across spreadsheets and emails",
                                    "Runs multiple review cycles to check compliance status",
                                    "Coordinates with 3+ teams without a centralized workspace",
                                    "Spends hours generating submission-ready documentation"
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors hover:border-white/60">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#06B6D4] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                     </div>
                  </div>
               </section>

               {/* USER JOURNEY MAP */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">
                           Journey Mapping
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Journey Map</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">The complete validation lifecycle from planning through regulatory approval.</p>
                  </div>

                  <div className="glass-card rounded-[32px] overflow-hidden border-2 border-[#06B6D4]/10 hover:border-[#06B6D4]/30 transition-all duration-500 shadow-lg">
                     {/* Header row */}
                     <div className="grid grid-cols-4 bg-gradient-to-r from-[#06B6D4]/10 to-[#0EA5E9]/10 border-b border-slate-200/60">
                        {["Stage", "Activities", "Pain Points", "Opportunities"].map((h, i) => (
                           <div key={i} className="p-5 border-r border-slate-200/60 last:border-r-0">
                              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#06B6D4]">{h}</span>
                           </div>
                        ))}
                     </div>
                     {[
                        { stage: "Planning", activities: "Define validation strategy", pain: "Limited visibility", opportunity: "AI planning assistant" },
                        { stage: "Testing", activities: "Execute protocols", pain: "Manual tracking", opportunity: "Automated test monitoring" },
                        { stage: "Documentation", activities: "Gather evidence", pain: "Time-consuming", opportunity: "AI document generation" },
                        { stage: "Review", activities: "Compliance review", pain: "High workload", opportunity: "Intelligent validation checks" },
                        { stage: "Submission", activities: "Regulatory approval", pain: "Approval delays", opportunity: "Submission readiness score" },
                     ].map((row, i) => (
                        <div key={i} className={`grid grid-cols-4 border-b border-slate-200/60 last:border-b-0 hover:bg-[#06B6D4]/5 transition-colors duration-300 ${i % 2 === 0 ? 'bg-white/40' : 'bg-white/20'}`}>
                           <div className="p-5 border-r border-slate-200/60">
                              <span className="font-bold text-sm text-[#06B6D4]">{row.stage}</span>
                           </div>
                           <div className="p-5 border-r border-slate-200/60">
                              <span className="text-sm text-text-secondary font-medium">{row.activities}</span>
                           </div>
                           <div className="p-5 border-r border-slate-200/60">
                              <span className="text-sm text-rose-500 font-semibold">{row.pain}</span>
                           </div>
                           <div className="p-5">
                              <span className="text-sm text-emerald-600 font-semibold">{row.opportunity}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* GOALS & OBJECTIVES */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">
                           Objectives
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Goals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Objectives</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Aligning business imperatives with user-centric design goals to create measurable impact.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     {[
                        {
                           title: "Business Goals",
                           items: ["Reduce validation cycle duration by 40%", "Improve audit readiness across programs", "Increase regulatory submission success rate", "Minimize compliance risks", "Accelerate product launch timelines"],
                           color: "#06B6D4",
                           borderGlow: "from-[#06B6D4]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#06B6D4]/15",
                           borderColor: "border-[#06B6D4]/30",
                           icon: <TrendingUp size={24} strokeWidth={2} className="text-[#06B6D4] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "User Goals",
                           items: ["Centralize validation activities", "Automate evidence collection", "Receive AI-driven compliance recommendations", "Improve collaboration across departments", "Simplify approval workflows"],
                           color: "#0EA5E9",
                           borderGlow: "from-[#0EA5E9]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#0EA5E9]/15",
                           borderColor: "border-[#0EA5E9]/30",
                           icon: <Users size={24} strokeWidth={2} className="text-[#0EA5E9] group-hover:scale-110 transition-transform duration-500" />
                        }
                     ].map((box, i) => (
                        <div key={i} className={`relative rounded-[24px] p-[2px] border border-slate-200 bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-2xl w-full h-full rounded-[22px] p-6 md:p-8 relative z-10 flex flex-col overflow-hidden">
                              <motion.div
                                 animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                                 className={`absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none ${box.innerGlow}`}
                              />
                              <div className="flex flex-col gap-4 mb-6 relative z-20">
                                 <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center border-2 ${box.borderColor}`}>
                                    {box.icon}
                                 </div>
                                 <h5 className="font-semibold text-[20px]" style={{ color: box.color }}>{box.title}</h5>
                              </div>
                              <ul className="space-y-2 flex-1 relative z-20">
                                 {box.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 group/li">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: box.color, opacity: 0.6 }} />
                                       <span className="text-[13px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* INFORMATION ARCHITECTURE */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">
                           Architecture
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Information <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Architecture</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">A structured navigation hierarchy supporting all validation workflows, teams, and regulatory activities.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                     {[
                        { module: "Dashboard", color: "#06B6D4", icon: Layout, items: ["Overview KPIs", "AI Insights Feed", "Compliance Score"] },
                        { module: "Validation Programs", color: "#0EA5E9", icon: ClipboardList, items: ["Program Setup", "Milestone Tracking", "Resource Allocation"] },
                        { module: "Device Registry", color: "#8B5CF6", icon: Database, items: ["Device Catalog", "Compatibility Matrix", "Performance Data"] },
                        { module: "Risk Assessments", color: "#F59E0B", icon: AlertTriangle, items: ["FMEA Support", "Hazard Analysis", "Risk Matrices"] },
                        { module: "AI Compliance Assistant", color: "#10B981", icon: Brain, items: ["Gap Detection", "Recommendations", "Readiness Scoring"] },
                        { module: "Evidence Repository", color: "#F43F5E", icon: FileText, items: ["Central Storage", "Auto-Tagging", "Version Control"] },
                        { module: "Audit Center", color: "#06B6D4", icon: Shield, items: ["Traceability Matrix", "Audit Reports", "Submission Packages"] },
                        { module: "Regulatory Tracking", color: "#0EA5E9", icon: Globe, items: ["FDA Monitoring", "ISO Standards", "Compliance Alerts"] },
                        { module: "Team Collaboration", color: "#8B5CF6", icon: Users, items: ["Review Workflows", "Approval Routing", "Notifications"] },
                     ].map((item, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           transition={{ delay: i * 0.06, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                           className="glass-card p-5 rounded-[20px] group hover:-translate-y-1 relative overflow-hidden border border-slate-200/60 hover:border-[#06B6D4]/40 transition-all duration-500"
                        >
                           <div className="absolute -top-10 -right-10 w-24 h-24 blur-[40px] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: item.color }} />
                           <div className="flex items-center gap-3 mb-4">
                              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                                 <item.icon size={18} strokeWidth={1.5} style={{ color: item.color }} />
                              </div>
                              <h5 className="font-bold text-sm text-text-primary">{item.module}</h5>
                           </div>
                           <ul className="space-y-1.5">
                              {item.items.map((sub, j) => (
                                 <li key={j} className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: item.color, opacity: 0.5 }} />
                                    {sub}
                                 </li>
                              ))}
                           </ul>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* SWOT ANALYSIS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">
                           Strategic Analysis
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">SWOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Analysis</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Evaluating MRI Logic's competitive stance to ensure viability and identify strategic risks.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        {
                           title: "Strengths",
                           items: ["AI-powered validation automation", "Regulatory intelligence engine", "Centralized documentation system"],
                           color: "text-[#06B6D4]",
                           borderGlow: "from-[#06B6D4]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#06B6D4]/15",
                           borderColor: "border-[#06B6D4]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Briefcase size={24} strokeWidth={2} className="text-[#06B6D4] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Weaknesses",
                           items: ["Initial learning curve for new users", "Enterprise onboarding complexity", "Integration dependency on legacy systems"],
                           color: "text-[#F59E0B]",
                           borderGlow: "from-[#F59E0B]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#F59E0B]/15",
                           borderColor: "border-[#F59E0B]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Activity size={24} strokeWidth={2} className="text-[#F59E0B] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Opportunities",
                           items: ["Growing MedTech market demand", "AI adoption in healthcare rising", "Global compliance demand increasing"],
                           color: "text-[#0EA5E9]",
                           borderGlow: "from-[#0EA5E9]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#0EA5E9]/15",
                           borderColor: "border-[#0EA5E9]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Search size={24} strokeWidth={2} className="text-[#0EA5E9] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Threats",
                           items: ["Regulatory landscape changes rapidly", "Emerging specialized competitors", "Data security and privacy concerns"],
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
                                 <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center border-2 ${box.borderColor}`}>
                                    {box.icon}
                                 </div>
                                 <h5 className={`font-semibold text-[20px] ${box.color}`}>{box.title}</h5>
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
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">
                           Interface
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Overview</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">A seamless enterprise experience across all modules — from compliance dashboard to risk assessments and submission workflows.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {/* Top row */}
                     <div className="lg:col-span-2">
                        <PremiumPlaceholder aspect="aspect-[4/3]" label="Main Compliance Dashboard" glowCls="bg-[#06B6D4]" textCls="text-[#06B6D4]" icon={Layout} />
                     </div>
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Risk Assessment Matrix" glowCls="bg-[#0EA5E9]" textCls="text-[#0EA5E9]" icon={AlertTriangle} />
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="AI Compliance Assistant" glowCls="bg-[#06B6D4]" textCls="text-[#06B6D4]" icon={Brain} />

                     {/* Bottom row */}
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Evidence Repository" glowCls="bg-[#0EA5E9]" textCls="text-[#0EA5E9]" icon={Database} />
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Audit Readiness Report" glowCls="bg-[#06B6D4]" textCls="text-[#06B6D4]" icon={Shield} />
                     <div className="lg:col-span-2">
                        <PremiumPlaceholder aspect="aspect-[4/3]" label="Validation Program Workspace" glowCls="bg-[#0EA5E9]" textCls="text-[#0EA5E9]" icon={ClipboardList} />
                     </div>
                  </div>
               </section>

               {/* METRICS & RESULTS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">
                           Impact
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Metrics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Results</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Measurable outcomes that transformed MRI device validation and compliance management.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                     {[
                        { value: "42%", label: "Reduction in Validation Cycle Time", color: "#06B6D4", icon: TrendingUp },
                        { value: "55%", label: "Faster Documentation Reviews", color: "#0EA5E9", icon: FileText },
                        { value: "68%", label: "Reduction in Compliance Gaps", color: "#10B981", icon: CheckCircle2 },
                        { value: "47%", label: "Improvement in Audit Readiness", color: "#8B5CF6", icon: Shield },
                        { value: "35%", label: "Faster Regulatory Submissions", color: "#F59E0B", icon: Zap },
                        { value: "91%", label: "Task Completion Rate", color: "#06B6D4", icon: Target },
                     ].map((metric, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                           className="glass-card p-6 md:p-8 rounded-[24px] group hover:-translate-y-2 relative overflow-hidden border border-slate-200/60 hover:border-[#06B6D4]/40 transition-all duration-500"
                        >
                           <div className="absolute -top-16 -right-16 w-40 h-40 blur-[50px] rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0" style={{ backgroundColor: metric.color }} />
                           <div className="flex items-center justify-between mb-6 relative z-10">
                              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${metric.color}15`, border: `1px solid ${metric.color}30` }}>
                                 <metric.icon size={20} strokeWidth={1.5} style={{ color: metric.color }} />
                              </div>
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: metric.color, boxShadow: `0 0 8px ${metric.color}` }} />
                           </div>
                           <p className="text-4xl font-black mb-2 relative z-10" style={{ color: metric.color }}>{metric.value}</p>
                           <p className="text-sm font-bold text-text-secondary relative z-10 leading-relaxed">{metric.label}</p>
                        </motion.div>
                     ))}
                  </div>

                  {/* Secondary metrics */}
                  <div className="grid sm:grid-cols-3 gap-4">
                     {[
                        { value: "89%", label: "User Satisfaction Score", color: "#06B6D4" },
                        { value: "76%", label: "Reduction in Manual Effort", color: "#0EA5E9" },
                        { value: "63%", label: "Faster Risk Identification", color: "#10B981" },
                     ].map((metric, i) => (
                        <div key={i} className="glass-card p-5 rounded-[20px] flex items-center gap-4 border border-slate-200/60 hover:border-[#06B6D4]/30 transition-all duration-300">
                           <p className="text-3xl font-black" style={{ color: metric.color }}>{metric.value}</p>
                           <p className="text-sm font-semibold text-text-secondary">{metric.label}</p>
                        </div>
                     ))}
                  </div>
               </section>

               {/* OUTCOMES & CONCLUSION */}
               <section className="relative mb-20 overflow-hidden">
                  <motion.div
                     {...fadeIn}
                     className="glass-card rounded-[24px] p-6 md:p-10 lg:p-14 relative overflow-hidden group shadow-3xl border-2 border-[#06B6D4]/20 hover:border-[#06B6D4]/40"
                  >
                     {/* High-Fidelity Ambient Patterns */}
                     <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#06B6D4]/10 blur-[150px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]" />
                     <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0EA5E9]/5 blur-[120px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]" />

                     <div className="relative z-10">
                        <div className="mb-12 text-center max-w-4xl mx-auto">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                              <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">
                                 Epilogue
                              </span>
                           </div>
                           <h2 className="text-4xl font-bold text-text-primary mb-4">
                              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Future</span> of Medical Device Validation.
                           </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 mb-20">
                           {[
                              {
                                 title: "What Worked Well",
                                 items: ["Early stakeholder involvement", "AI explainability features", "Evidence-centered workflows", "Strong compliance foundation"],
                                 color: "text-[#06B6D4]",
                                 borderGlow: "from-[#06B6D4]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#06B6D4]/15",
                                 borderColor: "border-[#06B6D4]/30 hover:border-[#06B6D4]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#06B6D4] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(6,182,212,0.3)]" />
                              },
                              {
                                 title: "Lessons Learned",
                                 items: ["Regulatory users require high transparency", "Trust is critical for AI adoption", "Traceability drives enterprise confidence", <span key="highlight">Workflow <strong className="text-text-primary font-bold">flexibility improves adoption</strong></span>],
                                 color: "text-[#0EA5E9]",
                                 borderGlow: "from-[#0EA5E9]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#0EA5E9]/15",
                                 borderColor: "border-[#0EA5E9]/30 hover:border-[#0EA5E9]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#0EA5E9] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(14,165,233,0.3)]" />
                              },
                              {
                                 title: "Future Roadmap",
                                 items: ["Predictive regulatory change monitoring", "Generative validation report creation", "Clinical trial integration", "Multi-region compliance intelligence"],
                                 color: "text-rose-500",
                                 borderGlow: "from-rose-500/30 via-white/10 to-transparent",
                                 innerGlow: "bg-rose-500/15",
                                 borderColor: "border-rose-500/30 hover:border-rose-500",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-rose-500 rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(244,63,94,0.3)]" />
                              }
                           ].map((box, i) => (
                              <div key={i} className={`relative border-1 border-[#06B6D4]/20 hover:border-[#06B6D4]/40 rounded-[22px] p-[2px] bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
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
                                       <h4 className="font-bold text-xl text-text-primary leading-tight">{box.title}</h4>
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
                           <div className="p-6 md:p-8 lg:p-10 glass-card rounded-[24px] border-2 border-[#06B6D4]/10 hover:border-[#06B6D4]/40 shadow-2xl transition-all duration-500 relative overflow-hidden group">
                              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#06B6D4]/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
                              <h4 className="font-bold text-2xl text-text-primary mb-6 flex items-center gap-4 relative z-10">
                                 <div className="w-8 h-8 bg-[#06B6D4] rounded flex-shrink-0" />
                                 Final Solution
                              </h4>
                              <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed relative z-10">
                                 MRI Logic™ transformed a traditionally fragmented, document-heavy validation process into a centralized AI-assisted platform that improves compliance visibility, accelerates validation workflows, and enables medical device organizations to achieve faster approval readiness with confidence. The final product successfully combines AI intelligence, regulatory expertise, and enterprise-grade workflow management into a scalable validation ecosystem designed for the future of medical device compliance.
                              </p>
                           </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-slate-100 pt-10">
                           <Link href="/#projects" className="btn-premium px-12 py-5 text-sm">
                              <span>View Next Project</span>
                              <ArrowLeft size={18} className="rotate-180" />
                           </Link>
                           <p className="text-xs font-bold text-text-secondary uppercase tracking-widest opacity-40">
                              Thank you for reading the MRI Logic™ Case Study.
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
