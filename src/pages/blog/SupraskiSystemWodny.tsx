import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import { BlogFigure, BlogInlineCta } from '@/components/BlogArticleParts';

const SupraskiSystemWodny = () => (
  <BlogArticleLayout
    title="Rzeka Supraśl i&nbsp;okolica — informacje dla odwiedzających"
    metaTitle="Rzeka Supraśl — trasy, spływy i&nbsp;praktyczne informacje"
    metaDescription="Rzeka Supraśl, spacery nad wodą i&nbsp;spływy kajakowe. Poznaj pomysły na aktywny dzień i&nbsp;zobacz, jak przygotować się do wyprawy."
    slug="supraski-system-wodny"
    publishDate="2026-03-10"
    readTime="4&nbsp;min"
    keywords={[
      'rzeka Supraśl',
      'spacery Supraśl',
      'kajaki Supraśl',
      'okolice Supraśla',
      'wędkarstwo Supraśl',
      'kraina pstrąga i lipienia',
      'łowiska karpiowe Podlasie',
    ]}
    dateModified="2026-11-04"
    faqs={[
      {
        question: 'Czy w\u00a0okolicy Supraśla można łowić ryby?',
        answer:
          'Tak. Rzeka Supraśl należy do krainy pstrąga i\u00a0lipienia z\u00a0rygorystycznymi zasadami połowu, a\u00a0w\u00a0okolicy są też komercyjne łowiska karpiowe, m.in. Selwa w\u00a0Supraślu. Przed wyjazdem sprawdź aktualny regulamin i\u00a0wymagane zezwolenia.',
      },
      {
        question: 'Czy można spacerować wzdłuż rzeki Supraśl?',
        answer:
          'Tak, w&nbsp;okolicy są miejsca na spacery nad wodą. Wybierz ogólnodostępną trasę i&nbsp;trzymaj się lokalnych oznaczeń, zwłaszcza w&nbsp;okolicy terenów chronionych.',
      },
      {
        question: 'Czy w\u00a0okolicy Supraśla można pływać kajakiem?',
        answer:
          'Tak, na rzece organizowane są spływy. Dostępne odcinki i&nbsp;warunki zależą od poziomu wody oraz oferty wypożyczalni, która pomoże dobrać trasę.',
      },
      {
        question: 'Skąd czerpać lokalne informacje?',
        answer:
          'Nadleśnictwo Supraśl publikuje informacje o\u00a0lasach i\u00a0trasach, a\u00a0lokalni organizatorzy — o\u00a0wydarzeniach.',
      },
    ]}
    relatedArticles={[
      { title: 'Kajaki na rzece Supraśl', slug: 'kajaki-suprasl' },
      {
        title: 'Szlaki piesze i\u00a0rowerowe w\u00a0okolicy',
        slug: 'szlaki-piesze-rowerowe-suprasl',
      },
      { title: 'Atrakcje Supraśla: co zobaczyć', slug: '/atrakcje-suprasl' },
    ]}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h2>Rzeka Supraśl i&nbsp;okolica</h2>
      <p>
        🌊 Rzeka Supraśl i&nbsp;jej okolice zachęcają do spokojnego spaceru, obserwowania przyrody
        albo wyprawy kajakiem. Dostęp do brzegu różni się w&nbsp;zależności od miejsca; wybieraj
        publiczne wejścia i&nbsp;zostawiaj przyrodę w&nbsp;takim stanie, w&nbsp;jakim ją zastałeś.
      </p>
      <p>
        Aktualnych informacji o&nbsp;terenach leśnych szukaj na stronie{' '}
        <a
          href="https://suprasl.bialystok.lasy.gov.pl/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nadleśnictwo Supraśl — informacje o&nbsp;terenach leśnych (otworzy się w&nbsp;nowej karcie)"
        >
          Nadleśnictwa Supraśl
        </a>
        . Mapa i&nbsp;prognoza pogody ułatwią zaplanowanie spaceru, a&nbsp;oznaczenia w&nbsp;terenie
        podpowiedzą, gdzie można bezpiecznie iść.
      </p>

      <h2>Spływ kajakowy</h2>
      <p>
        🚣 Długość spływu, czas na wodzie i&nbsp;transport kajaków zależą od wybranej oferty.
        Wypożyczalnia pomoże dobrać odcinek do Twojego doświadczenia i&nbsp;poinformuje
        o&nbsp;wyposażeniu. Warunki na rzece potrafią się zmieniać, dlatego przed startem posłuchaj
        wskazówek organizatora. Więcej informacji znajdziesz w{' '}
        <Link to="/blog/kajaki-suprasl">przewodniku po spływach kajakowych</Link>.
      </p>

      <h2>Kraina pstrąga i&nbsp;lipienia — wędkarstwo w&nbsp;okolicy domu</h2>
      <p>
        🎣 Dla wędkarzy rzeka Supraśl to nie byle jaka woda. Jej górny odcinek należy do tak zwanej
        krainy pstrąga i&nbsp;lipienia: chłodnych, szybko płynących, czystych wód, w&nbsp;których
        żyją gatunki wymagające od człowieka wyjątkowej delikatności. Według opisu na portalu{' '}
        <a
          href="https://krainapstraga.pl/lowiska/pzw-bialystok/suprasl-wraz-z-doplywami-bez-sokoldy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Łowisko Supraśl na portalu Kraina Pstrąga (otworzy się w&nbsp;nowej karcie)"
        >
          Kraina Pstrąga
        </a>{' '}
        odcinek obejmuje wody od źródeł do ujścia rzeki Cieliczanki, w&nbsp;okolicach Gródka
        i&nbsp;Supraśla, czyli tuż obok In The Woods.
      </p>
      <p>
        Zasady są tu wyjątkowo rygorystyczne i&nbsp;warto je poznać przed pierwszym rzutem. Zgodnie
        z&nbsp;opisem łowiska dozwolone są wyłącznie sztuczne przynęty, metoda spinningowa lub
        muchowa oraz haczyki bezzadziorowe. Pstrąga potokowego i&nbsp;lipienia nie wolno zabierać,
        a&nbsp;od 1&nbsp;września do 31&nbsp;grudnia obowiązuje zakaz brodzenia. Przepisy mogą się
        zmieniać, dlatego przed wyjazdem sprawdź aktualny regulamin i&nbsp;wymagane zezwolenie
        u&nbsp;uprawnionego do rybactwa, czyli w&nbsp;Okręgu PZW w&nbsp;Białymstoku.
      </p>

      <h2>Łowiska karpiowe: Selwa w&nbsp;Supraślu</h2>
      <p>
        Jeśli wolisz zasiadkę przy spokojnym stawie, w&nbsp;samym Supraślu znajdziesz łowisko{' '}
        <a
          href="https://kajakisuprasl.pl/selwa-lowisko/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Łowisko Selwa w&nbsp;Supraślu (otworzy się w&nbsp;nowej karcie)"
        >
          Selwa
        </a>
        . To dwa zarybione stawy o&nbsp;łącznej powierzchni około 1,5&nbsp;ha, położone na skraju
        miasta, z&nbsp;dojazdem samochodem pod brzeg. Według relacji wędkarzy w&nbsp;wodzie pływają
        m.in. karpie, tołpygi, amury, szczupaki i&nbsp;liny.
      </p>
      <BlogFigure
        src="/images/blog/lowisko-selwa-suprasl-staw.webp"
        alt="Szuwary i mgła nad stawem łowiska Selwa w Supraślu o świcie"
        width={640}
        height={448}
        caption="Poranek nad stawem na łowisku Selwa. Fot. kajakisuprasl.pl"
      />
      <p>
        Dla kogo to propozycja? Dla tych, którzy chcą połączyć wędkowanie z&nbsp;wypoczynkiem:
        łowisko opisywane jest jako miejsce z&nbsp;polem namiotowym, ogniskiem i&nbsp;miejscem na
        grilla. Ceny, godziny i&nbsp;regulamin zmieniają się, dlatego przed przyjazdem potwierdź je
        u&nbsp;gospodarza.
      </p>

      <h2>Leśna Cisza w&nbsp;Leszczanach</h2>
      <p>
        Kolejnym znanym na Podlasiu miejscem dla karpiarzy jest łowisko Leśna Cisza
        w&nbsp;Leszczanach, w&nbsp;gminie Krynki. Staw o&nbsp;powierzchni około 2,5&nbsp;ha otoczony
        jest lasem, a&nbsp;przy wodzie stoją wiaty. Z&nbsp;opisów łowiska wynika, że żyją w&nbsp;nim
        karpie, amury, szczupaki i&nbsp;sumy, a&nbsp;okazy karpi dochodzą do kilkunastu kilogramów.
        Jest to wyprawa na cały dzień lub weekend, dlatego zaplanuj ją jako osobny wyjazd
        z&nbsp;Supraśla.
      </p>
      <BlogFigure
        src="/images/blog/lowisko-lesna-cisza-karp.webp"
        alt="Wędkarz z dużym karpiem lustrzeniem nad stawem w Leszczanach, w tle las"
        width={815}
        height={376}
        caption="Karp z łowiska Leśna Cisza."
      />
      <p>
        Wszystkie informacje o&nbsp;cenach i&nbsp;zasadach pochodzą ze źródeł publicznych
        i&nbsp;mogą być nieaktualne, więc zadzwoń do gospodarza przed wyjazdem. Pamiętaj też
        o&nbsp;zasadach dobrej praktyki: bezpieczne uwalnianie ryb, szacunek do brzegu
        i&nbsp;zabranie śmieci ze sobą.
      </p>
      <BlogInlineCta
        title="Wędkowanie i spokojna baza w lesie"
        text="Dom na wyłączność w Konnych, 10 min od Supraśla, z kominkiem, ogrodzonym ogrodem i w pełni wyposażoną kuchnią. Sprawdź wolne terminy lub zadzwoń."
      />

      <h2>Co jeszcze zaplanować?</h2>
      <p>
        W&nbsp;Supraślu możesz odwiedzić Monaster i&nbsp;Muzeum Ikon. Godziny, ceny biletów
        i&nbsp;zasady zwiedzania Muzeum znajdziesz na{' '}
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
        In The Woods to dom na wyłączność w&nbsp;miejscowości Konne koło Supraśla. Jeśli szukasz
        noclegu blisko rzeki i&nbsp;puszczy, poznaj{' '}
        <Link to="/#rezerwacja">dom In The Woods w&nbsp;Konnem</Link>. Opis wyposażenia
        i&nbsp;opcjonalnych dodatków znajdziesz na stronie obiektu.
      </p>
    </article>
  </BlogArticleLayout>
);

export default SupraskiSystemWodny;
