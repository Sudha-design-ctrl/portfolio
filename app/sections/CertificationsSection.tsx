'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/app/components';
import { certificationsList } from '@/app/data/certifications';
import { fadeInUp, staggerContainer } from '@/app/lib/animation';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Credentials"
          title="Certifications & Coursework"
          subtitle="Specialized training and verified coursework in data analytics and data science."
          centered={false}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {certificationsList.map((cert) => {
            const isCompleted = cert.status === 'Completed';

            return (
              <motion.div
                key={cert.id}
                variants={fadeInUp}
                className="rounded-xl bg-[#111] border border-[#1f1f1f] p-6 flex flex-col justify-between space-y-4 hover:border-[#333] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#737373]">
                      {cert.platform || 'Certification'}
                    </span>
                    <span className={isCompleted ? 'text-emerald-400' : 'text-amber-400'}>
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#f5f5f5]">
                    {cert.title}
                  </h3>

                  {cert.description && (
                    <p className="text-xs text-[#737373] leading-relaxed">
                      {cert.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skillsCovered.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-[#737373] border border-[#1f1f1f]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
