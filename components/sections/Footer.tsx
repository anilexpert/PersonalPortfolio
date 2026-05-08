"use client";
import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

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
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-primary hover:border-primary transition-all">
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
              {["Dribbble", "Behance", "Instagram", "LinkedIn"].map(item => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">{item}</Link>
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
