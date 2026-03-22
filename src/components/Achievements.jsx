import React from 'react';
import { motion } from 'framer-motion';
import { Target, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Problem Solving Mastery",
      description: "Successfully solved 250+ algorithmic and data structure problems across platforms like LeetCode, GeeksforGeeks, and HackerRank.",
      icon: <Target className="text-primary mt-1 flex-shrink-0" size={28} />
    },
    {
      title: "HackerRank Excellence",
      description: "Earned multiple HackerRank badges demonstrating strong problem-solving skills and proficiency in core programming concepts.",
      icon: <Star className="text-secondary mt-1 flex-shrink-0" size={28} />
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 flex gap-6 hover:bg-white/10 transition-colors duration-300"
            >
              {achievement.icon}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
