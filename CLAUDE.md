<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

Next.js **16.2.1** + React **19**. APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Where to look

- **Architecture, stack, directory map, SEO/JSON-LD notes** → `.claude/architecture.md`
- **Dev/build commands, version-bump checklist** → `.claude/commands.md`

## Quick facts

- Path alias: `@/*` → `./src/*`
- Package manager: **pnpm**
- Styling: Tailwind **v4** (`src/app/globals.css`)
- Single landing page: `src/app/page.tsx` composes section components from `src/components/sections/`
- `src/app/layout.tsx` holds metadata + a large inline JSON-LD `@graph` — update it when product copy, version, or FAQ changes
