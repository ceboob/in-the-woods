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
    desc: 'Przed przyjazdem sprawdź układ domu, dostępne wyposażenie i zasady pobytu, aby ocenić, czy odpowiadają potrzebom Twojej rodziny.',
  },
  {
    icon: Users,
    title: 'Przyjaciele',
    desc: 'Dom z bali na wyłączność — bez obcych gości i bez skrępowania. Wieczorne grillowanie w altanie, odpoczynek w balii ogrodowej z funkcją jacuzzi i rozmowy przy ognisku do białego rana. Świetna baza na spływy kajakowe rzeką Supraśl i wycieczki po okolicach Białegostoku.',
  },
  {
    icon: Dog,
    title: 'Z psem',
    desc: 'Możliwość pobytu z psem, ewentualne opłaty i informację o ogrodzeniu potwierdź z gospodarzem przed wysłaniem zapytania. Na spacerze stosuj lokalne zasady dostępu.',
  },
  {
    icon: Laptop,
    title: 'Praca i wypoczynek',
    desc: 'W domu dostępne jest Wi-Fi. Jeśli potrzebujesz określonej jakości połączenia lub miejsca do pracy, potwierdź szczegóły przed pobytem.',
  },
  {
    icon: Snail,
    title: 'Spokojny wypoczynek',
    desc: 'Spokojny pobyt w naturze. Możesz odpoczywać bez pośpiechu i samodzielnie zdecydować, ile czasu spędzisz bez ekranów. Wi-Fi jest dostępne.',
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
