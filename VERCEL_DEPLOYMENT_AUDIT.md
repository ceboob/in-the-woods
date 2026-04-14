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

**Status: ⚠️ open** — lockfile sync must be done locally by the developer.

---

### 2) ~~CSP is duplicated in two places and likely to drift~~ ✅ FIXED
**Resolution**: Removed CSP meta tag from `index.html`. Single source of truth is now the HTTP header in `vercel.json`.

---

### 3) CSP is permissive for scripts (`unsafe-inline` and `unsafe-eval`)
**Evidence**
- CSP allows `'unsafe-inline'` and `'unsafe-eval'` in `script-src`.

**Why this matters on Vercel**
- Broad script allowances reduce XSS protection and increase impact of content injection bugs.

**Recommendation**
- Move toward nonce/hash-based scripts and remove `unsafe-eval` first (highest value), then reduce/remove `unsafe-inline` as possible.

**Status: ⚠️ open** — requires staged rollout.

## Medium-risk findings

### 4) ~~Potentially broken preload path in production build~~ ✅ FIXED
**Resolution**: Preload changed to `/images/hero-cabin.jpg` (in previous commit).

---

### 5) ~~Legacy/deprecated browser header present~~ ✅ FIXED
**Resolution**: Removed `X-XSS-Protection` header from `vercel.json`.

## Low-risk / operational findings

### 6) Rewrite catch-all is acceptable for SPA but requires asset/file awareness
- Keep as-is, but regression-test direct hits to known files (`/robots.txt`, `/sitemap.xml`, `/site.webmanifest`) after config changes.

### 7) Supabase Edge Functions in repo are not deployed by Vercel
- These are deployed/executed in Supabase, not Vercel. Document deployment boundaries clearly.

## Suggested hardening checklist
1. ✅ ~~Consolidate CSP to header-only policy in `vercel.json`~~
2. ✅ ~~Fix preload URL to a production-safe asset reference~~
3. ✅ ~~Remove deprecated `X-XSS-Protection` header~~
4. ⚠️ Fix lockfile drift and validate with `npm ci && npm run build`
5. ⚠️ Remove `unsafe-eval` and reduce `unsafe-inline` over staged releases
6. ℹ️ Add a short `DEPLOYMENT.md` clarifying Vercel vs Supabase runtime responsibilities
