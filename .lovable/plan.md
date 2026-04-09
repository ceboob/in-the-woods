

## Plan: Transformacja typografii i palety kolorów na styl doginclusive.com

### Zakres zmian

Logo (Monoton) i Hero (Luckiest Guy) pozostają bez zmian. Cała reszta strony przechodzi na Poppins z nową paletą kolorów.

### Zmiany w plikach

**1. `src/index.css` — Google Fonts + CSS variables + base styles**
- Zamiana importu: dodanie `Poppins:wght@400;500;600;700` (zachowanie Monoton, Luckiest Guy)
- Nowa paleta CSS custom properties:
  - `--background`: biały `#FFFFFF` / złamana biel `#F9F9F9`
  - `--foreground` / nagłówki: `#333333`
  - `--primary`: `#e5cd6c` (złoty akcent)
  - `--primary-foreground`: `#333333`
  - `--accent`: `#8c6239` (ciepły brąz)
  - `--muted-foreground`: `#4A4A4A`
  - `--card`: `#FFFFFF`
  - `--border`: jasnoszary
  - Nowa zmienna `--teal: #20646c` (turkus dla linków)
- Base styles: `body` → Poppins 400, 16px, line-height 1.6, kolor `#4A4A4A`
- `h1` → Poppins 700, uppercase
- `h2`, `h3` → Poppins 700, kolor `#333333`
- `.btn-primary` → Poppins 600, bg `#e5cd6c`, border-radius 8px, shadow, hover translateY(-2px)
- `.btn-outline` → zaktualizowane kolory
- `.card-premium` → bg white, border-radius 16px, shadow 0 10px 15px, hover scale(1.03)
- `.nav-link` → Poppins 400
- Linki: kolor `#20646c`, podkreślenie on hover

**2. `tailwind.config.ts` — fontFamily**
- `sans` i `heading` → `Poppins`
- `script` / `serif` → `Poppins`
- Dodanie koloru `teal` dla `#20646c`

**3. Komponenty z inline `fontFamily` (bez Hero/Logo)**
- `src/components/Navbar.tsx` — `nav-link` i btn już dziedziczą z CSS, logo Monoton bez zmian
- Komponenty używające `font-serif`, `font-heading` → automatycznie przejmą Poppins z tailwind config

### Elementy nietknięte
- Logo `font-display` (Monoton) w Navbar
- `Luckiest Guy` w HeroSection i HeroWelcome

### Podsumowanie efektu
Strona przejdzie z leśno-zielonej kolorystyki na ciepłą złoto-brązowo-turkusową paletę z czcionką Poppins, zachowując charakter logo i sekcji Hero.

