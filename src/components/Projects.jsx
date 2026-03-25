import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import project_1 from '../assets/project1.png';
import project_2 from '../assets/project2.jpeg';
import project_3 from '../assets/project3.jpg';
import project_4 from '../assets/portfolio.png';

const projectsData = [
  {
    id: 1,
    title: "Blood Donation Network ",
    description: "Every year, thousands of patients face critical situations due to blood shortages. Hospitals struggle to find matching donors quickly, and donors often don’t know when their blood type is urgently needed. Heartline bridges this gap by connecting donors, hospitals, and blood banks on a single platform. For Donors: register and complete verified profiles, receive real-time SMS & in-app notifications for urgent blood needs, view and respond to requests, join donation events, track donation history, achievements, and leaderboard ranking.,can get help from chatbot For Hospitals: create urgent blood requests, get  donor suggestions ranked by blood type and distance, manage events, and track completed donations. For Admins: verify users, manage all accounts, monitor activity, and generate reports.Key features include GPS-based donor-hospital matching , role-based access, multi-step profile completion,                    and real-time notifications",
    image: project_1,
    tags: ["React","Node.js","Express", "MongoDB","twillio","chatbot","GPS","cloudinary","Docker","JWT Authentication"],
    demoUrl: "https://youtu.be/ONpm3Kqg5q8",
    githubUrl: "https://github.com/Studio-2Bit/heartline"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "E-commerce Shoe Shop Website is a full-stack MERN application designed to deliver a secure, responsive, and user-friendly online shopping experience.Users can browse shoe collections, view product details, manage carts, place orders, and communicate directly with the admin through an integrated messaging system.The admin panel supports complete management of products, orders, users, and customer messages, enabling smooth daily operations and better user engagement. Built with React, Node.js, Express, and MongoDB, this project showcases scalable full-stack development, secure authentication, and responsive UI design",
    image: project_2,
    tags: ["React", "Node.js","Express.js", "MongoDB"],
    demoUrl: "https://youtu.be/PMW1ZnZKncQ",
    githubUrl: "https://github.com/kaweeshaweerasinghe710/shoe-shop-website"
  },
  {
    id: 3,
    title: "Secure Lock Pro",
    description: "Secure Lock Pro is an IoT-based smart door lock system developed as our Level 01 Microcontroller-Based Application Development Project. It provides multi-layered security using biometric authentication (fingerprint & facial recognition), RFID, passcodes, and mobile app controlThe system includes intrusion detection with vibration sensors, live camera monitoring, real-time Firebase alerts, and remote access via a Flutter mobile app. Built using Raspberry Pi Zero 2 W with cloud integration (AWS & Firebase), it ensures secure, reliable, and uninterrupted operation for both residential and commercial environments.",
    image: project_3,
    tags: ["IOT", "Microcontroller Programming (Raspberry Pi)", "Firebase","Sensor & Module Interfacing","Flutter Mobile App"],
    demoUrl: "https://demo-uniportal.example.com",
    githubUrl: "https://github.com/example/uniportal"
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "My personal portfolio website showcases my skills, projects, and experience as a full-stack developer. Built with React and Tailwind CSS, it features an interactive, responsive design, smooth animations, and intuitive navigation. It highlights my projects, technical expertise, and professional journey in a visually engaging way, serving as a hub for potential employers or collaborators to explore my work.",
    image: project_4,
    tags: ["React.js", "Tailwind css", "Email.js"],
    demoUrl: "https://youtu.be/08KpEcGys_8",
    githubUrl: "https://github.com/kaweeshaweerasinghe710/portfolio-updated.git"
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectsToShow = projectsData.slice(currentIndex, currentIndex + 3);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(projectsData.length - 3, 0) : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= projectsData.length ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-secondary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Links */}
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-slate-900/80 flex items-center justify-center gap-4 backdrop-blur-sm"
                    >
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-primary rounded-full text-slate-900 hover:scale-110 transition-transform flex items-center gap-2 font-bold text-sm"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                        Demo
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 bg-slate-800 border border-slate-600 rounded-full text-white hover:scale-110 transition-transform flex items-center gap-2 font-bold text-sm"
                        title="GitHub Repository"
                      >
                        <Github size={20} />
                        Code
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50 flex items-center gap-1"
                    >
                      <Code size={12} className="text-primary" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="p-2 rounded-full bg-slate-800 text-white hover:bg-primary transition">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="p-2 rounded-full bg-slate-800 text-white hover:bg-primary transition">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}