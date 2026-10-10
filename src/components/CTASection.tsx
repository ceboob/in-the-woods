import { useScrollReveal } from '@/hooks/useScrollAnimation';
import { Clock, ShieldCheck, CreditCard, TreePine } from 'lucide-react';

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 md:px-12 py-20 md:py-28 bg-background">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <h2 className="section-title mb-4">Zapytaj o pobyt w leśnym domu na wyłączność</h2>
        <p className="text-muted-foreground mb-4 text-lg">
          Domek w lesie wynajem na Podlasiu — szepty Puszczy Knyszyńskiej, klimatyczny kominek,
          balia ogrodowa z funkcją jacuzzi pod gwiazdami i absolutna prywatność. Wszystko czeka na Ciebie.
        </p>
        <p className="text-muted-foreground mb-8">
          Wysłanie zapytania nie potwierdza rezerwacji ani nie oznacza płatności. Odpowiemy z informacją o dostępności i cenie.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" /> Szybka odpowiedź
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CreditCard className="w-4 h-4 text-primary" /> Bez prowizji pośrednika
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-primary" /> Dom na wyłączność
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TreePine className="w-4 h-4 text-primary" /> Leśny domek do wynajęcia
          </div>
        </div>

        <p className="text-xs text-muted-foreground font-sans">
          Jeśli masz wybrany termin, możesz podać go w formularzu zapytania.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
