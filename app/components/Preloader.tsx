'use client';

import React, { useEffect, useState } from 'react';

const NAME = 'Sudha Gowda';

export const Preloader: React.FC = () => {
  // Starts visible — renders in SSR HTML so there's zero blank flash
  const [show, setShow] = useState(true);
  const [lettersIn, setLettersIn] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Check if already played this session
    let played = false;
    try { played = sessionStorage.getItem('sg-intro') === '1'; } catch (_) {}

    // Respect reduced motion preference
    const prefersReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (played || prefersReduced) {
      setShow(false);
      return;
    }

    // Slight delay → trigger letters flying in
    const t0 = setTimeout(() => setLettersIn(true), 60);
    // Begin fade-out overlay
    const t1 = setTimeout(() => setExiting(true), 1900);
    // Unmount completely
    const t2 = setTimeout(() => {
      setShow(false);
      try { sessionStorage.setItem('sg-intro', '1'); } catch (_) {}
    }, 2650);

    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#080810',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: exiting ? 0 : 1,
        transition: exiting
          ? 'opacity 0.75s cubic-bezier(0.76, 0, 0.24, 1)'
          : 'none',
        pointerEvents: exiting ? 'none' : 'all',
      }}
    >
      <h1
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: 0,
          padding: 0,
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        {NAME.split('').map((char, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(2.8rem, 9vw, 6.5rem)',
              fontWeight: 700,
              letterSpacing: '0.03em',
              color: '#f1f0ff',
              opacity: lettersIn ? 1 : 0,
              transform: lettersIn ? 'translateY(0px)' : 'translateY(55px)',
              transition: `opacity 0.65s cubic-bezier(0.76, 0, 0.24, 1) ${i * 55}ms, transform 0.65s cubic-bezier(0.76, 0, 0.24, 1) ${i * 55}ms`,
              width: char === ' ' ? '0.3em' : undefined,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    </div>
  );
};
