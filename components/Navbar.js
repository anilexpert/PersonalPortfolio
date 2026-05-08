import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#work' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 glass-card px-8 py-3 rounded-[24px] ${
          scrolled ? 'scale-[0.98] border-opacity-60' : ''
        }`}
        style={{
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid transparent',
          borderImage: 'linear-gradient(to right, transparent, var(--primary-mint), transparent) 1'
        }}
      >
        {/* Left: Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:rotate-[360deg]">
            <Image
              src="/MyLogo.png"
              alt="Anil Kumar Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-text-primary">
            Anil<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-text-secondary hover:text-text-primary transition-all relative group"
            >
              {link.name}
              {/* Mint underline glow */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary shadow-[0_0_8px_var(--primary-mint)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="flex items-center">
          <button className="btn-premium py-2 px-6 text-[13px]">
            <span>Let's Talk</span>
            <MessageCircle size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}


