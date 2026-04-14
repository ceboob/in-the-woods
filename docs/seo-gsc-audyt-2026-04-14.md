# Audyt SEO + diagnoza GSC (2026-04-14)

## Zakres
- Przegląd techniczny indeksowania (robots, sitemap, canonicale, statusy).
- Przegląd kodu aplikacji SPA pod kątem ryzyk dla Google Search Console.
- Szybki audyt jakości implementacji SEO (meta, JSON-LD, routingi, strony techniczne).

## Najważniejsze ryzyka dla indeksowania w GSC

1. **Aplikacja jest SPA renderowana po stronie klienta (CSR)**  
   Bot Google potrafi renderować JS, ale przy ograniczonym budżecie renderowania część URL-i może być opóźniona, uznana za „Odkryto — obecnie niezindeksowano" albo „Przeskanowano — obecnie niezindeksowano".

2. **Brak prawdziwego statusu HTTP 404 dla nieistniejących adresów**  
   W SPA każdy URL bywa zwracany jako `200` + `index.html`, a dopiero frontend pokazuje widok 404. To klasyczna przyczyna „Soft 404" w GSC.

3. **Publicznie dostępne adresy panelu administracyjnego bez `noindex`**  
   `/admin` i `/admin/login` nie były w sitemapie, ale mogły być odkrywane z linków, historii crawl lub brute-force i zużywać crawl budget.

4. **Błędny preload obrazu w `index.html`**  
   Wstępnie ładowany był zasób z nieistniejącej ścieżki (`/src/assets/...`). To nie blokuje indeksacji bezpośrednio, ale pogarsza sygnały jakości/performance (np. LCP), które wpływają pośrednio na SEO.

## Zmiany wykonane w tym commicie

1. **Naprawa preload hero image**  
   Zmieniono preload na istniejący plik `/images/hero-cabin.jpg`.

2. **`noindex` dla panelu admina (`/admin/login`)**
   Dodano `SEOHead` z `noindex` i canonical.

3. **`noindex` dla panelu admina (`/admin`)**
   Dodano `SEOHead` z `noindex` i canonical.

4. **`noindex` dla strony 404 (frontend fallback)**
   Dodano `SEOHead` z `noindex` oraz canonical zależny od ścieżki, aby ograniczyć indeksację błędnych URL-i.

## Dalsze zalecenia (priorytet)

### P0 (krytyczne)
- Wdrożyć **SSR/SSG lub prerender** dla kluczowych landing pages i artykułów bloga.  
  Największa poprawa skuteczności indeksowania dla obecnej architektury SPA.
- Na edge/hostingu ustawić dla nieistniejących URL-i **realny status 404** (nie tylko widok w React).

### P1 (wysoki)
- Dodać mechanizm automatycznej generacji `sitemap.xml` i `lastmod` przy deployu, aby uniknąć ręcznych rozjazdów.
- Rozważyć rozbicie sitemap:
  - `/sitemap-pages.xml`
  - `/sitemap-blog.xml`
  - indeks `/sitemap.xml`

### P2 (średni)
- Uzupełnić monitoring: regularny eksport z GSC (Coverage + Page indexing + Crawled/Discovered stats) i korelacja z logami.
- Dodać test CI sprawdzający spójność:
  - route'y React vs wpisy w sitemapie,
  - presence `noindex` dla stron technicznych.

## Checklista walidacji po wdrożeniu
- GSC → „Sprawdzenie URL" dla:
  - strony głównej,
  - 1 podstrony ofertowej,
  - 1 artykułu blogowego,
  - losowego błędnego URL.
- Potwierdzić:
  - canonical poprawny i samo-referencyjny,
  - brak blokad robots,
  - prawidłowy status HTTP (200 dla istniejących, 404 dla błędnych),
  - render HTML zawiera kluczowe treści i nagłówki.
