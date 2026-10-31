import { useScrollReveal } from '@/hooks/useScrollAnimation';
import ImageReveal from '@/components/ImageReveal';
import { Link } from 'react-router-dom';
import winterCabin from '@/assets/winter-cabin-real.webp';
import winterGolden from '@/assets/winter-cabin-golden.webp';
import winterForest from '@/assets/winter-forest.webp';

const ideas = ['Domek na sylwestra w lesie', 'Ferie zimowe w puszczy', 'Walentynki w leśnym domku', 'Majówka w lesie'];

const WinterSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative">
      <div className="relative h-[50vh] min-h-[350px]">
        <ImageReveal>
          <img
            src={winterGolden}
            alt="Domek na sylwestra w lesie — chata In The Woods zimą, Puszcza Knyszyńska"
            className="w-full h-full object-cover"
            loading="lazy"
            width="1920"
            height="1080"
          />
        </ImageReveal>
        <div className="absolute inset-0 bg-foreground/30 dark:bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-2xl">
            <h2 className="font-heading text-3xl md:text-5xl font-light text-white mb-4">
              Domek na sylwestra i zimowy weekend w lesie
            </h2>
            <p className="text-base text-white/80 font-sans">
              Śnieg na dachu. Kominek w środku. Gorąca balia na zewnątrz.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className={`section-padding bg-background reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <p className="section-subtitle">
              Zimą puszcza cichnie tak, że słychać, jak spada śnieg, a jedynym hałasem jest
              dzięcioł. Rano kominek i kawa przy oknie. Po południu spacer po zaśnieżonych szlakach
              albo narty biegowe między sosnami. Wieczorem balia pod gwiazdami, a potem szybki
              sprint w ręczniku z powrotem do ciepłego domu. Sylwester? Bez stania w korkach
              i bez kolejki do szatni.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="overflow-hidden">
              <ImageReveal>
                <img
                  src={winterCabin}
                  alt="Domek z kominkiem w lesie zimą, Puszcza Knyszyńska"
                  className="w-full h-[280px] md:h-[350px] object-cover"
                  loading="lazy"
                  width="800"
                  height="350"
                />
              </ImageReveal>
            </div>
            <div className="overflow-hidden">
              <ImageReveal delay={90}>
                <img
                  src={winterForest}
                  alt="Zaśnieżony las Puszczy Knyszyńskiej koło domu In The Woods zimą"
                  className="w-full h-[280px] md:h-[350px] object-cover"
                  loading="lazy"
                  width="800"
                  height="350"
                />
              </ImageReveal>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs tracking-wide text-muted-foreground font-sans mb-6">
              Dobre na
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
            <Link to="/sylwester-podlasie" className="btn-outline inline-flex items-center justify-center mt-8">
              Sylwester w lesie: zobaczcie plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterSection;
