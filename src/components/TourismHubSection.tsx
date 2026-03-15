import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import blogSzlakBio from '@/assets/blog-szlak-bioroznorodnosci.jpg';
import blogKruszyniany from '@/assets/blog-kruszyniany-meczet.jpg';
import blogSupraslUzdrowisko from '@/assets/blog-suprasl-atrakcje-uzdrowisko.jpg';

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

const TourismHubSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="przewodnik" className="section-padding bg-warm-white">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Przewodnik</p>
          <h2 className="section-title">Puszcza Knyszyńska i Supraśl – co warto zobaczyć</h2>
          <p className="section-subtitle mx-auto">
            Przewodnik po najciekawszych miejscach w okolicy In The Woods.
          </p>
        </div>

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
    </section>
  );
};

export default TourismHubSection;
