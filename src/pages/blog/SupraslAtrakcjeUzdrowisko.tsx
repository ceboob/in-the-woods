import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import blogSupraslUzdrowisko from '@/assets/blog-suprasl-atrakcje-uzdrowisko.jpg';
import blogMonaster from '@/assets/blog-monaster-suprasl.jpg';
import blogRzeka from '@/assets/blog-rzeka-suprasl.jpg';

const SupraslAtrakcjeUzdrowisko = () => {
  const faqs = [
    {
      question: 'Jakie są najważniejsze atrakcje Supraśla?',
      answer:
        'Najważniejsze atrakcje to Monaster Zwiastowania NMP, Muzeum Ikon, bulwary nad rzeką Supraśl, Teatr Wierszalin, zabytkowe wille uzdrowiskowe i liczne szlaki w Puszczy Knyszyńskiej.',
    },
    {
      question: 'Czy Supraśl to uzdrowisko?',
      answer:
        'Supraśl ma status uzdrowiska. Sam pobyt ani lokalny klimat nie zastępują konsultacji medycznej; warunki świadczeń leczniczych sprawdź bezpośrednio w placówce.',
    },
    {
      question: 'Ile czasu potrzeba na zwiedzanie Supraśla?',
      answer:
        'Na podstawowe atrakcje warto przeznaczyć 1–2 dni. Jeśli chcesz poznać okolicę głębiej — szlaki, rzekę, Puszczę Knyszyńską — idealny jest pobyt 3–5 dni.',
    },
    {
      question: 'Gdzie nocować w Supraślu?',
      answer:
        'In The Woods to dom na wyłączność w miejscowości Konne koło Supraśla. Trasę do obiektu, wyposażenie i dostępność opcjonalnych dodatków sprawdź przed pobytem.',
    },
    {
      question: 'Jak dojechać do Supraśla?',
      answer:
        'Przed podróżą sprawdź aktualną trasę oraz rozkład transportu publicznego. Czas dojazdu zależy od miejsca wyjazdu i warunków na drodze.',
    },
  ];

  const relatedArticles = [
    { title: 'Szlak Bioróżnorodności Supraśl', slug: 'szlak-bioroznorodnosci-suprasl' },
    { title: 'Kruszyniany – tatarska wieś Podlasia', slug: 'kruszyniany-tatarska-wies' },
    { title: 'Rzeka Supraśl i okolica', slug: 'supraski-system-wodny' },
    {
      title: 'Najlepsze szlaki piesze i rowerowe – Supraśl',
      slug: 'szlaki-piesze-rowerowe-suprasl',
    },
  ];

  return (
    <BlogArticleLayout
      title="Supraśl – atrakcje i informacje dla odwiedzających"
      metaTitle="Atrakcje Supraśla – Monaster, Muzeum Ikon i okolica"
      metaDescription="Przewodnik po wybranych atrakcjach Supraśla: Monaster, Muzeum Ikon, rzeka i lokalna kultura. Przed wizytą sprawdź aktualne godziny i zasady."
      slug="suprasl-atrakcje-uzdrowisko"
      publishDate="2026-03-14"
      readTime="12 min"
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
      <h2>Supraśl — atrakcje i planowanie wizyty</h2>

      <p>
        <strong>Supraśl</strong> to miejscowość w województwie podlaskim, położona w sąsiedztwie
        Puszczy Knyszyńskiej. W planie wizyty można połączyć zwiedzanie zabytków i instytucji kultury
        ze spacerem. Sprawdź propozycje na{' '}
        <Link to="/weekend-suprasl">weekend w Supraślu</Link>.
      </p>

      <p>
        Poniżej znajdziesz informacje o wybranych miejscach. Godziny otwarcia, dostępność i zasady
        zwiedzania mogą się zmieniać, dlatego potwierdź je u organizatorów przed wyjazdem.
      </p>

      <img loading="lazy" decoding="async" sizes="(min-width: 768px) 768px, 100vw"
        src={blogSupraslUzdrowisko}
        alt="Supraśl atrakcje – Monaster Zwiastowania NMP, uzdrowisko Podlasia"
        className="w-full rounded-lg my-8"
      width="800"
               height="600"
             />

      <h2>Monaster Zwiastowania Najświętszej Maryi Panny</h2>

      <p>
        <strong>Monaster Zwiastowania NMP w Supraślu</strong> jest ważnym zabytkiem i miejscem
        dziedzictwa prawosławnego. Przed zwiedzaniem potwierdź aktualne zasady wejścia i nabożeństw.
      </p>

      <p>
        Informacje o dostępnych częściach kompleksu i zwiedzaniu znajdziesz u jego opiekunów. Nie
        zakładaj, że wszystkie pomieszczenia są udostępnione w każdym terminie.
      </p>

      <h3>Co warto zobaczyć w monasterze?</h3>

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
          <strong>Sklep klasztorny</strong> — aktualną ofertę potwierdź u gospodarzy monasteru
        </li>
      </ul>

      <img loading="lazy" decoding="async" sizes="(min-width: 768px) 768px, 100vw"
        src={blogMonaster}
        alt="Monaster Supraśl – cerkiew i ogrody klasztorne"
        className="w-full rounded-lg my-8"
      width="800"
               height="600"
             />

      <h2>Muzeum Ikon</h2>

      <p>
        <strong>Muzeum Ikon w Supraślu</strong> mieści się w budynkach przyklasztornych i prezentuje
        sztukę ikon. Aktualne informacje o wystawie, biletach i godzinach otwarcia znajdziesz na{' '}
        <a href="https://muzeumpodlaskie.pl/oddzialy/muzeum-ikon-w-supraslu/" target="_blank"
          rel="noopener noreferrer"
          aria-label="Informacje dla zwiedzających Muzeum Ikon (otworzy się w nowej karcie)">
          stronie Muzeum Podlaskiego
        </a>
        .
      </p>

      <p>
        Szczegóły ekspozycji i dostępne formy zwiedzania mogą zależeć od aktualnego programu
        muzeum; przed wizytą potwierdź je u organizatora.
      </p>

      <h2>Bulwary nad rzeką Supraśl</h2>

      <p>
        Rzeka Supraśl jest jednym z elementów lokalnego krajobrazu. Przed zaplanowaniem spaceru nad
        wodą sprawdź dostępne wejścia, przebieg tras i ewentualne ograniczenia.
      </p>

      <p>
        Możliwość spływu zależy od organizatora, warunków i terminu. Informacje o{' '}
        <Link to="/blog/kajaki-suprasl">spływach kajakowych</Link> potwierdź bezpośrednio u
        organizatora.
      </p>

      <img loading="lazy" decoding="async" sizes="(min-width: 768px) 768px, 100vw"
        src={blogRzeka}
        alt="Rzeka Supraśl"
        className="w-full rounded-lg my-8"
      width="800"
               height="600"
             />

      <h2>Charakter uzdrowiskowy</h2>

      <p>
        Supraśl ma status uzdrowiska. Sam pobyt, klimat ani spacer nie gwarantują efektów zdrowotnych
        i nie zastępują konsultacji medycznej. Informacje o zabiegach, wskazaniach i przeciwwskazaniach
        uzyskaj bezpośrednio od placówki.
      </p>

      <p>
        W Supraślu można zobaczyć zabytkową zabudowę. Korzystaj z przestrzeni publicznej i szanuj
        prywatność mieszkańców; przed wejściem na posesję uzyskaj zgodę.
      </p>

      <h2>Zabytkowe domy i architektura</h2>

      <p>
        Wybierając się na spacer po mieście, pamiętaj, że część zabudowy i posesji jest prywatna.
        Korzystaj z dróg i miejsc dostępnych dla odwiedzających.
      </p>

      <h2>Teatr Wierszalin</h2>

      <p>
        W Supraślu działa Teatr Wierszalin. Repertuar, miejsce przedstawienia i zasady zakupu biletów
        sprawdź na{' '}
        <a href="https://wierszalin.pl/" target="_blank" rel="noopener noreferrer"
          aria-label="Oficjalna strona Teatru Wierszalin (otworzy się w nowej karcie)">
          oficjalnej stronie teatru
        </a>.
      </p>

      <h2>Rzeka Supraśl</h2>

      <p>
        Informacje o dostępie do rzeki, trasach i spływach kajakowych uzyskaj od lokalnych
        organizatorów. Warunki na wodzie mogą się zmieniać; stosuj się do ich zaleceń.
      </p>

      <h2>Restauracje i kultura kulinarna</h2>

      <p>
        Lokale, menu i godziny pracy mogą się zmieniać. Przed wizytą sprawdź aktualne informacje w
        wybranej restauracji. Wskazówki znajdziesz w{' '}
        <Link to="/blog/restauracje-suprasl">przewodniku po lokalach</Link>.
      </p>

      <ul>
        <li>
          <strong>Kuchnię regionalną</strong> — pierogi z serem ziemniaczanym, babka ziemniaczana,
          kartacze
        </li>
        <li>
          <strong>Lokalne miody i nalewki</strong> — z klasztornego sklepu w monasterze
        </li>
        <li>
          <strong>Kawiarnie z tarasem</strong> — idealne na popołudniową kawę z widokiem na rzekę
        </li>
      </ul>

      <h2>Puszcza Knyszyńska — serce regionu</h2>

      <p>
        W okolicy Supraśla znajdują się tereny leśne i trasy turystyczne. Ich przebieg, stan i zasady
        korzystania sprawdź w aktualnych informacjach zarządcy oraz w{' '}
        <Link to="/blog/szlaki-piesze-rowerowe-suprasl">przewodniku po trasach</Link>.
      </p>

      <h2>Gdzie nocować w Supraślu?</h2>

      <p>
        Jeśli szukasz{' '}
        <strong>
          <Link to="/noclegi-suprasl">noclegu w Supraślu</Link>
        </strong>
        , <Link to="/">In The Woods</Link> to dom na wyłączność w miejscowości Konne koło Supraśla.
        Sprawdź lokalizację, wyposażenie i dostępność opcjonalnych dodatków przed wysłaniem
        zapytania.
      </p>

      <p>
        Plan wizyty dopasuj do aktualnej dostępności atrakcji i własnych potrzeb. Zobacz także{' '}
        <Link to="/weekend-suprasl">propozycje na weekend w Supraślu</Link>.
      </p>
    </BlogArticleLayout>
  );
};

export default SupraslAtrakcjeUzdrowisko;
