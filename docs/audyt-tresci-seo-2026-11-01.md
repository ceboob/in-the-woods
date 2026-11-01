# Treści i SEO: rozbudowa i audyt (2026-11-01)

Wzorce: artykuły o romantycznych miejscach i weekendzie na Podlasiu oraz o Białymstoku i okolicach (Maciejówka Borki, 2022), o jedzeniu w Supraślu (TasteAway, 2021), przewodnik po Supraślu (RobiMy Podróże, 2020/2021) oraz ranking restauracji na TripAdvisorze.

Źródła: domeny wzorców są zablokowane w sieci środowiska, więc pierwsza wersja powstała na podstawie wyszukiwarki. Druga runda korzystała z zrzutów PDF wszystkich pięciu artykułów od właściciela strony. Z PDF-ów wzięto tylko fakty: adresy, nazwy, daty i historię miejsc. Teksty są napisane od nowa, bez kopiowania zdań.

**Zdjęcia ze wzorców nie zostały użyte.** RobiMy Podróże w stopce zastrzega: „Nie zgadzamy się na wykorzystywanie naszych zdjęć i treści”. Zdjęcia TasteAway i Maciejówki też są chronione prawem autorskim. W tekstach użyto wyłącznie zdjęć, które już są w repozytorium (dom, monaster, rzeka, Kruszyniany, puszcza).

## 1. Co zostało zmienione

| Strona | Fraza główna | Co się zmieniło |
|---|---|---|
| `/blog/przewodnik-kulinarny-suprasl` | gdzie zjeść w Supraślu | Przedtem pusty tekst, w którym 13 razy powtarzało się „sprawdź…”. Teraz pełny przewodnik: 5 dań kuchni podlaskiej, lokale z adresami i daniami (Jarzębinka, Łukaszówka, Spiżarnia Smaków, Prowincja w Domu Ludowym i inne), kawiarnie i bulwary, Kruszyniany, Tejsza w Tykocinie, „Co przywieźć z Podlasia” (giełda przy Andersa, Czarna Wieś), mistrzostwa babki, plan weekendu, 5 FAQ i CTA |
| `/blog/romantyczny-weekend-podlasie` | romantyczne miejsca na Podlasiu | 13 miejsc: monaster, bulwary, arboretum, puszcza, nocne niebo i Perseidy, Góra Św. Anny i Szlak Wzgórz Świętojańskich, Noc Kupały w Załukach, Tykocin, Pałac Branickich, okiennice, Kruszyniany, Folwark Żylicze, balia. Do tego plan weekendu, 4 zdjęcia i 5 FAQ |
| `/blog/bialystok-i-okolice-co-zobaczyc` (**nowy**) | co warto zobaczyć w Białymstoku i okolicach | Białystok (pałac i zegar na wieży, Planty, Fara, sobór, Sybir, Zamenhof, Bojary, taras na dachu opery, zoo, wieczory i gdzie zjeść), okolice (Supraśl, Kopna Góra, Święta Woda, Czarna Wieś Kościelna, Choroszcz, Tykocin z Tejszą, Kurowo i Waniewo, Szlak Tatarski, okiennice), plan na 3 dni, nocleg, 5 FAQ |
| `/weekend-suprasl` | weekend w Supraślu / weekend na Podlasiu | Nowe sekcje: „5 pomysłów na niedzielną wycieczkę” (z Górą Św. Anny), „co spakować”, zakupy w drodze powrotnej, nowe FAQ, linki do trzech tekstów z bloga |
| `/atrakcje-suprasl` | atrakcje Supraśla | Konkrety przy każdym zabytku (historia, zasady wejścia, dostępność), nowe pozycje: Dom Ludowy, Biały Dworek, Supraśl filmowy („U Pana Boga…”), arboretum, Święta Woda, Tykocin. Lista `ItemList` w JSON-LD rozszerzona o 7 pozycji |
| `/blog` | – | Nowa karta wpisu, nowe tytuły i zajawki dwóch przepisanych tekstów |

Linkowanie wewnętrzne: trzy teksty z bloga i dwie strony ofertowe linkują teraz do siebie nawzajem (klaster „weekend na Podlasiu”). Każdy tekst kończy się CTA do rezerwacji (`/#rezerwacja`) i numerem telefonu.

## 2. Audyt wprowadzonych zmian (build + wyrenderowany HTML)

