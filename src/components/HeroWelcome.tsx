import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TreePine, Home, Volume2, Heart } from 'lucide-react';

const benefits = [
  {
    icon: TreePine,
    title: 'Tu się nigdzie nie spieszycie',
    text: 'Dom stoi w\u00a0Konnem, 10\u00a0minut od Supraśla, a\u00a0las zaczyna się za płotem. Dobre miejsce na weekend bez planu, bez budzika i\u00a0bez sprawdzania maili co pięć minut.',
  },
  {
    icon: Home,
    title: 'Kominek, kafle i\u00a0balia pod gwiazdami',
    text: 'Drewniane belki, kominek i\u00a0stara kuchnia kaflowa sprawiają, że wieczory same robią się dłuższe. Chcecie więcej? Dorzućcie gorącą balię z\u00a0hydromasażem w\u00a0ogrodzie: 250\u00a0zł za cały pobyt, dajcie znać przy rezerwacji, a\u00a0nagrzejemy ją na Wasz przyjazd.',
  },
  {
    icon: Volume2,
    title: 'Cały dom tylko dla Was',
    text: 'Dom wynajmujemy jednej ekipie naraz. Żadnych obcych przy śniadaniu, żadnego pukania w\u00a0ścianę, że za głośno. Bo nie ma komu.',
  },
  {
    icon: Heart,
    title: 'Spokojny pobyt wśród zieleni',
    text: 'Odpoczywajcie we własnym tempie, bez zegarka. Pies jedzie z\u00a0Wami gratis, a\u00a0ogrodzony ogród to dla niego osobny plac zabaw.',
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
          Dom z&nbsp;bali w&nbsp;lesie koło Supraśla. Cały. Wasz.
        </h2>

        <div className="space-y-4 text-muted-foreground font-sans text-base md:text-lg leading-relaxed text-center">
          <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed font-sans">
            Wynajmujecie cały dom z&nbsp;bali tylko dla siebie. Ten całoroczny drewniany dom
            urządzaliśmy własnymi rękami, żebyście mogli tu zwolnić, posłuchać szumu sosen i&nbsp;po
            prostu pobyć razem. Napiszcie, kiedy chcecie przyjechać, a&nbsp;odpiszemy z&nbsp;ceną
            i&nbsp;wolnymi terminami, zwykle w&nbsp;kilka godzin.
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
              <p className="flex-grow text-base leading-relaxed text-[#444] dark:text-foreground/80 !mb-0">
                {b.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}
        >
          <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-xl mx-auto">
            Traktujcie ten dom jak własny, tylko troszkę lepiej. Zostawcie go tak, jak sami
            chcielibyście go zastać, kiedy tu wrócicie.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mt-4 font-sans">
            Kanapa jest do leżenia, a&nbsp;kominek do gapienia się w&nbsp;ogień. Korzystajcie śmiało
            i&nbsp;bawcie się dobrze!
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
