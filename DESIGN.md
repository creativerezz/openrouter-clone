---
name: OpenRouter
url: https://openrouter.ai/apps
colors:
  primary: '#818df8'
  primary-hover: '#6a6ee0'
  background: '#ffffff'
  background-secondary: '#f4f4f5'
  surface-tint-blue: '#e6f4fe'
  surface-tint-green: '#e6f6eb'
  surface-tint-orange: '#ffefd6'
  surface-tint-purple: '#f7edfe'
  text-primary: '#09090b'
  text-secondary: '#71717a'
  text-dark: '#18181b'
  text-muted: '#60646c'
  text-accent-green: '#218358'
  text-accent-blue: '#0d74ce'
  text-accent-orange: '#cc4e00'
  text-accent-purple: '#818df8'
  border: '#d9d9d9'
  border-light: '#e4e4e7'
  card-glow: '#a078ff59'
typography:
  display:
    family: 'Inter'
    size: 24px
    weight: 600
    line-height: 1.2
  heading-1:
    family: 'Inter'
    size: 24px
    weight: 600
    line-height: 1.2
  heading-2:
    family: 'Inter'
    size: 18px
    weight: 500
    line-height: 1.5
  heading-3:
    family: 'Inter'
    size: 16px
    weight: 600
    line-height: 1.5
  body:
    family: 'Inter'
    size: 16px
    weight: 400
    line-height: 1.5
  small:
    family: 'Inter'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Inter'
    size: 12px
    weight: 400
    line-height: 1.5
  code:
    family: 'ui-monospace'
    size: 14px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 48, 64]
radius:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  full: 9999px
elevation:
  card: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px'
  card-inset: 'rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset'
  card-inset-border: 'rgba(228, 228, 231, 0.4) 0px -1px 0px 0px inset'
  card-hover: '0 8px 20px -8px rgba(0,0,0,0.12), 0 0 1px rgba(255,255,255,0.2), 0 0 8px 0 rgba(160,120,255,0.35)'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '#ffffff'
    radius: '{radius.md}'
    padding: '8px 16px'
  card:
    bg: '{colors.background}'
    radius: '{radius.lg}'
    shadow: '{elevation.card}'
  input-text:
    bg: '{colors.background-secondary}'
    text: '{colors.text-primary}'
    border: '1px solid {colors.border}'
    radius: '{radius.md}'
    padding: '8px 12px'
motion:
  duration-base: '0.35s'
  duration-fast: '0.2s'
  easing-standard: 'cubic-bezier(0.16, 1, 0.3, 1)'
  easing-out: 'ease-out'
---

# Design System Inspired by OpenRouter

## 1. Visual Theme & Atmosphere

OpenRouter presents a clean, data-driven aesthetic, emphasizing clarity and information hierarchy. The primary background is a crisp `{colors.background}` (`#ffffff`), providing a neutral canvas for content. Key information is presented in a structured grid of cards, often featuring subtle shadow for depth (`{elevation.card}`). The typography, predominantly `Inter`, is set in `{colors.text-primary}` (`#09090b`) for headings and `{colors.text-secondary}` (`#71717a`) for body text, ensuring high readability.

A signature element is the use of subtly tinted cards and badges, such as `{colors.surface-tint-blue}` (`#e6f4fe`) paired with `{colors.text-accent-blue}` (`#0d74ce`), which visually categorize and highlight different AI applications. Interactive elements, like the "Sign Up" button, utilize a distinct `{colors.primary}` (`#818df8`) purple. While no general page animations are detected, specific components like app cards feature smooth `transform` and `box-shadow` transitions on hover, providing a responsive and engaging user experience.

Key Characteristics:

- Clean, data-focused layout on a `{colors.background}` (`#ffffff`) canvas.
- `Inter` typeface for all textual content, prioritizing legibility.
- Subtle `{elevation.card}` shadows for content separation.
- Tinted app cards (`{colors.surface-tint-blue}`, etc.) for visual categorization.
- Primary interactive elements use `{colors.primary}` (`#818df8`) purple.
- Component-specific hover transitions with `0.35s cubic-bezier(0.16, 1, 0.3, 1)` easing.
- Generous `{spacing.scale.64}` (`64px`) vertical section padding.

