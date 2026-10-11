import { useScrollReveal } from '@/hooks/useScrollAnimation';
import { Heart, Users, Dog, Laptop, Snail } from 'lucide-react';

const audiences = [
  {
    icon: Heart,
    title: 'Pary',
    desc: 'Zaplanuj romantyczny weekend w Supraślu: rozpal kominek, odpocznij w gorącej balii pod gwiazdami i wypij poranną kawę na tarasie. To kameralne noclegi w Supraślu na rocznicę, zaręczyny lub po prostu wspólny czas.',
  },
  {
    icon: Users,
    title: 'Rodziny z dziećmi',
    desc: 'Dom w lesie na wynajem pomieści do 8 osób. Rodzinna przestrzeń, ogród i bliskość leśnych ścieżek ułatwiają wspólny wypoczynek. Zobacz wyposażenie i zaplanuj pobyt dopasowany do potrzeb Twojej rodziny.',
  },
  {
    icon: Users,
    title: 'Przyjaciele',
    desc: 'Dom na wyłączność na Podlasiu to swoboda wspólnego wyjazdu bez obcych gości. Grillujcie w altanie, odpoczywajcie w balii ogrodowej i spędzajcie wieczory przy ognisku. Supraśl i okoliczne atrakcje są w zasięgu krótkiej wycieczki.',
  },
  {
    icon: Dog,
    title: 'Z psem',
    desc: 'Przyjedźcie razem — pobyt psa jest bezpłatny. Leśne otoczenie zachęca do spacerów, a ogród daje przestrzeń do odpoczynku na świeżym powietrzu. Przed wyjazdem zapoznaj się z zasadami pobytu ze zwierzętami.',
  },
  {
    icon: Laptop,
    title: 'Praca i wypoczynek',
    desc: 'Zmień otoczenie i połącz spokojny pobyt w lesie z pracą zdalną. W domu jest Wi-Fi, a po zamknięciu laptopa możesz odpocząć na tarasie lub wybrać się na spacer po Puszczy Knyszyńskiej.',
  },
  {
    icon: Snail,
    title: 'Spokojny wypoczynek',
    desc: 'Dom w puszczy czy chata w lesie na wynajem? Wybierz prywatną przestrzeń, śpiew ptaków i leśne ścieżki tuż obok. Odpoczywaj we własnym rytmie — bez pośpiechu i miejskiego zgiełku.',
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
          <p className="text-xs tracking-wide text-muted-foreground font-sans">
            Dla kogo
          </p>
          <h2 className="section-title">Dla kogo jest dom w lesie? Twój pobyt, Twoje zasady</h2>
          <p className="section-subtitle mx-auto">
            Dom na wyłączność na Podlasiu, na skraju Puszczy Knyszyńskiej — bez dzielenia przestrzeni
            z innymi gośćmi. Wybierz nocleg w Supraślu, który łączy bliskość natury z wygodnym
            dojazdem do miasta, i wypoczywaj po swojemu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((a, i) => (
            <div key={i} className="card-premium h-full p-6 text-center group space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <a.icon className="w-6 h-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
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
