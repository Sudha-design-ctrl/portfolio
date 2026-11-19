'use client';

import React, { useEffect, useState, useRef } from 'react';

const NAME = 'Sudha Gowda';

export const Preloader: React.FC = () => {
  const [phase, setPhase] = useState<'idle' | 'letters' | 'hold' | 'exit' | 'done'>('idle');
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    // Skip if already seen this session or user prefers reduced motion
    let played = false;
    try {
      played = sessionStorage.getItem('sg-intro') === '1';
    } catch (_) {}

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (played || prefersReduced) {
      setPhase('done');
      return;
    }

    // Phase timeline
    // 0ms   → show letters (animate in)
    // 900ms → hold
    // 1600ms → exit fade
    // 2200ms → done (unmount)

    setPhase('letters');

    const t1 = setTimeout(() => setPhase('hold'), 900);
    const t2 = setTimeout(() => setPhase('exit'), 1600);
    const t3 = setTimeout(() => {
      setPhase('done');
      try { sessionStorage.setItem('sg-intro', '1'); } catch (_) {}
    }, 2200);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#080810',
        transition: phase === 'exit' ? 'opacity 0.6s cubic-bezier(0.22,1,0.36,1)' : 'none',
        opacity: phase === 'exit' ? 0 : 1,
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      <h1
        style={{
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          letterSpacing: '0.08em',
          color: '#f1f0ff',
          display: 'flex',
          gap: 0,
          userSelect: 'none',
        }}
      >
        {NAME.split('').map((char, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: phase === 'letters' || phase === 'hold' ? 1 : 0,
              transform:
                phase === 'letters' || phase === 'hold'
                  ? 'translateY(0)'
                  : 'translateY(-8px)',
              transition: `opacity 0.4s ease, transform 0.4s ease`,
              transitionDelay: char === ' '
                ? '0ms'
                : `${i * 45}ms`,
              // Space character
              width: char === ' ' ? '0.4em' : undefined,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    </div>
  );
};
