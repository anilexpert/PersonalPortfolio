import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { projects } from '@/data/projects';

const servicesList = [
  { name: 'AI-Driven Product Experience', href: '/services/ai-experience-design' },
  { name: 'Scalable SaaS Platform', href: '/services/saas-platform-design' },
  { name: 'Product Strategy & Architecture', href: '/services/product-strategy' },
  { name: 'Data Intelligence & UX', href: '/services/data-intelligence' },
  { name: 'Design Systems & UI Engineering', href: '/services/design-systems' },
  { name: 'Enterprise Workflow Optimization', href: '/services/enterprise-workflow' }
];

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
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 lg:top-6 left-0 right-0 z-50 px-0 lg:px-6 pointer-events-none">
      <div
        className={`w-full lg:max-w-7xl mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 glass-card px-4 py-3 lg:px-8 lg:py-3 lg:rounded-[24px] rounded-xl ${scrolled ? 'scale-[0.98] border-opacity-60' : ''
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
          {navLinks.map((link) => {
            if (link.name === 'Services' || link.name === 'Case Studies') {
              const isServices = link.name === 'Services';
              const dropdownItems = isServices
                ? servicesList
                : projects.map((p) => ({
                    name: p.category,
                    href: `/case-studies/${p.slug}`,
                  }));

              return (
                <div key={link.name} className="relative group h-full flex items-center">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-[16px] font-medium text-text-secondary hover:text-text-primary uppercase transition-all relative py-2"
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    {/* Mint underline glow */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary shadow-[0_0_8px_var(--primary-mint)] transition-all duration-300 group-hover:w-full" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 pt-4 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-xl rounded-2xl overflow-hidden py-2 flex flex-col">
                      {dropdownItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="px-5 py-3 text-[14px] font-medium text-text-secondary hover:text-primary hover:bg-gray-50/80 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={link.name} className="relative h-full flex items-center group">
                <Link
                  href={link.href}
                  className="text-[16px] font-medium text-text-secondary hover:text-text-primary uppercase transition-all relative py-2"
                >
                  {link.name}
                  {/* Mint underline glow */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary shadow-[0_0_8px_var(--primary-mint)] transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Right: CTA */}
        <div className="flex items-center">
          <Link href="/contact" passHref>
            <button className="btn-premium py-1 md:py-2 md:px-4 text-[12px] md:text-[14px] ">
              <span className="uppercase">Let's Talk</span>
              <MessageCircle size={18} />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}


