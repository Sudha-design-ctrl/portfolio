'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  Database,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/app/components';
import { fadeInUp, staggerContainer } from '@/app/lib/animation';

interface SkillPill {
  name: string;
  core?: boolean;
}

interface SkillDomain {
  title: string;
  category: string;
  icon: React.ReactNode;
  summary: string;
  skills: SkillPill[];
}

const skillDomains: SkillDomain[] = [
  {
    title: 'Full-Stack & Web',
    category: 'Architecture & APIs',
    icon: <Globe className="w-5 h-5 text-indigo-400" />,
    summary: 'Building fast, accessible web applications and high-throughput Python REST services.',
    skills: [
      { name: 'React.js', core: true },
      { name: 'Next.js', core: true },
      { name: 'FastAPI', core: true },
      { name: 'Node.js & Express', core: false },
    ],
  },
  {
    title: 'Languages & Core',
    category: 'Foundations',
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
    summary: 'Strongly-typed software development, algorithmic logic, and relational database queries.',
    skills: [
      { name: 'Python', core: true },
      { name: 'TypeScript', core: true },
      { name: 'JavaScript (ES6+)', core: false },
      { name: 'SQL', core: true },
    ],
  },
  {
    title: 'Data Analytics & ML',
    category: 'Intelligence & Insights',
    icon: <BarChart3 className="w-5 h-5 text-purple-300" />,
    summary: 'Transforming raw data into executive dashboards, predictive models, and computer vision pipelines.',
    skills: [
      { name: 'Excel', core: true },
      { name: 'Power BI', core: true },
      { name: 'Tableau', core: true },
      { name: 'Pandas', core: true },
      { name: 'MediaPipe', core: true },
      { name: 'Scikit-learn', core: true },
    ],
  },
  {
    title: 'Databases & Tools',
    category: 'Infrastructure & Workflows',
    icon: <Database className="w-5 h-5 text-violet-400" />,
    summary: 'Relational data modeling, Git collaboration, and interactive computational notebooks.',
    skills: [
      { name: 'PostgreSQL', core: true },
      { name: 'MySQL', core: true },
      { name: 'Git & GitHub', core: true },
      { name: 'Jupyter Notebook', core: false },
    ],
  },
];

const marqueeSkills = [
  'Python',
  'Next.js',
  'FastAPI',
  'React.js',
  'SQL',
  'Power BI',
  'PostgreSQL',
  'TypeScript',
  'Tableau',
  'MediaPipe',
  'Excel',
  'Pandas',
  'Git & GitHub',
  'Scikit-learn',
  'MySQL',
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-purple-500/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Core Stack & Competencies"
          subtitle="Cleanly organized into 4 essential domains — focused on full-stack web engineering, data analytics, and machine learning."
          centered={true}
        />

        {/* 2x2 Domain Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12"
        >
          {skillDomains.map((domain) => (
            <motion.div
              key={domain.title}
              variants={fadeInUp}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#0c0c1a] via-[#0e0e20] to-[#0a0a14] border border-purple-500/15 hover:border-purple-500/35 hover:shadow-[0_0_30px_rgba(108,61,255,0.12)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-purple-950/50 border border-purple-500/20 flex items-center justify-center shrink-0">
                      {domain.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-white">
                        {domain.title}
                      </h3>
                      <p className="text-[11px] font-mono text-purple-400">
                        {domain.category}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                    {domain.skills.length} skills
                  </span>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {domain.summary}
                </p>
              </div>

              {/* Skills Pill Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-purple-500/10">
                {domain.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-default ${
                      skill.core
                        ? 'bg-purple-950/50 text-purple-200 border border-purple-500/25 hover:border-purple-400 hover:bg-purple-900/40 hover:scale-105 shadow-sm'
                        : 'bg-[#101020] text-slate-300 border border-white/10 hover:border-purple-500/30 hover:text-white hover:scale-105'
                    }`}
                  >
                    {skill.core && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    )}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Horizontal Marquee Ticker */}
        <div className="relative rounded-2xl bg-[#090914] border border-purple-500/15 py-3 px-4 overflow-hidden">
          {/* Edge gradients for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#090914] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#090914] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee items-center gap-6 text-xs font-mono">
            {/* First sequence */}
            {marqueeSkills.map((name, i) => (
              <span key={`m1-${i}`} className="inline-flex items-center gap-3 text-slate-300 shrink-0">
                <span className="text-purple-400 font-semibold">{name}</span>
                <Sparkles className="w-2.5 h-2.5 text-purple-500/60" />
              </span>
            ))}
            {/* Duplicate sequence for seamless loop */}
            {marqueeSkills.map((name, i) => (
              <span key={`m2-${i}`} className="inline-flex items-center gap-3 text-slate-300 shrink-0">
                <span className="text-purple-400 font-semibold">{name}</span>
                <Sparkles className="w-2.5 h-2.5 text-purple-500/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
