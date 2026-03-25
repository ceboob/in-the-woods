import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Miejsce, do którego chce się wracać. Cisza, zapach drewna, kominek wieczorem i balia pod gwiazdami — to był najlepszy weekend od lat.',
    author: 'Marta i Tomek',
    context: 'Weekend we dwoje',
    date: '2025-11-15',
  },
  {
    text: 'Dzieci nie chciały wyjeżdżać. Ogród, plac zabaw, las za płotem i ognisko każdego wieczoru. Idealne miejsce na rodzinny odpoczynek.',
    author: 'Rodzina Kowalskich',
    context: 'Pobyt z dziećmi',
    date: '2025-08-22',
  },
  {
    text: 'Pracowałem z laptopem przy oknie z widokiem na las, a po pracy szedłem na spacer do rezerwatu. Najlepsza forma workation.',
    author: 'Jakub',
    context: 'Workation, 5 dni',
    date: '2025-10-03',
  },
  {
    text: 'Ruska bania pod gwiazdami to coś, co trzeba przeżyć. Do tego kominek, las i cisza — pełna regeneracja po tygodniu pracy.',
    author: 'Anna i Piotr',
    context: 'Romantyczny weekend',
    date: '2026-01-10',
  },
  {
    text: 'Już trzeci raz u Macieja i za każdym razem jest lepiej. Dom pięknie utrzymany, ogród zadbany, a puszcza za płotem to skarb.',
    author: 'Michał',
    context: 'Stały gość',
    date: '2026-02-14',
  },
  {
    text: 'Szukaliśmy ciszy i natury — znaleźliśmy raj. Poranki z kawą na tarasie, wieczory przy ognisku. In The Woods to definicja slow life.',
    author: 'Ewa i Marek',
    context: 'Urlop, 7 dni',
    date: '2025-07-18',
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-warm-white">

      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Opinie gości</p>
          <h2 className="section-title">Co mówią ci, którzy tu byli</h2>
          <p className="section-subtitle mx-auto">Ponad 100 gości oceniło nas na 5★ — oto kilka ich historii.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((t, i) => (
            <div key={i} className="card-premium space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-wood text-wood" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed italic font-serif text-lg">„{t.text}"</p>
              <div>
                <p className="text-sm font-medium">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
