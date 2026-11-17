'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Code2, Laptop, Terminal, Sparkles } from 'lucide-react';
import type { LottieProps } from 'lottie-react';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';
import developerAnimation from '@/public/animations/developer-character.json';

// Dynamically import Lottie named export to prevent SSR hydration issues
const Lottie = dynamic<LottieProps>(
  () => import('lottie-react').then((mod) => mod.Lottie),
  { ssr: false }
);

interface LottieCharacterProps {
  animationData?: any;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const LottieCharacter: React.FC<LottieCharacterProps> = ({
  animationData = developerAnimation,
  className = '',
  width = '100%',
  height = '100%',
}) => {
  const prefersReducedMotion = useReducedMotion();

  // If a verified Lottie animation object is provided, render Lottie
  if (animationData && typeof animationData === 'object' && animationData.v) {
    return (
      <div
        className={`relative flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label="Animated female developer coding on a laptop"
      >
        {/* Soft purple/lavender radial background glow */}
        <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -inset-4 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 w-full h-full max-w-[480px] flex items-center justify-center">
          <Lottie
            src={animationData}
            loop={!prefersReducedMotion}
            autoplay={!prefersReducedMotion}
            className="w-full h-auto drop-shadow-[0_10px_35px_rgba(108,61,255,0.25)]"
          />
        </div>
      </div>
    );
  }

  // Fallback: interactive animated developer workstation container
  return (
    <div
      className={`relative flex items-center justify-center p-6 ${className}`}
      style={{ width, height }}
      role="img"
      aria-label="Interactive animated developer workstation"
    >
      {/* Ambient background glows */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-purple-700/20 via-indigo-600/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Floating ambient badge 1 */}
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, -8, 0], rotate: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute -top-3 left-6 z-20 px-3 py-1.5 rounded-xl bg-[#121226]/90 border border-purple-500/25 shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-mono text-purple-300"
      >
        <Code2 className="w-3.5 h-3.5 text-purple-400" />
        <span>Python & Full-Stack</span>
      </motion.div>

      {/* Floating ambient badge 2 */}
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0], rotate: [2, -2, 2] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-2 right-6 z-20 px-3 py-1.5 rounded-xl bg-[#121226]/90 border border-indigo-500/25 shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-mono text-indigo-300"
      >
        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
        <span>Data Analytics & AI</span>
      </motion.div>

      {/* Modern Developer Terminal & Laptop Container */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-[#0c0c18] border border-purple-500/20 shadow-2xl shadow-black/80 overflow-hidden">
        <div className="px-4 py-3 bg-[#131326] border-b border-purple-500/15 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-purple-300/80">
            <Terminal className="w-3.5 h-3.5" />
            <span>sudha-developer.tsx</span>
          </div>
          <div className="w-10" />
        </div>

        <div className="p-6 font-mono text-xs space-y-3 bg-gradient-to-b from-[#0a0a16] to-[#080812]">
          <div className="flex items-center gap-2 text-purple-400">
            <span className="text-slate-500">$</span>
            <span className="font-semibold text-slate-200">developer.profile</span>
          </div>

          <div className="space-y-1.5 pl-4 border-l-2 border-purple-500/30 text-slate-300 text-[11px] leading-relaxed">
            <p className="text-purple-300">
              <span className="text-slate-500">&gt; </span>
              Name: <span className="text-white font-bold">Sudha Gowda</span>
            </p>
            <p className="text-slate-400">
              <span className="text-slate-500">&gt; </span>
              Status: <span className="text-emerald-400">Active Developer & MCA Scholar</span>
            </p>
            <p className="text-slate-400">
              <span className="text-slate-500">&gt; </span>
              Focus: <span className="text-purple-300">Full-Stack Web & Data Analytics</span>
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2 text-purple-400/80">
            <Laptop className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-[11px]">Ready to build scalable digital experiences</span>
            <span className="w-2 h-4 bg-purple-400 animate-pulse rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};
