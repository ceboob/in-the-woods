import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MIN_NIGHTLY_RATE } from '@/lib/pricing';

const faqItems = [
  {
    question: 'Ile osób pomieści domek w Supraślu?',
    answer:
      'Domek wygodnie pomieści do 8 osób i jest wynajmowany w całości jednej grupie. Na parterze znajduje się salon, kuchnia i łazienka, a na piętrze dwie sypialnie z dużymi łóżkami. To przestrzeń dla rodziny, przyjaciół lub kilku par podróżujących razem. Maciej potwierdzi szczegóły pobytu.',
  },
  {
    question: 'Ile kosztuje wynajem domku?',
    answer:
      `Cena zaczyna się od ${MIN_NIGHTLY_RATE} zł za noc i zależy od terminu oraz liczby gości. Opcjonalna balia ogrodowa z funkcją jacuzzi kosztuje ${GARDEN_TUB_PRICE} zł za pobyt; jej dostępność potwierdza gospodarz. Napisz lub zadzwoń, podając daty i liczbę osób, aby otrzymać wycenę.`,
  },
  {
    question: 'Czy domek ma jacuzzi albo banię ogrodową?',
    answer:
      `Do domku można zamówić balię ogrodową z funkcją jacuzzi za ${GARDEN_TUB_PRICE} zł za pobyt. To dodatek dostępny na zapytanie, a termin korzystania potwierdza gospodarz. Napisz przed przyjazdem, jeśli zależy Wam na balii, by sprawdzić jej dostępność i ustalić szczegóły. Warto zapytać wcześniej.`,
  },
  {
    question: 'Czy można przyjechać z psem?',
    answer:
      'Pobyt z psem jest możliwy po wcześniejszym uzgodnieniu z gospodarzem. Maciej potwierdzi zasady oraz ewentualne opłaty dla wybranego terminu. W okolicy znajdują się obszary chronione, na których obowiązują odrębne reguły dotyczące zwierząt. Przed spacerem sprawdź zasady na planowanej trasie, a pobyt uzgodnij przed rezerwacją.',
  },
  {
    question: 'Czy domek jest do wynajęcia na wyłączność?',
    answer:
      'Tak, wynajem obejmuje cały drewniany domek i jedną grupę gości. Nie rezerwujecie pojedynczych pokoi ani nie dzielicie przestrzeni z innymi turystami. Możecie korzystać z salonu, kuchni, ogrodu, tarasu i miejsca na ognisko w ramach pobytu. To prywatny wypoczynek dla Waszej grupy.',
  },
  {
    question: 'Jak dojechać z Białegostoku?',
    answer:
      'Domek znajduje się pod adresem Konne 109/1, 16-030 Supraśl, około 10 minut jazdy od centrum Supraśla. Z Białegostoku dojazd zajmuje zwykle około 30–40 minut, zależnie od ruchu i wybranej trasy. Przed podróżą sprawdź aktualną nawigację, by wybrać najlepszą drogę z wyprzedzeniem.',
  },
];

const lodgingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': 'https://www.suprasl.online/domek-suprasl#lodging',
  name: 'In The Woods',
  url: 'https://www.suprasl.online/domek-suprasl',
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
  maximumAttendeeCapacity: 8,
  priceRange: `od ${MIN_NIGHTLY_RATE} zł/noc`,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Kominek', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Klimatyzacja latem', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Taras i ogród', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Bezpłatny parking', value: true },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Balia ogrodowa z funkcją jacuzzi',
      value: `Dostępna na zapytanie, ${GARDEN_TUB_PRICE} zł za pobyt`,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

