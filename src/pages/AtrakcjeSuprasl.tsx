import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';
import { Church, Building2, Waves, TreePine, Landmark, MapPin } from 'lucide-react';

const AtrakcjeSuprasl = () => (
  <SEOPageLayout
    title="Atrakcje Supraśla | Co zobaczyć i szlaki w Puszczy"
    description="TOP atrakcje Supraśla — Monaster, Muzeum Ikon, szlaki Puszczy Knyszyńskiej, spływy kajakowe. Zaplanuj pobyt w domku w lesie i odkryj Podlasie!"
    breadcrumbName="Atrakcje Supraśla"
    ogImage="https://suprasl.online/images/terrace-porch.jpg"
  >
    <article className="prose prose-lg max-w-none space-y-10">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Atrakcje Supraśla — co zobaczyć podczas pobytu w domku w lesie
      </h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        Supraśl to miejsce, gdzie <strong>historia spotyka się z naturą</strong>, a duchowość
        przenika codzienne życie. Urokliwe uzdrowisko w sercu Puszczy Knyszyńskiej przyciąga
        turystów z całej Polski. Poznaj największe skarby okolicy — idealne na{' '}
        <strong>odpoczynek w lesie weekend</strong> w{' '}
        <Link to="/dom-w-lesie-suprasl" className="text-primary underline hover:text-primary/80">
          domku w lesie na wyłączność
        </Link>
        .
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
          kompleks klasztorny. Prawosławny Monaster to najważniejszy zabytek miasta — zaledwie
          10 minut od naszego <strong>domku w lesie Supraśl</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Muzeum Ikon — jedna z najcenniejszych kolekcji w Europie Środkowej. Wizyta zajmuje 1–2
          godziny. Wstęp: ok. 15 zł (dorośli). Idealny punkt programu na{' '}
          <strong>weekend w Supraślu</strong>.
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
          Przenieś się w czasie ulicą 3 Maja — XIX-wieczne Domy Tkaczy i secesyjny Pałac
          Buchholtzów. Po zwiedzaniu warto zjeść w jednej z{' '}
          <Link to="/blog/przewodnik-kulinarny-suprasl" className="text-primary underline hover:text-primary/80">
            restauracji z kuchnią podlaską
          </Link>
          . <strong>Slow travel Polska</strong> — odkrywanie historii w swoim tempie.
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
          Malownicze bulwary wzdłuż rzeki Supraśl — idealne na niespieszny spacer i podziwianie
          zachodów słońca. Latem plaża miejska i kąpielisko. <strong>Spokojny wypoczynek w naturze</strong>{' '}
          — chill w lesie i nad rzeką.
        </p>
      </section>

      {/* Puszcza */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <TreePine className="w-5 h-5 text-primary" />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">
            Puszcza Knyszyńska — domek w lesie przy szlakach
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          <Link to="/puszcza-knyszynska-nocleg" className="text-primary underline hover:text-primary/80">
            Puszcza Knyszyńska
          </Link>{' '}
          — 132 tysiące hektarów nieskażonej przyrody. Szlaki piesze i rowerowe prowadzą przez stare
          drzewostany, wzdłuż rzek i przez rezerwaty. Z naszego <strong>domku w lesie</strong>{' '}
          szlaki zaczynają się za progiem. <strong>Domek w lesie Supraśl</strong> — idealna baza
          wypadowa na <strong>odpoczynek w lesie weekend</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Spływy kajakowe, grzybobranie jesienią, narty biegowe zimą — szczegóły w{' '}
          <Link to="/blog/szlaki-puszcza-knyszynska" className="text-primary underline hover:text-primary/80">
            przewodniku po szlakach Puszczy Knyszyńskiej
          </Link>
          . Po aktywnym dniu — powrót do <strong>domku z kominkiem</strong> i gorącej{' '}
          <strong>bali w lesie</strong>.
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
          Unikatowy ogród botaniczny w sercu puszczy. 10 hektarów drzew i krzewów z całego świata —
          idealne na spokojne popołudnie z rodziną, 20 minut od naszego{' '}
          <strong>leśnego domku do wynajęcia</strong>.
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
          — zabytkowy drewniany meczet, mizar i kuchnia tatarska. Pierekaczewnik to obowiązkowy
          punkt programu podczas pobytu w <strong>domku na odludziu podlaskie</strong>.
        </p>
      </section>

      {/* Białystok */}
      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">Białystok — 25 minut od domku w lesie</h2>
        <p className="text-muted-foreground leading-relaxed">
          Białystok, stolica Podlasia — Pałac Branickich, teatr dramatyczny, galerie sztuki i
          doskonałe restauracje. Blisko naszego <strong>domku w lesie podlaskie</strong>, ale daleko
          od zgiełku — idealna proporcja.
        </p>
      </section>

      {/* Planujesz */}
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
          In The Woods — Twoja baza wypadowa na odkrywanie Podlasia
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Prywatny <strong>dom w lesie na wyłączność</strong>{' '}
          z kominkiem, ruską banią i ogrodzonym ogrodem — 10 minut od Supraśla.{' '}
          <strong>Leśny domek do wynajęcia</strong> w Puszczy Knyszyńskiej.
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
