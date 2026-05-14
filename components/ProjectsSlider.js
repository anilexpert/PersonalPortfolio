'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

// ─── Design tokens (dark olive palette, matching site usage) ───────────────
// --lime        : #BFFF00  (high-vis lime accent)
// --foreground  : #1a1a12  (dark olive surface)
// --border      : rgba(255,255,255,0.10)
// --shadow-lime : 0 0 20px rgba(191,255,0,0.35)
// --shadow-card : 0 32px 64px rgba(0,0,0,0.55)
// font-anton    : loaded via Google Fonts / next/font (if available, fallback sans-serif)

const TEAL = '#00C896'; // primary brand color
const BLUE = '#0096ff'; // blue accent for gradient
const DARK_SURFACE = '#181810';
const CARD_BG = '#1e1e14';
const LIGHT_NEON = '#2a2a22'; // soft light neon for inactive elements
const GLASS_BG = 'rgba(255, 255, 255, 0.25)';
const GLASS_BORDER = 'rgba(0, 200, 150, 0.15)';

const slides = [
  {
    year: '2025',
    title: 'SPENDiD™',
    tag: 'AI-Powered Smart Expense Ecosystem',
    img: '/images/spendid.png',
  },
  {
    year: '2025',
    title: 'Carevanta Systems™',
    tag: 'Facility & Compliance Management',
    img: '/images/carevanata.png',
  },
  {
    year: '2024',
    title: 'OasisNotes™',
    tag: 'Smart Knowledge & Productivity Workspace',
    img: '/images/oasisnotes.png',
  },
  {
    year: '2024',
    title: 'Ticket-IT™',
    tag: 'Retail Ticketing Experience Redesign',
    img: '/images/ticketit.png',
  },
  {
    year: '2024',
    title: 'Market Prophet™',
    tag: 'AI-Powered Market Intelligence Platform',
    img: '/images/market-rophet.png',
  },
  {
    year: '2024',
    title: 'PulseGrid™',
    tag: 'SaaS Analytics & Business Intelligence',
    img: '/images/pulse-grid.png',
  },
];

