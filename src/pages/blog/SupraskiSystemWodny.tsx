import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const SupraskiSystemWodny = () => (
  <BlogArticleLayout
    title="Rzeka Supraśl i&nbsp;okolica — informacje dla odwiedzających"
    metaTitle="Rzeka Supraśl — trasy, spływy i&nbsp;praktyczne informacje"
    metaDescription="Rzeka Supraśl, spacery nad wodą i&nbsp;spływy kajakowe. Poznaj pomysły na aktywny dzień i&nbsp;zobacz, jak przygotować się do wyprawy."
    slug="supraski-system-wodny"
    publishDate="2026-03-10"
    readTime="4&nbsp;min"
    keywords={['rzeka Supraśl', 'spacery Supraśl', 'kajaki Supraśl', 'okolice Supraśla']}
    faqs={[
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
        In The Woods to dom na wyłączność w&nbsp;miejscowości Konne koło Supraśla.         Jeśli szukasz noclegu blisko rzeki i&nbsp;puszczy, poznaj{' '}
        <Link to="/#rezerwacja">dom In The Woods w&nbsp;Konnem</Link>. Opis wyposażenia
        i&nbsp;opcjonalnych dodatków znajdziesz na stronie obiektu.
      </p>
    </article>
  </BlogArticleLayout>
);

export default SupraskiSystemWodny;
