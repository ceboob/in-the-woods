import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';
import { Church, Building2, Waves, TreePine, Landmark, MapPin } from 'lucide-react';

const AtrakcjeSuprasl = () => (
  <SEOPageLayout
    title="Co zobaczyć w Supraślu? TOP 10 Atrakcji i Zabytków | Supraśl Online"
    description="Lista największych atrakcji Supraśla: Monaster, Muzeum Ikon, Pałac Buchholtzów, Puszcza Knyszyńska. Poznaj ciekawe miejsca, które musisz odwiedzić."
    breadcrumbName="Atrakcje Supraśla"
    ogImage="https://www.suprasl.online/images/terrace-porch.jpg"
  >
    <article className="prose prose-lg max-w-none space-y-10">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Co zobaczyć w Supraślu? TOP 10 Atrakcji i Zabytków
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
          setki bezcennych ikon, fresków i rękopisów z XVI–XIX wieku.
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
          Po zwiedzaniu warto wybrać się na obiad do jednej z{' '}
          <Link to="/blog/przewodnik-kulinarny-suprasl" className="text-primary underline hover:text-primary/80">
            pobliskich restauracji z kuchnią podlaską
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
          Latem skorzystaj z uroków <strong>plaży miejskiej</strong> i kąpieliska.
        </p>
      </section>

      {/* Puszcza */}
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
          <Link to="/puszcza-knyszynska-nocleg" className="text-primary underline hover:text-primary/80">
            Puszcza Knyszyńska
          </Link>{' '}
          to jeden z największych kompleksów leśnych w Polsce — 132 tysiące hektarów nieskażonej
          przyrody. Szlaki piesze i rowerowe prowadzą przez stare drzewostany, wzdłuż rzek i
          przez rezerwaty przyrody.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Spływy kajakowe, nordic walking, grzybobranie jesienią, narciarstwo biegowe zimą — w
          Puszczy każda pora roku ma swój urok. Szczegółowy przewodnik po trasach znajdziesz w{' '}
          <Link to="/blog/szlaki-puszcza-knyszynska" className="text-primary underline hover:text-primary/80">
            artykule o szlakach Puszczy Knyszyńskiej
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
          Unikatowy <strong>ogród botaniczny w sercu puszczy</strong>. Na 10 hektarach rosną drzewa
          i krzewy z całego świata. Idealne miejsce na spokojne popołudnie z rodziną, 20 minut od
          Supraśla.
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
          <Link to="/blog/kruszyniany-tatarska-wies" className="text-primary underline hover:text-primary/80">
            Kruszyniany
          </Link>{' '}
          to jedna z najstarszych osad tatarskich w Polsce. Zabytkowy drewniany meczet, mizar i
          autentyczna kuchnia tatarska — pierekaczewnik to obowiązkowy punkt programu.
        </p>
      </section>

      {/* Białystok */}
      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">Białystok — 25 minut stąd</h2>
        <p className="text-muted-foreground leading-relaxed">
          Białystok, stolica Podlasia, to nowoczesne miasto z bogatą ofertą kulturalną. Pałac
          Branickich (polski Wersal), teatr dramatyczny, galerie sztuki i doskonałe restauracje.
        </p>
      </section>

      {/* Planujesz zwiedzanie? */}
      <section className="card-premium bg-secondary p-8 space-y-4 mt-12">
        <h3 className="font-heading text-xl font-semibold text-foreground text-center">
          Planujesz zwiedzanie? Sprawdź też:
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/noclegi-suprasl" className="btn-outline text-sm">Noclegi w Supraślu</Link>
          <Link to="/blog/przewodnik-kulinarny-suprasl" className="btn-outline text-sm">Gdzie zjeść?</Link>
          <Link to="/blog/suprasl-na-weekend" className="btn-outline text-sm">Plan na weekend</Link>
          <Link to="/blog/suprasl-z-dziecmi" className="btn-outline text-sm">Supraśl z dziećmi</Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card-premium bg-secondary p-8 text-center space-y-4 mt-8">
        <h3 className="font-heading text-2xl font-semibold text-foreground">
          In The Woods — Twoja baza wypadowa
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Prywatny{' '}
          <Link to="/dom-w-lesie-suprasl" className="text-primary underline hover:text-primary/80">
            dom w lesie
          </Link>{' '}
          z kominkiem, ruską banią i ogrodem — 10 minut od Supraśla.
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
