import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, Brain, TrendingUp, Target, Smartphone, Shield, Zap,
   Search, Users, Grid, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase, HandCoins,
   PieChart, Handshake, MessageCircle, User, Award
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
            <title>Carenova™ | Case Study - Facility & Compliance Management Platform</title>
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

                  {/* Circular Rotating Badge */}
                  <div className="absolute top-2 right-[6%] hidden lg:block">
                     <RotatingBadge
                        icon={Award}
                        labels={["HEALTHCARE", "AI-PRODUCTS", "SAAS"]}
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
                        Carenova™
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        Facility & <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Compliance Management Platform</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        Carenova™ is an enterprise-grade Facility & Compliance Management Platform designed to streamline operations, ensure regulatory adherence, and enable data-driven decision-making across multi-location organizations.
                     </motion.p>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal mt-4">
                        The platform centralizes compliance tracking, facility operations, audits, asset monitoring, and workforce coordination into a unified system, reducing manual overhead and improving operational transparency.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Domain</p>
                        <p className="font-bold text-sm text-text-primary">Healthcare · SaaS</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Focus Area</p>
                        <p className="font-bold text-sm text-text-primary">RBAC · EHR · AI Workflows</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Role</p>
                        <p className="font-bold text-sm text-text-primary">UX / Product Designer</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Scope</p>
                        <p className="font-bold text-sm text-text-primary">Product · UX · Systems Design</p>
                     </div>
                  </motion.div>
               </section>

               {/* MAIN HERO IMAGE */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-20 relative group">
                  <PremiumPlaceholder aspect="aspect-[21/9]" label="Platform Dashboard Overview" icon={Layout} glowCls="bg-[#00DA99]" textCls="text-[#00DA99]" />
                  <Image
                     src="/images/carenova/CaseStudy-Hero-Thumnail.png"
                     alt="Carenova Dashboard"
                     fill
                     className="object-cover rounded-2xl overflow-hidden relative z-10"
                  />
               </motion.section>

               {/* OVERVIEW / CHALLENGES / SOLUTION */}
               <section className="mb-16 md:mb-24 lg:mb-32 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Problem Statement</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Organizations managing multiple facilities face significant challenges with fragmented compliance processes across systems, lack of real-time visibility into operations, and manual audits leading to errors and delays. Poor accountability across teams and difficulty in meeting regulatory standards consistently result in operational inefficiencies, compliance risks, and increased costs. Organizations managing multiple facilities face significant challenges:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              "Fragmented compliance processes across systems",
                              "Lack of real-time visibility into operations",
                              "Manual audits leading to errors and delays",
                              "Difficulty in meeting regulatory standards consistently"
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-4 glass-card rounded-2xl">
                                 <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(13,99,204,0.5)]" />
                                 <span className="text-sm font-bold text-text-primary">{item}</span>
                              </div>
                           ))}
                        </div>
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mt-4">
                           These issues result in operational inefficiencies, compliance risks, and increased costs.
                        </p>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Challenge</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Design a scalable platform that unifies facility and compliance workflows, supports multiple user roles with varying permissions, provides real-time, actionable insights, reduces manual dependency through automation, and maintains usability despite complex enterprise requirements. Design a scalable platform that:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              "Unifies facility and compliance workflows",
                              "Supports multiple user roles with varying permissions",
                              "Provides real-time, actionable insights",
                              "Reduces manual dependency through automation"
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
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Carenova™ delivers a centralized, AI-enabled platform that transforms facility and compliance management into a streamlined, intelligent workflow.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              "Unified Dashboard for real-time monitoring",
                              "Automated Compliance Tracking with alerts",
                              "Smart Audit Workflows with structured reporting",
                              "AI Recommendations for risk prediction",
                              "Scalable RBAC System for enterprise control"
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-4 glass-card rounded-2xl">
                                 <div className="w-2 h-2 rounded-full bg-[#00DA99] shadow-[0_0_10px_rgba(0,218,153,0.5)]" />
                                 <span className="text-sm font-bold text-text-primary">{item}</span>
                              </div>
                           ))}
                        </div>
                        <div className="mt-8 relative z-10">
                           <PremiumPlaceholder aspect="aspect-[16/10]" label="AI Recommendation Dashboard" icon={Brain} glowCls="bg-[#00DA99]" textCls="text-[#00DA99]" />
                           <Image
                                 src="/images/carenova/AI-Recommendations-UI-Preview.png"
                                 alt="AI-Recommendations-UI-Preview"
                                 fill
                                 className="object-cover rounded-2xl overflow-hidden relative z-10 transition-transform duration-1000"
                              />
                        </div>
                     </div>
                  </div>
               </section>

               {/* KEY FEATURES GRID */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Core Capabilities
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Key Features & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Smart Solutions</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">High-fidelity functionalities designed to empower users with intelligent automation and monitoring.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Smart Dashboard", desc: "Real-time facility overview, compliance score indicators, alerts & notifications.", color: "#00DA99", icon: Grid, image: "/images/carenova/Smart-healthcare dashboard-UI-Preview.png" },
                        { num: "02", title: "Audit Management", desc: "Structured audit workflows, checklist-based inspections, auto-generated reports.", color: "#0D63CC", icon: FileText, image: "/images/carenova/AuditManagement-UI-Preview.png" },
                        { num: "03", title: "Compliance Tracking", desc: "Regulation mapping, automated reminders, risk flagging.", color: "#8B5CF6", icon: Shield, image: "/images/carenova/Compliance-Tracking-UI-Preview.png" },
                        { num: "04", title: "AI Recommendations", desc: "Predictive compliance risks, suggested corrective actions, trend-based insights.", color: "#F59E0B", icon: Brain, image: "/images/carenova/AI-Recommendations-UI-Preview.png" },
                        { num: "05", title: "Role-Based Access (RBAC)", desc: "Super Admin / Admin / User roles, permission-based views, secure access control.", color: "#10B981", icon: Users, image: "/images/carenova/Role-Based-Access-UI-Preview.png" },
                        { num: "06", title: "Asset & Facility Tracking", desc: "Monitor multi-location asset health and maintenance workflows.", color: "#3B82F6", icon: Search, image: "/images/carenova/Asset-&-FacilityTrackingUI-Preview.png" }
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

                           <div className="relative z-10 aspect-[16/10] w-full">
                              <Image
                                 src={feature.image}
                                 alt={`${feature.title} UI Preview`}
                                 fill
                                 className="object-cover rounded-2xl overflow-hidden relative z-10 transition-transform duration-1000 group-hover:scale-[1.02]"
                              />
                           </div>
                        </motion.div>
                     ))}
                  </div>
                  <div className="mt-12 text-center relative z-10">
                     <div className="relative z-10 aspect-[21/9] w-full">
                        <Image
                           src="/images/carenova/FeatureScreens-Grid.png"
                           alt="Feature Screens Grid"
                           fill
                           className="object-cover rounded-3xl shadow-xl overflow-hidden"
                        />
                     </div>
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
                        We identified key user groups to understand their goals, pain points, and motivations.
                     </p>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                     {[
                        {
                           name: "Rajesh Verma",
                           role: "Facility Manager",
                           image: "/images/carenova-systems/rajesh.png",
                           fallbackIcon: Briefcase,
                           bio: "Needs to monitor facility operations efficiently, track maintenance schedules, and ensure all systems are functional.",
                           needs: ["Centralized system", "Quick issue reporting", "Automated tracking processes"],
                           pains: ["Lack of centralized system", "Delayed issue reporting", "Manual tracking processes"],
                           color: "#0D63CC"
                        },
                        {
                           name: "Anjali Mehta",
                           role: "Compliance Officer",
                           image: "/images/carenova-systems/anjali.png",
                           fallbackIcon: Shield,
                           bio: "Needs to ensure regulatory compliance, conduct audits efficiently, and maintain proper documentation.",
                           needs: ["Centralized compliance data", "Automated audit processes", "Error-free documentation"],
                           pains: ["Scattered compliance data", "Manual audit processes", "High risk of human error"],
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
                              <div className="w-24 h-24 rounded-[16px] overflow-hidden glass-card flex-shrink-0 relative border-2 border-white shadow-2xl flex items-center justify-center bg-slate-100">
                                 {/* Using fallback icon */}
                                 <persona.fallbackIcon className="w-10 h-10" style={{ color: persona.color }} strokeWidth={1.5} />
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
                                    <CheckCircle2 size={14} strokeWidth={3} /> Core Goals
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
                  <div className="mt-12 text-center relative z-10">
                     <div className="relative z-10 aspect-[21/9] w-full">
                        <Image
                           src="/images/carenova/UserPersonaCards-Preview.png"
                           alt="User Persona Cards Preview"
                           fill
                           className="object-cover rounded-3xl shadow-xl overflow-hidden"
                        />
                     </div>
                  </div>
               </section>

               {/* USER JOURNEY & IA */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-20 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Process
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Architecture</span></h2>
                     <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
                        A systematic workflow across key modules for seamless facility and compliance operations.
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
                     <div className="hidden lg:flex items-start justify-between relative z-10 mb-16">
                        {[
                           { num: "01", title: "Login", desc: "Login to platform securely.", icon: User, type: "dashed" },
                           { num: "02", title: "Dashboard", desc: "Access role-specific dashboard insights.", icon: Layout, type: "dashed" },
                           { num: "03", title: "Monitor", desc: "Monitor alerts & compliance status.", icon: Activity, type: "solid-light" },
                           { num: "04", title: "Audits", desc: "Perform audits & inspections.", icon: FileText, type: "solid-light" },
                           { num: "05", title: "Action", desc: "Generate reports & take corrective actions.", icon: CheckCircle2, type: "solid-dark" }
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
                     <div className="lg:hidden space-y-16 mb-16">
                        {[
                           { num: "01", title: "Login", desc: "Login to platform securely.", icon: User, type: "dashed" },
                           { num: "02", title: "Dashboard", desc: "Access role-specific dashboard insights.", icon: Layout, type: "dashed" },
                           { num: "03", title: "Monitor", desc: "Monitor alerts & compliance status.", icon: Activity, type: "solid-light" },
                           { num: "04", title: "Audits", desc: "Perform audits & inspections.", icon: FileText, type: "solid-light" },
                           { num: "05", title: "Action", desc: "Generate reports & take corrective actions.", icon: CheckCircle2, type: "solid-dark" }
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

                     <div className="mt-16 text-center relative z-10">
                        <div className="relative z-10 aspect-[21/9] w-full">
                           <Image
                              src="/images/carenova/IA-Diagram.png"
                              alt="IA Diagram"
                              fill
                              className="object-contain rounded-3xl shadow-xl overflow-hidden"
                           />
                        </div>
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
                        Clean, enterprise-grade UI focusing on data-first layouts and accessibility-focused contrast.
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
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-rose-500/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-1/2 right-0 w-32 h-32 bg-rose-500/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-rose-500 rounded-full" /> UI Components
                        </h4>

                        <div className="flex flex-col gap-4">
                           <div className="p-4 rounded-xl border border-slate-200 bg-white/50 text-sm font-semibold flex items-center gap-2 shadow-sm"><Layout size={18} className="text-[#0D63CC]" /> Cards</div>
                           <div className="p-4 rounded-xl border border-slate-200 bg-white/50 text-sm font-semibold flex items-center gap-2 shadow-sm"><Grid size={18} className="text-[#00DA99]" /> Tables</div>
                           <div className="p-4 rounded-xl border border-slate-200 bg-white/50 text-sm font-semibold flex items-center gap-2 shadow-sm"><Search size={18} className="text-rose-500" /> Filters</div>
                           <div className="p-4 rounded-xl border border-slate-200 bg-white/50 text-sm font-semibold flex items-center gap-2 shadow-sm"><Activity size={18} className="text-amber-500" /> Alerts & Indicators</div>
                        </div>
                     </div>
                  </div>
                  <div className="mt-12 text-center relative z-10 max-w-7xl mx-auto px-4">
                     <div className="relative z-10 aspect-[21/9] w-full">
                        <Image
                           src="/images/carenova/Design-System-Components.png"
                           alt="Design System Components"
                           fill
                           className="object-cover rounded-3xl shadow-xl overflow-hidden"
                        />
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
                                    "“Are we meeting all regulations?”",
                                    "“What if something gets missed?”",
                                    "“There must be a smarter way.”"
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
                                    "“I need everything in one place.”",
                                    "“Compliance tracking should be easier.”",
                                    "“I don’t want to miss critical alerts.”"
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
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <motion.div
                                 animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                 className="absolute top-[-20%] right-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-rose-500/15"
                              />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-rose-500/30 group-hover/card:border-rose-500 transition-colors duration-500">
                                    <Heart className="w-6 h-6 text-rose-500" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-rose-500">feel</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "Overwhelmed by complexity",
                                    "Concerned about compliance risks",
                                    "Frustrated with inefficiency"
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
                                    "Checks multiple systems",
                                    "Manually updates reports",
                                    "Coordinates with multiple teams"
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

                  <div className="mt-12 text-center relative z-10 max-w-6xl mx-auto">
                     <div className="relative z-10 aspect-[21/9] w-full">
                        <Image
                           src="/images/carenova/Empathy-Map-Grid.png"
                           alt="Empathy Map Grid"
                           fill
                           className="object-cover rounded-3xl shadow-xl overflow-hidden"
                        />
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
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Evaluating Carenova's competitive stance to ensure viability and identify risks.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        {
                           title: "Strengths",
                           items: ["Scalable enterprise architecture", "AI-driven insights", "Unified platform"],
                           color: "text-[#00DA99]",
                           borderGlow: "from-[#00DA99]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#00DA99]/15",
                           borderColor: "border-[#00DA99]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Briefcase size={24} strokeWidth={2} className="text-[#00DA99] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Weaknesses",
                           items: ["Initial learning curve", "High data dependency"],
                           color: "text-[#F59E0B]",
                           borderGlow: "from-[#F59E0B]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#F59E0B]/15",
                           borderColor: "border-[#F59E0B]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Activity size={24} strokeWidth={2} className="text-[#F59E0B] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Opportunities",
                           items: ["Integration with IoT systems", "Predictive analytics expansion"],
                           color: "text-[#0D63CC]",
                           borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#0D63CC]/15",
                           borderColor: "border-[#0D63CC]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Search size={24} strokeWidth={2} className="text-[#0D63CC] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Threats",
                           items: ["Regulatory changes", "Competitive SaaS tools"],
                           color: "text-rose-500",
                           borderGlow: "from-rose-500/30 via-white/10 to-transparent",
                           innerGlow: "bg-rose-500/15",
                           borderColor: "border-rose-500/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <FileText size={24} strokeWidth={2} className="text-rose-500 group-hover:scale-110 transition-transform duration-500" />
                        }
                     ].map((box, i) => (
                        <div key={i} className={`relative rounded-[24px] p-[2px] border border-slate-200 bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
                           <div className={`bg-gradient-to-b ${box.gradientFill} backdrop-blur-2xl w-full h-full rounded-[22px] p-6 md:p-8 relative z-10 flex flex-col min-h-[250px] overflow-hidden`}>
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
                  <div className="mt-12 text-center relative z-10">
                     <div className="relative z-10 aspect-[21/9] w-full">
                        <Image
                           src="/images/carenova/SWOT-Table.png"
                           alt="SWOT Table"
                           fill
                           className="object-contain rounded-3xl shadow-xl overflow-hidden"
                        />
                     </div>
                  </div>
               </section>

               {/* OUTCOMES & CONCLUSION */}
               <section className="relative mb-20 overflow-hidden">
                  <motion.div
                     {...fadeIn}
                     className="glass-card rounded-[24px] p-6 md:p-10 lg:p-14 relative overflow-hidden group shadow-3xl border-2 border-[#0D63CC]/20 hover:border-[#00DA99]/40"
                  >
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
                              Impact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Results.</span>
                           </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 mb-20">
                           {[
                              {
                                 title: "Impact & Results",
                                 items: ["40% improvement in operational efficiency", "60% reduction in manual compliance tracking", "Faster audit completion cycles", "Improved decision-making through analytics"],
                                 color: "text-[#00DA99]",
                                 borderGlow: "from-[#00DA99]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#00DA99]/15",
                                 borderColor: "border-[#00DA99]/30 hover:border-[#00DA99]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#00DA99] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(0,218,153,0.3)]" />
                              },
                              {
                                 title: "UX Decisions",
                                 items: ["Prioritized dashboard clarity over visual decoration", "Reduced cognitive load using progressive disclosure", "Used color-coded status systems for quick scanning", "Designed modular layouts for scalability"],
                                 color: "text-[#0D63CC]",
                                 borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#0D63CC]/15",
                                 borderColor: "border-[#0D63CC]/30 hover:border-[#0D63CC]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#0D63CC] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(13,99,204,0.3)]" />
                              },
                              {
                                 title: "Future Scope",
                                 items: ["AI-based anomaly detection", "Mobile app for field teams", "Integration with IoT sensors", "Advanced predictive analytics"],
                                 color: "text-[#8B5CF6]",
                                 borderGlow: "from-[#8B5CF6]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#8B5CF6]/15",
                                 borderColor: "border-[#8B5CF6]/30 hover:border-[#8B5CF6]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#8B5CF6] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(139,92,246,0.3)]" />
                              }
                           ].map((box, i) => (
                              <div key={i} className={`relative border-1 border-[#0D63CC]/20 hover:border-[#00DA99]/40 rounded-[22px] p-[2px] bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
                                 <div className={`bg-gradient-to-b ${box.gradientFill} backdrop-blur-3xl w-full h-full rounded-[18px] p-5 md:p-8 relative z-10 flex flex-col min-h-[280px] overflow-hidden`}>
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
                                 Final Outcome
                              </h4>
                              <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed relative z-10">
                                 Carenova™ successfully transforms facility and compliance management into a data-driven, intelligent ecosystem, enabling organizations to operate more efficiently while maintaining strict regulatory standards.
                              </p>
                           </div>
                        </div>

                        <div className="mt-12 mb-16 text-center relative z-10">
                           <div className="relative z-10 aspect-[21/9] w-full">
                              <Image
                                 src="/images/carenova/Final-UI-Showcase.png"
                                 alt="Final UI Showcase"
                                 fill
                                 className="object-cover rounded-3xl shadow-2xl overflow-hidden"
                              />
                           </div>
                        </div>

                     </div>
                  </motion.div>
               </section>

               {/* NEXT CASE STUDY NAVIGATION */}
               <section className="border-t border-slate-200/50 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4">Next Project</span>
                  <Link href="/case-studies/carevation" className="group flex flex-col items-center">
                     <h3 className="text-4xl md:text-5xl font-black text-text-primary group-hover:text-primary transition-colors duration-300 mb-6">
                        Carevation
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
