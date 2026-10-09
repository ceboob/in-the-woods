import { useScrollReveal } from '@/hooks/useScrollAnimation';
import ImageReveal from '@/components/ImageReveal';
import forestPath from '@/assets/forest-panorama-real.webp';
import drogaImg from '@/assets/droga-lesna-konne.webp';
import { TreePine, Waves, Bike, Fish, Eye, Compass } from 'lucide-react';

const activities = [
  { icon: TreePine, label: 'Spacery po okolicy' },
  { icon: Bike, label: 'Trasy rowerowe' },
  { icon: Waves, label: 'Spływy kajakowe' },
  { icon: Fish, label: 'Wędkarstwo' },
  { icon: Compass, label: 'Jazda konna' },
  { icon: Eye, label: 'Obserwacje nieba' },
];

const NatureSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative">
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <ImageReveal>
          <img
            src={forestPath}
            alt="Leśna droga w Puszczy Knyszyńskiej blisko Supraśla — noclegi In The Woods"
            className="w-full h-full object-cover"
            loading="lazy"
            width="1920"
            height="1281"
          />
        </ImageReveal>
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-white/80 font-sans mb-4">
              Blisko natury
            </p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-white">
              Puszcza Knyszyńska
              <br />
              za progiem
            </h2>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className={`section-padding bg-background reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <p className="section-subtitle">
              In The Woods znajduje się w sąsiedztwie rezerwatu przyrody Krzemienne Góry, w
              otoczeniu Puszczy Knyszyńskiej. Wybierając się na spacer, sprawdź oznakowanie i
              obowiązujące zasady ochrony przyrody; poruszaj się wyłącznie po udostępnionych trasach.
            </p>
            <p className="section-subtitle">
              Rzeka Supraśl płynie nieopodal — możliwość spływu kajakowego zależy od warunków i
              oferty lokalnych organizatorów. Supraśl
              z prawosławnym Monasterem, Galerią Leśną Powstania Styczniowego i klimatycznymi
              kawiarniami jest na wyciągnięcie ręki. Do wsi Konne — naszej leśnej osady — prowadzi
              droga gruntowa przez las.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {activities.map((a, i) => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <a.icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-foreground">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <ImageReveal>
              <img
                src={drogaImg}
                alt="Drogowskaz do wsi Konne — leśna droga prowadząca do In The Woods Supraśl"
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="lazy"
                width="800"
                height="450"
              />
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NatureSection;
