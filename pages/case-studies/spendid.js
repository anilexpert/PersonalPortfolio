import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, Target, Users, Search, Activity, ShieldCheck, 
  CheckCircle2, Lock, Eye, CheckSquare, FileText, Layout, 
  Briefcase, Zap, ClipboardList, BarChart3, MessageSquare, 
  Building2, Map, ArrowRight, Sparkles, Shield, Compass, Grid,
  PieChart, LineChart, Flame, TrendingUp, HandCoins
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function SpendidCaseStudy() {
   const fadeIn = {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
   }

   // Premium Glass Placeholder Component for reuse (Home Page theme adapted)
   const PremiumPlaceholder = ({ icon: Icon, label, glowCls = "glow-blue", textCls = "text-[#0D63CC]" }) => (
      <div className={`w-full aspect-[4/3] glass-card shadow-strong flex flex-col items-center justify-center overflow-hidden relative group hover:${glowCls} transition-all duration-500`}>
         <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
         <Icon className={`w-14 h-14 mb-6 flex-shrink-0 group-hover:scale-110 drop-shadow-sm transition-transform duration-500 relative z-10 ${textCls} opacity-60`} strokeWidth={1} />
         <span className={`font-black tracking-tighter text-sm uppercase px-8 text-center text-slate-400 relative z-10 opacity-70 group-hover:opacity-100 transition-opacity`}>
            [{label}]
         </span>
      </div>
   );

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
            <title>SPENDiD | Case Study - Predictive Fintech Platform</title>
            <meta name="description" content="SPENDiD - Turning complex financial data into simple, actionable insights." />
         </Head>

         <Navbar />

         <main className="pt-40 pb-32 relative z-10 w-full">
            <div className="max-w-[80rem] mx-auto px-6">
               
               {/* Back Navigation */}
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

               {/* ----------------------------------------------------
                   HERO SECTION
                   ---------------------------------------------------- */}
               <section className="mb-32">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-12 xl:col-span-7 relative z-10">
                        <motion.div 
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           className="inline-flex items-center gap-2 px-5 py-2.5 glass-card mb-8 hover:bg-white/60 transition-colors"
                        >
                           <div className="w-2.5 h-2.5 rounded-full bg-[#0D63CC] animate-pulse shadow-[0_0_8px_rgba(13,99,204,0.5)]" />
                           <span className="text-[10px] font-black tracking-[4px] uppercase text-[#0D63CC]">UX Research Study</span>
                        </motion.div>
                        
                        <motion.h1 
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.1 }}
                           className="text-5xl md:text-[5rem] font-black italic tracking-tighter mb-8 leading-[0.9] text-[#282360]"
                        >
                           SPENDiD
                        </motion.h1>
                        
                        <motion.p 
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.2 }}
                           className="text-md md:text-lg text-slate-600 mb-12 max-w-xl leading-relaxed border-l-4 border-indigo-200 pl-6 font-medium italic"
                        >
                           Financial Empowerment Through Peer Intelligence. Turning complex financial data into simple, actionable insights.
                        </motion.p>

                        <div className="flex flex-wrap gap-10">
                           {['Predictive Budgeting', 'Peer Intelligence', 'Financial Health'].map((point, i) => (
                              <div key={i} className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-[#0D63CC]">
                                    <TrendingUp size={16} strokeWidth={2.5} />
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
                           <BarChart3 size={60} className="text-slate-300 mb-6 drop-shadow-sm" strokeWidth={1} />
                           <span className="font-black italic tracking-tighter text-xl text-center text-slate-400 uppercase leading-none px-12 opacity-50">
                                [Financial Dashboard Showcase]
                           </span>
                        </div>
                     </motion.div>
                  </div>
               </section>

               {/* ----------------------------------------------------
                   01. BACKGROUND & PROBLEM STATEMENT
                   ---------------------------------------------------- */}
               <section className="py-20 section-divide relative z-20">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-5 relative z-10">
                        <div className="text-[14px] font-black italic tracking-widest text-[#0D63CC] mb-4">01 — Background</div>
                        <h2 className="text-[40px] font-black italic tracking-tighter heading-gradient leading-[1.1] mb-6">
                           Simplifying Awareness
                        </h2>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-6">
                           SPENDiD is a fintech platform that simplifies financial awareness by providing personalized budgeting and peer spending insights.
                        </p>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-10">
                           Unlike traditional budgeting tools that rely solely on user inputs, SPENDiD integrates proprietary crowd-sourced spending data and predictive intelligence to help users benchmark their financial behaviors.
                        </p>

                        <div className="glass-card p-6 border-l-4 border-[#0D63CC]">
                           <h4 className="text-[12px] font-black uppercase tracking-[2px] text-[#0D63CC] mb-4">The Challenge</h4>
                           <p className="font-bold italic text-[14px] text-[#282360]">
                              How might we make financial planning intuitive, empowering, and data-driven for users who struggle with traditional budgeting tools?
                           </p>
                        </div>
                     </div>
                     <div className="lg:col-span-7 relative z-20 pt-10 lg:pt-0">
                        <PremiumPlaceholder icon={PieChart} label="Data Complexity vs User Intent" glowCls="glow-blue" textCls="text-[#0D63CC]" />
                     </div>
                  </div>
               </section>

               {/* ----------------------------------------------------
                   02. RESEARCH METHODOLOGIES
                   ---------------------------------------------------- */}
               <section className="py-20 section-divide relative z-20">
                  <div className="text-center mb-16">
                     <div className="text-[14px] font-black italic tracking-widest text-[#00DA99] mb-4">02 — Methodologies</div>
                     <h2 className="text-[46px] font-black italic tracking-tighter heading-gradient leading-[1.1] mb-6">
                        User-Centered Research
                     </h2>
                     <p className="text-[16px] text-slate-600 leading-relaxed font-medium mt-6 max-w-2xl mx-auto italic">
                        To understand user needs, validate the concept, and create a seamless experience, we applied several core research methods.
                     </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                     {[
                        { title: "Competitive Analysis", desc: "Understanding current market standards and differentiation opportunities.", icon: Search, color: "text-[#00DA99]", bg: "bg-[#00DA99]/10" },
                        { title: "User Interviews", desc: "Identifying pain points around budgeting and financial management.", icon: Users, color: "text-[#0D63CC]", bg: "bg-[#0D63CC]/10" },
                        { title: "Affinity Mapping", desc: "Synthesizing insights into actionable design opportunities.", icon: Grid, color: "text-[#8B5CF6]", bg: "bg-[#8B5CF6]/10" },
                        { title: "Personas", desc: "Representing user archetypes and guiding design decisions.", icon: Target, color: "text-rose-500", bg: "bg-rose-500/10" }
                     ].map((method, i) => (
                        <div key={i} className="glass-card p-8 group relative flex flex-col justify-between overflow-hidden hover:-translate-y-2 transition-transform duration-300 hover:shadow-strong">
                           <div>
                              <div className={`w-14 h-14 rounded-2xl ${method.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                 <method.icon className={method.color} size={26} />
                              </div>
                              <h4 className="font-black italic uppercase text-[#282360] tracking-tighter mb-4 text-[18px] group-hover:text-[#0D63CC] transition-colors">{method.title}</h4>
                           </div>
                           <p className="text-[13px] font-bold text-slate-500 italic leading-relaxed">
                              {method.desc}
                           </p>
                        </div>
                     ))}
                  </div>
               </section>

               {/* ----------------------------------------------------
                   03. COMPETITIVE ANALYSIS
                   ---------------------------------------------------- */}
               <section className="py-20 section-divide relative z-20">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-12 xl:col-span-5 relative z-10 pl-4 lg:pl-0">
                        <div className="text-[14px] font-black italic tracking-widest text-[#0D63CC] mb-4">03 — Competitive Analysis</div>
                        <h2 className="text-[40px] font-black italic tracking-tighter heading-gradient leading-[1.1] mb-6">
                           Market Context
                        </h2>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-10 max-w-md">
                           A deeper look into current market leaders revealed crucial feature gaps and clear differentiation opportunities for SPENDiD.
                        </p>

                        <div className="glass-card p-6 border-l-4 border-[#0D63CC]">
                           <h4 className="text-[12px] font-black uppercase tracking-[2px] text-[#0D63CC] mb-4">Opportunity</h4>
                           <p className="font-bold italic text-[14px] text-[#282360]">
                              SPENDiD can differentiate itself by offering peer-based financial insights, predictive budgeting, and a personalized financial health score — all with minimal user input.
                           </p>
                        </div>
                     </div>
                     <div className="lg:col-span-12 xl:col-span-7 relative z-20 pt-10 xl:pt-0 space-y-4">
                        {[
                           { brand: "Mint", str: "Automated expense tracking, easy categorization", weak: "Overwhelming UI, limited predictive insights", learn: "Simplicity and automation are key" },
                           { brand: "YNAB", str: "Strong budgeting discipline, educational", weak: "Complex setup, not beginner-friendly", learn: "Users need immediate, actionable insights" },
                           { brand: "PocketGuard", str: "Easy-to-use interface, focus on disposable income", weak: "Lack of deep analytics or peer benchmarking", learn: "Users appreciate simplicity with guidance" },
                           { brand: "Truebill", str: "Bill tracking and cancellation", weak: "Focuses more on subscriptions than overall budgeting", learn: "Balance automation with personal context" }
                        ].map((comp, idx) => (
                           <div key={idx} className="glass-card p-6 hover:-translate-y-1 transition-transform group hover:shadow-strong">
                              <h3 className="font-black italic text-[20px] text-[#282360] mb-4">{comp.brand}</h3>
                              <div className="grid md:grid-cols-3 gap-6">
                                 <div><span className="block text-[10px] font-black uppercase tracking-widest text-[#00DA99] mb-1">Strengths</span><p className="text-[12px] font-bold text-slate-500 italic leading-relaxed">{comp.str}</p></div>
                                 <div><span className="block text-[10px] font-black uppercase tracking-widest text-rose-500 mb-1">Weaknesses</span><p className="text-[12px] font-bold text-slate-500 italic leading-relaxed">{comp.weak}</p></div>
                                 <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100"><span className="block text-[10px] font-black uppercase tracking-widest text-[#0D63CC] mb-1">Learning</span><p className="text-[12px] font-black text-slate-700 leading-relaxed">{comp.learn}</p></div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* ----------------------------------------------------
                   04. USER INTERVIEWS & INSIGHTS
                   ---------------------------------------------------- */}
               <section className="py-20 section-divide relative z-20">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-7 order-2 lg:order-1 relative z-20 pt-10 lg:pt-0">
                        <div className="glass-card p-10 relative group">
                           <h4 className="text-[12px] font-black uppercase tracking-[2px] text-[#282360] mb-8">Key Insights Synthesized</h4>
                           <div className="space-y-4">
                              {[
                                 "Users want less manual input; automation is a must.",
                                 "Budgeting tools feel too judgmental or “one-size-fits-all.”",
                                 "People are curious about how their spending compares to others in similar situations.",
                                 "Financial advisors want embedded tools to generate leads and offer quick financial overviews."
                              ].map((item, i) => (
                                 <div key={i} className="flex gap-4 items-center bg-white/40 p-4 rounded-2xl border border-white/50 hover:shadow-sm transition-shadow">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00DA99]/10 flex items-center justify-center text-[#00DA99] font-black text-[14px]">
                                       {i + 1}
                                    </div>
                                    <p className="text-[14px] font-bold text-slate-700 italic">{item}</p>
                                 </div>
                              ))}
                           </div>
                           <div className="mt-8 pt-8 border-t border-slate-200">
                              <p className="text-[16px] font-black text-[#0D63CC] italic border-l-4 border-[#0D63CC] pl-5 leading-relaxed">
                                 "Our research uncovered a clear need for a smart, empathetic budgeting assistant — one that understands users’ real-world context and guides them gently toward financial improvement."
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="lg:col-span-5 order-1 lg:order-2 relative z-10 pl-4 lg:pl-0">
                        <div className="text-[14px] font-black italic tracking-widest text-[#00DA99] mb-4">04 — User Interviews</div>
                        <h2 className="text-[40px] font-black italic tracking-tighter heading-gradient leading-[1.1] mb-6">
                           Seeking Empathy
                        </h2>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-10 italic">
                           We sought to understand user challenges, motivations, and expectations around budgeting and financial awareness across diverse demographics.
                        </p>
                        
                        <div className="glass-card p-6 border-l-4 border-[#00DA99]">
                           <h4 className="text-[12px] font-black uppercase tracking-widest text-[#282360] mb-4">Participants (10 Total)</h4>
                           <ul className="space-y-3 font-bold text-[14px] text-slate-600">
                              <li className="flex items-center gap-3"><Users className="text-[#0D63CC] shrink-0" size={18} /> 5 Individual Users (Ages 25–45)</li>
                              <li className="flex items-center gap-3"><Briefcase className="text-[#0D63CC] shrink-0" size={18} /> 3 Small Business Owners</li>
                              <li className="flex items-center gap-3"><ShieldCheck className="text-[#0D63CC] shrink-0" size={18} /> 2 Mortgage Advisors (B2B use case)</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ----------------------------------------------------
                   05. AFFINITY MAPPING
                   ---------------------------------------------------- */}
               <section className="py-20 section-divide relative z-20">
                  <div className="text-center mb-16">
                     <div className="text-[14px] font-black italic tracking-widest text-rose-500 mb-4">05 — Affinity Mapping</div>
                     <h2 className="text-[46px] font-black italic tracking-tighter heading-gradient leading-[1.1] mb-6">
                        Thematic Synthesis
                     </h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                     {[
                        { title: "Simplicity", insight: "Tools should not feel overwhelming.", opp: "Progressive onboarding and minimal data entry.", icon: Sparkles, color: "text-[#0D63CC]" },
                        { title: "Trust", insight: "Data privacy & transparency are crucial.", opp: "Clear data usage explanations, anonymized insights.", icon: Shield, color: "text-[#00DA99]" },
                        { title: "Motivation", insight: "Users want small wins and visual feedback.", opp: "Introduce gamified progress and health scoring.", icon: Flame, color: "text-rose-500" },
                        { title: "Comparison", insight: "Curiosity about peer spending.", opp: "Introduce anonymized peer comparison metrics.", icon: HandCoins, color: "text-indigo-500" }
                     ].map((item, i) => (
                        <div key={i} className="glass-card p-8 group relative overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300">
                           <div className="flex items-center gap-3 mb-6">
                              <item.icon className={item.color} size={24} />
                              <h4 className="font-black italic uppercase text-[#282360] text-[18px]">{item.title}</h4>
                           </div>
                           <div className="mb-6">
                              <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Key Insight</span>
                              <p className="text-[13px] font-bold text-slate-600 leading-relaxed italic border-l-2 border-slate-200 pl-3">{item.insight}</p>
                           </div>
                           <div className="mt-auto pt-4 border-t border-slate-100">
                              <span className={`block text-[10px] font-black uppercase tracking-widest ${item.color} mb-2`}>Opportunity</span>
                              <p className="text-[13px] font-black text-slate-700 leading-relaxed">{item.opp}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="mt-12 glass-card p-10 relative border-t-4 border-[#0D63CC]">
                     <h4 className="text-[12px] font-black uppercase tracking-widest text-[#0D63CC] mb-8 text-center">Top 3 User Needs Discovered</h4>
                     <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white/40 rounded-3xl border border-white hover:bg-white/60 transition-colors">
                           <div className="text-4xl mb-4 font-black italic text-[#0D63CC]/20">01</div>
                           <p className="font-black uppercase text-[15px] mb-3 text-[#282360]">Effortless setup</p>
                           <p className="font-bold italic text-[13px] text-slate-500">"Budgeting should just happen."</p>
                        </div>
                        <div className="text-center p-6 bg-white/40 rounded-3xl border border-white hover:bg-white/60 transition-colors">
                           <div className="text-4xl mb-4 font-black italic text-[#0D63CC]/20">02</div>
                           <p className="font-black uppercase text-[15px] mb-3 text-[#282360]">Relatable insights</p>
                           <p className="font-bold italic text-[13px] text-slate-500">"Show me where I stand."</p>
                        </div>
                        <div className="text-center p-6 bg-white/40 rounded-3xl border border-white hover:bg-white/60 transition-colors">
                           <div className="text-4xl mb-4 font-black italic text-[#0D63CC]/20">03</div>
                           <p className="font-black uppercase text-[15px] mb-3 text-[#282360]">Motivation w/ wins</p>
                           <p className="font-bold italic text-[13px] text-slate-500">"Help me stay consistent."</p>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ----------------------------------------------------
                   06. TARGET AUDIENCES (Personas - As requested)
                   ---------------------------------------------------- */}
               <section className="py-24 section-divide relative z-20">
                  <div className="max-w-[72rem] mx-auto">
                     <motion.div {...fadeIn} className="mb-20">
                        <div className="text-[14px] font-black italic tracking-widest text-slate-400 mb-4 uppercase">
                           06 / Target Audiences
                        </div>
                        <h2 className="text-[44px] md:text-[60px] font-black italic tracking-tighter text-[#282360] leading-none">
                           We created personas to represent our <span className="heading-gradient pb-2 inline-block">SPENDiD users.</span>
                        </h2>
                     </motion.div>

                     <div className="space-y-16">
                        {[
                           {
                              name: 'Emily Parker',
                              age: '32 Years old',
                              role: 'Marketing Executive',
                              location: 'UK / Remote',
                              bio: 'Marketing Executive at a digital agency in London, has 8 years of experience in brand strategy. She values efficiency and automation in her financial life.',
                              goals: [
                                 'Understand and control spending without strict manual rules.',
                                 'Benchmark her lifestyle against similar professional cohorts.',
                                 'Easy-to-use platform with minimal data entry requirements.'
                              ],
                              summary: 'A predictive budgeting system that offers real-time updates and progress tracking. Clear spending categories and future-focused insights.',
                              image: 'C:\\Users\\DELL-566\\.gemini\\antigravity\\brain\\359f35e8-921f-4873-ba94-ad00e91f5de9\\persona_emily_parker_1775828841950.png',
                              type: 'Individual User'
                           },
                           {
                              name: 'Ryan Adams',
                              age: '41 Years old',
                              role: 'Mortgage Advisor',
                              location: 'Australia / B2B',
                              bio: 'Mortgage Advisor with over 15 years in the financial sector. He helps clients assess affordability and manages a diverse portfolio of investors.',
                              goals: [
                                 'Quickly assess client affordability via embeddable tools.',
                                 'Provide data-backed financial health scores as leading metrics.',
                                 'Modular API access to integrate with existing CRM systems.'
                              ],
                              summary: 'A centralized assessment system that offers rapid insights. Modular components that can be customized for specific B2B partner needs.',
                              image: 'C:\\Users\\DELL-566\\.gemini\\antigravity\\brain\\359f35e8-921f-4873-ba94-ad00e91f5de9\\persona_ryan_adams_1775828986547.png',
                              type: 'B2B Partner'
                           }
                        ].map((persona, idx) => (
                           <motion.div 
                              key={idx}
                              {...fadeIn}
                              transition={{ delay: idx * 0.2 }}
                              className="glass-card p-4 md:p-8 relative group overflow-hidden border-2 border-white/60 hover:shadow-strong transition-all duration-500 rounded-[48px]"
                           >
                              <div className="grid lg:grid-cols-12 gap-10 items-start">
                                 {/* Persona Image Wrapper */}
                                 <div className="lg:col-span-4 xl:col-span-4">
                                    <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/20 shadow-md">
                                       <Image 
                                          src={`file:///${persona.image.replace(/\\/g, '/')}`}
                                          alt={persona.name}
                                          fill
                                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                                       />
                                       <div className="absolute top-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-md rounded-2xl border border-white text-[10px] font-black uppercase tracking-widest text-[#282360]">
                                          {persona.type}
                                       </div>
                                    </div>
                                 </div>

                                 {/* Persona Content Wrapper */}
                                 <div className="lg:col-span-8 xl:col-span-8 py-4 px-2">
                                    <div className="mb-8">
                                       <h3 className="text-4xl font-black italic text-[#282360] mb-3 group-hover:text-[#0D63CC] transition-colors">
                                          {persona.name}
                                       </h3>
                                       <div className="flex flex-wrap items-center gap-4 text-slate-400 font-bold italic text-[14px]">
                                          <span>{persona.age}</span>
                                          <div className="w-[1.5px] h-4 bg-slate-200" />
                                          <span>{persona.role}</span>
                                          <div className="w-[1.5px] h-4 bg-slate-200" />
                                          <span>{persona.location}</span>
                                       </div>
                                    </div>

                                    <p className="text-[15px] text-slate-500 font-medium leading-relaxed mb-10 max-w-2xl border-l-4 border-slate-100 pl-6">
                                       {persona.bio}
                                    </p>

                                    <div className="mb-10">
                                       <h4 className="text-[20px] font-black italic text-[#282360] mb-6">User goals</h4>
                                       <div className="space-y-4">
                                          {persona.goals.map((goal, gidx) => (
                                             <div key={gidx} className="flex items-center gap-4 group/goal">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0D63CC] flex items-center justify-center text-white shadow-sm shadow-[#0D63CC]/40 group-hover/goal:scale-110 transition-transform">
                                                   <CheckCircle2 size={16} strokeWidth={3} />
                                                </div>
                                                <p className="text-[14px] font-black text-slate-600 italic">{goal}</p>
                                             </div>
                                          ))}
                                       </div>
                                    </div>

                                    <div className="pt-8 border-t border-slate-100">
                                       <p className="text-[13px] font-bold text-slate-500 italic leading-relaxed max-w-2xl">
                                          {persona.summary}
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </section>


               {/* ----------------------------------------------------
                   07. PROJECT GOALS & ROADMAP
                   ---------------------------------------------------- */}
               <section className="py-20 section-divide relative z-20">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-5 relative z-10 pl-4 lg:pl-0">
                        <div className="text-[14px] font-black italic tracking-widest text-[#00DA99] mb-4">07 — UX Prioritization</div>
                        <h2 className="text-[40px] font-black italic tracking-tighter heading-gradient leading-[1.1] mb-6">
                           Strategic Rollout
                        </h2>
                        
                        <div className="space-y-4 mb-10">
                           <h4 className="text-[12px] font-black uppercase tracking-widest text-[#282360] mb-4">Project Goals</h4>
                           {[
                              "Simplify budgeting through automation and intelligence.",
                              "Provide contextual insights via peer comparison.",
                              "Empower both individuals and businesses through modular access."
                           ].map((item, i) => (
                              <div key={i} className="flex gap-4 items-center bg-white/50 p-4 rounded-2xl border border-white/50 hover:bg-white/80 transition-colors">
                                 <CheckCircle2 className="text-[#00DA99] shrink-0" size={20} />
                                 <p className="text-[14px] font-bold italic text-[#282360]">{item}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="lg:col-span-7 relative z-20 pt-10 lg:pt-0">
                        <div className="glass-card p-10 relative">
                           <h4 className="text-[12px] font-black uppercase tracking-widest text-[#282360] mb-8">Features Roadmap</h4>
                           <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-slate-200">
                              <div className="relative pl-10">
                                 <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#0D63CC] border-4 border-white shadow-sm" />
                                 <h5 className="font-black italic uppercase text-[18px] text-[#282360] mb-2">MVP (Phase 1)</h5>
                                 <p className="font-bold italic text-[14px] text-slate-500">Predictive budgeting, financial health score, and peer comparison dashboard.</p>
                              </div>
                              <div className="relative pl-10">
                                 <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#00DA99] border-4 border-white shadow-sm" />
                                 <h5 className="font-black italic uppercase text-[18px] text-[#282360] mb-2">Phase 2</h5>
                                 <p className="font-bold italic text-[14px] text-slate-500">Embedded widget for advisors, gamified progress tracking.</p>
                              </div>
                              <div className="relative pl-10">
                                 <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-300 border-4 border-white shadow-sm" />
                                 <h5 className="font-black italic uppercase text-[18px] text-slate-400 mb-2">Phase 3</h5>
                                 <p className="font-bold italic text-[14px] text-slate-400">REST API integration, advanced analytics, B2B customization.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ----------------------------------------------------
                   08. INFORMATION ARCHITECTURE & FLOWS
                   ---------------------------------------------------- */}
               <section className="py-20 section-divide relative z-20">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-12 xl:col-span-7 order-2 xl:order-1 relative z-20 pt-10 lg:pt-0">
                        <PremiumPlaceholder icon={Layout} label="Architecture & Flow Diagram" glowCls="glow-blue" textCls="text-[#0D63CC]" />
                     </div>
                     <div className="lg:col-span-12 xl:col-span-5 order-1 xl:order-2 relative z-10 pl-4 lg:pl-0">
                        <div className="text-[14px] font-black italic tracking-widest text-[#0D63CC] mb-4">08 — Information Architecture</div>
                        <h2 className="text-[40px] font-black italic tracking-tighter heading-gradient leading-[1.1] mb-6">
                           Seamless Flows
                        </h2>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-10 max-w-md italic">
                           The architecture focuses on moving the user directly from minimal onboarding into actionable insights.
                        </p>

                        <div className="space-y-6">
                           <div className="glass-card p-6 border-l-4 border-[#0D63CC]">
                              <h4 className="text-[12px] font-black uppercase tracking-[2px] text-[#282360] mb-4">Core IA Structure</h4>
                              <ul className="space-y-2 font-bold text-[13px] text-slate-600 font-mono">
                                 <li>├── Onboarding</li>
                                 <li>├── Dashboard (Summary, Peer Chart)</li>
                                 <li>├── Insights (Forecasts)</li>
                                 <li>└── Settings</li>
                              </ul>
                           </div>
                           <div className="bg-[#00DA99]/5 backdrop-blur-md rounded-3xl p-6 border border-[#00DA99]/20 shadow-sm">
                              <h4 className="text-[12px] font-black uppercase tracking-[2px] text-[#00DA99] mb-4">Example User Flow: Budget Creation</h4>
                              <ol className="list-decimal ml-4 space-y-2 font-bold italic text-[13px] text-slate-600 marker:text-[#00DA99] marker:font-black">
                                 <li>Sign up</li>
                                 <li>Input income & fixed expenses</li>
                                 <li>SPENDiD auto-generates baseline</li>
                                 <li>Peer data adjusts suggestions</li>
                                 <li>User views health score</li>
                              </ol>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ----------------------------------------------------
                   09. VISUAL STYLE & AESTHETICS (As requested)
                   ---------------------------------------------------- */}
               <section className="py-24 section-divide relative z-20 overflow-hidden">
                  <div className="max-w-[70rem] mx-auto">
                     {/* Label & Heading */}
                     <motion.div {...fadeIn} className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                           <div className="w-2 h-2 rounded-full bg-[#0D63CC]" />
                           <span className="text-[11px] font-black tracking-[4px] uppercase text-[#0D63CC]">Visual Style</span>
                        </div>
                        <h2 className="text-[40px] md:text-[54px] font-black italic tracking-tighter leading-[1] text-[#282360] max-w-2xl">
                           Typography and color systems designed for clarity
                        </h2>
                     </motion.div>

                     {/* Typography Showcase */}
                     <motion.div 
                        variants={staggerChildren}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="mb-24"
                     >
                        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
                           <div className="lg:col-span-8">
                              <h1 className="text-[120px] md:text-[200px] font-black italic tracking-tighter text-[#282360] leading-none select-none opacity-[0.08] absolute -left-10 lg:static">
                                 Inter
                              </h1>
                              <h1 className="text-[80px] md:text-[140px] font-black italic tracking-tighter text-[#282360] leading-none relative z-10">
                                 Inter
                              </h1>
                           </div>
                           <div className="lg:col-span-4 lg:text-right">
                              <p className="text-[16px] font-mono text-slate-400 mb-2 uppercase tracking-widest">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                              <p className="text-[16px] font-mono text-slate-400 mb-2 uppercase tracking-widest">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                              <p className="text-[16px] font-mono text-slate-400 uppercase tracking-widest">0 1 2 3 4 5 6 7 8 9</p>
                           </div>
                        </div>

                        {/* Font Scale Table */}
                        <div className="space-y-0 border-t border-slate-200">
                           {[
                              { label: 'Grow Your Performance with Confidence', type: 'Heading 40px', weight: 'font-black italic' },
                              { label: 'Global affiliate network. High-converting offers', type: 'Subheading 24px', weight: 'font-bold italic' },
                              { label: 'Orbia helps advertisers and partners scale performance through reliable partnerships and data-driven marketing.', type: 'Body 16px', weight: 'font-medium' }
                           ].map((font, i) => (
                              <div key={i} className="group py-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/40 transition-colors px-4 -mx-4 rounded-xl">
                                 <span className={`text-[#282360] ${font.weight} ${i === 0 ? 'text-[32px] md:text-[40px]' : i === 1 ? 'text-[20px] md:text-[24px]' : 'text-[16px]'} leading-tight max-w-2xl`}>
                                    {font.label}
                                 </span>
                                 <span className="text-[13px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity">
                                    {font.type}
                                 </span>
                              </div>
                           ))}
                        </div>
                     </motion.div>

                     {/* Color System */}
                     <motion.div 
                        variants={staggerChildren}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                     >
                        {[
                           { name: 'Deep Graphite', hex: '#282360', bg: 'bg-[#282360]', text: 'text-white' },
                           { name: 'Emerald Growth', hex: '#00DA99', bg: 'bg-[#00DA99]', text: 'text-[#282360]' },
                           { name: 'Electric Blue', hex: '#0D63CC', bg: 'bg-[#0D63CC]', text: 'text-white' },
                           { name: 'Sky Clarity', hex: '#A5C9FF', bg: 'bg-[#A5C9FF]', text: 'text-[#282360]' }
                        ].map((color, i) => (
                           <motion.div 
                              key={i}
                              variants={childFade}
                              className="group relative flex flex-col pt-32 pb-6 px-6 rounded-[32px] overflow-hidden shadow-strong hover:scale-[1.02] transition-all duration-500"
                           >
                              <div className={`absolute inset-0 ${color.bg}`} />
                              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                              
                              <div className="relative z-10 mt-auto">
                                 <p className={`text-[14px] font-black italic ${color.text} mb-1 opacity-80 group-hover:opacity-100 transition-opacity`}>
                                    {color.name}
                                 </p>
                                 <p className={`text-[12px] font-mono font-bold ${color.text} opacity-50 group-hover:opacity-100 tracking-tighter transition-opacity uppercase`}>
                                    {color.hex}
                                 </p>
                              </div>

                              {/* Decorative white/black glass inner ring */}
                              <div className={`absolute -top-16 -right-16 w-32 h-32 rounded-full border-[12px] ${color.text === 'text-white' ? 'border-white/10' : 'border-black/5'} group-hover:scale-150 transition-transform duration-1000`} />
                           </motion.div>
                        ))}
                     </motion.div>

                     {/* Additional UI Showcase Grid */}
                     <div className="mt-32 grid md:grid-cols-3 gap-8">
                        <PremiumPlaceholder icon={Layout} label="Onboarding Screen UI" glowCls="glow-blue" textCls="text-[#0D63CC]" />
                        <PremiumPlaceholder icon={PieChart} label="Dashboard & Peer Graph UI" glowCls="glow-green" textCls="text-[#00DA99]" />
                        <PremiumPlaceholder icon={LineChart} label="Insights UI" glowCls="glow-blue" textCls="text-blue-400" />
                     </div>
                  </div>
               </section>


               {/* ----------------------------------------------------
                   10. USABILITY TESTING
                   ---------------------------------------------------- */}
               <section className="py-20 section-divide relative z-20 mb-20">
                  <div className="grid lg:grid-cols-12 gap-16 items-center">
                     <div className="lg:col-span-5 relative z-10 pl-4 lg:pl-0">
                        <div className="text-[14px] font-black italic tracking-widest text-[#0D63CC] mb-4">10 — Usability Test</div>
                        <h2 className="text-[40px] font-black italic tracking-tighter heading-gradient leading-[1.1] mb-6">
                           Validating Assumptions
                        </h2>
                        <p className="text-[16px] text-slate-600 leading-relaxed font-medium mb-10 max-w-md italic">
                           A clickable Figma prototype was tested with 6 users to evaluate the onboarding and dashboard experience. They completed tasks with a 90% success rate.
                        </p>

                        <div className="glass-card p-6 border-l-4 border-[#0D63CC]">
                           <h4 className="text-[12px] font-black uppercase tracking-[2px] text-[#282360] mb-4">Post-Test Iterations</h4>
                           <ul className="space-y-3 font-bold text-[14px] text-slate-600">
                              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#0D63CC] mt-2 shrink-0" /> Added “Change Peer Group” dropdown on dashboard</li>
                              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#0D63CC] mt-2 shrink-0" /> Simplified health score from 5 levels down to 3 (Good/Fair/Poor)</li>
                              <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#0D63CC] mt-2 shrink-0" /> Improved data transparency copy</li>
                           </ul>
                        </div>
                     </div>
                     <div className="lg:col-span-7 relative z-20 pt-10 xl:pt-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0D63CC] to-[#00DA99] rounded-full blur-[80px] opacity-10 animate-pulse pointer-events-none" />
                        <div className="glass-card p-16 text-center relative group hover:glow-blue transition-all duration-500 hover:shadow-strong overflow-hidden border-2 border-white/60">
                           <h3 className="text-3xl font-black italic uppercase text-[#282360] tracking-tighter mb-4">Interactive Prototype</h3>
                           <p className="text-slate-600 font-bold italic mb-8">Test the high-fidelity SPENDiD flows in Figma.</p>
                           <button className="btn-primary inline-flex items-center gap-3 px-8 py-4 relative overflow-hidden text-sm">
                              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                              <span className="font-black italic tracking-tighter uppercase relative z-10">View Figma Prototype</span>
                              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                           </button>
                        </div>
                     </div>
                  </div>
               </section>

               {/* ----------------------------------------------------
                   11. OUTCOMES (DARK PANELS ARE NOT IN HOME THEME, USING PREMIUM GLASS)
                   ---------------------------------------------------- */}
               <motion.section 
                  {...fadeIn} 
                  className="mb-10 relative z-50 rounded-[48px] glass-card p-1 lg:p-2 overflow-hidden shadow-strong border-2 border-white/60"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-[#0D63CC]/5" />
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#00DA99]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0D63CC]/20 to-transparent blur-[120px] rounded-full pointer-events-none" />

                  <div className="relative z-10 px-8 py-16 md:p-20 lg:p-28">
                     <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-6">
                           <span className="inline-block px-5 py-2.5 rounded-full bg-white/60 text-[#282360] border border-white font-black uppercase tracking-[3px] text-[10px] backdrop-blur-md mb-8 shadow-sm">11 — Final Outcome</span>
                           <h2 className="text-5xl md:text-6xl font-black italic text-[#282360] tracking-tighter mb-8 leading-[0.9]">
                              Empowered <br/>
                              <span className="heading-gradient pb-2 inline-block">Intelligence.</span>
                           </h2>
                           <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed font-bold italic mb-12 border-l-4 border-[#0D63CC] pl-6">
                              SPENDiD successfully bridges financial intelligence with empathy. It transforms budgeting from a chore into an empowering, data-driven experience — helping users make smarter financial decisions with confidence.
                           </p>

                           <div className="flex flex-wrap gap-3 mb-12">
                              {['Simplicity builds trust', 'Relatable insights', 'Iterative clarity'].map((outcome, i) => (
                                 <span key={i} className="px-5 py-2.5 bg-white/60 border border-white font-black text-[12px] text-slate-600 uppercase tracking-widest backdrop-blur-md shadow-sm rounded-xl">
                                    {outcome}
                                 </span>
                              ))}
                           </div>

                           <Link href="/#works" className="btn-primary group inline-flex items-center gap-4 px-10 py-5 relative overflow-hidden text-md">
                              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                              <span className="font-black italic tracking-tighter uppercase relative z-10">Return to Portfolio</span>
                              <ArrowLeft size={20} className="relative z-10 group-hover:-translate-x-2 transition-transform" />
                           </Link>
                        </div>

                        <div className="lg:col-span-6 space-y-12 bg-white/40 backdrop-blur-md border border-white p-10 lg:p-14 rounded-[40px] shadow-sm">
                           {[
                              { label: "Data Interaction", val: "Simple", color: "from-[#00DA99] to-teal-400", glow: "group-hover:glow-green" },
                              { label: "User Engagement", val: "Empowered", color: "from-[#0D63CC] to-blue-500", glow: "group-hover:glow-blue" },
                              { label: "Budgeting Feel", val: "Guided", color: "from-[#282360] to-indigo-500", glow: "group-hover:glow-blue" }
                           ].map((stat, i) => (
                              <div key={i} className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pb-8 border-b border-slate-200 last:border-0 last:pb-0 group bg-white/0 p-4 rounded-3xl ${stat.glow} transition-all duration-500`}>
                                 <div className={`text-4xl lg:text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b ${stat.color} group-hover:scale-105 transition-transform duration-500 transform-origin-left drop-shadow-sm min-w-[180px]`}>
                                    {stat.val}
                                 </div>
                                 <div className="w-[2px] h-8 bg-slate-200 hidden md:block" />
                                 <h5 className="text-[16px] font-black uppercase tracking-widest text-[#282360]">{stat.label}</h5>
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
