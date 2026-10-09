import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import blogMonaster from '@/assets/blog-monaster-suprasl.jpg';
import blogRzeka from '@/assets/blog-rzeka-suprasl.jpg';
import exteriorMain from '@/assets/exterior-main.webp';

const SupraslAtrakcje = () => {
  const faqs = [
    {
      question: 'Co warto zobaczyć w Supraślu?',
      answer:
        'Najważniejsze atrakcje to Monaster Zwiastowania NMP, Muzeum Ikon, ulica Cieliczańska, rzeka Supraśl, Park Konstytucji 3 Maja oraz okoliczne szlaki w Puszczy Knyszyńskiej.',
    },
    {
      question: 'Czy Supraśl nadaje się na weekend?',
      answer:
        'Długość pobytu zależy od planu i aktualnej dostępności atrakcji. Przed wyjazdem sprawdź godziny otwarcia i warunki zwiedzania.',
    },
    {
      question: 'Jak daleko jest Supraśl od Białegostoku?',
      answer:
        'Przed podróżą sprawdź aktualną trasę i rozkład transportu publicznego. Czas dojazdu zależy od miejsca wyjazdu i warunków na drodze.',
    },
    {
      question: 'Gdzie nocować w Supraślu?',
      answer:
        'In The Woods to dom na wyłączność w miejscowości Konne koło Supraśla. Sprawdź lokalizację, wyposażenie i dostępność opcjonalnych dodatków przed pobytem.',
    },
  ];

  const relatedArticles = [
    { title: 'Rzeka Supraśl i okolica', slug: 'supraski-system-wodny' },
    {
      title: 'Szlak Powstania Styczniowego w Puszczy Knyszyńskiej',
      slug: 'szlak-powstania-styczniowego-suprasl',
    },
    { title: 'Najlepsze szlaki piesze i rowerowe Supraśl', slug: 'szlaki-piesze-rowerowe-suprasl' },
  ];

  return (
    <BlogArticleLayout
      title="Supraśl – co zobaczyć? Przewodnik dla odwiedzających"
      metaTitle="Co zobaczyć w Supraślu – atrakcje i praktyczne informacje"
      metaDescription="Poznaj wybrane atrakcje Supraśla i zaplanuj wizytę. Przed wyjazdem sprawdź aktualne godziny otwarcia, zasady zwiedzania i dostępność tras."
      slug="suprasl-atrakcje-national-geographic"
      publishDate="2026-03-05"
      readTime="11 min"
      keywords={[
        'Supraśl atrakcje',
        'co zobaczyć Supraśl',
        'noclegi Supraśl',
        'weekend Supraśl',
        'Monaster Supraśl',
        'Muzeum Ikon Supraśl',
      ]}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2>Supraśl — co zobaczyć i jak zaplanować wizytę</h2>

      <p>
        Supraśl łączy zabytki, instytucje kultury i sąsiedztwo terenów leśnych. Poniżej zebraliśmy
        kilka pomysłów na zwiedzanie; aktualne godziny i zasady potwierdź przed wyjazdem.
      </p>

      <p>
        Supraśl leży w sąsiedztwie Puszczy Knyszyńskiej. To propozycja na{' '}
        <Link to="/weekend-suprasl">weekend</Link>, romantyczny wyjazd lub rodzinne wakacje.
      </p>

      <img loading="lazy" decoding="async" sizes="(min-width: 768px) 768px, 100vw"
        src={blogMonaster}
        alt="Monaster Supraśl – atrakcje, co zobaczyć"
        className="w-full rounded-lg my-8"
      width="800"
               height="600"
             />

      <h2>Wybrane miejsca w Supraślu</h2>

      <p>
        Wśród miejsc, które można uwzględnić w planie, są monaster, Muzeum Ikon i trasy w okolicy.
        Szczegóły zwiedzania sprawdź u poszczególnych organizatorów.
      </p>

      <h3>Monaster – duchowe serce Supraśla</h3>

      <p>
        Monaster Zwiastowania Najświętszej Maryi Panny jest jednym z ważnych zabytków Supraśla.
        Zasady wejścia, dostępność poszczególnych części kompleksu i godziny nabożeństw potwierdź u
        jego opiekunów.
      </p>

      <p>
        Informacje o wystawach, zwiedzaniu i udostępnionych częściach kompleksu sprawdź przed
        wizytą. Nie zakładaj, że wszystkie przestrzenie są dostępne w każdym terminie.
      </p>

      <h3>Muzeum Ikon</h3>

      <p>
        Muzeum Ikon działa w Supraślu. Aktualne informacje o ekspozycji, biletach, godzinach otwarcia
        i zasadach zwiedzania znajdziesz na{' '}
        <a href="https://muzeumpodlaskie.pl/oddzialy/muzeum-ikon-w-supraslu/" target="_blank"
          rel="noopener noreferrer"
          aria-label="Aktualne informacje dla zwiedzających Muzeum Ikon (otworzy się w nowej karcie)">
          stronie Muzeum Podlaskiego
        </a>.
      </p>

      <p>
        Przed wizytą sprawdź, które wystawy i formy zwiedzania są dostępne w wybranym terminie.
      </p>

      <img loading="lazy" decoding="async" sizes="(min-width: 768px) 768px, 100vw"
        src={blogRzeka}
        alt="Rzeka Supraśl – kajaki, atrakcje Supraśl"
        className="w-full rounded-lg my-8"
      width="800"
               height="600"
             />

      <h2>Największe atrakcje Supraśla</h2>

      <h3>Rzeka Supraśl</h3>

      <p>
        Przed spacerem w pobliżu rzeki sprawdź dostępne wejścia, przebieg tras i lokalne zasady.
        Warunki nad wodą mogą się zmieniać.
      </p>

      <p>
        Informacje o dostępie do rzeki, trasach i spływach kajakowych znajdziesz u lokalnych
        organizatorów. Warunki na wodzie mogą się zmieniać; stosuj się do ich zaleceń. Zobacz{' '}
        <Link to="/blog/kajaki-suprasl">informacje o spływach kajakowych</Link>.
      </p>

      <h3>Ulica Cieliczańska</h3>

      <p>
        Podczas spaceru po Supraślu można zwrócić uwagę na drewnianą zabudowę. Pamiętaj, że część
        budynków i posesji jest prywatna; oglądaj je z miejsc dostępnych publicznie.
      </p>

      <h3>Park Konstytucji 3 Maja</h3>

      <p>
        Jeśli planujesz odwiedzić park, sprawdź na miejscu dostępność i zasady korzystania z jego
        infrastruktury. Aktualnych informacji o wydarzeniach szukaj u lokalnego organizatora.
      </p>

      <h3>Kawiarnie i restauracje</h3>

      <p>
        Lokale, menu i godziny pracy mogą się zmieniać. Przed wizytą sprawdź aktualną ofertę
        wybranych restauracji w{' '}
        <Link to="/blog/restauracje-suprasl">przewodniku po lokalach</Link>.
      </p>

      <h2>Pomysł na weekend w Supraślu</h2>

      <h3>Dzień 1: Kultura i historia</h3>

      <p>
        Zacznij od zwiedzania monasteru, a następnie odwiedź Muzeum Ikon, jeśli jest otwarte.
        Aktualne godziny i zasady wstępu sprawdź przed wyjazdem. Później możesz wybrać spacer po
        mieście lub posiłek w lokalu, którego menu i godziny warto potwierdzić.
      </p>

      <h3>Dzień 2: Natura i aktywność</h3>

      <p>
        Rano możesz wybrać trasę pieszą lub rowerową, jeśli jest dostępna i odpowiada Twoim
        możliwościom. Przed wyjściem sprawdź zasady na terenach chronionych. Spływ kajakowy zaplanuj
        po potwierdzeniu warunków u organizatora. Wieczorem możesz odpocząć w domu; balia ogrodowa z
        funkcją jacuzzi jest opcjonalnym dodatkiem, którego dostępność trzeba potwierdzić.
      </p>

      <h3>Dzień 3: Slow morning i powrót</h3>

      <p>
        Zostaw czas na śniadanie i spacer, jeśli pozwalają na to pogoda oraz plan wyjazdu. Godziny
        targów i lokalnych wydarzeń potwierdź przed wizytą.
      </p>

      <img loading="lazy" decoding="async" sizes="(min-width: 768px) 768px, 100vw"
        src={exteriorMain}
        alt="In The Woods – noclegi Supraśl, dom w lesie z jacuzzi"
        className="w-full rounded-lg my-8"
      width="800"
               height="600"
             />

      <h2>Dlaczego warto nocować blisko natury?</h2>

      <p>
        Lokalizację noclegu dobierz do planu podróży i sprawdź dojazd do miejsc, które chcesz
        odwiedzić. Przed rezerwacją porównaj wyposażenie, warunki i cenę.
      </p>

      <p>
        Jeśli szukasz <Link to="/noclegi-suprasl">noclegu w okolicy Supraśla</Link>, sprawdź In The
        Woods — <Link to="/dom-w-lesie-suprasl">dom na wyłączność</Link> w miejscowości Konne.
        Sprawdź lokalizację, warunki dojazdu i dostępność dodatków przed wysłaniem zapytania.
      </p>

      <h2>Supraśl w różnych porach roku</h2>

      <h3>Wiosna</h3>
      <p>
        Przed spacerem sprawdź pogodę, stan tras i aktualne zasady dostępu.
      </p>

      <h3>Lato</h3>
      <p>
        Sprawdź dostępność atrakcji, kąpielisk i wydarzeń u ich organizatorów.
      </p>

      <h3>Jesień</h3>
      <p>
        Przed spacerem lub grzybobraniem sprawdź lokalne zasady, pogodę i dostępność terenu.
      </p>

      <h3>Zima</h3>
      <p>
        Zimą sprawdź warunki pogodowe i stan tras, zanim zaplanujesz aktywność na zewnątrz.
      </p>

      <p>
        Niezależnie od pory roku, Supraśl oferuje autentyczne doświadczenia, których próżno szukać w
        większych, bardziej turystycznych miastach. To miejsce, które nagradza ciekawość i otwartość
        — i do którego niezmiennie chce się wracać.
      </p>
    </BlogArticleLayout>
  );
};

export default SupraslAtrakcje;
