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
const LocationSection = lazy(() => import('@/components/LocationSection'));
const EventsSection = lazy(() => import('@/components/EventsSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const GuestGuideSection = lazy(() => import('@/components/GuestGuideSection'));
const GuideSection = lazy(() => import('@/components/GuideSection'));
const SEOTextSection = lazy(() => import('@/components/SEOTextSection'));
const CTASection = lazy(() => import('@/components/CTASection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));
const ExitIntentPopup = lazy(() => import('@/components/ExitIntentPopup'));
const StickyMobileCTA = lazy(() => import('@/components/StickyMobileCTA'));

const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary/30 border-t-teal rounded-full animate-spin" />
  </div>
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VacationRental',
  '@id': 'https://www.suprasl.online/#vacation-rental',
  name: 'In The Woods — leśny dom na wyłączność z jacuzzi i sauną',
  description:
    'Zarezerwuj leśny domek do wynajęcia w Puszczy Knyszyńskiej na wyłączność. Dom z bali z jacuzzi, sauną, kominkiem i ogrodzonym terenem. Domek w lesie wynajem dla par, rodzin i przyjaciół — psy za darmo, slow travel Podlasie.',
  url: 'https://www.suprasl.online/',
  telephone: '+48 722 765 101',
  email: 'tutinthewood@gmail.com',
  sameAs: [
    'https://www.facebook.com/inthewoods.suprasl',
    'https://www.instagram.com/inthewoods.suprasl/',
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
    ratingValue: '4.82',
    reviewCount: '110',
    bestRating: '5',
    worstRating: '1',
  },
  starRating: {
    '@type': 'Rating',
    ratingValue: '4.82',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Gorąca balia / Jacuzzi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Sauna / Ruska bania', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kominek', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Klimatyzacja', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Prywatny ogrodzony ogród', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Altana z grillem i ognisko', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Plac zabaw', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Płyta kuchenna kaflowa', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Akceptacja zwierząt (psy za darmo)', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Smart TV', value: true },
  ],
  numberOfRooms: 3,
  occupancy: {
    '@type': 'QuantitativeValue',
    maxValue: 8,
    unitText: 'osób',
  },
  petsAllowed: true,
  checkinTime: '15:00',
  checkoutTime: '11:00',
  image: [
    'https://www.suprasl.online/og-image.jpg',
    'https://www.suprasl.online/gallery/dom-z-zewnatrz-zima.jpg',
    'https://www.suprasl.online/gallery/jacuzzi-w-nocy.jpg',
    'https://www.suprasl.online/gallery/salon-z-kominkiem.jpg',
    'https://www.suprasl.online/gallery/sypialnia-na-pietrze.jpg',
  ],
  priceRange: 'od 399 PLN',
  currenciesAccepted: 'PLN',
  paymentAccepted: 'Przelew bankowy, Karta kredytowa, Gotówka',
  containedInPlace: {
    '@type': 'Place',
    name: 'Puszcza Knyszyńska',
    url: 'https://pl.wikipedia.org/wiki/Puszcza_Knyszy%C5%84ska',
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
        text: 'Dom znajduje się w miejscowości Konne koło Supraśla, w Puszczy Knyszyńskiej — około 10 minut samochodem od centrum Supraśla i 25 minut od Białegostoku. To domek w lesie na Podlasiu, przy Rezerwacie Przyrody Krzemienne Góry.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ile kosztuje wynajem domku w lesie na weekend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ceny zaczynają się od 399 zł za noc. Koszt zależy od sezonu, dnia tygodnia i długości pobytu. Sprawdź kalendarz dostępności — wynajem domku na odludziu na weekend bez pośredników.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy domek jest dostępny na sylwestra, walentynki lub majówkę?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Domek na sylwestra w lesie, walentynki i majówkę to nasze najpopularniejsze terminy — rezerwowane z dużym wyprzedzeniem. Sprawdź dostępność w kalendarzu lub zadzwoń.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy są noclegi z jacuzzi w Supraślu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In The Woods oferuje prywatną ruską banię z balią z gorącą wodą — domek z jacuzzi w lesie. Idealne wieczorne SPA pod gwiazdami, dostępne jako dodatek do pobytu za 250 zł.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy dom jest prywatny?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak — dom i cały ogród wynajmujecie na wyłączność. Żadnych innych gości. Dom na wyłączność w lesie — Twoja prywatna przestrzeń.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy można przyjechać z psem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak, zwierzęta są mile widziane. Psy za darmo — bez dopłat. Ogrodzony ogród i las za progiem to raj dla czworonogów.',
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
      name: 'Czy mogę pracować zdalnie w In The Woods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak — szybkie Wi-Fi, biurko przy oknie z widokiem na las. Praca zdalna w lesie — wynajem domku idealnego na workation.',
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
        title="Domek w lesie z jacuzzi | In The Woods — Podlasie"
        description="Zarezerwuj leśny dom z sauną i balią w Puszczy Knyszyńskiej na wyłączność. Cisza, kominek, ogrodzony teren. Sprawdź wolne terminy!"
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

          {/* Dowód wizualny — 3. sekcja po hero */}
          <GallerySection />

          {/* Przewodnik turystyczny */}
          <GuideSection />

          <JacuzziSection />
          <RelaxSection />
          <ForWhoSection />

          {/* Sezonowość + okolica */}
          <WinterSection />

          {/* Cena + dostępność + rezerwacja — konwersja */}
          <PricingSection />
          <AvailabilityCalendar />
          <BookingModule />

          {/* Social proof */}
          <TestimonialsSection />

          {/* Okolica i lokalne SEO */}
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
