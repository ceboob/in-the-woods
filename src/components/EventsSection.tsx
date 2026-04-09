import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
    desc: 'Ognisko, grill, ruska bania i absolutna wolność. Impreza w sercu Puszczy Knyszyńskiej.',
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
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-12 space-y-4">
          <h2 className="section-title">Organizacja imprez i wydarzeń</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Prywatny dom w lesie z jacuzzi to idealne miejsce na wyjątkowe okazje. Cisza Puszczy
            Knyszyńskiej, premium atmosfera i pełna prywatność.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {events.map((event, i) => (
            <div
              key={i}
              className="card-premium p-6 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <event.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{event.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
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
