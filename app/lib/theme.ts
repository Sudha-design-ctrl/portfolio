export const theme = {
  colors: {
    bg: {
      primary: '#080810',
      surface: '#0f0f1a',
      elevated: '#151525',
    },
    accent: {
      purpleCore: '#6c3dff',
      purpleBright: '#8b5cf6',
      lavenderSoft: '#c4b5fd',
      lavenderMuted: '#a78bfa',
    },
    neutral: {
      charcoal: '#1c1c2e',
      navyDeep: '#0a0a1f',
      navyMid: '#0d1035',
      whitePrimary: '#f1f0ff',
      whiteSecondary: '#c9c8e0',
      whiteMuted: '#7a7990',
    },
    glow: {
      purple: 'rgba(108, 61, 255, 0.25)',
      lavender: 'rgba(196, 181, 253, 0.15)',
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  spacing: {
    containerMax: '1240px',
    sectionPaddingDesktop: '120px',
    sectionPaddingTablet: '80px',
    sectionPaddingMobile: '60px',
  },
} as const;

export type ThemeColors = typeof theme.colors;
