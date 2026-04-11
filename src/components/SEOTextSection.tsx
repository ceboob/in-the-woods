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
          <h2 className="section-title">Noclegi Supraśl – leśny domek do wynajęcia na Podlasiu</h2>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Szukasz <strong>noclegu w Supraślu</strong>? In The Woods – noclegi Supraśl to prywatny{' '}
            <strong>dom w lesie z jacuzzi</strong>, położony w sercu Puszczy Knyszyńskiej, zaledwie
            10 minut jazdy od centrum Supraśla i 25 minut od Białegostoku. To wyjątkowa alternatywa
            dla hotelu —{' '}
            <Link
              to="/domek-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              domek Supraśl
            </Link>{' '}
            na wyłączność, otoczony lasem i ciszą natury, z ogrodzonym terenem, kominkiem i ruską
            banią w ogrodzie.
          </p>

          <h3 className="font-heading text-xl text-foreground">Leśny domek do wynajęcia — dom z bali na wyłączność</h3>
          <p>
            Nasz <strong>dom z bali wynajem</strong> oferuje klimatyczny kominek z prawdziwym ogniem, w pełni
            wyposażoną kuchnię z elegancką płytą kaflową, dwie sypialnie na poddaszu z drewnianymi belkami,
            nowoczesną łazienkę, ogród z altaną i taras z widokiem na las. To leśny domek do wynajęcia
            z duszą — domek z kominkiem w lesie, w którym poczujesz prawdziwe oderwanie od cywilizacji.
            Goście mogą skorzystać z prywatnej ruskiej bani z balią —{' '}
            <strong>domek z jacuzzi w lesie</strong>, idealny po dniu na szlakach
            <Link
              to="/puszcza-knyszynska-nocleg"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              {' '}
              Puszczy Knyszyńskiej
            </Link>
            . To jeden z nielicznych <strong>noclegów w Puszczy Knyszyńskiej</strong> łączących
            komfort z prawdziwą bliskością natury — 300 metrów od rezerwatu Krzemienne Góry.
          </p>

          <h3 className="font-heading text-xl text-foreground">Domek na odludziu — oderwanie od cywilizacji</h3>
          <p>
            In The Woods to <strong>domek na odludziu podlaskie</strong> w najczystszej formie.
            Gruntowa droga przez las, brak zasięgu telefonii komórkowej i ogrodzony teren w sercu
            puszczy. Jeśli szukasz <strong>domku w lesie wynajem</strong> z dala od zgiełku miasta,
            to Twoje miejsce. Slow travel Polska, detoks cyfrowy w lesie i spokojny
            wypoczynek w naturze — to nie hasła reklamowe, to codzienna rzeczywistość w Konne.
          </p>

          <h3 className="font-heading text-xl text-foreground">Domek z jacuzzi i balią w lesie</h3>
          <p>
            Szukasz{' '}
            <Link
              to="/domek-z-jacuzzi-podlasie"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              domku z jacuzzi na Podlasiu
            </Link>
            ? Nasza ruska bania z balią z gorącą wodą to wyjątkowy element oferty. <strong>Domek z balią
            w lesie</strong>, gdzie gorąca woda pod gwiazdami w otoczeniu Puszczy Knyszyńskiej —
            to rytuał relaksu, który goście wspominają najczęściej. Bania mieści 4–6 osób,
            podgrzewana jest naturalnie drewnem i działa przez cały rok.
          </p>

          <h3 className="font-heading text-xl text-foreground">Domek na sylwestra, walentynki i majówkę w lesie</h3>
          <p>
            Szukasz <strong>domku na sylwestra w lesie</strong>? A może klimatyczny{' '}
            <strong>domek na walentynki</strong> lub <strong>majówkę w lesie</strong>?
            In The Woods to domek z kominkiem idealny na każdą okazję. Romantyczny pobyt w lesie
            wynajem — kominek, balia pod gwiazdami i cisza puszczy. Najlepsze terminy rezerwowane
            z wyprzedzeniem — sprawdź dostępność.
          </p>

          <h3 className="font-heading text-xl text-foreground">Dom w lesie Puszcza Knyszyńska</h3>
          <p>
            In The Woods to autentyczny{' '}
            <Link
              to="/dom-w-lesie-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              dom w lesie
            </Link>{' '}
            — drewniany dom z bala w leśnej osadzie Konne, otoczony stuletnią puszczą. Do domu
            prowadzi gruntowa droga przez las, a ogrodzony teren zapewnia prywatność i
            bezpieczeństwo. Wnętrze zachwyca autentycznością: rzeźbione drewniane szafki, ceglany
            kominek, sosnowe belki i ceramika z Podlasia. To <strong>domek w lesie Supraśl</strong>{' '}
            z duszą — <strong>dom na wyłączność las</strong>, idealny na{' '}
            <Link
              to="/noclegi-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              nocleg w Supraślu
            </Link>{' '}
            z dala od zgiełku.
          </p>

          <h3 className="font-heading text-xl text-foreground">Weekend w Supraślu</h3>
          <p>
            In The Woods to doskonały wybór na{' '}
            <Link
              to="/weekend-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              weekend w Supraślu
            </Link>{' '}
            — zarówno romantyczny wypad we dwoje, jak i dłuższy pobyt z rodziną czy przyjaciółmi.
            Organizujemy również{' '}
            <Link
              to="/wieczor-panienski-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              wieczory panieńskie
            </Link>{' '}
            i imprezy okolicznościowe. Odkryj
            <Link
              to="/atrakcje-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              {' '}
              atrakcje Supraśla
            </Link>
            ,
            <Link
              to="/blog/szlaki-piesze-rowerowe-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              {' '}
              szlaki piesze i rowerowe
            </Link>
            ,
            <Link
              to="/blog/kajaki-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              {' '}
              spływ kajakowy rzeką Supraśl
            </Link>{' '}
            oraz
            <Link
              to="/blog/restauracje-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              {' '}
              najlepsze restauracje w Supraślu
            </Link>
            .
          </p>

          <h3 className="font-heading text-xl text-foreground">Domki letniskowe wynajem — Puszcza Knyszyńska</h3>
          <p>
            Szukasz sprawdzonego{' '}
            <Link
              to="/noclegi-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              noclegu w Supraślu
            </Link>
            ? In The Woods to nie typowe domki letniskowe wynajem — to dom z bali z charakterem,
            w którym każdy detal ma znaczenie. Sprawdź nasz{' '}
            <Link
              to="/blog/weekend-suprasl-plan"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              plan na weekend w Supraślu
            </Link>
            , dowiedz się{' '}
            <Link
              to="/blog/co-robic-suprasl"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              co robić w Supraślu
            </Link>
            , odkryj{' '}
            <Link
              to="/blog/suprasl-atrakcje-uzdrowisko"
              className="text-primary underline hover:text-primary/80 transition-colors"
            >
              Supraśl jako uzdrowisko
            </Link>{' '}
            i poznaj{' '}
            <Link
              to="/blog/kruszyniany-tatarska-wies"
              className="text-primary underline hover:text-primary/80 transition-colors"
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
