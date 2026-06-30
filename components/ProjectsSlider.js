// projects-accordion – premium card accordion matching mockup
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// Project data
const allProjects = [
  {
    title: 'Spendora',
    slug: 'spendora',
    subtitle: 'AI‑Powered Smart Expense',
    img: '/images/Spendora-Card-Folio.png',
    description:
      'A full‑stack SaaS platform that streamlines expense reporting with AI‑driven categorisation and real‑time analytics.',
  },
  {
    title: 'Carenova',
    slug: 'carenova',
    subtitle: 'Facility & Compliance',
    img: '/images/Carenova-Card-Folio.png',
    description:
      'Enterprise‑grade solution for facility operations, allowing automated compliance checks and resource scheduling.',
  },
  {
    title: 'OasisPad',
    slug: 'oasispad',
    subtitle: 'Smart Knowledge Workspace',
    img: '/images/OasisPad-Card-Folio.png',
    description:
      'A collaborative note‑taking environment with AI‑suggested tagging and contextual linking.',
  },
  {
    title: 'TicketStack',
    slug: 'ticketstack',
    subtitle: 'Retail Ticketing Redesign',
    img: '/images/TicketStack-Card-Folio.png',
    description:
      'Revamped ticketing UI for retail stores, delivering frictionless checkout and analytics.',
  },
  {
    title: 'MarketVisionAI',
    slug: 'marketvisionai',
    subtitle: 'AI Market Intelligence',
    img: '/images/MarketVision-Card-Folio.png',
    description:
      'AI-powered market intelligence platform that continuously analyzes global market signals and proactively recommends strategic business opportunities.',
  },
  {
    title: 'ScanovaHealth',
    slug: 'scanovahealth',
    subtitle: 'Medical Device Validation',
    img: '/images/ScanovaHealth-Card-Folio.png',
    description:
      'AI-assisted medical device validation platform accelerating MRI compliance, risk analysis, and clinical validation workflows.',
  },
  {
    title: 'Kinora',
    slug: 'kinora',
    subtitle: 'Smart Caregiving Platform',
    img: '/images/Kinora-Card-Folio.png',
    description:
      'A mobile-first platform designed to help family caregivers organize responsibilities and coordinate care.',
  },
];

const projects = allProjects.slice(0, 4);

const AUTO_PLAY_MS = 5000;

