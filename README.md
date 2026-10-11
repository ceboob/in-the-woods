# In The Woods

Source code of the website of **In The Woods**, a holiday house near Suprasl, Poland.

Live site: https://www.suprasl.online

## Stack

- Vite, React, TypeScript
- Tailwind CSS and shadcn-ui
- Supabase (backend)
- Prerendering of public routes at build time (SSR entry in `src/ssr`, `scripts/prerender.mjs`)
- Hosting: Vercel (`vercel.json`)

## Requirements

- Node.js 22 (see `.nvmrc`)
- npm

## Getting started

```sh
git clone https://github.com/ceboob/in-the-woods.git
cd in-the-woods
npm install
cp .env.example .env   # fill in the Supabase values
npm run dev
```

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Generate sitemap, run SEO check, build client and SSR bundles, prerender |
| `npm run build:client` | Client-only production build |
| `npm test` | Run unit tests (Vitest) |
| `npm run lint` | Run ESLint |
| `npm run sitemap:generate` | Regenerate `sitemap.xml` from the React routes |
| `npm run seo:check` | Validate routes vs sitemap and `noindex` on technical pages |

## Environment variables

See `.env.example`: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID`.

## Deployment

Public routes are prerendered during the build. Vercel serves the generated
`dist/404.html` with an HTTP 404 for unknown paths; only the two admin routes
rewrite to the SPA entry point. Other static hosts must likewise serve the
generated 404 document with a 404 status rather than rewriting unknown URLs to
`index.html`.

## Documentation

SEO, CSP and deployment notes (mostly in Polish) are in [`docs/`](docs/).

## Security

See [SECURITY.md](SECURITY.md).