// TODO: zatwierdź treść
const DomekSuprasl = () => (
  <SEOPageLayout
    title="Domek Supraśl – las, kominek i 8 osób | In The Woods"
    description={`Domek Supraśl dla 8 osób, na wyłączność, z kominkiem i balią od ${GARDEN_TUB_PRICE} zł. Ceny od ${MIN_NIGHTLY_RATE} zł/noc. Zapytaj o termin!`}
    breadcrumbName="Domek Supraśl"
    ogImage="https://www.suprasl.online/images/living-fireplace.jpg"
    keywords={[
      'domek Supraśl',
      'domek na wyłączność',
      'domek w lesie',
      'domek z kominkiem',
      'domek z jacuzzi Podlasie',
      'dom z bali Podlasie',
      'domek w Puszczy Knyszyńskiej',
      'domek dla 8 osób',
      'domek koło Supraśla',
    ]}
    jsonLd={[lodgingSchema, faqSchema]}
    showCTA={false}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <header className="space-y-5">
        <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
          Domek Supraśl – dom w lesie na wyłączność
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          In The Woods to drewniany domek w lesie koło Supraśla, wynajmowany w całości dla jednej
          grupy do 8 osób. W Konne, blisko Supraśla i Puszczy Knyszyńskiej, czekają na Was zapach
          bali, spokojne poranki i własny ogród.
        </p>
        <Link to="/#rezerwacja" className="btn-primary inline-flex">
          Zapytaj o termin
        </Link>
      </header>

      <section className="not-prose grid gap-4 sm:grid-cols-2">
        <figure>
          <img
            src="/images/living-fireplace-optimized.webp"
            alt="Wnętrze drewnianego domku z bali koło Supraśla, salon z kominkiem"
            className="h-64 w-full rounded-lg object-cover"
            loading="lazy"
            width="768"
            height="576"
          />
        </figure>
        <figure>
          <img
            src="/images/jacuzzi-night-optimized.webp"
            alt="Balia ogrodowa z jacuzzi w lesie na Podlasiu, dostępna na zapytanie"
            className="h-64 w-full rounded-lg object-cover"
            loading="lazy"
            width="768"
            height="576"
          />
        </figure>
      </section>

      <ul className="grid gap-3 sm:grid-cols-2 text-muted-foreground">
        <li>🏡 Cały domek tylko dla Was, wygodny pobyt do 8 osób</li>
        <li>🪵 Drewniana konstrukcja z bali</li>
        <li>🔥 Salon z kominkiem i podlaską płytą kaflową</li>
        <li>🛁 Balia ogrodowa z jacuzzi na zapytanie, 250 zł za pobyt</li>
        <li>🌿 Taras, ogród i miejsce na ognisko</li>
        <li>❄️ Klimatyzacja latem; Wi-Fi dostępne na zapytanie</li>
        <li>🅿️ Bezpłatny parking</li>
      </ul>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">
          Drewniany domek z bali blisko Puszczy Knyszyńskiej
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          In The Woods to dom z bali na Podlasiu, w miejscowości Konne. Od centrum Supraśla dzieli
          Was około 10 minut jazdy. To dobry wybór dla osób szukających domku w Puszczy Knyszyńskiej
          i spokojnego miejsca blisko leśnych tras.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Na parterze znajdziecie salon z kominkiem, kuchnię z tradycyjną płytą kaflową oraz łazienkę.
          Ten regionalny detal przypomina o podlaskim charakterze domu. Piętro mieści dwie sypialnie
          z dużymi łóżkami i widokiem na las.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Domek sprawdzi się na rodzinny wyjazd, workation albo weekend dla grupy przyjaciół.
          To także domek na wyłączność dla dwojga, gdy planujecie spokojny czas tylko we dwoje.
          Zobaczcie{' '}
          <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
            pomysły na weekend w Supraślu
          </Link>{' '}
          oraz{' '}
          <Link
            to="/puszcza-knyszynska-nocleg"
            className="text-primary underline hover:text-primary/80"
          >
            domek blisko Puszczy Knyszyńskiej
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">
          Wieczór przy kominku i jacuzzi pod gwiazdami
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Po dniu na świeżym powietrzu ogrzejecie się przy trzaskającym ogniu. W ogrodzie czeka
          miejsce na wieczorne ognisko, a gdy balia jest dostępna, nad ciepłą wodą unosi się para.
          Taki domek z ogniskiem pozwala zostać na zewnątrz dłużej, gdy pogoda sprzyja.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Balia z funkcją jacuzzi jest dodatkowo płatna i wymaga potwierdzenia dostępności.
          Jeśli marzy się Wam domek z jacuzzi na Podlasiu, zapytajcie o tę opcję przed przyjazdem.
        </p>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Pory roku w domku w lesie</h2>
        <p className="text-muted-foreground leading-relaxed">
          Jesienią wracacie ze spaceru do ciepła kominka, a za oknem szumią drzewa. Zimowy wieczór
          może przynieść śnieg, ogień w salonie i parę unoszącą się nad balią, jeśli jej dostępność
          zostanie potwierdzona.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Latem odpoczniecie na tarasie, w cieniu ogrodu lub przy ognisku. W domku działa
          klimatyzacja w sezonie letnim. Przez cały rok możecie obudzić się z widokiem na las i
          posłuchać ptaków o poranku.
        </p>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
        <ul className="text-muted-foreground space-y-2">
          <li>
            Balia ogrodowa z funkcją jacuzzi jest dostępna na zapytanie i kosztuje{' '}
            {GARDEN_TUB_PRICE} zł za pobyt. Gospodarz potwierdza dostępność.
          </li>
          <li>Pobyt z psem uzgodnijcie wcześniej z gospodarzem; potwierdzi też ewentualne opłaty.</li>
          <li>Wi-Fi jest dostępne na zapytanie, jeśli chcecie sprawdzić szczegóły przed pobytem.</li>
          <li>Na obszarach chronionych obowiązują własne zasady, także dotyczące obecności psa.</li>
        </ul>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Cennik i rezerwacja</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ceny zaczynają się od {MIN_NIGHTLY_RATE} zł za noc i zależą od terminu oraz liczby gości.
          Balia ogrodowa to opcjonalny dodatek za {GARDEN_TUB_PRICE} zł za pobyt. Podaj daty i liczbę
          osób w zapytaniu, a gospodarz przygotuje wycenę i potwierdzi dostępność. Formularz jest
          zapytaniem, nie potwierdzeniem rezerwacji.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Planujecie wynajem domku na weekend w Supraślu? Napiszcie do Macieja, by sprawdzić wolny
          termin.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Przed wyborem terminu przeczytaj także informacje o{' '}
          <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
            noclegach w Supraślu
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Najczęstsze pytania</h2>
        <div className="space-y-5">
          {faqItems.map(({ question, answer }) => (
            <div key={question}>
              <h3 className="font-heading text-xl text-foreground">{question}</h3>
              <p className="text-muted-foreground leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary p-8 text-center space-y-4 mt-12">
        <h2 className="font-heading text-2xl font-light">Zapytaj o dostępność domku</h2>
        <p className="text-muted-foreground">
          Napiszcie, kiedy chcecie przyjechać i w ile osób. Maciej pomoże sprawdzić termin i spokojnie
          zaplanować pobyt.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+48722765101" className="btn-primary">
            Zadzwoń: 722 765 101
          </a>
          <a href="mailto:tutinthewood@gmail.com" className="btn-outline">
            Napisz: tutinthewood@gmail.com
          </a>
          <Link to="/#rezerwacja" className="btn-outline">
            Formularz zapytania
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          In The Woods · Konne 109/1, 16-030 Supraśl
        </p>
      </section>
    </article>
  </SEOPageLayout>
);

export default DomekSuprasl;
