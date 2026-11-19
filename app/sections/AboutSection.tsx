'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Terminal, MapPin } from 'lucide-react';
import { SectionHeading } from '@/app/components';
import { profileData } from '@/app/data/profile';
import { fadeInUp, staggerContainer } from '@/app/lib/animation';

const stats = [
  { label: 'Academic', value: '8.8 CGPA', sub: 'BCA Distinction' },
  { label: 'Education', value: "MCA '27", sub: 'PES University' },
  { label: 'Projects', value: '3+', sub: 'Engineered Systems' },
  { label: 'Internship', value: '1M1B', sub: 'Data & AI/ML' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Turning Ideas into Scalable Systems"
          subtitle="MCA student at PES University engineering accessible web applications, ML models, and data analytics solutions."
          centered={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Left: Bio */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="space-y-4 text-[#737373] text-sm leading-relaxed">
              <p>
                I am <strong className="text-[#f5f5f5] font-semibold">Sudha Gowda</strong>, an MCA student at{' '}
                <span className="text-[#f5f5f5]">PES University, Bangalore</span> (expected 2027) and a BCA graduate from Government First Grade College, Honnavar with an{' '}
                <span className="text-[#f5f5f5]">8.8 CGPA distinction</span>.
              </p>
              <p>
                My work bridges <strong className="text-[#f5f5f5]">Software Development</strong>,{' '}
                <strong className="text-[#f5f5f5]">Full-Stack Web Engineering</strong>, and{' '}
                <strong className="text-[#f5f5f5]">Data Analytics</strong> — building end-to-end applications with clean architectures, responsive frontends, and analytical intelligence.
              </p>
              <p>
                Currently a <span className="text-[#f5f5f5]">Virtual Intern at 1M1B</span> (integrated with Microsoft), working on sustainability challenges through data-driven AI/ML.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1f1f1f] text-[#737373] text-xs font-mono">
                <MapPin className="w-3 h-3" />
                Bengaluru, India
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1f1f1f] text-[#737373] text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Open to Opportunities
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={profileData.resumeUrl}
                download={profileData.resumeFileName || 'Sudha_Gowda_Resume.pdf'}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#f5f5f5] border border-[#1f1f1f] hover:border-[#333] hover:bg-[#111] transition-all"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Right: Code card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-xl bg-[#111] border border-[#1f1f1f] overflow-hidden">
              {/* Window bar */}
              <div className="px-4 py-3 bg-[#111] border-b border-[#1f1f1f] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#737373]">
                  <Terminal className="w-3.5 h-3.5" />
                  developer.ts
                </div>
                <span className="text-[10px] font-mono text-[#737373]">TypeScript</span>
              </div>

              {/* Code */}
              <div className="p-5 font-mono text-[13px] leading-6 text-[#737373] space-y-0.5">
                <p><span className="text-indigo-400">const</span> <span className="text-[#f5f5f5]">developer</span> = &#123;</p>
                <p className="pl-5"><span className="text-blue-300">name</span>: <span className="text-emerald-300">&quot;Sudha Gowda&quot;</span>,</p>
                <p className="pl-5"><span className="text-blue-300">education</span>: &#123;</p>
                <p className="pl-10"><span className="text-blue-300">degree</span>: <span className="text-emerald-300">&quot;MCA (2025–2027)&quot;</span>,</p>
                <p className="pl-10"><span className="text-blue-300">university</span>: <span className="text-emerald-300">&quot;PES University&quot;</span>,</p>
                <p className="pl-10"><span className="text-blue-300">undergraduate</span>: <span className="text-emerald-300">&quot;BCA · 8.8 CGPA&quot;</span>,</p>
                <p className="pl-5">&#125;,</p>
                <p className="pl-5"><span className="text-blue-300">stack</span>: [</p>
                <p className="pl-10 text-emerald-300">&quot;Python&quot;, &quot;TypeScript&quot;, &quot;React&quot;, &quot;Next.js&quot;,</p>
                <p className="pl-10 text-emerald-300">&quot;FastAPI&quot;, &quot;SQL&quot;, &quot;Power BI&quot;, &quot;Excel&quot;,</p>
                <p className="pl-5">],</p>
                <p className="pl-5"><span className="text-blue-300">internship</span>: <span className="text-emerald-300">&quot;1M1B · Data & AI/ML&quot;</span>,</p>
                <p className="pl-5"><span className="text-blue-300">availableForHire</span>: <span className="text-amber-400">true</span>,</p>
                <p>&#125;;</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-12 border border-[#1f1f1f] rounded-xl overflow-hidden bg-[#1f1f1f]"
        >
          {stats.map((s) => (
            <div key={s.label} className="p-6 bg-[#0a0a0a] text-center space-y-1">
              <p className="text-2xl font-bold text-[#f5f5f5]">{s.value}</p>
              <p className="text-xs text-[#737373] font-mono">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
