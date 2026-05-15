import { motion } from 'motion/react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Scissors, Ruler, Award, Briefcase, Heart, Zap, Check } from 'lucide-react';
import servicesHero from '../assets/Image1.png';
import service1 from '../assets/Image8.jfif';
import service2 from '../assets/Images3.jfif';
import service3 from '../assets/Image4.jfif';
import service4 from '../assets/Image1.png';
import service5 from '../assets/Image5.jfif';
import service6 from '../assets/About2.jfif';

const M = { fontFamily: "'Manrope', sans-serif" };
const I = { fontFamily: "'Inter', sans-serif" };

const services = [
  { title: 'Custom Bespoke Suits',    description: 'The pinnacle of tailoring. Every pattern is drawn from scratch based on your unique measurements.', price: 'From £1,200', icon: Scissors, features: ['Hand-drawn patterns', 'Multiple fittings', 'Premium fabric selection', 'Lifetime adjustments'], image: service1 },
  { title: 'Wedding & Formal Wear',   description: 'Look your absolute best on your most important day. We specialize in morning coats, tuxedos, and traditional wear.', price: 'From £800', icon: Heart, features: ['Groom & Groomsmen packages', 'Thematic styling', 'Rush options available', 'Accessories matching'], image: service2 },
  { title: 'Expert Alterations',      description: 'Give your favorite garments a new life. We provide precision adjustments for all types of clothing.', price: 'From £45', icon: Ruler, features: ['Suit resizing', 'Hemming & tapering', 'Lining replacement', 'Zipper & button repair'], image: service3 },
  { title: 'Corporate Uniforms',      description: 'Elevate your brand with custom-tailored uniforms that combine professionalism with comfort.', price: 'Contact for Quote', icon: Briefcase, features: ['Bulk ordering', 'Brand embroidery', 'Durable fabrics', 'On-site measurements'], image: service4 },
  { title: 'Traditional Wear',        description: 'Specialized tailoring for cultural and traditional attire, respecting heritage and craftsmanship.', price: 'From £500', icon: Award, features: ['Heritage techniques', 'Intricate embroidery', 'Authentic fabrics', 'Custom designs'], image: service5 },
  { title: 'Express Tailoring',       description: 'Need it fast? Our express service ensures high-quality results within a tight timeframe.', price: 'Premium Service', icon: Zap, features: ['24-48 hour turnaround', 'Priority handling', 'Emergency repairs', 'Same-day hemming'], image: service6 },
];

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'We discuss your style, needs, and select the perfect fabric.' },
  { step: '02', title: 'Measurement',  desc: 'Over 30 precise measurements are taken to ensure a perfect foundation.' },
  { step: '03', title: 'Fitting',      desc: 'A preliminary "baste" garment is created for your first fitting.' },
  { step: '04', title: 'Delivery',     desc: 'Final adjustments are made, and your masterpiece is ready.' },
];

const faqs = [
  { q: 'How long does a bespoke suit take?',                          a: 'Typically, a bespoke suit takes 4–6 weeks from initial consultation to final delivery, including 2–3 fittings.' },
  { q: 'Do I need to bring my own fabric?',                           a: 'While we have an extensive library of premium fabrics, we are happy to work with your own material if it meets our quality standards.' },
  { q: 'Can you replicate a design from a photo?',                    a: 'Yes, we can use photos as inspiration to create a custom design that suits your body type and preferences.' },
  { q: 'What is the difference between bespoke and made-to-measure?', a: 'Bespoke involves a completely new pattern for each client, while made-to-measure uses a pre-existing pattern adjusted to your measurements.' },
];

