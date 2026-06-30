# OpenRouter Clone

A faithful front-end clone of OpenRouter's **App & Agent Rankings** page
(`openrouter.ai/apps`), built from a design system reverse-engineered into
[`DESIGN.md`](./DESIGN.md).

![App & Agent Rankings](public/icon.svg)

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** — design tokens live in [`app/globals.css`](app/globals.css) under `@theme`
- **TypeScript**
- **Dark mode** — class-based (`@custom-variant dark`), follows system preference, toggleable, and persisted to `localStorage` with no flash-of-wrong-theme

## Design system

Every color, radius, shadow, and type ramp is taken from [`DESIGN.md`](./DESIGN.md)
and exposed as Tailwind utilities via the `@theme` block in
[`app/globals.css`](app/globals.css):

| Token            | Value     | Utility                        |
| ---------------- | --------- | ------------------------------ |
| `primary`        | `#818df8` | `bg-primary` / `text-primary`  |
| `background`     | `#ffffff` | `bg-background`                |
| `surface`        | `#f4f4f5` | `bg-surface`                   |
| `foreground`     | `#09090b` | `text-foreground`              |
| `tint-{color}`   | tints     | `bg-tint-blue`, …              |
| `accent-{color}` | accents   | `text-accent-green`, …         |
| `shadow-card`    | elevation | `shadow-card` / `-card-hover`  |

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

Other scripts:

```bash
pnpm build    # production build
pnpm start    # serve the production build
```

> **Note:** [`pnpm-workspace.yaml`](pnpm-workspace.yaml) declines `sharp`'s native
> build (we don't use `next/image`). pnpm 11 reads this setting from there — not
> from `package.json` or `.npmrc`.

## Structure

```
app/
  layout.tsx              Root layout, Inter font, metadata
  page.tsx                Hero + rankings composition
  globals.css             Tailwind v4 + design tokens
components/
  navbar.tsx              Sticky header: logo, search, nav, auth
  rankings-explorer.tsx   "use client" — period tabs, outlined cards, ranked list
  theme-toggle.tsx        "use client" — light/dark switch (localStorage)
  app-icon.tsx            Tinted monogram avatars
  badges.tsx              Growth / category / "new" badges
  footer.tsx, logo.tsx, icons.tsx
lib/
  data.ts                 Ranked apps + period scaling + tint class maps
  format.ts               Token / growth / monogram formatting
  cn.ts                   className combiner
```

## Notes

This is a design-system demonstration and is **not affiliated with OpenRouter**.
App names and token figures are illustrative.
