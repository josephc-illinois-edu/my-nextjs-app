import { createTheme, rem, MantineTheme, MantineThemeOverride } from '@mantine/core';
import { focusStyles, minTouchTarget } from './lib/accessibility';
import { breakpoints, spacingScale, fontScale, typography } from './lib/responsive';

// University of Illinois Foundation Colors
export const uifColors = {
  illinoisBlue: '#13294B',
  illinoisOrange: '#E84A27',
  lightBlue: '#1C4178',
  gray: {
    1: '#F8F9FA',
    2: '#E9ECEF',
    3: '#DEE2E6',
    4: '#CED4DA',
    5: '#ADB5BD',
    6: '#6C757D',
    7: '#495057',
    8: '#343A40',
    9: '#212529',
  },
} as const;

// Define theme with accessibility and responsive patterns
export const theme: MantineThemeOverride = {
  primaryColor: 'blue',
  colors: {
    blue: [
      '#E7EBF2',
      '#CFD7E6',
      '#B7C3D9',
      '#9FAFCC',
      '#879BBF',
      '#6F87B2',
      '#5773A6',
      '#3F5F99',
      '#274B8C',
      '#13294B', // Illinois Blue
    ],
    orange: [
      '#FDE9E3',
      '#FBD3C7',
      '#F9BDAB',
      '#F7A78F',
      '#F59173',
      '#F37B57',
      '#F1653B',
      '#EF4F1F',
      '#E84A27', // Illinois Orange
      '#D13B1A',
    ],
  },

  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },

  spacing: {
    xs: rem(spacingScale.xs.base),
    sm: rem(spacingScale.sm.base),
    md: rem(spacingScale.md.base),
    lg: rem(spacingScale.md.base * spacingScale.md.scale),
    xl: rem(spacingScale.md.base * Math.pow(spacingScale.md.scale, 2)),
  },

  breakpoints: {
    xs: `${breakpoints.xs}px`,
    sm: `${breakpoints.sm}px`,
    md: `${breakpoints.md}px`,
    lg: `${breakpoints.lg}px`,
    xl: `${breakpoints.xl}px`,
  },

  headings: {
    sizes: {
      h1: {
        fontSize: rem(typography.h1.fontSize.base),
        lineHeight: String(typography.h1.lineHeight),
      },
      h2: {
        fontSize: rem(typography.h2.fontSize.base),
        lineHeight: String(typography.h2.lineHeight),
      },
      h3: {
        fontSize: rem(24),
        lineHeight: '1.3',
      },
      h4: {
        fontSize: rem(20),
        lineHeight: '1.4',
      },
      h5: {
        fontSize: rem(16),
        lineHeight: '1.5',
      },
      h6: {
        fontSize: rem(14),
        lineHeight: '1.5',
      },
    },
  },

  focusRing: focusStyles,

  components: {
    Button: {
      styles: (theme: MantineTheme) => ({
        root: {
          minHeight: rem(minTouchTarget.height),
          minWidth: rem(minTouchTarget.width),
        },
      }),
    },
    TextInput: {
      styles: (theme: MantineTheme) => ({
        input: {
          minHeight: rem(minTouchTarget.height),
        },
      }),
    },
    Select: {
      styles: (theme: MantineTheme) => ({
        input: {
          minHeight: rem(minTouchTarget.height),
        },
      }),
    },
  },

  other: {
    borderRadius: {
      sm: rem(4),
      md: rem(8),
      lg: rem(12),
    },
    transitionTimings: {
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
    },
    minTouchTarget: {
      height: rem(minTouchTarget.height),
      width: rem(minTouchTarget.width),
    },
  },
};
