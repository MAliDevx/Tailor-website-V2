import { motion } from 'motion/react';
import { useScroll, useTransform } from 'framer-motion';
import { JSX, useRef } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Heart, Shield, Gem, Leaf, Users, Clock, ArrowRight } from 'lucide-react';
import heroImg from '../assets/About3.jfif';
import artisanImg from '../assets/About.jfif';
import studioImg from '../assets/About2.jfif';
import teamImg1 from '../assets/Image1.png';
import teamImg2 from '../assets/Image2.jfif';
import teamImg3 from '../assets/Images3.jfif';

const M = { fontFamily: "'Manrope', sans-serif" };
const I = { fontFamily: "'Inter', sans-serif" };

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '15k+', label: 'Suits Crafted' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '120+', label: 'Fabric Selections' },
];

const values = [
  { icon: Gem,    title: 'Uncompromising Quality',  desc: 'Every seam, button, and stitch executed to the highest standard. We never cut corners — only fabric.' },
  { icon: Heart,  title: 'Passion for the Craft',   desc: 'Tailoring is not a job for us — it is a calling. We bring genuine dedication to every garment we create.' },
  { icon: Users,  title: 'Client First, Always',    desc: 'Your vision drives everything. We listen deeply, advise honestly, and deliver precisely what you imagined.' },
  { icon: Shield, title: 'Integrity & Trust',       desc: 'Transparent pricing, honest timelines, and a guarantee that stands behind every garment we produce.' },
  { icon: Clock,  title: 'Timeless Tradition',      desc: 'Rooted in centuries of Savile Row heritage, our techniques are proven by time and perfected by repetition.' },
  { icon: Leaf,   title: 'Responsible Sourcing',    desc: 'We partner exclusively with mills that uphold ethical labour practices and sustainable production standards.' },
];

const team = [
  { name: 'Arthur Taylor',  role: 'Founder & Master Tailor',    bio: 'Over 30 years on Savile Row. Arthur\'s eye for proportion and silhouette is the foundation of every Taylor Studio garment.', img: artisanImg,  cert: 'Master Tailor, 2005' },
  { name: 'Elena Rossi',    role: 'Head of Fabric Curation',    bio: 'Based between Milan and London, Elena travels the world\'s finest mills to hand-select every bolt in our collection.',    img: teamImg1,    cert: 'Textile Scholar, Florence' },
  { name: 'James Okafor',   role: 'Senior Bespoke Tailor',      bio: 'Specialist in structured shoulders and military detail — bringing a sharp modern edge to classical tailoring.',             img: teamImg2,    cert: 'Guild of Tailors, 2011' },
  { name: 'Mei Lin',        role: 'Alterations Specialist',     bio: 'Mei\'s precision alterations have transformed thousands of garments. Clients trust her with even their most prized pieces.', img: teamImg3,    cert: 'Certified Master Alteration, 2015' },
];

const milestones = [
  { year: '1998', title: 'The Beginning',             desc: 'Arthur Taylor opens a small atelier in Mayfair with two sewing machines and an unshakeable belief in craft.' },
  { year: '2002', title: 'First Royal Commission',    desc: 'Commissioned to produce ceremonial dress for a distinguished member of the House of Lords.' },
  { year: '2005', title: 'Savile Row Recognition',    desc: 'Awarded the Master Tailor certification and expanded the team to six skilled artisans.' },
  { year: '2010', title: 'Italian Fabric Partnership',desc: 'Formed an exclusive sourcing partnership with two of Biella\'s most prestigious wool mills.' },
  { year: '2012', title: 'Global Clientele',          desc: 'Began serving international clients across New York, Dubai, and Singapore with travelling fittings.' },
  { year: '2019', title: 'Corporate Wear Division',   desc: 'Launched a dedicated division for executive wardrobing, serving FTSE 100 leadership teams.' },
  { year: '2023', title: 'Digital Studio Experience', desc: 'Introduced virtual consultations and a digital fabric viewer, bringing bespoke to clients worldwide.' },
];

const awards = [
  { label: 'Best Bespoke Tailor',       body: 'London Fashion Awards',         year: '2018' },
  { label: 'Master Tailor Certification', body: 'Savile Row Bespoke Association', year: '2005' },
  { label: 'Excellence in Craft',       body: 'British Fashion Council',        year: '2021' },
  { label: 'Sustainable Luxury',        body: 'Ethical Trade Alliance',         year: '2023' },
];

