import { lazy, Suspense } from 'react';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HeroWelcome from '@/components/HeroWelcome';
import BadgesBar from '@/components/BadgesBar';
import TrustSection from '@/components/TrustSection';

// Lazy-loaded sections below the fold
const AmenitiesSection = lazy(() => import('@/components/AmenitiesSection'));
const JacuzziSection = lazy(() => import('@/components/JacuzziSection'));
const RelaxSection = lazy(() => import('@/components/RelaxSection'));
const ForWhoSection = lazy(() => import('@/components/ForWhoSection'));
const GallerySection = lazy(() => import('@/components/GallerySection'));
const WinterSection = lazy(() => import('@/components/WinterSection'));
const PricingSection = lazy(() => import('@/components/PricingSection'));
const AvailabilityCalendar = lazy(() => import('@/components/AvailabilityCalendar'));
const BookingModule = lazy(() => import('@/components/BookingModule'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const SupraslSection = lazy(() => import('@/components/SupraslSection'));
const LocationSection = lazy(() => import('@/components/LocationSection'));
const EventsSection = lazy(() => import('@/components/EventsSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const GuestGuideSection = lazy(() => import('@/components/GuestGuideSection'));
const SEOTextSection = lazy(() => import('@/components/SEOTextSection'));
const CTASection = lazy(() => import('@/components/CTASection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));
const ExitIntentPopup = lazy(() => import('@/components/ExitIntentPopup'));
const StickyMobileCTA = lazy(() => import('@/components/StickyMobileCTA'));

const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-forest/30 border-t-forest rounded-full animate-spin" />
  </div>
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VacationRental',
  '@id': 'https://www.suprasl.online/#vacation-rental',
  name: 'In The Woods – noclegi Supraśl',
  description:
    'Prywatny dom w lesie z jacuzzi w Puszczy Knyszyńskiej. Kominek, ogród, ruska bania – idealny nocleg w Supraślu.',
  url: 'https://www.suprasl.online/',
  telephone: '+48 722 765 101',
  email: 'tutinthewood@gmail.com',
  sameAs: [
    'https://www.instagram.com/krzemienna_chata/',
    'https://www.facebook.com/krzemienna.chata',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Konne 109/1',
    addressLocality: 'Supraśl',
    postalCode: '16-030',
    addressRegion: 'podlaskie',
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.20586,
    longitude: 23.34725,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '100',
    bestRating: '5',
    worstRating: '1',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Jacuzzi / Ruska bania', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kominek', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Ogród', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Pet-friendly', value: true },
  ],
  numberOfRooms: 3,
  occupancy: {
    '@type': 'QuantitativeValue',
    maxValue: 8,
    unitText: 'guests',
  },
  petsAllowed: true,
  checkinTime: '15:00',
  checkoutTime: '11:00',
  image: [
    'https://www.suprasl.online/og-image.jpg',
    'https://www.suprasl.online/images/exterior-main.jpg',
    'https://www.suprasl.online/images/jacuzzi-night.jpg',
    'https://www.suprasl.online/images/interior-living.webp',
  ],
  priceRange: 'PLN 399-899',
  currenciesAccepted: 'PLN',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, Stripe',
  containedInPlace: {
    '@type': 'Place',
    '@id': 'https://www.suprasl.online/#puszcza',
    name: 'Puszcza Knyszyńska',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.2,
      longitude: 23.35,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Supraśl',
      addressRegion: 'podlaskie',
      addressCountry: 'PL',
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Gdzie znajduje się In The Woods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dom znajduje się w miejscowości Konne koło Supraśla, w Puszczy Knyszyńskiej — około 10 minut samochodem od centrum Supraśla i 25 minut od Białegostoku.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy są noclegi z jacuzzi w Supraślu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In The Woods oferuje prywatną ruską banię z balią z gorącą wodą — idealne wieczorne SPA pod gwiazdami, dostępne jako dodatek do pobytu za 250 zł.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy dom jest prywatny?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak — dom i cały ogród wynajmujecie na wyłączność. Żadnych innych gości.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy można przyjechać z psem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak, zwierzęta są mile widziane. Pobyt z psem jest bezpłatny. Ogrodzony ogród i las za progiem to raj dla czworonogów.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dla ilu osób jest dom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dom jest komfortowy dla 6–8 osób. Dwie sypialnie z dużymi łóżkami na piętrze oraz dodatkowa przestrzeń w salonie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak wygląda rezerwacja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wyślij zapytanie przez formularz lub zadzwoń pod 722 765 101. Potwierdzimy dostępność i przedstawimy szczegółową ofertę. Rezerwacja bezpośrednia, bez prowizji pośrednika.',
      },
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Noclegi Supraśl – In The Woods | dom w lesie z jacuzzi"
        description="Szukasz noclegu w Supraślu? In The Woods to prywatny dom w lesie z jacuzzi w Puszczy Knyszyńskiej. Kominek, ogród, ruska bania – idealny wypoczynek blisko natury."
        canonical="https://www.suprasl.online/"
        jsonLd={[jsonLd, faqJsonLd]}
      />

      <Navbar />

      <main>
        {/* ATF: Hero + zaufanie — natychmiastowe zrozumienie oferty */}
        <HeroSection />
        <HeroWelcome />
        <BadgesBar />
        <TrustSection />

        <Suspense fallback={<SectionFallback />}>
          {/* Oferta — co dostaje gość */}
          <AmenitiesSection />
          <JacuzziSection />
          <RelaxSection />
          <ForWhoSection />

          {/* Dowód wizualny */}
          <GallerySection />

          {/* Sezonowość + okolica */}
          <WinterSection />

          {/* Cena + dostępność + rezerwacja — konwersja */}
          <PricingSection />
          <AvailabilityCalendar />
          <BookingModule />

          {/* Social proof */}
          <TestimonialsSection />

          {/* Okolica i lokalne SEO */}
          <SupraslSection />
          <LocationSection />
          <EventsSection />

          {/* FAQ (dane strukturalne) + informator */}
          <FAQSection />
          <GuestGuideSection />

          {/* Treść SEO + końcowe CTA */}
          <SEOTextSection />
          <CTASection />
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <ExitIntentPopup />
        <StickyMobileCTA />
      </Suspense>
    </div>
  );
};

export default Index;
