import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { BookOpen, Flame, Bath, TreePine, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Flame, label: 'Kominek' },
  { icon: Bath, label: 'Ruska bania' },
  { icon: TreePine, label: 'Natura' },
  { icon: ShieldCheck, label: 'Bezpieczeństwo' },
];

const GuestGuideSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-warm-white">
      <div ref={ref} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="space-y-4 mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Dla gości</p>
          <h2 className="section-title">Informator gościa</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wszystko, co musisz wiedzieć przed przyjazdem i w trakcie pobytu — zasady, instrukcje, kontakt.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-card border border-border rounded-lg p-5 flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-forest" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>

        <Link to="/informator" className="btn-primary inline-flex items-center gap-2">
          <BookOpen className="w-4 h-4" /> Przeczytaj informator
        </Link>
      </div>
    </section>
  );
};

export default GuestGuideSection;
