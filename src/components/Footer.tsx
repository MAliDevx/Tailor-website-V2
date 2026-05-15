import { Link } from 'react-router-dom';
import { Scissors, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const M = { fontFamily: "'Manrope', sans-serif" };
const I = { fontFamily: "'Inter', sans-serif" };

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/80 pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-gold text-ink flex items-center justify-center rounded-full">
              <Scissors size={15} />
            </div>
            <span style={{ ...M, fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em' }} className="text-white">
              Taylor <span className="text-gold">Studio</span>
            </span>
          </Link>
          <p style={{ ...I, fontWeight: 400, fontSize: '0.9rem', lineHeight: 1.8 }} className="text-cream/55 max-w-xs">
            Crafting excellence since 1998. We believe that a perfect fit is the ultimate expression of personal style and confidence.
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ ...M, fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.12em' }} className="text-white uppercase mb-6">Quick Links</h4>
          <ul className="space-y-3.5">
            {[
              { label: 'Home',             path: '/' },
              { label: 'Our Story',        path: '/about' },
              { label: 'Services',         path: '/services' },
              { label: 'Book Appointment', path: '/contact' },
            ].map(({ label, path }) => (
              <li key={path}>
                <Link to={path} style={{ ...I, fontWeight: 400, fontSize: '0.9rem' }} className="text-cream/55 hover:text-gold transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ ...M, fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.12em' }} className="text-white uppercase mb-6">Services</h4>
          <ul className="space-y-3.5">
            {['Bespoke Suits', 'Wedding Attire', 'Alterations', 'Corporate Wear'].map((s) => (
              <li key={s}>
                <Link to="/services" style={{ ...I, fontWeight: 400, fontSize: '0.9rem' }} className="text-cream/55 hover:text-gold transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ ...M, fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.12em' }} className="text-white uppercase mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
              <span style={{ ...I, fontWeight: 400, fontSize: '0.88rem', lineHeight: 1.75 }} className="text-cream/55">
                MAHA KALI ENTERPRISES{'\n'}2-95/1, Keerthi Nagar, KUDA Road No.2{'\n'}Beside Govt High School{'\n'}Suryapet, Telangana 508213
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold shrink-0" />
              <span style={{ ...I, fontWeight: 400, fontSize: '0.88rem' }} className="text-cream/55">+91 9441524214</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <span style={{ ...I, fontWeight: 400, fontSize: '0.88rem' }} className="text-cream/55">anclorfashionhub25@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p style={{ ...I, fontWeight: 500, fontSize: '0.75rem', letterSpacing: '0.1em' }} className="text-cream/35 uppercase">
          © {currentYear} Taylor Studio. All rights reserved.
        </p>
        <div className="flex gap-8">
          {['Privacy Policy', 'Terms of Service'].map((item) => (
            <a key={item} href="#"
              style={{ ...I, fontWeight: 500, fontSize: '0.75rem', letterSpacing: '0.1em' }}
              className="text-cream/35 uppercase hover:text-gold transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
