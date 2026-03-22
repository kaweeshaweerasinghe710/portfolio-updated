import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', title: 'Home', offset: -15 },
  { id: 'about', title: 'About Me', offset: 10 },
  { id: 'education', title: 'Education', offset: -5 },
  { id: 'skills', title: 'Skills', offset: 15 },
  { id: 'projects', title: 'Projects', offset: -10 },
  { id: 'contact', title: 'Contact', offset: 5 }
];

const AnimatedClimber = ({ isClimbing }) => {
  return (
    <motion.svg width="26" height="26" viewBox="0 0 100 100" className="overflow-visible text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
      <circle cx="50" cy="20" r="10" fill="currentColor" />
      <line x1="50" y1="30" x2="50" y2="60" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      
      <motion.line 
        x1="50" y1="35" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
        initial={{ x2: 30, y2: 55 }}
        animate={{ 
          x2: isClimbing ? [30, 20, 30] : 30, 
          y2: isClimbing ? [55, 0, 55] : 55 
        }}
        transition={{ duration: 0.4, repeat: isClimbing ? Infinity : 0, ease: "linear" }}
      />
      <motion.line 
        x1="50" y1="35" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
        initial={{ x2: 70, y2: 55 }}
        animate={{ 
          x2: isClimbing ? [70, 80, 70] : 70, 
          y2: isClimbing ? [55, 0, 55] : 55 
        }}
        transition={{ duration: 0.4, delay: 0.2, repeat: isClimbing ? Infinity : 0, ease: "linear" }}
      />
      
      <motion.line 
        x1="50" y1="60" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
        initial={{ x2: 35, y2: 95 }}
        animate={{ 
          x2: isClimbing ? [35, 25, 35] : 35, 
          y2: isClimbing ? [95, 65, 95] : 95 
        }}
        transition={{ duration: 0.4, delay: 0.2, repeat: isClimbing ? Infinity : 0, ease: "linear" }}
      />
      
      <motion.line 
        x1="50" y1="60" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
        initial={{ x2: 65, y2: 95 }}
        animate={{ 
          x2: isClimbing ? [65, 75, 65] : 65, 
          y2: isClimbing ? [95, 65, 95] : 95 
        }}
        transition={{ duration: 0.4, repeat: isClimbing ? Infinity : 0, ease: "linear" }}
      />
    </motion.svg>
  );
};

export default function SteppingStonesNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [isClimbing, setIsClimbing] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      // Simulate physical kinetic climbing logic upon scrolling
      setIsClimbing(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsClimbing(false), 200);

      const currentScrollPos = window.scrollY + window.innerHeight / 3;
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id);
        if (el && currentScrollPos >= el.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollTo = (id) => {
    setIsClimbing(true);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setIsClimbing(false), 800);
  };

  return (
    <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">
       {/* Removed the background 'water blur' totally removing the shine */}
       
       <div className="flex flex-col gap-10 relative z-10 items-center w-24 py-12 pointer-events-auto">
          {sections.map((section) => {
             const isActive = activeSection === section.id;
             return (
               <div 
                 key={section.id} 
                 className="relative group flex items-center justify-center w-full" 
               >
                  <button 
                    onClick={() => scrollTo(section.id)}
                    className={`
                       relative transition-all duration-300 ease-out
                       w-10 h-8 border-2 border-slate-700
                       ${isActive 
                          ? 'bg-slate-400 scale-110' 
                          : 'bg-slate-900 hover:bg-slate-800'
                       }
                    `}
                    style={{ 
                       borderRadius: '43% 57% 65% 35% / 46% 41% 59% 54%',
                       transform: `translateX(${section.offset}px)`,
                       boxShadow: 'none' // Box shadow shine completely severed
                    }}
                  >
                  </button>

                  {/* Animated SVG Stick Figure jumping and climbing automatically appended between the stones! */}
                  {isActive && (
                     <motion.div 
                        layoutId="nav-climber" 
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="absolute -top-3 z-20 pointer-events-none"
                        style={{ transform: `translateX(calc(${section.offset}px))` }}
                     >
                        <AnimatedClimber isClimbing={isClimbing} />
                     </motion.div>
                  )}

                  <div 
                    className={`absolute right-full mr-4 px-4 py-2 bg-slate-900 text-slate-200 text-sm font-bold rounded-sm border-l-4 border-primary border-slate-800 cursor-pointer pointer-events-none whitespace-nowrap transition-all duration-300 shadow-none ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
                    style={{ transform: isActive ? `translateX(${section.offset}px)` : `translateX(calc(${section.offset}px + 10px))` }}
                  >
                    {section.title}
                  </div>
               </div>
             )
          })}
       </div>
    </div>
  )
}
