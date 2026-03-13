import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Navigation } from 'lucide-react';

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="lokalizacja" className="section-padding bg-warm-white">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Lokalizacja</p>
          <h2 className="section-title">Jak do nas trafić</h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-forest" />
            <p className="text-sm">Konne 109/1, 16-030 Supraśl</p>
          </div>
        </div>

        <div className="overflow-hidden border border-border mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2365.5!2d23.436622!3d53.208577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDEyJzMwLjkiTiAyM8KwMjYnMTIuMCJF!5e0!3m2!1spl!2spl!4v1710000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokalizacja In The Woods"
            className="w-full"
          />
        </div>

        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Przy rezerwacie Krzemienne Góry, w sercu Puszczy Knyszyńskiej.
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=53.208577,23.436622"
            target="_blank"
            rel="noopener noreferrer"
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
