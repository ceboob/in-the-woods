import { useScrollReveal } from '@/hooks/useScrollAnimation';
import gardenTubImg from '@/assets/gallery-bania-dom-thumb.webp';
import { Snowflake, Leaf, Bike, Heart } from 'lucide-react';

const bullets = [
  { icon: Snowflake, text: 'Idealne zimą — gorąca balia w śnieżnym lesie' },
  { icon: Leaf, text: 'Idealne jesienią — ciepło wśród kolorowych liści' },
  { icon: Bike, text: 'Idealne po rowerach i kajakach' },
  { icon: Heart, text: 'Romantyczny weekend z gorącą balią pod gwiazdami' },
];

const JacuzziSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="jacuzzi" className="relative">
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={gardenTubImg}
          alt="Balia ogrodowa z funkcją jacuzzi przy domu In The Woods w Puszczy Knyszyńskiej"
          className="w-full h-full object-cover"
          loading="lazy"
          width="1920"
          height="1440"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-white/80 font-sans mb-4">
              BALIA OGRODOWA Z FUNKCJĄ JACUZZI
            </p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-white">
              Balia ogrodowa z funkcją jacuzzi pod gwiazdami
            </h2>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className={`section-padding bg-background reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="section-subtitle mx-auto">
              Naszą dumą jest balia ogrodowa z funkcją jacuzzi. Każdego wieczora ogród staje się miejscem odpoczynku na świeżym powietrzu — latem pod rozgwieżdżonym niebem Puszczy Knyszyńskiej, zimą w scenerii białego puchu i rześkiego powietrza.
            </p>
            <div className="space-y-1 text-base text-foreground/80 text-smallcaps">
              <p>Ciepła woda. Chłodne powietrze. Gwiazdy nad Puszczą Knyszyńską.</p>
            </div>
            <p className="text-muted-foreground text-sm">
              To moment, kiedy naprawdę się resetujesz. Balia ogrodowa z funkcją jacuzzi w leśnym ogrodzie —
              chwila odpoczynku bez pośpiechu.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {bullets.map((b, i) => (
              <div
                key={i}
                className="card-premium p-4 flex flex-col items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-xs text-muted-foreground tracking-wide">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JacuzziSection;
