import { Users, MessageSquare, Globe, Camera, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 relative overflow-hidden bg-white/50 backdrop-blur-md">
      {/* Top border with gradient glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">

          {/* Left: Branding */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative group cursor-pointer">
              <span className="font-bold text-2xl tracking-tighter text-text-primary">
                Anil<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.4em] opacity-40">
              Senior Product Designer
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-6">
            {[
              { icon: Users, href: "#" },
              { icon: MessageSquare, href: "#" },
              { icon: Globe, href: "#" },
              { icon: Camera, href: "#" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-text-secondary hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Right: Copyright & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-4">
             <button 
                onClick={() => { if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:opacity-70 transition-all"
             >
                BACK TO TOP <ArrowUp size={14} />
             </button>
             <div className="text-[12px] font-medium text-text-secondary/50 text-center md:text-right">
               © {new Date().getFullYear()} Anil Kumar. <br />
               Built for <span className="text-primary font-bold">Excellence.</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
