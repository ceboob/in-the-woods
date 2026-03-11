import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import RelaxSection from '@/components/RelaxSection';
import ForWhoSection from '@/components/ForWhoSection';
import NatureSection from '@/components/NatureSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import BookingModule from '@/components/BookingModule';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AmenitiesSection />
        <RelaxSection />
        <ForWhoSection />
        <NatureSection />
        <GallerySection />
        <TestimonialsSection />
        <BookingModule />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
