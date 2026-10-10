export const amenityFaqs = [
  {
    q: 'Czy w domu jest jacuzzi?',
    // TODO (właściciel): szczegóły jacuzzi – całoroczne? dodatkowo płatne? dla ilu osób? temperatura wody?
    a: 'Tak, przy domu jest jacuzzi ogrodowe na wyłączność gości. Po spacerze po Puszczy Knyszyńskiej możesz z niego korzystać tylko w gronie swojej grupy.',
  },
  {
    q: 'Czy można przyjechać z psem i czy trzeba za niego płacić?',
    a: 'Tak, to dom przyjazny zwierzętom. Pobyt z psem lub innym pupilem jest całkowicie bezpłatny – nie pobieramy żadnych dodatkowych opłat za zwierzęta.',
  },
  {
    q: 'Czy jest szybki internet do pracy zdalnej?',
    a: 'Tak, w domu działa internet Starlink o prędkości do 200 Mb/s, więc zdalna praca z widokiem na las nie jest problemem.',
  },
  {
    q: 'Czy jest klimatyzacja?',
    a: 'Tak, dom jest klimatyzowany. Latem utrzymasz w nim przyjemny chłód, a zimą ciepło.',
  },
  {
    q: 'Jak daleko jest do Białegostoku?',
    // TODO (właściciel): podaj odległość i czas dojazdu do Białegostoku.
    a: 'Dom leży w okolicach Supraśla, więc to wygodny nocleg blisko Białegostoku i dobra baza na weekend w lesie.',
  },
];

const SITE = 'https://www.suprasl.online';

export const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    '@id': `${SITE}/#vacation-rental`,
    name: 'In The Woods – dom na wynajem w Supraślu',
    url: `${SITE}/`,
    description:
      'Dom na wynajem w Supraślu, w lesie przy Puszczy Knyszyńskiej: jacuzzi ogrodowe, kominek, ognisko, Wi-Fi Starlink do 200 Mb/s i pobyt ze zwierzętami bez dodatkowych opłat.',
    image: [`${SITE}/images/exterior-main.jpg`, `${SITE}/images/living-fireplace.jpg`],
    telephone: '+48722765101',
    email: 'tutinthewood@gmail.com',
    petsAllowed: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Konne 109/1',
      postalCode: '16-030',
      addressLocality: 'Supraśl',
      addressRegion: 'podlaskie',
      addressCountry: 'PL',
    },
    // TODO (właściciel): priceRange, geo, numberOfBedrooms, occupancy – uzupełnij po potwierdzeniu danych.
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Jacuzzi ogrodowe', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Kominek', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Ognisko', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi Starlink do 200 Mb/s', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Klimatyzacja', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Kuchnia', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Smart TV', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Ogród', value: true },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Zwierzęta bez dodatkowych opłat',
        value: true,
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: amenityFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
];
