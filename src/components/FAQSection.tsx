import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Dla ilu osób jest dom?',
    a: 'Dom jest komfortowy dla par, rodzin i kameralnych grup. Do dyspozycji są dwie sypialnie na piętrze z dużymi łóżkami oraz dodatkowa przestrzeń w salonie.',
  },
  {
    q: 'Czy mogę przyjechać z psem?',
    a: 'Tak, zwierzęta są u nas mile widziane. Ogrodzony teren i las za progiem to raj dla czworonogów.',
  },
  {
    q: 'Jak wygląda rezerwacja?',
    a: 'Po wysłaniu zapytania przez formularz potwierdzimy dostępność i przedstawimy szczegóły cenowe. Rezerwacja jest wstępna do momentu potwierdzenia.',
  },
  {
    q: 'Czy balia / ruska bania jest w cenie?',
    a: 'Korzystanie z balii i ruskiej bani jest dostępne jako opcjonalny dodatek do pobytu. Szczegóły przedstawimy przy potwierdzeniu rezerwacji.',
  },
  {
    q: 'Jak daleko jest do Supraśla?',
    a: 'Supraśl z Monasterem, kawiarniami i sklepami znajduje się w bliskiej odległości od chaty — kilka minut samochodem.',
  },
  {
    q: 'Czy jest internet i możliwość pracy zdalnej?',
    a: 'Tak, dom wyposażony jest w szybkie Wi-Fi oraz wygodne miejsce do pracy. Idealne warunki na workation.',
  },
  {
    q: 'Jaki jest minimalny czas pobytu?',
    a: 'Minimalny pobyt to zazwyczaj 2 noce, ale w sezonie mogą obowiązywać inne warunki. Zapytaj o szczegóły.',
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
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
