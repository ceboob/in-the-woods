import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Clock, ShieldCheck, CreditCard } from 'lucide-react';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-6 md:px-12 py-20 md:py-28 bg-background">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="section-title mb-4">Sprawdź dostępność noclegu w Supraślu</h2>
        <p className="text-muted-foreground mb-8">
          Odpowiadamy zwykle w kilka godzin. Rezerwacja bezpośrednia — bez prowizji.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-teal" /> Szybka odpowiedź
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CreditCard className="w-4 h-4 text-teal" /> Bez prowizji pośrednika
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-teal" /> Bezpośrednia rezerwacja
          </div>
        </div>

        <p className="text-xs text-muted-foreground italic">
          Najlepsze terminy są rezerwowane z wyprzedzeniem.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
