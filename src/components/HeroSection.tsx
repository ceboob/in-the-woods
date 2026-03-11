import heroCabin from '@/assets/hero-cabin.jpg';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCabin} alt="Krzemienna Chata w Puszczy Knyszyńskiej" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/40 via-graphite/20 to-graphite/50" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-cream/80 mb-4 animate-fade-in">
          Puszcza Knyszyńska · Supraśl
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6 animate-fade-up">
          Krzemienna Chata
        </h1>
        <p className="font-serif text-lg md:text-2xl font-light text-cream/90 italic mb-10 animate-fade-up delay-200">
          Dom w Puszczy z ruską banią
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
          <button onClick={() => scrollTo('#rezerwacja')} className="btn-primary bg-cream text-graphite hover:bg-cream/90">
            Sprawdź dostępność
          </button>
          <button onClick={() => scrollTo('#kontakt')} className="btn-outline border-cream text-cream hover:bg-cream hover:text-graphite">
            Zapytaj o pobyt
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-cream/40" />
      </div>
    </section>
  );
};

export default HeroSection;
