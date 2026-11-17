'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
  Smartphone,
  ShieldCheck,
  Languages,
  Calculator,
  MessageSquare,
  BarChart2,
} from 'lucide-react';

interface ProjectVisualProps {
  projectId: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ projectId }) => {
  if (projectId === 'signflow') {
    return (
      <div className="relative w-full h-full min-h-[220px] rounded-2xl bg-gradient-to-br from-[#0c0c1b] via-[#0f0f26] to-[#0a0a16] border border-purple-500/20 p-5 overflow-hidden flex flex-col justify-between shadow-inner">
        {/* Ambient radial glows */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none" />

        {/* Visual Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-purple-300 font-semibold tracking-wider uppercase">
              Real-Time Inference Pipeline
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-950/70 border border-purple-500/30 text-purple-200">
            &lt; 25ms Latency
          </span>
        </div>

        {/* Architecture Pipeline Flow Diagram */}
        <div className="relative z-10 my-4 grid grid-cols-4 gap-2 text-center">
          {/* Step 1: Input & MediaPipe */}
          <div className="p-2.5 rounded-xl bg-[#14142a]/90 border border-purple-500/20 flex flex-col items-center justify-center space-y-1">
            <Activity className="w-5 h-5 text-purple-400" />
            <span className="text-[10px] font-mono text-white font-medium">MediaPipe</span>
            <span className="text-[9px] text-slate-400">225 Keypoints</span>
          </div>

          {/* Step 2: Payload Compression */}
          <div className="p-2.5 rounded-xl bg-[#14142a]/90 border border-purple-500/20 flex flex-col items-center justify-center space-y-1">
            <Layers className="w-5 h-5 text-indigo-400" />
            <span className="text-[10px] font-mono text-white font-medium">&gt;95% Smaller</span>
            <span className="text-[9px] text-slate-400">Privacy Safe</span>
          </div>

          {/* Step 3: BiLSTM Neural Model */}
          <div className="p-2.5 rounded-xl bg-[#181836] border border-purple-500/40 shadow-sm flex flex-col items-center justify-center space-y-1">
            <Cpu className="w-5 h-5 text-purple-300 animate-pulse" />
            <span className="text-[10px] font-mono text-purple-200 font-semibold">2-Layer BiLSTM</span>
            <span className="text-[9px] text-emerald-400 font-mono">92.06% Acc</span>
          </div>

          {/* Step 4: Multilingual Output */}
          <div className="p-2.5 rounded-xl bg-[#14142a]/90 border border-purple-500/20 flex flex-col items-center justify-center space-y-1">
            <Languages className="w-5 h-5 text-fuchsia-400" />
            <span className="text-[10px] font-mono text-white font-medium">Text &amp; Voice</span>
            <span className="text-[9px] text-slate-400">EN / HI / KN</span>
          </div>
        </div>

        {/* Visual Footer */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-purple-500/15">
          <span>Dataset: IIT Madras INCLUDE</span>
          <span className="text-purple-300">15 Conversational Classes</span>
        </div>
      </div>
    );
  }

  if (projectId === 'buildher') {
    return (
      <div className="relative w-full h-full min-h-[220px] rounded-2xl bg-gradient-to-br from-[#0c0c1b] via-[#101026] to-[#0a0a16] border border-purple-500/20 p-5 overflow-hidden flex flex-col justify-between shadow-inner">
        <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-600/15 rounded-full blur-2xl pointer-events-none" />

        {/* Visual Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[11px] font-mono text-indigo-300 font-semibold tracking-wider uppercase">
              Mobile Platform Prototype
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-indigo-950/70 border border-indigo-500/30 text-indigo-200">
            ACM-W Hackathon
          </span>
        </div>

        {/* Features Explored Grid */}
        <div className="relative z-10 my-4 grid grid-cols-2 gap-2 text-left">
          <div className="p-2 rounded-xl bg-[#131326] border border-purple-500/15 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
            <div>
              <p className="text-[10px] font-mono font-bold text-white">Skill Discovery</p>
              <p className="text-[9px] text-slate-400">4-step wizard algorithm</p>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-[#131326] border border-purple-500/15 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-400 shrink-0" />
            <div>
              <p className="text-[10px] font-mono font-bold text-white">Business Matching</p>
              <p className="text-[9px] text-slate-400">Actionable recommendations</p>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-[#131326] border border-purple-500/15 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <p className="text-[10px] font-mono font-bold text-white">Pricing Calculator</p>
              <p className="text-[9px] text-slate-400">Cost-plus margin estimator</p>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-[#131326] border border-purple-500/15 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-fuchsia-400 shrink-0" />
            <div>
              <p className="text-[10px] font-mono font-bold text-white">Marketing Content</p>
              <p className="text-[9px] text-slate-400">Automated festive copy</p>
            </div>
          </div>
        </div>

        {/* Visual Footer */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-purple-500/15">
          <span>React Native &amp; Expo Mobile Stack</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Conceptual Prototype
          </span>
        </div>
      </div>
    );
  }

  // Debt Sustainability Classifier
  return (
    <div className="relative w-full h-full min-h-[220px] rounded-2xl bg-gradient-to-br from-[#0c0c1b] via-[#101026] to-[#0a0a16] border border-purple-500/20 p-5 overflow-hidden flex flex-col justify-between shadow-inner">
      <div className="absolute top-0 right-0 w-44 h-44 bg-violet-600/15 rounded-full blur-2xl pointer-events-none" />

      {/* Visual Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-3.5 h-3.5 text-violet-400" />
          <span className="text-[11px] font-mono text-violet-300 font-semibold tracking-wider uppercase">
            Supervised ML Pipeline
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-violet-950/70 border border-violet-500/30 text-violet-200">
          Financial Indicators
        </span>
      </div>

      {/* ML Pipeline Flow Diagram */}
      <div className="relative z-10 my-4 grid grid-cols-3 gap-2 text-center">
        <div className="p-2.5 rounded-xl bg-[#131326] border border-purple-500/15 flex flex-col items-center justify-center space-y-1">
          <Activity className="w-4 h-4 text-purple-400" />
          <span className="text-[10px] font-mono text-white font-medium">Data Cleaning</span>
          <span className="text-[9px] text-slate-400">Outlier handling &amp; scaling</span>
        </div>

        <div className="p-2.5 rounded-xl bg-[#131326] border border-purple-500/15 flex flex-col items-center justify-center space-y-1">
          <TrendingUp className="w-4 h-4 text-violet-400" />
          <span className="text-[10px] font-mono text-white font-medium">Exploratory EDA</span>
          <span className="text-[9px] text-slate-400">Feature correlations</span>
        </div>

        <div className="p-2.5 rounded-xl bg-[#181836] border border-purple-500/30 flex flex-col items-center justify-center space-y-1">
          <Layers className="w-4 h-4 text-indigo-300" />
          <span className="text-[10px] font-mono text-white font-semibold">Classification</span>
          <span className="text-[9px] text-purple-300">Multi-model evaluation</span>
        </div>
      </div>

      {/* Visual Footer */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-purple-500/15">
        <span>Stack: Python &bull; Pandas &bull; Scikit-learn</span>
        <span className="text-violet-300">Risk Categories</span>
      </div>
    </div>
  );
};
