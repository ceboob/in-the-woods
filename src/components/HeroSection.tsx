import heroImgSm from '@/assets/exterior-main-sm.webp';
import heroImgLg from '@/assets/exterior-main-lg.webp';
import { Phone, Users, Flame, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImgLg}
          srcSet={`${heroImgSm} 640w, ${heroImgLg} 1028w`}
          sizes="100vw"
          alt="Drewniany dom z balią ogrodową w otoczeniu drzew"
          className="w-full h-full object-cover"
          width="1028"
          height="771"
          loading="eager"
          {...{ fetchpriority: 'high' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#333333]/75 via-[#333333]/50 to-[#333333]/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white text-center leading-tight animate-fade-up drop-shadow-lg font-accent mt-8 sm:mt-0">
          Klimatyczny dom z bali w Puszczy Knyszyńskiej
        </h1>
        <p className="font-sans font-semibold mt-4 mb-10 mx-auto max-w-2xl text-center text-base sm:text-lg text-white/90 animate-fade-up delay-100">
          Dom na wyłączność z kominkiem. Balia ogrodowa z funkcją jacuzzi jest opcjonalnym dodatkiem; jej dostępność potwierdź przed pobytem.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 animate-fade-up delay-200">
          <div className="flex items-center gap-2 text-white/90">
            <Users className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide font-medium">Dom z bali na wyłączność</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Flame className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide font-medium">Domek z kominkiem w lesie</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide font-medium">Jacuzzi pod gwiazdami</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-up delay-300">
          <button
            onClick={() => scrollTo('#rezerwacja')}
            className="btn-primary bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Przejdź do formularza zapytania
          </button>
          <a
            href="tel:+48722765101"
            className="btn-outline border-white text-white hover:bg-primary hover:text-primary-foreground hover:border-primary inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" /> Zadzwoń
          </a>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  );
};

export default HeroSection;
