import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-[#0D63CC]/10 relative z-10 bg-transparent">
      <div className="max-w-[80rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

        {/* Left: Logo */}
        <div className="shrink-0">
          <Image src="/MyLogo.png" alt="Logo" width={80} height={50} className="w-auto h-12 object-contain" />
        </div>

        {/* Center: Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-[11px] font-bold tracking-[2px] uppercase text-slate-500">
          <a href="#about" className="hover:text-[#0D63CC] transition-colors">About</a>
          <a href="#expertise" className="hover:text-[#0D63CC] transition-colors">Expertise</a>
          <a href="#works" className="hover:text-[#0D63CC] transition-colors">Works</a>
          <a href="#process" className="hover:text-[#0D63CC] transition-colors">Process</a>
          <a href="#contact" className="hover:text-[#0D63CC] transition-colors">Contact</a>
          {/* <a href="#" className="hover:text-[#0D63CC] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#0D63CC] transition-colors">Dribbble</a>
          <a href="#" className="hover:text-[#0D63CC] transition-colors">Behance</a> */}
        </div>

        {/* Right: Copyright */}
        <div className="text-[13px] font-medium text-slate-400 shrink-0">
          © {new Date().getFullYear()} - Anil Kumar. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
