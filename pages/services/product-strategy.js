import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Workflow, Map, Network, LayoutTemplate, CheckCircle2, 
  Target, LineChart, Compass, Crosshair, Box, GitMerge, Layers, 
  Search, Building2, TrendingUp, Quote, User, ListChecks,
  ChevronRight, BrainCircuit, Rocket, Lightbulb, Users
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import GlowDivider from '../../components/GlowDivider';

// Animations
const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

// Premium Glass Card Component
const GlassCard = ({ children, className = "", delay = 0, color }) => (
  <motion.div
    {...fadeInUp(delay)}
    className={`glass-card bg-white/10 backdrop-blur-xl rounded-2xl border-[1.5px] border-white/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden group relative ${className}`}
  >
    {color && (
      <>
        {/* Top Right Glow Effect */}
        <div
          className="absolute -top-12 -right-12 w-32 h-32 blur-[40px] rounded-full transition-all duration-700 group-hover:scale-[1.5] group-hover:opacity-60 opacity-20 pointer-events-none z-0"
          style={{ backgroundColor: color }}
        />
        {/* Honeycomb Texture Overlay */}
        <div
          className="absolute -top-12 -right-12 w-40 h-40 transition-all duration-700 group-hover:scale-[1.5] group-hover:opacity-40 opacity-10 pointer-events-none z-0 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10l12-7.5L24 10v15l-12 7.5L0 25V10zm12 25l12-7.5v-15L12 5 0 12.5v15L12 35z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 60%)'
          }}
        />
      </>
    )}
    <div className="relative z-10 w-full h-full">
      {children}
    </div>
  </motion.div>
);

