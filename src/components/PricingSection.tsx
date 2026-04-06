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
    <section id="cennik" className="section-padding bg-secondary">
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

          {/* Stripe payment info */}
          <div className="flex items-center justify-center gap-3 pt-2 pb-1">
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-background/80 border border-border rounded-full px-4 py-2">
              <svg viewBox="0 0 60 25" className="w-10 h-auto" aria-label="Stripe" role="img">
                <path fill="#635BFF" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a10.7 10.7 0 0 1-4.56.95c-4.01 0-6.83-2.5-6.83-7.14 0-4.07 2.47-7.27 6.2-7.27 3.43 0 6.12 2.56 6.12 7.3l-.12 1.24zm-4.25-5.47c-1.18 0-2.14 1.06-2.25 2.68h4.5c-.07-1.62-.97-2.68-2.25-2.68zM42.86 20.16h-4.3V10.1c0-1.75-.64-2.67-2.02-2.67-1.12 0-2.14.82-2.14 2.35v10.38h-4.3V10.1c0-1.75-.63-2.67-2.02-2.67-1.12 0-2.13.82-2.13 2.35v10.38h-4.3V3.68h4.3v1.67c.87-1.18 2.14-2.04 3.87-2.04 1.81 0 3.14.82 3.85 2.23.87-1.28 2.25-2.23 4.06-2.23 2.76 0 4.62 1.87 4.62 5.44v11.41h.01zM13.95 0c1.48 0 2.69 1.21 2.69 2.69 0 1.48-1.21 2.69-2.69 2.69S11.26 4.17 11.26 2.69C11.26 1.21 12.47 0 13.95 0zm-2.15 20.16V6.04h4.3v14.12h-4.3zM6.84 6.04h.15v3.73H5.16c-1.51 0-2.63 1.12-2.63 2.95v7.44H-1.78V6.04h4.3v1.67c.75-1.12 1.93-2.04 3.56-2.04.28 0 .54.02.76.06V6.04z"/>
              </svg>
              <span>Zaliczka 30% · Reszta na miejscu</span>
            </div>
          </div>
          <p className="text-[11px] text-muted-foreground/70">
            Akceptujemy BLIK, karty płatnicze i przelewy online
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
