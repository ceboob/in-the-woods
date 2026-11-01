# Treści i SEO: rozbudowa i audyt (2026-11-01)

Wzorce: artykuły o romantycznych miejscach i weekendzie na Podlasiu, o Białymstoku i okolicach oraz o tym, gdzie zjeść w Supraślu (maciejowkaborki33.pl, tasteaway.pl, robimypodroze.pl, TripAdvisor).
Ograniczenie: sieć tego środowiska blokuje te domeny (proxy 403), więc nie dało się ich przeczytać. Fakty zebrano przez wyszukiwarkę z innych źródeł: Orły Gastronomii 2024, TripAdvisor (wynik wyszukiwania), Portal Podlasia, culture.pl, samorzad.gov.pl i National Geographic. Teksty są autorskie i nie kopiują wzorców.

## 1. Co zostało zmienione

| Strona | Fraza główna | Co się zmieniło |
|---|---|---|
| `/blog/przewodnik-kulinarny-suprasl` | gdzie zjeść w Supraślu | Przedtem pusty tekst, w którym 13 razy powtarzało się „sprawdź…”. Teraz pełny przewodnik: 5 dań kuchni podlaskiej, opisane lokale (Łukaszówka, Bar Jarzębinka, Spiżarnia Smaków, Ojcowizna, Prowincja, Bohema, Ostoja, Papu Bistro), Kruszyniany i Tatarska Jurta, mistrzostwa babki (8.08.2026), plan kulinarnego weekendu, 3 zdjęcia, 5 FAQ i CTA |
| `/blog/romantyczny-weekend-podlasie` | romantyczne miejsca na Podlasiu | Nowe ujęcie: 9 miejsc (monaster, bulwary, Arboretum Kopna Góra, puszcza, Tykocin, Pałac Branickich, Kraina Otwartych Okiennic, Kruszyniany, balia), plan od piątku do niedzieli, sekcja „dom zamiast hotelu”, 4 zdjęcia, 5 FAQ (rocznica, termin) |
| `/blog/bialystok-i-okolice-co-zobaczyc` (**nowy**) | co warto zobaczyć w Białymstoku i okolicach | Białystok (pałac, rynek, Sybir, Zamenhof, Bojary, zoo), okolice (Supraśl, Kopna Góra, Święta Woda, Choroszcz, Tykocin, Waniewo, Kruszyniany i Bohoniki, okiennice), plan na 3 dni, sekcja „nocleg koło Białegostoku”, 5 FAQ |
| `/weekend-suprasl` | weekend w Supraślu / weekend na Podlasiu | Nowe sekcje: „4 pomysły na niedzielną wycieczkę”, „co spakować”, nowe FAQ „co zobaczyć na Podlasiu w weekend”, linki do trzech tekstów z bloga |
| `/atrakcje-suprasl` | atrakcje Supraśla | Dopisane: Arboretum, Święta Woda, Tykocin, Białystok z linkiem, Łukaszówka. Lista `ItemList` w JSON-LD rozszerzona o 5 pozycji |
| `/blog` | – | Nowa karta wpisu, nowe tytuły i zajawki dwóch przepisanych tekstów |

Linkowanie wewnętrzne: trzy teksty z bloga i dwie strony ofertowe linkują teraz do siebie nawzajem (klaster „weekend na Podlasiu”). Każdy tekst kończy się CTA do rezerwacji (`/#rezerwacja`) i numerem telefonu.

## 2. Audyt wprowadzonych zmian (build + wyrenderowany HTML)

- `typecheck`, `eslint` (zmienione pliki), `vitest` 10/10, `npm run build` z `seo:check` i `schema:check`: wszystko przechodzi, 43 strony prerenderowane
- Każda zmieniona strona ma 1×H1, title 50–56 znaków i opis 124–160 znaków. Wszystkie obrazy mają `alt`, `width` i `height`. Brak martwych linków wewnętrznych
- Nowy wpis ma JSON-LD: BlogPosting, FAQPage (5 pytań) i BreadcrumbList. Trafił też do sitemap (generowana automatycznie z tras)
- Typografia: twarde spacje (`&nbsp;` w JSX, ` ` w stringach). Zakazane sformułowania z poprzedniego audytu się nie pojawiają (test `content-seo` przechodzi)

## 3. Do potwierdzenia przez właściciela (przed deployem)

