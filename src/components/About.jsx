import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Globe className="text-primary" size={24} />,
      title: 'Frontend Development',
      description: 'Crafting responsive, beautiful, and accessible user interfaces using modern React ecosystems.'
    },
    {
      icon: <Server className="text-secondary" size={24} />,
      title: 'Backend Engineering',
      description: 'Building robust APIs and scalable microservices to power data-driven applications.'
    },
    {
      icon: <Code2 className="text-blue-400" size={24} />,
      title: 'Clean Architecture',
      description: 'Following best practices and design patterns to write maintainable and efficient code.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-slate-300"
          >
            <p>
              Hello! I'm an enthusiastic Software Engineering student currently in my 2nd year at the <span className="text-white font-semibold">University of Moratuwa</span>.
              My journey in tech began with a curiosity about how the web works, which quickly evolved into a passion for full-stack development.
            </p>
            <p>
              I specialize in bridging the gap between elegant frontend interfaces and robust backend architectures.
              Whether it's optimizing a subtle animation or designing a complex database schema, I enjoy tackling challenges from end to end.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, participating in hackathons, or contributing to open-source projects.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-slate-900 rounded-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
