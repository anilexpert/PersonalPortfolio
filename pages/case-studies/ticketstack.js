import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   Ticket, Users, Layout, Search, Target, Briefcase, Activity, CheckCircle2,
   MessageCircle, Zap, TrendingUp, AlertTriangle, Lightbulb, Clock, Shield,
   Globe, Layers, Cpu, Compass, Settings, PieChart, PenTool, BarChart3,
   Rocket, Star, ArrowRight, User, Grid, Building2, ShieldCheck, Heart,
   MapPin, Wallet, GraduationCap, Award, Sparkles, ArrowLeft,
   CheckSquare, Bell, Calendar, BarChart2, Shuffle
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

   const PremiumPlaceholder = ({ icon: Icon, label, glowColor = "#0D63CC", textCls = "text-[#0D63CC]", aspect = "aspect-[16/9]" }) => (
      <div className={`w-full ${aspect} glass-card rounded-3xl flex flex-col items-center justify-center overflow-hidden relative group transition-all duration-500 border-2 border-[${glowColor}]/10 hover:border-[#00DA99]/40 shadow-lg`}>
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
            <title>TicketStack | Enterprise Retail Ticketing Platform</title>
            <meta name="description" content="End-to-End Product Case Study: How we transformed a fragmented retail ticketing ecosystem into a centralized operational command center." />
         </Head>

         <Navbar />

         <main className="min-h-screen pt-10 md:pt-24 pb-10 md:pb-20 md:pb-32 relative z-10">

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

                  <div className="absolute top-2 right-[6%] hidden lg:block">
                     <RotatingBadge
                        icon={Ticket}
                        labels={["B2B SAAS", "TICKETING", "RETAIL"]}
                        iconColor="#0D63CC"
                        size={150}
                     />
                  </div>
               </div>
            </section>

            <div className="w-full max-w-7xl mx-auto px-4 pt-10 lg:pt-14 md:px-6">

               {/* ── SECTION 01: HERO / ABOVE THE FOLD ────────────────────────────────────────── */}
               <section className="mb-8 md:mb-16 grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
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
                     <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-2xl md:text-6xl font-bold tracking-tighter mb-4 leading-[0.9] text-text-primary">
                        TicketStack
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        Enterprise Retail <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Ticketing & Distribution Platform</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-md md:text-md text-text-secondary max-w-3xl leading-relaxed font-normal">
                        TicketStack is a retail ticketing and distribution platform designed to centralize inventory management, campaign operations, sales visibility, and retail partner coordination through a unified enterprise experience
                     </motion.p>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-md md:text-md text-text-secondary max-w-3xl leading-relaxed font-normal mt-4">
                        The legacy platform had strong operational capabilities but suffered from usability issues, fragmented workflows, outdated interfaces, and poor visibility into ticket performance.
                     </motion.p>

                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:pl-10 lg:border-l border-slate-200/60 pt-4">
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Role</p>
                        <p className="font-bold text-xs md:text-sm text-text-primary">Lead Product Designer</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Industry</p>
                        <p className="font-bold text-xs md:text-sm text-text-primary">Retail SaaS</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Platform</p>
                        <p className="font-bold text-xs md:text-sm text-text-primary">Web Application</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Duration</p>
                        <p className="font-bold text-xs md:text-sm text-text-primary">8 Months</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Team</p>
                        <p className="font-bold text-xs md:text-sm text-text-primary">Product Manager, Developers</p>
                     </div>
                     <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1 opacity-60">Responsibilities</p>
                        <p className="font-bold text-xs md:text-sm text-text-primary">Research, UX Strategy, UI Design, Prototyping, Design System</p>
                     </div>
                  </motion.div>
               </section>

               <motion.section {...fadeIn} className="mb-8 md:mb-12 lg:mb-16 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                     <Image
                        src="/images/ticketstack/EnterpriseRetailTicketing.png"
                        alt="Carenova Platform Interface"
                        fill
                        className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                     />
                     {/* <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-30 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #00DA99 0%, #0D63CC 100%)' }}
                     />
                     <PremiumPlaceholder aspect="aspect-[21/9]" label="TicketStack Command Center Interface" glowColor="#00DA99" textCls="text-[#0D63CC]" icon={Layout} /> */}
                  </div>
               </motion.section>

               {/* ── KEY OUTCOMES ─────────────────────────────────────────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                     {[
                        { val: "42%", label: "Faster Ticket Deployment", color: "text-[#00DA99]", bg: "bg-[#00DA99]/10" },
                        { val: "31%", label: "Reduction in Support Requests", color: "text-[#0D63CC]", bg: "bg-[#0D63CC]/10" },
                        { val: "29%", label: "Increase in User Adoption", color: "text-[#8B5CF6]", bg: "bg-[#8B5CF6]/10" },
                        { val: "46%", label: "Improvement in Task Completion", color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10" },
                     ].map((stat, i) => (
                        <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="glass-card rounded-[16px] lg:rounded-[24px] p-6 md:p-8 text-center flex flex-col items-center justify-center border border-white/60 bg-white/40 shadow-sm hover:-translate-y-1 transition-transform">
                           <div className={`w-16 h-16 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                              <TrendingUp size={24} />
                           </div>
                           <h3 className={`text-3xl md:text-5xl font-black mb-2 ${stat.color}`}>{stat.val}</h3>
                           <p className="text-sm font-bold text-text-secondary">{stat.label}</p>
                        </motion.div>
                     ))}
                  </div>
               </section>

               <div className="mb-8 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* ── SECTION 03: THE BUSINESS CHALLENGE ───────────────────── */}
               <section className="mb-8 md:mb-16 lg:mb-20">
                  <div className="text-center mb-8 lg:mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
                        <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">
                           Core Issues
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-2xl md:text-4xl font-bold text-text-primary mb-4">The Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Challenge</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Retail ticket operations relied on fragmented systems, manual campaign coordination, and disconnected inventory processes, making it difficult to scale efficiently.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 md:mb-16 mb-8">
                     {[
                        { num: "01", title: "Fragmented Retail Operations", desc: "Operational workflows were distributed across multiple disconnected tools.", icon: Layers, color: "#0D63CC" },
                        { num: "02", title: "Limited Campaign Visibility", desc: "Stakeholders lacked centralized insights into campaign performance.", icon: Layout, color: "#00DA99" },
                        { num: "03", title: "Inventory Complexity", desc: "Managing inventory across multiple channels created operational friction.", icon: Search, color: "#8B5CF6" },
                        { num: "04", title: "Slow Operational Workflows", desc: "Manual processes increased delays and reduced productivity.", icon: Users, color: "#EC4899" },
                        { num: "05", title: "Inconsistent Reporting", desc: "Teams struggled to access accurate, real-time business metrics.", icon: Grid, color: "#F59E0B" },
                        { num: "06", title: "Scalability Bottlenecks", desc: "The legacy infrastructure struggled to support multi-region enterprise growth.", icon: Activity, color: "#38BDF8" }
                     ].map((challenge, i) => (
                        <motion.div
                           key={i}
                           {...fadeIn}
                           transition={{ delay: i * 0.1, duration: 0.8 }}
                           className="glass-card p-6 md:p-8 rounded-[16px] lg:rounded-[24px] group relative overflow-hidden"
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
                           <h4 className="font-bold text:lg md:text-xl text-text-primary mb-3 relative z-10">{challenge.title}</h4>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed relative z-10">{challenge.desc}</p>
                        </motion.div>
                     ))}
                  </div>

                  {/* Visualization of emotional impact */}
                  <div className="max-w-9xl mx-auto glass-card rounded-[16px] lg:rounded-[24px] p-8 md:p-12 relative overflow-hidden bg-white/60">
                     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-500/5 blur-[100px] rounded-full pointer-events-none" />
                     <div className="flex flex-col items-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
                           <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">
                              Impact Analysis
                           </span>
                        </div>
                        <h3 className="text-xl md:text-4xl font-bold text-center text-text-primary">The Impact of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Operational Friction</span></h3>
                     </div>
                     <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-4 mt-12 mb-8 z-10">
                        {/* Dashed line */}
                        <div className="hidden md:block absolute top-[64px] left-[10%] right-[10%] h-[2px] border-t-[2px] border-dashed border-slate-200 z-0" />

                        {[
                           { title: "DISCONNECTED", desc: "Systems.", icon: Layers, color: "#F43F5E", style: "dashed" },
                           { title: "MANUAL", desc: "Coordination.", icon: Shuffle, color: "#F97316", style: "dashed" },
                           { title: "LIMITED", desc: "Visibility.", icon: Search, color: "#F59E0B", style: "solid" },
                           { title: "OPERATIONAL", desc: "Inefficiencies.", icon: Activity, color: "#EF4444", style: "solid" },
                           { title: "REDUCED", desc: "Business Performance.", icon: BarChart2, color: "#1E293B", style: "dark" }
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
                                       color: isDark ? 'white' : step.color
                                    }}
                                 >
                                    <step.icon size={28} className="mb-3" strokeWidth={1.5} />
                                    <span className="text-[12px] font-bold uppercase tracking-wider leading-tight px-2" style={{ color: isDark ? 'white' : step.color }}>
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

                  <motion.div
                     {...fadeIn}
                     className="mt-8 lg:mt-16 p-4 md:p-14 glass-card bg-white/80 border border-white rounded-[16px] lg:rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden text-center group hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
                  >
                     <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0D63CC]/10 blur-[80px] rounded-full group-hover:bg-[#0D63CC]/20 transition-all duration-700 pointer-events-none" />
                     <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#00DA99]/10 blur-[80px] rounded-full group-hover:bg-[#00DA99]/20 transition-all duration-700 pointer-events-none" />

                     <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 relative z-10 flex items-center justify-center gap-3">
                        <span className="w-8 h-[2px] bg-slate-200" />
                        Product Vision
                        <span className="w-8 h-[2px] bg-slate-200" />
                     </h3>

                     <p className="text-base md:text-xl lg:text-2xl font-bold leading-snug md:leading-tight relative z-10 max-w-4xl mx-auto text-text-primary">
                        Build a centralized enterprise platform that empowers retail organizations to manage campaigns, inventory, distribution, and performance analytics from a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">single operational hub.</span>
                     </p>
                  </motion.div>
               </section>

               <div className="mb-8 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* ── SECTION 04 & 05: DISCOVERY & RESEARCH (CARENOVA STYLE) ─────────────── */}
               <section className="mb-8 md:mb-16 lg:mb-20">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-4">
                        <div className="sticky top-24">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                              <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">
                                 Research & Discovery
                              </span>
                           </div>
                           <h3 className="text-2xl md:text-2xl md:text-4xl font-bold text-text-primary mb-6">Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Discovery</span></h3>
                           <p className="text-text-secondary leading-relaxed font-medium mb-8">
                              Research sessions were conducted to understand operational workflows, stakeholder expectations, and inefficiencies within the existing ticket distribution process.
                           </p>

                           <div>
                              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Research Activities</h4>
                              <div className="bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[16px] lg:rounded-[24px] overflow-hidden">
                                 {[
                                    { group: "Stakeholder Interviews", roles: "Executive Leadership, Operations Managers", icon: Building2 },
                                    { group: "User Interviews", roles: "Ticket Administrators, Store Managers", icon: Users },
                                    { group: "Product Audit", roles: "Reviewing navigation & ticket workflows", icon: ShieldCheck },
                                    { group: "Competitive Benchmark", roles: "Ticketmaster, Eventbrite, FareHarbor", icon: Target }
                                 ].map((stakeholder, idx) => (
                                    <div key={idx} className={`flex items-center gap-4 p-5 ${idx !== 3 ? 'border-b border-slate-100' : ''} hover:bg-white/40 transition-colors`}>
                                       <div className="w-10 h-10 rounded-xl bg-[#0D63CC]/10 flex items-center justify-center text-[#0D63CC] flex-shrink-0 shadow-sm border border-white">
                                          <stakeholder.icon size={18} />
                                       </div>
                                       <div>
                                          <p className="text-sm font-bold text-text-primary mb-0.5">{stakeholder.group}</p>
                                          <p className="text-[11px] text-text-secondary font-medium leading-snug">{stakeholder.roles}</p>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="lg:col-span-8">
                        <div className="grid sm:grid-cols-2 gap-5 mb-10">
                           <motion.div {...fadeIn} className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[16px] lg:rounded-[24px] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center relative overflow-hidden group hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1">
                              <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#0D63CC] blur-[60px] rounded-full opacity-20 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
                              <h3 className="text-3xl lg:text-4xl font-black text-[#0D63CC] mb-4">48%</h3>
                              <p className="text-[13px] font-medium text-text-primary relative z-10 leading-relaxed opacity-80 max-w-[220px]">Experienced inventory confusion and allocation inconsistencies.</p>
                           </motion.div>
                           <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[16px] lg:rounded-[24px] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center relative overflow-hidden group hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1">
                              <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#00DA99] blur-[60px] rounded-full opacity-20 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
                              <h3 className="text-3xl lg:text-4xl font-black text-[#00DA99] mb-4">32%</h3>
                              <p className="text-[13px] font-medium text-text-primary relative z-10 leading-relaxed opacity-80 max-w-[220px]">Reported slow reporting and lack of real-time insights.</p>
                           </motion.div>
                        </div>

                        <h3 className="text-xl font-bold text-text-primary mb-6">Key Research Findings</h3>
                        <div className="grid md:grid-cols-2 gap-5">
                           {[
                              { num: "01", title: "Managing complexity", desc: "Users spend most of their time managing products, promotions, and inventory rather than analyzing results.", quote: "I have to open three different tabs just to set up a weekend discount.", color: "#0D63CC" },
                              { num: "02", title: "Insights over reports", desc: "Users don't need more complex reports. They require immediate, actionable insights to adjust strategies.", quote: "Give me the answer, not the data to find the answer.", color: "#00DA99" },
                              { num: "03", title: "Workflow-driven mental model", desc: "Users think in end-to-end workflows—not isolated modules or database structures.", quote: "I just want to launch a campaign, I shouldn't have to know how the system connects it all.", color: "#8B5CF6" },
                              { num: "04", title: "Revenue visibility is paramount", desc: "Real-time revenue visibility directly influences rapid, high-stakes business decisions.", quote: "If I can't see the immediate revenue impact, I can't make the call.", color: "#F59E0B" }
                           ].map((insight, i) => (
                              <motion.div
                                 key={i}
                                 {...fadeIn}
                                 transition={{ delay: i * 0.1 }}
                                 className="bg-white/80 rounded-[16px] lg:rounded-[24px] border border-white shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden group"
                              >
                                 <div className="absolute -top-12 -right-12 w-32 h-32 blur-[40px] rounded-full opacity-10 group-hover:opacity-30 group-hover:scale-150 transition-all duration-700 pointer-events-none" style={{ backgroundColor: insight.color }} />
                                 <div className="relative z-10">
                                    <span className="text-[42px] font-black block mb-2 leading-none opacity-20" style={{ color: insight.color }}>{insight.num}</span>
                                    <h4 className="font-bold text-base text-text-primary mb-3 leading-snug">{insight.title}</h4>
                                    <p className="text-[12px] text-text-secondary font-medium leading-relaxed mb-6">{insight.desc}</p>
                                 </div>
                                 {insight.quote && (
                                    <div className="p-4 rounded-xl border relative z-10 mt-auto bg-white/60 backdrop-blur-md" style={{ borderColor: `${insight.color}30` }}>
                                       <MessageCircle size={16} className="mb-2 opacity-60" style={{ color: insight.color }} />
                                       <span className="text-[12px] font-semibold leading-relaxed block italic" style={{ color: insight.color }}>"{insight.quote}"</span>
                                    </div>
                                 )}
                              </motion.div>
                           ))}
                        </div>

                        <motion.div {...fadeIn} className="mt-8 p-6 bg-[#00DA99]/10 rounded-[16px] lg:rounded-[24px] border border-[#00DA99]/20 flex items-start gap-4 mb-10">
                           <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                              <Lightbulb size={24} className="text-[#00DA99]" />
                           </div>
                           <div>
                              <h4 className="font-bold text-lg text-[#00DA99] mb-1">Critical Insight</h4>
                              <p className="text-sm text-text-secondary font-medium leading-relaxed">Users didn't need another ticket management tool. They needed a platform that protected revenue, reduced operational risk, and accelerated decision-making.</p>
                           </div>
                        </motion.div>

                     </div>
                  </div>
               </section>

               <div className="mb-8 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* ── SECTION: STRATEGIC ARTIFACTS ─────────────────────────────────────────── */}
               <section className="mb-8 md:mb-16 lg:mb-20">
                  <div className="text-center mb-8 md:mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D63CC]/10 border border-[#0D63CC]/20 mb-4">
                        <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-widest">Deliverables</span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Artifacts</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Key deliverables that guided the product strategy and informed the design architecture.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-9xl mx-auto">
                     {[
                        { name: "Affinity Map", image: "AffinityMap.png" },
                        { name: "Stakeholder Map", image: "StakeholderMap.png" },
                        { name: "Journey Map", image: "JourneyMap.png" },
                        { name: "Workflow Diagram", image: "WorkflowDiagram.png" }
                     ].map((doc, i) => (
                        <div key={i} className="aspect-square glass-card rounded-[16px] lg:rounded-[24px] flex flex-col items-center p-4 border border-slate-200/50 hover:border-[#0D63CC]/30 shadow-sm hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 group bg-white/60 relative overflow-hidden">
                           <div className="absolute inset-0 z-0">
                              <Image
                                 src={`/images/ticketstack/${doc.image}`}
                                 alt={doc.name}
                                 fill
                                 className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                              />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
                           <span className="relative z-20 mt-auto pt-4 text-sm font-bold text-white transition-colors">{doc.name}</span>
                        </div>
                     ))}
                  </div>
               </section>

               {/* ── SECTION 07 & 08: USER PERSONAS (SPENDORA STYLE) ────────────────────── */}
               <section className="mb-10 md:mb-16">
                  <div className="mb-8 md:mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           User Persona
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">Primary <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">User Personas</span></h2>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-5">
                     {[
                        {
                           name: "Sarah Thompson",
                           role: "Retail Operations Manager",
                           age: "38",
                           image: null,
                           goals: ["Monitor campaigns", "Track performance"],
                           pains: ["Limited visibility", "Manual coordination"],
                           motivation: "I need centralized insights to manage campaigns without relying on manual follow-ups.",
                           color: "#0D63CC"
                        },
                        {
                           name: "David Chen",
                           role: "Distribution Manager",
                           age: "42",
                           image: null,
                           goals: ["Manage inventory allocation"],
                           pains: ["Fragmented systems"],
                           motivation: "Managing inventory across multiple channels is currently creating operational friction.",
                           color: "#00DA99"
                        },
                        {
                           name: "Elena Rodriguez",
                           role: "Executive Leadership",
                           age: "51",
                           image: null,
                           goals: ["Monitor KPIs"],
                           pains: ["Inconsistent reporting"],
                           motivation: "I need accurate, real-time business metrics to make rapid strategic decisions.",
                           color: "#8B5CF6"
                        }
                     ].map((persona, idx) => (
                        <motion.div
                           key={idx}
                           {...fadeIn}
                           transition={{ delay: idx * 0.1 }}
                           className="glass-card rounded-[20px] p-6 md:p-8 lg:p-10 group relative overflow-hidden flex flex-col border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-md transition-all duration-500"
                        >
                           <div
                              className="absolute -top-24 -right-24 w-80 h-80 blur-[100px] rounded-full transition-all duration-1000 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: persona.color }}
                           />
                           <div className="flex items-center gap-5 mb-8 relative z-10">
                              <div className="w-14 h-14 rounded-[16px] overflow-hidden flex-shrink-0 relative border-2 border-white shadow-2xl flex items-center justify-center bg-white" style={{ backgroundColor: `${persona.color}15` }}>
                                 <User size={24} style={{ color: persona.color }} strokeWidth={1.5} />
                              </div>
                              <div>
                                 <h4 className="font-bold text-xl text-gray-800 tracking-tight">{persona.name}</h4>
                                 <p className="text-[10px] font-bold text-text-secondary mt-1 opacity-80 uppercase tracking-widest">{persona.role}</p>
                              </div>
                           </div>

                           <p className="text-sm text-gray-800 leading-relaxed mb-8 relative z-10 font-medium italic">
                              &ldquo;{persona.motivation}&rdquo;
                           </p>

                           <div className="space-y-4 relative z-10 mt-auto">
                              <div className="p-5 rounded-2xl bg-[#0D63CC]/5 border border-[#0D63CC]/20">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#0D63CC] mb-3 flex items-center gap-2">
                                    <CheckCircle2 size={13} strokeWidth={3} /> Core Goals
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {persona.goals.map((n, i) => (
                                       <span key={i} className="px-2.5 py-1 bg-white/60 rounded-md border border-[#0D63CC]/20 text-[11px] font-semibold text-text-primary shadow-sm">
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
                                       <span key={i} className="px-2.5 py-1 bg-white/60 rounded-md border border-rose-100 text-[11px] font-semibold text-text-primary shadow-sm">
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

               {/* ── SECTION 11 & 12: USER JOURNEY / FLOW (SPENDORA STYLE) ──────────────── */}
               <section className="mb-8 md:mb-24 lg:mb-24">
                  <div className="mb-8 md:mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2 md:mb-6">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Flow Architecture</span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">Key Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Workflows</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Streamlined architecture reducing cognitive load and simplifying enterprise tasks into linear guided flows.</p>
                  </div>

                  <div className="space-y-8 md:space-y-12 lg:space-y-16 max-w-9xl mx-auto">
                     {/* Campaign Deployment Flow */}
                     <div className="glass-card p-8 md:p-12 rounded-[16px] lg:rounded-[24px] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group bg-white/60">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0D63CC]/10 blur-[80px] rounded-full pointer-events-none" />
                        <h3 className="text-xl font-bold mb-8 text-center text-text-primary relative z-10">Campaign Deployment Flow</h3>

                        <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-4 mt-12 mb-8 z-10">
                           {/* Dashed line */}
                           <div className="hidden md:block absolute top-[50px] lg:top-[55px] xl:top-[60px] left-[5%] right-[5%] h-[2px] border-t-[2px] border-dashed border-slate-200 z-0" />

                           {[
                              { title: "CREATE", desc: "Ticket", icon: Ticket, color: "#0D63CC", style: "dashed" },
                              { title: "CONFIGURE", desc: "Pricing", icon: Settings, color: "#0D63CC", style: "dashed" },
                              { title: "ASSIGN", desc: "Inventory", icon: Grid, color: "#00DA99", style: "solid" },
                              { title: "ATTACH", desc: "Campaign", icon: Layers, color: "#00DA99", style: "solid" },
                              { title: "SELECT", desc: "Channels", icon: Globe, color: "#8B5CF6", style: "solid" },
                              { title: "PUBLISH", desc: "Deployment", icon: Rocket, color: "#EC4899", style: "dark" }
                           ].map((step, j, arr) => {
                              const isDashed = step.style === "dashed";
                              const isSolid = step.style === "solid";
                              const isDark = step.style === "dark";

                              return (
                                 <div key={j} className="flex flex-col items-center relative group w-full md:flex-1">
                                    {/* Arrow on line */}
                                    {j < arr.length - 1 && (
                                       <div className="hidden md:flex absolute top-[40px] lg:top-[45px] xl:top-[50px] -right-4 xl:-right-5 w-8 h-8 items-center justify-center z-0 bg-transparent">
                                          <ArrowRight size={18} className="text-slate-300" strokeWidth={2.5} />
                                       </div>
                                    )}

                                    {/* Circle Node */}
                                    <div
                                       className={`w-[100px] h-[100px] lg:w-[110px] lg:h-[110px] xl:w-[120px] xl:h-[120px] rounded-full flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-2 z-10 mx-auto relative ${isDashed ? "bg-white border-[2px] border-dashed shadow-sm" :
                                          isSolid ? "border-[2px] border-solid shadow-md" :
                                             "border-none shadow-xl"
                                          }`}
                                       style={{
                                          borderColor: isDashed ? `${step.color}80` : isSolid ? step.color : 'transparent',
                                          backgroundColor: isSolid ? `${step.color}15` : isDark ? step.color : 'white',
                                          color: isDark ? 'white' : step.color
                                       }}
                                    >
                                       <step.icon size={24} className="mb-2" strokeWidth={1.5} />
                                       <span className="text-[10px] xl:text-[11px] font-bold uppercase tracking-wider leading-tight px-1" style={{ color: isDark ? 'white' : step.color }}>
                                          {step.title}
                                       </span>
                                    </div>

                                    {/* Description Text */}
                                    <p className="text-center mt-4 text-[12px] font-medium text-text-secondary max-w-[120px] mx-auto">
                                       {step.desc}
                                    </p>
                                 </div>
                              );
                           })}
                        </div>
                     </div>

                     {/* Inventory Distribution Flow */}
                     <div className="glass-card p-8 md:p-12 rounded-[16px] lg:rounded-[24px] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group bg-white/60">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00DA99]/10 blur-[80px] rounded-full pointer-events-none" />
                        <h3 className="text-xl font-bold mb-8 text-center text-text-primary relative z-10">Inventory Distribution Flow</h3>

                        <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-4 mt-12 mb-8 z-10">
                           {/* Dashed line */}
                           <div className="hidden md:block absolute top-[64px] left-[10%] right-[10%] h-[2px] border-t-[2px] border-dashed border-slate-200 z-0" />

                           {[
                              { title: "CREATE", desc: "Inventory", icon: Grid, color: "#00DA99", style: "dashed" },
                              { title: "ALLOCATE", desc: "Resources", icon: PieChart, color: "#00DA99", style: "dashed" },
                              { title: "DISTRIBUTE", desc: "Channels", icon: Shuffle, color: "#0D63CC", style: "solid" },
                              { title: "MONITOR", desc: "Activity", icon: Activity, color: "#8B5CF6", style: "solid" },
                              { title: "RECONCILE", desc: "Data", icon: CheckSquare, color: "#EC4899", style: "dark" }
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
                                          color: isDark ? 'white' : step.color
                                       }}
                                    >
                                       <step.icon size={28} className="mb-3" strokeWidth={1.5} />
                                       <span className="text-[12px] font-bold uppercase tracking-wider leading-tight px-2" style={{ color: isDark ? 'white' : step.color }}>
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

                     {/* Campaign Management Flow */}
                     <div className="glass-card p-8 md:p-12 rounded-[16px] lg:rounded-[24px] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group bg-white/60">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0D63CC]/10 blur-[80px] rounded-full pointer-events-none" />
                        <h3 className="text-xl font-bold mb-8 text-center text-text-primary relative z-10">Campaign Management Flow</h3>

                        <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-4 mt-12 mb-8 z-10">
                           {/* Dashed line */}
                           <div className="hidden md:block absolute top-[64px] left-[10%] right-[10%] h-[2px] border-t-[2px] border-dashed border-slate-200 z-0" />

                           {[
                              { title: "CREATE", desc: "Campaign", icon: Target, color: "#0D63CC", style: "dashed" },
                              { title: "CONFIGURE", desc: "Settings", icon: Settings, color: "#0D63CC", style: "dashed" },
                              { title: "ASSIGN", desc: "Teams", icon: Users, color: "#00DA99", style: "solid" },
                              { title: "LAUNCH", desc: "Execution", icon: Rocket, color: "#8B5CF6", style: "solid" },
                              { title: "TRACK", desc: "Performance", icon: BarChart2, color: "#EC4899", style: "dark" }
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
                                          color: isDark ? 'white' : step.color
                                       }}
                                    >
                                       <step.icon size={28} className="mb-3" strokeWidth={1.5} />
                                       <span className="text-[12px] font-bold uppercase tracking-wider leading-tight px-2" style={{ color: isDark ? 'white' : step.color }}>
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

                     {/* Reporting Flow */}
                     <div className="glass-card p-8 md:p-12 rounded-[16px] lg:rounded-[24px] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group bg-white/60">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/10 blur-[80px] rounded-full pointer-events-none" />
                        <h3 className="text-xl font-bold mb-8 text-center text-text-primary relative z-10">Reporting Flow</h3>

                        <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-4 mt-12 mb-8 z-10">
                           {/* Dashed line */}
                           <div className="hidden md:block absolute top-[64px] left-[15%] right-[15%] h-[2px] border-t-[2px] border-dashed border-slate-200 z-0" />

                           {[
                              { title: "COLLECT", desc: "Data", icon: Layers, color: "#8B5CF6", style: "dashed" },
                              { title: "ANALYZE", desc: "Metrics", icon: BarChart3, color: "#8B5CF6", style: "dashed" },
                              { title: "REVIEW", desc: "Insights", icon: Search, color: "#0D63CC", style: "solid" },
                              { title: "EXPORT", desc: "Reports", icon: ArrowRight, color: "#00DA99", style: "dark" }
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
                                          color: isDark ? 'white' : step.color
                                       }}
                                    >
                                       <step.icon size={28} className="mb-3" strokeWidth={1.5} />
                                       <span className="text-[12px] font-bold uppercase tracking-wider leading-tight px-2" style={{ color: isDark ? 'white' : step.color }}>
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
                  </div>
               </section>

               <div className="mb-8 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* ── SECTION 14: SOLUTION WALKTHROUGH (CARENOVA STYLE UI SHOWCASE) ──────── */}
               <section className="mb-8 md:mb-24 lg:mb-24">
                  <div className="text-center mb-8 lg:mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <Layout size={14} className="text-primary" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Walkthrough</span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">Core Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Capabilities</span></h2>
                  </div>

                  <div className="space-y-4 md:space-y-20 lg:space-y-32">
                     {/* Scene 01 */}
                     <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                        <motion.div {...fadeIn} className="lg:col-span-5">
                           <div className="w-12 h-12 rounded-2xl bg-[#0D63CC]/10 text-[#0D63CC] flex items-center justify-center mb-3 md:mb-6">
                              <Layout size={24} />
                           </div>
                           <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Executive Dashboard</h3>
                           <p className="text-sm lg:text-base font-medium text-text-secondary mb-3 md:mb-6 leading-relaxed">
                              Provides leadership teams with real-time visibility into sales performance, inventory status, and operational health.
                           </p>
                           <ul className="space-y-3 mb-3 md:mb-6">
                              <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                 <div className="w-6 h-6 rounded-full bg-[#00DA99]/20 flex items-center justify-center text-[#00DA99]"><CheckCircle2 size={14} /></div> Faster decision-making.
                              </li>
                              <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                 <div className="w-6 h-6 rounded-full bg-[#00DA99]/20 flex items-center justify-center text-[#00DA99]"><CheckCircle2 size={14} /></div> Improved revenue visibility.
                              </li>
                           </ul>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-7">
                           <div className="relative aspect-[14/7] glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden group-hover:shadow-lg transition-all duration-700 border border-white/60 shadow-sm">
                              <Image
                                 src="/images/ticketstack/DashboardInterface.png"
                                 alt="Carenova Platform Interface"
                                 fill
                                 className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                              />
                           </div>
                           {/* <PremiumPlaceholder icon={Layout} label="Dashboard Interface Mockup" glowColor="#0D63CC" textCls="text-[#0D63CC]" aspect="aspect-video" /> */}
                        </motion.div>
                     </div>

                     {/* Scene 02 */}
                     <div className="grid lg:grid-cols-12 gap:6 lg:gap-12 items-center">
                        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="order-2 lg:order-1 lg:col-span-7">
                           {/* <PremiumPlaceholder icon={Layers} label="Ticket Creation Wizard Mockup" glowColor="#8B5CF6" textCls="text-[#8B5CF6]" aspect="aspect-[16/10]" /> */}
                           <div className="relative aspect-[16/10] glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden group-hover:shadow-lg transition-all duration-700 border border-white/60 shadow-sm">
                              <Image
                                 src="/images/ticketstack/TicketCreationWizard.png"
                                 alt="Ticket Creation Wizard"
                                 fill
                                 className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                              />
                           </div>
                        </motion.div>
                        <motion.div {...fadeIn} className="order-1 lg:order-2 lg:col-span-5">
                           <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center mb-3 lg:mb-6">
                              <PenTool size={24} />
                           </div>
                           <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Ticket Creation & Management</h3>
                           <p className="text-sm lg:text-base font-medium text-text-secondary mb-3 lg:mb-6 leading-relaxed">
                              Simplifies campaign creation, ticket lifecycle management, and operational coordination.
                           </p>
                           <div className="p-5 bg-purple-50 border border-purple-100 rounded-2xl flex items-center gap-4">
                              <Zap size={28} className="text-[#8B5CF6] flex-shrink-0" />
                              <p className="font-bold text-slate-800 text-sm">Resulted in <span className="text-[#8B5CF6] font-black">42% faster</span> ticket deployment across the network.</p>
                           </div>
                        </motion.div>
                     </div>

                     {/* Split Scenes */}
                     <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
                        <motion.div {...fadeIn} className="glass-card p-6 lg:p-10 rounded-[16px] lg:rounded-[24px] border border-white shadow-lg bg-white/50 flex flex-col h-full group">
                           <div className="w-12 h-12 rounded-2xl bg-[#00DA99]/10 text-[#00DA99] flex items-center justify-center mb-3 lg:mb-6 group-hover:scale-110 transition-transform">
                              <Target size={24} />
                           </div>
                           <h3 className="text-2xl font-bold text-text-primary mb-3">Campaign Management</h3>
                           <p className="text-sm font-medium text-text-secondary mb-4 lg:mb-8 flex-grow">Enables centralized planning, monitoring, and optimization of retail campaigns.</p>
                           {/* <PremiumPlaceholder icon={Target} label="Campaigns UI" aspect="aspect-[4/3]" glowColor="#00DA99" textCls="text-[#00DA99]" /> */}
                           <div className="relative aspect-[4/3] glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden group-hover:shadow-lg transition-all duration-700 border border-white/60 shadow-sm">
                              <Image
                                 src="/images/ticketstack/CampaignsUI.png"
                                 alt="Campaigns UI"
                                 fill
                                 className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                              />
                           </div>
                        </motion.div>

                        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="glass-card p-4 lg:p-10 rounded-[16px] lg:rounded-[24px] border border-white shadow-lg bg-white/50 flex flex-col h-full group">
                           <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center mb-3 lg:mb-6 group-hover:scale-110 transition-transform">
                              <Grid size={24} />
                           </div>
                           <h3 className="text-2xl font-bold text-text-primary mb-3">Inventory Management</h3>
                           <p className="text-sm font-medium text-text-secondary mb-4 lg:mb-8 flex-grow">Improves visibility and control over ticket inventory across channels and partners.</p>
                           {/* <PremiumPlaceholder icon={Grid} label="Inventory UI" aspect="aspect-[4/3]" glowColor="#F59E0B" textCls="text-[#F59E0B]" /> */}
                           <div className="relative aspect-[4/3] glass-card rounded-[16px] lg:rounded-[24px] overflow-hidden group-hover:shadow-lg transition-all duration-700 border border-white/60 shadow-sm">
                              <Image
                                 src="/images/ticketstack/InventoryUI.png"
                                 alt="Inventory UI"
                                 fill
                                 className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                              />
                           </div>
                        </motion.div>
                     </div>
                     {/* Additional Operational Views */}
                     <div className="mt-10 md:mt-20">
                        <div className="text-center mb-8 md:mb-12">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 mb-4">
                              <span className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-widest">Features</span>
                           </div>
                           <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">Additional Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#0D63CC]">Capabilities</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                           {[
                              { name: "Table-Heavy Operational Screens", image: "OperationalScreens.png" },
                              { name: "Bulk Actions Workflows", image: "BulkActions.png" },
                              { name: "Notification Center", image: "NotificationCenter.png" },
                              { name: "Audit Logs", image: "AuditLogs.png" }
                           ].map((feature, i) => (
                              <div key={i} className="aspect-[4/3] glass-card rounded-[16px] lg:rounded-[24px] flex flex-col items-center p-4 border border-slate-200/50 hover:border-[#0D63CC]/30 shadow-sm hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 group bg-white/60 relative overflow-hidden">
                                 <div className="absolute inset-0 z-0">
                                    <Image
                                       src={`/images/ticketstack/${feature.image}`}
                                       alt={feature.name}
                                       fill
                                       className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                 </div>
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
                                 <span className="relative z-20 mt-auto pt-4 text-sm font-bold text-white transition-colors">{feature.name}</span>
                              </div>
                           ))}

                           {/* {[
                        { name: "Affinity Map", image: "AffinityMap.png" },
                        { name: "Stakeholder Map", image: "StakeholderMap.png" },
                        { name: "Journey Map", image: "JourneyMap.png" },
                        { name: "Workflow Diagram", image: "WorkflowDiagram.png" }
                     ].map((doc, i) => (
                        <div key={i} className="aspect-square glass-card rounded-[16px] lg:rounded-[24px] flex flex-col items-center p-4 border border-slate-200/50 hover:border-[#0D63CC]/30 shadow-sm hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 group bg-white/60 relative overflow-hidden">
                           <div className="absolute inset-0 z-0">
                              <Image
                                 src={`/images/ticketstack/${doc.image}`}
                                 alt={doc.name}
                                 fill
                                 className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                              />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
                           <span className="relative z-20 mt-auto pt-4 text-sm font-bold text-white transition-colors">{doc.name}</span>
                        </div>
                     ))} */}
                        </div>
                     </div>
                  </div>
               </section>

               <div className="mb-8 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* ── SECTION: INFORMATION ARCHITECTURE ────────────────────────────────────── */}
               <section className="mb-8 md:mb-24 lg:mb-24">
                  <div className="text-center mb-8 lg:mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Structure</span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">Structuring <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Enterprise Operations</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Information architecture was designed to support complex operational workflows while maintaining clarity and scalability.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-9xl mx-auto">
                     {[
                        { name: "Sitemap", image: "Sitemap.png" },
                        { name: "Navigation Hierarchy", image: "NavigationHierarchy.png" },
                        { name: "Role Hierarchy", image: "RoleHierarchy.png" }
                     ].map((item, i) => (
                        <div key={i} className="aspect-video glass-card rounded-[16px] lg:rounded-[24px] flex flex-col items-center p-4 border border-slate-200/50 hover:border-[#0D63CC]/30 shadow-sm hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 group bg-white/60 relative overflow-hidden">
                           <div className="absolute inset-0 z-0">
                              <Image
                                 src={`/images/ticketstack/${item.image}`}
                                 alt={item.name}
                                 fill
                                 className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                              />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
                           <span className="relative z-20 mt-auto pt-4 text-sm font-bold text-white transition-colors">{item.name}</span>
                        </div>
                     ))}

                  </div>
               </section>

               <div className="mb-8 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* ── SECTION: DESIGN PRINCIPLES ─────────────────────────────────────────── */}
               <section className="mb-8 md:mb-24 lg:mb-24">
                  <div className="text-center mb-8 lg:mb-16">
                     <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary mb-2 lg:mb-4">Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Experience Principles</span></h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-9xl mx-auto">
                     {[
                        { title: "Efficiency", desc: "Minimize repetitive operational tasks.", icon: Zap, color: "#0D63CC" },
                        { title: "Visibility", desc: "Provide real-time operational insights.", icon: Search, color: "#00DA99" },
                        { title: "Scalability", desc: "Support organizational growth.", icon: TrendingUp, color: "#8B5CF6" },
                        { title: "Consistency", desc: "Ensure predictable interactions across workflows.", icon: Layers, color: "#F59E0B" }
                     ].map((principle, i) => (
                        <div key={i} className="glass-card p-4 lg:p-8 rounded-xl lg:rounded-3xl border border-white/60 shadow-sm hover:-translate-y-1 transition-all duration-300">
                           <div className="w-12 h-12 rounded-xl mb-3 lg:mb-6 flex items-center justify-center text-white" style={{ backgroundColor: principle.color }}>
                              <principle.icon size={24} />
                           </div>
                           <h3 className="text-base lg:text-xl font-bold text-text-primary mb-2">{principle.title}</h3>
                           <p className="text-sm text-text-secondary font-medium leading-relaxed">{principle.desc}</p>
                        </div>
                     ))}
                  </div>
               </section>

               <div className="mb-8 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* ── SECTION: WIREFRAMES ────────────────────────────────────────────────── */}
               <section className="mb-8 md:mb-24 lg:mb-24">
                  <div className="text-center mb-4 md:mb-16">
                     <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary mb-2 lg:mb-4">From Concept to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Final Experience</span></h2>
                  </div>
                  <div className="relative py-4 md:py-6 lg:py-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
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

               <div className="mb-8 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* ── DESIGN SYSTEM & VISUALS ───────────────────────────────────────────── */}
               <section className="mb-8 md:mb-24 lg:mb-24 lg:mb-32">
                  <div className="mb-8 lg:mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-2 lg:mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Visual Identity
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-2xl md:text-4xl font-bold text-text-primary mb-2 lg:mb-4">Building a Scalable Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">Design System</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        A clean, accessible, and consistent design language created to ensure clarity across web and mobile interfaces. Includes Grid system, Accessibility standards, Component library, and Data visualization patterns.
                     </p>
                  </div>
                  <div className="mb-4 md:mb-12">
                     <h3 className="text-xl font-bold text-text-primary mb-3 lg:mb-6 text-center">Key UI Components</h3>
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-9xl mx-auto">
                        {[
                           { name: "Table Components", image: "TablesComponents.png" },
                           { name: "Filters", image: "FiltersComponents.png" },
                           { name: "Status Indicators", image: "StatusIndicatorsComponents.png" },
                           { name: "Charts", image: "ChartsComponents.png" },
                           { name: "Modals", image: "ModalsComponents.png" },
                           { name: "Progress", image: "ProgressBars-Components.png" },
                           { name: "Alerts", image: "Real-timeAlerts.png" },
                           { name: "Buttons", image: "ButtonsComponents.png" }
                        ].map((comp, i) => (
                           <div key={i} className="aspect-square glass-card rounded-[12px] lg:rounded-[20px] flex flex-col items-center p-4 border border-slate-200/50 hover:border-[#0D63CC]/30 shadow-sm hover:shadow-md transition-all duration-300 group bg-white/60 relative overflow-hidden">
                              <div className="absolute inset-0 z-0 bg-slate-50">
                                 <Image
                                    src={`/images/ticketstack/${comp.image}`}
                                    alt={comp.name}
                                    fill
                                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                 />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
                              <span className="relative z-20 mt-auto pt-2 text-xs md:text-sm font-bold text-white transition-colors">{comp.name}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto lg:px-4">
                     {/* Colors */}
                     <div className="lg:col-span-4 glass-card rounded-[16px] lg:rounded-[24px] p-4 lg:p-8 border-2 border-[#0D63CC]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-4 lg:mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Color Strategy
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                           {[
                              { bg: 'bg-[#0D63CC]', label: 'Primary', hex: '#0D63CC' },
                              { bg: 'bg-[#00DA99]', label: 'Secondary', hex: '#00DA99' },
                              { bg: 'bg-[#F59E0B]', label: 'Warning', hex: '#F59E0B' },
                              { bg: 'bg-rose-500', label: 'Error', hex: '#F43F5E' }
                           ].map((color, i) => (
                              <div key={i} className="flex flex-col gap-2 group/color">
                                 <div className={`w-full aspect-square rounded-2xl ${color.bg} shadow-lg border border-white/20 group-hover/color:scale-110 group-hover/color:shadow-2xl transition-all duration-300`} />
                                 <div>
                                    <span className="block text-[10px] font-bold text-text-primary uppercase tracking-wider mt-2">{color.label}</span>
                                    <span className="block text-[9px] text-text-secondary font-medium uppercase opacity-50">{color.hex}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Typography */}
                     <div className="lg:col-span-4 glass-card rounded-[16px] lg:rounded-[24px] p-4 lg:p-8 border-2 border-[#00DA99]/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00DA99]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-4 lg:mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#00DA99] rounded-full" /> Typography
                        </h4>
                        <div className="flex-1 flex flex-col justify-center md:mb-4 lg:mb-8">
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
                     <div className="lg:col-span-4 glass-card rounded-[16px] lg:rounded-[24px] p-4 lg:p-8 border-2 border-rose-500/10 hover:border-[#00DA99]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-1/2 right-0 w-32 h-32 bg-rose-500/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2" />
                        <h4 className="font-bold text-xl text-text-primary mb-4 lg:mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-rose-500 rounded-full" /> Iconography
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { icon: Layout, color: "text-[#0D63CC]" },
                              { icon: Ticket, color: "text-[#00DA99]" },
                              { icon: CheckSquare, color: "text-rose-500" },
                              { icon: Bell, color: "text-[#0D63CC]" },
                              { icon: Calendar, color: "text-[#F59E0B]" },
                              { icon: Target, color: "text-[#00DA99]" },
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
                  </div>
               </section>

               <div className="mb-8 md:mb-16 lg:mb-20">
                  <GlowDivider />
               </div>

               {/* ── SECTION 17: EXPECTED BUSINESS OUTCOMES ───────────── */}
               <section className="mb-8 md:mb-16 lg:mb-20">
                  <div className="p-4 md:p-8 md:p-16 rounded-[16px] lg:rounded-[24px] glass-card border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white/60 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00DA99]/10 blur-[100px] rounded-full pointer-events-none" />
                     <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0D63CC]/10 blur-[100px] rounded-full pointer-events-none" />

                     <div className="text-center mb-4 md:mb-12 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2 md:mb-6 backdrop-blur-md">
                           <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Business Impact</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-2 lg:mb-4 text-text-primary">Expected Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Outcomes</span></h2>
                        <p className="text-text-secondary font-medium max-w-2xl mx-auto text-md lg:text-lg">Meaningful business transformation through design.</p>
                     </div>

                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 mb-4 lg:mb-12">
                        {[
                           { title: "Improved operational visibility", icon: Search, color: "#0D63CC" },
                           { title: "Faster campaign management", icon: Zap, color: "#00DA99" },
                           { title: "Centralized retail workflows", icon: Layers, color: "#8B5CF6" },
                           { title: "Better inventory control", icon: Target, color: "#F59E0B" },
                           { title: "Reduced operational overhead", icon: ShieldCheck, color: "#EC4899" },
                           { title: "Data-driven decision making", icon: BarChart2, color: "#38BDF8" }
                        ].map((outcome, i) => (
                           <div key={i} className="p-4 lg:p-8 glass-card bg-white/60 rounded-[16px] lg:rounded-[24px] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 text-center relative overflow-hidden group flex flex-col items-center justify-center md:min-h-[160px]">
                              <div className="absolute -top-12 -right-12 w-32 h-32 blur-[40px] rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700 pointer-events-none" style={{ backgroundColor: outcome.color }} />
                              <outcome.icon size={32} className="mb-2 lg:mb-4 transition-transform duration-500 group-hover:scale-110" style={{ color: outcome.color }} />
                              <h3 className="text-md lg:text-lg font-bold text-text-primary tracking-tight leading-snug relative z-10">{outcome.title}</h3>
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* ── SECTION 20: KEY LEARNINGS ─────────────────────────────────────────── */}
               <section className="relative mb-8 md:mb-16 overflow-hidden">
                  <motion.div
                     {...fadeIn}
                     className="glass-card rounded-[16px] lg:rounded-[24px] md:rounded-[16px] lg:rounded-[24px] p-8 md:p-12 relative overflow-hidden group border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm transition-all duration-300"
                  >
                     <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D63CC]/8 blur-[120px] rounded-full pointer-events-none" />
                     <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00DA99]/8 blur-[100px] rounded-full pointer-events-none" />

                     <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <div className="mb-4 lg:mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100">
                           <Award size={28} className="text-[#0D63CC]" />
                        </div>

                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary mb-4 lg:mb-8">
                           Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">Learnings</span>
                        </h2>

                        <div className="relative">
                           <div className="absolute -top-6 -left-6 text-[80px] text-slate-100 text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC] font-serif leading-none select-none z-0">"</div>
                           <div className="absolute -bottom-6 -right-6 text-[80px] text-slate-100 text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC] font-serif leading-none select-none rotate-180 z-0">"</div>
                           <div className="relative z-10 px-6 py-4">
                              <p className="text-sm md:text-xl font-bold text-text-primary leading-[1.4] mb-3 lg:mb-6">
                                 Designing enterprise retail products requires balancing operational complexity with usability.
                              </p>
                              <p className="text-sm md:text-xl text-text-secondary font-medium leading-relaxed">
                                 Simplifying workflows, improving visibility, and supporting scalability were critical to creating an effective experience.
                              </p>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </section>

               {/* ── 20. VISUAL SHOWCASE ──────────────────────────────────────────────────── */}
               <section className="mb-4 md:mb-16">
                  <div className="mb-4 lg:mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Interface
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-4">High-Fidelity <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DA99] to-[#0D63CC]">UI Screens</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        Final interfaces focused on clarity, speed, and operational efficiency.
                     </p>
                  </div>

                  <div className="grid gap-4">
                     <div className="lg:col-span-12">
                        <div className="relative aspect-[21/9] z-10 w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-500">
                           <Image
                              src="/images/ticketstack/TicketStackVisual.png"
                              alt="Visual UI"
                              fill
                              className="object-cover relative z-10 duration-1000"
                           />
                        </div>
                     </div>
                  </div>
               </section>

               {/* 21. FINAL CTA */}
               <section className="py-4 md:py-8 text-center relative">
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D63CC]/5 to-transparent pointer-events-none" /> */}

                  <div className="relative max-w-9xl mx-auto">
                     {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0D63CC] to-[#00DA99] rounded-[16px] lg:rounded-[24px] blur-[60px] opacity-20 animate-pulse pointer-events-none" /> */}

                     <motion.div {...fadeIn} className="relative glass-card rounded-[16px] lg:rounded-[24px] p-4 md:p-12 border border-white/60 shadow-lg overflow-hidden group">
                        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#0D63CC]/15 blur-[80px] rounded-full group-hover:bg-[#0D63CC]/25 transition-colors duration-1000 pointer-events-none" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#00DA99]/15 blur-[80px] rounded-full group-hover:bg-[#00DA99]/25 transition-colors duration-1000 pointer-events-none" />

                        <div className="relative z-10">
                           <div className="inline-flex items-center justify-center w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#0D63CC] to-[#00DA99] shadow-md text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                              <Sparkles size={28} className="animate-pulse" />
                           </div>
                           <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-2 lg:mb-4 drop-shadow-sm">
                              Explore the Full Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D63CC] to-[#00DA99]">on Figma</span>
                           </h2>
                           <p className="text-sm md:text-md lg:text-lg text-text-secondary mb-4 lg:mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                              Dive deeper into the complete design system, enterprise workflows, interaction patterns, and component library behind Carenova Systems.
                           </p>

                           <div className="flex flex-wrap justify-center gap-2 mb-4 lg:mb-10">
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

                     {/* Additional CTA */}
                     <motion.div {...fadeIn} className="mt-8 md:mt-16 glass-card rounded-[16px] lg:rounded-[24px] p-4 md:p-12 border border-white/60 shadow-lg relative overflow-hidden bg-gradient-to-r from-slate-50 to-white group">
                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#0D63CC]/10 blur-[40px] rounded-full pointer-events-none" />
                        <div className="relative z-10 flex flex-col items-center">
                           <div className="w-16 h-16 rounded-full bg-[#0D63CC]/10 flex items-center justify-center text-[#0D63CC] mb-6">
                              <Building2 size={28} />
                           </div>
                           <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 text-center">Building SaaS or Enterprise Products?</h3>
                           <p className="text-base md:text-lg text-text-secondary mb-8 text-center max-w-xl font-medium leading-relaxed">
                              I help startups and businesses design scalable digital products that simplify complexity and improve operational performance.
                           </p>
                           <Link href="https://www.figma.com/design/JMh46MC2K4sRdLwAqNRBSj/Oasisnotes?node-id=3-62112&t=yPqYRdGSG9FnJSZX-1" className="inline-flex items-center gap-3 px-8 py-4 btn-premium text-white rounded-full font-bold transition-all shadow-[0_20px_40px_-10px_rgba(13,99,204,0.25)] group text-base overflow-hidden relative">
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
                  <Link href="/case-studies/supercampus" className="group flex flex-col items-center">
                     <h3 className="text-4xl md:text-5xl font-bold text-text-primary group-hover:text-[#8B5CF6] transition-colors duration-300 mb-6">
                        SuperCampus
                     </h3>
                     <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#8B5CF6] group-hover:border-[#8B5CF6] transition-all duration-300">
                        <ArrowLeft className="rotate-180 text-text-secondary group-hover:text-white transition-colors" size={20} />
                     </div>
                  </Link>
               </section>
            </div >
         </main >
         <Footer />
      </>
   )
}
