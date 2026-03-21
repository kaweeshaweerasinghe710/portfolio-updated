import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Github, Linkedin } from 'lucide-react';
import img from "../assets/my img.jpg";

const MediumIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

export default function Hero() {
  const jobTitle = "Full Stack       Developer";
  const titleLetters = jobTitle.split("");

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-12 w-full bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pl-0 md:pl-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center lg:items-start pt-10">
          
          <div className="text-left order-2 lg:order-1 text-center lg:text-left mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <span className="px-5 py-2 bg-slate-900 border-l-4 border-primary text-sm font-bold text-slate-300 inline-flex items-center gap-2 rounded-lg mb-4">
                <Terminal size={16} className="text-primary" />
                Available for new opportunities
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3"
            >
              Hi, I'm <br/>
              <span className="text-white mt-2 block">Kaweesha Weerasinghe</span>
            </motion.h1>
            
            <div className="relative flex flex-wrap justify-center lg:justify-start mb-6 mt-6 h-12 sm:h-16 lg:h-20 mb-35 ">
              {titleLetters.map((letter, i) => (
                <motion.span 
                  key={i}
                  className={`text-4xl md:text-5xl lg:text-6xl  leading-none font-black uppercase tracking-widest ${letter === ' ' ? 'w-3 md:w-5' : ''}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    color: ["#ffffff", "#0f172a"], 
                    textShadow: [
                      `0px 0px 15px rgba(255, 255, 255, 0.8), 0px 0px 30px rgba(56, 189, 248, 0.8)`, // Bright shine
                      `4px 4px 6px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.1), 0px 5px 15px rgba(56, 189, 248, 0.3)` 
                    ]
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + (i * 0.05), 
                    ease: "easeOut"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex gap-4 flex-wrap justify-center lg:justify-start margin-top-50000"
            >
              <a href="#projects" className="px-8 py-3 bg-primary text-slate-950 font-bold hover:bg-white transition-colors flex items-center gap-2 group rounded-lg">
                View Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-slate-800 text-white font-bold hover:bg-slate-800 transition-colors rounded-lg block">
                Contact Me
              </a>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-[340px]"
              >
                 <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-800 p-2 bg-slate-900 group shadow-lg">
                    <img 
                      src={img}
                      alt="My Profile"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-xl"
                    />
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6 flex gap-4 justify-center"
               >
                  <a href="https://github.com/kaweeshaweerasinghe710" className="p-3 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors rounded-lg shadow-sm">
                    <Github size={22}/>
                  </a>
                  <a href="https://www.linkedin.com/in/kaweesha-weerasinghe-749850328" className="p-3 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors rounded-lg shadow-sm">
                    <Linkedin size={22}/>
                  </a>
                  <a href="https://medium.com/@kaweeshaweerasinghe2002" className="p-3 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors rounded-lg shadow-sm">
                    <MediumIcon size={22}/>
                  </a>
               </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
