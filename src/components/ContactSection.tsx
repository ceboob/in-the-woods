import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Mail, Phone, Navigation, User } from 'lucide-react';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="kontakt" className="section-padding bg-warm-white">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Kontakt i dojazd</p>
          <h2 className="section-title">Masz pytania? Napisz do nas.</h2>
        </div>

        {/* Contact card */}
        <div className="bg-card border border-border p-8 md:p-12 max-w-3xl mx-auto mb-16">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <User className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Gospodarz</p>
                  <p className="font-serif text-lg font-medium">Maciej</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Adres</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    Konne 109/1<br />16-030 Supraśl
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Telefon</p>
                  <a href="tel:+48790625990" className="text-sm text-foreground hover:text-forest transition-colors block">790 625 990</a>
                  <a href="tel:+48722765101" className="text-sm text-muted-foreground hover:text-forest transition-colors block">722 765 101</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">E-mail</p>
                  <a href="mailto:kontakt@krzemiennachata.pl" className="text-sm text-foreground hover:text-forest transition-colors">kontakt@krzemiennachata.pl</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-8 border-t border-border">
            <a href="tel:+48790625990" className="btn-primary flex-1 text-center">
              <Phone className="w-4 h-4 mr-2 inline" /> Zadzwoń
            </a>
            <button onClick={() => document.querySelector('#rezerwacja')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline flex-1 text-center">
              Zapytaj o termin
            </button>
          </div>
        </div>

        {/* Map section */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-2xl md:text-3xl font-light">Lokalizacja</h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Krzemienna Chata, Konne 109/1, 16-030 Supraśl — przy rezerwacie Krzemienne Góry, w sercu Puszczy Knyszyńskiej.
            </p>
          </div>

          <div className="overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2365.5!2d23.436622!3d53.208577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDEyJzMwLjkiTiAyM8KwMjYnMTIuMCJF!5e0!3m2!1spl!2spl!4v1710000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja Krzemiennej Chaty"
              className="w-full"
            />
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=53.208577,23.436622"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              Wyznacz trasę
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
