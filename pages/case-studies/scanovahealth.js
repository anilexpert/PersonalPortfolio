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
   UserCheck, BookOpen, Sparkles
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GlowDivider from '../../components/GlowDivider'
import RotatingBadge from '../../components/RotatingBadge'

export default function ScanovaHealthCaseStudy() {
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
            <title>ScanovaHealth™ | Case Study — AI-Assisted Medical Device Validation &amp; MRI Readiness Platform</title>
            <meta name="description" content="ScanovaHealth™ is a healthcare-focused mobile platform that helps users digitally organize, validate, and access critical information related to implanted medical devices for MRI preparation." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>

         <Navbar />

         <main className="min-h-screen pt-20 md:pt-24 pb-20 md:pb-32 relative z-10">

            {/* ── 1. PAGE HERO (Inner Banner) ───────────────────── */}
            <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
               <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#06B6D4]/10 blur-[150px] rounded-full pointer-events-none" />
               <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#0EA5E9]/10 blur-[150px] rounded-full pointer-events-none" />

               <div className="max-w-7xl mx-auto relative z-10 text-center">
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex items-center justify-center gap-2 text-[10px] md:text-[12px] font-semibold text-text-secondary uppercase tracking-widest mb-4 md:mb-6">
                     <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                     <span>/</span>
                     <Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
                     <span>/</span>
                     <span className="text-[#06B6D4]">ScanovaHealth™</span>
                  </motion.div>

                  <motion.h1
                     initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                     className="text-[24px] sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 md:mb-6"
                  >
                     Case
                     <span className="bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] bg-clip-text text-transparent ml-2">Studies</span>
                  </motion.h1>

                  <div className="absolute top-2 right-[6%] hidden lg:block">
                     <RotatingBadge
                        icon={Award}
                        labels={["HEALTHTECH", "AI-POWERED", "MOBILE"]}
                        iconColor="#06B6D4"
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
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-6"
                     >
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">
                           Case Study
                        </span>
                     </motion.div>
                     <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-[0.9] text-text-primary">
                        ScanovaHealth™
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        AI-Assisted <span className="bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] bg-clip-text text-transparent">Medical Device Validation &amp; MRI Readiness Platform</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        Transforming how patients, caregivers, and healthcare professionals access, validate, and manage implant device information for MRI preparation.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-[#06B6D4] mb-1 opacity-50">Industry</p>
                        <p className="font-bold text-sm text-text-primary">Healthcare Technology</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-[#06B6D4] mb-1 opacity-50">Platform</p>
                        <p className="font-bold text-sm text-text-primary">iOS & Android</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-[#06B6D4] mb-1 opacity-50">Duration</p>
                        <p className="font-bold text-sm text-text-primary">6 Months</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-[#06B6D4] mb-1 opacity-50">Model</p>
                        <p className="font-bold text-sm text-text-primary">Subscription + Partnerships</p>
                     </div>
                  </motion.div>
               </section>

               {/* ── MAIN HERO IMAGE / PLACEHOLDER ───────────────────── */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-20 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[32px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-30 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #0EA5E9 100%)' }}
                     />
                     <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-4">
                        <Smartphone className="w-16 h-16 text-[#06B6D4] opacity-20" strokeWidth={1} />
                        <span className="font-bold tracking-[0.25em] text-[11px] uppercase text-text-secondary opacity-40 text-center px-8">
                           ScanovaHealth Mobile App — Device Scan · Device Library · MRI Compatibility · AI Validation · PDF Reports · MRI Center Discovery
                        </span>
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 via-transparent to-[#0EA5E9]/5 pointer-events-none" />
                  </div>
               </motion.section>

               {/* ── OVERVIEW / PROBLEM / SOLUTION ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Overview</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-6">
                           ScanovaHealth is a healthcare-focused mobile platform that helps users digitally organize, validate, and access critical information related to implanted medical devices — including pacemakers, ICDs, neurostimulators, implantable cardiac monitors, and other MRI-relevant devices.
                        </p>
                        <p className="text-base text-text-secondary leading-relaxed font-medium mb-6">
                           Traditionally, patients depend on physical implant cards, paperwork, hospital records, and manufacturer documentation when preparing for MRI procedures. Missing or outdated information can create uncertainty, administrative delays, and unnecessary stress.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                           {[
                              "Scan implant device cards",
                              "Digitally store device information",
                              "View MRI compatibility references",
                              "Generate professional PDF reports",
                              "Discover nearby MRI centers",
                              "AI-assisted device validation workflows",
                              "Maintain organized longitudinal records"
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 glass-card rounded-xl">
                                 <div className="w-2 h-2 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.5)] flex-shrink-0" />
                                 <span className="text-sm font-bold text-text-primary">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Problem Statement</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Patients with implanted medical devices frequently encounter difficulties when attempting to retrieve device information, verify MRI-related references, maintain organized records, and share documentation with providers. The existing ecosystem relies heavily on physical cards, paper records, manufacturer brochures, and manual record-keeping — creating significant friction during critical healthcare interactions.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              "Retrieve device information quickly",
                              "Verify MRI-related device references",
                              "Maintain organized medical records",
                              "Share device information with providers",
                              "Locate MRI facilities efficiently",
                              "Prepare documentation before appointments"
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
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Product Vision</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-6">
                           Empower every patient with instant access to organized implant device information, helping them prepare confidently for MRI-related healthcare journeys.
                        </p>
                        <p className="text-base text-text-secondary leading-relaxed font-medium">
                           ScanovaHealth positions itself as a bridge between patients, device information, and MRI preparedness — acting as a trusted personal medical-device companion while clearly communicating that final MRI eligibility decisions remain with healthcare providers and device manufacturers.
                        </p>
                     </div>
                  </div>
               </section>

               {/* ── PROJECT SUMMARY TABLE ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">Project At a Glance</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Summary</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Key metadata and team structure powering the ScanovaHealth™ mobile platform.</p>
                  </div>

                  <div className="glass-card rounded-[32px] overflow-hidden border-2 border-[#06B6D4]/10 hover:border-[#06B6D4]/30 transition-all duration-500 shadow-lg">
                     <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
                        {[
                           { label: "Product Name", value: "ScanovaHealth" },
                           { label: "Industry", value: "Healthcare Technology" },
                           { label: "Product Type", value: "Mobile Application" },
                           { label: "Platform", value: "iOS & Android" },
                           { label: "Duration", value: "6 Months" },
                           { label: "Team Size", value: "8 Members" },
                           { label: "Methodology", value: "Agile Product Development" },
                           { label: "Primary Users", value: "Patients with Implantable Devices" },
                           { label: "Secondary Users", value: "Caregivers, MRI Coordinators" },
                           { label: "Business Model", value: "Subscription + Healthcare Partnerships" },
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

               {/* ── BUSINESS OPPORTUNITY ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">Market Context</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Opportunity</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">The increasing number of implanted medical devices worldwide has created a growing need for a centralized digital solution.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                     {[
                        { title: "Rising Procedures", desc: "Pacemaker implant procedures increasing globally", color: "#06B6D4", icon: TrendingUp },
                        { title: "MRI Demand", desc: "Growth in MRI imaging procedures worldwide", color: "#0EA5E9", icon: Activity },
                        { title: "Self-Management", desc: "Increasing patient self-management trends", color: "#8B5CF6", icon: UserCheck },
                        { title: "Digital Adoption", desc: "Digital healthcare adoption accelerating", color: "#10B981", icon: Smartphone },
                        { title: "Portable Records", desc: "Need for portable health records growing", color: "#F59E0B", icon: FolderOpen },
                     ].map((item, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                           className="glass-card p-5 rounded-[20px] group hover:-translate-y-2 relative overflow-hidden border border-slate-200/60 hover:border-[#06B6D4]/40 transition-all duration-500"
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
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">Discovery</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Findings</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Insights from 120+ patients, 35 caregivers, and 20 MRI technicians shaped our product direction.</p>
                  </div>

                  {/* Research Stats */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-10">
                     {[
                        { value: "120+", label: "Patients Surveyed", color: "#06B6D4" },
                        { value: "35", label: "Caregivers Interviewed", color: "#0EA5E9" },
                        { value: "20", label: "MRI Technicians Consulted", color: "#10B981" },
                     ].map((s, i) => (
                        <div key={i} className="glass-card p-5 rounded-[20px] flex items-center gap-4 border border-slate-200/60 hover:border-[#06B6D4]/30 transition-all duration-300">
                           <p className="text-3xl font-black" style={{ color: s.color }}>{s.value}</p>
                           <p className="text-sm font-semibold text-text-secondary">{s.label}</p>
                        </div>
                     ))}
                  </div>

                  {/* Findings */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {[
                        { num: "01", title: "Lost Implant Cards", desc: "Patients often misplace implant cards.", impact: "Critical information unavailable during appointments.", color: "#06B6D4" },
                        { num: "02", title: "Forgotten Details", desc: "Users struggle to remember model numbers.", impact: "Delayed MRI scheduling.", color: "#0EA5E9" },
                        { num: "03", title: "Inaccessible Info", desc: "MRI-related information is difficult to access.", impact: "Increased patient anxiety.", color: "#8B5CF6" },
                        { num: "04", title: "Sharing Friction", desc: "Sharing information with providers is cumbersome.", impact: "Repeated administrative work.", color: "#F59E0B" },
                        { num: "05", title: "Digital Demand", desc: "Many users want a single digital record.", impact: "Opportunity for centralized management.", color: "#10B981" },
                     ].map((f, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                           className="glass-card p-6 md:p-8 rounded-[24px] group hover:-translate-y-2 relative overflow-hidden border border-slate-200/60 hover:border-[#06B6D4]/40 transition-all duration-500"
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
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">User Research</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Personas</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Three key user groups identified through stakeholder interviews, guiding design decisions and feature prioritization.</p>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-8">
                     {[
                        {
                           name: "Michael Thompson", role: "Retired Cardiac Patient", age: "Age 67 · Retired Engineer",
                           techComfort: "★★★★☆",
                           needs: ["Store implant info safely", "Access records before visits", "Reduce dependence on paperwork"],
                           pains: ["Misplaced implant cards", "Forgotten model numbers", "Difficulty locating info quickly"],
                           color: "#06B6D4", icon: Heart
                        },
                        {
                           name: "Sarah Mitchell", role: "Family Caregiver", age: "Age 43",
                           techComfort: "★★★★★",
                           needs: ["Manage records for family", "Keep info accessible", "Generate reports for appointments"],
                           pains: ["Multiple paper documents", "Fragmented info sources", "Last-minute info searches"],
                           color: "#0EA5E9", icon: Users
                        },
                        {
                           name: "Emily Rodriguez", role: "MRI Scheduling Coordinator", age: "Age 36",
                           techComfort: "★★★★★",
                           needs: ["Receive complete device info", "Improve scheduling efficiency", "Streamline documentation"],
                           pains: ["Missing device details", "Incomplete documentation", "Administrative delays"],
                           color: "#8B5CF6", icon: ClipboardList
                        }
                     ].map((persona, idx) => (
                        <motion.div key={idx} {...fadeIn}
                           className="glass-card rounded-[20px] p-6 md:p-8 group relative overflow-hidden flex flex-col border-2 border-[#06B6D4]/10 hover:border-[#06B6D4]/40 shadow-md"
                        >
                           <div className="absolute -top-24 -right-24 w-80 h-80 blur-[100px] rounded-full transition-all duration-1000 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0" style={{ backgroundColor: persona.color }} />

                           <div className="flex items-center gap-5 mb-6 relative z-10">
                              <div className="w-16 h-16 rounded-[16px] flex items-center justify-center flex-shrink-0 border-2" style={{ backgroundColor: `${persona.color}15`, borderColor: `${persona.color}30` }}>
                                 <persona.icon size={28} strokeWidth={1.5} style={{ color: persona.color }} />
                              </div>
                              <div>
                                 <h4 className="font-bold text-xl text-gray-800 tracking-tight">{persona.name}</h4>
                                 <p className="text-xs font-semibold mt-1 opacity-70" style={{ color: persona.color }}>{persona.role}</p>
                                 <p className="text-[11px] text-text-secondary font-medium mt-0.5">{persona.age}</p>
                              </div>
                           </div>

                           {/* Tech Comfort */}
                           <div className="mb-5 relative z-10 flex items-center gap-2">
                              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Tech Comfort:</span>
                              <span className="text-sm tracking-wider" style={{ color: persona.color }}>{persona.techComfort}</span>
                           </div>

                           <div className="space-y-4 relative z-10">
                              <div className="p-5 rounded-3xl bg-[#06B6D4]/5 border border-[#06B6D4]/20">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-3 flex items-center gap-2" style={{ color: persona.color }}>
                                    <CheckCircle2 size={14} strokeWidth={3} /> Goals
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.needs.map((n, i) => (
                                       <span key={i} className="px-3 py-1.5 bg-white/60 rounded-lg border border-[#06B6D4]/20 text-xs font-medium text-text-primary">{n}</span>
                                    ))}
                                 </div>
                              </div>
                              <div className="p-5 rounded-3xl bg-rose-50 border border-rose-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-rose-500 mb-3 flex items-center gap-2">
                                    <Activity size={14} strokeWidth={3} /> Pain Points
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.pains.map((p, i) => (
                                       <span key={i} className="px-3 py-1.5 bg-white/60 rounded-lg border border-rose-100 text-xs font-medium text-text-primary">{p}</span>
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
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">Research Insight</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Empathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Mapping</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Visualizing patient attitudes and behaviors to align our team on a deep understanding of end users.</p>
                  </div>

                  <div className="max-w-6xl mx-auto relative glass-card rounded-[40px] md:rounded-[60px] p-6 md:p-12 lg:p-16 overflow-hidden shadow-[0_20px_60px_-15px_rgba(6,182,212,0.2)] border border-[#06B6D4]/20 hover:border-[#06B6D4]/50 transition-all duration-700 bg-white/30 backdrop-blur-3xl group shadow-[inset_0_0_100px_rgba(255,255,255,0.6)]">
                     <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#06B6D4]/15 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#06B6D4]/20 transition-all duration-1000 -translate-x-1/4 -translate-y-1/4" />
                     <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0EA5E9]/15 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#0EA5E9]/20 transition-all duration-1000 translate-x-1/4 translate-y-1/4" />

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
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#06B6D4]/15" />
                              <div className="flex flex-col items-center gap-4 mb-4 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#06B6D4]/30 group-hover/card:border-[#06B6D4] transition-colors duration-500">
                                    <Brain className="w-6 h-6 text-[#06B6D4]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#06B6D4]">think</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {['"Is my device MRI compatible?"', '"Where did I keep my implant card?"', '"What information will the MRI center need?"'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#06B6D4] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" /><span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span></li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* SAYS */}
                        <div className="md:col-start-1 md:row-start-2 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#F59E0B]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#F59E0B]/15" />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#F59E0B]/30 group-hover/card:border-[#F59E0B] transition-colors duration-500">
                                    <MessageCircle className="w-6 h-6 text-[#F59E0B]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#F59E0B]">say</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {['"I wish everything was stored in one place."', '"I don\'t know my device model."', '"Tracking down my records is stressful."'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F59E0B] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" /><span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span></li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* CENTER PROFILE */}
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
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[-20%] right-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-rose-500/15" />
                              <div className="flex flex-col items-center md:items-end gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-rose-500/30 group-hover/card:border-rose-500 transition-colors duration-500">
                                    <Heart className="w-6 h-6 text-rose-500" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-rose-500">feel</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {["Uncertain about MRI readiness", "Concerned about missing critical information", "Unprepared for healthcare appointments"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500 opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" /><span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span></li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* DOES */}
                        <div className="md:col-start-2 md:row-start-3 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#06B6D4]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#06B6D4]/15" />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#06B6D4]/30 group-hover/card:border-[#06B6D4] transition-colors duration-500">
                                    <Activity className="w-6 h-6 text-[#06B6D4]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#06B6D4]">do</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {["Searches emails for device information", "Checks paperwork and files manually", "Calls healthcare providers for records"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#06B6D4] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" /><span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span></li>
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
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">Journey Mapping</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Journey Map</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">From device implantation through MRI appointment — the complete patient journey.</p>
                  </div>

                  <div className="glass-card rounded-[32px] overflow-hidden border-2 border-[#06B6D4]/10 hover:border-[#06B6D4]/30 transition-all duration-500 shadow-lg overflow-x-auto">
                     <div className="min-w-[640px]">
                        <div className="grid grid-cols-3 bg-gradient-to-r from-[#06B6D4]/10 to-[#0EA5E9]/10 border-b border-slate-200/60">
                           {["Stage", "Activity", "Pain Point"].map((h, i) => (
                              <div key={i} className="p-5 border-r border-slate-200/60 last:border-r-0">
                                 <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#06B6D4]">{h}</span>
                              </div>
                           ))}
                        </div>
                        {[
                           { stage: "1 · Implantation", activity: "Receives implant card", pain: "Card can be lost" },
                           { stage: "2 · Storage", activity: "Stores records manually", pain: "Information fragmentation" },
                           { stage: "3 · MRI Prep", activity: "Needs device information", pain: "Retrieval difficulty" },
                           { stage: "4 · Sharing", activity: "Shares info with providers", pain: "Manual process" },
                           { stage: "5 · Appointment", activity: "Requires accurate records", pain: "Administrative delays" },
                        ].map((row, i) => (
                           <div key={i} className={`grid grid-cols-3 border-b border-slate-200/60 last:border-b-0 hover:bg-[#06B6D4]/5 transition-colors duration-300 ${i % 2 === 0 ? 'bg-white/40' : 'bg-white/20'}`}>
                              <div className="p-5 border-r border-slate-200/60"><span className="font-bold text-sm text-[#06B6D4]">{row.stage}</span></div>
                              <div className="p-5 border-r border-slate-200/60"><span className="text-sm text-text-secondary font-medium">{row.activity}</span></div>
                              <div className="p-5"><span className="text-sm text-rose-500 font-semibold">{row.pain}</span></div>
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* ── CORE FEATURES ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">Core Value</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Core Features & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Smart Solutions</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Key functionalities designed to simplify implant device management and MRI readiness.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Device Card Scanning", desc: "Capture implant information quickly — reduced manual entry, faster onboarding, improved accuracy.", color: "#06B6D4", icon: Scan },
                        { num: "02", title: "Manual Device Entry", desc: "Alternative workflow capturing manufacturer, model, serial number, implant date, category, and notes.", color: "#0EA5E9", icon: PenTool },
                        { num: "03", title: "Device Library", desc: "Centralized repository with search, filters, categories, and device timeline management.", color: "#8B5CF6", icon: FolderOpen },
                        { num: "04", title: "MRI Compatibility Reference", desc: "Device reference details, reported MRI compatibility status, manufacturer info, and supporting notes.", color: "#F59E0B", icon: Eye },
                        { num: "05", title: "PDF Report Generation", desc: "Professional reports containing device information, references, metadata, and user notes.", color: "#F43F5E", icon: FileText },
                        { num: "06", title: "MRI Center Finder", desc: "Map view with distance calculations, contact information, and directions to nearby MRI facilities.", color: "#06B6D4", icon: MapPin },
                     ].map((feature, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                           className="glass-card p-6 md:p-8 rounded-[24px] group hover:-translate-y-2 relative overflow-hidden"
                        >
                           <div className="absolute -top-16 -right-16 w-40 h-40 blur-[50px] rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0" style={{ backgroundColor: feature.color }} />
                           <div className="flex items-center justify-between mb-8 relative z-10">
                              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${feature.color}20`, color: feature.color, border: `1px solid ${feature.color}30` }}>{feature.num}</div>
                              <feature.icon size={20} className="text-text-secondary opacity-20" />
                           </div>
                           <h4 className="font-bold text-xl text-text-primary mb-3 relative z-10">{feature.title}</h4>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed mb-8 relative z-10">{feature.desc}</p>
                           <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
                              <feature.icon size={48} strokeWidth={0.8} style={{ color: `${feature.color}30` }} />
                              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  {/* AI Disclaimer */}
                  <div className="mt-8 p-5 glass-card rounded-[20px] border-2 border-amber-200/60 bg-amber-50/30 flex items-start gap-4">
                     <Info size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                     <p className="text-sm text-amber-800 font-medium leading-relaxed"><strong>Important Note:</strong> The AI Validation Assistant does not determine MRI safety or eligibility. It assists with data completeness and record organization only.</p>
                  </div>
               </section>

               {/* ── DESIGN PROCESS ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-20 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">Process</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design Approach & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Process</span></h2>
                     <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">A systematic approach to solving complex healthcare information challenges through user-centric design.</p>
                  </div>

                  <div className="relative max-w-6xl mx-auto px-4">
                     <div className="hidden lg:block absolute top-16 left-24 right-24 h-1 z-0 pointer-events-none">
                        <svg width="100%" height="80" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none" className="opacity-30">
                           <path d="M0,40 Q125,0 250,40 T500,40 T750,40 T1000,40" stroke="#06B6D4" strokeWidth="2" strokeDasharray="8 8" className="animate-dash" />
                        </svg>
                     </div>

                     {/* DESKTOP */}
                     <div className="hidden lg:flex items-start justify-between relative z-10">
                        {[
                           { title: "Empathize", desc: "Patient interviews, caregiver research, MRI technician insights.", icon: Heart, type: "dashed" },
                           { title: "Define", desc: "User personas, problem definition & healthcare prioritization.", icon: Target, type: "dashed" },
                           { title: "Ideate", desc: "Device flows, information architecture, scanning workflows.", icon: Lightbulb, type: "solid-light" },
                           { title: "Design", desc: "Mobile UI system, accessibility-first components, prototypes.", icon: PenTool, type: "solid-light" },
                           { title: "Validate", desc: "Usability testing with patients, caregiver feedback, iteration.", icon: CheckCircle2, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className={`flex flex-col items-center w-48 relative ${i % 2 !== 0 ? 'translate-y-8' : ''} transition-transform duration-1000`}>
                              <motion.div {...fadeIn} transition={{ delay: i * 0.1 }}
                                 className={`w-32 h-32 rounded-full mb-8 flex flex-col items-center justify-center transition-all duration-500 group relative
                                 ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                                 ${step.type === 'solid-light' ? 'border-2 border-[#06B6D4] bg-[#E0F9FF] shadow-md' : ''}
                                 ${step.type === 'solid-dark' ? 'bg-[#0C4A6E] text-white shadow-xl' : ''}
                                 hover:scale-110 hover:shadow-2xl`}
                              >
                                 <step.icon size={28} strokeWidth={step.type === 'solid-dark' ? 2 : 1.5} className={step.type === 'solid-dark' ? 'text-white' : 'text-[#0C4A6E]'} />
                                 <span className={`text-[11px] font-black uppercase tracking-widest mt-2 ${step.type === 'solid-dark' ? 'text-white' : 'text-[#0C4A6E]'}`}>{step.title}</span>
                              </motion.div>
                              <motion.p {...fadeIn} transition={{ delay: i * 0.1 + 0.2 }} className="text-[11px] text-text-secondary font-bold text-center leading-relaxed max-w-[140px]">{step.desc}</motion.p>
                              {i < 4 && (
                                 <div className={`absolute top-16 -right-12 translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center pointer-events-none opacity-40 ${i % 2 === 0 ? 'rotate-[15deg] translate-y-4' : '-rotate-[15deg] -translate-y-4'}`}>
                                    <ArrowLeft size={18} className="text-slate-400 rotate-180" />
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>

                     {/* MOBILE */}
                     <div className="lg:hidden space-y-16">
                        {[
                           { title: "Empathize", desc: "Patient interviews, caregiver research, MRI technician insights.", icon: Heart, type: "dashed" },
                           { title: "Define", desc: "User personas, problem definition & healthcare prioritization.", icon: Target, type: "dashed" },
                           { title: "Ideate", desc: "Device flows, information architecture, scanning workflows.", icon: Lightbulb, type: "solid-light" },
                           { title: "Design", desc: "Mobile UI system, accessibility-first components, prototypes.", icon: PenTool, type: "solid-light" },
                           { title: "Validate", desc: "Usability testing with patients, caregiver feedback, iteration.", icon: CheckCircle2, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className="flex flex-col items-center relative">
                              <div className={`w-32 h-32 rounded-full mb-6 flex flex-col items-center justify-center 
                              ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                              ${step.type === 'solid-light' ? 'border-2 border-[#06B6D4] bg-[#E0F9FF] shadow-md' : ''}
                              ${step.type === 'solid-dark' ? 'bg-[#0C4A6E] text-white shadow-xl' : ''}`}>
                                 <step.icon size={28} strokeWidth={1.5} className={step.type === 'solid-dark' ? 'text-white' : 'text-[#0C4A6E]'} />
                                 <span className={`text-[11px] font-black uppercase tracking-widest mt-2 ${step.type === 'solid-dark' ? 'text-white' : 'text-[#0C4A6E]'}`}>{step.title}</span>
                              </div>
                              <p className="text-[11px] text-text-secondary font-bold text-center max-w-[200px]">{step.desc}</p>
                              {i < 4 && <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-slate-200" />}
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* ── UX CHALLENGES & SOLUTIONS ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">UX Strategy</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Challenges & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Solutions</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">How we solved critical UX challenges in medical information design.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                     {[
                        { challenge: "Users could misunderstand MRI reference information as medical advice.", solution: "Implemented contextual disclaimers and educational content throughout the app.", color: "#06B6D4" },
                        { challenge: "Complex medical terminology creates confusion.", solution: "Simplified content hierarchy and plain-language explanations.", color: "#0EA5E9" },
                        { challenge: "Users span multiple age groups with varying tech comfort.", solution: "Large touch targets and accessibility-first design approach.", color: "#8B5CF6" },
                        { challenge: "Medical records require trust and transparency.", solution: "Transparent data handling and clear source attribution throughout.", color: "#10B981" },
                     ].map((item, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}
                           className="glass-card p-6 md:p-8 rounded-[24px] group hover:-translate-y-2 relative overflow-hidden border border-slate-200/60 hover:border-[#06B6D4]/40 transition-all duration-500"
                        >
                           <div className="absolute -top-16 -right-16 w-40 h-40 blur-[50px] rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0" style={{ backgroundColor: item.color }} />
                           <div className="mb-5 relative z-10">
                              <div className="flex items-center gap-2 mb-2">
                                 <AlertTriangle size={14} strokeWidth={2.5} className="text-rose-500" />
                                 <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Challenge</span>
                              </div>
                              <p className="text-sm text-text-secondary font-medium leading-relaxed">{item.challenge}</p>
                           </div>
                           <div className="relative z-10">
                              <div className="flex items-center gap-2 mb-2">
                                 <CheckCircle2 size={14} strokeWidth={2.5} style={{ color: item.color }} />
                                 <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: item.color }}>Solution</span>
                              </div>
                              <p className="text-sm text-text-primary font-semibold leading-relaxed">{item.solution}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* ── DESIGN PRINCIPLES ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">Philosophy</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Principles</span></h2>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                     {[
                        { title: "Clarity Over Complexity", desc: "Present only the information users need.", color: "#06B6D4", icon: Eye },
                        { title: "Trust Through Transparency", desc: "Explain data sources and limitations.", color: "#0EA5E9", icon: Shield },
                        { title: "Accessibility First", desc: "Support users of varying technical abilities.", color: "#8B5CF6", icon: Users },
                        { title: "Safety by Design", desc: "Avoid clinical recommendations.", color: "#10B981", icon: Lock },
                        { title: "Efficiency Matters", desc: "Minimize effort for critical tasks.", color: "#F59E0B", icon: Zap },
                     ].map((p, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08 }}
                           className="glass-card p-5 rounded-[20px] group hover:-translate-y-1 relative overflow-hidden border border-slate-200/60 hover:border-[#06B6D4]/40 transition-all duration-500 text-center"
                        >
                           <div className="absolute -top-10 -right-10 w-24 h-24 blur-[40px] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: p.color }} />
                           <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                              <p.icon size={20} strokeWidth={1.5} style={{ color: p.color }} />
                           </div>
                           <h5 className="font-bold text-sm text-text-primary mb-2">{p.title}</h5>
                           <p className="text-xs text-text-secondary font-medium leading-relaxed">{p.desc}</p>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* ── DESIGN SYSTEM & VISUALS ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">Visual Identity</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design System & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Visuals</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">A mobile-first, WCAG-compliant design system built for healthcare clarity and premium user experience.</p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
                     {/* Colors */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#06B6D4]/10 hover:border-[#06B6D4]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#06B6D4]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3"><div className="w-2 h-2 bg-[#06B6D4] rounded-full" /> Color Palette</h4>
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
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3"><div className="w-2 h-2 bg-[#0EA5E9] rounded-full" /> Typography</h4>
                        <div className="flex-1 flex flex-col justify-center mb-8">
                           <div className="text-[100px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-400 tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">Aa</div>
                        </div>
                        <div className="space-y-4">
                           <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                              <span className="text-3xl font-black text-text-primary tracking-tight">Inter</span>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Primary</span>
                           </div>
                           <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                              <span className="text-2xl font-black text-text-primary tracking-tight">SF Pro</span>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Display</span>
                           </div>
                           <div className="flex justify-between text-xs font-medium text-text-secondary">
                              <span>Regular</span><span className="font-bold">Bold</span><span className="font-black">Black</span>
                           </div>
                        </div>
                     </div>

                     {/* Components */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-emerald-500/10 hover:border-[#06B6D4]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-1/2 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3"><div className="w-2 h-2 bg-emerald-500 rounded-full" /> Components</h4>
                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { icon: Scan, color: "text-[#06B6D4]" },
                              { icon: Brain, color: "text-[#0EA5E9]" },
                              { icon: Shield, color: "text-emerald-500" },
                              { icon: FileText, color: "text-[#06B6D4]" },
                              { icon: MapPin, color: "text-[#0C4A6E]" },
                              { icon: Bell, color: "text-amber-500" },
                              { icon: FolderOpen, color: "text-[#06B6D4]" },
                              { icon: Search, color: "text-[#0EA5E9]" },
                              { icon: Settings, color: "text-rose-500" }
                           ].map((Item, i) => (
                              <div key={i} className="aspect-square rounded-2xl bg-white/50 border border-slate-200 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                 <Item.icon size={24} strokeWidth={1.5} className={`${Item.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── INFORMATION ARCHITECTURE ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">Architecture</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Information <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Architecture</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                     {[
                        { module: "My Devices", color: "#06B6D4", icon: FolderOpen, items: ["Device Details", "MRI Reference", "Edit Device", "Device History"] },
                        { module: "Scan Device Card", color: "#0EA5E9", icon: Scan, items: ["Camera Capture", "Auto-Detection", "Data Extraction"] },
                        { module: "Add Device Manually", color: "#8B5CF6", icon: PenTool, items: ["Manufacturer", "Model & Serial", "Implant Date"] },
                        { module: "AI Validation", color: "#10B981", icon: Brain, items: ["Completeness Check", "Duplicate Detection", "Recommendations"] },
                        { module: "Generate PDF Report", color: "#F59E0B", icon: FileText, items: ["Device Info", "References", "Notes"] },
                        { module: "MRI Centers", color: "#F43F5E", icon: MapPin, items: ["Map View", "Distance", "Contact & Directions"] },
                        { module: "Saved Reports", color: "#06B6D4", icon: Database, items: ["Report History", "Share Options", "Export"] },
                        { module: "Notifications", color: "#0EA5E9", icon: Bell, items: ["Reminders", "Updates", "Alerts"] },
                        { module: "Settings", color: "#8B5CF6", icon: Settings, items: ["Profile", "Preferences", "Privacy"] },
                     ].map((item, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.06, duration: 0.8 }}
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
                                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: item.color, opacity: 0.5 }} />{sub}
                                 </li>
                              ))}
                           </ul>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* ── SWOT ANALYSIS ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">Strategic Analysis</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">SWOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Analysis</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        { title: "Strengths", items: ["Device scanning capability", "Centralized digital records", "PDF report exports", "MRI center discovery"], color: "text-[#06B6D4]", borderGlow: "from-[#06B6D4]/30 via-white/10 to-transparent", innerGlow: "bg-[#06B6D4]/15", borderColor: "border-[#06B6D4]/30", gradientFill: "from-white/60 to-white/90", icon: <Briefcase size={24} strokeWidth={2} className="text-[#06B6D4] group-hover:scale-110 transition-transform duration-500" /> },
                        { title: "Weaknesses", items: ["Reliance on available datasets", "User-entered data quality", "Initial onboarding effort", "Limited clinical integrations"], color: "text-[#F59E0B]", borderGlow: "from-[#F59E0B]/30 via-white/10 to-transparent", innerGlow: "bg-[#F59E0B]/15", borderColor: "border-[#F59E0B]/30", gradientFill: "from-white/60 to-white/90", icon: <Activity size={24} strokeWidth={2} className="text-[#F59E0B] group-hover:scale-110 transition-transform duration-500" /> },
                        { title: "Opportunities", items: ["Healthcare digitization trend", "Device ecosystem expansion", "AI-powered automation growth"], color: "text-[#0EA5E9]", borderGlow: "from-[#0EA5E9]/30 via-white/10 to-transparent", innerGlow: "bg-[#0EA5E9]/15", borderColor: "border-[#0EA5E9]/30", gradientFill: "from-white/60 to-white/90", icon: <Search size={24} strokeWidth={2} className="text-[#0EA5E9] group-hover:scale-110 transition-transform duration-500" /> },
                        { title: "Threats", items: ["Regulatory changes", "Emerging competitors", "Data privacy concerns"], color: "text-rose-500", borderGlow: "from-rose-500/30 via-white/10 to-transparent", innerGlow: "bg-rose-500/15", borderColor: "border-rose-500/30", gradientFill: "from-white/60 to-white/90", icon: <AlertTriangle size={24} strokeWidth={2} className="text-rose-500 group-hover:scale-110 transition-transform duration-500" /> }
                     ].map((box, i) => (
                        <div key={i} className={`relative rounded-[24px] p-[2px] border border-slate-200 bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
                           <div className={`bg-gradient-to-b ${box.gradientFill} backdrop-blur-2xl w-full h-full rounded-[22px] p-6 md:p-8 relative z-10 flex flex-col min-h-[300px] overflow-hidden`}>
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }} className={`absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none ${box.innerGlow}`} />
                              <div className="flex flex-col gap-4 mb-6 relative z-20">
                                 <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center border-2 ${box.borderColor}`}>{box.icon}</div>
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

               {/* ── VISUAL OVERVIEW ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">Interface</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">High-Fidelity <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Experience</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Seamless mobile experience across all modules — from device scanning to MRI center discovery.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Dashboard Overview" glowCls="bg-[#06B6D4]" textCls="text-[#06B6D4]" icon={Layout} />
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Device Detail Screen" glowCls="bg-[#0EA5E9]" textCls="text-[#0EA5E9]" icon={FolderOpen} />
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="MRI Reference Viewer" glowCls="bg-[#8B5CF6]" textCls="text-[#8B5CF6]" icon={Eye} />
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="AI Validation Center" glowCls="bg-[#10B981]" textCls="text-[#10B981]" icon={Brain} />
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="PDF Report Module" glowCls="bg-[#F59E0B]" textCls="text-[#F59E0B]" icon={FileText} />
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="MRI Center Finder" glowCls="bg-[#F43F5E]" textCls="text-[#F43F5E]" icon={MapPin} />
                  </div>
               </section>

               {/* ── METRICS & RESULTS ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">Impact</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Results</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Measurable outcomes that transformed implant device management and MRI preparation.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                     {[
                        { value: "85%", label: "Faster Device Information Retrieval", color: "#06B6D4", icon: Zap },
                        { value: "70%", label: "Reduction in Paper-Based Record Dependency", color: "#0EA5E9", icon: FileText },
                        { value: "60%", label: "Improvement in Appointment Preparedness", color: "#10B981", icon: CheckCircle2 },
                        { value: "90%", label: "User Task Completion Rate", color: "#8B5CF6", icon: Target },
                        { value: "4.8/5", label: "User Satisfaction Score", color: "#F59E0B", icon: Star },
                     ].map((metric, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1, duration: 0.8 }}
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
               </section>

               {/* ── COMPLIANCE DISCLAIMER ───────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="p-6 md:p-10 glass-card rounded-[24px] border-2 border-amber-200/60 bg-amber-50/20 relative overflow-hidden">
                     <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-400/10 blur-[80px] rounded-full pointer-events-none" />
                     <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                           <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center border border-amber-200">
                              <Shield size={20} className="text-amber-700" strokeWidth={2} />
                           </div>
                           <h4 className="font-bold text-xl text-amber-900">Compliance & Safety Disclaimer</h4>
                        </div>
                        <p className="text-sm text-amber-800 font-medium leading-relaxed">
                           ScanovaHealth is intended for informational and record-keeping purposes only. Information displayed within the platform is derived from available datasets and references. ScanovaHealth does not provide medical advice, diagnosis, treatment recommendations, or determine MRI safety or compatibility. Users should always consult healthcare professionals, imaging facilities, and device manufacturers before making healthcare decisions or undergoing MRI procedures.
                        </p>
                     </div>
                  </div>
               </section>

               {/* ── OUTCOMES & CONCLUSION ───────────────────── */}
               <section className="relative mb-20 overflow-hidden">
                  <motion.div {...fadeIn}
                     className="glass-card rounded-[24px] p-6 md:p-10 lg:p-14 relative overflow-hidden group shadow-3xl border-2 border-[#06B6D4]/20 hover:border-[#06B6D4]/40"
                  >
                     <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#06B6D4]/10 blur-[150px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]" />
                     <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0EA5E9]/5 blur-[120px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]" />

                     <div className="relative z-10">
                        <div className="mb-12 text-center max-w-4xl mx-auto">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
                              <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">Epilogue</span>
                           </div>
                           <h2 className="text-4xl font-bold text-text-primary mb-4">
                              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]">Future</span> of MRI Readiness.
                           </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 mb-20">
                           {[
                              {
                                 title: "Product Impact",
                                 items: ["Faster access to implant records", "Improved appointment readiness", "Reduced paperwork dependency", "Better information organization"],
                                 color: "text-[#06B6D4]", borderGlow: "from-[#06B6D4]/30 via-white/10 to-transparent", innerGlow: "bg-[#06B6D4]/15",
                                 borderColor: "border-[#06B6D4]/30 hover:border-[#06B6D4]", gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#06B6D4] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(6,182,212,0.3)]" />
                              },
                              {
                                 title: "Healthcare Outcomes",
                                 items: ["Improved documentation sharing", "Reduced information retrieval delays", "Enhanced patient preparedness", "Stronger provider confidence"],
                                 color: "text-[#0EA5E9]", borderGlow: "from-[#0EA5E9]/30 via-white/10 to-transparent", innerGlow: "bg-[#0EA5E9]/15",
                                 borderColor: "border-[#0EA5E9]/30 hover:border-[#0EA5E9]", gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#0EA5E9] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(14,165,233,0.3)]" />
                              },
                              {
                                 title: "Future Roadmap",
                                 items: ["OCR-powered device recognition", "Caregiver multi-user accounts", "Health record integrations", "AI-powered record assistant", "Expanded device database"],
                                 color: "text-rose-500", borderGlow: "from-rose-500/30 via-white/10 to-transparent", innerGlow: "bg-rose-500/15",
                                 borderColor: "border-rose-500/30 hover:border-rose-500", gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-rose-500 rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(244,63,94,0.3)]" />
                              }
                           ].map((box, i) => (
                              <div key={i} className={`relative border-1 border-[#06B6D4]/20 hover:border-[#06B6D4]/40 rounded-[22px] p-[2px] bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
                                 <div className={`bg-gradient-to-b ${box.gradientFill} backdrop-blur-3xl w-full h-full rounded-[18px] p-5 md:p-8 relative z-10 flex flex-col min-h-[300px] overflow-hidden`}>
                                    <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }} className={`absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none ${box.innerGlow}`} />
                                    <div className="flex items-center gap-4 mb-6 relative z-20">
                                       <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center border-2 ${box.borderColor} transition-colors duration-500 flex-shrink-0`}>{box.icon}</div>
                                       <h4 className="font-bold text-xl text-text-primary leading-tight">{box.title}</h4>
                                    </div>
                                    <ul className="space-y-3 flex-1 relative z-20">
                                       {box.items.map((item, j) => (
                                          <li key={j} className="flex items-start gap-3 group/li">
                                             <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-current ${box.color} opacity-50 transition-transform duration-300 group-hover/li:scale-[2] flex-shrink-0`} />
                                             <span className="text-[13px] font-semibold text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
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
                                 Conclusion
                              </h4>
                              <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed relative z-10">
                                 ScanovaHealth™ transforms how patients manage implant device information — replacing fragmented paper-based workflows with a unified, AI-assisted mobile platform. By combining device scanning, intelligent validation, and MRI center discovery, the platform empowers patients and caregivers to prepare confidently for MRI-related healthcare journeys while maintaining complete transparency about the boundaries of informational support.
                              </p>
                           </div>
                        </div>

                     </div>
                  </motion.div>
               </section>

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
                              src="/images/spendora/Visual-UI.png"
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
                     <motion.div {...fadeIn} className="relative glass-card rounded-[32px] p-8 md:p-12 border border-white/60 shadow-lg overflow-hidden group">
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
                              Dive deeper into the complete design system, enterprise workflows, interaction patterns, and component library behind Carenova Systems™.
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
                  <Link href="/case-studies/oasispad" className="group flex flex-col items-center">
                     <h3 className="text-4xl md:text-5xl font-black text-text-primary group-hover:text-[#8B5CF6] transition-colors duration-300 mb-6">
                        OasisPad
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
