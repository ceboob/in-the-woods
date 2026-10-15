import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TreePine, Home, Volume2, Heart } from 'lucide-react';

const benefits = [
  {
    icon: TreePine,
    title: 'Slow w sercu natury',
    text: 'Dom stoi w miejscowości Konne, niedaleko Supraśla i Puszczy Knyszyńskiej, czyli w dobrym miejscu na leśne spacery i weekend bez planu. Przed podróżą sprawdźcie aktualną trasę i warunki dojazdu.',
  },
  {
    icon: Home,
    title: 'Kominek, kafle i balia pod gwiazdami',
    text: 'Drewniane belki, kominek i płyta kaflowa sprawiają, że wieczory same robią się dłuższe. A kiedy najdzie Was ochota na chill pod gwiazdami, możecie dorzucić ogrodową balię z jacuzzi (opcja za dopłatą, dostępność potwierdzimy przed pobytem). Szczegóły wyposażenia ogrodu i zasady korzystania z miejsca na ognisko ustalimy przed Waszym przyjazdem.',
  },
  {
    icon: Volume2,
    title: 'Cały dom tylko dla Was',
    text: 'Dom wynajmujemy jednej grupie naraz, więc macie tu pełną prywatność. Szczegóły pobytu i dostępne udogodnienia znajdziecie w opisie obiektu.',
  },
  {
    icon: Heart,
    title: 'Spokojny pobyt wśród zieleni',
    text: 'Odpoczywajcie we własnym tempie, bez zegarka. Pobyt z psem jest możliwy, a ewentualne opłaty i informacje o ogrodzeniu potwierdźcie z gospodarzem.',
  },
];

const HeroWelcome = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" aria-label="O naszym domu">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <p className="text-xs tracking-wide text-muted-foreground font-sans mb-4 text-center">
          Od gospodarza
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl text-foreground mb-6 text-center font-heading">
          Prywatny azyl w lesie koło Supraśla – dom z bali na wyłączność
        </h2>

        <div className="space-y-4 text-muted-foreground font-sans text-base md:text-lg leading-relaxed text-center">
          <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed font-sans">
            Wynajmujecie cały dom z bali tylko dla siebie i nikt nie będzie Wam tu przeszkadzał. Nasz całoroczny drewniany dom w lesie koło Supraśla stworzyliśmy z sercem i pasją, żebyście mogli zwolnić tempo, posłuchać szumu drzew i po prostu pobyć razem. Wyślijcie zapytanie o wolny termin, a odpowiemy z informacją o dostępności i cenie.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`flex h-full flex-col items-center text-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : '0ms' }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
                <b.icon className="w-7 h-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground !mb-0">{b.title}</h3>
              <p className="flex-grow text-base leading-relaxed text-[#444] dark:text-foreground/80 !mb-0">{b.text}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}
        >
          <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-xl mx-auto">
            Traktujcie ten dom jak własny – z szacunkiem i uśmiechem. Zostawcie go tak, jakbyście
            chcieli go zastać za rok, kiedy tu wrócicie.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mt-4 font-sans">
            Pamiętajcie: dom jest dla ludzi, a&nbsp;nie ludzie dla domu. Bawcie się dobrze!
          </p>
          <p className="mt-4 text-sm text-muted-foreground">— Maciej, gospodarz</p>
          <a
            href="#rezerwacja"
            className="btn-primary inline-flex items-center justify-center mt-4"
          >
            Sprawdź wolne terminy
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroWelcome;