- `typecheck`, `eslint` (zmienione pliki), `vitest` 10/10, `npm run build` z `seo:check` i `schema:check`: wszystko przechodzi, 43 strony prerenderowane
- Każda zmieniona strona ma 1×H1, title 50–56 znaków i opis 124–160 znaków. Wszystkie obrazy mają `alt`, `width` i `height`. Brak martwych linków wewnętrznych
- Nowy wpis ma JSON-LD: BlogPosting, FAQPage (5 pytań) i BreadcrumbList. Trafił też do sitemap (generowana automatycznie z tras)
- Typografia: twarde spacje (`&nbsp;` w JSX, ` ` w stringach). Zakazane sformułowania z poprzedniego audytu się nie pojawiają (test `content-seo` przechodzi)

## 3. Do potwierdzenia przez właściciela (przed deployem)

Fakty ze źródeł pochodzą z lat 2020–2022 i mogły się zmienić:
1. **Lokale i adresy:** Bar Jarzębinka (ul. 3 Maja 22), Łukaszówka (ul. Nowy Świat 2), Spiżarnia Smaków (ul. 3 Maja 5, piekarnia i kawiarnia), Prowincja (Dom Ludowy), Ojcowizna, Bohema, Ostoja, Papu Bistro. W Białymstoku: Świętojańska 21, Kwestia Czasu, Lipcowy Ogród, Bar Topolanka, Cziora. Celowo nie podano cen ani godzin otwarcia
2. **Dania z kart** (kluska supraska, ciasto Marcinek, podpiwek, podlaski talerz) zgodnie ze stanem w źródłach. Najlepiej, żeby Maciej dopisał przy każdym lokalu jedno zdanie od siebie. To najsilniejszy sygnał E-E-A-T
3. **Monaster:** w poniedziałki zamknięty, a codziennie po południu obowiązuje „cisza monasterska”. Wierszalin latem zwykle nie gra
4. **Wydarzenia:** Kupalnoczka w Załukach (okolice 21/22 czerwca), Święto Grzyba w Michałowie, festiwale w Białymstoku. Daty trzeba co roku sprawdzać
5. **Czasy dojazdu z Konnego:** Tykocin, Kruszyniany i Kraina Otwartych Okiennic ok. 1 h, Góra Św. Anny i Kopna Góra „kilkanaście minut”

## 4. Obszary wymagające modyfikacji (priorytety)

### P1: największy wpływ na klientów i pozycje
1. **Cienkie wpisy na blogu z tym samym problemem, który miał przewodnik kulinarny.** To krótkie teksty z wieloma powtórzeniami „sprawdź…” zamiast konkretów: `SupraslZDziecmi` (17×), `SzlakiPieszeRowerowe` (15×), `KruszynianyTatarskaWies` (15×), `AktywnyWypoczynek` (10×), `JesienWSupraslu2026` (370 słów), `PuszczaKnyszynskaHistorie` (311), `SupraskiSystemWodny` (327), `WorkationPodlasie` (372), `UzdrowiSkoSPA` (435), `GrzybobraniePuszczaKnyszynska` (429). Każdy trzeba rozbudować do 900–1500 słów według wzoru z tego wdrożenia: konkrety, plan, FAQ, zdjęcia, CTA
2. **Zdjęcia w 12 wpisach.** Wiele wpisów nie ma żadnego zdjęcia w treści (m.in. Cyfrowy detoks, Grzybobranie, Podlasie z psem, Rykowisko, Workation, Supraśl z dziećmi). Najlepiej użyć własnych zdjęć domu i okolicy z `src/assets/gallery-*`
3. **Własne zdjęcia Białegostoku, Tykocina i lokali w Supraślu.** Repo ich nie ma. Można je zrobić samemu albo wziąć z Wikimedia Commons na licencji CC BY-SA, z podpisem autora. Wtedy też ustawić `ogImage` dla każdego wpisu (dziś wpisy korzystają z domyślnego `og-image.jpg`)
4. **Opinie gości na stronie i w Google.** Recenzje to najsilniejszy czynnik konwersji w noclegach. Po każdym pobycie warto prosić o opinię w Wizytówce Google (link w mailu po wyjeździe) i pokazywać 3–5 najnowszych cytatów na stronach ofertowych

### P2: ryzyka i porządki
5. **Licencje zdjęć.** Zdjęć ze stron-wzorców nie wolno używać (patrz wyżej). `blog-co-robic-suprasl*.webp` ma znak wodny „ADVENTUM, fot. Paweł Pomykalski”, a jest używany na liście bloga. Trzeba potwierdzić zgodę autora albo wymienić zdjęcie
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
