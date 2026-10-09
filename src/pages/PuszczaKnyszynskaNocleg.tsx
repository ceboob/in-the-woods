import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MIN_NIGHTLY_RATE, MIN_NIGHTS, SEASONS } from '@/lib/pricing';

const PuszczaKnyszynskaNocleg = () => (
  <SEOPageLayout
    title="Nocleg w Puszczy Knyszyńskiej | Domek w lesie wynajem"
    description="Prywatny dom na wyłączność w miejscowości Konne koło Supraśla. Sprawdź opis wyposażenia, cennik i zasady pobytu przed wysłaniem zapytania."
    breadcrumbName="Puszcza Knyszyńska"
    ogImage="https://www.suprasl.online/images/winter-cabin-golden.jpg"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Nocleg w Puszczy Knyszyńskiej — leśny domek do wynajęcia na wyłączność
      </h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        In The Woods to prywatny dom w miejscowości Konne, w otoczeniu Puszczy Knyszyńskiej i
        niedaleko Supraśla. Cały dom jest wynajmowany na wyłączność.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dom w otoczeniu Puszczy Knyszyńskiej</h2>
      <p className="text-muted-foreground leading-relaxed">
        Puszcza Knyszyńska obejmuje rozległe tereny leśne i obszary chronione. In The Woods znajduje
        się w miejscowości Konne, w otoczeniu regionu i z dala od miejskiego zgiełku.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Dom i jego otoczenie dają możliwość odpoczynku na świeżym powietrzu. Wi-Fi jest dostępne;
        jeśli chcesz zrobić przerwę od ekranów, możesz zaplanować ją samodzielnie. Przy planowaniu
        spacerów sprawdź dostępne trasy i zasady obowiązujące na terenach chronionych.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dom i udogodnienia</h2>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods to prywatny{' '}
        <Link to="/dom-w-lesie-suprasl" className="text-primary underline hover:text-primary/80">
          dom w lesie
        </Link>{' '}
        położony w okolicy rezerwatu przyrody Krzemienne Góry, w otoczeniu Puszczy Knyszyńskiej.
        Przed wizytą w rezerwacie sprawdź oficjalne zasady jego udostępniania.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Dom ma salon z kominkiem, dwie sypialnie, kuchnię, łazienkę oraz ogród z tarasem, altaną i
        miejscem na ognisko. Balia ogrodowa z funkcją jacuzzi jest dostępna jako opcjonalny dodatek.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Dom jest przeznaczony dla maksymalnie 8 osób. W trakcie pobytu goście korzystają z domu i
        ogrodu na wyłączność.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Szlaki i aktywności — odpoczynek w lesie na weekend
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        W okolicy znajdują się trasy spacerowe i rowerowe. Przed wyjściem sprawdź ich przebieg,
        dostępność oraz zasady obowiązujące na terenach chronionych.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        W sezonie możesz sprawdzić dostępność spływów kajakowych u lokalnych organizatorów.
        Aktywności na świeżym powietrzu planuj z uwzględnieniem pogody, warunków i zasad ochrony
        przyrody.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Domek z jacuzzi w lesie — dla kogo</h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom może być miejscem pobytu we dwoje, wyjazdu rodzinnego lub spotkania grupy. Wi-Fi jest
        dostępne dla gości, którzy chcą połączyć wypoczynek z pracą zdalną.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Możliwość pobytu z psem i ewentualne opłaty potwierdź z gospodarzem. Wybieraj wyłącznie
        trasy, na których obecność psa jest dozwolona.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Domek na sylwestra i zimowy weekend w lesie</h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom jest dostępny przez cały rok. Zimą możesz odpocząć przy kominku, a przed planowaniem
        korzystania z balii potwierdzić jej dostępność i warunki.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Lokalizacja i dojazd</h2>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods znajduje się w miejscowości Konne, niedaleko Supraśla. Szczegółowy adres i
        wskazówki dojazdu otrzymasz przed pobytem.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Rezerwacja domku w lesie w Puszczy Knyszyńskiej
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Cena zaczyna się od {MIN_NIGHTLY_RATE} zł za noc i zależy od terminu oraz liczby gości.
        Balia ogrodowa z funkcją jacuzzi jest opcjonalna i kosztuje {GARDEN_TUB_PRICE} zł za pobyt.
        Minimalna długość pobytu wynosi {MIN_NIGHTS} noce, a w sezonie wysokim{' '}
        {Math.max(...SEASONS.map((season) => season.minNights))} noce. Wyślij zapytanie, aby
        potwierdzić dostępność i otrzymać wycenę; formularz nie potwierdza rezerwacji ani nie
        oznacza płatności.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Sprawdź również{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegi w Supraślu
        </Link>
        , zaplanuj{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          weekend w Supraślu
        </Link>
        , odkryj{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcje Supraśla
        </Link>{' '}
        lub{' '}
        <Link
          to="/domek-z-jacuzzi-podlasie"
          className="text-primary underline hover:text-primary/80"
        >
          domek z jacuzzi Podlasie
        </Link>
        .
      </p>

      <div className="bg-secondary p-8 text-center space-y-4 mt-12">
        <h3 className="font-heading text-2xl font-light">Zapytaj o pobyt w leśnym domu</h3>
        <p className="text-muted-foreground">Prywatny dom na wyłączność. Kominek. Balia ogrodowa z funkcją jacuzzi. Cisza.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+48722765101" className="btn-primary">
            Zadzwoń: 722 765 101
          </a>
          <Link to="/#rezerwacja" className="btn-outline">
            Wyślij zapytanie o pobyt
          </Link>
        </div>
      </div>
    </article>
  </SEOPageLayout>
);

export default PuszczaKnyszynskaNocleg;