// Floating Tag Component
const FloatingTag = ({ icon: Icon, text, color, className = "", delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute z-20 px-4 py-2 rounded-xl glass-card bg-white/10 backdrop-blur-md border-[1.5px] border-white/40 shadow-md flex items-center gap-2 whitespace-nowrap ${className}`}
    style={{ borderColor: `${color}40` }}
  >
    <Icon size={14} style={{ color }} />
    <span className="text-[11px] font-bold text-text-primary uppercase tracking-wider">{text}</span>
  </motion.div>
);

// Abstract UI Visuals for Strategy (No generic images, just structures)
const FlowDiagram = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col justify-center items-center">
    <div className="w-24 h-8 bg-primary/10 border border-primary/20 rounded-md flex items-center justify-center text-primary text-[10px] font-bold tracking-widest uppercase">Start</div>
    <div className="w-px h-6 bg-slate-300"></div>
    <div className="flex gap-6">
      <div className="w-16 h-10 bg-white border border-slate-200 rounded shadow-sm flex items-center justify-center text-slate-400"><Box size={14} /></div>
      <div className="w-16 h-10 bg-white border border-slate-200 rounded shadow-sm flex items-center justify-center text-slate-400"><Box size={14} /></div>
    </div>
    <div className="w-px h-6 bg-slate-300"></div>
    <div className="w-24 h-8 bg-secondary/10 border border-secondary/20 rounded-md flex items-center justify-center text-secondary text-[10px] font-bold tracking-widest uppercase">Outcome</div>
  </div>
);

const SitemapStructure = () => (
  <div className="w-full h-full bg-white flex flex-col items-center justify-center pt-4">
    <div className="w-24 h-8 bg-slate-800 text-white rounded-md flex items-center justify-center mb-6 relative text-[10px] font-bold tracking-widest uppercase shadow-lg">
      Core
      <div className="absolute top-full left-1/2 w-px h-6 bg-slate-300"></div>
      <div className="absolute top-[32px] left-[15%] right-[15%] h-px bg-slate-300"></div>
    </div>
    <div className="flex w-full justify-between px-8 relative gap-2">
      {[1, 2, 3].map(i => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-px h-4 bg-slate-300 mb-0"></div>
          <div className="w-16 h-6 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-[10px] text-slate-500 font-medium">Node {i}</div>
        </div>
      ))}
    </div>
  </div>
);

const WorkflowMap = () => (
  <div className="w-full h-full bg-slate-50 p-6 flex flex-col items-center justify-center">
     <div className="w-full max-w-xs flex flex-col gap-3">
        <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
           <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-bold">1</div>
           <div className="flex-1 h-2 bg-slate-100 rounded"></div>
        </div>
        <div className="w-px h-3 bg-slate-300 ml-6"></div>
        <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
           <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-[10px] font-bold">2</div>
           <div className="flex-1 h-2 bg-slate-100 rounded"></div>
        </div>
        <div className="w-px h-3 bg-slate-300 ml-6"></div>
        <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-primary/30 shadow-[0_8px_24px_rgba(0,218,153,0.15)] scale-[1.02]">
           <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-white text-[10px] font-bold">3</div>
           <div className="flex-1 h-2 bg-slate-200 rounded"></div>
        </div>
     </div>
  </div>
);

export default function ProductStrategyService() {
  return (
    <>
      <Head>
        <title>Product Strategy & Experience Architecture | Anil Kumar</title>
        <meta name="description" content="Transforming complex product ideas into structured systems, clear user journeys, and scalable experience frameworks that align business goals with user needs." />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-20 md:pt-24 overflow-x-hidden">
        {/* ── SECTION 1 — HERO / INTRO ────────────────────────────────────── */}
        <section className="relative py-10 md:py-16 px-4 md:px-6 overflow-hidden">
          {/* bg glows */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="text-left">
                <motion.div {...fadeInUp(0)} className="flex items-center gap-2 text-[10px] md:text-[12px] font-semibold text-text-secondary uppercase tracking-widest mb-6 md:mb-8">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                  <span>/</span>
                  <span className="text-primary">Product Strategy</span>
                </motion.div>

                <motion.div
                  {...fadeInUp(0.1)}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
                >
                  <Compass size={14} className="text-primary" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">CORE EXPERTISE · PRODUCT STRATEGY</span>
                </motion.div>

                <motion.h1
                  {...fadeInUp(0.2)}
                  className="text-3xl md:text-6xl font-bold text-text-primary mb-6 md:mb-8 leading-[1.1] tracking-tight"
                >
                  Product Strategy & <br />
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Experience Architecture</span>
                </motion.h1>

                <motion.p
                  {...fadeInUp(0.3)}
                  className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed mb-10"
                >
                  Transforming complex product ideas into structured systems, clear user journeys, and scalable experience frameworks that align business goals with user needs.
                </motion.p>
              </div>

              {/* HERO VISUAL — Abstract Structure Composite */}
              <motion.div
                {...fadeInUp(0.4)}
                className="relative aspect-square md:aspect-[4/3] lg:aspect-square group"
              >

                <div className="relative w-full h-full">
                  {/* Sitemap (Back) */}
                  <div className="absolute top-[5%] right-[5%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105 z-0 bg-white">
                    {/* <SitemapStructure /> */}
                      <Image
                          src="/images/services/UXArchitecture.png"
                          alt="UX Architecture"
                          fill
                          className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                      />
                  </div>
                  {/* Flow Diagram (Middle) */}
                  <div className="absolute top-[20%] left-[5%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl -rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105 z-10 bg-slate-50">
                    {/* <FlowDiagram /> */}
                    <Image
                          src="/images/services/InformationArchitecture.png"
                          alt="Information Architecture"
                          fill
                          className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                      />
                  </div>
                  {/* Workflow (Front) */}
                  <div className="absolute bottom-[5%] right-[10%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl rotate-1 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 z-20 bg-white">
                    {/* <WorkflowMap /> */}
                    <Image
                          src="/images/services/UserFlows.png"
                          alt="User Flow"
                          fill
                          className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                      />
                  </div>

                  {/* Floating Tags */}
                  <FloatingTag icon={Network} text="UX Architecture" color="#00DA99" className="top-[10%] left-[-5%]" delay={0} />
                  <FloatingTag icon={Map} text="User Flows" color="#0D63CC" className="bottom-[30%] right-[-5%]" delay={1} />
                  <FloatingTag icon={GitMerge} text="Information Architecture" color="#8B5CF6" className="top-[40%] right-[-10%]" delay={0.5} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — WHAT’S INCLUDED ─────────────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">Core Deliverables</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight">
                What's <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Included</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "End-to-end product strategy", desc: "Aligned with business outcomes and market realities.", color: "#00DA99", icon: Target },
                { title: "UX architecture", desc: "Structured frameworks for complex, multi-feature platforms.", color: "#0D63CC", icon: Network },
                { title: "User journey mapping", desc: "And flow optimization to ensure seamless navigation.", color: "#8B5CF6", icon: Map },
                { title: "Feature prioritization", desc: "Based on impact, usability, and technical feasibility.", color: "#F43F5E", icon: ListChecks },
                { title: "Information architecture", desc: "For clarity and scalability as your platform grows.", color: "#F59E0B", icon: GitMerge },
                { title: "Cross-functional alignment", desc: "Between product, design, and engineering teams.", color: "#0EA5E9", icon: Users }
              ].map((item, i) => (
                <GlassCard key={i} delay={i * 0.1} color={item.color} className="p-8 group hover:-translate-y-2">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-3 relative z-10">{item.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium relative z-10">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── SECTION 4 — SERVICE OVERVIEW + SIDE VISUAL ──────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <motion.div {...fadeInUp(0)}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4 sm:mb-6">
                  <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Service Overview</span>
                </div>
                <p className="text-lg md:text-xl text-text-primary leading-relaxed font-bold mb-8">
                  Most products don’t fail due to lack of effort—they fail due to lack of clarity, structure, and strategic direction.
                </p>
                <div className="space-y-6 text-text-secondary text-[16px] leading-relaxed font-medium">
                  <p>
                    This service focuses on defining how your product should work before it is designed. We bring structure to complexity by aligning user needs, business goals, and technical feasibility into a clear product direction.
                  </p>
                  <p>
                    From defining core workflows to organizing information architecture and user journeys, we create a foundation that ensures every feature, interaction, and decision is intentional.
                  </p>
                  <p className="text-text-primary font-bold">
                    Instead of designing isolated screens, we design connected systems and experiences that scale with your product.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp(0.2)} className="relative group">
                <div className="absolute -inset-4 bg-secondary/5 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative aspect-[4/3] glass-card rounded-2xl overflow-hidden border-[1.5px] border-white/40 shadow-xl bg-white/10 backdrop-blur-xl flex items-center justify-center bg-slate-50">
                   <Image
                      src="/images/services/ExperienceArchitecture.png"
                      alt="Experience Architecture"
                      fill
                      className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                  />
                  {/* Abstract Flow Diagram Visual */}
                  <div className="w-full max-w-sm p-8">
                    <div className="flex flex-col gap-6 items-center">
                       <div className="w-full p-4 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                             <Search size={20} />
                          </div>
                          <div>
                             <div className="h-3 w-20 bg-slate-200 rounded mb-2"></div>
                             <div className="h-2 w-32 bg-slate-100 rounded"></div>
                          </div>
                       </div>
                       
                       <div className="h-8 w-px bg-slate-300 relative">
                          <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-3 rounded-full bg-slate-200 border-2 border-white"></div>
                       </div>
                       
                       <div className="flex gap-6 w-full">
                          <div className="flex-1 p-4 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                <LayoutTemplate size={16} />
                             </div>
                             <div className="h-2 w-16 bg-slate-200 rounded"></div>
                          </div>
                          <div className="flex-1 p-4 bg-white rounded-xl shadow-sm border border-primary/20 shadow-[0_4px_20px_rgba(0,218,153,0.1)] flex flex-col items-center text-center gap-3 relative overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                             <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary relative z-10">
                                <CheckCircle2 size={16} />
                             </div>
                             <div className="h-2 w-16 bg-primary/30 rounded relative z-10"></div>
                          </div>
                       </div>
                    </div>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── SECTION 5 — WHAT WE DELIVER (THE EXPERIENCE) ────────────────────── */}
        <section className="py-8 md:py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 md:mb-24"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">The Experience</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Product Strategy — <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">What We Deliver</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                { num: "01", title: "Product Discovery & Strategy", desc: "Define product vision, goals, and success metrics.", highlight: false, badge: false },
                { num: "02", title: "UX Architecture & System Design", desc: "Structure features, flows, and relationships across the product.", highlight: false, badge: true },
                { num: "03", title: "User Journey Mapping", desc: "Visualizing end-to-end experiences across touchpoints.", highlight: false, badge: false },
                { num: "04", title: "Information Architecture", desc: "Organizing content and features for clarity and usability.", highlight: true, badge: false },
                { num: "05", title: "Feature Prioritization Framework", desc: "Focus on high-impact, user-driven features.", highlight: false, badge: false },
                { num: "06", title: "Workflow & Interaction Mapping", desc: "Designing logical, efficient user paths.", highlight: false, badge: false }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp(i * 0.05)}
                  className={`flex gap-6 p-6 rounded-2xl transition-all duration-300 group border backdrop-blur-md hover:-translate-y-1 ${item.highlight
                    ? 'bg-gradient-to-r from-primary/8 to-secondary/8 border-primary/30 shadow-[0_0_32px_rgba(13,99,204,0.08)] hover:border-primary/50 hover:shadow-[0_8px_32px_rgba(13,99,204,0.12)]'
                    : 'bg-white/40 border-white/60 hover:bg-white/60 hover:border-primary/30 hover:shadow-xl'
                    }`}
                >
                  <span className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors shrink-0">{item.num}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h4 className="text-xl font-bold text-text-primary">{item.title}</h4>
                      {item.highlight && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-[10px] font-black text-primary uppercase tracking-wider">
                          <Network size={10} />
                          Structure
                        </span>
                      )}
                      {item.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/25 text-[10px] font-black text-secondary uppercase tracking-wider">
                          <BrainCircuit size={10} />
                          System Design
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── SECTION 6 — WHY THIS STANDS OUT ─────────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Value Proposition</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Why Choose <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">This Service?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Clarity Before Execution", desc: "Strong foundation before design and development.", icon: Lightbulb, color: "#00DA99" },
                { title: "System-Level Thinking", desc: "Focus on how everything connects—not just screens.", icon: Network, color: "#0D63CC" },
                { title: "Business + User Alignment", desc: "Strategy driven by outcomes, not assumptions.", icon: Target, color: "#8B5CF6" },
                { title: "Scalable Product Structure", desc: "Built for growth, iteration, and complexity.", icon: Layers, color: "#F43F5E" }
              ].map((item, i) => (
                <GlassCard key={i} delay={i * 0.1} color={item.color} className="p-8 text-center flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-3 relative z-10">{item.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium relative z-10">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── SECTION 7 — CLIENT IMPACT (TESTIMONIAL) ─────────────────────── */}
        <section className="py-8 md:py-12 px-6 bg-slate-900/[0.02]">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeInUp(0)} className="glass-card bg-white/10 backdrop-blur-3xl border-[1.5px] border-white/40 p-10 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl group text-center">
              {/* Decorative radial glows */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex justify-center mb-10">
                  <Quote size={60} className="text-primary/20 rotate-180" />
                </div>
                <p className="text-xl md:text-3xl font-medium text-text-primary italic leading-relaxed mb-12">
                  "We had ideas, features, and a roadmap—but no clear structure. After defining the product architecture, everything became aligned, and execution became faster and more focused."
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-xl">
                    <User size={36} className="text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-[16px] uppercase tracking-widest">Product Owner</h4>
                    <p className="text-[11px] font-bold text-text-secondary opacity-60 uppercase tracking-[0.2em] mt-1">SaaS Platform</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <GlowDivider />

        {/* ── SECTION 8 — WHY IT MATTERS ──────────────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">The Big Picture</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight mb-6">
                Why It <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Matters</span>
              </h2>
              <motion.p {...fadeInUp(0.2)} className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium mb-12">
                A well-structured product is the difference between confusion and clarity.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Teams build faster with clear direction",
                "Users navigate effortlessly across the product",
                "Features connect into meaningful workflows",
                "Product decisions become data-driven",
                "The product scales without breaking structure"
              ].map((text, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp(0.3 + i * 0.05)}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[16px] md:text-[18px] font-bold text-text-primary opacity-80 group-hover:opacity-100 transition-opacity">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── SECTION 10 — CTA ────────────────────────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              {...fadeInUp(0)}
              className="w-full py-12 px-8 md:px-16 rounded-3xl glass-card bg-white/10 backdrop-blur-3xl border-[1.5px] border-white/40 flex flex-col md:flex-row items-center justify-between gap-12 group relative overflow-hidden shadow-2xl"
            >
              {/* Border Masking Glow effect using pseudo-element or absolute div */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100 z-0"
                style={{
                  background: 'linear-gradient(135deg, #00DA99 0%, transparent 40%, #0D63CC 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '2px'
                }}
              />

              <div className="max-w-2xl relative z-10 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight leading-[1.1] mb-6">
                  Let’s define a product structure <br className="hidden lg:block" />
                  built for <span className="text-primary">clarity</span> and <span className="text-secondary">scale.</span>
                </h3>
                <p className="text-text-secondary text-sm font-medium">Ready to align your business goals with a proven experience architecture?</p>
              </div>

              <Link href="#contact" className="relative z-10 px-8 py-4 bg-gradient-to-r from-[#0D63CC] to-[#00DA99] text-white rounded-full font-bold text-[14px] sm:text-[15px] hover:scale-105 hover:shadow-[0_12px_32px_rgba(13,99,204,0.3)] transition-all duration-300 shadow-xl whitespace-nowrap uppercase tracking-widest flex items-center gap-3 border-0 cursor-pointer">
                Let’s Work Together
                <ArrowLeft className="rotate-180" size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        <GlowDivider />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
