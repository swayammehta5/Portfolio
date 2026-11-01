import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav aria-label="Main navigation" className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button
            type="button"
            aria-label="Scroll to home"
            className="flex-shrink-0 cursor-pointer text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            onClick={() => scrollTo('#home')}
          >
            SM
          </button>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                type="button"
                onClick={() => scrollTo(link.href)}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="md:hidden glass-nav absolute top-full left-0 w-full py-4 shadow-xl border-t border-white/5">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                type="button"
                onClick={() => scrollTo(link.href)}
                className="text-left text-slate-300 hover:text-white transition-colors text-base font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
