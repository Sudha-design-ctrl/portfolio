'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Terminal,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/app/components';
import { profileData } from '@/app/data/profile';
import { fadeInUp, staggerContainer } from '@/app/lib/animation';

const stats = [
  {
    label: 'Academic Distinction',
    value: '8.8 CGPA',
    subtext: 'BCA, GFGC Honnavar',
  },
  {
    label: 'Higher Education',
    value: "MCA '27",
    subtext: 'PES University, Bangalore',
  },
  {
    label: 'Projects Engineered',
    value: '3+ Systems',
    subtext: 'SignFlow, BuildHer, Debt Risk',
  },
  {
    label: 'Industry Internship',
    value: '1M1B & Microsoft',
    subtext: 'Data Analysis & AI/ML',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-purple-500/10 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-[420px] h-[420px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Turning Ideas into Scalable Systems & Insights"
          subtitle="MCA student at PES University engineering accessible web applications, machine learning models, and insightful data analytics solutions."
          centered={true}
        />

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          {/* Left Column: Focused Personal Narrative */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0c0c1a] via-[#0e0e20] to-[#0a0a14] border border-purple-500/15 shadow-xl space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-purple-500/10">
                <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center font-bold text-sm text-purple-200">
                  SG
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white">{profileData.name}</h3>
                  <p className="text-xs font-mono text-purple-400">
                    MCA Scholar &bull; Software Developer &bull; Data Analytics
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-slate-300 text-sm leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">Sudha Gowda</strong>, an MCA student at{' '}
                  <span className="text-purple-300 font-medium">PES University, Bangalore</span> (expected 2027) and a
                  BCA graduate from{' '}
                  <span className="text-purple-300 font-medium">
                    Government First Grade College, Honnavar
                  </span>{' '}
                  with an <span className="text-purple-300 font-semibold">8.8 CGPA distinction</span>.
                </p>

                <p>
                  My work focuses on bridging <strong className="text-white">Software Development</strong>,{' '}
                  <strong className="text-white">Full-Stack Web Engineering</strong>, and{' '}
                  <strong className="text-white">Data Analytics</strong>. I engineer end-to-end applications with clean architectures, responsive frontends, high-performance Python services, and analytical intelligence.
                </p>

                <p>
                  Currently, I am expanding my industry impact as a{' '}
                  <span className="text-purple-300 font-medium">Virtual Intern in Data Analysis &amp; AI/ML at 1M1B</span>{' '}
                  (integrated with Microsoft, supported by Govt. of Karnataka &amp; MeitY Startup Hub), solving sustainability challenges using data-driven intelligence.
                </p>
              </div>

              {/* Status Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-500/25 text-purple-300">
                  <MapPin className="w-3 h-3 text-purple-400" />
                  Bengaluru, India
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/40 border border-emerald-500/25 text-emerald-300">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  Open to Opportunities
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 transition-all shadow-md active:scale-95"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={profileData.resumeUrl}
                  download={profileData.resumeFileName || 'Sudha_Gowda_Resume.pdf'}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-purple-300 bg-[#121226] border border-purple-500/25 hover:border-purple-500/50 hover:bg-[#181832] transition-all active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-purple-400" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sleek developer.ts Code Card (Inspired by modern portfolios) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl bg-[#080812] border border-purple-500/20 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="px-5 py-3.5 bg-[#0f0f20] border-b border-purple-500/15 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-purple-300/80">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>developer.ts</span>
                </div>
                <div className="text-[10px] font-mono text-slate-500">TypeScript</div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300 space-y-1">
                <p>
                  <span className="text-purple-400 font-bold">const</span>{' '}
                  <span className="text-indigo-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-purple-300">name</span>:{' '}
                  <span className="text-emerald-300">&quot;Sudha Gowda&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-300">education</span>: &#123;
                </p>
                <p className="pl-8">
                  <span className="text-purple-300">degree</span>:{' '}
                  <span className="text-emerald-300">&quot;MCA (2025–2027)&quot;</span>,
                </p>
                <p className="pl-8">
                  <span className="text-purple-300">university</span>:{' '}
                  <span className="text-emerald-300">&quot;PES University, Bangalore&quot;</span>,
                </p>
                <p className="pl-8">
                  <span className="text-purple-300">undergraduate</span>:{' '}
                  <span className="text-emerald-300">&quot;BCA · 8.8 CGPA Distinction&quot;</span>,
                </p>
                <p className="pl-4">&#125;,</p>
                <p className="pl-4">
                  <span className="text-purple-300">roles</span>: [
                </p>
                <p className="pl-8 text-emerald-300">
                  &quot;Software Developer&quot;, &quot;Full-Stack Web&quot;, &quot;Data Analytics&quot;,
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-purple-300">primaryStack</span>: [
                </p>
                <p className="pl-8 text-emerald-300">
                  &quot;Python&quot;, &quot;TypeScript&quot;, &quot;FastAPI&quot;, &quot;React.js&quot;, &quot;Next.js&quot;, &quot;SQL&quot;, &quot;Excel&quot;, &quot;Power BI&quot;,
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-purple-300">internship</span>:{' '}
                  <span className="text-emerald-300">&quot;1M1B · Data Analysis &amp; AI/ML (with Microsoft)&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-300">availableForHire</span>:{' '}
                  <span className="text-amber-400">true</span>,
                </p>
                <p>&#125;;</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Stats Metrics Ribbon */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#0c0c1a] via-[#101026] to-[#0c0c1a] border border-purple-500/15 shadow-xl"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-2xl bg-[#080812]/90 border border-purple-500/10 text-center space-y-1"
            >
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">
                {s.label}
              </span>
              <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {s.value}
              </p>
              <p className="text-[11px] text-slate-400 font-mono">{s.subtext}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
