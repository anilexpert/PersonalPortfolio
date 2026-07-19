import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Workflow, Settings, Users, CheckSquare, Zap,
  Network, LayoutDashboard, GitPullRequest, Repeat, Layers,
  Briefcase, Kanban, Activity, ArrowRight, User, Quote,
  CheckCircle2, Box, Cpu, Target
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
    className={`glass-card bg-white/10 backdrop-blur-xl rounded-2xl border-[1.5px] border-white/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden group relative h-full ${className}`}
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

export default function EnterpriseWorkflowService() {
  return (
    <>
      <Head>
        <title>Enterprise Workflow Optimization | Anil Kumar</title>
        <meta name="description" content="Designing efficient, scalable workflows for complex enterprise systems—streamlining operations, reducing friction, and improving productivity." />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-20 md:pt-24 overflow-x-hidden">
        {/* ── SECTION 1 — HERO / INTRO ────────────────────────────────────── */}
        <section className="relative py-10 md:py-16 px-4 md:px-6 overflow-hidden">
          {/* bg glows */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-3 md:gap-20 items-center">
              <div className="text-left">
                <motion.div {...fadeInUp(0)} className="flex items-center gap-2 text-[10px] md:text-[12px] font-semibold text-text-secondary uppercase tracking-widest mb-6 md:mb-8">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                  <span>/</span>
                  <span className="text-primary">Workflow Optimization</span>
                </motion.div>

                <motion.div
                  {...fadeInUp(0.1)}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2 md:mb-6"
                >
                  <Workflow size={14} className="text-primary" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">CORE EXPERTISE · ENTERPRISE SYSTEMS</span>
                </motion.div>

                <motion.h1
                  {...fadeInUp(0.2)}
                  className="text-2xl md:text-6xl font-bold text-text-primary mb-6 md:mb-8 leading-[1.1] tracking-tight"
                >
                  Enterprise Workflow <br />
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Optimization</span>
                </motion.h1>

                <motion.p
                  {...fadeInUp(0.3)}
                  className="text-base md:text-xl text-text-secondary max-w-xl leading-relaxed mb-5 md:mb-10"
                >
                  Designing efficient, scalable workflows for complex enterprise systems—streamlining operations, reducing friction, and improving productivity across multi-role environments.
                </motion.p>
              </div>

              {/* HERO VISUAL — Project Composite */}
              <motion.div
                {...fadeInUp(0.4)}
                className="relative aspect-square md:aspect-[4/3] lg:aspect-square group"
              >
                <div className="relative w-full h-full">
                  {/* Admin Framework (Back) */}
                  <div className="absolute top-[5%] right-[5%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105 z-0 bg-slate-50 flex items-center justify-center">
                    <Image src="/images/TicketStack-Card-Folio.png" alt="Admin Panel" fill className="object-cover opacity-80" />
                  </div>
                  {/* Data Tool (Middle) */}
                  <div className="absolute top-[20%] left-[5%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl -rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105 z-10 bg-slate-100 flex items-center justify-center">
                    <Image src="/images/MarketVision-Card-Folio.png" alt="Data Tool" fill className="object-cover opacity-90" />
                  </div>
                  {/* SaaS CRM (Front) */}
                  <div className="absolute bottom-[5%] right-[10%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl rotate-1 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 z-20">
                    <Image src="/images/Spendora-Card-Folio.png" alt="Workflow CRM" fill className="object-cover" />
                  </div>

                  {/* Floating Tags */}
                  <FloatingTag icon={GitPullRequest} text="Workflow Optimization" color="#00DA99" className="top-[10%] left-[-5%]" delay={0} />
                  <FloatingTag icon={Users} text="Multi-Role System" color="#0D63CC" className="bottom-[30%] right-[-5%]" delay={1} />
                  <FloatingTag icon={Zap} text="Process Automation" color="#8B5CF6" className="top-[40%] right-[-10%]" delay={0.5} />
                  <FloatingTag icon={Activity} text="Operational Efficiency" color="#F43F5E" className="bottom-[10%] left-[5%]" delay={1.2} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — WHAT’S INCLUDED ─────────────────────────────────── */}
        <section className="py-4 md:py-12 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-5 md:mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">Core Deliverables</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight">
                What's <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Included</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
              {[
                { title: "End-to-End Workflow Analysis", desc: "Analyze operational processes to identify inefficiencies, bottlenecks, and optimization opportunities.", color: "#00DA99", icon: GitPullRequest },
                { title: "Multi-Role System Design", desc: "Design experiences tailored to administrators, managers, operators, and cross-functional teams.", color: "#0D63CC", icon: Users },
                { title: "Task Flow Simplification", desc: "Simplify complex workflows by reducing unnecessary steps, cognitive load, and user friction.", color: "#8B5CF6", icon: Repeat },
                { title: "Automation-Driven UX", desc: "Create intelligent workflows that automate repetitive tasks and improve operational efficiency.", color: "#F43F5E", icon: Zap },
                { title: "Cross-System Integration", desc: "Design seamless experiences across interconnected systems, tools, and platforms.", color: "#F59E0B", icon: Network },
                { title: "Scalable Enterprise Workflows", desc: "Build workflow frameworks that remain efficient as organizations grow and evolve.", color: "#0EA5E9", icon: Layers }
              ].map((item, i) => (
                <GlassCard key={i} delay={i * 0.1} color={item.color} className="p-4 group hover:-translate-y-2">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 md:mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <h4 className="text-base md:text-xl font-bold text-text-primary mb-3 relative z-10">{item.title}</h4>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium relative z-10">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── SECTION 4 — SERVICE OVERVIEW + UI PREVIEW ──────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-24 items-center">
              <motion.div {...fadeInUp(0)}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4 sm:mb-6">
                  <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Service Overview</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight mb-6">
                  Complex Operations Require Better Workflow Design
                </h3>
                <div className="space-y-3 md:space-y-6 text-text-secondary text-[14px] md:text-[16px] leading-relaxed font-medium">
                  <p>
                    Enterprise systems often become difficult to use as products grow. Multiple roles, disconnected processes, and increasing operational complexity create inefficiencies that impact productivity.
                  </p>
                  <p className="text-text-primary font-bold">
                    My approach focuses on simplifying operational workflows, reducing friction, and creating structured experiences that teams can use confidently every day.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp(0.2)} className="relative group">
                <div className="absolute -inset-4 bg-secondary/5 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Visual Showcase: Workflow / Process UI */}
                <div className="relative aspect-[4/3] glass-card rounded-2xl overflow-hidden border-[1.5px] border-white/40 shadow-xl bg-white/10 backdrop-blur-xl p-6 flex flex-col gap-6">

                  {/* Step-by-Step Flow Indicator */}
                  <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-100 relative z-10">
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs">1</div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Input</span>
                    </div>
                    <div className="flex-1 h-px bg-slate-300 relative flex items-center justify-center">
                      <div className="text-slate-300 absolute"><ArrowRight size={14} /></div>
                    </div>
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/20 shadow-sm relative">
                        2
                        <div className="absolute -inset-1 border border-primary/20 rounded-full animate-ping opacity-20"></div>
                      </div>
                      <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Process</span>
                    </div>
                    <div className="flex-1 h-px bg-slate-300 relative flex items-center justify-center">
                      <div className="text-slate-300 absolute"><ArrowRight size={14} /></div>
                    </div>
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs border border-secondary/20 shadow-sm">3</div>
                      <span className="text-[9px] font-bold text-secondary uppercase tracking-widest">Output</span>
                    </div>
                  </div>

                  {/* Mini Kanban Board */}
                  <div className="flex gap-4 flex-1 relative z-10">
                    <div className="flex-1 bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-3">
                      <div className="text-[10px] font-bold text-slate-500 flex justify-between uppercase tracking-wider">To Do <span className="text-slate-400">2</span></div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex flex-col gap-2">
                        <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                        <div className="flex justify-between items-center mt-1">
                          <div className="w-4 h-4 rounded-full bg-slate-300"></div>
                          <div className="h-2 w-8 bg-slate-200 rounded"></div>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 opacity-50">
                        <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                      </div>
                    </div>

                    <div className="flex-1 bg-primary/5 p-3 rounded-xl border border-primary/10 shadow-sm flex flex-col gap-3 scale-105 shadow-[0_8px_24px_rgba(0,218,153,0.12)]">
                      <div className="text-[10px] font-bold text-primary flex justify-between uppercase tracking-wider">In Progress <span className="text-primary/60">1</span></div>
                      <div className="bg-white p-2.5 rounded-lg border border-primary/20 shadow-sm flex flex-col gap-2">
                        <div className="h-2 w-full bg-primary/30 rounded"></div>
                        <div className="flex justify-between items-center mt-1">
                          <div className="w-4 h-4 rounded-full bg-primary/20 border border-primary/30"></div>
                          <div className="h-2 w-10 bg-primary/20 rounded"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-3 opacity-60">
                      <div className="text-[10px] font-bold text-slate-400 flex justify-between uppercase tracking-wider">Done <span className="text-slate-300">5</span></div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/images/services/EnterpriseWorkflow.png"
                    alt="Enterprise Workflow"
                    fill
                    className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent pointer-events-none z-30" />
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
              className="mb-8 md:mb-24"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">Core Capabilities</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Core Workflow <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Optimization Capabilities</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                { num: "01", title: "Workflow Mapping & Optimization", desc: "Analyze existing workflows and redesign them to improve efficiency, usability, and productivity.", highlight: false, badge: false },
                { num: "02", title: "Multi-Role Experience Design", desc: "Create role-specific experiences that support administrators, managers, and operational teams.", highlight: false, badge: true },
                { num: "03", title: "Process Simplification", desc: "Eliminate unnecessary complexity and streamline operational journeys.", highlight: true, badge: false },
                { num: "04", title: "Automation-Driven UX", desc: "Design workflows that intelligently automate repetitive tasks and reduce manual effort.", highlight: false, badge: false },
                { num: "05", title: "System Integration UX", desc: "Create seamless interactions across multiple products, tools, and business systems.", highlight: false, badge: false },
                { num: "06", title: "Operational Dashboard Design", desc: "Surface operational insights, tasks, and performance indicators that support daily decision-making.", highlight: false, badge: false }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp(i * 0.05)}
                  className={`flex gap-4 p-4 md:p-6 rounded-2xl transition-all duration-300 group border backdrop-blur-md hover:-translate-y-1 ${item.highlight
                    ? 'bg-gradient-to-r from-primary/8 to-secondary/8 border-primary/30 shadow-[0_0_32px_rgba(13,99,204,0.08)] hover:border-primary/50 hover:shadow-[0_8px_32px_rgba(13,99,204,0.12)]'
                    : 'bg-white/40 border-white/60 hover:bg-white/60 hover:border-primary/30 hover:shadow-xl'
                    }`}
                >
                  <span className="text-2xl md:text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors shrink-0">{item.num}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h4 className="text-base md:text-xl font-bold text-text-primary">{item.title}</h4>
                      {item.highlight && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-[10px] font-black text-primary uppercase tracking-wider">
                          <CheckSquare size={10} />
                          Simplicity
                        </span>
                      )}
                      {item.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/25 text-[10px] font-black text-secondary uppercase tracking-wider">
                          <Users size={10} />
                          Roles
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
              className="text-center mb-5 md:mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Value Proposition</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Why Choose <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">This Service?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {[
                { title: "Efficiency First", desc: "Optimize workflows to improve speed, accuracy, and operational productivity.", icon: Activity, color: "#00DA99" },
                { title: "Built for Complexity", desc: "Design experiences capable of handling multi-role systems and interconnected processes.", icon: Network, color: "#0D63CC" },
                { title: "User-Centered Operations", desc: "Create workflows based on how teams actually work in real-world environments.", icon: Users, color: "#8B5CF6" },
                { title: "Scalable Process Design", desc: "Build operational experiences that support long-term organizational growth.", icon: LayoutDashboard, color: "#F43F5E" }
              ].map((item, i) => (
                <GlassCard key={i} delay={i * 0.1} color={item.color} className="p-4 md:p-8 text-left lg:text-center flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 md:mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-3 relative z-10">{item.title}</h4>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium relative z-10">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── NEW SECTION — PROCESS ───────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-4 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">Methodology</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight">
                My Workflow Optimization <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Process</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Discover", desc: "Research users, teams, processes, and operational challenges." },
                { step: "02", title: "Analyze", desc: "Identify bottlenecks, redundancies, dependencies, and inefficiencies." },
                { step: "03", title: "Map", desc: "Create workflow diagrams, journey maps, and system relationships." },
                { step: "04", title: "Optimize", desc: "Redesign workflows to reduce friction and improve efficiency." },
                { step: "05", title: "Validate", desc: "Test workflows with stakeholders and refine based on feedback." }
              ].map((phase, i) => {
                const colors = ['#00DA99', '#0D63CC', '#8B5CF6', '#F43F5E', '#F59E0B'];
                const cardColor = colors[i % colors.length];
                return (
                  <motion.div key={i} {...fadeInUp(i * 0.1)} className="relative h-full">
                    {i < 4 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-slate-200 to-transparent z-0" />
                    )}
                    <div className="glass-card bg-white/10 backdrop-blur-xl border-[1.5px] border-white/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden group p-6 rounded-2xl relative z-10 h-full">
                      {/* Top Right Glow Effect */}
                      <div
                        className="absolute -top-12 -right-12 w-32 h-32 blur-[40px] rounded-full transition-all duration-700 group-hover:scale-[1.5] group-hover:opacity-60 opacity-20 pointer-events-none z-0"
                        style={{ backgroundColor: cardColor }}
                      />
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                      <div className="relative z-10">
                        <span className="text-2xl md:text-3xl font-black mb-3 md:mb-4 block opacity-40 group-hover:opacity-80 transition-opacity" style={{ color: cardColor }}>{phase.step}</span>
                        <h4 className="text-lg font-bold text-text-primary mb-2">{phase.title}</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{phase.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── NEW SECTION — COMMON CHALLENGES ───────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-4 md:mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Challenges</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Common Workflow Challenges <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">I Solve</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Teams struggle with inefficient processes", icon: Users },
                { title: "Operational tasks require too many steps", icon: Layers },
                { title: "Users switch between multiple systems", icon: Repeat },
                { title: "Workflows are inconsistent across teams", icon: Network },
                { title: "Manual processes slow productivity", icon: Activity },
                { title: "Enterprise systems feel overwhelming", icon: Target }
              ].map((item, i) => (
                <GlassCard key={i} delay={i * 0.1} color="#0D63CC" className="p-6 text-left flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `#0D63CC15` }}
                  >
                    <item.icon size={20} style={{ color: "#0D63CC" }} />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary relative z-10">{item.title}</h4>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── NEW SECTION — DELIVERABLES ───────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-4 md:mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">Outputs</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Deliverables <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">You'll Receive</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
              {[
                "Workflow Maps",
                "User Journey Maps",
                "Task Flow Diagrams",
                "Process Optimization Recommendations",
                "Information Architecture",
                "Wireframes",
                "Operational Dashboards",
                "UX Documentation"
              ].map((type, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp(i * 0.05)}
                  className="bg-white/40 border border-white/60 p-4 md:p-6 rounded-2xl flex items-center gap-3 hover:bg-white/80 hover:border-primary/30 transition-all hover:shadow-md group h-full"
                >
                  <CheckCircle2 size={18} className="text-primary opacity-50 group-hover:opacity-100 shrink-0" />
                  <span className="font-semibold text-sm md:text-[15px] text-text-primary">{type}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── NEW SECTION — ENTERPRISE DOMAINS I SUPPORT ───────────────────────────── */}
        <section className="py-4 md:py-12 px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...fadeInUp(0)} className="glass-card bg-slate-900/5 backdrop-blur-md border border-slate-200/50 p-4 md:p-8 rounded-xl md:rounded-3xl">
              <p className="text-sm font-bold text-text-secondary uppercase tracking-[0.2em] mb-2 md:mb-4">Enterprise Domains I Support</p>
              <div className="flex flex-wrap justify-center items-center gap-3 text-text-primary font-medium text-sm md:text-base">
                <span>Healthcare Operations</span>
                <span className="text-primary/40">•</span>
                <span>Enterprise SaaS</span>
                <span className="text-primary/40">•</span>
                <span>HR & Workforce Systems</span>
                <span className="text-primary/40">•</span>
                <span>Compliance Platforms</span>
                <span className="text-primary/40">•</span>
                <span>FinTech Operations</span>
                <span className="text-primary/40">•</span>
                <span>Internal Business Tools</span>
              </div>
            </motion.div>
          </div>
        </section>

        <GlowDivider />

        {/* ── SECTION 7 — CLIENT IMPACT (TESTIMONIAL) ─────────────────────── */}
        <section className="py-8 md:py-12 px-6 bg-slate-900/[0.02]">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeInUp(0)} className="glass-card bg-white/10 backdrop-blur-3xl border-[1.5px] border-white/40 p-4 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl group text-center">
              {/* Decorative radial glows */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex justify-center mb-4 md:mb-10">
                  <Quote size={60} className="text-primary/20 rotate-180" />
                </div>
                <p className="text-base md:text-3xl font-medium text-text-primary italic leading-relaxed mb-6 md:mb-12">
                  "Anil redesigned our operational workflows and significantly reduced process complexity. Teams completed tasks faster and collaboration improved across departments."
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-xl">
                    <User size={36} className="text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-[16px] uppercase tracking-widest">Operations Director - SPENDORA</h4>
                    <p className="text-[11px] font-bold text-text-secondary opacity-60 uppercase tracking-[0.2em] mt-1">Kenneth</p>
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
            <div className="mb-4 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">The Big Picture</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight mb-3 md:mb-6">
                Business Impact of <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Workflow Optimization</span>
              </h2>
              <motion.p {...fadeInUp(0.2)} className="text-md md:text-xl text-text-secondary leading-relaxed font-medium mb-12">
                Efficient workflows improve productivity, reduce operational costs, and enable organizations to scale without increasing complexity.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 :gap-x-6 md:gap-x-12 gap-y-3 md:gap-y-6">
              {[
                "Teams complete tasks faster",
                "Errors and rework decrease",
                "Operational costs are reduced",
                "Cross-functional collaboration improves",
                "Enterprise systems become easier to adopt",
                "Organizations scale more efficiently"
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

        {/* ── NEW SECTION — WORKFLOW TYPES ─────────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 md:mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Expertise</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Workflow Types <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">I Design</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
              {[
                "Operational Workflows",
                "Approval Workflows",
                "Compliance Workflows",
                "Healthcare Workflows",
                "HR & Workforce Workflows",
                "Incident Management Flows",
                "Automation Workflows",
                "Multi-Step Enterprise Journeys"
              ].map((type, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp(i * 0.05)}
                  className="bg-white/40 border border-white/60 p-4 md:p-6 rounded-2xl flex items-center gap-3 hover:bg-white/80 hover:border-primary/30 transition-all hover:shadow-md group h-full"
                >
                  <CheckCircle2 size={18} className="text-primary opacity-50 group-hover:opacity-100 shrink-0" />
                  <span className="font-semibold text-sm md:text-[15px] text-text-primary text-left">{type}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── NEW SECTION — RELATED CASE STUDIES ─────────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 md:mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Portfolio</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Related <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Case Studies</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
              {[
                { name: "Carenova", link: "/case-studies/carenova" },
                { name: "OasisPad", link: "/case-studies/oasispad" },
                { name: "TicketStack", link: "/case-studies/ticketstack" },
                { name: "SuperCampus", link: "/case-studies/supercampus" }
              ].map((study, i) => (
                <Link key={i} href={study.link} className="block h-full">
                  <motion.div
                    {...fadeInUp(i * 0.1)}
                    className="bg-white/40 border border-white/60 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-white/80 hover:border-primary/30 transition-all hover:shadow-lg group h-full cursor-pointer"
                  >
                    <Briefcase size={28} className="text-primary opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    <span className="font-bold text-[16px] text-text-primary group-hover:text-primary transition-colors">{study.name}</span>
                    <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider flex items-center gap-1 group-hover:text-secondary transition-colors">
                      View Study <ArrowLeft className="rotate-180 w-3 h-3" />
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── SECTION 10 — CTA ────────────────────────────────────────────── */}
        <section className="py-4 md:py-12 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              {...fadeInUp(0)}
              className="w-full py-4 md:py-12 px-4 md:px-16 rounded-xl md:rounded-3xl glass-card bg-white/10 backdrop-blur-3xl border-[1.5px] border-white/40 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-12 group relative overflow-hidden shadow-2xl"
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

              <div className="flex-1 max-w-3xl relative z-10 text-center md:text-left pr-0 md:pr-8">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight leading-[1.2] mb-4">
                  Need to simplify complex operations, improve team productivity, or redesign inefficient workflows?
                </h3>
                <p className="text-text-secondary text-sm md:text-base font-medium">
                  Let's create enterprise experiences that teams can use with confidence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 mt-8 md:mt-0 shrink-0">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-[#0D63CC] to-[#00DA99] text-white rounded-full font-bold text-[14px] sm:text-[15px] hover:scale-105 hover:shadow-[0_12px_32px_rgba(13,99,204,0.3)] transition-all duration-300 shadow-xl whitespace-nowrap uppercase tracking-widest flex items-center justify-center gap-3 border-0 cursor-pointer">
                  Book a Discovery Call
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-full font-bold text-[14px] sm:text-[15px] hover:scale-105 transition-all duration-300 shadow-md whitespace-nowrap uppercase tracking-widest flex items-center justify-center gap-3 cursor-pointer">
                  Start a Project
                  <ArrowLeft className="rotate-180" size={18} />
                </Link>
              </div>
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
