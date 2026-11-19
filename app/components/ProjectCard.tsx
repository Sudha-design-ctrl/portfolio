'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectVisual } from './ProjectVisual';
import { ProjectItem } from '@/app/types';

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    <div
      className={`rounded-xl bg-[#111] border border-[#1f1f1f] p-6 sm:p-7 flex flex-col justify-between transition-colors hover:border-[#333] ${className}`}
    >
      <div className="space-y-4">
        {/* Meta Bar */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-indigo-400 font-medium">
            {project.category}
          </span>
          <span className="text-[#737373]">
            {project.statusType}
          </span>
        </div>

        {/* Project Visual */}
        <div className="pt-1">
          <ProjectVisual projectId={project.id} />
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-[#f5f5f5]">
            {project.title}
          </h3>
          {project.tagline && (
            <p className="text-xs text-[#737373] font-mono">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-[#737373] leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1 pt-1 text-xs text-[#737373] list-disc list-inside">
            {project.highlights.map((h, idx) => (
              <li key={idx}>{h}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom: Tags & Links */}
      <div className="pt-6 mt-6 border-t border-[#1f1f1f] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[11px] font-mono text-[#737373] border border-[#1f1f1f]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#f5f5f5] hover:text-indigo-400 transition-colors shrink-0"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Source</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
