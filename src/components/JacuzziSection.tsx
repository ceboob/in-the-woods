import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import nightSkyImg from '@/assets/night-sky-stars.webp';
import { Snowflake, Leaf, Bike, Heart } from 'lucide-react';

const bullets = [
{ icon: Snowflake, text: 'Idealne zimą' },
{ icon: Leaf, text: 'Idealne jesienią' },
{ icon: Bike, text: 'Idealne po rowerach' },
{ icon: Heart, text: 'Idealne na romantyczny weekend' }];


const JacuzziSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="jacuzzi" className="relative">
      <div className="relative h-[50vh] min-h-[400px]">
        <img src={nightSkyImg} alt="Nocne niebo z gwiazdami nad Puszczą Knyszyńską — In The Woods Supraśl" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-graphite/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-cream/80 font-sans mb-4">WYJĄTKOWE CHWILE</p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-cream">Prywatna ruska bania pod gwiazdami</h2>
          </div>
        </div>
      </div>

      <div ref={ref} className={`section-padding bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="section-subtitle mx-auto">Nową atrakcją w Naszej chacie jest prywatna ruska bania, która każdego wieczora zamienia się w Twoja prywatną strefę relaksu i SPA.


            </p>
            <div className="space-y-1 font-serif text-lg md:text-xl italic text-foreground/80">
              <p>Ciepła woda. Chłodne powietrze. Gwiazdy.</p>
            </div>
            <p className="text-muted-foreground text-sm">
              To moment, kiedy naprawdę się resetujesz.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {bullets.map((b, i) =>
            <div key={i} className="flex flex-col items-center gap-2 py-4 border border-border bg-card">
                <b.icon className="w-5 h-5 text-forest" strokeWidth={1.5} />
                <span className="text-xs text-muted-foreground tracking-wide">{b.text}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default JacuzziSection;