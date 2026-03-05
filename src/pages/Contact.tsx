import { motion } from 'motion/react';
import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import {  useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import contactHero from '../assets/Contact-form.webp';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bespoke Suit',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: 'Bespoke Suit', message: '' });
    }, 1500);
  };

    const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Header */}
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex items-end overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
        style={{ y: bgY }}
      >
        <img
          src={contactHero}
          alt="Contact us"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>


      <div className="absolute inset-0 bg-[#1a1410]/60" />
      {/* Strong bottom-to-top fade for text */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/90 via-[#1a1410]/30 to-transparent" />
      {/* Left-side light bleed */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a1410]/30" />
      {/* Warm gold radial near bottom-left where text sits */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 20% 85%, rgba(201,169,110,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Vertical decorative rule */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="absolute left-8 md:left-16 top-1/4 bottom-[26%] w-px bg-gradient-to-b from-transparent via-[#c9a96e]/50 to-transparent origin-top"
      />

      {/* Content – anchored to bottom-left */}
      <div className="relative z-10 w-full px-8 md:px-16 pb-20 md:pb-28 max-w-5xl mt-9">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="w-8 h-px bg-[#c9a96e]/70" />
          <span
            className="text-[#c9a96e] uppercase tracking-[0.35em] text-xs font-medium"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic" }}
          >
            Get In Touch
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-white mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            lineHeight: 1.05,
            fontWeight: 300,
            letterSpacing: "-0.01em",
          }}
        >
          Let's Start a
          <br />
          <em style={{ color: "#c9a96e", fontStyle: "italic", fontWeight: 400 }}>
            Conversation
          </em>
        </motion.h1>

        {/* Divider ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8 origin-left"
        >
          <span className="w-12 h-px bg-[#c9a96e]/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]/60" />
          <span className="w-6 h-px bg-[#c9a96e]/25" />
        </motion.div>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="text-white/65 leading-relaxed max-w-lg"
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            fontWeight: 300,
          }}
        >
          Whether you have a question about our services or are ready to book
          your first fitting, we're here to help.
        </motion.p>

        {/* CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex items-center gap-3 mt-10"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <span className="w-px h-8 bg-gradient-to-b from-[#c9a96e]/80 to-transparent" />
            <span className="w-1 h-1 rounded-full bg-[#c9a96e]/60" />
          </motion.div>
          <span
            className="text-white/35 uppercase tracking-[0.25em] text-[10px]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Scroll
          </span>
        </motion.div>
      </div>

      {/* Floating location tag – top right */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
        className="absolute top-10 right-8 md:right-16 hidden md:flex items-center gap-3 px-5 py-3 rounded-full border border-[#c9a96e]/25"
        style={{ backdropFilter: "blur(8px)", background: "rgba(26,20,16,0.4)" }}
      >
        {/* Pin dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
        <span
          className="text-white/70 text-sm tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          Mayfair, London
        </span>
      </motion.div>
    </section>

      {/* Contact Content */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream text-gold rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Our Studio</h4>
                    <p className="text-ink/60">MAHA KALI ENTERPRISES
2-95/1, Keerthi Nagar, KUDA Road No.2
Beside Govt High School
Suryapet, Telangana 508213</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream text-gold rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Phone</h4>
                    <p className="text-ink/60">+91 9441524214</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream text-gold rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Email</h4>
                    <p className="text-ink/60">anclorfashionhub25@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream text-gold rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Business Hours</h4>
                    <p className="text-ink/60">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-ink/60">Sat: 10:00 AM - 4:00 PM</p>
                    <p className="text-ink/60">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-serif mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-cream text-ink flex items-center justify-center hover:bg-gold hover:text-ink transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-cream text-ink flex items-center justify-center hover:bg-gold hover:text-ink transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-cream text-ink flex items-center justify-center hover:bg-gold hover:text-ink transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cream p-8 md:p-12 rounded-[2rem] border border-ink/5">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gold text-ink rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl mb-4">Message Sent!</h3>
                <p className="text-ink/60 mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-ink/50">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-ink/50">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                      placeholder="anclorfashionhub25@gmail.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold text-ink/50">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                      placeholder="+91 9441524214"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-xs uppercase tracking-widest font-bold text-ink/50">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option>Bespoke Suit</option>
                      <option>Wedding Wear</option>
                      <option>Alterations</option>
                      <option>Corporate Wear</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-ink/50">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
<section className="px-6 pb-24">
  <div className="max-w-7xl mx-auto">
    <div className=" overflow-hidden">
      
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30500.310424715208!2d79.60255489441717!3d17.143981754688507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34dbb936420209%3A0xfbf6b844cdbdb717!2sSuryapet%2C%20Telangana%2C%20India!5e0!3m2!1sen!2s!4v1772689727997!5m2!1sen!2s"
  width="100%"
  height="450"
  style={{border:0}}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="India Map"
  className="rounded-[3rem]">
</iframe>
    </div>
  </div>
</section>
    </motion.div>
  );
}
