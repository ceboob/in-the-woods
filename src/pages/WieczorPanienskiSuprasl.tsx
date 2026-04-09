import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';

const WieczorPanienskiSuprasl = () => (
  <SEOPageLayout
    title="Wieczór panieński Supraśl – impreza w lesie z jacuzzi | In The Woods"
    description="Wieczór panieński w Supraślu — prywatny dom w lesie z jacuzzi, kominkiem i ogrodem. Organizuj niezapomniane imprezy okolicznościowe w Puszczy Knyszyńskiej."
    breadcrumbName="Wieczór panieński Supraśl"
    ogImage="https://www.suprasl.online/images/kitchen-dining.jpg"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Wieczór panieński Supraśl – niezapomniana impreza w lesie
      </h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        Szukasz wyjątkowego miejsca na <strong>wieczór panieński w Supraślu</strong>? Zapomnij o
        zatłoczonych klubach i hotelowych salach. In The Woods to prywatny dom w Puszczy
        Knyszyńskiej z jacuzzi, kominkiem i ogrodem — idealne miejsce na niezapomniane świętowanie w
        gronie najbliższych przyjaciółek.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dlaczego wieczór panieński w lesie</h2>
      <p className="text-muted-foreground leading-relaxed">
        Trend na <strong>wieczory panieńskie w naturze</strong> rośnie z roku na rok. Coraz więcej
        pań przyszłych wybiera intymną atmosferę leśnego domu zamiast głośnych imprez w mieście. I
        trudno się dziwić — połączenie prywatności, natury i komfortu tworzy doświadczenie, które
        pamięta się na lata.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods oferuje to, czego nie znajdziesz w żadnym innym miejscu w okolicach Supraśla:
        cały dom na wyłączność, gorącą balię pod gwiazdami, kominek w salonie, ognisko w ogrodzie i
        absolutną prywatność otoczoną Puszczą Knyszyńską.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Scenariusz idealnego wieczoru panieńskiego
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Popołudnie:</strong> Przyjazd i rozlokowanie się w domu. Wspólne gotowanie w pełni
        wyposażonej kuchni lub zamówienie cateringu z lokalnych{' '}
        <Link
          to="/blog/restauracje-suprasl"
          className="text-teal underline hover:text-teal/70"
        >
          restauracji Supraśla
        </Link>
        . Degustacja prosecco na tarasie z widokiem na las.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Wieczór:</strong> Rozpalenie ruskiej bani — tradycyjnej łaźni parowej z Podlasia.
        Relaks w gorącej balii pod gwiazdami przy muzyce i rozmowach. Potem ognisko w ogrodzie z
        piankami marshmallow i wspomnieniami.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Noc:</strong> Kominek w salonie, gry planszowe, filmy na projektorze lub po prostu
        rozmowy do białego rana w ciszy Puszczy Knyszyńskiej.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Rano:</strong> Poranna kawa na tarasie, spacer leśnymi ścieżkami rezerwatu
        Krzemienne Góry i wspólne śniadanie w kuchni pełnej słońca.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Wieczory kawalerskie i imprezy okolicznościowe
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods to doskonałe miejsce nie tylko na wieczory panieńskie. Organizujemy również:
      </p>
      <ul className="text-muted-foreground space-y-2">
        <li>
          🎉 <strong>Wieczory kawalerskie</strong> — balia, ognisko, grill i las na wyłączność
        </li>
        <li>
          🎂 <strong>Urodziny i rocznice</strong> — kameralna atmosfera w otoczeniu natury
        </li>
        <li>
          👫 <strong>Spotkania grupowe</strong> — do 8 osób w komfortowych warunkach
        </li>
        <li>
          💼 <strong>Integracje firmowe</strong> — team building w lesie z kominkiem i balią
        </li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Każda impreza w In The Woods to wydarzenie na wyłączność — żadnych innych gości, żadnych
        ograniczeń ciszy nocnej jak w hotelu. Tylko Wy, las i wolność.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Co oferujemy</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>🏡 Cały dom na wyłączność (do 8 osób, 3 sypialnie)</li>
        <li>🛁 Prywatna ruska bania z balią z gorącą wodą</li>
        <li>🔥 Kominek w salonie</li>
        <li>🌲 Ogrodzony ogród z miejscem na ognisko i grill</li>
        <li>🍽️ W pełni wyposażona kuchnia</li>
        <li>📶 Szybkie Wi-Fi i klimatyzacja</li>
        <li>🅿️ Bezpłatny parking</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Atrakcje w okolicy</h2>
      <p className="text-muted-foreground leading-relaxed">
        Między imprezowymi aktywnościami warto zwiedzić{' '}
        <Link to="/atrakcje-suprasl" className="text-teal underline hover:text-teal/70">
          atrakcje Supraśla
        </Link>
        : Monaster, bulwary nad rzeką, lokalne kawiarnie. Można też wybrać się na{' '}
        <Link to="/blog/kajaki-suprasl" className="text-teal underline hover:text-teal/70">
          spływ kajakowy rzeką Supraśl
        </Link>{' '}
        — świetna aktywność grupowa na dzień przed lub po imprezie.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Supraśl to zaledwie 25 minut od Białegostoku, więc dojazd jest wygodny zarówno samochodem,
        jak i taksówką. Sprawdź też{' '}
        <Link to="/weekend-suprasl" className="text-teal underline hover:text-teal/70">
          weekend w Supraślu
        </Link>{' '}
        — może impreza przerodzi się w dłuższy wypad?
      </p>

      <div className="bg-secondary p-8 text-center space-y-4 mt-12">
        <h3 className="font-serif text-2xl font-light">Zaplanuj imprezę w In The Woods</h3>
        <p className="text-muted-foreground">
          Zadzwoń i opowiedz nam o swoich planach. Pomożemy zorganizować niezapomniany wieczór.
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
