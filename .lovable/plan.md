
## Plan: Naprawa Schema.org images, hreflang, unikalne ogImage per landing page

### Analiza stanu

**Schema.org image URLs**: Pliki w `public/images/` JUŻ ISTNIEJĄ — schema URLs (`/images/jacuzzi-night.jpg`, `/images/exterior-main.jpg` itd.) są poprawne. Nie wymagają naprawy.

**og-image.jpg**: Plik `public/og-image.jpg` istnieje. Wymaga weryfikacji wizualnej po publikacji (poza zakresem kodu).

**hreflang chatpuszczy.pl**: Linia 14 w `index.html` zawiera `<link rel="alternate" hreflang="pl" href="https://chatpuszczy.pl/" />` — dwa hreflang z tym samym `pl` to błąd. Należy usunąć lub zmienić na `x-default`.

**Unikalne ogImage per landing page**: Obecnie `SEOPageLayout` nie przekazuje `ogImage` do `SEOHead`, więc wszystkie landing pages używają domyślnego `og-image.jpg`. Trzeba dodać prop `ogImage` do `SEOPageLayout` i przekazać unikalne obrazy z `public/images/` dla każdej strony.

**BlogArticleLayout**: Nie używa `SEOHead` — ręcznie ustawia meta tagi. Brak og:image per artykuł.

---

### Zmiany do wdrożenia

**1. index.html — napraw hreflang (linia 14)**
- Zamienić drugi hreflang `pl` na `x-default` wskazujący na `https://chatpuszczy.pl/`, co informuje Google że chatpuszczy.pl to alternatywna domena domyślna
- Alternatywnie: usunąć tę linię całkowicie jeśli chatpuszczy.pl nie ma wzajemnego hreflang

**2. SEOPageLayout.tsx — dodaj prop ogImage**
- Dodać opcjonalny prop `ogImage?: string` do interfejsu
- Przekazać go do `<SEOHead ogImage={ogImage} />`

**3. Każda landing page — unikalne ogImage**
Mapowanie stron na obrazy z `public/images/`:

| Strona | ogImage |
|---|---|
| NoclegiSuprasl | `/images/exterior-main.jpg` |
| DomekSuprasl | `/images/living-fireplace.jpg` |
| DomekZJacuzziPodlasie | `/images/jacuzzi-night.jpg` |
| DomWLesieSuprasl | `/images/hero-cabin.jpg` |
| WeekendSuprasl | `/images/terrace-breakfast.jpg` |
| WieczorPanienskiSuprasl | `/images/kitchen-dining.jpg` |
| AtrakcjeSuprasl | `/images/terrace-porch.jpg` |
| PuszczaKnyszynskaNocleg | `/images/winter-cabin-golden.jpg` |

Każda strona dostanie prop: `ogImage="https://www.suprasl.online/images/exterior-main.jpg"`

**4. BlogArticleLayout.tsx — dodaj ogImage**
- Dodać prop `ogImage?: string` do interfejsu
- Wstawić `<meta property="og:image">` i `<meta name="twitter:image">` w sekcji Helmet
- Domyślnie: `https://www.suprasl.online/og-image.jpg`

**5. Każdy artykuł blogowy — unikalne ogImage**
Artykuły blogowe importują już hero images z `src/assets/`. Te assety mają zahashowane URL-e po buildzie, więc dla og:image lepiej użyć odpowiedników z `public/images/` lub dodać brakujące pliki.
- Alternatywnie: pominąć i zostawić domyślny og-image.jpg (prostsze, bo blog nie ma odpowiedników w public/images/)

### Pliki do edycji
- `index.html` (1 linia — hreflang)
- `src/components/SEOPageLayout.tsx` (dodanie ogImage prop)
- `src/components/BlogArticleLayout.tsx` (dodanie og:image meta)
- 8 plików landing pages (dodanie ogImage prop)

### Poza zakresem kodu (instrukcje dla użytkownika)
- Weryfikacja og-image.jpg wizualnie
- Zgłoszenie URL-i www w GSC
- Core Web Vitals, prerender/SSR — osobne zadania
