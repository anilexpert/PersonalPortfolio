import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Heart, TrendingUp, ShieldCheck, Cpu, Database, ArrowRight, Cloud, LayoutDashboard, Layers, Building, Smartphone } from 'lucide-react';
import { useState } from 'react';

const expertiseData = [
  {
    id: "01",
    label: "Focus Area 01",
    title: "SaaS Product Design",
    leftDesc: "Designing scalable SaaS platforms that balance usability, performance, and business goals.",
    desc: "Designing scalable SaaS platforms that balance usability, performance, and business goals. I structure complex workflows into intuitive experiences that support growth, retention, and product clarity.",
    bullets: [
      "Workflow & Navigation Design",
      "User Onboarding & Retention",
      "Scalable Platform Architecture",
      "Role-Based Access (RBAC)",
      "Conversion Optimization"
    ],
    ctaText: "Explore SaaS Work",
    icon: Cloud,
    color: "#00DA99",
    bgStyle: "linear-gradient(135deg, #0D63CC 0%, #0A4A99 100%)"
  },
  {
    id: "02",
    label: "Focus Area 02",
    title: "AI Workflow Design",
    leftDesc: "Crafting human-centered AI experiences that simplify decision-making instead of adding complexity. ",
    desc: "Crafting human-centered AI experiences that simplify decision-making instead of adding complexity. I design workflows where AI enhances user actions through clarity, trust, and seamless interaction.",
    bullets: [
      "Human-AI Collaboration Systems",
      "Prompt & Response Interfaces",
      "Trust & Transparency UI",
      "AI-Assisted Decision Making",
      "Contextual Automation"
    ],
    ctaText: "View AI Projects",
    icon: Cpu,
    color: "#0D63CC",
    bgStyle: "linear-gradient(135deg, #322E60 0%, #282360 100%)"
  },
  {
    id: "03",
    label: "Focus Area 03",
    title: "Dashboard & Data UX",
    leftDesc: "Transforming complex data into clear, actionable interfaces for faster decision-making. ",
    desc: "Transforming complex data into clear, actionable interfaces for faster decision-making. I design dashboards that reduce cognitive load and help users focus on what truly matters.",
    bullets: [
      "Data Visualization Design",
      "Custom Analytical Dashboards",
      "Real-Time Metrics UI",
      "Cognitive Load Reduction",
      "Action-Oriented Reporting"
    ],
    ctaText: "Explore Data UX",
    icon: LayoutDashboard,
    color: "#8B5CF6",
    bgStyle: "linear-gradient(135deg, #00A876 0%, #008B60 100%)"
  },
  {
    id: "04",
    label: "Focus Area 04",
    title: "Design Systems",
    leftDesc: "Building scalable design systems that ensure consistency, speed, and long-term product evolution.",
    desc: "Building scalable design systems that ensure consistency, speed, and long-term product evolution. I create reusable components and structured guidelines that align design with development.",
    bullets: [
      "Component Library Creation",
      "Design Token Architecture",
      "Documentation & Guidelines",
      "Cross-Platform Consistency",
      "Developer Handoff Workflows"
    ],
    ctaText: "View Design Systems",
    icon: Layers,
    color: "#F43F5E",
    bgStyle: "linear-gradient(135deg, #1A1740 0%, #110E2A 100%)"
  },
  {
    id: "05",
    label: "Focus Area 05",
    title: "Enterprise UX",
    leftDesc: "Designing large-scale systems with multi-role users, complex workflows, and high usability demands.",
    desc: "I bring structure and clarity to enterprise products where efficiency and accuracy are critical. I design dashboards that reduce cognitive load and help users focus on what truly matters. I create reusable components and structured guidelines that align design with development. I focus on simplicity, performance, and intuitive interactions across iOS and Android platforms.",
    bullets: [
      "Complex Workflow Simplification",
      "Multi-Tenant Architectures",
      "Enterprise Application UX",
      "Legacy System Modernization",
      "Efficiency-Driven Design"
    ],
    ctaText: "Explore Enterprise UX",
    icon: Building,
    color: "#F59E0B",
    bgStyle: "linear-gradient(135deg, #00C6B5 0%, #009E91 100%)"
  },
  {
    id: "06",
    label: "Focus Area 06",
    title: "Mobile Product Design",
    leftDesc: "Creating seamless, user-friendly mobile experiences optimized for real-world usage.",
    desc: "Creating seamless, user-friendly mobile experiences optimized for real-world usage.I bring structure and clarity to enterprise products where efficiency and accuracy are critical. I focus on simplicity, performance, and intuitive interactions across iOS and Android platforms.",
    bullets: [
      "Native iOS & Android UX",
      "Cross-Platform App Design",
      "Mobile-First Workflows",
      "Touch-Optimized Interactions",
      "On-the-go Productivity Tools"
    ],
    ctaText: "View Mobile Apps",
    icon: Smartphone,
    color: "#0EA5E9",
    bgStyle: "linear-gradient(135deg, #0D63CC 0%, #00DA99 100%)"
  }
];

const DesignExpertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = expertiseData[activeIndex];

  return (
    <section className="py-10 md:py-18 relative overflow-hidden" id="expertise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">

          {/* Left: Menu Content */}
          <div className="lg:col-span-6">
            <div className="mb-6 lg:mb-10">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-3 sm:mb-4 transition-all duration-500"
                style={{ backgroundColor: `${activeItem.color}15`, borderColor: `${activeItem.color}30` }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse transition-colors duration-500" style={{ backgroundColor: activeItem.color }} />
                <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-wider transition-colors duration-500" style={{ color: activeItem.color }}>Our Core Services</span>
              </motion.div>


              <h2 className="text-[32px] sm:text-4xl md:text-5xl font-bold text-text-primary mb-3 sm:mb-4 leading-tight">
                Product Design
                <span className="ml-1.5 bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">Expertise.</span>
              </h2>
              <p className="text-[14px] sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-lg">
                Sharp focus areas — built from years of shipping real products.
              </p>
            </div>

            {/* List of Expertises */}
            <div className="space-y-4">
              {expertiseData.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(i)}
                  className={`group cursor-pointer glass-card bg-white/40 py-3 sm:py-3 px-4 sm:px-4 lg:px-4 lg:py-3 rounded-lg lg:rounded-xl transition-all duration-500 flex items-center gap-3 sm:gap-4 relative overflow-hidden ${activeIndex === i
                    ? 'glass-card scale-[1.02]'
                    : 'hover:bg-white/40 hover:translate-x-2'
                    }`}
                  style={activeIndex === i ? {
                    borderColor: `${item.color}40`,
                    boxShadow: `0 4px 24px ${item.color}10`
                  } : {}}
                >
                  {/* Top Right Glow Effect */}
                  <div
                    className={`absolute -top-10 -right-10 w-24 h-24 blur-[30px] rounded-full transition-all duration-700 pointer-events-none z-0 ${activeIndex === i ? 'opacity-40 scale-150' : 'opacity-0 group-hover:opacity-30 group-hover:scale-110'}`}
                    style={{ backgroundColor: item.color }}
                  />

                  <div className="flex items-center gap-3 relative z-10">
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
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-500 shrink-0 border"
                      style={{
                        backgroundColor: `${item.color}05`,
                        borderColor: `${item.color}20`,
                        color: item.color
                      }}
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 relative z-10">
                    <h3 className={`text-base sm:text-lg font-bold transition-all ${activeIndex === i ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                      }`}>
                      {item.title}
                    </h3>
                    <motion.p
                      initial={false}
                      animate={{ height: activeIndex === i ? 'auto' : 0, opacity: activeIndex === i ? 1 : 0 }}
                      className="text-[13px] sm:text-sm text-text-secondary mt-1 sm:mt-2 overflow-hidden"
                    >
                      {item.leftDesc}
                    </motion.p>
                  </div>

                  <div
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${activeIndex === i ? 'opacity-100' : 'bg-white text-text-secondary opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 shadow-sm'
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
                className="w-full h-full p-6 md:p-14 flex flex-col relative overflow-hidden rounded-lg lg:rounded-[24px] text-white"
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

                  <h3 className="lg:text-3xl text-2xl text-white font-bold mb-6 leading-tight">
                    {activeItem.title}
                  </h3>

                  <p className="text-sm lg:text-base text-white/70 mb-6 leading-relaxed">
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