## 2. Color Palette & Roles

OpenRouter employs a functional color palette, primarily leveraging a neutral scale with specific accents for categorization and interaction.

- **Primary**
  - `primary` (`#818df8`) — The main interactive color, used for prominent calls-to-action like the "Sign Up" button.
  - `primary-hover` (`#6a6ee0`) — A slightly darker shade of purple for the primary button's hover state (inferred from screenshot).

- **Accent Colors**
  - `surface-tint-blue` (`#e6f4fe`) — Light blue background tint for specific app cards or badges.
  - `text-accent-blue` (`#0d74ce`) — Corresponding dark blue text used on `surface-tint-blue` backgrounds, also for standard links.
  - `surface-tint-green` (`#e6f6eb`) — Light green background tint for specific app cards or badges.
  - `text-accent-green` (`#218358`) — Corresponding dark green text used on `surface-tint-green` backgrounds.
  - `surface-tint-orange` (`#ffefd6`) — Light orange background tint for specific app cards or badges.
  - `text-accent-orange` (`#cc4e00`) — Corresponding dark orange text used on `surface-tint-orange` backgrounds.
  - `surface-tint-purple` (`#f7edfe`) — Light purple background tint for specific app cards or badges.
  - `text-accent-purple` (`#818df8`) — Corresponding purple text used on `surface-tint-purple` backgrounds.
  - `card-glow` (`#a078ff59`) — A translucent purple used in the hover shadow for app cards.

- **Neutral Scale**
  - `background` (`#ffffff`) — The main page background, providing a clean, bright canvas.
  - `background-secondary` (`#f4f4f5`) — A very light gray used for subtle background differentiation, such as input fields or muted sections.
  - `text-primary` (`#09090b`) — Darkest text color, used for main headings and primary content.
  - `text-dark` (`#18181b`) — Slightly less dark than primary, used for active navigation items and some headings.
  - `text-secondary` (`#71717a`) — Muted gray for secondary text, descriptions, and inactive navigation links.
  - `text-muted` (`#60646c`) — A darker muted gray for less prominent text or helper descriptions.

- **Surface & Borders**
  - `border` (`#d9d9d9`) — A light gray used for subtle borders around elements like input fields.
  - `border-light` (`#e4e4e7`) — An even lighter gray, often used for very subtle separators or inset border effects, such as the top navigation bar's bottom border.

## 3. Typography Rules

- **Font Family**: `Inter`, `ui-monospace`
  - Primary: `Inter`, sans-serif
  - Monospace: `ui-monospace`, monospace

- **Hierarchy**:
  - **Display / H1**: `Inter` `24px` `600` · line-height `1.2` · tracking `none` · Used for main page titles like "App & Agent Rankings".
  - **H2**: `Inter` `18px` `500` · line-height `1.5` · tracking `none` · Used for section titles such as "Most Popular" or "Trending".
  - **H3**: `Inter` `16px` `600` · line-height `1.5` · tracking `none` · Used for sub-section titles like "Top Coding Agents".
  - **Body**: `Inter` `16px` `400` · line-height `1.5` · tracking `none` · Standard text for paragraphs and descriptions.
  - **Small**: `Inter` `14px` `400` · line-height `1.5` · tracking `none` · Used for secondary information, navigation links, and metadata.
  - **Caption**: `Inter` `12px` `400` · line-height `1.5` · tracking `none` · Used for very fine print, labels, or token counts.
  - **Code / Mono**: `ui-monospace` `14px` `400` · line-height `1.5` · tracking `none` · For code snippets or technical values (inferred).

