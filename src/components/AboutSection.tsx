import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import salonImg from '@/assets/gallery-salon-panorama-thumb.webp';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="o-miejscu" className="section-padding bg-warm-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="space-y-6">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            O miejscu
          </p>
          <h2 className="section-title">
            Tam, gdzie las
            <br />
            opowiada historie
          </h2>
          <div className="space-y-4 section-subtitle">
            <p>
              In The Woods to drewniany dom z bala ukryty w sercu Puszczy Knyszyńskiej, tuż przy
              rezerwacie przyrody Krzemienne Góry. Miejsce, które zabierasz na wyłączność — z dala
              od zgiełku, blisko tego, co naprawdę ważne.
            </p>
            <p>
              Dom powstał z pasji do natury i drewna. Każdy element wnętrza — od rzeźbionej
              drewnianej szafki z serduszkami, przez ceglany kominek, po sossnowe belki sufitowe —
              opowiada historię Podlasia. To nie jest sztuczna stylizacja, lecz autentyczne miejsce
              z duszą.
            </p>
            <p>
              Poranki pachną tu żywicą i kawą parzoną w ciszy. Wieczory płoną w kominku, a między
              nimi — las, rzeka, niebo pełne gwiazd i czas, który wreszcie zwalnia. Ogrodzony teren
              zapewnia prywatność i bezpieczeństwo — zarówno dzieciom, jak i czworonogom.
            </p>
            <p>
              To nie jest kolejny nocleg. To rytuał odpoczynku w otoczeniu natury Podlasia, w
              miejscu, gdzie rano budzi Cię śpiew ptaków, a wieczorem — trzask drewna w kominku.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src={salonImg}
            alt="Salon z kominkiem w drewnianym domu In The Woods — noclegi Supraśl"
            className="w-full h-[400px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
            width="600"
            height="550"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
