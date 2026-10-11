import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Czy In The Woods leży w Supraślu?',
    answer:
      'Dom znajduje się pod adresem Konne 109/1, 16-030 Supraśl, około 10 minut jazdy od centrum miasteczka. To spokojna lokalizacja wśród lasów, blisko Puszczy Knyszyńskiej. Możecie połączyć ciszę za progiem ze spacerem po uzdrowisku, wizytą w Monasterze Zwiastowania lub Muzeum Ikon.',
  },
  {
    question: 'Czy rezerwuję cały dom na wyłączność?',
    answer:
      'Tak, wynajmujecie cały drewniany dom dla jednej grupy. Nie ma tu współdzielenia pokoi ani wspólnych przestrzeni z innymi gośćmi. Do Waszej dyspozycji są salon z kominkiem, dwie sypialnie, łazienka, osobna toaleta, wyposażona kuchnia, taras i ogród. To wygodne rozwiązanie dla par, rodzin i przyjaciół.',
  },
  {
    question: 'Czy dom ma jacuzzi / banię ogrodową?',
    answer:
      'Bania ogrodowa z funkcją jacuzzi jest opcjonalnym dodatkiem i wiąże się z dodatkową opłatą. Jej dostępność w wybranym terminie potwierdza gospodarz. Gdy nad balią unosi się para, a nad drzewami widać gwiazdy, możecie odpocząć na zewnątrz, po czym wrócić do ciepła kominka.',
  },
  {
    question: 'Czy to dobry nocleg na weekend w Supraślu?',
    answer:
      'Tak, to wygodna baza na weekend w Supraślu, jeśli chcecie połączyć leśny odpoczynek ze zwiedzaniem. W dzień możecie odwiedzić uzdrowisko, Monaster Zwiastowania, Muzeum Ikon lub wybrać się nad rzekę Supraśl. Po powrocie czeka na Was cały dom, taras i spokojny wieczór przy kominku. W okolicy znajdziecie trasy Puszczy Knyszyńskiej.',
  },
  {
    question: 'Czy można przyjechać z psem?',
    answer:
      'Pobyt z psem jest możliwy po wcześniejszym uzgodnieniu szczegółów z gospodarzem Maciejem. To on potwierdzi zasady pobytu i ewentualne opłaty. Napiszcie, że przyjedzie z Wami pies, a otrzymacie informacje przed ustaleniem terminu. Dzięki temu łatwiej zaplanować spokojny wyjazd razem z czworonożnym towarzyszem.',
  },
  {
    question: 'Jak dojechać z Białegostoku?',
    answer:
      'Z Białegostoku do In The Woods jedzie się zwykle około 30–40 minut samochodem. Adres to Konne 109/1, 16-030 Supraśl, około 10 minut od centrum Supraśla. Przed wyjazdem wpiszcie adres w nawigację, by wybrać aktualną trasę. Na miejscu czeka parking przy domu.',
  },
];

const lodgingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': 'https://www.suprasl.online/noclegi-suprasl#lodging',
  name: 'In The Woods — drewniany dom na wyłączność',
  url: 'https://www.suprasl.online/noclegi-suprasl',
  image: [
    'https://www.suprasl.online/images/exterior-main.jpg',
    'https://www.suprasl.online/images/living-fireplace.jpg',
    'https://www.suprasl.online/images/jacuzzi-night.jpg',
  ],
  description:
    'Drewniany dom na wyłączność w Konne koło Supraśla, blisko Puszczy Knyszyńskiej. Salon z kominkiem, dwie sypialnie, wyposażona kuchnia, taras i ogród. Balia ogrodowa z funkcją jacuzzi jest opcjonalna i dodatkowo płatna.',
  telephone: '+48722765101',
  email: 'tutinthewood@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Konne 109/1',
    postalCode: '16-030',
    addressLocality: 'Supraśl',
    addressRegion: 'podlaskie',
    addressCountry: 'PL',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Dom wynajmowany jednej grupie', value: true },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Balia ogrodowa z funkcją jacuzzi — opcjonalna, dodatkowo płatna',
      value: true,
    },
    { '@type': 'LocationFeatureSpecification', name: 'Kominek', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wyposażona kuchnia', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Taras i ogród', value: true },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

const highlights = [
  'Cały dom wynajmowany jednej grupie — bez współdzielenia',
  'Las i Puszcza Knyszyńska w zasięgu spacerów',
  'Salon z kominkiem i dwie sypialnie',
  'Bania ogrodowa z jacuzzi dostępna na zapytanie',
  'Taras wśród drzew, ogród i parking',
  'Wyposażona kuchnia oraz Wi-Fi',
];

