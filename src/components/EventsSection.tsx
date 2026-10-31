import { useScrollReveal } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { PartyPopper, Heart, Users, Briefcase } from 'lucide-react';

const events = [
  {
    icon: Heart,
    title: 'Wieczory panieńskie',
    desc: 'Balia pod gwiazdami, prosecco, kominek i las tylko dla Was. Co się dzieje w puszczy, zostaje w puszczy.',
  },
  {
    icon: PartyPopper,
    title: 'Wieczory kawalerskie',
    desc: 'Ognisko, grill, balia i zero sąsiadów do uciszania. Najbliżsi sąsiedzi to dziki, a one nie składają skarg.',
  },
  {
    icon: Users,
    title: 'Urodziny i rocznice',
    desc: 'Czterdziestka, rocznica albo „po prostu, bo możemy”. Cały dom dla maksymalnie 8 osób i tort przy kominku.',
  },
  {
    icon: Briefcase,
    title: 'Integracje firmowe',
    desc: 'Integracja w lesie: kominek, balia i ognisko zamiast sali konferencyjnej i kolejnego flipchartu.',
  },
];

const EventsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="text-center mb-12 space-y-4">
          <h2 className="section-title">Organizacja imprez i wydarzeń</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Panieński, kawalerski, urodziny albo integracja bez rzutnika. Jeden dom, jedna ekipa
            i zero kelnerów nad głową.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {events.map((event, i) => (
            <div
              key={i}
              className="flex h-full flex-col items-center text-center gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
                <event.icon className="w-7 h-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{event.title}</h3>
              <p className="flex-grow text-base leading-relaxed text-[#444] dark:text-foreground/80">{event.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/wieczor-panienski-suprasl"
            className="btn-outline inline-flex items-center gap-2"
          >
            Dowiedz się więcej o imprezach
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
