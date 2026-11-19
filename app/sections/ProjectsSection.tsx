'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SectionHeading, ProjectCard, GithubIcon } from '@/app/components';
import { projectsData } from '@/app/data/projects';
import { profileData } from '@/app/data/profile';
import { fadeInUp, staggerContainer } from '@/app/lib/animation';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Projects"
          title="Engineered Systems & Research"
          subtitle="Real-world software and machine learning implementations with verifiable architectures."
          centered={false}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 mt-12"
        >
          {/* Main flagship */}
          <motion.div variants={fadeInUp}>
            <ProjectCard project={projectsData[0]} />
          </motion.div>

          {/* Grid of other 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp}>
              <ProjectCard project={projectsData[1]} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ProjectCard project={projectsData[2]} />
            </motion.div>
          </div>
        </motion.div>

        {/* GitHub link note */}
        <div className="mt-8 pt-6 border-t border-[#1f1f1f] flex items-center justify-between text-xs font-mono text-[#737373]">
          <span>More experiments & codebases on GitHub</span>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#f5f5f5] hover:text-indigo-400 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>github.com/Sudha-design-ctrl</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