export default function ProjectsSlider() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  /* ── auto‑play ── */
  useEffect(() => {
    if (hovered) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % projects.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [active, hovered]);

  /* ── keyboard nav ── */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') setActive((p) => (p - 1 + projects.length) % projects.length);
      if (e.key === 'ArrowRight') setActive((p) => (p + 1) % projects.length);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  /* ── touch swipe ── */
  const touchX = useRef(0);
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(diff) > 60) {
      setActive((p) =>
        diff > 0
          ? (p - 1 + projects.length) % projects.length
          : (p + 1) % projects.length
      );
    }
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-16 md:py-20 px-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-[12px] font-bold text-secondary uppercase tracking-wider">
              Selected Work
            </span>
          </div>
          <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-3 sm:mb-4">
            Products I've  {' '}
            <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">
              Helped Build
            </span>
          </h2>
          <p className="text-[14px] sm:text-base md:text-lg text-text-secondary leading-relaxed">
            Design solutions that improve engagement, conversion, and product adoption.
          </p>
        </motion.div>

        {/* ── Cards row ── */}
        <div
          className="flex flex-col md:flex-row w-full"
          style={{
            height: 'auto',
            minHeight: 540,
            gap: 20,
            borderRadius: 24,
          }}
        >
          {projects.map((proj, idx) => {
            const isActive = idx === active;

            return (
              <div
                key={proj.title}
                onClick={() => setActive(idx)}
                className={`relative overflow-hidden group cursor-pointer w-full transition-all duration-700 ease-[cubic-bezier(.77,0,.175,1)] min-w-0 rounded-[16px] lg:rounded-[24px] ${isActive ? 'h-[320px] md:h-[420px]' : 'h-[140px] md:h-[420px]'
                  }`}

                style={{
                  flex: isActive ? 4 : 1,
                }}
              >
                {/* ── Background image ── */}
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                  priority={idx === 0}
                />

                {/* ── Bottom vignette / Overlay ── */}
                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-700"
                  style={{
                    background: isActive
                      ? 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)'
                      : 'rgba(0,0,0,0.6)', // Full overlay for inactive cards for text legibility
                  }}
                />


                <AnimatePresence>
                  {/* ── COLLAPSED STATE: Compact title for inactive cards ── */}
                  {!isActive && (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4"
                    >
                      <h3
                        className="text-white font-semibold leading-snug drop-shadow-lg text-lg md:text-xl"
                      >
                        {proj.title}
                      </h3>
                      <p className="text-white/70 text-[10px] md:text-[12px] mt-1 font-normal uppercase tracking-widest">{proj.subtitle}</p>
                    </motion.div>
                  )}

                  {/* ── ACTIVE STATE: Glass panel containing all details ── */}
                  {isActive && (
                    <motion.div
                      key="active"
                      initial={{ opacity: 0, y: 20, x: '-50%' }}
                      animate={{ opacity: 1, y: 0, x: '-50%' }}
                      exit={{ opacity: 0, y: 20, x: '-50%' }}
                      transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute z-20 flex flex-col items-center justify-center w-[92%] sm:w-[88%] left-1/2 bottom-6 md:bottom-10 max-w-[500px]"
                    >
                      {/* Blurry glass panel containing Title, Subtitle, and Description */}
                      <div
                        className="w-full flex flex-col items-center p-4 md:p-10"
                        style={{
                          background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                          backdropFilter: 'blur(40px)',
                          WebkitBackdropFilter: 'blur(40px)',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                          borderRadius: 32,
                          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <h3 className="text-white font-bold text-[16px] md:text-[24px] leading-tight text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                          {proj.title}
                        </h3>
                        <p className="text-white/90 text-[12px] md:text-[14px] font-normal mt-2 mb-4 text-center">
                          {proj.subtitle}
                        </p>
                        <div className="w-16 h-[1px] bg-white/30 mb-5 rounded-full" />
                        <p className="text-white/95 text-[12px] md:text-[14px] leading-relaxed text-center font-normal max-w-[90%]">
                          {proj.description}
                        </p>
                        <div className="mt-4 lg:mt-6">
                          <Link href={`/case-studies/${proj.slug}`}>
                            <button className="btn-premium py-2 md:py-2.5 px-3 md:px-4 text-[12px] md:text-[13px]">
                              <span className="uppercase">Read Case Study</span> <ArrowUpRight size={16} />
                            </button>
                          </Link>
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>


                {/* ── Hover shimmer from top‑right ── */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 40%, transparent 100%)',
                    borderRadius: 24,
                  }}
                />

                {/* ── Progress bar (active card only) ── */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] z-30" style={{ borderRadius: '0 0 24px 24px' }}>
                    <div className="h-full bg-white/15 w-full" />
                    <motion.div
                      className="absolute top-0 left-0 h-full"
                      style={{
                        background: 'linear-gradient(90deg, #00DA99, #0D63CC)',
                        borderRadius: '0 2px 2px 0',
                      }}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: AUTO_PLAY_MS / 1000,
                        ease: 'linear',
                      }}
                      key={`progress-${active}`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to project ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background:
                  i === active
                    ? 'linear-gradient(90deg, #00DA99, #0D63CC)'
                    : 'rgba(0,0,0,0.12)',
              }}
            />
          ))}
        </div>

        {/* ── View All Works Button ── */}
        <div className="flex justify-center mt-12">
          <Link href="/case-studies" passHref>
            <button className="px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-[#0D63CC] to-[#00DA99] text-white text-[13px] md:text-base font-medium flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(13,99,204,0.15)] hover:scale-[1.02] transition-all duration-300">
              View All Works <ArrowUpRight size={18} className="stroke-[2]" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
