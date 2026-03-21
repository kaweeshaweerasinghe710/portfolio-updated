import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'home', title: 'Home', offset: -15 },
  { id: 'about', title: 'About Me', offset: 10 },
  { id: 'education', title: 'Education', offset: -5 },
  { id: 'skills', title: 'Skills', offset: 15 },
  { id: 'projects', title: 'Projects', offset: -10 },
  { id: 'contact', title: 'Contact', offset: 5 }
];

export default function SteppingStonesNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
