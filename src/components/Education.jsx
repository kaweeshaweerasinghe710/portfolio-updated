import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, CheckSquare, Award, Star } from 'lucide-react';

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
  },
  {
    id: 2,
    year: "2022",
    degree: "G.C.E. Advanced Level",
    institution: "Sujatha Vidyalaya, Matara",
    gpa: "1.758 Z-Score",
    description: "Graduated with top honors, specializing in advanced mathematics and physics.",
    icon: Award,
    tag: "Science Stream",
    color: "#818cf8",
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

export default function Education() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section id="education" className="py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Node Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-0"
          >
            {educationData.map((edu, index) => (
              <div key={edu.id} className="flex items-start gap-6 w-full">

                <div className="flex flex-col items-center">
                  <HexNode
                    active={index === activeStep}
                    passed={index <= activeStep}
                    color={edu.color}
                    year={edu.year}
                    onClick={() => setActiveStep(index)}
                  />
                  {index < educationData.length - 1 && (
                    <div
                      className="w-0.5 mt-1"
                      style={{
                        height: 96,
                        background: index < activeStep ? edu.color : "#1e293b"
                      }}
                    />
                  )}
                </div>

                <motion.div
                  className="pt-3 cursor-pointer"
                  onClick={() => setActiveStep(index)}
                  animate={{ opacity: index === activeStep ? 1 : 0.45 }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border inline-block mb-1"
                    style={{
                      color: edu.color,
                      borderColor: edu.color,
                      background: "#0f172a"
                    }}
                  >
                    {edu.tag}
                  </span>
                  <p className="text-white font-bold text-base leading-tight">{edu.degree}</p>
                  <p className="text-slate-500 text-xs mt-0.5 font-mono">{edu.institution}</p>
                </motion.div>

              </div>
            ))}
          </motion.div>

          <div className="h-[520px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full relative rounded-2xl border border-slate-800 bg-slate-900 p-8"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: educationData[activeStep].color }}
                />

                {/* Watermark icon */}
                <div className="absolute -bottom-1 -right-1 opacity-[0.04]">
                  {React.createElement(educationData[activeStep].icon, { size: 160, color: "white" })}
                </div>

                <span
                  className="inline-block text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-4 border"
                  style={{
                    color: educationData[activeStep].color,
                    borderColor: educationData[activeStep].color,
                    background: "#0f172a"
                  }}
                >
                  {educationData[activeStep].tag}
                </span>

                <h3 className="text-2xl font-black text-white leading-tight mb-5">
                  {educationData[activeStep].degree}
                </h3>

                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="flex items-center gap-2 text-xs font-semibold bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg text-slate-300">
                    <MapPin size={13} style={{ color: educationData[activeStep].color }} />
                    {educationData[activeStep].institution}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg text-slate-300">
                    <Calendar size={13} className="text-indigo-400" />
                    {educationData[activeStep].year}
                  </div>

                  
                  <div
                    className="flex items-center gap-2 text-xs font-black px-3 py-2 rounded-lg"
                    style={{
                      background: `${educationData[activeStep].color}22`,
                      border: `1.5px solid ${educationData[activeStep].color}`,
                      color: educationData[activeStep].color,
                    }}
                  >
                    <Star size={13} fill={educationData[activeStep].color} style={{ color: educationData[activeStep].color }} />
                    {educationData[activeStep].gpa}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {educationData[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}