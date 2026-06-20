import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, Ticket, TrendingUp, Target, Smartphone, Shield, Zap,
   Search, Users, Grid, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase, HandCoins,
   PieChart, Handshake, MessageCircle, User, Award, Layers, ShoppingCart, Globe, Server,
   Star, Brain
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
                        Enterprise Retail <span className="bg-gradient-to-r from-[#00DA99] to-[#0D63CC] bg-clip-text text-transparent">Ticketing & Distribution Platform</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        End-to-End Product Strategy, UX Transformation & Operational Excellence Case Study.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Category</p>
                        <p className="font-bold text-sm text-text-primary">Enterprise B2B SaaS</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">My Role</p>
                        <p className="font-bold text-sm text-text-primary">Product Strategy, UX Research, IA, UX/UI Design</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Duration</p>
                        <p className="font-bold text-sm text-text-primary">6 Months</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Platform</p>
                        <p className="font-bold text-sm text-text-primary">Web Application</p>
                     </div>
                  </motion.div>
               </section>

               {/* MAIN HERO IMAGE */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-20 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[32px] overflow-hidden group-hover:shadow-2xl transition-all duration-700 bg-slate-100 flex items-center justify-center">
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-30 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #00DA99 0%, #0D63CC 100%)' }}
                     />
                       <Image
                           src="/images/ticketstack/HeroProduct-Dashboard.png"
                           alt="TicketStack Dashboard"
                           fill
                           className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.02]"
                        />
                     {/* <div className="text-center relative z-10 opacity-40">
                         <Layout size={64} className="mx-auto mb-4 text-[#0D63CC]" />
                         <p className="font-bold tracking-widest uppercase text-slate-800">Hero Product Dashboard Mockup</p>
                     </div> */}
                  </div>
               </motion.section>

               {/* OVERVIEW / CHALLENGES / SOLUTION */}
               <section className="mb-16 md:mb-24 lg:mb-32 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Executive Summary</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-4">
                           TicketStack™ is a cloud-based enterprise retail ticketing platform designed to streamline the creation, management, distribution, and performance tracking of physical and digital tickets across multiple retail channels.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                           The platform enables businesses to manage ticket inventory, promotional campaigns, pricing strategies, distribution networks, and reporting from a centralized operational hub serving Retail Chains, Franchises, Tourism Operators, Attractions & Theme Parks, Entertainment Venues, Event Organizers, and Distribution Partners.
                        </p>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Existing Challenges</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           TicketStack's legacy platform was functionally powerful but operationally inefficient. Users struggled with complex ticket setup workflows, poor inventory visibility, disconnected reporting, inconsistent navigation, outdated user experience, and long onboarding periods.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[
                              "Fragmented Workflows",
                              "Difficult Ticket Creation",
                              "Poor Reporting Experience",
                              "Inventory Management Complexity",
                              "Inconsistent Navigation",
                              "High Training Costs"
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-4 glass-card rounded-2xl">
                                 <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(0,218,153,0.5)]" />
                                 <span className="text-sm font-bold text-text-primary">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Business Goals</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Transform a complex, fragmented ticket management system into a modern enterprise SaaS platform that empowers retail organizations to create, distribute, monitor, and optimize ticketing operations with speed, accuracy, and confidence.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-[#00DA99]/5 border border-[#00DA99]/10">
                                <h4 className="font-bold text-[#00DA99] mb-2 flex items-center gap-2"><TrendingUp size={18}/> Operational Excellence</h4>
                                <ul className="text-sm text-text-secondary space-y-2 font-medium">
                                    <li>• Increase Operational Efficiency</li>
                                    <li>• Improve Product Adoption</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-2xl bg-[#0D63CC]/5 border border-[#0D63CC]/10">
                                <h4 className="font-bold text-[#0D63CC] mb-2 flex items-center gap-2"><Activity size={18}/> Growth & Visibility</h4>
                                <ul className="text-sm text-text-secondary space-y-2 font-medium">
                                    <li>• Improve Revenue Visibility</li>
                                    <li>• Reduce Support Requests</li>
                                    <li>• Future-Proof Platform</li>
                                </ul>
                            </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* DISCOVERY & RESEARCH */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Discovery
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Discovery & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Research</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Extensive research via stakeholder interviews, user audits, and competitive benchmarking.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                     <motion.div {...fadeIn} className="relative rounded-[32px] p-[2px] bg-gradient-to-br from-[#0D63CC]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group">
                        <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-2xl w-full h-full rounded-[30px] p-8 md:p-10 relative z-10 flex flex-col border border-white/50">
                           <motion.div
                              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#0D63CC]/20"
                           />
                           <div className="flex items-center gap-4 mb-8 relative z-20">
                              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#0D63CC]/30 group-hover:border-[#0D63CC] transition-colors duration-500">
                                 <Briefcase size={24} className="text-[#0D63CC]" strokeWidth={2} />
                              </div>
                              <h4 className="font-bold text-2xl text-text-primary">
                                 Stakeholder <span className="text-[#0D63CC]">Research</span>
                              </h4>
                           </div>
                           <div className="space-y-6 relative z-20">
                              {[
                                 { role: "Executive Leadership", obj: "Revenue growth, Operational scalability, Partner management" },
                                 { role: "Operations Teams", obj: "Faster workflows, Better inventory management, Reduced manual effort" },
                                 { role: "Customer Support Teams", obj: "Reduce ticket volumes, Improve self-service capability" },
                                 { role: "Sales & Distribution Managers", obj: "Better channel visibility, Performance reporting, Faster decision-making" }
                              ].map((item, idx) => (
                                 <div key={idx} className="flex flex-col gap-1.5 group/item">
                                    <span className="font-bold text-[#0D63CC] text-[13px] uppercase tracking-wider flex items-center gap-2">
                                       <div className="w-1.5 h-1.5 rounded-full bg-[#0D63CC] opacity-50 group-hover/item:scale-150 transition-transform" />
                                       {item.role}
                                    </span>
                                    <span className="text-sm text-slate-600 font-medium pl-3.5 leading-relaxed">Objectives: {item.obj}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </motion.div>
                     
                     <motion.div {...fadeIn} transition={{delay: 0.1}} className="relative rounded-[32px] p-[2px] bg-gradient-to-br from-[#00DA99]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group">
                        <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-2xl w-full h-full rounded-[30px] p-8 md:p-10 relative z-10 flex flex-col border border-white/50">
                           <motion.div
                              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                              className="absolute top-[-20%] right-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#00DA99]/20"
                           />
                           <div className="flex items-center gap-4 mb-8 relative z-20">
                              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#00DA99]/30 group-hover:border-[#00DA99] transition-colors duration-500">
                                 <Users size={24} className="text-[#00DA99]" strokeWidth={2} />
                              </div>
                              <h4 className="font-bold text-2xl text-text-primary">
                                 User <span className="text-[#00DA99]">Research</span>
                              </h4>
                           </div>
                           <div className="space-y-6 relative z-20">
                              <div className="flex flex-col gap-1.5 group/item">
                                 <span className="font-bold text-[#00DA99] text-[13px] uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00DA99] opacity-50 group-hover/item:scale-150 transition-transform" />
                                    Participants
                                 </span>
                                 <span className="text-sm text-slate-600 font-medium pl-3.5 leading-relaxed">Operations Managers, Ticket Administrators, Retail Managers, Distribution Coordinators, Marketing Teams, Customer Support Representatives.</span>
                              </div>
                              <div className="flex flex-col gap-1.5 group/item">
                                 <span className="font-bold text-[#00DA99] text-[13px] uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00DA99] opacity-50 group-hover/item:scale-150 transition-transform" />
                                    Research Methods
                                 </span>
                                 <ul className="space-y-2 pl-3.5 mt-2">
                                    {[
                                       "User Interviews: Understanding workflow frustrations.",
                                       "Contextual Inquiry: Observing users performing daily tasks.",
                                       "Product Audit: Reviewing existing system architecture.",
                                       "Analytics Review: Understanding behavioral patterns.",
                                       "Competitive Benchmarking: Evaluating industry standards."
                                    ].map((method, idx) => (
                                       <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 font-medium group/li">
                                          <CheckCircle2 size={16} className="text-[#00DA99] mt-0.5 flex-shrink-0 opacity-60 group-hover/li:opacity-100 transition-opacity" />
                                          {method}
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-8">Key Insights</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Time Constraints", desc: "Users spend most of their time managing products and inventory.", color: "#00DA99" },
                        { num: "02", title: "Unfocused Metrics", desc: "Dashboard information lacked prioritization.", color: "#0D63CC" },
                        { num: "03", title: "Export Dependency", desc: "Revenue reporting required exporting data into spreadsheets.", color: "#8B5CF6" },
                        { num: "04", title: "Friction", desc: "Ticket creation involved excessive validation screens.", color: "#F59E0B" },
                        { num: "05", title: "Workflow Preference", desc: "Users preferred workflow-driven navigation rather than module-driven navigation.", color: "#10B981" }
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

               {/* COMPETITIVE ANALYSIS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Market Standing
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Analysis</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        Evaluating industry standards to find strategic opportunities for differentiation.
                     </p>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <div>
                        <div className="space-y-4">
                           <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                              <div className="w-8 h-8 rounded-full bg-[#0D63CC]/10 flex items-center justify-center flex-shrink-0 text-[#0D63CC]">
                                 <Search size={16} />
                              </div>
                              <div>
                                 <h5 className="font-bold text-slate-800 text-sm">Products Reviewed</h5>
                                 <p className="text-xs text-slate-500 mt-1">Ticketmaster Enterprise, Eventbrite Business, Universe, FareHarbor, Rezdy, Eventix.</p>
                              </div>
                           </div>
                           <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                              <div className="w-8 h-8 rounded-full bg-[#00DA99]/10 flex items-center justify-center flex-shrink-0 text-[#00DA99]">
                                 <Target size={16} />
                              </div>
                              <div>
                                 <h5 className="font-bold text-slate-800 text-sm">Evaluation Criteria</h5>
                                 <p className="text-xs text-slate-500 mt-1">Ticket Management, Inventory Management, Reporting, Distribution, User Experience, Scalability, Enterprise Readiness.</p>
                              </div>
                           </div>
                           <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 text-[#4F46E5]">
                                 <Lightbulb size={16} />
                              </div>
                              <div>
                                 <h5 className="font-bold text-slate-800 text-sm">Key Findings</h5>
                                 <p className="text-xs text-slate-500 mt-1">Most competitors focused heavily on ticket sales but lacked operational management capabilities. This created an opportunity for TicketStack to differentiate through operational excellence.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="relative">
                        <PremiumPlaceholder aspect="aspect-square" label="Competitive Matrix" glowCls="bg-[#00DA99]" icon={Grid} />
                     </div>
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
                           name: "Sarah Thompson",
                           role: "Operations Manager",
                           image: "/images/ticketstack/olivia.png",
                           bio: "Sarah manages ticket inventory across multiple retail locations and oversees operational performance.",
                           needs: ["Faster ticket setup", "Reduced support dependency", "Improved productivity"],
                           goals: ["Manage inventory efficiently", "Launch promotions quickly", "Track ticket performance"],
                           pains: ["Manual processes", "Complex workflows", "Limited visibility"],
                           color: "#0D63CC"
                        },
                        {
                           name: "Michael Carter",
                           role: "Distribution Manager",
                           image: "/images/ticketstack/james.png",
                           bio: "Michael oversees external retail partners and distribution channels.",
                           needs: ["Faster reporting", "Better channel insights", "Increased revenue"],
                           goals: ["Monitor channel performance", "Improve partner efficiency", "Track commission revenue"],
                           pains: ["Disconnected reporting", "Lack of visibility", "Time-consuming reconciliation"],
                           color: "#00DA99"
                        }
                     ].map((persona, idx) => (
                        <motion.div
                           key={idx}
                           {...fadeIn}
                           className="glass-card rounded-[20px] p-6 md:p-10 lg:p-12 group relative overflow-hidden flex flex-col border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-md bg-white/50"
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

                           <p className="text-base text-gray-800 leading-relaxed mb-12 relative z-10 font-medium">
                              "{persona.bio}"
                           </p>

                           <div className="space-y-6 relative z-10 flex-grow">
                              <div className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#0D63CC] mb-4 flex items-center gap-2">
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

                              <div className="p-6 rounded-3xl bg-rose-50 border border-rose-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-rose-500 mb-4 flex items-center gap-2">
                                    <Activity size={14} strokeWidth={3} /> Success Metrics
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.needs.map((p, i) => (
                                       <span key={i} className="px-3 py-1 bg-white/80 rounded-md border border-rose-100 text-xs font-medium text-slate-700">
                                          {p}
                                       </span>
                                    ))}
                                 </div>
                              </div>

                              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-4 flex items-center gap-2">
                                    <Shield size={14} strokeWidth={3} /> Frustrations
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.pains.map((p, i) => (
                                       <span key={i} className="px-3 py-1 bg-white/80 rounded-md border border-slate-200 text-xs font-medium text-slate-700">
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

               {/* EMPATHY MAP */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Deep Dive
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Empathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Mapping</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Visualizing user attitudes and behaviors to align our team on a deep understanding of end users.</p>
                  </div>

                  <div className="max-w-6xl mx-auto mb-16 relative glass-card rounded-[40px] md:rounded-[60px] p-6 md:p-12 lg:p-16 overflow-hidden shadow-[0_20px_60px_-15px_rgba(13,99,204,0.2)] border border-[#0D63CC]/20 hover:border-[#00DA99]/50 transition-all duration-700 bg-white/30 backdrop-blur-3xl group shadow-[inset_0_0_100px_rgba(255,255,255,0.6)]">
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
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#0D63CC]/15" />
                              <div className="flex flex-col items-center gap-4 mb-4 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#0D63CC]/30 group-hover/card:border-[#0D63CC] transition-colors duration-500">
                                    <Brain className="w-6 h-6 text-[#0D63CC]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#0D63CC]">think</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "Is inventory accurate?",
                                    "Are tickets selling well?",
                                    "Which channels perform best?"
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors hover:border-white/60">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0D63CC] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">“{item}”</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* Middle Row Left: SAYS */}
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
                                 {[
                                    "I need information faster.",
                                    "There are too many steps to get this done.",
                                    "Why is this report so hard to generate?"
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors hover:border-white/60">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F59E0B] opacity-50 group-hover/li:scale-[2] transition-transform duration-300 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">“{item}”</span>
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
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-end text-center md:text-right relative overflow-hidden">
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[-20%] right-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-rose-500/15" />
                              <div className="flex flex-col items-center md:items-end gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-rose-500/30 group-hover/card:border-rose-500 transition-colors duration-500">
                                    <Heart className="w-6 h-6 text-rose-500" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-rose-500">feel</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "Overwhelmed by system complexity",
                                    "Concerned about making operational mistakes",
                                    "Pressured by tight launch deadlines"
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
                              <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#00DA99]/15" />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#00DA99]/30 group-hover/card:border-[#00DA99] transition-colors duration-500">
                                    <Activity className="w-6 h-6 text-[#00DA99]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#00DA99]">do</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "Exports multiple reports to verify data",
                                    "Creates manual spreadsheets to track sales",
                                    "Contacts support frequently for help"
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

                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                     <div className="p-6 rounded-3xl bg-rose-50 border border-rose-100">
                        <h5 className="font-black text-xs uppercase tracking-[0.2em] text-rose-500 mb-4 flex items-center gap-2">
                           <Shield size={16} strokeWidth={3} /> Pain Points
                        </h5>
                        <ul className="space-y-2 text-sm font-medium text-slate-700">
                           <li>• Slow workflows</li>
                           <li>• Poor reporting</li>
                           <li>• Inventory confusion</li>
                        </ul>
                     </div>
                     <div className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100">
                        <h5 className="font-black text-xs uppercase tracking-[0.2em] text-[#0D63CC] mb-4 flex items-center gap-2">
                           <Target size={16} strokeWidth={3} /> Opportunities
                        </h5>
                        <ul className="space-y-2 text-sm font-medium text-slate-700">
                           <li>• Automation</li>
                           <li>• Better reporting</li>
                           <li>• Simplified workflows</li>
                        </ul>
                     </div>
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
                              stroke="#0D63CC"
                              strokeWidth="2"
                              strokeDasharray="8 8"
                              className="animate-dash"
                           />
                        </svg>
                     </div>

                     <div className="hidden lg:flex items-start justify-between relative z-10">
                        {[
                           { title: "Product Setup", desc: "Create Ticket Product.", icon: PenTool, type: "dashed" },
                           { title: "Configure", desc: "Configure Pricing & Assign Inventory.", icon: Settings, type: "dashed" },
                           { title: "Connect", desc: "Connect Sales Channels & Publish.", icon: Globe, type: "solid-light" },
                           { title: "Monitor", desc: "Monitor Performance.", icon: Activity, type: "solid-light" },
                           { title: "Optimize", desc: "Optimize Revenue.", icon: TrendingUp, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className={`flex flex-col items-center w-48 relative ${i % 2 !== 0 ? 'translate-y-8' : ''} transition-transform duration-1000`}>
                              <motion.div
                                 {...fadeIn}
                                 transition={{ delay: i * 0.1 }}
                                 className={`w-32 h-32 rounded-full mb-8 flex flex-col items-center justify-center transition-all duration-500 group relative
                                 ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                                 ${step.type === 'solid-light' ? 'border-2 border-[#0D63CC] bg-indigo-50 shadow-md' : ''}
                                 ${step.type === 'solid-dark' ? 'bg-[#282360] text-white shadow-xl' : ''}
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
                           { title: "Product Setup", desc: "Create Ticket Product.", icon: PenTool, type: "dashed" },
                           { title: "Configure", desc: "Configure Pricing & Assign Inventory.", icon: Settings, type: "dashed" },
                           { title: "Connect", desc: "Connect Sales Channels & Publish.", icon: Globe, type: "solid-light" },
                           { title: "Monitor", desc: "Monitor Performance.", icon: Activity, type: "solid-light" },
                           { title: "Optimize", desc: "Optimize Revenue.", icon: TrendingUp, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className="flex flex-col items-center relative">
                              <div className={`w-32 h-32 rounded-full mb-6 flex flex-col items-center justify-center 
                              ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                              ${step.type === 'solid-light' ? 'border-2 border-[#0D63CC] bg-indigo-50 shadow-md' : ''}
                              ${step.type === 'solid-dark' ? 'bg-[#282360] text-white shadow-xl' : ''}
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
                                The legacy architecture suffered from deep navigation, duplicate features, and poor discoverability. The new structure flattens the hierarchy into an operational overview instantly.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    { title: "Dashboard", desc: "Operational overview." },
                                    { title: "Products", desc: "Ticket creation and management." },
                                    { title: "Inventory", desc: "Capacity and stock management." },
                                    { title: "Sales Channels", desc: "Distribution partner management." },
                                    { title: "Reporting & Customers", desc: "Business performance and customer management." },
                                    { title: "Settings", desc: "Administration and permissions." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 text-[#0D63CC]">
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
                             <PremiumPlaceholder aspect="aspect-square" label="Information Architecture Sitemap" glowCls="bg-[#00DA99]" icon={Layers} />
                       </div>
                   </div>
               </section>

               {/* UX STRATEGY & WIREFRAMING */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Strategy
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Strategy</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                     <div className="relative rounded-[32px] p-[2px] bg-gradient-to-br from-[#0D63CC]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group">
                        <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-2xl w-full h-full rounded-[30px] p-8 md:p-10 relative z-10 flex flex-col border border-white/50">
                           <motion.div
                              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute top-[-20%] right-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#0D63CC]/20"
                           />
                           <div className="flex items-center gap-4 mb-8 relative z-20">
                              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#0D63CC]/30 group-hover:border-[#0D63CC] transition-colors duration-500">
                                 <Target size={24} className="text-[#0D63CC]" strokeWidth={2} />
                              </div>
                              <h4 className="font-bold text-2xl text-text-primary">
                                 Design <span className="text-[#0D63CC]">Principles</span>
                              </h4>
                           </div>
                           <ul className="space-y-5 text-sm text-slate-700 relative z-20">
                              {[
                                 { title: "Clarity Over Complexity", desc: "Reduce cognitive load." },
                                 { title: "Action-Oriented Interfaces", desc: "Prioritize actions over information." },
                                 { title: "Data-Driven Decisions", desc: "Expose meaningful metrics." },
                                 { title: "Progressive Disclosure", desc: "Reveal complexity gradually." },
                                 { title: "Consistency First", desc: "Standardize interactions." }
                              ].map((item, idx) => (
                                 <li key={idx} className="flex flex-col gap-1 group/item">
                                    <span className="font-bold text-text-primary text-[14px] flex items-center gap-2">
                                       <div className="w-1.5 h-1.5 rounded-full bg-[#0D63CC] opacity-50 group-hover/item:scale-150 transition-transform" />
                                       {item.title}
                                    </span>
                                    <span className="text-slate-500 font-medium pl-3.5">{item.desc}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     
                     <div className="relative rounded-[32px] p-[2px] bg-gradient-to-br from-[#00DA99]/30 via-white/10 to-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group">
                        <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-2xl w-full h-full rounded-[30px] p-8 md:p-10 relative z-10 flex flex-col border border-white/50">
                           <motion.div
                              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                              className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#00DA99]/20"
                           />
                           <div className="flex items-center gap-4 mb-8 relative z-20">
                              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#00DA99]/30 group-hover:border-[#00DA99] transition-colors duration-500">
                                 <PenTool size={24} className="text-[#00DA99]" strokeWidth={2} />
                              </div>
                              <h4 className="font-bold text-2xl text-text-primary">
                                 Wireframing & <span className="text-[#00DA99]">Concepts</span>
                              </h4>
                           </div>
                           <div className="space-y-8 text-sm text-slate-700 relative z-20">
                              <div className="group/item">
                                 <h5 className="font-bold text-text-primary mb-2 text-[15px] flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00DA99] opacity-50 group-hover/item:scale-150 transition-transform" />
                                    Dashboard Concepts
                                 </h5>
                                 <p className="text-slate-500 font-medium pl-3.5 leading-relaxed">Explored multiple layouts focused on KPI visibility, Revenue tracking, Inventory monitoring, and Performance reporting.</p>
                              </div>
                              <div className="group/item">
                                 <h5 className="font-bold text-text-primary mb-2 text-[15px] flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00DA99] opacity-50 group-hover/item:scale-150 transition-transform" />
                                    Ticket Creation Flow
                                 </h5>
                                 <p className="text-slate-500 font-medium pl-3.5 leading-relaxed">Redesigned from 12+ screens down to a 4-step guided workflow.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="w-full">
                     <PremiumPlaceholder aspect="aspect-[21/9]" label="Low-Fi Wireframes" glowCls="bg-[#0D63CC]" icon={Grid} />
                  </div>
               </section>

               {/* MODULE DEEP DIVES */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Core Features
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Feature <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Deep Dives</span></h2>
                  </div>

                  <div className="space-y-24">

                     {/* 1 — Dashboard Experience */}
                     <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative">
                           <PremiumPlaceholder aspect="aspect-square" label="Dashboard Experience" glowCls="bg-[#00DA99]" icon={Layout} />
                        </div>
                        <div className="order-1 lg:order-2">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DA99]/10 border border-[#00DA99]/20 mb-5">
                              <span className="text-[10px] font-bold text-[#00DA99] uppercase tracking-widest">Module 01</span>
                           </div>
                           <h3 className="text-3xl font-bold text-text-primary mb-3">Dashboard <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Experience</span></h3>
                           <p className="text-text-secondary font-medium mb-8 leading-relaxed">Users struggled to identify important metrics at a glance. We created a centralized command center that surfaces the most critical data instantly, reducing time-to-decision dramatically.</p>
                           <ul className="space-y-4">
                              {[
                                 { label: "Revenue Monitoring", desc: "Real-time sales figures, trends & comparisons at a glance", icon: TrendingUp },
                                 { label: "Inventory Tracking", desc: "Live stock levels with threshold alerts across all products", icon: Layers },
                                 { label: "Channel Performance", desc: "Side-by-side comparison of all distribution channel metrics", icon: Globe },
                                 { label: "Operational Alerts", desc: "Smart notifications for low stock, anomalies & deadlines", icon: Activity },
                                 { label: "Product Performance", desc: "Top-selling products ranked by revenue and velocity", icon: Star }
                              ].map((item, i) => (
                                 <li key={i} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-[#00DA99]/5 border border-transparent hover:border-[#00DA99]/20 transition-all duration-300 cursor-default">
                                    <div className="w-10 h-10 rounded-xl bg-[#00DA99]/10 border border-[#00DA99]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00DA99]/20 group-hover:border-[#00DA99]/40 group-hover:scale-110 transition-all duration-300">
                                       <item.icon size={18} className="text-[#00DA99]" strokeWidth={2} />
                                    </div>
                                    <div>
                                       <span className="font-bold text-text-primary text-[14px] block">{item.label}</span>
                                       <span className="text-[12px] text-slate-500 font-medium mt-0.5 block leading-relaxed">{item.desc}</span>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     {/* 2 — Product & Inventory */}
                     <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-1">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-5">
                              <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">Module 02</span>
                           </div>
                           <h3 className="text-3xl font-bold text-text-primary mb-3">Product & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Inventory</span></h3>
                           <p className="text-text-secondary font-medium mb-8 leading-relaxed">Manage thousands of tickets quickly with real-time capacity monitoring and intelligent alerts that keep operations running smoothly across all retail channels.</p>
                           <ul className="space-y-4">
                              {[
                                 { label: "Unified Product Management", desc: "Create, edit & manage all ticket products in one centralized hub", icon: Layout },
                                 { label: "Inventory Monitoring", desc: "Real-time capacity alerts, thresholds & availability windows", icon: Layers },
                                 { label: "Bulk Actions", desc: "Multi-select editing, bulk pricing updates & mass publishing", icon: Settings },
                                 { label: "Smart Alerts", desc: "Automated notifications when stock drops below defined levels", icon: Activity }
                              ].map((item, i) => (
                                 <li key={i} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-[#0D63CC]/5 border border-transparent hover:border-[#0D63CC]/20 transition-all duration-300 cursor-default">
                                    <div className="w-10 h-10 rounded-xl bg-[#0D63CC]/10 border border-[#0D63CC]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0D63CC]/20 group-hover:border-[#0D63CC]/40 group-hover:scale-110 transition-all duration-300">
                                       <item.icon size={18} className="text-[#0D63CC]" strokeWidth={2} />
                                    </div>
                                    <div>
                                       <span className="font-bold text-text-primary text-[14px] block">{item.label}</span>
                                       <span className="text-[12px] text-slate-500 font-medium mt-0.5 block leading-relaxed">{item.desc}</span>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="order-2 relative">
                           <PremiumPlaceholder aspect="aspect-square" label="Product Management" glowCls="bg-[#0D63CC]" icon={Layers} />
                        </div>
                     </div>

                     {/* 3 — Sales Channel Management */}
                     <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative">
                           <PremiumPlaceholder aspect="aspect-square" label="Sales Channels" glowCls="bg-[#8B5CF6]" icon={Handshake} />
                        </div>
                        <div className="order-1 lg:order-2">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 mb-5">
                              <span className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-widest">Module 03</span>
                           </div>
                           <h3 className="text-3xl font-bold text-text-primary mb-3">Sales Channel <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0D63CC]">Management</span></h3>
                           <p className="text-text-secondary font-medium mb-8 leading-relaxed">Centralized distribution control with automated commission tracking, enabling businesses to manage all reseller and retail channels from a single, powerful interface.</p>
                           <ul className="space-y-4">
                              {[
                                 { label: "Partner Management", desc: "Onboard, configure & manage all distribution partners centrally", icon: Users },
                                 { label: "Channel Performance", desc: "Compare revenue, volume & conversion rates across channels", icon: TrendingUp },
                                 { label: "Commission Tracking", desc: "Automated commission calculations, statements & payout tracking", icon: Award },
                                 { label: "Distribution Analytics", desc: "Identify best-performing channels and optimize allocation", icon: PieChart }
                              ].map((item, i) => (
                                 <li key={i} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-[#8B5CF6]/5 border border-transparent hover:border-[#8B5CF6]/20 transition-all duration-300 cursor-default">
                                    <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B5CF6]/20 group-hover:border-[#8B5CF6]/40 group-hover:scale-110 transition-all duration-300">
                                       <item.icon size={18} className="text-[#8B5CF6]" strokeWidth={2} />
                                    </div>
                                    <div>
                                       <span className="font-bold text-text-primary text-[14px] block">{item.label}</span>
                                       <span className="text-[12px] text-slate-500 font-medium mt-0.5 block leading-relaxed">{item.desc}</span>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     {/* 4 — Reporting & Analytics */}
                     <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-1">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-5">
                              <span className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-widest">Module 04</span>
                           </div>
                           <h3 className="text-3xl font-bold text-text-primary mb-3">Reporting & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#10B981]">Analytics</span></h3>
                           <p className="text-text-secondary font-medium mb-8 leading-relaxed">Sales trends, forecasting, top-performing products, partner effectiveness, and purchase behavior analysis — all from a single unified reporting engine.</p>
                           <ul className="space-y-4">
                              {[
                                 { label: "Revenue Analytics", desc: "Track total, per-product & per-channel revenue with trend lines", icon: TrendingUp },
                                 { label: "Product Analytics", desc: "Identify your top sellers, slow movers & seasonal performers", icon: Star },
                                 { label: "Channel Analytics", desc: "Benchmark partner effectiveness and distribution efficiency", icon: Globe },
                                 { label: "Customer Analytics", desc: "Understand purchase behavior, segments & repeat buyers", icon: Users },
                                 { label: "Operational Analytics", desc: "Monitor system health, SLAs, error rates & process performance", icon: Activity }
                              ].map((item, i) => (
                                 <li key={i} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-[#F59E0B]/5 border border-transparent hover:border-[#F59E0B]/20 transition-all duration-300 cursor-default">
                                    <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F59E0B]/20 group-hover:border-[#F59E0B]/40 group-hover:scale-110 transition-all duration-300">
                                       <item.icon size={18} className="text-[#F59E0B]" strokeWidth={2} />
                                    </div>
                                    <div>
                                       <span className="font-bold text-text-primary text-[14px] block">{item.label}</span>
                                       <span className="text-[12px] text-slate-500 font-medium mt-0.5 block leading-relaxed">{item.desc}</span>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="order-2 relative">
                           <PremiumPlaceholder aspect="aspect-square" label="Reporting Dashboard" glowCls="bg-[#F59E0B]" icon={PieChart} />
                        </div>
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
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Colors
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { bg: 'bg-[#0D63CC]', label: 'Primary', hex: '#0D63CC' },
                              { bg: 'bg-[#00DA99]', label: 'Mint', hex: '#00DA99' },
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

                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#00DA99]/10 hover:border-[#0D63CC]/40 shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
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
                        </div>
                     </div>

                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Accessibility
                        </h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-700">
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]"/> WCAG Compliance</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]"/> Keyboard Navigation</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]"/> Screen Reader Support</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]"/> Accessible Forms</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]"/> Error Prevention</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]"/> Focus Management</li>
                        </ul>
                     </div>
                  </div>
               </section>

               {/* HIGH FIDELITY VISUAL DESIGN */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                   <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                           Visual Overview
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">High-Fidelity <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Visual Design</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        Design Direction: Modern SaaS, Enterprise-grade visual language, Data-Centric Interfaces, Minimal Cognitive Load, and Scalable Component Architecture.
                     </p>
                  </div>

                  <PremiumPlaceholder aspect="aspect-[21/9]" label="Final Product Experience Mockup" glowCls="bg-[#00DA99]" icon={Grid} />
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

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                     {[
                        { val: "42%", label: "Faster Workflows", color: "text-[#0D63CC]" },
                        { val: "37%", label: "Less Effort", color: "text-[#00DA99]" },
                        { val: "31%", label: "Fewer Support Req", color: "text-[#10B981]" },
                        { val: "46%", label: "Task Completion", color: "text-[#F59E0B]" },
                        { val: "29%", label: "Platform Adoption", color: "text-[#8B5CF6]" },
                        { val: "24%", label: "Reporting Engage", color: "text-[#EC4899]" }
                     ].map((stat, i) => (
                        <div key={i} className="glass-card rounded-3xl p-6 text-center border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-center">
                           <h3 className={`text-3xl font-black mb-2 ${stat.color}`}>{stat.val}</h3>
                           <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">{stat.label}</p>
                        </div>
                     ))}
                  </div>

                  <div className="glass-card p-8 rounded-3xl text-center max-w-4xl mx-auto border border-[#0D63CC]/10">
                     <p className="text-lg font-medium text-slate-700">
                        The redesign transformed TicketStack from a transactional ticket management tool into a strategic operational platform. Organizations gained faster workflows, better visibility, improved decision-making, reduced operational costs, increased scalability, and better user satisfaction.
                     </p>
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
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Evaluating TicketStack's competitive stance to ensure viability and identify risks.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        {
                           title: "Strengths",
                           items: ["Enterprise scalability", "Multi-channel support", "Operational visibility"],
                           color: "text-[#00DA99]",
                           borderGlow: "from-[#00DA99]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#00DA99]/15",
                           borderColor: "border-[#00DA99]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Briefcase size={24} strokeWidth={2} className="text-[#00DA99] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Weaknesses",
                           items: ["Legacy technical debt", "Existing user habits", "Complex business rules"],
                           color: "text-[#F59E0B]",
                           borderGlow: "from-[#F59E0B]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#F59E0B]/15",
                           borderColor: "border-[#F59E0B]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Activity size={24} strokeWidth={2} className="text-[#F59E0B] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Opportunities",
                           items: ["AI forecasting", "Dynamic pricing", "Global expansion"],
                           color: "text-[#0D63CC]",
                           borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent",
                           innerGlow: "bg-[#0D63CC]/15",
                           borderColor: "border-[#0D63CC]/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Search size={24} strokeWidth={2} className="text-[#0D63CC] group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Threats",
                           items: ["New competitors", "Market shifts", "Technology disruption"],
                           color: "text-rose-500",
                           borderGlow: "from-rose-500/30 via-white/10 to-transparent",
                           innerGlow: "bg-rose-500/15",
                           borderColor: "border-rose-500/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <FileText size={24} strokeWidth={2} className="text-rose-500 group-hover:scale-110 transition-transform duration-500" />
                        }
                     ].map((box, i) => (
                        <div key={i} className={`relative rounded-[24px] p-[2px] border border-slate-200 bg-gradient-to-br ${box.borderGlow} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>
                           <div className={`bg-gradient-to-b ${box.gradientFill} backdrop-blur-2xl w-full h-full rounded-[22px] p-6 md:p-8 relative z-10 flex flex-col min-h-[300px] overflow-hidden`}>
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
               </section>

               {/* FUTURE ROADMAP */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Phase 2</span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Roadmap</span></h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                     {[
                        { title: "AI Demand Forecasting", desc: "Predict future ticket sales." },
                        { title: "Dynamic Pricing", desc: "Optimize revenue automatically." },
                        { title: "Smart Inventory Allocation", desc: "Automated capacity planning." },
                        { title: "Mobile Operations App", desc: "On-the-go management." },
                        { title: "Advanced Partner Portal", desc: "Improved reseller experience." },
                        { title: "Predictive Analytics", desc: "Business intelligence recommendations." }
                     ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                           <div className="w-10 h-10 rounded-full bg-[#0D63CC]/10 flex items-center justify-center text-[#0D63CC] flex-shrink-0">
                              <Server size={18} />
                           </div>
                           <div>
                              <h5 className="font-bold text-sm text-slate-800">{item.title}</h5>
                              <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* KEY LEARNINGS */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="glass-card rounded-[32px] p-8 md:p-12 border-2 border-[#0D63CC]/10 relative overflow-hidden text-center max-w-9xl mx-auto">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#00DA99]/10 blur-[60px] rounded-full pointer-events-none" />
                     <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0D63CC]/10 blur-[60px] rounded-full pointer-events-none" />
                     
                     <Award size={48} className="mx-auto text-[#0D63CC] mb-6 relative z-10" />
                     <h2 className="text-3xl font-bold text-text-primary mb-8 relative z-10">Key Learnings & Final Outcome</h2>
                     
                     <div className="grid sm:grid-cols-2 gap-6 text-left relative z-10 mb-8">
                        <div className="bg-white/50 p-6 rounded-2xl">
                           <h4 className="font-bold text-[#0D63CC] mb-2">Enterprise UX Is Operational UX</h4>
                           <p className="text-sm font-medium text-slate-700">Efficiency creates measurable business value.</p>
                        </div>
                        <div className="bg-white/50 p-6 rounded-2xl">
                           <h4 className="font-bold text-[#0D63CC] mb-2">Simplicity Scales</h4>
                           <p className="text-sm font-medium text-slate-700">Reducing complexity increases adoption.</p>
                        </div>
                        <div className="bg-white/50 p-6 rounded-2xl">
                           <h4 className="font-bold text-[#0D63CC] mb-2">Data Must Drive Action</h4>
                           <p className="text-sm font-medium text-slate-700">Insights should lead to decisions.</p>
                        </div>
                        <div className="bg-white/50 p-6 rounded-2xl">
                           <h4 className="font-bold text-[#0D63CC] mb-2">Design Systems Enable Growth</h4>
                           <p className="text-sm font-medium text-slate-700">Consistency accelerates product evolution.</p>
                        </div>
                     </div>

                     <p className="text-lg font-medium text-slate-700 relative z-10 bg-white/80 p-6 rounded-2xl border border-[#0D63CC]/10">
                        TicketStack™ successfully evolved into a modern enterprise ticketing ecosystem that empowers retailers, attractions, and distribution networks to manage ticket operations efficiently while unlocking growth opportunities through data-driven decision-making and scalable product architecture.
                     </p>
                  </div>
               </section>

               {/* NEXT CASE STUDY NAVIGATION */}
               <section className="border-t border-slate-200/50 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4">Next Project</span>
                  <Link href="/case-studies/spendora" className="group flex flex-col items-center">
                     <h3 className="text-4xl md:text-5xl font-black text-text-primary group-hover:text-primary transition-colors duration-300 mb-6">
                        Spendora
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
