import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft, LayoutDashboard, Database, CheckCircle2,
  Activity, Layers, Building2, Eye, TrendingUp, Quote, User,
  BarChart3, LineChart, PieChart, Filter, ArrowUpRight, Zap, ListFilter, Target
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

// Stat Card Component for Hero
const StatCard = ({ value, label, trend, className = "", delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute z-20 p-4 rounded-[20px] bg-white/80 backdrop-blur-xl border border-white shadow-xl flex flex-col gap-1 ${className}`}
  >
    <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-wider">
      {label}
      <div className="flex items-center text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded-full text-[9px]">
        <ArrowUpRight size={10} /> {trend}
      </div>
    </div>
    <div className="text-2xl font-black text-slate-800">{value}</div>
  </motion.div>
);

export default function DataIntelligenceService() {
  return (
    <>
      <Head>
        <title>Data Intelligence & Dashboard UX | Anil Kumar</title>
        <meta name="description" content="Designing data-driven interfaces that transform complex information into clear, actionable insights—empowering users to make faster, smarter decisions." />
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
                  <span className="text-primary">Data Experience</span>
                </motion.div>

                <motion.div
                  {...fadeInUp(0.1)}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2 md:mb-6"
                >
                  <BarChart3 size={14} className="text-primary" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">CORE EXPERTISE · DATA EXPERIENCE</span>
                </motion.div>

                <motion.h1
                  {...fadeInUp(0.2)}
                  className="text-2xl md:text-6xl font-bold text-text-primary mb-6 md:mb-8 leading-[1.1] tracking-tight"
                >
                  Data Intelligence & <br />
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Dashboard UX</span>
                </motion.h1>

                <motion.p
                  {...fadeInUp(0.3)}
                  className="text-base md:text-xl text-text-secondary max-w-xl leading-relaxed mb-5 md:mb-10"
                >
                  Designing data-driven interfaces that transform complex information into clear, actionable insights—empowering users to make faster, smarter decisions.
                </motion.p>
              </div>

              {/* HERO VISUAL — Project Composite with KPI Cards */}
              <motion.div
                {...fadeInUp(0.4)}
                className="relative aspect-square md:aspect-[4/3] lg:aspect-square group"
              >
                <div className="relative w-full h-full">
                  {/* Admin Panel (Back) */}
                  <div className="absolute top-[5%] right-[5%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105 z-0">
                    <Image src="/images/TicketStack-Card-Folio.png" alt="Admin Panel Data" fill className="object-cover" />
                  </div>
                  {/* Analytics Platform (Middle) */}
                  <div className="absolute top-[20%] left-[5%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl -rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105 z-10">
                    <Image src="/images/MarketVision-Card-Folio.png" alt="Analytics Platform" fill className="object-cover" />
                  </div>
                  {/* Spendora CRM (Front) */}
                  <div className="absolute bottom-[5%] right-[10%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl rotate-1 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 z-20">
                    <Image src="/images/Spendora-Card-Folio.png" alt="CRM Dashboard" fill className="object-cover" />
                  </div>

                  {/* Floating Tags */}
                  <FloatingTag icon={Activity} text="Real-Time Insights" color="#00DA99" className="top-[5%] left-[-5%]" delay={0} />
                  <FloatingTag icon={LineChart} text="Predictive Analytics" color="#0D63CC" className="bottom-[25%] right-[-10%]" delay={1} />
                  <FloatingTag icon={PieChart} text="Data Visualization" color="#8B5CF6" className="top-[40%] right-[-5%]" delay={0.5} />

                  {/* Floating Stat KPI Cards */}
                  <StatCard value="$1.24M" label="Revenue" trend="12%" className="bottom-[15%] left-[5%]" delay={1.5} />
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
                { title: "Data-Rich Dashboard UX", desc: "Design intuitive dashboards that simplify complex business data and improve decision-making.", color: "#00DA99", icon: LayoutDashboard },
                { title: "Information Hierarchy", desc: "Organize information strategically so users can quickly identify what matters most.", color: "#0D63CC", icon: ListFilter },
                { title: "Real-Time Analytics", desc: "Create dynamic interfaces that surface live metrics and operational insights as conditions change.", color: "#8B5CF6", icon: Activity },
                { title: "KPI-Focused Layouts", desc: "Design clear dashboard structures centered around critical business metrics and outcomes.", color: "#F43F5E", icon: Target },
                { title: "Predictive UI Patterns", desc: "Surface trends, forecasts, anomalies, and recommendations that support proactive decisions.", color: "#F59E0B", icon: LineChart },
                { title: "Scalable Data Systems", desc: "Build dashboard frameworks capable of growing alongside products, users, and datasets.", color: "#0EA5E9", icon: Database }
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

        {/* ── SECTION 4 — SERVICE OVERVIEW + DASHBOARD GRID VISUAL ────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-24 items-center">
              <motion.div {...fadeInUp(0)}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4 sm:mb-6">
                  <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Service Overview</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight mb-6">
                  Great Dashboards Deliver Clarity, Not Complexity
                </h3>
                <div className="space-y-3 md:space-y-6 text-text-secondary text-[14px] md:text-[16px] leading-relaxed font-medium">
                  <p>
                    Many dashboards fail not because of insufficient data, but because users cannot quickly interpret what the information means.
                  </p>
                  <p>
                    Poor hierarchy, excessive visual noise, and fragmented reporting often create confusion instead of insight.
                  </p>
                  <p className="text-text-primary font-bold">
                    My approach focuses on transforming complex datasets into intuitive experiences that help teams understand performance, identify opportunities, and make faster decisions.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp(0.2)} className="relative group">
                <div className="absolute -inset-4 bg-secondary/5 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Abstract Grid-Based Dashboard UI */}
                <div className="relative aspect-[4/3] glass-card rounded-2xl overflow-hidden border-[1.5px] border-white/40 shadow-xl bg-white/10 backdrop-blur-xl flex flex-col bg-slate-50 p-4 gap-4">
                  <Image
                    src="/images/services/DataIntelligence.png"
                    alt="Data Intelligence"
                    fill
                    className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                  />
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <LayoutDashboard size={14} className="text-primary" />
                      </div>
                      <div className="h-4 w-24 bg-slate-200 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-20 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400"><Filter size={12} /></div>
                      <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                    </div>
                  </div>

                  {/* KPI Cards Row */}
                  <div className="flex gap-4">
                    {[
                      { title: "Total Revenue", val: "$45,231", trend: "+12.5%", color: "text-green-500", bg: "bg-green-500/10" },
                      { title: "Active Users", val: "12,403", trend: "+5.2%", color: "text-green-500", bg: "bg-green-500/10" },
                      { title: "Churn Rate", val: "2.4%", trend: "-0.8%", color: "text-primary", bg: "bg-primary/10" }
                    ].map((kpi, i) => (
                      <div key={i} className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-2">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">{kpi.title}</div>
                        <div className="flex justify-between items-end">
                          <div className="text-lg font-black text-slate-800">{kpi.val}</div>
                          <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${kpi.color} ${kpi.bg}`}>
                            {kpi.trend}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Main Data Area (Chart & Table) */}
                  <div className="flex gap-4 flex-1">
                    {/* Chart Area */}
                    <div className="flex-[2] bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex flex-col relative overflow-hidden">
                      <div className="flex justify-between items-center mb-4">
                        <div className="h-3 w-32 bg-slate-200 rounded"></div>
                        <div className="h-2 w-16 bg-slate-100 rounded"></div>
                      </div>
                      {/* Abstract Bar Chart */}
                      <div className="flex-1 flex items-end justify-between gap-2 px-2 mt-4 relative z-10">
                        {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                          <div key={i} className="w-full bg-primary/20 rounded-t-sm transition-all duration-500 hover:bg-primary" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Right Panel / Data Table */}
                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex flex-col gap-3">
                      <div className="h-3 w-20 bg-slate-200 rounded mb-2"></div>
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            <div className="h-2 w-12 bg-slate-300 rounded"></div>
                          </div>
                          <div className="h-2 w-8 bg-slate-200 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent pointer-events-none" />
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
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">The Experience</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Core Dashboard <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">UX Capabilities</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                { num: "01", title: "Dashboard UX Design", desc: "Create intuitive dashboard experiences tailored to operational, analytical, and executive workflows.", highlight: false, badge: false },
                { num: "02", title: "Data Visualization Systems", desc: "Design charts, visual patterns, and reporting structures that communicate information clearly.", highlight: false, badge: true },
                { num: "03", title: "KPI & Metrics Design", desc: "Highlight business-critical indicators that enable faster, more confident decision-making.", highlight: false, badge: false },
                { num: "04", title: "Information Hierarchy", desc: "Structure content strategically to improve scanning, comprehension, and usability.", highlight: true, badge: false },
                { num: "05", title: "Predictive & Insight Interfaces", desc: "Surface trends, anomalies, and recommendations that support proactive business actions.", highlight: false, badge: false },
                { num: "06", title: "Real-Time Data Experiences", desc: "Design interfaces that continuously update and communicate live operational performance.", highlight: false, badge: false }
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
                          <Eye size={10} />
                          Clarity
                        </span>
                      )}
                      {item.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/25 text-[10px] font-black text-secondary uppercase tracking-wider">
                          <BarChart3 size={10} />
                          Visuals
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
                { title: "Clarity Over Overload", desc: "Simplify complex datasets into meaningful, easy-to-understand experiences.", icon: Filter, color: "#00DA99" },
                { title: "Decision-Driven UX", desc: "Design dashboards that support action rather than simply displaying data.", icon: Target, color: "#0D63CC" },
                { title: "Scalable Data Systems", desc: "Create flexible dashboard architectures that evolve with growing business needs.", icon: Layers, color: "#8B5CF6" },
                { title: "Enterprise-Ready Design", desc: "Design solutions capable of handling large datasets and multi-role experiences.", icon: Building2, color: "#F43F5E" }
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
                My Dashboard Design <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Process</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Discover", desc: "Understand users, business goals, KPIs, and decision-making workflows." },
                { step: "02", title: "Define", desc: "Prioritize metrics, reporting needs, and dashboard objectives." },
                { step: "03", title: "Structure", desc: "Establish information hierarchy, layouts, and navigation systems." },
                { step: "04", title: "Visualize", desc: "Design data visualizations optimized for comprehension and action." },
                { step: "05", title: "Validate", desc: "Test usability, comprehension, and decision efficiency." }
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

        {/* ── NEW SECTION — DASHBOARD TYPES ───────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-5 md:mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Expertise</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Dashboard Types <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">I Design</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
              {[
                "Executive Dashboards",
                "Operational Dashboards",
                "Analytics Platforms",
                "BI Dashboards",
                "Financial Dashboards",
                "Healthcare Dashboards",
                "Marketing Analytics",
                "AI Insights Dashboards"
              ].map((type, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp(i * 0.05)}
                  className="bg-white/40 border border-white/60 p-4 md:p-6 rounded-2xl flex items-center gap-3 hover:bg-white/80 hover:border-primary/30 transition-all hover:shadow-md group"
                >
                  <CheckCircle2 size={18} className="text-primary opacity-50 group-hover:opacity-100 shrink-0" />
                  <span className="font-semibold text-sm md:text-[15px] text-text-primary">{type}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── NEW SECTION — CHALLENGES SOLVED ───────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-5 md:mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">Solutions</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Common Dashboard Problems <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">I Solve</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Too much data, not enough clarity", icon: ListFilter },
                { title: "Users cannot identify important metrics", icon: Target },
                { title: "Reporting workflows are fragmented", icon: LayoutDashboard },
                { title: "Dashboards feel overwhelming", icon: Eye },
                { title: "Users struggle to make decisions", icon: Zap },
                { title: "Analytics adoption is low", icon: TrendingUp }
              ].map((item, i) => (
                <GlassCard key={i} delay={i * 0.1} color="#0D63CC" className="p-6 text-left flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `#0D63CC15` }}
                  >
                    <item.icon size={20} style={{ color: "#0D63CC" }} />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mt-2 relative z-10">{item.title}</h4>
                </GlassCard>
              ))}
            </div>
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
                  "Anil redesigned our analytics experience and transformed complex reporting into a dashboard our entire team could understand and act upon."
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-xl">
                    <User size={36} className="text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-[16px] uppercase tracking-widest">Head of MarketVision AI</h4>
                    <p className="text-[11px] font-bold text-text-secondary opacity-60 uppercase tracking-[0.2em] mt-1">Matthew</p>
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
                Business Impact of <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Great Dashboard UX</span>
              </h2>
              <motion.p {...fadeInUp(0.2)} className="text-md md:text-xl text-text-secondary leading-relaxed font-medium mb-12">
                Effective dashboard design transforms raw information into actionable intelligence that improves decision quality across the organization.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 :gap-x-6 md:gap-x-12 gap-y-3 md:gap-y-6">
              {[
                "Users understand performance instantly",
                "Teams make faster, data-driven decisions",
                "Complex datasets become intuitive",
                "Cross-functional teams align around shared metrics",
                "Reporting becomes more efficient",
                "Organizations uncover growth opportunities faster"
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

        {/* ── NEW SECTION — INDUSTRIES ───────────────────────────────────── */}
        <section className="py-4 md:py-12 px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...fadeInUp(0)} className="glass-card bg-slate-900/5 backdrop-blur-md border border-slate-200/50 p-4 md:p-8 rounded-xl md:rounded-3xl">
              <p className="text-sm font-bold text-text-secondary uppercase tracking-[0.2em] mb-2 md:mb-4">Industries I Specialize In</p>
              <div className="flex flex-wrap justify-center items-center gap-3 text-text-primary font-medium text-sm md:text-base">
                <span>Healthcare Analytics</span>
                <span className="text-primary/40">•</span>
                <span>Enterprise SaaS</span>
                <span className="text-primary/40">•</span>
                <span>FinTech</span>
                <span className="text-primary/40">•</span>
                <span>Marketing Analytics</span>
                <span className="text-primary/40">•</span>
                <span>AI Platforms</span>
                <span className="text-primary/40">•</span>
                <span>Operations Management</span>
              </div>
            </motion.div>
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
                { name: "MarketVisionAI", link: "/case-studies/marketvisionai" },
                { name: "Spendora", link: "/case-studies/spendora" },
                { name: "Carenova", link: "/case-studies/carenova" },
                { name: "TicketStack", link: "/case-studies/ticketstack" }
              ].map((study, i) => (
                <Link key={i} href={study.link} className="block">
                  <motion.div
                    {...fadeInUp(i * 0.1)}
                    className="bg-white/40 border border-white/60 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-white/80 hover:border-primary/30 transition-all hover:shadow-lg group h-full cursor-pointer"
                  >
                    <BarChart3 size={28} className="text-primary opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
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
                  Need a dashboard that transforms complex information into actionable insights?
                </h3>
                <p className="text-text-secondary text-sm md:text-base font-medium">
                  Let's design data experiences your teams can understand, trust, and act on.
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
