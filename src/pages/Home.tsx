import { motion } from 'motion/react';
import { Scissors, Ruler, Award, Star, ArrowRight, CheckCircle2, MessageSquare, Gem, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import homeHero from '../assets/HomePage.jfif';
import HomeImage2 from '../assets/About2.jfif';
import Gallery1 from '../assets/Image4.jfif';
import Gallery2 from '../assets/Image5.jfif';
import Gallery3 from '../assets/Image7.jfif';
import Gallery4 from '../assets/Image8.jfif';

const M = { fontFamily: "'Manrope', sans-serif" };
const I = { fontFamily: "'Inter', sans-serif" };

const featuredServices = [
  { title: 'Bespoke Suits',      description: 'Individually hand-cut and sewn to your exact measurements for the ultimate fit and silhouette.', icon: Scissors },
  { title: 'Wedding Wear',       description: 'Elegant attire for your most special day, from classic tuxedos to traditional ceremonial wear.', icon: Award },
  { title: 'Expert Alterations', description: 'Precision adjustments to your existing wardrobe to ensure every piece fits flawlessly.', icon: Ruler },
];

const steps = [
  { step: '01', title: 'Consultation',        desc: 'A private one-on-one session to understand your lifestyle, occasions, and aesthetic vision.', icon: MessageSquare },
  { step: '02', title: 'Measurement & Fabric',desc: 'Over 20 precise body measurements taken, paired with a guided tour of our 120+ premium fabric selection.', icon: Ruler },
  { step: '03', title: 'Handcrafting',         desc: 'Each garment is cut and sewn entirely by hand by a single master tailor for total consistency.', icon: Scissors },
  { step: '04', title: 'Final Fitting',        desc: 'Unlimited fittings until every seam, button, and lapel sits exactly as it should — guaranteed.', icon: Award },
];

const testimonials = [
  { name: 'James Wilson',  role: 'CEO, TechCorp',        content: 'The attention to detail at Taylor Studio is unmatched. My custom suit fits like a second skin — I\'ve never felt more confident walking into a boardroom.', rating: 5 },
  { name: 'Sarah Jenkins', role: 'Fashion Designer',      content: 'I trust them with all my delicate pieces. Their craftsmanship is truly world-class and the fabric knowledge of their team is extraordinary.', rating: 5 },
  { name: 'Michael Chen',  role: 'Architect',             content: 'Professional, timely, and incredibly skilled. The best tailoring experience I\'ve ever had. My wedding suit was an absolute masterpiece.', rating: 5 },
];

const stats = [
  { value: '25+',  label: 'Years of Excellence' },
  { value: '15k+', label: 'Suits Crafted' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '120+', label: 'Fabric Selections' },
];

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-175 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={homeHero} alt="Tailoring Workshop" className="w-full h-full object-cover brightness-40" />
          <div className="absolute inset-0 bg-linear-to-b from-ink/20 via-transparent to-ink/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8">
            <span className="w-10 h-px bg-gold" />
            <span style={{ ...I, fontWeight: 700, letterSpacing: '0.22em', fontSize: '0.72rem' }} className="text-gold uppercase">
              Est. 1998 — Master Craftsmanship
            </span>
            <span className="w-10 h-px bg-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ ...M, fontWeight: 800, fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', lineHeight: 1.0, letterSpacing: '-0.03em' }}
            className="text-white mb-8"
          >
            Crafting Perfect Fits,
            <br />
            <span className="text-gold">Tailored Just for You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ ...I, fontWeight: 400, fontSize: '1.1rem', lineHeight: 1.8 }}
            className="text-cream/75 max-w-2xl mx-auto mb-12"
          >
            Experience the luxury of bespoke tailoring. From precision alterations to hand-crafted suits,
            we bring your vision to life with timeless elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact"><Button size="lg" variant="secondary">Book Appointment</Button></Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-ink">View Services</Button>
            </Link>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-linear-to-b from-gold to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <div className="bg-ink py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center px-4 border-r border-white/10 last:border-0 py-4">
              <p style={{ ...M, fontWeight: 800, fontSize: 'clamp(2.2rem,4vw,3rem)', lineHeight: 1 }} className="text-gold mb-2">{stat.value}</p>
              <p style={{ ...I, fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.12em' }} className="text-cream/50 uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase">What We Do</span>
          <h2 style={{ ...M, fontWeight: 800 }} className="text-5xl md:text-6xl mt-3 mb-4 leading-tight">Our Expertise</h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '0.97rem' }} className="text-ink/55 uppercase tracking-wider">Elevating your wardrobe, one stitch at a time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className="group p-10 bg-cream rounded-2xl border border-ink/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl">
              <div className="w-14 h-14 bg-ink text-cream rounded-xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-ink transition-colors duration-500">
                <service.icon size={28} />
              </div>
              <h3 style={{ ...M, fontWeight: 700, fontSize: '1.35rem' }} className="mb-4">{service.title}</h3>
              <p style={{ ...I, fontWeight: 400, fontSize: '0.97rem', lineHeight: 1.8 }} className="text-ink/65 mb-6">{service.description}</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-gold font-medium group/link">
                <span style={{ ...I, fontWeight: 600, fontSize: '0.85rem' }}>Learn More</span>
                <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <Section className="bg-cream">
        <div className="text-center mb-16">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase">The Process</span>
          <h2 style={{ ...M, fontWeight: 800 }} className="text-5xl md:text-6xl mt-3 mb-4 leading-tight">How It Works</h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '0.97rem' }} className="text-ink/55">A seamless journey from vision to wardrobe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-ink/5 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-20 h-20 rounded-full bg-ink flex items-center justify-center mb-6 relative group-hover:bg-gold transition-colors duration-500">
                <step.icon size={28} className="text-gold group-hover:text-ink transition-colors duration-500" />
                <span style={{ ...M, fontWeight: 800, fontSize: '0.65rem' }}
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold group-hover:bg-ink text-ink group-hover:text-gold flex items-center justify-center transition-colors duration-500">
                  {step.step}
                </span>
              </div>
              <h4 style={{ ...M, fontWeight: 700, fontSize: '1.1rem' }} className="mb-3">{step.title}</h4>
              <p style={{ ...I, fontWeight: 400, fontSize: '0.88rem', lineHeight: 1.75 }} className="text-ink/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────── */}
      <Section className="bg-ink text-cream overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase">Our Promise</span>
            <h2 style={{ ...M, fontWeight: 800, lineHeight: 1.05 }} className="text-5xl md:text-6xl mt-4 mb-8">
              Why Discerning Clients
              <br />
              <span className="text-gold">Choose Taylor Studio</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: 'Master Craftsmanship', desc: 'Over 25 years of experience blending traditional Savile Row techniques with modern precision.' },
                { title: 'Premium Fabrics',       desc: 'We source only the finest wools, silks, and linens from world-renowned Italian and English mills.' },
                { title: 'Personalized Service',  desc: 'Every client receives a dedicated consultant who guides them through the entire bespoke journey.' },
                { title: 'Perfect Fit Guarantee', desc: 'We aren\'t satisfied until you are. Unlimited fittings, free of charge, until every detail is perfect.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-gold shrink-0 mt-1" size={22} />
                  <div>
                    <h4 style={{ ...M, fontWeight: 700, fontSize: '1.1rem' }} className="text-white mb-1">{item.title}</h4>
                    <p style={{ ...I, fontWeight: 400, fontSize: '0.97rem', lineHeight: 1.75 }} className="text-cream/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="aspect-4/5 rounded-3xl overflow-hidden">
              <img src={HomeImage2} alt="Tailoring Detail" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-2xl hidden md:block">
              <p style={{ ...M, fontWeight: 800, fontSize: '2.5rem', lineHeight: 1 }} className="text-ink mb-1">25+</p>
              <p style={{ ...I, fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.12em' }} className="text-ink/65 uppercase">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── GALLERY ──────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase">Our Work</span>
          <h2 style={{ ...M, fontWeight: 800 }} className="text-5xl md:text-6xl mt-3 mb-4 leading-tight">Craft in Every Detail</h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '0.97rem' }} className="text-ink/55">From the first cut to the final stitch</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="col-span-1 row-span-2 overflow-hidden rounded-2xl group">
            <img src={Gallery1} alt="Tailoring detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          {[Gallery2, Gallery3, Gallery4].map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: (i + 1) * 0.1 }}
              className="overflow-hidden rounded-2xl group">
              <img src={img} alt={`Tailoring work ${i + 2}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services"><Button variant="outline">Explore Our Services</Button></Link>
        </div>
      </Section>

      {/* ── FABRIC BANNER ────────────────────────────────────────────── */}
      <div className="bg-gold py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gem size={14} className="text-ink/40" />
            <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.7rem' }} className="text-ink/55 uppercase">
              Sourced from the World's Finest Mills
            </span>
            <Leaf size={14} className="text-ink/40" />
          </div>
          <h2 style={{ ...M, fontWeight: 800, lineHeight: 1.1 }} className="text-4xl md:text-5xl text-ink mb-5">
            120+ Premium Fabrics from Italy, England &amp; Japan
          </h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.8 }} className="text-ink/65 max-w-2xl mx-auto mb-8">
            From lightweight summer linens to heavyweight Shetland wools — our curated fabric library ensures every client finds a material as unique as they are.
          </p>
          <Link to="/contact">
            <Button className="bg-ink text-cream hover:bg-white hover:text-ink">Request a Fabric Consultation</Button>
          </Link>
        </div>
      </div>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <Section className="bg-cream">
        <div className="text-center mb-16">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase">Testimonials</span>
          <h2 style={{ ...M, fontWeight: 800 }} className="text-5xl md:text-6xl mt-3 mb-4 leading-tight">Client Experiences</h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '0.97rem' }} className="text-ink/55">What our community says about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-ink/5 relative overflow-hidden">
              <span style={{ ...M, fontWeight: 800, fontSize: '6rem', lineHeight: 0.8, color: '#C5A059', opacity: 0.1 }}
                className="absolute top-4 right-6 select-none">"</span>
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={15} className="fill-gold text-gold" />)}
              </div>
              <p style={{ ...I, fontWeight: 400, fontSize: '0.97rem', lineHeight: 1.8 }} className="text-ink/75 mb-8 relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <span style={{ ...M, fontWeight: 800, fontSize: '0.85rem' }} className="text-gold">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p style={{ ...M, fontWeight: 700, fontSize: '1rem' }} className="text-ink leading-none">{t.name}</p>
                  <p style={{ ...I, fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.15em' }} className="text-gold uppercase mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <Section className="bg-white" containerClassName="text-center">
        <div className="max-w-3xl mx-auto bg-ink text-cream p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          <div className="relative z-10">
            <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase block mb-5">Begin Your Journey</span>
            <h2 style={{ ...M, fontWeight: 800, lineHeight: 1.05 }} className="text-5xl md:text-6xl mb-6">Ready for your perfect fit?</h2>
            <p style={{ ...I, fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.8 }} className="text-cream/65 mb-10 max-w-xl mx-auto">
              Book a consultation today and start your journey towards a wardrobe that truly reflects who you are.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact"><Button size="lg" variant="secondary">Book Your Appointment</Button></Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-cream border-cream/30 hover:bg-cream hover:text-ink">Our Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

    </motion.div>
  );
}
