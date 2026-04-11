

## Plan: Kompleksowa optymalizacja SEO treści strony głównej

### Cel
Wdrożenie strategii SEO opartej na analizie konkurencji — nasycenie treści frazami kluczowymi w sposób naturalny, zmiana struktury nagłówków, aktualizacja schema markup i opinii gości.

---

### Zakres zmian

#### 1. HeroSection.tsx — nowy H1 + meta dane
- **H1**: Zmiana z "In The Woods — Dom w Puszczy Knyszyńskiej z balią i sauną" na emocjonalny nagłówek nasycony frazami: **"Leśny dom na wyłączność — domek w lesie z jacuzzi i sauną, Puszcza Knyszyńska"**
- **Podtytuł**: "Ucieczka od zgiełku miasta. Detoks cyfrowy w lesie. Spokojny wypoczynek w naturze."
- Zachowanie CTA "Sprawdź dostępność" i "Zadzwoń"
- Aktualizacja badge'ów o frazy: "Dom z bali na wyłączność", "Ogrodzony teren · psy za darmo", "Domek z kominkiem w lesie"

#### 2. Index.tsx — meta dane + schema
- **Title**: "Domek w lesie z jacuzzi | In The Woods — Podlasie" (50 znaków)
- **Meta description**: "Zarezerwuj leśny dom z sauną i balią w Puszczy Knyszyńskiej na wyłączność. Cisza, kominek, ogrodzony teren. Sprawdź wolne terminy!" (131 znaków)
- **Schema JSON-LD**: Zmiana `aggregateRating` z 5.0/100 na **4.82/110** (w tym kilka 4★ opinii). Dodanie `starRating`, rozbudowa `description` o frazy kluczowe

#### 3. HeroWelcome.tsx — nasycenie frazami
- **H2**: "Dom z bali w lesie — leśny domek do wynajęcia na wyłączność"
- Wplecenie fraz: "dom na wyłączność", "domek z kominkiem", "ogrodzony teren", "psy za darmo"
- Zachowanie osobistego tonu gospodarza Macieja

#### 4. AmenitiesSection.tsx — nagłówki H2/H3 z frazami
- **H2**: "Domek z sauną, jacuzzi i kominkiem w sercu lasu"
- **H3 dla każdego udogodnienia** — rozbudowa opisów o 2-3 zdania z frazami:
  - "Salon z kominkiem" → "Klimatyczny kominek w drewnianym domu" + opis emocjonalny
  - "Taras i ogród" → "Ogrodzony teren z altaną i miejscem na ognisko"
  - "Zwierzęta mile widziane" → "Psy za darmo — ogrodzony teren w lesie"
  - Dodanie pozycji: "Płyta kuchenna kaflowa", "Kominkiem ogrodowy"

#### 5. ForWhoSection.tsx — persony z frazami long-tail
- **H2**: "Dla kogo jest dom w lesie? Twój pobyt, Twoje zasady"
- Wplecenie fraz w opisy person:
  - Pary: "romantyczny pobyt w lesie", "klimatyczny domek na walentynki", "domek w lesie dla 2 osób z jacuzzi"
  - Rodziny: "dom w lesie wynajem dla rodziny z dziećmi", "bezpieczny ogrodzony teren"
  - Workation: "praca zdalna w lesie wynajem domku", "detoks cyfrowy w lesie"
  - Dodanie persony: "Slow travel" z frazami "slow travel Polska", "oderwanie od cywilizacji"

#### 6. JacuzziSection.tsx — frazy udogodnieniowe
- **H2**: "Domek z balią w lesie — prywatna ruska bania pod gwiazdami"
- Wplecenie: "domek z jacuzzi w lesie", "domek z balią w lesie", "SPA na odludziu"

#### 7. RelaxSection.tsx — frazy emocjonalne
- **H2**: "Odpoczynek w lesie na weekend — slow travel w Puszczy Knyszyńskiej"
- Wplecenie: "chill w lesie", "spokojny wypoczynek w naturze", "odpoczynek w lesie weekend"

#### 8. WinterSection.tsx — frazy sezonowe
- **H2**: "Domek na sylwestra i zimowy weekend w lesie"
- Tagi: "Domek na sylwestra w lesie", "Ferie zimowe w puszczy", "Walentynki w leśnym domku", "Majówka w lesie"

#### 9. LocationSection.tsx — SEO lokalne
- **H2**: "Domek w lesie Podlasie — Puszcza Knyszyńska, Supraśl"
- Dodanie akapitu opisowego: rezerwat Krzemienne Góry, miejscowość Konne, "domek podlaskie odludzie", "domek na odludziu podlaskie", odległości od Białegostoku/Supraśla, atrakcje regionu

#### 10. TestimonialsSection.tsx — obniżenie oceny do 4.82
- Dodanie 2-3 opinii z **4 gwiazdkami** (np. "Dojazd drogą gruntową bywa wymagający, ale to część uroku" / "Brak zasięgu — dla nas minus, ale doceniliśmy ciszę")
- Zmiana tekstu z "5★" na "4,82★ na podstawie 110 opinii"
- Zachowanie schema Review w JSON-LD

#### 11. FAQSection.tsx — nowe pytania z frazami transakcyjnymi
- Dodanie pytań:
  - "Ile kosztuje wynajem domku w lesie na weekend?"
  - "Czy mogę pracować zdalnie w In The Woods?"
  - "Czy domek jest dostępny na sylwestra / walentynki / majówkę?"
  - "Co zabrać na pobyt w leśnym domku?"
- Wplecenie fraz: "domek w lesie wynajem", "wynajem domku na odludziu na weekend", "domek na sylwestra w lesie"

#### 12. SEOTextSection.tsx — nasycenie nowymi frazami
- Dodanie akapitów z frazami:
  - "Leśny domek do wynajęcia na Podlasiu"
  - "Domek na odludziu — oderwanie od cywilizacji"
  - "Domki letniskowe wynajem — Puszcza Knyszyńska"
  - Sezonowe: sylwester, walentynki, majówka

#### 13. CTASection.tsx — frazy w końcowym CTA
- Wplecenie: "domek w lesie wynajem", "dom na wyłączność", "leśny domek do wynajęcia"

---

### Zasady wdrożenia
- Ton emocjonalny, nie specyfikacyjny — język doświadczeń
- Brak keyword stuffing — max 2-3 frazy na akapit, naturalnie wplecione
- Jeden H1 na stronę (tylko HeroSection)
- H2 w sekcjach zawierają frazy kluczowe jako nagłówki udogodnień
- Schema JSON-LD zaktualizowany z nową oceną 4.82 i rozbudowanym opisem

---

### Pliki do modyfikacji (13 plików)
1. `src/components/HeroSection.tsx`
2. `src/pages/Index.tsx`
3. `src/components/HeroWelcome.tsx`
4. `src/components/AmenitiesSection.tsx`
5. `src/components/ForWhoSection.tsx`
6. `src/components/JacuzziSection.tsx`
7. `src/components/RelaxSection.tsx`
8. `src/components/WinterSection.tsx`
9. `src/components/LocationSection.tsx`
10. `src/components/TestimonialsSection.tsx`
11. `src/components/FAQSection.tsx`
12. `src/components/SEOTextSection.tsx`
13. `src/components/CTASection.tsx`

