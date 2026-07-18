import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, Brain, TrendingUp, Target, Smartphone, Shield, Zap,
   Search, Users, Grid, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase, HandCoins,
   PieChart, Handshake, MessageCircle, User, Award, BookOpen, Calendar, BookOpenCheck,
   GraduationCap, Bell, Server, Shuffle, Wind, Feather, ClipboardList,
   Smile, History, Keyboard, Stethoscope, FileSearch, Building2, Wallet, Lock, Layers,
   Database, Clock, FileBadge, BarChart3, LineChart, Banknote, Receipt, Folder, MapPin, Sparkles, Rocket, Compass, ShieldCheck, Eye, AlertTriangle, UserCheck, ArrowRight, ArrowDown,
   MonitorPlay, Info, Command, LayoutDashboard, Monitor
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GlowDivider from '../../components/GlowDivider'
import RotatingBadge from '../../components/RotatingBadge'

export default function CarenovaSystemsCaseStudy() {
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

   // Premium Glass Placeholder Component (from OasisPad)
   const PremiumPlaceholder = ({ icon: Icon, label, glowColor = "#0D63CC", textCls = "text-[#0D63CC]", aspect = "aspect-[16/9]" }) => (
      <div className={`w-full ${aspect} glass-card rounded-3xl flex flex-col items-center justify-center overflow-hidden relative group transition-all duration-500 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-lg`}>
         <div
            className="absolute -top-24 -right-24 w-64 h-64 blur-[60px] rounded-full transition-all duration-700 group-hover:scale-[1.5] group-hover:opacity-20 opacity-10 pointer-events-none z-0"
            style={{ backgroundColor: glowColor }}
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
            <title>Carenova | Intelligent Facility & Compliance Management</title>
            <meta name="description" content="Carenova Systems Intelligent Facility & Compliance Management for Multi-Facility Healthcare Organizations." />
         </Head>

         <Navbar />

         <main className="min-h-screen pt-20 md:pt-24 pb-20 md:pb-32 relative z-10">

            {/* ── 1. PAGE HERO (Inner Banner) ───────────────────────────────────────────────── */}
            <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
               {/* bg glows */}
               <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#0D63CC]/10 blur-[150px] rounded-full pointer-events-none" />
               <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#00DA99]/10 blur-[150px] rounded-full pointer-events-none" />

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

                  {/* Circular Rotating Badge */}
                  <div className="absolute top-2 right-[6%] hidden lg:block">
                     <RotatingBadge
                        icon={Stethoscope}
                        labels={["HEALTHCARE", "SAAS", "ENTERPRISE"]}
                        iconColor="#0D63CC"
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
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-6"
                     >
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Case Study
                        </span>
                     </motion.div>
                     <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-[0.9] text-text-primary">
                        Carenova Systems
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        Designing a Scalable  <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Healthcare Operations & Compliance Platform</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        Carenova is a healthcare operations platform designed for residential care organizations to streamline compliance, workforce management, facility operations, and regulatory reporting across multiple facilities.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:pl-10 lg:border-l border-slate-200/60 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Industry</p>
                        <p className="font-bold text-sm text-text-primary">Healthcare SaaS</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Platform</p>
                        <p className="font-bold text-sm text-text-primary">Web Application</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Team</p>
                        <p className="font-bold text-sm text-text-primary">Product Manager, Developers, Stakeholders</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Duration</p>
                        <p className="font-bold text-sm text-text-primary">8 Months</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Responsibilities</p>
                        <p className="font-bold text-sm text-text-primary">UX Strategy, IA, UX/UI, Design System, Prototyping</p>
                     </div>

                  </motion.div>
               </section>

               {/* MAIN HERO IMAGE */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-16 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[24px] overflow-hidden group-hover:shadow-lg transition-all duration-700 border border-white/60 shadow-sm">
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-20 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #00DA99 0%, #0D63CC 100%)' }}
                     />
                     <Image
                        src="/images/carenova/CarenovaPlatformInterface.png"
                        alt="Carenova Platform Interface"
                        fill
                        className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                     />
                  </div>
               </motion.section>

               {/* OVERVIEW & THE INDUSTRY PROBLEM */}
               <section className="mb-12 md:mb-16 lg:mb-20 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                           <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                              02. Overview
                           </span>
                        </div>
                     </div>
                     <div className="lg:col-span-9">
                        <h2 className="text-4xl font-bold text-text-primary mb-4">Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Summary</span></h2>
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-6">
                           Residential care organizations were struggling with fragmented workflows, manual compliance tracking, disconnected communication, and inefficient facility operations. Carenova was designed to centralize these operations into a unified healthcare platform, enabling organizations to improve efficiency, maintain compliance, and deliver better care outcomes.
                        </p>
                        <div className="p-8 glass-card border-l-4 border-[#0D63CC] bg-[#0D63CC]/5 rounded-[24px]">
                           <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                              <Target className="text-[#0D63CC]" size={24} /> Unified Ecosystem
                           </h4>
                           <p className="text-text-secondary font-medium">
                              The goal was to create a unified operational ecosystem connecting Compliance, Facility Operations, Audits, Incident Management, and Workforce coordination into a single intelligent platform.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="mb-12 md:mb-16 lg:mb-20">
                     <GlowDivider />
                  </div>

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
                           <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">
                              The Challenge
                           </span>
                        </div>
                     </div>
                     <div className="lg:col-span-9">
                        <h2 className="text-4xl font-bold text-text-primary mb-4">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Challenge</span></h2>
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Healthcare administrators faced several operational challenges:
                        </p>
                        <ul className="list-disc pl-5 text-text-secondary font-medium leading-relaxed mb-8 space-y-2">
                           <li>Compliance activities were managed manually.</li>
                           <li>Critical documentation was spread across multiple systems.</li>
                           <li>Facility teams lacked real-time operational visibility.</li>
                           <li>Regulatory reporting consumed significant administrative effort.</li>
                           <li>Communication between caregivers, administrators, and guardians was fragmented.</li>
                        </ul>
                        <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-4 mt-12 mb-8">
                           {/* Dashed line */}
                           <div className="hidden md:block absolute top-[64px] left-[10%] right-[10%] h-[2px] border-t-[2px] border-dashed border-rose-200 z-0" />

                           {[
                              { title: "FRAGMENTED", desc: "Systems.", icon: Layers, style: "dashed" },
                              { title: "MANUAL", desc: "Processes.", icon: ClipboardList, style: "dashed" },
                              { title: "RISKS", desc: "Compliance.", icon: AlertTriangle, style: "solid" },
                              { title: "BURDEN", desc: "Administrative.", icon: Clock, style: "solid" },
                              { title: "QUALITY", desc: "Reduced Care.", icon: Heart, style: "dark" }
                           ].map((step, j, arr) => {
                              let circleClasses = "w-[120px] h-[120px] lg:w-[130px] lg:h-[130px] rounded-full flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-2 z-10 mx-auto relative bg-white";
                              let iconColor = "text-rose-950";
                              let textColor = "text-rose-950";

                              if (step.style === "dashed") {
                                 circleClasses += " border-[2px] border-dashed border-rose-300 shadow-sm";
                                 iconColor = "text-rose-600";
                                 textColor = "text-rose-900";
                              } else if (step.style === "solid") {
                                 circleClasses += " bg-rose-50 border-[2px] border-solid border-rose-500 shadow-md";
                                 iconColor = "text-rose-600";
                                 textColor = "text-rose-600";
                              } else if (step.style === "dark") {
                                 circleClasses += " !bg-rose-900 border-none shadow-xl";
                                 iconColor = "text-white";
                                 textColor = "text-white";
                              }

                              return (
                                 <div key={j} className="flex flex-col items-center relative group w-full md:flex-1">
                                    {/* Arrow on line */}
                                    {j < arr.length - 1 && (
                                       <div className="hidden md:flex absolute top-[55px] lg:top-[60px] -right-4 w-8 h-8 items-center justify-center z-0 bg-transparent">
                                          <ArrowRight size={20} className="text-rose-300" strokeWidth={2.5} />
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
                              );
                           })}
                        </div>
                     </div>
                  </div>
               </section>

               {/* PRODUCT GOALS & SUCCESS METRICS */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
                           <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">
                              Objectives
                           </span>
                        </div>
                     </div>
                     <div className="lg:col-span-9">
                        <h2 className="text-4xl font-bold text-text-primary mb-8">Product Goals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Success Metrics</span></h2>

                        <div className="w-full glass-card rounded-[16px] overflow-hidden">
                           <div className="grid grid-cols-2 bg-[#0D63CC]/10 px-6 py-3 border-b border-[#0D63CC]/20">
                              <div className="font-bold text-text-primary uppercase tracking-wider text-sm">Goal</div>
                              <div className="font-bold text-text-primary uppercase tracking-wider text-sm">Success Metric</div>
                           </div>
                           <div className="flex flex-col">
                              {[
                                 { goal: "Reduce manual compliance effort", metric: "-40%" },
                                 { goal: "Improve operational visibility", metric: "Centralized dashboards" },
                                 { goal: "Streamline documentation", metric: "Digital workflows" },
                                 { goal: "Improve communication", metric: "Unified notifications" },
                                 { goal: "Support scalability", metric: "Multi-facility architecture" }
                              ].map((item, i) => (
                                 <div key={i} className="grid grid-cols-2 px-6 py-3 border-b border-slate-200/50 hover:bg-slate-50/50 transition-colors">
                                    <div className="text-text-secondary text-sm font-medium">{item.goal}</div>
                                    <div className="text-text-primary text-sm font-bold">{item.metric}</div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* DISCOVERY PHASE & KEY INSIGHTS */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-4">
                        <div className="sticky top-24">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                              <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                                 Discovery
                              </span>
                           </div>
                           <h3 className="text-3xl font-bold text-text-primary mb-6">Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Discovery</span></h3>
                           <p className="text-text-secondary leading-relaxed font-medium mb-8">
                              To understand operational challenges and user expectations, research was conducted with multiple user groups across the organization.
                           </p>

                           <div className="space-y-3">
                              <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-3">Stakeholders Interviewed</h4>
                              {[
                                 { group: "Leadership", roles: "Operators, CMH Agencies", icon: Building2 },
                                 { group: "Administration", roles: "Facility Administrators", icon: Users },
                                 { group: "Compliance", roles: "Compliance Officers, State Reviewers", icon: ShieldCheck },
                                 { group: "Care Team", roles: "Care Coordinators", icon: Heart }
                              ].map((stakeholder, idx) => (
                                 <div key={idx} className="flex items-center gap-4 p-4 glass-card rounded-2xl">
                                    <div className="w-10 h-10 rounded-xl bg-[#0D63CC]/10 flex items-center justify-center text-[#0D63CC]">
                                       <stakeholder.icon size={18} />
                                    </div>
                                    <div>
                                       <p className="text-xs font-bold text-text-primary">{stakeholder.group}</p>
                                       <p className="text-[10px] text-text-secondary font-medium">{stakeholder.roles}</p>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="lg:col-span-8 space-y-6">
                        {[
                           {
                              id: "Insight #1",
                              title: "Fragmented Workflows (92%)",
                              desc: "92% reported challenges managing compliance activities across multiple disconnected systems.",
                              flow: ["Compliance Request", "Spreadsheet", "Email", "Missing Data", "Audit Risk"]
                           },
                           {
                              id: "Insight #2",
                              title: "Tool Fatigue (84%)",
                              desc: "84% used more than three disconnected tools daily to perform their essential job functions.",
                              flow: []
                           },
                           {
                              id: "Insight #3",
                              title: "Audit Preparation Delays (78%)",
                              desc: "78% experienced significant delays and stress during critical audit preparation due to missing documentation.",
                              flow: []
                           }
                        ].map((insight, i) => (
                           <motion.div key={i} {...fadeIn} className="p-8 glass-card rounded-[24px] border-l-4 border-[#00DA99]">
                              <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest mb-2 block">{insight.id}</span>
                              <h4 className="text-lg font-bold text-text-primary mb-2">{insight.title}</h4>
                              <p className="text-text-secondary text-sm font-medium leading-relaxed mb-4">{insight.desc}</p>

                              {insight.flow.length > 0 && (
                                 <div className="flex flex-wrap items-center gap-2">
                                    {insight.flow.map((step, stepIdx) => (
                                       <div key={stepIdx} className="flex items-center gap-2">
                                          <span className="px-3 py-1.5 bg-[#0D63CC]/5 border border-[#0D63CC]/20 rounded-lg text-xs font-bold text-[#0D63CC]">
                                             {step}
                                          </span>
                                          {stepIdx < insight.flow.length - 1 && (
                                             <ArrowLeft size={14} className="text-slate-300 rotate-180" />
                                          )}
                                       </div>
                                    ))}
                                 </div>
                              )}
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* USER PERSONAS */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Target Audience
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Personas</span></h2>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                     {[
                        {
                           name: "Rajesh Verma",
                           role: "Facility Administrator",
                           desc: "Rajesh oversees daily facility operations and ensures organizational compliance standards are maintained.",
                           goals: ["Monitor facility performance", "Ensure regulatory compliance", "Improve team productivity"],
                           pains: ["Manual reporting processes", "Limited operational visibility", "Duplicate administrative tasks"],
                           motivation: "Reduce administrative workload, Improve operational efficiency, Gain real-time insights",
                           color: "#0D63CC"
                        },
                        {
                           name: "Anjali Mehta",
                           role: "Compliance Officer",
                           desc: "Anjali is responsible for maintaining regulatory compliance and preparing organizations for audits.",
                           goals: ["Maintain compliance standards", "Simplify audit preparation", "Reduce compliance risks"],
                           pains: ["Tracking deadlines manually", "Missing documentation", "Limited reporting capabilities"],
                           motivation: "Improve audit readiness, Minimize regulatory risk, Increase process efficiency",
                           color: "#00DA99"
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
                              <div className="w-16 h-16 rounded-[16px] overflow-hidden flex-shrink-0 relative border-2 border-white shadow-2xl flex items-center justify-center" style={{ backgroundColor: `${persona.color}15` }}>
                                 <User size={28} style={{ color: persona.color }} strokeWidth={1.5} />
                              </div>
                              <div>
                                 <h4 className="font-bold text-2xl text-gray-800 tracking-tight">{persona.name}</h4>
                                 <p className="text-xs font-medium text-text-secondary mt-1 opacity-80">{persona.role}</p>
                              </div>
                           </div>

                           <p className="text-base text-gray-800 leading-relaxed mb-8 relative z-10 font-medium">
                              &ldquo;{persona.desc}&rdquo;
                           </p>

                           <div className="space-y-4 relative z-10">
                              <div className="p-5 rounded-2xl bg-[#0D63CC]/5 border border-[#0D63CC]/20">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#0D63CC] mb-3 flex items-center gap-2">
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
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-rose-500 mb-3 flex items-center gap-2">
                                    <Activity size={13} strokeWidth={3} /> Pain Points
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

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* EMPATHY MAP */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Research Insight
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Empathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Map</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Visualizing stakeholder attitudes and behaviors to align design decisions with real user experiences.</p>
                  </div>

                  <div className="max-w-6xl mx-auto relative glass-card rounded-[40px] md:rounded-[60px] p-6 md:p-12 lg:p-16 overflow-hidden shadow-[0_20px_60px_-15px_rgba(13,99,204,0.2)] border border-[#0D63CC]/20 hover:border-[#00DA99]/50 transition-all duration-700 bg-white/30 backdrop-blur-3xl group shadow-[inset_0_0_100px_rgba(255,255,255,0.6)]">
                     <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0D63CC]/15 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#0D63CC]/20 transition-all duration-1000 -translate-x-1/4 -translate-y-1/4" />
                     <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00DA99]/15 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#00DA99]/20 transition-all duration-1000 translate-x-1/4 translate-y-1/4" />
                     <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                        <svg width="100%" height="100%">
                           <line x1="0" y1="0" x2="100%" y2="100%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="12 12" className="opacity-50" />
                           <line x1="100%" y1="0" x2="0" y2="100%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="12 12" className="opacity-50" />
                        </svg>
                     </div>

                     <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 md:gap-12 items-center">
                        {/* THINKS */}
                        <div className="md:col-start-2 md:row-start-1 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#0D63CC]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#0D63CC]/15" />
                              <div className="flex flex-col items-center gap-4 mb-4 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#0D63CC]/30 group-hover/card:border-[#0D63CC] transition-colors duration-500">
                                    <Brain className="w-6 h-6 text-[#0D63CC]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#0D63CC]">think</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[`"I need everything in one place."`, `"Preparing for audits shouldn't take weeks."`, `"What if critical deadlines are missed?"`, `"There must be a smarter way to manage compliance."`].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0D63CC] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* SAYS */}
                        <div className="md:col-start-1 md:row-start-2 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#F59E0B]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-500 hover:-translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#F59E0B]/15" />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#F59E0B]/30 group-hover/card:border-[#F59E0B] transition-colors duration-500">
                                    <MessageCircle className="w-6 h-6 text-[#F59E0B]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#F59E0B]">say</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[`"We are drowning in paperwork."`, `"I can't track which facility is compliant right now."`, `"We need a unified system for everything."`].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F59E0B] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* CENTER CIRCLE */}
                        <div className="hidden md:flex md:col-start-2 md:row-start-2 justify-center items-center relative z-10 w-full h-full min-h-[240px]">
                           <div className="absolute inset-0 bg-[#00DA99]/20 blur-[60px] rounded-full animate-pulse z-0" />
                           <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#0D63CC] to-[#00DA99] p-2 shadow-[0_0_50px_rgba(13,99,204,0.3)] relative z-10 hover:scale-105 transition-transform duration-700">
                              <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(13,99,204,0.2)]">
                                 <ShieldCheck className="w-16 h-16 text-[#0D63CC] opacity-90" strokeWidth={1.5} />
                              </div>
                           </div>
                        </div>

                        {/* FEELS */}
                        <div className="md:col-start-3 md:row-start-2 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-rose-500/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-500 hover:translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-end text-center md:text-right relative overflow-hidden">
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[-20%] right-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-rose-500/15" />
                              <div className="flex flex-col items-center md:items-end gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-rose-500/30 group-hover/card:border-rose-500 transition-colors duration-500">
                                    <Heart className="w-6 h-6 text-rose-500" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-rose-500">feel</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {["Overwhelmed by complexity and manual tracking", "Frustrated with inefficiencies and duplicate entries", "Concerned about compliance failures and audits"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500 opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* DOES */}
                        <div className="md:col-start-2 md:row-start-3 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#00DA99]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-500 hover:translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#00DA99]/15" />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#00DA99]/30 group-hover/card:border-[#00DA99] transition-colors duration-500">
                                    <Activity className="w-6 h-6 text-[#00DA99]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#00DA99]">do</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {["Reviews multiple systems daily for status updates", "Creates manual compliance reports in Excel", "Coordinates with multiple departments via email"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors">
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

               {/* INFORMATION ARCHITECTURE */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Structure
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Structuring Complex <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Healthcare Workflows</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        The platform architecture was designed to support multiple user roles, facility hierarchies, and compliance workflows while maintaining clarity and usability.
                     </p>
                  </div>

                  <div className="max-w-8xl mx-auto">
                     <div className="mb-12 relative aspect-[21/9] w-full rounded-[24px] overflow-hidden glass-card shadow-lg border border-[#0D63CC]/10">
                        <Image
                           src="/images/carenova/InformationArchitecture.png"
                           alt="Carenova Platform Interface"
                           fill
                           className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                        />
                     </div>
                     <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 glass-card rounded-2xl border border-[#0D63CC]/10 text-center flex flex-col items-center">
                           <Layers className="text-[#0D63CC] mb-4" size={32} />
                           <h4 className="text-lg font-bold text-text-primary mb-2">User Role Hierarchy Diagram</h4>
                           <p className="text-sm text-text-secondary font-medium">Maps permissions across Caregivers, Administrators, and Compliance Reviewers.</p>
                        </div>
                        <div className="p-6 glass-card rounded-2xl border border-[#0D63CC]/10 text-center flex flex-col items-center">
                           <Building2 className="text-[#0D63CC] mb-4" size={32} />
                           <h4 className="text-lg font-bold text-text-primary mb-2">Facility Relationship Diagram</h4>
                           <p className="text-sm text-text-secondary font-medium">Illustrates the connection between corporate headquarters and local facilities.</p>
                        </div>
                     </div>
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* USER FLOWS */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           User Flows
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Key User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Flows</span></h2>
                  </div>
                  <div className="max-w-6xl mx-auto space-y-10">
                     {[
                        {
                           title: "Incident Reporting Flow",
                           color: "#0D63CC",
                           steps: [
                              { title: "CAREGIVER", desc: "Initial report.", icon: User, style: "dashed" },
                              { title: "SUPERVISOR", desc: "Review & escalate.", icon: Eye, style: "dashed" },
                              { title: "COMPLIANCE", desc: "Regulatory check.", icon: ShieldCheck, style: "solid" },
                              { title: "CMH", desc: "Notify CMH.", icon: Building2, style: "solid" },
                              { title: "GUARDIAN", desc: "Notify guardian.", icon: Heart, style: "dark" }
                           ]
                        },
                        {
                           title: "New Resident Admission Flow",
                           color: "#00DA99",
                           steps: [
                              { title: "INQUIRY", desc: "Initial contact.", icon: MessageCircle, style: "dashed" },
                              { title: "ASSESS", desc: "Health evaluation.", icon: Stethoscope, style: "dashed" },
                              { title: "APPROVAL", desc: "Sign-off.", icon: CheckCircle2, style: "solid" },
                              { title: "DOCUMENT", desc: "Required forms.", icon: FileText, style: "solid" },
                              { title: "ROOM", desc: "Facility assignment.", icon: MapPin, style: "solid" },
                              { title: "PLAN", desc: "Care plan creation.", icon: Heart, style: "dark" }
                           ]
                        },
                        {
                           title: "Staff Scheduling Flow",
                           color: "#8B5CF6",
                           steps: [
                              { title: "CREATE", desc: "Draft schedule.", icon: Calendar, style: "dashed" },
                              { title: "ASSIGN", desc: "Allocate shifts.", icon: Users, style: "dashed" },
                              { title: "APPROVE", desc: "Manager approval.", icon: CheckCircle2, style: "solid" },
                              { title: "NOTIFY", desc: "Send alerts.", icon: Bell, style: "solid" },
                              { title: "ATTEND", desc: "Track attendance.", icon: Clock, style: "dark" }
                           ]
                        }
                     ].map((flow, idx) => (
                        <div key={idx} className="p-8 md:p-12 glass-card rounded-[24px] border-l-4 shadow-sm" style={{ borderColor: flow.color }}>
                           <h4 className="text-xl md:text-2xl font-bold mb-12 text-center" style={{ color: flow.color }}>{flow.title}</h4>

                           <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-4">
                              {/* Dashed connector line */}
                              {/* <div
                                 className="hidden md:block absolute top-[64px] left-[8%] right-[8%] h-[2px] border-t-[2px] border-dashed z-0 opacity-40"
                                 style={{ borderColor: flow.color }}
                              /> */}

                              {flow.steps.map((step, j, arr) => {
                                 const isDashed = step.style === "dashed";
                                 const isSolid = step.style === "solid";
                                 const isDark = step.style === "dark";

                                 return (
                                    <div key={j} className="flex flex-col items-center relative group w-full md:flex-1">
                                       {/* Arrow on connector line */}
                                       {j < arr.length - 1 && (
                                          <div className="hidden md:flex absolute top-[55px] lg:top-[60px] -right-4 w-8 h-8 items-center justify-center z-0 bg-transparent">
                                             <ArrowRight size={20} style={{ color: flow.color }} className="opacity-50" strokeWidth={2.5} />
                                          </div>
                                       )}

                                       {/* Circle Node */}
                                       <div
                                          className={`w-[120px] h-[120px] lg:w-[130px] lg:h-[130px] rounded-full flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-2 z-10 mx-auto relative ${isDashed ? "bg-white border-[2px] border-dashed shadow-sm" :
                                             isSolid ? "border-[2px] border-solid shadow-md" :
                                                "border-none shadow-xl"
                                             }`}
                                          style={{
                                             borderColor: isDashed || isSolid ? flow.color : 'transparent',
                                             backgroundColor: isSolid ? `${flow.color}10` : isDark ? flow.color : 'white',
                                             color: isDark ? 'white' : flow.color,
                                          }}
                                       >
                                          <step.icon size={28} className="mb-3" strokeWidth={1.5} />
                                          <span className="text-[12px] font-bold uppercase tracking-wider leading-tight px-2">
                                             {step.title}
                                          </span>
                                       </div>

                                       {/* Description Text */}
                                       <p className="text-center mt-5 text-[13px] font-medium text-text-secondary max-w-[130px] mx-auto">
                                          {step.desc}
                                       </p>
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* DESIGNING THE WORKFLOW (User Journey + Process) */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           UX Transformation
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Journey</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        The design goal was to transform compliance resolution into a guided, step-by-step experience, significantly reducing cognitive load.
                     </p>
                  </div>

                  <div className="max-w-6xl mx-auto">
                     {/* Workflow Timeline Grid */}
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                           { step: "01", title: "Login", desc: "Access the unified system.", icon: Lock },
                           { step: "02", title: "Dashboard", desc: "View real-time KPIs.", icon: Layout },
                           { step: "03", title: "Alert", desc: "Receive compliance warning.", icon: AlertTriangle },
                           { step: "04", title: "Review", desc: "Examine deficiency details.", icon: Eye },
                           { step: "05", title: "Assign", desc: "Delegate corrective action.", icon: UserCheck },
                           { step: "06", title: "Resolve", desc: "Execute resolution workflow.", icon: CheckSquare },
                           { step: "07", title: "Generate", desc: "Create traceability report.", icon: FileText },
                           { step: "08", title: "Audit", desc: "Prepare for final audit.", icon: ShieldCheck }
                        ].map((s, i) => (
                           <div key={i} className="p-6 glass-card rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform flex flex-col">
                              <div className="text-[#0D63CC]/10 font-black text-5xl absolute -top-2 -right-2 transition-transform group-hover:scale-110">{s.step}</div>
                              <div className="w-10 h-10 rounded-xl bg-[#0D63CC]/5 flex items-center justify-center mb-4 relative z-10">
                                 <s.icon size={20} className="text-[#0D63CC]" />
                              </div>
                              <h4 className="text-sm font-bold text-text-primary mb-2 relative z-10">{s.title}</h4>
                              <p className="text-xs text-text-secondary font-medium relative z-10">{s.desc}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* DASHBOARDS & REPORTING */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  {/* Executive Dashboard */}
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                     <div className="lg:col-span-5 space-y-8">
                        <div>
                           <h3 className="text-3xl font-bold text-text-primary mb-4">Executive Dashboard <span className="text-[#0D63CC]">Experience</span></h3>
                           <p className="text-lg text-text-secondary font-medium leading-relaxed">
                              Designed role-based dashboards that provide healthcare leaders with real-time operational visibility across facilities, compliance activities, workforce status, and critical alerts.
                           </p>
                        </div>
                        <div className="space-y-4">
                           {[
                              { q: "What is happening?", a: "Facility KPIs (Performance, Utilization)" },
                              { q: "What is the compliance status?", a: "Audit Readiness & Deficiencies" },
                              { q: "What requires attention?", a: "Operational Alerts (Risks, Missing Data)" }
                           ].map((item, i) => (
                              <div key={i} className="p-5 glass-card rounded-xl border-l-4 border-[#00DA99]">
                                 <p className="text-xs font-bold uppercase tracking-wider text-[#00DA99] mb-1">{item.q}</p>
                                 <p className="text-sm font-bold text-text-primary">{item.a}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="lg:col-span-7">
                        <div className="relative aspect-[16/12] w-full rounded-[24px] overflow-hidden glass-card shadow-2xl p-2 border border-[#0D63CC]/10">
                           <PremiumPlaceholder aspect="aspect-full h-full" label="Dashboard Analytics Interface" icon={BarChart3} glowColor="#0D63CC" />
                           <Image
                              src="/images/carenova/ExecutiveDashboard2.png"
                              alt="Carenova Platform Interface"
                              fill
                              className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                           />
                        </div>
                     </div>
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* 10. DESIGN PROCESS */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Methodology
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">My Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Process</span></h2>
                     <p className="text-lg text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto">
                        A systematic, user-centric approach to solving complex enterprise challenges through iterative refinement. Clients want to understand how you work, so here is a breakdown of the core design process.
                     </p>
                  </div>

                  <div className="relative max-w-6xl mx-auto px-4">
                     <div className="hidden lg:block absolute top-16 left-24 right-24 h-1 z-0 pointer-events-none">
                        <svg width="100%" height="80" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none" className="opacity-30">
                           <path d="M0,40 Q125,0 250,40 T500,40 T750,40 T1000,40" stroke="#0D63CC" strokeWidth="2" strokeDasharray="8 8" className="animate-dash" />
                        </svg>
                     </div>

                     {/* DESKTOP VIEW */}
                     <div className="hidden lg:flex items-start justify-between relative z-10">
                        {[
                           { num: "01", title: "Discover", desc: "Stakeholder interviews.", icon: Search, type: "dashed" },
                           { num: "02", title: "Define", desc: "Requirements & workflows.", icon: Target, type: "dashed" },
                           { num: "03", title: "Architect", desc: "Information architecture.", icon: Layers, type: "solid-light" },
                           { num: "04", title: "Design", desc: "Wireframes & UI.", icon: PenTool, type: "solid-light" },
                           { num: "05", title: "Validate", desc: "Feedback iterations.", icon: CheckCircle2, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className={`flex flex-col items-center w-48 relative ${i % 2 !== 0 ? 'translate-y-8' : ''} transition-transform duration-1000`}>
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
                              <motion.p {...fadeIn} transition={{ delay: i * 0.1 + 0.2 }} className="text-[11px] text-text-secondary font-bold text-center leading-relaxed max-w-[140px]">
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

                     {/* MOBILE VIEW */}
                     <div className="lg:hidden space-y-16">
                        {[
                           { title: "Discover", desc: "Stakeholder interviews.", icon: Search, type: "dashed" },
                           { title: "Define", desc: "Requirements & workflows.", icon: Target, type: "dashed" },
                           { title: "Architect", desc: "Information architecture.", icon: Layers, type: "solid-light" },
                           { title: "Design", desc: "Wireframes & UI.", icon: PenTool, type: "solid-light" },
                           { title: "Validate", desc: "Feedback iterations.", icon: CheckCircle2, type: "solid-dark" }
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
                              <p className="text-[11px] text-text-secondary font-bold text-center max-w-[200px]">{step.desc}</p>
                              {i < 4 && <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-slate-200" />}
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* DESIGN SYSTEM */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4">
                        <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">
                           Visual Identity
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Building a Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Design System</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        A unified design system was created to ensure complex operational data feels approachable, trustworthy, and extremely accessible. We focused heavily on Data Visualization components (charts, gauges), Status Indicators (warning vs. critical alerts), and Enterprise Data Tables (bulk actions, complex filtering).
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4">
                     {/* Colors */}
                     <div className="lg:col-span-4 glass-card rounded-[24px] p-6 lg:p-8 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Color Strategy
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { bg: 'bg-[#951A1F]', label: 'Primary', hex: '#951A1F' },
                              { bg: 'bg-[#00DA99]', label: 'Secondary', hex: '#00DA99' },
                              { bg: 'bg-[#282360]', label: 'Depth', hex: '#282360' },
                              { bg: 'bg-[#10B981]', label: 'Success', hex: '#10B981' },
                              { bg: 'bg-[#F59E0B]', label: 'Warning', hex: '#F59E0B' },
                              { bg: 'bg-rose-500', label: 'Error', hex: '#F43F5E' }
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
                     <div className="lg:col-span-4 glass-card rounded-[24px] p-6 lg:p-8 border-2 border-[#00DA99]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
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

                     {/* Iconography */}
                     <div className="lg:col-span-4 glass-card rounded-[24px] p-6 lg:p-8 border-2 border-rose-500/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-1/2 right-0 w-32 h-32 bg-rose-500/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-rose-500 rounded-full" /> Iconography
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { icon: Layout, color: "text-[#0D63CC]" },
                              { icon: GraduationCap, color: "text-[#00DA99]" },
                              { icon: CheckSquare, color: "text-rose-500" },
                              { icon: Bell, color: "text-[#0D63CC]" },
                              { icon: Calendar, color: "text-[#F59E0B]" },
                              { icon: Smartphone, color: "text-[#00DA99]" },
                              { icon: BarChart3, color: "text-[#282360]" },
                              { icon: MessageCircle, color: "text-rose-500" },
                              { icon: Shield, color: "text-[#0D63CC]" }
                           ].map((Item, i) => (
                              <div key={i} className="aspect-square rounded-2xl bg-white/50 border border-slate-200 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                 <Item.icon size={24} strokeWidth={1.5} className={`${Item.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* WIREFRAMES */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Evolution
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">From Wireframes to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Final Experience</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        Moving from low-fidelity structural planning to high-fidelity visual execution.
                     </p>
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

               {/* 12. UX DECISIONS */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#EC4899] uppercase tracking-widest">
                           Key Choices
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#8B5CF6]">Decisions</span></h2>
                     <p className="text-lg text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto">
                        Strategic design decisions made to balance enterprise complexity with intuitive, consumer-grade usability.
                     </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                     {[
                        { title: "Progressive Disclosure", desc: "Revealing complex compliance data only when necessary to reduce cognitive load on dashboard overviews.", icon: Layout },
                        { title: "Contextual Guidance", desc: "Providing in-line help and intelligent recommendations within forms to prevent validation errors.", icon: Info },
                        { title: "Keyboard Navigation", desc: "Optimizing all data-entry tables and workflows for power users who rely heavily on keyboard shortcuts.", icon: Command }
                     ].map((item, idx) => (
                        <div key={idx} className="p-8 md:p-10 bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl text-center group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1">
                           <div className="w-20 h-20 mx-auto bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[24px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-slate-600 group-hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)]">
                              <item.icon size={32} strokeWidth={1.5} />
                           </div>
                           <h4 className="text-[22px] font-bold text-text-primary mb-4 tracking-tight">{item.title}</h4>
                           <p className="text-[15px] font-medium text-slate-500/90 leading-relaxed max-w-[260px] mx-auto">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* 13. THE SOLUTION */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Final Product
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Solution</span></h2>
                     <p className="text-lg text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto">
                        A unified platform that simplifies compliance, empowers facility staff, and provides executives with crystal-clear operational visibility.
                     </p>
                  </div>
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[24px] overflow-hidden group-hover:shadow-lg transition-all duration-700 border border-white/60 shadow-sm">
                     {/* <PremiumPlaceholder aspect="aspect-video w-full h-full" label="Main Platform Dashboard" icon={LayoutDashboard} glowColor="#00DA99" /> */}
                     <Image
                        src="/images/carenova/TheSolution.png"
                        alt="Carenova Platform Interface"
                        fill
                        className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                     />
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* 14. CORE PLATFORM CAPABILITIES */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-widest">
                           Capabilities
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Core Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0D63CC]">Capabilities</span></h2>
                  </div>
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                     <div className="lg:col-span-5 space-y-8">
                        {[
                           { title: "Compliance Management", desc: "Automates regulatory workflows, documentation tracking, and audit readiness across facilities." },
                           { title: "Workforce Management", desc: "Simplifies scheduling, staff oversight, training compliance, and workforce coordination." },
                           { title: "Guardian Communication", desc: "Enables secure and transparent communication between facilities, caregivers, and families." },
                           { title: "Incident Management", desc: "Standardizes incident reporting, review workflows, and regulatory notifications." }
                        ].map((feature, i) => (
                           <div key={i} className="flex gap-4">
                              <div className="w-12 h-12 rounded-xl bg-[#0D63CC]/10 text-[#0D63CC] flex-shrink-0 flex items-center justify-center">
                                 <CheckCircle2 size={24} />
                              </div>
                              <div>
                                 <h4 className="text-xl font-bold text-text-primary mb-2">{feature.title}</h4>
                                 <p className="text-text-secondary font-medium leading-relaxed">{feature.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                     <div className="lg:col-span-7">
                        <div className="relative aspect-[16/12] w-full rounded-[24px] overflow-hidden glass-card shadow-xl p-2 border border-slate-200">
                           <Image
                              src="/images/carenova/FeatureInterfaceDetail.png"
                              alt="Feature Interface Detail"
                              fill
                              className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                           />
                        </div>
                     </div>
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* 14.5 ENTERPRISE SECURITY & COMPLIANCE */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Security
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Enterprise Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Compliance</span></h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                     {[
                        { title: "Role-Based Access Control", icon: UserCheck },
                        { title: "Multi-Factor Authentication", icon: Lock },
                        { title: "Audit Logs", icon: FileBadge },
                        { title: "Secure Document Management", icon: Folder },
                        { title: "HIPAA-Aligned Security Practices", icon: ShieldCheck }
                     ].map((item, idx) => (
                        <div key={idx} className="p-6 glass-card rounded-2xl flex flex-col items-center justify-center text-center border border-slate-200 shadow-sm">
                           <div className="w-12 h-12 rounded-xl bg-[#0D63CC]/10 text-[#0D63CC] flex items-center justify-center mb-4">
                              <item.icon size={24} />
                           </div>
                           <h4 className="text-sm font-bold text-text-primary">{item.title}</h4>
                        </div>
                     ))}
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* 15. ENTERPRISE SAAS SCREENS GALLERY */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DA99]/10 border border-[#00DA99]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest">
                           Gallery
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Enterprise SaaS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Screens Gallery</span></h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                     {[
                        { src: "/images/carenova/FeatureInterfaceDetail.png", alt: "Platform Dashboard" },
                        { src: "/images/carenova/Reporting-Analytics.png", alt: "Reporting & Analytics" },
                        { src: "/images/carenova/IncidentManagement.png", alt: "Incident Management" },
                        { src: "/images/carenova/ExecutiveDashboard2.png", alt: "Executive Dashboard" },
                        { src: "/images/carenova/ComplianceManagement.png", alt: "Compliance Workspace" },
                        { src: "/images/carenova/Workforce-Management.png", alt: "Workforce Management" }
                     ].map((img, i) => (
                        <div key={i} className="relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden glass-card shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
                           <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                              <p className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                 {img.alt}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* 16. ANALYTICS & REPORTING */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DA99]/10 border border-[#00DA99]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest">
                           Insights
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Analytics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Reporting</span></h2>
                     <p className="text-lg text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto">
                        Advanced reporting capabilities enabled leadership teams to monitor organizational health and identify operational risks proactively without endless manual data gathering.
                     </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                     {[
                        { title: "Compliance Insights", items: ["Audit Readiness", "Deficiency Trends", "Corrective Actions"], color: "#0D63CC", icon: ShieldCheck },
                        { title: "Operational Insights", items: ["Facility Utilization", "Staffing Metrics", "Efficiency Tracking"], color: "#00DA99", icon: Activity },
                        { title: "Risk Insights", items: ["Incident Trends", "Top Risk Factors", "Safety Scores"], color: "#EF4444", icon: AlertTriangle },
                        { title: "Productivity Insights", items: ["Task Completion", "Workflow Delays", "Response Times"], color: "#F59E0B", icon: TrendingUp }
                     ].map((report, i) => (
                        <div key={i} className="p-6 md:p-8 glass-card rounded-[24px] relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl border border-slate-200 flex flex-col" style={{ borderTopWidth: '4px', borderTopColor: report.color }}>
                           <div className="absolute -right-8 -bottom-8 w-32 h-32 blur-[40px] rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: report.color }} />
                           <div className="flex justify-between items-start mb-6 relative z-10">
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: `${report.color}10`, borderColor: `${report.color}30`, color: report.color }}>
                                 <report.icon size={24} />
                              </div>
                              <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                 <ArrowRight size={14} className="text-slate-400 -rotate-45" />
                              </div>
                           </div>
                           <h4 className="font-bold text-lg text-text-primary mb-4 relative z-10 tracking-tight">{report.title}</h4>
                           <ul className="space-y-3 relative z-10 flex-1">
                              {report.items.map((item, idx) => (
                                 <li key={idx} className="text-[13px] font-medium text-text-secondary flex items-start gap-3 group/li">
                                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-transform duration-300 group-hover/li:scale-[2]" style={{ backgroundColor: report.color, opacity: 0.6 }} />
                                    <span className="group-hover/li:text-text-primary transition-colors">{item}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* SWOT ANALYSIS */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Strategic Analysis
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">SWOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Analysis</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Evaluating Carenova&apos;s competitive stance to ensure viability and identify growth opportunities.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        { title: "Strengths", items: ["Unified platform ecosystem", "Real-time compliance tracking", "Role-based workflows", "Scalable architecture"], color: "text-[#00DA99]", borderGlow: "from-[#00DA99]/30 via-white/10 to-transparent", innerGlow: "bg-[#00DA99]/15", borderColor: "border-[#00DA99]/30", gradientFill: "from-white/60 to-white/90", icon: <Briefcase size={24} strokeWidth={2} className="text-[#00DA99] group-hover:scale-110 transition-transform duration-500" /> },
                        { title: "Weaknesses", items: ["Complex enterprise onboarding", "Requires behavioral change", "Significant initial setup"], color: "text-[#F59E0B]", borderGlow: "from-[#F59E0B]/30 via-white/10 to-transparent", innerGlow: "bg-[#F59E0B]/15", borderColor: "border-[#F59E0B]/30", gradientFill: "from-white/60 to-white/90", icon: <Activity size={24} strokeWidth={2} className="text-[#F59E0B] group-hover:scale-110 transition-transform duration-500" /> },
                        { title: "Opportunities", items: ["AI-driven predictive analytics", "Third-party integrations", "Multi-facility expansion"], color: "text-[#0D63CC]", borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent", innerGlow: "bg-[#0D63CC]/15", borderColor: "border-[#0D63CC]/30", gradientFill: "from-white/60 to-white/90", icon: <Search size={24} strokeWidth={2} className="text-[#0D63CC] group-hover:scale-110 transition-transform duration-500" /> },
                        { title: "Threats", items: ["Evolving regulatory changes", "Competitive healthcare SaaS", "Data security compliance"], color: "text-rose-500", borderGlow: "from-rose-500/30 via-white/10 to-transparent", innerGlow: "bg-rose-500/15", borderColor: "border-rose-500/30", gradientFill: "from-white/60 to-white/90", icon: <FileText size={24} strokeWidth={2} className="text-rose-500 group-hover:scale-110 transition-transform duration-500" /> }
                     ].map((box, i) => (
                        <div key={i} className={`relative rounded-[24px] p-[2px] border border-slate-200 bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
                           <div className={`bg-gradient-to-b ${box.gradientFill} backdrop-blur-2xl w-full h-full rounded-[22px] p-6 md:p-8 relative z-10 flex flex-col min-h-[300px] overflow-hidden`}>
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }} className={`absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none ${box.innerGlow}`} />
                              <div className="flex flex-col gap-4 mb-6 relative z-20">
                                 <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center border-2 ${box.borderColor} group-hover:border-opacity-100 transition-colors duration-500`}>{box.icon}</div>
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

               {/* ── 18. IMPACT & RESULTS ───────────────────────────────────────────────── */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DA99]/10 border border-[#00DA99]/20 mb-4">
                        <TrendingUp size={14} className="text-[#00DA99]" />
                        <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest">Results</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Impact</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto mt-4">
                        By focusing on operational efficiency and user adoption, the redesigned platform achieved significant measurable results for beta facilities.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
                     <motion.div {...fadeIn} className="grid grid-cols-2 gap-4">
                        {[
                           { val: "40%", label: "Operational Efficiency", color: "text-[#0D63CC]", border: "border-[#0D63CC]/20", glow: "from-[#0D63CC]/20", bg: "bg-[#0D63CC]/10", icon: Activity },
                           { val: "60%", label: "Reduction in Manual Tracking", color: "text-[#00DA99]", border: "border-[#00DA99]/20", glow: "from-[#00DA99]/20", bg: "bg-[#00DA99]/10", icon: Clock },
                           { val: "35%", label: "Faster Audit Preparation", color: "text-[#8B5CF6]", border: "border-[#8B5CF6]/20", glow: "from-[#8B5CF6]/20", bg: "bg-[#8B5CF6]/10", icon: ShieldCheck },
                           { val: "50%", label: "Fewer Documentation Errors", color: "text-[#F59E0B]", border: "border-[#F59E0B]/20", glow: "from-[#F59E0B]/20", bg: "bg-[#F59E0B]/10", icon: CheckCircle2 }
                        ].map((stat, i) => (
                           <div key={i} className={`relative bg-white/80 backdrop-blur-xl rounded-[24px] border shadow-sm p-8 text-center flex flex-col items-center justify-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group overflow-hidden ${stat.border}`}>
                              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[100px] pointer-events-none`} />
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 relative z-10 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                                 <stat.icon size={24} />
                              </div>
                              <span className={`text-3xl md:text-4xl font-black ${stat.color} block mb-2 relative z-10 tracking-tighter`}>{stat.val}</span>
                              <span className="text-[13px] font-bold text-text-secondary relative z-10">{stat.label}</span>
                           </div>
                        ))}
                     </motion.div>

                     <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="glass-card rounded-[24px] border border-white/80 shadow-[0_20px_50px_-10px_rgba(0,218,153,0.1)] p-10 md:p-12 relative overflow-hidden flex flex-col justify-center border-t-4 border-t-[#00DA99] group">
                        <div className="absolute -top-32 -right-32 w-64 h-64 blur-[80px] bg-[#00DA99]/20 rounded-full group-hover:bg-[#00DA99]/30 transition-colors duration-1000 pointer-events-none" />
                        <h3 className="text-xl md:text-3xl font-bold text-text-primary leading-tight mb-8 relative z-10">Qualitative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Outcomes</span></h3>
                        <div className="space-y-4 relative z-10">
                           {[
                              "Improved operational visibility across all facilities.",
                              "Increased compliance confidence during state reviews.",
                              "Enhanced cross-departmental collaboration.",
                              "Better, data-driven decision-making for leadership."
                           ].map((g, i) => (
                              <div key={i} className="flex items-center gap-4 group/item">
                                 <div className="w-12 h-12 rounded-xl bg-[#00DA99]/10 flex items-center justify-center flex-shrink-0 border border-[#00DA99]/20 group-hover/item:bg-[#00DA99] group-hover/item:scale-110 transition-all duration-300">
                                    <CheckCircle2 size={24} className="text-[#00DA99] group-hover/item:text-white transition-colors" />
                                 </div>
                                 <p className="text-[15px] font-bold text-text-secondary group-hover/item:text-text-primary transition-colors">{g}</p>
                              </div>
                           ))}
                        </div>
                     </motion.div>
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* 19. LESSONS LEARNED */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-widest">
                           Retrospective
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EC4899]">Learnings</span></h2>
                     <p className="text-lg text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto">
                        Key takeaways from designing an enterprise-grade healthcare compliance platform.
                     </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                     {[
                        { title: "Design for the Extremes", desc: "Enterprise tools must work for both the power user (who wants dense data and keyboard shortcuts) and the casual user (who needs guided, simplified workflows)." },
                        { title: "Terminology Matters", desc: "In healthcare, specific terminology is legally binding. I learned to collaborate closely with domain experts to ensure UI copy matched regulatory standards." },
                        { title: "Balance Complexity with Clarity", desc: "Enterprise users need dense information, but it must be structured perfectly. We learned that progressive disclosure is non-negotiable for compliance data." },
                        { title: "Performance is UX", desc: "When users are managing hundreds of facilities, load times matter. We optimized the dashboard to render key metrics instantly, caching heavier audit logs." }
                     ].map((item, idx) => (
                        <div key={idx} className="p-8 glass-card rounded-[24px] border-l-4 border-l-[#F59E0B] shadow-sm hover:shadow-lg transition-all">
                           <h4 className="text-xl font-bold text-text-primary mb-3">{item.title}</h4>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* 20. FINAL PRODUCT SHOWCASE */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Showcase
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Final Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Showcase</span></h2>
                  </div>
                  <div className="relative w-full aspect-[21/9] rounded-[40px] overflow-hidden glass-card shadow-2xl p-2 md:p-4 border border-[#0D63CC]/10">
                     {/* <PremiumPlaceholder aspect="w-full h-full" label="Full Platform Hero Showcase" icon={MonitorPlay} glowColor="#00DA99" /> */}
                     <Image
                        src="/images/carenova/CareNova.jpg"
                        alt="Visual UI"
                        fill
                        className="object-cover relative z-10 duration-1000"
                     />
                  </div>
               </section>

               {/* 20. FINAL CTA */}
               <section className="py-8 md:py-8 text-center relative">
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D63CC]/5 to-transparent pointer-events-none" /> */}

                  <div className="relative max-w-9xl mx-auto">
                     {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0D63CC] to-[#00DA99] rounded-[24px] blur-[60px] opacity-20 animate-pulse pointer-events-none" /> */}

                     <motion.div {...fadeIn} className="relative glass-card rounded-[24px] p-8 md:p-12 border border-white/60 shadow-lg overflow-hidden group">
                        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#0D63CC]/15 blur-[80px] rounded-full group-hover:bg-[#0D63CC]/25 transition-colors duration-1000 pointer-events-none" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#00DA99]/15 blur-[80px] rounded-full group-hover:bg-[#00DA99]/25 transition-colors duration-1000 pointer-events-none" />

                        <div className="relative z-10">
                           <div className="inline-flex items-center justify-center w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#0D63CC] to-[#00DA99] shadow-md text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                              <Sparkles size={28} className="animate-pulse" />
                           </div>
                           <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4 drop-shadow-sm">
                              Let's Build the Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Great Product Together</span>
                           </h2>
                           <p className="text-base md:text-lg text-text-secondary mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                              Looking for a Product Designer who understands both business strategy and pixel-perfect execution?
                           </p>

                           <div className="flex flex-wrap justify-center gap-2 mb-10">
                              {["Systems Thinking", "Enterprise SaaS", "User-Centric Design", "Business Strategy"].map((tag, i) => (
                                 <span key={i} className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-200/50 hover:bg-white transition-colors">
                                    <span className="text-[#0D63CC] mr-1">✓</span> {tag}
                                 </span>
                              ))}
                           </div>

                           <Link href="https://www.figma.com/design/BUChOcgxr6LXwpOitp0jGm/Carevanta?node-id=0-1&t=D6y5SHKZJShyONcj-1" className="inline-flex items-center gap-3 px-8 py-4 btn-premium text-white rounded-full font-bold hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(13,99,204,0.25)] hover:shadow-[0_30px_60px_-15px_rgba(13,99,204,0.35)] group text-base overflow-hidden relative bg-[#0D63CC]">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                              <span className="relative z-10">Open in Figma</span>
                              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </motion.div>
                  </div>
               </section>

               {/* NEXT CASE STUDY NAVIGATION */}
               <section className="mt-6 md:mt-6 border-t border-slate-200/50 pt-6 md:pt-6 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4">Next Project</span>
                  <Link href="/case-studies/spendora" className="group flex flex-col items-center">
                     <h3 className="text-4xl md:text-5xl font-black text-text-primary group-hover:text-[#8B5CF6] transition-colors duration-300 mb-6">
                        Spendora
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
