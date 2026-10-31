export const property = {
  identifier: 'in-the-woods-suprasl',
  name: 'In The Woods — dom z\u00a0bali na wyłączność koło Supraśla',
  description:
    'Cały dom z bali dla 8 osób na skraju Puszczy Knyszyńskiej, 10 min od Supraśla. Kominek, balia, Starlink, pies gratis. Od 399 zł za dom.',
  url: 'https://www.suprasl.online/',
  canonicalUrl: 'https://www.suprasl.online/',
  address: {
    streetAddress: 'Konne 109/1',
    postalCode: '16-030',
    addressLocality: 'Konne',
    addressRegion: 'podlaskie',
    addressCountry: 'PL',
  },
  latitude: 53.2075206,
  longitude: 23.4387928,
  maxGuests: 8,
  bedrooms: 2,
  bathrooms: 1,
  // TODO: Confirm the types and count of the individual beds with the property owner.
  beds: [] as { type: string; count: number }[],
  // TODO: Confirm the property's floor area in square metres.
  floorSizeM2: null as number | null,
  accommodationType: 'EntirePlace' as const,
  amenities: [
    'Kominek',
    'Wyposażona kuchnia',
    'Wi-Fi',
    'Parking',
    'Ogród i\u00a0taras',
    'Miejsce na ognisko',
    'Balia ogrodowa z\u00a0hydromasażem (jacuzzi) — dodatkowo płatna',
  ],
  images: [
    '/images/exterior-main.webp',
    '/images/gallery-salon-kominek.webp',
    '/images/gallery-dom-lato.webp',
    '/images/gallery-sypialnia-balkon-optimized.webp',
    '/images/gallery-jadalnia-sniadanie.webp',
    '/images/gallery-bania-front.webp',
    '/images/gallery-taras-obiad-optimized.webp',
    '/images/gallery-kuchnia-ceramika.webp',
  ],
  // TODO: Confirm check-in and check-out times with the property owner.
  checkinTime: null as string | null,
  checkoutTime: null as string | null,
  // TODO: Confirm the pet policy; existing pages disagree about conditions and fees.
  petsAllowed: null as boolean | null,
  telephone: '+48722765101',
  priceRange: 'od 399 zł/noc',
  // TODO: Add only reviews and ratings that are published visibly on the website.
  reviews: [] as {
    author: string;
    rating: number;
    bestRating: number;
    date: string;
    body: string;
  }[],
  aggregateRating: null as {
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
  } | null,
};

export type Property = typeof property;
