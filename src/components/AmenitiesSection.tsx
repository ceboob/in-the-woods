import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Flame,
  UtensilsCrossed,
  Bed,
  Bath,
  Wifi,
  TreePine,
  Dog,
  Monitor,
  Wind,
  Baby,
} from 'lucide-react';

const amenities = [
  {
    icon: Flame,
    title: 'Salon z kominkiem',
    desc: 'Przestronny salon z prawdziwym kominkiem — serce domu',
  },
  {
    icon: UtensilsCrossed,
    title: 'Kuchnia i jadalnia',
    desc: 'W pełni wyposażona kuchnia z jadalnią dla wspólnych posiłków',
  },
  {
    icon: Bed,
    title: 'Komfortowe sypialnie',
    desc: 'Dwie sypialnie na piętrze z dużymi łóżkami i widokiem',
  },
  {
    icon: Bath,
    title: 'Łazienka i toaleta',
    desc: 'Łazienka oraz dodatkowa toaleta dla wygody gości',
  },
  {
    icon: TreePine,
    title: 'Taras i ogród',
    desc: 'Ogrodzony teren z tarasem, altaną i widokiem na zieleń',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi i biurko',
    desc: 'Szybki internet i miejsce do pracy — idealne na workation',
  },
  { icon: Wind, title: 'Klimatyzacja', desc: 'Komfort termiczny niezależnie od pory roku' },
  {
    icon: Monitor,
    title: 'Telewizory',
    desc: 'Smart TV w pokojach do wieczornych seansów filmowych',
  },
  {
    icon: Dog,
    title: 'Zwierzęta mile widziane',
    desc: 'Twój pies też zasługuje na las i świeże powietrze',
  },
  { icon: Baby, title: 'Plac zabaw', desc: 'Bezpieczna przestrzeń zabawy dla najmłodszych gości' },
];

const AmenitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="dom" className="section-padding bg-secondary">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Dom i udogodnienia
          </p>
          <h2 className="section-title">
            Wszystko, czego potrzebujesz.
            <br />
            Nic, czego nie chcesz.
          </h2>
          <p className="section-subtitle mx-auto">
            Komfortowo dla par, rodzin i kameralnych grup. Dom na wyłączność z pełnym wyposażeniem i
            prywatnym ogrodem.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {amenities.map((a, i) => (
            <div key={i} className="card-premium text-center group">
              <a.icon
                className="w-7 h-7 mx-auto mb-4 text-teal transition-colors duration-300 group-hover:text-teal/70"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-lg font-medium mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
