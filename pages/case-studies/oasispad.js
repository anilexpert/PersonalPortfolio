import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, ArrowRight, Brain, TrendingUp, Target, Smartphone, Shield, Zap,
   Search, Users, Grid, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase, HandCoins,
   PieChart, Handshake, MessageCircle, User, Award, BookOpen, Calendar, BookOpenCheck,
   GraduationCap, Bell, Server, Shuffle, Wind, Feather, ClipboardList,
   Smile, History, Keyboard, Stethoscope, FileSearch, Building2, Wallet, Lock, Layers,
   Database, Clock, FileBadge, BarChart3, LineChart, Banknote, Receipt, Folder, Sparkles
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
            <title>OasisPad | Case Study - Behavioral Health Operations</title>
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
                        OasisPad
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        Transforming <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Behavioral Healthcare Workflows</span>Through an Integrated SaaS Platform
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        OasisPad is a behavioral healthcare platform designed to streamline clinical documentation, care coordination, scheduling, compliance, and operational workflows across residential and behavioral health organizations.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:pl-10 lg:border-l border-slate-200/60 pt-4">
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Role</p>
                        <p className="font-bold text-sm text-text-primary">Lead Product Designer</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Industry</p>
                        <p className="font-bold text-sm text-text-primary">Healthcare SaaS</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Platform</p>
                        <p className="font-bold text-sm text-text-primary">Web Application</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Domain</p>
                        <p className="font-bold text-sm text-text-primary">Behavioral Health</p>
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
                        <p className="font-bold text-sm text-text-primary">Research, UX Strategy, UI Design, Prototyping, Design System</p>
                     </div>
                  </motion.div>
               </section>

               {/* MAIN HERO IMAGE */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-20 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[24px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
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


               {/* EXECUTIVE SUMMARY */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Project Overview</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-6">
                           Behavioral health organizations often rely on disconnected systems, manual documentation, and fragmented communication processes. OasisPad was designed to centralize clinical operations, simplify compliance management, and improve care coordination through a unified digital platform.
                        </p>
                     </div>
                  </div>
               </section>


               {/* BUSINESS CONTEXT */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Why This Product Matters</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-6">
                           Behavioral healthcare providers manage complex workflows involving clinical documentation, treatment plans, medication administration, staff coordination, compliance, and reporting. Existing systems often create administrative burden and reduce time available for patient care.
                        </p>
                     </div>
                  </div>
               </section>

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
                        <div className="p-8 glass-card border-l-4 border-[#0D63CC] bg-[#0D63CC]/5 rounded-[24px]">
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
                  <div className="text-center mb-16 glass-card p-10 md:p-16 rounded-[40px] border border-rose-500/10 relative overflow-hidden">
                     <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-rose-500/10 blur-[80px] rounded-full pointer-events-none" />

                     <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
                           <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">
                              Core Issues
                           </span>
                        </div>
                        <h2 className="text-4xl font-bold text-text-primary mb-4">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Challenge</span></h2>

                        <p className="text-text-secondary font-medium max-w-2xl mx-auto mb-8">
                           A unified healthcare design system was created to ensure complex medical data feels approachable, trustworthy, and accessible.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                           <span className="px-4 py-2 glass-card rounded-full text-xs font-bold text-text-secondary border border-slate-200">Accessibility considerations</span>
                           <span className="px-4 py-2 glass-card rounded-full text-xs font-bold text-text-secondary border border-slate-200">Color rationale</span>
                           <span className="px-4 py-2 glass-card rounded-full text-xs font-bold text-text-secondary border border-slate-200">Component scalability</span>
                           <span className="px-4 py-2 glass-card rounded-full text-xs font-bold text-text-secondary border border-slate-200">Healthcare usability standards</span>
                        </div>
                     </div>
                  </div>


                  <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-4 mt-12 mb-16">
                     {/* Dashed line */}
                     <div className="hidden md:block absolute top-[64px] left-[10%] right-[10%] h-[2px] border-t-[2px] border-dashed border-rose-200 z-0" />

                     {[
                        { title: "MANUAL", desc: "Documentation.", icon: ClipboardList, style: "dashed" },
                        { title: "DISCONNECTED", desc: "Systems.", icon: Layers, style: "dashed" },
                        { title: "COMPLIANCE", desc: "Risks.", icon: Shield, style: "solid" },
                        { title: "OVERLOAD", desc: "Administrative.", icon: Clock, style: "solid" },
                        { title: "REDUCED", desc: "Care Efficiency.", icon: Heart, style: "dark" }
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

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Documentation Burden", desc: "Clinical staff spent significant time on manual documentation and repetitive administrative tasks.", icon: FileText, color: "#0D63CC" },
                        { num: "02", title: "Fragmented Systems", desc: "Critical information was distributed across multiple systems and paper-based processes.", icon: Shuffle, color: "#F59E0B" },
                        { num: "03", title: "Care Coordination Gaps", desc: "Communication between care teams lacked consistency and visibility.", icon: Users, color: "#00DA99" },
                        { num: "04", title: "Compliance Complexity", desc: "Regulatory requirements increased operational overhead and audit risk.", icon: Shield, color: "#EF4444" },
                        { num: "05", title: "Limited Operational Visibility", desc: "Leadership lacked real-time insights into facility performance.", icon: LineChart, color: "#8B5CF6" },
                        { num: "06", title: "Billing Inefficiencies", desc: "Complex billing rules and fragmented data led to delayed claims, denials, and lost revenue.", icon: Banknote, color: "#EC4899" }
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
                     <div className="lg:col-span-5">
                        <div className="sticky top-24">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                              <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                                 Discovery
                              </span>
                           </div>
                           <h3 className="text-3xl font-bold text-text-primary mb-6">Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Insights</span></h3>
                           <p className="text-text-secondary leading-relaxed font-medium mb-8">
                              Research was conducted to understand the workflows, responsibilities, and pain points experienced by behavioral healthcare staff and administrators.
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
                                       <p className="text-sm font-bold text-text-primary">{stakeholder.group}</p>
                                       <p className="text-xs text-text-secondary font-medium">{stakeholder.roles}</p>
                                    </div>
                                 </div>
                              ))}
                           </div>



                        </div>
                     </div>
                     <div className="lg:col-span-7 space-y-6">
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
                              <h4 className="text-base font-bold text-text-primary mb-2">{insight.title}</h4>
                              <p className="text-sm text-text-secondary font-medium leading-relaxed mb-3">{insight.desc}</p>

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

               {/* STRATEGIC ARTIFACTS SECTION */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="glass-card p-10 md:p-16 rounded-[40px] border border-[#0D63CC]/10 relative overflow-hidden">
                     <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#00DA99]/10 blur-[80px] rounded-full pointer-events-none" />
                     <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#0D63CC]/10 blur-[80px] rounded-full pointer-events-none" />

                     <div className="relative z-10">
                        <div className="text-center mb-12">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                              <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                                 Deliverables
                              </span>
                           </div>
                           <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Artifacts</span></h3>
                           <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                              Comprehensive research documentation mapped the end-to-end user experience, helping align stakeholders on core user needs and business requirements before moving to design.
                           </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                           {[
                              { title: "Affinity Mapping", icon: Layers, desc: "Theme categorization" },
                              { title: "Stakeholder Mapping", icon: Users, desc: "Influence analysis" },
                              { title: "Empathy Map", icon: Heart, desc: "User mindset modeling" },
                              { title: "User Journey Map", icon: Shuffle, desc: "End-to-end workflows" }
                           ].map((artifact, idx) => (
                              <div key={idx} className="glass-card aspect-square md:aspect-[4/3] rounded-[24px] flex flex-col items-center justify-center p-6 text-center group hover:-translate-y-1 hover:border-[#0D63CC]/30 hover:shadow-xl transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden border border-white/60">
                                 <div className="absolute inset-0 bg-gradient-to-br from-[#0D63CC]/0 to-[#00DA99]/0 group-hover:from-[#0D63CC]/5 group-hover:to-[#00DA99]/5 transition-colors duration-500" />
                                 <artifact.icon className="text-[#0D63CC] mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 relative z-10" size={32} />
                                 <span className="text-sm font-bold text-text-primary group-hover:text-[#0D63CC] transition-colors relative z-10 mb-1">{artifact.title}</span>
                                 <span className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider relative z-10">{artifact.desc}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>

               {/* USER PERSONAS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">Target Audience</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Personas</span></h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { role: "Clinical Staff", title: "Therapists & Nurses", goals: ["Document care efficiently", "Manage daily tasks"], painPoints: ["Repetitive documentation", "Time constraints"], icon: Heart, color: "#0D63CC" },
                        { role: "Facility Administrator", title: "Operations Director", goals: ["Monitor compliance", "Manage operations"], painPoints: ["Limited visibility", "Manual reporting"], icon: Building2, color: "#00DA99" },
                        { role: "Executive Leadership", title: "C-Suite", goals: ["Monitor performance"], painPoints: ["Fragmented operational data"], icon: LineChart, color: "#F59E0B" }
                     ].map((persona, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="glass-card p-6 md:p-8 rounded-[24px] border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 group hover:shadow-xl transition-all duration-500 flex flex-col relative overflow-hidden">
                           <div
                              className="absolute -top-24 -right-24 w-80 h-80 blur-[100px] rounded-full transition-all duration-1000 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: persona.color }}
                           />

                           <div className="flex flex-col items-start gap-4 mb-8 relative z-10">
                              <div className="w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-white shadow-md bg-white" style={{ backgroundColor: `${persona.color}15`, color: persona.color }}>
                                 <persona.icon size={28} strokeWidth={1.5} />
                              </div>
                              <div>
                                 <h4 className="text-2xl font-bold text-text-primary tracking-tight mb-1">{persona.role}</h4>
                                 <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest opacity-80">{persona.title}</p>
                              </div>
                           </div>

                           <div className="space-y-4 relative z-10 mt-auto flex-1 flex flex-col justify-end">
                              <div className="p-5 rounded-2xl bg-[#0D63CC]/5 border border-[#0D63CC]/10 group-hover:border-[#0D63CC]/20 transition-colors shadow-sm">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#0D63CC] mb-3 flex items-center gap-2">
                                    <CheckCircle2 size={13} strokeWidth={3} /> Core Goals
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.goals.map((g, idx) => (
                                       <span key={idx} className="px-2.5 py-1 bg-white/80 rounded-md border border-[#0D63CC]/20 text-[11px] font-semibold text-text-primary shadow-sm hover:border-[#0D63CC]/40 transition-colors">
                                          {g}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                              <div className="p-5 rounded-2xl bg-rose-50 border border-rose-100/50 group-hover:border-rose-200 transition-colors shadow-sm">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-rose-500 mb-3 flex items-center gap-2">
                                    <Activity size={13} strokeWidth={3} /> Pain Points
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.painPoints.map((p, idx) => (
                                       <span key={idx} className="px-2.5 py-1 bg-white/80 rounded-md border border-rose-100 text-[11px] font-semibold text-text-primary shadow-sm hover:border-rose-300 transition-colors">
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

               {/* PRODUCT VISION & EXPERIENCE FRAMEWORK */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Architecture
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Product Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Experience Strategy</span></h2>
                     <p className="text-xl text-text-secondary font-medium max-w-3xl mx-auto italic mb-8">
                        The product strategy focused on balancing clinical efficiency with operational oversight by delivering tailored experiences for frontline staff and organizational leadership.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                     <motion.div {...fadeIn} className="glass-card rounded-[24px] p-8 md:p-10 border-2 border-[#00DA99]/20 relative overflow-hidden group">
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

                     <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="glass-card rounded-[24px] p-8 md:p-10 border-2 border-[#0D63CC]/20 relative overflow-hidden group">
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
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Structuring Complex Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Workflows</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        The information architecture was designed to support multiple user roles, clinical processes, and operational workflows while maintaining simplicity and reducing cognitive load.
                     </p>
                  </div>


                  <div className="max-w-6xl mx-auto mb-12">
                     <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                        <div className="px-6 py-3 glass-card rounded-2xl font-bold text-text-primary border-b-4 border-[#0D63CC]">Organization Admin</div>
                        <ArrowRight className="hidden md:block text-slate-300" />
                        <ArrowRight className="md:hidden rotate-90 text-slate-300 my-2" />
                        <div className="px-6 py-3 glass-card rounded-2xl font-bold text-text-primary border-b-4 border-[#00DA99]">Facility Admin</div>
                        <ArrowRight className="hidden md:block text-slate-300" />
                        <ArrowRight className="md:hidden rotate-90 text-slate-300 my-2" />
                        <div className="px-6 py-3 glass-card rounded-2xl font-bold text-text-primary border-b-4 border-[#F59E0B]">Clinical Staff</div>
                        <ArrowRight className="hidden md:block text-slate-300" />
                        <ArrowRight className="md:hidden rotate-90 text-slate-300 my-2" />
                        <div className="px-6 py-3 glass-card rounded-2xl font-bold text-text-primary border-b-4 border-rose-500">Caregivers</div>
                        <ArrowRight className="hidden md:block text-slate-300" />
                        <ArrowRight className="md:hidden rotate-90 text-slate-300 my-2" />
                        <div className="px-6 py-3 glass-card rounded-2xl font-bold text-text-primary border-b-4 border-purple-500">Support Staff</div>
                     </div>
                  </div>

                  <div className="max-w-8xl mx-auto">
                     <div className="mb-12 relative z-10 relative aspect-[21/9] w-full rounded-[24px] overflow-hidden glass-card shadow-lg p-2 border border-[#0D63CC]/10">
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


               {/* KEY USER FLOWS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">Process Maps</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Key User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Flows</span></h2>
                  </div>
                  <div className="max-w-8xl mx-auto space-y-12">
                     {[
                        { title: "Resident Admission Flow", flow: ["Referral", "Assessment", "Admission", "Documentation", "Care Plan"] },
                        { title: "Clinical Documentation Flow", flow: ["Patient Visit", "Notes", "Review", "Approval", "Storage"] },
                        { title: "Medication Administration Flow", flow: ["Medication Assignment", "Administration", "Verification", "Audit Log"] },
                        { title: "Incident Reporting Flow", flow: ["Incident Submission", "Supervisor Review", "Compliance Review", "Resolution"] }
                     ].map((uf, i) => (
                        <div key={i} className="glass-card p-8 md:p-12 rounded-[24px] border border-white/60 shadow-[0_20px_40px_rgb(0,0,0,0.05)] relative overflow-hidden bg-gradient-to-br from-[#e8f9f5] via-[#f0f4ff] to-[#eef2ff]" >
                           <h4 className="text-sm font-bold text-[#0D63CC] uppercase tracking-widest mb-16 text-center md:text-left">{uf.title}</h4>

                           <div className="relative py-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 px-2 md:px-8">
                              {/* Wavy dashed connecting line (Desktop only) */}
                              {/* <svg className="hidden md:block absolute top-1/2 left-[5%] right-[5%] w-[90%] h-24 -translate-y-1/2 z-0 opacity-60" preserveAspectRatio="none" viewBox="0 0 100 100">
                                 <path d="M0,50 Q12.5,25 25,50 T50,50 T75,50 T100,50" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 6" strokeLinecap="round" />
                              </svg> */}

                              {/* Wavy dashed connecting line (Mobile only) */}
                              {/* <svg className="md:hidden absolute top-[5%] bottom-[5%] left-1/2 w-24 h-[90%] -translate-x-1/2 z-0 opacity-60" preserveAspectRatio="none" viewBox="0 0 100 100">
                                 <path d="M50,0 Q25,12.5 50,25 T50,50 T50,75 T50,100" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 6" strokeLinecap="round" />
                              </svg> */}

                              {uf.flow.map((step, idx) => {
                                 const total = uf.flow.length;
                                 const isLast = idx === total - 1;
                                 let nodeStyle = "";
                                 let iconColor = "";

                                 if (isLast) {
                                    nodeStyle = "bg-[#2B275A] border-[#2B275A] text-white shadow-xl shadow-[#2B275A]/20";
                                    iconColor = "text-white";
                                 } else if (idx < 2) {
                                    nodeStyle = "bg-white border-[#cbd5e1] border-dashed border-[3px] text-[#2B275A] shadow-md shadow-slate-200/50";
                                    iconColor = "text-[#2B275A]";
                                 } else {
                                    nodeStyle = "bg-[#EEF2FF] border-[#3b82f6] border-solid border-[3px] text-[#1e3a8a] shadow-lg shadow-blue-500/10";
                                    iconColor = "text-[#3b82f6]";
                                 }

                                 const icons = [Search, Target, Layers, PenTool, CheckCircle2];
                                 const IconComponent = icons[Math.min(idx, 4)];

                                 return (
                                    <div key={idx} className="relative z-10 flex flex-col items-center">
                                       {/* Arrow on connector line */}
                                       {idx < total - 1 && (
                                          <div className="hidden md:flex absolute top-[55px] lg:top-[60px] -right-12 w-8 h-8 items-center justify-center z-0 bg-transparent">
                                             <ArrowRight size={20} className="opacity-50" strokeWidth={2.5} />
                                          </div>
                                       )}
                                       <div className={`w-32 h-32 md:w-[130px] md:h-[130px] lg:w-40 lg:h-40 rounded-full flex flex-col items-center justify-center transition-all hover:scale-105 duration-500 ${nodeStyle}`}>
                                          <IconComponent strokeWidth={1.5} size={28} className={`mb-3 ${iconColor}`} />
                                          <span className="font-extrabold text-[10px] lg:text-xs text-center px-4 uppercase tracking-[0.1em] leading-tight">{step}</span>
                                       </div>
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     ))}
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
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Designing Efficient <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Clinical Workflows</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        Clinical workflows were designed to reduce administrative burden while improving task completion, visibility, and operational efficiency.
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
                           <div key={i} className="p-6 glass-card rounded-2xl relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl border border-[#0D63CC]/10 hover:border-[#0D63CC]/30 transition-all duration-500 flex flex-col bg-white/30 backdrop-blur-md">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-[#0D63CC]/15 group-hover:scale-150 transition-all duration-700" />
                              <div className="text-[#0D63CC]/10 font-black text-6xl absolute -top-4 -right-2 transition-all duration-500 group-hover:text-[#0D63CC]/20 group-hover:scale-110">{s.step}</div>
                              <div className="w-12 h-12 rounded-2xl bg-white/60 border border-white backdrop-blur-sm shadow-sm flex items-center justify-center mb-5 relative z-10 group-hover:bg-white transition-colors duration-300">
                                 <s.icon size={22} className="text-[#0D63CC]" />
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
                           <h3 className="text-3xl font-bold text-text-primary mb-4">Executive <span className="text-[#0D63CC]">Dashboard Experience</span></h3>
                           <p className="text-lg text-text-secondary font-medium leading-relaxed">
                              Role-based dashboards provide healthcare leaders with real-time operational insights, compliance visibility, and actionable performance metrics.
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
                  <div className="flex flex-col gap-12">
                     <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-text-primary mb-4">Analytics & <span className="text-[#00DA99]">Operational Reporting</span></h3>
                        <p className="text-lg text-text-secondary font-medium leading-relaxed">
                           Role-based dashboards provide healthcare leaders with real-time operational insights, compliance visibility, and actionable performance metrics.
                        </p>
                     </div>
                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                           { title: "Clinical Activity", icon: Activity, items: ["Notes Completion", "Treatment Adherence", "Session Tracking"], color: "#0D63CC", bg: "bg-[#0D63CC]/5", border: "border-[#0D63CC]/20" },
                           { title: "Compliance Status", icon: Shield, items: ["Audit Readiness", "Missing Documentation", "HIPAA Logs"], color: "#00DA99", bg: "bg-[#00DA99]/5", border: "border-[#00DA99]/20" },
                           { title: "Workforce Utilization", icon: Users, items: ["Staff Productivity", "Caseload Distribution", "Overtime Alerts"], color: "#F59E0B", bg: "bg-[#F59E0B]/5", border: "border-[#F59E0B]/20" },
                           { title: "Facility Performance", icon: Building2, items: ["Occupancy Rates", "Incident Trends", "Financial Health"], color: "#EF4444", bg: "bg-rose-500/5", border: "border-rose-500/20" }
                        ].map((report, i) => (
                           <div key={i} className={`p-6 glass-card rounded-3xl border shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group ${report.bg} ${report.border}`}>
                              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[40px] opacity-20 pointer-events-none group-hover:scale-150 transition-transform duration-700" style={{ backgroundColor: report.color }} />
                              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 relative z-10 bg-white/50 border border-white backdrop-blur-sm group-hover:bg-white transition-colors duration-300 shadow-sm">
                                 <report.icon size={24} style={{ color: report.color }} />
                              </div>
                              <h4 className="font-bold text-lg text-text-primary mb-4 relative z-10">{report.title}</h4>
                              <ul className="space-y-3 relative z-10">
                                 {report.items.map((item, idx) => (
                                    <li key={idx} className="text-sm font-medium text-text-secondary flex items-start gap-3">
                                       <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: report.color }} />
                                       <span className="leading-tight">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        ))}
                     </div>
                     <div className="grid md:grid-cols-3 gap-6 w-full">
                        <div className="aspect-[4/3] md:aspect-video glass-card rounded-2xl flex items-center justify-center p-4 border border-[#0D63CC]/10 group hover:border-[#0D63CC]/30 hover:shadow-md transition-all">
                           <span className="text-sm font-bold text-text-secondary group-hover:text-[#0D63CC]">Interactive Chart Dashboard</span>
                        </div>
                        <div className="aspect-[4/3] md:aspect-video glass-card rounded-2xl flex items-center justify-center p-4 border border-[#00DA99]/10 group hover:border-[#00DA99]/30 hover:shadow-md transition-all">
                           <span className="text-sm font-bold text-text-secondary group-hover:text-[#00DA99]">KPI Visualization</span>
                        </div>
                        <div className="aspect-[4/3] md:aspect-video glass-card rounded-2xl flex items-center justify-center p-4 border border-rose-500/10 group hover:border-rose-500/30 hover:shadow-md transition-all">
                           <span className="text-sm font-bold text-text-secondary group-hover:text-rose-500">Drill-down Reporting Screen</span>
                        </div>
                     </div>
                  </div>
               </section>

               {/* DESIGN SYSTEM (Healthcare Adapted) */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                           Visual Identity
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Building a Scalable Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Design System</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        A unified healthcare design system was created to ensure complex medical data feels approachable, trustworthy, and accessible.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4">
                     {/* Colors */}
                     <div className="lg:col-span-4 glass-card rounded-[24px] p-6 lg:p-8 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Semantic Color Scale
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                           {[
                              { bg: 'bg-[#0D63CC]', label: 'Primary', hex: 'Healthcare Blue' },
                              { bg: 'bg-[#00DA99]', label: 'Success', hex: 'Revenue Green' },
                              { bg: 'bg-[#F59E0B]', label: 'Warning', hex: 'Review Orange' },
                              { bg: 'bg-[#EF4444]', label: 'Error', hex: 'Denial Red' }
                           ].map((color, i) => (
                              <div key={i} className="flex flex-col gap-2 group/color">
                                 <div className={`w-full aspect-square rounded-2xl ${color.bg} shadow-lg border border-white/20 group-hover/color:scale-110 group-hover/color:shadow-2xl transition-all duration-300`} />
                                 <div>
                                    <span className="block text-[10px] font-bold text-text-primary uppercase tracking-wider mt-2">{color.label}</span>
                                    <span className="block text-[9px] text-text-secondary font-medium uppercase opacity-60">{color.hex}</span>
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

                     {/* Iconography */}
                     <div className="lg:col-span-4 glass-card rounded-[24px] p-6 lg:p-8 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-1/2 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Iconography
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { icon: Layout, color: "text-[#0D63CC]" },
                              { icon: Heart, color: "text-rose-500" },
                              { icon: Stethoscope, color: "text-[#00DA99]" },
                              { icon: Clock, color: "text-[#F59E0B]" },
                              { icon: Wallet, color: "text-[#0D63CC]" },
                              { icon: Users, color: "text-[#00DA99]" },
                              { icon: Activity, color: "text-rose-500" },
                              { icon: CheckCircle2, color: "text-[#00DA99]" },
                              { icon: Shield, color: "text-[#0D63CC]" }
                           ].map((Item, i) => (
                              <div key={i} className="aspect-square rounded-2xl bg-white/50 border border-slate-200 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                 <Item.icon size={24} strokeWidth={1.5} className={`${Item.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="lg:col-span-12 mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                        {["Component Library", "Form Controls", "Tables", "Clinical Status Indicators"].map((item, idx) => (
                           <div key={idx} className="aspect-[4/3] md:h-24 md:aspect-auto glass-card rounded-2xl flex items-center justify-center p-4 border border-[#0D63CC]/10 group hover:border-[#0D63CC]/30 hover:shadow-md transition-all">
                              <span className="text-sm font-bold text-text-secondary text-center group-hover:text-[#0D63CC]">{item}</span>
                           </div>
                        ))}
                     </div>

                  </div>
               </section>
               <div className="mb-12 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* USABILITY TESTING */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">Validation</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Usability <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Validation</span></h2>
                  </div>
                  <div className="max-w-4xl mx-auto">
                     <div className="grid md:grid-cols-3 gap-6">
                        {[
                           { finding: "Simplified navigation improved task completion.", icon: Search },
                           { finding: "Clinical staff preferred fewer clicks for documentation.", icon: HandCoins },
                           { finding: "Dashboard summaries improved information accessibility.", icon: Layout }
                        ].map((item, i) => (
                           <div key={i} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 border border-slate-200/50 group hover:border-[#00DA99]/30 transition-colors">
                              <div className="w-12 h-12 rounded-full bg-[#00DA99]/10 text-[#00DA99] flex items-center justify-center group-hover:scale-110 transition-transform">
                                 <item.icon size={20} />
                              </div>
                              <p className="text-sm font-bold text-text-primary">{item.finding}</p>
                           </div>
                        ))}
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
                                 Expected Outcomes
                              </span>
                           </div>
                           <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-text-primary leading-[1.1]">
                              Business <br />
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Impact</span>
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
                                 <p className="text-xs font-medium text-text-secondary mt-1">Reduced administrative burden & streamlined documentation workflows.</p>
                              </div>
                              <TrendingUp className="text-[#00DA99]" size={24} />
                           </div>

                           <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                              <div>
                                 <h5 className="font-bold text-sm text-text-primary flex items-center gap-2">
                                    <Wallet size={16} className="text-[#0D63CC]" /> Billing Teams
                                 </h5>
                                 <p className="text-xs font-medium text-text-secondary mt-1">Improved care coordination & centralized operational oversight.</p>
                              </div>
                              <TrendingUp className="text-[#00DA99]" size={24} />
                           </div>

                           <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                              <div>
                                 <h5 className="font-bold text-sm text-text-primary flex items-center gap-2">
                                    <Users size={16} className="text-[#0D63CC]" /> Administrators
                                 </h5>
                                 <p className="text-xs font-medium text-text-secondary mt-1">Increased compliance visibility.</p>
                              </div>
                              <TrendingUp className="text-[#00DA99]" size={24} />
                           </div>
                        </div>
                     </div>
                  </div>
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


               {/* KEY TAKEAWAY */}
               <section className="mb-20 md:mb-32 w-full">
                  <div className="w-full glass-card rounded-[40px] p-10 md:p-16 lg:p-20 bg-gradient-to-br from-[#00DA99]/15 via-[#f0fbff]/50 to-[#0D63CC]/15 border border-[#00DA99]/20 shadow-sm relative overflow-hidden text-center flex flex-col items-center">
                     <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#00DA99]/20 blur-[80px] rounded-full pointer-events-none" />
                     <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#0D63CC]/20 blur-[80px] rounded-full pointer-events-none" />

                     <div className="relative z-10 w-full flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                           <Award className="text-[#0D63CC]" size={28} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-12">
                           Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Learnings</span>
                        </h2>

                        <div className="relative max-w-4xl mx-auto w-full">
                           <span className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]  font-serif absolute -top-8 -left-4 md:-left-12 opacity-80 leading-none tracking-tighter">"</span>
                           <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#111827] mb-8 leading-relaxed relative z-10">
                              OasisPad was not designed as an EHR. It was designed as a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">connected behavioral health operating system.</span>
                           </h3>
                           <span className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]  font-serif absolute -bottom-12 -right-4 md:-right-8 drop-shadow-md leading-none tracking-tighter">"</span>
                        </div>

                        <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto relative z-10">
                           Designing healthcare products requires balancing clinical efficiency, regulatory requirements, and usability. Simplifying complex workflows while maintaining compliance was critical to creating a scalable and effective experience.
                        </p>
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
                     <p className="text-text-secondary font-medium mt-4">Final designs focused on clarity, efficiency, accessibility, and operational scalability.</p>
                  </div>

                  <div className="grid gap-6">
                     <div className="lg:col-span-12">
                        <div className="relative aspect-[21/9] z-10 w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-500">
                           <Image
                              src="/images/oasispad/OasisPad-Visual-UI.png"
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
                     <motion.div {...fadeIn} className="relative glass-card rounded-[24px] p-8 md:p-12 border border-white/60 shadow-lg overflow-hidden group">
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
                              Dive deeper into the complete design system, enterprise workflows, interaction patterns, and component library behind Carenova Systems.</p>
                           <div className="my-8 pt-8 border-t border-slate-200/50 max-w-2xl mx-auto">
                              <h3 className="text-2xl font-bold text-text-primary mb-2">Building Healthcare or Enterprise SaaS Products?</h3>
                              <p className="text-base md:text-lg text-text-secondary font-medium leading-relaxed">I help organizations design scalable healthcare, SaaS, and enterprise experiences that simplify complexity and drive operational efficiency.
                              </p>

                              <div className="flex flex-wrap justify-center gap-2 mb-10">
                                 {["50+ High-Fidelity Screens", "Complete Design System", "Enterprise Components", "Workflow Prototypes"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-200/50 hover:bg-white transition-colors">
                                       <span className="text-[#0D63CC] mr-1">✓</span> {tag}
                                    </span>
                                 ))}
                              </div>
                           </div>

                           <Link href="https://www.figma.com/design/JMh46MC2K4sRdLwAqNRBSj/Oasisnotes?node-id=0-1&t=yPqYRdGSG9FnJSZX-1" className="inline-flex items-center gap-3 px-8 py-4 btn-premium text-white rounded-full font-bold transition-all shadow-[0_20px_40px_-10px_rgba(13,99,204,0.25)] group text-base overflow-hidden relative">
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
                  <Link href="/case-studies/ticketstack" className="group flex flex-col items-center">
                     <h3 className="text-4xl md:text-5xl font-black text-text-primary group-hover:text-[#0D63CC] transition-colors duration-300 mb-6">
                        TicketStack
                     </h3>
                     <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#0D63CC] group-hover:border-[#0D63CC] transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
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
