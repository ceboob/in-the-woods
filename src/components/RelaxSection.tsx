import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import jacuzziImg from '@/assets/jacuzzi-night.jpg';
import forestImg from '@/assets/forest-nature.jpg';
import { Snowflake, Sun, Leaf, Flower2 } from 'lucide-react';

const rituals = [
  { icon: Snowflake, season: 'Zimą', text: 'po spacerach w śnieżnej puszczy' },
  { icon: Sun, season: 'Latem', text: 'po rowerach i kajakach' },
  { icon: Leaf, season: 'Jesienią', text: 'po grzybobraniu' },
  { icon: Flower2, season: 'Wiosną', text: 'po odkrywaniu budzącej się natury' },
];

const RelaxSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="relaks" className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Strefa relaksu</p>
          <h2 className="section-title">Zwolnij. Oddychaj. Odpoczywaj.</h2>
          <p className="section-subtitle mx-auto">
            Po dniu spędzonym na leśnych szlakach możesz zanurzyć się w gorącej ruskiej bani i poczuć prawdziwy slow life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16">
          <div className="overflow-hidden relative group">
            <img src={jacuzziImg} alt="Wieczorne kąpiele pod gwiazdami — ruska bania" className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-graphite/70 to-transparent p-6">
              <p className="font-serif text-lg text-cream italic">Wieczorne kąpiele pod gwiazdami</p>
            </div>
          </div>
          <div className="overflow-hidden relative group">
            <img src={forestImg} alt="Las Puszczy Knyszyńskiej — relaks w sercu natury" className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-graphite/70 to-transparent p-6">
              <p className="font-serif text-lg text-cream italic">Relaks w sercu natury</p>
            </div>
          </div>
        </div>

        {/* Seasonal rituals */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-center font-serif text-xl md:text-2xl font-light text-foreground mb-8">
            To idealny rytuał:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {rituals.map((r, i) => (
              <div key={i} className="text-center py-6 border border-border bg-card space-y-3">
                <r.icon className="w-6 h-6 mx-auto text-forest" strokeWidth={1.5} />
                <p className="font-serif text-lg font-medium">{r.season}</p>
                <p className="text-xs text-muted-foreground px-3">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Evening atmosphere */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="font-serif text-2xl md:text-3xl font-light text-foreground">Wieczorem:</p>
          <div className="space-y-1 text-muted-foreground font-serif text-lg italic">
            <p>Ogień. Gwiazdy. Cisza. Ciepła woda.</p>
          </div>
          <p className="font-serif text-lg text-foreground/80 italic pt-4">
            To właśnie esencja odpoczynku w Krzemiennej Chacie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RelaxSection;
