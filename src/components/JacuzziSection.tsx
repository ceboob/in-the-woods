import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import baniaImg from '@/assets/gallery-bania-dom-thumb.webp';
import { Snowflake, Leaf, Bike, Heart } from 'lucide-react';

const bullets = [
  { icon: Snowflake, text: 'Idealne zimą' },
  { icon: Leaf, text: 'Idealne jesienią' },
  { icon: Bike, text: 'Idealne po rowerach' },
  { icon: Heart, text: 'Idealne na romantyczny weekend' },
];

const JacuzziSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="jacuzzi" className="relative">
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={baniaImg}
          alt="Ruska bania z balią na tle drewnianej chaty In The Woods — noclegi Supraśl z prywatnym SPA"
          className="w-full h-full object-cover"
          loading="lazy"
          width="1920"
          height="1440"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-foreground/80 font-sans mb-4">
              WYJĄTKOWE CHWILE
            </p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground">
              Prywatna ruska bania pod gwiazdami
            </h2>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className={`section-padding bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="section-subtitle mx-auto">
              Nową atrakcją w Naszej chacie jest prywatna ruska bania — drewniana beczka z gorącą
              wodą i podgrzewaniem na drewno, ustawiona w ogrodzie z widokiem na las. Każdego
              wieczora zamienia się w Twoją prywatną strefę relaksu i SPA. Bania mieści wygodnie 4–6
              osób i działa przez cały rok — latem pod wieczornym niebem, zimą wśród śniegu i
              mroźnego powietrza.
            </p>
            <div className="space-y-1 font-serif text-lg md:text-xl italic text-foreground/80">
              <p>Ciepła woda. Chłodne powietrze. Gwiazdy.</p>
            </div>
            <p className="text-muted-foreground text-sm">
              To moment, kiedy naprawdę się resetujesz. Woda podgrzewana jest naturalnie drewnem —
              bez chemii, bez pośpiechu. Przygotowanie bani trwa ok. 2 godzin, a przyjemność — całą
              noc.
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
