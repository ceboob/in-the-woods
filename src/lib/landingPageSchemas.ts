export interface LandingPageFaq {
  question: string;
  answer: string;
}

const SITE_URL = 'https://www.suprasl.online';

export const createLandingPageSchemas = (path: string, faqs: LandingPageFaq[]) => [
  {
    '@context': 'https://schema.org',
    '@type': ['LodgingBusiness', 'VacationRental'],
    '@id': `${SITE_URL}${path}#lodging`,
    name: 'In The Woods — drewniany dom z bali na wyłączność',
    url: `${SITE_URL}${path}`,
    telephone: '+48722765101',
    email: 'tutinthewood@gmail.com',
    priceRange: 'od 399 zł/noc',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Konne 109/1',
      postalCode: '16-030',
      addressLocality: 'Supraśl',
      addressRegion: 'podlaskie',
      addressCountry: 'PL',
    },
    numberOfBedrooms: 2,
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: 8,
    },
    amenityFeature: [
      'kominek',
      'kuchnia z płytą kaflową',
      'ogród i taras',
      'altana',
      'miejsce na ognisko',
      'Wi-Fi',
      'bezpłatny parking',
      'klimatyzacja w sezonie letnim',
      'balia ogrodowa z funkcją jacuzzi dostępna jako płatny dodatek na zapytanie',
    ].map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  },
];
