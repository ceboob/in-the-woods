import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const SupraskiSystemWodny = () => (
  <BlogArticleLayout
    title="Rzeka Supraśl i&nbsp;okolica — informacje dla odwiedzających"
    metaTitle="Rzeka Supraśl — trasy, spływy i&nbsp;praktyczne informacje"
    metaDescription="Zaplanuj spacer lub spływ w&nbsp;okolicy Supraśla. Sprawdź aktualny dostęp do tras, warunki na rzece i&nbsp;informacje u&nbsp;lokalnych organizatorów."
    slug="supraski-system-wodny"
    publishDate="2026-03-10"
    readTime="4&nbsp;min"
    keywords={['rzeka Supraśl', 'spacery Supraśl', 'kajaki Supraśl', 'okolice Supraśla']}
    faqs={[
      {
        question: 'Czy można spacerować wzdłuż rzeki Supraśl?',
        answer:
          'Dostępność i\u00a0przebieg tras zależą od miejsca. Przed spacerem sprawdź aktualne mapy oraz zasady obowiązujące na wybranym terenie.',
      },
      {
        question: 'Czy w\u00a0okolicy Supraśla można pływać kajakiem?',
        answer:
          'Dostępność spływów, trasa i\u00a0wymagania zależą od organizatora oraz warunków na rzece. Potwierdź je przed wyjazdem.',
      },
      {
        question: 'Gdzie sprawdzić lokalne informacje?',
        answer:
          'Informacji o\u00a0lasach i\u00a0trasach szukaj u\u00a0Nadleśnictwa Supraśl, a\u00a0o\u00a0wydarzeniach — u\u00a0lokalnego organizatora.',
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
        Przed zaplanowaniem spaceru lub aktywności nad wodą sprawdź dostępne wejścia, przebieg tras
        i&nbsp;lokalne zasady. Warunki mogą się zmieniać, a&nbsp;nie wszystkie odcinki są
        udostępnione do zwiedzania.
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
        . Przed wyjściem sprawdź mapę, pogodę oraz ograniczenia dotyczące obszarów chronionych.
      </p>

      <h2>Spływ kajakowy</h2>
      <p>
        Jeśli planujesz spływ, przed rezerwacją potwierdź u&nbsp;organizatora trasę, czas, warunki
        transportu i&nbsp;wymagane wyposażenie. Nie zakładaj, że warunki na rzece są stałe ani że
        każda trasa będzie odpowiednia dla każdego. Więcej informacji znajdziesz w{' '}
        <Link to="/blog/kajaki-suprasl">przewodniku po spływach kajakowych</Link>.
      </p>

      <h2>Co jeszcze zaplanować?</h2>
      <p>
        W&nbsp;Supraślu możesz odwiedzić Monaster i&nbsp;Muzeum Ikon. Aktualne godziny, ceny biletów
        i&nbsp;zasady zwiedzania Muzeum sprawdź na{' '}
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
        In The Woods to dom na wyłączność w&nbsp;miejscowości Konne koło Supraśla. Przed wysłaniem{' '}
        <Link to="/#rezerwacja">zapytania o&nbsp;pobyt</Link> sprawdź lokalizację, wyposażenie
        i&nbsp;warunki korzystania z&nbsp;opcjonalnych dodatków.
      </p>
    </article>
  </BlogArticleLayout>
);

export default SupraskiSystemWodny;
