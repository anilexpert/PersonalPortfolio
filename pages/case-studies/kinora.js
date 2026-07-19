import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, ArrowRight, Brain, TrendingUp, Target, Shield, Zap,
   Search, Users, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase,
   MessageCircle, User, Award, ClipboardList, AlertTriangle,
   Database, BarChart2, Bell, Globe, Lock, Cpu, Smartphone,
   MapPin, Star, Scan, FolderOpen, Eye, Info,
   UserCheck, BookOpen, HeartPulse, FileHeart, Calendar, Sparkles
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GlowDivider from '../../components/GlowDivider'
import RotatingBadge from '../../components/RotatingBadge'

export default function KinoraCaseStudy() {
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

   // Premium Glass Placeholder Component adapted for Kinora colors
   const PremiumPlaceholder = ({ icon: Icon, label, glowCls = "bg-[#00DA99]", textCls = "text-[#00DA99]", aspect = "aspect-[16/9]" }) => (
      <div className={`w-full ${aspect} glass-card rounded-3xl flex flex-col items-center justify-center overflow-hidden relative group transition-all duration-500 border-2 border-black/5 hover:border-black/10 shadow-lg`}>
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
            <title>Kinora | Case Study — Smart Caregiving & Coordination Platform</title>
            <meta name="description" content="Kinora is a mobile-first caregiving platform designed to help family caregivers organize responsibilities, coordinate care, and manage health information." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>

         <Navbar />

         <main className="min-h-screen pt-10 md:pt-24 pb-10 md:pb-32 relative z-10">

            {/* ── 1. PAGE HERO (Inner Banner) ───────────────────── */}
            <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
               <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#00DA99]/10 blur-[150px] rounded-full pointer-events-none" />
               <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#0D63CC]/10 blur-[150px] rounded-full pointer-events-none" />

               <div className="max-w-7xl mx-auto relative z-10 text-center">
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex items-center justify-center gap-2 text-[10px] md:text-[12px] font-semibold text-text-secondary uppercase tracking-widest mb-4 md:mb-6">
                     <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                     <span>/</span>
                     <Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
                     <span>/</span>
                     <span className="text-[#00DA99]">Kinora</span>
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
                        icon={Heart}
                        labels={["HEALTHCARE", "CAREGIVING", "MOBILE APP"]}
                        iconColor="#00DA99"
                        size={150}
                     />
                  </div>
               </div>
            </section>

            <div className="w-full max-w-7xl mx-auto px-4 pt-10 lg:pt-14 md:px-6">

               {/* ── HERO SECTION ───────────────────── */}
               <section className="mb-12 md:mb-16 grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
                  <div className="lg:col-span-8">
                     <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DA99]/10 border border-[#00DA99]/20 mb-6"
                     >
                        <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest">
                           Case Study
                        </span>
                     </motion.div>
                     <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-[0.9] text-text-primary">
                        Kinora
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        Caregiving Simplified — <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">The Smarter Way to Manage the Weight of Care</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        Kinora is a mobile-first caregiving platform designed to help family caregivers organize responsibilities, coordinate care, manage health information, and stay connected with loved ones.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-[#00DA99] mb-1 opacity-50">Industry</p>
                        <p className="font-bold text-sm text-text-primary">Healthcare / Caregiving</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-[#00DA99] mb-1 opacity-50">Platform</p>
                        <p className="font-bold text-sm text-text-primary">iOS & Android</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-[#00DA99] mb-1 opacity-50">Duration</p>
                        <p className="font-bold text-sm text-text-primary">5 Months</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-[#00DA99] mb-1 opacity-50">Model</p>
                        <p className="font-bold text-sm text-text-primary">Freemium + Subscriptions</p>
                     </div>
                  </motion.div>
               </section>

               {/* ── MAIN HERO IMAGE / PLACEHOLDER ───────────────────── */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-20 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-30 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #00DA99 0%, #0D63CC 100%)' }}
                     />

                     <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-4">
                        <HeartPulse className="w-16 h-16 text-[#00DA99] opacity-20" strokeWidth={1} />
                        <span className="font-bold tracking-[0.25em] text-[11px] uppercase text-text-secondary opacity-40 text-center px-8">
                           Kinora App — Task Tracking · Med Reminders · Family Coordination · Vault · Timeline
                        </span>
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-br from-[#00DA99]/5 via-transparent to-[#0D63CC]/5 pointer-events-none" />
                     <Image
                        src="/images/kinora/Family-Coordination-Hero.png"
                        alt="Task Tracking · Med Reminders · Family Coordination · Vault · Timeline"
                        fill
                        className="object-cover relative z-10 duration-1000"
                     />
                  </div>
               </motion.section>

               {/* ── OVERVIEW / PROBLEM / SOLUTION ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Problem Statement</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Millions of family caregivers struggle with fragmented caregiving responsibilities spread across phone calls, text messages, paper documents, and calendar reminders.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              "Missed medical appointments",
                              "Medication errors",
                              "Communication breakdowns",
                              "Increased caregiver stress and burnout",
                              "Lost or disorganized medical documents",
                              "Lack of remote visibility for family members"
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-4 glass-card rounded-2xl">
                                 <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)] flex-shrink-0" />
                                 <span className="text-sm font-bold text-text-primary">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Business Goal</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-6">
                           Create a trusted caregiving ecosystem that alleviates the daily logistical burdens faced by millions of unpaid family caregivers globally.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                           {[
                              "Reduces caregiver stress and burden",
                              "Improves care coordination and transparency",
                              "Encourages family collaboration",
                              "Builds recurring subscription revenue",
                              "Connects remote family seamlessly",
                              "Enhances medication adherence"
                           ].map((item, i) => (
                              <div key={i} className="flex items-center gap-3 p-3 glass-card rounded-xl">
                                 <div className="w-2 h-2 rounded-full bg-[#00DA99] shadow-[0_0_10px_rgba(0,218,153,0.5)] flex-shrink-0" />
                                 <span className="text-sm font-bold text-text-primary">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Design Challenge</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                           How might we create a caregiving platform that helps families stay organized, share responsibilities, track health-related tasks, and reduce emotional burden—while remaining exceptionally simple enough for non-technical users and older adults to navigate?
                        </p>
                     </div>
                  </div>
               </section>


               {/* ── BUSINESS OPPORTUNITY ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-4 md:mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">Market Context</span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Opportunity</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">The aging population and decentralization of healthcare have created an immense need for consumer caregiving tools.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                     {[
                        { title: "Aging Population", desc: "Booming senior demographic globally", color: "#00DA99", icon: TrendingUp },
                        { title: "Caregiver Burnout", desc: "Unpaid caregivers face severe stress", color: "#0D63CC", icon: Activity },
                        { title: "Remote Families", desc: "Families spread across geographies", color: "#8B5CF6", icon: UserCheck },
                        { title: "Digital Health", desc: "Adoption of mobile health records", color: "#10B981", icon: Smartphone },
                        { title: "Care Coordination", desc: "High demand for shared task lists", color: "#F59E0B", icon: FolderOpen },
                     ].map((item, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                           className="glass-card p-5 rounded-[20px] group hover:-translate-y-2 relative overflow-hidden border border-slate-200/60 hover:border-[#00DA99]/40 transition-all duration-500"
                        >
                           <div className="absolute -top-10 -right-10 w-24 h-24 blur-[40px] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: item.color }} />
                           <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                              <item.icon size={18} strokeWidth={1.5} style={{ color: item.color }} />
                           </div>
                           <h5 className="font-bold text-sm text-text-primary mb-2">{item.title}</h5>
                           <p className="text-xs text-text-secondary font-medium leading-relaxed">{item.desc}</p>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* ── DISCOVERY RESEARCH ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-4 md:mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DA99]/10 border border-[#00DA99]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest">Discovery</span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Findings</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Insights from primary family caregivers and remote siblings shaped our platform.</p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 mb-10">
                     {[
                        { value: "45+", label: "Caregivers Interviewed", color: "#00DA99" },
                        { value: "20+", label: "Remote Siblings Surveyed", color: "#0D63CC" },
                        { value: "15", label: "Care Professionals Consulted", color: "#8B5CF6" },
                     ].map((s, i) => (
                        <div key={i} className="glass-card p-5 rounded-[20px] flex items-center gap-4 border border-slate-200/60 hover:border-[#00DA99]/30 transition-all duration-300">
                           <p className="text-3xl font-black" style={{ color: s.color }}>{s.value}</p>
                           <p className="text-sm font-semibold text-text-secondary">{s.label}</p>
                        </div>
                     ))}
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {[
                        { num: "01", title: "Information Silos", desc: "One sibling holds all the info.", impact: "Bottlenecks and resentment build up.", color: "#00DA99" },
                        { num: "02", title: "Medication Confusion", desc: "Regimens change frequently.", impact: "High risk of double-dosing or missed pills.", color: "#0D63CC" },
                        { num: "03", title: "Emotional Burnout", desc: "The primary caregiver feels alone.", impact: "Stress impacts their own health.", color: "#8B5CF6" },
                        { num: "04", title: "Guilt from Afar", desc: "Remote family wants to help.", impact: "They lack actionable ways to contribute.", color: "#F59E0B" },
                        { num: "05", title: "Paper Trails", desc: "Legal docs and notes are on paper.", impact: "Unavailable during emergencies.", color: "#10B981" },
                     ].map((f, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1, duration: 0.8 }}
                           className="glass-card p-6 md:p-8 rounded-[16px] lg:rounded-[24px] group hover:-translate-y-2 relative overflow-hidden border border-slate-200/60 hover:border-[#00DA99]/40 transition-all duration-500"
                        >
                           <div className="absolute -top-16 -right-16 w-40 h-40 blur-[50px] rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0" style={{ backgroundColor: f.color }} />
                           <div className="flex items-center gap-3 mb-6 relative z-10">
                              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs" style={{ backgroundColor: `${f.color}20`, color: f.color, border: `1px solid ${f.color}30` }}>{f.num}</div>
                              <h4 className="font-bold text-lg text-text-primary">{f.title}</h4>
                           </div>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed mb-4 relative z-10">{f.desc}</p>
                           <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 relative z-10">
                              <p className="text-xs font-semibold text-rose-600"><span className="font-black uppercase tracking-wider text-[10px]">Impact: </span>{f.impact}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* ── USER PERSONAS ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           User Research
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Personas</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        Understanding the distinct needs of primary caregivers and remote family members to build an inclusive experience.
                     </p>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                     {[
                        {
                           name: "Sarah Thompson",
                           role: "Primary Family Caregiver",
                           age: "Age 42",
                           bio: "Sarah lives 30 minutes away from her mother. She is overwhelmed by managing appointments, tracking medications, and coordinating with her siblings without a central system.",
                           needs: ["Centralized information", "Shared responsibilities", "Real-time updates"],
                           pains: ["Missed updates", "Too many reminders", "Information scattered"],
                           color: "#00DA99",
                           icon: HeartPulse
                        },
                        {
                           name: "Michael Johnson",
                           role: "Remote Family Member",
                           age: "Age 36",
                           bio: "Michael lives in a different state and wants to stay informed and help his family, but feels disconnected and lacks visibility into the daily care progress.",
                           needs: ["Activity timeline", "Notifications", "Care status updates"],
                           pains: ["Lack of visibility", "Poor communication", "Feeling disconnected"],
                           color: "#0D63CC",
                           icon: UserCheck
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

                           <div className="flex items-center gap-6 mb-8 relative z-10">
                              <div className="w-20 h-20 rounded-[16px] flex items-center justify-center flex-shrink-0 border-2 bg-white" style={{ borderColor: `${persona.color}30` }}>
                                 <persona.icon size={36} strokeWidth={1.5} style={{ color: persona.color }} />
                              </div>
                              <div>
                                 <h4 className="font-bold text-3xl text-gray-800 tracking-tight">{persona.name}</h4>
                                 <p className="text-sm font-semibold mt-1 opacity-80" style={{ color: persona.color }}>{persona.role}</p>
                                 <p className="text-xs text-text-secondary font-medium mt-1">{persona.age}</p>
                              </div>
                           </div>

                           <p className="text-base text-gray-800 leading-relaxed mb-10 relative z-10 font-medium">
                              "{persona.bio}"
                           </p>

                           <div className="space-y-6 relative z-10">
                              <div className="p-6 rounded-3xl bg-[#00DA99]/5 border border-[#00DA99]/20">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2" style={{ color: persona.color }}>
                                    <CheckCircle2 size={14} strokeWidth={3} /> Needs
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.needs.map((n, i) => (
                                       <span key={i} className="px-3 py-1.5 bg-white/80 rounded-lg border border-black/5 text-xs font-medium text-text-primary">
                                          {n}
                                          আকাশে
                                       </span>
                                    ))}
                                 </div>
                              </div>

                              <div className="p-6 rounded-3xl bg-rose-50 border border-rose-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-rose-500 mb-4 flex items-center gap-2">
                                    <Activity size={14} strokeWidth={3} /> Frustrations
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.pains.map((p, i) => (
                                       <span key={i} className="px-3 py-1.5 bg-white/80 rounded-lg border border-rose-100 text-xs font-medium text-text-primary">
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

               {/* ── EMPATHY MAP ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DA99]/10 border border-[#00DA99]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest">Research Insight</span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">Empathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Mapping</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Visualizing family caregiver attitudes to align our product decisions.</p>
                  </div>

                  <div className="max-w-6xl mx-auto relative glass-card rounded-[16px] lg:rounded-[24px] md:rounded-[60px] p-6 md:p-12 lg:p-16 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,218,153,0.2)] border border-[#00DA99]/20 hover:border-[#00DA99]/50 transition-all duration-700 bg-white/30 backdrop-blur-3xl group shadow-[inset_0_0_100px_rgba(255,255,255,0.6)]">
                     <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00DA99]/15 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#00DA99]/20 transition-all duration-1000 -translate-x-1/4 -translate-y-1/4" />
                     <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0D63CC]/15 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#0D63CC]/20 transition-all duration-1000 translate-x-1/4 translate-y-1/4" />

                     <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                        <svg width="100%" height="100%">
                           <line x1="0" y1="0" x2="100%" y2="100%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="12 12" className="opacity-50" />
                           <line x1="100%" y1="0" x2="0" y2="100%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="12 12" className="opacity-50" />
                        </svg>
                     </div>

                     <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 md:gap-12 items-center">
                        <div className="md:col-start-2 md:row-start-1 relative z-10 rounded-[16px] lg:rounded-[24px] p-[2px] bg-gradient-to-br from-[#00DA99]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#00DA99]/15" />
                              <div className="flex flex-col items-center gap-4 mb-4 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#00DA99]/30 group-hover/card:border-[#00DA99] transition-colors duration-500">
                                    <Brain className="w-6 h-6 text-[#00DA99]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#00DA99]">think</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {['"Did mom take her pills?"', '"How can I get my brother to help?"', '"I have no time for myself."'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00DA99] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" /><span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span></li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        <div className="md:col-start-1 md:row-start-2 relative z-10 rounded-[16px] lg:rounded-[24px] p-[2px] bg-gradient-to-br from-[#0D63CC]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[16px] lg:rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#0D63CC]/15" />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#0D63CC]/30 group-hover/card:border-[#0D63CC] transition-colors duration-500">
                                    <MessageCircle className="w-6 h-6 text-[#0D63CC]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#0D63CC]">say</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {['"I do everything around here."', '"Where is the insurance card?"', '"I need a break."'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0D63CC] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" /><span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span></li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        <div className="hidden md:flex md:col-start-2 md:row-start-2 justify-center items-center relative z-10 w-full h-full min-h-[240px]">
                           <div className="absolute inset-0 bg-[#00DA99]/20 blur-[60px] rounded-full animate-pulse z-0" />
                           <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#00DA99] to-[#0D63CC] p-2 shadow-[0_0_50px_rgba(0,218,153,0.3)] relative z-10 hover:scale-105 transition-transform duration-700">
                              <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,218,153,0.2)]">
                                 <User className="w-16 h-16 text-[#00DA99] opacity-90" strokeWidth={1.5} />
                              </div>
                           </div>
                        </div>

                        <div className="md:col-start-3 md:row-start-2 relative z-10 rounded-[16px] lg:rounded-[24px] p-[2px] bg-gradient-to-br from-rose-500/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[16px] lg:rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-end text-center md:text-right relative overflow-hidden">
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[-20%] right-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-rose-500/15" />
                              <div className="flex flex-col items-center md:items-end gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-rose-500/30 group-hover/card:border-rose-500 transition-colors duration-500">
                                    <Heart className="w-6 h-6 text-rose-500" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-rose-500">feel</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {["Overwhelmed by logistics", "Guilty for needing space", "Stressed about missing details"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500 opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" /><span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span></li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        <div className="md:col-start-2 md:row-start-3 relative z-10 rounded-[16px] lg:rounded-[24px] p-[2px] bg-gradient-to-br from-[#8B5CF6]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#8B5CF6]/15" />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#8B5CF6]/30 group-hover/card:border-[#8B5CF6] transition-colors duration-500">
                                    <Activity className="w-6 h-6 text-[#8B5CF6]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#8B5CF6]">do</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {["Writes tasks on sticky notes", "Sends massive group texts", "Digs through file cabinets"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" /><span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span></li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── USER JOURNEY MAP ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">Journey Mapping</span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Journey Map</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">A day in the life of a family caregiver coordinating a medical appointment.</p>
                  </div>

                  <div className="glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden border-2 border-[#00DA99]/10 hover:border-[#00DA99]/30 transition-all duration-500 shadow-lg overflow-x-auto">
                     <div className="min-w-[640px]">
                        <div className="grid grid-cols-3 bg-gradient-to-r from-[#00DA99]/10 to-[#0D63CC]/10 border-b border-slate-200/60">
                           {["Stage", "Activity", "Pain Point"].map((h, i) => (
                              <div key={i} className="px-5 py-3 border-r border-slate-200/60 last:border-r-0">
                                 <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#00DA99]">{h}</span>
                              </div>
                           ))}
                        </div>
                        {[
                           { stage: "1 · Planning", activity: "Scheduling doctor visit & coordinating transport", pain: "Juggling multiple calendars manually" },
                           { stage: "2 · Preparation", activity: "Gathering current med lists & past notes", pain: "Information is scattered across notes" },
                           { stage: "3 · Appointment", activity: "Taking notes and asking questions", pain: "Hard to recall sibling questions" },
                           { stage: "4 · Post-Visit", activity: "Updating family on the outcome", pain: "Having to repeat the story to 3 people" },
                           { stage: "5 · Routine", activity: "Adjusting med schedule based on new orders", pain: "High risk of miscommunication" },
                        ].map((row, i) => (
                           <div key={i} className={`grid grid-cols-3 border-b border-slate-200/60 last:border-b-0 hover:bg-[#00DA99]/5 transition-colors duration-300 ${i % 2 === 0 ? 'bg-white/40' : 'bg-white/20'}`}>
                              <div className="px-5 py-3 border-r border-slate-200/60"><span className="font-bold text-sm text-[#00DA99]">{row.stage}</span></div>
                              <div className="px-5 py-3 border-r border-slate-200/60"><span className="text-sm text-text-secondary font-medium">{row.activity}</span></div>
                              <div className="px-5 py-3"><span className="text-sm text-rose-500 font-semibold">{row.pain}</span></div>
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* ── CORE FEATURES ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-4 md:mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DA99]/10 border border-[#00DA99]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest">
                           Core Capabilities
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">Key Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Features</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Providing a unified solution for modern family caregiving.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Care Circle", desc: "Family caregiving collaboration with roles.", color: "#00DA99", icon: Users, image: "/images/kinora/Care-Circle-Thumbnail.png" },
                        { num: "02", title: "Smart Task Management", desc: "Track responsibilities and assign tasks.", color: "#0D63CC", icon: CheckSquare, image: "/images/kinora/Smart-Task-Management-Thumbnail.png" },
                        { num: "03", title: "Medication Reminders", desc: "Improve adherence with schedules.", color: "#8B5CF6", icon: Activity, image: "/images/kinora/Medication-Reminders-Thumbnail.png" },
                        { num: "04", title: "Appointment Management", desc: "Calendars, notes, and follow-ups.", color: "#F59E0B", icon: Calendar, image: "/images/kinora/Appointment-Management-Thumbnail.png" },
                        { num: "05", title: "Care Timeline", desc: "Visibility with historical records.", color: "#10B981", icon: Zap, image: "/images/kinora/Care-Timeline-Thumbnail.png" },
                        { num: "06", title: "Health Record Vault", desc: "Secure document storage.", color: "#3B82F6", icon: Database, image: "/images/kinora/Health-Record-Vault-Thumbnail.png" }
                     ].map((feature, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                           className="glass-card p-6 md:p-8 rounded-[16px] lg:rounded-[24px] group hover:-translate-y-2 relative overflow-hidden border border-black/5 shadow-sm"
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
                              <feature.icon size={20} className="text-text-secondary opacity-20" />
                           </div>
                           <h4 className="font-bold text-xl text-text-primary mb-3 relative z-10">{feature.title}</h4>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed mb-8 relative z-10">{feature.desc}</p>
                           <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
                              {/* <feature.icon size={48} strokeWidth={0.8} style={{ color: `${feature.color}30` }} />
                              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" /> */}
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

               {/* ── DESIGN SYSTEM & VISUALS ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Visual Identity
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">Design System & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Visuals</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        Soft healthcare aesthetics, high readability, and accessibility-first design.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4">
                     {/* Colors */}
                     <div className="lg:col-span-4 glass-card rounded-[16px] lg:rounded-[24px] p-6 lg:p-8 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Color Palette
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                           {[
                              { bg: 'bg-[#055E64]', label: 'Primary', hex: '#055E64' },
                              { bg: 'bg-[#3A147B]', label: 'Secondary', hex: '#3A147B' },
                              { bg: 'bg-[#FF9900]', label: 'Accent', hex: '#FF9900' },
                              { bg: 'bg-[#8EDBD5]', label: 'Neutral', hex: '#8EDBD5' }
                           ].map((color, i) => (
                              <div key={i} className="flex flex-col gap-2 group/color">
                                 <div className={`w-full aspect-square rounded-2xl ${color.bg} shadow-lg border border-black/5 group-hover/color:scale-110 group-hover/color:shadow-2xl transition-all duration-300`} />
                                 <div>
                                    <span className="block text-[10px] font-bold text-text-primary uppercase tracking-wider">{color.label}</span>
                                    <span className="block text-[9px] text-text-secondary font-medium uppercase opacity-50">{color.hex}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Typography */}
                     <div className="lg:col-span-4 glass-card rounded-[16px] lg:rounded-[24px] p-6 lg:p-8 border-2 border-[#00DA99]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
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
                              <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Readability</span>
                           </div>
                           <div className="flex justify-between text-xs font-medium text-text-secondary">
                              <span className="font-normal">Regular</span>
                              <span className="font-semibold">Semibold</span>
                              <span className="font-bold">Bold</span>
                           </div>
                        </div>
                     </div>

                     {/* Components */}
                     <div className="lg:col-span-4 glass-card rounded-[16px] lg:rounded-[24px] p-6 lg:p-8 border-2 border-rose-500/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-1/2 right-0 w-32 h-32 bg-rose-500/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-rose-500 rounded-full" /> Iconography
                        </h4>

                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { icon: HeartPulse, color: "text-[#00DA99]" },
                              { icon: CheckSquare, color: "text-[#0D63CC]" },
                              { icon: Calendar, color: "text-rose-500" },
                              { icon: FileHeart, color: "text-[#0D63CC]" },
                              { icon: Users, color: "text-[#282360]" },
                              { icon: Activity, color: "text-[#00DA99]" },
                              { icon: Shield, color: "text-slate-700" },
                              { icon: Smartphone, color: "text-[#0D63CC]" },
                              { icon: Layout, color: "text-rose-500" }
                           ].map((Item, i) => (
                              <div key={i} className="aspect-square rounded-2xl bg-white/50 border border-slate-200 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                 <Item.icon size={24} strokeWidth={1.5} className={`${Item.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── VISUAL OVERVIEW (Grid format like scanovahealth) ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DA99]/10 border border-[#00DA99]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest">Interface</span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">High-Fidelity <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Experience</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Seamless mobile experience across all caregiving modules.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     <div className="relative aspect-[3/4] w-full glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                        <Image
                           src="/images/kinora/Dashboard-Timeline-Thumbnail.png"
                           alt="Dashboard Timeline"
                           fill
                           className="object-cover relative z-10 duration-1000"
                        />
                     </div>
                     <div className="relative aspect-[3/4] w-full glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                        <Image
                           src="/images/kinora/Care-Circle-View-Thumbnail.png"
                           alt="Care Circle View"
                           fill
                           className="object-cover relative z-10 duration-1000"
                        />
                     </div>
                     <div className="relative aspect-[3/4] w-full glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                        <Image
                           src="/images/kinora/Medication-Tracker-Thumbnail.png"
                           alt="Medication Tracker"
                           fill
                           className="object-cover relative z-10 duration-1000"
                        />
                     </div>
                     <div className="relative aspect-[3/4] w-full glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                        <Image
                           src="/images/kinora/Appointment-Management-Thumbnail.png"
                           alt="Appointment Management"
                           fill
                           className="object-cover relative z-10 duration-1000"
                        />
                     </div>
                     <div className="relative aspect-[3/4] w-full glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                        <Image
                           src="/images/kinora/Health-Vault-Thumbnail.png"
                           alt="Health Vault"
                           fill
                           className="object-cover relative z-10 duration-1000"
                        />
                     </div>
                     <div className="relative aspect-[3/4] w-full glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                        <Image
                           src="/images/kinora/Task-Assignments-Thumbnail.png"
                           alt="Task Assignments"
                           fill
                           className="object-cover relative z-10 duration-1000"
                        />
                     </div>
                     {/* <PremiumPlaceholder aspect="aspect-[3/4]" label="Dashboard Timeline" glowCls="bg-[#00DA99]" textCls="text-[#00DA99]" icon={Layout} /> */}
                     {/* <PremiumPlaceholder aspect="aspect-[3/4]" label="Care Circle View" glowCls="bg-[#0D63CC]" textCls="text-[#0D63CC]" icon={Users} /> */}
                     {/* <PremiumPlaceholder aspect="aspect-[3/4]" label="Medication Tracker" glowCls="bg-[#8B5CF6]" textCls="text-[#8B5CF6]" icon={Activity} /> */}
                     {/* <PremiumPlaceholder aspect="aspect-[3/4]" label="Appointment Scheduler" glowCls="bg-rose-500" textCls="text-rose-500" icon={Calendar} /> */}
                     {/* <PremiumPlaceholder aspect="aspect-[3/4]" label="Health Vault" glowCls="bg-[#0D63CC]" textCls="text-[#0D63CC]" icon={FileHeart} /> */}
                     {/* <PremiumPlaceholder aspect="aspect-[3/4]" label="Task Assignments" glowCls="bg-[#00DA99]" textCls="text-[#00DA99]" icon={CheckSquare} /> */}
                  </div>
               </section>

               {/* ── FINAL OUTCOME ───────────────────── */}
               <section className="relative mb-20 overflow-hidden">
                  <motion.div
                     {...fadeIn}
                     className="glass-card rounded-[16px] lg:rounded-[24px] p-6 md:p-10 lg:p-14 relative overflow-hidden group shadow-3xl border-2 border-[#00DA99]/20 hover:border-[#0D63CC]/40"
                  >
                     <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00DA99]/10 blur-[150px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]" />
                     <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0D63CC]/5 blur-[120px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]" />

                     <div className="relative z-10">
                        <div className="mb-12 text-center max-w-4xl mx-auto">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DA99]/10 border border-[#00DA99]/20 mb-4">
                              <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest">
                                 Final Outcome
                              </span>
                           </div>
                           <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">
                              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Future</span> of Coordinated Care.
                           </h2>
                        </div>

                        <div className="mb-6">
                           <div className="p-6 md:p-8 lg:p-10 glass-card rounded-[16px] lg:rounded-[24px] border-2 border-[#00DA99]/10 hover:border-[#00DA99]/40 shadow-2xl transition-all duration-500 relative overflow-hidden group">
                              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#00DA99]/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
                              <h4 className="font-bold text-2xl text-text-primary mb-6 flex items-center gap-4 relative z-10">
                                 <div className="w-8 h-8 bg-[#00DA99] rounded flex-shrink-0" />
                                 Conclusion
                              </h4>
                              <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed relative z-10">
                                 Kinora is a mobile-first caregiving ecosystem that empowers families to coordinate care, manage health information, collaborate effectively, and reduce caregiver stress through an intuitive and human-centered digital experience.
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
                              src="/images/kinora/KinoraAppScreens.png"
                              alt="Visual UI"
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
                     <motion.div {...fadeIn} className="relative glass-card rounded-[16px] lg:rounded-[24px] p-8 md:p-12 border border-white/60 shadow-lg overflow-hidden group">
                        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#0D63CC]/15 blur-[80px] rounded-full group-hover:bg-[#0D63CC]/25 transition-colors duration-1000 pointer-events-none" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#00DA99]/15 blur-[80px] rounded-full group-hover:bg-[#00DA99]/25 transition-colors duration-1000 pointer-events-none" />

                        <div className="relative z-10">
                           <div className="inline-flex items-center justify-center w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#0D63CC] to-[#00DA99] shadow-md text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                              <Sparkles size={28} className="animate-pulse" />
                           </div>
                           <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4 drop-shadow-sm">
                              Explore the Full Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">on Figma</span>
                           </h2>
                           <p className="text-base md:text-lg text-text-secondary mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                              Dive deeper into the complete design system, enterprise workflows, interaction patterns, and component library behind Carenova Systems.
                           </p>

                           <div className="flex flex-wrap justify-center gap-2 mb-10">
                              {["50+ High-Fidelity Screens", "Complete Design System", "Enterprise Components", "Workflow Prototypes"].map((tag, i) => (
                                 <span key={i} className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-200/50 hover:bg-white transition-colors">
                                    <span className="text-[#0D63CC] mr-1">✓</span> {tag}
                                 </span>
                              ))}
                           </div>

                           <Link href="mailto:hello@example.com" className="inline-flex items-center gap-3 px-8 py-4 btn-premium text-white rounded-full font-bold hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(13,99,204,0.25)] hover:shadow-[0_30px_60px_-15px_rgba(13,99,204,0.35)] group text-base overflow-hidden relative bg-[#0D63CC]">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                              <span className="relative z-10">Get in Touch</span>
                              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </motion.div>
                  </div>
               </section>

               {/* NEXT CASE STUDY NAVIGATION */}
               <section className="mt-6 md:mt-6 pt-6 md:pt-6 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4">Next Project</span>
                  <Link href="/case-studies/marketvisionai" className="group flex flex-col items-center">
                     <h3 className="text-4xl md:text-5xl font-black text-text-primary group-hover:text-[#8B5CF6] transition-colors duration-300 mb-6">
                        MarketVision AI
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
