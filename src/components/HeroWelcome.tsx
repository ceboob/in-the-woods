import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TreePine, Home, Volume2, Heart } from 'lucide-react';

const benefits = [
  {
    icon: TreePine,
    title: 'Zanurz się w naturze',
    text: 'Puszcza Knyszyńska tuż za progiem — szepty puszczy, śpiew ptaków i\u00a0poranne mgły. Supraśl z\u00a0jego atrakcjami zaledwie 10\u00a0minut drogi. To domek w\u00a0lesie na Podlasiu, jakiego szukasz.',
  },
  {
    icon: Home,
    title: 'Dom z bali — komfort w sercu lasu',
    text: 'Drewniane belki, klimatyczny kominek, płyta kaflowa i\u00a0eleganckie wnętrza. Ogrodzony teren z\u00a0altaną i\u00a0miejscem na ognisko. Dom z\u00a0bali na wyłączność — Twoja prywatna przestrzeń.',
  },
  {
    icon: Volume2,
    title: 'Dom na wyłączność — tylko dla Was',
    text: 'Cały dom i\u00a0ogród na wyłączność. Żadnych obcych gości — to Wasze miejsce na oderwanie od cywilizacji, gotowanie i\u00a0wspólne chwile w\u00a0absolutnej prywatności.',
  },
  {
    icon: Heart,
    title: 'Cisza, która leczy',
    text: 'Domek na odludziu — bez hałaśliwych sąsiadów, tylko las i\u00a0świeże powietrze. Poczuj, jak oddech sam zwalnia. Psy za darmo — Twój czworonóg pokocha to miejsce.',
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
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-4 text-center">
          Od gospodarza
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl text-foreground mb-6 text-center font-accent">
          Leśny domek do wynajęcia — dom z bali na wyłączność
        </h2>

        <div className="space-y-4 text-muted-foreground font-sans text-base md:text-lg leading-relaxed text-center">
          <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed font-accent">
            Oddajemy w&nbsp;Wasze ręce nasz dom — miejsce, w&nbsp;które włożyliśmy mnóstwo serca,
            potu, pracy i&nbsp;litry kawy. Zanurz się w&nbsp;naturze i&nbsp;poczuj, jak czas się zatrzymuje.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group flex gap-4 p-5 bg-secondary/60 rounded-xl transition-all duration-500 hover:bg-secondary hover:shadow-md hover:-translate-y-0.5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : '0ms' }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground !mb-1">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed !mb-0">{b.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}
        >
          <p className="text-muted-foreground font-sans text-base leading-relaxed max-w-xl mx-auto">
            Traktujcie ten dom jak swój — z&nbsp;szacunkiem i&nbsp;uśmiechem. Zostawcie go tak,
            jakbyście chcieli go zastać za rok, kiedy <em>wrócicie</em>.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mt-4 font-accent">
            Pamiętajcie: dom jest dla ludzi, a&nbsp;nie ludzie dla domu. Bawcie się dobrze!
          </p>
          <p className="mt-4 text-sm text-muted-foreground">— Maciej, gospodarz</p>
        </div>
      </div>
    </section>
  );
};

export default HeroWelcome;
