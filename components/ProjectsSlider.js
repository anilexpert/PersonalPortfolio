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
    title: 'Data-driven dashboard',
    tag: 'SaaS Dashboard',
    img: '/images/spendid-dashboard.png',
  },
  {
    year: '2025',
    title: 'Compliance & Workflow',
    tag: 'Healthcare Platform',
    img: '/images/alcd-dashboard.png',
  },
  {
    year: '2024',
    title: 'Practice Management System',
    tag: 'Oasis Notes',
    img: '/images/OasisNotes.png',
  },
  {
    year: '2024',
    title: 'AI Regulatory Submissions',
    tag: 'Pharma Tech',
    img: '/images/numantra.png',
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
      style={{
        //background: 'radial-gradient(circle at 10% 20%, #e8fcf6 0%, #f7fffb 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Background decorative glows (soft teal/green radial glow + 120px grid) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(rgba(0,200,150,0.5) 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(0,200,150,0.15)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(0,150,200,0.1)_0%,transparent_70%)] blur-[100px]" />
        </div>
      </div>

      {/* Removed side-rail PROJECT text per user request */}

      {/* ── Main content wrapper ── */}
      <div
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

        {/* ── Body grid: pagination | slide card | year rail ── */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr', // pagination and card
            gap: '48px', // slightly larger gap for better spacing
            alignItems: 'center',
            minHeight: '640px',
          }}
        >

          {/* ── Numbered pagination column ── */}
          <div
            className="project-pagination"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              alignItems: 'center',
            }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '16px', // modern squircle look
                  border: '1px solid',
                  borderColor: i === active ? TEAL : GLASS_BORDER,
                  background:
                    i === active
                      ? `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 100%)`
                      : GLASS_BG,
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  color: i === active ? '#fff' : 'rgba(0, 80, 70, 0.6)',
                  fontSize: '14px',
                  fontWeight: 800,
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  boxShadow:
                    i === active
                      ? `0 12px 24px rgba(0, 200, 150, 0.3), inset 0 1px 1px rgba(255,255,255,0.4)`
                      : '0 4px 12px rgba(0,0,0,0.03)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Inter', monospace",
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Border masking glow effect for active state */}
                {i === active && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-1px',
                      borderRadius: '16px',
                      padding: '1px',
                      background: `linear-gradient(135deg, rgba(255,255,255,0.6), transparent, rgba(255,255,255,0.3))`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      pointerEvents: 'none',
                    }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>

          {/* ── Center slide card ── */}
          <div
            style={{
              position: 'relative',
              borderRadius: '32px',
              overflow: 'hidden',
              minHeight: '520px',
              maxHeight: '580px',
              height: 'clamp(520px, 38vw, 580px)',
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
                borderRadius: '32px',
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
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority={i === 0}
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
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                zIndex: 12,
                padding: '28px 32px',
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
                  <span style={{ width: '20px', height: '1px', background: TEAL }} />
                  <span style={{ color: TEAL, fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {slide.tag}
                  </span>
                  <span style={{ width: '20px', height: '1px', background: TEAL }} />
                </div>
                <h3 style={{ color: '#fff', fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  {slide.title}
                </h3>
              </div>

              {/* Right Side: Project Details Button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', opacity: 0.6, textTransform: 'uppercase' }}>
                  Project Details
                </span>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
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
                  <ArrowUpRight size={22} color="#fff" strokeWidth={3} />
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
          padding-left: 96px; /* Align with card: 48px pagination + 48px gap */
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          /* Hide decorative rails and pagination on mobile for cleaner look */
          .side-rail, .project-pagination {
            display: none !important;
          }
          .slider-footer-controls {
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
