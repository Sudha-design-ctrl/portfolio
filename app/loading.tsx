import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080810] text-white">
      {/* Ambient background glow */}
      <div className="absolute w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Monogram */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-purple-400 p-[1.5px] shadow-2xl shadow-purple-900/60">
          <div className="w-full h-full bg-[#0d0d1a] rounded-[14px] flex items-center justify-center">
            <span className="font-extrabold text-xl tracking-wider text-purple-200">
              SG
            </span>
          </div>
        </div>
      </div>

      {/* Name & Title */}
      <div className="text-center space-y-1.5 mb-8">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Sudha Gowda
        </h1>
        <p className="text-xs font-mono text-purple-300/80 tracking-widest uppercase">
          Software Developer &bull; Portfolio
        </p>
      </div>

      {/* Loading Progress Bar */}
      <div className="w-36 h-[2px] bg-purple-950/60 rounded-full overflow-hidden relative">
        <div className="w-full h-full bg-gradient-to-r from-purple-700 via-indigo-500 to-purple-400 animate-pulse" />
      </div>
    </div>
  );
}
