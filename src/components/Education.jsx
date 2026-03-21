import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, CheckSquare, Award, User, Star } from 'lucide-react';

const educationData = [
  {
    id: 1,
    year: "2019",
    degree: "G.C.E. Ordinary Level",
    institution: "Sujatha vidyalaya Matara",
    gpa: "9 A's",
    description: "Completed with outstanding grades to build a strong foundational background.",
    icon: <CheckSquare size={20} />
  },
  {
    id: 2,
    year: "2022",
    degree: "G.C.E. Advanced Level",
    institution:"Sujatha vidyalaya Matara",
    gpa: '1.758 (Z-Score)',
    description: "Graduated with top honors, specializing in advanced mathematics and physics.",
    icon: <Award size={20} />
  },
  {
    id: 3,
    year: "2024",
    degree: "BSc (Hons) in Information Technology",
    institution: "University of Moratuwa",
    gpa: "GPA: 3.52",
    description: "Currently pursuing a comprehensive curriculum focusing on algorithms,data structures,OOP concepts, full-stack web technologies, and software architecture.",
    icon: <GraduationCap size={20} />
  }
];

const AnimatedClimber = ({ isClimbing }) => {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 100 100" className="overflow-visible">
      <circle cx="50" cy="20" r="10" fill="currentColor" />
      <line x1="50" y1="30" x2="50" y2="60" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      
      <motion.line 
        x1="50" y1="35" stroke="currentColor" strokeWidth="6" strokeLinecap="round"
        initial={{ x2: 30, y2: 55 }}
        animate={{ 
          x2: isClimbing ? [30, 20, 30] : 30, 
          y2: isClimbing ? [55, 0, 55] : 55 
        }}
        transition={{ duration: 0.6, repeat: isClimbing ? Infinity : 0, ease: "linear" }}
      />
      <motion.line 
        x1="50" y1="35" stroke="currentColor" strokeWidth="6" strokeLinecap="round"
        initial={{ x2: 70, y2: 55 }}
        animate={{ 
          x2: isClimbing ? [70, 80, 70] : 70, 
          y2: isClimbing ? [55, 0, 55] : 55 
        }}
        transition={{ duration: 0.6, delay: 0.3, repeat: isClimbing ? Infinity : 0, ease: "linear" }}
      />
      
      <motion.line 
        x1="50" y1="60" stroke="currentColor" strokeWidth="6" strokeLinecap="round"
        initial={{ x2: 35, y2: 95 }}
        animate={{ 
          x2: isClimbing ? [35, 25, 35] : 35, 
          y2: isClimbing ? [95, 65, 95] : 95 
        }}
        transition={{ duration: 0.6, delay: 0.3, repeat: isClimbing ? Infinity : 0, ease: "linear" }}
      />
      
      <motion.line 
        x1="50" y1="60" stroke="currentColor" strokeWidth="6" strokeLinecap="round"
        initial={{ x2: 65, y2: 95 }}
        animate={{ 
          x2: isClimbing ? [65, 75, 65] : 65, 
          y2: isClimbing ? [95, 65, 95] : 95 
        }}
        transition={{ duration: 0.6, repeat: isClimbing ? Infinity : 0, ease: "linear" }}
      />
    </motion.svg>
  );
};

export default function Education() {
  const [activeStep, setActiveStep] = useState(2); 
  const [isClimbing, setIsClimbing] = useState(false);

  const handleStepClick = (index) => {
    if (index === activeStep) return;
    setIsClimbing(true);
    setActiveStep(index);
    
    setTimeout(() => setIsClimbing(false), 800);
  };

  return (
    <section id="education" className="py-20 bg-slate-900 border-b border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education <span className="text-primary">Ladder</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">Click a rung on the ladder to climb and view the educational milestone!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col items-center justify-center relative py-6">
             <div className="flex flex-col-reverse items-center justify-end w-full max-w-sm">
               {educationData.map((edu, index) => {
                 const isActive = index === activeStep;
                 const isPassed = index <= activeStep;
                 return (
                   <React.Fragment key={edu.id}>
                     <motion.button 
                       onClick={() => handleStepClick(index)}
                       whileHover={{ scale: 1.05 }}
                       className={`relative w-48 sm:w-64 h-16 rounded-lg flex items-center justify-center border-2 transition-all duration-500 z-10 group
                         ${isActive ? 'bg-primary/20 border-primary text-white shadow-[0_0_20px_rgba(56,189,248,0.5)]' 
                         : isPassed ? 'bg-slate-800 border-slate-700 text-slate-300' 
                         : 'bg-slate-900 border-slate-800 text-slate-600 hover:text-slate-400'}
                       `}
                     >
                       <span className="font-bold text-lg flex items-center gap-2">
                         {edu.year} 
                         
                         {isActive && (
                           <motion.div 
                             layoutId="climber" 
                             transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                             className="absolute -left-12 md:-left-16 text-primary z-20"
                           >
                             <AnimatedClimber isClimbing={isClimbing} />
                           </motion.div>
                         )}
                         
                       </span>
                     </motion.button>
                     
                     {index < educationData.length - 1 && (
                       <div className="flex w-32 sm:w-48 justify-between h-16 relative">
                         <div className={`w-3 h-full rounded-sm transition-colors duration-500 ${isPassed && activeStep > index ? 'bg-primary border-l border-white/20' : 'bg-slate-800'}`}></div>
                         <div className={`w-3 h-full rounded-sm transition-colors duration-500 ${isPassed && activeStep > index ? 'bg-primary border-r border-white/20' : 'bg-slate-800'}`}></div>
                       </div>
                     )}
                   </React.Fragment>
                 );
               })}
             </div>
          </div>

          <div className="h-[320px] flex items-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                className="w-full bg-slate-900 border-4 border-slate-800 p-8 relative overflow-hidden rounded-2xl"
              >
                <div className="absolute -bottom-4 -right-4 p-8 opacity-[0.05] text-white">
                   {React.cloneElement(educationData[activeStep].icon, { size: 160 })}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold border-b border-primary/30 text-white mb-6 pb-4">
                  {educationData[activeStep].degree}
                </h3>
                
                <div className="space-y-4">
                   <div className="flex flex-wrap items-center gap-4 text-slate-300">
                     <div className="flex items-center gap-2 text-lg font-medium text-primary bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
                       <MapPin size={20} /> {educationData[activeStep].institution}
                     </div>
                     <div className="flex items-center gap-2 font-medium bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                       <Calendar size={18} className="text-secondary" /> {educationData[activeStep].year}
                     </div>
                     <div className="flex items-center gap-2 font-medium bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                       <Star size={18} className="text-yellow-400" /> {educationData[activeStep].gpa}
                     </div>
                   </div>
                   
                   <p className="mt-4 text-slate-400 text-lg leading-relaxed pt-2">
                     {educationData[activeStep].description}
                   </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
