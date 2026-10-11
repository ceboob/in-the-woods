# SEO Action Plan

Sorted by impact, then effort. IDs refer to `FULL-AUDIT-REPORT.md` (which has the full Evidence, Impact, Fix, Severity and Confidence for each item).

## Priority 1: do now (high impact, low effort)

| # | Item | Impact | Effort | Severity | Confidence | Fix summary |
|---|------|--------|--------|----------|------------|-------------|
| 1 | T1 Broken internal links | Medium | 15 min | Medium | High | Point `RestauracjeSuprasl.tsx:40` to `/atrakcje-suprasl` and `RykowiskoJeleni.tsx:26` to `/noclegi-suprasl` (allow absolute paths in related-article items). |
| 2 | T2 Asset caching | Medium | 15 min | Medium | High | Add `Cache-Control` headers in `vercel.json`: `/assets/(.*)` immutable 1 year; `/images/(.*)` long TTL. |
| 3 | I2 Hotlinked third-party OG images | Medium | 1 h | Medium | High | Replace `bialystoksubiektywnie.com` images (Blog.tsx, SupraslZima.tsx) with own or licensed images. |

## Priority 2: next (medium impact)

| # | Item | Impact | Effort | Severity | Confidence | Fix summary |
|---|------|--------|--------|----------|------------|-------------|
| 4 | P1 Heavy hero / OG images | Medium-High | 2-4 h | Medium | Medium | Responsive AVIF/WebP hero (~100-150 KB mobile), OG image under 300 KB, resized images for schema. |
| 5 | P2 Measure Core Web Vitals | High (info) | 30 min | Unknown | n/a | Run PageSpeed Insights/Lighthouse on `/`, `/noclegi-suprasl`, one blog post; check CrUX in Search Console. Re-prioritize P1 with the numbers. |
| 6 | C1 Cannibalizing landing pages | Medium | 1-2 days | Medium | Medium | Check Search Console for overlapping queries across the six accommodation pages; assign one primary intent each, differentiate copy, merge the weakest. |
| 7 | I1 Missing image dimensions | Low-Medium | 1 h | Low-Medium | Medium | Add `width`/`height` to the 12 images lacking them (4 on home). |

## Priority 3: improve (low impact or uncertain)

| # | Item | Impact | Effort | Severity | Confidence | Fix summary |
|---|------|--------|--------|----------|------------|-------------|
| 8 | C2 Thin pages | Low-Medium | 1-3 days | Low-Medium | Medium | Expand the 4 short blog posts; consider `noindex` + sitemap removal for `/informator` and `/dokumenty`. |
| 9 | S1 Schema gaps | Low | 2 h | Low | Medium | Add `geo`, check-in/out to `VacationRental`; add one `Organization` with real `sameAs`; reuse the same `@id` on inner pages (S3). |
| 10 | T3 Sitemap `lastmod` | Low | 1 h | Low | High | Emit real `lastmod` in `scripts/generate-sitemap.mjs`. |
| 11 | C3 Meta descriptions | Low | 20 min | Low | High | Rewrite descriptions for `/domek-suprasl` and `/domek-z-jacuzzi-podlasie` (about 120-155 characters). |
| 12 | G2 E-E-A-T / answer-ready content | Low | 1 day | Low | Low-Medium | Author (host) bio, visible updated dates, short direct answers at top of guides. |
| 13 | T4 CSP hardening | Low | 2-4 h | Low | High | Remove `unsafe-eval`, use nonces for inline GTM, drop `http:` from `img-src`. |
| 14 | T5 Trailing slash | Low | 10 min | Low | Medium | `"trailingSlash": false` in `vercel.json`. |
| 15 | G1 `llms.txt` / AI bot policy | Low | 30 min | Low | Medium | Decide on an explicit policy; optional short `llms.txt`. |

## Verify (unknowns to resolve)

- Whether `/admin` has `noindex` (robots `Disallow` alone does not deindex).
- Confirm privacy policy link in the footer (L2).
- Lighthouse / CrUX numbers (P2).
- Search Console: coverage, queries, CTR (needed to judge C1 and C2).

## Already fine (no action)

Redirects (apex and http to https www, 308), real 404 status, canonicals, unique titles/descriptions, single H1 per page, sitemap matches indexable routes (44/44, all 200), robots.txt with sitemap reference, security headers (HSTS, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy), JSON-LD valid on all pages that have it, no fake review markup, 0 images without alt.
