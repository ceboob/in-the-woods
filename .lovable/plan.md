

## Assessment

This project is a **React + Vite SPA** deployed on **Vercel**. It has no server-side rendering — all HTML content (including H1 tags) is injected by client-side JavaScript after the initial page load. The raw HTML source sent by the server contains only the empty `<div id="root"></div>`.

**The request asks for SSR or static generation (Next.js, Nuxt, Astro).** This is fundamentally incompatible with the current Lovable platform, which supports only React + Vite client-side applications. Migrating to Next.js, Astro, or any SSR framework would require a complete project rewrite and is not possible within Lovable.

## What CAN be done instead

**Prerendering at build time** using `vite-plugin-prerender` (formerly `prerender-spa-plugin`). This renders each route during `vite build` using a headless browser, producing static `.html` files with full content — including H1 tags — baked into the raw HTML. Googlebot and Screaming Frog will see H1 in the initial response without needing JS execution.

### How it works

1. Install `vite-plugin-prerender`
2. Configure it in `vite.config.ts` with the list of all 43 routes
3. At build time, Vite renders each route and saves the full HTML output as static files
4. Vercel serves these prerendered HTML files — H1, meta tags, and content are in the raw source
5. React hydrates on top, preserving full interactivity

### Changes required

**1 file modified:** `vite.config.ts`
- Add `vite-plugin-prerender` plugin
- List all ~43 routes to prerender (home, SEO pages, blog articles)

**1 package installed:** `vite-plugin-prerender`

### Route list (all 43 pages)
```text
/, /dom, /galeria, /blog, /informator, /dokumenty,
/noclegi-suprasl, /domek-suprasl, /domek-z-jacuzzi-podlasie,
/dom-w-lesie-suprasl, /weekend-suprasl, /wieczor-panienski-suprasl,
/atrakcje-suprasl, /puszcza-knyszynska-nocleg,
/blog/co-robic-suprasl, /blog/weekend-suprasl-plan,
/blog/najlepsze-miejsca-puszcza-knyszynska, /blog/kajaki-suprasl,
/blog/restauracje-suprasl, /blog/supraski-system-wodny,
... (all remaining blog routes)
```

### Result
- Every page will have exactly **one H1** in the raw HTML source
- All meta tags (title, description, canonical) will also be in static HTML
- Screaming Frog will detect H1 without JS rendering
- No framework migration needed — stays 100% React + Vite

### Risk / limitation
- Build time increases (~1-2 min for 43 pages)
- `vite-plugin-prerender` uses Puppeteer internally — must verify it works in Vercel's build environment (if not, we'd use a CI prebuild step or `react-snap` as alternative)

