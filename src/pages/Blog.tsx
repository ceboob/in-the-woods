import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Phone, ArrowRight, Calendar, Clock } from 'lucide-react';
import blogKanal from '@/assets/blog-kanal-kopanica.jpg';
import blogPomnik from '@/assets/blog-pomnik-powstanie.jpg';
import blogMonaster from '@/assets/blog-monaster-suprasl.jpg';
import blogSzlak from '@/assets/blog-szlak-lesny.jpg';
import blogSzlakBio from '@/assets/blog-szlak-bioroznorodnosci.jpg';
import blogKruszyniany from '@/assets/blog-kruszyniany-meczet.jpg';
import blogSupraslUzdrowisko from '@/assets/blog-suprasl-atrakcje-uzdrowisko.jpg';
import blogKajaki from '@/assets/blog-kajaki-suprasl.jpg';
import blogRestauracje from '@/assets/blog-restauracje-suprasl.jpg';
import blogCoRobic from '@/assets/blog-co-robic-suprasl.jpg';
import blogWeekendPlan from '@/assets/blog-weekend-plan-suprasl.jpg';
import blogNajlepszeMiejsca from '@/assets/blog-najlepsze-miejsca-puszcza.jpg';
import blogPuszczaHistorie from '@/assets/blog-puszcza-historie-hero.jpg';
import blogWydarzenia from '@/assets/blog-wydarzenia-suprasl-hero.jpg';

