'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
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
    <footer className="border-t border-[#1f1f1f] bg-[#0a0a0a] text-[#737373] py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#1f1f1f]">
          <div>
            <div className="flex items-center gap-2 text-[#f5f5f5] font-semibold">
              <div className="w-6 h-6 rounded bg-[#161616] border border-[#222] flex items-center justify-center text-[10px] font-bold">
                SG
              </div>
              <span>{profileData.name}</span>
            </div>
            <p className="text-xs text-[#737373] mt-1 font-mono">
              Software Developer &bull; PES University MCA &apos;27
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#f5f5f5] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#1f1f1f] hover:border-[#333] hover:text-[#f5f5f5] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#1f1f1f] hover:border-[#333] hover:text-[#f5f5f5] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between text-xs font-mono text-[#555]">
          <p>&copy; {currentYear} {profileData.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-[#f5f5f5] transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
