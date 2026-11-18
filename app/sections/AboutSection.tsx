'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Sparkles,
  Code2,
  BrainCircuit,
  BarChart3,
  Briefcase,
  Layers,
  ArrowRight,
  FileText,
  Download,
  Eye,
  CheckCircle,
} from 'lucide-react';
import { SectionHeading } from '@/app/components';
import { profileData } from '@/app/data/profile';
import { fadeInUp, staggerContainer } from '@/app/lib/animation';

const focusAreas = [
  {
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
    title: 'Full-Stack Engineering',
    description:
      'Engineering performant web applications and services using Python, JavaScript, TypeScript, Next.js, and FastAPI with clean, maintainable architecture.',
    tags: ['React.js', 'FastAPI', 'Next.js', 'TypeScript', 'SQL'],
  },
  {
    icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
    title: 'Machine Learning & AI',
    description:
      'Hands-on training and deployment of gesture recognition pipelines and real-time computer vision (MediaPipe skeletal tracking) for accessibility.',
    tags: ['MediaPipe', 'Scikit-learn', 'Predictive Modeling', 'Inference Optimization'],
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-violet-400" />,
    title: 'Data Analytics & Visualization',
    description:
      'Transforming complex datasets into actionable insights using Excel, Power BI, Tableau, Pandas, and structured SQL database models.',
    tags: ['Power BI', 'Tableau', 'Excel', 'Pandas', 'SQL'],
  },
  {
    icon: <Briefcase className="w-5 h-5 text-purple-300" />,
    title: '1M1B Virtual Internship',
    description:
      'Active participant in the 1M1B Data Analysis & AI/ML program (integrated with Microsoft, supported by Govt. of Karnataka & MeitY Startup Hub) solving sustainability challenges.',
    tags: ['SustainAI', 'Strategic Scaling', 'Data Modeling', 'Impact Metrics'],
  },
];

const stats = [
  {
    label: 'Academic Distinction',
    value: '8.8 CGPA',
    subtext: 'BCA, GFGC Honnavar',
  },
  {
    label: 'Higher Education',
    value: 'MCA \'27',
    subtext: 'PES University, Bangalore',
  },
  {
    label: 'Key Projects Built',
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
    <section id="about" className="py-24 border-t border-purple-500/10 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-[420px] h-[420px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Passionate Software Developer & Data Analytics Enthusiast"
          subtitle="MCA student at PES University engineering accessible full-stack applications, machine learning models, and insightful data analytics solutions."
          centered={true}
        />

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Personal Narrative */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0e0e1e] via-[#0b0b16] to-[#080812] border border-purple-500/20 shadow-xl space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-purple-500/15">
                <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center font-bold text-sm text-purple-200">
                  SG
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{profileData.name}</h3>
                  <p className="text-xs font-mono text-purple-400">
                    MCA Scholar &bull; Full-Stack &bull; Data Analytics
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">Sudha Gowda</strong>, an MCA student at{' '}
                  <span className="text-purple-300 font-medium">PES University, Bangalore</span> (expected 2027) and a
                  BCA graduate from{' '}
                  <span className="text-purple-300 font-medium">
                    Government First Grade College, Honnavar (Karnatak University)
                  </span>{' '}
                  with an <span className="text-purple-300 font-semibold">8.8 CGPA distinction</span>.
                </p>

                <p>
                  My core passion is centered on <strong className="text-white">Software Development</strong>,{' '}
                  <strong className="text-white">Full-Stack Web Development</strong>, and{' '}
                  <strong className="text-white">Data Analytics</strong>. I bridge algorithmic engineering with polished
                  user interfaces, leveraging hands-on expertise in{' '}
                  <span className="text-purple-200 font-mono text-xs px-1.5 py-0.5 rounded bg-purple-950/60 border border-purple-500/20">
                    Python
                  </span>
                  ,{' '}
                  <span className="text-purple-200 font-mono text-xs px-1.5 py-0.5 rounded bg-purple-950/60 border border-purple-500/20">
                    JavaScript
                  </span>
                  ,{' '}
                  <span className="text-purple-200 font-mono text-xs px-1.5 py-0.5 rounded bg-purple-950/60 border border-purple-500/20">
                    React.js
                  </span>
                  ,{' '}
                  <span className="text-purple-200 font-mono text-xs px-1.5 py-0.5 rounded bg-purple-950/60 border border-purple-500/20">
                    FastAPI
                  </span>
                  ,{' '}
                  <span className="text-purple-200 font-mono text-xs px-1.5 py-0.5 rounded bg-purple-950/60 border border-purple-500/20">
                    SQL
                  </span>
                  , and machine learning architectures.
                </p>

                <p>
                  I have built end-to-end production-caliber software including:
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pl-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">SignFlow:</strong> Real-time Indian Sign Language recognition and
                      speech synthesis (<span className="text-purple-300 font-mono">&lt; 25 ms</span> latency, 92.06% accuracy).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">BuildHer:</strong> AI-powered women entrepreneurship ecosystem built
                      for the ACM-W State-Level Hackathon with UPI payments and safety center.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Debt Sustainability Classifier:</strong> Supervised machine learning
                      pipeline analyzing financial indicators and macroeconomic risk factors.
                    </span>
                  </li>
                </ul>

                <p>
                  Currently, I am expanding my industry impact through the{' '}
                  <span className="text-purple-300 font-medium">1M1B virtual internship in Data Analysis and AI/ML</span>{' '}
                  (integrated with Microsoft, supported by Govt. of Karnataka &amp; MeitY Startup Hub), applying data
                  analytics to sustainability challenges in a simulated enterprise environment.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#skills"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 transition-all shadow-md"
                >
                  <span>Explore Technical Skills</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={profileData.resumeUrl}
                  download={profileData.resumeFileName || 'Sudha_Gowda_Resume.pdf'}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-purple-300 bg-[#121226] border border-purple-500/25 hover:border-purple-500/50 hover:bg-[#181832] transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-purple-400" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Focus Area Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-[#0c0c19] border border-purple-500/15 hover:border-purple-500/40 hover:bg-[#111124] transition-all duration-300 shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center mb-3.5 group-hover:bg-purple-900/40 transition-colors">
                    {area.icon}
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {area.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-500/10">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#16162a] text-purple-300 border border-purple-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats & Credibility Ribbon */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-3xl bg-gradient-to-r from-[#0d0d1e] via-[#101026] to-[#0d0d1e] border border-purple-500/20 shadow-xl"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-2xl bg-[#080812]/80 border border-purple-500/10 text-center space-y-1"
            >
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block">
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
