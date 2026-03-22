import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Trophy } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2023 – 2027",
      score: "CGPA: 7.8"
    },
    {
      institution: "Kendriya Vidyalaya",
      degree: "Class 12 (Science)",
      duration: "Completed",
      score: "Percentage: 74.2%"
    },
    {
      institution: "Kendriya Vidyalaya",
      degree: "Class 10",
      duration: "Completed",
      score: "Percentage: 74.2%"
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-white/10 ml-4 md:ml-0">
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-10 ml-8 relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-6 w-5 h-5 rounded-full bg-dark border-4 border-primary group-hover:bg-primary transition-colors duration-300"></div>
                
                <div className="glass-card p-8 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white flex items-center">
                      <GraduationCap className="text-primary mr-3" size={28} />
                      {edu.institution}
                    </h3>
                    <div className="flex items-center text-secondary font-medium mt-2 md:mt-0 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 w-fit">
                      <Calendar className="mr-2" size={16} />
                      {edu.duration}
                    </div>
                  </div>
                  
                  <div className="pl-10">
                    <p className="text-xl text-slate-300 font-medium mb-2">{edu.degree}</p>
                    <div className="flex items-center text-slate-400">
                      <Trophy className="text-purple-400 mr-2" size={18} />
                      {edu.score}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
