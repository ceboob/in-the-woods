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
          <div key={i} className="text-center py-8 px-6 border border-border bg-card">
            <item.icon className="w-8 h-8 mx-auto mb-4 text-teal" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-medium mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
