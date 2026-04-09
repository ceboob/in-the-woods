import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';
import { Church, Building2, Waves, TreePine, Landmark, MapPin } from 'lucide-react';

const AtrakcjeSuprasl = () => (
  <SEOPageLayout
    title="Atrakcje w Supraślu – Co warto zobaczyć? [TOP 10 miejsc]"
    description="Odkryj największe atrakcje Supraśla: Monaster, Muzeum Ikon, Pałac Buchholtzów, Teatr Wierszalin i inne. Zobacz mapę i zaplanuj zwiedzanie perły Podlasia."
    breadcrumbName="Atrakcje Supraśla"
    ogImage="https://www.suprasl.online/images/terrace-porch.jpg"
  >
    <article className="prose prose-lg max-w-none space-y-10">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Atrakcje w Supraślu – Co warto zobaczyć?
      </h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        Supraśl to miejsce, gdzie <strong>historia spotyka się z naturą</strong>, a duchowość
        przenika codzienne życie. To urokliwe uzdrowisko w sercu Puszczy Knyszyńskiej przyciąga
        turystów z całej Polski. Poznaj jego największe skarby, które zachwycają odwiedzających
        od wieków.
      </p>

      {/* Monaster */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Church className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">
            Monaster Zwiastowania NMP i Muzeum Ikon
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Poczuj <strong>duchowe serce Supraśla</strong>, zwiedzając monumentalny, XVI-wieczny
          kompleks klasztorny. Prawosławny Monaster Zwiastowania Najświętszej Maryi Panny to
          najważniejszy zabytek miasta i jedno z najstarszych miejsc kultu prawosławnego w Polsce.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Zachwyć się obronną architekturą, a następnie zanurz się w świecie sztuki sakralnej w
          jednym z <strong>najnowocześniejszych muzeów ikon</strong> w Polsce. Kolekcja obejmuje
          ikony, freski i rękopisy z XVI–XIX wieku — to absolutny obowiązek na mapie każdego turysty.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Praktyczne informacje:</strong> Muzeum otwarte codziennie, wizyta zajmuje 1–2
          godziny. Warto skorzystać z audioprzewodnika. Wstęp: ok. 15 zł (dorośli), 8 zł (ulgowy).
        </p>
      </section>

      {/* Pałac Buchholtzów */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">
            Pałac Buchholtzów i Domy Tkaczy
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Przenieś się w czasie, spacerując <strong>ulicą 3 Maja</strong> i podziwiając XIX-wieczne
          Domy Tkaczy — świadectwo przemysłowej przeszłości Supraśla. Odkryj historię fabrykanckich
          rodów, zwieńczoną wizytą w secesyjnej perle architektury — <strong>Pałacu
          Buchholtzów</strong>, w którym dziś mieści się Liceum Plastyczne.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Architektura pałacu łączy style secesyjny i neoklasyczny. Warto podziwiać ozdobną fasadę,
          a następnie wybrać się na obiad do jednej z{' '}
          <Link to="/blog/przewodnik-kulinarny-suprasl" className="text-primary underline hover:text-primary/70">
            pobliskich restauracji
          </Link>.
        </p>
      </section>

      {/* Bulwary */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Waves className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">
            Bulwary nad rzeką Supraśl i Plaża Miejska
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Szukasz chwili relaksu? <strong>Malownicze bulwary</strong> wzdłuż rzeki Supraśl to idealne
          miejsce na niespieszny spacer, piknik czy podziwianie zachodów słońca nad klasztorem.
          Drewniane pomosty, ławki z widokiem na rzekę i otaczający las tworzą atmosferę spokoju.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Latem skorzystaj z uroków <strong>plaży miejskiej</strong> i kąpieliska. W sezonie
          organizowane są koncerty, targi rękodzieła i wydarzenia kulturalne. Wzdłuż rzeki
          znajdziesz też lokale gastronomiczne z kuchnią podlaską.
        </p>
      </section>

      {/* Puszcza Knyszyńska */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <TreePine className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">
            Puszcza Knyszyńska – szlaki i aktywności
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          <Link to="/puszcza-knyszynska-nocleg" className="text-primary underline hover:text-primary/70">
            Puszcza Knyszyńska
          </Link>{' '}
          to jeden z największych kompleksów leśnych w Polsce — 132 tysiące hektarów nieskażonej
          przyrody. Szlaki piesze i rowerowe prowadzą przez stare drzewostany, wzdłuż rzek i
          przez rezerwaty przyrody.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Spływy kajakowe, nordic walking, grzybobranie jesienią, narciarstwo biegowe zimą — w
          Puszczy każda pora roku ma swój urok. Więcej o aktywnym wypoczynku znajdziesz w naszym{' '}
          <Link to="/blog/aktywny-wypoczynek-suprasl" className="text-primary underline hover:text-primary/70">
            przewodniku po aktywnym wypoczynku
          </Link>.
        </p>
      </section>

      {/* Arboretum */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Landmark className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">
            Arboretum Kopna Góra
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Arboretum Kopna Góra, oddalone 20 minut od Supraśla, to unikatowy <strong>ogród
          botaniczny w sercu puszczy</strong>. Na 10 hektarach rosną drzewa i krzewy z całego
          świata. Idealne miejsce na spokojne popołudnie z rodziną.
        </p>
      </section>

      {/* Kruszyniany */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">
            Kruszyniany – tatarski ślad Podlasia
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          <Link to="/blog/kruszyniany-tatarska-wies" className="text-primary underline hover:text-primary/70">
            Kruszyniany
          </Link>{' '}
          to jedna z najstarszych osad tatarskich w Polsce. Zabytkowy drewniany meczet, mizar i
          autentyczna kuchnia tatarska — pierekaczewnik to obowiązkowy punkt programu. Odległość
          od Supraśla: 45 minut samochodem.
        </p>
      </section>

      {/* Białystok */}
      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">Białystok — 25 minut stąd</h2>
        <p className="text-muted-foreground leading-relaxed">
          Białystok, stolica Podlasia, to nowoczesne miasto z bogatą ofertą kulturalną. Pałac
          Branickich (polski Wersal), teatr dramatyczny, galerie sztuki i doskonałe restauracje —
          idealne uzupełnienie pobytu w regionie.
        </p>
      </section>

      {/* CTA */}
      <div className="card-premium bg-secondary p-8 text-center space-y-4 mt-12">
        <h3 className="font-heading text-2xl font-semibold text-foreground">
          In The Woods — Twoja baza wypadowa
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Prywatny{' '}
          <Link to="/dom-w-lesie-suprasl" className="text-primary underline hover:text-primary/70">
            dom w lesie
          </Link>{' '}
          z kominkiem, ruską banią i ogrodem — 10 minut od Supraśla. Po dniu pełnym wrażeń
          wracasz do swojego azylu ciszy i natury.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+48722765101" className="btn-primary">
            Zadzwoń: 722 765 101
          </a>
          <Link to="/#rezerwacja" className="btn-outline">
            Sprawdź dostępność
          </Link>
        </div>
      </div>
    </article>
  </SEOPageLayout>
);

export default AtrakcjeSuprasl;
