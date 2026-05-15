import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

const M = { fontFamily: "'Manrope', sans-serif" };
const I = { fontFamily: "'Inter', sans-serif" };

const navLinks = [
  { name: 'Home',     path: '/' },
  { name: 'About',    path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact',  path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
      scrolled ? 'bg-cream/85 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-ink text-cream flex items-center justify-center rounded-full transition-transform group-hover:rotate-12">
            <Scissors size={18} />
          </div>
          <span style={{ ...M, fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.02em' }} className="text-ink">
            Taylor <span className="text-gold">Studio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              style={{ ...I, fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.14em' }}
              className={cn(
                'uppercase transition-colors hover:text-gold',
                location.pathname === link.path ? 'text-gold' : 'text-ink/70'
              )}>
              {link.name}
            </Link>
          ))}
          <Link to="/contact"
            style={{ ...M, fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em' }}
            className="bg-ink text-cream px-6 py-2.5 rounded-full uppercase transition-all hover:bg-gold hover:text-ink">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-ink p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            className="absolute top-full left-0 right-0 bg-cream border-t border-ink/5 shadow-xl md:hidden">
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}
                  style={{ ...M, fontWeight: 700, fontSize: '1.1rem' }}
                  className={cn(
                    'transition-colors py-3 border-b border-ink/5 last:border-0',
                    location.pathname === link.path ? 'text-gold' : 'text-ink'
                  )}>
                  {link.name}
                </Link>
              ))}
              <Link to="/contact"
                style={{ ...M, fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.12em' }}
                className="bg-ink text-cream text-center py-3.5 rounded-xl uppercase mt-3">
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
