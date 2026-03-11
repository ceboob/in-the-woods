import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  { q: 'Czy jest jacuzzi / ruska bania?', a: 'Tak — do dyspozycji gości jest prywatna ruska bania z balią z gorącą wodą, dostępna jako opcjonalny dodatek do pobytu.' },
  { q: 'Czy dom jest prywatny?', a: 'Tak — dom i cały ogród wynajmujecie na wyłączność. Żadnych innych gości.' },
  { q: 'Czy można przyjechać z psem?', a: 'Tak, zwierzęta są mile widziane. Ogrodzony ogród i las za progiem to raj dla czworonogów.' },
  { q: 'Dla ilu osób jest dom?', a: 'Dom jest komfortowy dla 6–8 osób. Dwie sypialnie z dużymi łóżkami na piętrze oraz dodatkowa przestrzeń w salonie.' },
  { q: 'Czy jest internet?', a: 'Tak — szybkie Wi-Fi, wygodne miejsce do pracy. Idealne warunki na workation.' },
  { q: 'Jak daleko jest do Supraśla?', a: 'Około 10 minut samochodem. Monaster, kawiarnie, sklepy — wszystko na wyciągnięcie ręki.' },
  { q: 'Jaki jest minimalny czas pobytu?', a: 'Minimalny pobyt to 2 noce. W sezonie mogą obowiązywać inne warunki — zapytaj o szczegóły.' },
  { q: 'Jak wygląda rezerwacja?', a: 'Wyślij zapytanie przez formularz lub zadzwoń. Potwierdzimy dostępność i przedstawimy szczegółową ofertę.' },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-warm-white">
      <div ref={ref} className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">FAQ</p>
          <h2 className="section-title">Najczęściej pytacie</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
              <AccordionTrigger className="font-serif text-lg font-medium text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
