# Plan migracji CSP — usunięcie `unsafe-eval` i `unsafe-inline`

Data: 2026-04-14

## Stan obecny

Polityka CSP (jedyne źródło: `vercel.json` → nagłówek HTTP):

```
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
```

**Problemy:**
- `'unsafe-eval'` pozwala na `eval()`, `new Function()`, `setTimeout("string")` — duże ryzyko XSS.
- `'unsafe-inline'` pozwala na inline `<script>` i `onclick` — zmniejsza ochronę CSP.

---

## Etap 1: Usunięcie `unsafe-eval` (priorytet najwyższy)

**Ryzyko:** Niskie — Vite production build nie używa `eval()`. Jedyne potencjalne źródła:
- Stripe.js — ładowany z `https://js.stripe.com` (osobna domena, nie wymaga `unsafe-eval`)
- GTM/GA — ładowane z osobnych domen
- Cloudflare Insights — osobna domena

**Kroki:**
1. Usuń `'unsafe-eval'` z `script-src` w `vercel.json`
2. Deploy na staging/preview
3. Przetestuj:
   - [ ] Strona główna ładuje się poprawnie
   - [ ] Formularz rezerwacyjny działa (submit + walidacja)
   - [ ] Kalendarz dostępności się wyświetla
   - [ ] GTM/GA wysyłają eventy (sprawdź w Network tab)
   - [ ] Stripe checkout (jeśli dostępny) działa
4. Sprawdź konsolę pod kątem `Refused to evaluate` / `EvalError`
5. Jeśli OK → deploy na produkcję

**Szacowane ryzyko regresji:** Bardzo niskie.

---

## Etap 2: Migracja `unsafe-inline` (scripts) na hash/nonce

**Ryzyko:** Średnie — wymaga zmian w sposobie osadzania skryptów.

**Źródła inline scripts w projekcie:**
- `index.html` → dwa bloki `<script type="application/ld+json">` (JSON-LD nie jest wykonywany, ale CSP może to blokować w niektórych przeglądarkach)
- Vite wstrzykuje inline script do ładowania modułów

**Opcje:**

### Opcja A: Nonce (zalecana dla Vercel Edge Middleware)
- Wymaga Vercel Edge Middleware do generowania losowego nonce per request
- Nonce wstrzykiwany do nagłówka CSP i do tagów `<script>`
- **Wada:** wymaga Edge Middleware (dodatkowa warstwa)

### Opcja B: Hash (prostsza, ale krucha)
- Oblicz SHA-256 hash każdego inline script
- Dodaj `'sha256-XXXX'` do `script-src`
- **Wada:** każda zmiana treści skryptu wymaga aktualizacji hasha

### Opcja C: Ekstrakcja do plików zewnętrznych
- Przenieś inline JSON-LD do pliku `.js` ładowanego przez `<script src="...">`
- Vite module script już jest external (`/src/main.tsx`)
- **Wada:** JSON-LD w osobnym pliku jest niestandardowe

**Rekomendacja:** Etap 2 wdrożyć dopiero po potwierdzeniu, że Etap 1 działa stabilnie na produkcji przez min. 2 tygodnie.

---

## Etap 3: Zaostrzenie `style-src` (najniższy priorytet)

**Stan:** `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`

**Problem:** Tailwind CSS i shadcn generują inline styles (np. `style={{ ... }}`). Usunięcie `unsafe-inline` ze `style-src` wymaga:
- Przeniesienia wszystkich inline stylów do klas CSS
- Lub użycia nonce/hash dla stylów

**Rekomendacja:** Odłożyć — ryzyko regresji jest wysokie, a korzyść bezpieczeństwa mniejsza niż w script-src.

---

## Harmonogram

| Etap | Co | Kiedy | Ryzyko |
|------|-----|-------|--------|
| 1 | Usunięcie `unsafe-eval` | Natychmiast | Bardzo niskie |
| 2 | Migracja `unsafe-inline` (scripts) | Po 2 tyg. stabilności Etapu 1 | Średnie |
| 3 | Zaostrzenie `style-src` | Opcjonalnie, Q3 2026 | Wysokie |

## Walidacja po każdym etapie

1. Lighthouse → Security audit
2. [CSP Evaluator](https://csp-evaluator.withgoogle.com/) → analiza polityki
3. Konsola przeglądarki → brak `Refused to execute` / `Refused to evaluate`
4. Formularz rezerwacyjny → pełny flow
5. Stripe → generowanie linka płatności (admin panel)