export default function Services() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="pt-20">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesHero} alt="Tailoring services" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-[#0d0b09]/70" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d0b09]/90 via-[#0d0b09]/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }}
        />

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-linear-to-r from-transparent via-gold/70 to-transparent origin-center"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pb-20 md:pb-28">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-gold" />
            <span style={{ ...I, fontWeight: 700, letterSpacing: '0.22em', fontSize: '0.72rem' }} className="text-gold uppercase">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{ ...M, fontWeight: 800, fontSize: 'clamp(3rem, 9vw, 7.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
            className="text-white mb-6"
          >
            TAILORED TO
            <br />
            <span className="text-gold">PERFECTION</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
            style={{ ...I, fontWeight: 400, fontSize: '1.1rem', lineHeight: 1.8 }}
            className="text-white/65 max-w-xl"
          >
            From bespoke creations to precision alterations, we offer a comprehensive range of
            tailoring services designed to meet the highest standards of quality.
          </motion.p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-linear-to-r from-transparent via-gold/70 to-transparent origin-center"
        />
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────────── */}
      <Section className="bg-cream">
        <div className="text-center mb-16">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase">What We Offer</span>
          <h2 style={{ ...M, fontWeight: 800 }} className="text-5xl md:text-6xl mt-3 mb-4 leading-tight">Our Services</h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '0.97rem' }} className="text-ink/55">Every service is delivered with the same uncompromising standard of excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-ink/5 flex flex-col group">
              <div className="aspect-video overflow-hidden relative">
                <img src={service.image} alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <span style={{ ...M, fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.08em' }} className="text-ink uppercase">{service.price}</span>
                </div>
              </div>
              <div className="p-8 grow flex flex-col">
                <h3 style={{ ...M, fontWeight: 700, fontSize: '1.25rem' }} className="mb-3">{service.title}</h3>
                <p style={{ ...I, fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.8 }} className="text-ink/60 mb-6 grow">{service.description}</p>
                <div className="space-y-2.5 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <Check size={13} className="text-gold shrink-0" />
                      <span style={{ ...I, fontWeight: 400, fontSize: '0.9rem' }} className="text-ink/75">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="w-full">
                  <Button variant="outline" className="w-full">Book Now</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── BESPOKE PROCESS ──────────────────────────────────────────── */}
      <Section className="bg-ink text-cream">
        <div className="text-center mb-20">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase">How We Work</span>
          <h2 style={{ ...M, fontWeight: 800 }} className="text-5xl md:text-6xl mt-3 mb-4 leading-tight text-white">The Bespoke Process</h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '0.97rem' }} className="text-gold uppercase tracking-wider">How we craft your perfect garment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-white/10 z-0" />
          {processSteps.map((item, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-24 h-24 bg-gold text-ink rounded-full flex items-center justify-center mx-auto mb-8 border-8 border-ink">
                <span style={{ ...M, fontWeight: 800, fontSize: '1.5rem' }}>{item.step}</span>
              </div>
              <h4 style={{ ...M, fontWeight: 700, fontSize: '1.1rem' }} className="text-white mb-3">{item.title}</h4>
              <p style={{ ...I, fontWeight: 400, fontSize: '0.9rem', lineHeight: 1.75 }} className="text-cream/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase">Got Questions?</span>
            <h2 style={{ ...M, fontWeight: 800 }} className="text-5xl md:text-6xl mt-3 leading-tight">FAQ</h2>
          </div>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 bg-cream rounded-2xl border border-ink/5 hover:border-gold/30 transition-colors duration-300">
                <h4 style={{ ...M, fontWeight: 700, fontSize: '1.05rem' }} className="text-ink mb-3">{faq.q}</h4>
                <p style={{ ...I, fontWeight: 400, fontSize: '0.97rem', lineHeight: 1.8 }} className="text-ink/60">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <Section className="bg-cream text-center">
        <div className="max-w-2xl mx-auto">
          <span style={{ ...I, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.72rem' }} className="text-gold uppercase block mb-5">Take the First Step</span>
          <h2 style={{ ...M, fontWeight: 800, lineHeight: 1.05 }} className="text-5xl md:text-6xl mb-6">Ready for a new look?</h2>
          <p style={{ ...I, fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.8 }} className="text-ink/60 mb-10">
            Book your private consultation today and let us craft something made entirely for you.
          </p>
          <Link to="/contact">
            <Button size="lg">Book Your Consultation</Button>
          </Link>
        </div>
      </Section>

    </motion.div>
  );
}
