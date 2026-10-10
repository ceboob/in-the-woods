import { Flame, MapPin, Shield, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollAnimation';

const items = [
  {
    icon: MapPin,
    title: 'Serce Puszczy Knyszyńskiej',
    lead: 'Dom w miejscowości Konne, niedaleko Supraśla.',
    description:
      'Przed podróżą sprawdź trasę dojazdu. W Supraślu możesz odwiedzić Monaster i Muzeum Ikon; przed wyjściem potwierdź godziny otwarcia i zasady zwiedzania.',
  },
  {
    icon: Trees,
    title: 'Rezerwat Krzemienne Góry',
    lead: 'Spokojny kierunek na spacer i obserwowanie przyrody.',
    description: (
      <>
        Przed wizytą sprawdź oficjalne zasady udostępniania rezerwatu i stosuj się do oznakowania.
        Nie schodź z dozwolonych tras ani nie zbieraj roślin. Zobacz{' '}
        <Link to="/atrakcje-suprasl" className="underline underline-offset-4">
          atrakcje w okolicy
        </Link>{' '}
        oraz oficjalne informacje w{' '}
        <a
          href="https://suprasl.bialystok.lasy.gov.pl/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          informacjami Nadleśnictwa Supraśl
        </a>
        {' '}oraz z{' '}
        <a
          href="https://www.gov.pl/web/rdos-bialystok/podlaskierezerwaty--rezerwat-przyrody-krzemienne-gory"
          target="_blank"
          rel="noopener"
          aria-label="Oficjalne informacje RDOŚ o rezerwacie Krzemienne Góry (otworzy się w nowej karcie)"
          className="underline underline-offset-4"
        >
          informacją RDOŚ o rezerwacie
        </a>
        .
      </>
    ),
  },
  {
    icon: Shield,
    title: 'Dom na wyłączność',
    lead: 'Cała przestrzeń jest tylko do Waszej dyspozycji.',
    description:
      'Cały dom jest wynajmowany jednej grupie. Szczegóły wyposażenia, zasady korzystania z ogrodu i możliwość pobytu z psem potwierdź z gospodarzem przed wyjazdem.',
  },
  {
    icon: Flame,
    title: 'Balia i kominek',
    lead: 'Leśna cisza, ciepła kąpiel i wieczór przy ogniu.',
    description:
      'Po dniu w lesie można odpocząć w balii ogrodowej z funkcją jacuzzi, a wieczór spędzić przy kominku. Goście mają do dyspozycji jedną łazienkę, osobną toaletę, w pełni wyposażoną kuchnię, ekspres do kawy i bezpłatne Wi-Fi. Przy sprzyjającej pogodzie można podziwiać gwiazdy i wsłuchać się w leśną ciszę.',
  },
];

const TrustSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section aria-labelledby="highlights-title" className="px-6 md:px-12 py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 id="highlights-title" className="section-title text-center mb-8">
          Odpoczynek w okolicy Supraśla
        </h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-section ${isVisible ? 'is-revealed' : ''}`}
        >
          {items.map((item) => (
            <article key={item.title} className="card-premium p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <item.icon aria-hidden="true" className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="font-medium text-foreground">{item.lead}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
        <p className="text-center mt-8">
          <a href="#rezerwacja" className="btn-primary inline-flex">
            Przejdź do formularza zapytania
          </a>
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
