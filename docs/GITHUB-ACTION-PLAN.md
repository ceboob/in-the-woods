# GitHub Action Plan: ceboob/in-the-woods

Sorted by priority. Impact / Effort / Confidence labels per item. Refer to numbered findings in `GITHUB-SEO-REPORT.md`.

| # | Action | Impact | Effort | Confidence |
|---|---|---|---|---|
| 1 | Verify no secrets in git history: `git ls-files .env`, `git log --all -- .env`; rotate if found (finding 9) | High if a leak exists | Low | Low (unverified) |
| 2 | Rewrite README: purpose, live URL, screenshots, stack, requirements (Node version), setup, scripts (`dev`, `build`, `test`, `seo:check`), env variables, deploy to Vercel, link to `docs/` (findings 4, 5, 6) | High | Medium | High |
| 3 | Set About description (see report), homepage `https://www.suprasl.online` (findings 1, 3) | Medium | Low | High |
| 4 | Add topics (finding 2) | Medium | Low | High |
| 5 | Check the GitHub Pages copy; disable Pages or make its canonical point to `www.suprasl.online` (finding 3) | Medium | Low | Medium |
| 6 | Pick one package manager; remove the other lockfiles; regenerate lockfile so `npm ci` works; add `.nvmrc` and `.env.example` (finding 5) | Medium | Low | High |
| 7 | Add `SECURITY.md` (finding 8) | Low-Medium | Low | High |
| 8 | Decide on license; add `LICENSE` only if reuse is wanted (finding 8) | Low-Medium | Low | High |
| 9 | Upload social preview image 1280x640 (finding 12) | Low | Low | High |
| 10 | Move audit reports from root into `docs/` (finding 10) | Low | Low | High |
| 11 | Provide two competitor repos and rerun comparison (finding 13) | Low | Medium | Low |
| 12 | Releases/tags: skip unless the repo becomes a template (finding 7) | Low | Low | High |

Quick commands for items 3 and 4:

```sh
gh repo edit ceboob/in-the-woods \
  --description "Source code of the In The Woods holiday-house website (Suprasl, Poland): React, Vite, TypeScript and Tailwind, with prerendering and Supabase." \
  --homepage "https://www.suprasl.online" \
  --add-topic react --add-topic vite --add-topic typescript --add-topic tailwindcss \
  --add-topic shadcn-ui --add-topic supabase --add-topic vercel --add-topic seo \
  --add-topic prerendering --add-topic vacation-rental --add-topic website --add-topic poland
```

None of these changes have been applied; the repo settings were only read.

## Status (2026-10-11)

Applied: About description, homepage, 12 topics, GitHub Pages disabled (it served unbuilt source with no canonical), README rewritten, .env.example, .nvmrc, SECURITY.md, reports moved to docs/.
Not applied: LICENSE (owner decision), lockfile cleanup (Vercel may depend on bun.lockb), social preview image (UI upload only), competitor comparison (no repos given).
Note: .env is tracked and in history, but holds only VITE_SUPABASE_* public client values (URL, publishable key, project id), not secrets.
