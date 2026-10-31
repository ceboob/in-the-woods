# In The Woods — suprasl.online

Strona noclegowa (dom na wyłączność w Konne koło Supraśla) produkowana lokalnie i deployowana na Vercel.

## Stack

- Vite 5 + React 18 + TypeScript + Tailwind + shadcn/Radix
- Supabase (formularze zapytań, admin) + Stripe (Edge Functions do zaliczek)
- SPA + SSG: build prerenderuje 42 publiczne trasy (admin/404 wyłączone) → poprawne title/meta/JSON-LD w HTML

## Komendy

```sh
npm ci               # instalacja ściśle wg package-lock.json
npm run dev          # dev server
npm run build        # sitemap:generate → vite build ×2 → prerender (42 strony)
npm run typecheck    # tsc --noEmit (musi przechodzić)
npm run lint         # eslint (pozostałe problemy są pre-existing)
npm test             # vitest
npm run seo:check    # walidacja: trasy React vs sitemap vs robots vs noindex
```

## Środowisko i klucze

- `.env` jest **w `.gitignore`** i NIE może trafiać do repo (w historii był `.env` z kluczem anon/publishable — publicznym by design, ale nie wolno tam wrzucać `service_role`)
- Klucze produkcyjne (Stripe, service role) żyją tylko w Edge Functions przez `Deno.env.get` — deploy przez Supabase CLI (`supabase functions deploy`)
- Frontend: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID`

## Security headers — single source of truth

Zasada: **`vercel.json` jest jedynym źródłem nagłówków (CSP itd.)**.

- Plik `cloudflare-worker-security-headers.js` istnieje jako fallback workersowy — każda zmiana CSP/nagłówków musi być robiona w **obu plikach jednocześnie** (lub workera usunąć, jeśli Cloudflare nie jest w DNS przed Vercellem)
- Po zmianie CSP uruchom smoke test (build + preview + formularz rezerwacji + kalendarz + GTM) — plan migracji: `docs/csp-migration-plan.md`

## Deploy

Vercel (domena `suprasl.online` → redirect 308 na `www.suprasl.online`). Deploy robi ręcznie właściciel; audyty SEO/security: `docs/`.

## Uwagi treściowe

Daty wydarzeń publikowanych w blogu pobieramy z oficjalnego kalendarza CKiR Supraśl: <https://ckirsuprasl.com/kalendarz/> (sekcja „Poprzedni/Następny" = archiwum).
