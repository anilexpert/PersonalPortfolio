import { Globe as MapPin, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="pt-0 pb-10 px-6 relative overflow-hidden border-t border-text-primary/5">
      {/* Background Neon Effects */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full -ml-[250px] -mb-[250px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full -mr-[200px] -mt-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12 gap-8 border-b border-text-primary/5">

          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:rotate-[360deg]">
              <Image
                src="/MyLogo.png"
                alt="Anil Kumar Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-2xl tracking-tight text-text-primary">
              Anil Kumar<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {['HOME', 'SERVICES', 'CASE STUDIES', 'EXPERTISE', 'CONTACT US'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-[12px] font-semibold text-text-secondary hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: Globe, active: false },
              { icon: Globe, active: true },
              { icon: Globe, active: false },
              { icon: Globe, active: false }
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${social.active
                  ? 'bg-primary text-white scale-110 shadow-[0_0_20px_rgba(0,218,153,0.3)]'
                  : 'glass-card text-text-secondary hover:bg-white hover:text-text-primary'
                  }`}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <div className="text-[12px] text-text-secondary font-medium">
            Copyright©2025 All Rights Reserved <span className="text-primary font-bold">Anil Kumar</span>
          </div>

          <div className="flex items-center gap-6">
            {['Terms & Conditions', 'Privacy Policy', 'Contact Us'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12px] text-text-secondary hover:text-text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

