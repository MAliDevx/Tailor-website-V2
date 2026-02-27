import { motion } from 'motion/react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Scissors, Ruler, Award, Briefcase, Heart, Zap, Check } from 'lucide-react';
import  servicesHero from '../assets/Image1.png';

import service1 from '../assets/image8.jfif';
import service2 from '../assets/Images3.jfif';
import service3 from '../assets/Image4.jfif';
import service4 from '../assets/Image1.png';
import service5 from '../assets/image5.jfif';
import service6 from '../assets/about2.jfif';
const services = [
  {
    title: 'Custom Bespoke Suits',
    description: 'The pinnacle of tailoring. Every pattern is drawn from scratch based on your unique measurements.',
    price: 'From £1,200',
    icon: Scissors,
    features: ['Hand-drawn patterns', 'Multiple fittings', 'Premium fabric selection', 'Lifetime adjustments'],
    image: service1,
  },
  {
    title: 'Wedding & Formal Wear',
    description: 'Look your absolute best on your most important day. We specialize in morning coats, tuxedos, and traditional wear.',
    price: 'From £800',
    icon: Heart,
    features: ['Groom & Groomsmen packages', 'Thematic styling', 'Rush options available', 'Accessories matching'],
    image: service2,
  },
  {
    title: 'Expert Alterations',
    description: 'Give your favorite garments a new life. We provide precision adjustments for all types of clothing.',
    price: 'From £45',
    icon: Ruler,
    features: ['Suit resizing', 'Hemming & tapering', 'Lining replacement', 'Zipper & button repair'],
    image: service3,
  },
  {
    title: 'Corporate Uniforms',
    description: 'Elevate your brand with custom-tailored uniforms that combine professionalism with comfort.',
    price: 'Contact for Quote',
    icon: Briefcase,
    features: ['Bulk ordering', 'Brand embroidery', 'Durable fabrics', 'On-site measurements'],
    image: service4,
  },
  {
    title: 'Traditional Wear',
    description: 'Specialized tailoring for cultural and traditional attire, respecting heritage and craftsmanship.',
    price: 'From £500',
    icon: Award,
    features: ['Heritage techniques', 'Intricate embroidery', 'Authentic fabrics', 'Custom designs'],
    image: service5,
  },
  {
    title: 'Express Tailoring',
    description: 'Need it fast? Our express service ensures high-quality results within a tight timeframe.',
    price: 'Premium Service',
    icon: Zap,
    features: ['24-48 hour turnaround', 'Priority handling', 'Emergency repairs', 'Same-day hemming'],
    image: service6,
  },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Header */}
<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={servicesHero}
          alt="Tailoring services"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[#1a1410]/65" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/40 via-transparent to-[#1a1410]/50" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Decorative top border line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/70 to-transparent origin-center"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-24">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <span className="w-8 h-px bg-[#c9a96e]/70" />
          <span
            className="text-[#c9a96e] uppercase tracking-[0.35em] text-xs font-medium"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic" }}
          >
            Our Services
          </span>
          <span className="w-8 h-px bg-[#c9a96e]/70" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-white mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            lineHeight: 1.06,
            fontWeight: 300,
            letterSpacing: "-0.01em",
          }}
        >
          Tailored to{" "}
          <em
            style={{
              color: "#c9a96e",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Perfection
          </em>
        </motion.h1>

        {/* Divider ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="w-12 h-px bg-[#c9a96e]/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]/60" />
          <span className="w-12 h-px bg-[#c9a96e]/40" />
        </motion.div>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="text-white/65 leading-relaxed"
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            fontWeight: 300,
            maxWidth: "36ch",
            margin: "0 auto",
          }}
        >
          From bespoke creations to precision alterations, we offer a
          comprehensive range of tailoring services designed to meet the
          highest standards of quality.
        </motion.p>
      </div>

      {/* Decorative bottom border line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/70 to-transparent origin-center"
      />
    </section>

      {/* Services Grid */}
      <Section className="bg-cream">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-ink/5 flex flex-col group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-ink">
                  {service.price}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                {/* <div className="w-12 h-12 bg-cream text-gold rounded-xl flex items-center justify-center mb-6 group-hover:bg-ink group-hover:text-cream transition-colors duration-300">
                  <service.icon size={24} />
                </div> */}
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-ink/60 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-ink/80">
                      <Check size={14} className="text-gold" />
                      <span>{feature}</span>
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

      {/* Process Section */}
      <Section className="bg-ink text-cream">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-4">The Bespoke Process</h2>
          <p className="text-gold uppercase tracking-widest text-sm">How we craft your perfect garment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-white/10 z-0" />

          {[
            { step: '01', title: 'Consultation', desc: 'We discuss your style, needs, and select the perfect fabric.' },
            { step: '02', title: 'Measurement', desc: 'Over 30 precise measurements are taken to ensure a perfect foundation.' },
            { step: '03', title: 'Fitting', desc: 'A preliminary "baste" garment is created for your first fitting.' },
            { step: '04', title: 'Delivery', desc: 'Final adjustments are made, and your masterpiece is ready.' },
          ].map((item, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-24 h-24 bg-gold text-ink rounded-full flex items-center justify-center text-3xl font-serif mx-auto mb-8 border-8 border-ink">
                {item.step}
              </div>
              <h4 className="text-xl text-white mb-4">{item.title}</h4>
              <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ or Additional Info */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              { q: 'How long does a bespoke suit take?', a: 'Typically, a bespoke suit takes 4-6 weeks from initial consultation to final delivery, including 2-3 fittings.' },
              { q: 'Do I need to bring my own fabric?', a: 'While we have an extensive library of premium fabrics, we are happy to work with your own material if it meets our quality standards.' },
              { q: 'Can you replicate a design from a photo?', a: 'Yes, we can use photos as inspiration to create a custom design that suits your body type and preferences.' },
              { q: 'What is the difference between bespoke and made-to-measure?', a: 'Bespoke involves a completely new pattern for each client, while made-to-measure uses a pre-existing pattern adjusted to your measurements.' },
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-cream rounded-2xl">
                <h4 className="text-xl font-serif mb-3 text-ink">{faq.q}</h4>
                <p className="text-ink/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-cream text-center">
        <h2 className="text-4xl md:text-5xl mb-8">Ready for a new look?</h2>
        <Link to="/contact">
          <Button size="lg">Book Your Consultation</Button>
        </Link>
      </Section>
    </motion.div>
  );
}
