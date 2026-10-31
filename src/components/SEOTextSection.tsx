import { useScrollReveal } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const SEOTextSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="text-center mb-12 space-y-4">
          <h2 className="section-title">Pobyt w okolicy Supraśla</h2>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            In The Woods to dom wynajmowany na wyłączność w miejscowości Konne koło Supraśla. Na
            miejscu dostępne są m.in. kominek, kuchnia, taras i Wi-Fi. Balia ogrodowa z funkcją
            jacuzzi jest opcjonalnym dodatkiem; jej dostępność potwierdź przed pobytem. Więcej
            informacji znajdziesz na stronie{' '}
            <Link
              to="/noclegi-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              noclegu i zasad pobytu
            </Link>
            .
          </p>

          <h3 className="font-heading text-xl text-foreground">Zaplanuj czas w Supraślu</h3>
          <p>
            W Supraślu i okolicy możesz odwiedzić Monaster, Muzeum Ikon, wybrać spacer lub rozważyć
            aktywności sezonowe. Przed wyjściem sprawdź godziny otwarcia, warunki pogodowe i zasady
            dostępu do tras. Zobacz aktualne{' '}
            <Link
              to="/atrakcje-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              informacje o atrakcjach
            </Link>
            .
          </p>

          <h3 className="font-heading text-xl text-foreground">Przed wysłaniem zapytania</h3>
          <p>
            Sprawdź cennik, minimalną długość pobytu i wyposażenie. Jeśli planujesz przyjazd z psem,
            potwierdź możliwość pobytu, opłaty i warunki dotyczące ogrodzenia z gospodarzem.
            Wysłanie formularza jest zapytaniem — nie potwierdza rezerwacji ani nie oznacza płatności.
          </p>

          <p>
            Inspiracji do ułożenia planu szukaj w przewodnikach o{' '}
            <Link
              to="/weekend-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              weekendzie w Supraślu
            </Link>
            ,{' '}
            <Link
              to="/blog/szlaki-piesze-rowerowe-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              trasach spacerowych
            </Link>{' '}
            i{' '}
            <Link
              to="/blog/kajaki-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              spływach kajakowych
            </Link>
            . Szczegóły każdej aktywności potwierdź u jej organizatora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOTextSection;
