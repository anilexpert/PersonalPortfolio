import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, Target, Users, Search, Activity, ShieldCheck, 
  CheckCircle2, Lock, Eye, CheckSquare, FileText, Layout, 
  Briefcase, Zap, ClipboardList, BarChart3, MessageSquare, 
  Building2, Map, ArrowRight, Sparkles, Shield, Compass, Grid
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ALCDCaseStudy() {
   const fadeIn = {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
   }

   const staggerChildren = {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-100px" },
      transition: { staggerChildren: 0.15 }
   }

   const childFade = {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
   }

   // Premium Glass Placeholder Component for reuse
   const PremiumPlaceholder = ({ icon: Icon, label, colorCls, glowCls }) => (
      <div className={`w-full aspect-[4/3] bg-gradient-to-br from-[#FAFAFA] to-[#F3F4F6] rounded-[32px] border border-slate-200/50 shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center overflow-hidden relative ${colorCls}`}>
         <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />
         <Icon className={`w-12 h-12 mb-4 flex-shrink-0 group-hover:scale-110 drop-shadow-md transition-transform duration-500 relative z-10 ${glowCls}`} />
         <p className="text-slate-500 font-bold uppercase tracking-[2px] text-[11px] bg-white/80 px-4 py-1.5 rounded-full backdrop-blur-md border border-slate-100 relative z-10 shadow-sm">{label}</p>
      </div>
   );

   return (
      <div className="min-h-screen bg-[#FAFCFF] text-slate-900 selection:bg-[#0D63CC]/20 selection:text-[#0D63CC] relative overflow-hidden font-sans">
         <Head>
            <title>ALCD Systems™ | Premium Healthcare SaaS UI/UX Story</title>
            <meta name="description" content="A premium showcase of the ALCD Systems platform design." />
         </Head>

         <Navbar />

         {/* GLOBAL PREMIUM BACKGROUND ELEMENTS */}
         <div className="fixed inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none z-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
         
         <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="fixed -top-[20%] -left-[10%] w-[800px] h-[800px] bg-gradient-to-br from-[#0D63CC]/20 to-[#00DA99]/10 blur-[150px] rounded-full pointer-events-none z-0" 
         />
         
         <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }} 
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="fixed -bottom-[30%] -right-[10%] w-[1000px] h-[1000px] bg-gradient-to-tl from-[#00DA99]/15 to-transparent blur-[160px] rounded-full pointer-events-none z-0" 
         />

         <main className="pt-28 lg:pt-36 pb-24 relative z-10 text-slate-700">
            <div className="max-w-[1240px] mx-auto px-6 flex flex-col gap-32">
               
               {/* ----------------------------------------------------
                   HERO SECTION
                   ---------------------------------------------------- */}
               <motion.section 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-20"
               >
                  <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                     <div className="lg:col-span-12 xl:col-span-6 relative z-10">
                        <h1 className="text-5xl lg:text-7xl font-black tracking-[-0.04em] text-slate-900 mb-6 leading-[1.05]">
                           ALCD <br className="hidden lg:block"/>
                           <span className="relative">
                              <span className="absolute -inset-2 bg-gradient-to-r from-[#0D63CC]/10 to-[#00DA99]/10 blur-xl opacity-50"></span>
                              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0D63CC] to-[#00DA99] relative z-10 italic">
                                 Systems™
                              </span>
                           </span>
                        </h1>

                        <p className="text-lg lg:text-xl font-medium text-slate-600 mb-10 leading-relaxed shadow-sm bg-white/40 backdrop-blur-sm p-5 rounded-3xl border border-white/60 inline-block">
                           Designing a Permission-Driven Healthcare Operations Platform
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200/60">
                           <div><span className="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1">Product</span><span className="text-[13px] font-bold text-slate-800">SaaS Web Platform</span></div>
                           <div><span className="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1">Industry</span><span className="text-[13px] font-bold text-slate-800">Healthcare Compliance</span></div>
                           <div><span className="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1">Timeline</span><span className="text-[13px] font-bold text-slate-800">~3 Months</span></div>
                           <div><span className="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1">Role</span><span className="text-[13px] font-bold text-slate-800">UX / Product Designer</span></div>
                           <div className="md:col-span-2"><span className="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1">Team</span><span className="text-[13px] font-bold text-slate-800">1 Designer + Engineering + Product Owner</span></div>
                        </div>
                     </div>

                     <div className="lg:col-span-12 xl:col-span-6 relative pt-10 xl:pt-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] md:w-[130%] md:h-[130%] bg-gradient-to-r from-[#0D63CC]/30 via-[#00DA99]/20 to-[#0D63CC]/10 blur-[100px] pointer-events-none rounded-full z-0" />
                        
                        <motion.div 
                           animate={{ y: [0, -15, 0] }}
                           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                           className="relative z-10 w-full rounded-[32px] p-[2px] bg-gradient-to-b from-white/90 via-white/50 to-white/20 shadow-[0_30px_80px_-20px_rgba(13,99,204,0.3)]"
                        >
                           <div className="absolute inset-0 rounded-[32px] shadow-[inset_0_1px_2px_rgba(255,255,255,1)]" />
                           <div className="bg-white/70 backdrop-blur-[32px] rounded-[30px] p-4 border border-white/60 overflow-hidden relative group">
                              <PremiumPlaceholder icon={Layout} label="Hero Dashboard Mockup" glowCls="text-[#0D63CC]/40" />
                           </div>
                        </motion.div>
                     </div>
                  </div>
               </motion.section>

               {/* Section Divider */}
               <div className="max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50" />

               {/* ----------------------------------------------------
                   01. INTRODUCE THE PROJECT
                   ---------------------------------------------------- */}
               <motion.section {...fadeIn} className="relative z-30">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-5 relative z-10">
                        <div className="text-[14px] font-black text-[#0D63CC] mb-4 tracking-widest">01 — Introduce the Project</div>
                        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                           Unified <span className="text-[#0D63CC] italic">Operations.</span>
                        </h2>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-6">
                           Assisted living facilities manage compliance, staff operations, resident records, and inspections across multiple disconnected systems.
                        </p>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-10">
                           ALCD Systems™ was designed as a single operational platform to help facilities manage compliance tasks, workforce operations, and inspection readiness — while ensuring strict permission control for external stakeholders like case managers.
                        </p>

                        <div className="bg-white/60 backdrop-blur-md rounded-[24px] p-6 border border-white shadow-sm hover:shadow-md transition-shadow">
                           <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-800 mb-4">Key Highlights</h4>
                           <ul className="space-y-3 font-semibold text-[14px] text-slate-700">
                              <li className="flex items-start gap-3"><CheckCircle2 className="text-[#00DA99] shrink-0 mt-0.5" size={18} /> Designed a multi-role SaaS platform for care facilities</li>
                              <li className="flex items-start gap-3"><CheckCircle2 className="text-[#00DA99] shrink-0 mt-0.5" size={18} /> Built a Preview Mode experience to evaluate the system without enabling operational actions</li>
                           </ul>
                        </div>
                     </div>
                     <div className="lg:col-span-7 relative z-20 pt-10 lg:pt-0">
                        <div className="absolute inset-0 bg-[#0D63CC]/10 blur-[80px] rounded-full pointer-events-none" />
                        <div className="bg-white/60 backdrop-blur-[24px] border border-white shadow-[0_20px_50px_-10px_rgba(13,99,204,0.15)] rounded-[40px] p-2 relative group hover:-translate-y-2 transition-transform duration-500">
                           <div className="absolute inset-0 rounded-[40px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] pointer-events-none" />
                           <PremiumPlaceholder icon={Grid} label="Platform Ecosystem Diagram" glowCls="text-[#0D63CC]/40" />
                        </div>
                     </div>
                  </div>
               </motion.section>

               {/* ----------------------------------------------------
                   02. DEFINE THE OBJECTIVES
                   ---------------------------------------------------- */}
               <motion.section {...fadeIn} className="relative z-30">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-7 order-2 lg:order-1 relative z-20 pt-10 lg:pt-0">
                        <div className="absolute inset-0 bg-[#00DA99]/10 blur-[80px] rounded-full pointer-events-none" />
                        <div className="bg-white/60 backdrop-blur-[24px] border border-white shadow-[0_20px_50px_-10px_rgba(0,218,153,0.15)] rounded-[40px] p-2 relative group hover:-translate-y-2 transition-transform duration-500">
                           <div className="absolute inset-0 rounded-[40px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] pointer-events-none" />
                           <PremiumPlaceholder icon={Target} label="Product Goals Diagram" glowCls="text-[#00DA99]/40" />
                        </div>
                     </div>
                     <div className="lg:col-span-5 order-1 lg:order-2 relative z-10 pl-4 lg:pl-0">
                        <div className="text-[14px] font-black text-[#00DA99] mb-4 tracking-widest">02 — Define the Objectives</div>
                        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                           Clear <span className="text-[#00DA99] italic">Upgrades.</span>
                        </h2>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-6">
                           The goal was to create a system that helps operators stay compliant, reduce administrative workload, and prepare for inspections.
                        </p>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-10">
                           At the same time, the platform needed to clearly separate visibility from automation using a subscription + add-on model.
                        </p>
                        <div className="bg-white/60 backdrop-blur-md rounded-[24px] p-6 border border-white shadow-sm hover:shadow-md transition-shadow">
                           <h4 className="text-[12px] font-black uppercase tracking-widest text-[#00DA99] mb-4">Key Highlights</h4>
                           <ul className="space-y-3 font-semibold text-[14px] text-slate-700">
                              <li className="flex items-start gap-3"><CheckCircle2 className="text-[#00DA99] shrink-0 mt-0.5" size={18} /> Manage compliance and operations in one platform</li>
                              <li className="flex items-start gap-3"><CheckCircle2 className="text-[#00DA99] shrink-0 mt-0.5" size={18} /> Clear upgrade model without blocking compliance visibility</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </motion.section>

               {/* ----------------------------------------------------
                   03. RESEARCH GOALS & METHODS
                   ---------------------------------------------------- */}
               <motion.section {...fadeIn} className="relative z-30">
                  <div className="text-center mb-16">
                     <div className="text-[14px] font-black text-[#0D63CC] mb-4 tracking-widest">03 — Set Research Goals & Methods</div>
                     <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Understanding <span className="italic">Workflows</span></h2>
                     <p className="text-[16px] text-slate-600 leading-relaxed font-medium mt-6 max-w-2xl mx-auto">
                        To understand facility workflows, the research focused on how administrators track compliance, manage staff, and prepare for inspections.
                     </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 relative z-10">
                     <div className="bg-white/60 backdrop-blur-md border border-white shadow-sm rounded-[32px] p-10 hover:shadow-lg transition-all">
                        <h3 className="text-2xl font-black text-slate-900 mb-6">Research Goals</h3>
                        <ul className="space-y-4 font-semibold text-[15px]">
                           <li className="flex items-center gap-3"><Compass className="text-[#0D63CC]" /> Understand daily workflows of facility administrators</li>
                           <li className="flex items-center gap-3"><Search className="text-[#00DA99]" /> Identify where compliance failures or missed documentation occur</li>
                        </ul>
                     </div>
                     <div className="bg-white/60 backdrop-blur-md border border-white shadow-sm rounded-[32px] p-10 hover:shadow-lg transition-all relative">
                        <div className="absolute top-6 right-6 bg-amber-50 text-amber-600 border border-amber-100 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">Competitive Review</div>
                        <h3 className="text-2xl font-black text-slate-900 mb-6">Methods</h3>
                        <ul className="space-y-4 font-semibold text-[15px] mb-8">
                           <li className="flex items-center gap-3"><Users className="text-[#0D63CC]" /> Stakeholder interviews</li>
                           <li className="flex items-center gap-3"><Activity className="text-[#0D63CC]" /> Workflow analysis</li>
                           <li className="flex items-center gap-3"><Layout className="text-[#0D63CC]" /> Competitive review (PointClickCare, CareCloud)</li>
                        </ul>
                     </div>
                  </div>
                  <div className="mt-8 bg-white/60 backdrop-blur-[24px] border border-white shadow-[0_20px_50px_-10px_rgba(13,99,204,0.1)] rounded-[40px] p-2 relative group hover:-translate-y-2 transition-transform duration-500">
                     <PremiumPlaceholder icon={Layout} label="Workflow Mapping Diagram" glowCls="text-[#0D63CC]/40" />
                  </div>
               </motion.section>

               {/* ----------------------------------------------------
                   04. DEFINE THE PROBLEM
                   ---------------------------------------------------- */}
               <motion.section {...fadeIn} className="relative z-30">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-5 relative z-10 pl-4 lg:pl-0">
                        <div className="text-[14px] font-black text-rose-500 mb-4 tracking-widest">04 — Define the Problem</div>
                        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                           Operational <span className="text-rose-500 italic">Chaos.</span>
                        </h2>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-10">
                           Care facilities face three major operational challenges. External case managers also require controlled access to resident information without exposing full facility data.
                        </p>
                        
                        <div className="space-y-4 mb-10">
                           {[
                              "Compliance requirements are tracked manually",
                              "Staff documentation is inconsistent",
                              "Inspection preparation takes days of manual work"
                           ].map((item, i) => (
                              <div key={i} className="flex gap-4 items-center bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-2xl shadow-sm">
                                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-md text-white font-black text-[14px]">
                                    {i + 1}
                                 </div>
                                 <p className="text-[14px] font-semibold text-slate-800">{item}</p>
                              </div>
                           ))}
                        </div>

                        <div className="bg-rose-50/50 backdrop-blur-md rounded-[24px] p-6 border border-rose-100 shadow-sm">
                           <h4 className="text-[12px] font-black uppercase tracking-widest text-rose-500 mb-4">Key Problem Highlights</h4>
                           <ul className="space-y-3 font-semibold text-[14px] text-slate-700">
                              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" /> Facilities lacked centralized compliance management</li>
                              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" /> External stakeholders needed secure, permission-based visibility</li>
                           </ul>
                        </div>
                     </div>
                     <div className="lg:col-span-7 relative z-20 pt-10 lg:pt-0">
                        <div className="absolute inset-0 bg-rose-500/10 blur-[80px] rounded-full pointer-events-none" />
                        <div className="bg-white/60 backdrop-blur-[24px] border border-white shadow-[0_20px_50px_-10px_rgba(244,63,94,0.15)] rounded-[40px] p-2 relative group hover:-translate-y-2 transition-transform duration-500">
                           <PremiumPlaceholder icon={Activity} label="Problem Statement Graphic" glowCls="text-rose-400" />
                        </div>
                     </div>
                  </div>
               </motion.section>

               {/* ----------------------------------------------------
                   05. DEFINE THE AUDIENCE
                   ---------------------------------------------------- */}
               <motion.section {...fadeIn} className="relative z-30">
                  <div className="text-center mb-16">
                     <div className="text-[14px] font-black text-indigo-500 mb-4 tracking-widest">05 — Define the Audience</div>
                     <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Primary <span className="italic text-indigo-500">Users</span></h2>
                     <p className="text-[16px] text-slate-600 leading-relaxed font-medium mt-6 max-w-2xl mx-auto">
                        The platform supports multiple roles with different levels of access.
                     </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                     {[
                        { role: "Owner / CEO", desc: ["Platform oversight", "Financial visibility", "Multi-facility management"], icon: Building2 },
                        { role: "Facility Admin", desc: ["Compliance tracking", "Staff scheduling", "Operational management"], icon: Briefcase },
                        { role: "Operator / Staff", desc: ["Task completion", "Documentation", "Daily operations"], icon: Users },
                        { role: "Case Manager", desc: ["Resident oversight", "Communication with facility", "Documentation review"], icon: ShieldCheck }
                     ].map((u, i) => (
                        <div key={i} className="bg-white/70 backdrop-blur-[24px] border border-white shadow-[0_12px_32px_rgba(13,99,204,0.04)] hover:shadow-xl rounded-[32px] p-8 group transition-all duration-500 hover:-translate-y-3 relative overflow-hidden flex flex-col justify-between">
                           <div>
                              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center shadow-inner mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                 <u.icon className="text-indigo-500" size={26} />
                              </div>
                              <h4 className="font-black text-slate-900 mb-4 text-[18px]">{u.role}</h4>
                           </div>
                           <ul className="space-y-2 text-[13px] font-semibold text-slate-600 opacity-90">
                              {u.desc.map((d, id) => <li key={id} className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-indigo-300 mt-2 shrink-0"/> {d}</li>)}
                           </ul>
                        </div>
                     ))}
                  </div>
                  <div className="mt-8 bg-white/60 backdrop-blur-[24px] border border-white shadow-[0_20px_50px_-10px_rgba(99,102,241,0.1)] rounded-[40px] p-2 relative group hover:-translate-y-2 transition-transform duration-500">
                     <PremiumPlaceholder icon={Users} label="Role Hierarchy Diagram" glowCls="text-indigo-400" />
                  </div>
               </motion.section>

               {/* ----------------------------------------------------
                   06. BRAINSTORM SOLUTIONS
                   ---------------------------------------------------- */}
               <motion.section {...fadeIn} className="relative z-30">
                  <div className="text-center mb-16">
                     <div className="text-[14px] font-black text-teal-600 mb-4 tracking-widest">06 — Brainstorm Solutions</div>
                     <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Key Product <span className="italic text-teal-600">Concepts</span></h2>
                     <p className="text-[16px] text-slate-600 leading-relaxed font-medium mt-6 max-w-2xl mx-auto">
                        To address the operational challenges, the design introduced three key product concepts.
                     </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 relative z-10">
                     <div className="bg-white/60 backdrop-blur-md border border-white shadow-sm rounded-[32px] p-8 hover:shadow-lg transition-all">
                        <div className="text-5xl font-black text-[#0D63CC]/10 mb-6 font-serif">1</div>
                        <h3 className="text-xl font-black text-slate-900 mb-4">Compliance Visibility First</h3>
                        <p className="text-slate-600 font-medium text-[15px] leading-relaxed">
                           Facilities must always be able to see compliance requirements, even without add-ons.
                        </p>
                     </div>
                     <div className="bg-white/60 backdrop-blur-md border border-white shadow-sm rounded-[32px] p-8 hover:shadow-lg transition-all">
                        <div className="text-5xl font-black text-[#00DA99]/10 mb-6 font-serif">2</div>
                        <h3 className="text-xl font-black text-slate-900 mb-4">Automation as Add-Ons</h3>
                        <p className="text-slate-600 font-medium text-[15px] leading-relaxed">
                           Automation tools such as QR compliance scans, AI insights, and Workforce analytics are unlocked via add-ons.
                        </p>
                     </div>
                     <div className="bg-white/60 backdrop-blur-md border border-white shadow-sm rounded-[32px] p-8 hover:shadow-lg transition-all">
                        <div className="text-5xl font-black text-rose-500/10 mb-6 font-serif">3</div>
                        <h3 className="text-xl font-black text-slate-900 mb-4">Preview Mode Evaluation</h3>
                        <p className="text-slate-600 font-medium text-[15px] leading-relaxed">
                           Operators can explore the system in read-only mode before purchasing access.
                        </p>
                     </div>
                  </div>
                  <div className="mt-8 bg-white/60 backdrop-blur-[24px] border border-white shadow-[0_20px_50px_-10px_rgba(20,184,166,0.1)] rounded-[40px] p-2 relative group hover:-translate-y-2 transition-transform duration-500">
                     <PremiumPlaceholder icon={Lock} label="Base vs Add-On Architecture Diagram" glowCls="text-teal-400" />
                  </div>
               </motion.section>

               {/* ----------------------------------------------------
                   07. PROCESS
                   ---------------------------------------------------- */}
               <motion.section {...fadeIn} className="relative z-30">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-12 xl:col-span-5 relative z-10 pl-4 lg:pl-0">
                        <div className="text-[14px] font-black text-[#0D63CC] mb-4 tracking-widest">07 — Share the Process</div>
                        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                           Logical SaaS <br/>
                           <span className="text-[#0D63CC] italic">Architecture.</span>
                        </h2>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-10 max-w-md">
                           The design process focused on creating a logical SaaS architecture with clear role boundaries. Wireframes were created first to validate flows before designing the final UI system.
                        </p>

                        <div className="bg-white/60 backdrop-blur-md rounded-[24px] p-6 border border-white shadow-sm">
                           <h4 className="text-[12px] font-black uppercase tracking-widest text-[#0D63CC] mb-4">Key UX Workflows Designed</h4>
                           <ul className="space-y-3 font-semibold text-[14px] text-slate-700">
                              {['Preview Mode evaluation', 'Compliance task management', 'Role-based dashboards', 'Case manager restricted access'].map((wf, i) => (
                                 <li key={i} className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#0D63CC] mt-2 shrink-0" /> {wf}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     <div className="lg:col-span-12 xl:col-span-7 relative z-20 pt-10 xl:pt-0">
                        <div className="absolute inset-0 bg-[#0D63CC]/10 blur-[80px] rounded-full pointer-events-none" />
                        <div className="bg-white/60 backdrop-blur-[24px] border border-white shadow-[0_20px_50px_-10px_rgba(13,99,204,0.15)] rounded-[40px] p-2 relative group hover:-translate-y-2 transition-transform duration-500">
                           <PremiumPlaceholder icon={Layout} label="Wireframe Progression & User Flows" glowCls="text-[#0D63CC]/40" />
                        </div>
                     </div>
                  </div>
               </motion.section>

               {/* ----------------------------------------------------
                   08. FINAL SOLUTION
                   ---------------------------------------------------- */}
               <motion.section 
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerChildren}
                  className="mb-10 relative z-40 bg-gradient-to-b from-white/50 to-white/10 p-8 lg:p-16 rounded-[48px] border border-white/60 shadow-[0_8px_32px_rgba(13,99,204,0.03)] backdrop-blur-sm"
               >
                  <div className="absolute inset-0 bg-[#FAFCFF] opacity-50 rounded-[48px] pointer-events-none" />
                  
                  <div className="flex flex-col items-center text-center mb-16 relative z-10">
                     <div className="text-[14px] font-black text-indigo-600 mb-4 tracking-widest">08 — Provide the Final Solution</div>
                     <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Core <span className="italic text-indigo-600">Modules</span></h2>
                     <p className="text-[16px] text-slate-600 leading-relaxed font-medium mt-6 max-w-2xl mx-auto">
                        The final platform introduced modular operational tools across multiple disciplines.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                     {[
                        { title: "Compliance Management", desc: ["Task tracking", "Inspection categories", "Compliance status visibility"], icon: ShieldCheck, color: "from-[#0D63CC] to-[#0D63CC]/80", shadow: "shadow-[#0D63CC]/20" },
                        { title: "Operations & Workforce", desc: ["Staff roles and scheduling", "Workforce visibility"], icon: Users, color: "from-indigo-500 to-indigo-400", shadow: "shadow-indigo-500/20" },
                        { title: "AI Insights", desc: ["Predictive alerts", "Pattern detection"], icon: Sparkles, color: "from-amber-400 to-amber-300", shadow: "shadow-amber-400/20" },
                        { title: "Inspection Readiness", desc: ["Audit packet generation", "Inspector-ready reports"], icon: FileText, color: "from-[#00DA99] to-[#00DA99]/80", shadow: "shadow-[#00DA99]/20" }
                     ].map((mod, i) => (
                        <motion.div 
                           variants={childFade}
                           key={i} 
                           className="bg-white/70 backdrop-blur-[24px] border border-white shadow-[0_12px_32px_rgba(13,99,204,0.04)] hover:shadow-[0_24px_60px_rgba(13,99,204,0.1)] rounded-[32px] p-8 group transition-all duration-500 hover:-translate-y-3 relative overflow-hidden flex flex-col justify-between"
                        >
                           <div>
                              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center shadow-lg ${mod.shadow} mb-8 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative z-10 border border-white/20`}>
                                 <mod.icon className="text-white drop-shadow-md" size={26} strokeWidth={2.5} />
                              </div>
                              <h3 className="text-[20px] font-black text-slate-900 mb-6 relative z-10 tracking-tight leading-tight">{mod.title}</h3>
                           </div>
                           <ul className="space-y-2 text-[13px] font-semibold text-slate-600 opacity-90 relative z-10">
                              {mod.desc.map((d, id) => <li key={id} className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0"/> {d}</li>)}
                           </ul>
                        </motion.div>
                     ))}
                  </div>

                  <div className="mt-8 grid md:grid-cols-3 gap-6 relative z-10">
                     <PremiumPlaceholder icon={Layout} label="Dashboard UI" glowCls="text-[#0D63CC]/40" colorCls="aspect-video" />
                     <PremiumPlaceholder icon={ShieldCheck} label="Compliance UI" glowCls="text-[#00DA99]/40" colorCls="aspect-video" />
                     <PremiumPlaceholder icon={FileText} label="Inspection UI" glowCls="text-amber-400/40" colorCls="aspect-video" />
                  </div>
               </motion.section>

               {/* ----------------------------------------------------
                   09. TESTING INSIGHTS
                   ---------------------------------------------------- */}
               <motion.section {...fadeIn} className="relative z-30">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-12 xl:col-span-7 order-2 xl:order-1 relative z-20 pt-10 lg:pt-0">
                        <div className="absolute inset-0 bg-[#8B5CF6]/10 blur-[80px] rounded-full pointer-events-none" />
                        <div className="bg-white/60 backdrop-blur-[24px] border border-white shadow-[0_20px_50px_-10px_rgba(139,92,246,0.15)] rounded-[40px] p-2 relative group hover:-translate-y-2 transition-transform duration-500">
                           <PremiumPlaceholder icon={Search} label="Testing Iterations & Logic" glowCls="text-[#8B5CF6]/40" />
                        </div>
                     </div>
                     <div className="lg:col-span-12 xl:col-span-5 order-1 xl:order-2 relative z-10 pl-4 lg:pl-0">
                        <div className="text-[14px] font-black text-[#8B5CF6] mb-4 tracking-widest">09 — Share Testing Insights</div>
                        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                           Validating <span className="text-[#8B5CF6] italic">Restrictions.</span>
                        </h2>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-10 max-w-md">
                           Testing focused on verifying that users could understand locked vs unlocked features without confusion.
                        </p>

                        <div className="space-y-6">
                           <div className="bg-white/60 backdrop-blur-md rounded-[24px] p-6 border border-white shadow-sm">
                              <h4 className="text-[12px] font-black uppercase tracking-widest text-[#8B5CF6] mb-4">Key Findings</h4>
                              <ul className="space-y-3 font-semibold text-[14px] text-slate-700">
                                 <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 shrink-0" /> Users clearly understood Preview Mode restrictions</li>
                                 <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 shrink-0" /> Facilities preferred seeing compliance requirements before upgrading</li>
                              </ul>
                           </div>
                           <div className="bg-[#8B5CF6]/5 backdrop-blur-md rounded-[24px] p-6 border border-[#8B5CF6]/20 shadow-sm">
                              <h4 className="text-[12px] font-black uppercase tracking-widest text-[#8B5CF6] mb-4">Improvements Made</h4>
                              <ul className="space-y-3 font-semibold text-[14px] text-slate-700">
                                 <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 shrink-0" /> Added Preview Mode banner</li>
                                 <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 shrink-0" /> Introduced locked feature modal messaging</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.section>

               {/* ----------------------------------------------------
                   10. CONCLUSIONS & METRICS (DARK SAAS PANEL)
                   ---------------------------------------------------- */}
               <motion.section 
                  {...fadeIn} 
                  className="mb-10 relative z-50 rounded-[48px] md:rounded-[64px] bg-[#0A0F1A] border border-slate-800 shadow-2xl p-1 lg:p-2 overflow-hidden"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E2638] via-[#0A0F1A] to-[#0D63CC]/10 opacity-80" />
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#00DA99]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0D63CC]/20 to-transparent blur-[120px] rounded-full pointer-events-none" />
                  <div className="absolute inset-0 rounded-[inherit] border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] pointer-events-none" />

                  <div className="relative z-10 px-8 py-16 md:p-20 lg:p-28">
                     <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-6">
                           <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-white/90 border border-white/10 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-8 shadow-inner">10 — Conclusions</span>
                           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8 leading-[1.1]">
                              Measurable <br/>
                              <span className="opacity-70 italic text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Efficiency.</span>
                           </h2>
                           <p className="text-[16px] lg:text-[18px] text-slate-400 leading-relaxed font-medium mb-12 max-w-md">
                              Designing ALCD required balancing regulatory compliance, operational workflows, and SaaS monetization. The final platform ensures that facilities always maintain visibility into compliance requirements, while automation tools reduce administrative workload.
                           </p>

                           <div className="flex flex-wrap gap-3 mb-12">
                              {['Clear role-based permissions', 'Transparent upgrade model', 'Simplified inspection prep'].map((outcome, i) => (
                                 <span key={i} className="px-5 py-2.5 bg-white/10 border border-white/20 rounded-full font-bold text-[12px] text-white backdrop-blur-md">
                                    {outcome}
                                 </span>
                              ))}
                           </div>

                           <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold text-[14px] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] duration-300">
                              <span className="relative z-10">Return Home</span>
                              <ArrowLeft size={16} className="relative z-10 group-hover:-translate-x-1 transition-transform" />
                              <div className="absolute inset-0 bg-gradient-to-l from-slate-100 via-white to-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                           </button>
                        </div>

                        <div className="lg:col-span-6 space-y-12 bg-white/5 backdrop-blur-sm border border-white/10 p-10 lg:p-12 rounded-[40px]">
                           {[
                              { label: "Inspection Prep Time", val: "↓ 60%", color: "from-[#00DA99] to-teal-400" },
                              { label: "Task Completion Rate", val: "↑ 40%", color: "from-[#0D63CC] to-blue-400" },
                              { label: "Admin Workload", val: "↓", color: "from-rose-400 to-rose-300" }
                           ].map((stat, i) => (
                              <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pb-8 border-b border-white/10 last:border-0 last:pb-0 group">
                                 <div className={`text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b ${stat.color} group-hover:scale-105 transition-transform duration-500 transform-origin-left drop-shadow-sm min-w-[120px]`}>
                                    {stat.val}
                                 </div>
                                 <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
                                 <h5 className="text-[18px] font-bold text-white">{stat.label}</h5>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </motion.section>

            </div>
         </main>

         <style jsx global>{`
            ::-webkit-scrollbar { width: 10px; }
            ::-webkit-scrollbar-track { background: #FAFCFF; }
            ::-webkit-scrollbar-thumb {
               background: #cbd5e1;
               border-radius: 10px;
               border: 2px solid #FAFCFF;
            }
            ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
         `}</style>
         
         <Footer />
      </div>
   )
}
