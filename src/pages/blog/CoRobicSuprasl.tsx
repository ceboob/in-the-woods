import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const CoRobicSuprasl = () => (
  <BlogArticleLayout
    title="Co robić w Supraślu? Kompletny przewodnik po atrakcjach"
    metaTitle="Co robić w Supraślu – przewodnik po atrakcjach 2026 | In The Woods"
    metaDescription="Co robić w Supraślu? Monaster, Muzeum Ikon, spływy kajakowe, szlaki w Puszczy Knyszyńskiej i kuchnia regionalna. Kompletny przewodnik po atrakcjach Supraśla."
    slug="co-robic-suprasl"
    publishDate="2026-03-25"
    readTime="10 min"
    keywords={['co robić w Supraślu', 'Supraśl atrakcje', 'co zobaczyć Supraśl', 'atrakcje Supraśl 2026']}
    faqs={[
      { question: 'Co warto zobaczyć w Supraślu?', answer: 'Monaster Zwiastowania NMP, Muzeum Ikon, bulwary nad rzeką Supraśl, Arboretum Kopna Góra i szlaki Puszczy Knyszyńskiej.' },
      { question: 'Ile czasu potrzebujesz na zwiedzanie Supraśla?', answer: 'Na główne atrakcje Supraśla wystarczą 2 dni, ale żeby naprawdę poczuć magię tego miejsca, warto zostać co najmniej 3-4 dni.' },
      { question: 'Czy Supraśl jest dobry na weekendowy wypad?', answer: 'Tak, Supraśl to idealne miejsce na weekend — uzdrowiskowy klimat, atrakcje turystyczne i bliskość natury w zasięgu ręki.' },
    ]}
    relatedArticles={[
      { title: 'Kajaki Supraśl – spływy rzeką Supraśl', slug: 'kajaki-suprasl' },
      { title: 'Szlaki piesze i rowerowe Supraśl', slug: 'szlaki-piesze-rowerowe-suprasl' },
      { title: 'Restauracje Supraśl – gdzie zjeść', slug: 'restauracje-suprasl' },
    ]}
  >
    <h1>Co robić w Supraślu? Kompletny przewodnik po atrakcjach</h1>

    <p>
      Supraśl to jedno z najpiękniejszych miasteczek Podlasia — uzdrowisko w sercu Puszczy Knyszyńskiej, 
      które łączy historię, kulturę i naturę w unikalny sposób. Niezależnie od tego, czy planujesz 
      <Link to="/weekend-suprasl"> weekend w Supraślu</Link>, dłuższy urlop czy jednodniową wycieczkę — 
      ten przewodnik pomoże Ci zaplanować czas tak, by nie ominąć niczego ważnego.
    </p>

    <h2>Monaster Zwiastowania NMP — duchowe serce Supraśla</h2>
    <p>
      Prawosławny Monaster Zwiastowania Najświętszej Maryi Panny to najważniejszy zabytek Supraśla 
      i jedno z najcenniejszych miejsc sakralnych w Polsce. Kompleks klasztorny, założony w XVI wieku, 
      zachwyca architekturą, spokojem i duchową atmosferą. Odwiedzający mogą wejść do soboru, 
      spacerować po klasztornych ogrodach i uczestniczyć w nabożeństwach z pięknym śpiewem liturgicznym.
    </p>

    <h2>Muzeum Ikon — jedyne takie w Polsce</h2>
    <p>
      Przy Monasterze działa Muzeum Ikon, posiadające jedną z najcenniejszych kolekcji ikon w Europie Środkowej. 
      Ekspozycja prezentuje ikony od XVI do XX wieku, pochodzące z cerkwi Podlasia i Lubelszczyzny. 
      To obowiązkowy punkt programu dla miłośników sztuki sakralnej i historii regionu.
    </p>

    <h2>Bulwary nad rzeką Supraśl</h2>
    <p>
      Spacer bulwarami nad rzeką Supraśl to jeden z najprzyjemniejszych sposobów na spędzenie popołudnia. 
      Rzeka płynie spokojnie wśród zieleni, a wzdłuż niej ciągną się ścieżki spacerowe, ławki i punkty widokowe. 
      Latem można tu obserwować kajakarzy, a jesienią — podziwiać złociste kolory puszczy odbijające się w wodzie.
    </p>

    <h2>Szlaki Puszczy Knyszyńskiej</h2>
    <p>
      Puszcza Knyszyńska to ponad 128 tysięcy hektarów lasów, torfowisk i dolin rzecznych. 
      Z Supraśla wyruszają dziesiątki <Link to="/blog/szlaki-piesze-rowerowe-suprasl">szlaków pieszych i rowerowych</Link> prowadzących 
      przez najpiękniejsze zakątki puszczy. Warto wybrać się na Szlak Bioróżnorodności (7 km), 
      Szlak Powstania Styczniowego lub trasę do Arboretum Kopna Góra.
    </p>
    <p>
      Dla rowerzystów przygotowano oznakowane trasy o różnym stopniu trudności — od łatwych 
      rodzinnych ścieżek po wymagające leśne single tracki. Rower można wypożyczyć w Supraślu.
    </p>

    <h2>Spływy kajakowe rzeką Supraśl</h2>
    <p>
      Rzeka Supraśl to jedna z najpiękniejszych rzek kajakowych Podlasia. 
      <Link to="/blog/kajaki-suprasl"> Spływy kajakowe</Link> prowadzą przez dziki, leśny krajobraz — 
      meandrująca rzeka, zwalone drzewa, bobry i czaple. Trasy mają różną długość (od 2 do 6 godzin) 
      i są dostępne nawet dla początkujących.
    </p>

    <h2>Kuchnia regionalna Podlasia</h2>
    <p>
      Pobyt w Supraślu to doskonała okazja, by spróbować kuchni podlaskiej. Kartacze (kluski ziemniaczane 
      z mięsnym farszem), babka ziemniaczana, kiszka ziemniaczana czy sękacz — to smaki, których nie 
      znajdziesz nigdzie indziej. Sprawdź nasz <Link to="/blog/restauracje-suprasl">przewodnik po restauracjach Supraśla</Link> z 
      naszymi autorskimi rekomendacjami.
    </p>

    <h2>Kruszyniany — tatarska wieś</h2>
    <p>
      Zaledwie 40 minut od Supraśla znajdują się <Link to="/blog/kruszyniany-tatarska-wies">Kruszyniany</Link> — 
      jedna z najstarszych tatarskich osad w Polsce. Drewniany meczet z XVIII wieku, cmentarz muzułmański 
      i tradycyjna kuchnia tatarska (pierekaczewnik, kibiny, czebureki) to doświadczenie kulturowe 
      jedyne w swoim rodzaju.
    </p>

    <h2>Arboretum Kopna Góra</h2>
    <p>
      Arboretum Kopna Góra, oddalone o 20 minut od Supraśla, to ogród dendrologiczny z ponad 
      300 gatunkami drzew i krzewów z całego świata. Spacerowe ścieżki prowadzą przez różne 
      strefy roślinności — od azjatyckich klonów po amerykańskie sekwoje. Idealne na spokojny spacer 
      w każdą porę roku.
    </p>

    <h2>Teatr Wierszalin</h2>
    <p>
      Supraśl jest siedzibą legendarnego Teatru Wierszalin — jednego z najważniejszych teatrów 
      plenerowych w Polsce. Spektakle odbywają się w naturalnej scenerii lasu i nawiązują do mitologii 
      Podlasia. Warto sprawdzić repertuar przed wizytą — to doświadczenie teatralne, jakiego nie 
      znajdziesz nigdzie indziej.
    </p>

    <h2>Gdzie nocować w Supraślu</h2>
    <p>
      Jeśli szukasz <Link to="/noclegi-suprasl">noclegu w Supraślu</Link>, który oferuje coś więcej niż 
      standardowy hotel — In The Woods to prywatny <Link to="/domek-suprasl">domek w Supraślu</Link> na 
      wyłączność, z kominkiem, jacuzzi i ogrodem w Puszczy Knyszyńskiej. To idealna baza wypadowa 
      na odkrywanie wszystkich atrakcji regionu.
    </p>

    <div className="bg-secondary p-8 rounded-lg text-center space-y-4 not-prose mt-12">
      <p className="font-serif text-xl text-foreground">Sprawdź dostępność noclegu w Supraślu</p>
      <p className="text-muted-foreground text-sm">Dom w lesie z jacuzzi — idealna baza na zwiedzanie okolicy.</p>
      <a href="tel:+48722765101" className="btn-primary inline-block">Sprawdź termin</a>
    </div>
  </BlogArticleLayout>
);

export default CoRobicSuprasl;
