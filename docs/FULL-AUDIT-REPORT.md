# Full SEO Audit: https://www.suprasl.online/

Audit date: 2026-10-11. Method: live crawl of all 44 sitemap URLs (raw HTML, no JS execution) with a custom Node script, `curl` header/redirect checks, plus a read of `vercel.json`, `public/robots.txt`, `index.html` and the `src/` code. The repo's own `npm run seo:check` also passes (44 indexable routes = 44 sitemap routes).

Not executed: Lighthouse / PageSpeed (the PageSpeed API returned no response from this environment, so performance numbers are **unknown**, not a site defect), Search Console, backlink data. See "Unknowns".

Confidence scale: High = directly observed; Medium = observed but interpretation needed; Low = inference.

## Summary

The site is in good technical shape: prerendered HTML with real content, one H1 per page, unique titles/descriptions, correct canonicals, correct redirects and real 404s, strong security headers, schema on most pages. Main issues: two broken internal links, no long-term caching, heavy hero/OG images, overlapping accommodation landing pages, a few thin pages, and third-party hotlinked OG images.

What passed (evidence): 44/44 sitemap URLs return 200; `suprasl.online` and `http://` return 308 to `https://www.`; unknown URL returns a real 404; every page has title, description, canonical equal to its own URL, `index, follow`, Open Graph tags; no duplicate titles or descriptions; titles all under 65 characters; exactly one H1 on every page; 151 images and 0 missing `alt`; no `noindex` anywhere; no fake `aggregateRating` markup.

## Technical SEO

### T1. Two broken internal links (404)
- **Evidence:** `/blog/restauracje-suprasl` links to `/blog/atrakcje-suprasl` and `/blog/rykowisko-jeleni-puszcza-knyszynska` links to `/blog/noclegi-suprasl`; both return 404 (`curl`). Source: `src/pages/blog/RestauracjeSuprasl.tsx:40` (`slug: 'atrakcje-suprasl'`) and `src/pages/blog/RykowiskoJeleni.tsx:26` (`slug: 'noclegi-suprasl'`); `BlogArticleLayout.tsx:233` prefixes every slug with `/blog/`.
- **Impact:** wasted crawl budget, lost internal link equity to the two key money pages, poor UX.
- **Fix:** the real pages are `/atrakcje-suprasl` and `/noclegi-suprasl`; allow absolute paths in related-article items (or change the links).
- **Severity:** Medium. **Confidence:** High.

### T2. No long-term caching for static assets
- **Evidence:** `/assets/index-*.js`, `/assets/vendor-react-*.js`, `/images/hero-cabin.jpg`, `/og-image.jpg` all return `Cache-Control: public, max-age=0, must-revalidate`. `vercel.json` defines no cache headers.
- **Impact:** every repeat visit revalidates all files; weaker repeat-view performance.
- **Fix:** add `Cache-Control: public, max-age=31536000, immutable` for `/assets/(.*)` (hashed filenames) and a long but not immutable value for `/images/(.*)`.
- **Severity:** Medium. **Confidence:** High.

### T3. Sitemap has no `lastmod`
- **Evidence:** 0 `<lastmod>` elements in 44 entries; only `changefreq`/`priority` (both ignored by Google).
- **Impact:** slower recrawl of updated pages; missed freshness signal.
- **Fix:** emit real `lastmod` dates in `scripts/generate-sitemap.mjs` (git date or content date per page).
- **Severity:** Low. **Confidence:** High.

### T4. Weak CSP and broad `img-src`
- **Evidence:** CSP contains `'unsafe-inline'` and `'unsafe-eval'` in `script-src` and `img-src ... https: http:`. HTML responses send `Access-Control-Allow-Origin: *` (Vercel default for static files).
- **Impact:** reduced XSS protection; not an SEO ranking factor. Other headers (HSTS preload, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy) are present and good.
- **Fix:** remove `unsafe-eval` if no dependency needs it, use nonces/hashes for GTM inline script, drop `http:` from `img-src`.
- **Severity:** Low. **Confidence:** High.

### T5. Trailing-slash URLs return 200
- **Evidence:** `/dom/` returns 200 (no redirect to `/dom`).
- **Impact:** duplicate URL variants; mitigated because canonical points to the slashless URL.
- **Fix:** set `"trailingSlash": false` in `vercel.json`.
- **Severity:** Low. **Confidence:** Medium.

### T6. No hreflang
- **Evidence:** no `hreflang` links on any page.
- **Impact:** none for a Polish-only site. Informational.
- **Severity:** Info. **Confidence:** High.

