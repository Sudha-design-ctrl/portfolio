'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '@/app/data/profile';
import { navLinks } from '@/app/data/navigation';

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-500/10 bg-[#06060c] text-slate-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Bio / Branding */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-700 to-indigo-500 flex items-center justify-center font-bold text-xs text-white shadow-md shadow-purple-950/50">
                SG
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {profileData.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-purple-300/90 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>MCA Scholar &bull; Full-Stack &bull; Data Analytics</span>
            </div>
            <p className="text-xs text-slate-400/80 leading-relaxed max-w-md pt-1">
              Thank you for reviewing my portfolio. Open for software development, full-stack engineering, and data analytics opportunities.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-purple-300 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Verified Professional Networks */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Professional Links
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-900/40 transition-all duration-200 shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-purple-400" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-900/40 transition-all duration-200 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-purple-400" />
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-3 font-mono">
              Bangalore, Karnataka, India
            </p>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year and Closing Message */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-purple-300 transition-colors p-1"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
