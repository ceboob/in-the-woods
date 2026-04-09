import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const SEOTextSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-12 space-y-4">
          <h2 className="section-title">Noclegi Supraśl – wyjątkowy dom w lesie</h2>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Szukasz <strong>noclegu w Supraślu</strong>? In The Woods – noclegi Supraśl to prywatny{' '}
            <strong>dom w lesie z jacuzzi</strong>, położony w sercu Puszczy Knyszyńskiej, zaledwie
            10 minut jazdy od centrum Supraśla i 25 minut od Białegostoku. To wyjątkowa alternatywa
            dla hotelu —{' '}
            <Link
              to="/domek-suprasl"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              domek Supraśl
            </Link>{' '}
            na wyłączność, otoczony lasem i ciszą natury, z ogrodzonym terenem, kominkiem i ruską
            banią w ogrodzie.
          </p>

          <h3 className="font-serif text-xl text-foreground">Noclegi Supraśl – dom na wynajem</h3>
          <p>
            Nasz <strong>dom Supraśl</strong> oferuje kominek z prawdziwym ogniem, w pełni
            wyposażoną kuchnię z ceglanym piecem, dwie sypialnie na poddaszu z drewnianymi belkami,
            nowoczesną łazienkę, ogród z altaną i taras z widokiem na las. Goście mogą skorzystać z
            prywatnej ruskiej bani z balią — drewnianej beczki z gorącą wodą podgrzewaną na drewno,
            idealnej po dniu spędzonym na szlakach
            <Link
              to="/puszcza-knyszynska-nocleg"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              {' '}
              Puszczy Knyszyńskiej
            </Link>
            . To jeden z nielicznych <strong>noclegów w Puszczy Knyszyńskiej</strong> łączących
            komfort z prawdziwą bliskością natury — 300 metrów od Galerii Leśnej Powstania
            Styczniowego i rezerwatu Krzemienne Góry.
          </p>

          <h3 className="font-serif text-xl text-foreground">Domek z jacuzzi Podlasie</h3>
          <p>
            Szukasz{' '}
            <Link
              to="/domek-z-jacuzzi-podlasie"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              domku z jacuzzi na Podlasiu
            </Link>
            ? Nasza ruska bania z balią z gorącą wodą to wyjątkowy element oferty. Gorąca woda pod
            gwiazdami, w otoczeniu Puszczy Knyszyńskiej — to rytuał relaksu, który goście wspominają
            najczęściej. Bania mieści 4–6 osób, podgrzewana jest naturalnie drewnem i działa przez
            cały rok. Obiekt znajduje się przy rezerwacie przyrody Krzemienne Góry — w otoczeniu
            starych drzew i leśnych ścieżek.
          </p>

          <h3 className="font-serif text-xl text-foreground">Dom w lesie Puszcza Knyszyńska</h3>
          <p>
            In The Woods to autentyczny{' '}
            <Link
              to="/dom-w-lesie-suprasl"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              dom w lesie
            </Link>{' '}
            — drewniany dom z bala w leśnej osadzie Konne, otoczony stuletnią puszczą. Do domu
            prowadzi gruntowa droga przez las, a ogrodzony teren zapewnia prywatność i
            bezpieczeństwo. Wnętrze zachwyca autentycznością: rzeźbione drewniane szafki, ceglany
            kominek, sossnowe belki i ceramika z Podlasia. To nie jest stylizowany "domek" — to
            prawdziwe miejsce z duszą, idealne na{' '}
            <Link
              to="/noclegi-suprasl"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              nocleg w Supraślu
            </Link>{' '}
            z dala od zgiełku.
          </p>

          <h3 className="font-serif text-xl text-foreground">Weekend w Supraślu</h3>
          <p>
            In The Woods to doskonały wybór na{' '}
            <Link
              to="/weekend-suprasl"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              weekend w Supraślu
            </Link>{' '}
            — zarówno romantyczny wypad we dwoje, jak i dłuższy pobyt z rodziną czy przyjaciółmi.
            Organizujemy również{' '}
            <Link
              to="/wieczor-panienski-suprasl"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              wieczory panieńskie
            </Link>{' '}
            i imprezy okolicznościowe. Odkryj
            <Link
              to="/atrakcje-suprasl"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              {' '}
              atrakcje Supraśla
            </Link>
            ,
            <Link
              to="/blog/szlaki-piesze-rowerowe-suprasl"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              {' '}
              szlaki piesze i rowerowe
            </Link>
            ,
            <Link
              to="/blog/kajaki-suprasl"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              {' '}
              spływ kajakowy rzeką Supraśl
            </Link>{' '}
            oraz
            <Link
              to="/blog/restauracje-suprasl"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              {' '}
              najlepsze restauracje w Supraślu
            </Link>
            .
          </p>

          <h3 className="font-serif text-xl text-foreground">Sprawdź noclegi w Supraślu</h3>
          <p>
            Szukasz sprawdzonego{' '}
            <Link
              to="/noclegi-suprasl"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              noclegu w Supraślu
            </Link>
            ? Sprawdź nasz{' '}
            <Link
              to="/blog/weekend-suprasl-plan"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              plan na weekend w Supraślu
            </Link>
            , dowiedz się{' '}
            <Link
              to="/blog/co-robic-suprasl"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              co robić w Supraślu
            </Link>
            , odkryj{' '}
            <Link
              to="/blog/suprasl-atrakcje-uzdrowisko"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              Supraśl jako uzdrowisko
            </Link>{' '}
            i poznaj{' '}
            <Link
              to="/blog/kruszyniany-tatarska-wies"
              className="text-teal underline hover:text-teal/70 transition-colors"
            >
              tatarską wieś Kruszyniany
            </Link>{' '}
            — jedną z najciekawszych atrakcji Podlasia, zaledwie godzinę jazdy od In The Woods.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOTextSection;
