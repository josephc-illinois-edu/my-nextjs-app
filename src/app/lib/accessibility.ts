import { MantineTheme } from '@mantine/core';

// Focus visible styles that meet WCAG 2.1 requirements
export const focusStyles = 'always';

// Minimum touch target sizes (44x44px as per WCAG 2.1)
export const minTouchTarget = {
  height: 44,
  width: 44,
};

// z-index management for proper focus and modal handling
export const zIndexLayers = {
  base: 1,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  popover: 500,
  tooltip: 600,
} as const;

// ARIA landmark roles mapping
export const ariaLandmarks = {
  banner: 'header',
  complementary: 'aside',
  contentinfo: 'footer',
  form: 'form',
  main: 'main',
  navigation: 'nav',
  region: 'section',
  search: 'search',
} as const;

// Accessibility helper functions
export const a11yHelpers = {
  // Hide content visually while keeping it accessible to screen readers
  visuallyHidden: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  },

  // Skip navigation link styles
  skipLink: (theme: MantineTheme) => ({
    position: 'absolute',
    top: -40,
    left: 0,
    backgroundColor: theme.white,
    padding: theme.spacing.md,
    zIndex: zIndexLayers.tooltip,
  }),
};

// WCAG 2.1 contrast ratios
export const contrastRatios = {
  minimum: 4.5, // AA for normal text
  enhanced: 7, // AAA for normal text
  largeMinimum: 3, // AA for large text
  largeEnhanced: 4.5, // AAA for large text
  uiMinimum: 3, // AA for UI components
};

// Common ARIA attributes for interactive components
export const ariaDefaults = {
  modal: {
    role: 'dialog',
    'aria-modal': true,
  },
  tooltip: {
    role: 'tooltip',
  },
  menu: {
    role: 'menu',
  },
  alert: {
    role: 'alert',
  },
  alertDialog: {
    role: 'alertdialog',
  },
} as const;

// Keyboard navigation helpers
export const keyboardNavigation = {
  focusableElements: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(keyboardNavigation.focusableElements);
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    return {
      first: firstFocusable,
      last: lastFocusable,
    };
  },
};
