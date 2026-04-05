

## Plan: Dokończ galerię end-to-end

### 1. Usuń 3 zdjęcia z galerii
Usunąć z tablic `heroImages`/`moreImages` oraz z importów:
- **`foteleVintage`** (linia 30, 100) — "dwoma fotelami"
- **`ogniskoDziecko`** (linia 28, 99) — "chłopca przy ognisku"
- **`altanaPies`** (linia 31, 101) — "psa na stole"

### 2. Dodaj 4 nowe unikalne zdjęcia
Pliki już istnieją w `src/assets/` i `public/images/`. Dodać importy i wpisy do `moreImages`:
- `gallery-sypialnia-zielone-zaslony` — Sypialnia z zielonymi zasłonami i widokiem na ogród
- `gallery-konne-znak` — Znak kierunkowy na leśnej drodze w okolicy Konnych
- `gallery-jadalnia-tulipany-zblizenie` — Zbliżenie na tulipany w jadalni
- `gallery-taras-sofa-wejscie` — Sofa na tarasie przy wejściu do domu

### 3. Optymalizacja ładowania galerii
- Pierwsze 2 zdjęcia hero: `loading="eager"` + `fetchPriority="high"`
- Pozostałe hero: `loading="lazy"` (już jest)
- Zdjęcia w `moreImages` (ukryte za toggle): nie renderowane do DOM dopóki `showAll=false` (już działa)
- Dodać `decoding="async"` do wszystkich `<img>`

### 4. Weryfikacja i publikacja
- Build test (`npx vite build`)
- Publikacja strony

### Pliki do edycji
- `src/components/GallerySection.tsx` — jedyny plik

### Wynik
Galeria: ~52 unikalne zdjęcia, bez 3 wskazanych, z 4 nowymi, zoptymalizowana pod ładowanie.

