# SEO Pakiet 2 — optymalizacja obrazów

Poniżej lista najcięższych obrazów wykrytych lokalnie (`public/images` i `src/assets`) wraz z priorytetem kompresji.

## Priorytet P1 (najpierw)

| Plik | Rozmiar (MB) | Cel po optymalizacji |
|---|---:|---:|
| `public/images/living-fireplace.jpg` | 3.14 | < 400 KB |
| `public/images/jacuzzi-night.jpg` | 3.10 | < 400 KB |
| `public/images/gallery-toaleta-jasna.avif` | 3.06 | < 500 KB |
| `public/images/gallery-ramki-wnetrze.avif` | 3.00 | < 500 KB |
| `public/images/gallery-polka-ceramika.avif` | 3.00 | < 500 KB |
| `public/images/terrace-porch.jpg` | 2.94 | < 350 KB |
| `public/images/gallery-droga-lesna-plot.avif` | 2.85 | < 450 KB |
| `public/images/gallery-kominek-zblizenie.avif` | 2.69 | < 450 KB |
| `public/images/kitchen-dining.jpg` | 2.60 | < 350 KB |
| `public/images/gallery-dom-ogrod-panorama.avif` | 2.54 | < 450 KB |

## Priorytet P2

- `public/images/gallery-lazienka-prysznic.avif` (2.50 MB)
- `public/images/bathroom.jpg` (2.16 MB)
- `public/images/gallery-lazienka-umywalka.avif` (2.06 MB)
- `public/images/gallery-prysznic-ciemny.avif` (2.01 MB)
- `public/images/gallery-salon-fotele-schody.avif` (2.00 MB)
- `public/images/gallery-konne-znak.avif` (1.97 MB)
- `public/images/gallery-konne-droga.avif` (1.97 MB)
- `public/images/gallery-taras-obiad.avif` (1.90 MB)
- `public/images/gallery-kuchnia-zlew.avif` (1.78 MB)
- `public/images/gallery-kuchnia-ceramika-2.avif` (1.74 MB)

## Szybki workflow kompresji (propozycja)

1. Dla JPG/PNG wygenerować WebP/AVIF (75–82 quality).
2. Ograniczyć maksymalną szerokość dla miniaturek do 1600 px (lub mniej, jeżeli obraz nie jest hero).
3. Zastąpić odwołania w kodzie do lżejszych wariantów.
4. Zweryfikować w Lighthouse (LCP/CLS) i Screaming Frog (`Images: Over 100 KB`).

## Komenda użyta do wylistowania obrazów

```bash
find public/images src/assets -type f \( -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.webp' -o -name '*.avif' \) -printf '%s %p\n' | sort -nr | head -n 25
```
