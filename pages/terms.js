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
  Sparkles
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

export default function TermsPage() {
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
    { id: 1, label: '1. Use of This Website', icon: Compass },
    { id: 2, label: '2. Intellectual Property', icon: ShieldCheck },
    { id: 3, label: '3. Project & Representation', icon: FileText },
    { id: 4, label: '4. No Professional Liability', icon: Scale },
    { id: 5, label: '5. External Links', icon: Link2 },
    { id: 6, label: '6. Collaboration & Engagement', icon: UserCheck },
    { id: 7, label: '7. Privacy Policy', icon: Lock },
    { id: 8, label: '8. Changes to Terms', icon: RefreshCw },
    { id: 9, label: '9. Contact Information', icon: Mail },
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

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-bg-base relative">
      <Head>
        <title>Terms & Conditions | Anil Kumar – Senior Product Designer</title>
        <meta name="description" content="Welcome to the Terms & Conditions page of Anil Kumar, AI-Driven Product Designer. Read the terms governing the use of this website." />
      </Head>

      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 md:pb-24">
        {/* ── 1. HERO SECTION ───────────────────────────────────────────────── */}
        <section className="relative py-10 md:py-16 px-4 md:px-6 overflow-hidden">
          {/* Symmetrical glowing orbs in bg */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/15 blur-[130px] rounded-full pointer-events-none animate-pulse-slow" style={{ animationDelay: '-4s' }} />

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Breadcrumbs */}
            <motion.div
              {...fadeUp(0)}
              className="flex items-center justify-center gap-2 text-[10px] md:text-[12px] font-medium text-text-secondary uppercase tracking-widest mb-4 md:mb-5"
            >
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={12} className="text-text-secondary/50" />
              <span className="text-primary">Terms & Conditions</span>
            </motion.div>

            {/* Glowing H1 Title */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-[24px] sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 md:mb-6"
            >
              Terms &
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2.5">
                Conditions
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
                  className="w-full bg-white/75 backdrop-blur-[24px] rounded-[24px] p-5 border border-secondary/15 shadow-[0_20px_50px_rgba(13,99,204,0.04)]"
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
                  className="bg-white/70 backdrop-blur-[24px] rounded-[24px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
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

                  <p className="text-text-secondary text-[14px] md:text-base leading-relaxed relative z-10">
                    Welcome to my personal portfolio website. By accessing or using this website, you agree to the following Terms & Conditions. If you do not agree, please do not use this website.
                  </p>
                </motion.div>
              </section>

              {/* Section 1 */}
              <section id="section-1" data-section="1" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[24px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                      <Compass className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      1. Use of This Website
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    This website is intended to showcase my professional work, skills, and experience as an AI-Driven Product Designer.
                  </p>

                  <h3 className="text-xs font-black uppercase tracking-wider text-text-primary mb-4">
                    You agree to:
                  </h3>

                  <ul className="space-y-4">
                    {[
                      'Use the website for lawful purposes only',
                      'Not misuse, copy, or exploit content without permission',
                      'Not attempt to disrupt or compromise website security'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-text-secondary text-[15px] leading-relaxed group font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(0,218,153,0.8)] group-hover:scale-125 transition-transform duration-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              {/* Section 2 */}
              <section id="section-2" data-section="2" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[24px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      2. Intellectual Property
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    All content on this website—including but not limited to case studies, UI/UX designs, visual assets, written content, and branding elements—is the intellectual property of <strong className="text-text-primary font-semibold">Anil Kumar</strong>, unless otherwise stated.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-primary mb-4 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        You may:
                      </h3>
                      <ul className="space-y-3.5">
                        <li className="flex items-start gap-3.5 text-text-secondary text-[14px] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                          <span>View and reference content for personal or professional inspiration.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-rose-500 mb-4 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        You may not:
                      </h3>
                      <ul className="space-y-3.5">
                        {[
                          'Copy, reproduce, or redistribute any content without prior written consent.',
                          'Use any work for commercial purposes without permission.'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3.5 text-text-secondary text-[14px] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Section 3 */}
              <section id="section-3" data-section="3" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[24px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                      <FileText className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      3. Project & Case Study Representation
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    The projects displayed on this website are presented for demonstration purposes only.
                  </p>

                  <ul className="space-y-4">
                    {[
                      'May include conceptual, client-based, or confidential work (sanitized/redacted where necessary).',
                      'Some details may be modified to protect client confidentiality.',
                      'While every effort is made to ensure accuracy, results and outcomes may vary in real-world applications.'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-text-secondary text-[15px] leading-relaxed group">
                        <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(13,99,204,0.6)] group-hover:scale-125 transition-transform duration-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              {/* Section 4 */}
              <section id="section-4" data-section="4" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[24px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Scale className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      4. No Professional Liability
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    The information on this website is provided for general informational purposes only.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-2">
                    <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                      <h4 className="text-[11px] font-black uppercase tracking-wider text-text-primary mb-3">
                        I do not guarantee:
                      </h4>
                      <ul className="space-y-2">
                        {['Business outcomes', 'Product performance', 'UX improvements based solely on showcased work'].map((s, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-text-secondary text-[13px] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                      <h4 className="text-[11px] font-black uppercase tracking-wider text-rose-500 mb-3">
                        I am not liable for:
                      </h4>
                      <ul className="space-y-2">
                        {['Any decisions made based on this content', 'Any direct or indirect damages arising from use of this website'].map((s, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-text-secondary text-[13px] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-2 flex-shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Section 5 */}
              <section id="section-5" data-section="5" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[24px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                      <Link2 className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      5. External Links
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    This website may include links to third-party platforms (e.g., portfolio tools, social media, or product demos).
                  </p>

                  <h3 className="text-xs font-black uppercase tracking-wider text-text-primary mb-4">
                    I am not responsible for:
                  </h3>

                  <ul className="space-y-4">
                    {[
                      'The content or accuracy of external websites.',
                      'Privacy practices or policies of third-party platforms.'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-text-secondary text-[15px] leading-relaxed group">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(0,218,153,0.8)] group-hover:scale-125 transition-transform duration-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              {/* Section 6 */}
              <section id="section-6" data-section="6" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[24px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <UserCheck className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      6. Collaboration & Engagement
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    Any collaboration, freelance, or consulting engagement will be governed by a separate agreement or contract.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    {[
                      'Will include defined scope, timelines, and payment terms.',
                      'This website does not constitute a binding offer for services.'
                    ].map((txt, idx) => (
                      <div key={idx} className="bg-white/50 backdrop-blur-sm p-5 border border-secondary/10 rounded-2xl hover:border-secondary/30 transition-all duration-300">
                        <p className="text-text-secondary text-[13.5px] leading-relaxed font-semibold">
                          {txt}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Section 7 */}
              <section id="section-7" data-section="7" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[24px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                      <Lock className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      7. Privacy
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
                    Any personal information shared through contact forms or email communication will be handled responsibly and will not be shared with third parties without consent, except where required by law.
                  </p>
                </motion.div>
              </section>

              {/* Section 8 */}
              <section id="section-8" data-section="8" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.1)}
                  className="bg-white/70 backdrop-blur-[24px] rounded-[24px] p-8 md:p-10 border border-secondary/15 shadow-[0_16px_40px_rgba(13,99,204,0.03)] hover:border-primary/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <RefreshCw className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                      8. Changes to Terms
                    </h2>
                  </div>

                  <p className="text-text-secondary text-[14px] leading-relaxed mb-4">
                    I reserve the right to update or modify these Terms & Conditions at any time without prior notice.
                  </p>

                  <div className="inline-flex items-center gap-2.5 p-4 rounded-2xl bg-primary/5 border border-primary/15 text-primary text-[14px] font-medium leading-normal">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 animate-pulse" />
                    <span>Continued use of the website after changes implies acceptance of the updated terms.</span>
                  </div>
                </motion.div>
              </section>

              {/* ── SECTION 9 (CONTACT BLOCK - SPECIAL LIGHT-NEON THEME) ────── */}
              <section id="section-9" data-section="9" className="scroll-mt-36">
                <motion.div
                  {...fadeUp(0.15)}
                  className="relative p-[1px] rounded-[24px] bg-gradient-to-tr from-primary via-secondary to-primary shadow-[0_24px_50px_rgba(0,218,153,0.12)] overflow-hidden group transition-all duration-500 hover:shadow-[0_32px_60px_rgba(0,218,153,0.22)]"
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
                      9. Contact
                      <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">
                        Information
                      </span>
                    </h2>

                    <p className="text-text-secondary text-[14px] leading-relaxed mb-8 max-w-[550px]">
                      For any questions regarding these Terms & Conditions, or if you would like to discuss professional design collaborations, feel free to reach out directly through the options below.
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

                      {/* LinkedIn block */}
                      <a
                        href="https://www.linkedin.com/in/anil-kumar-folio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4.5 rounded-[22px] bg-white border border-secondary/15 hover:border-secondary/50 shadow-[0_4px_16px_rgba(13,99,204,0.02)] hover:shadow-[0_12px_24px_rgba(13,99,204,0.08)] transition-all duration-300 cursor-pointer group/card"
                      >
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 border border-secondary/20 group-hover/card:bg-secondary group-hover/card:text-white transition-all duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="text-secondary group-hover/card:text-white transition-all duration-300"
                          >
                            <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
                          </svg>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">LinkedIn</span>
                          <span className="text-[13.5px] font-bold text-text-primary truncate mt-0.5">
                            anil-kumar-folio
                          </span>
                        </div>
                        <ArrowUpRight size={14} className="text-text-secondary/40 ml-auto group-hover/card:text-secondary group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all flex-shrink-0" />
                      </a>

                    </div>

                    {/* Bottom action row: Link to Contact page */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--primary-mint)]" />
                        <span className="text-[12px] font-bold uppercase tracking-wider text-text-secondary">
                          Looking for the form?
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
