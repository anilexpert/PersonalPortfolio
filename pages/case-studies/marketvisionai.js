import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
   ArrowLeft, Brain, TrendingUp, Target, Smartphone, Shield, Zap,
   Search, Users, Grid, Settings, Layout, CheckCircle2, FileText,
   Heart, Lightbulb, PenTool, Activity, CheckSquare, Briefcase, HandCoins,
   PieChart, Handshake, MessageCircle, MessageSquare, User, Award, Database, BrainCircuit,
   Network, Crosshair, Compass, Server, Globe
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GlowDivider from '../../components/GlowDivider'
import RotatingBadge from '../../components/RotatingBadge'

export default function MarketVisionAICaseStudy() {
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
      <div className={`w-full ${aspect} glass-card rounded-3xl flex flex-col items-center justify-center overflow-hidden relative group transition-all duration-500 border-2 border-[#0D63CC]/10 hover:border-[#6366F1]/40 shadow-lg`}>
         {/* Top Right Glow Effect */}
         <div
            className="absolute -top-24 -right-24 w-64 h-64 blur-[60px] rounded-full transition-all duration-700 group-hover:scale-[1.5] group-hover:opacity-20 opacity-10 pointer-events-none z-0"
            style={{ backgroundColor: glowCls.replace('bg-[', '').replace(']', '') }}
         />

         <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
         {Icon && <Icon className={`w-14 h-14 mb-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-500 relative z-10 ${textCls} opacity-35`} strokeWidth={1.2} />}
         <span className={`font-bold tracking-[0.2em] text-[10px] uppercase px-8 text-center text-text-secondary relative z-10 opacity-50 group-hover:opacity-100 transition-opacity`}>
            {label}
         </span>
      </div>
   );

   return (
      <>
         <Head>
            <title>MarketVisionAI™ | Case Study - AI-Powered Market Intelligence</title>
         </Head>

         <Navbar />

         <main className="min-h-screen pt-20 md:pt-24 pb-20 md:pb-32 relative z-10">

            {/* ── 1. PAGE HERO (Inner Banner) ───────────────────────────────────────────────── */}
            <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
               {/* Background Glows */}
               <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
               <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#6366F1]/10 blur-[150px] rounded-full pointer-events-none" />

               <div className="max-w-7xl mx-auto relative z-10 text-center">
                  {/* Breadcrumb */}
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
                     <span className="bg-gradient-to-r from-secondary to-[#6366F1] bg-clip-text text-transparent ml-2">Studies</span>
                  </motion.h1>

                  {/* Circular Rotating Badge */}
                  <div className="absolute top-2 right-[6%] hidden lg:block">
                     <RotatingBadge
                        icon={BrainCircuit}
                        labels={["AI PLATFORM", "BI ECOSYSTEM", "SAAS"]}
                        iconColor="#0D63CC"
                        size={150}
                     />
                  </div>
               </div>
            </section>

            <div className="w-full max-w-7xl mx-auto px-4 pt-10 lg:pt-14 md:px-6">

               {/* ── 2. HERO SECTION ────────────────────────────────────────────────────────── */}
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
                        MarketVisionAI™
                     </motion.h1>
                     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-semibold mb-4 max-w-3xl">
                        AI-Powered <span className="bg-gradient-to-r from-[#0D63CC] to-[#6366F1] bg-clip-text text-transparent">Market Intelligence & Analytics</span>
                     </motion.h2>
                     <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-text-secondary max-w-3xl leading-relaxed font-normal">
                        Through deep research, strategic UX thinking, streamlined workflows, and a scalable design system, the platform evolved from a transactional tool into a business intelligence and operational management ecosystem that empowers ticketing organizations to operate faster, smarter, and more profitably.
                     </motion.p>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-4 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:pl-12 lg:border-l border-slate-200 pt-4">
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Industry</p>
                        <p className="font-bold text-sm text-text-primary">Enterprise SaaS / AI Analytics</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">My Role</p>
                        <p className="font-bold text-sm text-text-primary">Lead Product Designer & UX Strategist</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Duration</p>
                        <p className="font-bold text-sm text-text-primary">8 Months</p>
                     </div>
                     <div>
                        <p className="text-[12px] font-medium uppercase tracking-widest text-secondary mb-1 opacity-50">Platform</p>
                        <p className="font-bold text-sm text-text-primary">Web App (Desktop + Tablet Responsive)</p>
                     </div>
                  </motion.div>
               </section>

               {/* ── 3. MAIN HERO IMAGE ─────────────────────────────────────────────────────── */}
               <motion.section {...fadeIn} className="mb-10 md:mb-12 lg:mb-20 relative group">
                  <div className="relative aspect-[21/9] w-full glass-card rounded-[32px] overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                     <div
                        className="absolute -top-32 -right-32 w-96 h-96 blur-[100px] rounded-full transition-all duration-700 group-hover:scale-125 group-hover:opacity-30 opacity-30 pointer-events-none z-0"
                        style={{ background: 'linear-gradient(135deg, #6366F1 0%, #0D63CC 100%)' }}
                     />
                     <div className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center p-8 text-center text-white relative z-10">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-indigo-900/20 mix-blend-overlay" />
                        <BrainCircuit className="w-16 h-16 text-blue-400 mb-4 animate-pulse-slow" strokeWidth={1} />
                        <h3 className="text-xl md:text-3xl font-black uppercase tracking-[0.15em] mb-2">MARKET PROPHET™ DASHBOARD</h3>
                        <p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest max-w-lg mb-4">[ AI Market Intelligence Visualization ]</p>
                        <div className="flex flex-wrap justify-center gap-4 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-slate-300">
                           <span className="px-3 py-1 bg-white/10 rounded-full">Competitive Analysis</span>
                           <span className="px-3 py-1 bg-white/10 rounded-full">Trends & Forecasting</span>
                           <span className="px-3 py-1 bg-white/10 rounded-full">Customer Intelligence</span>
                           <span className="px-3 py-1 bg-white/10 rounded-full">Revenue Forecasts</span>
                        </div>
                     </div>
                  </div>
               </motion.section>

               {/* ── 4. OVERVIEW / CHALLENGES / SOLUTION ─────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32 space-y-10 md:space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Overview</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                           Market Prophet (MarketVisionAI™) is an AI-powered market intelligence platform designed to help organizations predict market shifts, identify emerging opportunities, monitor competitors, and make data-driven strategic decisions.
                        </p>
                        <p className="text-base text-text-secondary leading-relaxed font-normal mt-4">
                           The platform aggregates data from multiple sources including market reports, social channels, news publications, industry databases, customer feedback, competitor websites, and financial indicators. Advanced AI models transform fragmented information into actionable business intelligence, eliminating manual research processes and enabling strategic teams to access real-time insights through a centralized intelligence ecosystem.
                        </p>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Business Problem</h3>
                     </div>
                     <div className="lg:col-span-9">
                        <p className="text-lg text-text-secondary leading-relaxed font-medium mb-8">
                           Organizations face several critical operational and data challenges when mapping their market strategies:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                           {[
                              { title: "Information Overload", desc: "Thousands of market signals are generated daily across industries, making manual monitoring impossible." },
                              { title: "Delayed Decision-Making", desc: "Strategic teams spend weeks gathering and validating data before making critical decisions." },
                              { title: "Competitive Blind Spots", desc: "Businesses struggle to continuously monitor competitor activities, launches, pricing changes, and positioning shifts." },
                              { title: "Fragmented Data Sources", desc: "Information exists across disconnected platforms resulting in incomplete insights." },
                              { title: "Reactive Strategy", desc: "Most organizations react to market changes rather than proactively anticipating them." }
                           ].map((item, idx) => (
                              <div key={idx} className="flex flex-col gap-2 p-6 glass-card rounded-2xl hover:border-secondary/40">
                                 <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(13,99,204,0.5)]" />
                                    <h4 className="font-bold text-sm text-text-primary">{item.title}</h4>
                                 </div>
                                 <p className="text-xs text-text-secondary leading-relaxed pl-5">{item.desc}</p>
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
                        <div className="grid sm:grid-cols-2 gap-6">
                           <div className="p-6 rounded-3xl bg-blue-50/50 border border-blue-200">
                              <h4 className="font-bold text-[#0D63CC] mb-4 flex items-center gap-2">
                                 <Target size={18} strokeWidth={2.5} /> Business Goals
                              </h4>
                              <ul className="space-y-3">
                                 {[
                                    "Reduce market research time by 70%",
                                    "Increase decision-making speed by 50%",
                                    "Improve opportunity identification accuracy",
                                    "Create recurring SaaS revenue model",
                                    "Increase customer retention through AI-driven value"
                                 ].map((goal, i) => (
                                    <li key={i} className="text-xs font-semibold text-text-secondary flex items-start gap-2">
                                       <span className="text-[#0D63CC] font-bold">•</span> {goal}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                           <div className="p-6 rounded-3xl bg-indigo-50/50 border border-indigo-200">
                              <h4 className="font-bold text-[#6366F1] mb-4 flex items-center gap-2">
                                 <TrendingUp size={18} strokeWidth={2.5} /> User Goals
                              </h4>
                              <ul className="space-y-3">
                                 {[
                                    "Access market insights instantly",
                                    "Monitor competitors in real time",
                                    "Discover emerging opportunities",
                                    "Receive predictive trend forecasts",
                                    "Generate executive-ready reports"
                                 ].map((goal, i) => (
                                    <li key={i} className="text-xs font-semibold text-text-secondary flex items-start gap-2">
                                       <span className="text-[#6366F1] font-bold">•</span> {goal}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── 5. USER RESEARCH & KEY FINDINGS ────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Discovery Phase
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Discovery</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        To align on user needs and workflows, we conducted qualitative and quantitative research across multiple stakeholder groups and enterprise industries.
                     </p>
                  </div>

                  {/* Sample Size and Activities */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
                     <div className="p-8 glass-card rounded-3xl">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-text-primary mb-4">Research Sample Size</h4>
                        <div className="grid grid-cols-2 gap-4">
                           {[
                              { label: "Stakeholders", val: "28", desc: "CEOs & Strategy Consultants" },
                              { label: "End Users", val: "42", desc: "Analysts & Product Leads" },
                              { label: "Enterprise Orgs", val: "15", desc: "B2B SaaS & Tech Companies" },
                              { label: "Industry Domains", val: "8", desc: "BI, Fintech, Healthcare, etc." }
                           ].map((item, i) => (
                              <div key={i} className="p-4 bg-white/50 border border-slate-100 rounded-2xl">
                                 <span className="block text-2xl font-black text-secondary">{item.val}</span>
                                 <span className="block text-[10px] font-bold text-text-primary uppercase tracking-wide mt-1">{item.label}</span>
                                 <span className="block text-[9px] text-text-secondary mt-0.5">{item.desc}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="p-8 glass-card rounded-3xl flex flex-col justify-between">
                        <div>
                           <h4 className="font-bold text-sm uppercase tracking-wider text-text-primary mb-4">Research Activities</h4>
                           <div className="flex flex-wrap gap-2">
                              {["Stakeholder Interviews", "User Interviews", "Market Analysis", "Competitive Benchmarking", "Workflow Observation", "Analytics Review"].map((act, i) => (
                                 <span key={i} className="px-3 py-1.5 bg-slate-100 text-text-primary border border-slate-200 text-xs font-semibold rounded-lg">
                                    {act}
                                 </span>
                              ))}
                           </div>
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-2xl text-[11px] font-bold text-text-secondary leading-relaxed">
                           <strong className="text-secondary">Note:</strong> Conducted interviews with CEOs, Product Managers, Marketing Directors, Business Analysts, Strategy Consultants, and Investment Researchers to trace the core friction in strategic decision-making.
                        </div>
                     </div>
                  </div>

                  {/* Findings Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        { num: "01", title: "Research Consumes Significant Time", desc: "Teams spend 15–25 hours weekly gathering information from multiple sources.", color: "#0D63CC" },
                        { num: "02", title: "Reports Become Outdated Quickly", desc: "Traditional static reports often become irrelevant within days as market shifts happen rapidly.", color: "#6366F1" },
                        { num: "03", title: "Data Lacks Business Context", desc: "Users receive lots of data but struggle to understand the strategic implications and what actions to take next.", color: "#06B6D4" },
                        { num: "04", title: "Competitive Monitoring is Manual", desc: "Most organizations rely on tedious spreadsheets and manual website checks to track competitor changes.", color: "#EC4899" },
                        { num: "05", title: "Opportunity Signals are Missed", desc: "Critical market opportunities often go unnoticed due to information overload and fragmentation.", color: "#10B981" }
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
                              <Search size={20} className="text-text-secondary opacity-30" />
                           </div>
                           <h4 className="font-bold text-xl text-text-primary mb-3 relative z-10">{insight.title}</h4>
                           <p className="text-xs text-text-secondary font-medium leading-relaxed relative z-10">{insight.desc}</p>
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* ── 6. CHALLENGE STATEMENT ─────────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32 text-center max-w-4xl mx-auto px-4">
                  <div className="p-8 md:p-12 glass-card rounded-[32px] border-2 border-[#0D63CC]/20 hover:border-[#6366F1]/40 relative overflow-hidden group shadow-xl">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none" />
                     <span className="text-[10px] font-bold text-[#0D63CC] uppercase tracking-[0.2em] mb-4 block">Challenge Statement</span>
                     <h2 className="text-xl md:text-3xl font-black text-text-primary leading-relaxed relative z-10">
                        “How might we create an AI-powered platform that continuously monitors markets, predicts future trends, identifies opportunities, and transforms complex data into actionable strategic intelligence?”
                     </h2>
                  </div>
               </section>

               {/* ── 7. PRODUCT STRATEGY & PILLARS ───────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                           <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                              Strategy
                           </span>
                        </div>
                        <h2 className="text-4xl font-bold text-text-primary mb-6">Core Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Pillars</span></h2>
                        <p className="text-text-secondary font-medium mb-8 leading-relaxed">
                           Our product strategy centers on five core pillars, transitioning the platform from a transactional data aggregator into a proactive business intelligence and operational management ecosystem.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           {[
                              { title: "Predictive Intelligence", desc: "Forecast future market movements using AI models.", icon: Compass },
                              { title: "Competitive Intelligence", desc: "Monitor competitors automatically and track strategic movements.", icon: Crosshair },
                              { title: "Opportunity Detection", desc: "Identify emerging trends and opportunities before competitors.", icon: Target },
                              { title: "Strategic Recommendations", desc: "Provide actionable next-step guidance and AI actions.", icon: Brain },
                              { title: "Executive Reporting", desc: "Generate stakeholder-ready insights and executive reports instantly.", icon: FileText }
                           ].map((item, idx) => (
                              <div key={idx} className="p-4 rounded-2xl bg-white/50 border border-slate-200/60 shadow-sm hover:border-[#0D63CC]/40 transition-colors">
                                 <item.icon size={20} className="text-[#0D63CC] mb-3" />
                                 <h5 className="font-bold text-text-primary text-sm mb-1">{item.title}</h5>
                                 <p className="text-xs text-text-secondary">{item.desc}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="relative">
                        <PremiumPlaceholder aspect="aspect-square" label="Intelligence Pillars UI Visualization" glowCls="bg-[#0D63CC]" icon={Brain} />
                     </div>
                  </div>
               </section>

               {/* ── 8. INFORMATION ARCHITECTURE & FEATURE PRIORITIZATION ────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32 space-y-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
                           <span className="text-[10px] font-bold text-[#6366F1] uppercase tracking-widest">
                              Architecture
                           </span>
                        </div>
                        <h2 className="text-3xl font-bold text-text-primary mb-4">Information Architecture</h2>
                        <p className="text-xs text-text-secondary font-medium leading-relaxed">
                           A streamlined navigation structure optimized for fast access to high-impact intelligence modules, enabling executives and strategy leads to traverse sections smoothly.
                        </p>
                     </div>
                     <div className="lg:col-span-8">
                        <div className="p-8 glass-card rounded-[32px] overflow-hidden relative border border-slate-200">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-[#6366F1]/10 blur-[50px] rounded-full pointer-events-none" />
                           <div className="flex flex-col items-center">
                              {/* Root */}
                              <div className="px-6 py-2.5 bg-[#0D63CC] text-white font-bold rounded-xl shadow-lg text-xs z-10 flex items-center gap-2">
                                 <Layout size={14} /> Dashboard (Main Hub)
                              </div>
                              <div className="h-6 w-0.5 bg-slate-300" />
                              
                              {/* Level 1 Grid */}
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                                 {[
                                    { label: "Executive Overview", sub: ["AI Recommendations", "Reports"] },
                                    { label: "Market Intelligence", sub: ["Market Trends", "Industry Signals"] },
                                    { label: "Competitive Hub", sub: ["Competitor Intel", "Alerts Center"] },
                                    { label: "Opportunity Radar", sub: ["Integrations", "Settings"] }
                                 ].map((node, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                       <div className="w-full text-center px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-text-primary">
                                          {node.label}
                                       </div>
                                       <div className="h-4 w-0.5 bg-slate-300" />
                                       <div className="space-y-2 w-full">
                                          {node.sub.map((subNode, j) => (
                                             <div key={j} className="text-center px-3 py-1 bg-white border border-slate-100 rounded shadow-sm text-[10px] font-semibold text-text-secondary">
                                                {subNode}
                                             </div>
                                          ))}
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <GlowDivider />

                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                     <div className="lg:col-span-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                           <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                              Prioritization
                           </span>
                        </div>
                        <h2 className="text-3xl font-bold text-text-primary mb-4">Feature Prioritization</h2>
                        <p className="text-xs text-text-secondary font-medium leading-relaxed">
                           Using a value-vs-effort framework, we prioritized high-impact, high-value modules for the initial product launch to maximize business and user values.
                        </p>
                     </div>
                     <div className="lg:col-span-8">
                        <div className="grid sm:grid-cols-2 gap-4">
                           <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
                              <h4 className="font-bold text-emerald-700 text-sm mb-3 uppercase tracking-wider flex items-center gap-2">
                                 <CheckCircle2 size={16} className="text-emerald-500" /> High Impact & High Priority
                              </h4>
                              <ul className="space-y-3">
                                 {[
                                    { name: "Executive Dashboard", desc: "Centralized overview of market health, opportunity, and risk metrics." },
                                    { name: "Competitor Monitoring", desc: "Automated tracking of competitor pricing, positioning, and launches." },
                                    { name: "Trend Forecast Engine", desc: "Machine learning predictions of future market demand and direction." },
                                    { name: "Opportunity Discovery", desc: "Radar system to uncover high-potential growth opportunities early." },
                                    { name: "AI Insight Generation", desc: "Proactive recommendations backed by explanation reasoning." }
                                 ].map((feat, i) => (
                                    <li key={i} className="text-xs">
                                       <span className="font-bold text-text-primary block">{feat.name}</span>
                                       <span className="text-text-secondary leading-relaxed mt-0.5 block">{feat.desc}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                           <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                              <div className="space-y-4">
                                 <h4 className="font-bold text-text-secondary text-sm uppercase tracking-wider">Other Prioritization Tiers</h4>
                                 <div className="space-y-3">
                                    <div>
                                       <span className="font-bold text-xs text-text-primary">Medium Priority / High Value</span>
                                       <span className="text-[11px] text-text-secondary block mt-0.5">Automated Executive Briefings, Conversational Copilot, scenario simulation.</span>
                                    </div>
                                    <div>
                                       <span className="font-bold text-xs text-text-primary">Low Priority / Strategic Roadmap</span>
                                       <span className="text-[11px] text-text-secondary block mt-0.5">Market Scenario Planning, Multi-Agent strategy simulation.</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="p-3 bg-white border border-slate-100 rounded-xl text-[10px] text-text-secondary leading-relaxed font-bold mt-4">
                                 * Tiering is validated through 42 customer user testing runs and SaaS commercial value mapping.
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── 9. USER PERSONAS ────────────────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
                        <span className="text-[10px] font-bold text-[#6366F1] uppercase tracking-widest">
                           User Research
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Personas</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        We mapped two primary personas representing our strategic stakeholders and primary analytical users.
                     </p>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                     {[
                        {
                           name: "Sarah Thompson",
                           role: "VP Product Strategy",
                           age: "39",
                           bio: "Needs to understand the overall market direction, identify new growth avenues, and validate major roadmap decisions without spending hours on manual reports.",
                           needs: ["Understand market direction", "Identify growth opportunities", "Validate roadmap decisions"],
                           pains: ["Too many fragmented information sources", "Delayed reporting cycles", "Unclear, noisy market signals"],
                           metrics: ["Faster roadmap decisions", "Better market positioning", "Increased product adoption"],
                           color: "#0D63CC"
                        },
                        {
                           name: "David Miller",
                           role: "Market Intelligence Analyst",
                           age: "31",
                           bio: "Responsible for gathering competitive intelligence, monitoring pricing models, and preparing executive briefings. Needs automated extraction tools.",
                           needs: ["Automate daily research", "Generate insights quickly", "Deliver executive-ready reports"],
                           pains: ["Manual data collection & tracking", "Repetitive slide deck reporting", "Limited predictive forecasting capabilities"],
                           metrics: ["Research efficiency & speed", "Report generation speed", "Insight forecasting accuracy"],
                           color: "#6366F1"
                        }
                     ].map((persona, idx) => (
                        <motion.div
                           key={idx}
                           {...fadeIn}
                           className="glass-card rounded-[20px] p-6 md:p-10 lg:p-12 group relative overflow-hidden flex flex-col border-2 border-[#0D63CC]/10 hover:border-[#6366F1]/40 shadow-md"
                        >
                           {/* Dynamic Background Glow */}
                           <div
                              className="absolute -top-24 -right-24 w-80 h-80 blur-[100px] rounded-full transition-all duration-1000 group-hover:scale-150 group-hover:opacity-20 opacity-10 pointer-events-none z-0"
                              style={{ backgroundColor: persona.color }}
                           />

                           <div className="flex items-center gap-8 mb-12 relative z-10">
                              <div className="w-24 h-24 rounded-[16px] overflow-hidden glass-card flex-shrink-0 relative border-2 border-white shadow-2xl flex items-center justify-center bg-slate-100">
                                 <Users size={32} className="text-[#0D63CC]" />
                              </div>
                              <div>
                                 <h4 className="font-bold text-3xl text-gray-800 tracking-tight">{persona.name}</h4>
                                 <p className="text-xs font-semibold text-text-secondary mt-2 opacity-80">{persona.role} • Age {persona.age}</p>
                              </div>
                           </div>

                           <p className="text-base text-gray-800 leading-relaxed mb-12 relative z-10 font-medium">
                              "{persona.bio}"
                           </p>

                           <div className="space-y-6 relative z-10">
                              <div className="p-6 rounded-3xl bg-blue-50/50 border border-blue-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#0D63CC] mb-4 flex items-center gap-2">
                                    <CheckCircle2 size={14} strokeWidth={3} /> Core Needs & Goals
                                 </h5>
                                 <div className="flex flex-wrap gap-3">
                                    {persona.needs.map((n, i) => (
                                       <span key={i} className="px-4 py-2 bg-white/60 rounded-lg border border-blue-100 text-xs font-medium text-text-primary">
                                          {n}
                                       </span>
                                    ))}
                                 </div>
                              </div>

                              <div className="p-6 rounded-3xl bg-rose-50 border border-rose-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-rose-500 mb-4 flex items-center gap-2">
                                    <Activity size={14} strokeWidth={3} /> Critical Pain Points
                                 </h5>
                                 <div className="flex flex-wrap gap-3">
                                    {persona.pains.map((p, i) => (
                                       <span key={i} className="px-4 py-2 bg-white/60 rounded-lg border border-rose-100 text-xs font-medium text-text-primary">
                                          {p}
                                       </span>
                                    ))}
                                 </div>
                              </div>

                              <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100">
                                 <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-emerald-600 mb-4 flex items-center gap-2">
                                    <TrendingUp size={14} strokeWidth={3} /> Success Metrics
                                 </h5>
                                 <div className="flex flex-wrap gap-3">
                                    {persona.metrics.map((m, i) => (
                                       <span key={i} className="px-4 py-2 bg-white/60 rounded-lg border border-emerald-100 text-xs font-medium text-text-primary">
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

               {/* ── 10. USER JOURNEY MAPPING ───────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           User Flow
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">User Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Mapping</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Trace of the user interaction steps through the MarketVisionAI intelligence loop.</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                     {[
                        { num: "01", phase: "Awareness", desc: "Discovers need for centralized market intelligence." },
                        { num: "02", phase: "Exploration", desc: "Evaluates available strategic intelligence tools." },
                        { num: "03", phase: "Onboarding", desc: "Connects data sources and configures custom alerts." },
                        { num: "04", phase: "Monitoring", desc: "Tracks global market developments and signals daily." },
                        { num: "05", phase: "Analysis", desc: "Investigates detailed AI-generated opportunities." },
                        { num: "06", phase: "Decision", desc: "Applies recommendations to active business strategy." },
                        { num: "07", phase: "Reporting", desc: "Generates and shares executive-ready summaries." }
                     ].map((step, i) => (
                        <div key={i} className="p-5 glass-card rounded-2xl hover:border-[#0D63CC]/40 transition-all flex flex-col justify-between min-h-[180px]">
                           <div>
                              <span className="block text-[10px] font-bold text-text-secondary opacity-50">{step.num}</span>
                              <h5 className="font-bold text-sm text-text-primary mt-2">{step.phase}</h5>
                           </div>
                           <p className="text-[11px] text-text-secondary leading-relaxed mt-4">{step.desc}</p>
                        </div>
                     ))}
                  </div>
               </section>

               {/* ── 11. EMPATHY MAP ────────────────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Psychology
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Empathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Mapping</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Evaluating user statements, thoughts, emotions, and behaviors to validate strategy.</p>
                  </div>

                  <div className="max-w-6xl mx-auto relative glass-card rounded-[40px] md:rounded-[60px] p-6 md:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-200 bg-white/30 backdrop-blur-3xl group">
                     {/* Ambient inner neon glows */}
                     <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0D63CC]/15 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#0D63CC]/20 transition-all duration-1000 -translate-x-1/4 -translate-y-1/4" />
                     <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#6366F1]/15 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#6366F1]/20 transition-all duration-1000 translate-x-1/4 translate-y-1/4" />

                     {/* Decorative dashed X background (hidden on mobile) */}
                     <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                        <svg width="100%" height="100%">
                           <line x1="0" y1="0" x2="100%" y2="100%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="12 12" className="opacity-50" />
                           <line x1="100%" y1="0" x2="0" y2="100%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="12 12" className="opacity-50" />
                        </svg>
                     </div>

                     <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 md:gap-12 items-center">

                        {/* Top Row: THINKS */}
                        <div className="md:col-start-2 md:row-start-1 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#0D63CC]/30 via-white/10 to-transparent shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <div className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#0D63CC]/15" />
                              <div className="flex flex-col items-center gap-4 mb-4 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#0D63CC]/30 group-hover/card:border-[#0D63CC] transition-colors duration-500">
                                    <Brain className="w-6 h-6 text-[#0D63CC]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#0D63CC]">think</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "“Are we missing major market opportunities?”",
                                    "“What are our competitors planning next?”",
                                    "“Is this prediction reliable enough to back up our roadmap?”",
                                    "“I wish I could filter out the noise and see real trends.”"
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0D63CC] opacity-50 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* Middle Row Left: SAYS */}
                        <div className="md:col-start-1 md:row-start-2 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-[#6366F1]/30 via-white/10 to-transparent shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
                              <div className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-[#6366F1]/15" />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-[#6366F1]/30 group-hover/card:border-[#6366F1] transition-colors duration-500">
                                    <MessageSquare className="w-6 h-6 text-[#6366F1]" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-[#6366F1]">say</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "“I need reliable, real-time market insights.”",
                                    "“We can't track competitor pricing and messaging manually.”",
                                    "“Strategy reports take too long to write up.”",
                                    "“I need context, not just raw figures.”"
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6366F1] opacity-50 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* Middle Row Center: PROFILE CIRCLE */}
                        <div className="hidden md:flex md:col-start-2 md:row-start-2 justify-center items-center relative z-10 w-full h-full min-h-[240px]">
                           <div className="absolute inset-0 bg-[#0D63CC]/20 blur-[60px] rounded-full animate-pulse z-0" />
                           <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#0D63CC] to-[#6366F1] p-2 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-700">
                              <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(13,99,204,0.2)]">
                                 <BrainCircuit className="w-16 h-16 text-[#0D63CC] opacity-90 animate-pulse-slow" strokeWidth={1.5} />
                              </div>
                           </div>
                        </div>

                        {/* Middle Row Right: FEELS */}
                        <div className="md:col-start-3 md:row-start-2 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-rose-500/30 via-white/10 to-transparent shadow-lg hover:shadow-xl transition-all duration-500 hover:translate-x-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[24px] p-5 md:p-8 flex flex-col items-center md:items-end text-center md:text-right relative overflow-hidden">
                              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-rose-500/15" />
                              <div className="flex flex-col items-center md:items-end gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-rose-500/30 group-hover/card:border-rose-500 transition-colors duration-500">
                                    <Heart className="w-6 h-6 text-rose-500" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-rose-500">feel</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "Overwhelmed by scattered, noisy daily notifications.",
                                    "Pressured to deliver fast, accurate strategic reports.",
                                    "Responsible for high-stakes roadmap failures.",
                                    "Anxious about competitor sneak releases and pricing shifts."
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500 opacity-50 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        {/* Bottom Row: DOES */}
                        <div className="md:col-start-2 md:row-start-3 relative z-10 rounded-[24px] p-[2px] bg-gradient-to-br from-emerald-500/30 via-white/10 to-transparent shadow-lg hover:shadow-xl transition-all duration-500 hover:translate-y-2 overflow-hidden group/card">
                           <div className="bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-3xl w-full h-full rounded-[22px] p-5 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                              <div className="absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none bg-emerald-500/15" />
                              <div className="flex flex-col items-center gap-4 mb-6 relative z-20">
                                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border-2 border-emerald-500/30 group-hover/card:border-emerald-500 transition-colors duration-500">
                                    <Activity className="w-6 h-6 text-emerald-500" strokeWidth={2} />
                                 </div>
                                 <h3 className="text-[20px] font-bold text-text-primary tracking-wide">What do they <span className="text-emerald-500">do</span>?</h3>
                              </div>
                              <ul className="text-left space-y-1 w-full max-w-sm relative z-20">
                                 {[
                                    "Reviews static, outdated market spreadsheets weekly.",
                                    "Tracks competitor websites manually inside tabs.",
                                    "Creates manual presentation decks for leadership.",
                                    "Attempts to run custom keyword scrapes to catch trends."
                                 ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/li rounded-2xl transition-colors">
                                       <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-50 flex-shrink-0" />
                                       <span className="text-[12px] font-medium text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                     </div>
                  </div>
               </section>

               {/* ── 12. AI ARCHITECTURE & FLOW DIAGRAM ─────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           AI Engine
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">AI Processing <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Architecture</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto font-sans">Our multi-layered AI pipeline handles data collection, extraction, modeling, and strategic recommendations.</p>
                  </div>

                  <div className="max-w-4xl mx-auto bg-white/50 border border-slate-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-lg">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0D63CC]/5 blur-[100px] pointer-events-none" />
                     
                     <div className="flex flex-col items-center gap-6 relative z-10">
                        {/* Data Collection Layer */}
                        <div className="w-full bg-[#282360] rounded-2xl p-6 text-center text-white">
                           <h4 className="font-bold mb-4 flex items-center justify-center gap-2 text-white">
                              <Database size={18} className="text-[#00DA99]" /> Data Collection Layer
                           </h4>
                           <div className="flex flex-wrap justify-center gap-3">
                              {["News APIs", "Industry Reports", "Social Listening", "Financial Databases", "Customer Feedback", "Competitor Websites"].map((src, i) => (
                                 <span key={i} className="px-3 py-1 bg-white/10 rounded text-xs font-semibold">{src}</span>
                              ))}
                           </div>
                        </div>

                        <div className="h-6 w-0.5 bg-slate-300" />
                        
                        {/* Processing Layer */}
                        <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                           <h4 className="font-bold text-text-primary mb-4 flex items-center justify-center gap-2">
                              <BrainCircuit size={18} className="text-[#0D63CC]" /> Processing Layer
                           </h4>
                           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {[
                                 { name: "NLP Engine", desc: "Extracts market signals" },
                                 { name: "Sentiment Analysis", desc: "Measures industry sentiment" },
                                 { name: "Trend Detection", desc: "Identifies emerging patterns" },
                                 { name: "Forecast Models", desc: "Predicts future market conditions" }
                              ].map((proc, i) => (
                                 <div key={i} className="p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
                                    <span className="block text-xs font-bold text-text-primary">{proc.name}</span>
                                    <span className="block text-[9px] text-text-secondary mt-0.5">{proc.desc}</span>
                                 </div>
                              ))}
                           </div>
                        </div>

                        <div className="h-6 w-0.5 bg-slate-300" />
                        
                        {/* Intelligence Layer */}
                        <div className="w-full bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
                           <h4 className="font-bold text-[#0D63CC] mb-4 flex items-center justify-center gap-2">
                              <Brain size={18} className="text-[#0D63CC]" /> Intelligence Layer
                           </h4>
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {[
                                 { name: "Opportunity Scoring", desc: "Ranks opportunities based on impact." },
                                 { name: "Risk Assessment", desc: "Detects potential threats." },
                                 { name: "Strategic Recommendations", desc: "Provides AI-generated actions." }
                              ].map((intel, i) => (
                                 <div key={i} className="p-3 bg-white border border-blue-200 rounded-xl shadow-sm text-left">
                                    <span className="block text-xs font-bold text-text-primary flex items-center gap-1.5">
                                       <span className="w-1.5 h-1.5 rounded-full bg-[#0D63CC]" /> {intel.name}
                                    </span>
                                    <span className="block text-[10px] text-text-secondary mt-1">{intel.desc}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── 13. DESIGN SYSTEM & VISUAL IDENTITY ─────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Visual Identity
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design System & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Visuals</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">
                        To match the heavy intelligence requirements, we built a premium dark-infused visual strategy emphasizing information hierarchy, storytelling, and clarity.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4">
                     {/* Colors */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#0D63CC]/10 hover:border-[#6366F1]/40 shadow-xl transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D63CC]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#0D63CC] rounded-full" /> Color Palette
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { bg: 'bg-[#3B82F6]', label: 'Electric Blue', hex: '#3B82F6' },
                              { bg: 'bg-[#6366F1]', label: 'Indigo', hex: '#6366F1' },
                              { bg: 'bg-[#10B981]', label: 'Emerald', hex: '#10B981' },
                              { bg: 'bg-[#F59E0B]', label: 'Amber', hex: '#F59E0B' },
                              { bg: 'bg-[#EF4444]', label: 'Red', hex: '#EF4444' },
                              { bg: 'bg-[#0F172A]', label: 'Slate Dark', hex: '#0F172A' }
                           ].map((color, i) => (
                              <div key={i} className="flex flex-col gap-2 group/color">
                                 <div className={`w-full aspect-square rounded-2xl ${color.bg} shadow-lg border border-white/20 group-hover/color:scale-110 group-hover/color:shadow-2xl transition-all duration-300`} />
                                 <div>
                                    <span className="block text-[10px] font-bold text-text-primary uppercase tracking-wider leading-tight">{color.label}</span>
                                    <span className="block text-[9px] text-text-secondary font-medium uppercase opacity-50 mt-0.5">{color.hex}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Typography */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-[#6366F1]/10 hover:border-[#6366F1]/40 shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#6366F1]/10 blur-[50px] rounded-full pointer-events-none" />
                        <h4 className="font-bold text-xl text-text-primary mb-8 flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#6366F1] rounded-full" /> Typography
                        </h4>

                        <div className="flex-1 flex flex-col justify-center mb-8">
                           <div className="text-[100px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-400 tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">
                              Ii
                           </div>
                        </div>

                        <div className="space-y-4">
                           <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                              <span className="text-3xl font-black text-text-primary tracking-tight">Inter</span>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Primary Font</span>
                           </div>
                           <div className="flex justify-between text-xs font-medium text-text-secondary">
                              <span>Regular</span>
                              <span>SemiBold</span>
                              <span className="font-bold">Bold</span>
                           </div>
                        </div>
                     </div>

                     {/* Design Strategy Principles */}
                     <div className="lg:col-span-4 glass-card rounded-[32px] p-6 lg:p-8 border-2 border-emerald-500/10 hover:border-[#6366F1]/40 shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-1/2 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2" />
                        <h4 className="font-bold text-xl text-text-primary mb-6 flex items-center gap-3">
                           <div className="w-2 h-2 bg-emerald-500 rounded-full" /> Design Strategy
                        </h4>
                        
                        <div className="mb-4">
                           <span className="block text-xs font-bold text-text-primary uppercase tracking-wide">Executive First Approach</span>
                           <p className="text-[11px] text-text-secondary leading-relaxed mt-1">
                              Designed for decision-makers rather than analysts, presenting actionable recommendations and high-level scoring indices first.
                           </p>
                        </div>

                        <div className="space-y-2">
                           <span className="block text-[10px] font-bold uppercase tracking-wider text-text-secondary">Design Principles</span>
                           <div className="flex flex-wrap gap-1.5">
                              {["Information hierarchy", "Visual clarity", "Progressive disclosure", "Actionable insights", "Data storytelling"].map((princ, i) => (
                                 <span key={i} className="text-[10px] font-semibold text-text-primary px-2.5 py-1 bg-slate-100 rounded-lg">
                                    {princ}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ── 14. KEY SCREENS DETAILS ────────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Key Modules
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Screens & Details</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Explore the five core functional modules of the MarketVisionAI strategic ecosystem.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                     {[
                        {
                           num: "01",
                           title: "Executive Intelligence Dashboard",
                           desc: "Displays the centralized strategic summary.",
                           items: ["Market Health Score", "Opportunity Index", "Risk Indicators", "Trend Forecasts", "Competitor Activity Summaries"]
                        },
                        {
                           num: "02",
                           title: "Opportunity Radar",
                           desc: "Detects and tracks emerging industry opportunities.",
                           items: ["Emerging opportunity mapping", "Growth potential scoring", "Industry relevance metric", "AI strategy recommendations"]
                        },
                        {
                           num: "03",
                           title: "Competitive Intelligence Hub",
                           desc: "Keeps continuous tabs on other market players.",
                           items: ["Competitor launch tracking", "Competitor pricing changes", "Product update extraction", "Market positioning mapping"]
                        },
                        {
                           num: "04",
                           title: "Trend Forecast Center",
                           desc: "Predicts direction of demand changes.",
                           items: ["Future market directions", "Demand and supply forecasts", "Growth velocity predictions", "Industry shift triggers"]
                        },
                        {
                           num: "05",
                           title: "AI Recommendation Engine",
                           desc: "Proactively maps concrete business actions.",
                           items: ["Strategic business actions", "Market entry suggestions", "Product feature opportunities", "Revenue generation initiatives"]
                        }
                     ].map((screen, i) => (
                        <div key={i} className="glass-card rounded-3xl p-6 lg:p-8 hover:border-secondary/40 transition-all flex flex-col justify-between">
                           <div>
                              <div className="flex justify-between items-center mb-6">
                                 <span className="text-[10px] font-bold text-text-secondary opacity-50">SCREEN {screen.num}</span>
                                 <Layout size={18} className="text-text-secondary opacity-30" />
                              </div>
                              <h4 className="font-bold text-lg text-text-primary mb-2">{screen.title}</h4>
                              <p className="text-xs text-text-secondary mb-4 leading-relaxed">{screen.desc}</p>
                           </div>
                           <ul className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                              {screen.items.map((item, j) => (
                                 <li key={j} className="text-[11px] font-semibold text-text-secondary flex items-start gap-2">
                                    <CheckCircle2 size={12} className="text-secondary mt-0.5 flex-shrink-0" />
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </section>

               {/* ── 15. DESIGN METHODOLOGY PROCESS PATH ──────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-20 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Methodology
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Design Approach & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Process</span></h2>
                     <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
                        Solving complex intelligence aggregation through systematic user-centric design loops.
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

                     {/* DESKTOP VIEW (Horizontal) */}
                     <div className="hidden lg:flex items-start justify-between relative z-10">
                        {[
                           { num: "01", title: "Empathize", desc: "Interviews with executives, strategists, and analysts.", icon: Heart, type: "dashed" },
                           { num: "02", title: "Define", desc: "Constructing user personas, scoping data source parameters.", icon: Target, type: "dashed" },
                           { num: "03", title: "Ideate", desc: "Information hierarchy mapping, dashboard sketching.", icon: Lightbulb, type: "solid-light" },
                           { num: "04", title: "Design", desc: "High-fidelity visualization widgets, glassmorphism UI.", icon: PenTool, type: "solid-light" },
                           { num: "05", title: "Test", desc: "Usability runs with 42 strategy users, AA verification.", icon: CheckCircle2, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className={`flex flex-col items-center w-48 relative ${i % 2 !== 0 ? 'translate-y-8' : ''} transition-transform duration-1000`}>
                              {/* Circle Node */}
                              <motion.div
                                 {...fadeIn}
                                 transition={{ delay: i * 0.1 }}
                                 className={`w-32 h-32 rounded-full mb-8 flex flex-col items-center justify-center transition-all duration-500 group relative
                                 ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                                 ${step.type === 'solid-light' ? 'border-2 border-[#0D63CC] bg-blue-50 shadow-md' : ''}
                                 ${step.type === 'solid-dark' ? 'bg-[#282360] text-white shadow-xl' : ''}
                                 hover:scale-110 hover:shadow-2xl
                              `}
                              >
                                 <step.icon size={28} strokeWidth={step.type === 'solid-dark' ? 2 : 1.5} className={step.type === 'solid-dark' ? 'text-white' : 'text-[#282360]'} />
                                 <span className={`text-[11px] font-black uppercase tracking-widest mt-2 ${step.type === 'solid-dark' ? 'text-white' : 'text-[#282360]'}`}>
                                    {step.title}
                                 </span>
                              </motion.div>

                              {/* Description */}
                              <motion.p
                                 {...fadeIn}
                                 transition={{ delay: i * 0.1 + 0.2 }}
                                 className="text-[11px] text-text-secondary font-bold text-center leading-relaxed max-w-[140px]"
                              >
                                 {step.desc}
                              </motion.p>

                              {/* Connector Arrows (Aligned to path) */}
                              {i < 4 && (
                                 <div className={`absolute top-16 -right-12 translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center pointer-events-none opacity-40
                                 ${i % 2 === 0 ? 'rotate-[15deg] translate-y-4' : '-rotate-[15deg] -translate-y-4'}
                              `}>
                                    {i === 1 ? (
                                       <Activity size={20} className="text-secondary animate-pulse" />
                                    ) : (
                                       <ArrowLeft size={18} className="text-slate-400 rotate-180" />
                                    )}
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>

                     {/* MOBILE VIEW (Vertical) */}
                     <div className="lg:hidden space-y-16">
                        {[
                           { num: "01", title: "Empathize", desc: "Interviews with executives, strategists, and analysts.", icon: Heart, type: "dashed" },
                           { num: "02", title: "Define", desc: "Constructing user personas, scoping data source parameters.", icon: Target, type: "dashed" },
                           { num: "03", title: "Ideate", desc: "Information hierarchy mapping, dashboard sketching.", icon: Lightbulb, type: "solid-light" },
                           { num: "04", title: "Design", desc: "High-fidelity visualization widgets, glassmorphism UI.", icon: PenTool, type: "solid-light" },
                           { num: "05", title: "Test", desc: "Usability runs with 42 strategy users, AA verification.", icon: CheckCircle2, type: "solid-dark" }
                        ].map((step, i) => (
                           <div key={i} className="flex flex-col items-center relative">
                              <div className={`w-32 h-32 rounded-full mb-6 flex flex-col items-center justify-center 
                              ${step.type === 'dashed' ? 'border-2 border-dashed border-slate-300 bg-white shadow-sm' : ''}
                              ${step.type === 'solid-light' ? 'border-2 border-[#0D63CC] bg-blue-50 shadow-md' : ''}
                              ${step.type === 'solid-dark' ? 'bg-[#282360] text-white shadow-xl' : ''}
                           `}>
                                 <step.icon size={28} strokeWidth={1.5} className={step.type === 'solid-dark' ? 'text-white' : 'text-[#282360]'} />
                                 <span className={`text-[11px] font-black uppercase tracking-widest mt-2 ${step.type === 'solid-dark' ? 'text-white' : 'text-[#282360]'}`}>
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

               {/* ── 16. ACCESSIBILITY CONSIDERATIONS ─────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Inclusivity
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Accessibility & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">WCAG</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Ensuring strategic dashboards are readable, structured, and operable for all enterprise leaders.</p>
                  </div>

                  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                     <div className="p-6 glass-card rounded-2xl flex flex-col justify-between">
                        <div>
                           <h4 className="font-bold text-base text-text-primary mb-3 flex items-center gap-2">
                              <CheckCircle2 size={18} className="text-secondary" /> AA Compliance Standard
                           </h4>
                           <p className="text-xs text-text-secondary leading-relaxed">
                              We designed all typography contrast ratios, interactive buttons, alerts, and visual analytics charts to comfortably exceed WCAG 2.1 AA parameters.
                           </p>
                        </div>
                        <div className="mt-4 text-[10px] font-bold text-text-secondary bg-slate-100 p-2.5 rounded-lg border border-slate-200">
                           Standard: WCAG 2.1 AA Standards Checked via axe-core.
                        </div>
                     </div>
                     <div className="p-6 glass-card rounded-2xl">
                        <h4 className="font-bold text-base text-text-primary mb-3">Key Accessibility Features</h4>
                        <ul className="space-y-2">
                           {["Keyboard Navigation for all dashboards", "Full Screen Reader support with descriptive labels", "High contrast visual display modes", "Color-blind friendly data visualizations", "Responsive reflow down to mobile views"].map((feat, i) => (
                              <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                                 <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-1.5 flex-shrink-0" />
                                 {feat}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </section>

               {/* ── 17. SWOT ANALYSIS ──────────────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-12 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
                        <span className="text-[10px] font-bold text-[#6366F1] uppercase tracking-widest">
                           Strategic Analysis
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">SWOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Analysis</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Evaluating MarketVisionAI's structural position to ensure long-term SaaS viability.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        {
                           title: "Strengths",
                           items: ["AI-powered forecasts", "Real-time monitoring", "Automated insights", "Multi-source tracking"],
                           color: "text-emerald-600",
                           borderGlow: "from-emerald-500/30 via-white/10 to-transparent",
                           innerGlow: "bg-emerald-500/15",
                           borderColor: "border-emerald-500/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Briefcase size={24} strokeWidth={2} className="text-emerald-500 group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Weaknesses",
                           items: ["High data dependency", "Initial learning curve", "Enterprise setup complexity", "Large data processing costs"],
                           color: "text-amber-500",
                           borderGlow: "from-amber-500/30 via-white/10 to-transparent",
                           innerGlow: "bg-amber-500/15",
                           borderColor: "border-amber-500/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Activity size={24} strokeWidth={2} className="text-amber-500 group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Opportunities",
                           items: ["AI adoption growth", "Enterprise transformation", "Predictive analytics demand", "Strategic intelligence expansion"],
                           color: "text-secondary",
                           borderGlow: "from-secondary/30 via-white/10 to-transparent",
                           innerGlow: "bg-secondary/15",
                           borderColor: "border-secondary/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <Search size={24} strokeWidth={2} className="text-secondary group-hover:scale-110 transition-transform duration-500" />
                        },
                        {
                           title: "Threats",
                           items: ["New AI competitors", "Data privacy laws", "AI model commoditization", "Economic uncertainty"],
                           color: "text-rose-500",
                           borderGlow: "from-rose-500/30 via-white/10 to-transparent",
                           innerGlow: "bg-rose-500/15",
                           borderColor: "border-rose-500/30",
                           gradientFill: "from-white/60 to-white/90",
                           icon: <FileText size={24} strokeWidth={2} className="text-rose-500 group-hover:scale-110 transition-transform duration-500" />
                        }
                     ].map((box, i) => (
                        <div key={i} className={`relative rounded-[24px] p-[2px] border border-slate-200 bg-gradient-to-br ${box.borderGlow} shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>

                           {/* Inner Container */}
                           <div className={`bg-gradient-to-b ${box.gradientFill} backdrop-blur-2xl w-full h-full rounded-[22px] p-6 md:p-8 relative z-10 flex flex-col min-h-[300px] overflow-hidden`}>

                              {/* Soft Animated Neon Bloom */}
                              <motion.div
                                 animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                                 className={`absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none ${box.innerGlow}`}
                              />

                              {/* Content */}
                              <div className="flex flex-col gap-4 mb-6 relative z-20">
                                 <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center border-2 ${box.borderColor} transition-colors duration-500`}>
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
                                       <span className="text-[13px] font-semibold text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* ── 18. VISUAL OVERVIEW ─────────────────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Interface
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Overview</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">A responsive B2B layout engineered to look and perform perfectly across screens.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {/* Top row */}
                     <div className="lg:col-span-2">
                        <PremiumPlaceholder aspect="aspect-[4/3]" label="Main Executive Dashboard" glowCls="bg-secondary" icon={Layout} />
                     </div>
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Mobile Intelligence Feed" glowCls="bg-[#6366F1]" icon={Smartphone} />
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Competitor Tracking Detail" glowCls="bg-secondary" icon={Crosshair} />

                     {/* Bottom row */}
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="AI Recommendation Actions" glowCls="bg-[#6366F1]" icon={Brain} />
                     <PremiumPlaceholder aspect="aspect-[3/4]" label="Trend Forecast Engine Charts" glowCls="bg-secondary" icon={Compass} />
                     <div className="lg:col-span-2">
                        <PremiumPlaceholder aspect="aspect-[4/3]" label="Opportunity Radar Grid View" glowCls="bg-[#6366F1]" icon={Target} />
                     </div>
                  </div>
               </section>

               {/* ── 19. SUCCESS METRICS & IMPACT ───────────────────────────────────────────── */}
               <section className="mb-16 md:mb-24 lg:mb-32">
                  <div className="mb-16 text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                           Results
                        </span>
                     </div>
                     <h2 className="text-4xl font-bold text-text-primary mb-4">Success Metrics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Impact</span></h2>
                     <p className="text-text-secondary font-medium max-w-2xl mx-auto">Evaluating the concrete commercial and user metrics achieved within launch.</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                     {[
                        { val: "75%", label: "Research Time Reduction", color: "text-[#0D63CC]" },
                        { val: "5x", label: "Faster Strategic Decisions", color: "text-[#6366F1]" },
                        { val: "84%", label: "Opportunity Forecast Accuracy", color: "text-emerald-500" },
                        { val: "42%", label: "Enterprise Conversion Rate", color: "text-[#0D63CC]" },
                        { val: "89%", label: "Platform User Retention", color: "text-[#6366F1]" }
                     ].map((stat, i) => (
                        <div key={i} className="glass-card rounded-3xl p-6 text-center shadow-sm hover:-translate-y-1 transition-all">
                           <h3 className={`text-3xl font-black mb-2 ${stat.color}`}>{stat.val}</h3>
                           <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{stat.label}</p>
                        </div>
                     ))}
                  </div>
               </section>

               {/* ── 20. OUTCOMES & CONCLUSION ──────────────────────────────────────────────── */}
               <section className="relative mb-20 overflow-hidden">
                  <motion.div
                     {...fadeIn}
                     className="glass-card rounded-[24px] p-6 md:p-10 lg:p-14 relative overflow-hidden group shadow-2xl border-2 border-[#0D63CC]/20 hover:border-[#6366F1]/40"
                  >
                     {/* Ambient inner neon glows */}
                     <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6366F1]/10 blur-[150px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]" />
                     <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0D63CC]/5 blur-[120px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-[2000ms]" />

                     <div className="relative z-10">
                        <div className="mb-12 text-center max-w-4xl mx-auto">
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                                 Epilogue
                              </span>
                           </div>
                           <h2 className="text-4xl font-bold text-text-primary mb-4">
                              From Reactive Decision-Making to <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#6366F1]">Predictive Leadership</span>.
                           </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 mb-20">
                           {[
                              {
                                 title: "Design Decisions",
                                 items: [
                                    "Executive First layout highlighting recommendations first",
                                    "Progressive disclosure for competitor pricing detail views",
                                    "High-contrast charts for color-blind accessibility",
                                    "Clean, responsive layouts optimizing desktop & mobile reflow"
                                 ],
                                 color: "text-[#0D63CC]",
                                 borderGlow: "from-[#0D63CC]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#0D63CC]/15",
                                 borderColor: "border-[#0D63CC]/30 hover:border-[#0D63CC]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#0D63CC] rounded flex-shrink-0 shadow-[0_0_12px_rgba(13,99,204,0.3)]" />
                              },
                              {
                                 title: "Lessons Learned",
                                 items: [
                                    "AI Must Explain Its Reasoning to gain customer trust",
                                    "Simplicity Wins - executives prefer context over raw data tables",
                                    "Real-Time Signals Matter - fast feedback feeds competitiveness",
                                    "Context is Critical - isolated data without context causes confusion"
                                 ],
                                 color: "text-emerald-500",
                                 borderGlow: "from-emerald-500/30 via-white/10 to-transparent",
                                 innerGlow: "bg-emerald-500/15",
                                 borderColor: "border-emerald-500/30 hover:border-emerald-500",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-emerald-500 rounded flex-shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.3)]" />
                              },
                              {
                                 title: "Future Roadmap",
                                 items: [
                                    "Phase 2: AI Copilot Assistant & Conversational briefings",
                                    "Phase 3: Autonomous Competitive Monitoring & Scenario simulation",
                                    "Phase 4: Scenario Planning & Enterprise Knowledge Graph",
                                    "Phase 5: Multi-Agent Intelligence Strategy Framework"
                                 ],
                                 color: "text-[#6366F1]",
                                 borderGlow: "from-[#6366F1]/30 via-white/10 to-transparent",
                                 innerGlow: "bg-[#6366F1]/15",
                                 borderColor: "border-[#6366F1]/30 hover:border-[#6366F1]",
                                 gradientFill: "from-white/60 to-white/90",
                                 icon: <div className="w-5 h-5 bg-[#6366F1] rounded flex-shrink-0 shadow-[0_0_12px_rgba(99,102,241,0.3)]" />
                              }
                           ].map((box, i) => (
                              <div key={i} className={`relative border-1 border-[#0D63CC]/20 hover:border-slate-200 rounded-[22px] p-[2px] bg-gradient-to-br ${box.borderGlow} shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group`}>

                                 {/* Inner Container */}
                                 <div className={`bg-gradient-to-b ${box.gradientFill} backdrop-blur-3xl w-full h-full rounded-[18px] p-5 md:p-8 relative z-10 flex flex-col min-h-[300px] overflow-hidden`}>

                                    {/* Soft Animated Neon Bloom */}
                                    <div className={`absolute top-[-20%] left-[-20%] w-64 h-64 blur-[60px] rounded-full z-0 pointer-events-none ${box.innerGlow}`} />

                                    {/* Content */}
                                    <div className="flex items-center gap-4 mb-6 relative z-20">
                                       <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center border-2 ${box.borderColor} transition-colors duration-500 flex-shrink-0`}>
                                          {box.icon}
                                       </div>
                                       <h4 className="font-bold text-xl text-text-primary leading-tight">
                                          {box.title}
                                       </h4>
                                    </div>

                                    <ul className="space-y-3 flex-1 relative z-20">
                                       {box.items.map((item, j) => (
                                          <li key={j} className="flex items-start gap-3 group/li">
                                             <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-current ${box.color} opacity-50 flex-shrink-0`} />
                                             <span className="text-[13px] font-semibold text-text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed">
                                                {item}
                                             </span>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           ))}
                        </div>

                        {/* Final Conclusion */}
                        <div className="mb-6">
                           <div className="p-6 md:p-8 lg:p-10 glass-card rounded-[24px] border-2 border-[#0D63CC]/10 hover:border-[#0D63CC]/40 shadow-2xl transition-all duration-500 relative overflow-hidden group">
                              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#0D63CC]/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />

                              <h4 className="font-bold text-2xl text-text-primary mb-6 flex items-center gap-4 relative z-10">
                                 <div className="w-8 h-8 bg-[#0D63CC] rounded flex-shrink-0 animate-pulse-slow" />
                                 Final Outcome
                              </h4>
                              <p className="text-sm md:text-base text-text-secondary font-medium leading-relaxed relative z-10">
                                 Market Prophet / MarketVisionAI™ successfully transformed fragmented market research workflows into a centralized AI-powered intelligence ecosystem. The platform enables organizations to anticipate market changes, uncover hidden opportunities, monitor competitors continuously, and make faster strategic decisions backed by real-time predictive insights.
                              </p>
                           </div>
                        </div>

                     </div>
                  </motion.div>
               </section>

               {/* NEXT CASE STUDY NAVIGATION */}
               <section className="border-t border-slate-200/50 flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4">Next Project</span>
                  <Link href="/case-studies/mri-logic" className="group flex flex-col items-center">
                     <h3 className="text-4xl md:text-5xl font-black text-text-primary group-hover:text-primary transition-colors duration-300 mb-6">
                        MRI Logic
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
