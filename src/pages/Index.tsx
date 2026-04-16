import { lazy, Suspense } from 'react';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HeroWelcome from '@/components/HeroWelcome';
import BadgesBar from '@/components/BadgesBar';
import TrustSection from '@/components/TrustSection';
import BookingModule from '@/components/BookingModule';
import AvailabilityCalendar from '@/components/AvailabilityCalendar';
import BookingEcosystemSection from '@/components/BookingEcosystemSection';

// Lazy-loaded sections below the fold
const AmenitiesSection = lazy(() => import('@/components/AmenitiesSection'));
const JacuzziSection = lazy(() => import('@/components/JacuzziSection'));
const RelaxSection = lazy(() => import('@/components/RelaxSection'));
const ForWhoSection = lazy(() => import('@/components/ForWhoSection'));
const GallerySection = lazy(() => import('@/components/GallerySection'));
const WinterSection = lazy(() => import('@/components/WinterSection'));
const PricingSection = lazy(() => import('@/components/PricingSection'));
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

const Index = () => {
  const listingUrls = [
    'https://www.airbnb.pl/rooms/1165170256851279014?guests=1&adults=1&s=67&unique_share_id=cd1458aa-ed37-425b-8252-1fcae5ea10b2',
    'https://alohacamp.com/pl/property/dom-w-puszczy-z-ruska-bania-5875',
    'https://alohacamp.com/pl/property/dom-w-puszczy-z-ruska-bania-5875',
    'https://doginclusive.com/oferty/in-the-woods-',
  ];
  const socialUrls = [
    'https://www.facebook.com/krzemienna.chata/',
    'https://www.instagram.com/krzemienna_chata/',
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Domek w lesie z jacuzzi | In The Woods — Podlasie"
        description="Zarezerwuj leśny dom z sauną i balią w Puszczy Knyszyńskiej na wyłączność. Cisza, kominek, ogrodzony teren. Sprawdź wolne terminy!"
        canonical="https://www.suprasl.online/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': ['LodgingBusiness', 'VacationRental'],
            name: 'In The Woods — Dom w Puszczy Knyszyńskiej',
            url: 'https://www.suprasl.online/',
            telephone: '+48722765101',
            email: 'tutinthewood@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Konne 109/1',
              postalCode: '16-030',
              addressLocality: 'Supraśl',
              addressCountry: 'PL',
            },
            sameAs: Array.from(new Set([...listingUrls, ...socialUrls])),
            checkinTime: '15:00',
            checkoutTime: '11:00',
            petsAllowed: true,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'In The Woods',
            url: 'https://www.suprasl.online/',
            potentialAction: {
              '@type': 'ReserveAction',
              target: listingUrls,
            },
          },
        ]}
      />

      <Navbar />

      <main>
        {/* ATF: Hero + zaufanie — natychmiastowe zrozumienie oferty */}
        <HeroSection />
        <HeroWelcome />
        <BookingModule />
        <BookingEcosystemSection />
        <AvailabilityCalendar />
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

          {/* Cena + dostępność — konwersja */}
          <PricingSection />

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
