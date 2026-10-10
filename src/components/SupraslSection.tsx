import { useScrollReveal } from '@/hooks/useScrollAnimation';
import ImageReveal from '@/components/ImageReveal';
import { Link } from 'react-router-dom';
import {
  Church,
  Image,
  Trees,
  UtensilsCrossed,
  Bike,
  Waves,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import blogSzlakBio from '@/assets/blog-szlak-bioroznorodnosci.jpg';
import blogKruszyniany from '@/assets/blog-kruszyniany-meczet.jpg';
import blogSupraslUzdrowisko from '@/assets/blog-suprasl-atrakcje-uzdrowisko.jpg';
import blogKajaki from '@/assets/blog-kajaki-suprasl.jpg';
import blogRestauracje from '@/assets/blog-restauracje-suprasl.jpg';
import blogPuszczaHistorie from '@/assets/blog-puszcza-historie-hero.jpg';

const attractions = [
  { icon: Church, name: 'Monaster Zwiastowania NMP' },
  { icon: Image, name: 'Muzeum Ikon' },
  { icon: Trees, name: 'Bulwary nad rzeką Supraśl' },
  { icon: UtensilsCrossed, name: 'Klimatyczne restauracje' },
  { icon: Bike, name: 'Trasy rowerowe puszczy' },
  { icon: Waves, name: 'Spływy kajakowe' },
];

const nearby = [
  { name: 'Supraśl' },
  { name: 'Białystok' },
  { name: 'Arboretum Kopna Góra' },
  { name: 'Kruszyniany' },
];

const guides = [
  {
    slug: 'szlak-bioroznorodnosci-suprasl',
    title: 'Szlak Bioróżnorodności Supraśl',
    excerpt:
      'Przed spacerem sprawdź aktualny przebieg, długość i warunki trasy.',
    image: blogSzlakBio,
    alt: 'Leśna ścieżka w okolicy Supraśla',
  },
  {
    slug: 'kruszyniany-tatarska-wies',
    title: 'Kruszyniany – tatarska wieś Podlasia',
    excerpt:
      'Informacje o meczecie, dziedzictwie tatarskim i zasadach zwiedzania Kruszynian.',
    image: blogKruszyniany,
    alt: 'Drewniany meczet w Kruszynianach',
  },
  {
    slug: 'suprasl-atrakcje-uzdrowisko',
    title: 'Supraśl – atrakcje uzdrowiska Podlasia',
    excerpt:
      'Monaster, Muzeum Ikon i spacer nad rzeką — sprawdź informacje przed wizytą.',
    image: blogSupraslUzdrowisko,
    alt: 'Monaster Zwiastowania NMP w Supraślu',
  },
  {
    slug: 'kajaki-suprasl',
    title: 'Kajaki Supraśl – spływy rzeką Supraśl',
    excerpt:
      'Informacje, które warto sprawdzić przed zaplanowaniem spływu kajakowego rzeką Supraśl.',
    image: blogKajaki,
    alt: 'Kajaki na rzece Supraśl',
  },
  {
    slug: 'restauracje-suprasl',
    title: 'Restauracje Supraśl – gdzie zjeść',
    excerpt: 'Kartacze, babka ziemniaczana i kuchnia tatarska — przewodnik kulinarny po Supraślu.',
    image: blogRestauracje,
    alt: 'Danie kuchni regionalnej w Supraślu',
  },
  {
    slug: 'puszcza-knyszynska-historie',
    title: 'Puszcza Knyszyńska – 7 niezwykłych historii',
    excerpt:
      'Galeria Leśna Powstania Styczniowego i inne miejsca związane z historią regionu.',
    image: blogPuszczaHistorie,
    alt: 'Puszcza Knyszyńska historie – leśna droga w porannej mgle',
  },
];

const SupraslSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Okolica
          </p>
          <h2 className="section-title">Puszcza Knyszyńska i Supraśl – co warto zobaczyć</h2>
          <p className="section-subtitle mx-auto">
            Przewodnik po miejscach, które możesz uwzględnić podczas pobytu. Przed wyjazdem sprawdź
            aktualną trasę, godziny otwarcia i zasady zwiedzania.
          </p>
        </div>

        {/* Attractions grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {attractions.map((a, i) => (
            <div key={i} className="flex items-center gap-3 py-4 px-5 bg-card border border-border">
              <a.icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
              <span className="text-sm text-foreground">{a.name}</span>
            </div>
          ))}
        </div>

        {/* Nearby places */}
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans text-center mb-6">
            Miejsca w okolicy
          </p>
          <div className="grid grid-cols-2 gap-3">
            {nearby.map((n, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 px-5 bg-card border border-border"
              >
                <span className="text-sm text-foreground flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> {n.name}
                </span>
                <span className="text-xs text-muted-foreground">Sprawdź trasę</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tourism guide cards */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans text-center mb-8">
            Blog
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide, i) => (
              <Link
                key={guide.slug}
                to={`/blog/${guide.slug}`}
                className="group border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageReveal delay={Math.min(i * 70, 280)}>
                    <img
                      src={guide.image}
                      alt={guide.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="500"
                      height="313"
                    />
                  </ImageReveal>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-heading text-lg font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{guide.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                    Czytaj więcej{' '}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
            Puszcza Knyszyńska obejmuje rozległe tereny leśne. Przed spacerem lub wycieczką
            rowerową sprawdź przebieg trasy i obowiązujące ograniczenia.
          </p>
          <p className="text-base md:text-lg text-foreground/80 font-accent">
            Dom znajduje się w miejscowości Konne koło Supraśla.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupraslSection;