export default function ProjectsSlider() {
  const [active, setActive] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const goTo = useCallback(
    (idx) => {
      setActive(idx);
      setFadeKey((k) => k + 1);
    },
    []
  );

  const prev = () => goTo((active - 1 + slides.length) % slides.length);
  const next = () => goTo((active + 1) % slides.length);

  // auto-advance
  useEffect(() => {
    const t = setInterval(() => next(), 5000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const slide = slides[active];
  // progress dot left % (0% → 100%)
  const dotLeft = slides.length > 1 ? (active / (slides.length - 1)) * 100 : 0;

  return (
    <section
      id="projects"
      className="projects-section"
      style={{
        //background: 'radial-gradient(circle at 10% 20%, #e8fcf6 0%, #f7fffb 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Background decorative glows (soft teal/green radial glow + 120px grid) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(rgba(0,200,150,0.5) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(0,200,150,0.15)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(0,150,200,0.1)_0%,transparent_70%)] blur-[100px]" />
        </div>
      </div>

      {/* Removed side-rail PROJECT text per user request */}

      {/* ── Main content wrapper ── */}
      <div
        className="projects-wrapper"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >

        {/* ── Header row ── */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          {/* Sub-header Badge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '100px',
                background: 'rgba(7, 159, 121, 0.1)', // light teal background
                border: `1px solid ${TEAL}33`,
              }}
            >
              <span style={{ color: TEAL, fontSize: '14px', lineHeight: 1 }}>✦</span>
              <span
                style={{
                  color: TEAL,
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',

                }}
              >
                Selected Work
              </span>
            </div>
          </div>

          {/* Centered heading matching mockup style */}
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-2">
            Recent Marketing
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">Projects</span>
          </h2>

        </div>

        {/* ── Body grid: slide card ── */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr', // card only
            gap: '48px', // slightly larger gap for better spacing
            alignItems: 'center',
            maxWidth: '1020px',
            margin: '0 auto',
          }}
        >


          {/* ── Center slide card ── */}
          <div
            className="slide-card"
            style={{
              position: 'relative',
              borderRadius: '32px',
              overflow: 'hidden',
              minHeight: '620px',
              // maxHeight: '520px',
              // height: 'clamp(520px, 38vw, 520px)',
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0, 150, 120, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            {/* Main Card Border Masking Effect */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '20px',
                padding: '1.5px',
                background: `linear-gradient(135deg, ${TEAL}, ${BLUE}, ${TEAL})`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none',
                zIndex: 10,
                opacity: 0.8,
              }}
            />
            {/* Stacked images with opacity crossfade */}
            {slides.map((s, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: i === active ? 1 : 0,
                  transition: 'opacity 0.7s ease',
                  zIndex: i === active ? 1 : 0,
                }}
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  priority={i === 0}
                  quality={100}
                />
              </div>
            ))}

            {/* Glassmorphism bottom overlay bar */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%', // covering the bottom part
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />


            {/* Bottom Caption Bar: Glassmorphism + L/R Alignment */}
            <div
              key={fadeKey}
              className="caption-bar"
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                zIndex: 12,
                padding: '30px 20px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                animation: 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              }}
            >
              {/* Caption Bar Border Masking (Subtle) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '24px',
                  padding: '1px',
                  background: `linear-gradient(to right, ${TEAL}44, ${BLUE}44)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                }}
              />
              {/* Left Side: Tag + Title */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  {/* <span style={{ width: '20px', height: '1px', background: TEAL }} /> */}
                  <span className="caption-tag" style={{ color: '#fff', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {slide.tag}
                  </span>
                  {/* <span style={{ width: '20px', height: '1px', background: TEAL }} /> */}
                </div>
                <h3 className="caption-title" style={{ color: '#fff', fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: 500, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  {slide.title}
                </h3>
              </div>

              {/* Right Side: Project Details Button */}
              <div className="caption-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span className="caption-details-text" style={{ color: '#fff', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}>
                  Project Details
                </span>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 24px rgba(0, 200, 150, 0.35)`,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onClick={next}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(45deg)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                >
                  <ArrowUpRight size={24} color="#fff" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

          {/* Removed side-rail year indicator per user request */}

        </div>

        {/* ── Footer controls ── */}
        <div
          className="slider-footer-controls"
          style={{
            marginTop: '36px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* Prev button — dark circular */}
          <button
            className="slider-btn"
            onClick={prev}
            aria-label="Previous project"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              border: 'none',
              background: `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 100%)`,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: `0 8px 24px rgba(0, 200, 150, 0.35)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Progress track */}
          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'rgba(2, 193, 120, 0.75)',
              position: 'relative',
              borderRadius: '2px',
            }}
          >
            {/* Lime dot */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `${dotLeft}%`,
                transform: 'translate(-50%, -50%)',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: TEAL,
                boxShadow: `0 0 12px rgba(0,200,150,0.55)`,
                transition: 'left 0.5s ease',
              }}
            />
          </div>

          {/* Next button — lime circular */}
          <button
            className="slider-btn"
            onClick={next}
            aria-label="Next project"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              border: 'none',
              background: `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 100%)`,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: `0 8px 24px rgba(0, 200, 150, 0.35)`,
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ArrowUpRight size={22} strokeWidth={2.5} />
          </button>
        </div>

      </div>

      {/* ── Keyframe: fade-up caption animation ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .projects-grid {
          display: grid !important;
        }

        .slider-footer-controls {
          padding-left: 0;
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 40px 0 !important;
            min-height: auto !important;
          }
          .projects-wrapper {
            padding: 0 20px !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .slide-card {
            min-height: 420px !important;
            border-radius: 24px !important;
          }
          .caption-bar {
            padding: 20px 16px !important;
            bottom: 16px !important;
            left: 16px !important;
            right: 16px !important;
            border-radius: 20px !important;
          }
          .caption-tag {
            font-size: 10px !important;
          }
          .caption-title {
            font-size: 20px !important;
          }
          .caption-details-text {
            display: none !important;
          }
          .caption-right {
            gap: 0 !important;
          }
          /* Hide decorative rails and pagination on mobile for cleaner look */
          .side-rail, .project-pagination {
            display: none !important;
          }
          .slider-footer-controls {
            padding-left: 0;
            gap: 16px !important;
            margin-top: 24px !important;
          }
          .slider-btn {
            width: 44px !important;
            height: 44px !important;
          }
        }
      `}</style>
    </section>
  );
}