- **Principles**
  - Prioritize legibility and information density using the `Inter` typeface across all content.
  - Establish clear visual hierarchy through distinct font sizes and weights, with `600` for main titles and `400` for body text.
  - Maintain consistent line-heights of `1.5` for body and smaller text to ensure readability in content blocks.
  - Utilize `text-primary` (`#09090b`) for critical information and `text-secondary` (`#71717a`) for supporting details to guide user focus.
  - Avoid excessive font variations; stick to the defined `Inter` weights and sizes for a cohesive look.

## 4. Component Stylings

### Buttons

OpenRouter features distinct button styles for primary actions and navigation, emphasizing clarity and interaction feedback.

**Primary Button**
A prominent button for key actions, featuring a solid purple background and white text. It provides clear visual feedback on hover and active states.

```css
.button-primary {
  background-color: var(--color-primary, #818df8);
  color: #ffffff;
  font-family: var(--typography-small-family, 'Inter');
  font-size: var(--typography-small-size, 14px); /* inferred from "Sign Up" button text */
  font-weight: var(--typography-small-weight, 500); /* inferred from "Sign Up" button text */
  padding: 8px 16px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-md, 6px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 0.2s) var(--motion-easing-out, ease-out),
              transform var(--motion-duration-fast, 0.2s) var(--motion-easing-out, ease-out);
}

.button-primary:hover {
  background-color: var(--color-primary-hover, #6a6ee0); /* inferred from screenshot */
  transform: translateY(-1px); /* inferred from screenshot */
}

.button-primary:active {
  background-color: var(--color-primary-hover, #6a6ee0); /* inferred from screenshot */
  transform: translateY(0); /* inferred from screenshot */
}

.button-primary:disabled {
  background-color: var(--color-border, #d9d9d9); /* inferred from screenshot */
  color: var(--color-text-secondary, #71717a); /* inferred from screenshot */
  cursor: not-allowed;
  transform: none;
}
```

**Secondary Button**
Used for navigation links within the header, these buttons are text-only with a subtle hover effect.

```css
.button-secondary {
  background-color: transparent;
  color: var(--color-text-secondary, #71717a);
  font-family: var(--typography-small-family, 'Inter');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 500);
  padding: 0px 8px; /* extracted from buttons.padding */
  border: none;
  border-radius: var(--radius-md, 6px);
  cursor: pointer;
  transition: color var(--motion-duration-fast, 0.2s) var(--motion-easing-out, ease-out);
}

.button-secondary:hover {
  color: var(--color-text-dark, #18181b); /* inferred from screenshot */
}

.button-secondary:active {
  color: var(--color-text-dark, #18181b); /* inferred from screenshot */
}

.button-secondary:disabled {
  color: var(--color-text-muted, #60646c); /* inferred from screenshot */
  cursor: not-allowed;
}
```

**Ghost Button**
A minimal, text-only button for less prominent actions, often used in lists or secondary navigation.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-secondary, #71717a);
  font-family: var(--typography-small-family, 'Inter');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 400); /* inferred from screenshot */
  padding: 4px 8px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-sm, 4px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 0.2s) var(--motion-easing-out, ease-out),
              color var(--motion-duration-fast, 0.2s) var(--motion-easing-out, ease-out);
}

