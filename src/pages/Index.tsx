import { lazy, Suspense } from 'react';
import SEOHead from '@/components/SEOHead';
import { homeJsonLd } from '@/data/amenityFaq';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HeroWelcome from '@/components/HeroWelcome';
import BadgesBar from '@/components/BadgesBar';
import TrustSection from '@/components/TrustSection';
import BookingModule from '@/components/BookingModule';
import AvailabilityCalendar from '@/components/AvailabilityCalendar';

// Lazy-loaded sections below the fold
const AmenitiesSection = lazy(() => import('@/components/AmenitiesSection'));
const JacuzziSection = lazy(() => import('@/components/JacuzziSection'));
const RelaxSection = lazy(() => import('@/components/RelaxSection'));
const ForWhoSection = lazy(() => import('@/components/ForWhoSection'));
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Dom na wynajem Supraśl – dom w lesie z jacuzzi | In The Woods"
        description="Noclegi Supraśl w domu w lesie: jacuzzi ogrodowe, kominek, ognisko. Dom przyjazny zwierzętom – pies gratis! Blisko Białegostoku. Sprawdź terminy!"
        canonical="https://www.suprasl.online/"
        jsonLd={homeJsonLd}
      />

      <Navbar />

      <main>
        {/* ATF: Hero + zaufanie — natychmiastowe zrozumienie oferty */}
        <HeroSection />
        <HeroWelcome />
        <BookingModule />
        <AvailabilityCalendar />
        <BadgesBar />
        <TrustSection />

        <Suspense fallback={<SectionFallback />}>
          {/* Oferta — co dostaje gość */}
          <AmenitiesSection />

          {/* Dowód wizualny — 3. sekcja po hero */}
          <GallerySection />

          {/* Blog */}
          <GuideSection />

          <JacuzziSection />
          <RelaxSection />
          <ForWhoSection />

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
        <ExitIntentPopup />
        <StickyMobileCTA />
      </Suspense>
    </div>
  );
};

export default Index;
