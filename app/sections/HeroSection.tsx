'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { AnimatedText, LottieCharacter } from '@/app/components';
import { profileData } from '@/app/data/profile';
import { fadeInUp, smoothEase } from '@/app/lib/animation';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            {/* Status */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1f1f1f] text-[#737373] text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available for roles
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#737373] text-xs font-mono">
                <MapPin className="w-3 h-3" />
                {profileData.location}
              </span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <p className="text-sm text-[#737373] font-mono tracking-widest uppercase">Hello, I am</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f5f5f5] leading-none">
                {profileData.name}
              </h1>
            </div>

            {/* Role */}
            <div className="text-xl sm:text-2xl text-[#737373] font-medium flex flex-wrap items-center gap-2">
              <AnimatedText roles={profileData.roles} className="text-[#f5f5f5] font-semibold" />
            </div>

            {/* Tagline */}
            <p className="text-base text-[#737373] max-w-xl leading-relaxed">
              {profileData.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={profileData.resumeUrl}
                download={profileData.resumeFileName || 'Sudha_Gowda_Resume.pdf'}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-[#f5f5f5] border border-[#1f1f1f] hover:border-[#333] hover:bg-[#111] transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Minimal Stats */}
            <div className="flex flex-wrap items-center gap-8 pt-2 border-t border-[#1f1f1f]">
              <div>
                <p className="text-xl font-bold text-[#f5f5f5]">3+</p>
                <p className="text-xs text-[#737373] font-mono">Projects</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#f5f5f5]">8.8</p>
                <p className="text-xs text-[#737373] font-mono">CGPA (BCA)</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#f5f5f5]">MCA '27</p>
                <p className="text-xs text-[#737373] font-mono">PES University</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Lottie */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: smoothEase, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <LottieCharacter className="w-full max-w-sm opacity-90" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
