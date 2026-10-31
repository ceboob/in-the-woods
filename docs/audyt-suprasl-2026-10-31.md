# Audyt suprasl.online — 2026-10-31

Zakres: bezpieczeństwo, SEO, wydajność, cache, higiena repo. Audyt wykonany w branchu `audyt/2026-10-31` (z `codex/seo-pass-deploy`). Deploy decyzja właściciela.

## Podsumowanie executive

Jakość projektu dobra: RLS zaprojektowane defensywnie, klucze tylko w Edge Functions, prerender działa, sitemap spójna z trasami, realny HTTP 404, redirecty kanoniczne OK. Główne problemy to waga obrazów (naprawione), brak immutable cache dla assetów (naprawione), `.env` w rekach git (naprawione) i CSP w etapach migracji (Etap 1 naprawiony).

## Znajduje + status

### P0 — bezpieczeństwo / integralność

| # | Problem | Status |
|---|---|---|
| 1 | `.env` (klucz anon) śledzony w git — wzorzec ryzykowny (jeden błąd = wyciek `service_role`) | ✅ usunięty z indexu; `.gitignore` uzupełniony; plik na dysku zachowany. Klucz anon jest publiczny by design → czyszczenie historii git niekonieczne. `git push` zrobią rano, ale dalej. |
| 2 | Lockfile drift (audyt 2026-04-14: `npm ci` fail) | ✅ aktualnie `npm ci` + `npm run build` przeszły bez zmian w lockfile — problem już nieaktualny |
| 3 | CSP `unsafe-eval` (Etap 1 planu) | ✅ usunięty z `vercel.json` i CF workera. **Wymagany smoke test produkcyjny po deploy** (formularz + kalendarz + Stripe + GTM). Etap 2 (`unsafe-inline` → nonce/hash): TODO, plan w `docs/csp-migration-plan.md` |
| 4 | Rozjazd CSP/nagłówków worker vs vercel.json (img-src/connect/frame, X-XSS-Protection) | ✅ wyrównany do vercel.json, X-XSS-Protection usunięty (deprecated). Jeśli Cloudflare nie jest w DNS przed Vercel — worker można wyłączyć |

### P1 — wydajność / cache

| # | Problem | Status |
|---|---|---|
| 5 | 32 obrazów ≥1 MB w `public/` (łacznie 54 MB: living-fireplace 3,07 MB, jacuzzi-night 3,03 MB...) | ✅ skompresowane mozjpeg q72 (max 1600px) / AVIF q45 → razem ~2,4 MB (−95%). Oryginały backup: `%TEMP%\opencode\quest-heaven-dominating\img-backup`. Og-image 1,76 MB → 124 KB. WAGO nie widać na stronie — zalążek do podglądu po deploy |
| 6 | Cache-Control `max-age=0` na hashowanych `/assets/*` | ✅ dodana reguła `vercel.json`: `public, max-age=31536000, immutable` dla `/assets/*` |
| 7 | `/images/*` (nie-hashowane) też `max-age=0` | ⏸ NIE zmieniano — bezpieczny wyjątek; Vercel CDN i tak cache'uje (x-vercel-cache HIT). Opcja na przyszłość: po warstwę wersjonowania nazw plików dodać `s-maxage` |

### P2 — higiena

| # | Problem | Status |
|---|---|---|
| 8 | Brak skryptu `typecheck` | ✅ dodany (`tsc -p tsconfig.app.json --noEmit`) — i naprawione 3 pre-existing błędy: `fetchpriority`→`fetchPriority` (React 18 SSR renderuje camel-case; HTML5 case-insensitive → funkcjonalnie identyczne), `FilledContext`→`HelmetServerState` (react-helmet-async v3) |
| 9 | README boilerplate Lovable | ✅ zastąpiony realną dokumentacją (stack, komendy, env, zasada single-source nagłówków) |
| 10 | Lint 21 problemów (pre-existing: `any`, require-imports, useless-escape) | ⏸ nie zmieniano — nie należą do audytu, występują identycznie przed i po |

## Treści (WIP właściciela — z buffetą)

Artykuł `WydarzeniaSupra2026` miał sprzeczne daty Mistrzostw Babki i Kiszki (27–28 czerwca vs 8 sierpnia). Zgodnie z oficjalnym kalendarzem CKiR Supraśl:

