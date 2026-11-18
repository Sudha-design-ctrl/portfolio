'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Eye, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { AnimatedText, LottieCharacter } from '@/app/components';
import { profileData } from '@/app/data/profile';
import { fadeInUp, smoothEase } from '@/app/lib/animation';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-purple-700/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Status & Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-emerald-300 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Engineering Roles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121226] border border-purple-500/15 text-slate-400 text-xs font-mono">
                <MapPin className="w-3 h-3 text-purple-400" />
                {profileData.location}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-1">
              <p className="text-base sm:text-lg text-slate-400 font-medium tracking-wide">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {profileData.name}
              </h1>
            </div>

            {/* Dynamic Role Typing Animation */}
            <div className="text-xl sm:text-2xl text-purple-300 font-medium flex flex-wrap items-center gap-2 min-h-[38px]">
              <span className="text-slate-400">Passionate</span>
              <AnimatedText roles={profileData.roles} className="text-purple-300 font-semibold" />
            </div>

            {/* Brief Introduction */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed">
              {profileData.tagline}
            </p>

            {/* Academic Highlights Banner */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-purple-300/80">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#14142b] border border-purple-500/15">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                PES University MCA &apos;27
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#14142b] border border-purple-500/15">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                BCA 8.8 CGPA Distinction
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 shadow-lg shadow-purple-950/60 hover:shadow-purple-700/30 transition-all duration-200 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profileData.resumeUrl}
                download={profileData.resumeFileName || 'Sudha_Gowda_Resume.pdf'}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-purple-200 bg-[#101020] border border-purple-500/25 hover:border-purple-500/50 hover:bg-[#16162c] transition-all duration-200 shadow-sm active:scale-95"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-200 shadow-sm active:scale-95"
              >
                <Eye className="w-4 h-4 text-indigo-400" />
                <span>View Resume</span>
              </a>
            </div>

            {/* Quick Metrics Bar (Inspired by modern developer portfolios) */}
            <div className="pt-3 grid grid-cols-3 gap-2.5 sm:gap-3 max-w-lg">
              <div className="p-3 rounded-2xl bg-[#0c0c1a]/80 border border-purple-500/15 text-center">
                <div className="text-base sm:text-lg font-bold text-white">3+</div>
                <div className="text-[10px] sm:text-[11px] text-purple-300/80 font-mono">Projects</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#0c0c1a]/80 border border-purple-500/15 text-center">
                <div className="text-base sm:text-lg font-bold text-white">MCA &apos;27</div>
                <div className="text-[10px] sm:text-[11px] text-purple-300/80 font-mono">PES University</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#0c0c1a]/80 border border-purple-500/15 text-center">
                <div className="text-base sm:text-lg font-bold text-white">1M1B</div>
                <div className="text-[10px] sm:text-[11px] text-purple-300/80 font-mono">Virtual Intern</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Lottie Female Developer Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: smoothEase, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <LottieCharacter className="w-full max-w-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