## Content

### C1. Overlapping accommodation landing pages (keyword cannibalization risk)
- **Evidence:** six pages target near-identical intent with 457-565 words each: `/dom`, `/dom-w-lesie-suprasl`, `/domek-suprasl`, `/domek-z-jacuzzi-podlasie`, `/noclegi-suprasl`, `/puszcza-knyszynska-nocleg` (titles all variants of "dom/domek w lesie, Supraśl").
- **Impact:** pages may compete with each other and with the homepage; diluted authority.
- **Fix:** assign each page one distinct primary query (e.g. noclegi = booking intent, domek-z-jacuzzi = jacuzzi intent, puszcza-nocleg = location intent), differentiate copy, and cross-link with descriptive anchors; consider merging or canonicalizing the weakest pair after Search Console review.
- **Severity:** Medium. **Confidence:** Medium (needs Search Console data to confirm).

### C2. Thin indexable pages
- **Evidence:** `/informator` 138 words, `/dokumenty` 266 words, `/blog/supraski-system-wodny` 289, `/blog/puszcza-knyszynska-historie` 292, `/blog/restauracje-suprasl` 312, `/blog/jesien-w-suprasliu-2026-wydarzenia-kulturalne` 317. All are in the sitemap and indexable.
- **Impact:** low-value pages can dilute site quality signals.
- **Fix:** expand the blog posts to useful depth; for `/informator`, `/dokumenty` consider `noindex` and removal from the sitemap if they are utility pages.
- **Severity:** Low-Medium. **Confidence:** Medium.

### C3. Meta description length
- **Evidence:** `/domek-suprasl` and `/domek-z-jacuzzi-podlasie` descriptions fall outside 70-160 characters.
- **Impact:** possible truncation or weak snippet.
- **Fix:** rewrite to roughly 120-155 characters with a call to action.
- **Severity:** Low. **Confidence:** High.

### C4. Homepage content is strong
- **Evidence:** 2,499 words, 20 H2s, keyword-aligned H1 ("Dom na wynajem w Supraślu – dom w lesie z jacuzzi i kominkiem"), content present in raw HTML (prerendered).
- **Impact:** positive. Note: homepage is long; keep the booking CTA reachable (sticky CTA already exists).
- **Severity:** Info. **Confidence:** High.

## Schema

### S1. Coverage is good, a few gaps
- **Evidence:** types found: `VacationRental`, `FAQPage` (home, some blogs), `BreadcrumbList` (all inner pages), `LodgingBusiness` (`/noclegi-suprasl`), `ItemList` (`/blog`), `BlogPosting` (blog posts). All JSON-LD parses (0 invalid). No `aggregateRating` anywhere (correct, no unverifiable reviews).
- **Gaps:** no `Organization`/`WebSite` entity with `sameAs`; `VacationRental` on the homepage lacks `geo`, `priceRange`/offers and check-in/out details; `/informator` and `/polityka-prywatnosci` have no schema (acceptable).
- **Impact:** weaker entity understanding and rental rich-result eligibility.
- **Fix:** add `geo` coordinates, `checkinTime`/`checkoutTime`, `numberOfRooms`/`occupancy` only if accurate; add a single `Organization` with `sameAs` to real profiles (Google Business Profile, social). Validate with the Rich Results Test.
- **Severity:** Low. **Confidence:** Medium.

### S2. FAQPage rich results
- **Evidence:** `FAQPage` markup on home and some blogs.
- **Impact:** Google limits FAQ rich results to authoritative government/health sites, so no SERP feature is expected; markup is harmless and still helps machine readability.
- **Severity:** Info. **Confidence:** Medium.

### S3. Two different business types for the same property
- **Evidence:** homepage uses `VacationRental` (`@id` `#vacation-rental`), `/noclegi-suprasl` uses `LodgingBusiness`.
- **Impact:** possible entity inconsistency.
- **Fix:** reference the same `@id` from inner pages instead of defining a second entity.
- **Severity:** Low. **Confidence:** Low (did not diff the two objects in full).

## Performance

### P1. Heavy hero and OG images
- **Evidence:** `/images/hero-cabin.jpg` (preloaded in `index.html`) is 781 KB JPEG; `/og-image.jpg` is 1.8 MB; `public/images` contains 90 files, largest 2-3 MB (`living-fireplace.jpg` 3,069 KB, `jacuzzi-night.jpg` 3,026 KB, `terrace-porch.jpg` 2,873 KB).
- **Impact:** likely slow LCP on mobile (hero is the LCP candidate) and wasted bandwidth when the large files are used as `og:image`/schema images.
- **Fix:** serve the hero as responsive AVIF/WebP (`srcset`, ~100-150 KB for mobile), compress OG image to under 300 KB (1200x630), and use resized variants in schema `image`.
- **Severity:** Medium. **Confidence:** Medium (inferred from sizes; no Lighthouse run).

