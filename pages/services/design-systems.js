import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Component, Layers, Palette, Code2,
  BookOpen, AlignLeft, LayoutGrid, Type, Maximize, Target,
  CheckCircle2, Box, PenTool, Hexagon, Quote, User, Fingerprint
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

export default function DesignSystemsService() {
  return (
    <>
      <Head>
        <title>Design Systems & UI Engineering | Anil Kumar</title>
        <meta name="description" content="Building scalable, consistent, and high-performance design systems that bridge design and development." />
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
                  <span className="text-primary">Design Systems</span>
                </motion.div>

                <motion.div
                  {...fadeInUp(0.1)}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
                >
                  <Component size={14} className="text-primary" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">CORE EXPERTISE · DESIGN SYSTEMS</span>
                </motion.div>

                <motion.h1
                  {...fadeInUp(0.2)}
                  className="text-3xl md:text-6xl font-bold text-text-primary mb-6 md:mb-8 leading-[1.1] tracking-tight"
                >
                  Design Systems & <br />
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">UI Engineering</span>
                </motion.h1>

                <motion.p
                  {...fadeInUp(0.3)}
                  className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed mb-10"
                >
                  Building scalable, consistent, and high-performance design systems that bridge design and development—ensuring faster delivery, better collaboration, and long-term product growth.
                </motion.p>
              </div>

              {/* HERO VISUAL — Project Composite */}
              <motion.div
                {...fadeInUp(0.4)}
                className="relative aspect-square md:aspect-[4/3] lg:aspect-square group"
              >
                <div className="relative w-full h-full">
                  {/* Mobile App Frame (Back) */}
                  <div className="absolute top-[5%] right-[5%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105 z-0 bg-slate-50 flex items-center justify-center">
                    <Image src="/images/OasisPad-Card-Folio.png" alt="OasisPad Frame" fill className="object-cover opacity-80" />
                  </div>
                  {/* Analytics Frame (Middle) */}
                  <div className="absolute top-[20%] left-[5%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl -rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105 z-10 bg-slate-100 flex items-center justify-center">
                    <Image src="/images/TicketStack-Card-Folio.png" alt="TicketStack Frame" fill className="object-cover opacity-90" />
                  </div>
                  {/* SaaS App Frame (Front) */}
                  <div className="absolute bottom-[5%] right-[10%] w-[75%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/60 shadow-2xl rotate-1 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 z-20">
                    <Image src="/images/Spendora-Card-Folio.png" alt="Spendora UI" fill className="object-cover" />
                  </div>

                  {/* Floating Tags */}
                  <FloatingTag icon={Palette} text="Design Tokens" color="#00DA99" className="top-[10%] left-[-5%]" delay={0} />
                  <FloatingTag icon={Box} text="Component Library" color="#0D63CC" className="bottom-[30%] right-[-5%]" delay={1} />
                  <FloatingTag icon={Layers} text="Scalable UI" color="#8B5CF6" className="top-[40%] right-[-10%]" delay={0.5} />
                  <FloatingTag icon={Fingerprint} text="UI System" color="#F43F5E" className="bottom-[10%] left-[5%]" delay={1.2} />
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
                { title: "End-to-End Design Systems", desc: "Create scalable design foundations that ensure consistency across products and teams.", color: "#00DA99", icon: LayoutGrid },
                { title: "Reusable UI Components", desc: "Build reusable component libraries that accelerate design and development workflows.", color: "#0D63CC", icon: Box },
                { title: "Token-Based Foundations", desc: "Establish scalable design tokens for colors, typography, spacing, and theming.", color: "#8B5CF6", icon: Palette },
                { title: "Cross-Platform Consistency", desc: "Deliver unified experiences across web, mobile, and multi-product ecosystems.", color: "#F43F5E", icon: Layers },
                { title: "Developer Handoff Specifications", desc: "Provide implementation-ready documentation that ensures accurate development.", color: "#F59E0B", icon: BookOpen },
                { title: "Performance-Optimized UI", desc: "Design efficient interfaces optimized for scalability, accessibility, and maintainability.", color: "#0EA5E9", icon: Code2 }
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

        {/* ── SECTION 4 — SERVICE OVERVIEW + UI PREVIEW ──────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <motion.div {...fadeInUp(0)}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4 sm:mb-6">
                  <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Service Overview</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-tight mb-6">
                  Scaling Products Requires More Than New Features
                </h3>
                <div className="space-y-6 text-text-secondary text-[16px] leading-relaxed font-medium">
                  <p>
                    As products evolve, inconsistencies naturally emerge. New features, multiple contributors, and changing requirements often create fragmented experiences and slower delivery cycles.
                  </p>
                  <p>
                    A well-structured design system provides the shared foundation teams need to maintain consistency, accelerate development, and scale confidently.
                  </p>
                  <p className="text-text-primary font-bold">
                    My approach focuses on building reusable, developer-friendly systems that support long-term product growth.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp(0.2)} className="relative group">
                <div className="absolute -inset-4 bg-secondary/5 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Visual Showcase: Design System Previews */}
                <div className="relative aspect-[4/3] glass-card rounded-2xl overflow-hidden border-[1.5px] border-white/40 shadow-xl bg-white/10 backdrop-blur-xl p-4">
                  
                  <div className="w-full h-full flex flex-col gap-4 overflow-hidden relative z-10">
                    {/* Colors Section */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-3">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <Palette size={12} /> Colors (Tokens)
                      </div>
                      <div className="flex gap-4">
                        <div className="flex flex-col gap-1.5 items-center">
                          <div className="w-10 h-10 rounded-full bg-primary shadow-inner"></div>
                          <div className="text-[9px] text-slate-400 font-mono">Primary</div>
                        </div>
                        <div className="flex flex-col gap-1.5 items-center">
                          <div className="w-10 h-10 rounded-full bg-secondary shadow-inner"></div>
                          <div className="text-[9px] text-slate-400 font-mono">Secondary</div>
                        </div>
                        <div className="flex flex-col gap-1.5 items-center">
                          <div className="w-10 h-10 rounded-full bg-slate-800 shadow-inner"></div>
                          <div className="text-[9px] text-slate-400 font-mono">Neutral</div>
                        </div>
                        <div className="flex flex-col gap-1.5 items-center opacity-50">
                          <div className="w-10 h-10 rounded-full border border-dashed border-slate-300 flex items-center justify-center text-slate-300 text-lg">+</div>
                          <div className="text-[9px] text-slate-400 font-mono">Add</div>
                        </div>
                      </div>
                    </div>

                    {/* Typography Section */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-3">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <Type size={12} /> Typography
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-[40px] font-black text-slate-800 leading-none tracking-tight">Aa</div>
                        <div className="w-px h-12 bg-slate-200"></div>
                        <div className="flex flex-col gap-1">
                          <div className="text-xl font-bold text-slate-800">Heading 1</div>
                          <div className="text-sm font-medium text-slate-600">Subtitle Text</div>
                          <div className="text-xs text-slate-400">Regular body text goes here...</div>
                        </div>
                      </div>
                    </div>

                    {/* Components Section */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-3 flex-1 relative overflow-hidden">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <Component size={12} /> Components
                      </div>
                      <div className="flex flex-col gap-3 relative z-10">
                        <div className="flex gap-2">
                          <div className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold text-center flex-1 shadow-sm">Primary Btn</div>
                          <div className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold text-center flex-1 border border-slate-200">Secondary Btn</div>
                        </div>
                        <div className="flex flex-col gap-1.5 mt-1">
                          <div className="text-[10px] font-bold text-slate-500 ml-1">Input Label</div>
                          <div className="w-full h-8 border border-slate-200 rounded-lg bg-slate-50 flex items-center px-3">
                            <span className="text-slate-300 text-[10px]">Placeholder text...</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent z-20"></div>
                    </div>
                    
                  </div>
  <Image
                      src="/images/services/DesignSystems.png"
                      alt="Design Systems"
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
              className="mb-16 md:mb-24"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">The Experience</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Core Design System <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Capabilities</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                { num: "01", title: "Design System Foundations", desc: "Establish scalable foundations including colors, typography, spacing, grids, and accessibility standards.", highlight: false, badge: false },
                { num: "02", title: "Component Library", desc: "Create reusable components such as forms, tables, navigation, cards, and interactive patterns.", highlight: true, badge: false },
                { num: "03", title: "Pattern & Interaction Design", desc: "Standardize interactions and UX patterns to ensure predictable product experiences.", highlight: false, badge: false },
                { num: "04", title: "Design Tokens & Variables", desc: "Implement scalable token structures that support theming and future product evolution.", highlight: false, badge: true },
                { num: "05", title: "Developer Handoff & Documentation", desc: "Deliver comprehensive documentation that enables efficient implementation and maintenance.", highlight: false, badge: false },
                { num: "06", title: "UI Engineering Alignment", desc: "Bridge design and development workflows through shared standards and implementation guidelines.", highlight: false, badge: false }
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
                          <Component size={10} />
                          UI Kits
                        </span>
                      )}
                      {item.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/25 text-[10px] font-black text-secondary uppercase tracking-wider">
                          <Hexagon size={10} />
                          Tokens
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
                { title: "Consistency at Scale", desc: "Ensure experiences remain unified as products, teams, and features expand.", icon: Maximize, color: "#00DA99" },
                { title: "Faster Product Delivery", desc: "Reduce redundant work through reusable components and standardized patterns.", icon: Code2, color: "#0D63CC" },
                { title: "Design-Development Alignment", desc: "Improve collaboration and reduce implementation inconsistencies.", icon: AlignLeft, color: "#8B5CF6" },
                { title: "Future-Ready Systems", desc: "Build flexible systems capable of supporting long-term growth and expansion.", icon: Layers, color: "#F43F5E" }
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

        {/* ── NEW SECTION — PROCESS ───────────────────────── */}
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
                My Design System <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Process</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Audit", desc: "Evaluate current UI inconsistencies, workflows, and product challenges." },
                { step: "02", title: "Foundation", desc: "Define design principles, tokens, grids, and accessibility standards." },
                { step: "03", title: "Systemize", desc: "Create reusable components, patterns, and documentation." },
                { step: "04", title: "Validate", desc: "Test scalability, usability, and implementation feasibility." },
                { step: "05", title: "Evolve", desc: "Establish governance and processes for continuous system growth." }
              ].map((phase, i) => (
                <motion.div key={i} {...fadeInUp(i * 0.1)} className="relative h-full">
                  {i < 4 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-slate-200 to-transparent z-0" />
                  )}
                  <div className="bg-white/40 border border-white/60 p-6 rounded-2xl relative z-10 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                    <span className="text-3xl font-black text-primary/20 mb-4 block">{phase.step}</span>
                    <h4 className="text-lg font-bold text-text-primary mb-2">{phase.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />

        {/* ── NEW SECTION — STRATEGIC DELIVERABLES ───────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Outcomes</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Deliverables <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">You'll Receive</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                "Design Tokens",
                "Component Library",
                "Pattern Library",
                "Figma UI Kit",
                "Documentation",
                "Usage Guidelines",
                "Accessibility Standards",
                "Developer Specs"
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

        {/* ── NEW SECTION — CHALLENGES SOLVED ───────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-primary uppercase tracking-wider">Solutions</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Common Problems <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">I Solve</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Inconsistent UI across products", icon: Maximize },
                { title: "Slow design and development cycles", icon: Code2 },
                { title: "Duplicate components and patterns", icon: Component },
                { title: "Poor design-development collaboration", icon: AlignLeft },
                { title: "Difficult product scaling", icon: Layers },
                { title: "Lack of documentation and standards", icon: BookOpen }
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

        {/* ── NEW SECTION — TEAMS I WORK WITH ───────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
             <motion.div {...fadeInUp(0)} className="glass-card bg-slate-900/5 backdrop-blur-md border border-slate-200/50 p-8 rounded-3xl">
                <p className="text-sm font-bold text-text-secondary uppercase tracking-[0.2em] mb-4">Teams I Work With</p>
                <div className="flex flex-wrap justify-center items-center gap-3 text-text-primary font-medium text-sm md:text-base">
                  <span>SaaS Startups</span>
                  <span className="text-primary/40">•</span>
                  <span>Enterprise Teams</span>
                  <span className="text-primary/40">•</span>
                  <span>Product Teams</span>
                  <span className="text-primary/40">•</span>
                  <span>Design Teams</span>
                  <span className="text-primary/40">•</span>
                  <span>Engineering Teams</span>
                  <span className="text-primary/40">•</span>
                  <span>Healthcare Platforms</span>
                </div>
             </motion.div>
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
                  "Implementing a design system with Anil dramatically improved consistency, accelerated delivery, and strengthened collaboration between design and engineering."
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-xl">
                    <User size={36} className="text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-[16px] uppercase tracking-widest">Head of Product</h4>
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
                Business Impact of <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Design Systems</span>
              </h2>
              <motion.p {...fadeInUp(0.2)} className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium mb-12">
                A mature design system enables organizations to move faster, reduce operational overhead, and deliver consistent product experiences at scale.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Teams deliver features faster",
                "UI remains consistent across platforms",
                "Maintenance becomes easier",
                "Collaboration improves across teams",
                "Products scale efficiently",
                "Technical debt is reduced"
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

        {/* ── NEW SECTION — DESIGN SYSTEM TYPES ───────────────────────────────────── */}
        <section className="py-8 md:py-12 px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
             <motion.div {...fadeInUp(0)} className="glass-card bg-slate-900/5 backdrop-blur-md border border-slate-200/50 p-8 rounded-3xl">
                <p className="text-sm font-bold text-text-secondary uppercase tracking-[0.2em] mb-4">Design System Types I Build</p>
                <div className="flex flex-wrap justify-center items-center gap-3 text-text-primary font-medium text-sm md:text-base">
                  <span>SaaS Design Systems</span>
                  <span className="text-primary/40">•</span>
                  <span>Enterprise Design Systems</span>
                  <span className="text-primary/40">•</span>
                  <span>Multi-Brand Systems</span>
                  <span className="text-primary/40">•</span>
                  <span>Healthcare Design Systems</span>
                  <span className="text-primary/40">•</span>
                  <span>Data Visualization Systems</span>
                  <span className="text-primary/40">•</span>
                  <span>Mobile Design Systems</span>
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
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">Portfolio</span>
              </div>
              <h2 className="text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Related <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Case Studies</span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: "Carenova", link: "/case-studies/carenova" },
                { name: "OasisPad", link: "/case-studies/oasispad" },
                { name: "Spendora", link: "/case-studies/spendora" },
                { name: "TicketStack", link: "/case-studies/ticketstack" }
              ].map((study, i) => (
                <Link key={i} href={study.link} className="block h-full">
                  <motion.div
                    {...fadeInUp(i * 0.1)}
                    className="bg-white/40 border border-white/60 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-white/80 hover:border-primary/30 transition-all hover:shadow-lg group h-full cursor-pointer"
                  >
                    <Layers size={28} className="text-primary opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
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
                  Need a scalable design system that empowers both design and engineering teams?
                </h3>
                <p className="text-text-secondary text-sm md:text-base font-medium">
                  Let's create a reusable foundation that supports long-term product growth.
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
