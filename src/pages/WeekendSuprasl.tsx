import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';

const WeekendSuprasl = () => (
  <SEOPageLayout
    title="Weekend w Supraślu – pomysły na pobyt i zwiedzanie"
    description="Zaplanuj weekend w Supraślu: poznaj propozycje spacerów, lokalnych atrakcji i odpoczynku w okolicy. Sprawdź dostępność noclegu i aktualne zasady zwiedzania."
    breadcrumbName="Weekend w Supraślu"
    ogImage="https://www.suprasl.online/images/terrace-breakfast.jpg"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Weekend w Supraślu — pomysły na pobyt
      </h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        Weekend w Supraślu można zaplanować wokół spacerów, lokalnych atrakcji i odpoczynku. Poniższe
        pomysły dopasuj do pogody, czasu pobytu oraz aktualnych godzin otwarcia i zasad dostępu.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Piątek — przyjazd i pierwszy wieczór w leśnym domku</h2>
      <p className="text-muted-foreground leading-relaxed">
        Po przyjeździe rozgość się i zaplanuj kolejny dzień. Wieczór możesz spędzić na odpoczynku w
        domu; szczegóły wyposażenia i dostępność dodatków sprawdź w opisie obiektu.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Jeśli warunki i zasady obiektu na to pozwalają, możesz skorzystać z ogniska. Balia ogrodowa
        z funkcją jacuzzi jest opcjonalnym dodatkiem — przed pobytem potwierdź jej dostępność. Wi-Fi
        jest dostępne, więc przerwę od ekranów możesz zaplanować według własnych potrzeb.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Sobota — odkrywanie Supraśla i Puszczy Knyszyńskiej
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Na początek wybierz spacer odpowiedni do pogody i swoich możliwości. Przed wejściem na teren
        chroniony sprawdź, czy jest udostępniony i jakie zasady obowiązują.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        W Supraślu możesz odwiedzić prawosławny Monaster lub Muzeum Ikon. Przed wyjściem sprawdź
        godziny otwarcia i warunki zwiedzania. W sezonie możesz też rozważyć{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          spływy kajakowe rzeką Supraśl
        </Link>
        . Przy planowaniu grzybobrania lub aktywności zimowych sprawdź lokalne zasady, warunki
        pogodowe i dostępność tras.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Wieczorem możesz odpocząć w domu. Jeśli chcesz skorzystać z balii ogrodowej z funkcją jacuzzi,
        wcześniej ustal jej dostępność i zasady.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Niedziela — spokojny poranek i wyjazd</h2>
      <p className="text-muted-foreground leading-relaxed">
        Zostaw czas na śniadanie i krótki spacer, jeśli pozwalają na to pogoda i godzina wyjazdu.
        Przed opuszczeniem domu zapoznaj się z zasadami wymeldowania.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Jeśli planujesz odwiedzić Arboretum Kopna Góra lub Kruszyniany, sprawdź wcześniej dojazd,
        godziny zwiedzania i dostępność atrakcji.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Odpoczynek w lesie na weekend — dla kogo?</h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom na wyłączność może być bazą wypadową dla par, rodzin lub niewielkiej grupy. Przed
        wysłaniem zapytania sprawdź maksymalną liczbę gości, wyposażenie i zasady korzystania z
        dodatków.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Jeśli planujesz przyjazd z psem, potwierdź z gospodarzem możliwość pobytu, ewentualne opłaty
        i informację o ogrodzeniu. Zasady wprowadzania zwierząt na okoliczne trasy sprawdź przed
        spacerem.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Pobyt w różnych porach roku</h2>
      <p className="text-muted-foreground leading-relaxed">
        Plan pobytu dostosuj do pory roku i dostępności atrakcji. Przed wysłaniem zapytania sprawdź
        minimalną długość pobytu obowiązującą w wybranym terminie.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Praktyczne informacje</h2>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Cena:</strong> Zależy od terminu, liczby gości i nocy objętych dopłatą weekendową.
        Sprawdź wycenę w kalkulatorze; pobyt może podlegać sezonowemu minimum nocy.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Adres:</strong> Konne 109/1, 16-030 Supraśl. Trasę i warunki dojazdu sprawdź przed podróżą.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Więcej informacji o noclegu:</strong>{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegi w Supraślu
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
        lub{' '}
        <Link
          to="/puszcza-knyszynska-nocleg"
          className="text-primary underline hover:text-primary/80"
        >
          nocleg w Puszczy Knyszyńskiej
        </Link>
        . Zadzwoń pod 722 765 101 lub wyślij zapytanie przez formularz. Gospodarz odpowie z
        informacją o dostępności i cenie.
      </p>

      <div className="bg-secondary p-8 text-center space-y-4 mt-12">
        <h3 className="font-heading text-2xl font-light">Zapytaj o pobyt</h3>
        <p className="text-muted-foreground">Wysłanie formularza nie potwierdza rezerwacji ani nie oznacza płatności.</p>
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

export default WeekendSuprasl;
