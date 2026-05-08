import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, Search, Target, Users, Layout, Zap, CheckCircle2,
   FileText, Database, Smartphone, ShieldCheck, Activity,
   Lightbulb, PieChart, BarChart3, ListChecks, Repeat,
   UserCircle, ClipboardList, Layers, TrendingUp, Award,
   ArrowRight, Filter, Eye, Palette, Stethoscope, CreditCard,
   Shield, UserCog, UserCheck, Calendar, HeartPulse, ClipboardCheck, Quote,
   AlertCircle, ChevronRight, CheckSquare, BarChart4, Lock, MessageCircle
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function OasisNotesCaseStudy() {
   const fadeIn = {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
   }

   return (
      <div className="min-h-screen bg-transparent text-[#282360] selection:bg-[#0D63CC]/20 selection:text-[#0D63CC] font-sans relative overflow-x-hidden transition-colors duration-500">
         {/* Noise Texture Overlay */}
         <div className="noise-overlay" />

         {/* Hero Section Background system matches Home Ambient Orbs */}
         <div className="fixed inset-0 pointer-events-none -z-10 bg-[#f7faff]">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00DA99]/5 blur-[120px] rounded-full pointer-events-none" />
         </div>

         <Head>
            <title>OasisNotes | Case Study - Healthcare SaaS Platform</title>
            <meta name="description" content="OasisNotes - Designing a scalable HIPAA-grade healthcare SaaS platform for behavioral health facilities." />
         </Head>

         <Navbar />

         <main className="pt-40 pb-32 relative z-10 w-full">
            <div className="max-w-[80rem] mx-auto px-6">

               {/* Back Navigation consistent with Secondary CTA on Home */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-12 relative z-10"
               >
                  <Link
                     href="/#works"
                     className="relative group inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] overflow-hidden"
                  >
                     <span className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-[#0D63CC] to-[#00DA99] opacity-70 group-hover:opacity-100 transition-opacity" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                     <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0D63CC]/5 to-[#00DA99]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     <ArrowLeft size={16} className="text-[#0D63CC] group-hover:-translate-x-1 transition-transform" />
                     <span className="relative text-gradient text-sm">Back to Works</span>
                  </Link>
               </motion.div>

               {/* Hero Section - Matching Home Hero logic */}
               <section className="mb-32">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-12 xl:col-span-7 relative z-10">
                        <motion.div
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           className="inline-flex items-center gap-2 px-5 py-2.5 glass-card mb-8 hover:bg-white/60 transition-colors"
                        >
                           <div className="w-2.5 h-2.5 rounded-full bg-[#0D63CC] animate-pulse shadow-[0_0_8px_rgba(13,99,204,0.5)]" />
                           <span className="text-[10px] font-black tracking-[4px] uppercase text-[#0D63CC]">HIPAA-Grade SaaS Case Study</span>
                        </motion.div>

                        <motion.h1
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.1 }}
                           className="text-5xl md:text-[5rem] font-black italic tracking-tighter mb-8 leading-[0.9] text-[#282360]"
                        >
                           OasisNotes
                        </motion.h1>

                        <motion.p
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.2 }}
                           className="text-md md:text-lg text-slate-600 mb-12 max-w-xl leading-relaxed border-l-4 border-indigo-200 pl-6 font-medium italic"
                        >
                           Designing a Scalable Healthcare SaaS Platform (EHR + Billing + Multi-Role System) for behavioral health facilities.
                        </motion.p>

                        <div className="flex flex-wrap gap-10">
                           {['Admin Control', 'Billing Intelligence', 'Clinical Velocity'].map((point, i) => (
                              <div key={i} className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-[#0D63CC]">
                                    <Lock size={16} strokeWidth={2.5} />
                                 </div>
                                 <span className="text-[11px] font-black tracking-widest uppercase text-slate-400">{point}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        className="lg:col-span-12 xl:col-span-5 relative flex justify-center items-center"
                     >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0D63CC] to-[#00DA99] rounded-full blur-[80px] opacity-10 animate-pulse" />
                        <div className="glass-card p-4 relative z-10 w-full aspect-[16/11] flex flex-col items-center justify-center border-white/60 shadow-strong hover:glow-blue transition-all duration-500 overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                           <Layout size={60} className="text-slate-200 mb-6 drop-shadow-sm" strokeWidth={1} />
                           <span className="font-black italic tracking-tighter text-xl text-center text-slate-300 uppercase leading-none px-12 opacity-50">
                              [Dashboard Showcase Placeholder]
                           </span>
                        </div>
                     </motion.div>
                  </div>
               </section>

               {/* Problems & Solutions - Using Home Metrics / Grid patterns */}
               <section className="py-20 bg-transparent section-divide">
                  <div className="grid lg:grid-cols-12 gap-16">
                     <div className="lg:col-span-5">
                        <h2 className="text-[40px] font-black italic tracking-tighter heading-gradient leading-tight mb-8">
                           The Problem
                        </h2>
                        <p className="text-slate-600 text-md leading-relaxed mb-8 border-l-4 border-rose-200 pl-6 font-medium">
                           Healthcare systems often suffer from cluttered dashboards, poor navigation, and fragmented modules that lead to provider burnout.
                        </p>
                        <div className="space-y-4">
                           {['Complex doc workflows', 'Inefficient billing processes', 'Lack of task clarity'].map((err, i) => (
                              <div key={i} className="flex items-center gap-4 group">
                                 <div className="w-2 h-2 rounded-full bg-rose-500 shadow-lg shadow-rose-200" />
                                 <span className="text-xs font-black uppercase tracking-widest text-[#282360]">{err}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
                        <motion.div {...fadeIn} className="glass-card p-8 hover:glow-blue transition-all">
                           <div className="w-12 h-12 rounded-xl bg-[#0D63CC]/10 text-[#0D63CC] flex items-center justify-center mb-6">
                              <Zap size={22} />
                           </div>
                           <h3 className="text-lg font-bold text-[#282360] mb-3">The Solution</h3>
                           <p className="text-sm text-slate-500 leading-relaxed italic">
                              A modular, role-based SaaS UX system designed to reduce cognitive load and improve clinical task efficiency through structure.
                           </p>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="glass-card p-8 hover:glow-green transition-all">
                           <div className="w-12 h-12 rounded-xl bg-[#00DA99]/10 text-[#00DA99] flex items-center justify-center mb-6">
                              <ShieldCheck size={22} />
                           </div>
                           <h3 className="text-lg font-bold text-[#282360] mb-3">Compliance First</h3>
                           <p className="text-sm text-slate-500 leading-relaxed italic">
                              Unified HIPAA-grade security with clinical precision, ensuring every medical action is traceable and transparent.
                           </p>
                        </motion.div>
                     </div>
                  </div>
               </section>

               {/* Process Section - Matches "How I Design" or Expertise Grid */}
               <section className="py-20 section-divide">
                  <div className="text-center mb-16">
                     <h2 className="text-[46px] font-black italic tracking-tighter heading-gradient leading-tight mb-6 text-center">
                        Strategic Process
                     </h2>
                     <p className="text-slate-600 font-bold italic uppercase tracking-[4px] text-xs">UX Lifecycle & Methodology</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                     {[
                        {
                           n: '01',
                           t: 'Understanding',
                           d: 'Mapped user journeys for 5 distinct roles to identify fragmented module behaviors.',
                           c: 'blue',
                           icon: Search
                        },
                        {
                           n: '02',
                           t: 'Strategy',
                           d: 'Defined information hierarchy: Action-first (Alerts), Workflow (Daily), and Insights (BI).',
                           c: 'emerald',
                           icon: Target
                        },
                        {
                           n: '03',
                           t: 'Execution',
                           d: 'Developed 12-column grid SaaS layouts with reusable atomic design components.',
                           c: 'indigo',
                           icon: Zap
                        }
                     ].map((item, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           whileHover={{ y: -8 }}
                           className="glass-card p-10 flex flex-col group h-full"
                        >
                           <div className="flex justify-between items-start mb-8">
                              <div className="w-14 h-14 rounded-2xl glass-card border-white border-[1.5px] items-center justify-center flex text-[#0D63CC] hover:scale-110 transition-transform">
                                 <item.icon size={22} strokeWidth={1.5} />
                              </div>
                              <span className="text-xs font-black text-slate-300 italic opacity-50 tracking-widest">{item.n}</span>
                           </div>
                           <h4 className="text-xl font-black text-[#282360] mb-4 uppercase italic tracking-tighter group-hover:text-[#0D63CC] transition-colors">{item.t}</h4>
                           <p className="text-sm text-slate-500 leading-relaxed font-bold italic">{item.d}</p>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* Solutions & Showcases */}
               <section className="py-20 space-y-32">
                  {/* Billing Highlight */}
                  <motion.div {...fadeIn} className="glass-card p-12 lg:p-20 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D63CC]/5 blur-[120px] rounded-full -z-10" />
                     <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                        <div>
                           <div className="inline-flex items-center gap-2 text-[#0D63CC] mb-8 font-black uppercase tracking-[4px] text-[10px]">
                              <Award size={18} /> Highlight: Billing Module
                           </div>
                           <h3 className="text-[40px] font-black italic tracking-tighter text-[#282360] mb-8 leading-tight italic uppercase">Step-Based Claim Creation</h3>
                           <p className="text-slate-600 font-medium text-md leading-relaxed mb-10 border-l-4 border-indigo-200 pl-6 italic">
                              Simplified complex claim submissions into a logical wizard: Visit → Diagnosis → Procedures → Claim.
                           </p>
                           <div className="grid grid-cols-2 gap-6">
                              {['Auto-Calc Engine', 'ERA Integration', 'Status Lifecycle', 'ICD/CPT Validation'].map((f, i) => (
                                 <div key={i} className="flex gap-3 items-center">
                                    <CheckCircle2 className="text-[#00DA99]" size={16} />
                                    <span className="text-xs font-black uppercase tracking-widest text-[#282360]">{f}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div className="glass-card p-4 shadow-strong rotate-1 hover:rotate-0 transition-transform duration-700 aspect-[16/11] flex flex-col items-center justify-center text-slate-300 border-white group-hover:glow-blue">
                           <CreditCard size={48} strokeWidth={1} className="mb-4 opacity-10" />
                           <span className="text-xs font-black tracking-widest uppercase opacity-30 px-10 text-center">[Billing Workflow UI]</span>
                        </div>
                     </div>
                  </motion.div>

                  {/* Role Dashboards - Matches Expertise grid width */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {[
                        { t: 'Admin', d: 'Control users, residents, and operational activities from a single hub.', i: UserCog, c: 'blue' },
                        { t: 'Clinician', d: 'Task-focused alerts prioritized to reduce signature and documentation debt.', i: Stethoscope, c: 'emerald' },
                        { t: 'Guardian', d: 'Simplified actions: Sign forms, manage apps, and track resident status.', i: UserCircle, c: 'cyan' }
                     ].map((role, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="glass-card p-10 group overflow-hidden">
                           <div className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center text-[#0D63CC] mb-8 group-hover:scale-110 transition-transform`}>
                              <role.i size={20} strokeWidth={1.5} />
                           </div>
                           <h5 className="text-lg font-black text-[#282360] mb-4 uppercase italic tracking-tighter group-hover:text-[#0D63CC] transition-colors">{role.t} Dashboard</h5>
                           <p className="text-xs text-slate-500 font-bold leading-relaxed italic">{role.d}</p>
                           <div className="mt-8 pt-6 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-[10px] font-black uppercase text-[#0D63CC] tracking-widest flex items-center gap-2">View Modules <ChevronRight size={12} /></span>
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  {/* Clinical Record */}
                  <motion.div {...fadeIn} className="relative group">
                     <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#0D63CC] via-indigo-400 to-[#00DA99] opacity-30 blur-2xl animate-pulse -z-10" />
                     <div className="glass-card bg-[#282360]/[0.98] p-12 md:p-24 rounded-[40px] shadow-2xl overflow-hidden text-white flex flex-col lg:flex-row gap-20 items-center">
                        <div className="max-w-xl">
                           <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full mb-8 border border-white/10 text-[#00DA99]">
                              <Activity size={18} />
                              <span className="text-[10px] font-black uppercase tracking-[4px]">EHR Architecture</span>
                           </div>
                           <h3 className="text-5xl font-black italic tracking-tighter mb-8 leading-tight italic uppercase">Clinical Record Visualization</h3>
                           <p className="text-slate-400 font-medium text-md leading-relaxed mb-10 italic">
                              Extreme information density handled via tabbed navigation for vitals, meds, and history tracking.
                           </p>
                           <div className="flex flex-wrap gap-3">
                              {['Allergies', 'Meds', 'Vitals', 'Vaccines'].map(tag => (
                                 <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[3px] text-[#00DA99]/70 hover:bg-[#00DA99] hover:text-white transition-colors cursor-default">
                                    {tag}
                                 </span>
                              ))}
                           </div>
                        </div>
                        <div className="w-full h-full lg:w-[500px] aspect-video glass-card !bg-white/5 !border-white/10 flex items-center justify-center text-slate-600 border-white shadow-2xl relative overflow-hidden group-hover:glow-green transition-shadow duration-500">
                           <span className="text-xs font-black uppercase tracking-widest text-[#00DA99] opacity-30">[EHR Tabbed UI Showcase]</span>
                        </div>
                     </div>
                  </motion.div>
               </section>

               {/* Outcomes - Matches Home Stats / Metric cards */}
               <section className="py-20 section-divide">
                  <div className="text-center mb-16">
                     <h2 className="text-[40px] font-black italic tracking-tighter heading-gradient leading-tight mb-4">
                        Strategic Outcome
                     </h2>
                     <p className="text-slate-400 font-bold uppercase tracking-[6px] text-[10px]">Business & User Impact</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                     {[
                        { l: 'Efficiency Gain', v: '40%', d: 'Reduction in clinical entry time via smart defaults.', c: 'text-[#0D63CC]', g: 'glow-blue' },
                        { l: 'Billing Speed', v: '2.5x', d: 'Faster claim lifecycle from intake to ERA.', c: 'text-[#00DA99]', g: 'glow-green' },
                        { l: 'Adoption Rate', v: '100%', d: 'Successful multi-role pilot across flagship facilities.', c: 'text-[#282360]', g: 'glow-blue' }
                     ].map((stat, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className={`glass-card p-12 text-center group hover:${stat.g} transition-all`}>
                           <p className={`text-7xl font-black italic tracking-tighter mb-4 ${stat.c} drop-shadow-sm`}>{stat.v}</p>
                           <p className="text-xs font-black uppercase text-slate-400 tracking-[6px] mb-8">{stat.l}</p>
                           <p className="text-sm text-slate-500 font-bold italic leading-relaxed">{stat.d}</p>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* Reflections Consistent with CTA / DesignExpertise Headers */}
               <section className="py-20">
                  <div className="glass-card p-12 md:p-24 shadow-strong relative overflow-hidden bg-gradient-to-br from-white via-transparent to-blue-50/20">
                     <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0D63CC]/5 blur-[150px] rounded-full -z-10" />
                     <div className="max-w-4xl mx-auto relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-12 mb-20 text-center md:text-left">
                           <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-white to-blue-50/20 glass-card border-white border-[1.5px] items-center justify-center flex text-[#0D63CC] shadow-lg">
                              <Lightbulb size={36} strokeWidth={1.5} />
                           </div>
                           <div>
                              <h3 className="text-xs font-black uppercase tracking-[8px] text-[#0D63CC] mb-4">🎯 Key Takeaways</h3>
                              <h2 className="text-4xl md:text-5xl font-black italic text-[#282360] tracking-tighter italic uppercase leading-[0.9]">Designing for Healthcare Complexity</h2>
                           </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-16 text-left">
                           {[
                              { t: 'Multi-Role Empathy', d: 'Role-based dashboards require empathetic filtering to ensure users never feel cognitive fatigue.' },
                              { t: 'Information Architecture', d: 'In healthcare, info hierarchy isn\'t just design — it\'s a safety feature that prevents errors.' },
                              { t: 'Strategic Simplicity', d: 'Break down complex financial logic into linear steps to reduce friction and improve retention.' },
                              { t: 'Atomic Scalability', d: 'A rigid SaaS design system allows the platform to grow from 10 to 100 modules without UI debt.' }
                           ].map((item, i) => (
                              <div key={i} className="group relative">
                                 <div className="absolute -left-6 top-1 w-1 h-10 bg-gradient-to-b from-[#0D63CC] to-[#00DA99] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                 <h5 className="text-xl font-black italic text-[#282360] mb-4 uppercase tracking-tighter group-hover:text-[#0D63CC] transition-colors">{item.t}</h5>
                                 <p className="text-slate-500 text-sm font-bold leading-relaxed italic">{item.d}</p>
                              </div>
                           ))}
                        </div>

                        <div className="mt-24 pt-12 border-t border-slate-100 text-center">
                           <p className="text-2xl font-black italic text-gradient leading-tight drop-shadow-sm uppercase tracking-tighter">
                              "Transforming fragmented feature-heavy debt into scalable, user-centered simplicity."
                           </p>
                        </div>
                     </div>
                  </div>
               </section>

               {/* Footer CTA consistency */}
               <motion.div {...fadeIn} className="text-center pt-24">
                  <Link
                     href="/#works"
                     className="btn-primary group inline-flex items-center gap-6 px-12 py-6 relative overflow-hidden text-lg"
                  >
                     <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                     <span className="font-black italic tracking-tighter uppercase">Explore More Work</span>
                     <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
               </motion.div>

            </div>
         </main>

         <Footer />
      </div>
   )
}
