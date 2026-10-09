import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';

const WieczorPanienskiSuprasl = () => (
  <SEOPageLayout
    title="Wieczór panieński koło Supraśla – co ustalić przed wyjazdem"
    description="Planujesz spotkanie w okolicy Supraśla? Przed rezerwacją ustal z gospodarzem zasady pobytu grupowego, liczbę gości i dostępność udogodnień."
    breadcrumbName="Wieczór panieński Supraśl"
    ogImage="https://www.suprasl.online/images/kitchen-dining.jpg"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Spotkanie w okolicy Supraśla — informacje przed planowaniem
      </h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        Jeśli rozważasz spotkanie grupowe w In The Woods, przed wysłaniem zapytania ustal z
        gospodarzem, czy taki pobyt jest możliwy. Potwierdź maksymalną liczbę gości, zasady dotyczące
        odwiedzających i ciszy nocnej oraz dostępność dodatkowych udogodnień.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Co ustalić przed spotkaniem?</h2>
      <p className="text-muted-foreground leading-relaxed">
        Zasady dla grup i wydarzeń mogą różnić się od standardowego pobytu. Nie zakładaj, że
        organizacja imprezy, dodatkowi goście lub głośna muzyka są dozwolone.
      </p>
      <ul className="text-muted-foreground space-y-2">
        <li>Potwierdź, czy obiekt przyjmuje grupy i jakie są zasady wydarzeń.</li>
        <li>Ustal liczbę osób, godziny ciszy nocnej i zasady zapraszania gości.</li>
        <li>Zapytaj o dostępność balii ogrodowej z funkcją jacuzzi oraz jej koszt.</li>
        <li>Sprawdź zasady korzystania z kominka, ogniska i przestrzeni na zewnątrz.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Pomysły na spokojny pobyt
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Przed przyjazdem:</strong> Uzgodnij szczegóły pobytu i sprawdź lokalne opcje
        gastronomiczne. Informacje o restauracjach znajdziesz w przewodniku po{' '}
        <Link
          to="/blog/restauracje-suprasl"
          className="text-primary underline hover:text-primary/80"
        >
          restauracjach Supraśla
        </Link>
        .
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Podczas pobytu:</strong> Korzystaj wyłącznie z udogodnień, których dostępność i zasady
        zostały potwierdzone przez gospodarza. Szanuj sąsiadów i przestrzegaj ustalonych godzin ciszy.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Przerwa od ekranów:</strong> Wi-Fi jest dostępne. Jeśli chcesz spędzić czas offline,
        zaplanuj dobrowolną przerwę według własnych potrzeb.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Na zewnątrz:</strong> Przed spacerem sprawdź dostępność tras i zasady obowiązujące na
        terenach chronionych.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Zasady pobytu grupowego
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Przed planowaniem innego spotkania skontaktuj się z gospodarzem, aby potwierdzić, czy jest
        ono możliwe i jakie warunki obowiązują.
      </p>
      <ul className="text-muted-foreground space-y-2">
        <li>Jaka liczba osób może przebywać w domu?</li>
        <li>Czy wydarzenie i dodatkowi goście są dozwoleni?</li>
        <li>Jakie zasady dotyczą hałasu, ogniska i udogodnień?</li>
        <li>Jakie opłaty i warunki obowiązują w wybranym terminie?</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Dom jest wynajmowany na wyłączność, ale pobyt nadal podlega zasadom obiektu. Nie dokonuj
        rezerwacji dla wydarzenia, dopóki gospodarz nie potwierdzi jego warunków.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Informacje o domu</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>🏡 Cały <strong>dom na wyłączność</strong> (do 8 osób)</li>
        <li>🛁 Balia ogrodowa z funkcją jacuzzi jako opcjonalny dodatek</li>
        <li>🔥 Klimatyczny <strong>kominek</strong> w salonie</li>
        <li>🌲 Informacje o ogrodzie i zasadach korzystania potwierdź przed przyjazdem</li>
        <li>🍽️ W pełni wyposażona kuchnia z płytą kaflową</li>
        <li>📶 Wi-Fi jest dostępne; wymagania dotyczące łącza potwierdź przed pobytem</li>
        <li>🐕 Możliwość pobytu z psem i ewentualne opłaty potwierdź z gospodarzem</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Atrakcje w okolicy</h2>
      <p className="text-muted-foreground leading-relaxed">
        Podczas pobytu możesz zwiedzić{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcje Supraśla
        </Link>
        . Przed wyjściem sprawdź godziny otwarcia. Możesz też sprawdzić{' '}
        <Link to="/blog/kajaki-suprasl" className="text-primary underline hover:text-primary/80">
          spływ kajakowy rzeką Supraśl
        </Link>{' '}
        oraz warunki spływu u organizatora. Zobacz także{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          propozycje weekendu w Supraślu
        </Link>{' '}
        .
      </p>

      <div className="bg-secondary p-8 text-center space-y-4 mt-12">
        <h3 className="font-heading text-2xl font-light">Zapytaj o pobyt grupowy</h3>
        <p className="text-muted-foreground">
          Zadzwoń lub napisz, aby potwierdzić zasady pobytu grupowego. Wysłanie formularza nie potwierdza rezerwacji ani nie oznacza płatności.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+48722765101" className="btn-primary">
            Zadzwoń: 722 765 101
          </a>
          <a href="mailto:tutinthewood@gmail.com" className="btn-outline">
            Napisz do nas
          </a>
        </div>
      </div>
    </article>
  </SEOPageLayout>
);

export default WieczorPanienskiSuprasl;
