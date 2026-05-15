import { motion } from 'motion/react';
import { useScroll, useTransform } from 'framer-motion';
import React, { useState, useRef } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import contactHero from '../assets/Contact-form.webp';

const M = { fontFamily: "'Manrope', sans-serif" };
const I = { fontFamily: "'Inter', sans-serif" };

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Bespoke Suit', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: 'Bespoke Suit', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="pt-20">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0 w-full h-[115%] -top-[7.5%]" style={{ y: bgY }}>
          <img src={contactHero} alt="Contact us" className="w-full h-full object-cover object-center" />
        </motion.div>

        <div className="absolute inset-0 bg-[#0d0b09]/65" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d0b09]/90 via-[#0d0b09]/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }}
        />

        <motion.div
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="absolute left-8 md:left-16 top-1/4 bottom-[26%] w-px bg-linear-to-b from-transparent via-gold/50 to-transparent origin-top"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pb-20 md:pb-28">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-gold" />
            <span style={{ ...I, fontWeight: 700, letterSpacing: '0.22em', fontSize: '0.72rem' }} className="text-gold uppercase">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{ ...M, fontWeight: 800, fontSize: 'clamp(3rem, 9vw, 7.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
            className="text-white mb-8"
          >
            LET'S START A
            <br />
            <span className="text-gold">CONVERSATION</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
            style={{ ...I, fontWeight: 400, fontSize: '1.1rem', lineHeight: 1.8 }}
            className="text-white/65 max-w-lg mb-10"
          >
            Whether you have a question about our services or are ready to book your first fitting,
            we are here to help.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="flex items-center gap-3">
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-1">
              <span className="w-px h-8 bg-linear-to-b from-gold/80 to-transparent" />
              <span className="w-1 h-1 rounded-full bg-gold/60" />
            </motion.div>
            <span style={{ ...I, fontWeight: 600, letterSpacing: '0.2em', fontSize: '0.65rem' }} className="text-white/35 uppercase">Scroll</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="absolute top-10 right-8 md:right-16 hidden md:flex items-center gap-3 px-5 py-3 rounded-full border border-gold/25 backdrop-blur-sm bg-black/30"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span style={{ ...I, fontWeight: 600, fontSize: '0.82rem' }} className="text-white/70">Suryapet, Telangana</span>
        </motion.div>
      </section>

      {/* ── CONTACT CONTENT ──────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info column */}
          <div className="space-y-12">
            <div>
              <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase block mb-4">Reach Us</span>
              <h2 style={{ ...M, fontWeight: 800, lineHeight: 1.05 }} className="text-4xl md:text-5xl mb-8">Contact Information</h2>
              <div className="space-y-7">
                {[
                  { icon: MapPin, label: 'Our Studio', content: 'MAHA KALI ENTERPRISES\n2-95/1, Keerthi Nagar, KUDA Road No.2\nBeside Govt High School\nSuryapet, Telangana 508213' },
                  { icon: Phone, label: 'Phone', content: '+91 9441524214' },
                  { icon: Mail, label: 'Email', content: 'anclorfashionhub25@gmail.com' },
                  { icon: Clock, label: 'Business Hours', content: 'Mon – Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 4:00 PM\nSun: Closed' },
                ].map(({ icon: Icon, label, content }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cream text-gold rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 style={{ ...M, fontWeight: 700, fontSize: '1rem' }} className="mb-1">{label}</h4>
                      <p style={{ ...I, fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.75 }} className="text-ink/60 whitespace-pre-line">{content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ ...M, fontWeight: 700, fontSize: '1rem' }} className="mb-5">Follow Us</h4>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-11 h-11 rounded-full bg-cream text-ink flex items-center justify-center hover:bg-gold hover:text-ink transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="bg-cream p-8 md:p-12 rounded-4xl border border-ink/5">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-20 h-20 bg-gold text-ink rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={30} />
                </div>
                <h3 style={{ ...M, fontWeight: 800, fontSize: '1.8rem' }} className="mb-4">Message Sent!</h3>
                <p style={{ ...I, fontWeight: 400, fontSize: '1rem', lineHeight: 1.8 }} className="text-ink/60 mb-8">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { id: 'name',  label: 'Full Name',     type: 'text',  placeholder: 'John Doe' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id} className="space-y-2">
                      <label htmlFor={id} style={{ ...I, fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.15em' }} className="text-ink/50 uppercase block">{label}</label>
                      <input type={type} id={id} name={id} required value={(formData as any)[id]} onChange={handleChange}
                        placeholder={placeholder}
                        style={{ ...I, fontWeight: 400, fontSize: '0.97rem' }}
                        className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="phone" style={{ ...I, fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.15em' }} className="text-ink/50 uppercase block">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="+91 9441524214"
                      style={{ ...I, fontWeight: 400, fontSize: '0.97rem' }}
                      className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" style={{ ...I, fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.15em' }} className="text-ink/50 uppercase block">Service</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange}
                      style={{ ...I, fontWeight: 400, fontSize: '0.97rem' }}
                      className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none">
                      <option>Bespoke Suit</option>
                      <option>Wedding Wear</option>
                      <option>Alterations</option>
                      <option>Corporate Wear</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" style={{ ...I, fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.15em' }} className="text-ink/50 uppercase block">Your Message</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    style={{ ...I, fontWeight: 400, fontSize: '0.97rem' }}
                    className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none" />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* ── MAP ──────────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30500.310424715208!2d79.60255489441717!3d17.143981754688507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34dbb936420209%3A0xfbf6b844cdbdb717!2sSuryapet%2C%20Telangana%2C%20India!5e0!3m2!1sen!2s!4v1772689727997!5m2!1sen!2s"
            width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="India Map" className="rounded-[3rem]" />
        </div>
      </section>

    </motion.div>
  );
}
