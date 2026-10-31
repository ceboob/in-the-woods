import { lazy, Suspense, useEffect, useState } from 'react';
import SEOHead from '@/components/SEOHead';
import { amenityFaqs } from '@/data/amenityFaq';
import { property } from '@/data/property';
import { buildVacationRentalSchema } from '@/lib/structuredData';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HeroWelcome from '@/components/HeroWelcome';
import BadgesBar from '@/components/BadgesBar';
import ForWhoSection from '@/components/ForWhoSection';
import BookingModule from '@/components/BookingModule';
import AvailabilityCalendar from '@/components/AvailabilityCalendar';

// Lazy-loaded sections below the fold
const AmenitiesSection = lazy(() => import('@/components/AmenitiesSection'));
const JacuzziSection = lazy(() => import('@/components/JacuzziSection'));
const GallerySection = lazy(() => import('@/components/GallerySection'));
const WinterSection = lazy(() => import('@/components/WinterSection'));
const PricingSection = lazy(() => import('@/components/PricingSection'));
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

// Mount the exit-intent popup only after first interaction or a delay
const useDeferredMount = (delayMs: number) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart', 'mousemove'];
    const go = () => setReady(true);
    const timer = window.setTimeout(go, delayMs);
    events.forEach((e) => window.addEventListener(e, go, { once: true, passive: true }));
    return () => {
      window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, go));
    };
  }, [delayMs]);
  return ready;
};

// TODO: zatwierdź treść
const Index = () => {
  const showExitPopup = useDeferredMount(8000);
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Noclegi Supraśl – dom z bali na wyłączność | In The Woods"
        description={property.description}
        canonical="https://www.suprasl.online/"
        jsonLd={[
          buildVacationRentalSchema(property),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: amenityFaqs.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          },
        ]}
      />

      <Navbar />

      <main>
        {/* ATF: Hero + zaufanie — natychmiastowe zrozumienie oferty */}
        <HeroSection />
        <HeroWelcome />
        <BookingModule />
        <AvailabilityCalendar />
        <BadgesBar />
        <ForWhoSection />

        <Suspense fallback={<SectionFallback />}>
          {/* Oferta — co dostaje gość */}
          <AmenitiesSection />

          {/* Dowód wizualny — 3. sekcja po hero */}
          <GallerySection />

          {/* Blog */}
          <GuideSection />

          <JacuzziSection />

          {/* Sezonowość + okolica */}
          <WinterSection />

          {/* Cena + dostępność — konwersja */}
          <PricingSection />

          {/* Social proof */}
          {/* Okolica i lokalne SEO */}
          <LocationSection />
          <EventsSection />

          {/* FAQ + informator */}
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
        {showExitPopup && <ExitIntentPopup />}
        <StickyMobileCTA />
      </Suspense>
    </div>
  );
};

export default Index;
