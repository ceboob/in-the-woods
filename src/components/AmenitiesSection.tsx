import { useScrollReveal } from '@/hooks/useScrollAnimation';
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
    title: 'Ogród i przestrzeń na zewnątrz',
    desc: 'Informacje o wyposażeniu ogrodu, ognisku i zasadach korzystania z terenu potwierdź przed pobytem.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi',
    desc: 'Wi-Fi jest dostępne. Jeśli potrzebujesz określonej jakości połączenia do pracy, potwierdź szczegóły przed pobytem.',
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
    title: 'Pobyt ze zwierzęciem',
    desc: 'Możliwość pobytu z psem, ewentualne opłaty i informację o ogrodzeniu potwierdź z gospodarzem przed wysłaniem zapytania.',
  },
  {
    icon: Baby,
    title: 'Pobyt z dziećmi',
    desc: 'Przed przyjazdem sprawdź dostępne wyposażenie i oceń, czy układ domu odpowiada potrzebom Twojej rodziny.',
  },
  {
    icon: FlameKindling,
    title: 'Kominek ogrodowy i ognisko',
    desc: 'Wieczorne ognisko w altanie lub kominek ogrodowy pod gwiazdami. Grill, kiełbaski i rozmowy, które trwają do rana.',
  },
];

const AmenitiesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="dom" className="section-padding bg-secondary">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Dom i udogodnienia
          </p>
          <h2 className="section-title">
            Domek z jacuzzi i kominkiem w sercu lasu
          </h2>
          <p className="section-subtitle mx-auto">
            Dom na wyłączność dla maksymalnie 8 osób. Szczegóły wyposażenia i zasady korzystania z
            udogodnień sprawdź przed pobytem.
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
