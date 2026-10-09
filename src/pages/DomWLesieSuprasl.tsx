import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';

const DomWLesieSuprasl = () => (
  <SEOPageLayout
    title="Dom w lesie koło Supraśla – informacje o pobycie"
    description="Prywatny dom na wyłączność w miejscowości Konne koło Supraśla. Poznaj udogodnienia, zasady pobytu i cennik przed wysłaniem zapytania."
    breadcrumbName="Dom w lesie Supraśl"
    ogImage="https://www.suprasl.online/images/hero-cabin.jpg"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Dom w lesie na wyłączność koło Supraśla
      </h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        In The Woods to drewniany dom z bali wynajmowany na wyłączność, położony w miejscowości
        Konne, w otoczeniu Puszczy Knyszyńskiej i niedaleko Supraśla. Goście mają do dyspozycji salon
        z kominkiem, kuchnię, sypialnie i taras. To miejsce na
        spokojny pobyt blisko lasu, z możliwością samodzielnego zaplanowania czasu.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Pobyt w domu na wyłączność</h2>
      <p className="text-muted-foreground leading-relaxed">
        Leśne położenie domu pozwala zaplanować pobyt we własnym tempie. Przed spacerem sprawdź
        przebieg dostępnych tras, dojazd do ich początku i ewentualne ograniczenia.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods znajduje się w miejscowości Konne, w okolicach Supraśla i Puszczy Knyszyńskiej.
        Przed wyjazdem sprawdź aktualną trasę oraz zasady dostępu do pobliskich terenów chronionych.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Dom ma salon z kominkiem, sypialnie, kuchnię i taras. Szczegóły wyposażenia ogrodu oraz
        zasady korzystania z miejsca na ognisko potwierdź przed przyjazdem.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Slow travel na Podlasiu — spokojny wypoczynek w naturze</h2>
      <p className="text-muted-foreground leading-relaxed">
        Slow travel to sposób podróżowania, który pozwala lepiej poznać miejsce i odpoczywać bez
        pośpiechu. Leśne położenie domu sprzyja spacerom i spokojnemu pobytowi.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        W In The Woods możesz samodzielnie zaplanować rytm dnia. Przed spacerem sprawdź dostępne
        trasy, zasady dostępu i dojazd do ich początku.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Przed wyjazdem do Supraśla lub Arboretum Kopna Góra sprawdź dojazd i godziny otwarcia.
        Wieczorem można odpocząć przy kominku, rozpalić ognisko w ogrodzie lub skorzystać z balii
        ogrodowej z funkcją jacuzzi.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Leśny dom z balią ogrodową z funkcją jacuzzi</h2>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Dom w lesie blisko Supraśla</strong> łączy spokojne otoczenie z wygodnym dojazdem
        do miasta. Po dniu spędzonym na szlakach Puszczy Knyszyńskiej można odpocząć przy kominku lub
        zarezerwować balię ogrodową z funkcją jacuzzi.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Możliwość pobytu z psem, ewentualne opłaty i informację o ogrodzeniu potwierdź z gospodarzem.
        Przed przyjazdem z dziećmi sprawdź wyposażenie i zasady korzystania z przestrzeni na zewnątrz.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Przed zaplanowaniem pobytu
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Wynajem domu w lesie na Podlasiu pozwala odpocząć w spokojnym otoczeniu. Można tu zaplanować
        romantyczny pobyt albo weekend z dala od miejskiego
        zgiełku — we własnym tempie.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Minimalny czas pobytu zależy od sezonu: wynosi 2 noce, a w sezonie wysokim 3 noce.
        Dłuższy pobyt pozwala spokojniej poznać okolicę i odpocząć od miejskiego zgiełku.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Pobyt o różnych porach roku</h2>
      <p className="text-muted-foreground leading-relaxed">
        Plan pobytu dopasuj do pory roku i dostępności atrakcji. Minimalna długość pobytu zależy od
        sezonu; szczegóły znajdziesz w cenniku.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Jak zarezerwować dom w lesie</h2>
      <p className="text-muted-foreground leading-relaxed">
        Skontaktuj się bezpośrednio z gospodarzem pod numerem 722 765 101 albo wyślij zapytanie
        przez formularz na stronie głównej. Wysłanie formularza nie potwierdza rezerwacji ani nie
        oznacza płatności.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Sprawdź również naszą ofertę{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegów w Supraślu
        </Link>
        , zaplanuj idealny{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          weekend w Supraślu
        </Link>
        , odkryj{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcje Supraśla
        </Link>{' '}
        lub wybierz{' '}
        <Link
          to="/puszcza-knyszynska-nocleg"
          className="text-primary underline hover:text-primary/80"
        >
          nocleg w Puszczy Knyszyńskiej
        </Link>
        . Odkryj też{' '}
        <Link
          to="/domek-z-jacuzzi-podlasie"
          className="text-primary underline hover:text-primary/80"
        >
          domek z jacuzzi na Podlasiu
        </Link>
        .
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

export default DomWLesieSuprasl;
