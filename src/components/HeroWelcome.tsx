import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroWelcome = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" aria-label="O naszym domu">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-4">
          Od gospodarza
        </p>
        <h2 className="font-script text-3xl md:text-4xl text-foreground mb-6">
          Witajcie w In&nbsp;The&nbsp;Woods
        </h2>
        <div className="space-y-4 text-muted-foreground font-sans text-base md:text-lg leading-relaxed">
          <p className="font-script text-2xl md:text-3xl text-foreground/90 leading-snug">
            Oddajemy w Wasze ręce nasz dom — miejsce, w&nbsp;które włożyliśmy mnóstwo serca, potu,
            pracy i&nbsp;litry kawy.
          </p>
          <p>
            Chcemy, żebyście czuli się tu swobodnie, ciepło i&nbsp;komfortowo. Mamy tylko jedną
            prośbę: traktujcie ten dom jak swój własny (a&nbsp;nawet odrobinę lepiej)
            i&nbsp;zostawcie go po sobie w&nbsp;takim stanie, w&nbsp;jakim go zastaliście.
          </p>
          <p>
            „In The Woods” to żywy organizm. Jesteśmy w&nbsp;ciągłym procesie metamorfoz, adaptacji
            i&nbsp;remontów, dlatego dom ma swój unikalny,
            <strong> rustykalny charakter</strong>. Znajdziecie tu wszystko, czego potrzeba do
            wygodnego pobytu: czystą pościel i&nbsp;ręczniki, książki, zabawki dla dzieci, dobrze
            wyposażoną kuchnię oraz spokojną przestrzeń do wypoczynku blisko natury.
          </p>
          <p className="font-script text-2xl md:text-3xl text-foreground/80 leading-snug">
            Pamiętajcie: dom jest dla ludzi, a&nbsp;nie ludzie dla domu. Bawcie się dobrze!
          </p>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">— Maciej, gospodarz</p>
      </div>
    </section>
  );
};

export default HeroWelcome;
