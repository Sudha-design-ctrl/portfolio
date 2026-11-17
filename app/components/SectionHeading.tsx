'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/lib/animation';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      {centered && (
        <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-400 opacity-80" />
      )}
    </motion.div>
  );
};
