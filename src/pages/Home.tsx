import { motion } from 'motion/react';
import { Scissors, Ruler, Award, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import homeHero from '../assets/HomePage.jfif';;
import HomeImage2 from '../assets/About2.jfif';;
const featuredServices = [
  {
    title: 'Bespoke Suits',
    description: 'Individually hand-cut and sewn to your exact measurements for the ultimate fit.',
    icon: Scissors,
  },
  {
    title: 'Wedding Wear',
    description: 'Elegant attire for your most special day, from classic tuxedos to traditional wear.',
    icon: Award,
  },
  {
    title: 'Expert Alterations',
    description: 'Precision adjustments to your existing wardrobe to ensure every piece fits perfectly.',
    icon: Ruler,
  },
];

const testimonials = [
  {
    name: 'James Wilson',
    role: 'CEO, TechCorp',
    content: 'The attention to detail at Taylor Studio is unmatched. My custom suit fits like a second skin.',
    rating: 5,
  },
  {
    name: 'Sarah Jenkins',
    role: 'Fashion Designer',
    content: 'I trust them with all my delicate pieces. Their craftsmanship is truly world-class.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Architect',
    content: 'Professional, timely, and incredibly skilled. The best tailoring experience I’ve ever had.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={homeHero}
            alt="Tailoring Workshop"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-gold uppercase tracking-[0.3em] text-sm font-medium mb-6"
          >
            Est. 1998 • Master Craftsmanship
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-[1.1] mb-8 text-balance"
          >
            Crafting Perfect Fits, <br />
            <span className="italic text-gold">Tailored Just for You</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Experience the luxury of bespoke tailoring. From precision alterations to hand-crafted suits, we bring your vision to life with timeless elegance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <Button size="lg" variant="secondary">Book Appointment</Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-ink">
                View Services
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Featured Services */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Expertise</h2>
          <p className="text-ink/60 uppercase tracking-widest text-sm">Elevating your wardrobe, one stitch at a time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 bg-cream rounded-2xl border border-ink/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-ink text-cream rounded-xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-ink transition-colors duration-500">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="text-ink/70 leading-relaxed mb-6">{service.description}</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-gold font-medium group/link">
                Learn More <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-ink text-cream overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Why Discerning Clients <br />
              <span className="text-gold italic">Choose Taylor Studio</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: 'Master Craftsmanship', desc: 'Over 25 years of experience in traditional tailoring techniques.' },
                { title: 'Premium Fabrics', desc: 'We source only the finest wools, silks, and linens from world-renowned mills.' },
                { title: 'Personalized Service', desc: 'Every client receives a dedicated consultation to understand their unique needs.' },
                { title: 'Perfect Fit Guarantee', desc: 'We aren’t satisfied until you are. Unlimited fittings until it’s perfect.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-gold shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-serif text-white mb-2">{item.title}</h4>
                    <p className="text-cream/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={HomeImage2}
                alt="Tailoring Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-2xl hidden md:block">
              <p className="text-ink font-serif text-4xl mb-1">25+</p>
              <p className="text-ink/70 uppercase tracking-widest text-xs font-bold">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-cream">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Client Experiences</h2>
          <p className="text-ink/60 uppercase tracking-widest text-sm">What our community says about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-ink/5"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-ink/80 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div>
                <p className="font-serif text-xl text-ink">{t.name}</p>
                <p className="text-gold text-xs uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white" containerClassName="text-center">
        <div className="max-w-3xl mx-auto bg-ink text-cream p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl mb-6">Ready for your perfect fit?</h2>
            <p className="text-cream/70 text-lg mb-10 max-w-xl mx-auto">
              Book a consultation today and start your journey towards a wardrobe that truly reflects who you are.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">Book Your Appointment</Button>
            </Link>
          </div>
        </div>
      </Section>
    </motion.div>
  );
}
