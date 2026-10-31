# GitHub SEO Report: ceboob/in-the-woods

Data collected on 2026-10-11 with `gh repo view`, `gh api .../community/profile`, `gh release list`, and a read of `README.md` and the repo tree.

Context: this is the source of a private-business website (holiday house near Suprasl, https://www.suprasl.online), not an open-source library. GitHub search ranking matters little for its goals. The main risks are accidental exposure and a misleading public face, not discoverability.

## Snapshot

| Signal | Value |
|---|---|
| Name | `in-the-woods` |
| Description | empty |
| Topics | none |
| Homepage URL | `https://ceboob.github.io/in-the-woods/` (returns HTTP 200) |
| License | none |
| Stars | 0 |
| Releases | none |
| Community health | 14% |
| Social preview | not custom (auto-generated) |
| Wiki | disabled; Issues enabled |
| Primary language | JavaScript (GitHub's label; the code is mostly TypeScript/React) |

## Findings

### 1. Empty About description
- Evidence: `description: ""`.
- Impact: GitHub search and link previews show nothing; weak first impression.
- Fix: set the description below.
- Severity: Medium. Confidence: High.

### 2. No topics
- Evidence: `repositoryTopics: null`.
- Impact: not found in topic browsing or topic-filtered search.
- Fix: add the topics below.
- Severity: Medium. Confidence: High.

### 3. Homepage URL points to GitHub Pages, not the real site
- Evidence: `homepageUrl` is `ceboob.github.io/in-the-woods/` (HTTP 200), while the production site is `https://www.suprasl.online`. Vercel serves production.
- Impact: two public copies of the site could create duplicate-content and canonical confusion, and the About link sends people to the non-canonical one. Whether the Pages build sets canonicals to `www.suprasl.online` was not verified.
- Fix: set homepage to `https://www.suprasl.online`. Check what the Pages URL serves; disable Pages if it is not intended.
- Severity: Medium. Confidence: Medium (content of the Pages copy not inspected).

### 4. README is the unmodified Lovable template
- Evidence: title "Welcome to your Lovable project", `REPLACE_WITH_PROJECT_ID` placeholders in 2 links, `<YOUR_GIT_URL>`, generic Lovable deploy and domain sections. Only the "SEO maintenance commands" part is project-specific.
- Impact: poor README quality; broken placeholder links; no description of what the project is.
- Fix: rewrite README (see action plan): purpose, live URL, stack, setup, scripts, structure, deploy notes.
- Severity: High (for repo quality). Confidence: High.

### 5. Install and run clarity
- Evidence: README says `npm i`, but the repo contains `package-lock.json`, `bun.lock` and `bun.lockb`. `npm ci` fails in this worktree because the lockfile is out of sync (seen earlier in this session). Node version is not stated. No `.env.example` was seen; a `.env` file exists in the working tree (see finding 9).
- Impact: new contributors may hit install errors or not know which env vars are required.
- Fix: pick one package manager, regenerate its lockfile, add `engines`/`.nvmrc`, document env variables in `.env.example`.
- Severity: Medium. Confidence: High for the lockfile mismatch.

### 6. No screenshots or examples
- Evidence: README has no images. 
- Impact: visitors cannot see the result without opening the site.
- Fix: add one desktop and one mobile screenshot.
- Severity: Low. Confidence: High.

### 7. No releases or tags
- Evidence: `gh release list` is empty.
- Impact: low for a website; no changelog or versioning.
- Fix: optional. Not recommended unless the repo is shared as a template.
- Severity: Low. Confidence: High.

### 8. Community health files missing
- Evidence: health percentage 14%; `.github/` has no files; no LICENSE, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, issue or PR templates.
- Impact: unclear reuse rights (no license means all rights reserved) and no security reporting path.
- Fix: add SECURITY.md at minimum. Add a LICENSE only if you want to allow reuse; this is the owner's decision. For a business site, "all rights reserved" may be intended.
- Severity: Low to Medium. Confidence: High.

### 9. Possible secrets / private data exposure (verify)
- Evidence: a `.env` file exists in the worktree root; it is not listed as tracked by this check, and `.gitignore` handling was not verified here. `cloudflare-worker-security-headers.js` and `supabase/` are in the repo.
- Impact: if `.env` is tracked or was ever committed, keys could leak. Supabase anon keys are public by design, service keys are not.
- Fix: run `git ls-files .env` and `git log --all -- .env`; rotate anything sensitive found.
- Severity: Unknown until checked. Confidence: Low (not verified).

### 10. Clutter at repo root
- Evidence: `FULL-AUDIT-REPORT.md`, `ACTION-PLAN.md`, `VERCEL_DEPLOYMENT_AUDIT.md`, `bun.lock` plus `bun.lockb`, `.lovable`, and `.ssr` are at the root.
- Impact: noisy first view of the repo.
- Fix: move reports to `docs/`; keep one lockfile.
- Severity: Low. Confidence: High.

### 11. Docs site
- Evidence: no docs site separate from the website. `docs/` has five internal SEO/CSP markdown notes (in Polish).
- Impact: none needed.
- Fix: none; link `docs/` from the README.
- Severity: Low. Confidence: High.

### 12. Social preview
- Evidence: `usesCustomOpenGraphImage: false`.
- Impact: shares of the repo use GitHub's generic card.
- Fix: upload a 1280x640 image (e.g. a cropped site hero photo).
- Severity: Low. Confidence: High.

### 13. Competitor positioning
- Not performed. The request left the competitor placeholders (`<competitor-repo-1>`, `<competitor-repo-2>`) unfilled. Comparable open-source repos are in any case rare for a single-property booking site; supply two repo names to compare.

## Unknowns
- Repo traffic, clones and search referrers (needs Insights access; not available via this check).
- Whether `.env` or secrets were ever committed (finding 9).
- Whether the GitHub Pages copy is intentional and how it is canonicalised.
- Actual GitHub search ranking for any query (no stable measurement method; not claimed).

## Recommended About description

Source code of the In The Woods holiday-house website (Suprasl, Poland): React, Vite, TypeScript and Tailwind, with prerendering and Supabase.

(Under 350 characters. Edit if the repo should not advertise the business.)

## Recommended topics

`react`, `vite`, `typescript`, `tailwindcss`, `shadcn-ui`, `supabase`, `vercel`, `seo`, `prerendering`, `vacation-rental`, `website`, `poland`

Set with:
```sh
gh repo edit ceboob/in-the-woods --description "..." --homepage "https://www.suprasl.online" --add-topic react --add-topic vite
```
