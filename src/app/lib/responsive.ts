import { MantineThemeOverride } from '@mantine/core';

// Breakpoint definitions (in pixels)
export const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
} as const;

// Spacing scale that maintains rhythm across screen sizes
export const spacingScale = {
  xs: {
    base: 4,
    scale: 1.25,
  },
  sm: {
    base: 8,
    scale: 1.25,
  },
  md: {
    base: 16,
    scale: 1.25,
  },
};

// Font size scale that maintains readability across screen sizes
export const fontScale = {
  xs: {
    base: 14,
    scale: 1.2,
  },
  sm: {
    base: 16,
    scale: 1.25,
  },
  md: {
    base: 16,
    scale: 1.333,
  },
};

// Common responsive patterns
export const responsivePatterns = {
  // Container max widths
  container: {
    xs: '100%',
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
  },

  // Grid columns
  grid: {
    xs: 4,
    sm: 8,
    md: 12,
  },

  // Common component patterns
  patterns: {
    // Stack pattern - converts to columns on larger screens
    stack: {
      display: 'flex',
      flexDirection: 'column',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
      },
    },

    // Sidebar pattern
    sidebar: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1rem',
      '@media (min-width: 768px)': {
        gridTemplateColumns: '250px 1fr',
      },
    },

    // Card grid pattern
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1rem',
    },
  },
};

// Responsive typography settings
export const typography = {
  h1: {
    fontSize: {
      base: '2rem',
      md: '2.5rem',
      lg: '3rem',
    },
    lineHeight: 1.2,
  },
  h2: {
    fontSize: {
      base: '1.75rem',
      md: '2rem',
      lg: '2.5rem',
    },
    lineHeight: 1.2,
  },
  body: {
    fontSize: {
      base: '1rem',
      md: '1.125rem',
    },
    lineHeight: 1.5,
  },
};

// Common media query helpers
export const mediaQueries = {
  mobile: `@media (max-width: ${breakpoints.sm - 1}px)`,
  tablet: `@media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px)`,
  desktop: `@media (min-width: ${breakpoints.md}px)`,
  touch: `@media (hover: none) and (pointer: coarse)`,
  mouse: `@media (hover: hover) and (pointer: fine)`,
  dark: '@media (prefers-color-scheme: dark)',
  light: '@media (prefers-color-scheme: light)',
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
};
