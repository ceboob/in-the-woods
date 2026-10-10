import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MIN_NIGHTLY_RATE } from '@/lib/pricing';

const DomekSuprasl = () => (
  <SEOPageLayout
    title="Domek Supraśl — leśny domek do wynajęcia | In The Woods"
    description="Prywatny dom w otoczeniu Puszczy Knyszyńskiej, niedaleko Supraśla. Kominek, ogród i opcjonalna balia ogrodowa z funkcją jacuzzi. Sprawdź szczegóły i wyślij zapytanie o pobyt."
    breadcrumbName="Domek Supraśl"
    ogImage="https://www.suprasl.online/images/living-fireplace.jpg"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Domek Supraśl — leśny domek na wyłączność
      </h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        Szukasz <strong>domku w Supraślu</strong> na wyłączność? In The Woods to drewniany{' '}
        <strong>dom z bali</strong> w miejscowości Konne, niedaleko Supraśla i w otoczeniu
        Puszczy Knyszyńskiej. To prywatna przestrzeń do odpoczynku w naturze.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Dom w otoczeniu Puszczy Knyszyńskiej
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Supraśl to uzdrowiskowe miasteczko w województwie podlaskim, otoczone Puszczą Knyszyńską.
        Dom znajduje się w miejscowości Konne, niedaleko Supraśla. To miejsce na spokojny pobyt
        z dala od miejskiego zgiełku.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods to <strong>dom na wyłączność</strong>, który wynajmujesz w całości.
        Żadnych sąsiednich pokoi ani współdzielonej przestrzeni z innymi gośćmi — dom i ogród są do
        Twojej dyspozycji.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Domek z kominkiem i jacuzzi w lesie</h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom mieści komfortowo do 8 osób. Na parterze przestronny salon z klimatycznym kominkiem, w
        pełni wyposażona kuchnia z płytą kaflową oraz łazienka. Na piętrze — dwie sypialnie z
        dużymi łóżkami i widokiem na las.
      </p>
      <ul className="text-muted-foreground space-y-2">
        <li>🏠 Cały <strong>dom na wyłączność</strong> (do 8 osób)</li>
        <li>🔥 Klimatyczny kominek w salonie</li>
        <li>🛁 Opcjonalna balia ogrodowa z funkcją jacuzzi</li>
        <li>🌳 Ogród, taras i miejsce na ognisko</li>
        <li>🐕 Możliwość pobytu z psem i ewentualne opłaty potwierdź z gospodarzem</li>
        <li>📶 Wi-Fi jest dostępne; wymagania dotyczące łącza potwierdź przed pobytem</li>
        <li>❄️ Klimatyzacja w sezonie letnim</li>
        <li>🅿️ Bezpłatny parking</li>
      </ul>

      <p className="text-muted-foreground leading-relaxed">
        Wieczorem możesz odpocząć przy kominku. Balia ogrodowa z funkcją jacuzzi jest opcjonalnym
        dodatkiem do pobytu; szczegóły korzystania i dostępność potwierdź przed przyjazdem.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Dla kogo jest ten leśny domek do wynajęcia
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom może być bazą podczas wyjazdu we dwoje, pobytu rodzinnego lub spotkania grupy.{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          Pomysły na weekend w Supraślu
        </Link>{' '}
        pomogą zaplanować czas.
        Wi-Fi jest dostępne dla osób, które chcą połączyć pobyt z pracą zdalną; przerwa od ekranów
        pozostaje indywidualnym wyborem.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Możliwość pobytu z psem i ewentualne opłaty potwierdź z gospodarzem. Wybierając trasę,
        sprawdź zasady dostępu dla zwierząt. Nie zakładaj, że
        można wprowadzać zwierzęta na obszary chronione.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Dostępność w różnych terminach
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom można wynająć o różnych porach roku, w zależności od dostępności. Przed wyjazdem
        sprawdź pogodę, warunki dojazdu i aktualne zasady korzystania z atrakcji w okolicy.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Cennik i rezerwacja</h2>
      <p className="text-muted-foreground leading-relaxed">
        Ceny zaczynają się od {MIN_NIGHTLY_RATE} zł za noc, ale zależą od terminu i liczby gości.
        Balia ogrodowa z funkcją jacuzzi jest opcjonalna i kosztuje {GARDEN_TUB_PRICE} zł za pobyt.
        Wyślij zapytanie, aby otrzymać wycenę i potwierdzić dostępność; formularz nie potwierdza
        rezerwacji ani nie oznacza płatności.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Odkryj też nasze inne przewodniki:{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegi Supraśl
        </Link>
        ,{' '}
        <Link to="/dom-w-lesie-suprasl" className="text-primary underline hover:text-primary/80">
          dom w lesie Supraśl
        </Link>
        ,{' '}
        <Link
          to="/domek-z-jacuzzi-podlasie"
          className="text-primary underline hover:text-primary/80"
        >
          domek z jacuzzi Podlasie
        </Link>{' '}
        oraz{' '}
        <Link
          to="/puszcza-knyszynska-nocleg"
          className="text-primary underline hover:text-primary/80"
        >
          nocleg w Puszczy Knyszyńskiej
        </Link>
        .
      </p>

      <div className="bg-secondary p-8 text-center space-y-4 mt-12">
        <h3 className="font-heading text-2xl font-light">Zapytaj o pobyt w domku w lesie</h3>
        <p className="text-muted-foreground">
          Wyślij zapytanie o dostępność i cenę. Wysłanie formularza nie potwierdza rezerwacji ani nie oznacza płatności.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+48722765101" className="btn-primary">
            Zadzwoń: 722 765 101
          </a>
          <Link to="/#rezerwacja" className="btn-outline">
            Przejdź do formularza zapytania
          </Link>
        </div>
      </div>
    </article>
  </SEOPageLayout>
);

export default DomekSuprasl;
