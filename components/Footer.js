import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
            {['HOME', 'ABOUT', 'SERVICES', 'CASE STUDIES', 'CONTACT US'].map((link) => (
              <Link
                key={link}
                href={
                  link === 'HOME' ? '/' :
                    link === 'ABOUT' ? '/about' :
                      link === 'SERVICES' ? '/services' :
                        link === 'CASE STUDIES' ? '/case-studies' :
                          link === 'CONTACT US' ? '/contact' :
                            `#${link.toLowerCase().replace(' ', '-')}`
                }
                className="text-[12px] font-semibold text-text-secondary hover:text-primary transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            {/* LinkedIn Icon */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.08, y: -2 }}
              className="w-11 h-11 rounded-xl bg-white border border-secondary/15 hover:border-secondary text-secondary flex items-center justify-center transition-all shadow-[0_8px_20px_rgba(13,99,204,0.03)] hover:shadow-[0_12px_24px_rgba(13,99,204,0.12)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
              </svg>
            </motion.a>

            {/* Twitter Icon */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.08, y: -2 }}
              className="w-11 h-11 rounded-xl bg-white border border-primary/15 hover:border-primary text-primary flex items-center justify-center transition-all shadow-[0_8px_20px_rgba(0,218,153,0.03)] hover:shadow-[0_12px_24px_rgba(0,218,153,0.12)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>

            {/* Instagram Icon */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.08, y: -2 }}
              className="w-11 h-11 rounded-xl bg-white border border-pink-200/50 hover:border-pink-500 text-pink-500 flex items-center justify-center transition-all shadow-[0_8px_20px_rgba(236,72,153,0.03)] hover:shadow-[0_12px_24px_rgba(236,72,153,0.12)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </motion.a>

            {/* GitHub Icon */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.08, y: -2 }}
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-slate-800 text-slate-800 flex items-center justify-center transition-all shadow-[0_8px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_24px_rgba(15,23,42,0.12)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </motion.a>
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
              <Link
                key={item}
                href={
                  item === 'Terms & Conditions' ? '/terms' :
                    item === 'Privacy Policy' ? '/privacy' :
                      item === 'Contact Us' ? '/contact' : '#'
                }
                className="text-[12px] text-text-secondary hover:text-text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

