import BlogArticleLayout from '@/components/BlogArticleLayout';
import oakForestThumb from '@/assets/gallery-dab-puszcza-thumb.webp';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Co robić w\u00a0Supraślu jesienią?',
    answer:
      'Wybierz spacer po mieście lub lesie, zajrzyj do lokalnych instytucji kultury albo zaplanuj wieczór wokół wydarzenia, które odbywa się w&nbsp;Twoim terminie.',
  },
  {
    question: 'Gdzie znaleźć informacje o\u00a0aktualnych wydarzeniach w\u00a0Supraślu?',
    answer:
      'Program publikuje Centrum Kultury i&nbsp;Rekreacji w&nbsp;Supraślu. To najlepsze miejsce, by znaleźć datę, lokalizację i&nbsp;informacje o&nbsp;biletach.',
  },
  {
    question: 'Czy jesienią można zwiedzić Muzeum Ikon?',
    answer:
      'Muzeum Ikon mieści się w&nbsp;Supraślu. Godziny otwarcia i&nbsp;zasady zwiedzania publikuje Muzeum Podlaskie.',
  },
  {
    question: 'Jak zaplanować pobyt na jesienny weekend?',
    answer:
      'Dopasuj plan do pogody i\u00a0godzin otwarcia. Jeśli chcesz połączyć zwiedzanie z\u00a0noclegiem, wyślij zapytanie o\u00a0termin.',
  },
];

const JesienWSupraslu2026 = () => (
  <BlogArticleLayout
    title="Jesień w&nbsp;Supraślu 2026 – jak zaplanować pobyt"
    metaTitle="Jesień w&nbsp;Supraślu 2026 – pomysły na pobyt"
    metaDescription="Jesienny Supraśl: spacery wśród kolorowych drzew, lokalna kultura i&nbsp;wydarzenia. Zainspiruj się pomysłami na spokojny pobyt."
    slug="jesien-w-suprasliu-2026-wydarzenia-kulturalne"
    publishDate="2026-10-03"
    readTime="4&nbsp;min"
    ogImage="https://www.suprasl.online/images/gallery-dab-puszcza.webp"
    keywords={['jesień w\u00a0Supraślu', 'Supraśl jesienią', 'wydarzenia w\u00a0Supraślu']}
    faqs={faqs}
    relatedArticles={[
      { title: 'Atrakcje Supraśla: co zobaczyć', slug: '/atrakcje-suprasl' },
      { title: 'Weekend w\u00a0Supraślu: plan od piątku do niedzieli', slug: '/weekend-suprasl' },
      {
        title: 'Atrakcje Supraśla – uzdrowisko w\u00a0Puszczy',
        slug: 'suprasl-atrakcje-uzdrowisko',
      },
    ]}
  >
    <img
      src={oakForestThumb}
      srcSet={`${oakForestThumb} 450w, /images/gallery-dab-puszcza.webp 900w`}
      sizes="(min-width: 768px) 448px, 100vw"
      alt="Jesienny las w&nbsp;okolicy Supraśla"
      className="mx-auto mb-8 h-auto w-full max-w-md rounded-lg shadow-md"
      width="900"
      height="1200"
      loading="lazy"
      decoding="async"
    />
    <p>
      🍂 Jesienią Supraśl i&nbsp;Puszcza Knyszyńska zwalniają tempo. Złote liście zachęcają do
      spacerów, a&nbsp;krótszy dzień sprzyja wieczorom w&nbsp;mieście. Ubierz się warstwowo
      i&nbsp;wybierz trasę odpowiednią do pogody; w&nbsp;rezerwatach trzymaj się oznakowanych dróg.
    </p>

    <h2>Spacer i&nbsp;zwiedzanie</h2>
    <p>
      Wybierz spacer po Supraślu albo trasę dostosowaną do pogody i&nbsp;możliwości uczestników.
      W&nbsp;przypadku rezerwatów oraz innych obszarów chronionych poruszaj się wyłącznie tam, gdzie
      dopuszczają to oznaczenia i&nbsp;aktualne przepisy.
    </p>
    <p>
      Informacje dla odwiedzających Muzeum Ikon publikuje{' '}
      <a
        href="https://muzeumpodlaskie.pl/oddzialy/muzeum-ikon-w-supraslu/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Informacje dla zwiedzających Muzeum Ikon (otworzy się w&nbsp;nowej karcie)"
      >
        informacje dla zwiedzających Muzeum Podlaskiego
      </a>
      .
    </p>

    <h2>Wydarzenia kulturalne</h2>
    <p>
      Program wydarzeń, daty i&nbsp;informacje o&nbsp;wejściówkach publikuje{' '}
      <a
        href="https://ckirsuprasl.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Strona Centrum Kultury i&nbsp;Rekreacji w&nbsp;Supraślu (otworzy się w&nbsp;nowej karcie)"
      >
        Centrum Kultury i&nbsp;Rekreacji w&nbsp;Supraślu
      </a>
      . Przed wyborem wydarzenia zajrzyj do jego opisu — tam znajdziesz miejsce, godziny
      i&nbsp;ewentualne zasady udziału.
    </p>

    <h2>Jesienny weekend w&nbsp;In The Woods</h2>
    <p>
      Jeśli chcesz połączyć zwiedzanie z&nbsp;odpoczynkiem,{' '}
      <Link to="/">poznaj dom In The Woods</Link> i&nbsp;<Link to="/#rezerwacja">zapytaj o&nbsp;termin</Link>.
      Formularz służy do wysłania zapytania — rezerwacja jest potwierdzana osobno.
    </p>
  </BlogArticleLayout>
);

export default JesienWSupraslu2026;
