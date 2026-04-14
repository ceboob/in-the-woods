

## Plan: Zamiana pochylonego tekstu (italic) na normalny styl

### Problem
Na stronie w wielu sekcjach używany jest tekst pochylony (`italic`) z klasą `font-serif` — w Hero, Jacuzzi, Relax, Winter, Supraśl, CTA i opiniach. Użytkownik chce zamienić ten styl na zwykły (nie-italic), mniejszy tekst w standardowym stylu body (Poppins regular).

### Zmiany do wprowadzenia

**Pliki do edycji (7 komponentów + 1 CSS):**

1. **`src/components/HeroSection.tsx`** — 2 linie: usunąć `italic`, zmienić `font-serif text-lg md:text-xl` → `text-base md:text-lg font-normal`

2. **`src/components/JacuzziSection.tsx`** — 1 div: usunąć `italic font-serif`, zmienić `text-lg md:text-xl` → `text-base`

3. **`src/components/RelaxSection.tsx`** — 4 elementy: usunąć `italic font-serif`, dostosować rozmiar do `text-base`

4. **`src/components/WinterSection.tsx`** — 1 linia: usunąć `italic font-serif`, zmienić na `text-base font-normal`

5. **`src/components/SupraslSection.tsx`** — 1 linia: usunąć `italic font-serif`, zmienić `text-xl md:text-2xl` → `text-base md:text-lg`

6. **`src/components/CTASection.tsx`** — 1 linia: usunąć `italic`

7. **`src/components/TestimonialsSection.tsx`** — 1 linia w kartach opinii: usunąć `italic font-serif`

8. **`src/index.css`** — usunąć klasę `.font-script` (italic Poppins) jeśli nie jest już nigdzie używana

### Podsumowanie
Wszystkie wystąpienia pochylonego tekstu (`italic` + `font-serif`) zostaną zamienione na zwykły tekst Poppins regular w mniejszym rozmiarze, zachowując kolory i pozycjonowanie bez zmian.

