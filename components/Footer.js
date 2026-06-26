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
              href="www.linkedin.com/in/anil-kumar-folio"
              whileHover={{ scale: 1.08, y: -2 }}
              className="w-11 h-11 rounded-xl bg-white border border-secondary/15 hover:border-secondary text-secondary flex items-center justify-center transition-all shadow-[0_8px_20px_rgba(13,99,204,0.03)] hover:shadow-[0_12px_24px_rgba(13,99,204,0.12)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
              </svg>
            </motion.a>

            {/* Gmail Icon */}
            <motion.a
              href="mailto:anilkumar.folio@gmail.com"
              whileHover={{ scale: 1.08, y: -2 }}
              className="w-11 h-11 rounded-xl bg-white border border-red-500/15 hover:border-red-500 text-red-500 flex items-center justify-center transition-all shadow-[0_8px_20px_rgba(239,68,68,0.03)] hover:shadow-[0_12px_24px_rgba(239,68,68,0.12)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </motion.a>

            {/* WhatsApp Icon */}
            <motion.a
              href="https://wa.me/918437152327"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              className="w-11 h-11 rounded-xl bg-white border border-[#25D366]/15 hover:border-[#25D366] text-[#25D366] flex items-center justify-center transition-all shadow-[0_8px_20px_rgba(37,211,102,0.03)] hover:shadow-[0_12px_24px_rgba(37,211,102,0.12)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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

