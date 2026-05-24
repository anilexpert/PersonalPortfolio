import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, Brain, TrendingUp, Target, Smartphone, Shield, Zap,
   Search, Users, Grid, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase, HandCoins,
   PieChart, Handshake, MessageCircle, User, BookOpen, Calendar, BookOpenCheck,
   GraduationCap, Bell, Server, Shuffle, Award
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GlowDivider from '../../components/GlowDivider'
import RotatingBadge from '../../components/RotatingBadge'

export default function SuperCampusCaseStudy() {
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

   const PremiumPlaceholder = ({ icon: Icon, label, glowCls = "bg-[#0D63CC]", textCls = "text-[#0D63CC]", aspect = "aspect-[16/9]" }) => (
      <div className={`w-full ${aspect} glass-card rounded-3xl flex flex-col items-center justify-center overflow-hidden relative group transition-all duration-500 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-lg`}>
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
            <title>SuperCampus™ | Case Study - School Management System</title>
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

                  {/* Circular Rotating Badge */}
                  <div className="absolute top-2 right-[6%] hidden lg:block">
                     <RotatingBadge
                        icon={Award}
                        labels={["EDTECH", "SCHOOL MGMT", "SAAS"]}
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
                        SuperCampus™
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        School <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Management & Communication Platform</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        A centralized school management platform designed to streamline academic operations, improve communication, and enhance visibility across administrators, teachers, students, and parents.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Category</p>
                        <p className="font-bold text-sm text-text-primary">EdTech / SaaS</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">My Role</p>
                        <p className="font-bold text-sm text-text-primary">Product Designer</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Platform Scope</p>
                        <p className="font-bold text-sm text-text-primary">Web & Mobile App</p>
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
                        style={{ background: 'linear-gradient(135deg, #00DA99 0%, #0D63CC 100%)' }}
                     />
                     <PremiumPlaceholder aspect="aspect-[21/9]" label="SuperCampus Platform Dashboard" glowCls="bg-[#00DA99]" textCls="text-white" icon={GraduationCap} />
                  </div>
               </motion.section>

               {/* OVERVIEW / CHALLENGES / SOLUTION */}
               <section className="mb-16 md:mb-24 lg:mb-32 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Overview</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-4">
                           SuperCampus™ integrates multiple workflows such as attendance, assessments, communication, scheduling, and student tracking into a unified digital ecosystem.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                           The <span className="font-bold text-text-primary">Primary Goal</span> is to create a scalable, easy-to-use system that simplifies school operations while improving engagement between institutions and families.
                        </p>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Problem Statement</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Traditional school systems often suffer from fragmented tools, manual overhead, and low student engagement due to disconnected workflows. This leads to inefficiencies, delays, and poor user experiences across all roles.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              "Fragmented tools for attendance & exams",
                              "Lack of real-time visibility for parents",
                              "Manual administrative overhead",
                              "Poor coordination with administration"
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-4 glass-card rounded-2xl">
                                 <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                                 <span className="text-sm font-bold text-text-primary">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Objectives</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                           {[
                              "Centralize all operations into one system",
                              "Improve communication with parents",
                              "Real-time tracking of student performance",
                              "Reduce manual workload for admins",
                              "Provide role-based, intuitive experiences",
                              "Ensure scalability across schools"
                           ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                 <CheckCircle2 className="w-6 h-6 text-[#00DA99] shrink-0" />
                                 <span className="text-lg font-medium text-text-secondary">{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </section>

               {/* ROLES & ACCESS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Access
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User Roles & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Access</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">The system is designed around four core user roles, each with tailored experiences.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        { title: "Super Admin", icon: Settings, desc: "Manages schools, users, permissions. Oversees analytics & data.", color: "#0D63CC" },
                        { title: "Teacher", icon: BookOpenCheck, desc: "Marks attendance, assigns tasks, shares media, tracks progress.", color: "#8B5CF6" },
                        { title: "Student", icon: GraduationCap, desc: "Views assignments, tracks performance, accesses learning materials.", color: "#F59E0B" },
                        { title: "Parent", icon: Users, desc: "Monitors performance, receives updates, communicates with teachers.", color: "#10B981" }
                     ].map((role, i) => (
                        <div key={i} className="glass-card p-6 md:p-8 rounded-2xl border-2 border-slate-100 hover:border-[#0D63CC]/30 transition-all hover:-translate-y-2 group">
                           <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${role.color}15`, color: role.color }}>
                              <role.icon size={28} />
                           </div>
                           <h4 className="font-bold text-xl text-text-primary mb-3">{role.title}</h4>
                           <p className="text-sm text-text-secondary font-medium">{role.desc}</p>
                        </div>
                     ))}
                  </div>
               </section>

               {/* DESIGN ITERATIONS / PROCESS (Instead of UX Process) */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-20 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Process
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design Iterations & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Improvements</span></h2>
                     <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
                        A systematic approach to solving complex educational administration challenges through iterative refinement.
                     </p>
                  </div>

                  <div className="relative max-w-6xl mx-auto px-4">
                     <div className="hidden lg:block absolute top-16 left-24 right-24 h-1 z-0 pointer-events-none">
                        <svg width="100%" height="80" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none" className="opacity-30">
                           <path d="M0,40 Q125,0 250,40 T500,40 T750,40 T1000,40" stroke="#0D63CC" strokeWidth="2" strokeDasharray="8 8" className="animate-dash" />
                        </svg>
                     </div>

                     <div className="hidden lg:flex items-start justify-between relative z-10">
                        {[
                           { title: "Simplified Layouts", desc: "Refined dashboard layouts to focus on core metrics.", icon: Layout, type: "dashed" },
                           { title: "Reduced Density", desc: "Managed information overload via progressive disclosure.", icon: Server, type: "solid-light" },
                           { title: "Hierarchy", desc: "Improved navigation hierarchy for quick access.", icon: Shuffle, type: "solid-light" },
                           { title: "Mobile UX", desc: "Enhanced mobile usability for Students and Parents.", icon: Smartphone, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className={`flex flex-col items-center w-56 relative ${i % 2 !== 0 ? 'translate-y-8' : ''} transition-transform duration-1000`}>
                              <motion.div {...fadeIn} transition={{ delay: i * 0.1 }} className={`w-32 h-32 rounded-full mb-8 flex flex-col items-center justify-center transition-all duration-500 group relative
                                 ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                                 ${step.type === 'solid-light' ? 'border-2 border-[#0D63CC] bg-[#E8F1FF] shadow-md' : ''}
                                 ${step.type === 'solid-dark' ? 'bg-[#282360] text-white shadow-xl' : ''}
                                 hover:scale-110 hover:shadow-2xl
                              `}>
                                 <step.icon size={28} strokeWidth={step.type === 'solid-dark' ? 2 : 1.5} className={step.type === 'solid-dark' ? 'text-white' : 'text-[#282360]'} />
                              </motion.div>
                              <h4 className="text-sm font-bold text-text-primary mb-2">{step.title}</h4>
                              <p className="text-[11px] text-text-secondary font-bold text-center leading-relaxed max-w-[180px]">{step.desc}</p>
                           </div>
                        ))}
                     </div>
                     
                     <div className="lg:hidden space-y-16">
                        {[
                           { title: "Simplified Layouts", desc: "Refined dashboard layouts to focus on core metrics.", icon: Layout, type: "dashed" },
                           { title: "Reduced Density", desc: "Managed information overload via progressive disclosure.", icon: Server, type: "solid-light" },
                           { title: "Hierarchy", desc: "Improved navigation hierarchy for quick access.", icon: Shuffle, type: "solid-light" },
                           { title: "Mobile UX", desc: "Enhanced mobile usability for Students and Parents.", icon: Smartphone, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className="flex flex-col items-center relative">
                              <div className={`w-32 h-32 rounded-full mb-6 flex flex-col items-center justify-center 
                                 ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                                 ${step.type === 'solid-light' ? 'border-2 border-[#0D63CC] bg-[#E8F1FF] shadow-md' : ''}
                                 ${step.type === 'solid-dark' ? 'bg-[#282360] text-white shadow-xl' : ''}
                              `}>
                                 <step.icon size={28} strokeWidth={1.5} className={step.type === 'solid-dark' ? 'text-white' : 'text-[#282360]'} />
                              </div>
                              <h4 className="text-sm font-bold text-text-primary mb-2">{step.title}</h4>
                              <p className="text-[11px] text-text-secondary font-bold text-center max-w-[200px]">{step.desc}</p>
                              {i < 3 && <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-slate-200" />}
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* KEY FEATURES GRID */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Capabilities
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Features</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">High-fidelity modules creating a seamless operational experience.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Dashboard System", desc: "Real-time overview, visual data summaries, and quick access.", color: "#00DA99" },
                        { num: "02", title: "Attendance Mgmt", desc: "Daily tracking, historical records, and class-wise filters.", color: "#0D63CC" },
                        { num: "03", title: "Tasks & Assignments", desc: "Task creation, submission tracking, and status indicators.", color: "#8B5CF6" },
                        { num: "04", title: "Notes & Media", desc: "Upload materials, categorized content, and easy retrieval.", color: "#F59E0B" },
                        { num: "05", title: "Calendar Sync", desc: "Academic schedules, events, deadlines, and reminders.", color: "#10B981" },
                        { num: "06", title: "Assessments & Comm", desc: "Performance tracking and parent-teacher updates.", color: "#3B82F6" }
                     ].map((feature, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                           className="glass-card p-6 md:p-8 rounded-[24px] group hover:-translate-y-2 relative overflow-hidden border border-[#0D63CC]/10"
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
                              <Layout size={20} className="text-text-secondary opacity-20" />
                           </div>
                           <h4 className="font-bold text-xl text-text-primary mb-3 relative z-10">{feature.title}</h4>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed mb-8 relative z-10">{feature.desc}</p>

                           <PremiumPlaceholder aspect="aspect-[4/3]" label={`${feature.title} UI`} glowCls={`bg-[${feature.color}]`} />
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* DESIGN SYSTEM & UX STRATEGY */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Experience Strategy
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Design</span></h2>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4">
                     
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Design Principles
                        </h4>
                        <ul className="space-y-4">
                           {["Clarity over complexity", "Consistency across roles", "Minimal cognitive load", "Action-first interfaces"].map((pt, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm font-medium text-text-secondary"><CheckCircle2 size={16} className="text-[#0D63CC]"/>{pt}</li>
                           ))}
                        </ul>
                     </div>

                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#00DA99]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#00DA99] rounded-full" /> Interaction Patterns
                        </h4>
                        <ul className="space-y-4">
                           {["Card-based modular content", "Progressive disclosure", "Status indicators (pending, etc)", "Quick actions for tasks"].map((pt, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm font-medium text-text-secondary"><CheckCircle2 size={16} className="text-[#00DA99]"/>{pt}</li>
                           ))}
                        </ul>
                     </div>

                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-rose-500/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-rose-500 rounded-full" /> Visual System
                        </h4>
                        <ul className="space-y-4">
                           {["Readable typography hierarchy", "Neutral base for dashboards", "Accent semantic colors", "Cards, Tables, Badges"].map((pt, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm font-medium text-text-secondary"><CheckCircle2 size={16} className="text-rose-500"/>{pt}</li>
                           ))}
                        </ul>
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
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                     {[
                        {
                           name: "Admin & Teacher",
                           role: "School Operations",
                           image: "/images/profile.png", // Generic placeholder
                           bio: "Needs central control and quick input tools. Wants to manage school operations efficiently and track student progress without time-consuming reporting.",
                           needs: ["Central control", "Analytics & Automation", "Quick input tools", "Clear insights"],
                           pains: ["Manual processes", "Scattered tools", "Time-consuming reporting"],
                           color: "#0D63CC"
                        },
                        {
                           name: "Student & Parent",
                           role: "Academic Consumers",
                           image: "/images/profile.png", // Generic placeholder
                           bio: "Needs real-time updates and a simple interface. Wants to stay organized, track learning, and monitor academic performance transparently.",
                           needs: ["Simple, accessible UI", "Real-time updates", "Easy communication"],
                           pains: ["Missed assignments", "Unclear schedules", "Lack of transparency"],
                           color: "#00DA99"
                        }
                     ].map((persona, idx) => (
                        <motion.div
                           key={idx}
                           {...fadeIn}
                           className="glass-card rounded-[20px] p-6 md:p-10 lg:p-12 group relative overflow-hidden flex flex-col border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-md"
                        >
                           <div
                              className="absolute -top-24 -right-24 w-80 h-80 blur-[100px] rounded-full transition-all duration-1000 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: persona.color }}
                           />
                           <div className="flex items-center gap-8 mb-12 relative z-10">
                              <div className="w-20 h-20 rounded-[16px] overflow-hidden glass-card flex-shrink-0 relative border-2 border-white shadow-lg bg-slate-100 flex items-center justify-center">
                                 <User size={40} className="text-slate-400" />
                              </div>
                              <div>
                                 <h4 className="font-bold text-3xl text-gray-800 tracking-tight">{persona.name}</h4>
                                 <p className="text-xs font-medium text-secondary mt-2 opacity-80">{persona.role}</p>
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
                                       <span key={i} className="px-4 py-2 bg-white/60 rounded-lg border border-primary/20 text-xs font-medium text-text-primary">{n}</span>
                                    ))}
                                 </div>
                              </div>
                              <div className="p-6 rounded-3xl bg-rose-50 border border-rose-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-rose-500 mb-4 flex items-center gap-2">
                                    <Activity size={14} strokeWidth={3} /> Critical Pain Points
                                 </h5>
                                 <div className="flex flex-wrap gap-3">
                                    {persona.pains.map((p, i) => (
                                       <span key={i} className="px-4 py-2 bg-white/60 rounded-lg border border-rose-100 text-xs font-medium text-text-primary">{p}</span>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     ))}
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
                        <div className="md:col-start-2 md:row-start-1 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#0D63CC]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <div className="flex flex-col items-center gap-4 mb-4 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#0D63CC]/30 group-hover/card:border-[#0D63CC] transition-colors duration-500">
                                    <Brain className="w-6 h-6 text-[#0D63CC]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#0D63CC]">think</span>?</h3>
                              </div>
                              <ul className="text-left space-y-2 w-full max-w-sm relative z-20">
                                 <li className="text-[12px] font-medium text-text-secondary leading-relaxed">"Am I missing something important?"</li>
                                 <li className="text-[12px] font-medium text-text-secondary leading-relaxed">"Is my child improving?"</li>
                              </ul>
                           </div>
                        </div>

                        {/* SAYS */}
                        <div className="md:col-start-1 md:row-start-2 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#F59E0B]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#F59E0B]/30 group-hover/card:border-[#F59E0B] transition-colors duration-500">
                                    <MessageCircle className="w-6 h-6 text-[#F59E0B]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#F59E0B]">say</span>?</h3>
                              </div>
                              <ul className="text-left space-y-2 w-full max-w-sm relative z-20">
                                 <li className="text-[12px] font-medium text-text-secondary leading-relaxed">"I need everything in one place"</li>
                                 <li className="text-[12px] font-medium text-text-secondary leading-relaxed">"Tracking progress should be easy"</li>
                              </ul>
                           </div>
                        </div>

                        {/* CENTER */}
                        <div className="hidden md:flex md:col-start-2 md:row-start-2 justify-center items-center relative z-10 w-full h-full min-h-[240px]">
                           <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#0D63CC] to-[#00DA99] p-2 shadow-[0_0_50px_rgba(13,99,204,0.3)] relative z-10 hover:scale-105 transition-transform duration-700">
                              <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(13,99,204,0.2)]">
                                 <User className="w-16 h-16 text-[#0D63CC] opacity-90" strokeWidth={1.5} />
                              </div>
                           </div>
                        </div>

                        {/* FEELS */}
                        <div className="md:col-start-3 md:row-start-2 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-rose-500/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-end text-center md:text-right relative overflow-hidden">
                              <div className="flex flex-col items-center md:items-end gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-rose-500/30 group-hover/card:border-rose-500 transition-colors duration-500">
                                    <Heart className="w-6 h-6 text-rose-500" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-rose-500">feel</span>?</h3>
                              </div>
                              <ul className="text-left space-y-2 w-full max-w-sm relative z-20">
                                 <li className="text-[12px] font-medium text-text-secondary leading-relaxed">Frustrated with complexity</li>
                                 <li className="text-[12px] font-medium text-text-secondary leading-relaxed">Relieved when information is clear</li>
                              </ul>
                           </div>
                        </div>

                        {/* DOES */}
                        <div className="md:col-start-2 md:row-start-3 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#00DA99]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#00DA99]/30 group-hover/card:border-[#00DA99] transition-colors duration-500">
                                    <Activity className="w-6 h-6 text-[#00DA99]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#00DA99]">do</span>?</h3>
                              </div>
                              <ul className="text-left space-y-2 w-full max-w-sm relative z-20">
                                 <li className="text-[12px] font-medium text-text-secondary leading-relaxed">Check dashboards frequently</li>
                                 <li className="text-[12px] font-medium text-text-secondary leading-relaxed">Use mobile for quick updates</li>
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
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        { title: "Strengths", items: ["Comprehensive platform", "Role-based customization", "Scalable architecture"], color: "text-[#00DA99]", borderGlow: "from-[#00DA99]/30 via-white/10 to-transparent", borderColor: "border-[#00DA99]/30", icon: <Briefcase size={24} className="text-[#00DA99] group-hover:scale-110 transition-transform" /> },
                        { title: "Weaknesses", items: ["Initial onboarding complexity", "Learning curve for new users"], color: "text-[#F59E0B]", borderGlow: "from-[#F59E0B]/30 via-white/10 to-transparent", borderColor: "border-[#F59E0B]/30", icon: <Activity size={24} className="text-[#F59E0B] group-hover:scale-110 transition-transform" /> },
                        { title: "Opportunities", items: ["Integration with external tools", "Advanced analytics", "Automation features"], color: "text-[#0D63CC]", borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent", borderColor: "border-[#0D63CC]/30", icon: <Search size={24} className="text-[#0D63CC] group-hover:scale-110 transition-transform" /> },
                        { title: "Threats", items: ["Competing systems", "Resistance to digital adoption"], color: "text-rose-500", borderGlow: "from-rose-500/30 via-white/10 to-transparent", borderColor: "border-rose-500/30", icon: <FileText size={24} className="text-rose-500 group-hover:scale-110 transition-transform" /> }
                     ].map((box, i) => (
                        <div key={i} className={`relative rounded-[24px] p-[2px] border border-slate-200 bg-gradient-to-br ${box.borderGlow} shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
                           <div className={`bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-2xl w-full h-full rounded-[22px] p-6 md:p-8 relative z-10 flex flex-col min-h-[300px]`}>
                              <div className="flex flex-col gap-4 mb-6">
                                 <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center border-2 ${box.borderColor} transition-colors`}>{box.icon}</div>
                                 <h5 className={`font-semibold text-[20px] ${box.color}`}>{box.title}</h5>
                              </div>
                              <ul className="space-y-3 flex-1">
                                 {box.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                       <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-current ${box.color} opacity-60`} />
                                       <span className="text-[13px] font-medium text-text-secondary">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}
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
                              Outcomes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Future Scope</span>
                           </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 mb-20">
                           {[
                              {
                                 title: "Impact & Outcomes",
                                 items: ["Operational Efficiency: Reduced manual processes", "User Engagement: Increased app usage by parents", "Data Visibility: Real-time insights across roles"],
                                 color: "text-[#00DA99]", borderGlow: "from-[#00DA99]/30", borderColor: "border-[#00DA99]/30", icon: <TrendingUp size={20} className="text-white" />, bgIcon: "bg-[#00DA99]"
                              },
                              {
                                 title: "Key Learnings",
                                 items: ["Role-based design is critical for complex systems", "Simplicity drives adoption in education", "Mobile-first thinking improves engagement"],
                                 color: "text-[#0D63CC]", borderGlow: "from-[#0D63CC]/30", borderColor: "border-[#0D63CC]/30", icon: <Brain size={20} className="text-white" />, bgIcon: "bg-[#0D63CC]"
                              },
                              {
                                 title: "Future Scope",
                                 items: ["Advanced reporting & analytics", "Integration with third-party tools", "Automation of repetitive tasks"],
                                 color: "text-rose-500", borderGlow: "from-rose-500/30", borderColor: "border-rose-500/30", icon: <Zap size={20} className="text-white" />, bgIcon: "bg-rose-500"
                              }
                           ].map((box, i) => (
                              <div key={i} className={`relative border-1 border-slate-200 rounded-[22px] p-[2px] bg-gradient-to-br ${box.borderGlow} via-white/10 to-transparent shadow-md hover:-translate-y-2 transition-all group`}>
                                 <div className={`bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[18px] p-6 md:p-8 flex flex-col`}>
                                    <div className="flex items-center gap-4 mb-6">
                                       <div className={`w-10 h-10 rounded-xl ${box.bgIcon} flex items-center justify-center shadow-lg`}>{box.icon}</div>
                                       <h4 className="font-bold text-lg text-text-primary">{box.title}</h4>
                                    </div>
                                    <ul className="space-y-3">
                                       {box.items.map((item, j) => (
                                          <li key={j} className="flex items-start gap-3"><span className={`mt-2 w-1.5 h-1.5 rounded-full bg-current ${box.color} flex-shrink-0`} /> <span className="text-[13px] font-semibold text-text-secondary">{item}</span></li>
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
                                 SuperCampus successfully transforms traditional school operations into a unified digital experience. By focusing on clarity, usability, and structured workflows, the platform enables efficient management while improving engagement across all stakeholders.
                              </p>
                           </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-slate-100 pt-10">
                           <Link href="/#projects" className="btn-premium px-12 py-5 text-sm">
                              <span>View Next Project</span>
                              <ArrowLeft size={18} className="rotate-180" />
                           </Link>
                           <p className="text-xs font-bold text-text-secondary uppercase tracking-widest opacity-40">
                              Thank you for reading the SuperCampus Case Study.
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
