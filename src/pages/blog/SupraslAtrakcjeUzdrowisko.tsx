import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import blogSupraslUzdrowisko from '@/assets/blog-suprasl-atrakcje-uzdrowisko-optimized.webp';
import blogMonaster from '@/assets/blog-monaster-suprasl-optimized.webp';
import blogRzeka from '@/assets/blog-rzeka-suprasl-optimized.webp';

const SupraslAtrakcjeUzdrowisko = () => {
  const faqs = [
    {
      question: 'Jakie są najważniejsze atrakcje Supraśla?',
      answer:
        'Najważniejsze atrakcje to Monaster Zwiastowania NMP, Muzeum Ikon, bulwary nad rzeką Supraśl, Teatr Wierszalin, zabytkowe wille uzdrowiskowe i\u00a0liczne szlaki w\u00a0Puszczy Knyszyńskiej.',
    },
    {
      question: 'Czy Supraśl to uzdrowisko?',
      answer:
        'Supraśl ma status uzdrowiska. Sam pobyt ani lokalny klimat nie zastępują konsultacji medycznej; warunki świadczeń leczniczych sprawdź bezpośrednio w\u00a0placówce.',
    },
    {
      question: 'Ile czasu potrzeba na zwiedzanie Supraśla?',
      answer:
        'Na podstawowe atrakcje warto przeznaczyć 1–2 dni. Jeśli chcesz poznać okolicę głębiej — szlaki, rzekę, Puszczę Knyszyńską — idealny jest pobyt 3–5 dni.',
    },
    {
      question: 'Gdzie nocować w\u00a0Supraślu?',
      answer:
        'In The Woods to dom na wyłączność w\u00a0miejscowości Konne koło Supraśla. Trasę do obiektu, wyposażenie i\u00a0dostępność opcjonalnych dodatków sprawdź przed pobytem.',
    },
    {
      question: 'Jak dojechać do Supraśla?',
      answer:
        'Przed podróżą sprawdź aktualną trasę oraz rozkład transportu publicznego. Czas dojazdu zależy od miejsca wyjazdu i\u00a0warunków na drodze.',
    },
  ];

  const relatedArticles = [
    { title: 'Szlak Bioróżnorodności Supraśl', slug: 'szlak-bioroznorodnosci-suprasl' },
    { title: 'Kruszyniany – tatarska wieś Podlasia', slug: 'kruszyniany-tatarska-wies' },
    { title: 'Rzeka Supraśl i\u00a0okolica', slug: 'supraski-system-wodny' },
    {
      title: 'Najlepsze szlaki piesze i\u00a0rowerowe – Supraśl',
      slug: 'szlaki-piesze-rowerowe-suprasl',
    },
  ];

  return (
    <BlogArticleLayout
      title="Supraśl – atrakcje i&nbsp;informacje dla odwiedzających"
      metaTitle="Atrakcje Supraśla – Monaster, Muzeum Ikon i&nbsp;okolica"
      metaDescription="Przewodnik po wybranych atrakcjach Supraśla: Monaster, Muzeum Ikon, rzeka i&nbsp;lokalna kultura. Przed wizytą sprawdź aktualne godziny i&nbsp;zasady."
      slug="suprasl-atrakcje-uzdrowisko"
      publishDate="2026-03-14"
      readTime="12&nbsp;min"
      keywords={[
        'Supraśl atrakcje',
        'co zobaczyć Supraśl',
        'weekend Supraśl',
        'noclegi Supraśl',
        'Monaster Supraśl',
        'Muzeum Ikon',
        'uzdrowisko Supraśl',
        'Teatr Wierszalin',
      ]}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2>Supraśl — atrakcje i&nbsp;planowanie wizyty</h2>

      <p>
        <strong>Supraśl</strong> to miejscowość w&nbsp;województwie podlaskim, położona
        w&nbsp;sąsiedztwie Puszczy Knyszyńskiej. W&nbsp;planie wizyty można połączyć zwiedzanie
        zabytków i&nbsp;instytucji kultury ze spacerem. Sprawdź propozycje na{' '}
        <Link to="/weekend-suprasl">weekend w&nbsp;Supraślu</Link>.
      </p>

      <p>
        Poniżej znajdziesz informacje o&nbsp;wybranych miejscach. Godziny otwarcia, dostępność
        i&nbsp;zasady zwiedzania mogą się zmieniać, dlatego potwierdź je u&nbsp;organizatorów przed
        wyjazdem.
      </p>

      <img
        loading="lazy"
        decoding="async"
        sizes="(min-width: 768px) 768px, 100vw"
        src={blogSupraslUzdrowisko}
        alt="Supraśl atrakcje – Monaster Zwiastowania NMP, uzdrowisko Podlasia"
        className="w-full rounded-lg my-8"
        width="800"
        height="600"
      />

      <h2>Monaster Zwiastowania Najświętszej Maryi Panny</h2>

      <p>
        <strong>Monaster Zwiastowania NMP w&nbsp;Supraślu</strong> jest ważnym zabytkiem
        i&nbsp;miejscem dziedzictwa prawosławnego. Przed zwiedzaniem potwierdź aktualne zasady
        wejścia i&nbsp;nabożeństw.
      </p>

      <p>
        Informacje o&nbsp;dostępnych częściach kompleksu i&nbsp;zwiedzaniu znajdziesz u&nbsp;jego
        opiekunów. Nie zakładaj, że wszystkie pomieszczenia są udostępnione w&nbsp;każdym terminie.
      </p>

      <h3>Co warto zobaczyć w&nbsp;monasterze?</h3>

      <ul>
        <li>
          <strong>Cerkiew Zwiastowania NMP</strong> — sprawdź zasady jej zwiedzania
        </li>
        <li>
          <strong>Dzwonnica</strong> — dostępność potwierdź na miejscu
        </li>
        <li>
          <strong>Ogrody klasztorne</strong> — sprawdź, czy są dostępne dla odwiedzających
        </li>
        <li>
          <strong>Sklep klasztorny</strong> — aktualną ofertę potwierdź u&nbsp;gospodarzy monasteru
        </li>
      </ul>

      <img
        loading="lazy"
        decoding="async"
        sizes="(min-width: 768px) 768px, 100vw"
        src={blogMonaster}
        alt="Monaster Supraśl – cerkiew i&nbsp;ogrody klasztorne"
        className="w-full rounded-lg my-8"
        width="800"
        height="600"
      />

      <h2>Muzeum Ikon</h2>

      <p>
        <strong>Muzeum Ikon w&nbsp;Supraślu</strong> mieści się w&nbsp;budynkach przyklasztornych
        i&nbsp;prezentuje sztukę ikon. Aktualne informacje o&nbsp;wystawie, biletach
        i&nbsp;godzinach otwarcia znajdziesz na{' '}
        <a
          href="https://muzeumpodlaskie.pl/oddzialy/muzeum-ikon-w-supraslu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Informacje dla zwiedzających Muzeum Ikon (otworzy się w&nbsp;nowej karcie)"
        >
          stronie Muzeum Podlaskiego
        </a>
        .
      </p>

      <p>
        Szczegóły ekspozycji i&nbsp;dostępne formy zwiedzania mogą zależeć od aktualnego programu
        muzeum; przed wizytą potwierdź je u&nbsp;organizatora.
      </p>

      <h2>Bulwary nad rzeką Supraśl</h2>

      <p>
        Rzeka Supraśl jest jednym z&nbsp;elementów lokalnego krajobrazu. Przed zaplanowaniem spaceru
        nad wodą sprawdź dostępne wejścia, przebieg tras i&nbsp;ewentualne ograniczenia.
      </p>

      <p>
        Możliwość spływu zależy od organizatora, warunków i&nbsp;terminu. Informacje o{' '}
        <Link to="/blog/kajaki-suprasl">spływach kajakowych</Link> potwierdź bezpośrednio
        u&nbsp;organizatora.
      </p>

      <img
        loading="lazy"
        decoding="async"
        sizes="(min-width: 768px) 768px, 100vw"
        src={blogRzeka}
        alt="Rzeka Supraśl"
        className="w-full rounded-lg my-8"
        width="800"
        height="600"
      />

      <h2>Charakter uzdrowiskowy</h2>

      <p>
        Supraśl ma status uzdrowiska. Sam pobyt, klimat ani spacer nie gwarantują efektów
        zdrowotnych i&nbsp;nie zastępują konsultacji medycznej. Informacje o&nbsp;zabiegach,
        wskazaniach i&nbsp;przeciwwskazaniach uzyskaj bezpośrednio od placówki.
      </p>

      <p>
        W&nbsp;Supraślu można zobaczyć zabytkową zabudowę. Korzystaj z&nbsp;przestrzeni publicznej
        i&nbsp;szanuj prywatność mieszkańców; przed wejściem na posesję uzyskaj zgodę.
      </p>

      <h2>Zabytkowe domy i&nbsp;architektura</h2>

      <p>
        Wybierając się na spacer po mieście, pamiętaj, że część zabudowy i&nbsp;posesji jest
        prywatna. Korzystaj z&nbsp;dróg i&nbsp;miejsc dostępnych dla odwiedzających.
      </p>

      <h2>Teatr Wierszalin</h2>

      <p>
        W&nbsp;Supraślu działa Teatr Wierszalin. Repertuar, miejsce przedstawienia i&nbsp;zasady
        zakupu biletów sprawdź na{' '}
        <a
          href="https://wierszalin.pl/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Oficjalna strona Teatru Wierszalin (otworzy się w&nbsp;nowej karcie)"
        >
          oficjalnej stronie teatru
        </a>
        .
      </p>

      <h2>Rzeka Supraśl</h2>

      <p>
        Informacje o&nbsp;dostępie do rzeki, trasach i&nbsp;spływach kajakowych uzyskaj od lokalnych
        organizatorów. Warunki na wodzie mogą się zmieniać; stosuj się do ich zaleceń.
      </p>

      <h2>Restauracje i&nbsp;kultura kulinarna</h2>

      <p>
        Lokale, menu i&nbsp;godziny pracy mogą się zmieniać. Przed wizytą sprawdź aktualne
        informacje w&nbsp;wybranej restauracji. Wskazówki znajdziesz w{' '}
        <Link to="/blog/przewodnik-kulinarny-suprasl">przewodniku po lokalach</Link>.
      </p>

      <ul>
        <li>
          <strong>Kuchnię regionalną</strong> — pierogi z&nbsp;serem ziemniaczanym, babka
          ziemniaczana, kartacze
        </li>
        <li>
          <strong>Lokalne miody i&nbsp;nalewki</strong> — z&nbsp;klasztornego sklepu
          w&nbsp;monasterze
        </li>
        <li>
          <strong>Kawiarnie z&nbsp;tarasem</strong> — idealne na popołudniową kawę z&nbsp;widokiem
          na rzekę
        </li>
      </ul>

      <h2>Puszcza Knyszyńska — serce regionu</h2>

      <p>
        W&nbsp;okolicy Supraśla znajdują się tereny leśne i&nbsp;trasy turystyczne. Ich przebieg,
        stan i&nbsp;zasady korzystania sprawdź w&nbsp;aktualnych informacjach zarządcy oraz w{' '}
        <Link to="/blog/szlaki-piesze-rowerowe-suprasl">przewodniku po trasach</Link>.
      </p>

      <h2>Gdzie nocować w&nbsp;Supraślu?</h2>

      <p>
        Jeśli szukasz{' '}
        <strong>
          <Link to="/noclegi-suprasl">noclegu w&nbsp;Supraślu</Link>
        </strong>
        , <Link to="/">In The Woods</Link> to dom na wyłączność w&nbsp;miejscowości Konne koło
        Supraśla. Sprawdź lokalizację, wyposażenie i&nbsp;dostępność opcjonalnych dodatków przed
        wysłaniem zapytania.
      </p>

      <p>
        Plan wizyty dopasuj do aktualnej dostępności atrakcji i&nbsp;własnych potrzeb. Zobacz także{' '}
        <Link to="/weekend-suprasl">propozycje na weekend w&nbsp;Supraślu</Link>.
      </p>
    </BlogArticleLayout>
  );
};

export default SupraslAtrakcjeUzdrowisko;
