import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';

const AtrakcjeSuprasl = () => (
  <SEOPageLayout
    title="Atrakcje Supraśla – co zobaczyć, co robić | In The Woods"
    description="Co zobaczyć w Supraślu? Monaster, Muzeum Ikon, bulwary, szlaki rowerowe, spływy kajakowe. Odkryj atrakcje Supraśla i Puszczy Knyszyńskiej."
    breadcrumbName="Atrakcje Supraśla"
    ogImage="https://www.suprasl.online/images/terrace-porch.jpg"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">Atrakcje Supraśla – co zobaczyć, co robić w okolicy</h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        Supraśl i okolice to skarbnica <strong>atrakcji turystycznych</strong>, które łączą kulturę, historię i przyrodę w unikalne doświadczenie. 
        Miasteczko uzdrowiskowe w sercu Puszczy Knyszyńskiej przyciąga turystów z całej Polski — i nie bez powodu. 
        Oto przewodnik po najważniejszych atrakcjach, które warto odwiedzić podczas pobytu w In The Woods.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Monaster Zwiastowania NMP</h2>
      <p className="text-muted-foreground leading-relaxed">
        Prawosławny Monaster Zwiastowania Najświętszej Maryi Panny to najważniejszy zabytek Supraśla i jedno z najstarszych 
        miejsc kultu prawosławnego w Polsce. Założony na początku XVI wieku, monaster przeszedł burzliwą historię — 
        zniszczony podczas II wojny światowej, został odbudowany i dziś zachwyca swoją architekturą.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Warto odwiedzić Monaster zarówno w dzień — podziwiając architekturę i ogrody — jak i wieczorem, gdy budynki pięknie się oświetlają. 
        Regularne nabożeństwa z tradycyjnym śpiewem cerkiewnym to wyjątkowe doświadczenie duchowe.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Monaster znajduje się zaledwie 10 minut samochodem od In The Woods, w centrum Supraśla.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Muzeum Ikon</h2>
      <p className="text-muted-foreground leading-relaxed">
        Muzeum Ikon przy Monasterze posiada jedną z najcenniejszych i największych kolekcji ikon w Europie Środkowej. 
        Eksponaty pochodzą z XVI–XIX wieku i obejmują ikony, freski i rękopisy. Muzeum jest nowoczesne i interaktywne — 
        nawet osoby niezaznajomione z kulturą prawosławną znajdą tu wiele fascynujących eksponatów.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Wizyta w Muzeum Ikon zajmuje zazwyczaj 1–2 godziny. Warto skorzystać z audioprzewodnika, który wzbogaca doświadczenie 
        o kontekst historyczny i religijny.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Bulwary nad rzeką Supraśl</h2>
      <p className="text-muted-foreground leading-relaxed">
        Bulwary nad rzeką Supraśl to idealne miejsce na wieczorny spacer. Drewniane pomosty, ławki z widokiem na rzekę 
        i otaczający las tworzą atmosferę spokoju. W sezonie letnim bulwary tętnią życiem — organizowane są koncerty, 
        targi rękodzieła i wydarzenia kulturalne.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Spacer bulwarami to doskonałe uzupełnienie wizyty w Monasterze i Muzeum Ikon. Wzdłuż rzeki znajdują się też 
        lokale gastronomiczne, gdzie można skosztować kuchni podlaskiej.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Restauracje i kawiarnie Supraśla</h2>
      <p className="text-muted-foreground leading-relaxed">
        Supraśl zaskakuje różnorodnością gastronomiczną jak na niewielkie miasteczko. Klimatyczne kawiarnie serwujące rzemieślniczą kawę, 
        restauracje z kuchnią podlaską opartą na lokalnych produktach, a nawet lodziarnie z domowymi smakami — 
        to obowiązkowy element każdego pobytu.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Warto spróbować lokalnych specjałów: kartacze (podlaskie kluski z nadzieniem mięsnym), sękacz (tradycyjne ciasto piecone na rożnie), 
        pierogi z nadzieniem z darów Puszczy Knyszyńskiej. Wielu gości In The Woods łączy wizytę w Supraślu z obiadem 
        w jednej z lokalnych restauracji.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Puszcza Knyszyńska — szlaki i aktywności</h2>
      <p className="text-muted-foreground leading-relaxed">
        <Link to="/puszcza-knyszynska-nocleg" className="text-forest underline hover:text-forest-light">Puszcza Knyszyńska</Link> to 
        jeden z największych kompleksów leśnych w Polsce, rozciągający się na ponad 132 tysiącach hektarów. 
        To raj dla miłośników pieszych wędrówek, jazdy na rowerze i kontaktu z nieskażoną przyrodą.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Szlaki piesze i rowerowe prowadzą przez stare drzewostany, wzdłuż rzek i strumieni, przez rezerwaty przyrody 
        i malownicze polany. Łączna długość szlaków to setki kilometrów — od krótkich spacerów po wielodniowe wyprawy.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Spływy kajakowe rzeką Supraśl to jedna z najpopularniejszych atrakcji regionu. Trasy różnej długości, 
        od kilkugodzinnych po całodzienne, prowadzą przez dziewiczy krajobraz Puszczy. Wypożyczalnie kajaków 
        działają w sezonie letnim i oferują transport zwrotny.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Jesienią Puszcza Knyszyńska słynie z obfitości grzybów — borowiki, podgrzybki, kurki i maślaki to łup, 
        na który polują grzybiarz z całego regionu. Zimą las zamienia się w białą krainę idealną na narty biegowe, 
        rakiety śnieżne i romantyczne spacery.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Arboretum Kopna Góra</h2>
      <p className="text-muted-foreground leading-relaxed">
        Arboretum Kopna Góra, oddalone 20 minut od In The Woods, to unikatowy ogród botaniczny w sercu puszczy. 
        Na 10 hektarach rosną drzewa i krzewy z całego świata. Spacer po arboretum to lekcja botaniki w pięknych przyrodniczych wnętrzach.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Kruszyniany — tatarski ślad</h2>
      <p className="text-muted-foreground leading-relaxed">
        Kruszyniany to jedna z najstarszych osad tatarskich w Polsce, oddalona 45 minut od In The Woods. 
        Zabytkowy drewniany meczet i mizar (cmentarz tatarski) to unikalne zabytki. Lokalne jadłodajnie serwują autentyczną 
        kuchnię tatarską — pierekaczewnik (tatarski placek z mięsem) to obowiązkowy punkt programu.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Białystok — 25 minut stąd</h2>
      <p className="text-muted-foreground leading-relaxed">
        Białystok, stolica Podlasia, to nowoczesne miasto z bogatą ofertą kulturalną i gastronomiczną. 
        Pałac Branickich (polski Wersal), teatr dramatyczny, galerie sztuki, restauracje i kawiarnie — 
        to doskonałe uzupełnienie pobytu w In The Woods dla tych, którzy szukają miejskich atrakcji.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">In The Woods — Twoja baza wypadowa</h2>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods to idealna baza do odkrywania atrakcji Supraśla i Puszczy Knyszyńskiej. 
        Prywatny <Link to="/dom-w-lesie-suprasl" className="text-forest underline hover:text-forest-light">dom w lesie</Link> z kominkiem, 
        ruską banią i ogrodem — po dniu pełnym wrażeń wracasz do swojego azylu ciszy i natury.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Sprawdź naszą ofertę <Link to="/noclegi-suprasl" className="text-forest underline hover:text-forest-light">noclegów w Supraślu</Link> 
        i zaplanuj idealny <Link to="/weekend-suprasl" className="text-forest underline hover:text-forest-light">weekend w Supraślu</Link>.
      </p>

      <div className="bg-secondary p-8 text-center space-y-4 mt-12">
        <h3 className="font-serif text-2xl font-light">Zarezerwuj pobyt i odkryj Supraśl</h3>
        <p className="text-muted-foreground">10 minut od Supraśla. Prywatny dom w Puszczy Knyszyńskiej.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+48722765101" className="btn-primary">Zadzwoń: 722 765 101</a>
          <Link to="/#rezerwacja" className="btn-outline">Sprawdź dostępność</Link>
        </div>
      </div>
    </article>
  </SEOPageLayout>
);

export default AtrakcjeSuprasl;
