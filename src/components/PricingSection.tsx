import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cennik" className="section-padding bg-background">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Cennik</p>
          <h2 className="section-title">Prosto i przejrzyście</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Doba */}
          <div className="border border-border bg-card p-8 text-center space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Doba</p>
            <div>
              <span className="font-serif text-4xl md:text-5xl font-light text-foreground">650</span>
              <span className="text-muted-foreground ml-1">zł / noc</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 text-left pt-4">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-forest" /> Dom na wyłączność</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-forest" /> Ogród, taras, kominek</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-forest" /> Wi-Fi, klimatyzacja</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-forest" /> Zwierzęta mile widziane</li>
            </ul>
          </div>

          {/* Weekend — najczęściej wybierany */}
          <div className="border-2 border-forest bg-card p-8 text-center space-y-4 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forest text-primary-foreground text-xs tracking-wider uppercase px-4 py-1 flex items-center gap-1">
              <Star className="w-3 h-3" /> Najczęściej wybierany
            </div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Weekend + jacuzzi</p>
            <div>
              <span className="font-serif text-4xl md:text-5xl font-light text-foreground">900</span>
              <span className="text-muted-foreground ml-1">zł / noc</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 text-left pt-4">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-forest" /> Wszystko z pakietu dobowego</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-forest" /> Ruska bania / jacuzzi</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-forest" /> Drewno na ognisko</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-forest" /> Priorytetowa dostępność</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 space-y-2">
          <p className="text-xs text-muted-foreground">
            Ceny orientacyjne — końcowa kwota zależy od terminu, długości pobytu i wybranych dodatków.
          </p>
          <p className="text-xs text-muted-foreground font-medium">
            Rezerwacja bezpośrednia — bez prowizji pośredników.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
