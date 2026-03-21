import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, FileCode, Paintbrush, Database, Server, Cpu, Navigation, GitBranch, Terminal, Figma, Box, Bot } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    technologies: [
      { name: "React.js", level: 90, icon: <Layout size={18} /> },
      { name: "TypeScript", level: 85, icon: <FileCode size={18} /> },
      { name: "Tailwind CSS", level: 95, icon: <Paintbrush size={18} /> },
      { name: "JavaScript (ES6+)", level: 90, icon: <FileCode size={18} /> },
      { name: "HTML & CSS", level: 95, icon: <Globe size={18} /> }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 80, icon: <Server size={18} /> },
      { name: "Spring Boot", level: 85, icon: <Server size={18} /> },
      { name: "Express.js", level: 85, icon: <Navigation size={18} /> },
      { name: "PostgreSQL", level: 85, icon: <Database size={18} /> },
      { name: "MySQL", level: 80, icon: <Database size={18} /> },
      { name: "MongoDB", level: 80, icon: <Database size={18} /> },
      { name: "REST APIs", level: 90, icon: <Cpu size={18} /> }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Version Controlling", level: 85, icon: <GitBranch size={18} /> },
      { name: "AI Tools", level: 80, icon: <Bot size={18} /> },
      { name: "Vite", level: 85, icon: <Terminal size={18} /> },
      { name: "Figma", level: 75, icon: <Figma size={18} /> },
      { name: "Postman", level: 90, icon: <Box size={18} /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.2 }}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-700/50 hover:border-primary/50 transition-colors shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-slate-700 pb-3">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="w-full">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium flex items-center gap-2">
                         <span className="text-primary">{tech.icon}</span> {tech.name}
                      </span>
                      <span className="text-primary">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (techIndex * 0.1) }}
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
