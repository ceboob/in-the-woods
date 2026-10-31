import { Link } from 'react-router-dom';
import {
  Church,
  Building2,
  Waves,
  TreePine,
  Bed,
  UtensilsCrossed,
  Sailboat,
  Bike,
  Sparkles,
  CalendarDays,
} from 'lucide-react';

interface CardData {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  cta: string;
  link: string;
}

const Card = ({ icon: Icon, title, desc, cta, link }: CardData) => (
  <div className="flex h-full flex-col items-center text-center gap-4 rounded-2xl border border-border bg-card p-6">
    <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
      <Icon className="w-7 h-7 text-primary" />
    </div>
    <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
    <p className="flex-grow text-base leading-relaxed text-[#444] dark:text-foreground/80">
      {desc}
    </p>
    <Link
      to={link}
      className="mt-auto text-sm font-medium text-foreground underline underline-offset-4 decoration-primary hover:decoration-2"
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
        <h2 className="sr-only">Supraśl i&nbsp;okolice: co robić, kiedy wyjdziecie z&nbsp;balii</h2>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
          Do Supraśla macie z&nbsp;domu około 10&nbsp;minut. To małe miasteczko z&nbsp;monasterem,
          ikonami, rzeką i&nbsp;knajpami z&nbsp;babką ziemniaczaną, a&nbsp;dookoła zaczyna się
          puszcza. Kilka pomysłów poniżej.
        </p>
      </div>

      {/* Co warto zobaczyć */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-wide text-accent">
            Co warto zobaczyć w&nbsp;Supraślu?
          </p>
          <h2 className="section-title">Największe atrakcje w&nbsp;pigułce</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cztery miejsca, od których warto zacząć. Godziny otwarcia znajdziecie
            w&nbsp;przewodniku.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            icon={Church}
            title="Monaster Zwiastowania NMP i&nbsp;Muzeum Ikon"
            desc="Prawosławny klasztor z&nbsp;przełomu XV i&nbsp;XVI wieku i&nbsp;Muzeum Ikon, w&nbsp;którym nawet zatwardziały ateista stoi z&nbsp;otwartą buzią."
            cta="Dowiedz się więcej o&nbsp;godzinach i&nbsp;biletach"
            link="/atrakcje-suprasl"
          />
          <Card
            icon={Waves}
            title="Bulwary nad rzeką Supraśl i&nbsp;plaża miejska"
            desc="Spacer nad rzeką, lody w&nbsp;ręku, a&nbsp;latem plaża miejska. Najprostszy plan na leniwe popołudnie."
            cta="Sprawdź trasy spacerowe"
            link="/atrakcje-suprasl"
          />
          <Card
            icon={TreePine}
            title="Puszcza Knyszyńska zaraz za płotem"
            desc="Drugi największy las na Podlasiu. Szlaki piesze i&nbsp;rowerowe, rezerwaty i&nbsp;dzika zwierzyna, którą częściej słychać, niż widać."
            cta="Zaplanuj wycieczkę po puszczy"
            link="/blog/szlaki-piesze-rowerowe-suprasl"
          />
          <Card
            icon={Building2}
            title="Pałac Buchholtzów i&nbsp;Domy Tkaczy"
            desc="Pałac fabrykanta i&nbsp;drewniane Domy Tkaczy z&nbsp;XIX wieku. Supraśl był kiedyś miastem włókienniczym i&nbsp;wciąż to po nim widać."
            cta="Poznaj historię Supraśla"
            link="/atrakcje-suprasl"
          />
        </div>
      </div>

      {/* Zaplanuj pobyt */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-wide text-accent">Zaplanuj swój pobyt</p>
          <h2 className="section-title">Noclegi i&nbsp;smaki Supraśla</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Spanie macie u&nbsp;nas, a&nbsp;jedzenie w&nbsp;miasteczku.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card
            icon={Bed}
            title="Gdzie spać w&nbsp;Supraślu? U&nbsp;nas, oczywiście"
            desc="Cały dom z&nbsp;bali dla maksymalnie 8&nbsp;osób, od 399&nbsp;zł za noc. Za dom, nie za osobę."
            cta="Zobacz, co dostajecie"
            link="/noclegi-suprasl"
          />
          <Card
            icon={UtensilsCrossed}
            title="Gdzie zjeść w&nbsp;Supraślu?"
            desc="Kartacze, babka ziemniaczana, kiszka i&nbsp;sękacz. Kuchnia podlaska jest prosta, tłusta i&nbsp;tak dobra, że dieta poczeka do poniedziałku."
            cta="Gdzie zjeść"
            link="/blog/przewodnik-kulinarny-suprasl"
          />
        </div>
      </div>

      {/* Supraśl dla aktywnych */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-wide text-accent">
            Supraśl dla aktywnych i&nbsp;nie tylko
          </p>
          <h2 className="section-title">Pomysły na aktywności</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dla tych, którym balia i&nbsp;kominek to za mało.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            icon={Sailboat}
            title="Spływy kajakowe"
            desc="Rzeka Supraśl płynie spokojnie, więc dacie radę nawet bez doświadczenia. Najwyżej się zmoczycie."
            cta="Zaplanuj spływ"
            link="/blog/kajaki-suprasl"
          />
          <Card
            icon={Bike}
            title="Szlaki rowerowe"
            desc="Leśne dukty, Green Velo i&nbsp;trasy na każdą kondycję, także na tę po wczorajszym ognisku."
            cta="Zobacz trasy"
            link="/blog/szlaki-piesze-rowerowe-suprasl"
          />
          <Card
            icon={Sparkles}
            title="Uzdrowisko i&nbsp;SPA"
            desc="Supraśl to uzdrowisko z&nbsp;prawdziwego zdarzenia. Masaże i&nbsp;zabiegi rezerwujcie bezpośrednio w&nbsp;ośrodkach."
            cta="Sprawdź ofertę"
            link="/blog/uzdrowisko-spa-suprasl"
          />
          <Card
            icon={CalendarDays}
            title="Jesienne wydarzenia kulturalne"
            desc="Koncerty, spektakle Teatru Wierszalin i&nbsp;festiwale. Jesienią w&nbsp;miasteczku dzieje się więcej, niż się wydaje."
            cta="Kalendarz imprez"
            link="/blog/jesien-w-suprasliu-2026-wydarzenia-kulturalne"
          />
        </div>
      </div>

      {/* Końcowe CTA */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="section-title">Zaplanuj wizytę w&nbsp;Supraślu</h2>
        <p className="text-muted-foreground text-lg">Pełny przewodnik po atrakcjach czeka obok.</p>
        <Link to="/atrakcje-suprasl" className="btn-primary inline-block">
          Odkryj atrakcje Supraśla
        </Link>
      </div>
    </div>
  </section>
);

export default GuideSection;
