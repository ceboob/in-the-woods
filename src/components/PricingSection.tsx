import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, Star, Bath, Dog, Flame } from 'lucide-react';

const packages = [
  {
    name: 'Pobyt w tygodniu',
    price: '399',
    note: 'poza sezonem',
    features: ['Dom i ogród tylko dla Was', 'Ogród, taras, kominek', 'Maksymalnie 6 osób dorosłych', 'Zwierzęta mile widziane'],
    featured: false,
  },
  {
    name: 'Weekend + bania',
    price: '549',
    note: 'poza sezonem / min. 2 noce',
    features: ['Maksymalnie 6 osób dorosłych', 'Drewno opałowe w cenie', 'Dom i ogród tylko dla Was', 'Priorytetowa dostępność'],
    featured: true,
  },
];

const extras = [
  { icon: Bath, text: 'Ruska bania — 250 zł za cały pobyt ' },
  { icon: Dog, text: 'Pobyt z psem — bezpłatny' },
  { icon: Flame, text: 'Drewno do ogniska — 50 zł / 25 dm³' },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cennik" className="section-padding bg-background">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Cennik</p>
          <h2 className="section-title">Prosto i przejrzyście</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {packages.map((pkg, i) => (
            <div key={i} className={`${pkg.featured ? 'border-2 border-forest' : 'border border-border'} bg-card p-8 text-center space-y-4 relative`}>
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forest text-primary-foreground text-xs tracking-wider uppercase px-4 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3" /> Najczęściej wybierany
                </div>
              )}
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{pkg.name}</p>
              <div>
                <span className="font-serif text-4xl md:text-5xl font-light text-foreground">{pkg.price}</span>
                <span className="text-muted-foreground ml-1">zł / noc</span>
              </div>
              <p className="text-xs text-muted-foreground">{pkg.note}</p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left pt-4">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-forest" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {extras.map((e, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <e.icon className="w-4 h-4 text-forest" strokeWidth={1.5} />
              <span>{e.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center space-y-3">
          <p className="text-xs text-muted-foreground">
            Cena zależy od terminu, liczby gości i sezonu. Wyślij zapytanie, aby otrzymać dokładną ofertę.
          </p>
          <p className="text-xs text-muted-foreground font-medium">
            Rezerwacja bezpośrednia — bez prowizji pośredników.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button onClick={() => scrollTo('#rezerwacja')} className="btn-primary">
              Sprawdź dostępność
            </button>
            <a href="tel:+48722765101" className="btn-outline">
              Zapytaj o pobyt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
