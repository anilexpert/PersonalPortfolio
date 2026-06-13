import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, Ticket, TrendingUp, Target, Smartphone, Shield, Zap,
   Search, Users, Grid, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase, HandCoins,
   PieChart, Handshake, MessageCircle, User, Award, Layers, ShoppingCart, Globe
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GlowDivider from '../../components/GlowDivider'
import RotatingBadge from '../../components/RotatingBadge'

export default function TicketStackCaseStudy() {
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

   const SwotCard = ({ title, items, color, align = "text-left" }) => (
      <div className={`p-8 glass-card rounded-[24px] border-2 border-[#4F46E5]/10 hover:border-[#EC4899]/40 ${align} transition-all duration-500`}>
         <h4 className={`text-xl font-black uppercase tracking-widest mb-4 ${color}`}>{title}</h4>
         <ul className="space-y-2">
            {items.map((item, i) => (
               <li key={i} className="text-sm font-bold text-text-secondary opacity-70">{item}</li>
            ))}
         </ul>
      </div>
   );

   const PremiumPlaceholder = ({ icon: Icon, label, glowCls = "bg-[#4F46E5]", textCls = "text-[#4F46E5]", aspect = "aspect-[16/9]" }) => (
      <div className={`w-full ${aspect} glass-card rounded-3xl flex flex-col items-center justify-center overflow-hidden relative group transition-all duration-500 border-2 border-[#4F46E5]/10 hover:border-[#EC4899]/40 shadow-lg`}>
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
            <title>TicketStack | Case Study - Retail Ticketing Experience Redesign</title>
         </Head>

         <Navbar />

         <main className="min-h-screen pt-20 md:pt-24 pb-20 md:pb-32 relative z-10">

            {/* 1. PAGE HERO (Inner Banner) */}
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

                  <div className="absolute top-2 right-[6%] hidden lg:block">
                     <RotatingBadge
                        icon={Ticket}
                        labels={["B2B SAAS", "TICKETING", "RETAIL"]}
                        iconColor="#EC4899"
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
                        TicketStack™
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        Retail Ticketing <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Experience Redesign</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        A modern retail ticketing platform enabling businesses to create, distribute, manage, sell, and track tickets across multiple sales channels. Transformed into a scalable SaaS product capable of supporting enterprise-level operations.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Category</p>
                        <p className="font-bold text-sm text-text-primary">B2B SaaS / Ticketing</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">My Role</p>
                        <p className="font-bold text-sm text-text-primary">Lead Product Designer</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Duration</p>
                        <p className="font-bold text-sm text-text-primary">6 Months</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Platform</p>
                        <p className="font-bold text-sm text-text-primary">Web App (Desktop + Tablet)</p>
                     </div>
                  </motion.div>
               </section>

               {/* MAIN HERO IMAGE */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-20 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[32px] overflow-hidden group-hover:shadow-2xl transition-all duration-700 bg-slate-100 flex items-center justify-center">
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-30 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #EC4899 0%, #4F46E5 100%)' }}
                     />
                     {/* Dummy Placeholder */}
                     <div className="text-center relative z-10 opacity-40">
                         <Layout size={64} className="mx-auto mb-4 text-[#4F46E5]" />
                         <p className="font-bold tracking-widest uppercase text-slate-800">Hero Product Dashboard Mockup</p>
                     </div>
                  </div>
               </motion.section>

               {/* OVERVIEW / CHALLENGES / SOLUTION */}
               <section className="mb-16 md:mb-24 lg:mb-32 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Overview</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                           TicketStack™ serves entertainment venues, museums, tourist attractions, theme parks, transportation services, and retail ticket distributors. The legacy platform had strong operational capabilities but suffered from usability issues, fragmented workflows, outdated interfaces, and poor visibility into ticket performance.
                        </p>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Challenges</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           The previous platform experienced several critical business problems that bottlenecked growth and adoption:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              "Complex Ticket Creation (Disconnected screens)",
                              "Operational Inefficiencies managing inventory",
                              "Limited Reporting Visibility on revenue",
                              "Poor User Adoption (High training cost)",
                              "Inconsistent User Experience across modules",
                              "Outdated UI lacking modern SaaS standards"
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-4 glass-card rounded-2xl">
                                 <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                                 <span className="text-sm font-bold text-text-primary">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Project Goals</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Strategic objectives aimed to reshape TicketStack into an industry-leading operational command center.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-[#4F46E5]/5 border border-[#4F46E5]/10">
                                <h4 className="font-bold text-[#4F46E5] mb-2 flex items-center gap-2"><TrendingUp size={18}/> Efficiency & Revenue</h4>
                                <ul className="text-sm text-text-secondary space-y-2 font-medium">
                                    <li>• Reduce ticket setup & management time</li>
                                    <li>• Enable quick performance identification</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-2xl bg-[#EC4899]/5 border border-[#EC4899]/10">
                                <h4 className="font-bold text-[#EC4899] mb-2 flex items-center gap-2"><Users size={18}/> Adoption & Foundation</h4>
                                <ul className="text-sm text-text-secondary space-y-2 font-medium">
                                    <li>• Decrease onboarding friction</li>
                                    <li>• Reduce support requests</li>
                                    <li>• Create future-ready design system</li>
                                </ul>
                            </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* KEY RESEARCH INSIGHTS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Discovery
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Major <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Findings</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Extensive research via stakeholder interviews, user audits, and competitive benchmarking.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Lifecycle Confusion", desc: "Users struggled to understand ticket lifecycle management end-to-end.", color: "#EC4899" },
                        { num: "02", title: "Unfocused Metrics", desc: "Dashboard metrics lacked prioritization, cluttering the view.", color: "#4F46E5" },
                        { num: "03", title: "Click Fatigue", desc: "Critical actions required too many clicks through disjointed menus.", color: "#8B5CF6" },
                        { num: "04", title: "Complex Reporting", desc: "Reporting tools were powerful but overwhelmingly difficult to interpret.", color: "#F59E0B" },
                        { num: "05", title: "Chaotic IA", desc: "Navigation architecture had grown organically without consistency.", color: "#10B981" },
                        { num: "06", title: "Support Reliance", desc: "Users relied heavily on customer support for routine daily tasks.", color: "#3B82F6" }
                     ].map((insight, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           transition={{ delay: i * 0.1, duration: 0.8 }}
                           className="glass-card p-6 md:p-8 rounded-[24px] group hover:-translate-y-2 relative overflow-hidden"
                        >
                           <div
                              className="absolute -top-16 -right-16 w-40 h-40 blur-[50px] rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: insight.color }}
                           />
                           <div className="flex items-center justify-between mb-8 relative z-10">
                              <div
                                 className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all duration-300 group-hover:scale-110"
                                 style={{ backgroundColor: `${insight.color}20`, color: insight.color, border: `1px solid ${insight.color}30` }}
                              >
                                 {insight.num}
                              </div>
                              <Search size={20} className="text-text-secondary opacity-20" />
                           </div>
                           <h4 className="font-bold text-xl text-text-primary mb-3 relative z-10">{insight.title}</h4>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed mb-4 relative z-10">{insight.desc}</p>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* USER PERSONAS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Target Audience
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Personas</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        Understanding the operational managers driving ticket sales.
                     </p>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                     {[
                        {
                           name: "Olivia Parker",
                           role: "Operations Manager",
                           image: "/images/ticketstack/olivia.png",
                           bio: "Too many manual processes. Difficult reporting. Limited visibility across locations.",
                           needs: ["Faster workflow completion", "Reduced ticket errors", "Improved operational control"],
                           goals: ["Manage inventory efficiently", "Track daily sales", "Monitor venue performance"],
                           color: "#4F46E5"
                        },
                        {
                           name: "James Wilson",
                           role: "Retail Distribution Manager",
                           image: "/images/ticketstack/james.png",
                           bio: "Disconnected sales data. Poor reporting transparency. Manual reconciliation.",
                           needs: ["Faster reporting", "Better revenue insights", "Increased partner performance"],
                           goals: ["Manage multiple reseller channels", "Track sales performance", "Monitor commission structures"],
                           color: "#EC4899"
                        }
                     ].map((persona, idx) => (
                        <motion.div
                           key={idx}
                           {...fadeIn}
                           className="glass-card rounded-[20px] p-6 md:p-10 lg:p-12 group relative overflow-hidden flex flex-col border-2 border-[#4F46E5]/10 hover:border-[#EC4899]/40 shadow-md bg-white/50"
                        >
                           <div
                              className="absolute -top-24 -right-24 w-80 h-80 blur-[100px] rounded-full transition-all duration-1000 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: persona.color }}
                           />
                           
                           <div className="flex items-center gap-8 mb-12 relative z-10">
                              <div className="w-24 h-24 rounded-[16px] overflow-hidden bg-slate-200 flex-shrink-0 relative border-2 border-white shadow-2xl flex items-center justify-center">
                                 <User size={40} className="text-slate-400" />
                              </div>
                              <div>
                                 <h4 className="font-bold text-3xl text-gray-800 tracking-tight">{persona.name}</h4>
                                 <p className="text-xs font-medium text-secondary mt-2 opacity-80">{persona.role}</p>
                              </div>
                           </div>

                           <div className="space-y-6 relative z-10 flex-grow">
                              <div className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-indigo-600 mb-4 flex items-center gap-2">
                                    <Target size={14} strokeWidth={3} /> Goals
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.goals.map((n, i) => (
                                       <span key={i} className="px-3 py-1 bg-white/80 rounded-md border border-indigo-100 text-xs font-medium text-slate-700">
                                          {n}
                                       </span>
                                    ))}
                                 </div>
                              </div>

                              <div className="p-6 rounded-3xl bg-pink-50 border border-pink-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-pink-600 mb-4 flex items-center gap-2">
                                    <Activity size={14} strokeWidth={3} /> Success Metrics
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.needs.map((p, i) => (
                                       <span key={i} className="px-3 py-1 bg-white/80 rounded-md border border-pink-100 text-xs font-medium text-slate-700">
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

               {/* DESIGN APPROACH & PROCESS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-20 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Lifecycle
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Journey Mapping</span></h2>
                     <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
                        Redefining the ticket lifecycle journey from creation to reporting.
                     </p>
                  </div>

                  <div className="relative max-w-6xl mx-auto px-4">
                     <div className="hidden lg:block absolute top-16 left-24 right-24 h-1 z-0 pointer-events-none">
                        <svg width="100%" height="80" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none" className="opacity-30">
                           <path
                              d="M0,40 Q125,0 250,40 T500,40 T750,40 T1000,40"
                              stroke="#4F46E5"
                              strokeWidth="2"
                              strokeDasharray="8 8"
                              className="animate-dash"
                           />
                        </svg>
                     </div>

                     <div className="hidden lg:flex items-start justify-between relative z-10">
                        {[
                           { title: "Discover", desc: "Users create ticket inventory.", icon: Search, type: "dashed" },
                           { title: "Configure", desc: "Pricing, availability & distribution settings.", icon: Settings, type: "dashed" },
                           { title: "Publish", desc: "Products are released across channels.", icon: Globe, type: "solid-light" },
                           { title: "Monitor & Optimize", desc: "Sales tracking and pricing adjustments.", icon: Activity, type: "solid-light" },
                           { title: "Report", desc: "Revenue and operational outcomes analyzed.", icon: PieChart, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className={`flex flex-col items-center w-48 relative ${i % 2 !== 0 ? 'translate-y-8' : ''} transition-transform duration-1000`}>
                              <motion.div
                                 {...fadeIn}
                                 transition={{ delay: i * 0.1 }}
                                 className={`w-32 h-32 rounded-full mb-8 flex flex-col items-center justify-center transition-all duration-500 group relative
                                 ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                                 ${step.type === 'solid-light' ? 'border-2 border-[#4F46E5] bg-indigo-50 shadow-md' : ''}
                                 ${step.type === 'solid-dark' ? 'bg-[#1E1B4B] text-white shadow-xl' : ''}
                                 hover:scale-110 hover:shadow-2xl
                              `}
                              >
                                 <step.icon size={28} strokeWidth={step.type === 'solid-dark' ? 2 : 1.5} className={step.type === 'solid-dark' ? 'text-white' : 'text-[#1E1B4B]'} />
                                 <span className={`text-[11px] font-black uppercase tracking-widest mt-2 ${step.type === 'solid-dark' ? 'text-white' : 'text-[#1E1B4B]'}`}>
                                    {step.title}
                                 </span>
                              </motion.div>
                              <motion.p
                                 {...fadeIn}
                                 transition={{ delay: i * 0.1 + 0.2 }}
                                 className="text-[11px] text-text-secondary font-bold text-center leading-relaxed max-w-[140px]"
                              >
                                 {step.desc}
                              </motion.p>
                           </div>
                        ))}
                     </div>

                     <div className="lg:hidden space-y-16">
                        {[
                           { title: "Discover", desc: "Users create ticket inventory.", icon: Search, type: "dashed" },
                           { title: "Configure", desc: "Pricing, availability & distribution settings.", icon: Settings, type: "dashed" },
                           { title: "Publish", desc: "Products are released across channels.", icon: Globe, type: "solid-light" },
                           { title: "Monitor & Optimize", desc: "Sales tracking and pricing adjustments.", icon: Activity, type: "solid-light" },
                           { title: "Report", desc: "Revenue and operational outcomes analyzed.", icon: PieChart, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className="flex flex-col items-center relative">
                              <div className={`w-32 h-32 rounded-full mb-6 flex flex-col items-center justify-center 
                              ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                              ${step.type === 'solid-light' ? 'border-2 border-[#4F46E5] bg-indigo-50 shadow-md' : ''}
                              ${step.type === 'solid-dark' ? 'bg-[#1E1B4B] text-white shadow-xl' : ''}
                           `}>
                                 <step.icon size={28} strokeWidth={1.5} className={step.type === 'solid-dark' ? 'text-white' : 'text-[#1E1B4B]'} />
                                 <span className={`text-[11px] font-black uppercase tracking-widest mt-2 ${step.type === 'solid-dark' ? 'text-white' : 'text-[#1E1B4B]'}`}>
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
                  </div>
               </section>

               {/* INFORMATION ARCHITECTURE */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                   <div className="grid lg:grid-cols-2 gap-12 items-center">
                       <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                                Structure
                                </span>
                            </div>
                            <h2 className="text-4xl font-bold text-text-primary mb-6">Information <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Architecture</span></h2>
                            <p className="text-text-secondary font-medium mb-8 leading-relaxed">
                                The previous structure suffered from deep navigation, duplicate menus, and inconsistent terminology. The new structure flattens the hierarchy and provides an operational overview instantly.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    { title: "Dashboard", desc: "Operational overview" },
                                    { title: "Products & Inventory", desc: "Ticket creation, management, capacity" },
                                    { title: "Sales Channels", desc: "Distribution partners and locations" },
                                    { title: "Reporting & Customers", desc: "Performance insights and customer data" },
                                    { title: "Settings", desc: "Administrative controls" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 text-[#4F46E5]">
                                            <Layers size={16} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-800 text-sm">{item.title}</h5>
                                            <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                       </div>
                       <div className="relative">
                            <PremiumPlaceholder aspect="aspect-square" label="Information Architecture Sitemap" glowCls="bg-[#EC4899]" icon={Layers} />
                       </div>
                   </div>
               </section>

               {/* DESIGN SYSTEM & VISUALS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Visual Identity
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design System & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Foundations</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        A robust component library supporting 50+ reusable components, WCAG-compliant color system, and modern typography hierarchy.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4">
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#4F46E5]/10 hover:border-[#EC4899]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F46E5]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#4F46E5] rounded-full" /> Colors
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { bg: 'bg-[#4F46E5]', label: 'Indigo', hex: '#4F46E5' },
                              { bg: 'bg-[#EC4899]', label: 'Pink', hex: '#EC4899' },
                              { bg: 'bg-[#1E1B4B]', label: 'Navy', hex: '#1E1B4B' },
                              { bg: 'bg-[#F3F4F6]', label: 'Light', hex: '#F3F4F6' },
                              { bg: 'bg-[#10B981]', label: 'Success', hex: '#10B981' },
                              { bg: 'bg-[#0F172A]', label: 'Dark', hex: '#0F172A' }
                           ].map((color, i) => (
                              <div key={i} className="flex flex-col gap-2 group/color">
                                 <div className={`w-full aspect-square rounded-2xl ${color.bg} shadow-lg border border-slate-200 group-hover/color:scale-110 group-hover/color:shadow-2xl transition-all duration-300`} />
                                 <div>
                                    <span className="block text-[10px] font-bold text-text-primary uppercase tracking-wider">{color.label}</span>
                                    <span className="block text-[9px] text-text-secondary font-medium uppercase opacity-50">{color.hex}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#EC4899]/10 hover:border-[#EC4899]/40 shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#EC4899]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#EC4899] rounded-full" /> Typography
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
                        </div>
                     </div>

                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-indigo-500/10 hover:border-[#4F46E5]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-indigo-500 rounded-full" /> Accessibility
                        </h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-700">
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]"/> Improved Contrast Ratios</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]"/> Keyboard Navigation</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]"/> Screen Reader Support</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]"/> Consistent Focus States</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]"/> Accessible Forms</li>
                        </ul>
                     </div>
                  </div>
               </section>

               {/* SUCCESS METRICS & IMPACT */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Results
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Impact</span></h2>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                     {[
                        { val: "38%", label: "Setup Time Reduction", color: "text-[#4F46E5]" },
                        { val: "42%", label: "Faster Workflows", color: "text-[#EC4899]" },
                        { val: "31%", label: "Decrease in Support", color: "text-[#10B981]" },
                        { val: "47%", label: "Task Completion", color: "text-[#F59E0B]" },
                        { val: "28%", label: "User Satisfaction", color: "text-[#8B5CF6]" }
                     ].map((stat, i) => (
                        <div key={i} className="glass-card rounded-3xl p-6 text-center border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                           <h3 className={`text-3xl font-black mb-2 ${stat.color}`}>{stat.val}</h3>
                           <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">{stat.label}</p>
                        </div>
                     ))}
                  </div>
               </section>

               {/* SWOT ANALYSIS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                   <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Strategic Analysis
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">SWOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Analysis</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        {
                           title: "Strengths",
                           items: ["Strong ticketing engine", "Multi-channel distribution", "Enterprise flexibility"],
                           color: "text-[#4F46E5]",
                           borderGlow: "from-[#4F46E5]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#4F46E5]/15",
                           borderColor: "border-[#4F46E5]/30",
                           icon: <Briefcase size={24} strokeWidth={2} className="text-[#4F46E5]" />
                        },
                        {
                           title: "Weaknesses",
                           items: ["Legacy architecture constraints", "Existing user habits", "Complex business rules"],
                           color: "text-[#EC4899]",
                           borderGlow: "from-[#EC4899]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#EC4899]/15",
                           borderColor: "border-[#EC4899]/30",
                           icon: <Activity size={24} strokeWidth={2} className="text-[#EC4899]" />
                        },
                        {
                           title: "Opportunities",
                           items: ["AI-powered forecasting", "Dynamic pricing", "Expanded integrations"],
                           color: "text-[#10B981]",
                           borderGlow: "from-[#10B981]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#10B981]/15",
                           borderColor: "border-[#10B981]/30",
                           icon: <Search size={24} strokeWidth={2} className="text-[#10B981]" />
                        },
                        {
                           title: "Threats",
                           items: ["Emerging competitors", "Rapid industry change", "Market consolidation"],
                           color: "text-rose-500",
                           borderGlow: "from-rose-500/30 via-white/10 to-transparent",
                           innerGlow: "bg-rose-500/15",
                           borderColor: "border-rose-500/30",
                           icon: <FileText size={24} strokeWidth={2} className="text-rose-500" />
                        }
                     ].map((box, i) => (
                        <div key={i} className={`relative rounded-[24px] p-[2px] border border-slate-200 bg-gradient-to-br ${box.borderGlow} shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group`}>
                           <div className={`bg-white/80 backdrop-blur-xl w-full h-full rounded-[22px] p-6 relative z-10 flex flex-col min-h-[250px]`}>
                              <div className="flex flex-col gap-4 mb-6">
                                 <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center border-2 ${box.borderColor} shadow-sm`}>
                                    {box.icon}
                                 </div>
                                 <h5 className={`font-semibold text-lg ${box.color}`}>{box.title}</h5>
                              </div>
                              <ul className="space-y-2 flex-1">
                                 {box.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                       <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-current ${box.color} opacity-60`} />
                                       <span className="text-sm font-medium text-slate-600">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* VISUAL OVERVIEW */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Overview</span></h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     <div className="lg:col-span-2">
                        <PremiumPlaceholder aspect="aspect-[4/3]" label="Executive Analytics Dashboard" glowCls="bg-[#4F46E5]" />
                     </div>
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Ticket Creation Flow" glowCls="bg-[#EC4899]" />
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Inventory Management" glowCls="bg-[#10B981]" />
                     <div className="lg:col-span-4">
                        <PremiumPlaceholder aspect="aspect-[21/9]" label="Final High-Fidelity Product View" glowCls="bg-[#4F46E5]" icon={Layout} />
                     </div>
                  </div>
               </section>

               {/* OUTCOMES & CONCLUSION */}
               <section className="relative mb-20 overflow-hidden">
                  <motion.div
                     {...fadeIn}
                     className="glass-card rounded-[24px] p-6 md:p-10 lg:p-14 relative overflow-hidden group shadow-xl border-2 border-[#4F46E5]/20 hover:border-[#EC4899]/40 bg-white"
                  >
                     <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50 blur-[150px] rounded-full pointer-events-none" />
                     <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-50 blur-[120px] rounded-full pointer-events-none" />

                     <div className="relative z-10">
                        <div className="mb-12 text-center max-w-4xl mx-auto">
                           <h2 className="text-4xl font-bold text-text-primary mb-4">
                              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Takeaways</span>
                           </h2>
                        </div>

                        <div className="mb-10">
                           <div className="p-6 md:p-10 glass-card rounded-[24px] border border-slate-200 shadow-lg bg-white/60 backdrop-blur-md">
                              <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed mb-6">
                                 The TicketStack™ redesign transformed a complex operational ticketing platform into a modern enterprise SaaS experience focused on clarity, efficiency, scalability, and business growth.
                              </p>
                              <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed">
                                 Through deep research, strategic UX thinking, streamlined workflows, and a scalable design system, the platform evolved from a transactional tool into a business intelligence and operational management ecosystem that empowers ticketing organizations to operate faster, smarter, and more profitably.
                              </p>
                           </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 pt-10">
                           <Link href="/#projects" className="btn-premium px-12 py-5 text-sm bg-slate-900 text-white rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors">
                              <span>View Next Project</span>
                              <ArrowLeft size={18} className="rotate-180" />
                           </Link>
                           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-6 sm:mt-0">
                              Thank you for reading the TicketStack Case Study.
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
