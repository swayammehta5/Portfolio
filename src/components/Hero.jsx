import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

// ✅ Import your image
import myformal from '../assets/myformal.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h2 className="text-secondary font-medium tracking-wider uppercase mb-4 text-sm sm:text-base">
            Welcome to my universe
          </h2>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Swayam</span><br/>
            <span className="text-slate-300 text-4xl sm:text-5xl lg:text-6xl mt-2 block">Full Stack Developer</span>
          </h1>

          <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
            I build scalable web applications and solve real-world problems through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-primary hover:bg-primary/80 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Me <ArrowRight size={18} />
            </a>

            <a 
              // href="https://drive.google.com/file/d/1Gm5x0RrzE8k6Zt-j_dR5dmpHBJX35GCp/view" 
              // href="https://drive.google.com/file/d/16dautYJWtYXWnIkMHg7l_SgsBx8vev5g/view"
              // href="https://drive.google.com/file/d/16dautYJWtYXWnIkMHg7l_SgsBx8vev5g/view?usp=sharing"
              href="https://drive.google.com/file/d/1HR9gjkAb100tv6YdLMOolwc3aZAJ6frN/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full glass-card hover:bg-white/10 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Resume <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square rounded-full border border-white/10 glass-card flex items-center justify-center overflow-hidden p-4 shadow-2xl">
            
            {/* Animated Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>

            {/* ✅ YOUR IMAGE */}
            <img 
              src={myformal} 
              alt="Swayam Mehta" 
              className="w-full h-full object-cover rounded-full z-10"
            />

            {/* Overlay for premium look */}
            <div className="absolute inset-0 bg-darker/30 backdrop-blur-[1px] rounded-full"></div>

            {/* Orbit effects */}
            <div className="absolute w-full h-full border border-white/5 rounded-full animate-[spin_15s_linear_infinite]">
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-primary rounded-full blur-[2px]"></div>
            </div>

            <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]">
              <div className="absolute top-1/2 -right-1 w-3 h-3 bg-secondary rounded-full blur-[1px]"></div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;