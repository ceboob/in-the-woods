import type { Property } from '@/data/property';

const SITE_URL = 'https://www.suprasl.online';

export function buildVacationRentalSchema(property: Property) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    '@id': `${property.canonicalUrl}#vacation-rental`,
    name: property.name,
    description: property.description,
    url: property.url,
    identifier: property.identifier,
    image: property.images.map((image) => new URL(image, SITE_URL).toString()),
    latitude: property.latitude,
    longitude: property.longitude,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: property.latitude,
      longitude: property.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      ...property.address,
    },
    telephone: property.telephone,
    priceRange: property.priceRange,
    ...(property.checkinTime ? { checkinTime: property.checkinTime } : {}),
    ...(property.checkoutTime ? { checkoutTime: property.checkoutTime } : {}),
    ...(property.petsAllowed !== null ? { petsAllowed: property.petsAllowed } : {}),
    ...(property.aggregateRating
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ...property.aggregateRating,
          },
        }
      : {}),
    ...(property.reviews.length
      ? {
          review: property.reviews.map(({ author, rating, bestRating, date, body }) => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: author },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: rating,
              bestRating,
            },
            datePublished: date,
            reviewBody: body,
          })),
        }
      : {}),
    containsPlace: {
      '@type': 'Accommodation',
      additionalType: property.accommodationType,
      occupancy: {
        '@type': 'QuantitativeValue',
        value: property.maxGuests,
      },
      numberOfBedrooms: property.bedrooms,
      numberOfBathroomsTotal: property.bathrooms,
      ...(property.beds.length
        ? {
            bed: property.beds.map(({ type, count }) => ({
              '@type': 'BedDetails',
              typeOfBed: type,
              numberOfBeds: count,
            })),
          }
        : {}),
      ...(property.floorSizeM2 !== null
        ? {
            floorSize: {
              '@type': 'QuantitativeValue',
              value: property.floorSizeM2,
              unitCode: 'MTK',
            },
          }
        : {}),
      amenityFeature: property.amenities.map((name) => ({
        '@type': 'LocationFeatureSpecification',
        name,
        value: true,
      })),
    },
  };
}

export interface BlogPostingData {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  modifiedDate?: string;
  image: string;
  keywords: string[];
}

export function buildBlogPostingSchema(post: BlogPostingData) {
  const image = new URL(post.image, SITE_URL).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate || post.publishDate,
    author: { '@type': 'Organization', name: 'In The Woods' },
    publisher: {
      '@type': 'Organization',
      name: 'In The Woods',
      url: SITE_URL,
    },
    mainEntityOfPage: post.url,
    keywords: post.keywords.join(', '),
    image: {
      '@type': 'ImageObject',
      url: image,
      caption: `In The Woods Supraśl — ${post.title}`,
    },
  };
}
