import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';
import { Church, Building2, Waves, TreePine, Landmark, MapPin } from 'lucide-react';

const AtrakcjeSuprasl = () => (
  <SEOPageLayout
    title="Atrakcje Supraśla – miejsca i informacje dla odwiedzających"
    description="Poznaj atrakcje Supraśla i okolicy. Przed wizytą sprawdź aktualne godziny otwarcia, dostępność tras i zasady korzystania z atrakcji."
    breadcrumbName="Atrakcje Supraśla"
    ogImage="https://www.suprasl.online/images/terrace-porch.jpg"
  >
    <article className="prose prose-lg max-w-none space-y-10">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Atrakcje Supraśla — co sprawdzić przed wizytą
      </h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        Supraśl łączy zabytki z dostępem do terenów przyrodniczych. Planując pobyt, sprawdź aktualne
        informacje o atrakcjach i zasadach korzystania z tras — także podczas pobytu w{' '}
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
          Poczuj           kompleks klasztorny w Supraślu. Przed wizytą sprawdź zasady zwiedzania i godziny otwarcia
          w oficjalnych informacjach Monasteru.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Muzeum Ikon w Supraślu prezentuje sztukę ikon i mieści się w zabudowaniach
          poklasztornych. Ceny biletów, godziny otwarcia i zasady zwiedzania mogą się zmieniać.
          Przed wizytą sprawdź{' '}
          <a href="https://muzeumpodlaskie.pl/oddzialy/muzeum-ikon-w-supraslu/" target="_blank" rel="noopener noreferrer" aria-label="Aktualne informacje dla zwiedzających Muzeum Ikon (otworzy się w nowej karcie)" className="underline">
            aktualne informacje dla zwiedzających
          </a>
          .
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
          . Spacer i dostęp do obiektów zaplanuj zgodnie z aktualnymi zasadami.
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
          Bulwary nad rzeką Supraśl mogą być celem spaceru. Jeśli planujesz skorzystać z plaży lub
          kąpieliska, sprawdź, czy są czynne i jakie zasady obowiązują.
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
          — rozległy obszar leśny z terenami chronionymi. Przed wyjściem sprawdź przebieg i
          dostępność wybranej trasy oraz zasady poruszania się po obszarach chronionych. Z naszego{' '}
          <strong>domku w lesie</strong> możesz dojechać do atrakcji regionu.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Aktywności sezonowe, takie jak kajaki, grzybobranie lub narciarstwo, wymagają sprawdzenia
          warunków i zasad. Więcej informacji znajdziesz w{' '}
          <Link to="/blog/szlaki-puszcza-knyszynska" className="text-primary underline hover:text-primary/80">
            przewodniku po szlakach Puszczy Knyszyńskiej
          </Link>
          . Przed wyjściem sprawdź dostępność tras i ewentualne ograniczenia na terenach chronionych.
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
          Arboretum im. Powstańców 1863 w Kopnej Górze zajmuje 26 hektarów i zostało założone
          w 1988 roku. Przed wyjazdem sprawdź informacje o dostępności i zasadach zwiedzania u{' '}
          <a href="https://suprasl.bialystok.lasy.gov.pl/" target="_blank" rel="noopener noreferrer" aria-label="Informacje Nadleśnictwa Supraśl o arboretum (otworzy się w nowej karcie)" className="underline">
            Nadleśnictwa Supraśl
          </a>
          . Przed wyjazdem sprawdź dojazd, godziny otwarcia i aktualne zasady zwiedzania.
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
          — zabytkowy drewniany meczet, mizar i kuchnia tatarska. Jeśli chcesz spróbować lokalnych
          potraw, sprawdź przed wyjazdem dostępność lokali i aktualne menu.
        </p>
      </section>

      {/* Białystok */}
      <section className="space-y-4">
        <h2 className="section-title !text-2xl md:!text-3xl">Atrakcje Białegostoku</h2>
        <p className="text-muted-foreground leading-relaxed">
          W Białymstoku możesz odwiedzić Pałac Branickich, teatry i galerie. Sprawdź aktualne
          informacje o godzinach otwarcia i wydarzeniach przed wyjazdem.
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
          z kominkiem i opcjonalną balią ogrodową z funkcją jacuzzi w miejscowości Konne koło Supraśla.{' '}
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
