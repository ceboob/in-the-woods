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
    a: 'W Konnem pod Supraślem (Konne 109/1, 16-030 Supraśl), na skraju Puszczy Knyszyńskiej. Do centrum Supraśla jedziecie około 10 minut, do Białegostoku 30–40.',
  },
  {
    q: 'Ile kosztuje wynajem domku w lesie na weekend?',
    a: 'Od 399 zł za noc za cały dom, nie za osobę. Cena rośnie z liczbą gości, sezonem i w piątki oraz soboty. Dokładną kwotę dla Waszych dat pokaże kalendarz.',
  },
  {
    q: 'Czy domek jest dostępny na sylwestra, walentynki lub majówkę?',
    a: 'Te terminy znikają najszybciej. Zaznaczcie daty w kalendarzu i wyślijcie pytanie, a Maciej odpisze, czy dom jest wolny.',
  },
  {
    q: 'Czy mogę pracować zdalnie w In The Woods?',
    a: 'Tak. Starlink do 200 Mb/s wytrzymuje wideorozmowy, a w tle zamiast open space\'u macie las.',
  },
  {
    q: 'Co zabrać na pobyt w leśnym domku?',
    a: 'Pościel, ręczniki, kuchnię z ekspresem, grill i drewno do kominka mamy. Wy weźcie ciepłe ciuchy, buty, które przeżyją błoto, i strój do balii.',
  },
  {
    q: 'Gdzie nocować w Supraślu?',
    a: 'Jeśli chcecie cały dom zamiast pokoju w pensjonacie, to u nas. In The Woods to dom z bali w Konnem, około 10 minut od centrum Supraśla.',
  },
  {
    q: 'Czy rezerwacja obejmuje cały dom?',
    a: 'Tak. Dom wynajmujemy jednej ekipie, więc kuchnia, salon z kominkiem, ogród i taras są tylko Wasze. Balia z hydromasażem to dodatek za 250 zł za pobyt.',
  },
  {
    q: 'Czy można wynająć dom w Puszczy Knyszyńskiej?',
    a: 'Można, i to właśnie ten. Dom stoi na skraju Puszczy Knyszyńskiej, a pierwszy leśny dukt zaczyna się zaraz za płotem.',
  },
  {
    q: 'Czy Supraśl jest dobry na weekend?',
    a: 'Bardzo. Monaster i Muzeum Ikon na rano, kajaki albo rower po południu, babka ziemniaczana na obiad i balia wieczorem. Gotowy plan znajdziecie na stronie o weekendzie w Supraślu.',
  },
  {
    q: 'Czy są noclegi z jacuzzi w Supraślu?',
    a: `Są. Mamy balię z hydromasażem, która działa jak jacuzzi. Stoi w ogrodzie i kosztuje ${GARDEN_TUB_PRICE} zł za cały pobyt.`,
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
    q: 'Czy można przyjechać z psem?',
    a: 'Tak, i to za darmo. Za psa ani innego pupila nie bierzemy dopłat.',
  },
  {
    q: 'Dla ilu osób jest dom?',
    a: 'Dla maksymalnie 8 osób: dwie sypialnie na piętrze i dodatkowe miejsce do spania w salonie.',
  },
  {
    q: 'Jak daleko jest do Supraśla?',
    a: 'Około 10 minut samochodem do centrum Supraśla.',
  },
  {
    q: 'Jaki jest minimalny czas pobytu?',
    a: 'Zwykle 2 noce, a w wakacje (czerwiec–sierpień) 3. Kalendarz sam podpowie, ile nocy trzeba zarezerwować w wybranym terminie.',
  },
  {
    q: 'Jak wygląda rezerwacja?',
    a: 'Zaznaczcie daty i wyślijcie formularz albo zadzwońcie pod 722 765 101. Maciej odpisze z ceną, zwykle w kilka godzin. Formularz to tylko pytanie o termin: niczego nie rezerwuje i niczego nie pobiera.',
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
