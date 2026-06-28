import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Sparkles, Brain, Zap, Target, Shield, Layout, LayoutDashboard,
  CheckCircle2, MessageCircle, User, Activity, Lightbulb,
  Settings, Layers, Cpu, Database, Workflow, Search,
  Eye, TrendingUp, Handshake, Briefcase, MousePointer2,
  ChevronRight, Quote
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

export default function AIDesignService() {
  return (
    <>
      <Head>
        <title>AI-Driven Product Experience Design | Anil Kumar</title>
        <meta name="description" content="Designing intelligent, human-centered product experiences where AI enhances decision-making and builds trust." />
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
                  <span className="text-primary">AI Design</span>
                </motion.div>

                <motion.div
                  {...fadeInUp(0.1)}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
                >
                  <Sparkles size={14} className="text-primary" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">CORE EXPERTISE · AI SERVICES</span>
                </motion.div>

                <motion.h1
                  {...fadeInUp(0.2)}
                  className="text-3xl md:text-6xl font-bold text-text-primary mb-6 md:mb-8 leading-[1.1] tracking-tight"
                >
                  AI-Driven Product <br />
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Experience Design</span>
                </motion.h1>

                <motion.p
                  {...fadeInUp(0.3)}
                  className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed mb-10"
                >
                  Designing intelligent, human-centered product experiences where AI enhances decision-making, simplifies workflows, and builds user trust.
                </motion.p>
              </div>

              {/* HERO VISUAL — Project Composite */}
              <motion.div
                {...fadeInUp(0.4)}
                className="relative aspect-square md:aspect-[4/3] lg:aspect-square group"
              >
                <div className="relative w-full h-full">
                  {/* MarketVisionAI (Back) */}
                  <div className="absolute top-[5%] right-[5%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105 z-0">
                    <Image src="/images/marketvisionai.png" alt="MarketVisionAI" fill className="object-cover" />
                  </div>
                  {/* ScanovaHealth (Middle) */}
                  <div className="absolute top-[20%] left-[5%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl -rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105 z-10">
                    <Image src="/images/MarketVision-Card-Folio.png" alt="ScanovaHealth" fill className="object-cover" />
                  </div>
                  {/* Spendora (Front) */}
                  <div className="absolute bottom-[5%] right-[10%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl rotate-1 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 z-20">
                    <Image src="/images/Spendora-Card-Folio.png" alt="Spendora" fill className="object-cover" />
                  </div>

                  {/* Floating Tags */}
                  <FloatingTag icon={Target} text="AI Recommendations" color="#00DA99" className="top-[10%] left-[-5%]" delay={0} />
                  <FloatingTag icon={Eye} text="Explainable AI" color="#0D63CC" className="bottom-[30%] right-[-5%]" delay={1} />
                  <FloatingTag icon={TrendingUp} text="Predictive Insights" color="#8B5CF6" className="top-[40%] right-[-10%]" delay={0.5} />
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
                { title: "AI-Powered UX", desc: "Design intuitive AI experiences that guide users through intelligent, context-aware interactions.", color: "#00DA99", icon: Sparkles },
                { title: "Smart Automation Flows", desc: "Streamline repetitive workflows through intelligent automation that improves efficiency and reduces manual effort.", color: "#0D63CC", icon: Workflow },
                { title: "Predictive & Recommendation Interfaces", desc: "Design recommendation systems that surface timely, relevant insights to support better decision-making.", color: "#8B5CF6", icon: Target },
                { title: "Explainable AI Patterns", desc: "Build transparent AI experiences that clearly communicate system behavior, recommendations, and confidence.", color: "#F43F5E", icon: Eye },
                { title: "Data-Informed UX Decisions", desc: "Leverage analytics, research, and behavioral insights to design experiences grounded in real user needs.", color: "#F59E0B", icon: Database },
                { title: "Scalable AI Design Systems", desc: "Create reusable AI interaction patterns and design foundations that scale across products and teams.", color: "#0EA5E9", icon: Layers }
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
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight mb-6">
                  Why AI Products Fail — And How Design Solves It
                </h3>
                <div className="space-y-6 text-text-secondary text-[16px] leading-relaxed font-medium">
                  <p>
                    Many AI products fail not because the technology is weak, but because users struggle to understand, trust, or effectively interact with intelligent systems.
                  </p>
                  <p>
                    Successful AI experiences require more than sophisticated models. They require thoughtful interaction design, transparency, clear feedback, and workflows that align with human behavior.
                  </p>
                  <p className="text-text-primary font-bold">
                    My approach focuses on designing AI experiences that users understand, trust, and confidently adopt.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp(0.2)} className="relative group">
                <div className="absolute -inset-4 bg-secondary/5 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative aspect-[4/3] glass-card rounded-2xl overflow-hidden border-[1.5px] border-white/40 shadow-xl bg-white/10 backdrop-blur-xl">
                  <Image
                      src="/images/services/AI-DrivenProduct.png"
                      alt="AI-Driven Product"
                      fill
                      className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-[1.01]"
                  />
                  {/* Abstract Dashboard Wireframe Visual */}
                  <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-8">
                    <div className="w-full h-full border-2 border-dashed border-secondary/20 rounded-2xl flex items-center justify-center relative">
                      <LayoutDashboard size={80} strokeWidth={1} className="text-secondary/20" />
                      {/* Floating elements to simulate a dashboard */}
                      <div className="absolute top-4 left-4 w-1/3 h-8 bg-secondary/10 rounded-lg animate-pulse" />
                      <div className="absolute top-4 right-4 w-1/4 h-8 bg-primary/10 rounded-lg animate-pulse" />
                      <div className="absolute bottom-4 left-4 w-1/2 h-24 bg-slate-200/50 rounded-xl" />
                      <div className="absolute bottom-4 right-4 w-1/4 h-24 bg-secondary/5 rounded-xl border border-secondary/10" />
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

        {/* ── SECTION 5 — AI EXPERIENCE (WHAT YOU GET) ────────────────────── */}
        <section className="py-8 md:py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 md:mb-24"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">Core Capabilities</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Core AI Product <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Capabilities</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                { num: "01", title: "AI UX Strategy", desc: "Define product opportunities, AI capabilities, and user-centered interaction models.", highlight: false, badge: false },
                { num: "02", title: "Human-AI Interaction Design", desc: "Design intuitive interactions that balance automation with human control.", highlight: false, badge: false },
                { num: "03", title: "Predictive Experience Design", desc: "Create experiences that proactively surface insights and recommendations.", highlight: false, badge: false },
                { num: "04", title: "Explainable AI", desc: "Improve transparency through understandable recommendations, confidence indicators, and feedback loops.", highlight: true, badge: false },
                { num: "05", title: "Recommendation Systems UX", desc: "Design recommendation experiences that drive engagement while maintaining trust.", highlight: false, badge: true },
                { num: "06", title: "Automation & Workflow Design", desc: "Transform complex operational processes into efficient AI-assisted workflows.", highlight: false, badge: false }
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
                          <Eye size={10} />
                          Transparency
                        </span>
                      )}
                      {item.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/25 text-[10px] font-black text-secondary uppercase tracking-wider">
                          <Target size={10} />
                          Smart Systems
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
                Why This <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Stands Out</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Clarity Over Complexity", desc: "Transform sophisticated AI capabilities into intuitive user experiences.", icon: Zap, color: "#00DA99" },
                { title: "Trust by Design", desc: "Increase user confidence through transparency, explainability, and clear system feedback.", icon: Shield, color: "#0D63CC" },
                { title: "Built for Real Workflows", desc: "Design AI experiences that integrate naturally into existing operational processes.", icon: Layers, color: "#8B5CF6" },
                { title: "Business Outcome Focused", desc: "Ensure AI initiatives deliver measurable value for both users and organizations.", icon: Target, color: "#F43F5E" }
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
                  "Anil helped us simplify our AI workflows and transform complex capabilities into an experience our users immediately understood."
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-xl">
                    <User size={36} className="text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-[16px] uppercase tracking-widest">Representative Client Feedback</h4>
                    <p className="text-[11px] font-bold text-text-secondary opacity-60 uppercase tracking-[0.2em] mt-1">Enterprise AI Platform</p>
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
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">Business Impact</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight mb-6">
                Business Impact of Effective <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">AI Experience Design</span>
              </h2>
              <motion.p {...fadeInUp(0.2)} className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium mb-12">
                Effective AI design ensures intelligent capabilities translate into meaningful user outcomes and measurable business value.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Transform data into actionable insights",
                "Increase product adoption and engagement",
                "Improve user trust and confidence",
                "Reduce cognitive overload",
                "Accelerate operational efficiency",
                "Create competitive differentiation"
              ].map((text, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp(0.3 + i * 0.05)}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ChevronRight size={16} />
                  </div>
                  <span className="text-[16px] md:text-[18px] font-bold text-text-primary opacity-80 group-hover:opacity-100 transition-opacity">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── SECTION 9 — EXAMPLE AI EXPERIENCE AREAS ─────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Experience Areas</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight">
                AI Experiences <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">I Design</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { title: "AI Copilots", icon: Brain, color: "#00DA99" },
                { title: "Intelligent Dashboards", icon: LayoutDashboard, color: "#0D63CC" },
                { title: "Recommendation Engines", icon: Target, color: "#8B5CF6" },
                { title: "Predictive Analytics", icon: TrendingUp, color: "#F43F5E" },
                { title: "Workflow Automation", icon: Workflow, color: "#F59E0B" },
                { title: "Explainable AI", icon: Eye, color: "#0EA5E9" },
                { title: "Conversational AI", icon: MessageCircle, color: "#10B981" },
                { title: "Decision Support Systems", icon: Lightbulb, color: "#6366F1" }
              ].map((area, i) => (
                <GlassCard key={i} delay={i * 0.05} color={area.color} className="p-6 text-center group">
                  <div className="aspect-square w-full rounded-2xl bg-slate-50 mb-6 flex items-center justify-center relative overflow-hidden border border-slate-100 transition-all duration-500">
                    <area.icon size={48} strokeWidth={1.5} style={{ color: area.color }} className="relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold text-text-primary text-[15px] group-hover:text-primary transition-colors relative z-10">{area.title}</h4>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── SECTION 9 — AI PRODUCT DESIGN PROCESS ───────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">Methodology</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight">
                AI Product Design <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Process</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Discover", desc: "Identify business goals, users, and AI opportunities." },
                { step: "02", title: "Define", desc: "Map user journeys, workflows, and AI interactions." },
                { step: "03", title: "Design", desc: "Create transparent, human-centered experiences." },
                { step: "04", title: "Validate", desc: "Test assumptions, usability, and trust patterns." },
                { step: "05", title: "Scale", desc: "Build reusable AI interaction systems." }
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
                      <span className="text-3xl font-black mb-4 block opacity-40 group-hover:opacity-80 transition-opacity" style={{ color: cardColor }}>{phase.step}</span>
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

        {/* ── SECTION 10 — TYPES OF AI PRODUCTS ───────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Product Types</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Types of AI Products <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">I Help Design</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                "AI SaaS Platforms",
                "Enterprise AI Applications",
                "AI Copilots",
                "Predictive Analytics Platforms",
                "Recommendation Systems",
                "Workflow Automation Platforms",
                "AI Dashboards",
                "Healthcare AI Systems"
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

        {/* ── SECTION 11 — SOCIAL PROOF ───────────────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
             <motion.div {...fadeInUp(0)} className="glass-card bg-slate-900/5 backdrop-blur-md border border-slate-200/50 p-8 rounded-3xl">
                <p className="text-sm font-bold text-text-secondary uppercase tracking-[0.2em] mb-4">Trusted Across Complex Domains</p>
                <div className="flex flex-wrap justify-center items-center gap-3 text-text-primary font-medium text-sm md:text-base">
                  <span>Healthcare</span>
                  <span className="text-primary/40">•</span>
                  <span>Enterprise SaaS</span>
                  <span className="text-primary/40">•</span>
                  <span>FinTech</span>
                  <span className="text-primary/40">•</span>
                  <span>EdTech</span>
                  <span className="text-primary/40">•</span>
                  <span>Analytics</span>
                  <span className="text-primary/40">•</span>
                  <span>AI</span>
                </div>
             </motion.div>
          </div>
        </section>

        <GlowDivider />

        {/* ── SECTION 12 — CTA ────────────────────────────────────────────── */}
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

                            <div className="flex-1 max-w-3xl relative z-10 text-center md:text-left pr-0 md:pr-8">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight leading-[1.2] mb-4">
                  Building an AI product, intelligent workflow, or recommendation platform?
                </h3>
                <p className="text-text-secondary text-sm md:text-base font-medium">
                  Let's create experiences that users trust, understand, and rely on.
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
