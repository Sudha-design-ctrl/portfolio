'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  Sparkles,
  CheckCircle2,
  Laptop,
  Award,
  Globe2,
  BookOpen,
} from 'lucide-react';
import { SectionHeading } from '@/app/components';
import { experienceData, educationData } from '@/app/data/experience';
import { fadeInUp, staggerContainer } from '@/app/lib/animation';

export const ExperienceSection: React.FC = () => {
  const internship = experienceData[0];

  return (
    <section id="experience" className="py-24 border-t border-purple-500/10 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Internship Experience & Education"
          subtitle="Verifiable virtual industry experience and academic excellence across computer applications and science."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* SECTION 1: INTERNSHIP EXPERIENCE (Left Column - 6 Cols) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-purple-500/15">
              <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-purple-300">
                <Briefcase className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Internship Experience
                </h3>
                <p className="text-xs font-mono text-purple-400">
                  Virtual Industry Training &bull; Sustainability AI
                </p>
              </div>
            </div>

            {/* Featured Internship Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#101024] via-[#0c0c1a] to-[#080812] border border-purple-500/25 p-6 sm:p-8 shadow-xl overflow-hidden group">
              {/* Corner ambient glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/25 transition-all duration-500" />

              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Ongoing Virtual Internship
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#15152c] border border-purple-500/20 text-purple-300 text-xs font-mono">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {internship.period}
                </span>
              </div>

              {/* Role & Organization */}
              <div className="space-y-1.5 mb-4">
                <h4 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                  {internship.role}
                </h4>
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-300">
                  <Building2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{internship.company}</span>
                </div>
              </div>

              {/* Mode & Institutional Context Banner */}
              <div className="p-3.5 mb-5 rounded-2xl bg-[#090914] border border-purple-500/15 space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-purple-300 font-mono font-medium">
                  <Globe2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Mode: {internship.mode}</span>
                </div>
                <p className="text-slate-400 leading-relaxed pl-5 text-[11px]">
                  {internship.context}
                </p>
              </div>

              {/* Workplace Environment Highlight */}
              <div className="mb-5 flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-950/40 border border-purple-500/20 px-3 py-2 rounded-xl">
                <Laptop className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Simulated Workplace Environment: <strong className="text-white">SustainAI</strong></span>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="space-y-2.5 mb-6">
                <h5 className="text-xs font-mono font-semibold text-purple-300 uppercase tracking-wider">
                  Key Responsibilities &amp; Learnings:
                </h5>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {internship.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Focus Badges */}
              {internship.technologies && (
                <div className="pt-4 border-t border-purple-500/15">
                  <div className="flex flex-wrap gap-1.5">
                    {internship.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#14142b] text-purple-200 border border-purple-500/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* SECTION 2: EDUCATION TIMELINE (Right Column - 6 Cols) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-purple-500/15">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Academic Timeline
                </h3>
                <p className="text-xs font-mono text-purple-400">
                  Higher Education &bull; Scholastic Qualifications
                </p>
              </div>
            </div>

            {/* Vertical Connected Timeline */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-purple-500 before:via-indigo-500/40 before:to-transparent"
            >
              {educationData.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={fadeInUp}
                  className="relative p-5 sm:p-6 rounded-2xl bg-[#0c0c1a] border border-purple-500/15 hover:border-purple-500/40 hover:bg-[#101024] transition-all duration-200 shadow-md group"
                >
                  {/* Timeline Glowing Node Dot */}
                  <span className="absolute -left-[27px] sm:-left-[35px] top-6 w-3.5 h-3.5 rounded-full bg-[#080810] border-2 border-purple-400 flex items-center justify-center group-hover:border-purple-300 group-hover:scale-125 transition-all">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-purple-300 animate-pulse" />
                  </span>

                  {/* Top Bar: Date & Grade Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {edu.period}
                    </span>

                    {edu.grade && (
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${
                          edu.id === 'edu-bca'
                            ? 'bg-gradient-to-r from-purple-700 to-indigo-600 text-white border-purple-400/50 shadow-md shadow-purple-950/60 ring-1 ring-purple-400/30'
                            : edu.id === 'edu-sslc'
                            ? 'bg-purple-950/70 text-purple-300 border-purple-500/30'
                            : edu.id === 'edu-mca'
                            ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/25'
                            : 'bg-[#151528] text-slate-300 border-purple-500/20'
                        }`}
                      >
                        {edu.id === 'edu-bca' && <Award className="w-3 h-3 text-purple-200" />}
                        {edu.grade}
                      </span>
                    )}
                  </div>

                  {/* Degree / Certificate Title */}
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                    {edu.degree}
                  </h4>

                  {/* Institution Name */}
                  <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                    {edu.institution}
                  </p>

                  {/* University or Board Affiliation */}
                  {edu.university && (
                    <p className="text-xs text-purple-300/90 font-mono mt-0.5 flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3 text-purple-400" />
                      <span>University: {edu.university}</span>
                    </p>
                  )}

                  {edu.board && (
                    <p className="text-xs text-purple-300/90 font-mono mt-0.5 flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3 text-indigo-400" />
                      <span>Board: {edu.board}</span>
                    </p>
                  )}

                  {/* Highlights */}
                  {edu.highlights && (
                    <ul className="pt-2 space-y-1 text-xs text-slate-400 list-disc list-inside">
                      {edu.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
