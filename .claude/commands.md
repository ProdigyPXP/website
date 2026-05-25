# Commands

Use **pnpm** (lockfile is `pnpm-lock.yaml`).

```bash
pnpm install        # install deps
pnpm dev            # next dev — http://localhost:3000
pnpm build          # next build (production)
pnpm start          # next start — serve the production build
```

No lint, test, or typecheck scripts are defined. To typecheck manually:

```bash
pnpm exec tsc --noEmit
```

## Release / version bumps

When bumping the extension version, update **all three** in lockstep:

1. `package.json` → `version`
2. `src/lib/VERSION.ts`
3. `public/sitemap.xml` → `<lastmod>`
