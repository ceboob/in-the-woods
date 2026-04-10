

## Plan: Dodanie width i height do wszystkich obrazów

### Problem
Około 90+ obrazów `<img>` w projekcie nie ma atrybutów `width` i `height`, co powoduje Layout Shift (CLS) — przeglądarka nie zna wymiarów obrazu przed załadowaniem i "przeskakuje" zawartość.

### Zakres zmian

**Komponenty główne (8 plików):**
- `HeroSection.tsx` — 1 obraz (hero, pełnoekranowy → 1920×1080)
- `AboutSection.tsx` — 1 obraz
- `NatureSection.tsx` — 2 obrazy
- `WinterSection.tsx` — 3 obrazy
- `JacuzziSection.tsx` — 1 obraz
- `RelaxSection.tsx` — 2 obrazy
- `SupraslSection.tsx` — obrazy w pętli (guide cards)
- `GallerySection.tsx` — już ma width/height na thumbnailach ✅, brak na lightboxie (ale lightbox nie wpływa na CLS)

**Strona Dom.tsx** — ~25 obrazów w gridach (głównie 400×300)

**Strona Informator.tsx** — 4 obrazy

**Artykuły blogowe (10+ plików):**
- `SupraslAtrakcjeUzdrowisko.tsx` — 3 obrazy
- `SzlakPowstaniaStyczniowego.tsx` — 3 obrazy
- `KajakiSuprasl.tsx` — 3 obrazy
- `KruszynianyTatarskaWies.tsx` — 2 obrazy
- `RestauracjeSuprasl.tsx` — 6 obrazów
- Pozostałe artykuły z obrazami

### Podejście
- Obrazy pełnoekranowe (hero, full-width banery): `width="1920" height="1080"`
- Obrazy w gridach/kartach: `width="400" height="300"` (proporcja 4:3)
- Obrazy blogowe (prose): `width="800" height="450"` (proporcja 16:9)
- Obrazy w lightboxie: pomijamy (nie wpływają na CLS, pojawiają się w overlayach)
- Rzeczywiste renderowanie nadal kontrolowane przez CSS (`object-cover`, `w-full h-full`), ale przeglądarka zna aspect ratio z góry

### Pliki do edycji (~20 plików)
1. `src/components/HeroSection.tsx`
2. `src/components/AboutSection.tsx`
3. `src/components/NatureSection.tsx`
4. `src/components/WinterSection.tsx`
5. `src/components/JacuzziSection.tsx`
6. `src/components/RelaxSection.tsx`
7. `src/components/SupraslSection.tsx`
8. `src/pages/Dom.tsx`
9. `src/pages/Informator.tsx`
10. `src/pages/blog/SupraslAtrakcjeUzdrowisko.tsx`
11. `src/pages/blog/SzlakPowstaniaStyczniowego.tsx`
12. `src/pages/blog/KajakiSuprasl.tsx`
13. `src/pages/blog/KruszynianyTatarskaWies.tsx`
14. `src/pages/blog/RestauracjeSuprasl.tsx`
15. Pozostałe pliki blogowe z `<img>` bez wymiarów

### Efekt
- Eliminacja ostrzeżeń "Missing Image Dimensions" z Screaming Frog
- Poprawa wskaźnika CLS (Core Web Vitals)
- Lepsza ocena w Lighthouse i Google PageSpeed Insights

