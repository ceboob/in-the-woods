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
    a: 'Dom znajduje się w miejscowości Konne koło Supraśla, w otoczeniu Puszczy Knyszyńskiej. Przed wyjazdem sprawdź aktualną trasę i zasady udostępniania pobliskich terenów chronionych.',
  },
  {
    q: 'Ile kosztuje wynajem domku w lesie na weekend?',
    a: 'Cena zależy od sezonu, liczby gości i dnia tygodnia. Aktualną stawkę dla wybranego terminu sprawdzisz w cenniku i kalendarzu dostępności.',
  },
  {
    q: 'Czy domek jest dostępny na sylwestra, walentynki lub majówkę?',
    a: 'Dostępność zależy od wybranego terminu. Wybierz daty w kalendarzu i wyślij zapytanie; gospodarz potwierdzi, czy pobyt jest możliwy.',
  },
  {
    q: 'Czy mogę pracować zdalnie w In The Woods?',
    a: 'W domu jest Wi-Fi. Jeśli potrzebujesz określonych parametrów łącza lub miejsca do pracy, potwierdź je z gospodarzem przed pobytem.',
  },
  {
    q: 'Co zabrać na pobyt w leśnym domku?',
    a: 'Na miejscu czekają pościel, ręczniki, kuchnia z ekspresem do kawy, grill i drewno do kominka. Warto zabrać ubrania odpowiednie do pogody i wygodne buty na spacer.',
  },
  {
    q: 'Gdzie nocować w Supraślu?',
    a: 'In The Woods to prywatny dom na wynajem w miejscowości Konne koło Supraśla. Sprawdź aktualną trasę do centrum i dopasuj plan pobytu do swoich potrzeb.',
  },
  {
    q: 'Czy rezerwacja obejmuje cały dom?',
    a: 'Tak. In The Woods to cały dom wynajmowany jednej grupie, położony w okolicy Supraśla. Do dyspozycji gości są m.in. kominek i ogród; balia ogrodowa z funkcją jacuzzi jest opcjonalnym dodatkiem.',
  },
  {
    q: 'Czy można wynająć dom w Puszczy Knyszyńskiej?',
    a: 'Tak. In The Woods znajduje się w miejscowości Konne, w otoczeniu Puszczy Knyszyńskiej. Wybierając trasy w okolicy, stosuj się do lokalnych oznaczeń i zasad ochrony przyrody.',
  },
  {
    q: 'Czy Supraśl jest dobry na weekend?',
    a: 'Supraśl i okolica łączą zabytki, takie jak Monaster i Muzeum Ikon, z trasami spacerowymi. Przed wyjściem sprawdź godziny otwarcia atrakcji i zasady dostępu do tras.',
  },
  {
    q: 'Czy są noclegi z jacuzzi w Supraślu?',
    a: `Tak. In The Woods oferuje balię ogrodową z funkcją jacuzzi jako opcjonalny dodatek do pobytu. Korzystanie z niej kosztuje ${GARDEN_TUB_PRICE} zł za cały pobyt.`,
  },
  {
    q: 'Czy trzeba wcześniej zarezerwować balię?',
    a: 'Tak. Balia ogrodowa z funkcją jacuzzi jest dostępna po wcześniejszej rezerwacji u gospodarza.',
  },
  {
    q: 'Czy przy domu jest parking?',
    a: 'Przy domu jest parking. Warunki korzystania i ewentualne opłaty potwierdź przed pobytem.',
  },
  {
    q: 'Czy można przyjechać z psem?',
    a: 'Możliwość pobytu z psem, ewentualne opłaty i informację o ogrodzeniu potwierdź z gospodarzem przed wysłaniem zapytania.',
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
    a: 'Dom znajduje się w miejscowości Konne koło Supraśla. Sprawdź aktualną trasę i warunki dojazdu przed podróżą.',
  },
  {
    q: 'Jaki jest minimalny czas pobytu?',
    a: 'Minimalny pobyt zależy od sezonu. Kalendarz pokazuje wymóg dla wybranego zakresu dat; w razie wątpliwości potwierdź go z gospodarzem.',
  },
  {
    q: 'Jak wygląda rezerwacja?',
    a: 'Wyślij zapytanie o pobyt przez formularz lub zadzwoń pod 722 765 101. Gospodarz odpowie z informacją o dostępności i cenie. Wysłanie formularza nie potwierdza rezerwacji ani nie oznacza płatności.',
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
