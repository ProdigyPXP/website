# Play Origin Website

Marketing and landing site for **[Play Origin](https://prodigyorigin.com)** — a browser extension mod loader for online math games. This is a modern, statically-rendered single-page application built with Next.js 16, React 19, and Tailwind CSS v4.

## Overview

This repository contains the official website for Play Origin, showcasing features, installation instructions, and links to the browser extension. The site is optimized for performance and SEO, featuring structured data markup (JSON-LD), analytics integration, and a responsive design across all devices.

## Technology Stack

- **Framework**: Next.js 16.2.1 (App Router)
- **Language**: TypeScript (strict mode)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics & Speed Insights
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm

### Installation & Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site. Changes to `src/app/page.tsx` and component files will auto-refresh.

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
src/
  ├── app/
  │   ├── layout.tsx          # Root layout (metadata, fonts, JSON-LD)
  │   ├── page.tsx            # Main landing page
  │   ├── globals.css         # Tailwind v4 entry point
  │   └── icon.png            # Favicon
  ├── components/
  │   ├── layout/             # Navbar, Footer
  │   ├── sections/           # Hero, Features, Gallery, Install, CTA
  │   └── ui/                 # Reusable UI components
  └── lib/
      ├── useBrowser.ts       # Browser detection hook
      └── utils.ts            # Utility functions
public/
  ├── logo.png                # Brand logo
  ├── screenshots/            # Product screenshots
  ├── robots.txt              # SEO robots file
  ├── sitemap.xml             # XML sitemap
  └── llms.txt                # LLM-friendly content index
```

Path alias: `@/*` resolves to `./src/*` (configured in `tsconfig.json`).

## Key Features

- **Single-page landing site** with smooth scrolling sections
- **Responsive design** optimized for mobile, tablet, and desktop
- **Rich structured data** (JSON-LD) for search engines and social sharing
- **Performance optimized** with Vercel Analytics and Speed Insights
- **Accessible** with semantic HTML and ARIA labels
- **SEO-friendly** with dynamic metadata and sitemap

## Important Notes

When updating product information (version, features, install steps, or FAQ):
1. Update `package.json` → `version`
2. Update `src/app/layout.tsx` → `jsonLd.softwareVersion` and metadata
3. Update `public/sitemap.xml` → `<lastmod>`

Refer to `.claude/architecture.md` for detailed architecture and SEO notes.

## Links

- 🌐 **Website**: https://prodigyorigin.com
- 📦 **Extension**: https://extension.prodigyorigin.com
- 🎮 **Play Prodigy**: https://play.prodigygame.com
- 📂 **Source Code**: https://github.com/ProdigyPXP/ProdigyOrigin

## License

This project is part of the Play Origin ecosystem. See the main repository for license details.
