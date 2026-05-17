import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Cloud, Lightbulb, LayoutDashboard, Layers, Building, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import GlowDivider from '../components/GlowDivider';

const services = [
  {
    title: 'AI-Driven Product Experience Design',
    description: 'Designing intelligent, human-centered experiences that seamlessly integrate AI into real-world workflows.',
    icon: Sparkles,
    color: '#00DA99',
    slug: 'ai-experience-design'
  },
  {
    title: 'Scalable SaaS Platform Design',
    description: 'Crafting high-performance SaaS products with intuitive flows, modular systems, and growth-ready architecture.',
    icon: Cloud,
    color: '#0D63CC',
    slug: 'saas-platform-design'
  },
  {
    title: 'Product Strategy & Experience Architecture',
    description: 'Turning complex product ideas into structured systems, clear journeys, and scalable user experiences.',
    icon: Lightbulb,
    color: '#8B5CF6',
    slug: 'product-strategy'
  },
  {
    title: 'Data Intelligence & Dashboard UX',
    description: 'Designing data-rich interfaces that transform complexity into actionable insights and faster decisions.',
    icon: LayoutDashboard,
    color: '#F59E0B',
    slug: 'data-intelligence'
  },
  {
    title: 'Design Systems & UI Engineering',
    description: 'Building scalable design systems that ensure consistency, speed up development, and support product evolution.',
    icon: Layers,
    color: '#F43F5E',
    slug: 'design-systems'
  },
  {
    title: 'Enterprise Workflow Optimization',
    description: 'Simplifying complex, multi-role enterprise systems into efficient, intuitive, and outcome-driven experiences.',
    icon: Building,
    color: '#0EA5E9',
    slug: 'enterprise-workflow'
  }
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Anil Kumar – Senior Product Designer</title>
        <meta name="description" content="Explore our premium services including marketing automation, analytics, and more." />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-20 md:pt-24">
        {/* ── 1. PAGE HERO ───────────────────────────────────────────────── */}
        <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
          {/* bg glows */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Breadcrumb */}
            <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-2 text-[10px] md:text-[12px] font-semibold text-text-secondary uppercase tracking-widest mb-4 md:mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">Services</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-[36px] sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 md:mb-6"
            >
              Our
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">Services</span>
            </motion.h1>

            {/* Decorative scribble SVG */}
            <motion.div {...fadeUp(0.3)} className="absolute top-8 right-[8%] opacity-30 pointer-events-none hidden lg:block">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <path d="M100 10C100 10 60 50 60 60C60 70 100 110 100 110" stroke="url(#g1)" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M80 20C80 20 50 55 50 65C50 75 80 110 80 110" stroke="url(#g2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <defs>
                  <linearGradient id="g1" x1="60" y1="10" x2="100" y2="110" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00DA99" />
                    <stop offset="1" stopColor="#0D63CC" />
                  </linearGradient>
                  <linearGradient id="g2" x1="50" y1="20" x2="80" y2="110" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0D63CC" />
                    <stop offset="1" stopColor="#00DA99" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </section>

        {/* ── 2. SERVICES GRID ───────────────────────────────────────────── */}
        <section className="relative py-8 md:py-16 px-4 md:px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                  variants={{
                    initial: { opacity: 0, y: 30, borderColor: 'rgba(255, 255, 255, 0.5)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
                    animate: { opacity: 1, y: 0, borderColor: 'rgba(255, 255, 255, 0.5)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', transition: { duration: 0.6, delay: 0.1 + i * 0.1 } },
                    hover: { y: -8, borderColor: `${service.color}60`, boxShadow: `0 24px 48px ${service.color}15`, transition: { duration: 0.3 } }
                  }}
                  className="glass-card bg-white/40 backdrop-blur-xl rounded-[24px] p-6 lg:p-10 flex flex-col group relative overflow-hidden transition-all duration-300 border border-white/50"
                >
                  {/* Multicolor Dynamic Glows - Glass Effects */}
                  <div
                    className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-all duration-700 pointer-events-none group-hover:scale-125 z-0"
                    style={{ backgroundColor: service.color }}
                  />
                  <div
                    className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-all duration-700 pointer-events-none group-hover:scale-125 z-0"
                    style={{ backgroundColor: service.color }}
                  />

                  {/* Icon Container with Border Masking & Glow */}
                  <div
                    className="w-14 h-14 rounded-[16px] flex items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:scale-110 shadow-sm group-hover:shadow-md"
                    style={{
                      backgroundColor: `${service.color}10`,
                      border: `1px solid ${service.color}30`,
                      boxShadow: `inset 0 0 12px ${service.color}15, 0 8px 16px ${service.color}10`,
                      color: service.color
                    }}
                  >
                    <service.icon size={26} className="transition-transform duration-500 group-hover:rotate-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] md:text-xl font-bold text-text-primary mb-3 capitalize tracking-tight relative z-10 transition-colors duration-300">
                    <span className="group-hover:opacity-0 transition-opacity duration-300 block">{service.title}</span>
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-transparent bg-clip-text"
                      style={{ backgroundImage: `linear-gradient(to right, #1A1A1A, ${service.color})` }}
                    >
                      {service.title}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-text-secondary leading-relaxed mb-10 flex-1 relative z-10 font-medium group-hover:text-text-primary transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Action Link */}
                  <Link href={`/services/${service.slug}`} className="flex items-center gap-3 mt-auto relative z-10 w-fit cursor-pointer">
                    <div className="relative">
                      <span className="text-[16px] font-medium text-text-primary transition-opacity duration-300 group-hover:opacity-0">
                        More Details
                      </span>
                      <span
                        className="text-[16px] font-medium absolute left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap"
                        style={{ color: service.color }}
                      >
                        More Details
                      </span>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm group-hover:scale-110"
                      style={{
                        backgroundColor: `${service.color}15`,
                        border: `1px solid ${service.color}40`,
                        color: service.color,
                        boxShadow: `0 4px 12px ${service.color}20`
                      }}
                    >
                      <ArrowRight size={14} className="-rotate-45 transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0.5" />
                    </div>
                  </Link>

                  {/* Gradient Border Overlay (Border Masking effect) */}
                  <div
                    className="absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-20"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}40, transparent, transparent)`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      padding: '1.5px'
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
