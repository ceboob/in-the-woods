import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import interiorImg from '@/assets/interior-living.webp';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="o-miejscu" className="section-padding bg-warm-white">
      <div ref={ref} className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="space-y-6">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">O miejscu</p>
          <h2 className="section-title">Tam, gdzie las<br />opowiada historie</h2>
          <div className="space-y-4 section-subtitle">
            <p>
              In The Woods to drewniany dom z bala ukryty w sercu Puszczy Knyszyńskiej, 
              tuż przy rezerwacie przyrody Krzemienne Góry. Miejsce, które zabierasz na wyłączność — 
              z dala od zgiełku, blisko tego, co naprawdę ważne.
            </p>
            <p>
              Poranki pachną tu żywicą i kawą parzoną w ciszy. Wieczory płoną w kominku. 
              A między nimi — las, rzeka, niebo pełne gwiazd i czas, który wreszcie zwalnia.
            </p>
            <p>
              To nie jest kolejny nocleg. To rytuał odpoczynku w otoczeniu natury Podlasia.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img src={interiorImg} alt="Krzemienna Chata — widok z zewnątrz na drewnianą chatę z bala" className="w-full h-[400px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
