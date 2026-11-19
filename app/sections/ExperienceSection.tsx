'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/app/components';
import { experienceData, educationData } from '@/app/data/experience';
import { fadeInUp, staggerContainer } from '@/app/lib/animation';

export const ExperienceSection: React.FC = () => {
  const internship = experienceData[0];

  return (
    <section id="experience" className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Background"
          title="Experience & Education"
          subtitle="Industry training and academic foundation in computer science and applications."
          centered={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left: Internship Experience */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              // Internship
            </h3>

            <div className="rounded-xl bg-[#111] border border-[#1f1f1f] p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-emerald-400">Ongoing</span>
                <span className="text-[#737373]">{internship.period}</span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#f5f5f5]">
                  {internship.role}
                </h4>
                <p className="text-xs font-mono text-[#737373] mt-0.5">
                  {internship.company} &bull; {internship.mode}
                </p>
              </div>

              <p className="text-xs text-[#737373] leading-relaxed">
                {internship.context}
              </p>

              <ul className="space-y-2 text-xs text-[#737373] list-disc list-inside">
                {internship.description.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>

              {internship.technologies && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1f1f1f]">
                  {internship.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-[#737373] border border-[#1f1f1f]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Education Timeline */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              // Education
            </h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-xl bg-[#111] border border-[#1f1f1f] p-5 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#737373]">{edu.period}</span>
                    {edu.grade && (
                      <span className="text-indigo-400 font-semibold">
                        {edu.grade}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#f5f5f5]">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-[#737373]">
                      {edu.institution}
                      {edu.university ? ` (${edu.university})` : ''}
                    </p>
                  </div>

                  {edu.highlights && (
                    <ul className="text-xs text-[#737373] list-disc list-inside space-y-0.5 pt-1">
                      {edu.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
