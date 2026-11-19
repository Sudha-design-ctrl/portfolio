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
  centered = false,
  className = '',
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`space-y-2 ${centered ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {badge && (
        <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">
          // {badge}
        </p>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#f5f5f5]">
        {title}
      </h2>

      {subtitle && (
        <p className={`text-sm sm:text-base text-[#737373] max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
