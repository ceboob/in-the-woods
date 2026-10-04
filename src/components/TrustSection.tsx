import { Flame, MapPin, Shield, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const items = [
  {
    icon: MapPin,
    title: 'Serce Puszczy Knyszyńskiej',
    lead: 'Leśny dom blisko Supraśla i szlaków Puszczy Knyszyńskiej.',
    description:
      'Domek w lesie Supraśl znajduje się około 5 km od centrum miasteczka, a Białystok leży około 20–25 km dalej. W pobliżu są szlaki piesze i rowerowe oraz obszary Natura 2000: Puszcza Knyszyńska (PLB200003) i Ostoja Knyszyńska (PLH200006). Supraśl zaprasza do monasteru, Muzeum Ikon, nad rzekę i do Arboretum w Kopnej Górze.',
  },
  {
    icon: Trees,
    title: 'Rezerwat Krzemienne Góry',
    lead: 'Spokojny kierunek na spacer i obserwowanie przyrody.',
    description: (
      <>
        Rezerwat leśny o powierzchni 79,27 ha, objęty ochroną częściową, chroni fragment
        starego lasu w Puszczy Knyszyńskiej. To spokojny kierunek na spacer i obserwowanie
        przyrody: można wsłuchać się w śpiew ptaków, a w sezonie w okolicy przychodzi czas
        grzybów i jagód. Prosimy zostać na oznakowanych szlakach, nie rozpalać ognisk i nie
        zbierać gatunków chronionych.{' '}
        <Link to="/atrakcje-suprasl" className="underline underline-offset-4">
          Poznaj okolicę
        </Link>
        .{' '}
        <a
          href="https://suprasl.bialystok.lasy.gov.pl/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Nadleśnictwo Supraśl
        </a>
        .
      </>
    ),
  },
  {
    icon: Shield,
    title: 'Dom i ogród dla gości',
    lead: 'Cała przestrzeń jest tylko do Waszej dyspozycji.',
    description:
      'Cały dom i ogród są przeznaczone wyłącznie dla gości — nie ma tu współdzielonych przestrzeni. Wokół są las i kilku spokojnych sąsiadów, a na miejscu czekają taras z grillem oraz bezpłatny prywatny parking. Dzieci mają przestrzeń do zabawy i dostępne zabawki. Informacje o pobycie ze zwierzęciem warto potwierdzić przed rezerwacją.',
  },
  {
    icon: Flame,
    title: 'Balia i kominek',
    lead: 'Leśna cisza, ciepła kąpiel i wieczór przy ogniu.',
    description:
      'Po dniu w lesie można odpocząć w balii ogrodowej z funkcją jacuzzi, a wieczór spędzić przy kominku. Dwie niedawno odnowione łazienki, w pełni wyposażona kuchnia, ekspres do kawy i bezpłatne Wi-Fi ułatwiają codzienny pobyt. Przy sprzyjającej pogodzie można podziwiać gwiazdy i wsłuchać się w leśną ciszę.',
  },
];

const TrustSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section aria-labelledby="highlights-title" className="px-6 md:px-12 py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 id="highlights-title" className="section-title text-center mb-8">
          Dlaczego Krzemienna Chata? Las, prywatność i relaks
        </h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {items.map((item) => (
            <article key={item.title} className="card-premium p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <item.icon aria-hidden="true" className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="font-medium text-foreground">{item.lead}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
        <p className="text-center mt-8">
          <a href="#rezerwacja" className="btn-primary inline-flex">
            Sprawdź dostępność
          </a>
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
