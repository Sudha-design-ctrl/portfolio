'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks } from '@/app/data/navigation';
import { profileData } from '@/app/data/profile';
import { useScrollPosition } from '@/app/hooks/useScrollPosition';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 20;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-[#f5f5f5] focus:outline-none"
            aria-label="Sudha Gowda - Back to top"
          >
            <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center font-bold text-xs text-[#f5f5f5]">
              SG
            </div>
            <span className="font-semibold text-sm sm:text-base tracking-tight text-[#f5f5f5]">
              {profileData.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-[#737373] hover:text-[#f5f5f5] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.resumeUrl}
              download={profileData.resumeFileName || 'Sudha_Gowda_Resume.pdf'}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#f5f5f5] border border-[#1f1f1f] hover:border-[#333] hover:bg-[#111] transition-all"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#737373] hover:text-[#f5f5f5] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0d0d0d] border-b border-[#1f1f1f] px-6 pt-3 pb-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-sm font-medium text-[#737373] hover:text-[#f5f5f5] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[#1f1f1f]">
                <a
                  href={profileData.resumeUrl}
                  download={profileData.resumeFileName || 'Sudha_Gowda_Resume.pdf'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
