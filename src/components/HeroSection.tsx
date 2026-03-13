import jacuzziImg from '@/assets/jacuzzi-night.jpg';
import { Phone, Star, Users, TreePine, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={jacuzziImg} alt="Noclegi Supraśl — dom w lesie z jacuzzi, In The Woods, Puszcza Knyszyńska" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/60 via-graphite/30 to-graphite/70" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-4 animate-fade-up" style={{ letterSpacing: '0.01em' }}>
          In The Woods – noclegi Supraśl
        </h1>
        <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-cream/70 mb-3 animate-fade-in">
          Dom w lesie z jacuzzi blisko Supraśla
        </p>

        <div className="flex flex-col items-center gap-1 mb-10 animate-fade-up delay-100">
          <p className="font-serif text-lg md:text-xl text-cream/90 italic">Prywatny dom w lesie.</p>
          <p className="font-serif text-lg md:text-xl text-cream/90 italic">Kominek. Ruska bania. Cisza natury.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 animate-fade-up delay-200">
          <div className="flex items-center gap-2 text-cream/80">
            <Users className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide">Dom na wyłączność</span>
          </div>
          <div className="flex items-center gap-2 text-cream/80">
            <TreePine className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide">10 min od Supraśla</span>
          </div>
          <div className="flex items-center gap-2 text-cream/80">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide">Jacuzzi pod gwiazdami</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up delay-300">
          <button onClick={() => scrollTo('#rezerwacja')} className="btn-primary bg-cream text-graphite hover:bg-cream/90">
            Sprawdź dostępność
          </button>
          <a href="tel:+48722765101" className="btn-outline border-cream text-cream hover:bg-cream hover:text-graphite inline-flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" /> Zadzwoń
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 animate-fade-in delay-400">
          <div className="flex items-center gap-1.5 text-cream/60 text-xs">
            <Star className="w-3.5 h-3.5 fill-cream/60 text-cream/60" />
            <span>5★ opinie</span>
          </div>
          <span className="text-cream/30">·</span>
          <span className="text-cream/60 text-xs">Ponad 100 zadowolonych gości</span>
          <span className="text-cream/30">·</span>
          <span className="text-cream/60 text-xs">Rezerwacje bezpośrednie</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-cream/40" />
      </div>
    </section>
  );
};

export default HeroSection;
