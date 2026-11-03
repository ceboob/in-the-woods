import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Ile jedzie się z\u00a0Białegostoku do In The Woods?',
    answer:
      'Samochodem zwykle 30–40\u00a0minut. Wpiszcie w\u00a0nawigację adres Konne 109/1, 16-030 Supraśl. Parking jest przy samym domu.',
  },
  {
    question: 'Czy wynajmujecie cały dom, czy pokoje?',
    answer:
      'Cały dom, dla jednej ekipy, maksymalnie 8\u00a0osób. Cena od 399\u00a0zł za noc dotyczy domu, nie osoby.',
  },
  {
    question: 'Czy to dobry pomysł na weekend dla mieszkańców Białegostoku?',
    answer:
      'Tak. Dojeżdżacie w\u00a0pół godziny, a\u00a0po przyjeździe macie las, kominek i\u00a0ciszę. Nie trzeba brać urlopu ani planować długiej podróży.',
  },
  {
    question: 'Czy można przyjechać z\u00a0psem?',
    answer: 'Tak, za darmo. Za psa ani innego pupila nie bierzemy dopłat.',
  },
  {
    question: 'Czy jest balia lub jacuzzi?',
    answer:
      'Jest balia z\u00a0hydromasażem w\u00a0ogrodzie. Kosztuje 250\u00a0zł za cały pobyt i\u00a0zamawiacie ją przy rezerwacji.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

const linkClass = 'text-primary underline hover:text-primary/80';

const NoclegBialystokOkolice = () => (
  <SEOPageLayout
    title="Nocleg koło Białegostoku – cały dom, 30 min | In The Woods"
    description="Nocleg pod Białymstokiem: cały drewniany dom w lesie, 30–40 min od miasta. Do 8 osób, od 399 zł za noc za dom, kominek, balia, pies gratis."
    breadcrumbName="Nocleg koło Białegostoku"
    ogImage="https://www.suprasl.online/images/exterior-main.jpg"
    keywords={[
      'nocleg Białystok',
      'nocleg koło Białegostoku',
      'nocleg pod Białymstokiem',
      'dom do wynajęcia koło Białegostoku',
      'domek koło Białegostoku',
      'noclegi okolice Białegostoku',
    ]}
    jsonLd={faqSchema}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <header className="space-y-5">
        <p className="text-sm tracking-wide text-primary">
          Konne · 30–40&nbsp;minut od Białegostoku
        </p>
        <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
          Nocleg koło Białegostoku: cały dom w&nbsp;lesie, pół godziny od miasta
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Szukacie noclegu w&nbsp;Białymstoku albo tuż za miastem, ale bez hotelowego hałasu? Dom In
          The Woods stoi w&nbsp;Konnem koło Supraśla, 30–40&nbsp;minut samochodem od Białegostoku.
          Wynajmujecie go w&nbsp;całości, dla maksymalnie 8&nbsp;osób, od 399&nbsp;zł za noc za cały
          dom.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row not-prose">
          <a href="tel:+48722765101" className="btn-primary text-center">
            Zadzwoń: 722 765 101
          </a>
          <a href="mailto:tutinthewood@gmail.com" className="btn-outline text-center">
            Napisz do Macieja
          </a>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">
          Dla kogo jest dom pod Białymstokiem
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Dla grup przyjaciół, rodzin i&nbsp;par, które chcą wyjechać na weekend, ale nie mają czasu
          na długą podróż. Dla gości z&nbsp;innych miast, którzy przylatują lub przyjeżdżają do
          Białegostoku i&nbsp;wolą spać w&nbsp;ciszy lasu niż w&nbsp;centrum. Dla ekip na wieczór
          panieński lub kawalerski, którym potrzebny jest dom bez sąsiadów za ścianą.
        </p>
        <ul className="text-muted-foreground leading-relaxed">
          <li>Cały dom na wyłączność, maksymalnie 8&nbsp;osób</li>
          <li>Salon z&nbsp;kominkiem, dwie sypialnie, kuchnia, taras i&nbsp;ogród</li>
          <li>Balia z&nbsp;hydromasażem: 250&nbsp;zł za cały pobyt</li>
          <li>Pies gratis, parking przy domu, Starlink do 200&nbsp;Mb/s</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">Dojazd z&nbsp;Białegostoku</h2>
        <p className="text-muted-foreground leading-relaxed">
          Adres: Konne 109/1, 16-030 Supraśl. Z&nbsp;Białegostoku jedziecie zwykle 30–40&nbsp;minut,
          a&nbsp;do centrum Supraśla z&nbsp;domu około 10&nbsp;minut. Po drodze możecie zrobić
          zakupy w&nbsp;mieście, bo w&nbsp;domu czeka pełna kuchnia.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">Co robić po przyjeździe</h2>
        <p className="text-muted-foreground leading-relaxed">
          Okolica to szlaki Puszczy Knyszyńskiej, monaster i&nbsp;Muzeum Ikon w&nbsp;Supraślu oraz
          spacery nad rzeką. Pomysły na dwa dni znajdziecie w&nbsp;planie na{' '}
          <Link to="/weekend-suprasl" className={linkClass}>
            weekend w&nbsp;Supraślu
          </Link>
          , a&nbsp;przegląd miejsc w&nbsp;przewodniku po{' '}
          <Link to="/atrakcje-suprasl" className={linkClass}>
            atrakcjach Supraśla
          </Link>
          . Artykuł{' '}
          <Link to="/blog/bialystok-i-okolice-co-zobaczyc" className={linkClass}>
            Białystok i okolice: co zobaczyć
          </Link>{' '}
          pomoże połączyć pobyt w&nbsp;lesie ze zwiedzaniem miasta.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Pełną ofertę domu opisaliśmy na stronie{' '}
          <Link to="/noclegi-suprasl" className={linkClass}>
            noclegi w&nbsp;Supraślu
          </Link>
          , a&nbsp;wnętrza zobaczycie na stronie{' '}
          <Link to="/domek-suprasl" className={linkClass}>
            domek w&nbsp;Supraślu
          </Link>
          .
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="section-title !text-2xl md:!text-3xl">Najczęstsze pytania</h2>
        <div className="space-y-5">
          {faqs.map(({ question, answer }) => (
            <section key={question} className="space-y-2">
              <h3 className="font-heading text-xl text-foreground">{question}</h3>
              <p className="text-muted-foreground leading-relaxed">{answer}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="not-prose bg-secondary p-8 text-center">
        <h2 className="font-heading text-2xl font-light">Sprawdźcie wolne terminy</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Napiszcie, kiedy chcecie przyjechać i&nbsp;ile Was będzie. Maciej odpisze zwykle
          w&nbsp;kilka godzin i&nbsp;powie wprost, czy termin jest wolny.
        </p>
        <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="tel:+48722765101" className="btn-primary">
            Zadzwoń: 722 765 101
          </a>
          <a href="mailto:tutinthewood@gmail.com" className="btn-outline">
            Napisz e-mail
          </a>
          <Link to="/#rezerwacja" className="btn-outline">
            Formularz zapytania
          </Link>
        </div>
      </section>
    </article>
  </SEOPageLayout>
);

export default NoclegBialystokOkolice;
