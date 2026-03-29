import { motion } from 'framer-motion'
import { Rocket, Mail, MessageCircle, Phone } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-16 px-6 relative" id="contact">
      <div className="max-w-5xl mx-auto relative">
        {/* L3 Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D63CC] to-[#00DA99] blur-[120px] opacity-15 rounded-[3rem] -z-10 animate-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card elevated rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Inner ambient glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00DA99]/10 blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0D63CC]/10 blur-[100px] -ml-32 -mb-32" />

          <div className="glass-icon-container w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center animate-float">
            <Rocket className="w-10 h-10 text-[#00DA99]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black italic heading-gradient leading-tight mb-6">Ready to build something that truly scales?</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto font-medium">
            I partner with teams to design intelligent, high-impact products—from early-stage ideas to enterprise platforms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
            {/* Card 1: Email */}
            <a href="mailto:hello@example.com" className="bg-white/90 backdrop-blur-xl rounded-[24px] p-8 border border-white flex flex-col items-center justify-center hover:-translate-y-2 transition-transform shadow-[0_8px_30px_rgba(13,99,204,0.06)] hover:shadow-[0_12px_40px_rgba(13,99,204,0.12)] group">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-teal-600 w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#282360] mb-2">Email Me</h3>
              <p className="text-slate-500 font-medium text-sm">anilkumar.folio@gmail.com</p>
            </a>

            {/* Card 2: WhatsApp */}
            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="bg-white/90 backdrop-blur-xl rounded-[24px] p-8 border border-white flex flex-col items-center justify-center hover:-translate-y-2 transition-transform shadow-[0_8px_30px_rgba(13,99,204,0.06)] hover:shadow-[0_12px_40px_rgba(13,99,204,0.12)] group">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="text-emerald-500 w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#282360] mb-2">WhatsApp</h3>
              <p className="text-slate-500 font-medium text-sm">+91 8437152327</p>
            </a>

            {/* Card 3: Call Directly */}
            <a href="tel:+15551234567" className="bg-white/90 backdrop-blur-xl rounded-[24px] p-8 border border-white flex flex-col items-center justify-center hover:-translate-y-2 transition-transform shadow-[0_8px_30px_rgba(13,99,204,0.06)] hover:shadow-[0_12px_40px_rgba(13,99,204,0.12)] group">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-indigo-500 w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#282360] mb-2">Call Directly</h3>
              <p className="text-slate-500 font-medium text-sm">+91 8437152327</p>
            </a>
          </div>
          <p className="text-md text-slate-600 mb-12 max-w-2xl mx-auto font-regular">
            Let’s create solutions that are not just functional, but strategically powerful.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
