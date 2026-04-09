import { Link } from 'react-router-dom';
import { Landmark, UtensilsCrossed, TreePine, Church, Building2, Waves, Bed, MapPin, Bike, Sailboat } from 'lucide-react';

const iconCards = [
  {
    icon: Church,
    title: 'Monaster Zwiastowania NMP i Muzeum Ikon',
    desc: 'Poczuj duchowe serce Supraśla, zwiedzając monumentalny, XVI-wieczny kompleks klasztorny. Zachwyć się obronną architekturą, a następnie zanurz się w świecie sztuki sakralnej w jednym z najnowocześniejszych muzeów ikon w Polsce.',
    cta: 'Dowiedz się więcej o zabytkach Supraśla',
    link: '/atrakcje-suprasl',
  },
  {
    icon: Building2,
    title: 'Pałac Buchholtzów i Domy Tkaczy',
    desc: 'Przenieś się w czasie, spacerując ulicą 3 Maja i podziwiając XIX-wieczne Domy Tkaczy. Odkryj historię fabrykanckich rodów, zwieńczoną wizytą w secesyjnej perle architektury – Pałacu Buchholtzów.',
    cta: 'Poznaj historię miasta',
    link: '/blog/suprasl-atrakcje-national-geographic',
  },
  {
    icon: Waves,
    title: 'Bulwary nad rzeką Supraśl i Plaża Miejska',
    desc: 'Malownicze bulwary wzdłuż rzeki Supraśl to idealne miejsce na niespieszny spacer, piknik czy podziwianie zachodów słońca nad klasztorem. Latem skorzystaj z uroków plaży miejskiej i kąpieliska.',
    cta: 'Zobacz, jak aktywnie spędzić czas',
    link: '/blog/aktywny-wypoczynek-suprasl',
  },
];

const stayCards = [
  {
    icon: Bed,
    title: 'Noclegi na każdą kieszeń',
    desc: 'Od hoteli z basenem i SPA, przez klimatyczne pensjonaty, po domki na skraju puszczy – mamy dla Ciebie sprawdzone propozycje.',
    cta: 'Znajdź idealny nocleg',
    link: '/noclegi-suprasl',
  },
  {
    icon: UtensilsCrossed,
    title: 'Gdzie zjeść w Supraślu? Smaki Podlasia',
    desc: 'Skosztuj kartaczy, babki ziemniaczanej i świeżego tatara. Odkryj restauracje z kuchnią regionalną, które zachwycą Twoje podniebienie.',
    cta: 'Odkryj najlepsze restauracje',
    link: '/blog/przewodnik-kulinarny-suprasl',
  },
];

const natureCards = [
  {
    icon: Bike,
    title: 'Szlaki piesze i rowerowe',
    desc: 'Załóż wygodne buty lub wsiądź na rower i ruszaj na szlaki Puszczy Knyszyńskiej, w tym słynny Green Velo. Odkrywaj rezerwaty przyrody, Wzgórza Świętojańskie i Arboretum w Kopnej Górze.',
    cta: 'Sprawdź trasy i szlaki',
    link: '/blog/aktywny-wypoczynek-suprasl',
  },
  {
    icon: Sailboat,
    title: 'Spływy kajakowe rzeką Supraśl',
    desc: 'Zobacz miasto i jego okolice z innej perspektywy. Spokojny nurt rzeki Supraśl jest idealny nawet dla początkujących kajakarzy.',
    cta: 'Zaplanuj spływ kajakowy',
    link: '/blog/kajaki-suprasl',
  },
];

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
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
          Marzysz o ucieczce od zgiełku miasta? Pragniesz zanurzyć się w naturze, poczuć duchową
          atmosferę i zasmakować wyjątkowej, regionalnej kuchni? Supraśl, urokliwe uzdrowisko
          otoczone Puszczą Knyszyńską, czeka na Ciebie. Odkryj z nami, dlaczego to magiczne
          miasteczko jest idealnym miejscem na weekendowy wypad, rodzinne wakacje i regenerujący
          pobyt.
        </p>
      </div>

      {/* Ikony Supraśla */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary">
            Ikony Supraśla – Tego nie możesz przegapić!
          </p>
          <h2 className="section-title">Największe atrakcje Supraśla, które musisz zobaczyć</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Supraśl to miejsce, gdzie historia spotyka się z naturą, a duchowość przenika codzienne
            życie. Poznaj jego największe skarby.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {iconCards.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>

      {/* Zaplanuj pobyt */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary">
            Zaplanuj Swój Pobyt
          </p>
          <h2 className="section-title">Noclegi i Gastronomia – Znajdź swoje miejsce w Supraślu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Niezależnie od tego, czy szukasz luksusowego hotelu SPA, kameralnego pensjonatu, czy
            przytulnego apartamentu, Supraśl oferuje szeroką bazę noclegową.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {stayCards.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>

      {/* Natura i Aktywność */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary">
            Natura i Aktywność
          </p>
          <h2 className="section-title">Poczuj rytm natury w Puszczy Knyszyńskiej</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Supraśl to brama do jednego z najpiękniejszych kompleksów leśnych w Polsce. Czekają tu
            na Ciebie kilometry szlaków pieszych, rowerowych i malownicze trasy na spływy kajakowe.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {natureCards.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default GuideSection;
