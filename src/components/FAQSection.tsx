import { useScrollReveal } from '@/hooks/useScrollAnimation';
import { GARDEN_TUB_PRICE } from '@/lib/pricing';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Gdzie znajduje się In The Woods?',
    a: 'W\u00a0Konnem pod Supraślem (Konne 109/1, 16-030 Supraśl), na skraju Puszczy Knyszyńskiej. Do centrum Supraśla jedziecie około 10\u00a0minut, do Białegostoku 30–40.',
  },
  {
    q: 'Ile kosztuje wynajem domku w\u00a0lesie na weekend?',
    a: 'Od 399\u00a0zł za noc za cały dom, nie za osobę. Cena rośnie z\u00a0liczbą gości, sezonem i\u00a0w\u00a0piątki oraz soboty. Dokładną kwotę dla Waszych dat pokaże kalendarz.',
  },
  {
    q: 'Czy domek jest dostępny na sylwestra, walentynki lub majówkę?',
    a: 'Te terminy znikają najszybciej. Zaznaczcie daty w\u00a0kalendarzu i\u00a0wyślijcie pytanie, a\u00a0Maciej odpisze, czy dom jest wolny.',
  },
  {
    q: 'Czy mogę pracować zdalnie w\u00a0In The Woods?',
    a: "Tak. Starlink do 200&nbsp;Mb/s wytrzymuje wideorozmowy, a&nbsp;w&nbsp;tle zamiast open space'u&nbsp;macie las.",
  },
  {
    q: 'Co zabrać na pobyt w\u00a0leśnym domku?',
    a: 'Pościel, ręczniki, kuchnię z\u00a0ekspresem, grill i\u00a0drewno do kominka mamy. Wy weźcie ciepłe ciuchy, buty, które przeżyją błoto, i\u00a0strój do balii.',
  },
  {
    q: 'Gdzie nocować w\u00a0Supraślu?',
    a: 'Jeśli chcecie cały dom zamiast pokoju w\u00a0pensjonacie, to u\u00a0nas. In The Woods to dom z\u00a0bali w\u00a0Konnem, około 10\u00a0minut od centrum Supraśla.',
  },
  {
    q: 'Czy rezerwacja obejmuje cały dom?',
    a: 'Tak. Dom wynajmujemy jednej ekipie, więc kuchnia, salon z\u00a0kominkiem, ogród i\u00a0taras są tylko Wasze. Balia z\u00a0hydromasażem to dodatek za 250\u00a0zł za pobyt.',
  },
  {
    q: 'Czy można wynająć dom w\u00a0Puszczy Knyszyńskiej?',
    a: 'Można, i\u00a0to właśnie ten. Dom stoi na skraju Puszczy Knyszyńskiej, a\u00a0pierwszy leśny dukt zaczyna się zaraz za płotem.',
  },
  {
    q: 'Czy Supraśl jest dobry na weekend?',
    a: 'Bardzo. Monaster i\u00a0Muzeum Ikon na rano, kajaki albo rower po południu, babka ziemniaczana na obiad i\u00a0balia wieczorem. Gotowy plan znajdziecie na stronie o\u00a0weekendzie w\u00a0Supraślu.',
  },
  {
    q: 'Czy są noclegi z\u00a0jacuzzi w\u00a0Supraślu?',
    a: `Są. Mamy balię z\u00a0hydromasażem, która działa jak jacuzzi. Stoi w\u00a0ogrodzie i\u00a0kosztuje ${GARDEN_TUB_PRICE} zł za cały pobyt.`,
  },
  {
    q: 'Czy trzeba wcześniej zarezerwować balię?',
    a: 'Tak, dajcie znać przy rezerwacji. Dzięki temu zdążymy ją nagrzać na Wasz przyjazd.',
  },
  {
    q: 'Czy przy domu jest parking?',
    a: 'Tak, parkujecie przy samym domu.',
  },
  {
    q: 'Czy można przyjechać z\u00a0psem?',
    a: 'Tak, i\u00a0to za darmo. Za psa ani innego pupila nie bierzemy dopłat.',
  },
  {
    q: 'Dla ilu osób jest dom?',
    a: 'Dla maksymalnie 8\u00a0osób: dwie sypialnie na piętrze i\u00a0dodatkowe miejsce do spania w\u00a0salonie.',
  },
  {
    q: 'Jak daleko jest do Supraśla?',
    a: 'Około 10\u00a0minut samochodem do centrum Supraśla.',
  },
  {
    q: 'Jaki jest minimalny czas pobytu?',
    a: 'Zwykle 2\u00a0noce, a\u00a0w\u00a0wakacje (czerwiec–sierpień) 3. Kalendarz sam podpowie, ile nocy trzeba zarezerwować w\u00a0wybranym terminie.',
  },
  {
    q: 'Jak wygląda rezerwacja?',
    a: 'Zaznaczcie daty i\u00a0wyślijcie formularz albo zadzwońcie pod 722 765 101. Maciej odpisze z\u00a0ceną, zwykle w\u00a0kilka godzin. Formularz to tylko pytanie o\u00a0termin: niczego nie rezerwuje i\u00a0niczego nie pobiera.',
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-wide text-muted-foreground font-sans">FAQ</p>
          <h2 className="section-title">Najczęściej pytacie</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
              <AccordionTrigger className="font-heading text-lg font-medium text-left hover:no-underline py-5">
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
