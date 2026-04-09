import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import forestPath from '@/assets/forest-panorama-real.webp';
import drogaImg from '@/assets/droga-lesna-konne.webp';
import { TreePine, Waves, Bike, Fish, Eye, Compass } from 'lucide-react';

const activities = [
  { icon: TreePine, label: 'Spacery i grzybobranie' },
  { icon: Bike, label: 'Trasy rowerowe' },
  { icon: Waves, label: 'Spływy kajakowe' },
  { icon: Fish, label: 'Wędkarstwo' },
  { icon: Compass, label: 'Jazda konna' },
  { icon: Eye, label: 'Obserwacje nieba' },
];

const NatureSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative">
      <div className="relative h-[50vh] min-h-[350px]">
        <img
          src={forestPath}
          alt="Leśna droga w Puszczy Knyszyńskiej blisko Supraśla — noclegi In The Woods"
          className="w-full h-full object-cover"
          loading="lazy"
          width="1920"
          height="1281"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-white/80 font-sans mb-4">
              Blisko natury
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white">
              Puszcza Knyszyńska
              <br />
              za progiem
            </h2>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className={`section-padding bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <p className="section-subtitle">
              In The Woods leży przy rezerwacie przyrody Krzemienne Góry, w otoczeniu jednego z
              najcenniejszych kompleksów leśnych w Polsce. Rezerwat chroni ponad 100-letnie
              drzewostany sosnowe i mieszane, a tuż obok przebiega Szlak Bioróżnorodności Puszczy
              Knyszyńskiej.
            </p>
            <p className="section-subtitle">
              Rzeka Supraśl płynie nieopodal — latem idealna na spływy kajakowe, a urokliwy Supraśl
              z prawosławnym Monasterem, Galerią Leśną Powstania Styczniowego i klimatycznymi
              kawiarniami jest na wyciągnięcie ręki. Do wsi Konne — naszej leśnej osady — prowadzi
              droga gruntowa przez las, co gwarantuje ciszę i prywatność.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {activities.map((a, i) => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <a.icon className="w-5 h-5 text-teal flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-foreground">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src={drogaImg}
              alt="Drogowskaz do wsi Konne — leśna droga prowadząca do In The Woods Supraśl"
              className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width="800"
              height="450"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NatureSection;
