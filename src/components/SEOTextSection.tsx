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
          <h2 className="section-title">Nocleg pod Supraślem w&nbsp;pigułce</h2>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            In The Woods to dom z&nbsp;bali w&nbsp;Konnem koło Supraśla, wynajmowany w&nbsp;całości
            jednej ekipie. Macie kominek, kuchnię, taras, ogród i&nbsp;Starlinka. Balia
            z&nbsp;hydromasażem to dodatek za 250&nbsp;zł za pobyt. Szczegóły znajdziecie na stronie
            o{' '}
            <Link
              to="/noclegi-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              noclegach w&nbsp;Supraślu
            </Link>
            .
          </p>

          <h3 className="font-heading text-xl text-foreground">Zaplanuj czas w&nbsp;Supraślu</h3>
          <p>
            Monaster, Muzeum Ikon, kajaki, rower i&nbsp;babka ziemniaczana: w&nbsp;Supraślu
            i&nbsp;okolicy nudzić się nie da. Zajrzyjcie do naszego przewodnika, w&nbsp;którym
            zebraliśmy{' '}
            <Link
              to="/atrakcje-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              atrakcje Supraśla
            </Link>
            .
          </p>

          <h3 className="font-heading text-xl text-foreground">Zanim napiszecie</h3>
          <p>
            Rzućcie okiem na cennik i&nbsp;minimalną długość pobytu (zwykle 2&nbsp;noce,
            w&nbsp;wakacje 3). Pies jedzie gratis, więc tu nie ma czego doliczać. Formularz to tylko
            pytanie o&nbsp;termin: niczego nie rezerwuje i&nbsp;niczego nie pobiera.
          </p>

          <p>
            Gotowe plany macie w&nbsp;przewodnikach o{' '}
            <Link
              to="/weekend-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              weekendzie w&nbsp;Supraślu
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
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOTextSection;
