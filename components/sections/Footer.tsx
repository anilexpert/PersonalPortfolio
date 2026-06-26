"use client";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
  </svg>
);

const GmailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 px-6 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Designer.
            </Link>
            <p className="text-[#64748B] max-w-sm leading-relaxed">
              Crafting premium digital experiences through strategic design and high-fidelity execution. Available for select freelance opportunities.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: LinkedinIcon, href: "www.linkedin.com/in/anil-kumar-folio" },
                { Icon: GmailIcon, href: "mailto:anilkumar.folio@gmail.com" },
                { Icon: WhatsappIcon, href: "https://wa.me/918437152327" }
              ].map(({ Icon, href }, i) => (
                <Link key={i} href={href} target={href.startsWith('http') ? "_blank" : undefined} className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-primary hover:border-primary transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="font-bold text-[#0F172A]">Explore</h4>
            <ul className="space-y-4">
              {["Work", "Services", "About", "Blog"].map(item => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="font-bold text-[#0F172A]">Social</h4>
            <ul className="space-y-4">
              {[
                { name: "LinkedIn", href: "www.linkedin.com/in/anil-kumar-folio" },
                { name: "Gmail", href: "mailto:anilkumar.folio@gmail.com" },
                { name: "WhatsApp", href: "https://wa.me/918437152327" }
              ].map(item => (
                <li key={item.name}>
                  <Link href={item.href} target={item.href.startsWith('http') ? "_blank" : undefined} className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="font-bold text-[#0F172A]">Newsletter</h4>
            <p className="text-sm text-[#64748B]">Get the latest design insights and project updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow h-11 px-4 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:border-primary"
              />
              <button className="h-11 px-4 rounded-xl bg-[#0F172A] text-white hover:bg-black transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#E2E8F0] gap-6">
          <p className="text-xs text-[#64748B]">
            © {new Date().getFullYear()} Designer Portfolio. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-[#0F172A] hover:text-primary transition-colors group"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-[#E2E8F0] flex items-center justify-center group-hover:border-primary">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
