# The Human First Club Design System

A modern, elegant dark-themed design system that feels warm, minimal, and human-centered.

## Design Philosophy

The Human First Club design system is built on the principle that technology should serve humanity with warmth and intention. Every element is crafted to create an experience that feels:

- **Inviting** - Warm colors and soft gradients create a welcoming atmosphere
- **Emotionally Safe** - Dark, soothing palette that's easy on the eyes
- **Reflective** - Thoughtful spacing and typography encourage contemplation
- **Not Corporate** - Organic, human touches instead of harsh, rigid structures

## Color Palette

### Background Colors
- **Primary**: `#0a0a0a` - Deep black for main background
- **Secondary**: `#1a1a1a` - Charcoal for cards and elevated surfaces
- **Tertiary**: `#0f1419` - Deep navy-black for variation
- **Elevated**: `#252525` - Slightly lighter for hover states

### Text Colors
- **Primary**: `#e8e8e8` - Soft white for main content
- **Secondary**: `#a8a8a8` - Muted gray for secondary text
- **Tertiary**: `#6b6b6b` - Subtle gray for hints and labels

### Accent Colors
- **Teal**: `#5eb3b3` - Primary accent for CTAs and links
- **Teal Light**: `#7ec5c5` - Hover states
- **Teal Dark**: `#4a9999` - Active states
- **Beige**: `#d4c5b0` - Warm secondary accent
- **Beige Light**: `#e5d9c8` - Lighter beige for highlights
- **Coral**: `#d4a59a` - Soft coral for warmth
- **Lavender**: `#b8a8c8` - Muted lavender for variety

### Semantic Colors
- **Success**: `#6eb89f`
- **Warning**: `#d4b896`
- **Error**: `#c88a8a`
- **Info**: `#8aa8c8`

## Typography

### Font Families
- **Primary**: `'Inter'` - Clean, readable sans-serif for body text
- **Heading**: `'Outfit'` - Modern, elegant font for headings
- **Monospace**: `'JetBrains Mono'` - For code snippets

### Font Sizes
```css
--font-xs: 0.75rem    /* 12px */
--font-sm: 0.875rem   /* 14px */
--font-base: 1rem     /* 16px */
--font-lg: 1.125rem   /* 18px */
--font-xl: 1.25rem    /* 20px */
--font-2xl: 1.5rem    /* 24px */
--font-3xl: 1.875rem  /* 30px */
--font-4xl: 2.25rem   /* 36px */
--font-5xl: 3rem      /* 48px */
--font-6xl: 3.75rem   /* 60px */
--font-7xl: 4.5rem    /* 72px */
```

### Responsive Typography
Headings use `clamp()` for fluid, responsive sizing:
- **H1**: `clamp(2.5rem, 5vw, 4.5rem)`
- **H2**: `clamp(2rem, 4vw, 3rem)`
- **H3**: `clamp(1.5rem, 3vw, 2.25rem)`
- **H4**: `clamp(1.25rem, 2.5vw, 1.875rem)`

## Spacing System

Consistent spacing based on 4px increments:
```css
--spacing-xs: 0.25rem   /* 4px */
--spacing-sm: 0.5rem    /* 8px */
--spacing-md: 1rem      /* 16px */
--spacing-lg: 1.5rem    /* 24px */
--spacing-xl: 2rem      /* 32px */
--spacing-2xl: 3rem     /* 48px */
--spacing-3xl: 4rem     /* 64px */
```

## Border Radius

Soft, rounded corners for a friendly feel:
```css
--radius-sm: 0.25rem    /* 4px */
--radius-md: 0.5rem     /* 8px */
--radius-lg: 0.75rem    /* 12px */
--radius-xl: 1rem       /* 16px */
--radius-2xl: 1.5rem    /* 24px */
--radius-full: 9999px   /* Fully rounded */
```

## Shadows

Subtle shadows for depth without harshness:
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)
--shadow-glow: 0 0 20px rgba(94, 179, 179, 0.3)
```

## Components

### Button Component

**Variants:**
- `primary` - Teal background, primary CTA
- `secondary` - Transparent with border, secondary actions
- `beige` - Warm beige accent, alternative CTA
- `ghost` - Minimal, transparent button

**Sizes:**
- `small` - Compact button
- `medium` - Default size
- `large` - Prominent CTA

**Usage:**
```jsx
import Button from './components/Button'

<Button variant="primary" size="large">Get Started</Button>
<Button variant="secondary">Learn More</Button>
```

### Card Component

**Variants:**
- `default` - Standard card with subtle border
- `elevated` - Raised appearance with stronger shadow
- `glass` - Glassmorphism effect with backdrop blur
- `accent` - Highlighted with gradient and teal border

**Usage:**
```jsx
import Card from './components/Card'

<Card variant="accent">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

## Utility Classes

### Layout
- `.container` - Max-width container with padding
- `.grid` - CSS Grid layout
- `.grid--2` - 2-column responsive grid
- `.grid--3` - 3-column responsive grid

### Text
- `.text-center` - Center-aligned text
- `.text-gradient` - Gradient text effect (teal to beige)

### Animations
- `.fade-in` - Fade in from bottom
- `.slide-in` - Slide in from left

## Accessibility

### Focus States
All interactive elements have visible focus indicators:
```css
:focus-visible {
  outline: 2px solid var(--accent-teal);
  outline-offset: 2px;
}
```

### Reduced Motion
Respects user preferences for reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  /* Animations disabled */
}
```

### Screen Reader Support
- `.sr-only` class for screen reader-only content
- Semantic HTML throughout
- Proper ARIA labels where needed

## Usage Guidelines

### Do's ✅
- Use warm accent colors for CTAs and important elements
- Maintain generous spacing for breathing room
- Keep typography hierarchy clear and consistent
- Use subtle animations to enhance UX
- Ensure sufficient color contrast for readability

### Don'ts ❌
- Don't use harsh, bright colors
- Avoid tight spacing that feels cramped
- Don't overuse animations
- Avoid corporate, rigid layouts
- Don't sacrifice accessibility for aesthetics

## Responsive Design

### Breakpoints
```css
--breakpoint-sm: 640px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px
```

### Mobile-First Approach
All styles are mobile-first, with progressive enhancement for larger screens.

## Getting Started

1. **Import the global styles** in your main entry file:
```jsx
import './index.css'
```

2. **Use CSS variables** in your components:
```css
.my-component {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
}
```

3. **Import and use components**:
```jsx
import Button from './components/Button'
import Card from './components/Card'
```

## Customization

All design tokens are defined as CSS variables in `src/index.css` and can be easily customized. The theme object in `src/styles/theme.js` provides a JavaScript reference for the same values.

---

**Remember**: This design system is built to feel human, warm, and inviting. Every decision should prioritize the user's emotional comfort and experience.
