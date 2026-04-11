import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import winterCabin from '@/assets/winter-cabin-real.webp';
import winterGolden from '@/assets/winter-cabin-golden.webp';
import winterForest from '@/assets/winter-forest.webp';

const ideas = ['Domek na sylwestra w lesie', 'Ferie zimowe w puszczy', 'Walentynki w leśnym domku', 'Majówka w lesie'];

const WinterSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative">
      <div className="relative h-[50vh] min-h-[350px]">
        <img
          src={winterGolden}
          alt="Domek na sylwestra w lesie — chata In The Woods zimą, Puszcza Knyszyńska"
          className="w-full h-full object-cover"
          loading="lazy"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-2xl">
            <h2 className="font-heading text-3xl md:text-5xl font-light text-white mb-4">
              Domek na sylwestra i zimowy weekend w lesie
            </h2>
            <p className="font-serif text-lg text-white/80 italic">
              Śnieg na dachu. Kominek w środku. Gorąca bania na zewnątrz.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className={`section-padding bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <p className="section-subtitle">
              Zima w Puszczy Knyszyńskiej ma swój niepowtarzalny urok. Kiedy śnieg przykrywa las i
              ciszę przerywają tylko odgłosy dzięcioła, nasz domek w lesie zamienia się w przytulny azyl.
              Rano rozpalasz kominek, parzysz kawę i obserwujesz las za oknem. Po południu spacer po
              zaśnieżonych szlakach albo narty biegowe wśród sosen. A wieczorem — gorąca bania pod
              rozgwieżdżonym zimowym niebem i powrót do ciepłego domu z bali na wyłączność.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="overflow-hidden">
              <img
                src={winterCabin}
                alt="Domek z kominkiem w lesie zimą — leśny dom na wynajem w Puszczy Knyszyńskiej"
                className="w-full h-[280px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width="800"
                height="350"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={winterForest}
                alt="Zaśnieżony las Puszczy Knyszyńskiej — domek na odludziu podlaskie zimą"
                className="w-full h-[280px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width="800"
                height="350"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-6">
              Idealne miejsce na
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {ideas.map((idea, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 border border-border text-sm text-foreground bg-card"
                >
                  {idea}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterSection;
