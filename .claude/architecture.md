# Architecture

Marketing site for **Prodigy Origin**, a browser-extension mod loader for Prodigy Math Game. Single-page landing site, statically rendered.

## Stack

- Next.js **16.2.1** (App Router) — see `node_modules/next/dist/docs/` before writing code; APIs differ from older Next versions.
- React **19.2** + TypeScript (strict)
- Tailwind CSS **v4** (via `@tailwindcss/postcss`)
- `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`
- `@vercel/analytics`, `@vercel/speed-insights`
- Package manager: **pnpm** (`pnpm-workspace.yaml` present, but this is the only package)

## Directory map

```
src/
  app/
    layout.tsx       # Root layout — metadata, fonts, JSON-LD, Analytics
    page.tsx         # Single landing page composing the section components
    globals.css      # Tailwind v4 entry
    icon.png         # Favicon (Next file convention)
  components/
    layout/          # Navbar, Footer
    sections/        # Hero, FeatureGrid, ScreenshotGallery, InstallSteps, CTASection
    ui/              # AnimatedText, BrowserIcon, Button, ScrollReveal, SectionHeading
  lib/
    useBrowser.ts    # Browser detection hook
    utils.ts         # `cn()` (clsx + tailwind-merge)
public/
  llms.txt, robots.txt, sitemap.xml, logo.png, screenshots/
```

Path alias: `@/*` → `./src/*` (see `tsconfig.json`).

## SEO / structured data

`src/app/layout.tsx` is dense: it ships a large JSON-LD `@graph` (SoftwareApplication, FAQPage, HowTo) inline via `dangerouslySetInnerHTML`. When updating the extension version, supported browsers, install steps, mod categories, or FAQ copy, edit the `jsonLd` constant **and** `metadata` in that file. Keep `softwareVersion` aligned with `package.json`'s `version`.

Sitemap and robots are static files in `public/` — update `sitemap.xml`'s `lastmod` when shipping content changes.

## External links referenced in content

- Extension store: `https://extension.prodigyorigin.com`
- Source: `https://github.com/ProdigyPXP/ProdigyOrigin`
- Live game: `https://play.prodigygame.com`
