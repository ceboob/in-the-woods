import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Gdzie znajduje się In The Woods?',
    a: 'Dom znajduje się w miejscowości Konne koło Supraśla, w Puszczy Knyszyńskiej — około 10 minut samochodem od centrum Supraśla i 25 minut od Białegostoku. To domek w lesie na Podlasiu, przy Rezerwacie Przyrody Krzemienne Góry.',
  },
  {
    q: 'Ile kosztuje wynajem domku w lesie na weekend?',
    a: 'Cena zależy od sezonu, liczby gości i dnia tygodnia. Aktualną stawkę dla wybranego terminu sprawdzisz w cenniku i kalendarzu dostępności.',
  },
  {
    q: 'Czy domek jest dostępny na sylwestra, walentynki lub majówkę?',
    a: 'Domek na sylwestra w lesie, walentynki i majówkę to nasze najpopularniejsze terminy — rezerwowane z dużym wyprzedzeniem. Sprawdź dostępność w kalendarzu lub zadzwoń, aby zapytać o konkretne daty.',
  },
  {
    q: 'Czy mogę pracować zdalnie w In The Woods?',
    a: 'Tak. W domu jest Wi-Fi i miejsce do pracy przy oknie z widokiem na las. Po pracy można odpocząć na leśnych ścieżkach w okolicy.',
  },
  {
    q: 'Co zabrać na pobyt w leśnym domku?',
    a: 'Na miejscu czekają pościel, ręczniki, kuchnia z ekspresem do kawy, grill i drewno do kominka. Warto zabrać ubrania odpowiednie do pogody i wygodne buty na spacer.',
  },
  {
    q: 'Gdzie nocować w Supraślu?',
    a: 'In The Woods to prywatny dom na wynajem w Puszczy Knyszyńskiej, zaledwie 10 minut od centrum Supraśla. Idealny nocleg w Supraślu dla par, rodzin i grup przyjaciół szukających ciszy i natury.',
  },
  {
    q: 'Czy rezerwacja obejmuje cały dom?',
    a: 'Tak. In The Woods to cały dom wynajmowany na wyłączność, położony w leśnej okolicy niedaleko Supraśla. Do dyspozycji gości są m.in. kominek, ogród i balia ogrodowa z funkcją jacuzzi.',
  },
  {
    q: 'Czy można wynająć dom w Puszczy Knyszyńskiej?',
    a: 'Tak. In The Woods znajduje się w miejscowości Konne, w otoczeniu Puszczy Knyszyńskiej, w pobliżu Rezerwatu Przyrody Krzemienne Góry.',
  },
  {
    q: 'Czy Supraśl jest dobry na weekend?',
    a: 'Supraśl i okolica łączą zabytki, takie jak Monaster i Muzeum Ikon, z trasami spacerowymi w Puszczy Knyszyńskiej. In The Woods znajduje się około 10 minut jazdy samochodem od centrum.',
  },
  {
    q: 'Czy są noclegi z jacuzzi w Supraślu?',
    a: 'Tak. In The Woods oferuje balię ogrodową z funkcją jacuzzi jako opcjonalny dodatek do pobytu. Korzystanie z niej kosztuje 250 zł za cały pobyt.',
  },
  {
    q: 'Czy trzeba wcześniej zarezerwować balię?',
    a: 'Tak. Balia ogrodowa z funkcją jacuzzi jest dostępna po wcześniejszej rezerwacji u gospodarza.',
  },
  {
    q: 'Czy przy domu jest bezpłatny parking?',
    a: 'Tak. Goście mogą korzystać z bezpłatnego parkingu przy domu.',
  },
  {
    q: 'Czy można przyjechać z psem?',
    a: 'Tak, można przyjechać z psem. Pobyt zwierząt jest bezpłatny, a dom ma ogrodzony ogród.',
  },
  {
    q: 'Dla ilu osób jest dom?',
    a: 'Dom może przyjąć do 8 osób. Są w nim dwie sypialnie na piętrze oraz dodatkowe miejsce do spania w salonie.',
  },
  {
    q: 'Czy jest internet?',
    a: 'Tak, w domu jest Wi-Fi. Dostępne jest również miejsce do pracy.',
  },
  {
    q: 'Jak daleko jest do Supraśla?',
    a: 'Do centrum Supraśla jest około 10 minut jazdy samochodem.',
  },
  {
    q: 'Jaki jest minimalny czas pobytu?',
    a: 'Minimalny pobyt zależy od terminu. Aktualne wymagania sprawdzisz w kalendarzu dostępności lub podczas rezerwacji.',
  },
  {
    q: 'Jak wygląda rezerwacja?',
    a: 'Wyślij zapytanie przez formularz na stronie lub zadzwoń pod 722 765 101. Gospodarz potwierdzi dostępność i cenę dla wybranego terminu.',
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">FAQ</p>
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
