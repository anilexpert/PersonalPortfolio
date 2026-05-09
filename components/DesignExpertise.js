import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Heart, TrendingUp, ShieldCheck, Cpu, Database, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const expertiseData = [
  {
    id: "01",
    label: "Market Focus 01",
    title: "Healthcare Product Design",
    leftDesc: "Designing compliant, patient-centric digital systems that simplify clinical workflows and improve operational efficiency across healthcare platforms.",
    desc: "Designing intelligent, compliance-ready healthcare systems that streamline clinical operations, reduce cognitive load, and improve care delivery through intuitive digital experiences.",
    bullets: [
      "EHR / EMR UX Optimization",
      "Clinical Workflow Design",
      "HIPAA-Compliant Interface Systems",
      "Role-Based Access (RBAC) UX",
      "Data Visualization for Healthcare"
    ],
    ctaText: "Explore Case Study",
    icon: Heart,
    color: "#00DA99",
    bgStyle: "linear-gradient(135deg, #0D63CC 0%, #0A4A99 100%)"
  },
  {
    id: "02",
    label: "Market Focus 02",
    title: "Fintech & Data-Driven Platforms",
    leftDesc: "Transforming complex financial and analytical data into clear, actionable interfaces that support confident decision-making.",
    desc: "Designing data-intensive platforms that translate financial complexity into clear, actionable insights—helping users make faster and more informed decisions.",
    bullets: [
      "Financial Dashboard UX",
      "Data Visualization Systems",
      "Expense & Forecasting Tools",
      "AI-Assisted Insights",
      "Transaction Flow Optimization"
    ],
    ctaText: "View Fintech Work",
    icon: TrendingUp,
    color: "#0D63CC",
    bgStyle: "linear-gradient(135deg, #322E60 0%, #282360 100%)"
  },
  {
    id: "03",
    label: "Market Focus 03",
    title: "Enterprise SaaS Systems",
    leftDesc: "Designing scalable SaaS platforms with structured workflows, modular systems, and high usability for complex business environments.",
    desc: "Designing scalable SaaS ecosystems with structured workflows, modular architectures, and consistent design systems built for long-term product growth.",
    bullets: [
      "Dashboard & Admin UX",
      "Multi-Tenant Systems",
      "Design Systems & Components",
      "Workflow Automation UX",
      "Onboarding & Retention Flows"
    ],
    ctaText: "Explore SaaS Projects",
    icon: ShieldCheck,
    color: "#8B5CF6",
    bgStyle: "linear-gradient(135deg, #00A876 0%, #008B60 100%)"
  },
  {
    id: "04",
    label: "Market Focus 04",
    title: "AI-Powered UX & Intelligent Workflows",
    leftDesc: "Crafting human-AI interactions and intelligent systems that enhance productivity, automation, and decision-making.",
    desc: "Designing intelligent user experiences that integrate AI into real workflows—enhancing automation, decision-making, and user productivity without sacrificing clarity.",
    bullets: [
      "AI Interaction Design",
      "Prompt & Response UX",
      "Automation Flows",
      "Predictive UX Patterns",
      "Human-AI Collaboration Systems"
    ],
    ctaText: "Explore AI UX Work",
    icon: Cpu,
    color: "#F43F5E",
    bgStyle: "linear-gradient(135deg, #1A1740 0%, #110E2A 100%)"
  },
  {
    id: "05",
    label: "Market Focus 05",
    title: "Product Strategy & System Thinking",
    leftDesc: "Aligning user needs, business goals, and technical constraints to design sustainable, scalable product ecosystems.",
    desc: "Defining product direction through structured thinking—aligning business goals, user needs, and technical feasibility to build scalable and impactful solutions.",
    bullets: [
      "Product Discovery",
      "UX Strategy Frameworks",
      "System Architecture Thinking",
      "KPI & Success Metrics Design",
      "Roadmap Alignment"
    ],
    ctaText: "View Strategy Approach",
    icon: Database,
    color: "#F59E0B",
    bgStyle: "linear-gradient(135deg, #00C6B5 0%, #009E91 100%)"
  }
];

const DesignExpertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = expertiseData[activeIndex];

  return (
    <section className="relative overflow-hidden py-16" id="expertise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">

          {/* Left: Menu Content */}
          <div className="lg:col-span-6">
            <div className="mb-12">
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 transition-all duration-500"
                style={{ backgroundColor: `${activeItem.color}15`, borderColor: `${activeItem.color}30` }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse transition-colors duration-500" style={{ backgroundColor: activeItem.color }} />
                <span className="text-[12px] font-bold uppercase tracking-wider transition-colors duration-500" style={{ color: activeItem.color }}>Multi-Domain Expertise</span>
              </motion.div>

              
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Strategic <br />
                <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Product Systems.</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                I translate complex business logic into intuitive digital experiences across enterprise, SaaS, and AI-driven platforms.
              </p>
            </div>

            {/* List of Expertises */}
            <div className="space-y-4">
              {expertiseData.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(i)}
                  className={`group cursor-pointer py-5 px-6 rounded-2xl transition-all duration-500 flex items-center gap-4 relative overflow-hidden ${
                    activeIndex === i
                      ? 'glass-card scale-[1.02]'
                      : 'hover:bg-white/40 hover:translate-x-2'
                  }`}
                  style={activeIndex === i ? { 
                    borderColor: `${item.color}40`,
                    boxShadow: `0 8px 32px ${item.color}15`
                  } : {}}
                >
                  <div className="flex items-center gap-3">
                    {/* <div 
                      className="text-sm font-bold w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shrink-0"
                      style={{
                        backgroundColor: activeIndex === i ? item.color : `${item.color}15`,
                        color: activeIndex === i ? '#ffffff' : item.color,
                      }}
                    >
                      {item.id}
                    </div> */}
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shrink-0 border"
                      style={{
                        backgroundColor: `${item.color}05`,
                        borderColor: `${item.color}20`,
                        color: item.color
                      }}
                    >
                      <item.icon size={20} />
                    </div>
                  </div>

                  <div className="flex flex-col flex-1">
                    <h3 className={`text-lg font-bold transition-all ${
                      activeIndex === i ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                    }`}>
                      {item.title}
                    </h3>
                    <motion.p 
                      initial={false}
                      animate={{ height: activeIndex === i ? 'auto' : 0, opacity: activeIndex === i ? 1 : 0 }}
                      className="text-sm text-text-secondary mt-2 overflow-hidden"
                    >
                      {item.leftDesc}
                    </motion.p>
                  </div>

                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeIndex === i ? 'opacity-100' : 'bg-white text-text-secondary opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 shadow-sm'
                    }`}
                    style={activeIndex === i ? { backgroundColor: item.color, color: '#ffffff' } : {}}
                  >
                    <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Detailed Card */}
          <div className="lg:col-span-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full p-10 md:p-14 flex flex-col relative overflow-hidden rounded-[40px] text-white"
                style={{ background: 'var(--deep-indigo)' }}
              >
                {/* Background Noise Layer for Detail Card */}
                <div 
                  className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />
                
                {/* Subtle Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${activeItem.color}, transparent)` }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/10 backdrop-blur-xl"
                    style={{ backgroundColor: `${activeItem.color}20` }}
                  >
                    <activeItem.icon size={28} style={{ color: activeItem.color }} />
                  </div>

                  <span className="text-[12px] font-bold uppercase tracking-[0.2em] mb-4 transition-colors duration-500" style={{ color: activeItem.color }}>
                    {activeItem.label}
                  </span>

                  <h3 className="text-3xl text-white font-bold mb-6 leading-tight">
                    {activeItem.title}
                  </h3>

                  <p className="text-lg text-white/70 mb-8 leading-relaxed">
                    {activeItem.desc}
                  </p>

                  <div className="space-y-4 mb-10">
                    {activeItem.bullets.map((bullet, j) => (
                      <div key={j} className="flex items-center gap-4">
                        <CheckCircle2 size={18} style={{ color: activeItem.color }} className="transition-colors duration-500" />
                        <span className="text-base font-medium text-white/90">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    className="w-full py-4 mt-auto rounded-full font-semibold flex items-center justify-center gap-2 text-white hover:scale-[1.02] transition-all duration-300"
                    style={{ 
                      backgroundColor: activeItem.color,
                      boxShadow: `0 8px 24px ${activeItem.color}40`
                    }}
                  >
                    <span>{activeItem.ctaText}</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};


export default DesignExpertise;



