import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Github, Linkedin } from 'lucide-react';

const MediumIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

export default function Hero() {
  const jobTitle = "Full Stack Engineer";
  const titleLetters = jobTitle.split("");

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-12 w-full bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pl-0 md:pl-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="text-left order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <span className="px-4 py-2 bg-slate-900 border-l-4 border-primary text-sm font-bold text-slate-300 flex items-center gap-2 rounded-lg">
                <Terminal size={16} className="text-primary" />
                Available for new opportunities
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2"
            >
              Hi, I'm <br/>
              <span className="text-white mt-2 block">Kaweesha Weerasinghe</span>
            </motion.h1>
            
            <div className="relative flex flex-wrap justify-center lg:justify-start mb-6 mt-4 h-16 sm:h-20 lg:h-24">
              {titleLetters.map((letter, i) => (
                <motion.span 
                  key={i}
                  className={`text-4xl md:text-5xl lg:text-6xl leading-none font-black uppercase tracking-widest ${letter === ' ' ? 'w-3 md:w-4' : ''}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    color: ["#ffffff", "#0f172a"], 
                    textShadow: [
                      `0px 0px 15px rgba(255, 255, 255, 0.8), 0px 0px 30px rgba(56, 189, 248, 0.8)`, // Reintroduced bright shine
                      `4px 4px 6px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.1), 0px 5px 15px rgba(56, 189, 248, 0.3)` // Rests as shadow
                    ]
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2 + (i * 0.05), 
                    ease: "easeOut"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              Currently a 2nd-year undergraduate at the University of Moratuwa. I build scalable web applications and intuitive user interfaces.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex gap-4 justify-center lg:justify-start items-center"
             >
                <a href="#" className="p-3 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors rounded-lg">
                  <Github size={22}/>
                </a>
                <a href="#" className="p-3 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors rounded-lg">
                  <Linkedin size={22}/>
                </a>
                <a href="#" className="p-3 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors rounded-lg">
                  <MediumIcon size={22}/>
                </a>
             </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex gap-4 flex-wrap justify-center lg:justify-start"
            >
              <a href="#projects" className="px-8 py-3 bg-primary text-slate-950 font-bold hover:bg-white transition-colors flex items-center gap-2 group rounded-lg">
                View Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-slate-800 text-white font-bold hover:bg-slate-800 transition-colors rounded-lg">
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="relative mx-auto max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md w-full order-1 lg:order-2 px-8 lg:px-0"
          >
             <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-slate-800 p-2 bg-slate-900 group">
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
                  alt="My Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-lg"
                />
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
