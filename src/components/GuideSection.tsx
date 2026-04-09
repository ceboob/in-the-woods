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
      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
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
          Planujesz weekend na Podlasiu, rodzinny wyjazd lub chwilę wytchnienia blisko natury?{' '}
          <strong>Supraśl</strong>, malownicze uzdrowisko otulone Puszczą Knyszyńską, zaprasza!
          Odkryj z nami miejsce, gdzie historia spotyka się z nowoczesnością, duchowość z aktywnym
          wypoczynkiem, a podlaska gościnność czeka na każdym kroku.
        </p>
      </div>

      {/* Co warto zobaczyć */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary">
            Co warto zobaczyć w Supraślu?
          </p>
          <h2 className="section-title">Największe atrakcje w pigułce</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Supraśl to miasto, które zachwyca na każdym kroku. Od monumentalnych zabytków po
            urokliwe zakątki — oto miejsca, których nie możesz przegapić.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            icon={Church}
            title="Monaster Zwiastowania NMP i Muzeum Ikon"
            desc="Duchowe serce Supraśla i jeden z najważniejszych zabytków w Polsce. Poczuj niezwykłą atmosferę prawosławnego klasztoru, a następnie zanurz się w świecie sztuki sakralnej w jedynym takim muzeum w kraju."
            cta="Dowiedz się więcej o godzinach i biletach"
            link="/atrakcje-suprasl"
          />
          <Card
            icon={Waves}
            title="Bulwary nad rzeką Supraśl i plaża miejska"
            desc="Idealne miejsce na spacer, piknik lub podziwianie zachodu słońca. Zielone tereny wzdłuż rzeki to strefa relaksu dla całej rodziny. Latem skorzystaj z uroków plaży i kąpieliska!"
            cta="Sprawdź trasy spacerowe"
            link="/atrakcje-suprasl"
          />
          <Card
            icon={TreePine}
            title="Puszcza Knyszyńska – brama do dzikiej przyrody"
            desc="Supraśl to doskonała baza wypadowa do jednego z największych kompleksów leśnych w Polsce. Czekają na Ciebie dziesiątki kilometrów szlaków pieszych i rowerowych oraz świeże powietrze nasycone olejkami eterycznymi."
            cta="Zaplanuj wycieczkę po puszczy"
            link="/blog/szlaki-puszcza-knyszynska"
          />
          <Card
            icon={Building2}
            title="Pałac Buchholtzów i Domy Tkaczy"
            desc="Odkryj przemysłową historię miasta, podziwiając secesyjną perłę architektury — Pałac Buchholtzów, oraz klimatyczne Domy Tkaczy, które pamiętają czasy włókienniczej potęgi Supraśla."
            cta="Poznaj historię Supraśla"
            link="/atrakcje-suprasl"
          />
        </div>
      </div>

      {/* Zaplanuj pobyt */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary">
            Zaplanuj swój pobyt
          </p>
          <h2 className="section-title">Noclegi i smaki Supraśla</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Komfortowy nocleg i pyszne jedzenie to podstawa udanego wyjazdu. Supraśl oferuje szeroki
            wybór opcji na każdą kieszeń — od luksusowych hoteli SPA po klimatyczne pensjonaty.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card
            icon={Bed}
            title="Gdzie spać w Supraślu?"
            desc="Niezależnie od tego, czy szukasz hotelu z basenem, przytulnego pokoju w centrum, czy domku w lesie — w naszej bazie znajdziesz idealne miejsce."
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
          <p className="text-sm font-semibold tracking-widest uppercase text-primary">
            Supraśl dla aktywnych i nie tylko
          </p>
          <h2 className="section-title">Nuda w Supraślu? Niemożliwe!</h2>
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
            desc="Skorzystaj z leczniczej borowiny i zrelaksuj się w nowoczesnych ośrodkach."
            cta="Sprawdź ofertę"
            link="/blog/uzdrowisko-spa-suprasl"
          />
          <Card
            icon={CalendarDays}
            title="Wydarzenia kulturalne"
            desc="Festiwale, spektakle Teatru Wierszalin i imprezy plenerowe."
            cta="Kalendarz imprez"
            link="/blog/wydarzenia-suprasl-2026"
          />
        </div>
      </div>

      {/* Końcowe CTA */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="section-title">Supraśl czeka na Ciebie!</h2>
        <p className="text-muted-foreground text-lg">
          Nie zwlekaj, zaplanuj swoją podróż do jednego z najpiękniejszych zakątków Podlasia.
          Odkryj Supraśl i zakochaj się w jego niepowtarzalnym klimacie.
        </p>
        <Link to="/atrakcje-suprasl" className="btn-primary inline-block">
          Odkryj atrakcje Supraśla
        </Link>
      </div>
    </div>
  </section>
);

export default GuideSection;
