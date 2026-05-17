import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Scale,
  FileText,
  Lock,
  RefreshCw,
  Compass,
  Shield,
  UserCheck,
  Link2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Eye,
  Database,
  Layers,
  Baby,
  Activity
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Framer motion animation presets
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState(0);

  // ScrollSpy logic to highlight active section on the sidebar
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[data-section]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-section'), 10);
            setActiveSection(index);
          }
        });
      },
      {
        rootMargin: '-15% 0px -65% 0px',
        threshold: 0
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const sectionsList = [
    { id: 0, label: 'Welcome & Introduction', icon: Sparkles },
    { id: 1, label: '1. Information I Collect', icon: Database },
    { id: 2, label: '2. How Your Info Is Used', icon: Activity },
    { id: 3, label: '3. Cookies & Tracking', icon: Eye },
    { id: 4, label: '4. Third-Party Services', icon: Layers },
    { id: 5, label: '5. Data Security', icon: ShieldCheck },
    { id: 6, label: '6. External Links', icon: Link2 },
    { id: 7, label: '7. Your Rights', icon: Scale },
    { id: 8, label: '8. Children’s Privacy', icon: Baby },
    { id: 9, label: '9. Changes to Policy', icon: RefreshCw },
    { id: 10, label: '10. Contact Information', icon: Mail },
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      const yOffset = -120; // offset to account for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const currentDate = 'May 17, 2026';

  return (
    <div className="min-h-screen bg-bg-base relative w-full max-w-[100vw] overflow-x-hidden">
      <Head>
        <title>Privacy Policy | Anil Kumar – Senior Product Designer</title>
        <meta name="description" content="Welcome to the Privacy Policy page of Anil Kumar, AI-Driven Product Designer. Read about how your information is collected, used, and protected." />
      </Head>

      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 md:pb-28">
        {/* ── 1. HERO SECTION ───────────────────────────────────────────────── */}
        <section className="relative py-12 md:py-16 px-4 md:px-6 overflow-hidden">
          {/* Symmetrical glowing orbs in bg */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/15 blur-[130px] rounded-full pointer-events-none animate-pulse-slow" style={{ animationDelay: '-4s' }} />

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Breadcrumbs */}
            <motion.div
              {...fadeUp(0)}
              className="flex items-center justify-center gap-2 text-[10px] md:text-[12px] font-bold text-text-secondary uppercase tracking-widest mb-4 md:mb-5"
            >
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={12} className="text-text-secondary/50" />
              <span className="text-primary">Privacy Policy</span>
            </motion.div>

            {/* Glowing H1 Title */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-[24px] sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 md:mb-6"
            >
              Privacy
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2.5">
                Policy
              </span>
            </motion.h1>

            {/* Last Updated Badge */}
            <motion.div
              {...fadeUp(0.2)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-secondary/15 shadow-[0_8px_20px_rgba(13,99,204,0.03)] backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span className="text-[11px] md:text-xs font-bold text-text-secondary uppercase tracking-wider">
                Last Updated: <span className="text-text-primary">{currentDate}</span>
              </span>
            </motion.div>
          </div>
        </section>

        {/* ── 2. TWO-COLUMN DYNAMIC MAIN VIEW ─────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 mt-6 md:mt-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10">

            {/* Left Column: Sticky Table of Contents (Desktop only) */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32">
                <motion.div
                  {...fadeUp(0.2)}
                  className="w-full bg-white/75 backdrop-blur-[24px] rounded-[24px] p-5 border border-secondary/15 shadow-[0_20px_50px_rgba(13,99,204,0.04)] max-h-[calc(100vh-8rem)] overflow-y-auto"
                >
                  <h3 className="text-base font-bold text-text-primary mb-4 border-b border-text-primary/5 pb-3 flex items-center gap-2">
                    <Shield size={24} className="text-primary" />
                    Table of Contents
                  </h3>

                  <ul className="space-y-1">
                    {sectionsList.map((sec) => {
                      const IconComponent = sec.icon;
                      const isActive = activeSection === sec.id;
                      return (
                        <li key={sec.id}>
                          <button
                            onClick={() => handleScrollTo(sec.id)}
                            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-[13px] font-semibold transition-all duration-300 group cursor-pointer relative overflow-hidden ${isActive
                              ? 'text-primary bg-primary/5 border border-primary/15'
                              : 'text-text-secondary hover:text-text-primary hover:bg-slate-50 border border-transparent'
                              }`}
                          >
                            {/* Left Glow Bar when active */}
                            {isActive && (
                              <motion.div
                                layoutId="activeToCIndicator"
                                className="absolute left-0 top-2 bottom-2 w-1 bg-primary rounded-r-md shadow-[0_0_8px_rgba(0,218,153,0.8)]"
                                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                              />
                            )}

                            <IconComponent
                              size={15}
                              className={`transition-colors duration-300 flex-shrink-0 ${isActive ? 'text-primary' : 'text-text-secondary/60 group-hover:text-text-primary'
                                }`}
                            />
                            <span className="truncate">{sec.label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Scrollable Reading Content */}
            <div className="lg:col-span-8 space-y-8">

              {/* Introduction Card */}
              <section id="section-0" data-section="0" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[32px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Subtle inner grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      Introduction
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] md:text-base leading-relaxed relative z-10">
                    Welcome to my personal portfolio website. Your privacy is important to me, and this Privacy Policy explains how your information is collected, used, and protected when you visit this website.
                  </p>
                </motion.div>
              </section>

              {/* Section 1 */}
              <section id="section-1" data-section="1" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[32px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                      <Database className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      1. Information I Collect
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    I may collect information from you through your usage of this portfolio site, separated into two key areas:
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-primary mb-4 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        a. Personal Information
                      </h3>
                      <p className="text-text-secondary text-[13.5px] leading-relaxed mb-4">
                        Information you voluntarily provide via contact forms or direct communication:
                      </p>
                      <ul className="space-y-2.5">
                        {['Name', 'Email address', 'Phone number (if provided)', 'Message details submitted'].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-text-secondary text-[13px] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Non-Personal Information */}
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-secondary mb-4 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        b. Non-Personal Information
                      </h3>
                      <p className="text-text-secondary text-[13.5px] leading-relaxed mb-4">
                        Information collected automatically when you browse the site:
                      </p>
                      <ul className="space-y-2.5">
                        {['Browser and device type', 'IP address', 'Pages visited', 'Time spent on pages'].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-text-secondary text-[13px] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4.5 rounded-2xl bg-slate-50 border border-slate-100 text-text-secondary text-[13.5px] leading-relaxed">
                    This automatically collected data is completely aggregated and anonymized, used solely to improve overall user experience and site performance.
                  </div>
                </motion.div>
              </section>

              {/* Section 2 */}
              <section id="section-2" data-section="2" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[32px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      2. How Your Information Is Used
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    Your information is utilized for clear, transparent, and direct purposes:
                  </p>

                  <ul className="space-y-4 mb-6">
                    {[
                      'Respond to your specific inquiries or message submissions',
                      'Communicate regarding projects, design collaborations, or job opportunities',
                      'Improve website layout, performance, and overall visitor user experience',
                      'Analyze anonymous site usage trends and performance stats'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-text-secondary text-[15px] leading-relaxed group font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(0,218,153,0.8)] group-hover:scale-125 transition-transform duration-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2.5 p-4 rounded-2xl bg-secondary/5 border border-secondary/15 text-secondary text-[13.5px] font-bold leading-normal">
                    <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 animate-pulse" />
                    <span>CRITICAL GUARANTEE: I do not sell, trade, or rent your personal information to third parties.</span>
                  </div>
                </motion.div>
              </section>

              {/* Section 3 */}
              <section id="section-3" data-section="3" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[32px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                      <Eye className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      3. Cookies & Tracking Technologies
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    This website may use cookies or similar technologies to:
                  </p>

                  <ul className="space-y-4 mb-6">
                    {[
                      'Enhance your user browsing experience by remembering layout states',
                      'Analyze overall anonymous traffic flow and user interactions with case studies'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-text-secondary text-[15px] leading-relaxed group">
                        <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(13,99,204,0.6)] group-hover:scale-125 transition-transform duration-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-text-secondary text-[14px] leading-relaxed">
                    You can easily choose to disable cookies through your personal browser's settings. Disabling cookies will not affect your ability to view case studies and work files.
                  </p>
                </motion.div>
              </section>

              {/* Section 4 */}
              <section id="section-4" data-section="4" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[32px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Layers className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      4. Third-Party Services
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    To deliver a seamless, high-performance portfolio experience, I integrate trusted external service platforms:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {[
                      { name: 'Analytics Services', desc: 'Google Analytics is used to measure site usage.' },
                      { name: 'Hosting Providers', desc: 'Secure, high-availability web hosting.' },
                      { name: 'Form Handlers', desc: 'Reliable, encrypted form-handling tools.' }
                    ].map((svc, idx) => (
                      <div key={idx} className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100 flex flex-col">
                        <h4 className="text-xs font-black uppercase tracking-wider text-text-primary mb-2">
                          {svc.name}
                        </h4>
                        <p className="text-text-secondary text-[12.5px] leading-relaxed flex-grow">
                          {svc.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-text-secondary text-[14px] leading-relaxed font-semibold italic">
                    Note: These third-party services collect data independently in accordance with their own specific privacy policies.
                  </p>
                </motion.div>
              </section>

              {/* Section 5 */}
              <section id="section-5" data-section="5" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[32px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                      <ShieldCheck className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      5. Data Security
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-4">
                    I implement industry-standard technical measures and secure protocols to protect your submitted personal information.
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/50 text-amber-800 text-[13.5px] leading-relaxed font-semibold">
                    Disclaimer: No method of transmission over the internet, or method of electronic storage, is 100% secure. While I strive to use commercial-grade security practices to protect your data, I cannot guarantee its absolute security.
                  </div>
                </motion.div>
              </section>

              {/* Section 6 */}
              <section id="section-6" data-section="6" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[32px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Link2 className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      6. External Links
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    This website contains links to external websites and resources (e.g., Figma files, LinkedIn profiles, design communities).
                  </p>

                  <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-100 text-text-secondary text-[13.5px] leading-relaxed">
                    Please be aware that I am not responsible for the privacy practices, content, cookie behaviors, or cookie policies of those third-party sites. I encourage you to read their privacy statements upon visiting.
                  </div>
                </motion.div>
              </section>

              {/* Section 7 */}
              <section id="section-7" data-section="7" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[32px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                      <Scale className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      7. Your Rights
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    Depending on your physical location and jurisdiction, you may have specific rights regarding your personal data:
                  </p>

                  <ul className="space-y-4 mb-6">
                    {[
                      'Access the personal data I hold about you and request copies',
                      'Request corrections to inaccurate personal data',
                      'Request complete deletion of your data from my email records',
                      'Withdraw any previously given consent for contact forms'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-text-secondary text-[15px] leading-relaxed group">
                        <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(13,99,204,0.6)] group-hover:scale-125 transition-transform duration-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-text-secondary text-[14.5px] leading-relaxed">
                    To exercise any of these rights, please contact me directly using the contact details provided below. I will respond promptly to your request.
                  </p>
                </motion.div>
              </section>

              {/* Section 8 */}
              <section id="section-8" data-section="8" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[32px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Baby className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      8. Children’s Privacy
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed">
                    This website is designed for professional design and business cooperation purposes. It is not intended for or directed towards children under the age of 13. I do not knowingly collect, parse, or keep personal information from children under 13.
                  </p>
                </motion.div>
              </section>

              {/* Section 9 */}
              <section id="section-9" data-section="9" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[32px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <RefreshCw className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      9. Changes to This Privacy Policy
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-4">
                    This Privacy Policy may be updated from time to time. Any changes will be immediately reflected on this page with an updated revision date listed in the page hero.
                  </p>

                  <div className="inline-flex items-center gap-2.5 p-4 rounded-2xl bg-primary/5 border border-primary/15 text-primary text-[14px] font-medium leading-normal">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 animate-pulse" />
                    <span>Checking this page periodically ensures you are always aware of what information is collected.</span>
                  </div>
                </motion.div>
              </section>

              {/* ── SECTION 10 (CONTACT BLOCK - SPECIAL LIGHT-NEON THEME) ────── */}
              <section id="section-10" data-section="10" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.15)}
                  className="relative p-[1px] rounded-[32px] bg-gradient-to-tr from-primary via-secondary to-primary shadow-[0_24px_50px_rgba(0,218,153,0.12)] overflow-hidden group transition-all duration-500 hover:shadow-[0_32px_60px_rgba(0,218,153,0.22)]"
                >
                  {/* Neon light source/breathing glows in background */}
                  <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/25 blur-[90px] rounded-full pointer-events-none z-0 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/35 blur-[90px] rounded-full pointer-events-none z-0 group-hover:scale-110 transition-transform duration-700" />

                  {/* Clean white overlay inside the gradient border */}
                  <div className="w-full bg-white/90 backdrop-blur-[24px] rounded-[31px] p-8 md:p-12 relative z-10">

                    {/* Glowing brand badge */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider shadow-[0_0_12px_rgba(0,218,153,0.1)]">
                        Get In Touch
                      </span>
                      <span className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-grow" />
                    </div>

                    <h2 className="text-[26px] sm:text-[32px] font-bold text-text-primary leading-tight mb-4">
                      10. Contact
                      <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">
                        Information
                      </span>
                    </h2>

                    <p className="text-text-secondary text-[14px] leading-relaxed mb-8 max-w-[550px]">
                      If you have any questions or concern regarding this Privacy Policy, please feel free to reach out directly:
                    </p>

                    {/* Highly interactive Contact cards grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">

                      {/* Email block */}
                      <a
                        href="mailto:anilkumar.folio@gmail.com"
                        className="flex items-center gap-4 p-4.5 rounded-[22px] bg-white border border-primary/15 hover:border-primary/50 shadow-[0_4px_16px_rgba(0,218,153,0.02)] hover:shadow-[0_12px_24px_rgba(0,218,153,0.08)] transition-all duration-300 cursor-pointer group/card"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover/card:bg-primary group-hover/card:text-white transition-all duration-300">
                          <Mail className="w-5 h-5 text-primary group-hover/card:text-white transition-all duration-300" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Email Me</span>
                          <span className="text-[13.5px] font-bold text-text-primary truncate mt-0.5">
                            anilkumar.folio@gmail.com
                          </span>
                        </div>
                        <ArrowUpRight size={14} className="text-text-secondary/40 ml-auto group-hover/card:text-primary group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all flex-shrink-0" />
                      </a>

                      {/* Portfolio URL block */}
                      <Link
                        href="/"
                        className="flex items-center gap-4 p-4.5 rounded-[22px] bg-white border border-secondary/15 hover:border-secondary/50 shadow-[0_4px_16px_rgba(13,99,204,0.02)] hover:shadow-[0_12px_24px_rgba(13,99,204,0.08)] transition-all duration-300 cursor-pointer group/card"
                      >
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 border border-secondary/20 group-hover/card:bg-secondary group-hover/card:text-white transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5 text-secondary group-hover/card:text-white transition-all duration-300" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Website</span>
                          <span className="text-[13.5px] font-bold text-text-primary truncate mt-0.5">
                            www.anilkumar.design
                          </span>
                        </div>
                        <ArrowUpRight size={14} className="text-text-secondary/40 ml-auto group-hover/card:text-secondary group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all flex-shrink-0" />
                      </Link>

                    </div>

                    {/* Bottom action row: Link to Contact page */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--primary-mint)]" />
                        <span className="text-[12px] font-bold uppercase tracking-wider text-text-secondary">
                          Looking for the contact form?
                        </span>
                      </div>

                      <Link href="/contact" passHref>
                        <button className="btn-premium py-2.5 px-6 text-[12px] shadow-[0_8px_20px_rgba(0,218,153,0.15)] cursor-pointer">
                          <span>GO TO CONTACT PAGE</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </Link>
                    </div>

                  </div>
                </motion.div>
              </section>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
