'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles, Download, Eye } from 'lucide-react';
import { navLinks } from '@/app/data/navigation';
import { profileData } from '@/app/data/profile';
import { useScrollPosition } from '@/app/hooks/useScrollPosition';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 20;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080810]/85 backdrop-blur-md border-b border-purple-500/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1"
            aria-label="Sudha Gowda - Back to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-purple-400 p-[1px] shadow-sm shadow-purple-900/50">
              <div className="w-full h-full bg-[#0d0d1a] rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <span className="font-bold text-sm tracking-wider text-purple-200">SG</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-purple-300 transition-colors">
                {profileData.name}
              </span>
              <span className="text-[10px] text-purple-400/80 tracking-widest uppercase flex items-center gap-1 font-mono">
                <Sparkles className="w-2.5 h-2.5" /> Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-slate-300 hover:text-purple-300 transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={profileData.resumeUrl}
              download={profileData.resumeFileName || 'Sudha_Gowda_Resume.pdf'}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 transition-all duration-200 shadow-md shadow-purple-950/50 hover:shadow-purple-700/30 active:scale-95"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 transition-all duration-200 active:scale-95"
              title="View Resume in New Tab"
            >
              <Eye className="w-3.5 h-3.5 text-purple-400" />
              <span>Preview</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0c0c17]/95 backdrop-blur-xl border-b border-purple-500/15 px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-purple-300 hover:bg-purple-950/30 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-purple-900/30 flex flex-col gap-2.5">
                <a
                  href={profileData.resumeUrl}
                  download={profileData.resumeFileName || 'Sudha_Gowda_Resume.pdf'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 shadow-md shadow-purple-950/40"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  <Eye className="w-4 h-4 text-purple-400" />
                  <span>View Resume (Preview)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
