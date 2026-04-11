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
  CookingPot,
  FlameKindling,
} from 'lucide-react';

const amenities = [
  {
    icon: Flame,
    title: 'Klimatyczny kominek',
    desc: 'Prawdziwy ogień trzaska wieczorem w salonie. Rozpal kominek, nalej wino i poczuj ciepło drewna — domek z kominkiem w lesie, o jakim marzysz.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Kuchnia z płytą kaflową',
    desc: 'W pełni wyposażona kuchnia z elegancką płytą kaflową, ekspresem do kawy i jadalnią. Gotuj wspólne posiłki z widokiem na ogród.',
  },
  {
    icon: Bed,
    title: 'Komfortowe sypialnie',
    desc: 'Dwie sypialnie na piętrze z dużymi łóżkami, drewnianymi belkami i widokiem na las. Budzisz się do śpiewu ptaków, nie budzika.',
  },
  {
    icon: Bath,
    title: 'Łazienka i toaleta',
    desc: 'Nowoczesna łazienka oraz dodatkowa toaleta na parterze. Ciepła woda, wygoda i prywatność dla każdego gościa.',
  },
  {
    icon: TreePine,
    title: 'Ogrodzony teren z altaną',
    desc: 'Prywatny ogród z tarasem, altaną i miejscem na ognisko. Ogrodzony teren daje bezpieczeństwo dzieciom i psom — Twoja przestrzeń w lesie.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi i biurko do pracy',
    desc: 'Szybki internet i wygodne miejsce do pracy zdalnej przy oknie z widokiem na las. Praca zdalna w lesie — wynajem domku idealnego na workation.',
  },
  {
    icon: Wind,
    title: 'Klimatyzacja',
    desc: 'Komfort termiczny niezależnie od pory roku. Latem chłód, zimą ciepło — dom gotowy na każdą pogodę.',
  },
  {
    icon: Monitor,
    title: 'Smart TV w pokojach',
    desc: 'Telewizory w sypialniach i salonie do wieczornych seansów filmowych. Albo wyłącz ekrany i posłuchaj ciszy lasu.',
  },
  {
    icon: Dog,
    title: 'Psy za darmo',
    desc: 'Twój pies jest pełnoprawnym gościem — bez dopłat. Ogrodzony teren w lesie i kilometry leśnych ścieżek to raj dla czworonogów.',
  },
  {
    icon: Baby,
    title: 'Plac zabaw dla dzieci',
    desc: 'Bezpieczna przestrzeń zabawy na ogrodzonym terenie. Dzieci biegają po ogrodzie, rodzice odpoczywają na tarasie.',
  },
  {
    icon: FlameKindling,
    title: 'Kominek ogrodowy i ognisko',
    desc: 'Wieczorne ognisko w altanie lub kominek ogrodowy pod gwiazdami. Grill, kiełbaski i rozmowy, które trwają do rana.',
  },
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
            Domek z sauną, jacuzzi i kominkiem w sercu lasu
          </h2>
          <p className="section-subtitle mx-auto">
            Komfortowy dom z bali na wyłączność — do 8 osób. Ogrodzony teren, psy za darmo,
            pełne wyposażenie i prywatny ogród w Puszczy Knyszyńskiej.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {amenities.map((a, i) => (
            <div key={i} className="card-premium p-6 text-center group space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <a.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
