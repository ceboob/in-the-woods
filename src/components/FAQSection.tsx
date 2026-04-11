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
    a: 'Ceny zaczynają się od 399 zł za noc. Koszt zależy od sezonu, dnia tygodnia i długości pobytu. Weekendy i święta to terminy premium. Sprawdź kalendarz dostępności, aby zobaczyć aktualne ceny — wynajem domku na odludziu na weekend bez pośredników i prowizji.',
  },
  {
    q: 'Czy domek jest dostępny na sylwestra, walentynki lub majówkę?',
    a: 'Domek na sylwestra w lesie, walentynki i majówkę to nasze najpopularniejsze terminy — rezerwowane z dużym wyprzedzeniem. Sprawdź dostępność w kalendarzu lub zadzwoń, aby zapytać o konkretne daty.',
  },
  {
    q: 'Czy mogę pracować zdalnie w In The Woods?',
    a: 'Tak — szybkie Wi-Fi, wygodne biurko przy oknie z widokiem na las i cisza idealna do skupienia. Praca zdalna w lesie — wynajem domku na workation, po którym idziesz na spacer do rezerwatu zamiast stać w korku.',
  },
  {
    q: 'Co zabrać na pobyt w leśnym domku?',
    a: 'Dom jest w pełni wyposażony — pościel, ręczniki, kuchnia z ekspresem do kawy, grill i drewno na kominek. Zabierz tylko ubrania, dobre buty na leśne szlaki i otwartą głowę na odpoczynek. Resztę znajdziesz na miejscu.',
  },
  {
    q: 'Gdzie nocować w Supraślu?',
    a: 'In The Woods to prywatny dom na wynajem w Puszczy Knyszyńskiej, zaledwie 10 minut od centrum Supraśla. Idealny nocleg w Supraślu dla par, rodzin i grup przyjaciół szukających ciszy i natury.',
  },
  {
    q: 'Czy są domy na wynajem w Supraślu?',
    a: 'Tak — In The Woods to dom na wyłączność blisko Supraśla, w Puszczy Knyszyńskiej. Kominek, ogród, ruska bania i pełna prywatność. Idealny dom na wynajem w okolicach Supraśla.',
  },
  {
    q: 'Czy można wynająć dom w Puszczy Knyszyńskiej?',
    a: 'Tak, In The Woods znajduje się w sercu Puszczy Knyszyńskiej przy rezerwacie Krzemienne Góry. To jeden z nielicznych domów na wynajem otoczonych prawdziwą puszczą — domek w lesie wynajem na Podlasiu.',
  },
  {
    q: 'Czy Supraśl jest dobry na weekend?',
    a: 'Supraśl to idealne miejsce na weekend — uzdrowiskowe miasteczko z Monasterem, Muzeum Ikon, kawiarniami i szlakami w Puszczy Knyszyńskiej. In The Woods to najlepsza baza wypadowa na weekend w Supraślu.',
  },
  {
    q: 'Czy są noclegi z jacuzzi w Supraślu?',
    a: 'In The Woods oferuje prywatną ruską banię z balią z gorącą wodą — domek z jacuzzi w lesie. Idealne wieczorne SPA pod gwiazdami, dostępne jako dodatek do pobytu za 250 zł.',
  },
  {
    q: 'Czy jest jacuzzi / ruska bania?',
    a: 'Tak — do dyspozycji gości jest prywatna ruska bania z balią z gorącą wodą, dostępna jako opcjonalny dodatek do pobytu za 250 zł. Domek z balią w lesie na wyłączność.',
  },
  {
    q: 'Czy dom jest prywatny?',
    a: 'Tak — dom i cały ogród wynajmujecie na wyłączność. Żadnych innych gości. To dom na wyłączność w lesie — Twoja prywatna przestrzeń.',
  },
  {
    q: 'Czy można przyjechać z psem?',
    a: 'Tak, zwierzęta są mile widziane. Psy za darmo — bez dopłat. Ogrodzony ogród i las za progiem to raj dla czworonogów.',
  },
  {
    q: 'Dla ilu osób jest dom?',
    a: 'Dom jest komfortowy dla 6–8 osób. Dwie sypialnie z dużymi łóżkami na piętrze oraz dodatkowa przestrzeń w salonie.',
  },
  {
    q: 'Czy jest internet?',
    a: 'Tak — szybkie Wi-Fi, wygodne miejsce do pracy. Idealne warunki na workation i pracę zdalną w lesie.',
  },
  {
    q: 'Jak daleko jest do Supraśla?',
    a: 'Około 10 minut samochodem. Monaster, kawiarnie, sklepy — wszystko na wyciągnięcie ręki.',
  },
  {
    q: 'Jaki jest minimalny czas pobytu?',
    a: 'Minimalny pobyt to 2 noce. W sezonie mogą obowiązywać inne warunki — zapytaj o szczegóły.',
  },
  {
    q: 'Jak wygląda rezerwacja?',
    a: 'Wyślij zapytanie przez formularz lub zadzwoń pod 722 765 101. Potwierdzimy dostępność i przedstawimy szczegółową ofertę. Rezerwacja bezpośrednia, bez prowizji pośrednika.',
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