- **Czerwiec i lipiec 2026: ZERO wydarzeń** w kalendarzu CKiR — stary wpis czerwcowy usunięty
- **8 sierpnia:** Światowe Mistrzostwa w Pieczeniu Babki i Kiszki (potwierdzone) ✔
- Tabela kalendarza zsynchronizowana: czerwiec „bez imprez", kino letnie 13.08 przeniesione z lipca do sierpnia, wrzesień uzupełniony (Jesień Chopinowska 5.09, wystawa „Strój" 10.09, „Rzeczpospolita Przez Wieki" 11–13.09)
- `readTime` karta (14 min) = meta artykułu ✔; tab w tekście usunięty; dodany link do kalendarza CKiR jako źródła
- Zasada na przyszłość: **daty wydarzeń zawsze z ckirsuprasl.com/kalendarz/**

Werdykt: commit `1b198a7` poprawia WIP; został domknięty przed pracą audytorową.

## Audit live (niezależnie checked, 2026-10-31)

- ⭐ Redirect `suprasl.online` → `www.suprasl.online`: 308 (correct permanent) ✔
- ⭐ Realny HTTP 404 dla nieistniejących ścieżek ✔ (soft-404 z audytu GSC — już naprawiony przez prerender)
- ⭐ `robots.txt`: disallow `/admin`, `/platnosc-sukces`; sitemap podlinkowana ✔
- ⭐ `sitemap.xml`: 42 URL = 42 indexable trasy (`seo:check` 42/42) ✔
- ⭐ Prerender działa: title/meta/canonical/OG/JSON-LD (VacationRental, FAQPage, aggregateRating) dostępne w statycznym HTML ✔
- ⭐ HSTS preload 2 lata, nosniff, Referrer-Policy, Permissions-Policy ✔
- ⚕ Cache assetów: naprawione (patrz #6)
- ⚕ Content length strony głównej 175 KB HTML — spory, ale prerender SSG bez blokowania — OK

## Bezpieczeństwo Supabase (read-only, bez zmian)

- 4 tabele z RLS ON (`booking_inquiries`, `callback_requests`, `rate_limits`, `user_roles`); `has_role()` security definer
- anon: tylko INSERT z walidacją (AND check_out > check_in, regex email/telefon, limit 2000 chars), **brak SELECT anon**
- admin-update tylko przez `has_role(auth.uid(),'admin')` ✔
- Edge Functions: klucze wyłącznie `Deno.env.get` — brak split-klawisza w kodzie ✔
- Ocena: bez wymaganego naprawy

## Weryfikacja wykonana

- `npm ci` ✔ → `npm run build` ✔ (43 prerendered HTML, exit 0)
- `npm run typecheck` ✔ (0 błędów)
- `npm run seo:check` ✔ (42 indexable = 42 sitemap)
- `npm test` ✔ (1/1)
- lint: 21 pre-existing (bez zmian)
- smoke preview: `/`, `/blog/`, `/noclegi-suprasl/` 200 OK, per-route titles ✔
- bundle: dist 90,4 MB → **37,3 MB** (HTML 1,7 MB, JS 1,1 MB bez zmian)

## Co pozostało (rekomendacje)

1. **Deploy + smoke test CSP** (formularz, kalendarz, Stripe, GTM) — przejdzie do Etapu 2 (`unsafe-inline` → nonce/hash) zgodnie z `docs/csp-migration-plan.md`
2. Rozwiązać los worker Cloudflare: jeśli CF nie stoi przed Vercel — usunąć plik z repo
3. Zawartość bundle: JS 1,1 MB nierozbito im; index-page chunk 64,7 kB — OPÓŹNIENIE
4. Ewentualnie: wersjonowanie `/images/*` + `s-maxage`;补 compress miniatur (webp 110 plików / 19,9 MB — thumby, podejrzaDe low-priority)
5. Historia git zawiera `.env` (anon key) — po pośle decyzji można wyespeditować BFG (opcjonalne, niska ważność)

## Commity (branch audyt/2026-10-31)

1. `1b198a7` — fix: align Suprasl 2026 event dates with official CKiR calendar (WIP ropa)
2. `d6428b2` — chore: audit fixes (env hygiene, obrazy, CSP Etap 1, cache, typecheck)
3. `edec335` — chore: remove .env from git tracking