const NoclegiSuprasl = () => (
  <SEOPageLayout
    title="Noclegi Supraśl: dom w lesie na wyłączność | In The Woods"
    description="Cały dom tylko dla Was, kominek i opcjonalna balia z jacuzzi. 10 min od Supraśla, wśród drzew. Zapytaj o termin!"
    breadcrumbName="Noclegi Supraśl"
    ogImage="https://www.suprasl.online/images/exterior-main.jpg"
    keywords={[
      'noclegi Supraśl',
      'dom na wyłączność',
      'dom w lesie',
      'dom z jacuzzi Podlasie',
      'dom z jacuzzi Białystok',
      'noclegi Puszcza Knyszyńska',
    ]}
    jsonLd={[lodgingSchema, faqSchema]}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <header className="space-y-5">
        <p className="text-sm tracking-wide text-primary">Konne · około 10 minut od Supraśla</p>
        <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
          Noclegi Supraśl – prywatny dom na wyłączność w lesie z jacuzzi i kominkiem
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Szukacie noclegu koło Supraśla, gdzie poranek zaczyna się śpiewem ptaków, a wieczór
          trzaskiem drewna? In The Woods to dom w lesie, wynajmowany w całości jednej grupie.
          Czeka na Was w Konne, blisko Puszczy Knyszyńskiej i około 10 minut od centrum Supraśla.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row not-prose">
          <a href="tel:+48722765101" className="btn-primary text-center">
            Zapytaj o termin: 722 765 101
          </a>
          <a href="mailto:tutinthewood@gmail.com" className="btn-outline text-center">
            Napisz do Macieja
          </a>
        </div>
      </header>

      <ul className="grid gap-3 sm:grid-cols-2 not-prose">
        {highlights.map((item) => (
          <li
            key={item}
            className="list-none border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>

      <figure className="not-prose">
        <img
          src="/images/gallery-taras-sofa.webp"
          alt="Taras drewnianego domu w lesie koło Supraśla"
          className="h-auto w-full rounded-lg object-cover"
          loading="lazy"
        />
      </figure>

      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">
          Dom w lesie na wyłączność w sercu Puszczy Knyszyńskiej
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          W środku znajdziecie salon z kominkiem, dwie sypialnie, łazienkę i osobną toaletę.
          Wyposażona kuchnia pozwala przygotować śniadanie przed spacerem albo kolację po powrocie.
          Do tego macie Wi-Fi, taras, ogród i parking.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          To dom koło Supraśla dla par, rodzin i grupy przyjaciół, które chcą mieć własną przestrzeń.
          Możecie też zaplanować workation na Podlasiu: po pracy zamknąć laptop i wyjść na taras
          wśród drzew. Przytulny dom z kominkiem sprzyja wieczorom bez pośpiechu.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Szukacie domku na wyłączność dla dwojga albo spokojnego miejsca dla grupy przyjaciół?
          Tutaj odpoczywacie razem, bez innych gości za ścianą.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">
          Jacuzzi pod gwiazdami i wieczór przy kominku
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Gdy zapada zmrok, w ogrodzie czeka balia z funkcją jacuzzi — dostępna na zapytanie i za
          dodatkową opłatą. Ciepła para unosi się nad wodą, a las cichnie. Potem wracacie do salonu,
          gdzie słychać trzask ognia w kominku.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Jeśli wpisujecie w wyszukiwarkę „dom z jacuzzi Podlasie”, In The Woods łączy taki odpoczynek
          z prywatnym domem, tarasem i bliskością Puszczy Knyszyńskiej. Regionalnie mówi się też
          „bania ogrodowa” — jej dostępność potwierdza gospodarz.
        </p>
        <figure className="not-prose">
          <img
            src="/images/gallery-bania-ogrod.webp"
            alt="Bania ogrodowa w ogrodzie drewnianego domu na Podlasiu"
            className="h-auto w-full rounded-lg object-cover"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">
          Lokalizacja: Supraśl, Puszcza Knyszyńska i Białystok na wyciągnięcie ręki
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Adres domu to Konne 109/1, 16-030 Supraśl. Do centrum uzdrowiska dojedziecie w około 10
          minut, a do Białegostoku w 30–40 minut. Fraza „dom z jacuzzi Białystok” prowadzi więc do
          leśnej alternatywy niedaleko miasta — zwykle pół godziny drogi.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Okolica zaprasza na trasy Puszczy Knyszyńskiej, spacer nad rzeką Supraśl oraz wizytę w
          Monasterze Zwiastowania i Muzeum Ikon. To także propozycja dla osób szukających noclegów w
          Puszczy Knyszyńskiej. Hasło „noclegi Puszcza Knyszyńska” obejmuje również domy w okolicy
          Supraśla. Jeśli wpisujecie „domek w Puszczy Knyszyńskiej” lub „chata w lesie Podlasie”,
          znajdziecie tu drewniany dom koło Supraśla, blisko leśnych tras.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Przed wyjazdem możecie ułożyć własny plan: zajrzyjcie do naszego{' '}
          <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
            przewodnika po atrakcjach Supraśla
          </Link>
          , wybierzcie pomysły na{' '}
          <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
            spokojny weekend w Supraślu
          </Link>{' '}
          albo poznajcie{' '}
          <Link
            to="/puszcza-knyszynska-nocleg"
            className="text-primary underline hover:text-primary/80"
          >
            noclegi i szlaki Puszczy Knyszyńskiej
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
        <p className="text-muted-foreground leading-relaxed">
          Rezerwacja obejmuje cały dom dla jednej grupy. Balia ogrodowa z funkcją jacuzzi jest
          dodatkiem płatnym; jej dostępność ustala gospodarz. Pobyt z psem jest możliwy po
          uzgodnieniu zasad i ewentualnych opłat z Maciejem.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Napiszcie lub zadzwońcie przed rezerwacją, jeśli chcecie skorzystać z balii albo
          przyjechać z psem. Gospodarz potwierdzi szczegóły pobytu. Dom znajdziecie pod adresem
          Konne 109/1, 16-030 Supraśl.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="section-title !text-2xl md:!text-3xl">
          FAQ — najczęstsze pytania o pobyt
        </h2>
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
        <h2 className="font-heading text-2xl font-light">Zapytaj o dostępność terminu</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Opowiedzcie, kiedy chcecie przyjechać. Maciej pomoże sprawdzić termin i spokojnie zaplanować
          pobyt wśród drzew.
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

export default NoclegiSuprasl;