.button-ghost:hover {
  background-color: var(--color-background-secondary, #f4f4f5); /* inferred from screenshot */
  color: var(--color-text-primary, #09090b); /* inferred from screenshot */
}

.button-ghost:active {
  background-color: var(--color-background-secondary, #f4f4f5); /* inferred from screenshot */
  color: var(--color-text-primary, #09090b); /* inferred from screenshot */
}

.button-ghost:disabled {
  color: var(--color-text-muted, #60646c); /* inferred from screenshot */
  cursor: not-allowed;
}
```

### Cards & Containers

Cards are used extensively to display app and agent information, featuring a subtle shadow and an interactive hover state.

**Standard Card**
A white background card with rounded corners and a subtle shadow, used for displaying individual apps. On hover, it lifts slightly and gains a more pronounced shadow.

```css
.card {
  background-color: var(--color-background, #ffffff);
  color: var(--color-text-primary, #09090b);
  padding: var(--spacing-24, 24px); /* inferred from screenshot */
  border: 1px solid var(--color-border, #d9d9d9); /* inferred from screenshot */
  border-radius: var(--radius-lg, 8px);
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px);
  transition: transform var(--motion-duration-base, 0.35s) var(--motion-easing-standard, cubic-bezier(0.16, 1, 0.3, 1)),
              box-shadow var(--motion-duration-base, 0.35s) var(--motion-easing-standard, cubic-bezier(0.16, 1, 0.3, 1));
}

.card:hover {
  transform: translateY(-2px) scale(1.01); /* extracted from pseudoStates.hover */
  box-shadow: var(--elevation-card-hover, 0 8px 20px -8px rgba(0,0,0,0.12), 0 0 1px rgba(255,255,255,0.2), 0 0 8px 0 rgba(160,120,255,0.35)); /* extracted from pseudoStates.hover */
}
```

**Tinted App Card**
Variants of the standard card, featuring a light background tint and corresponding accent text to categorize apps.

```css
.card-tinted-blue {
  background-color: var(--color-surface-tint-blue, #e6f4fe);
  color: var(--color-text-accent-blue, #0d74ce);
  padding: var(--spacing-24, 24px); /* inferred from screenshot */
  border: 1px solid var(--color-surface-tint-blue, #e6f4fe); /* inferred from screenshot */
  border-radius: var(--radius-lg, 8px);
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px);
  transition: transform var(--motion-duration-base, 0.35s) var(--motion-easing-standard, cubic-bezier(0.16, 1, 0.3, 1)),
              box-shadow var(--motion-duration-base, 0.35s) var(--motion-easing-standard, cubic-bezier(0.16, 1, 0.3, 1));
}

.card-tinted-blue:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: var(--elevation-card-hover, 0 8px 20px -8px rgba(0,0,0,0.12), 0 0 1px rgba(255,255,255,0.2), 0 0 8px 0 rgba(160,120,255,0.35));
}

.card-tinted-green {
  background-color: var(--color-surface-tint-green, #e6f6eb);
  color: var(--color-text-accent-green, #218358);
  padding: var(--spacing-24, 24px); /* inferred from screenshot */
  border: 1px solid var(--color-surface-tint-green, #e6f6eb); /* inferred from screenshot */
  border-radius: var(--radius-lg, 8px);
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px);
  transition: transform var(--motion-duration-base, 0.35s) var(--motion-easing-standard, cubic-bezier(0.16, 1, 0.3, 1)),
              box-shadow var(--motion-duration-base, 0.35s) var(--motion-easing-standard, cubic-bezier(0.16, 1, 0.3, 1));
}

.card-tinted-green:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: var(--elevation-card-hover, 0 8px 20px -8px rgba(0,0,0,0.12), 0 0 1px rgba(255,255,255,0.2), 0 0 8px 0 rgba(160,120,255,0.35));
}

.card-tinted-orange {
  background-color: var(--color-surface-tint-orange, #ffefd6);
  color: var(--color-text-accent-orange, #cc4e00);
  padding: var(--spacing-24, 24px); /* inferred from screenshot */
  border: 1px solid var(--color-surface-tint-orange, #ffefd6); /* inferred from screenshot */
  border-radius: var(--radius-lg, 8px);
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px);
  transition: transform var(--motion-duration-base, 0.35s) var(--motion-easing-standard, cubic-bezier(0.16, 1, 0.3, 1)),
              box-shadow var(--motion-duration-base, 0.35s) var(--motion-easing-standard, cubic-bezier(0.16, 1, 0.3, 1));
}

.card-tinted-orange:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: var(--elevation-card-hover, 0 8px 20px -8px rgba(0,0,0,0.12), 0 0 1px rgba(255,255,255,0.2), 0 0 8px 0 rgba(160,120,255,0.35));
}

.card-tinted-purple {
  background-color: var(--color-surface-tint-purple, #f7edfe);
  color: var(--color-text-accent-purple, #818df8);
  padding: var(--spacing-24, 24px); /* inferred from screenshot */
  border: 1px solid var(--color-surface-tint-purple, #f7edfe); /* inferred from screenshot */
  border-radius: var(--radius-lg, 8px);
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px);
  transition: transform var(--motion-duration-base, 0.35s) var(--motion-easing-standard, cubic-bezier(0.16, 1, 0.3, 1)),
              box-shadow var(--motion-duration-base, 0.35s) var(--motion-easing-standard, cubic-bezier(0.16, 1, 0.3, 1));
}

.card-tinted-purple:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: var(--elevation-card-hover, 0 8px 20px -8px rgba(0,0,0,0.12), 0 0 1px rgba(255,255,255,0.2), 0 0 8px 0 rgba(160,120,255,0.35));
}
```

### Inputs & Forms

Form elements are clean and minimal, with clear focus states.

**Text Input**
A standard text input field with a light gray background and subtle border. It features a distinct focus ring for accessibility.

```css
.input-text {
  background-color: var(--color-background-secondary, #f4f4f5);
  color: var(--color-text-primary, #09090b);
  font-family: var(--typography-body-family, 'Inter');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: 8px 12px; /* inferred from screenshot */
  border: 1px solid var(--color-border, #d9d9d9);
  border-radius: var(--radius-md, 6px);
  transition: border-color var(--motion-duration-fast, 0.2s) var(--motion-easing-out, ease-out),
              box-shadow var(--motion-duration-fast, 0.2s) var(--motion-easing-out, ease-out);
}

.input-text:focus {
  outline: none;
  border-color: var(--color-primary, #818df8); /* inferred from screenshot */
  box-shadow: 0 0 0 2px var(--color-border-light, #e4e4e7), 0 0 0 4px var(--color-text-dark, #1c2024); /* extracted from pseudoStates.focus, mapped to tokens */
}

.input-text:disabled {
  background-color: var(--color-background-secondary, #f4f4f5); /* inferred from screenshot */
  color: var(--color-text-muted, #60646c); /* inferred from screenshot */
  cursor: not-allowed;
}
```

**Form Label**
Standard label styling for form fields.

```css
.form-label {
  color: var(--color-text-primary, #09090b);
  font-family: var(--typography-small-family, 'Inter');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 500); /* inferred from screenshot */
  line-height: var(--typography-small-line-height, 1.5);
  display: block;
  margin-bottom: var(--spacing-4, 4px); /* inferred from screenshot */
}
```

### Navigation

The top navigation bar provides site-wide access to key sections.

**Top Navigation Bar**
A fixed header with a white background and a subtle bottom border for separation.

```css
.nav-bar {
  background-color: var(--color-background, #ffffff);
  border-bottom: 1px solid var(--color-border-light, #e4e4e7); /* inferred from elevation.card-inset-border */
  padding: var(--spacing-16, 16px) var(--spacing-32, 32px); /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 49; /* extracted from elevation.zIndexValues */
}
```

**Navigation Link**
Links within the navigation bar, changing color on hover and for the active state.

```css
.nav-link {
  color: var(--color-text-secondary, #71717a);
  font-family: var(--typography-small-family, 'Inter');
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 500);
  text-decoration: none;
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px); /* inferred from screenshot */
  border-radius: var(--radius-md, 6px); /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 0.2s) var(--motion-easing-out, ease-out),
              background-color var(--motion-duration-fast, 0.2s) var(--motion-easing-out, ease-out);
}

.nav-link:hover {
  color: var(--color-text-dark, #18181b);
  background-color: var(--color-background-secondary, #f4f4f5); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--color-text-dark, #18181b);
  /* text-decoration: underline; (inferred, not explicitly visible but common for active nav) */
}
```

### Links

Standard text links for content within the page.

**Standard Link**
Blue underlined links for primary textual navigation within content.

```css
.link-standard {
  color: var(--color-text-accent-blue, #0d74ce);
  text-decoration: underline;
  transition: color var(--motion-duration-fast, 0.2s) var(--motion-easing-out, ease-out);
}

.link-standard:hover {
  color: var(--color-primary-hover, #6a6ee0); /* inferred from screenshot */
  text-decoration: none;
}

.link-standard:visited {
  color: var(--color-text-accent-blue, #0d74ce); /* inferred from screenshot */
}
```

**Secondary Link**
Muted links used for "View all" or less prominent actions.

```css
.link-secondary {
  color: var(--color-text-secondary, #71717a);
  font-size: var(--typography-small-size, 14px);
  font-weight: var(--typography-small-weight, 400);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 0.2s) var(--motion-easing-out, ease-out);
}

.link-secondary:hover {
  color: var(--color-text-dark, #18181b); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--color-text-secondary, #71717a); /* inferred from screenshot */
}
```

### Badges

Small, colored tags used to categorize or highlight attributes of apps.

**Status Badge**
Small, rounded labels with tinted backgrounds and corresponding accent text.

```css
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px; /* inferred from screenshot */
  border-radius: var(--radius-sm, 4px);
  font-family: var(--typography-caption-family, 'Inter');
  font-size: var(--typography-caption-size, 12px);
  font-weight: var(--typography-caption-weight, 400);
  line-height: var(--typography-caption-line-height, 1.5);
  white-space: nowrap;
}

.badge-blue {
  background-color: var(--color-surface-tint-blue, #e6f4fe);
  color: var(--color-text-accent-blue, #0d74ce);
}

.badge-green {
  background-color: var(--color-surface-tint-green, #e6f6eb);
  color: var(--color-text-accent-green, #218358);
}

.badge-orange {
  background-color: var(--color-surface-tint-orange, #ffefd6);
  color: var(--color-text-accent-orange, #cc4e00);
}

.badge-purple {
  background-color: var(--color-surface-tint-purple, #f7edfe);
  color: var(--color-text-accent-purple, #818df8);
}
```

## 5. Layout Principles

- **Spacing System**: OpenRouter uses a `4px` base unit for its spacing system, providing a consistent rhythm throughout the interface.
  - Base: `4px`
  - Scale: `[4, 8, 12, 16, 20, 24, 32, 48, 64]`
  - Usage Context:
    - `4px`: Smallest gaps, e.g., between icon and text.
    - `8px`: Inline element spacing, button padding (vertical).
    - `12px`: Input field horizontal padding, small component gaps.
    - `16px`: Component internal padding, list item vertical spacing.
    - `20px`: Moderate spacing between related elements.
    - `24px`: Card internal padding, spacing between major content blocks.
    - `32px`: Section internal padding, larger vertical gaps.
    - `48px`: Significant vertical separation between sections.
    - `64px`: Large section padding, primary content area margins.

- **Grid & Container** _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
  - Max Width: `1280px` (inferred from common desktop layouts)
  - Columns: `12` (inferred for flexible content arrangement)
  - Gutter: `24px` (inferred for spacing between grid columns)
  - Section Padding: `32px` vertical, `64px` horizontal (inferred from screenshot)

- **Whitespace Philosophy**: OpenRouter employs generous whitespace, particularly around content blocks and between sections, to enhance readability and reduce visual clutter. This approach creates a sense of calm and professionalism, allowing the user to focus on the data and application details without feeling overwhelmed. Ample padding within cards and around text blocks ensures content breathes, supporting the clean, data-driven aesthetic.

- **Border Radius Scale**:
  - `sm` (`4px`): Used for small elements like badges.
  - `md` (`6px`): Applied to buttons and input fields.
  - `lg` (`8px`): Standard for cards and larger containers.
  - `xl` (`12px`): Used for prominent feature cards (inferred from `spawn-pick-card` radius, which is `12px` in the screenshot, not `8px` from `radii`).
  - `full` (`9999px`): For fully rounded elements like avatars or pills.

## 6. Depth & Elevation

OpenRouter uses subtle shadows to define hierarchy and indicate interactivity, with specific z-index values for stacking contexts.

- **Flat (z-0)**: `none` — Default state for most background elements.
- **Card (z-10)**: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` — Applied to standard content cards, providing a subtle lift from the background.
- **Hovered Card (z-10)**: `0 8px 20px -8px rgba(0,0,0,0.12), 0 0 1px rgba(255,255,255,0.2), 0 0 8px 0 rgba(160,120,255,0.35)` — A more pronounced shadow with a purple glow, indicating an interactive state for cards.
- **Navigation (z-49)**: `rgba(228, 228, 231, 0.4) 0px -1px 0px 0px inset` — Used for the top navigation bar, creating a subtle bottom border effect that separates it from content below.
- **Notification (z-110)**: `none` — Reserved for temporary notifications or toasts, ensuring they appear above most content.
- **Modal/Overlay (z-1000)**: `none` — Highest stacking context for full-screen overlays or modals (shadows would typically be applied to the modal content itself, not the overlay).

Shadow Philosophy: OpenRouter's elevation strategy is understated and functional. Shadows are primarily used to differentiate interactive elements like cards and to provide subtle visual feedback on hover, rather than for dramatic depth. The use of `card-inset-border` for the navigation bar provides a clean separation without a heavy drop shadow, maintaining the overall light and airy feel. The `card-glow` on hover adds a touch of brand personality and indicates interactivity.

## 7. Do's and Don'ts

### Do's

- **Do** use `text-primary` (`#09090b`) for all main headings and `text-secondary` (`#71717a`) for body text, ensuring a WCAG AAA contrast ratio of 19.9:1 and AA ratio of 4.83:1 respectively on `background` (`#ffffff`).
- **Do** apply `radius.lg` (`8px`) to all `Card` components, and `radius.md` (`6px`) to `Button` and `Input` elements for consistent rounding.
- **Do** ensure `Primary Button` elements use `primary` (`#818df8`) for their background and `#ffffff` for text, providing a clear call to action.
- **Do** maintain `spacing.scale.24` (`24px`) for internal padding within `Card` components to provide ample content breathing room.
- **Do** use `text-accent-blue` (`#0d74ce`) for `Standard Link` elements, ensuring a WCAG AA-large contrast ratio of 4.25:1 on `surface-tint-blue` (`#e6f4fe`).
- **Do** implement `transform: translateY(-2px) scale(1.01)` and `elevation.card-hover` on `Card` components for a distinct hover interaction.
- **Do** use `Inter` `24px` `600` for the main page title and `Inter` `18px` `500` for section headings to establish clear typographic hierarchy.
- **Do** apply `background-secondary` (`#f4f4f5`) with `border` (`#d9d9d9`) for `Input` fields, ensuring a clean and accessible default state.
- **Do** use `spacing.scale.4` (`4px`) as the smallest unit for inline element separation, such as between an icon and text.

### Don'ts

- **Don't** use `text-secondary` (`#71717a`) on `surface-tint-blue` (`#e6f4fe`) as it yields a contrast ratio of 3.1, which fails WCAG AA.
- **Don't** introduce custom spacing values; adhere strictly to the `spacing.scale` `[4, 8, 12, 16, 20, 24, 32, 48, 64]` for all layout and component spacing.
- **Don't** use `text-accent-orange` (`#cc4e00`) on `background` (`#ffffff`) for body text; its 3.99:1 ratio only passes AA-large, not standard AA.
- **Don't** deviate from `Inter` for all primary text content; `ui-monospace` is reserved for code-like elements only.
- **Don't** use heavy, opaque shadows; stick to the subtle `elevation.card` and `elevation.card-hover` for depth.
- **Don't** use `text-muted` (`#60646c`) on `background-secondary` (`#f4f4f5`); its contrast is too low for readability.
- **Don't** remove the `text-decoration: underline` from `Standard Link` elements in their default state, as it provides a clear affordance.
- **Don't** use `primary` (`#818df8`) for general body text; it is reserved for interactive elements and accents.

## 8. Responsive Behavior _(Note: breakpoints below are industry-standard recommendations, with one measured breakpoint from the source. Adjust to the brand's actual media queries when implementing.)_

- **Suggested Breakpoints**:
  - **Mobile Small** (~375px): Stack content vertically, prioritize single-column layouts.
  - **Mobile Large** (~480px): Adjust padding, allow some two-column layouts if space permits.
  - **Tablet** (~640px): `(min-width: 640px)`: Enable multi-column card grids and expand navigation.
  - **Desktop** (~1024px): Full desktop layout, expanded navigation, more complex grids.
  - **Desktop Large** (~1440px): Maximize content width, optimize for large displays.

- **Touch Targets**:
  - Ensure all interactive elements, especially `Button` and `Link` components, have a minimum touch target size of `44px` by `44px` (inferred from best practices).
  - Maintain a minimum `8px` clear space (`spacing.scale.8`) around interactive elements to prevent accidental taps.

- **Collapsing Strategy**:
  - **Navigation**: Collapse the main `nav-bar` links into a hamburger menu on mobile breakpoints below `640px`; the `Primary Button` ("Sign Up") should remain visible.
  - **Cards**: `Card` grids should collapse into a single column on mobile, transitioning to 2 or 3 columns on tablet and desktop.
  - **Typography**: Scale down `Display` and `Heading` font sizes (`24px` to `20px` for Display, `18px` to `16px` for H2) on mobile to optimize for smaller viewports.
  - **Padding**: Reduce horizontal `spacing.scale.64` (`64px`) section padding to `spacing.scale.24` (`24px`) on mobile devices.
  - **Forms**: `Input` fields should span full width on mobile, with labels stacked above them.

## 9. Agent Prompt Guide

- **Quick Color Reference**
  - `primary`: `#818df8`
  - `primary-hover`: `#6a6ee0`
  - `background`: `#ffffff`
  - `background-secondary`: `#f4f4f5`
  - `surface-tint-blue`: `#e6f4fe`
  - `surface-tint-green`: `#e6f6eb`
  - `surface-tint-orange`: `#ffefd6`
  - `surface-tint-purple`: `#f7edfe`
  - `text-primary`: `#09090b`
  - `text-secondary`: `#71717a`
  - `text-dark`: `#18181b`
  - `text-muted`: `#60646c`
  - `text-accent-green`: `#218358`
  - `text-accent-blue`: `#0d74ce`
  - `text-accent-orange`: `#cc4e00`
  - `text-accent-purple`: `#818df8`
  - `border`: `#d9d9d9`
  - `border-light`: `#e4e4e7`
  - `card-glow`: `#a078ff59`

- **Iteration Guide**
    1. Always use `primary` (`#818df8`) for the main call-to-action button background, with `#ffffff` text.
    2. Ensure `Display` type is `Inter` `24px` `600` and `Body` text is `Inter` `16px` `400`.
    3. Apply `spacing.base` (`4px`) or multiples from `spacing.scale` for all element gaps and padding.
    4. All interactive elements like `Button` and `Input` should have `radius.md` (`6px`).
    5. `Card` components must use `background` (`#ffffff`), `radius.lg` (`8px`), and `elevation.card` shadow.
    6. `Primary Button` height should be `40px` (inferred from `8px` vertical padding + `24px` font size).
    7. `Input` fields require `background-secondary` (`#f4f4f5`) and a `border` (`#d9d9d9`) in their default state, transitioning to a `primary` (`#818df8`) border on `:focus`.
    8. Top `Navigation Link` elements should change `color` to `text-dark` (`#18181b`) on `:hover`.
    9. Utilize `elevation.card` for standard cards and `elevation.card-hover` for interactive card states.
    10. Ensure `text-primary` (`#09090b`) on `background` (`#ffffff`) passes WCAG AAA contrast (19.9:1).
    11. On mobile, collapse navigation into a hamburger menu and stack `Card` components vertically.
    12. Apply `motion.duration-base` (`0.35s`) with `motion.easing-standard` (`cubic-bezier(0.16, 1, 0.3, 1)`) for card hover effects.done (32.4 KB)
