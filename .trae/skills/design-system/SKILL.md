---
name: design-system
description: "Token architecture, component specifications, and design system creation. Invoke when creating design tokens, CSS variable systems, spacing/typography scales, component specs, or systematic design patterns."
---

# Design System

Token architecture, component specifications, and systematic design.

## When to Use

- Design token creation
- Component state definitions
- CSS variable systems
- Spacing/typography scales
- Design-to-code handoff
- Tailwind theme configuration
- Building systematic design patterns

## Token Architecture

### Three-Layer Structure

```
Primitive (raw values)
       |
       v
Semantic (purpose aliases)
       |
       v
Component (component-specific)
```

**Example:**
```css
/* Primitive */
--color-blue-600: #2563EB;

/* Semantic */
--color-primary: var(--color-blue-600);

/* Component */
--button-bg: var(--color-primary);
```

## Component Spec Pattern

| Property | Default | Hover | Active | Disabled |
|----------|---------|-------|--------|----------|
| Background | primary | primary-dark | primary-darker | muted |
| Text | white | white | white | muted-fg |
| Border | none | none | none | muted-border |
| Shadow | sm | md | none | none |

## Token Best Practices

1. **Never use raw hex in components** - always reference tokens
2. **Semantic layer enables theme switching** (light/dark)
3. **Component tokens enable per-component customization**
4. **Use HSL format for opacity control**
5. **Document every token's purpose**

## Token Compliance Examples

```css
/* CORRECT - uses token */
background: var(--surface-primary);
color: var(--text-primary);
font-family: var(--font-heading);
border-radius: var(--radius-md);

/* WRONG - hardcoded */
background: #FFFFFF;
color: #1A1A1A;
font-family: 'Inter';
border-radius: 8px;
```

## Common Token Categories

### Colors
```css
/* Primitive Colors */
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-900: #111827;

/* Semantic Colors */
--color-background: var(--color-gray-50);
--color-surface: #FFFFFF;
--color-text-primary: var(--color-gray-900);
--color-text-secondary: #6B7280;
--color-border: #E5E7EB;

/* Component Colors */
--button-primary-bg: var(--color-primary);
--button-primary-text: #FFFFFF;
--input-border: var(--color-border);
--card-background: var(--color-surface);
```

### Spacing
```css
/* Spacing Scale (4px base) */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

### Typography
```css
/* Font Families */
--font-sans: system-ui, -apple-system, sans-serif;
--font-mono: 'SF Mono', Consolas, monospace;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Shadows
```css
/* Shadow Scale */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
```

### Border Radius
```css
/* Radius Scale */
--radius-sm: 0.25rem;  /* 4px */
--radius-md: 0.5rem;   /* 8px */
--radius-lg: 0.75rem;  /* 12px */
--radius-xl: 1rem;     /* 16px */
--radius-full: 9999px;
```

## Tailwind Integration

When using Tailwind CSS, map tokens to theme configuration:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        surface: 'var(--color-surface)',
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}
```

## Component State Management

### Interactive States
```css
/* Button States */
.button {
  background: var(--button-bg);
  color: var(--button-text);
  transition: all 150ms ease;
}

.button:hover {
  background: var(--button-bg-hover);
}

.button:active {
  background: var(--button-bg-active);
  transform: scale(0.98);
}

.button:disabled {
  background: var(--button-bg-disabled);
  color: var(--button-text-disabled);
  cursor: not-allowed;
  opacity: 0.5;
}

.button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

## Dark Mode Support

```css
/* Light Mode (default) */
:root {
  --color-background: #FFFFFF;
  --color-surface: #F9FAFB;
  --color-text-primary: #111827;
  --color-text-secondary: #6B7280;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #0F172A;
    --color-surface: #1E293B;
    --color-text-primary: #F8FAFC;
    --color-text-secondary: #94A3B8;
  }
}

/* Or with class-based toggle */
.dark {
  --color-background: #0F172A;
  --color-surface: #1E293B;
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #94A3B8;
}
```
