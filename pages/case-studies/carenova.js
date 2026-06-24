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
   Database, Clock, FileBadge, BarChart3, LineChart, Banknote, Receipt, Folder, MapPin, Sparkles, Rocket, Compass, ShieldCheck, Eye, AlertTriangle, UserCheck, ArrowRight
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
            <title>Carenova™ | Intelligent Facility & Compliance Management</title>
            <meta name="description" content="Carenova Systems™ Intelligent Facility & Compliance Management for Multi-Facility Healthcare Organizations." />
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
                        Carenova Systems™
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        Intelligent Facility & Compliance Management for <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Multi-Facility Healthcare Organizations</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        An enterprise-grade healthcare operations platform designed to centralize facility management, compliance workflows, audits, workforce coordination, communication, and reporting across multi-facility healthcare organizations.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Industry</p>
                        <p className="font-bold text-sm text-text-primary">Healthcare SaaS</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Product Type</p>
                        <p className="font-bold text-sm text-text-primary">Enterprise B2B SaaS</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Platform</p>
                        <p className="font-bold text-sm text-text-primary">Responsive Web App</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Duration</p>
                        <p className="font-bold text-sm text-text-primary">8 Months</p>
                     </div>
                  </motion.div>
               </section>

               {/* MAIN HERO IMAGE */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-20 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[32px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-30 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #0D63CC 0%, #00DA99 100%)' }}
                     />
                     <PremiumPlaceholder aspect="aspect-[21/9]" label="Carenova Platform Interface" glowColor="#0D63CC" textCls="text-[#0D63CC]" icon={Layout} />
                  </div>
               </motion.section>

               {/* OVERVIEW & THE INDUSTRY PROBLEM */}
               <section className="mb-12 md:mb-16 lg:mb-20 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                           <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                              The Goal
                           </span>
                        </div>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-6">
                           Healthcare organizations operating multiple facilities often rely on disconnected systems, spreadsheets, emails, and manual processes to manage critical compliance and operational activities. The objective was to transform this burden into a strategic advantage.
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
                              Industry Problem
                           </span>
                        </div>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Teams struggled to maintain compliance standards while simultaneously managing staff, incidents, documentation, and regulatory audits across various geographically dispersed locations.
                        </p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                           {[
                              { label: "Fragmented", desc: "Disconnected Systems" },
                              { label: "Manual", desc: "Compliance Tracking" },
                              { label: "Blindspots", desc: "Limited Visibility" },
                              { label: "Delays", desc: "Audit Inefficiencies" },
                              { label: "Friction", desc: "Complex Role Mgmt" }
                           ].map((item, idx) => (
                              <div key={idx} className="p-6 glass-card rounded-2xl flex flex-col items-center justify-center text-center border border-rose-500/10">
                                 <span className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">{item.label}</span>
                                 <span className="text-sm font-semibold text-text-primary">{item.desc}</span>
                              </div>
                           ))}
                        </div>
                        <div className="mt-8 p-4 bg-rose-50 rounded-xl border border-rose-100 flex items-center gap-4">
                           <Zap className="text-rose-500" size={24} />
                           <p className="text-sm font-bold text-text-primary">This fragmentation created significant compliance risks and administrative overhead.</p>
                        </div>
                     </div>
                  </div>
               </section>

               {/* THE BUSINESS CHALLENGE (Symmetric Grid) */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
                        <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">
                           Core Issues
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">The Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Challenge</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Facility administrators reported several recurring operational issues that impacted both care quality and facility sustainability.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Centralize Workflows", desc: "Create a single source of truth across facilities to eliminate data silos and manual handoffs.", icon: Layout, color: "#0D63CC" },
                        { num: "02", title: "Improve Audit Readiness", desc: "Reduce preparation time and improve documentation quality for regulatory audits.", icon: Target, color: "#00DA99" },
                        { num: "03", title: "Reduce Admin Burden", desc: "Automate repetitive compliance tasks to allow teams to focus on care delivery.", icon: Clock, color: "#8B5CF6" },
                        { num: "04", title: "Increase Transparency", desc: "Provide real-time visibility and reporting across all facilities.", icon: Eye, color: "#EC4899" },
                        { num: "05", title: "Mitigate Risks", desc: "Enable proactive monitoring and automated corrective action workflows.", icon: Shield, color: "#F59E0B" },
                        { num: "06", title: "Scalable Growth", desc: "Design a platform capable of supporting rapid multi-facility expansion.", icon: TrendingUp, color: "#10B981" }
                     ].map((challenge, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           transition={{ delay: i * 0.1, duration: 0.8 }}
                           className="glass-card p-6 md:p-8 rounded-[24px] group relative overflow-hidden"
                        >
                           <div
                              className="absolute -top-16 -right-16 w-40 h-40 blur-[50px] rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: challenge.color }}
                           />
                           <div className="flex items-center justify-between mb-6 relative z-10">
                              <div
                                 className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs"
                                 style={{ backgroundColor: `${challenge.color}20`, color: challenge.color, border: `1px solid ${challenge.color}30` }}
                              >
                                 {challenge.num}
                              </div>
                              <challenge.icon size={24} className="opacity-30" style={{ color: challenge.color }} />
                           </div>
                           <h4 className="font-bold text-xl text-text-primary mb-3 relative z-10">{challenge.title}</h4>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed relative z-10">{challenge.desc}</p>
                        </motion.div>
                     ))}
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
                           <h3 className="text-3xl font-bold text-text-primary mb-6">Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Insights</span></h3>
                           <p className="text-text-secondary leading-relaxed font-medium mb-8">
                              To understand operational challenges and user expectations, research was conducted with multiple user groups across the organization.
                           </p>

                           <div className="space-y-4">
                              <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Stakeholders Interviewed</h4>
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
                              <h4 className="text-2xl font-bold text-text-primary mb-4">{insight.title}</h4>
                              <p className="text-text-secondary font-medium leading-relaxed mb-6">{insight.desc}</p>
                              
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
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Empathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Mapping</span></h2>
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
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Information <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Architecture</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        A structured hierarchy designed to connect clinical care with revenue operations seamlessly.
                     </p>
                  </div>

                  <div className="max-w-8xl mx-auto">
                     <div className="mb-12 relative aspect-[21/9] w-full rounded-[32px] overflow-hidden glass-card shadow-lg border border-[#0D63CC]/10">
                        <PremiumPlaceholder aspect="aspect-[21/9]" label="Information Architecture Overview" glowColor="#00DA99" textCls="text-[#00DA99]" icon={Layers} />
                     </div>
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
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Designing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Compliance Ecosystem</span></h2>
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
                           <h3 className="text-3xl font-bold text-text-primary mb-4">Executive <span className="text-[#0D63CC]">Dashboard</span></h3>
                           <p className="text-lg text-text-secondary font-medium leading-relaxed">
                              The dashboard was designed around primary operational questions to give immediate clarity to administrators and leadership.
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
                        </div>
                     </div>
                  </div>
               </section>

               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               <section className="mb-12 md:mb-16 lg:mb-20">
                  {/* Reporting & Analytics */}
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DA99]/10 border border-[#00DA99]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest">
                           Insights
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Reports & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Analytics</span></h2>
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

               {/* DESIGN SYSTEM */}
               <section className="mb-12 md:mb-16 lg:mb-20">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4">
                        <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">
                           Visual Identity
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Design System</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        A unified design system was created to ensure complex operational data feels approachable, trustworthy, and extremely accessible.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
                     {/* Principles - Spans 4 cols */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-slate-100 shadow-xl relative overflow-hidden">
                        <h4 className="font-bold text-xl text-text-primary mb-8">Core Principles</h4>
                        <div className="space-y-6">
                           {[
                              { t: "Clarity", d: "Prioritize information hierarchy." },
                              { t: "Consistency", d: "Predictable interaction patterns." },
                              { t: "Accessibility", d: "Support diverse enterprise user needs." },
                              { t: "Scalability", d: "Enable rapid module expansion." }
                           ].map((p, i) => (
                              <div key={i}>
                                 <h5 className="font-bold text-sm text-[#0D63CC] mb-1">{p.t}</h5>
                                 <p className="text-xs font-medium text-text-secondary">{p.d}</p>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Colors - Spans 8 cols */}
                     <div className="lg:col-span-8 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#0D63CC]/10 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Semantic Color Scale
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                           {[
                              { bg: 'bg-[#0D63CC]', label: 'Primary', hex: 'Trust Blue' },
                              { bg: 'bg-[#00DA99]', label: 'Success', hex: 'Growth Teal' },
                              { bg: 'bg-[#F59E0B]', label: 'Warning', hex: 'Alert Orange' },
                              { bg: 'bg-[#8B5CF6]', label: 'Info', hex: 'Metric Purple' },
                              { bg: 'bg-slate-50', label: 'Surface', hex: 'Neutral Scale', border: 'border border-slate-200' }
                           ].map((color, i) => (
                              <div key={i} className="flex flex-col gap-2 group/color">
                                 <div className={`w-full aspect-square rounded-2xl ${color.bg} ${color.border || ''} shadow-lg border border-white/20 group-hover/color:scale-110 group-hover/color:shadow-2xl transition-all duration-300`} />
                                 <div>
                                    <span className="block text-[10px] font-bold text-text-primary uppercase tracking-wider mt-2">{color.label}</span>
                                    <span className="block text-[9px] text-text-secondary font-medium uppercase opacity-60">{color.hex}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
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
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Outcomes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Impact</span></h2>
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
                              <span className={`text-5xl md:text-6xl font-black ${stat.color} block mb-2 relative z-10 tracking-tighter`}>{stat.val}</span>
                              <span className="text-[13px] font-bold text-text-secondary relative z-10">{stat.label}</span>
                           </div>
                        ))}
                     </motion.div>

                     <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="glass-card rounded-[32px] border border-white/80 shadow-[0_20px_50px_-10px_rgba(0,218,153,0.1)] p-10 md:p-12 relative overflow-hidden flex flex-col justify-center border-t-4 border-t-[#00DA99] group">
                        <div className="absolute -top-32 -right-32 w-64 h-64 blur-[80px] bg-[#00DA99]/20 rounded-full group-hover:bg-[#00DA99]/30 transition-colors duration-1000 pointer-events-none" />
                        <h3 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-8 relative z-10">Qualitative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Outcomes</span></h3>
                        <div className="space-y-6 relative z-10">
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

               {/* FINAL CTA */}
               <section className="py-12 md:py-20 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D63CC]/5 to-transparent pointer-events-none" />
                  
                  <div className="relative max-w-4xl mx-auto px-4">
                     <div className="absolute inset-0 bg-gradient-to-r from-[#0D63CC] to-[#00DA99] rounded-[32px] blur-[60px] opacity-20 animate-pulse pointer-events-none" />
                     
                     <motion.div {...fadeIn} className="relative glass-card rounded-[32px] p-8 md:p-12 border border-white/60 shadow-lg overflow-hidden group">
                        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#0D63CC]/15 blur-[80px] rounded-full group-hover:bg-[#0D63CC]/25 transition-colors duration-1000 pointer-events-none" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#00DA99]/15 blur-[80px] rounded-full group-hover:bg-[#00DA99]/25 transition-colors duration-1000 pointer-events-none" />
                        
                        <div className="relative z-10">
                           <div className="inline-flex items-center justify-center w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#0D63CC] to-[#00DA99] shadow-md text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                              <Sparkles size={28} className="animate-pulse" />
                           </div>
                           <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary mb-4 drop-shadow-sm">
                              Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Full Design</span>
                           </h2>
                           <p className="text-base md:text-lg text-text-secondary mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                              Dive deeper into the complete design system, enterprise workflows, interaction patterns, and component library behind Carenova Systems™.
                           </p>
                           
                           <div className="flex flex-wrap justify-center gap-2 mb-10">
                              {["50+ High-Fidelity Screens", "Complete Design System", "Enterprise Components", "Workflow Prototypes"].map((tag, i) => (
                                 <span key={i} className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-200/50 hover:bg-white transition-colors">
                                    <span className="text-[#0D63CC] mr-1">✓</span> {tag}
                                 </span>
                              ))}
                           </div>

                           <Link href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D63CC] text-white rounded-full font-bold hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(13,99,204,0.25)] hover:shadow-[0_30px_60px_-15px_rgba(13,99,204,0.35)] group text-base overflow-hidden relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                              <span className="relative z-10">Open in Figma</span>
                              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </motion.div>
                  </div>
               </section>
            </div>
         </main>
         <Footer />
      </>
   )
}
