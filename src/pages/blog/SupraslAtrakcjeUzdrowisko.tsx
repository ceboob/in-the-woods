import BlogArticleLayout from '@/components/BlogArticleLayout';
import CommonsPhoto from '@/components/CommonsPhoto';
import { Link } from 'react-router-dom';
import { commonsPhotos } from '@/lib/commonsPhotos';

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
        'Supraśl ma status uzdrowiska. Pobyt ani lokalny klimat nie zastępują konsultacji medycznej; o\u00a0dostępnych świadczeniach i\u00a0ich warunkach poinformuje wybrana placówka.',
    },
    {
      question: 'Ile czasu potrzeba na zwiedzanie Supraśla?',
      answer:
        'Na podstawowe atrakcje warto przeznaczyć 1–2 dni. Jeśli chcesz poznać okolicę głębiej — szlaki, rzekę, Puszczę Knyszyńską — idealny jest pobyt 3–5 dni.',
    },
    {
      question: 'Gdzie nocować w\u00a0Supraślu?',
      answer:
        'In The Woods to dom na wyłączność w\u00a0miejscowości Konne koło Supraśla. W\u00a0opisie obiektu znajdziesz informacje o\u00a0dojeździe, wyposażeniu i\u00a0dodatkach.',
    },
    {
      question: 'Jak dojechać do Supraśla?',
      answer:
        'Do Supraśla można dojechać samochodem lub autobusem z\u00a0Białegostoku. Czas podróży zależy od wybranej trasy i\u00a0warunków na drodze.',
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
      metaDescription="Przewodnik po atrakcjach Supraśla: Monaster, Muzeum Ikon, rzeka i&nbsp;lokalna kultura. Podpowiadamy, co zobaczyć podczas krótkiego pobytu."
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
        w&nbsp;sąsiedztwie Puszczy Knyszyńskiej. Zwiedzanie zabytków i&nbsp;instytucji kultury łatwo
        połączyć tu ze spacerem. Zobacz propozycje na{' '}
        <Link to="/weekend-suprasl">weekend w&nbsp;Supraślu</Link>.
      </p>

      <p>
        Poniżej znajdziesz informacje o&nbsp;wybranych miejscach. Godziny otwarcia i&nbsp;zasady
        zwiedzania mogą się różnić w&nbsp;zależności od sezonu oraz dnia tygodnia.
      </p>

      <CommonsPhoto
        photo={commonsPhotos.suprasl}
        alt="Widok ogólny Supraśla nad rzeką Supraśl"
        loading="lazy"
      />

      <h2>Monaster Zwiastowania Najświętszej Maryi Panny</h2>

      <p>
        <strong>Monaster Zwiastowania NMP w&nbsp;Supraślu</strong> jest ważnym zabytkiem
        i&nbsp;miejscem dziedzictwa prawosławnego. Zwiedzanie odbywa się z&nbsp;poszanowaniem
        nabożeństw i&nbsp;zasad obowiązujących w&nbsp;świątyni.
      </p>

      <p>
        Nie wszystkie części kompleksu są udostępniane zwiedzającym. Na miejscu znajdziesz
        informacje o&nbsp;dostępnych przestrzeniach i&nbsp;możliwościach zwiedzania.
      </p>

      <h3>Co warto zobaczyć w&nbsp;monasterze?</h3>

      <ul>
        <li>
          <strong>Cerkiew Zwiastowania NMP</strong> — pamiętaj o&nbsp;zachowaniu ciszy
        </li>
        <li>
          <strong>Dzwonnica</strong> — wejście może być ograniczone
        </li>
        <li>
          <strong>Ogrody klasztorne</strong> — dostęp zależy od zasad obowiązujących na terenie monasteru
        </li>
        <li>
          <strong>Sklep klasztorny</strong> — oferta produktów może się zmieniać
        </li>
      </ul>

      <CommonsPhoto
        photo={commonsPhotos.monastery}
        alt="Monaster Zwiastowania w Supraślu nad rzeką Supraśl"
        loading="lazy"
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
        Wystawy i&nbsp;formy zwiedzania zależą od aktualnego programu muzeum; szczegółów szukaj na
        stronie Muzeum Podlaskiego.
      </p>

      <h2>Bulwary nad rzeką Supraśl</h2>

      <p>
        Bulwary nad rzeką Supraśl to dobry kierunek na spokojny spacer. Trzymaj się wyznaczonych
        ścieżek i&nbsp;zwracaj uwagę na oznakowanie przy wodzie.
      </p>

      <p>
        Sezon i&nbsp;warunki na rzece wpływają na dostępność spływów. Więcej o{' '}
        <Link to="/blog/kajaki-suprasl">spływach kajakowych</Link> przeczytasz w&nbsp;osobnym
        przewodniku.
      </p>

      <CommonsPhoto
        photo={commonsPhotos.river}
        alt="Rzeka Supraśl w Parku Krajobrazowym Puszczy Knyszyńskiej"
        loading="lazy"
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
        W&nbsp;Supraślu działa Teatr Wierszalin. Repertuar, miejsce przedstawienia i&nbsp;informacje
        o&nbsp;biletach znajdziesz na{' '}
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
        Rzeka i&nbsp;jej dolina zmieniają się wraz z&nbsp;porą roku. Jeśli planujesz spływ, wybierz
        trasę dopasowaną do swoich umiejętności i&nbsp;stosuj się do wskazówek organizatora.
      </p>

      <h2>Restauracje i&nbsp;kultura kulinarna</h2>

      <p>
        Restauracje, kawiarnie i&nbsp;lokalne jadłodajnie pozwalają poznać regionalne smaki.
        Wskazówki znajdziesz w{' '}
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
        W&nbsp;okolicy Supraśla znajdują się liczne leśne trasy turystyczne. Wybieraj oznakowane
        szlaki, respektuj czasowe zamknięcia i&nbsp;zasady ochrony przyrody. Więcej propozycji
        znajdziesz w{' '}
        <Link to="/blog/szlaki-piesze-rowerowe-suprasl">przewodniku po trasach</Link>.
      </p>

      <h2>Gdzie nocować w&nbsp;Supraślu?</h2>

      <p>
        Jeśli szukasz{' '}
        <strong>
          <Link to="/">noclegu w&nbsp;Supraślu</Link>
        </strong>
        , <Link to="/">In The Woods</Link> to dom na wyłączność w&nbsp;miejscowości Konne koło
        Supraśla. To spokojna baza wypadowa na spacery, zwiedzanie miasta i&nbsp;wycieczki
        po&nbsp;Puszczy Knyszyńskiej.
      </p>

      <p>
        Plan wizyty dopasuj do aktualnej dostępności atrakcji i&nbsp;własnych potrzeb. Zobacz także{' '}
        <Link to="/weekend-suprasl">propozycje na weekend w&nbsp;Supraślu</Link>.
      </p>
    </BlogArticleLayout>
  );
};

export default SupraslAtrakcjeUzdrowisko;
