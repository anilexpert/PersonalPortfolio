// projects-accordion – premium card accordion matching mockup
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

// Project data
const projects = [
  {
    title: 'SPENDiD™',
    subtitle: 'AI‑Powered Smart Expense',
    img: '/images/spendid.png',
    description:
      'A full‑stack SaaS platform that streamlines expense reporting with AI‑driven categorisation and real‑time analytics.',
  },
  {
    title: 'ALCD Systems™',
    subtitle: 'Facility & Compliance',
    img: '/images/carevanata.png',
    description:
      'Enterprise‑grade solution for facility operations, allowing automated compliance checks and resource scheduling.',
  },
  {
    title: 'OasisNotes™',
    subtitle: 'Smart Knowledge Workspace',
    img: '/images/oasis-notes.png',
    description:
      'A collaborative note‑taking environment with AI‑suggested tagging and contextual linking.',
  },
  {
    title: 'Ticket‑IT™',
    subtitle: 'Retail Ticketing Redesign',
    img: '/images/ticketit.png',
    description:
      'Revamped ticketing UI for retail stores, delivering frictionless checkout and analytics.',
  },
];

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
          <h2 className="text-[32px] sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Growth-Focused {' '}
            <span className="bg-gradient-to-r from-[#0D63CC] to-[#00DA99] bg-clip-text text-transparent">
              Product Initiatives
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
            minHeight: 480,
            gap: 14,
            borderRadius: 24,
          }}
        >
          {projects.map((proj, idx) => {
            const isActive = idx === active;

            return (
              <div
                key={proj.title}
                onClick={() => setActive(idx)}
                className="relative overflow-hidden group cursor-pointer w-full"
                style={{
                  flex: isActive ? 4 : 1,
                  height: isActive ? 400 : 80,
                  minHeight: isActive ? 400 : 80,
                  borderRadius: 20,
                  transition: 'all 0.6s cubic-bezier(.77,0,.175,1)',
                  minWidth: 0,
                }}
              >
                {/* ── Background image ── */}
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  priority={idx === 0}
                />

                {/* ── Dark bottom vignette ── */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: 20,
                    background: isActive
                      ? 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 45%, transparent 100%)'
                      : 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.05) 60%, transparent 100%)',
                  }}
                />

                <AnimatePresence>
                  {/* ── COLLAPSED STATE: title + subtitle at bottom center ── */}
                  {!isActive && (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-end text-center"
                      style={{ padding: '0 12px 24px' }}
                    >
                      <h3
                        className="text-white font-bold leading-snug"
                        style={{ fontSize: '1.05rem' }}
                      >
                        {proj.title}
                      </h3>
                      <p className="text-white/60 text-xs mt-1">{proj.subtitle}</p>
                    </motion.div>
                  )}

                  {/* ── ACTIVE STATE: centered title + glass panel below ── */}
                  {isActive && (
                      <motion.div
                        key="active"
                        initial={{ opacity: 0, y: 20, x: '-50%', scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
                        exit={{ opacity: 0, y: 20, x: '-50%', scale: 0.98 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute z-20 flex flex-col items-center justify-center w-[92%] sm:w-[88%]"
                        style={{
                          bottom: 24,
                          left: '50%',
                          maxWidth: 420,
                          background: 'rgba(28, 32, 36, 0.7)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: 20,
                          padding: '20px',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                        }}
                      >
                        <h3 className="text-white font-bold text-xl md:text-[1.7rem] leading-snug text-center mb-1">
                          {proj.title}
                        </h3>
                        <p className="text-white/80 text-[13px] md:text-sm text-center mb-3 font-medium">
                          {proj.subtitle}
                        </p>
                        <p className="text-white/80 text-[13px] md:text-sm leading-relaxed text-center line-clamp-3 md:line-clamp-none">
                          {proj.description}
                        </p>
                      </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Hover shimmer from top‑right ── */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 40%, transparent 100%)',
                    borderRadius: 20,
                  }}
                />

                {/* ── Progress bar (active card only) ── */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] z-30" style={{ borderRadius: '0 0 20px 20px' }}>
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
      </div>
    </section>
  );
}
