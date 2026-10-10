import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Co robić w Supraślu jesienią?',
    answer:
      'Możesz wybrać spacer po mieście i okolicy, odwiedzić dostępne w danym terminie obiekty kulturalne lub sprawdzić bieżący program wydarzeń. Przed wyjazdem potwierdź godziny otwarcia i warunki na trasach.',
  },
  {
    question: 'Gdzie sprawdzić aktualne wydarzenia w Supraślu?',
    answer:
      'Aktualny program publikuje Centrum Kultury i Rekreacji w Supraślu. Sprawdź informacje organizatora przed zaplanowaniem udziału.',
  },
  {
    question: 'Czy jesienią można zwiedzić Muzeum Ikon?',
    answer:
      'Godziny otwarcia i zasady zwiedzania mogą się zmieniać. Sprawdź informacje dla zwiedzających na stronie Muzeum Podlaskiego.',
  },
  {
    question: 'Jak zaplanować pobyt na jesienny weekend?',
    answer:
      'Wybierz atrakcje i trasy odpowiednie do pogody, sprawdź ich dostępność, a następnie wyślij zapytanie o nocleg i termin.',
  },
];

const JesienWSupraslu2026 = () => (
  <BlogArticleLayout
    title="Jesień w Supraślu 2026 – jak zaplanować pobyt"
    metaTitle="Jesień w Supraślu 2026 – pomysły na pobyt"
    metaDescription="Zaplanuj jesienny pobyt w Supraślu: spacery, lokalne instytucje kultury i aktualne wydarzenia. Sprawdź informacje organizatorów przed wyjazdem."
    slug="jesien-w-suprasliu-2026-wydarzenia-kulturalne"
    publishDate="2026-10-03"
    readTime="4 min"
    ogImage="https://www.suprasl.online/images/gallery-dab-puszcza.webp"
    keywords={['jesień w Supraślu', 'Supraśl jesienią', 'wydarzenia w Supraślu']}
    faqs={faqs}
    relatedArticles={[
      { title: 'Co robić w Supraślu – kompletny przewodnik', slug: 'co-robic-suprasl' },
      { title: 'Weekend w Supraślu – plan pobytu na 2-3 dni', slug: 'weekend-suprasl-plan' },
      { title: 'Atrakcje Supraśla – uzdrowisko w Puszczy', slug: 'suprasl-atrakcje-uzdrowisko' },
    ]}
  >
    <img
      src="/images/gallery-dab-puszcza.webp"
      alt="Jesienny las w okolicy Supraśla"
      className="mb-8 w-full rounded-lg shadow-md"
      width="1200"
      height="800"
      loading="lazy"
      decoding="async"
    />
    <p>
      Jesień to dobry czas na spokojniejsze poznawanie Supraśla i okolicy. Pogoda może się szybko
      zmieniać, dlatego przed wyjściem sprawdź prognozę, warunki na trasie i zasady odwiedzania
      terenów chronionych. Godziny otwarcia muzeów i program wydarzeń również warto potwierdzić
      przed podróżą.
    </p>

    <h2>Spacer i zwiedzanie</h2>
    <p>
      Wybierz spacer po Supraślu albo trasę dostosowaną do pogody i możliwości uczestników. W
      przypadku rezerwatów oraz innych obszarów chronionych poruszaj się wyłącznie tam, gdzie
      dopuszczają to oznaczenia i aktualne przepisy.
    </p>
    <p>
      Jeśli planujesz wizytę w Muzeum Ikon, sprawdź{' '}
      <a
        href="https://muzeumpodlaskie.pl/oddzialy/muzeum-ikon-w-supraslu/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Informacje dla zwiedzających Muzeum Ikon (otworzy się w nowej karcie)"
      >
        informacje dla zwiedzających Muzeum Podlaskiego
      </a>
      .
    </p>

    <h2>Wydarzenia kulturalne</h2>
    <p>
      Program wydarzeń i ewentualne zmiany publikuje{' '}
      <a
        href="https://ckirsuprasl.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Strona Centrum Kultury i Rekreacji w Supraślu (otworzy się w nowej karcie)"
      >
        Centrum Kultury i Rekreacji w Supraślu
      </a>
      . Sprawdź datę, miejsce, dostępność wejściówek i ewentualne warunki udziału bezpośrednio u
      organizatora.
    </p>

    <h2>Zapytaj o pobyt</h2>
    <p>
      Jeśli chcesz połączyć zwiedzanie z odpoczynkiem,{' '}
      <Link to="/noclegi-suprasl">poznaj informacje o domu i pobycie</Link>, a następnie{' '}
      <Link to="/#rezerwacja">wyślij zapytanie o termin</Link>. Wysłanie formularza jest zapytaniem,
      a nie potwierdzeniem rezerwacji.
    </p>
  </BlogArticleLayout>
);

export default JesienWSupraslu2026;
