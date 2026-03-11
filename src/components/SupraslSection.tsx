import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Church, Image, Trees, UtensilsCrossed, Bike, Waves, MapPin, Clock } from 'lucide-react';

const attractions = [
  { icon: Church, name: 'Monaster Zwiastowania NMP' },
  { icon: Image, name: 'Muzeum Ikon' },
  { icon: Trees, name: 'Bulwary nad rzeką Supraśl' },
  { icon: UtensilsCrossed, name: 'Klimatyczne restauracje' },
  { icon: Bike, name: 'Trasy rowerowe puszczy' },
  { icon: Waves, name: 'Spływy kajakowe' },
];

const nearby = [
  { name: 'Supraśl', time: '10 min' },
  { name: 'Białystok', time: '25 min' },
  { name: 'Arboretum Kopna Góra', time: '20 min' },
  { name: 'Kruszyniany — kuchnia tatarska', time: '45 min' },
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
            Zaledwie kilkanaście minut od chaty znajduje się Supraśl — klimatyczne miasteczko uzdrowiskowe w sercu Puszczy Knyszyńskiej. 
            To jedno z najbardziej wyjątkowych miejsc Podlasia, gdzie natura łączy się z historią i spokojem slow life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {attractions.map((a, i) => (
            <div key={i} className="flex items-center gap-3 py-4 px-5 bg-card border border-border">
              <a.icon className="w-5 h-5 text-forest flex-shrink-0" strokeWidth={1.5} />
              <span className="text-sm text-foreground">{a.name}</span>
            </div>
          ))}
        </div>

        {/* Distances */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans text-center mb-6">Odległości</p>
          <div className="grid grid-cols-2 gap-3">
            {nearby.map((n, i) => (
              <div key={i} className="flex items-center justify-between py-3 px-5 bg-card border border-border">
                <span className="text-sm text-foreground flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-forest" /> {n.name}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {n.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
            Puszcza Knyszyńska to jeden z największych kompleksów leśnych w Polsce, oferujący setki kilometrów szlaków pieszych i rowerowych.
          </p>
          <p className="font-serif text-xl md:text-2xl italic text-foreground/80">
            10 minut od chaty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupraslSection;