export default function About(): JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.6, 0.8]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden">
        <motion.div className="absolute inset-0 w-full h-[115%] -top-[7.5%]" style={{ y: bgY }}>
          <img src={heroImg} alt="Taylor Studio atelier" className="w-full h-full object-cover object-center" />
        </motion.div>

        <motion.div className="absolute inset-0" style={{ opacity: overlayOpacity }}>
          <div className="absolute inset-0 bg-linear-to-t from-[#0d0b09] via-[#0d0b09]/70 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-[#0d0b09]/50 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pb-20 md:pb-32">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-10 h-0.5 bg-gold" />
            <span style={{ ...I, fontWeight: 700, letterSpacing: '0.22em' }} className="text-gold text-xs uppercase">
              Our Story
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ ...M, fontWeight: 800, fontSize: 'clamp(3.2rem, 9vw, 8rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
            className="text-white mb-8"
          >
            CRAFTING
            <br />
            <span className="text-gold">EXCELLENCE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ ...I, fontWeight: 400, fontSize: '1.125rem', lineHeight: 1.75 }}
            className="text-white/65 max-w-xl mb-12"
          >
            Founded in 1998, Taylor Studio was built on a single belief — that clothing should be
            as unique as the individual wearing it. From a small Mayfair workshop to a global
            destination, we have never stopped pursuing the perfect fit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact">
              <Button size="lg" variant="secondary">Book a Consultation</Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-white border-white/40 hover:bg-white hover:text-ink">
                View Services
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 md:right-16 hidden md:flex flex-col items-center justify-center w-20 h-20 rounded-full border border-gold/30 backdrop-blur-sm bg-black/30">
          <span style={{ ...M, fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.1em' }} className="text-gold uppercase">Est.</span>
          <span style={{ ...M, fontWeight: 800, fontSize: '1rem' }} className="text-white">1998</span>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────── */}
      <div className="bg-gold">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center justify-center py-12 px-6 border-r border-ink/10 last:border-0"
            >
              <span style={{ ...M, fontWeight: 800, fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1 }} className="text-ink">
                {s.value}
              </span>
              <span style={{ ...I, fontWeight: 600, letterSpacing: '0.12em', fontSize: '0.7rem' }} className="text-ink/60 uppercase mt-2 text-center">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── MISSION & VISION ─────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="text-center mb-20">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.75rem' }} className="text-gold uppercase">
            What Drives Us
          </span>
          <h2 style={{ ...M, fontWeight: 800 }} className="text-5xl md:text-6xl text-ink mt-4 mb-0 leading-tight">
            Purpose &amp; Direction
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            { icon: Target, label: 'Our Mission', color: 'bg-ink', heading: 'Every Garment, a Masterpiece', body: 'To provide our clients with the highest level of craftsmanship and personalised service — ensuring every garment is a masterpiece of fit, fabric, and style, made to be worn, loved, and passed down.' },
            { icon: Eye,    label: 'Our Vision',  color: 'bg-gold', heading: 'The Global Benchmark', body: 'To be the world\'s most respected bespoke tailoring house — blending centuries of tradition with modern innovation to dress the leaders, creatives, and visionaries of tomorrow.' },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-3xl overflow-hidden bg-cream border border-ink/5 p-10 group hover:shadow-2xl transition-shadow duration-500"
            >
              <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center mb-8`}>
                <card.icon size={26} className={card.color === 'bg-gold' ? 'text-ink' : 'text-gold'} />
              </div>
              <span style={{ ...I, fontWeight: 700, letterSpacing: '0.18em', fontSize: '0.7rem' }} className="text-gold uppercase block mb-3">
                {card.label}
              </span>
              <h3 style={{ ...M, fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2rem)', lineHeight: 1.2 }} className="text-ink mb-5">
                {card.heading}
              </h3>
              <p style={{ ...I, fontWeight: 400, fontSize: '1rem', lineHeight: 1.8 }} className="text-ink/65">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brand statement row */}
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <span style={{ ...I, fontWeight: 700, letterSpacing: '0.18em', fontSize: '0.72rem' }} className="text-gold uppercase block mb-5">
              The Passion Behind the Needle
            </span>
            <h2 style={{ ...M, fontWeight: 800, lineHeight: 1.1 }} className="text-4xl md:text-5xl text-ink mb-6">
              A Legacy Built Stitch by Stitch
            </h2>
            <p style={{ ...I, fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.85 }} className="text-ink/65 mb-5">
              Every garment we make is a testament to dedication. We do not just make clothes — we build confidence.
              Our master tailors bring decades of experience, ensuring the legacy of fine tailoring thrives in a world of fast fashion.
            </p>
            <p style={{ ...I, fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.85 }} className="text-ink/65">
              We source exclusively from prestigious mills in Italy, England, and Japan — selecting only materials that
              meet our rigorous standards for durability, drape, and beauty.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-3 gap-6">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '15k+', label: 'Suits Crafted' },
              { value: '98%', label: 'Happy Clients' },
            ].map((n, i) => (
              <div key={i} className="text-center p-6 bg-cream rounded-2xl">
                <p style={{ ...M, fontWeight: 800, fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1 }} className="text-gold mb-2">{n.value}</p>
                <p style={{ ...I, fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.12em' }} className="text-ink/50 uppercase">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── VALUES ───────────────────────────────────────────────────── */}
      <Section className="bg-ink text-cream">
        <div className="text-center mb-16">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.75rem' }} className="text-gold uppercase">
            What We Stand For
          </span>
          <h2 style={{ ...M, fontWeight: 800 }} className="text-5xl md:text-6xl text-white mt-4 mb-4 leading-tight">
            Our Values
          </h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '1rem' }} className="text-cream/50 max-w-xl mx-auto leading-relaxed">
            The principles that guide every decision, every cut, and every stitch we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-white/8 hover:border-gold/50 hover:bg-white/5 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <v.icon size={22} className="text-gold group-hover:text-ink transition-colors duration-300" />
              </div>
              <h4 style={{ ...M, fontWeight: 700, fontSize: '1.15rem' }} className="text-white mb-3">{v.title}</h4>
              <p style={{ ...I, fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.75 }} className="text-cream/55">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── FOUNDER ──────────────────────────────────────────────────── */}
      <Section className="bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-4/5 rounded-3xl overflow-hidden">
                <img src={artisanImg} alt="Arthur Taylor" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold rounded-2xl p-6 shadow-xl">
                <p style={{ ...M, fontWeight: 800, fontSize: '2.2rem', lineHeight: 1 }} className="text-ink">30+</p>
                <p style={{ ...I, fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.12em' }} className="text-ink/60 uppercase mt-1">Years on Savile Row</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase block mb-4">
              Master Tailor
            </span>
            <h2 style={{ ...M, fontWeight: 800, lineHeight: 1.05 }} className="text-5xl md:text-6xl text-ink mb-6">
              Arthur Taylor
            </h2>
            <p style={{ ...I, fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.85 }} className="text-ink/65 mb-5">
              Arthur began his journey as an apprentice on Savile Row at the age of 16. With a keen eye for
              geometry and a deep respect for fabric, he spent years perfecting the "Taylor Cut" — a signature
              silhouette that balances comfort with a sharp, modern aesthetic.
            </p>
            <p style={{ ...I, fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.85 }} className="text-ink/65 mb-8">
              Over three decades, he has dressed captains of industry, heads of state, and cultural icons —
              each garment bearing the quiet confidence that only true bespoke can deliver.
            </p>

            {/* Quote block — no italic, bold treatment instead */}
            <div className="bg-ink rounded-2xl p-8 mb-8 relative overflow-hidden">
              <span style={{ ...M, fontWeight: 800, fontSize: '6rem', lineHeight: 0.8, color: '#C5A059', opacity: 0.15 }} className="absolute top-4 left-6 select-none">"</span>
              <p style={{ ...M, fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.7 }} className="text-white relative z-10">
                A suit is more than fabric and thread. It is an armour of confidence. My goal is to make every person feel like the finest version of themselves.
              </p>
              <span style={{ ...I, fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.15em' }} className="text-gold uppercase block mt-4">— Arthur Taylor, Founder</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full border-2 border-gold/40 flex items-center justify-center">
                <Award size={20} className="text-gold" />
              </div>
              <p style={{ ...I, fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em' }} className="text-ink/70 uppercase">
                Certified Master Tailor — Savile Row, 2005
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── TEAM ─────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.75rem' }} className="text-gold uppercase">
            The Artisans
          </span>
          <h2 style={{ ...M, fontWeight: 800 }} className="text-5xl md:text-6xl text-ink mt-4 mb-4 leading-tight">
            Meet Our Team
          </h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '1rem' }} className="text-ink/55 max-w-xl mx-auto leading-relaxed">
            Master craftspeople united by an uncompromising passion for excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-3/4 rounded-2xl overflow-hidden mb-5 relative bg-cream">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p style={{ ...I, fontWeight: 400, fontSize: '0.85rem', lineHeight: 1.65 }} className="text-cream/90">{member.bio}</p>
                </div>
              </div>
              <h4 style={{ ...M, fontWeight: 700, fontSize: '1.15rem' }} className="text-ink mb-1">{member.name}</h4>
              <p style={{ ...I, fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.15em' }} className="text-gold uppercase mb-2">{member.role}</p>
              <p style={{ ...I, fontWeight: 400, fontSize: '0.82rem' }} className="text-ink/45">{member.cert}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── STUDIO IMAGE BANNER ──────────────────────────────────────── */}
      <div className="relative h-96 overflow-hidden">
        <img src={studioImg} alt="The Taylor Studio atelier" className="w-full h-full object-cover brightness-50" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center px-10 md:px-20">
          <div>
            <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase block mb-4">Est. 1998</span>
            <h3 style={{ ...M, fontWeight: 800, fontSize: 'clamp(2rem,5vw,4rem)', lineHeight: 1.1 }} className="text-white">
              The Mayfair Atelier
            </h3>
            <p style={{ ...I, fontWeight: 400, fontSize: '1rem' }} className="text-white/60 mt-4 max-w-md leading-relaxed">
              Where every commission begins — in a space designed for precision, quiet focus, and the art of the perfect fit.
            </p>
          </div>
        </div>
      </div>

      {/* ── TIMELINE ─────────────────────────────────────────────────── */}
      <Section className="bg-cream">
        <div className="text-center mb-16">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.75rem' }} className="text-gold uppercase">
            History
          </span>
          <h2 style={{ ...M, fontWeight: 800 }} className="text-5xl md:text-6xl text-ink mt-4 mb-4 leading-tight">
            Our Journey
          </h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '1rem' }} className="text-ink/50 max-w-md mx-auto leading-relaxed">
            25 years of milestones, relationships, and craftsmanship.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-0">
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-8 md:gap-14 items-start group"
            >
              <div className="flex flex-col items-center shrink-0 w-20">
                <div className="w-3 h-3 rounded-full bg-gold mt-2 group-hover:scale-150 transition-transform duration-300" />
                {i < milestones.length - 1 && <div className="w-px flex-1 bg-gold/20 my-2 min-h-[3rem]" />}
              </div>
              <div className="pb-10">
                <span style={{ ...M, fontWeight: 800, fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1 }} className="text-gold/30 group-hover:text-gold transition-colors duration-300 block mb-2">
                  {item.year}
                </span>
                <h4 style={{ ...M, fontWeight: 700, fontSize: '1.2rem' }} className="text-ink mb-2">{item.title}</h4>
                <p style={{ ...I, fontWeight: 400, fontSize: '0.97rem', lineHeight: 1.75 }} className="text-ink/55">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── AWARDS ───────────────────────────────────────────────────── */}
      <Section className="bg-ink text-cream">
        <div className="text-center mb-16">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.75rem' }} className="text-gold uppercase">
            Recognition
          </span>
          <h2 style={{ ...M, fontWeight: 800 }} className="text-5xl md:text-6xl text-white mt-4 mb-4 leading-tight">
            Awards &amp; Honours
          </h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '1rem' }} className="text-cream/45 max-w-md mx-auto leading-relaxed">
            Industry recognition earned over a quarter-century of dedication to the craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-white/8 hover:border-gold/50 hover:bg-white/5 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <Award size={22} className="text-gold group-hover:text-ink transition-colors duration-300" />
              </div>
              <span style={{ ...M, fontWeight: 800, fontSize: '1.5rem' }} className="text-gold block mb-2">{award.year}</span>
              <h4 style={{ ...M, fontWeight: 700, fontSize: '1rem', lineHeight: 1.3 }} className="text-white mb-2">{award.label}</h4>
              <p style={{ ...I, fontWeight: 400, fontSize: '0.82rem' }} className="text-cream/45">{award.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <Section className="bg-white" containerClassName="text-center">
        <div className="max-w-3xl mx-auto">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.75rem' }} className="text-gold uppercase block mb-6">
            Begin Your Journey
          </span>
          <h2 style={{ ...M, fontWeight: 800, lineHeight: 1.05 }} className="text-5xl md:text-7xl text-ink mb-8">
            Be Part of Our Legacy
          </h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '1.1rem', lineHeight: 1.8 }} className="text-ink/60 mb-12 max-w-xl mx-auto">
            Every great wardrobe starts with a single conversation. Book your private consultation
            and let us craft something extraordinary — made entirely for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Start Your Journey</Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">View Our Services</Button>
            </Link>
          </div>
        </div>
      </Section>

    </motion.div>
  );
}
