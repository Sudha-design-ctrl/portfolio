'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show branded intro on initial load, then smoothly exit
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080810] text-white select-none"
        >
          {/* Ambient background glows */}
          <div className="absolute w-[360px] h-[360px] bg-purple-700/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />

          {/* Logo / Monogram */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative mb-5"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-purple-400 p-[1.5px] shadow-2xl shadow-purple-900/60">
              <div className="w-full h-full bg-[#0d0d1a] rounded-[14px] flex items-center justify-center">
                <span className="font-extrabold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-200">
                  SG
                </span>
              </div>
            </div>
            {/* Subtle pulse ring */}
            <div className="absolute -inset-1 rounded-2xl bg-purple-500/20 blur-sm -z-10 animate-ping opacity-30" />
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center space-y-1 mb-7"
          >
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Sudha Gowda
            </h1>
            <p className="text-[11px] font-mono text-purple-300/80 tracking-widest uppercase flex items-center justify-center gap-1.5">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span>Software Developer</span>
            </p>
          </motion.div>

          {/* Sleek Animated Progress Bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 130 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="h-[2px] bg-purple-950/60 rounded-full overflow-hidden relative"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                repeat: Infinity,
                duration: 0.9,
                ease: 'easeInOut',
              }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
