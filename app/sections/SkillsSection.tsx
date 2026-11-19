'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/app/components';
import { fadeInUp, staggerContainer } from '@/app/lib/animation';

const skillDomains = [
  {
    title: 'Full-Stack & Web',
    skills: ['React.js', 'Next.js', 'FastAPI', 'Node.js', 'Express'],
  },
  {
    title: 'Languages & Core',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    title: 'Data & Analytics',
    skills: ['Excel', 'Power BI', 'Tableau', 'Pandas', 'Scikit-learn', 'MediaPipe'],
  },
  {
    title: 'Databases & Tools',
    skills: ['PostgreSQL', 'MySQL', 'Git', 'GitHub', 'Jupyter Notebook'],
  },
];

const marqueeSkills = [
  'Python', 'Next.js', 'FastAPI', 'React.js', 'SQL', 'Power BI',
  'PostgreSQL', 'TypeScript', 'Tableau', 'MediaPipe', 'Excel', 'Pandas',
  'Git', 'Scikit-learn', 'MySQL',
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Skills"
          title="Core Stack & Competencies"
          subtitle="Focused across full-stack engineering, data analytics, and machine learning."
          centered={false}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px mt-12 border border-[#1f1f1f] rounded-xl overflow-hidden bg-[#1f1f1f]"
        >
          {skillDomains.map((domain) => (
            <motion.div
              key={domain.title}
              variants={fadeInUp}
              className="p-6 bg-[#0a0a0a] space-y-4"
            >
              <h3 className="text-sm font-semibold text-[#f5f5f5] tracking-tight">
                {domain.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-xs font-mono text-[#737373] border border-[#1f1f1f] hover:border-[#333] hover:text-[#f5f5f5] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee */}
        <div className="relative mt-8 py-3 overflow-hidden border-t border-b border-[#1f1f1f]">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee items-center gap-8 text-xs font-mono text-[#737373]">
            {[...marqueeSkills, ...marqueeSkills].map((name, i) => (
              <span key={i} className="shrink-0 inline-flex items-center gap-4">
                {name}
                <span className="w-1 h-1 rounded-full bg-[#333]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
