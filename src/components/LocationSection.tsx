import { useScrollReveal } from '@/hooks/useScrollAnimation';
import { MapPin, Navigation } from 'lucide-react';

const LocationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="lokalizacja" className="section-padding bg-background">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Lokalizacja
          </p>
          <h2 className="section-title">Lokalizacja domu w Konne koło Supraśla</h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <p className="text-sm">Konne 109/1, 16-030 Supraśl</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-8 space-y-4 text-muted-foreground leading-relaxed text-center">
          <p>
            Dom znajduje się w miejscowości <strong>Konne</strong>, w okolicy Supraśla i Puszczy
            Knyszyńskiej. Przed podróżą sprawdź trasę dojazdu i aktualne warunki na drodze.
          </p>
          <p>
            W Supraślu możesz odwiedzić Monaster i Muzeum Ikon, a w okolicy zaplanować spacer lub
            aktywność sezonową. Przed wyjściem sprawdź godziny otwarcia, dostępność tras i zasady
            obowiązujące na terenach chronionych.
          </p>
        </div>

        <div className="overflow-hidden border border-border mb-6 rounded-lg">
          <iframe
            src="https://maps.google.com/maps?q=53.208577,23.436622&z=14&output=embed&hl=pl"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa dojazdu do In The Woods w miejscowości Konne"
            className="w-full"
          />
        </div>

        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Przed wyjazdem sprawdź przebieg trasy i warunki dojazdu.
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=53.208577,23.436622"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Wyznacz trasę w Mapach Google (otworzy się w nowej karcie)"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Navigation className="w-4 h-4" /> Wyznacz trasę
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
