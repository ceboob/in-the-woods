import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Czy In The Woods leży w Supraślu?',
    answer:
      'Prawie. Dom stoi w Konnem (Konne 109/1, 16-030 Supraśl), około 10 minut samochodem od centrum miasteczka. Macie więc ciszę lasu za progiem, a monaster, Muzeum Ikon i knajpy z babką ziemniaczaną na wyciągnięcie ręki.',
  },
  {
    question: 'Czy wynajmujemy cały dom, czy pokój?',
    answer:
      'Cały dom, dla jednej ekipy. Salon z kominkiem, dwie sypialnie, łazienka, osobna toaleta, kuchnia, taras i ogród są tylko Wasze. Nikt obcy nie stoi w kolejce do prysznica.',
  },
  {
    question: 'Czy jest jacuzzi?',
    answer:
      'Jest balia z hydromasażem, która działa jak jacuzzi. Na Podlasiu mówi się na nią też „ruska bania”. Stoi w ogrodzie, kosztuje 250 zł za cały pobyt, nie za noc, i trzeba ją zamówić przy rezerwacji, żebyśmy zdążyli ją nagrzać.',
  },
  {
    question: 'Czy to dobry nocleg na weekend w Supraślu?',
    answer:
      'Bardzo dobry. W dzień monaster, Muzeum Ikon, rzeka albo szlaki Puszczy Knyszyńskiej, wieczorem kominek i balia. Rozpisany plan od piątku do niedzieli znajdziecie na stronie o weekendzie w Supraślu.',
  },
  {
    question: 'Czy można przyjechać z psem?',
    answer: 'Tak, i to za darmo. Za psa ani innego pupila nie bierzemy dopłat.',
  },
  {
    question: 'Jak dojechać z Białegostoku?',
    answer:
      'Samochodem zwykle 30–40 minut. Wpiszcie w nawigację adres Konne 109/1, 16-030 Supraśl. Parking macie przy samym domu.',
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

const highlights = [
  'Cały dom dla jednej ekipy, bez obcych za ścianą',
  'Maksymalnie 8 osób, cena za dom, nie za osobę',
  'Salon z kominkiem i dwie sypialnie',
  'Balia z hydromasażem: 250 zł za cały pobyt',
  'Taras, ogrodzony ogród i parking',
  'Kuchnia, Starlink do 200 Mb/s, pies gratis',
];

const NoclegiSuprasl = () => (
  <SEOPageLayout
    title="Nocleg Supraśl dla grupy do 8 osób – cały dom | In The Woods"
    description="Zamiast trzech pokoi w pensjonacie: cały drewniany dom pod Supraślem. 10 min do centrum, 30–40 min z Białegostoku. Sprawdź wolne terminy."
    breadcrumbName="Noclegi Supraśl"
    ogImage="https://www.suprasl.online/images/exterior-main.jpg"
    keywords={[
      'noclegi Supraśl',
      'nocleg Supraśl dla grupy',
      'noclegi Supraśl dla 8 osób',
      'nocleg pod Białymstokiem',
    ]}
    jsonLd={faqSchema}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <header className="space-y-5">
        <p className="text-sm tracking-wide text-primary">Konne · około 10 minut od Supraśla</p>
        <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
          Noclegi Supraśl: cały dom zamiast pokoju w pensjonacie
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Szukacie noclegu w Supraślu dla całej ekipy? Zamiast trzech pokoi w pensjonacie i proszenia
          sąsiadów o ciszę macie cały drewniany dom dla maksymalnie 8 osób. Stoi w Konnem, 10 minut od
          centrum Supraśla i 30–40 minut od Białegostoku, a za płotem zaczyna się puszcza. Od 399 zł za
          noc, za cały dom. Nie za osobę.
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
          width={1920}
          height={1281}
          className="h-auto w-full rounded-lg object-cover"
          loading="lazy"
        />
      </figure>

      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">
          Pensjonat czy cały dom? Krótkie porównanie
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          W pensjonacie płacicie za każdy pokój osobno, dzielicie korytarz z obcymi i o 22:00
          zaczynacie szeptać. U nas cała ekipa ma jeden dom: salon z kominkiem, dwie sypialnie,
          łazienkę i osobną toaletę, pełną kuchnię, taras, ogród i parking. Śniadanie robicie, kiedy
          chcecie, a nie od 8:00 do 10:00.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Sprawdza się to przy parach, które nie chcą słyszeć sąsiadów, rodzinach z dziećmi i grupach
          przyjaciół. Da się tu też pracować: Starlink ciągnie do 200 Mb/s, a po ostatnim spotkaniu
          zamykacie laptopa i wychodzicie na taras.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">
          Wieczorem: balia pod gwiazdami i kominek
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Kiedy robi się ciemno, w ogrodzie czeka gorąca balia z hydromasażem. Na Podlasiu mówi się na
          nią „ruska bania”, my mówimy po prostu „balia”. Kosztuje 250 zł za cały pobyt. Para nad
          wodą, gwiazdy nad sosnami, a potem szybki sprint w ręczniku do kominka.
        </p>
        <figure className="not-prose">
          <img
            src="/images/gallery-bania-ogrod.webp"
            alt="Balia z hydromasażem w ogrodzie drewnianego domu na Podlasiu"
            width={1442}
            height={1920}
            className="h-auto w-full rounded-lg object-cover"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">
          Gdzie to jest: Supraśl, puszcza i Białystok blisko
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Adres: Konne 109/1, 16-030 Supraśl. Do centrum Supraśla jedziecie około 10 minut, do
          Białegostoku 30–40 minut. Mieszkacie w Białymstoku? To nocleg pod Białymstokiem na weekend,
          który nie wymaga brania urlopu.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          W okolicy macie szlaki Puszczy Knyszyńskiej, spacer nad rzeką Supraśl, monaster i Muzeum
          Ikon. Więcej znajdziecie w naszym{' '}
          <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
            przewodniku po atrakcjach Supraśla
          </Link>
          . Gotowy plan na dwa dni czeka na stronie o{' '}
          <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
            weekendzie w Supraślu
          </Link>
          , a trasy, które zaczynają się niedaleko domu, opisaliśmy na stronie o{' '}
          <Link
            to="/puszcza-knyszynska-nocleg"
            className="text-primary underline hover:text-primary/80"
          >
            noclegu w Puszczy Knyszyńskiej
          </Link>
          . Chcecie zobaczyć, jak dom wygląda w środku? Zajrzyjcie na stronę{' '}
          <Link to="/domek-suprasl" className="text-primary underline hover:text-primary/80">
            o naszym domku w Supraślu
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
        <p className="text-muted-foreground leading-relaxed">
          Rezerwujecie cały dom dla jednej ekipy. Balię zamawiacie przy rezerwacji, a pies przyjeżdża
          gratis. Minimalny pobyt to zwykle 2 noce, w wakacje 3.
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
          Napiszcie, kiedy chcecie przyjechać i ile Was będzie. Maciej odpisze zwykle w kilka godzin
          i powie wprost, czy termin jest wolny.
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
