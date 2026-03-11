import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Miejsce, do którego chce się wracać. Cisza, zapach drewna, kominek wieczorem i balia pod gwiazdami — to był najlepszy weekend od lat.',
    author: 'Marta i Tomek',
    context: 'Weekend we dwoje',
  },
  {
    text: 'Dzieci nie chciały wyjeżdżać. Ogród, plac zabaw, las za płotem i ognisko każdego wieczoru. Idealne miejsce na rodzinny odpoczynek.',
    author: 'Rodzina Kowalskich',
    context: 'Pobyt z dziećmi',
  },
  {
    text: 'Pracowałem z laptopem przy oknie z widokiem na las, a po pracy szedłem na spacer do rezerwatu. Najlepsza forma workation.',
    author: 'Jakub',
    context: 'Workation, 5 dni',
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
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
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
