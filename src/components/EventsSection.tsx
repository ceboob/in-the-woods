import { useScrollReveal } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { PartyPopper, Heart, Users, Briefcase } from 'lucide-react';

const events = [
  {
    icon: Heart,
    title: 'Wieczory panieńskie',
    desc: 'Prywatna balia pod gwiazdami, kominek i las na wyłączność. Niezapomniany wieczór w kameralnym gronie.',
  },
  {
    icon: PartyPopper,
    title: 'Wieczory kawalerskie',
    desc: 'Ognisko, grill, balia ogrodowa z funkcją jacuzzi i absolutna wolność. Impreza w sercu Puszczy Knyszyńskiej.',
  },
  {
    icon: Users,
    title: 'Urodziny i rocznice',
    desc: 'Kameralne świętowanie w otoczeniu natury. Dom na wyłączność dla do 8 osób.',
  },
  {
    icon: Briefcase,
    title: 'Integracje firmowe',
    desc: 'Team building w lesie — kominek, balia i ognisko zamiast sali konferencyjnej.',
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
            Prywatny dom w lesie z jacuzzi to idealne miejsce na wyjątkowe okazje. Cisza Puszczy
            Knyszyńskiej, premium atmosfera i pełna prywatność.
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
              <p className="flex-grow text-base leading-relaxed text-[#444]">{event.desc}</p>
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
