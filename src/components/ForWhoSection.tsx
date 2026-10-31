import { useScrollReveal } from '@/hooks/useScrollAnimation';
import { Heart, Users, Dog, Laptop, Snail } from 'lucide-react';

const audiences = [
  {
    icon: Heart,
    title: 'Pary',
    desc: 'We dwoje, cały dom i zero sąsiadów za ścianą. Kominek, balia pod gwiazdami, kawa na tarasie i nikt nie zapuka z pytaniem, czy wszystko w porządku. Dobre miejsce na rocznicę, zaręczyny albo po prostu na „wreszcie mamy czas”.',
  },
  {
    icon: Users,
    title: 'Rodziny z dziećmi',
    desc: 'Do 8 osób, czyli dwie rodziny z dzieciakami albo trzy pokolenia naraz. Ogrodzony ogród z placem zabaw, ognisko i las za płotem. Dzieci zapominają o tablecie (sprawdzone, działa przez jakieś 40 minut).',
  },
  {
    icon: Users,
    title: 'Przyjaciele',
    desc: 'Grill w altanie, balia, ognisko i nikt obcy przy stole. Możecie gadać głupoty do rana. Puszcza nie takie rzeczy słyszała i nikomu nie powie.',
  },
  {
    icon: Dog,
    title: 'Z psem',
    desc: 'Pies jedzie gratis. Bez dopłat i bez kręcenia nosem. Ogród jest ogrodzony, a las zaczyna się zaraz za nim. Wasz pupil będzie tu szczęśliwszy niż Wy, i to jest w porządku.',
  },
  {
    icon: Laptop,
    title: 'Praca z lasu',
    desc: 'Starlink do 200 Mb/s w środku lasu. Spotkanie na Teamsie o 10:00, balia o 16:00. Szef nie musi wiedzieć, w jakiej kolejności.',
  },
  {
    icon: Snail,
    title: 'Spokojny wypoczynek',
    desc: 'Cisza, ptaki i leśne ścieżki zaraz za furtką. Bez planu, bez pośpiechu i bez miejskiego hałasu. Najtrudniejsza decyzja dnia: taras czy kanapa przy kominku?',
  },
];

const ForWhoSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-wide text-muted-foreground font-sans">
            Dla kogo
          </p>
          <h2 className="section-title">Dla kogo jest ten dom? Dla Was. Serio, dla prawie każdego</h2>
          <p className="section-subtitle mx-auto">
            Dom na wyłączność na Podlasiu, na skraju Puszczy Knyszyńskiej. Bez dzielenia kuchni, łazienki
            i ciszy z obcymi. Do Supraśla macie 10 minut, do Białegostoku 30–40.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
          {audiences.map((a) => (
            <li
              key={a.title}
              className="flex h-full flex-col items-center text-center gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
                <a.icon className="w-7 h-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{a.title}</h3>
              <p className="flex-grow text-base leading-relaxed text-[#444] dark:text-foreground/80">{a.desc}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a href="#rezerwacja" className="btn-primary inline-flex items-center justify-center">
            Sprawdź wolne terminy
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
