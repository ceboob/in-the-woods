import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const SupraskiSystemWodny = () => (
  <BlogArticleLayout
    title="Rzeka Supraśl i okolica — informacje dla odwiedzających"
    metaTitle="Rzeka Supraśl — trasy, spływy i praktyczne informacje"
    metaDescription="Zaplanuj spacer lub spływ w okolicy Supraśla. Sprawdź aktualny dostęp do tras, warunki na rzece i informacje u lokalnych organizatorów."
    slug="supraski-system-wodny"
    publishDate="2026-03-10"
    readTime="4 min"
    keywords={['rzeka Supraśl', 'spacery Supraśl', 'kajaki Supraśl', 'okolice Supraśla']}
    faqs={[
      {
        question: 'Czy można spacerować wzdłuż rzeki Supraśl?',
        answer:
          'Dostępność i przebieg tras zależą od miejsca. Przed spacerem sprawdź aktualne mapy oraz zasady obowiązujące na wybranym terenie.',
      },
      {
        question: 'Czy w okolicy Supraśla można pływać kajakiem?',
        answer:
          'Dostępność spływów, trasa i wymagania zależą od organizatora oraz warunków na rzece. Potwierdź je przed wyjazdem.',
      },
      {
        question: 'Gdzie sprawdzić lokalne informacje?',
        answer:
          'Informacji o lasach i trasach szukaj u Nadleśnictwa Supraśl, a o wydarzeniach — u lokalnego organizatora.',
      },
    ]}
    relatedArticles={[
      { title: 'Kajaki na rzece Supraśl', slug: 'kajaki-suprasl' },
      { title: 'Szlaki piesze i rowerowe w okolicy', slug: 'szlaki-piesze-rowerowe-suprasl' },
      { title: 'Atrakcje Supraśla', slug: 'suprasl-atrakcje-national-geographic' },
    ]}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h2>Rzeka Supraśl i okolica</h2>
      <p>
        Przed zaplanowaniem spaceru lub aktywności nad wodą sprawdź dostępne wejścia, przebieg tras
        i lokalne zasady. Warunki mogą się zmieniać, a nie wszystkie odcinki są udostępnione do
        zwiedzania.
      </p>
      <p>
        Aktualnych informacji o terenach leśnych szukaj na stronie{' '}
        <a
          href="https://suprasl.bialystok.lasy.gov.pl/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nadleśnictwo Supraśl — informacje o terenach leśnych (otworzy się w nowej karcie)"
        >
          Nadleśnictwa Supraśl
        </a>
        . Przed wyjściem sprawdź mapę, pogodę oraz ograniczenia dotyczące obszarów chronionych.
      </p>

      <h2>Spływ kajakowy</h2>
      <p>
        Jeśli planujesz spływ, przed rezerwacją potwierdź u organizatora trasę, czas, warunki
        transportu i wymagane wyposażenie. Nie zakładaj, że warunki na rzece są stałe ani że każda
        trasa będzie odpowiednia dla każdego. Więcej informacji znajdziesz w{' '}
        <Link to="/blog/kajaki-suprasl">przewodniku po spływach kajakowych</Link>.
      </p>

      <h2>Co jeszcze zaplanować?</h2>
      <p>
        W Supraślu możesz odwiedzić Monaster i Muzeum Ikon. Aktualne godziny, ceny biletów i zasady
        zwiedzania Muzeum sprawdź na{' '}
        <a
          href="https://muzeumpodlaskie.pl/oddzialy/muzeum-ikon-w-supraslu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Informacje dla zwiedzających Muzeum Ikon (otworzy się w nowej karcie)"
        >
          stronie Muzeum Podlaskiego
        </a>
        .
      </p>
      <p>
        In The Woods to dom na wyłączność w miejscowości Konne koło Supraśla. Przed wysłaniem{' '}
        <Link to="/#rezerwacja">zapytania o pobyt</Link> sprawdź lokalizację, wyposażenie i warunki
        korzystania z opcjonalnych dodatków.
      </p>
    </article>
  </BlogArticleLayout>
);

export default SupraskiSystemWodny;
