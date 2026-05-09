import Link from 'next/link';
import Image from 'next/image';
import { DribbbleIcon, LinkedinIcon, InstagramIcon, BehanceIcon } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="pt-0 pb-10 px-6 relative overflow-hidden border-t border-text-primary/5">
      {/* Background Neon Effects */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full -ml-[250px] -mb-[250px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full -mr-[200px] -mt-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 gap-8">

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
              { 
                icon: DribbbleIcon, 
                name: 'Dribbble',
                activeClass: 'bg-[#ea4c89] text-white scale-110 shadow-[0_0_20px_rgba(234,76,137,0.3)] border-transparent',
                hoverClass: 'hover:bg-[#ea4c89] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(234,76,137,0.2)]',
                active: false 
              },
              { 
                icon: LinkedinIcon, 
                name: 'LinkedIn',
                activeClass: 'bg-[#0077b5] text-white scale-110 shadow-[0_0_20px_rgba(0,119,181,0.3)] border-transparent',
                hoverClass: 'hover:bg-[#0077b5] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(0,119,181,0.2)]',
                active: true 
              },
              { 
                icon: BehanceIcon, 
                name: 'Behance',
                activeClass: 'bg-[#1769ff] text-white scale-110 shadow-[0_0_20px_rgba(23,105,255,0.3)] border-transparent',
                hoverClass: 'hover:bg-[#1769ff] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(23,105,255,0.2)]',
                active: false 
              },
              { 
                icon: InstagramIcon, 
                name: 'Instagram',
                activeClass: 'bg-[#E1306C] text-white scale-110 shadow-[0_0_20px_rgba(225,48,108,0.3)] border-transparent',
                hoverClass: 'hover:bg-[#E1306C] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(225,48,108,0.2)]',
                active: false 
              }
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                aria-label={social.name}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 border border-transparent ${social.active
                  ? social.activeClass
                  : `glass-card text-text-secondary ${social.hoverClass}`
                  }`}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider matching other sections */}
        <div className="w-full py-0 flex items-center justify-center my-8">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[12px] text-text-secondary font-medium">
            Copyright©{new Date().getFullYear()} All Rights Reserved <span className="text-primary font-bold">Anil Kumar</span>
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

