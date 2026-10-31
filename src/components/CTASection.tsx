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
        <h2 className="section-title mb-4">Piszcie albo dzwońcie. Las czeka</h2>
        <p className="text-muted-foreground mb-4 text-lg">
          Domek w&nbsp;lesie do wynajęcia na Podlasiu: kominek, balia pod gwiazdami i&nbsp;cisza, od
          której na początku aż dzwoni w&nbsp;uszach.
        </p>
        <p className="text-muted-foreground mb-8">
          Maciej odpisuje zwykle w&nbsp;kilka godzin, z&nbsp;ceną i&nbsp;wolnymi terminami. Pytanie
          niczego nie rezerwuje i&nbsp;nic nie kosztuje.
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
            <TreePine className="w-4 h-4 text-primary" /> Las za płotem
          </div>
        </div>

        <p className="text-xs text-muted-foreground font-sans">
          Macie już daty? Wpiszcie je w&nbsp;formularzu, wtedy odpowiedź będzie szybsza.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
