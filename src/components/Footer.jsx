import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 glass-nav py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        <p className="text-slate-400 text-sm flex items-center">
          Building the future, pixel by pixel.
        </p>
        <div className="text-slate-500 text-sm mt-6 flex items-center justify-center">
          &copy; {currentYear} Swayam Mehta. All rights reserved. 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
