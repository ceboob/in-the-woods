import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Calendar, Clock } from 'lucide-react';
import forestPanorama from '@/assets/forest-panorama.webp';
import riverKayak from '@/assets/river-kayak.jpg';
import forestNature from '@/assets/forest-nature.jpg';
import cabinDay from '@/assets/cabin-day-garden.jpg';

const articles = [
  {
    slug: 'supraski-system-wodny',
    title: 'Supraski System Wodny – zapomniany cud inżynierii Podlasia',
    excerpt: 'Odkryj fascynującą historię supraskiego systemu wodnego – unikatowego dziedzictwa hydrotechnicznego Podlasia, które do dziś zachwyca turystów.',
    image: riverKayak,
    date: '2026-03-10',
    readTime: '12 min',
    keywords: ['Supraski System Wodny', 'atrakcje Supraśl'],
  },
  {
    slug: 'szlak-powstania-styczniowego-suprasl',
    title: 'Szlak Powstania Styczniowego w Puszczy Knyszyńskiej',
    excerpt: 'Śladami powstańców styczniowych przez najpiękniejsze zakątki Puszczy Knyszyńskiej. Historia, miejsca pamięci i szlaki spacerowe.',
    image: forestNature,
    date: '2026-03-08',
    readTime: '10 min',
    keywords: ['Szlak Powstania Styczniowego', 'historia Supraśl'],
  },
  {
    slug: 'suprasl-atrakcje-national-geographic',
    title: 'Supraśl – perła Podlasia według podróżników',
    excerpt: 'Co sprawia, że Supraśl jest jednym z najpiękniejszych miasteczek Podlasia? Architektura, Monaster, Muzeum Ikon i slow tourism.',
    image: cabinDay,
    date: '2026-03-05',
    readTime: '11 min',
    keywords: ['Supraśl atrakcje', 'co zobaczyć Supraśl'],
  },
  {
    slug: 'szlaki-piesze-rowerowe-suprasl',
    title: 'Najlepsze szlaki piesze i rowerowe – Supraśl i Puszcza Knyszyńska',
    excerpt: 'Kompletny przewodnik po szlakach pieszych i rowerowych w okolicach Supraśla. Trasy rodzinne, przyrodnicze i dla aktywnych.',
    image: forestPanorama,
    date: '2026-03-01',
    readTime: '13 min',
    keywords: ['szlaki Supraśl', 'trasy rowerowe Supraśl'],
  },
];

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog – Supraśl atrakcje, szlaki i turystyka | In The Woods';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Blog o Supraślu – atrakcje, szlaki, historia i turystyka w Puszczy Knyszyńskiej. Przewodnik turystyczny.');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-xl font-light tracking-wide text-foreground">
            In The Woods
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/blog" className="nav-link text-foreground font-medium">Blog</Link>
            <Link to="/noclegi-suprasl" className="nav-link text-foreground/70 hover:text-foreground">Noclegi</Link>
            <Link to="/atrakcje-suprasl" className="nav-link text-foreground/70 hover:text-foreground">Atrakcje</Link>
            <Link to="/weekend-suprasl" className="nav-link text-foreground/70 hover:text-foreground">Weekend</Link>
            <a href="tel:+48722765101" className="btn-primary text-xs py-2.5 px-6">Zadzwoń</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-20 md:py-28 px-6 md:px-12 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Blog — Supraśl i okolice
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Odkryj historię, atrakcje i szlaki Supraśla oraz Puszczy Knyszyńskiej. Przewodnik turystyczny dla miłośników natury i slow travel.
          </p>
        </div>
      </header>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-card"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                </div>
                <h2 className="font-serif text-xl font-light text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Czytaj więcej <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 bg-secondary">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl font-light text-foreground">Planujesz wizytę w Supraślu?</h2>
          <p className="text-muted-foreground">Krzemienna Chata to komfortowy dom w lesie z jacuzzi — idealna baza wypadowa na zwiedzanie okolicy.</p>
          <a href="tel:+48722765101" className="btn-primary inline-flex items-center gap-2">
            <Phone className="w-4 h-4" /> Sprawdź dostępność
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-graphite text-cream/70 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="font-serif text-lg text-cream">In The Woods</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="hover:text-cream transition-colors">Strona główna</Link>
            <Link to="/blog" className="hover:text-cream transition-colors">Blog</Link>
            <Link to="/noclegi-suprasl" className="hover:text-cream transition-colors">Noclegi Supraśl</Link>
            <Link to="/atrakcje-suprasl" className="hover:text-cream transition-colors">Atrakcje Supraśla</Link>
          </div>
          <p className="text-xs text-cream/40">© 2026 In The Woods. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
