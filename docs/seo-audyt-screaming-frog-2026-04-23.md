# Audyt SEO i wdrożone poprawki (Screaming Frog) — 2026-04-23

## Zakres
- Analiza raportów CSV z folderu Google Drive (Screaming Frog + PageSpeed).
- Wdrożenie poprawek on-site w kodzie aplikacji.

## Najważniejsze poprawki wdrożone
1. **Naprawa niedziałającego linku 404 (external 4xx)**
   - Zmieniono link do „Interaktywnego przewodnika po domu” z `https://utn.pl/i-tw` na działający dokument Google Drive.

2. **Skrócenie zbyt długich tytułów i nagłówków H1/H2**
   - Skrócono H1 na landingach:
     - `/wieczor-panienski-suprasl`
     - `/domek-suprasl`
     - `/domek-z-jacuzzi-podlasie`
   - Skrócono najdłuższe H2 na blogu (m.in. strony o aktywnym wypoczynku, wydarzeniach, szlakach, bioróżnorodności, uzdrowisku, kulinariach, weekendzie i historiach Puszczy).

3. **Skrócenie meta description (przekroczenia 155 znaków / 985 px)**
   - Skrócono opisy meta na stronach:
     - `/galeria`, `/dom`, `/puszcza-knyszynska-nocleg`, `/dom-w-lesie-suprasl`
     - blog: `kruszyniany-tatarska-wies`, `co-robic-suprasl`, `puszcza-knyszynska-przewodnik`, `puszcza-knyszynska-historie`, `aktywny-wypoczynek-suprasl`, `romantyczny-weekend-podlasie`, `supraski-system-wodny`.

4. **Usunięcie źródła dodatkowych warningów security/header**
   - Usunięto komponent `@vercel/speed-insights/react` z aplikacji (mniej dodatkowego JS i brak skanowania zewnętrznego skryptu `_vercel/speed-insights/script.js` bez pełnego zestawu nagłówków bezpieczeństwa).

5. **Skrócenie zbyt długiego ALT obrazu**
   - Skrócono ALT w sekcji jacuzzi (przekroczenie >100 znaków).

6. **Dodatkowa optymalizacja title pod unikalność**
   - Zmieniono `metaTitle` na stronach, gdzie tytuł był identyczny z H1.

## Wynik walidacji po zmianach
- `npm run build` ✅
- `npm run seo:check` ✅
- `npm run test` ✅

## Obszary do dalszej optymalizacji (kolejny etap)
1. **Duże obrazy (100KB+) i wysoki ślad CO2**
   - W raporcie nadal widoczne ciężkie obrazy (>100KB, część >300KB).
   - Rekomendacja: batch-konwersja kluczowych JPG do AVIF/WebP i dodatkowe warianty responsywne.

2. **Readability (Hard/Very Hard)**
   - Część artykułów ma trudniejszy styl językowy.
   - Rekomendacja: redakcja językowa pod krótsze zdania i prostsze frazy (bez utraty eksperckości).

3. **Unused JS/CSS (PageSpeed)**
   - Rekomendacja: dalsza segmentacja kodu, lazy loading sekcji poniżej folda i redukcja bibliotek pomocniczych.
