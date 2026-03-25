import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, CheckSquare, Award, Star, ExternalLink } from 'lucide-react';
import sv from '../assets/sv.jpeg';
import uni from '../assets/uni.jpeg';

const educationData = [
  {
    id: 1,
    year: "2018",
    degree: "G.C.E. Ordinary Level",
    institution: "Sujatha Vidyalaya, Matara",
    gpa: "9 A's",
    description: "Completed with outstanding grades to build a strong foundational background.",
    icon: CheckSquare,
    tag: "Foundation",
    color: "#38bdf8",
    logoUrl: sv,
    logoInitials: "SV",
   
  },
  {
    id: 2,
    year: "2022",
    degree: "G.C.E. Advanced Level",
    institution: "Sujatha Vidyalaya, Matara",
    gpa: "Z-Score:1.758",
    description: "Excelled with a 1.758 Z-score, demonstrating strong academic ability in the science stream.",
    icon: Award,
    tag: "Science Stream",
    color: "#818cf8",
    logoUrl: sv,
    logoInitials: "SV",
    
  },
  {
    id: 3,
    year: "2024",
    degree: "BSc (Hons) in Information Technology",
    institution: "University of Moratuwa",
    gpa: "GPA: 3.56",
    description: "Pursuing a comprehensive curriculum in algorithms, data structures, OOP, full-stack web technologies, and software architecture.",
    icon: GraduationCap,
    tag: "Undergraduate",
    color: "#34d399",
    logoUrl: uni,
    logoInitials: "UOM",
   
  }
];

const HexNode = ({ active, passed, color, year, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="relative flex flex-col items-center cursor-pointer"
  >
    <div
      className="relative w-16 h-16 flex items-center justify-center transition-all duration-500"
      style={{
        clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        background: active ? "#1e293b" : passed ? "#1e293b" : "#0f172a",
        border: `2px solid ${active ? color : passed ? "#334155" : "#1e293b"}`,
      }}
    >
      <span
        className="font-black text-sm tracking-tight transition-colors duration-300"
        style={{ color: active ? color : passed ? "#94a3b8" : "#334155" }}
      >
        {year}
      </span>
    </div>
    <div
      className="mt-2 w-1.5 h-1.5 rounded-full transition-colors duration-300"
      style={{ background: active ? color : "#334155" }}
    />
  </motion.button>
);

const LogoAvatar = ({ edu }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      className="w-26 h-26 rounded-2xl flex items-center justify-center flex-shrink-0"
      style={{
        background: imgError || !edu.logoUrl ? `${edu.color}15` : "#ffffff08",
        border: `2px solid ${edu.color}35`,
      }}
    >
      {edu.logoUrl && !imgError ? (
        <img
          src={edu.logoUrl}
          alt={edu.institution}
          className="w-40 h-33 object-contain rounded-2xl"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-lg font-black" style={{ color: edu.color }}>
          {edu.logoInitials}
        </span>
      )}
    </div>
  );
};

export default function Education() {
  const [activeStep, setActiveStep] = useState(null);

  const handleClick = (index) => {
    setActiveStep(prev => prev === index ? null : index);
  };

  return (
    <section id="education" className="py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Education <span className="text-primary">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {educationData.map((edu, index) => (
            <div key={edu.id} className="flex flex-col w-full">

              {/* Node row */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center flex-shrink-0">
                  <HexNode
                    active={index === activeStep}
                    passed={index <= (activeStep ?? -1)}
                    color={edu.color}
                    year={edu.year}
                    onClick={() => handleClick(index)}
                  />
                  {index < educationData.length - 1 && (
                    <div
                      className="w-0.5 mt-1 transition-colors duration-500"
                      style={{
                        height: 48,
                        background: activeStep !== null && index < activeStep ? edu.color : "#1e293b"
                      }}
                    />
                  )}
                </div>

                <motion.div
                  className="pt-3 cursor-pointer flex-1"
                  onClick={() => handleClick(index)}
                  animate={{ opacity: activeStep === null || index === activeStep ? 1 : 0.4 }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border inline-block mb-1"
                    style={{ color: edu.color, borderColor: edu.color, background: "#0f172a" }}
                  >
                    {edu.tag}
                  </span>
                  <p className="text-white font-bold text-base leading-tight">{edu.degree}</p>
                  <p className="text-slate-500 text-xs mt-0.5 font-mono">{edu.institution}</p>
                </motion.div>
              </div>

              {/* Expandable detail card */}
              <AnimatePresence>
                {activeStep === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden ml-[88px]"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-2xl border mt-2 mb-4 overflow-hidden"
                      style={{
                        borderColor: `${edu.color}40`,
                        background: "#0f172a",
                        boxShadow: `0 0 32px ${edu.color}12`,
                      }}
                    >
                      {/* Top accent line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5"
                        style={{ background: edu.color }}
                      />

                      {/* Watermark */}
                      <div className="absolute top-7/10 left-9/10 transform -translate-x-1/2 -translate-y-1/2  opacity-[0.04] pointer-events-none">
                        {React.createElement(edu.icon, { size: 130, color: "white" })}
                      </div>

                      <div className="p-5">
                        {/* Top row: logo + title + tag */}
                        <div className="flex items-center gap-4 mb-4">
                          <LogoAvatar edu={edu} />
                          <div className="flex-1 min-w-0">
                            <span
                              className="text-[10px] font-black uppercase tracking-[0.22em] px-2.5 py-0.5 rounded-full border inline-block mb-1.5"
                              style={{ color: edu.color, borderColor: edu.color, background: "#0f172a" }}
                            >
                              {edu.tag}
                            </span>
                            <p className="text-white font-black text-base leading-snug">{edu.degree}</p>
                          </div>
                        </div>

                        {/* Meta chips row */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <div className="flex items-center gap-1.5 text-xs font-semibold bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300">
                            <MapPin size={11} style={{ color: edu.color }} />
                            {edu.institution}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs font-semibold bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300">
                            <Calendar size={11} className="text-indigo-400" />
                            {edu.year}
                          </div>
                          
                          <div
                            className="flex items-center gap-1.5 text-xs font-black px-3 py-1.5 rounded-lg"
                            style={{
                              background: `${edu.color}20`,
                              border: `1.5px solid ${edu.color}`,
                              color: edu.color,
                            }}
                          >
                            <Star size={11} fill={edu.color} style={{ color: edu.color }} />
                            {edu.gpa}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                          {edu.description}
                        </p>

                       
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}