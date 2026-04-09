import { TreePine, Shield, Flame } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const items = [
  { icon: TreePine, title: 'Lokalizacja', desc: 'Serce Puszczy Knyszyńskiej' },
  { icon: Shield, title: 'Prywatność', desc: 'Dom i ogród tylko dla gości' },
  { icon: Flame, title: 'Relaks', desc: 'Ruska bania i kominek' },
];

const TrustSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-6 md:px-12 py-12 md:py-16 bg-background">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {items.map((item, i) => (
          <div key={i} className="card-premium p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
