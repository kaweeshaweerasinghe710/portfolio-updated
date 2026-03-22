import React from 'react';
import SteppingStonesNav from './components/SteppingStonesNav';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SteppingStonesNav />
      
      <div className="pr-40 md:pr-32">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
