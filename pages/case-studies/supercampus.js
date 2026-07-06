import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, ArrowRight, ArrowDown, Brain, TrendingUp, Target, Smartphone, Shield, Zap,
   Search, Users, Grid, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase, HandCoins,
   PieChart, Handshake, MessageCircle, User, BookOpen, Calendar, BookOpenCheck,
   GraduationCap, Bell, Server, Shuffle, Award, BarChart2, ClipboardList,
   GitBranch, Layers, Monitor, Tablet, UserCheck, Building2, Star, Sparkles
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
            <title>SuperCampus | Case Study — End-to-End School Management Ecosystem</title>
            <meta name="description" content="SuperCampus is a comprehensive multi-role school management platform connecting administrators, teachers, students, and parents in a unified digital ecosystem." />
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

               {/* ── 2. HERO SECTION ───────────────────────────────────────────────────────── */}
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
                        SuperCampus
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        Designing a Modern <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">School Operations & Learning Management Platform</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-base text-text-secondary max-w-3xl leading-relaxed font-normal mb-4">
                        SuperCampus is a comprehensive education management platform designed to streamline academic operations, improve communication, and connect administrators, teachers, students, and parents through a unified digital ecosystem.
                     </motion.p>
                     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="flex flex-wrap gap-2">
                        {["Product Strategy", "UX Research", "Information Architecture", "Multi-Role Design", "Mobile & Web"].map((tag, i) => (
                           <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-[#0D63CC]/8 border border-[#0D63CC]/15 text-[#0D63CC]">{tag}</span>
                        ))}
                     </motion.div>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:pl-10 lg:border-l border-slate-200/60 pt-4">
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Role</p>
                        <p className="font-bold text-sm text-text-primary">Lead Product Designer</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Industry</p>
                        <p className="font-bold text-sm text-text-primary">EdTech SaaS</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Platform</p>
                        <p className="font-bold text-sm text-text-primary">Web + Mobile</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Duration</p>
                        <p className="font-bold text-sm text-text-primary">8 Months</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Team</p>
                        <p className="font-bold text-sm text-text-primary">Product Manager, Developers</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Responsibilities</p>
                        <p className="font-bold text-sm text-text-primary">UX Research, Information Architecture, UX/UI Design, Design System, Prototyping</p>
                     </div>
                  </motion.div>
               </section>

               {/* ── 3. MAIN HERO IMAGE ────────────────────────────────────────────────────── */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-20 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[32px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-30 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #0D63CC 0%, #00DA99 100%)' }}
                     />
                     {/* <PremiumPlaceholder aspect="aspect-[21/9]" label="SuperSchool Platform Dashboard" glowCls="bg-[#0D63CC]" textCls="text-white" icon={GraduationCap} /> */}
                     <Image
                        src="/images/supercampus/SuperSchool-Platform-Dashboard.png"
                        alt="SuperSchool Platform Dashboard"
                        fill
                        className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.02]"
                     />
                  </div>
               </motion.section>

               {/* ── 4. OVERVIEW / PROBLEM / SOLUTION ─────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Project Overview</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-4">
                           Educational institutions often rely on disconnected systems, manual administrative processes, and fragmented communication channels. SuperCampus was designed to centralize academic operations, student information, communication, attendance, and reporting into a single scalable platform.
                        </p>
                     </div>
                  </div>

                  <GlowDivider />

                  {/* Platform Scope */}
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Platform Scope</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                           {[
                              { icon: Monitor, label: "Super Admin Portal", desc: "Full platform management & analytics", color: "#0D63CC" },
                              { icon: Settings, label: "School Admin Portal", desc: "School operations & reporting", color: "#00DA99" },
                              { icon: Smartphone, label: "Teacher Mobile App", desc: "Attendance, tasks & assessments", color: "#F59E0B" },
                              { icon: Users, label: "Parent & Student App", desc: "Progress, communication & updates", color: "#8B5CF6" },
                           ].map((item, i) => (
                              <div key={i} className="group relative rounded-2xl p-[1px] bg-gradient-to-br overflow-hidden transition-all duration-500 hover:-translate-y-1" style={{ background: `linear-gradient(135deg, ${item.color}25, transparent)` }}>
                                 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 h-full flex flex-col gap-3 border border-slate-100 group-hover:bg-white/95 transition-all duration-500">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                       <item.icon size={20} strokeWidth={1.8} />
                                    </div>
                                    <div>
                                       <p className="font-bold text-[13px] text-text-primary">{item.label}</p>
                                       <p className="text-xs text-text-secondary font-medium mt-0.5">{item.desc}</p>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                        <p className="mt-6 text-base text-text-secondary font-medium leading-relaxed">
                           <span className="font-bold text-text-primary">Project Vision:</span> To create a connected educational ecosystem where every stakeholder can access the right information at the right time while reducing administrative burden and improving educational outcomes.
                        </p>
                     </div>
                  </div>

                  <GlowDivider />

                  {/* The Problem */}
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">The Challenge</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-4">
                           Schools faced several operational challenges:
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-lg text-text-secondary leading-relaxed font-medium space-y-2">
                           <li>Administrative tasks were highly manual.</li>
                           <li>Student data was distributed across multiple systems.</li>
                           <li>Communication between schools and parents lacked transparency.</li>
                           <li>Attendance, scheduling, and reporting processes consumed significant staff time.</li>
                           <li>Stakeholders required role-specific experiences and permissions.</li>
                        </ul>
                        <div className="mb-12">
                           <h4 className="font-bold text-text-primary mb-10 w-full text-center">Problem Visualization</h4>
                           <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-4">
                              {/* Dashed line */}
                              <div className="hidden md:block absolute top-[64px] left-[10%] right-[10%] h-[2px] border-t-[2px] border-dashed border-rose-200 z-0" />

                              {[
                                 { title: "MANUAL", desc: "Administration.", icon: ClipboardList, style: "dashed" },
                                 { title: "FRAGMENTED", desc: "Communication.", icon: Users, style: "dashed" },
                                 { title: "DISCONNECTED", desc: "Systems.", icon: Layers, style: "solid" },
                                 { title: "OPERATIONAL", desc: "Inefficiencies.", icon: Activity, style: "solid" },
                                 { title: "REDUCED", desc: "Education.", icon: GraduationCap, style: "dark" }
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
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              { title: "Administrative Complexity", desc: "Records, attendance, assessments & reports managed across disconnected systems." },
                              { title: "Lack of Parent Visibility", desc: "Parents receive limited updates on attendance, performance & school activities." },
                              { title: "Teacher Workload", desc: "Teachers spend significant time on administrative tasks instead of education." },
                              { title: "Student Engagement", desc: "Students lack a centralized place for assignments, notes & schedules." },
                              { title: "Communication Gaps", desc: "Information exchange between school, teachers, students & parents is fragmented." },
                              { title: "Manual Reporting", desc: "Reports are generated manually, causing delays and inaccuracies." },
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-4 glass-card rounded-2xl group hover:border-rose-200 transition-all duration-300 border border-transparent">
                                 <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)] mt-2 flex-shrink-0" />
                                 <div>
                                    <p className="text-sm font-bold text-text-primary mb-0.5">{item.title}</p>
                                    <p className="text-xs text-text-secondary font-medium">{item.desc}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <GlowDivider />

                  {/* Product Goals */}
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Product Goals & Success Metrics</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                           <table className="w-full text-left">
                              <thead className="bg-slate-50 border-b border-slate-200">
                                 <tr>
                                    <th className="px-6 py-3 text-sm font-bold text-text-primary">Goal</th>
                                    <th className="px-6 py-3 text-sm font-bold text-text-primary">Expected Outcome</th>
                                 </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                 {[
                                    { goal: "Centralize operations", outcome: "Single source of truth" },
                                    { goal: "Improve communication", outcome: "Better parent engagement" },
                                    { goal: "Reduce manual effort", outcome: "Faster administrative workflows" },
                                    { goal: "Increase visibility", outcome: "Real-time reporting" },
                                    { goal: "Support scalability", outcome: "Multi-role architecture" }
                                 ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                       <td className="px-6 py-3 text-sm font-semibold text-text-primary">{row.goal}</td>
                                       <td className="px-6 py-3 text-sm text-text-secondary">{row.outcome}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── 5. TARGET USERS / ROLES ───────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Access
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Designing for a Complex Multi-Stakeholder Ecosystem</h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">SuperCampus supports diverse user groups, each with unique goals, workflows, and permissions. Role-based experiences were designed to ensure clarity, efficiency, and contextual relevance.</p>
                  </div>
                  <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-4 mb-16">
                     {/* Dashed line */}
                     <div className="hidden md:block absolute top-[64px] left-[10%] right-[10%] h-[2px] border-t-[2px] border-dashed border-slate-200 z-0" />

                     {[
                        { title: "SUPER ADMIN", desc: "System control.", icon: Monitor, color: "#0D63CC", style: "solid" },
                        { title: "SCHOOL ADMIN", desc: "Operations.", icon: Settings, color: "#FF3285", style: "solid" },
                        { title: "TEACHERS", desc: "Academics.", icon: BookOpenCheck, color: "#00DA99", style: "solid" },
                        { title: "STUDENTS", desc: "Learning.", icon: GraduationCap, color: "#8B5CF6", style: "solid" },
                        { title: "PARENTS", desc: "Engagement.", icon: Users, color: "#F59E0B", style: "dark" }
                     ].map((step, j, arr) => {
                        const isDashed = step.style === "dashed";
                        const isSolid = step.style === "solid";
                        const isDark = step.style === "dark";

                        return (
                           <div key={j} className="flex flex-col items-center relative group w-full md:flex-1">
                              {/* Arrow on line */}
                              {j < arr.length - 1 && (
                                 <div className="hidden md:flex absolute top-[55px] lg:top-[60px] -right-4 w-8 h-8 items-center justify-center z-0 bg-transparent">
                                    <ArrowRight size={20} className="text-slate-300" strokeWidth={2.5} />
                                 </div>
                              )}

                              {/* Circle Node */}
                              <div
                                 className={`w-[120px] h-[120px] lg:w-[130px] lg:h-[130px] rounded-full flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-2 z-10 mx-auto relative ${isDashed ? "bg-white border-[2px] border-dashed shadow-sm" :
                                    isSolid ? "border-[2px] border-solid shadow-md" :
                                       "border-none shadow-xl"
                                    }`}
                                 style={{
                                    borderColor: isDashed ? `${step.color}80` : isSolid ? step.color : 'transparent',
                                    backgroundColor: isSolid ? `${step.color}15` : isDark ? step.color : 'white',
                                    color: isDark ? 'white' : step.color,
                                 }}
                              >
                                 <step.icon size={28} className="mb-3" strokeWidth={1.5} />
                                 <span className="text-[11px] font-bold uppercase tracking-wider leading-tight px-2">
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

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                     {/* Primary Users */}
                     <div className="glass-card rounded-[32px] p-8 border-2 border-[#0D63CC]/10 hover:border-[#0D63CC]/30 transition-all duration-500 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#0D63CC]/8 blur-[60px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-6 flex items-center gap-3">
                           <div className="w-8 h-8 rounded-xl bg-[#0D63CC]/10 flex items-center justify-center">
                              <Star size={16} className="text-[#0D63CC]" />
                           </div>
                           Primary Users
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                           {[
                              { icon: Building2, label: "School Owners", color: "#0D63CC" },
                              { icon: Settings, label: "Administrators", color: "#0D63CC" },
                              { icon: UserCheck, label: "Principals", color: "#0D63CC" },
                              { icon: BookOpenCheck, label: "Teachers", color: "#00DA99" },
                              { icon: GraduationCap, label: "Students", color: "#F59E0B" },
                              { icon: Users, label: "Parents", color: "#8B5CF6" },
                           ].map((u, i) => (
                              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-slate-100 group-hover:bg-white/80 transition-all duration-300">
                                 <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${u.color}15`, color: u.color }}>
                                    <u.icon size={16} strokeWidth={1.8} />
                                 </div>
                                 <span className="text-sm font-semibold text-text-primary">{u.label}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Secondary Users */}
                     <div className="glass-card rounded-[32px] p-8 border-2 border-[#00DA99]/10 hover:border-[#00DA99]/30 transition-all duration-500 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#00DA99]/8 blur-[60px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-6 flex items-center gap-3">
                           <div className="w-8 h-8 rounded-xl bg-[#00DA99]/10 flex items-center justify-center">
                              <Users size={16} className="text-[#00DA99]" />
                           </div>
                           Secondary Users
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                           {[
                              { icon: ClipboardList, label: "Academic Coordinators", color: "#00DA99" },
                              { icon: Heart, label: "Counselors", color: "#00DA99" },
                              { icon: Server, label: "Support Staff", color: "#00DA99" },
                              { icon: BarChart2, label: "CRM Operators", color: "#00DA99" },
                           ].map((u, i) => (
                              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-slate-100 group-hover:bg-white/80 transition-all duration-300">
                                 <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${u.color}15`, color: u.color }}>
                                    <u.icon size={16} strokeWidth={1.8} />
                                 </div>
                                 <span className="text-sm font-semibold text-text-primary">{u.label}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── 6. KEY FEATURES / PLATFORM MODULES ───────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Core Modules
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Core Platform Capabilities</h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">A comprehensive suite of tools designed to digitize every aspect of school operations across all stakeholder roles.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Student Information Management", desc: "Centralizes academic, personal, and administrative student information.", color: "#0D63CC", icon: Users, image: "/images/supercampus/01-Attendance-Management-Feature-Thumnail.png" },
                        { num: "02", title: "Attendance Management", desc: "Automates attendance tracking and improves visibility for educators and parents.", color: "#00DA99", icon: CheckSquare, image: "/images/supercampus/02-Assessment-&-Grading-Feature-Thumnail.png" },
                        { num: "03", title: "Communication Hub", desc: "Facilitates seamless communication between schools, teachers, students, and parents.", color: "#8B5CF6", icon: MessageCircle, image: "/images/supercampus/03-Task-&-Assignment Hub-Feature-Thumnail.png" },
                        { num: "04", title: "Academic Performance Tracking", desc: "Provides real-time access to grades, assessments, and progress reports.", color: "#F59E0B", icon: BarChart2, image: "/images/supercampus/04-CRM-&-Admissions-Feature.png" },
                        { num: "05", title: "Task & Assignment Hub", desc: "Create, submit, and review tasks with real-time progress tracking across classrooms.", color: "#10B981", icon: BookOpen, image: "/images/supercampus/05-Communication-Center-Feature-Thumnail.png" },
                        { num: "06", title: "Analytics & Reports", desc: "Student, teacher, and school-wide analytics with real-time insights and exportable reports.", color: "#0D63CC", icon: Search, image: "/images/supercampus/06-Analytics-&-ReportsThumnail.png" },
                     ].map((feature, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                           className="glass-card p-6 md:p-8 rounded-[24px] group hover:-translate-y-2 relative overflow-hidden transition-all duration-500"
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
                           <p className="text-sm text-text-secondary font-medium leading-relaxed relative z-10 mb-8">{feature.desc}</p>
                           <div className="relative z-10 w-full aspect-[3/2] rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500">
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

               {/* ── 7. UX RESEARCH ────────────────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Research
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Research</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Conducted deep-dive research through stakeholder interviews, workflow analysis, and existing system audits.</p>
                  </div>

                  {/* Research Methods */}
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Research Methods</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <div className="grid sm:grid-cols-3 gap-5">
                           {[
                              { icon: Users, title: "Stakeholder Interviews", desc: "Discussions with administrators, teachers, students & parents on pain points.", color: "#0D63CC" },
                              { icon: Activity, title: "Workflow Analysis", desc: "Observed attendance, assessment, communication & activity tracking processes.", color: "#00DA99" },
                              { icon: Search, title: "System Audit", desc: "Reviewed existing school management platforms to identify usability gaps.", color: "#F59E0B" },
                           ].map((m, i) => (
                              <div key={i} className="group relative rounded-2xl p-[1px] bg-gradient-to-br transition-all duration-500 hover:-translate-y-1" style={{ background: `linear-gradient(135deg, ${m.color}20, transparent)` }}>
                                 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 h-full border border-slate-100 group-hover:bg-white/95 transition-all">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${m.color}15`, color: m.color }}>
                                       <m.icon size={20} strokeWidth={1.8} />
                                    </div>
                                    <h5 className="font-bold text-sm text-text-primary mb-2">{m.title}</h5>
                                    <p className="text-xs text-text-secondary font-medium leading-relaxed">{m.desc}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Key Findings */}
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Key Findings</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <div className="grid sm:grid-cols-2 gap-5">
                           {[
                              { role: "Administrators Need", items: ["Centralized visibility", "Operational reports", "School performance metrics", "User management controls"], color: "#0D63CC", icon: Settings },
                              { role: "Teachers Need", items: ["Faster attendance marking", "Simplified task assignment", "Easy communication tools", "Assessment tracking"], color: "#00DA99", icon: BookOpenCheck },
                              { role: "Parents Need", items: ["Child progress visibility", "Attendance monitoring", "Instant notifications", "Direct communication"], color: "#F59E0B", icon: Users },
                              { role: "Students Need", items: ["Easy access to learning content", "Assignment management", "Assessment tracking", "School activity updates"], color: "#8B5CF6", icon: GraduationCap },
                           ].map((f, i) => (
                              <div key={i} className="glass-card p-6 rounded-2xl border-2 border-slate-100 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
                                 <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-[40px] pointer-events-none opacity-15 transition-opacity duration-500 group-hover:opacity-30" style={{ backgroundColor: f.color }} />
                                 <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${f.color}15`, color: f.color }}>
                                       <f.icon size={18} strokeWidth={1.8} />
                                    </div>
                                    <h5 className="font-bold text-sm text-text-primary">{f.role}</h5>
                                 </div>
                                 <ul className="space-y-2">
                                    {f.items.map((item, j) => (
                                       <li key={j} className="flex items-center gap-2">
                                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: f.color }} />
                                          <span className="text-xs font-medium text-text-secondary">{item}</span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── 8. USER PERSONAS ──────────────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           User Research
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Personas</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        Four key personas were developed to guide design decisions and ensure each stakeholder&apos;s needs were addressed throughout the platform.
                     </p>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                     {[
                        {
                           name: "School Administrator",
                           role: "Persona 01 — Primary Persona",
                           bio: "Manages daily school operations and needs centralized visibility across all departments. Frustrated by scattered systems and manual reporting that delay decision-making.",
                           needs: ["Monitor operations", "Improve efficiency", "Track school performance"],
                           pains: ["Manual reporting", "Scattered systems", "Delayed information"],
                           motivations: ["Data-driven decisions", "Operational excellence"],
                           color: "#0D63CC",
                           isPrimary: true
                        },
                        {
                           name: "Classroom Teacher",
                           role: "Persona 02 — Secondary User",
                           bio: "Manages multiple classrooms and spends too much time on administrative tasks. Needs faster tools for attendance, grading, and communication to focus on education.",
                           needs: ["Manage classrooms efficiently", "Track student performance", "Reduce paperwork"],
                           pains: ["Repetitive attendance work", "Multiple communication channels", "Manual grading"],
                           motivations: ["Student success", "Time-saving tools"],
                           color: "#00DA99",
                           isPrimary: false
                        },
                        {
                           name: "Parent",
                           role: "Persona 03 — Secondary User",
                           bio: "Wants real-time visibility into their child's progress and activities. Currently receives fragmented updates and struggles to communicate effectively with teachers.",
                           needs: ["Monitor child performance", "Stay informed", "Communicate easily"],
                           pains: ["Lack of transparency", "Missed updates", "Delayed communication"],
                           motivations: ["Child's well-being", "Engagement in education"],
                           color: "#F59E0B",
                           isPrimary: false
                        },
                        {
                           name: "Student",
                           role: "Persona 04 — Secondary User",
                           bio: "Needs a single place to manage assignments, study materials, and schedules. Currently misses deadlines and struggles to stay organized across multiple tools.",
                           needs: ["Stay organized", "Complete assignments", "Track progress"],
                           pains: ["Missed deadlines", "Lost study materials", "Poor schedule visibility"],
                           motivations: ["Academic achievement", "Seamless learning"],
                           color: "#8B5CF6",
                           isPrimary: false
                        }
                     ].map((persona, idx) => (
                        <motion.div
                           key={idx}
                           {...fadeIn}
                           className="glass-card rounded-[20px] p-6 md:p-10 lg:p-12 group relative overflow-hidden flex flex-col border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-md transition-all duration-500"
                        >
                           <div
                              className="absolute -top-24 -right-24 w-80 h-80 blur-[100px] rounded-full transition-all duration-1000 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: persona.color }}
                           />
                           <div className="flex items-center justify-between mb-8 relative z-10">
                              <div className="flex items-center gap-6">
                                 <div className="w-16 h-16 rounded-[16px] overflow-hidden flex-shrink-0 relative border-2 border-white shadow-2xl flex items-center justify-center" style={{ backgroundColor: `${persona.color}15` }}>
                                    <User size={28} style={{ color: persona.color }} strokeWidth={1.5} />
                                 </div>
                                 <div>
                                    <h4 className="font-bold text-2xl text-gray-800 tracking-tight">{persona.name}</h4>
                                    <p className="text-xs font-medium text-secondary mt-1 opacity-80">{persona.role}</p>
                                 </div>
                              </div>
                              {persona.isPrimary && (
                                 <div className="px-3 py-1 bg-[#0D63CC] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                    Primary Persona
                                 </div>
                              )}
                           </div>

                           <p className="text-base text-gray-800 leading-relaxed mb-8 relative z-10 font-medium">
                              &ldquo;{persona.bio}&rdquo;
                           </p>

                           <div className="space-y-4 relative z-10">
                              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-primary mb-3 flex items-center gap-2">
                                    <CheckCircle2 size={13} strokeWidth={3} /> Goals
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.needs.map((n, i) => (
                                       <span key={i} className="px-3 py-1.5 bg-white/60 rounded-lg border border-primary/20 text-xs font-medium text-text-primary">
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

                              <div className="p-5 rounded-2xl bg-[#00DA99]/10 border border-[#00DA99]/20">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#00DA99] mb-3 flex items-center gap-2">
                                    <Award size={13} strokeWidth={3} /> Motivations
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.motivations?.map((m, i) => (
                                       <span key={i} className="px-3 py-1.5 bg-white/60 rounded-lg border border-[#00DA99]/20 text-xs font-medium text-text-primary">
                                          {m}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* ── 9. DESIGN APPROACH & PROCESS ─────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-20 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Process
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design Approach & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Process</span></h2>
                     <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
                        A systematic, user-centric approach to solving complex educational administration challenges through iterative refinement.
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
                           { num: "01", title: "Empathize", desc: "Stakeholder interviews, workflow observation, system audits.", icon: Heart, type: "dashed" },
                           { num: "02", title: "Define", desc: "User personas, problem definition & feature prioritization.", icon: Target, type: "dashed" },
                           { num: "03", title: "Ideate", desc: "Brainstorming, user flows, information architecture.", icon: Lightbulb, type: "solid-light" },
                           { num: "04", title: "Design", desc: "Wireframes, visual design system, multi-role UI.", icon: PenTool, type: "solid-light" },
                           { num: "05", title: "Test", desc: "Usability testing, feedback loops, iterative improvements.", icon: CheckCircle2, type: "solid-dark" }
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
                           { title: "Empathize", desc: "Stakeholder interviews, workflow observation.", icon: Heart, type: "dashed" },
                           { title: "Define", desc: "User personas, problem definition & prioritization.", icon: Target, type: "dashed" },
                           { title: "Ideate", desc: "Brainstorming, user flows, information architecture.", icon: Lightbulb, type: "solid-light" },
                           { title: "Design", desc: "Wireframes, visual design, multi-role UI.", icon: PenTool, type: "solid-light" },
                           { title: "Test", desc: "Usability testing, feedback, iterative improvements.", icon: CheckCircle2, type: "solid-dark" }
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

               {/* ── 10. INFORMATION ARCHITECTURE ─────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Architecture
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Structuring a Complex Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Ecosystem</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">The information architecture was designed to support multiple user roles, academic workflows, and operational processes while maintaining simplicity and usability.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 mb-12">
                     <div className="flex flex-col items-center gap-2">
                        <div className="w-48 h-32 rounded-2xl bg-secondary/5 flex items-center justify-center border border-secondary/10">
                           <span className="text-sm font-bold text-text-secondary">Sitemap</span>
                        </div>
                     </div>
                     <div className="flex flex-col items-center gap-2">
                        <div className="w-48 h-32 rounded-2xl bg-secondary/5 flex items-center justify-center border border-secondary/10">
                           <span className="text-sm font-bold text-text-secondary">User Flow Diagrams</span>
                        </div>
                     </div>
                     <div className="flex flex-col items-center gap-2">
                        <div className="w-48 h-32 rounded-2xl bg-secondary/5 flex items-center justify-center border border-secondary/10">
                           <span className="text-sm font-bold text-text-secondary">Navigation Hierarchy</span>
                        </div>
                     </div>
                  </div>


                  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                     {[
                        { title: "Dashboard", icon: BarChart2, items: ["Overview KPIs", "Quick Actions", "Notifications"], color: "#0D63CC" },
                        { title: "Attendance", icon: CheckSquare, items: ["Daily Attendance", "Monthly Reports", "Analytics"], color: "#00DA99" },
                        { title: "Assessment", icon: ClipboardList, items: ["Exams", "Assignments", "Grades & Reports"], color: "#8B5CF6" },
                        { title: "Tasks", icon: CheckCircle2, items: ["Create", "Submit", "Review & Track"], color: "#F59E0B" },
                        { title: "Notes & Media", icon: BookOpen, items: ["Subject Notes", "Photos & Videos", "Downloads"], color: "#10B981" },
                        { title: "Calendar", icon: Calendar, items: ["Events", "Exams", "Holidays"], color: "#0D63CC" },
                        { title: "CRM", icon: Handshake, items: ["Leads", "Admissions", "Conversions"], color: "#00DA99" },
                        { title: "Communication", icon: MessageCircle, items: ["Announcements", "Notifications", "Messaging"], color: "#8B5CF6" },
                        { title: "Reports", icon: FileText, items: ["Student Reports", "Teacher Reports", "Analytics"], color: "#F59E0B" },
                        { title: "User Mgmt", icon: Users, items: ["Roles", "Permissions", "Access Control"], color: "#10B981" },
                     ].map((mod, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           transition={{ delay: i * 0.05 }}
                           className="glass-card p-5 rounded-2xl border-2 border-slate-100 hover:-translate-y-1 transition-all duration-400 group relative overflow-hidden"
                        >
                           <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full blur-[20px] opacity-20 pointer-events-none" style={{ backgroundColor: mod.color }} />
                           <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${mod.color}15`, color: mod.color }}>
                              <mod.icon size={18} strokeWidth={1.8} />
                           </div>
                           <h5 className="font-bold text-sm text-text-primary mb-2">{mod.title}</h5>
                           <ul className="space-y-1">
                              {mod.items.map((item, j) => (
                                 <li key={j} className="text-[11px] text-text-secondary font-medium flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: mod.color }} />
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </motion.div>
                     ))}
                  </div>
               </section>


               {/* ── USER FLOWS (NEW) ─────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">User Journeys</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">User Flows</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Core product workflows designed for efficiency and clarity across the platform.</p>
                  </div>

                  <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="p-6 glass-card rounded-2xl border-2 border-slate-100 hover:border-[#0D63CC]/30 transition-all duration-300">
                        <h4 className="font-bold text-lg text-text-primary mb-4">Student Admission Flow</h4>
                        <div className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-text-secondary">
                           <span className="px-3 py-1.5 bg-[#0D63CC]/10 text-[#0D63CC] rounded-lg">Inquiry</span> <ArrowRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                           <span className="px-3 py-1.5 bg-[#0D63CC]/10 text-[#0D63CC] rounded-lg">Registration</span> <ArrowRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                           <span className="px-3 py-1.5 bg-[#0D63CC]/10 text-[#0D63CC] rounded-lg">Verification</span> <ArrowRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                           <span className="px-3 py-1.5 bg-[#0D63CC]/10 text-[#0D63CC] rounded-lg">Enrollment</span> <ArrowRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                           <span className="px-3 py-1.5 bg-[#0D63CC]/10 text-[#0D63CC] rounded-lg mt-2 sm:mt-0">Class Assignment</span>
                        </div>
                     </div>
                     <div className="p-6 glass-card rounded-2xl border-2 border-slate-100 hover:border-[#00DA99]/30 transition-all duration-300">
                        <h4 className="font-bold text-lg text-text-primary mb-4">Attendance Flow</h4>
                        <div className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-text-secondary">
                           <span className="px-3 py-1.5 bg-[#00DA99]/10 text-[#00DA99] rounded-lg">Teacher Attendance</span> <ArrowRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                           <span className="px-3 py-1.5 bg-[#00DA99]/10 text-[#00DA99] rounded-lg">Validation</span> <ArrowRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                           <span className="px-3 py-1.5 bg-[#00DA99]/10 text-[#00DA99] rounded-lg">Parent Notification</span> <ArrowRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                           <span className="px-3 py-1.5 bg-[#00DA99]/10 text-[#00DA99] rounded-lg mt-2 sm:mt-0">Reports</span>
                        </div>
                     </div>
                     <div className="p-6 glass-card rounded-2xl border-2 border-slate-100 hover:border-[#8B5CF6]/30 transition-all duration-300">
                        <h4 className="font-bold text-lg text-text-primary mb-4">Assignment Flow</h4>
                        <div className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-text-secondary">
                           <span className="px-3 py-1.5 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-lg">Create Assignment</span> <ArrowRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                           <span className="px-3 py-1.5 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-lg">Student Submission</span> <ArrowRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                           <span className="px-3 py-1.5 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-lg">Evaluation</span> <ArrowRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                           <span className="px-3 py-1.5 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-lg mt-2 sm:mt-0">Feedback</span>
                        </div>
                     </div>
                     <div className="p-6 glass-card rounded-2xl border-2 border-slate-100 hover:border-[#F59E0B]/30 transition-all duration-300">
                        <h4 className="font-bold text-lg text-text-primary mb-4">Parent Communication Flow</h4>
                        <div className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-text-secondary">
                           <span className="px-3 py-1.5 bg-[#F59E0B]/10 text-[#F59E0B] rounded-lg">Teacher/Admin</span> <ArrowRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                           <span className="px-3 py-1.5 bg-[#F59E0B]/10 text-[#F59E0B] rounded-lg">Notification</span> <ArrowRight className="w-4 h-4 opacity-50 flex-shrink-0" />
                           <span className="px-3 py-1.5 bg-[#F59E0B]/10 text-[#F59E0B] rounded-lg">Parent Acknowledgment</span>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── 11. ROLE-BASED EXPERIENCE DESIGN ─────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Experience Design
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Role-Based <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Experience Design</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Each role gets a tailored experience optimized for their specific workflow, context, and daily tasks.</p>
                  </div>

                  <div className="space-y-6">
                     {[
                        {
                           role: "Super Admin Experience",
                           platform: "Web Portal",
                           focus: "Data-first dashboard design with KPI visualization, quick actions, role permissions & bulk operations.",
                           modules: ["Dashboard Analytics", "User Management", "School Management", "Assessment Reports", "Attendance Analytics", "Communication Center", "CRM Operations", "Configuration Settings"],
                           color: "#0D63CC",
                           icon: Settings
                        },
                        {
                           role: "Teacher Mobile Experience",
                           platform: "Mobile App",
                           focus: "Speed, reduced clicks, and classroom efficiency — designed for use in real-time classroom scenarios.",
                           modules: ["Dashboard", "Attendance", "Assessments", "Tasks", "Notes", "Calendar", "Student Tracking"],
                           color: "#00DA99",
                           icon: BookOpenCheck
                        },
                        {
                           role: "Parent Mobile Experience",
                           platform: "Mobile App",
                           focus: "Transparency, trust & real-time updates — parents stay informed without friction.",
                           modules: ["Child Dashboard", "Attendance", "Assessments", "Tasks", "Notes", "Media", "Calendar"],
                           color: "#F59E0B",
                           icon: Users
                        },
                        {
                           role: "Student Mobile Experience",
                           platform: "Mobile App",
                           focus: "Simplicity, motivation & engagement — students stay organized and on top of their academics.",
                           modules: ["Dashboard", "Assessments", "Attendance", "Tasks", "Notes", "Media", "Calendar"],
                           color: "#8B5CF6",
                           icon: GraduationCap
                        }
                     ].map((exp, i) => (
                        <motion.div key={i} {...fadeIn} className="glass-card rounded-[24px] p-6 md:p-8 border-2 border-slate-100 hover:border-[#0D63CC]/20 transition-all duration-500 group relative overflow-hidden">
                           <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: exp.color }} />
                           <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
                              <div className="flex items-center gap-4 flex-shrink-0">
                                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${exp.color}15`, color: exp.color }}>
                                    <exp.icon size={22} strokeWidth={1.8} />
                                 </div>
                                 <div>
                                    <h4 className="font-bold text-lg text-text-primary">{exp.role}</h4>
                                    <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ backgroundColor: `${exp.color}15`, color: exp.color }}>{exp.platform}</span>
                                 </div>
                              </div>
                              <p className="text-sm text-text-secondary font-medium leading-relaxed sm:ml-4 sm:border-l sm:border-slate-200 sm:pl-6">{exp.focus}</p>
                           </div>
                           <div className="flex flex-wrap gap-2">
                              {exp.modules.map((mod, j) => (
                                 <span key={j} className="text-[11px] font-semibold px-3 py-1.5 rounded-xl bg-white/60 border border-slate-200 text-text-secondary hover:border-slate-300 transition-colors">{mod}</span>
                              ))}
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </section>


               {/* ── CORE EXPERIENCE PRINCIPLES (NEW) ─────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Principles</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Core Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Principles</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        { title: "Simplicity", desc: "Reduce cognitive load across complex workflows.", color: "#0D63CC", icon: Layout },
                        { title: "Accessibility", desc: "Ensure inclusive experiences for diverse users.", color: "#00DA99", icon: Users },
                        { title: "Consistency", desc: "Maintain predictable interactions across modules.", color: "#8B5CF6", icon: CheckSquare },
                        { title: "Scalability", desc: "Support institutional growth and future expansion.", color: "#F59E0B", icon: Target }
                     ].map((p, i) => (
                        <div key={i} className="glass-card p-8 rounded-3xl border-2 border-slate-100 group hover:-translate-y-2 transition-all duration-300">
                           <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${p.color}15`, color: p.color }}>
                              <p.icon size={24} />
                           </div>
                           <h4 className="font-bold text-xl text-text-primary mb-3">{p.title}</h4>
                           <p className="text-sm text-text-secondary font-medium">{p.desc}</p>
                        </div>
                     ))}
                  </div>
               </section>

               {/* ── 12. DESIGN SYSTEM ────────────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Visual Identity
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Building a Scalable EdTech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Design System</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        A clean, accessible, and consistent design language created to ensure clarity across web and mobile interfaces.
                     </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 mb-12">
                     {[
                        { label: "Accessibility standards", icon: UserCheck },
                        { label: "Component reuse", icon: Shuffle },
                        { label: "Typography rationale", icon: PenTool },
                        { label: "Color accessibility", icon: Sparkles }
                     ].map((tag, i) => (
                        <div key={i} className="flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-full text-[13px] font-bold text-text-primary border border-slate-200 shadow-sm hover:border-[#0D63CC]/30 hover:shadow-md transition-all duration-300 cursor-default group">
                           <tag.icon size={16} className="text-[#0D63CC] group-hover:scale-110 group-hover:text-[#00DA99] transition-all duration-300" strokeWidth={2.5} />
                           {tag.label}
                        </div>
                     ))}
                  </div>

                  <div className="flex justify-center w-full mb-16">
                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 w-full max-w-5xl px-4">
                        {[
                           { title: "Component library", icon: Grid, color: "#0D63CC" },
                           { title: "Forms", icon: CheckSquare, color: "#00DA99" },
                           { title: "Tables", icon: Server, color: "#8B5CF6" },
                           { title: "Navigation patterns", icon: Layers, color: "#F59E0B" },
                           { title: "Mobile components", icon: Smartphone, color: "#F43F5E" }
                        ].map((item, i) => (
                           <div key={i} className="aspect-square sm:aspect-[4/5] md:aspect-square glass-card rounded-[24px] p-4 flex flex-col items-center justify-center text-center group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 relative overflow-hidden border-2 border-slate-100 hover:border-transparent">
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${item.color}, transparent)` }} />
                              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm bg-white border border-slate-100" style={{ color: item.color }}>
                                 <item.icon size={28} strokeWidth={1.5} />
                              </div>
                              <span className="font-bold text-[13px] leading-tight text-text-primary group-hover:text-transparent group-hover:bg-clip-text transition-colors duration-300" style={{ backgroundImage: `linear-gradient(to right, ${item.color}, ${item.color})` }}>
                                 {item.title}
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>


                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4">
                     {/* Colors */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Color Strategy
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { bg: 'bg-[#F60F37]', label: 'Primary', hex: '#F60F37' },
                              { bg: 'bg-[#FEC305]', label: 'Secondary', hex: '#FEC305' },
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
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-rose-500/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
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
                              { icon: BarChart2, color: "text-[#282360]" },
                              { icon: MessageCircle, color: "text-rose-500" },
                              { icon: Shield, color: "text-[#0D63CC]" }
                           ].map((Item, i) => (
                              <div key={i} className="aspect-square rounded-2xl bg-white/50 border border-slate-200 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                 <Item.icon size={24} strokeWidth={1.5} className={`${Item.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Wireframing Strategy */}
                     <div className="lg:col-span-12 glass-card rounded-[40px] p-6 lg:p-10 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTMsOTksMjA0LDAuMDUpIi8+PC9zdmc+')] opacity-50" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 relative z-10">Wireframing Strategy</h4>
                        <div className="grid sm:grid-cols-3 gap-6 relative z-10">
                           {[
                              { stage: "Low-Fidelity", desc: "Workflow validation and screen flow mapping", color: "#0D63CC", progress: 33 },
                              { stage: "Mid-Fidelity", desc: "Information hierarchy and component placement", color: "#00DA99", progress: 66 },
                              { stage: "High-Fidelity", desc: "Final UI with full visual design system", color: "#8B5CF6", progress: 100 },
                           ].map((w, i) => (
                              <div key={i} className="bg-white/70 rounded-2xl p-6 border border-slate-200 hover:-translate-y-1 transition-transform duration-500">
                                 <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-black" style={{ backgroundColor: w.color }}>
                                       {i + 1}
                                    </div>
                                    <h5 className="font-bold text-sm text-text-primary">{w.stage}</h5>
                                 </div>
                                 <p className="text-xs text-text-secondary font-medium mb-4">{w.desc}</p>
                                 <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${w.progress}%`, backgroundColor: w.color }} />
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>


               {/* ── WIREFRAMES (NEW) ─────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Evolution</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">From Wireframes to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Final Experience</span></h2>
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

               {/* ── 13. EMPATHY MAP ───────────────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Research Insight
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Empathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Mapping</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Visualizing school stakeholder attitudes and behaviors to align design decisions with real user experiences.</p>
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
                                 {[`"Why do I need three apps to do one teacher's job?"`, `"I hope my child's attendance is being tracked properly."`, `"There must be a better way to manage all this paperwork."`, `"Are my students actually understanding the material?"`].map((item, i) => (
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
                                 {[`"Nobody tells me when my child misses class."`, `"Marking attendance on paper every day is exhausting."`, `"I don't know what assignments my child is missing."`, `"We need one system for everything."`].map((item, i) => (
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
                                 <GraduationCap className="w-16 h-16 text-[#0D63CC] opacity-90" strokeWidth={1.5} />
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
                                 {["Overwhelmed by administrative tasks and manual processes", "Anxious about missing important updates and notifications", "Frustrated by disconnected tools and fragmented workflows", "Motivated to improve but unsure where to start"].map((item, i) => (
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
                                 {["Uses paper registers and spreadsheets for attendance", "Manually writes and distributes assignments to students", "Calls parents individually for updates and follow-ups", "Juggles multiple apps with no central source of truth"].map((item, i) => (
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

               {/* ── 14. SWOT ANALYSIS ────────────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Strategic Analysis
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">SWOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Analysis</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Evaluating SuperSchool&apos;s competitive stance to ensure viability and identify growth opportunities.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        { title: "Strengths", items: ["Complete multi-role ecosystem", "Mobile-first architecture", "CRM + academics in one", "Centralized operations", "Scalable platform"], color: "text-[#00DA99]", borderGlow: "from-[#00DA99]/30 via-white/10 to-transparent", innerGlow: "bg-[#00DA99]/15", borderColor: "border-[#00DA99]/30", gradientFill: "from-white/60 to-white/90", icon: <Briefcase size={24} strokeWidth={2} className="text-[#00DA99] group-hover:scale-110 transition-transform duration-500" /> },
                        { title: "Weaknesses", items: ["Complex initial onboarding", "Large feature surface area", "Requires institutional buy-in"], color: "text-[#F59E0B]", borderGlow: "from-[#F59E0B]/30 via-white/10 to-transparent", innerGlow: "bg-[#F59E0B]/15", borderColor: "border-[#F59E0B]/30", gradientFill: "from-white/60 to-white/90", icon: <Activity size={24} strokeWidth={2} className="text-[#F59E0B] group-hover:scale-110 transition-transform duration-500" /> },
                        { title: "Opportunities", items: ["Multi-school chain expansion", "Advanced analytics layer", "LMS integration potential", "Automated workflows"], color: "text-[#0D63CC]", borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent", innerGlow: "bg-[#0D63CC]/15", borderColor: "border-[#0D63CC]/30", gradientFill: "from-white/60 to-white/90", icon: <Search size={24} strokeWidth={2} className="text-[#0D63CC] group-hover:scale-110 transition-transform duration-500" /> },
                        { title: "Threats", items: ["Competitive EdTech platforms", "Institutional resistance to change", "Data privacy regulations"], color: "text-rose-500", borderGlow: "from-rose-500/30 via-white/10 to-transparent", innerGlow: "bg-rose-500/15", borderColor: "border-rose-500/30", gradientFill: "from-white/60 to-white/90", icon: <FileText size={24} strokeWidth={2} className="text-rose-500 group-hover:scale-110 transition-transform duration-500" /> }
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

               {/* ── 15. VISUAL OVERVIEW ───────────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Interface
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Cross-Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Experience</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Responsive experiences were designed to ensure seamless access across desktop and mobile devices for all stakeholders.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     <div className="lg:col-span-2">
                        {/* <PremiumPlaceholder aspect="aspect-[4/3]" label="Super Admin Dashboard" glowCls="bg-[#0D63CC]" icon={Monitor} /> */}
                        <div className="relative aspect-[4/3] z-10 w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500">
                           <Image
                              src="/images/supercampus/SuperAdminDashboard-Thumnail.png"
                              alt="Super Admin Dashboard"
                              fill
                              className="object-cover relative z-10 duration-1000"
                           />
                        </div>
                     </div>
                     <div className="relative aspect-[3/4] z-10 w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500">
                        <Image
                           src="/images/supercampus/TeacherApp-Thumnail.png"
                           alt="Teacher App"
                           fill
                           className="object-cover relative z-10 duration-1000"
                        />
                     </div>
                     {/* <PremiumPlaceholder aspect="aspect-[3/4]" label="Teacher App" glowCls="bg-[#00DA99]" icon={BookOpenCheck} /> */}
                     <div className="relative aspect-[3/4] z-10 w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500">
                        {/* <PremiumPlaceholder aspect="aspect-[3/4]" label="Parent App" glowCls="bg-[#F59E0B]" icon={Users} /> */}
                        <Image
                           src="/images/supercampus/ParentApp-Thumnail.png"
                           alt="Parent App"
                           fill
                           className="object-cover relative z-10 duration-1000"
                        />
                     </div>

                     <div className="relative aspect-[3/4] z-10 w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500">
                        {/* <PremiumPlaceholder aspect="aspect-[3/4]" label="Student App" glowCls="bg-[#8B5CF6]" icon={GraduationCap} /> */}
                        <Image
                           src="/images/supercampus/StudentApp-Thumnail.png"
                           alt="Student App"
                           fill
                           className="object-cover relative z-10 duration-1000"
                        />
                     </div>
                     {/* <PremiumPlaceholder aspect="aspect-[3/4]" label="CRM Portal" glowCls="bg-[#0D63CC]" icon={Handshake} /> */}
                     <div className="relative aspect-[3/4] z-10 w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500">
                        {/* <PremiumPlaceholder aspect="aspect-[3/4]" label="Student App" glowCls="bg-[#8B5CF6]" icon={GraduationCap} /> */}
                        <Image
                           src="/images/supercampus/CRMPortalApp-Thumnail.png"
                           alt="CRM Portal"
                           fill
                           className="object-cover relative z-10 duration-1000"
                        />
                     </div>
                     <div className="lg:col-span-2">
                        <div className="relative aspect-[4/3] z-10 w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-500">
                           <Image
                              src="/images/supercampus/Analytics-&-Reports-Thumnail.png"
                              alt="Analytics & Reports"
                              fill
                              className="object-cover relative z-10 duration-1000"
                           />
                        </div>
                        {/* <PremiumPlaceholder aspect="aspect-[4/3]" label="Analytics & Reports" glowCls="bg-[#00DA99]" icon={BarChart2} /> */}
                     </div>
                  </div>
               </section>

               {/* ── 16. OUTCOMES & CONCLUSION ─────────────────────────────────────────────── */}
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
                              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">School Operations</span> Digitally.
                           </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-20">
                           {[
                              {
                                 title: "Business Impact",
                                 items: ["Centralized school operations", "Reduced administrative workload", "Improved stakeholder communication", "Increased operational visibility", "Streamlined academic workflows"],
                                 color: "text-[#0D63CC]",
                                 borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#0D63CC]/15",
                                 borderColor: "border-[#0D63CC]/30 hover:border-[#0D63CC]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#0D63CC] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(13,99,204,0.3)]" />
                              },
                              {
                                 title: "Expected Outcomes",
                                 items: ["Single source of truth established", "Time saved per teacher daily", "Faster decision making", "Consistent multi-platform experience"],
                                 color: "text-[#00DA99]",
                                 borderGlow: "from-[#00DA99]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#00DA99]/15",
                                 borderColor: "border-[#00DA99]/30 hover:border-[#00DA99]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#00DA99] rounded flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_12px_rgba(0,218,153,0.3)]" />
                              }
                           ].map((box, i) => (
                              <div key={i} className={`relative border-1 border-[#0D63CC]/20 hover:border-[#00DA99]/40 rounded-[22px] p-[2px] bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
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
                           <div className="p-6 md:p-8 lg:p-10 glass-card rounded-[24px] border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-2xl transition-all duration-500 relative overflow-hidden group">
                              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#0D63CC]/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
                              <h4 className="font-bold text-2xl text-text-primary mb-6 flex items-center gap-4 relative z-10">
                                 <div className="w-8 h-8 bg-gradient-to-br from-[#0D63CC] to-[#00DA99] rounded flex-shrink-0" />
                                 Conclusion
                              </h4>
                              <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed relative z-10">
                                 SuperCampus successfully transformed traditional school operations into a unified digital ecosystem by combining administration, communication, academic tracking, CRM management, and mobile engagement into a single platform. The solution provides a scalable foundation for educational institutions while improving efficiency for administrators, productivity for teachers, visibility for parents, and engagement for students.
                              </p>
                           </div>
                        </div>

                     </div>
                  </motion.div>
               </section>


               {/* ── FINAL REFLECTION & ROADMAP (NEW) ─────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
                     {/* Key Learnings */}
                     <div className="glass-card rounded-[32px] p-8 lg:p-12 border-2 border-[#0D63CC]/10 hover:border-[#0D63CC]/40 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-2xl text-text-primary mb-6 flex items-center gap-3">
                           Key Learnings
                        </h4>
                        <p className="text-text-secondary leading-relaxed font-medium">
                           Designing educational platforms requires balancing the needs of multiple stakeholders while maintaining simplicity. Clear information architecture, role-based experiences, and scalable systems were essential to delivering an effective product ecosystem.
                        </p>
                     </div>

                     {/* Future Roadmap */}
                     <div className="glass-card rounded-[32px] p-8 lg:p-12 border-2 border-[#00DA99]/10 hover:border-[#00DA99]/40 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00DA99]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-2xl text-text-primary mb-6 flex items-center gap-3">
                           Future Roadmap
                        </h4>
                        <ul className="space-y-3">
                           {["AI-powered learning recommendations", "Predictive student performance analytics", "Virtual classroom integrations", "Parent engagement insights", "Automated academic alerts"].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                 <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00DA99] flex-shrink-0" />
                                 <span className="text-sm font-medium text-text-secondary">{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
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
                              src="/images/supercampus/SuperCampus-Showercase.png"
                              alt="SuperCampus Showercase"
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
                              Building the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">EdTech Products?</span>
                           </h2>
                           <p className="text-base md:text-lg text-text-secondary mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                              I help startups and organizations design scalable educational platforms, SaaS products, and multi-role digital ecosystems.
                           </p>

                           <div className="flex flex-wrap justify-center gap-2 mb-10">
                              {["50+ High-Fidelity Screens", "Complete Design System", "Enterprise Components", "Workflow Prototypes"].map((tag, i) => (
                                 <span key={i} className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-200/50 hover:bg-white transition-colors">
                                    <span className="text-[#0D63CC] mr-1">✓</span> {tag}
                                 </span>
                              ))}
                           </div>

                           <Link href="https://www.figma.com/design/JMh46MC2K4sRdLwAqNRBSj/Oasisnotes?node-id=3-55397&t=yPqYRdGSG9FnJSZX-1" className="inline-flex items-center gap-3 px-8 py-4 btn-premium text-white rounded-full font-bold transition-all shadow-[0_20px_40px_-10px_rgba(13,99,204,0.25)] group text-base overflow-hidden relative">
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
                  <Link href="/case-studies/carenova" className="group flex flex-col items-center">
                     <h3 className="text-4xl md:text-5xl font-black text-text-primary group-hover:text-[#8B5CF6] transition-colors duration-300 mb-6">
                        Carenova
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
