

# Plan: Kompleksowa przebudowa SEO, nawigacji i treści suprasl.online

## Podsumowanie

Przekształcenie portalu suprasl.online z landing page'u obiektu noclegowego w wiodący portal turystyczny regionu Supraśla i Puszczy Knyszyńskiej, obejmujące optymalizację SEO on-page, rozbudowę nawigacji o kategorie i filtry, nowe artykuły blogowe oraz zmianę tonu narracji na premium/storytelling.

---

## Część 1: SEO On-Page i Meta Tagi

### 1.1 Strona Główna (Index.tsx)
- Zmiana meta title na: **"Supraśl i Puszcza Knyszyńska: Noclegi, Atrakcje | Domki, Agroturystyka"**
- Zmiana meta description na: **"Odkryj magiczne Podlasie! Znajdź idealny nocleg w sercu Puszczy Knyszyńskiej – od luksusowych domków z balią i sauną po klimatyczne agroturystyki. Zaplanuj swój urlop w Supraślu!"**
- Aktualizacja H1 w HeroSection na: **"Odkryj serce Podlasia: Supraśl i Puszcza Knyszyńska"**
- Dodanie semantycznych H2 w sekcjach: "Unikalne noclegi, które pokochasz", "Zaplanuj swój pobyt: Atrakcje Puszczy Knyszyńskiej", "Pomysły na weekend: Relaks, Przygoda, Smaki Podlasia"

### 1.2 Optymalizacja istniejących podstron
- **DomWLesieSuprasl**: Title -> "Domki w lesie Podlasie i Puszcza Knyszyńska | Wynajem na odludziu"
- **DomekZJacuzziPodlasie**: Title -> "Noclegi z Balią i Sauną Podlasie | Luksusowy wypoczynek"
- **WeekendSuprasl**, **NoclegiSuprasl**, **AtrakcjeSuprasl**: analogiczne aktualizacje meta tagów z frazami long-tail
- Aktualizacja JSON-LD na stronie głównej (sameAs — usunięcie referencji do konkurencji)

### 1.3 Nowe podstrony kategorii
- **/noclegi-z-balia-sauna** — landing page dla frazy "noclegi z balią i sauną Podlasie"
- **/domki-w-lesie-podlasie** — landing page dla frazy "domki w lesie Podlasie"

---

## Część 2: Rozbudowa Nawigacji

### 2.1 Navbar — nowe kategorie
Rozbudowa menu o dropdown/mega menu z kategoriami:
- **Noclegi** (dropdown): Dom w lesie, Domek z jacuzzi, Noclegi Supraśl
- **Atrakcje** (dropdown): Co zobaczyć, Szlaki, Restauracje
- **Pomysły na pobyt**: Romantyczny weekend, Z psem, Dla rodzin, Wieczór panieński, Workation
- **Przewodnik** (link do bloga)
- **Kontakt**

### 2.2 Filtry wizualne (BadgesBar)
Rozbudowa BadgesBar o nowe ikony/filtry: "Z balią/jacuzzi", "Z sauną", "Z kominkiem", "Z ogniskiem", "Pet Friendly" — linkujące do odpowiednich sekcji/podstron.

---

## Część 3: Nowe artykuły blogowe

Stworzenie 6 nowych artykułów odpowiadających na zapytania long-tail:

1. **"/blog/romantyczny-weekend-podlasie"** — "Pomysł na romantyczny weekend we dwoje na Podlasiu: Domek z kominkiem i balią"
2. **"/blog/cyfrowy-detoks-las"** — "Cyfrowy detoks w praktyce: Dlaczego domek w środku lasu to najlepsze miejsce na reset?"
3. **"/blog/grzybobranie-puszcza-knyszynska"** — "Jesienne grzybobranie w Puszczy Knyszyńskiej – przewodnik"
4. **"/blog/workation-podlasie"** — "Workation na Podlasiu: Połącz pracę zdalną z odpoczynkiem"
5. **"/blog/podlasie-z-psem"** — "Podlasie z psem – gdzie szukać noclegu i na co zwrócić uwagę?"
6. **"/blog/kraina-otwartych-okiennic"** — "Kraina Otwartych Okiennic: Magiczna podróż w czasie na Podlasiu"

Każdy artykuł: SEOHead z unikalnymi meta tagami, JSON-LD Article, BlogArticleLayout, linkowanie wewnętrzne, RelatedPages.

---

## Część 4: Storytelling i narracja premium

### 4.1 Zmiana tonu komunikacji
- Aktualizacja tekstów w sekcjach HeroWelcome, AboutSection, RelaxSection, CTASection na język emocjonalny i malowniczy: "szepty puszczy", "ostoja spokoju", "zanurz się w naturze", "luksus w sercu lasu"
- Zastąpienie suchych opisów narracyjnymi historiami z perspektywy gościa

### 4.2 System wizualnego wyróżniania udogodnień
- Stworzenie komponentu `AmenityBadge` z ikonkami: Balia, Sauna, Pet Friendly, Kominek, Ognisko, WiFi
- Zastosowanie go na kartach w ForWhoSection, AmenitiesSection i stronach kategorii

---

## Część 5: Aktualizacja sitemap.xml i routingu

- Dodanie nowych tras w App.tsx dla artykułów i podstron kategorii
- Aktualizacja sitemap.xml o nowe URL-e
- Aktualizacja bloga (Blog.tsx) o nowe artykuły w liście

---

## Szczegóły techniczne

| Pliki do modyfikacji | Zakres zmian |
|---|---|
| `src/pages/Index.tsx` | Meta tagi, H1, H2 semantyczne |
| `src/components/HeroSection.tsx` | Nowy H1, narracja premium |
| `src/components/HeroWelcome.tsx` | Storytelling |
| `src/components/Navbar.tsx` | Dropdown menu z kategoriami |
| `src/components/BadgesBar.tsx` | Nowe filtry z linkami |
| `src/pages/DomWLesieSuprasl.tsx` | Meta tagi |
| `src/pages/DomekZJacuzziPodlasie.tsx` | Meta tagi |
| `src/pages/WeekendSuprasl.tsx` | Meta tagi |
| `src/pages/AtrakcjeSuprasl.tsx` | Meta tagi |
| `src/pages/Blog.tsx` | Lista nowych artykułów |
| `src/App.tsx` | Nowe trasy |
| `public/sitemap.xml` | Nowe URL-e |
| 6 nowych plików blog | Artykuły z pełnym SEO |
| `src/components/RelaxSection.tsx`, `CTASection.tsx` | Narracja storytelling |

Kolejność wdrożenia: Meta tagi -> Nawigacja -> Artykuły blogowe -> Storytelling -> Sitemap

