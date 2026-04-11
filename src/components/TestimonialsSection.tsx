import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Miejsce, do którego chce się wracać. Cisza, zapach drewna, kominek wieczorem i balia pod gwiazdami — to był najlepszy weekend od lat.',
    author: 'Marta i Tomek',
    context: 'Weekend we dwoje',
    date: '2025-11-15',
    stars: 5,
  },
  {
    text: 'Dzieci nie chciały wyjeżdżać. Ogród, plac zabaw, las za płotem i ognisko każdego wieczoru. Idealne miejsce na rodzinny odpoczynek.',
    author: 'Rodzina Kowalskich',
    context: 'Pobyt z dziećmi',
    date: '2025-08-22',
    stars: 5,
  },
  {
    text: 'Pracowałem z laptopem przy oknie z widokiem na las, a po pracy szedłem na spacer do rezerwatu. Najlepsza forma workation.',
    author: 'Jakub',
    context: 'Workation, 5 dni',
    date: '2025-10-03',
    stars: 5,
  },
  {
    text: 'Ruska bania pod gwiazdami to coś, co trzeba przeżyć. Do tego kominek, las i cisza — pełna regeneracja po tygodniu pracy.',
    author: 'Anna i Piotr',
    context: 'Romantyczny weekend',
    date: '2026-01-10',
    stars: 5,
  },
  {
    text: 'Dojazd drogą gruntową bywa wymagający po deszczu, ale to część uroku tego miejsca. Sam dom i ogród — absolutnie cudowne. Wrócimy zimą!',
    author: 'Karolina i Paweł',
    context: 'Majówka we dwoje',
    date: '2025-05-03',
    stars: 4,
  },
  {
    text: 'Brak pełnego zasięgu telefonii komórkowej — dla nas na początku minus, ale po dwóch dniach doceniliśmy ciszę i detoks cyfrowy. Dom piękny, bania rewelacyjna.',
    author: 'Agnieszka',
    context: 'Urlop, 4 dni',
    date: '2025-09-12',
    stars: 4,
  },
  {
    text: 'Już trzeci raz u Macieja i za każdym razem jest lepiej. Dom pięknie utrzymany, ogród zadbany, a puszcza za płotem to skarb.',
    author: 'Michał',
    context: 'Stały gość',
    date: '2026-02-14',
    stars: 5,
  },
  {
    text: 'Szukaliśmy ciszy i natury — znaleźliśmy raj. Poranki z kawą na tarasie, wieczory przy ognisku. In The Woods to definicja slow life.',
    author: 'Ewa i Marek',
    context: 'Urlop, 7 dni',
    date: '2025-07-18',
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Opinie gości
          </p>
          <h2 className="section-title">Co mówią ci, którzy tu byli</h2>
          <p className="section-subtitle mx-auto">
            4,82★ na podstawie 110 opinii — oto kilka historii naszych gości.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="card-premium space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < t.stars ? 'fill-wood text-wood' : 'fill-none text-border'}`}
                  />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed italic font-serif text-lg">
                „{t.text}"
              </p>
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