const articles = [
  {
    slug: 'wydarzenia-suprasl-2026',
    title: 'Największe imprezy i wydarzenia w Supraślu 2026 – kalendarz + daty',
    excerpt: 'Pełny kalendarz wydarzeń w Supraślu na 2026: Dni Supraśla, Festiwal Wertep, Święto Chleba i więcej. Daty, opisy i gdzie nocować.',
    image: blogWydarzenia,
    date: '2026-03-30',
    readTime: '12 min',
    keywords: ['wydarzenia Supraśl 2026', 'imprezy Supraśl', 'festiwale Podlasie'],
  },
  {
    slug: 'puszcza-knyszynska-historie',
    title: 'Puszcza Knyszyńska historie – 7 niezwykłych opowieści',
    excerpt: 'Galeria Leśna Powstania Styczniowego, legendy, duchy powstańców i dom w lesie z jacuzzi 300 m od atrakcji.',
    image: blogPuszczaHistorie,
    date: '2026-03-28',
    readTime: '14 min',
    keywords: ['Puszcza Knyszyńska historie', 'Galeria Leśna'],
  },
  {
    slug: 'co-robic-suprasl',
    title: 'Co robić w Supraślu? Kompletny przewodnik po atrakcjach',
    excerpt: 'Monaster, Muzeum Ikon, kajaki, szlaki w Puszczy Knyszyńskiej i kuchnia regionalna. Wszystko, co warto zobaczyć w Supraślu.',
    image: blogCoRobic,
    date: '2026-03-25',
    readTime: '10 min',
    keywords: ['co robić w Supraślu', 'Supraśl atrakcje'],
  },
  {
    slug: 'weekend-suprasl-plan',
    title: 'Weekend w Supraślu – plan pobytu na 2-3 dni',
    excerpt: 'Sprawdzony plan na weekend w Supraślu: zwiedzanie, szlaki, kajaki, kuchnia regionalna i relaks w jacuzzi pod gwiazdami.',
    image: blogWeekendPlan,
    date: '2026-03-25',
    readTime: '9 min',
    keywords: ['weekend Supraśl', 'plan pobytu Supraśl'],
  },
  {
    slug: 'najlepsze-miejsca-puszcza-knyszynska',
    title: 'Najlepsze miejsca w Puszczy Knyszyńskiej – co warto zobaczyć',
    excerpt: 'Rezerwaty, szlaki, arboretum, rzeki i dzikie ostępy. Kompletny przewodnik po największym lesie Podlasia.',
    image: blogNajlepszeMiejsca,
    date: '2026-03-25',
    readTime: '11 min',
    keywords: ['Puszcza Knyszyńska', 'najlepsze miejsca'],
  },
  {
    slug: 'kajaki-suprasl',
    title: 'Kajaki Supraśl – przewodnik po spływach rzeką Supraśl',
    excerpt: 'Spokojna rzeka, dzika przyroda i Puszcza Knyszyńska z poziomu wody. Wszystko o spływach kajakowych w Supraślu.',
    image: blogKajaki,
    date: '2026-03-15',
    readTime: '11 min',
    keywords: ['kajaki Supraśl', 'spływ Supraśl'],
  },
  {
    slug: 'restauracje-suprasl',
    title: 'Restauracje Supraśl – gdzie zjeść podczas pobytu',
    excerpt: 'Kartacze, babka ziemniaczana, sękacz i kuchnia tatarska. Przewodnik kulinarny po Supraślu i Podlasiu.',
    image: blogRestauracje,
    date: '2026-03-15',
    readTime: '12 min',
    keywords: ['restauracje Supraśl', 'gdzie zjeść Supraśl'],
  },
  {
    slug: 'szlak-bioroznorodnosci-suprasl',
    title: 'Szlak Bioróżnorodności Supraśl – spacer przez naturę Puszczy Knyszyńskiej',
    excerpt: 'Edukacyjna ścieżka o długości 7 km przez zróżnicowane ekosystemy Puszczy Knyszyńskiej. Flora, fauna i tablice edukacyjne.',
    image: blogSzlakBio,
    date: '2026-03-14',
    readTime: '10 min',
    keywords: ['Supraśl szlak bioróżnorodności', 'atrakcje Supraśl'],
  },
  {
    slug: 'kruszyniany-tatarska-wies',
    title: 'Kruszyniany – tatarska wieś Podlasia',
    excerpt: 'Meczet, kuchnia tatarska i wielowiekowa tradycja — odkryj jedno z najbardziej niezwykłych miejsc w Polsce.',
    image: blogKruszyniany,
    date: '2026-03-14',
    readTime: '9 min',
    keywords: ['Kruszyniany atrakcje', 'tatarska wieś Podlasie'],
  },
  {
    slug: 'suprasl-atrakcje-uzdrowisko',
    title: 'Supraśl – atrakcje uzdrowiska Podlasia',
    excerpt: 'Monaster, Muzeum Ikon, bulwary, Teatr Wierszalin i uzdrowiskowy klimat. Kompletny przewodnik po perle Podlasia.',
    image: blogSupraslUzdrowisko,
    date: '2026-03-14',
    readTime: '12 min',
    keywords: ['Supraśl atrakcje', 'co zobaczyć Supraśl'],
  },
  {
    slug: 'supraski-system-wodny',
    title: 'Supraski System Wodny – zapomniany cud inżynierii Podlasia',
    excerpt: 'Odkryj fascynującą historię supraskiego systemu wodnego – unikatowego dziedzictwa hydrotechnicznego Podlasia.',
    image: blogKanal,
    date: '2026-03-10',
    readTime: '12 min',
    keywords: ['Supraski System Wodny', 'atrakcje Supraśl'],
  },
  {
    slug: 'szlak-powstania-styczniowego-suprasl',
    title: 'Szlak Powstania Styczniowego w Puszczy Knyszyńskiej',
    excerpt: 'Śladami powstańców styczniowych przez najpiękniejsze zakątki Puszczy Knyszyńskiej. Historia, miejsca pamięci i szlaki.',
    image: blogPomnik,
    date: '2026-03-08',
    readTime: '10 min',
    keywords: ['Szlak Powstania Styczniowego', 'historia Supraśl'],
  },
  {
    slug: 'suprasl-atrakcje-national-geographic',
    title: 'Supraśl – perła Podlasia według podróżników',
    excerpt: 'Co sprawia, że Supraśl jest jednym z najpiękniejszych miasteczek Podlasia? Architektura, Monaster i slow tourism.',
    image: blogMonaster,
    date: '2026-03-05',
    readTime: '11 min',
    keywords: ['Supraśl atrakcje', 'co zobaczyć Supraśl'],
  },
  {
    slug: 'szlaki-piesze-rowerowe-suprasl',
    title: 'Najlepsze szlaki piesze i rowerowe – Supraśl i Puszcza Knyszyńska',
    excerpt: 'Kompletny przewodnik po szlakach pieszych i rowerowych w okolicach Supraśla.',
    image: blogSzlak,
    date: '2026-03-01',
    readTime: '13 min',
    keywords: ['szlaki Supraśl', 'trasy rowerowe Supraśl'],
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog – Supraśl atrakcje, szlaki i turystyka | In The Woods"
        description="Blog o Supraślu – atrakcje, szlaki, historia i turystyka w Puszczy Knyszyńskiej. Przewodnik turystyczny."
        canonical="https://www.suprasl.online/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://www.suprasl.online/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.suprasl.online/blog" }
          ]
        }}
      />
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
          <p className="text-muted-foreground">In The Woods to komfortowy dom w lesie z jacuzzi — idealna baza wypadowa na zwiedzanie okolicy.</p>
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
            <Link to="/domek-suprasl" className="hover:text-cream transition-colors">Domek Supraśl</Link>
            <Link to="/domek-z-jacuzzi-podlasie" className="hover:text-cream transition-colors">Domek z jacuzzi</Link>
            <Link to="/dom-w-lesie-suprasl" className="hover:text-cream transition-colors">Dom w lesie</Link>
            <Link to="/weekend-suprasl" className="hover:text-cream transition-colors">Weekend Supraśl</Link>
            <Link to="/wieczor-panienski-suprasl" className="hover:text-cream transition-colors">Wieczór panieński</Link>
            <Link to="/atrakcje-suprasl" className="hover:text-cream transition-colors">Atrakcje Supraśla</Link>
            <Link to="/puszcza-knyszynska-nocleg" className="hover:text-cream transition-colors">Puszcza Knyszyńska</Link>
            <Link to="/informator" className="hover:text-cream transition-colors">Informator gościa</Link>
          </div>
          <p className="text-xs text-cream/40">© 2026 In The Woods. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
