import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import forestImg from '@/assets/forest-nature.jpg';
import riverImg from '@/assets/river-kayak.jpg';
import { TreePine, Waves, Bike, Fish, Eye, Compass } from 'lucide-react';

const activities = [
  { icon: TreePine, label: 'Spacery i grzybobranie' },
  { icon: Bike, label: 'Trasy rowerowe' },
  { icon: Waves, label: 'Spływy kajakowe' },
  { icon: Fish, label: 'Wędkarstwo' },
  { icon: Compass, label: 'Jazda konna' },
  { icon: Eye, label: 'Obserwacje nieba' },
];

const NatureSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative">
      <div className="relative h-[50vh] min-h-[350px]">
        <img src={forestImg} alt="Noclegi Puszcza Knyszyńska — poranny widok na las blisko Supraśla" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-graphite/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-cream/80 font-sans mb-4">Blisko natury</p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-cream">Puszcza Knyszyńska<br />za progiem</h2>
          </div>
        </div>
      </div>

      <div ref={ref} className={`section-padding bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <p className="section-subtitle">
              Krzemienna Chata leży przy rezerwacie przyrody Krzemienne Góry, w otoczeniu jednego 
              z najcenniejszych kompleksów leśnych w Polsce. Rzeka Supraśl płynie nieopodal, 
              a urokliwy Supraśl z Monasterem i klimatycznymi kawiarniami jest na wyciągnięcie ręki.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {activities.map((a, i) => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <a.icon className="w-5 h-5 text-forest flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-foreground">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <img src={riverImg} alt="Weekend Supraśl — spływ kajakowy na rzece Supraśl w Puszczy Knyszyńskiej" className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NatureSection;
