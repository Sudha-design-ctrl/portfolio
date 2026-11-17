'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectVisual } from './ProjectVisual';
import { ProjectItem } from '@/app/types';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate motion values for 3D tilt
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 180 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Rotate between -5deg and 5deg for subtle, recruiter-friendly 3D feel
  const rotateX = useTransform(smoothMouseY, [0, 1], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-5, 5]);

  const glarePercentX = useTransform(smoothMouseX, [0, 1], ['0%', '100%']);
  const glarePercentY = useTransform(smoothMouseY, [0, 1], ['0%', '100%']);
  const glareBackground = useMotionTemplate`radial-gradient(circle 350px at ${glarePercentX} ${glarePercentY}, rgba(139, 92, 246, 0.14), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        prefersReducedMotion
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
      }
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`relative rounded-3xl bg-gradient-to-b from-[#0f0f20] via-[#0b0b18] to-[#080812] border p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xl transition-colors duration-300 ${
        project.featured
          ? 'border-purple-500/35 ring-1 ring-purple-500/20 shadow-[0_0_40px_rgba(108,61,255,0.18)]'
          : 'border-purple-500/15 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(108,61,255,0.15)]'
      } ${className}`}
    >
      {/* Specular glare overlay following cursor smoothly on hover */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300"
          style={{
            background: glareBackground,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Top Section */}
      <div className="space-y-5 relative z-10">
        {/* Meta Bar: Badges + Status Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            {project.featured ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-700 to-indigo-600 text-white text-xs font-mono font-bold tracking-wider uppercase shadow-md shadow-purple-950/60">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Project
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#141428] text-purple-300 border border-purple-500/15">
                {project.category}
              </span>
            )}
          </div>

          <span
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${
              project.statusType === 'Implemented Application'
                ? 'bg-emerald-950/50 text-emerald-300 border-emerald-500/25'
                : project.statusType === 'Conceptual Platform & Prototype'
                ? 'bg-amber-950/40 text-amber-300 border-amber-500/25'
                : 'bg-violet-950/40 text-violet-300 border-violet-500/25'
            }`}
          >
            {project.statusType}
          </span>
        </div>

        {/* Real Project-Specific Visual Asset */}
        <div className="pt-1">
          <ProjectVisual projectId={project.id} />
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
            <span>{project.shortTitle}</span>
            {project.tagline && <span>&bull; {project.tagline}</span>}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Key Achievements & Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono font-semibold text-purple-300 uppercase tracking-wider">
              Key Highlights &amp; Architecture:
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bottom Section: Technologies & Action Button */}
      <div className="pt-6 mt-6 border-t border-purple-500/15 space-y-4 relative z-10">
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#131326] text-slate-300 border border-purple-500/15"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub Repository CTA Button */}
        <div className="pt-1 flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 shadow-md shadow-purple-950/60 hover:shadow-purple-700/30 transition-all duration-200 active:scale-95"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
