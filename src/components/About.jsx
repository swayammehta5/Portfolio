import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary"></div>
              <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                I'm Swayam Mehta, a B.Tech Computer Science & Engineering student at Lovely Professional University (2023–2027). I specialize in the MERN stack — building scalable, responsive, and performance-driven web applications
                {/* I'm a passionate <span className="text-white font-medium">Full Stack Developer</span> with an eye for design and a drive for creating scalable, user-centric web applications.  */}
                {/* My journey in tech is fueled by an insatiable curiosity and a desire to build things that live on the internet. */}
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                {/* Whether reshaping how we interact with data or architecting robust backend systems, I strive to write clean, efficient code that not only solves real-world problems but delivers a premium, seamless experience in every interaction. */}
                With a strong foundation in Data Structures & Algorithms, I enjoy solving complex problems and translating ideas into elegant digital solutions. I'm constantly learning, building, and pushing boundaries in the world of web development.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/2 grid grid-cols-2 gap-6"
          >
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300 cursor-default">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-slate-400 font-medium">DSA Problems Solved</div>
            </div>
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300 cursor-default">
              <div className="text-4xl font-bold text-secondary mb-2">7+</div>
              <div className="text-slate-400 font-medium">Projects Completed</div>
            </div>
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300 cursor-default col-span-2">
              <div className="text-2xl font-bold text-white mb-2">Constantly Evolving</div>
              <div className="text-slate-400 font-medium">Always eager to learn the next cutting-edge technology.</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
