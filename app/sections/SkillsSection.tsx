'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Globe,
  Database,
  BarChart3,
  BrainCircuit,
  Wrench,
  Sparkles,
  Layers,
} from 'lucide-react';
import { SectionHeading, SkillCard } from '@/app/components';
import { skillCategories, skillsData } from '@/app/data/skills';
import { staggerContainer } from '@/app/lib/animation';
import { SkillCategory } from '@/app/types';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  const getCategoryTabIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-3.5 h-3.5" />;
      case 'Web and Mobile Development':
        return <Globe className="w-3.5 h-3.5" />;
      case 'Databases':
        return <Database className="w-3.5 h-3.5" />;
      case 'Data Analytics':
        return <BarChart3 className="w-3.5 h-3.5" />;
      case 'Machine Learning':
        return <BrainCircuit className="w-3.5 h-3.5" />;
      case 'Development Tools':
        return <Wrench className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-purple-500/10 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Core Competencies & Tooling"
          subtitle="Core technologies and frameworks driving my full-stack applications, machine learning pipelines, and data analytics work."
          centered={true}
        />

        {/* 6 Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('All')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
              activeCategory === 'All'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50 scale-105'
                : 'bg-[#0e0e1d] text-slate-400 hover:text-white hover:bg-[#15152b] border border-purple-500/10'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Skills ({skillsData.length})</span>
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50 scale-105'
                  : 'bg-[#0e0e1d] text-slate-400 hover:text-white hover:bg-[#15152b] border border-purple-500/10'
              }`}
            >
              {getCategoryTabIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Category Description Banner */}
        <div className="mb-6 flex items-center justify-between text-xs font-mono text-purple-400/90 px-1">
          <span>
            Showing: <strong className="text-white">{activeCategory}</strong> ({filteredSkills.length} verified technologies)
          </span>
          <span className="hidden sm:inline-block text-slate-500">
            Backed by production project &amp; internship applications
          </span>
        </div>

        {/* Interactive Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
          >
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
