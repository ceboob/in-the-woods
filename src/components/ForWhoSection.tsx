import { useScrollReveal } from '@/hooks/useScrollAnimation';
import { Heart, Users, Dog, Laptop, Snail } from 'lucide-react';

const audiences = [
  {
    icon: Heart,
    title: 'Pary',
    desc: 'We dwoje, cały dom i\u00a0zero sąsiadów za ścianą. Kominek, balia pod gwiazdami, kawa na tarasie i\u00a0nikt nie zapuka z\u00a0pytaniem, czy wszystko w\u00a0porządku. Dobre miejsce na rocznicę, zaręczyny albo po prostu na „wreszcie mamy czas”.',
  },
  {
    icon: Users,
    title: 'Rodziny z\u00a0dziećmi',
    desc: 'Do 8\u00a0osób, czyli dwie rodziny z\u00a0dzieciakami albo trzy pokolenia naraz. Ogrodzony ogród z\u00a0placem zabaw, ognisko i\u00a0las za płotem. Dzieci zapominają o\u00a0tablecie (sprawdzone, działa przez jakieś 40\u00a0minut).',
  },
  {
    icon: Users,
    title: 'Przyjaciele',
    desc: 'Grill w\u00a0altanie, balia, ognisko i\u00a0nikt obcy przy stole. Możecie gadać głupoty do rana. Puszcza nie takie rzeczy słyszała i\u00a0nikomu nie powie.',
  },
  {
    icon: Dog,
    title: 'Z\u00a0psem',
    desc: 'Pies jedzie gratis. Bez dopłat i\u00a0bez kręcenia nosem. Ogród jest ogrodzony, a\u00a0las zaczyna się zaraz za nim. Wasz pupil będzie tu szczęśliwszy niż Wy, i\u00a0to jest w\u00a0porządku.',
  },
  {
    icon: Laptop,
    title: 'Praca z\u00a0lasu',
    desc: 'Starlink do 200\u00a0Mb/s w\u00a0środku lasu. Spotkanie na Teamsie o\u00a010:00, balia o\u00a016:00. Szef nie musi wiedzieć, w\u00a0jakiej kolejności.',
  },
  {
    icon: Snail,
    title: 'Spokojny wypoczynek',
    desc: 'Cisza, ptaki i\u00a0leśne ścieżki zaraz za furtką. Bez planu, bez pośpiechu i\u00a0bez miejskiego hałasu. Najtrudniejsza decyzja dnia: taras czy kanapa przy kominku?',
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
          <p className="text-xs tracking-wide text-muted-foreground font-sans">Dla kogo</p>
          <h2 className="section-title">
            Dla kogo jest ten dom? Dla Was. Serio, dla prawie każdego
          </h2>
          <p className="section-subtitle mx-auto">
            Dom na wyłączność na Podlasiu, na skraju Puszczy Knyszyńskiej. Bez dzielenia kuchni,
            łazienki i&nbsp;ciszy z&nbsp;obcymi. Do Supraśla macie 10&nbsp;minut, do Białegostoku
            30–40.
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
              <p className="flex-grow text-base leading-relaxed text-[#444] dark:text-foreground/80">
                {a.desc}
              </p>
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
