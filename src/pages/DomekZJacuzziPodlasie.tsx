import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';

const DomekZJacuzziPodlasie = () => (
  <SEOPageLayout
    title="Dom na wyłączność z balią ogrodową koło Supraśla"
    description="In The Woods to dom na wyłączność w miejscowości Konne koło Supraśla. Balia ogrodowa z funkcją jacuzzi jest opcjonalnym dodatkiem; sprawdź jej dostępność i zasady korzystania."
    breadcrumbName="Domek z jacuzzi Podlasie"
    ogImage="https://www.suprasl.online/images/jacuzzi-night.jpg"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Dom na wyłączność z opcjonalną balią ogrodową
      </h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        In The Woods to dom na wyłączność w miejscowości Konne, w okolicy Supraśla i Puszczy
        Knyszyńskiej. Balia ogrodowa z funkcją jacuzzi jest opcjonalnym dodatkiem; przed pobytem
        potwierdź jej dostępność i warunki korzystania.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Balia ogrodowa z funkcją jacuzzi
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Przed wysłaniem zapytania ustal z gospodarzem, czy balia będzie dostępna w wybranym terminie
        i jakie zasady korzystania obowiązują.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Zapoznaj się z instrukcją obsługi i zasadami bezpieczeństwa przed skorzystaniem z balii.
        Warunki pogodowe i dostępność mogą wpływać na możliwość korzystania z niej.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dom w okolicy Puszczy Knyszyńskiej</h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom znajduje się w miejscowości Konne, niedaleko Supraśla. Wi-Fi jest dostępne, a przerwę
        od ekranów możesz zaplanować dobrowolnie.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Wybierając trasę w regionie, sprawdź aktualne zasady udostępniania terenów chronionych i
        warunki na drodze. Nie zakładaj, że można wejść do rezerwatu bez ograniczeń.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Udogodnienia w domu</h2>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods to nie tylko <strong>domek z jacuzzi</strong>. To kompletny{' '}
        <strong>dom na wyłączność</strong> z kominkiem, sypialniami i kuchnią. Maksymalna liczba
        gości wynosi 8 osób. Szczegóły wyposażenia sprawdź w opisie obiektu.
      </p>
      <ul className="text-muted-foreground space-y-2">
        <li>🛁 Balia ogrodowa z funkcją jacuzzi jako opcjonalny dodatek</li>
        <li>🔥 Klimatyczny <strong>kominek</strong> w przestronnym salonie</li>
        <li>🏡 Cały dom wynajmowany jest jednej grupie</li>
        <li>🌲 Dom w miejscowości Konne koło Supraśla</li>
        <li>🐕 Możliwość pobytu z psem i ewentualne opłaty potwierdź z gospodarzem</li>
        <li>🔥 Zasady korzystania z miejsca na ognisko potwierdź przed przyjazdem</li>
        <li>📶 Wi-Fi jest dostępne; wymagania dotyczące łącza potwierdź przed pobytem</li>
        <li>❄️ Sprawdź szczegóły wyposażenia przed wyjazdem</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Pobyt o różnych porach roku</h2>
      <p className="text-muted-foreground leading-relaxed">
        Atrakcje i warunki pobytu różnią się zależnie od pory roku. Przed planowaniem wycieczki
        sprawdź pogodę, zasady zbierania grzybów i dostępność aktywności. Możesz też odwiedzić{' '}
        <Link
          to="/blog/szlaki-piesze-rowerowe-suprasl"
          className="text-primary underline hover:text-primary/80"
        >
          przewodnik po trasach
        </Link>
        . Przed wyjściem sprawdź warunki na wybranej trasie i zasady korzystania z terenu.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Przed pobytem sprawdź cennik, zasady i dostępność dodatków. Zobacz również{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegi Supraśl
        </Link>
        ,{' '}
        <Link to="/dom-w-lesie-suprasl" className="text-primary underline hover:text-primary/80">
          dom w lesie Supraśl
        </Link>{' '}
        i{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcje Supraśla
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Co można zaplanować w okolicy?</h2>
      <p className="text-muted-foreground leading-relaxed">
        W Supraślu możesz odwiedzić Monaster i Muzeum Ikon; przed wizytą sprawdź aktualne godziny.
        W okolicy możesz rozważyć{' '}
        <Link
          to="/blog/kruszyniany-tatarska-wies"
          className="text-primary underline hover:text-primary/80"
        >
          tatarskie Kruszyniany
        </Link>
        , Arboretum Kopna Góra lub sprawdzić dostępność{' '}
        <Link to="/blog/kajaki-suprasl" className="text-primary underline hover:text-primary/80">
          spływów kajakowych rzeką Supraśl
        </Link>
        . Przed wyjazdem sprawdź trasę, warunki dojazdu i zasady korzystania z atrakcji.
      </p>

      <div className="bg-secondary p-8 text-center space-y-4 mt-12">
        <h3 className="font-heading text-2xl font-light">Zapytaj o pobyt</h3>
        <p className="text-muted-foreground">
          Wyślij zapytanie o pobyt. Odpowiemy z informacją o dostępności i cenie; formularz nie potwierdza rezerwacji ani nie oznacza płatności.
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

export default DomekZJacuzziPodlasie;
