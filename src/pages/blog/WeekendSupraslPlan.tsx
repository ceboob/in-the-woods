import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const WeekendSupraslPlan = () => (
  <BlogArticleLayout
    title="Weekend w Supraślu – plan pobytu na 2-3 dni"
    metaTitle="Weekend w Supraślu – plan pobytu na 2-3 dni | In The Woods"
    metaDescription="Weekend w Supraślu krok po kroku. Plan na 2-3 dni: Monaster, Puszcza Knyszyńska, kajaki, kuchnia regionalna i relaks w jacuzzi pod gwiazdami."
    slug="weekend-suprasl-plan"
    publishDate="2026-03-25"
    readTime="9 min"
    keywords={[
      'weekend Supraśl',
      'weekend Supraśl plan',
      'co robić Supraśl weekend',
      'Supraśl 2 dni',
    ]}
    faqs={[
      {
        question: 'Ile kosztuje weekend w Supraślu?',
        answer:
          'Nocleg w In The Woods zaczyna się od 399 PLN/noc. Weekend (2 noce) to koszt od 798 PLN za cały dom dla do 8 osób.',
      },
      {
        question: 'Jak dojechać do Supraśla?',
        answer:
          'Supraśl leży 25 minut od Białegostoku. Z Warszawy to ok. 2,5h samochodem lub pociąg do Białegostoku + autobus/taxi.',
      },
      {
        question: 'Czy weekend w Supraślu nadaje się dla rodziny z dziećmi?',
        answer:
          'Tak, Supraśl i okolice oferują mnóstwo atrakcji dla dzieci — od leśnych spacerów po plac zabaw w ogrodzie In The Woods.',
      },
    ]}
    relatedArticles={[
      { title: 'Co robić w Supraślu?', slug: 'co-robic-suprasl' },
      { title: 'Restauracje Supraśl', slug: 'restauracje-suprasl' },
      { title: 'Szlaki piesze i rowerowe', slug: 'szlaki-piesze-rowerowe-suprasl' },
    ]}
  >
    <h1>Weekend w Supraślu – plan pobytu na 2-3 dni</h2>

    <p>
      Planujesz <strong>weekend w Supraślu</strong> i zastanawiasz się, jak najlepiej wykorzystać
      czas? Przygotowaliśmy szczegółowy plan na 2-3 dni, który łączy zwiedzanie, aktywności w
      naturze, kulinarną podróż i relaks. Oto nasz sprawdzony scenariusz idealnego weekendu na
      Podlasiu.
    </p>

    <h2>Dzień 1: Przyjazd i odkrywanie Supraśla</h2>

    <h3>Popołudnie — Monaster i Muzeum Ikon</h3>
    <p>
      Zacznij od wizyty w prawosławnym Monasterze Zwiastowania NMP — duchowym sercu Supraśla.
      Kompleks klasztorny z XVI wieku zachwyca architekturą i spokojem. Koniecznie odwiedź Muzeum
      Ikon przy Monasterze — jedną z najcenniejszych kolekcji ikon w Europie Środkowej.
    </p>

    <h3>Późne popołudnie — Bulwary nad rzeką</h3>
    <p>
      Po zwiedzaniu Monasteru przejdź się bulwarami nad rzeką Supraśl. Spokojny spacer wzdłuż wody,
      ławki z widokiem na las i klimatyczne mostki tworzą idealną atmosferę na relaks po podróży. W
      sezonie letnim warto usiąść w jednej z kawiarni na bulwarach.
    </p>

    <h3>Wieczór — Kolacja i jacuzzi</h3>
    <p>
      Wróć do <Link to="/domek-suprasl">domku In The Woods</Link> i rozpal kominek. Przygotuj
      kolację w pełni wyposażonej kuchni lub zamów dania z lokalnych{' '}
      <Link to="/blog/restauracje-suprasl">restauracji Supraśla</Link>. Wieczór zakończ w gorącej
      balii pod gwiazdami — to moment, który goście wspominają najczęściej.
    </p>

    <h2>Dzień 2: Natura i aktywności</h2>

    <h3>Rano — Poranna kawa w lesie</h3>
    <p>
      Obudź się w ciszy Puszczy Knyszyńskiej. Poranna kawa na tarasie z widokiem na las to rytuał,
      od którego warto zacząć dzień. Posłuchaj ptaków, pooddychaj świeżym powietrzem i poczuj, jak
      zwalnia tempo życia.
    </p>

    <h3>Przedpołudnie — Szlak przez Puszczę</h3>
    <p>
      Wyrusz na jeden z{' '}
      <Link to="/blog/szlaki-piesze-rowerowe-suprasl">szlaków Puszczy Knyszyńskiej</Link>. Polecamy
      Szlak Bioróżnorodności (7 km) — edukacyjną ścieżkę przez różne ekosystemy puszczy. Dla
      rowerzystów dostępne są oznakowane trasy leśne o różnej trudności.
    </p>

    <h3>Popołudnie — Kajaki lub Kruszyniany</h3>
    <p>
      Opcja A: <Link to="/blog/kajaki-suprasl">Spływ kajakowy rzeką Supraśl</Link> — 2-4 godziny na
      wodzie w otoczeniu dzikiej puszczy. Idealne dla par i grup.
    </p>
    <p>
      Opcja B: Wycieczka do <Link to="/blog/kruszyniany-tatarska-wies">Kruszynian</Link> —
      tatarskiej wioski z drewnianym meczetem z XVIII w. i pyszną kuchnią tatarską (pierekaczewnik,
      kibiny).
    </p>

    <h3>Wieczór — Ognisko i gwiazdy</h3>
    <p>
      Wieczór w ogrodzie In The Woods: rozpalenie ogniska, grill, pianki marshmallow i obserwacja
      gwiazd. Podlasie to jeden z regionów o najciemniejszym niebie w Polsce — bez zanieczyszczenia
      światłem widać tu Drogę Mleczną gołym okiem.
    </p>

    <h2>Dzień 3 (opcjonalny): Slow morning i wyjazd</h2>

    <h3>Rano — Wspólne śniadanie</h3>
    <p>
      Nie spiesz się. Przygotuj obfite śniadanie w kuchni domku — jajecznicę na maśle, świeży chleb,
      lokalne sery i dżemy. Podlasie słynie ze świeżych produktów, które warto kupić na lokalnym
      targu w Supraślu.
    </p>

    <h3>Przed wyjazdem — Arboretum Kopna Góra</h3>
    <p>
      W drodze powrotnej zatrzymaj się w Arboretum Kopna Góra (20 min od Supraśla) — ogrodzonym
      ogrodzie dendrologicznym z ponad 300 gatunkami drzew. Spokojny spacer na pożegnanie z
      Podlasiem.
    </p>

    <h2>Praktyczne informacje</h2>
    <ul>
      <li>
        <strong>Dojazd:</strong> Supraśl leży 25 min od Białegostoku (200 km od Warszawy)
      </li>
      <li>
        <strong>Nocleg:</strong> <Link to="/noclegi-suprasl">In The Woods</Link> — dom w lesie na
        wyłączność od 399 PLN/noc
      </li>
      <li>
        <strong>Check-in:</strong> od 15:00, check-out do 11:00
      </li>
      <li>
        <strong>Zwierzęta:</strong> mile widziane (gratis)
      </li>
      <li>
        <strong>Rezerwacja:</strong> bezpośrednia, tel. 722 765 101
      </li>
    </ul>

    <div className="bg-secondary p-8 rounded-lg text-center space-y-4 not-prose mt-12">
      <p className="font-heading text-xl text-foreground">Zaplanuj swój weekend w Supraślu</p>
      <p className="text-muted-foreground text-sm">
        Sprawdź dostępne terminy — rezerwacja bezpośrednia, bez prowizji.
      </p>
      <a href="tel:+48722765101" className="btn-primary inline-block">
        Sprawdź termin
      </a>
    </div>
  </BlogArticleLayout>
);

export default WeekendSupraslPlan;
