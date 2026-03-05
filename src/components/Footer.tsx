import { Link } from 'react-router-dom';
import { Scissors, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/80 pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold text-ink flex items-center justify-center rounded-full">
              <Scissors size={16} />
            </div>
            <span className="font-serif text-2xl font-semibold tracking-tight text-white">
              Taylor <span className="text-gold italic">Studio</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Crafting excellence since 1998. We believe that a perfect fit is the ultimate expression of personal style and confidence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-ink transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-ink transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-ink transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-lg text-white mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-gold transition-colors">Bespoke Suits</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Wedding Attire</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Alterations</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Corporate Wear</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-lg text-white mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>MAHA KALI ENTERPRISES
2-95/1, Keerthi Nagar, KUDA Road No.2
Beside Govt High School
Suryapet, Telangana 508213</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+91 9441524214</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>anclorfashionhub25@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest">
        <p>© {currentYear} Taylor Studio. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