1. **Lokale:** czy nadal działają i czy rekomendacje się zgadzają (Łukaszówka, Jarzębinka, Spiżarnia Smaków, Ojcowizna, Prowincja, Bohema, Ostoja, Papu Bistro). Najlepiej, żeby Maciej dopisał po jednym zdaniu od siebie, np. ulubione danie. To najsilniejszy sygnał E-E-A-T
2. Zdanie „babka bywa, że kończy się po 15:00” to typowa obserwacja, nie sprawdzony fakt. Jeśli się nie zgadza, trzeba je usunąć
3. Czasy dojazdu z Konnego (Tykocin, Kruszyniany, okiennice „ok. 1 h”, Kopna Góra „kilkanaście minut”)

## 4. Obszary wymagające modyfikacji (priorytety)

### P1: największy wpływ na klientów i pozycje
1. **Cienkie wpisy na blogu z tym samym problemem, który miał przewodnik kulinarny.** To krótkie teksty z wieloma powtórzeniami „sprawdź…” zamiast konkretów: `SupraslZDziecmi` (17×), `SzlakiPieszeRowerowe` (15×), `KruszynianyTatarskaWies` (15×), `AktywnyWypoczynek` (10×), `JesienWSupraslu2026` (370 słów), `PuszczaKnyszynskaHistorie` (311), `SupraskiSystemWodny` (327), `WorkationPodlasie` (372), `UzdrowiSkoSPA` (435), `GrzybobraniePuszczaKnyszynska` (429). Każdy trzeba rozbudować do 900–1500 słów według wzoru z tego wdrożenia: konkrety, plan, FAQ, zdjęcia, CTA
2. **Zdjęcia w 12 wpisach.** Wiele wpisów nie ma żadnego zdjęcia w treści (m.in. Cyfrowy detoks, Grzybobranie, Podlasie z psem, Rykowisko, Workation, Supraśl z dziećmi). Najlepiej użyć własnych zdjęć domu i okolicy z `src/assets/gallery-*`
3. **Własne zdjęcia Białegostoku, Tykocina i lokali w Supraślu.** Repo ich nie ma. Można je zrobić samemu albo wziąć z Wikimedia Commons na licencji CC BY-SA, z podpisem autora. Wtedy też ustawić `ogImage` dla każdego wpisu (dziś wpisy korzystają z domyślnego `og-image.jpg`)
4. **Opinie gości na stronie i w Google.** Recenzje to najsilniejszy czynnik konwersji w noclegach. Po każdym pobycie warto prosić o opinię w Wizytówce Google (link w mailu po wyjeździe) i pokazywać 3–5 najnowszych cytatów na stronach ofertowych

### P2: ryzyka i porządki
5. **Licencje zdjęć.** `blog-co-robic-suprasl*.webp` ma znak wodny „ADVENTUM, fot. Paweł Pomykalski”, a jest używany na liście bloga. Trzeba potwierdzić zgodę autora albo wymienić zdjęcie
6. **Obrazy wygenerowane przez AI z fikcyjnymi szyldami** (`blog-lukaszowka-suprasl.jpg`, `blog-bohema-suprasl.jpg`, `blog-bar-jarzebinka.jpg`). Celowo ich nie użyto: podpisane jako konkretne lokale wprowadzałyby w błąd. Można je usunąć z repo
7. **Daty wydarzeń** zawsze z kalendarza CKiR. Gdy pojawi się termin mistrzostw babki w 2027, trzeba go wpisać do przewodnika kulinarnego i tekstu o wydarzeniach
8. Pozostałości z audytu 2026-10-31: CSP etap 2, los workera Cloudflare

### P3: nowe treści (luki fraz)
9. Nowe wpisy, kolejność według potencjału:
   - „Tykocin – co zobaczyć” (jednodniowa wycieczka z Supraśla)
   - „Narwiański Park Narodowy – kładka Waniewo–Śliwno”
   - „Walentynki na Podlasiu” (podstrona sezonowa z ofertą balii i terminem w lutym)
   - „Majówka na Podlasiu”
   - „Biebrza i Białowieża z bazą w Supraślu”
10. Podstrona ofertowa „nocleg koło Białegostoku” (`/nocleg-bialystok-okolice`). Fraza ma duży wolumen, a dziś pokrywa ją tylko wpis na blogu
11. Wizytówka Google: kategoria „Domek letniskowy” lub „Obiekt noclegowy”, zdjęcia, posty sezonowe i link z UTM. To kluczowe dla lokalnego wyszukiwania

## 5. Pomiar
- Search Console: monitorować frazy „gdzie zjeść w Supraślu”, „romantyczne miejsca na Podlasiu”, „co zobaczyć w Białymstoku i okolicach”, „weekend na Podlasiu” przez 4–8 tygodni po deployu
- GTM/GA4: kliknięcia CTA (`/#rezerwacja`, `tel:`) z trzech wpisów jako mikrokonwersje
