import { useScrollReveal } from '@/hooks/useScrollAnimation';
import { Heart, Users, Dog, Laptop, Snail } from 'lucide-react';

const audiences = [
  {
    icon: Heart,
    title: 'Pary',
    desc: 'Kameralna atmosfera, rozpalony kominek, gorąca balia pod gwiazdami i poranna kawa na tarasie. Idealne miejsce na zaręczyny, rocznicę lub romantyczny weekend we dwoje na Podlasiu.',
  },
  {
    icon: Users,
    title: 'Rodziny z dziećmi',
    desc: 'Bezpieczny, ogrodzony teren z placem zabaw, altaną i miejscem na ognisko. Dzieci bawią się blisko natury, czworonogi biegają bez smyczy, a dorośli odpoczywają na tarasie. Przestronny dom do wynajęcia w okolicach Supraśla dla całej rodziny.',
  },
  {
    icon: Users,
    title: 'Przyjaciele',
    desc: 'Dom z bali na wyłączność — bez obcych gości i bez skrępowania. Wieczorne grillowanie w altanie, odpoczynek w balii ogrodowej z funkcją jacuzzi i rozmowy przy ognisku do białego rana. Świetna baza na spływy kajakowe rzeką Supraśl i wycieczki po okolicach Białegostoku.',
  },
  {
    icon: Dog,
    title: 'Z psem',
    desc: 'Twój pupil jest u nas pełnoprawnym gościem bez żadnych dopłat. Szczelnie ogrodzona działka i nieskończone kilometry leśnych ścieżek tuż za furtką — prawdziwy raj dla psów i ich właścicieli.',
  },
  {
    icon: Laptop,
    title: 'Workation',
    desc: 'Szybki i stabilny internet Starlink, wygodne biurko z widokiem na sosnowy las i absolutny spokój sprzyjający skupieniu. Efektywna praca zdalna, po której od razu ruszasz na leśne szlaki.',
  },
  {
    icon: Snail,
    title: 'Slow travel',
    desc: 'Slow travel Polska w najczystszej formie. Oderwanie od cywilizacji, spokojny wypoczynek w naturze i chill w lesie — bez pośpiechu, bez zasięgu, bez planu.',
  },
];

const ForWhoSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Dla kogo
          </p>
          <h2 className="section-title">Dla kogo jest dom w lesie? Twój pobyt, Twoje zasady</h2>
          <p className="section-subtitle mx-auto">
            Leśny domek do wynajęcia na wyłączność — nie dzielisz domu z innymi gośćmi. To Twoja
            prywatna przestrzeń w lesie, gdzie sam decydujesz o rytmie dnia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
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

export default ForWhoSection;
