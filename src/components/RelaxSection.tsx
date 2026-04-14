import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import baniaImg from '@/assets/gallery-bania-front-thumb.webp';
import tarasImg from '@/assets/gallery-taras-relaks-thumb.webp';
import { Snowflake, Sun, Leaf, Flower2 } from 'lucide-react';

const rituals = [
  {
    icon: Snowflake,
    season: 'Zimą',
    text: 'po spacerach w śnieżnej puszczy — zanurz się w gorącej bani i posłuchaj szeptów lasu',
  },
  {
    icon: Sun,
    season: 'Latem',
    text: 'po kajakach i rowerach — ochłódź się w wieczornym powietrzu, patrząc na gwiazdy',
  },
  {
    icon: Leaf,
    season: 'Jesienią',
    text: 'po grzybobraniu w Puszczy — zanurz się w ciepłej wodzie wśród kolorowych liści',
  },
  {
    icon: Flower2,
    season: 'Wiosną',
    text: 'po odkrywaniu budzącej się natury — wypij herbatę na tarasie przy śpiewie ptaków',
  },
];

const RelaxSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="relaks" className="section-padding bg-secondary">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Strefa relaksu
          </p>
          <h2 className="section-title">Odpoczynek w lesie na weekend — slow travel w Puszczy Knyszyńskiej</h2>
          <p className="section-subtitle mx-auto">
            Wyobraź sobie wieczór, w którym jedynym dźwiękiem jest trzask drewna. Spokojny wypoczynek w naturze,
            gdzie szepty puszczy otulają Cię ciepłem, a gorąca ruska bania czeka w ogrodzie — chill w lesie,
            z dala od cywilizacji. Zapalamy świece, podgrzewamy wodę drewnem i oddajemy się rytuałowi odpoczynku,
            który goście wspominają jeszcze długo po powrocie do miasta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16">
          <div className="overflow-hidden relative group">
            <img
              src={baniaImg}
              alt="Prywatna ruska bania — domek z balią w lesie, SPA na odludziu w Puszczy Knyszyńskiej"
              className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width="600"
              height="450"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-graphite/70 to-transparent p-6">
              <p className="text-base text-white font-normal">Ostoja spokoju — prywatna ruska bania</p>
            </div>
          </div>
          <div className="overflow-hidden relative group">
            <img
              src={tarasImg}
              alt="Odpoczynek w lesie weekend — relaks na tarasie leśnego domku w Supraślu"
              className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width="600"
              height="450"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-graphite/70 to-transparent p-6">
              <p className="text-base text-white font-normal">Luksus w sercu lasu</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-center font-heading text-xl md:text-2xl font-light text-foreground mb-8">
            Pomysły na weekend: rytuał na każdą porę roku
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {rituals.map((r, i) => (
              <div key={i} className="card-premium p-6 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <r.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <p className="font-heading text-lg font-semibold text-foreground">{r.season}</p>
                <p className="text-xs text-muted-foreground px-3 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="font-heading text-2xl md:text-3xl font-light text-foreground">Wieczorem:</p>
          <div className="space-y-1 text-muted-foreground text-base">
            <p>Ogień trzaska w kominku. Na niebie pojawiają się gwiazdy.</p>
            <p>Ciepła woda w bani. Zapach drewna. Szepty Puszczy.</p>
          </div>
          <p className="text-base text-foreground/80 pt-4">
            To esencja odpoczynku w lesie na weekend — ostoja spokoju, gdzie czas płynie inaczej.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RelaxSection;
