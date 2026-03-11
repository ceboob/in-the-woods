import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BadgesBar from '@/components/BadgesBar';
import TrustSection from '@/components/TrustSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import JacuzziSection from '@/components/JacuzziSection';
import RelaxSection from '@/components/RelaxSection';
import ExperienceSection from '@/components/ExperienceSection';
import ForWhoSection from '@/components/ForWhoSection';
import GallerySection from '@/components/GallerySection';
import WinterSection from '@/components/WinterSection';
import SupraslSection from '@/components/SupraslSection';
import LocationSection from '@/components/LocationSection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import BookingModule from '@/components/BookingModule';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <BadgesBar />
        <TrustSection />
        <AmenitiesSection />
        <JacuzziSection />
        <RelaxSection />
        <ExperienceSection />
        <ForWhoSection />
        <GallerySection />
        <WinterSection />
        <SupraslSection />
        <LocationSection />
        <PricingSection />
        <CTASection />
        <BookingModule />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
