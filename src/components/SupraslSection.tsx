import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Church, Image, Trees, UtensilsCrossed, Bike, Waves } from 'lucide-react';

const attractions = [
  { icon: Church, name: 'Monaster Supraśl' },
  { icon: Image, name: 'Muzeum Ikon' },
  { icon: Trees, name: 'Bulwary nad rzeką' },
  { icon: UtensilsCrossed, name: 'Restauracje regionalne' },
  { icon: Bike, name: 'Trasy rowerowe' },
  { icon: Waves, name: 'Spływy kajakowe' },
];

const SupraslSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Okolica</p>
          <h2 className="section-title">Supraśl — perła Podlasia</h2>
          <p className="section-subtitle mx-auto">
            Jedno z najpiękniejszych miasteczek Podlasia. Uzdrowisko. Puszcza. Historia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {attractions.map((a, i) => (
            <div key={i} className="flex items-center gap-3 py-4 px-5 bg-card border border-border">
              <a.icon className="w-5 h-5 text-forest flex-shrink-0" strokeWidth={1.5} />
              <span className="text-sm text-foreground">{a.name}</span>
            </div>
          ))}
        </div>

        <p className="text-center font-serif text-xl md:text-2xl italic text-foreground/80">
          10 minut od chaty.
        </p>
      </div>
    </section>
  );
};

export default SupraslSection;
