import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Portfolio.
          </span>
        </div>
        
        <p className="text-slate-500 text-sm">
          &copy; {currentYear} John Doe (Placeholder). All rights reserved. Built with React & Tailwind.
        </p>
        
        <div className="flex gap-4">
          <a href="#" className="p-2 bg-slate-900 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="p-2 bg-slate-900 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-2 bg-slate-900 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors">
            <Twitter size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
}
