import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Code } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "DevOps",
      issuer: "Oracle Cloud",
      date: "Sep 2025",
      icon: <Cloud className="text-primary mb-4" size={36} />
    },
    {
      title: "Programming Using C++",
      issuer: "Infosys",
      date: "Aug 2025",
      icon: <Code className="text-secondary mb-4" size={36} />
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Apr 2025",
      icon: <Award className="text-teal-400 mb-4" size={36} />
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 text-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="flex justify-center">
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-slate-300 font-medium mb-4">{cert.issuer}</p>
              
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400">
                {cert.date}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
