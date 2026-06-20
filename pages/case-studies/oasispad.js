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
   Database, Clock, FileBadge, BarChart3, LineChart, Banknote, Receipt, Folder
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GlowDivider from '../../components/GlowDivider'
import RotatingBadge from '../../components/RotatingBadge'

export default function OasisPadCaseStudy() {
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
            <title>OasisPad™ | Case Study - Behavioral Health Operations</title>
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
                        icon={Award}
                        labels={["HEALTHCARE", "EHR SYSTEM", "SAAS PLATFORM"]}
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
                        OasisPad™
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        Transforming Behavioral Health Operations Through an <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Integrated EHR Platform</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        A comprehensive Behavioral Health Practice Management and EHR platform built to modernize how residential care facilities, mental health clinics, therapists, billing teams, and administrators manage patient care, documentation, compliance, insurance claims, and financial operations.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Category</p>
                        <p className="font-bold text-sm text-text-primary">Healthcare / B2B SaaS</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">My Role</p>
                        <p className="font-bold text-sm text-text-primary">Lead Product Designer</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Duration</p>
                        <p className="font-bold text-sm text-text-primary">12 Weeks</p>
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
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-30 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #0D63CC 0%, #00DA99 100%)' }}
                     />
                     <PremiumPlaceholder aspect="aspect-[21/9]" label="OasisPad Platform Interface" glowColor="#0D63CC" textCls="text-[#0D63CC]" icon={Stethoscope} />
                     <Image
                        src="/images/oasispad/OasisPadDashboard-Thumnail.png"
                        alt="OasisPad Platform Interface"
                        fill
                        className="object-cover rounded-2xl overflow-hidden relative z-10"
                     />
                  </div>
               </motion.section>

               {/* OVERVIEW & THE INDUSTRY PROBLEM */}
               <section className="mb-16 md:mb-24 lg:mb-32 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">The Goal</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-6">
                           The project originated from a critical challenge faced by behavioral health organizations: Clinical teams were spending more time managing paperwork, insurance claims, and compliance requirements than delivering care. The objective was not simply to digitize records.
                        </p>
                        <div className="p-8 glass-card border-l-4 border-[#0D63CC] bg-[#0D63CC]/5 rounded-r-[24px]">
                           <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                              <Target className="text-[#0D63CC]" size={24} /> Unified Ecosystem
                           </h4>
                           <p className="text-text-secondary font-medium">
                              The goal was to create a unified operational ecosystem connecting Clinical Documentation, Patient Records, Treatment Planning, Insurance Billing, Claims Processing, Revenue Tracking, Compliance Monitoring, and Reporting & Analytics inside a single HIPAA-compliant platform.
                           </p>
                        </div>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Industry Problem</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Behavioral Health facilities operate differently from traditional healthcare organizations. Unlike standard clinics, they manage long-term patient treatment, multi-disciplinary care teams, therapy notes, treatment plans, medication records, residential care compliance, and complex insurance reimbursement workflows.
                        </p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                           {[
                              { label: "Software A", desc: "Clinical System" },
                              { label: "Software B", desc: "Billing System" },
                              { label: "Software C", desc: "Reporting System" },
                              { label: "Excel Sheets", desc: "Employee Tracking" },
                              { label: "Paper Forms", desc: "Compliance Doc" }
                           ].map((item, idx) => (
                              <div key={idx} className="p-6 glass-card rounded-2xl flex flex-col items-center justify-center text-center border border-rose-500/10">
                                 <span className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">{item.label}</span>
                                 <span className="text-sm font-semibold text-text-primary">{item.desc}</span>
                              </div>
                           ))}
                        </div>
                        <div className="mt-8 p-4 bg-rose-50 rounded-xl border border-rose-100 flex items-center gap-4">
                           <Zap className="text-rose-500" size={24} />
                           <p className="text-sm font-bold text-text-primary">This fragmentation created significant operational friction and revenue leakage.</p>
                        </div>
                     </div>
                  </div>
               </section>

               {/* THE BUSINESS CHALLENGE (Symmetric Grid) */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
                        <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">
                           Core Issues
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">The Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Challenge</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Facility administrators reported five recurring operational issues that severely impacted both care quality and financial sustainability.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Documentation Burden", desc: "Therapists spent excessive time creating Progress Notes, Treatment Plans, Objectives, Interventions, and Behavioral Assessments. Documentation often duplicated data already stored elsewhere.", icon: FileText, color: "#0D63CC" },
                        { num: "02", title: "Insurance Claim Delays", desc: "Billing teams manually gathered information from multiple systems before submitting claims, resulting in delayed reimbursements, missing data, and high rejection rates.", icon: Clock, color: "#F59E0B" },
                        { num: "03", title: "Revenue Visibility", desc: "Leadership lacked real-time visibility into submitted claims, pending claims, rejected claims, outstanding balances, and payer performance.", icon: LineChart, color: "#00DA99" },
                        { num: "04", title: "Compliance Risks", desc: "HIPAA and payer audits required extensive manual record retrieval across disparate systems and physical cabinets.", icon: Shield, color: "#EF4444" },
                        { num: "05", title: "Fragmented Experience", desc: "Users frequently switched between patient records, notes, claims, reports, and employee systems, causing severe workflow disruption.", icon: Shuffle, color: "#8B5CF6" }
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

               {/* DISCOVERY PHASE & KEY INSIGHTS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
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
                              To understand the ecosystem, research was conducted with multiple user groups across the organization, revealing several distinct patterns.
                           </p>

                           <div className="space-y-4">
                              <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Stakeholders Interviewed</h4>
                              {[
                                 { group: "Clinical Team", roles: "Therapists, Behavioral Specialists, Nurses", icon: Heart },
                                 { group: "Administrative Team", roles: "Facility Managers, Operations Directors", icon: Building2 },
                                 { group: "Billing Team", roles: "Revenue Cycle Specialists, Insurance Coordinators", icon: Wallet },
                                 { group: "Leadership", roles: "Executive Directors, Facility Owners", icon: Users }
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
                              title: "Documentation Drives Everything",
                              desc: "Every downstream process depends on clinical documentation. Poor documentation directly impacts reimbursement.",
                              flow: ["Patient Visit", "Clinical Note", "Diagnosis", "Treatment Plan", "Insurance Claim", "Revenue"]
                           },
                           {
                              id: "Insight #2",
                              title: "Billing Teams Need Context",
                              desc: "Most billing systems display claims. But billing specialists need visibility into patient information, clinical encounters, diagnoses, and procedures without leaving the workflow.",
                              flow: []
                           },
                           {
                              id: "Insight #3",
                              title: "Administrators Think in Metrics",
                              desc: "Facility leaders don't care about individual notes. They care about Revenue, Productivity, Denials, Aging Claims, and Compliance.",
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

               {/* PRODUCT VISION & EXPERIENCE FRAMEWORK */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Architecture
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Product Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Dual-Layer Framework</span></h2>
                     <p className="text-xl text-text-secondary font-medium max-w-3xl mx-auto italic mb-8">
                        "Every action in the platform should contribute either to Patient Care or Revenue Recovery."
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                     <motion.div {...fadeIn} className="glass-card rounded-[32px] p-8 md:p-10 border-2 border-[#00DA99]/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00DA99]/10 blur-[40px] rounded-full pointer-events-none" />
                        <div className="w-16 h-16 rounded-2xl bg-[#00DA99]/10 flex items-center justify-center mb-8 relative z-10">
                           <Stethoscope size={32} className="text-[#00DA99]" />
                        </div>
                        <h4 className="text-2xl font-bold text-text-primary mb-2 relative z-10">Clinical Operations Layer</h4>
                        <p className="text-sm font-semibold text-[#00DA99] uppercase tracking-widest mb-8 relative z-10">Supports Care Delivery</p>
                        
                        <ul className="space-y-4 relative z-10">
                           {["Notes Library", "Goals & Objectives", "Interventions", "Activity Scheduling", "Residents Management"].map((item, i) => (
                              <li key={i} className="flex items-center gap-3">
                                 <CheckCircle2 size={18} className="text-[#00DA99]" />
                                 <span className="font-bold text-text-secondary">{item}</span>
                              </li>
                           ))}
                        </ul>
                     </motion.div>

                     <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="glass-card rounded-[32px] p-8 md:p-10 border-2 border-[#0D63CC]/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[40px] rounded-full pointer-events-none" />
                        <div className="w-16 h-16 rounded-2xl bg-[#0D63CC]/10 flex items-center justify-center mb-8 relative z-10">
                           <Wallet size={32} className="text-[#0D63CC]" />
                        </div>
                        <h4 className="text-2xl font-bold text-text-primary mb-2 relative z-10">Revenue Operations Layer</h4>
                        <p className="text-sm font-semibold text-[#0D63CC] uppercase tracking-widest mb-8 relative z-10">Supports Reimbursement</p>
                        
                        <ul className="space-y-4 relative z-10">
                           {["Billing & Claims Generation", "ERA Processing", "Payments Management", "Financial Reporting", "Analytics & Dashboards"].map((item, i) => (
                              <li key={i} className="flex items-center gap-3">
                                 <CheckCircle2 size={18} className="text-[#0D63CC]" />
                                 <span className="font-bold text-text-secondary">{item}</span>
                              </li>
                           ))}
                        </ul>
                     </motion.div>
                  </div>
               </section>

               {/* INFORMATION ARCHITECTURE */}
               <section className="mb-16 md:mb-24 lg:mb-32">
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
          <div className="mb-12 relative z-10 relative aspect-[21/9] w-full rounded-[32px] overflow-hidden glass-card shadow-lg p-2 border border-[#0D63CC]/10">
                           <PremiumPlaceholder aspect="aspect-[21/9]" label="Information Architecture Overview" glowColor="#0D63CC" textCls="text-[#0D63CC]" icon={Layers} />
                           <Image
                                                src="/images/oasispad/IA-Thumnail.png"
                                                alt="Information Architecture Overview"
                                                fill
                                                className="object-cover rounded-2xl overflow-hidden relative z-10"
                                             />
                        </div>
                  </div>
               </section>

               {/* DESIGNING THE BILLING ECOSYSTEM */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           UX Transformation
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Designing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Billing Ecosystem</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        The Billing module became one of the most critical areas because revenue directly affects facility sustainability. The design goal was to transform claim creation into a guided experience.
                     </p>
                  </div>

                  <div className="max-w-6xl mx-auto">
                     <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="order-2 lg:order-1 relative aspect-[4/3] w-full rounded-[24px] overflow-hidden glass-card shadow-lg p-2 border border-[#0D63CC]/10">
                           <PremiumPlaceholder aspect="aspect-[4/3]" label="Progressive Claim Creation UI" icon={Layers} />
                           <Image
                                 src="/images/oasispad/Progressive-Claim Creation-UI.png"
                                 alt="Progressive Claim Creation UI"
                                 fill
                                 className="object-cover rounded-2xl overflow-hidden relative z-10"
                              />
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                           <h3 className="text-2xl font-bold text-text-primary">Claim Creation Journey</h3>
                           <p className="text-lg text-text-secondary font-medium leading-relaxed">
                              Instead of displaying a massive, overwhelming insurance form, the process was redesigned into progressive steps. This dramatically reduces data omissions, billing errors, and claim rejections.
                           </p>
                        </div>
                     </div>

                     {/* 8-Step Timeline Grid */}
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                           { step: "01", title: "Patient Snapshot", desc: "Verify patient identity.", icon: User },
                           { step: "02", title: "Insurance", desc: "Validate coverage.", icon: Shield },
                           { step: "03", title: "Providers", desc: "Associate rendering provider.", icon: Stethoscope },
                           { step: "04", title: "Encounter", desc: "Connect clinical data.", icon: ClipboardList },
                           { step: "05", title: "Diagnosis", desc: "Map ICD-10 codes.", icon: FileSearch },
                           { step: "06", title: "Procedures", desc: "Map CPT/HCPCS codes.", icon: Activity },
                           { step: "07", title: "Claim Details", desc: "Finalize submission data.", icon: FileText },
                           { step: "08", title: "Compliance", desc: "Validate HIPAA.", icon: CheckCircle2 }
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
               <section className="mb-16 md:mb-24 lg:mb-32 space-y-24">
                  
                  {/* Billing Dashboard */}
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                     <div className="lg:col-span-5 space-y-8">
                        <div>
                           <h3 className="text-3xl font-bold text-text-primary mb-4">Billing <span className="text-[#0D63CC]">Dashboard Design</span></h3>
                           <p className="text-lg text-text-secondary font-medium leading-relaxed">
                              The dashboard was designed around three primary questions to give immediate operational clarity to billing teams and leadership.
                           </p>
                        </div>
                        <div className="space-y-4">
                           {[
                              { q: "What is happening?", a: "Claims Overview (Total, Submitted, Pending, Rejected)" },
                              { q: "What is the financial impact?", a: "Revenue Metrics (MTD, Outstanding Balance, Payment Velocity)" },
                              { q: "What requires attention?", a: "Operational Alerts (Pending Claims, Rejections, Aging Accounts)" }
                           ].map((item, i) => (
                              <div key={i} className="p-5 glass-card rounded-xl border-l-4 border-[#00DA99]">
                                 <p className="text-xs font-bold uppercase tracking-wider text-[#00DA99] mb-1">{item.q}</p>
                                 <p className="text-sm font-bold text-text-primary">{item.a}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="lg:col-span-7">
                        <div className="relative aspect-[16/12] w-full rounded-[24px] overflow-hidden glass-card shadow-2xl">
                           {/* <PremiumPlaceholder aspect="aspect-[16/10]" label="Billing Dashboard Analytics" glowColor="#00DA99" icon={BarChart3} /> */}
                           <Image
                              src="/images/oasispad/Billing-Dashboard-Analytics.png"
                              alt="Billing Dashboard Analytics"
                              fill
                              className="object-cover rounded-2xl overflow-hidden relative z-10"
                           />
                        </div>
                     </div>
                  </div>

                  {/* Reporting & Analytics */}
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                     <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                           {[
                              { title: "Financial Insights", items: ["Billed vs Collected", "Revenue Trends", "Outstanding Claims"], color: "#0D63CC" },
                              { title: "Payer Insights", items: ["Payer Mix", "Insurance Performance", "Reimbursement Rates"], color: "#00DA99" },
                              { title: "Denial Insights", items: ["Top Denial Reasons", "Prior Auth Issues", "Coding Errors"], color: "#EF4444" },
                              { title: "Productivity Insights", items: ["Provider Performance", "Claim Throughput", "Submission Trends"], color: "#F59E0B" }
                           ].map((report, i) => (
                              <div key={i} className="p-6 glass-card rounded-2xl border-t-4" style={{ borderColor: report.color }}>
                                 <h4 className="font-bold text-sm text-text-primary mb-3">{report.title}</h4>
                                 <ul className="space-y-2">
                                    {report.items.map((item, idx) => (
                                       <li key={idx} className="text-xs font-medium text-text-secondary flex items-center gap-2">
                                          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: report.color }} />
                                          {item}
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
                        <div>
                           <h3 className="text-3xl font-bold text-text-primary mb-4">Reports & <span className="text-[#00DA99]">Analytics</span></h3>
                           <p className="text-lg text-text-secondary font-medium leading-relaxed">
                              Research showed leadership needed answers quickly, not more reports. The reporting experience was redesigned around actionable insights rather than data dumps.
                           </p>
                        </div>
                     </div>
                  </div>
               </section>

               {/* DESIGN SYSTEM (Healthcare Adapted) */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4">
                        <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">
                           Visual Identity
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Design System</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        A unified healthcare design system was created to ensure complex medical data feels approachable, trustworthy, and accessible.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
                     {/* Principles - Spans 4 cols */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-slate-100 shadow-xl relative overflow-hidden">
                        <h4 className="font-bold text-xl text-text-primary mb-8">Core Principles</h4>
                        <div className="space-y-6">
                           {[
                              { t: "Trust", d: "Healthcare users must feel confident." },
                              { t: "Clarity", d: "Complex data should feel approachable." },
                              { t: "Consistency", d: "Every workflow follows predictable patterns." },
                              { t: "Accessibility", d: "Data-heavy interfaces remain readable." }
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
                              { bg: 'bg-[#0D63CC]', label: 'Primary', hex: 'Healthcare Blue' },
                              { bg: 'bg-[#00DA99]', label: 'Success', hex: 'Revenue Green' },
                              { bg: 'bg-[#F59E0B]', label: 'Warning', hex: 'Review Orange' },
                              { bg: 'bg-[#EF4444]', label: 'Error', hex: 'Denial Red' },
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

               {/* OUTCOME & IMPACT */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="p-8 md:p-12 glass-card rounded-[40px] bg-gradient-to-br from-[#0D63CC]/5 to-[#00DA99]/5 border border-slate-200/50">
                     <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-8">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-slate-100 mb-2">
                              <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                                 Results
                              </span>
                           </div>
                           <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-text-primary leading-[1.1]">
                              OasisPad <br/>
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Successfully Unified</span>
                           </h3>
                           
                           <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                 <h4 className="font-bold text-sm text-text-primary">Clinical & Records</h4>
                                 <p className="text-xs font-medium text-text-secondary leading-relaxed">Therapy Notes, Treatment Plans, Patient Records.</p>
                              </div>
                              <div className="space-y-2">
                                 <h4 className="font-bold text-sm text-text-primary">Revenue Cycle</h4>
                                 <p className="text-xs font-medium text-text-secondary leading-relaxed">Claims, Billing, ERA, Payments.</p>
                              </div>
                              <div className="space-y-2">
                                 <h4 className="font-bold text-sm text-text-primary">Administration</h4>
                                 <p className="text-xs font-medium text-text-secondary leading-relaxed">Scheduling, Employee Tracking, Compliance.</p>
                              </div>
                              <div className="space-y-2">
                                 <h4 className="font-bold text-sm text-text-primary">Reporting</h4>
                                 <p className="text-xs font-medium text-text-secondary leading-relaxed">Financial, Operational, Executive Analytics.</p>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-6">
                           <h4 className="text-xl font-bold text-text-primary mb-6">Product Impact</h4>
                           
                           <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                              <div>
                                 <h5 className="font-bold text-sm text-text-primary flex items-center gap-2">
                                    <Heart size={16} className="text-[#0D63CC]" /> Clinical Teams
                                 </h5>
                                 <p className="text-xs font-medium text-text-secondary mt-1">Reduced documentation effort, better record consistency.</p>
                              </div>
                              <TrendingUp className="text-[#00DA99]" size={24} />
                           </div>

                           <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                              <div>
                                 <h5 className="font-bold text-sm text-text-primary flex items-center gap-2">
                                    <Wallet size={16} className="text-[#0D63CC]" /> Billing Teams
                                 </h5>
                                 <p className="text-xs font-medium text-text-secondary mt-1">Decreased submission time & rejection rates, increased visibility.</p>
                              </div>
                              <TrendingUp className="text-[#00DA99]" size={24} />
                           </div>

                           <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                              <div>
                                 <h5 className="font-bold text-sm text-text-primary flex items-center gap-2">
                                    <Users size={16} className="text-[#0D63CC]" /> Administrators
                                 </h5>
                                 <p className="text-xs font-medium text-text-secondary mt-1">Improved operational visibility, compliance readiness & tracking.</p>
                              </div>
                              <TrendingUp className="text-[#00DA99]" size={24} />
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* KEY TAKEAWAY */}
               <section className="mb-20 md:mb-32">
                  <div className="max-w-4xl mx-auto text-center">
                     <h3 className="text-2xl md:text-4xl font-bold text-text-primary mb-8 leading-tight">
                        "OasisPad was not designed as an EHR. It was designed as a connected behavioral health <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">operating system.</span>"
                     </h3>
                     <p className="text-lg text-text-secondary font-medium leading-relaxed max-w-3xl mx-auto">
                        By linking clinical workflows, billing operations, compliance management, and reporting into a single ecosystem, the platform transformed fragmented healthcare processes into a streamlined experience that supports both patient care and organizational growth.
                     </p>
                  </div>
               </section>

               {/* NEXT CASE STUDY NAVIGATION */}
               <section className="border-t border-slate-200/50 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4">Next Project</span>
                  <Link href="/case-studies/ticketstack" className="group flex flex-col items-center">
                     <h3 className="text-4xl md:text-5xl font-black text-text-primary group-hover:text-primary transition-colors duration-300 mb-6">
                        TicketStack
                     </h3>
                     <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
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
