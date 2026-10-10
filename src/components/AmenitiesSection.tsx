import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollAnimation';
import { amenityFaqs } from '@/data/amenityFaq';
import {
  TreePine,
  Bath,
  Waves,
  Flame,
  FlameKindling,
  CookingPot,
  BedDouble,
  ShowerHead,
  PawPrint,
  Baby,
  Wifi,
  Snowflake,
} from 'lucide-react';

type Amenity = {
  icon: LucideIcon;
  title: string;
  desc: string;
  badge?: string;
  featured?: boolean;
  link?: { to: string; label: string };
};

const amenities: Amenity[] = [
  {
    icon: TreePine,
    title: 'Dom w lesie, cisza na wyciągnięcie ręki',
    desc: 'Dom stoi przy Puszczy Knyszyńskiej – budzą Cię ptaki zamiast sąsiadów, a centrum Supraśla i rzekę masz w kilka minut.',
    // TODO (właściciel): podaj dokładny czas dojścia/dojazdu do centrum i rzeki.
  },
  {
    icon: Bath,
    title: 'Jacuzzi na wyłączność gości',
    desc: 'Po spacerze po lesie zanurz się w ciepłej wodzie. To dom z jacuzzi na wynajem tylko dla Waszej grupy – bez obcych i bez kolejki.',
    badge: 'Hit gości',
    featured: true,
    link: { to: '/domek-z-jacuzzi-podlasie', label: 'Dom z jacuzzi na Podlasiu' },
  },
  {
    icon: Waves,
    title: 'Jacuzzi ogrodowe pod gwiazdami',
    desc: 'Ciepła woda na świeżym powietrzu, drzewa wokół i gwiazdy nad głową. Latem wieczorne kąpiele, zimą para nad wodą i widok na las – romantyczny weekend w Supraślu we dwoje.',
    badge: 'Hit gości',
    featured: true,
    // TODO (właściciel): czy jacuzzi działa całorocznie? czy jest dodatkowo płatne? dla ilu osób? jaka temperatura wody?
  },
  {
    icon: Flame,
    title: 'Klimatyczny kominek w salonie',
    desc: 'Prawdziwy ogień, zapach drewna i kieliszek wina. Dom z kominkiem to wieczory, po których nie chce się wracać do miasta.',
    badge: 'Hit gości',
    featured: true,
  },
  {
    icon: FlameKindling,
    title: 'Kominek ogrodowy i ognisko',
    desc: 'Grill, kiełbaski na patyku i rozmowy pod gwiazdami we własnym, prywatnym ogrodzie. Ognisko, które trwa do późna.',
  },
  {
    icon: CookingPot,
    title: 'Kuchnia w pełni wyposażona',
    desc: 'Zaparz kawę w ekspresie i gotujcie razem, patrząc na ogród. Wszystko do wspólnych posiłków masz pod ręką.',
  },
  {
    icon: BedDouble,
    title: 'Dwie komfortowe sypialnie',
    desc: 'Na piętrze czekają duże łóżka, drewniane belki i widok na las. Budzisz się wyspany, przy śpiewie ptaków.',
  },
  {
    icon: ShowerHead,
    title: 'Dwie łazienki',
    desc: 'Nowoczesna łazienka i dodatkowa toaleta na parterze. Ciepła woda i wygoda dla każdego z gości, także rano w pełnym składzie.',
  },
  {
    icon: PawPrint,
    title: 'Dom przyjazny zwierzętom – pobyt z psem za darmo',
    desc: 'Nie pobieramy żadnych dodatkowych opłat za zwierzęta – pies lub inny pupil nocuje u nas całkowicie bezpłatnie. Czekają na niego leśne ścieżki Puszczy Knyszyńskiej i ogród do zabawy. Nocleg z psem, bez opłat za zwierzęta.',
    badge: 'Zwierzęta gratis · 0 zł za pupila',
    featured: true,
    link: { to: '/blog/podlasie-z-psem', label: 'Podlasie z psem – poradnik' },
    // TODO (właściciel): czy jest limit liczby/wielkości zwierząt i czy ogród jest ogrodzony? Nie dopisuj ograniczeń bez potwierdzenia.
  },
  {
    icon: Baby,
    title: 'Wypoczynek z dziećmi',
    desc: 'Przestrzeń do zabawy, las tuż obok i spokojne, bezpieczne otoczenie – dzieci odpoczywają od ekranów, Ty od pośpiechu.',
    link: { to: '/blog/suprasl-z-dziecmi', label: 'Supraśl z dziećmi' },
    // TODO (właściciel): czy jest łóżeczko i krzesełko dla dziecka?
  },
  {
    icon: Wifi,
    title: 'Smart TV i szybkie Wi-Fi Starlink',
    desc: 'Wieczór filmowy na Smart TV albo praca zdalna z widokiem na las. Internet Starlink osiąga prędkość do 200 Mb/s.',
    link: { to: '/blog/workation-podlasie', label: 'Workation na Podlasiu' },
  },
  {
    icon: Snowflake,
    title: 'Klimatyzacja',
    desc: 'Latem chłód po upalnym dniu, zimą przyjemne ciepło. Dom gotowy na każdą pogodę.',
  },
];

const AmenitiesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="dom" className="section-padding bg-secondary" aria-labelledby="dom-wyposazenie">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-wide text-muted-foreground font-sans">
            Dom i udogodnienia
          </p>
          <h2 id="dom-wyposazenie" className="section-title">
            Dom w lesie w Supraślu – wyposażenie, które robi różnicę
          </h2>
          <p className="section-subtitle mx-auto">
            Dom na wynajem w Supraślu, tuż przy Puszczy Knyszyńskiej, to miejsce na weekend we
            dwoje, rodzinny wypoczynek albo wyjazd z psem – bez dodatkowych opłat. Czeka na Ciebie
            kominek, jacuzzi ogrodowe, ognisko i pełne wyposażenie. Dom na wyłączność dla
            maksymalnie 8 osób.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 list-none p-0 m-0">
          {amenities.map((a) => (
            <li
              key={a.title}
              className={`amenity-card relative flex flex-col items-center text-center gap-4 rounded-2xl bg-card p-6 ${
                a.featured ? 'amenity-card--featured' : 'border border-border'
              }`}
            >
              {a.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                  {a.badge}
                </span>
              )}
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
                <a.icon className="w-7 h-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{a.title}</h3>
              <p className="text-base leading-relaxed text-[#444]">{a.desc}</p>
              {a.link && (
                <Link
                  to={a.link.to}
                  className="mt-auto text-sm font-medium text-foreground underline underline-offset-4 decoration-primary hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                >
                  {a.link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a href="#rezerwacja" className="btn-primary inline-flex items-center justify-center">
            Sprawdź wolne terminy
          </a>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="font-heading text-xl font-bold text-foreground text-center mb-6">
            Najczęstsze pytania o dom w lesie
          </h3>
          <div className="space-y-2">
            {amenityFaqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-card px-5 py-4 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none font-medium text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm">
                  {f.q}
                </summary>
                <p className="mt-3 text-base leading-relaxed text-[#444]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
