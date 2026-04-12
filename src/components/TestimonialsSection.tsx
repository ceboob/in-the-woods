import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star } from 'lucide-react';

type Source = 'google' | 'booking' | 'airbnb' | 'doginclusive';

const GoogleLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const BookingLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 48" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="48" rx="4" fill="#003580"/>
    <text x="150" y="34" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="Arial,sans-serif">Booking.com</text>
  </svg>
);

const AirbnbLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.7 17.3c-.5.8-1.1 1.5-1.9 2-.8.5-1.6.7-2.5.7-.6 0-1.2-.1-1.7-.4-.5-.2-1-.6-1.6-1.1-.6.5-1.1.8-1.6 1.1-.5.3-1.1.4-1.7.4-.9 0-1.7-.2-2.5-.7-.8-.5-1.4-1.2-1.9-2-.5-.9-.7-1.8-.7-2.8 0-.7.1-1.4.4-2.1.3-.7.6-1.3 1.1-1.9.5-.6 1-1.2 1.5-1.7.5-.5 1.1-1.1 1.7-1.7l1.2-1.2c.3-.3.5-.5.7-.8.2-.2.3-.4.4-.5.1-.1.2-.2.2-.2l.1-.1.1.1.2.2c.1.1.2.3.4.5.2.3.4.5.7.8l1.2 1.2c.6.6 1.2 1.2 1.7 1.7.5.5 1 1.1 1.5 1.7.5.6.8 1.2 1.1 1.9.3.7.4 1.4.4 2.1 0 1-.2 1.9-.7 2.8z" fill="#FF5A5F"/>
  </svg>
);

const DogInclusiveLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4c-1 0-2 .5-2.8 1.3l-.6.7c-.3-.5-.8-1-1.6-1-.6 0-1.1.3-1.5.7L10 7.5l-1-1c-.5-.5-1.1-.8-1.8-.8C5.4 5.7 4 7.1 4 8.9c0 .9.4 1.7 1 2.3L12 18l7-6.8c.6-.6 1-1.4 1-2.3C20 7.1 19.1 5.3 18 4z" fill="#8B6914"/>
    <circle cx="7.5" cy="3" r="2" fill="#8B6914"/>
    <circle cx="16.5" cy="3" r="2" fill="#8B6914"/>
    <path d="M4 12c-1 1-2.5 3-2 5s2 3 4 3c1 0 2-.5 2.5-1" fill="none" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 12c1 1 2.5 3 2 5s-2 3-4 3c-1 0-2-.5-2.5-1" fill="none" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const sourceConfig: Record<Source, { label: string; logo: React.FC<{ className?: string }> }> = {
  google: { label: 'Google', logo: GoogleLogo },
  booking: { label: 'Booking', logo: BookingLogo },
  airbnb: { label: 'Airbnb', logo: AirbnbLogo },
  doginclusive: { label: 'DogInclusive', logo: DogInclusiveLogo },
};

const testimonials = [
  {
    text: 'Miejsce, do którego chce się wracać. Cisza, zapach drewna, kominek wieczorem i balia pod gwiazdami — to był najlepszy weekend od lat.',
    author: 'Marta i Tomek',
    context: 'Weekend we dwoje',
    date: '2025-11-15',
    stars: 5,
    source: 'google' as Source,
  },
  {
    text: 'Dzieci nie chciały wyjeżdżać. Ogród, plac zabaw, las za płotem i ognisko każdego wieczoru. Idealne miejsce na rodzinny odpoczynek.',
    author: 'Rodzina Kowalskich',
    context: 'Pobyt z dziećmi',
    date: '2025-08-22',
    stars: 5,
    source: 'booking' as Source,
  },
  {
    text: 'Pracowałem z laptopem przy oknie z widokiem na las, a po pracy szedłem na spacer do rezerwatu. Najlepsza forma workation.',
    author: 'Jakub',
    context: 'Workation, 5 dni',
    date: '2025-10-03',
    stars: 5,
    source: 'airbnb' as Source,
  },
  {
    text: 'Ruska bania pod gwiazdami to coś, co trzeba przeżyć. Do tego kominek, las i cisza — pełna regeneracja po tygodniu pracy.',
    author: 'Anna i Piotr',
    context: 'Romantyczny weekend',
    date: '2026-01-10',
    stars: 5,
    source: 'google' as Source,
  },
  {
    text: 'Dojazd drogą gruntową bywa wymagający po deszczu, ale to część uroku tego miejsca. Sam dom i ogród — absolutnie cudowne. Wrócimy zimą!',
    author: 'Karolina i Paweł',
    context: 'Majówka we dwoje',
    date: '2025-05-03',
    stars: 4,
    source: 'booking' as Source,
  },
  {
    text: 'Brak pełnego zasięgu telefonii komórkowej — dla nas na początku minus, ale po dwóch dniach doceniliśmy ciszę i detoks cyfrowy. Dom piękny, bania rewelacyjna.',
    author: 'Agnieszka',
    context: 'Urlop, 4 dni',
    date: '2025-09-12',
    stars: 4,
    source: 'doginclusive' as Source,
  },
  {
    text: 'Już trzeci raz u Macieja i za każdym razem jest lepiej. Dom pięknie utrzymany, ogród zadbany, a puszcza za płotem to skarb.',
    author: 'Michał',
    context: 'Stały gość',
    date: '2026-02-14',
    stars: 5,
    source: 'airbnb' as Source,
  },
  {
    text: 'Szukaliśmy ciszy i natury — znaleźliśmy raj. Poranki z kawą na tarasie, wieczory przy ognisku. In The Woods to definicja slow life.',
    author: 'Ewa i Marek',
    context: 'Urlop, 7 dni',
    date: '2025-07-18',
    stars: 5,
    source: 'google' as Source,
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
          {testimonials.map((t, i) => {
            const src = sourceConfig[t.source];
            const SourceIcon = src.icon;
            return (
              <div key={i} className="card-premium space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-3.5 h-3.5 ${j < t.stars ? 'fill-wood text-wood' : 'fill-none text-border'}`}
                      />
                    ))}
                  </div>
                  <div className={`flex items-center gap-1 ${src.color}`}>
                    <SourceIcon className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-medium tracking-wide uppercase">{src.label}</span>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed italic font-serif text-sm">
                  „{t.text}"
                </p>
                <div>
                  <p className="text-xs font-medium">{t.author}</p>
                  <p className="text-[11px] text-muted-foreground">{t.context}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
