import { Link } from 'react-router-dom';
import { Church, Building2, Waves, TreePine, Bed, UtensilsCrossed, Sailboat, Bike, Sparkles, CalendarDays } from 'lucide-react';

interface CardData {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  cta: string;
  link: string;
}

const Card = ({ icon: Icon, title, desc, cta, link }: CardData) => (
  <div className="card-premium bg-card p-6 md:p-8 space-y-4">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-heading text-xl font-semibold text-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{desc}</p>
    <Link
      to={link}
      className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
    >
      {cta} →
    </Link>
  </div>
);

const GuideSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-20">
      {/* Intro pod H1 */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="sr-only">Supraśl – Odkryj Perłę Podlasia</h2>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
        Planujesz weekend na Podlasiu lub wyjazd blisko natury? W Supraślu możesz połączyć
        zwiedzanie z czasem na spacer i odpoczynek. Przed wizytą sprawdź godziny otwarcia atrakcji
        oraz dostępność tras.
        </p>
      </div>

      {/* Co warto zobaczyć */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-wide text-accent">
            Co warto zobaczyć w Supraślu?
          </p>
          <h2 className="section-title">Największe atrakcje w pigułce</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Poniżej znajdziesz kilka propozycji. Sprawdź aktualne zasady zwiedzania przed wyjazdem.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            icon={Church}
            title="Monaster Zwiastowania NMP i Muzeum Ikon"
            desc="Jeden z ważnych zabytków Supraśla. Poznaj historię prawosławnego klasztoru, a następnie odwiedź Muzeum Ikon."
            cta="Dowiedz się więcej o godzinach i biletach"
            link="/atrakcje-suprasl"
          />
          <Card
            icon={Waves}
            title="Bulwary nad rzeką Supraśl i plaża miejska"
            desc="Przed spacerem nad rzeką sprawdź dostępne wejścia i lokalne zasady. Informacje o kąpieliskach weryfikuj na miejscu."
            cta="Sprawdź trasy spacerowe"
            link="/atrakcje-suprasl"
          />
          <Card
            icon={TreePine}
            title="Puszcza Knyszyńska – brama do dzikiej przyrody"
            desc="W okolicy Supraśla znajdują się tereny leśne i trasy turystyczne. Ich przebieg, dostępność i zasady sprawdź przed wyjściem."
            cta="Zaplanuj wycieczkę po puszczy"
            link="/blog/szlaki-puszcza-knyszynska"
          />
          <Card
            icon={Building2}
            title="Pałac Buchholtzów i Domy Tkaczy"
            desc="Pałac Buchholtzów i zabudowa związana z historią miasta to przykłady miejsc, które możesz uwzględnić w planie zwiedzania."
            cta="Poznaj historię Supraśla"
            link="/atrakcje-suprasl"
          />
        </div>
      </div>

      {/* Zaplanuj pobyt */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-wide text-accent">
            Zaplanuj swój pobyt
          </p>
          <h2 className="section-title">Noclegi i smaki Supraśla</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Przed rezerwacją porównaj lokalizację, wyposażenie, dostępność i cenę wybranego noclegu.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card
            icon={Bed}
            title="Gdzie spać w Supraślu?"
            desc="Sprawdź opis obiektu, wyposażenie i warunki pobytu, a następnie wybierz ofertę odpowiednią do swoich potrzeb."
            cta="Znajdź idealny nocleg"
            link="/noclegi-suprasl"
          />
          <Card
            icon={UtensilsCrossed}
            title="Gdzie zjeść w Supraślu?"
            desc="Skosztuj autentycznej kuchni podlaskiej! Spróbuj kartaczy, babki ziemniaczanej i sękacza. Region słynie z prostych, ekologicznych dań łączących wpływy polskie, litewskie i białoruskie."
            cta="Odkryj najlepsze restauracje"
            link="/blog/przewodnik-kulinarny-suprasl"
          />
        </div>
      </div>

      {/* Supraśl dla aktywnych */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-wide text-accent">
            Supraśl dla aktywnych i nie tylko
          </p>
          <h2 className="section-title">Pomysły na aktywności</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sprawdź, jak aktywnie spędzić czas o każdej porze roku.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            icon={Sailboat}
            title="Spływy kajakowe"
            desc="Spokojny nurt rzeki Supraśl jest idealny nawet dla początkujących."
            cta="Zaplanuj spływ"
            link="/blog/kajaki-suprasl"
          />
          <Card
            icon={Bike}
            title="Szlaki rowerowe"
            desc="Odkrywaj Puszczę Knyszyńską na dwóch kółkach dzięki licznym trasom."
            cta="Zobacz trasy"
            link="/blog/szlaki-puszcza-knyszynska"
          />
          <Card
            icon={Sparkles}
            title="Uzdrowisko i SPA"
            desc="Oferta zabiegów i pobytów zależy od placówki. Aktualne warunki, dostępność i przeciwwskazania potwierdź bezpośrednio u usługodawcy."
            cta="Sprawdź ofertę"
            link="/blog/uzdrowisko-spa-suprasl"
          />
          <Card
            icon={CalendarDays}
            title="Jesienne wydarzenia kulturalne"
            desc="Terminy i program wydarzeń mogą się zmieniać. Aktualne informacje sprawdź u lokalnego organizatora."
            cta="Kalendarz imprez"
            link="/blog/jesien-w-suprasliu-2026-wydarzenia-kulturalne"
          />
        </div>
      </div>

      {/* Końcowe CTA */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="section-title">Zaplanuj wizytę w Supraślu</h2>
        <p className="text-muted-foreground text-lg">
          Sprawdź aktualną dostępność atrakcji i zaplanuj pobyt zgodnie z własnymi zainteresowaniami.
        </p>
        <Link to="/atrakcje-suprasl" className="btn-primary inline-block">
          Odkryj atrakcje Supraśla
        </Link>
      </div>
    </div>
  </section>
);

export default GuideSection;
