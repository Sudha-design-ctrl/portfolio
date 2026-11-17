'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  BarChart3,
  BrainCircuit,
  Wrench,
  Globe,
  Sparkles,
} from 'lucide-react';
import { SkillItem } from '@/app/types';

interface SkillCardProps {
  skill: SkillItem;
  className?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, className = '' }) => {
  const getCategoryIcon = () => {
    switch (skill.category) {
      case 'Programming Languages':
        return <Code2 className="w-4 h-4 text-purple-400" />;
      case 'Web and Mobile Development':
        return <Globe className="w-4 h-4 text-indigo-400" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-violet-400" />;
      case 'Data Analytics':
        return <BarChart3 className="w-4 h-4 text-purple-300" />;
      case 'Machine Learning':
        return <BrainCircuit className="w-4 h-4 text-fuchsia-400" />;
      case 'Development Tools':
        return <Wrench className="w-4 h-4 text-slate-300" />;
      default:
        return <Sparkles className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`relative group rounded-2xl bg-[#0d0d1b] border border-purple-500/15 p-4 sm:p-5 flex flex-col justify-between shadow-md hover:border-purple-500/40 hover:bg-[#121226] hover:shadow-[0_0_24px_rgba(108,61,255,0.16)] transition-all duration-200 ${
        skill.highlight ? 'ring-1 ring-purple-500/25' : ''
      } ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-950/40 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-900/40 transition-colors">
              {getCategoryIcon()}
            </div>
            <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-purple-200 transition-colors">
              {skill.name}
            </h4>
          </div>

          {skill.highlight && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/25 shrink-0 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-purple-400" />
              Core
            </span>
          )}
        </div>

        {skill.description && (
          <p className="text-xs text-slate-400 leading-relaxed pl-0.5">
            {skill.description}
          </p>
        )}
      </div>

      <div className="pt-3 mt-3 border-t border-purple-500/10 flex items-center justify-between text-[11px] font-mono text-purple-400/80">
        <span>{skill.category}</span>
      </div>
    </motion.div>
  );
};
