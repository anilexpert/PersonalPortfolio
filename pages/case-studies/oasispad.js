import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, Brain, TrendingUp, Target, Smartphone, Shield, Zap,
   Search, Users, Grid, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase, HandCoins,
   PieChart, Handshake, MessageCircle, User, BookOpen, Calendar, BookOpenCheck,
   GraduationCap, Bell, Server, Shuffle, Wind, Feather, ClipboardList,
   Smile, History, Keyboard, Award
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
            <title>OasisPad™ | Case Study - Mental Health Documentation</title>
         </Head>

         <Navbar />

         <main className="min-h-screen pt-20 md:pt-24 pb-20 md:pb-32 relative z-10">

            {/* ── 1. PAGE HERO (Inner Banner) ───────────────────────────────────────────────── */}
            <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
               <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#0D63CC]/10 blur-[150px] rounded-full pointer-events-none" />
               <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />

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
                     <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent ml-2">Studies</span>
                  </motion.h1>

                  {/* Circular Rotating Badge */}
                  <div className="absolute top-2 right-[6%] hidden lg:block">
                     <RotatingBadge
                        icon={Award}
                        labels={["HEALTHCARE", "MENTAL HEALTH", "SAAS"]}
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
                        Seamless <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Mental Health Documentation</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        OasisPad™ is a digital platform designed to simplify and streamline the process of creating, managing, and organizing therapy notes for mental health professionals.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Category</p>
                        <p className="font-bold text-sm text-text-primary">Healthcare / SaaS</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">My Role</p>
                        <p className="font-bold text-sm text-text-primary">Product Designer</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Duration</p>
                        <p className="font-bold text-sm text-text-primary">8 Weeks</p>
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
                     <PremiumPlaceholder aspect="aspect-[21/9]" label="OasisPad Dashboard" glowCls="bg-[#0D63CC]" textCls="text-white" icon={Feather} />
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
                           OasisPad™ is a digital platform designed to simplify and streamline the process of creating, managing, and organizing therapy notes for mental health professionals. The goal was to eliminate friction in clinical documentation while maintaining compliance, clarity, and emotional sensitivity.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                           <span className="font-bold text-text-primary">Product Vision:</span> To build a calm, intelligent, and efficient note-taking ecosystem that reduces therapist burnout, improves session-to-note transition time, ensures compliance, and enhances focus on patient care over administrative tasks.
                        </p>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Problem</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Therapists spend 30–50% of their time on documentation. This leads to cognitive fatigue after sessions, inconsistent note structures, delayed documentation, compliance risks, and poor retrieval of past session data.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              "Manual & repetitive workflows",
                              "Lack of structured templates",
                              "Fragmented patient history tracking",
                              "No intelligent assistance during creation",
                              "Time gap between session & docs"
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
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Solution Strategy</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <div className="grid sm:grid-cols-2 gap-5">
                           {[
                              { icon: Brain, title: "Cognitive Ease First", desc: "Reduce thinking load during note entry", gradient: "from-[#0D63CC]/10 to-[#0D63CC]/5", border: "border-[#0D63CC]/20", hover: "hover:border-[#0D63CC]/50 hover:shadow-[0_8px_30px_-8px_rgba(13,99,204,0.25)]", iconBg: "bg-[#0D63CC]/10", iconColor: "text-[#0D63CC]", glow: "from-[#0D63CC]/20" },
                              { icon: Layout, title: "Structured Flexibility", desc: "Templates without rigidity", gradient: "from-[#00DA99]/10 to-[#00DA99]/5", border: "border-[#00DA99]/20", hover: "hover:border-[#00DA99]/50 hover:shadow-[0_8px_30px_-8px_rgba(0,218,153,0.25)]", iconBg: "bg-[#00DA99]/10", iconColor: "text-[#00DA99]", glow: "from-[#00DA99]/20" },
                              { icon: Wind, title: "Calm Interface", desc: "Reduce emotional & visual noise", gradient: "from-[#0D63CC]/10 to-[#00DA99]/5", border: "border-[#0D63CC]/15", hover: "hover:border-[#0D63CC]/40 hover:shadow-[0_8px_30px_-8px_rgba(13,99,204,0.2)]", iconBg: "bg-gradient-to-br from-[#0D63CC]/10 to-[#00DA99]/10", iconColor: "text-[#0D63CC]", glow: "from-[#00DA99]/20" },
                              { icon: Zap, title: "Speed Over Complexity", desc: "Fewer clicks, faster actions", gradient: "from-[#00DA99]/10 to-[#0D63CC]/5", border: "border-[#00DA99]/15", hover: "hover:border-[#00DA99]/40 hover:shadow-[0_8px_30px_-8px_rgba(0,218,153,0.2)]", iconBg: "bg-gradient-to-br from-[#00DA99]/10 to-[#0D63CC]/10", iconColor: "text-[#00DA99]", glow: "from-[#0D63CC]/20" },
                           ].map((item, i) => (
                              <div key={i} className={`relative group rounded-2xl p-[1.5px] bg-gradient-to-br ${item.glow} via-transparent to-transparent overflow-hidden transition-all duration-500 ${item.hover}`}>
                                 <div className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm w-full h-full rounded-2xl p-6 border ${item.border} flex items-start gap-4 transition-all duration-500`}>
                                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                       <item.icon className={`w-6 h-6 ${item.iconColor}`} strokeWidth={1.8} />
                                    </div>
                                    <div>
                                       <h5 className="font-bold text-base text-text-primary mb-1">{item.title}</h5>
                                       <p className="text-sm text-text-secondary font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>

               {/* ROLES & ACCESS / TARGET USERS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Audience
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Target <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Users</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        { title: "Licensed Therapists", icon: Heart, color: "#0D63CC" },
                        { title: "Psychologists", icon: Brain, color: "#00DA99" },
                        { title: "Clinics & Orgs", icon: Server, color: "#F59E0B" },
                        { title: "Psychiatry Assistants", icon: Users, color: "#0D63CC" }
                     ].map((role, i) => (
                        <div key={i} className="glass-card p-6 md:p-8 rounded-2xl border-2 border-slate-100 hover:border-[#0D63CC]/30 transition-all hover:-translate-y-2 flex flex-col items-center text-center group">
                           <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${role.color}15`, color: role.color }}>
                              <role.icon size={28} />
                           </div>
                           <h4 className="font-bold text-lg text-text-primary">{role.title}</h4>
                        </div>
                     ))}
                  </div>
               </section>

               {/* CHALLENGES AND SOLUTIONS (Problem Solving) */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Problem Solving
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Challenges</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        {
                           title: "Balancing Structure",
                           items: ["Challenge: Therapists need structured notes, but rigid forms slow them down.", "Solution: Structured flexibility & progressive disclosure."],
                           color: "text-[#0D63CC]", borderGlow: "from-[#0D63CC]/30", borderColor: "border-[#0D63CC]/30", icon: <ClipboardList size={24} />
                        },
                        {
                           title: "Reducing Cognitive Load",
                           items: ["Challenge: Users are mentally drained post-sessions.", "Solution: Effortless UI, smart suggestions, and minimal friction."],
                           color: "text-[#00DA99]", borderGlow: "from-[#00DA99]/30", borderColor: "border-[#00DA99]/30", icon: <Brain size={24} />
                        },
                        {
                           title: "Emotional Sensitivity",
                           items: ["Challenge: System vibes shouldn't feel harsh or overly clinical.", "Solution: Calm, neutral UI avoiding harsh contrasts."],
                           color: "text-rose-400", borderGlow: "from-rose-400/30", borderColor: "border-rose-400/30", icon: <Heart size={24} />
                        },
                        {
                           title: "Data Density",
                           items: ["Challenge: Large patient histories without overwhelming the UI.", "Solution: Timeline-based histories and visual grouping."],
                           color: "text-[#0D63CC]", borderGlow: "from-[#0D63CC]/30", borderColor: "border-[#0D63CC]/30", icon: <History size={24} />
                        }
                     ].map((box, i) => (
                        <div key={i} className={`relative rounded-[24px] p-[2px] border border-slate-200 bg-gradient-to-br ${box.borderGlow} via-white/10 to-transparent shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
                           <div className={`bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-2xl w-full h-full rounded-[22px] p-6 md:p-8 relative z-10 flex flex-col min-h-[250px]`}>
                              <div className="flex flex-col gap-4 mb-6">
                                 <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center border-2 ${box.borderColor} ${box.color} transition-colors`}>
                                    {box.icon}
                                 </div>
                                 <h5 className={`font-semibold text-[18px] ${box.color}`}>{box.title}</h5>
                              </div>
                              <ul className="space-y-4 flex-1">
                                 {box.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-2">
                                       <span className="text-[13px] font-medium text-text-secondary leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* KEY SCREENS & SOLUTION APPROACH */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Solution Approach
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Key Screens & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Flow</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Focused on speed, clarity, and cognitive support.</p>
                  </div>

                  <div className="space-y-16">
                     {/* Smart Note Creation */}
                     <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                           <h3 className="text-2xl font-bold mb-2 text-text-primary">1. Smart Note Creation System</h3>
                           <p className="text-text-secondary font-medium mb-8">Designed for flow state writing with minimal interruptions.</p>
                           <div className="space-y-4">
                              {[
                                 { icon: ClipboardList, text: "Pre-built structured templates (SOAP, DAP)", desc: "Standardized formats reduce decision fatigue" },
                                 { icon: Activity, text: "Expandable sections (progressive disclosure)", desc: "Show only what's needed, when it's needed" },
                                 { icon: Brain, text: "Smart suggestions & AI assistance", desc: "Context-aware prompts for faster documentation" }
                              ].map((item, i) => (
                                 <div key={i} className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#0D63CC]/20 via-transparent to-[#00DA99]/20 hover:from-[#0D63CC]/40 hover:to-[#00DA99]/40 transition-all duration-500">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex items-start gap-4 group-hover:bg-white/95 transition-all duration-500">
                                       <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0D63CC]/10 to-[#00DA99]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_4px_20px_-4px_rgba(13,99,204,0.3)] transition-all duration-500">
                                          <item.icon size={20} className="text-[#0D63CC]" strokeWidth={1.8} />
                                       </div>
                                       <div>
                                          <span className="font-bold text-[15px] text-text-primary block mb-0.5">{item.text}</span>
                                          <span className="text-xs text-text-secondary font-medium">{item.desc}</span>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div className="order-1 lg:order-2">
                           <PremiumPlaceholder aspect="aspect-[4/3]" label="Note Editor UI" glowCls="bg-[#0D63CC]" />
                        </div>
                     </div>

                     {/* Dashboard & Context */}
                     <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                           <PremiumPlaceholder aspect="aspect-[4/3]" label="Therapist Dashboard" glowCls="bg-[#00DA99]" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-bold mb-2 text-text-primary">2. Dashboard & Minimal Friction</h3>
                           <p className="text-text-secondary font-medium mb-8">Focus on actionability over analytics — therapists need speed, not data overload.</p>
                           <div className="space-y-4">
                              {[
                                 { icon: Layout, text: "Quick add notes (inline editing)", desc: "Start documenting without navigating away" },
                                 { icon: Keyboard, text: "Keyboard-first interactions", desc: "Power-user shortcuts for rapid workflows" },
                                 { icon: History, text: "Upcoming sessions & recent notes", desc: "Contextual overview at a glance" }
                              ].map((item, i) => (
                                 <div key={i} className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#00DA99]/20 via-transparent to-[#0D63CC]/20 hover:from-[#00DA99]/40 hover:to-[#0D63CC]/40 transition-all duration-500">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex items-start gap-4 group-hover:bg-white/95 transition-all duration-500">
                                       <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00DA99]/10 to-[#0D63CC]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_4px_20px_-4px_rgba(0,218,153,0.3)] transition-all duration-500">
                                          <item.icon size={20} className="text-[#00DA99]" strokeWidth={1.8} />
                                       </div>
                                       <div>
                                          <span className="font-bold text-[15px] text-text-primary block mb-0.5">{item.text}</span>
                                          <span className="text-xs text-text-secondary font-medium">{item.desc}</span>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Patient Profile */}
                     <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                           <h3 className="text-2xl font-bold mb-2 text-text-primary">3. Patient-Centric Profile</h3>
                           <p className="text-text-secondary font-medium mb-8">Timeline view reduces mental effort in recalling past sessions.</p>
                           <div className="space-y-4">
                              {[
                                 { icon: History, text: "Timeline-based records", desc: "Chronological session history for easy recall" },
                                 { icon: Grid, text: "Visual grouping of sessions", desc: "Organized clusters reduce cognitive scanning" }
                              ].map((item, i) => (
                                 <div key={i} className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-[#0D63CC]/20 via-transparent to-[#00DA99]/20 hover:from-[#0D63CC]/40 hover:to-[#00DA99]/40 transition-all duration-500">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex items-start gap-4 group-hover:bg-white/95 transition-all duration-500">
                                       <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0D63CC]/10 to-[#00DA99]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_4px_20px_-4px_rgba(13,99,204,0.3)] transition-all duration-500">
                                          <item.icon size={20} className="text-[#0D63CC]" strokeWidth={1.8} />
                                       </div>
                                       <div>
                                          <span className="font-bold text-[15px] text-text-primary block mb-0.5">{item.text}</span>
                                          <span className="text-xs text-text-secondary font-medium">{item.desc}</span>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div className="order-1 lg:order-2">
                           <PremiumPlaceholder aspect="aspect-[4/3]" label="Patient Profile & Timeline" glowCls="bg-[#0D63CC]" />
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
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design System & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">UI Strategy</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        Designed for cognitive ease, minimal emotional noise, and high focus.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4">
                     {/* Principles Spans 12 cols */}
                     <div className="lg:col-span-12 glass-card rounded-[40px] p-6 lg:p-10 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-8 min-h-[300px]">
                        <div className="w-full lg:w-1/3 bg-white rounded-3xl p-8 border border-[#0D63CC]/10 shadow-sm relative z-10 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(13,99,204,0.2)] hover:border-[#0D63CC]/30 transition-all duration-500">
                           <h4 className="font-bold text-xl mb-4 text-[#0D63CC]">Visual Direction</h4>
                           <ul className="text-sm text-text-secondary space-y-3 font-medium">
                              <li>• Soft neutral tones (calm psychology)</li>
                              <li>• Subtle shadows & layering</li>
                              <li>• Minimal borders → more whitespace</li>
                           </ul>
                        </div>
                        <div className="w-full lg:w-1/3 bg-white rounded-3xl p-8 border border-[#00DA99]/10 shadow-sm relative z-10 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,218,153,0.2)] hover:border-[#00DA99]/30 transition-all duration-500 delay-100">
                           <h4 className="font-bold text-xl mb-4 text-[#00DA99]">Typography & Interaction</h4>
                           <ul className="text-sm text-text-secondary space-y-3 font-medium">
                              <li>• High legibility for long-form writing</li>
                              <li>• Comfortable line spacing</li>
                              <li>• Keyboard shortcuts & auto-focus</li>
                           </ul>
                        </div>
                        <div className="w-full lg:w-1/3 bg-gradient-to-br from-[#0D63CC] to-[#00DA99] text-white rounded-3xl p-8 relative z-10 hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(0,218,153,0.4)] transition-all duration-500 delay-200 overflow-hidden group">
                           <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 blur-[40px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700" />
                           <h4 className="font-bold text-xl mb-4 relative z-10">Why Minimal UI?</h4>
                           <p className="text-sm text-white/90 leading-relaxed font-medium relative z-10">
                              Therapists operate in high cognitive environments. The UI must support thinking, not compete with it.
                           </p>
                        </div>
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
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Personas</span></h2>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                     {[
                        {
                           name: "Clinical Therapist",
                           role: "Primary User",
                           image: "/images/profile.png", 
                           bio: "Works with multiple patients daily. Struggles with post-session fatigue and needs a system that provides speed and structure without rigidity.",
                           needs: ["Faster documentation", "Consistent notes", "Easy retrieval of past records"],
                           pains: ["Documentation overload", "Memory loss gap", "Cognitive fatigue"],
                           color: "#0D63CC"
                        },
                        {
                           name: "Clinic Admin",
                           role: "Secondary User",
                           image: "/images/profile.png", 
                           bio: "Manages multiple therapists across the clinic. Needs to ensure compliance, consistency, and have visibility into organizational records.",
                           needs: ["Standardized documentation", "Compliance tracking", "Visibility into records"],
                           pains: ["Inconsistent therapist notes", "Difficult auditing"],
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
                                    <CheckCircle2 size={14} strokeWidth={3} /> Goals & Needs
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
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Empathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Mapping</span></h2>
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
                              <div className="flex flex-col items-center gap-4 mb-4 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#0D63CC]/30 group-hover/card:border-[#0D63CC] transition-colors duration-500">
                                    <Brain className="w-6 h-6 text-[#0D63CC]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#0D63CC]">think</span>?</h3>
                              </div>
                              <ul className="text-left space-y-2 w-full max-w-sm relative z-20">
                                 <li className="text-[12px] font-medium text-text-secondary leading-relaxed">"I might forget important details later."</li>
                              </ul>
                           </div>
                        </div>

                        {/* SAYS */}
                        <div className="md:col-start-1 md:row-start-2 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#F59E0B]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-500 hover:-translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#F59E0B]/30 group-hover/card:border-[#F59E0B] transition-colors duration-500">
                                    <MessageCircle className="w-6 h-6 text-[#F59E0B]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#F59E0B]">say</span>?</h3>
                              </div>
                              <ul className="text-left space-y-2 w-full max-w-sm relative z-20">
                                 <li className="text-[12px] font-medium text-text-secondary leading-relaxed">"I don’t want to spend hours writing notes after sessions."</li>
                              </ul>
                           </div>
                        </div>

                        {/* CENTER */}
                        <div className="hidden md:flex md:col-start-2 md:row-start-2 justify-center items-center relative z-10 w-full h-full min-h-[240px]">
                           <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#0D63CC] to-[#00DA99] p-2 shadow-[0_0_50px_rgba(139,92,246,0.3)] relative z-10 hover:scale-105 transition-transform duration-700">
                              <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(13,99,204,0.2)]">
                                 <User className="w-16 h-16 text-[#0D63CC] opacity-90" strokeWidth={1.5} />
                              </div>
                           </div>
                        </div>

                        {/* FEELS */}
                        <div className="md:col-start-3 md:row-start-2 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-rose-500/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-500 hover:translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-end text-center md:text-right relative overflow-hidden">
                              <div className="flex flex-col items-center md:items-end gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-rose-500/30 group-hover/card:border-rose-500 transition-colors duration-500">
                                    <Heart className="w-6 h-6 text-rose-500" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-rose-500">feel</span>?</h3>
                              </div>
                              <ul className="text-left space-y-2 w-full max-w-sm relative z-20">
                                 <li className="text-[12px] font-medium text-text-secondary leading-relaxed text-right">Mentally exhausted after back-to-back sessions.</li>
                              </ul>
                           </div>
                        </div>

                        {/* DOES */}
                        <div className="md:col-start-2 md:row-start-3 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#00DA99]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-500 hover:translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#00DA99]/30 group-hover/card:border-[#00DA99] transition-colors duration-500">
                                    <Activity className="w-6 h-6 text-[#00DA99]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#00DA99]">do</span>?</h3>
                              </div>
                              <ul className="text-left space-y-2 w-full max-w-sm relative z-20">
                                 <li className="text-[12px] font-medium text-text-secondary leading-relaxed text-center">Writes notes late → inconsistent quality.</li>
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
                     <h2 className="text-4xl font-bold text-text-primary mb-4">SWOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Analysis</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        { title: "Strengths", items: ["Structured + flexible UX", "Calm interface design", "Therapist-first workflows"], color: "text-[#00DA99]", borderGlow: "from-[#00DA99]/30 via-white/10 to-transparent", borderColor: "border-[#00DA99]/30", icon: <Briefcase size={24} className="text-[#00DA99]" /> },
                        { title: "Weaknesses", items: ["Learning curve for templates", "Requires habit change"], color: "text-[#F59E0B]", borderGlow: "from-[#F59E0B]/30 via-white/10 to-transparent", borderColor: "border-[#F59E0B]/30", icon: <Activity size={24} className="text-[#F59E0B]" /> },
                        { title: "Opportunities", items: ["AI-assisted documentation", "Voice-to-text integration", "Predictive insights"], color: "text-[#0D63CC]", borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent", borderColor: "border-[#0D63CC]/30", icon: <Search size={24} className="text-[#0D63CC]" /> },
                        { title: "Threats", items: ["Existing EHR systems", "Compliance regulations"], color: "text-rose-500", borderGlow: "from-rose-500/30 via-white/10 to-transparent", borderColor: "border-rose-500/30", icon: <FileText size={24} className="text-rose-500" /> }
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
                     <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0D63CC]/10 blur-[150px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]" />
                     <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00DA99]/5 blur-[120px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]" />

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
                                 title: "Expected Results",
                                 items: ["40–60% faster note creation", "Reduced cognitive load", "Consistent clinical documentation", "Faster patient history retrieval"],
                                 color: "text-[#00DA99]", borderGlow: "from-[#00DA99]/30", borderColor: "border-[#00DA99]/30", icon: <TrendingUp size={20} className="text-white" />, bgIcon: "bg-[#00DA99]"
                              },
                              {
                                 title: "Business Impact",
                                 items: ["Increased therapist productivity", "Better compliance readiness", "Scalable for clinics & enterprises"],
                                 color: "text-[#0D63CC]", borderGlow: "from-[#0D63CC]/30", borderColor: "border-[#0D63CC]/30", icon: <Brain size={20} className="text-white" />, bgIcon: "bg-[#0D63CC]"
                              },
                              {
                                 title: "Future Enhancements",
                                 items: ["AI-powered note summarization", "Voice-to-text therapy notes", "Predictive patient insights", "Integration with EHR systems"],
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
                           <div className="p-6 md:p-8 lg:p-10 glass-card rounded-[24px] border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-2xl transition-all duration-500 relative overflow-hidden group">
                              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#0D63CC]/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
                              <h4 className="font-bold text-2xl text-text-primary mb-6 flex items-center gap-4 relative z-10">
                                 <div className="w-8 h-8 bg-gradient-to-br from-[#0D63CC] to-[#00DA99] rounded flex-shrink-0" />
                                 Final Reflection
                              </h4>
                              <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed relative z-10">
                                 OasisNotes is not just a note-taking tool — it’s a cognitive support system for therapists. The design focuses on reducing friction, supporting mental workflows, and creating calm digital environments.
                              </p>
                           </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-slate-100 pt-10">
                           <Link href="/#projects" className="btn-premium px-12 py-5 text-sm">
                              <span>View Next Project</span>
                              <ArrowLeft size={18} className="rotate-180" />
                           </Link>
                           <p className="text-xs font-bold text-text-secondary uppercase tracking-widest opacity-40">
                              Thank you for reading the OasisPad Case Study.
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
