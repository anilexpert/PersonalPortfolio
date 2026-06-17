import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RotatingBadge from '../components/RotatingBadge';
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Your name is required';
    if (!form.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) tempErrors.message = 'Please type a message';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Head>
        <title>Contact | Anil Kumar – Senior Product Designer</title>
        <meta name="description" content="Get in touch to collaborate on enterprise SaaS, healthcare UX, and AI workflow design solutions." />
      </Head>

      <Navbar />

      <main className="pt-20 md:pt-24 pb-20 md:pb-28">
        {/* ── 1. PAGE HERO ───────────────────────────────────────────────── */}
        <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
          {/* Symmetrical bg glows */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Breadcrumb matching other pages */}
            <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-2 text-[10px] md:text-[12px] font-semibold text-text-secondary uppercase tracking-widest mb-4 md:mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">Contact</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-[24px] sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 md:mb-6"
            >
              Contact
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent ml-2">Me</span>
            </motion.h1>

            {/* Circular Rotating Badge */}
            <div className="absolute top-2 right-[6%] hidden lg:block">
              <RotatingBadge
                icon={Mail}
                labels={["GET IN TOUCH", "COLLABORATE", "CONTACT"]}
                iconColor="#0D63CC"
                size={150}
              />
            </div>
          </div>
        </section>

        {/* ── 2. DUAL-COLUMN "LET'S TALK" FORM CONTAINER ──────────────────── */}
        <section className="relative px-4 md:px-6 pt-10 lg:pt-20 z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Visual copy & details */}
            <motion.div
              {...fadeUp(0.1)}
              className="lg:col-span-5 flex flex-col items-start"
            >
              {/* Brand mint/teal badge */}
              <span className="text-[12px] font-bold text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6">
                What I Do
              </span>

              {/* Bold titles */}
              <h2 className="text-[24px] sm:text-4xl md:text-5xl font-bold text-text-primary uppercase leading-[1.0] tracking-tighter mb-4">
                Let's Talk
              </h2>
              <h3 className="text-base sm:text-lg font-semibold text-text-primary uppercase tracking-tight mb-10 max-w-[420px]">
                Get in touch to collaborate.
              </h3>

              {/* Contact info detail rows */}
              <div className="space-y-4 w-full max-w-[440px] mb-10">

                {/* Connect pill box */}
                <div
                  className="flex items-center gap-4 p-4 rounded-[24px] bg-white/70 backdrop-blur-md border border-secondary/15 shadow-[0_8px_30px_rgba(13,99,204,0.04)] hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 border border-secondary/20">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">Connect</span>
                    <a href="tel:8437152327" className="text-sm font-semibold text-text-primary hover:text-primary transition-colors">
                      (+91) 8437152327, (+91) 7986572103
                    </a>
                  </div>
                </div>

                {/* Email pill box */}
                <div
                  className="flex items-center gap-4 p-4 rounded-[24px] bg-white/70 backdrop-blur-md border border-primary/15 shadow-[0_8px_30px_rgba(0,218,153,0.04)] hover:border-secondary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">Prefer Email?</span>
                    <a href="mailto:anilkumar.folio@gmail.com" className="text-sm font-semibold text-text-primary hover:text-primary transition-colors">
                      anilkumar.folio@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Icon Row */}
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary mr-2">
                  Social Icons:
                </span>

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
            </motion.div>

            {/* Right Column: Interactive light glass form */}
            <motion.div
              {...fadeUp(0.2)}
              className="lg:col-span-7"
            >
              <div
                className="w-full bg-white/70 backdrop-blur-[24px] rounded-[32px] p-8 md:p-12 border border-secondary/20 shadow-[0_24px_60px_rgba(13,99,204,0.06)] relative overflow-hidden group hover:border-primary/45 transition-all duration-700"
              >
                {/* Light neon breathing glows in background */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none z-0" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5 opacity-50 pointer-events-none z-0" />

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="contact-form"
                      onSubmit={handleSubmit}
                      className="space-y-6 relative z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid md:grid-cols-2 gap-6">

                        {/* Name Input */}
                        <div className="flex flex-col">
                          <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-primary/80 mb-2.5 block">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            className={`bg-white/80 border ${errors.name ? 'border-rose-500' : 'border-slate-200/85'} text-text-primary placeholder-slate-400 rounded-2xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 hover:border-secondary/40 transition-all w-full`}
                          />
                          {errors.name && (
                            <span className="text-rose-500 text-xs mt-2 flex items-center gap-1 font-medium">
                              <AlertCircle size={12} /> {errors.name}
                            </span>
                          )}
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col">
                          <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-primary/80 mb-2.5 block">
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleInputChange}
                            placeholder="Email address"
                            className={`bg-white/80 border ${errors.email ? 'border-rose-500' : 'border-slate-200/85'} text-text-primary placeholder-slate-400 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-primary/40 transition-all w-full`}
                          />
                          {errors.email && (
                            <span className="text-rose-500 text-xs mt-2 flex items-center gap-1 font-medium">
                              <AlertCircle size={12} /> {errors.email}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Message Input */}
                      <div className="flex flex-col">
                        <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-primary/80 mb-2.5 block">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleInputChange}
                          rows={6}
                          placeholder="Type your message"
                          className={`bg-white/80 border ${errors.message ? 'border-rose-500' : 'border-slate-200/85'} text-text-primary placeholder-slate-400 rounded-2xl px-5 py-4 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 hover:border-secondary/40 transition-all w-full resize-none`}
                        />
                        {errors.message && (
                          <span className="text-rose-500 text-xs mt-2 flex items-center gap-1 font-medium">
                            <AlertCircle size={12} /> {errors.message}
                          </span>
                        )}
                      </div>

                      {/* Send Button */}
                      <div className="pt-2">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-gradient-to-r from-primary to-secondary hover:brightness-105 active:scale-[0.98] disabled:from-slate-200 disabled:to-slate-300 disabled:text-slate-400 text-white font-bold uppercase tracking-wider rounded-full px-8 py-4 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/35 text-[13px]"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <>
                              Send Message <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                            </>
                          )}
                        </motion.button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                      className="flex flex-col items-center justify-center text-center py-12 relative z-10"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/25">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary mb-3">Message Sent!</h3>
                      <p className="text-text-secondary max-w-sm mb-8 text-[15px] leading-relaxed">
                        Thank you for getting in touch. I will read your message and reply as soon as possible.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="border border-secondary/25 hover:border-secondary hover:bg-secondary/5 text-secondary font-semibold text-xs uppercase tracking-wider rounded-full px-6 py-3 transition-all cursor-pointer"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
