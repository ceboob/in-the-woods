import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import baniaImg from '@/assets/bania-relax.jpg';
import terraceImg from '@/assets/outdoor-terrace.jpg';

const features = [
  { title: 'Ruska bania i balia', desc: 'Drewniana balia z gorącą wodą pod gołym niebem. Rytuał kąpieli otoczony zapachem lasu i dźwiękiem ciszy.' },
  { title: 'Kominek', desc: 'Prawdziwy ogień, trzask drewna i ciepło, które rozgrzewa nie tylko ciało. Wieczory tutaj mają swój własny rytm.' },
  { title: 'Ognisko i grill', desc: 'Wieczorne ognisko pod gwiazdami, grill w otoczeniu ogrodu. Proste przyjemności, które smakują najlepiej.' },
  { title: 'Prywatny ogród', desc: 'Ogrodzony teren z altaną i tarasem. Twoja przestrzeń — bez sąsiadów, bez pośpiechu.' },
];

const RelaxSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="relaks" className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Strefa relaksu</p>
          <h2 className="section-title">Zwolnij. Oddychaj. Odpoczywaj.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
          <div className="overflow-hidden">
            <img src={baniaImg} alt="Ruska bania i balia w ogrodzie Krzemiennej Chaty" className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="overflow-hidden">
            <img src={terraceImg} alt="Taras z widokiem na ogród" className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="space-y-3">
              <h3 className="font-serif text-xl font-medium">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelaxSection;
