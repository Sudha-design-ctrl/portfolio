'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { SectionHeading, ProjectCard, GithubIcon } from '@/app/components';
import { projectsData } from '@/app/data/projects';
import { profileData } from '@/app/data/profile';
import { fadeInUp, staggerContainer } from '@/app/lib/animation';

export const ProjectsSection: React.FC = () => {
  const featuredSignFlow = projectsData[0]; // SignFlow
  const buildHerProject = projectsData[1]; // BuildHer
  const debtRiskProject = projectsData[2]; // Debt Sustainability Classifier

  return (
    <section id="projects" className="py-24 border-t border-purple-500/10 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Projects"
          title="Engineered Projects & Systems"
          subtitle="Explore three real-world software and machine learning projects with verifiable source code and architectures."
          centered={true}
        />

        {/* Projects Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-16"
        >
          {/* 1. Flagship Project: SignFlow (Full Width) */}
          <motion.div variants={fadeInUp}>
            <ProjectCard project={featuredSignFlow} />
          </motion.div>

          {/* 2 & 3. Grid for BuildHer and Debt Sustainability Classifier */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <ProjectCard project={buildHerProject} />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ProjectCard project={debtRiskProject} />
            </motion.div>
          </div>
        </motion.div>

        {/* GitHub Repositories Link Banner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d0d1e] via-[#111126] to-[#0d0d1e] border border-purple-500/20 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
              <FolderGit2 className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">
                Explore More on GitHub
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                View repositories, code commits, and project architectures at{' '}
                <span className="text-purple-300 font-mono">github.com/Sudha-design-ctrl</span>.
              </p>
            </div>
          </div>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-[#14142b] border border-purple-500/30 hover:border-purple-500/60 hover:bg-[#1a1a36] transition-all shadow-md active:scale-95 shrink-0"
          >
            <GithubIcon className="w-4 h-4 text-purple-400" />
            <span>Open GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
