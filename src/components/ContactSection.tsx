import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="kontakt" className="section-padding bg-warm-white">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Kontakt i dojazd</p>
          <h2 className="section-title">Masz pytania? Napisz do nas.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <MapPin className="w-6 h-6 mx-auto text-forest" strokeWidth={1.5} />
            <h3 className="font-serif text-lg font-medium">Lokalizacja</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Okolice Supraśla<br />Puszcza Knyszyńska<br />Podlasie, Polska
            </p>
          </div>
          <div className="space-y-3">
            <Mail className="w-6 h-6 mx-auto text-forest" strokeWidth={1.5} />
            <h3 className="font-serif text-lg font-medium">E-mail</h3>
            <p className="text-sm text-muted-foreground">kontakt@krzemiennachata.pl</p>
          </div>
          <div className="space-y-3">
            <Phone className="w-6 h-6 mx-auto text-forest" strokeWidth={1.5} />
            <h3 className="font-serif text-lg font-medium">Telefon</h3>
            <p className="text-sm text-muted-foreground">+48 000 000 000</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button onClick={() => document.querySelector('#rezerwacja')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
            Sprawdź dostępność
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
