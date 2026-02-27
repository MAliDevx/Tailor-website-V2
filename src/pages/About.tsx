import { motion } from 'motion/react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import {  Target, Eye, Award } from 'lucide-react';
import homeHero from '../assets/About.jfif';
import homeHero2 from '../assets/about3.jfif';


import { useScroll, useTransform } from "framer-motion";
import { JSX, useRef } from "react";

export default function About(): JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.75])
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
        className="relative min-h-[92vh] flex items-end overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div
          className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
          style={{ y: bgY }}
        >
          <img
            src={homeHero2}
            alt="Tailoring atelier"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Multi-layer atmospheric overlay */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: overlayOpacity }}
        >
          {/* Deep bottom gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-[#1a1410]/60 to-transparent" />
          {/* Left vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410]/40 via-transparent to-transparent" />
        </motion.div>

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* Decorative vertical rule */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="absolute left-8 md:left-16 top-1/4 bottom-[28%] w-px bg-gradient-to-b from-transparent via-[#c9a96e]/60 to-transparent origin-top"
        />

        {/* Content */}
        <div className="relative z-10 w-full px-8 md:px-16 pb-20 md:pb-28 max-w-6xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-8 h-px bg-[#c9a96e]" />
            <span
              className="text-[#c9a96e] uppercase tracking-[0.35em] text-xs font-medium"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic" }}
            >
              Our Story
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
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 1.05,
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Crafting Excellence{" "}
            <br />
            <em
              className="block"
              style={{
                color: "#c9a96e",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Since 1998
            </em>
          </motion.h1>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
            className="text-white/70 leading-relaxed max-w-xl"
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
              fontWeight: 300,
            }}
          >
            Taylor Studio was founded on a simple belief: that clothing should
            be as unique as the individual wearing it. What started as a small
            workshop in Mayfair has grown into a destination for those who
            value quality, tradition, and style.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center gap-3 mt-14"
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
              className="text-white/40 uppercase tracking-[0.25em] text-[10px]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Scroll
            </span>
          </motion.div>
        </div>

        {/* Year badge – floats top-right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute top-12 right-8 md:right-16 hidden md:flex flex-col items-center justify-center w-24 h-24 rounded-full border border-[#c9a96e]/30"
          style={{ backdropFilter: "blur(4px)", background: "rgba(26,20,16,0.35)" }}
        >
          <span
            className="text-[#c9a96e] text-xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.05em" }}
          >
            Est.
          </span>
          <span
            className="text-white/90 text-lg font-light -mt-1"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            1998
          </span>
        </motion.div>
      </section>

     
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="p-10 bg-cream rounded-3xl border border-ink/5">
              <div className="w-12 h-12 bg-ink text-cream rounded-xl flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-3xl mb-4">Our Mission</h3>
              <p className="text-ink/70 leading-relaxed">
                To provide our clients with the highest level of craftsmanship and personalized service, ensuring that every garment we create is a masterpiece of fit and style.
              </p>
            </div>
            <div className="p-10 bg-cream rounded-3xl border border-ink/5">
              <div className="w-12 h-12 bg-ink text-cream rounded-xl flex items-center justify-center mb-6">
                <Eye size={24} />
              </div>
              <h3 className="text-3xl mb-4">Our Vision</h3>
              <p className="text-ink/70 leading-relaxed">
                To be the global benchmark for bespoke tailoring, blending traditional techniques with modern innovation to dress the leaders and visionaries of tomorrow.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl mb-8">The Passion Behind the Needle</h2>
            <p className="text-ink/70 text-lg mb-6 leading-relaxed">
              Every stitch we make is a testament to our dedication. We don't just make clothes; we build confidence. Our team of master tailors brings decades of experience to the table, ensuring that the legacy of fine tailoring continues to thrive.
            </p>
            <p className="text-ink/70 text-lg mb-8 leading-relaxed">
              We source our fabrics from the most prestigious mills in Italy and England, selecting only the finest materials that meet our rigorous standards for durability, comfort, and aesthetic appeal.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-serif text-gold mb-1">25+</p>
                <p className="text-xs uppercase tracking-widest text-ink/50 font-bold">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-gold mb-1">15k+</p>
                <p className="text-xs uppercase tracking-widest text-ink/50 font-bold">Suits Crafted</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-gold mb-1">98%</p>
                <p className="text-xs uppercase tracking-widest text-ink/50 font-bold">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ink text-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Master Tailor</span>
            <h2 className="text-4xl md:text-5xl mb-6">Arthur Taylor</h2>
            <p className="text-cream/70 text-lg mb-6 leading-relaxed">
              Arthur began his journey as an apprentice in Savile Row at the age of 16. With a keen eye for geometry and a deep respect for fabric, he spent years perfecting the "Taylor Cut" – a signature silhouette that balances comfort with a sharp, modern aesthetic.
            </p>
            <p className="text-cream/70 text-lg mb-8 leading-relaxed">
              "A suit is more than just fabric and thread. It's an armor of confidence. My goal is to make every man feel like the best version of himself."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                <Award size={24} />
              </div>
              <p className="text-sm uppercase tracking-widest font-medium">Certified Master Tailor, 2005</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5">
              <img
                src={homeHero}
                alt="Arthur Taylor"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Journey</h2>
          <p className="text-ink/60 uppercase tracking-widest text-sm">Key milestones in our history</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {[
            { year: '1998', title: 'The Beginning', desc: 'Arthur Taylor opens his first small workshop in a quiet corner of Mayfair.' },
            { year: '2005', title: 'Savile Row Recognition', desc: 'Awarded the Master Tailor certification and expanded our team.' },
            { year: '2012', title: 'Global Expansion', desc: 'Began serving international clients and launched our corporate wear division.' },
            { year: '2023', title: 'Digital Transformation', desc: 'Launched our modern studio experience and digital consultation services.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-8 md:gap-16 items-start">
              <div className="text-3xl md:text-4xl font-serif text-gold shrink-0 pt-1">{item.year}</div>
              <div className="pb-12 border-b border-ink/5 last:border-0">
                <h4 className="text-2xl mb-3">{item.title}</h4>
                <p className="text-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-cream text-center">
        <h2 className="text-4xl md:text-5xl mb-8">Be Part of Our Legacy</h2>
        <Link to="/contact">
          <Button size="lg">Start Your Journey</Button>
        </Link>
      </Section>
    </motion.div>
  );
}
