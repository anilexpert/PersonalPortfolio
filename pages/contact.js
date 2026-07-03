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

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Replace with your actual Web3Forms access key
          access_key: "81922b9d-d3dc-41ee-b9a9-079dbd00aa37",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        console.error("Form submission failed:", result);
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
