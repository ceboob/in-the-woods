import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { Church, Image, Trees, UtensilsCrossed, Bike, Waves, MapPin, Clock, ArrowRight } from 'lucide-react';
import blogSzlakBio from '@/assets/blog-szlak-bioroznorodnosci.jpg';
import blogKruszyniany from '@/assets/blog-kruszyniany-meczet.jpg';
import blogSupraslUzdrowisko from '@/assets/blog-suprasl-atrakcje-uzdrowisko.jpg';

const attractions = [
  { icon: Church, name: 'Monaster Zwiastowania NMP' },
  { icon: Image, name: 'Muzeum Ikon' },
  { icon: Trees, name: 'Bulwary nad rzeką Supraśl' },
  { icon: UtensilsCrossed, name: 'Klimatyczne restauracje' },
  { icon: Bike, name: 'Trasy rowerowe puszczy' },
  { icon: Waves, name: 'Spływy kajakowe' },
];

const nearby = [
  { name: 'Supraśl', time: '10 min' },
  { name: 'Białystok', time: '25 min' },
  { name: 'Arboretum Kopna Góra', time: '20 min' },
  { name: 'Kruszyniany — kuchnia tatarska', time: '45 min' },
];

const guides = [
  {
    slug: 'szlak-bioroznorodnosci-suprasl',
    title: 'Szlak Bioróżnorodności Supraśl',
    excerpt: 'Edukacyjna ścieżka przez serce Puszczy Knyszyńskiej — 7 km wśród unikalnej flory i fauny.',
    image: blogSzlakBio,
    alt: 'Szlak Bioróżnorodności Supraśl – Puszcza Knyszyńska szlaki przyrodnicze',
  },
  {
    slug: 'kruszyniany-tatarska-wies',
    title: 'Kruszyniany – tatarska wieś Podlasia',
    excerpt: 'Meczet, kuchnia tatarska i wielowiekowa tradycja — odkryj jedno z najbardziej niezwykłych miejsc w Polsce.',
    image: blogKruszyniany,
    alt: 'Kruszyniany meczet – tatarska wieś Podlasie atrakcje',
  },
  {
    slug: 'suprasl-atrakcje-uzdrowisko',
    title: 'Supraśl – atrakcje uzdrowiska Podlasia',
    excerpt: 'Monaster, Muzeum Ikon, bulwary i Teatr Wierszalin — kompletny przewodnik po perle Podlasia.',
    image: blogSupraslUzdrowisko,
    alt: 'Supraśl atrakcje uzdrowisko – Monaster, Muzeum Ikon, co zobaczyć',
  },
];

const SupraslSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Okolica</p>
          <h2 className="section-title">Puszcza Knyszyńska i Supraśl – co warto zobaczyć</h2>
          <p className="section-subtitle mx-auto">
            Przewodnik po najciekawszych miejscach w okolicy In The Woods. Supraśl — klimatyczne miasteczko uzdrowiskowe w sercu Puszczy Knyszyńskiej — leży zaledwie 10 minut od chaty.
          </p>
        </div>

        {/* Attractions grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {attractions.map((a, i) => (
            <div key={i} className="flex items-center gap-3 py-4 px-5 bg-card border border-border">
              <a.icon className="w-5 h-5 text-forest flex-shrink-0" strokeWidth={1.5} />
              <span className="text-sm text-foreground">{a.name}</span>
            </div>
          ))}
        </div>

        {/* Distances */}
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans text-center mb-6">Odległości</p>
          <div className="grid grid-cols-2 gap-3">
            {nearby.map((n, i) => (
              <div key={i} className="flex items-center justify-between py-3 px-5 bg-card border border-border">
                <span className="text-sm text-foreground flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-forest" /> {n.name}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {n.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tourism guide cards */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans text-center mb-8">Przewodnik turystyczny</p>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                to={`/blog/${guide.slug}`}
                className="group border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {guide.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                    Czytaj więcej <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
            Puszcza Knyszyńska to jeden z największych kompleksów leśnych w Polsce, oferujący setki kilometrów szlaków pieszych i rowerowych.
          </p>
          <p className="font-serif text-xl md:text-2xl italic text-foreground/80">
            10 minut od chaty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupraslSection;
