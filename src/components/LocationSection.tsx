import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Navigation } from 'lucide-react';

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="lokalizacja" className="section-padding bg-background">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Lokalizacja
          </p>
          <h2 className="section-title">Domek w lesie Podlasie — Puszcza Knyszyńska, Supraśl</h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <p className="text-sm">Konne 109/1, 16-030 Supraśl</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-8 space-y-4 text-muted-foreground leading-relaxed text-center">
          <p>
            Nasz leśny domek do wynajęcia znajduje się w miejscowości <strong>Konne</strong> — malowniczej
            osadzie w samym sercu <strong>Puszczy Knyszyńskiej</strong>, przy <strong>Rezerwacie Przyrody
            Krzemienne Góry</strong>. To domek podlaskie odludzie w najczystszej formie — gruntowa droga
            przez las prowadzi do ogrodzonej posesji otoczonej stuletnią puszczą.
          </p>
          <p>
            Domek na odludziu podlaskie, zaledwie <strong>10 minut od Supraśla</strong> i <strong>25 minut
            od Białegostoku</strong>. W okolicy: Monaster w Supraślu, Muzeum Ikon, szlaki piesze i rowerowe
            Puszczy Knyszyńskiej, spływ kajakowy rzeką Supraśl, tatarska wieś Kruszyniany. Las wynajem
            Puszcza Knyszyńska — to adres, do którego chce się wracać.
          </p>
        </div>

        <div className="overflow-hidden border border-border mb-6 rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Konne+109%2F1,+16-030+Supraśl,+Poland&zoom=13"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokalizacja In The Woods — domek w lesie Supraśl"
            className="w-full"
          />
        </div>

        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Przy Rezerwacie Krzemienne Góry, w sercu Puszczy Knyszyńskiej — domek w lesie Supraśl.
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
