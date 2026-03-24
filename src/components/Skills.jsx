import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-primary mb-4" size={32} />,
      skills: ["c","c++","JavaScript (ES6+)", "Java", "Python","Kotlin", "SQL"]
    },
    {
      title: "Frameworks & Libs",
      icon: <Layout className="text-secondary mb-4" size={32} />,
      skills: ["React.js", "Tailwind CSS", "Node.js", "Express.js","MongoDB"]
    },
    {
      title: "Tools & Cloud",
      icon: <Terminal className="text-cyan-400 mb-4" size={32} />,
      skills: ["Git & GitHub", "AWS", "Android Studio", "Figma", "VS Code","Postman"]
    },
    {
      title: "Core Skills",
      icon: <Database className="text-teal-400 mb-4" size={32} />,
      skills: ["RESTful APIs", "UI/UX Design", "System Architecture", "Performance Optimization"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of the technologies and tools I leverage to build robust, scalable applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300">
              {category.icon}
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-3 p-0 m-0 cursor-default">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-slate-300 hover:text-white transition-colors">
                    <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
