import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

// ✅ Import images properly
import productivity from '../assets/productivity.png';
import travel from '../assets/travel-mate.png';

const Projects = () => {
  const projects = [
    {
      title: "Productivity Tracker",
      description:
        "Developed a full-stack productivity platform enabling users to manage tasks and habits with structured prioritization, real-time tracking, and an intuitive user interface.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/swayammehta5/Productivity-Tracker",
      live: "https://productivity-tracker-djk9.onrender.com/",
      image: productivity // ✅ FIXED
    },
    {
      title: "Travel Mate",
      description:
        "Built a travel management platform with itinerary planning, expense tracking, and integrated Geolocation API for enhanced location-based travel experiences.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Geolocation API"],
      github: "https://github.com/swayammehta5/Travel-Mate",
      image: travel // ✅ FIXED
    },
    {
      title: "Weather App",
      description:
        "Developed a responsive weather application using React.js and external APIs to display real-time weather data with a clean and user-friendly interface.",
      tech: ["React.js", "API", "CSS", "HTML"],
      github: "https://github.com/swayammehta5/Weather-App",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card flex flex-col group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                
                {/* ✅ FIXED IMAGE */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-secondary font-medium tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-slate-300 hover:text-primary transition-colors text-sm font-medium">
                    <Github size={18} className="mr-2" /> Code
                  </a>

                  {/* ✅ FIX: Only show if live exists */}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center text-slate-300 hover:text-secondary transition-colors text-sm font-medium">
                      <ExternalLink size={18} className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;