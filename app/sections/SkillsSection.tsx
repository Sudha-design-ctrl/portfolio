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
  Award,
  Sparkles,
  Layers,
} from 'lucide-react';
import { SectionHeading, SkillCard } from '@/app/components';
import { skillCategories, skillsData } from '@/app/data/skills';
import { certificationsData } from '@/app/data/experience';
import { staggerContainer, fadeInUp } from '@/app/lib/animation';
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
          subtitle="A comprehensive inventory across 6 technical domains, rigorously supported by actual resume coursework, projects, and certifications."
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-16"
          >
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Certifications & Continuous Learning Banner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d0d1e] via-[#111128] to-[#0d0d1e] border border-purple-500/20 shadow-xl"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-purple-950/50 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Verified Certifications &amp; Courses
              </h3>
              <p className="text-xs text-slate-400">
                Official credentials supporting data analytics and machine learning competencies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificationsData.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-2xl bg-[#080812]/90 border border-purple-500/15 flex items-start justify-between gap-4 hover:border-purple-500/35 transition-colors"
              >
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white">{cert.title}</h4>
                  <p className="text-xs text-purple-400/90 font-mono mt-0.5">{cert.issuer}</p>
                  <p className="text-xs text-slate-400 mt-2">
                    <span className="text-slate-500 font-mono">Curriculum:</span> {cert.skills}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-purple-950/60 border border-purple-500/30 text-purple-300 shrink-0 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
