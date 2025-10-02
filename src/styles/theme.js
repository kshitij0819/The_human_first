// Human First Design System
// Modern, elegant dark theme with warm, human-centered aesthetics

export const theme = {
  colors: {
    // Primary dark palette
    background: {
      primary: '#0a0a0a',        // Deep black
      secondary: '#1a1a1a',      // Charcoal
      tertiary: '#0f1419',       // Deep navy-black
      elevated: '#252525',       // Slightly lighter for cards
    },
    
    // Text colors
    text: {
      primary: '#e8e8e8',        // Soft white for main text
      secondary: '#a8a8a8',      // Muted gray for secondary text
      tertiary: '#6b6b6b',       // Subtle gray for hints
      inverted: '#0a0a0a',       // For light backgrounds
    },
    
    // Accent colors - warm and inviting
    accent: {
      teal: '#5eb3b3',           // Muted teal
      tealLight: '#7ec5c5',      // Lighter teal for hovers
      tealDark: '#4a9999',       // Darker teal
      beige: '#d4c5b0',          // Warm beige
      beigeLight: '#e5d9c8',     // Lighter beige
      coral: '#d4a59a',          // Soft coral
      lavender: '#b8a8c8',       // Muted lavender
    },
    
    // Semantic colors
    success: '#6eb89f',
    warning: '#d4b896',
    error: '#c88a8a',
    info: '#8aa8c8',
    
    // Borders and dividers
    border: {
      subtle: 'rgba(255, 255, 255, 0.08)',
      medium: 'rgba(255, 255, 255, 0.12)',
      strong: 'rgba(255, 255, 255, 0.18)',
    },
  },
  
  typography: {
    // Font families
    fonts: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      heading: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
    },
    
    // Font sizes
    sizes: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
    },
    
    // Font weights
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    // Line heights
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
  },
  
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
  },
  
  borderRadius: {
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
    glow: '0 0 20px rgba(94, 179, 179, 0.3)',
    glowBeige: '0 0 20px rgba(212, 197, 176, 0.2)',
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export default theme;
