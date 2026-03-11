import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import winterImg from '@/assets/winter-cabin.jpg';

const ideas = ['Święta w lesie', 'Ferie zimowe', 'Romantyczny wyjazd', 'Reset od miasta'];

const WinterSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative">
      <div className="relative h-[50vh] min-h-[350px]">
        <img src={winterImg} alt="Krzemienna Chata zimą — śnieg, kominek, bania" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-graphite/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-2xl">
            <h2 className="font-serif text-3xl md:text-5xl font-light text-cream mb-4">Zimą jak z bajki</h2>
            <p className="font-serif text-lg text-cream/80 italic">Śnieg. Kominek. Gorąca bania.</p>
          </div>
        </div>
      </div>

      <div ref={ref} className={`px-6 md:px-12 py-12 md:py-16 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-6">Idealne miejsce na</p>
          <div className="flex flex-wrap justify-center gap-3">
            {ideas.map((idea, i) => (
              <span key={i} className="px-5 py-2.5 border border-border text-sm text-foreground bg-card">
                {idea}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterSection;
