import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const CoRobicSuprasl = () => (
  <BlogArticleLayout
    title="Co robić w Supraślu? Wybrane atrakcje i wskazówki"
    metaTitle="Co robić w Supraślu – atrakcje i wskazówki dla odwiedzających"
    metaDescription="Poznaj wybrane atrakcje Supraśla i zaplanuj wizytę. Sprawdź aktualne godziny otwarcia, zasady zwiedzania, trasy i warunki spływów."
    slug="co-robic-suprasl"
    publishDate="2026-03-25"
    readTime="10 min"
    keywords={[
      'co robić w Supraślu',
      'Supraśl atrakcje',
      'co zobaczyć Supraśl',
      'atrakcje Supraśl 2026',
    ]}
    faqs={[
      {
        question: 'Co warto zobaczyć w Supraślu?',
        answer:
          'Monaster Zwiastowania NMP, Muzeum Ikon, bulwary nad rzeką Supraśl, Arboretum Kopna Góra i szlaki Puszczy Knyszyńskiej.',
      },
      {
        question: 'Ile czasu potrzebujesz na zwiedzanie Supraśla?',
        answer:
          'Długość pobytu zależy od wybranych atrakcji, ich godzin otwarcia i Twojego planu. Sprawdź dostępność przed wyjazdem.',
      },
      {
        question: 'Czy Supraśl jest dobry na weekendowy wypad?',
        answer:
          'Supraśl i okolica oferują zabytki, instytucje kultury i trasy spacerowe. Wybierz plan odpowiedni do swoich potrzeb i aktualnej dostępności atrakcji.',
      },
    ]}
    relatedArticles={[
      { title: 'Kajaki Supraśl – spływy rzeką Supraśl', slug: 'kajaki-suprasl' },
      { title: 'Szlaki piesze i rowerowe Supraśl', slug: 'szlaki-piesze-rowerowe-suprasl' },
      { title: 'Restauracje Supraśl – gdzie zjeść', slug: 'restauracje-suprasl' },
    ]}
  >
    <h2>Co robić w Supraślu? Wybrane atrakcje i wskazówki</h2>

    <p>
      Supraśl łączy zabytki, instytucje kultury i sąsiedztwo terenów leśnych. Wybierając się na{' '}
      <Link to="/weekend-suprasl">weekend w Supraślu</Link>, sprawdź aktualne godziny otwarcia oraz
      zasady korzystania z tras.
    </p>

    <h2>Monaster Zwiastowania NMP — duchowe serce Supraśla</h2>
    <p>
      Prawosławny Monaster Zwiastowania Najświętszej Maryi Panny jest ważnym zabytkiem Supraśla.
      Zasady wejścia, dostępność poszczególnych części kompleksu i godziny nabożeństw potwierdź u
      jego opiekunów.
    </p>

    <h2>Muzeum Ikon</h2>
    <p>
      Przy Monasterze działa Muzeum Ikon, które prezentuje sztukę ikon. Informacje o ekspozycji,
      biletach, godzinach otwarcia i zasadach zwiedzania sprawdź na{' '}
      <a href="https://muzeumpodlaskie.pl/oddzialy/muzeum-ikon-w-supraslu/" target="_blank"
        rel="noopener noreferrer"
        aria-label="Aktualne informacje dla zwiedzających Muzeum Ikon (otworzy się w nowej karcie)">
        stronie Muzeum Podlaskiego
      </a>
      .
    </p>

    <h2>Rzeka Supraśl i spacery w okolicy</h2>
    <p>
      Przed spacerem w pobliżu rzeki sprawdź dostępne wejścia, przebieg tras i lokalne zasady.
      Warunki nad wodą mogą się zmieniać.
    </p>

    <h2>Szlaki Puszczy Knyszyńskiej</h2>
    <p>
      W okolicy znajdują się trasy piesze i rowerowe. Ich przebieg, stan, poziom trudności i zasady
      dostępu sprawdź przed wyjściem w aktualnych materiałach zarządcy oraz w{' '}
      <Link to="/blog/szlaki-piesze-rowerowe-suprasl">przewodniku po trasach</Link>.
    </p>
    <p>
      Jeśli planujesz jazdę rowerem, przed wyjazdem potwierdź dostępność wypożyczalni i sprawdź,
      czy wybrana trasa odpowiada Twoim umiejętnościom.
    </p>

    <h2>Spływy kajakowe rzeką Supraśl</h2>
    <p>
      Dostępność spływów, trasy, czas i wymagania zależą od organizatora oraz warunków na rzece.
      Sprawdź aktualne informacje u organizatora przed rezerwacją aktywności.{' '}
      <Link to="/blog/kajaki-suprasl">Informacje o spływach kajakowych</Link>.
    </p>

    <h2>Kuchnia regionalna Podlasia</h2>
    <p>
      Menu i godziny pracy lokali mogą się zmieniać. Przed wizytą sprawdź aktualną ofertę wybranych
      restauracji w <Link to="/blog/restauracje-suprasl">przewodniku po lokalach</Link>.
    </p>

    <h2>Kruszyniany — tatarska wieś</h2>
    <p>
      <Link to="/blog/kruszyniany-tatarska-wies">Kruszyniany</Link> to propozycja dla osób
      zainteresowanych dziedzictwem tatarskim. Przed podróżą sprawdź trasę, godziny zwiedzania
      meczetu i cmentarza oraz dostępność lokalnych potraw.
    </p>

    <h2>Arboretum Kopna Góra</h2>
    <p>
      Arboretum im. Powstańców 1863 w Kopnej Górze zajmuje 26 hektarów i zostało założone w 1988
      roku. Aktualne informacje o dojeździe, dostępności i zasadach zwiedzania publikuje{' '}
      <a href="https://suprasl.bialystok.lasy.gov.pl/" target="_blank" rel="noopener noreferrer"
        aria-label="Informacje Nadleśnictwa Supraśl (otworzy się w nowej karcie)">
        Nadleśnictwo Supraśl
      </a>
      .
    </p>

    <h2>Teatr Wierszalin</h2>
    <p>
      W Supraślu działa Teatr Wierszalin. Przed wizytą sprawdź aktualny repertuar, miejsce
      przedstawienia i zasady zakupu biletów na{' '}
      <a href="https://wierszalin.pl/" target="_blank" rel="noopener noreferrer"
        aria-label="Oficjalna strona Teatru Wierszalin (otworzy się w nowej karcie)">
        oficjalnej stronie teatru
      </a>
      .
    </p>

    <h2>Gdzie nocować w Supraślu</h2>
    <p>
      Jeśli szukasz <Link to="/noclegi-suprasl">noclegu w okolicy Supraśla</Link>, In The Woods to
      dom na wyłączność w miejscowości Konne. Balia ogrodowa z funkcją jacuzzi jest opcjonalnym
      dodatkiem, którego dostępność trzeba potwierdzić przed pobytem.
    </p>

    <div className="bg-secondary p-8 rounded-lg text-center space-y-4 not-prose mt-12">
      <p className="font-heading text-xl text-foreground">Zapytaj o pobyt w okolicy Supraśla</p>
      <p className="text-muted-foreground text-sm">
        Wyślij zapytanie o dostępność i cenę pobytu.
      </p>
      <a href="tel:+48722765101" className="btn-primary inline-block">
        Zadzwoń z pytaniem
      </a>
    </div>
  </BlogArticleLayout>
);

export default CoRobicSuprasl;
