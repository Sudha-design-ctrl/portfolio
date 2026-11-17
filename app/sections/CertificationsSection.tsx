'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Clock, Sparkles, BookOpen, Layers } from 'lucide-react';
import { SectionHeading } from '@/app/components';
import { certificationsList } from '@/app/data/certifications';
import { fadeInUp, staggerContainer } from '@/app/lib/animation';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 border-t border-purple-500/10 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Credentials"
          title="Professional Certifications & Ongoing Training"
          subtitle="Structured technical coursework and verified competencies in data analytics and data science."
          centered={true}
        />

        {/* Certifications Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {certificationsList.map((cert) => {
            const isCompleted = cert.status === 'Completed';

            return (
              <motion.div
                key={cert.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className={`relative rounded-3xl bg-gradient-to-br from-[#101024] via-[#0c0c1a] to-[#080812] border p-6 sm:p-8 flex flex-col justify-between shadow-xl overflow-hidden group transition-all duration-300 ${
                  isCompleted
                    ? 'border-purple-500/25 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(108,61,255,0.18)]'
                    : 'border-indigo-500/25 hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.18)]'
                }`}
              >
                {/* Ambient corner glow */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-all duration-500 ${
                    isCompleted
                      ? 'bg-purple-600/15 group-hover:bg-purple-600/25'
                      : 'bg-indigo-600/15 group-hover:bg-indigo-600/25'
                  }`}
                />

                <div className="space-y-5 relative z-10">
                  {/* Top Header: Badge + Status */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                          isCompleted
                            ? 'bg-purple-950/60 border-purple-500/30 text-purple-300'
                            : 'bg-indigo-950/60 border-indigo-500/30 text-indigo-300'
                        }`}
                      >
                        {isCompleted ? (
                          <Award className="w-5 h-5 text-purple-400" />
                        ) : (
                          <Sparkles className="w-5 h-5 text-indigo-400" />
                        )}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-purple-400 font-semibold tracking-wider uppercase block">
                          {isCompleted ? 'Professional Certification' : 'Active Training Program'}
                        </span>
                        {cert.platform && (
                          <span className="text-xs text-slate-300 font-medium">
                            Platform: {cert.platform}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Status Pill */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                        isCompleted
                          ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30'
                          : 'bg-amber-950/60 text-amber-300 border-amber-500/30'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Completed</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                          <span>Ongoing Course</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {cert.title}
                    {cert.platform && !cert.title.includes(cert.platform) && (
                      <span className="text-slate-400 font-normal text-lg ml-2">
                        &mdash; {cert.platform}
                      </span>
                    )}
                  </h3>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  )}

                  {/* Skills Covered Pills */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono font-semibold text-purple-300 uppercase tracking-wider block">
                      Skills &amp; Curriculum Covered:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cert.skillsCovered.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-[#14142b] text-purple-200 border border-purple-500/15"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="pt-4 mt-6 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
                  <span className="flex items-center gap-1.5 text-purple-300/80">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    Technical Curriculum
                  </span>
                  <span>{isCompleted ? 'Verified Credential' : 'In Progress'}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
