# Vercel Deployment Risk Audit

Date: 2026-04-14

## Scope
- Static Vite + React deployment configuration
- Routing/rewrites/headers in `vercel.json`
- Runtime/environment coupling (Supabase/Stripe)
- Build reproducibility

## High-risk findings

### 1) Build is currently not reproducible in CI due to lockfile drift
**Evidence**
- `npm ci` fails because `package.json` and `package-lock.json` are out of sync.
- `npm run build` failed before dependencies were installed (`vite: not found`).

**Why this matters on Vercel**
- Vercel installs dependencies non-interactively; lockfile drift can produce failed builds or non-deterministic dependency resolution.

**Recommendation**
1. Align `package-lock.json` with `package.json` locally (`npm install` with the intended npm version).
2. Commit updated lockfile.
3. Re-run CI with `npm ci && npm run build`.

---

### 2) CSP is duplicated in two places and likely to drift
**Evidence**
- CSP meta tag in `index.html`.
- CSP response header in `vercel.json`.
- The two values are not identical (`vercel.json` includes `upgrade-insecure-requests`, while the HTML meta CSP does not).

**Why this matters on Vercel**
- Divergent CSP definitions make production behavior harder to reason about.
- Future edits can unintentionally weaken policy in one layer while appearing secure in the other.

**Recommendation**
- Keep a single source of truth for CSP (prefer HTTP header in `vercel.json`) and remove meta CSP from `index.html`.

---

### 3) CSP is permissive for scripts (`unsafe-inline` and `unsafe-eval`)
**Evidence**
- Both CSP definitions allow `'unsafe-inline'` and `'unsafe-eval'` in `script-src`.

**Why this matters on Vercel**
- Broad script allowances reduce XSS protection and increase impact of content injection bugs.

**Recommendation**
- Move toward nonce/hash-based scripts and remove `unsafe-eval` first (highest value), then reduce/remove `unsafe-inline` as possible.

## Medium-risk findings

### 4) Potentially broken preload path in production build
**Evidence**
- `index.html` preloads `/src/assets/exterior-main.webp`.
- In Vite production builds, source assets are fingerprinted/relocated to `/assets/...` unless explicitly in `public/`.

**Why this matters on Vercel**
- Preload may 404 in production, wasting bandwidth and missing intended LCP optimization.

**Recommendation**
- Reference a public asset path (e.g., `/images/...`) or import the asset in application code so Vite rewrites it safely.

---

### 5) Legacy/deprecated browser header present
**Evidence**
- `X-XSS-Protection: 1; mode=block` set in `vercel.json`.

**Why this matters on Vercel**
- Modern browsers ignore/deprecate it; maintaining dead headers adds noise and can mislead about actual protections.

**Recommendation**
- Remove `X-XSS-Protection`; rely on CSP + modern browser defaults.

## Low-risk / operational findings

### 6) Rewrite catch-all is acceptable for SPA but requires asset/file awareness
**Evidence**
- `rewrites` maps `/(.*)` to `/index.html`.

**Why this matters on Vercel**
- This is normal for SPA routing, but teams should ensure static file behavior remains as intended when adding routes/files.

**Recommendation**
- Keep as-is, but regression-test direct hits to known files (`/robots.txt`, `/sitemap.xml`, `/site.webmanifest`) after config changes.

---

### 7) Supabase Edge Functions in repo are not deployed by Vercel
**Evidence**
- `supabase/functions/*` contains Deno functions relying on Supabase secrets.

**Why this matters on Vercel**
- These are deployed/executed in Supabase, not Vercel. Operational confusion can lead to misconfigured secrets or mistaken incident ownership.

**Recommendation**
- Document deployment boundaries clearly (frontend on Vercel, backend functions on Supabase) and maintain environment variable mapping in ops docs.

## Suggested hardening checklist
1. Fix lockfile drift and validate with `npm ci && npm run build`.
2. Consolidate CSP to header-only policy in `vercel.json`.
3. Remove `unsafe-eval` and reduce `unsafe-inline` over staged releases.
4. Fix preload URL to a production-safe asset reference.
5. Remove deprecated `X-XSS-Protection` header.
6. Add a short `DEPLOYMENT.md` clarifying Vercel vs Supabase runtime responsibilities.