### P2. Core Web Vitals not measured
- **Evidence:** PageSpeed API returned no usable response in this environment; no local Lighthouse available.
- **Impact:** unknown. TTFB from the crawl was fast (about 34-133 ms per page, cached HTML, 18-170 KB).
- **Fix:** run PageSpeed Insights / Lighthouse manually; check the CrUX report in Search Console.
- **Severity:** Unknown. **Confidence:** n/a.

## Links

### L1. Broken links
See T1.

### L2. Internal link structure
- **Evidence:** all 44 sitemap URLs are reachable via internal links except `/polityka-prywatnosci` (not found by my `<a href>` scan; likely linked via a footer component or modal). Links found but not in the sitemap: only the two 404s from T1.
- **Impact:** minimal.
- **Fix:** confirm the privacy policy link exists in the footer.
- **Severity:** Low. **Confidence:** Low.

### L3. Redirects
- **Evidence:** `suprasl.online` -> `https://www.suprasl.online/` (308); `http://www...` -> https (308); one extra redirect in `vercel.json` for a renamed blog post. No redirect chains observed.
- **Severity:** Info (pass). **Confidence:** High.

## Images

### I1. Missing dimensions on some images
- **Evidence:** 12 of 151 `<img>` tags lack `width`/`height` (4 on the homepage).
- **Impact:** potential layout shift (CLS).
- **Fix:** add intrinsic width/height or `aspect-ratio` to those images.
- **Severity:** Low-Medium. **Confidence:** Medium.

### I2. Third-party hotlinked images used as OG images
- **Evidence:** `/blog` (`Blog.tsx:57`) and `/blog/suprasl-zima` (`SupraslZima.tsx:10, 94, 106`) use images from `bialystoksubiektywnie.com`.
- **Impact:** fragile (can disappear), possible copyright/permission issue, slower, no control over size.
- **Fix:** use own or licensed images hosted on the domain; if reused with permission, copy and credit.
- **Severity:** Medium. **Confidence:** High (hotlinking), Low (licensing status unknown).

### I3. Alt text
- **Evidence:** 0 images without `alt` across 44 pages. Quality of alt text not reviewed for every image.
- **Severity:** Info (pass). **Confidence:** Medium.

## GEO / AEO

### G1. AI-crawler policy and `llms.txt`
- **Evidence:** `robots.txt` has `User-agent: *` / `Allow: /` only, no explicit rules for GPTBot, ClaudeBot, PerplexityBot or Google-Extended; `/llms.txt` returns 404.
- **Impact:** AI crawlers are allowed by default (good for visibility). `llms.txt` is optional and has no confirmed ranking effect.
- **Fix:** decide on a policy deliberately; optionally add a short `llms.txt` summarizing the property, location and key pages.
- **Severity:** Low. **Confidence:** Medium.

### G2. Answer-ready content
- **Evidence:** homepage has a FAQ with concise answers (jacuzzi, pets, Wi-Fi, capacity) plus FAQPage schema; NAP data (address Konne 109/1, phone, email) is in schema; blog posts have `BlogPosting` schema.
- **Gaps:** no visible author/expert bio on blog posts (not verified for all posts), no `sameAs` profiles, no dated "last updated" on guides.
- **Impact:** weaker E-E-A-T and citation likelihood for AI answers.
- **Fix:** add author with `Person` schema (host), visible "updated" dates, and short direct-answer paragraphs at the top of guide posts.
- **Severity:** Low. **Confidence:** Low-Medium.

## Unknowns (not confirmed as issues)

- **Core Web Vitals / Lighthouse:** PageSpeed API gave no response from this environment; no local Lighthouse. Needs a manual run.
- **Search Console data:** indexing status, queries, cannibalization (C1), and CTR are unknown.
- **`/admin` indexing:** `/admin` returns 200 and is disallowed in `robots.txt`; whether the page carries a `noindex` meta was not checked. Disallow alone does not prevent indexing if the URL is linked externally.
- **JavaScript rendering:** I crawled raw HTML only. Content is prerendered, so JS rendering differences are not expected, but were not tested.
- **Backlinks, Google Business Profile, reviews:** not assessed.
- **Alt text quality, full-text duplication between near-identical pages:** only sampled via word counts and titles.
