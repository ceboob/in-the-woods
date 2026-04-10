import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Phone, ArrowRight, Calendar, Clock } from 'lucide-react';
import blogKanal from '@/assets/blog-kanal-kopanica.webp';
import blogPomnik from '@/assets/blog-pomnik-powstanie.webp';
import blogMonaster from '@/assets/blog-monaster-suprasl.webp';
import blogSzlak from '@/assets/blog-szlak-lesny.webp';
import blogSzlakBio from '@/assets/blog-szlak-bioroznorodnosci.webp';
import blogKruszyniany from '@/assets/blog-kruszyniany-meczet.webp';
import blogSupraslUzdrowisko from '@/assets/blog-suprasl-atrakcje-uzdrowisko.webp';
import blogKajaki from '@/assets/blog-kajaki-suprasl.webp';
import blogRestauracje from '@/assets/blog-restauracje-suprasl.webp';
import blogCoRobic from '@/assets/blog-co-robic-suprasl.webp';
import blogWeekendPlan from '@/assets/blog-weekend-plan-suprasl.webp';
import blogNajlepszeMiejsca from '@/assets/blog-najlepsze-miejsca-puszcza.webp';
import blogPuszczaHistorie from '@/assets/blog-puszcza-historie-hero.webp';
import blogWydarzenia from '@/assets/blog-wydarzenia-suprasl-hero.webp';

const articles = [
  {
    slug: 'puszcza-knyszynska-przewodnik',
    title: 'Puszcza Knyszyńska – przewodnik, szlaki i mapy GPX',
    excerpt: 'Odkryj Puszczę Knyszyńską: najpiękniejsze szlaki piesze, rowerowe i narciarskie z mapami GPX do pobrania. Kajaki, rykowisko, Kruszyniany i Supraśl.',
    image: blogNajlepszeMiejsca,
    date: '2026-04-09',
    readTime: '15 min',
    keywords: ['Puszcza Knyszyńska', 'szlaki GPX', 'atrakcje', 'przewodnik'],
  },
  {
    slug: 'romantyczny-weekend-podlasie',
    title: 'Pomysł na romantyczny weekend we dwoje na Podlasiu',
    excerpt: 'Domek z kominkiem, gorąca balia pod gwiazdami, kolacja przy świecach w sercu Puszczy Knyszyńskiej. Zaplanuj idealny wypad we dwoje.',
    image: blogCoRobic,
    date: '2026-04-09',
    readTime: '10 min',
    keywords: ['romantyczny weekend Podlasie', 'domek z kominkiem'],
  },
  {
    slug: 'cyfrowy-detoks-las',
    title: 'Cyfrowy detoks w lesie – domek na reset od technologii',
    excerpt: 'Potrzebujesz resetu od ekranów? Odkryj, dlaczego domek w lesie na Podlasiu to idealne miejsce na cyfrowy detoks.',
    image: blogNajlepszeMiejsca,
    date: '2026-04-09',
    readTime: '9 min',
    keywords: ['cyfrowy detoks', 'domek w lesie'],
  },
  {
    slug: 'grzybobranie-puszcza-knyszynska',
    title: 'Jesienne grzybobranie w Puszczy Knyszyńskiej – przewodnik',
    excerpt: 'Gdzie zbierać grzyby w Puszczy Knyszyńskiej? Najlepsze miejsca, gatunki, sezon i praktyczne porady.',
    image: blogSzlak,
    date: '2026-04-09',
    readTime: '10 min',
    keywords: ['grzybobranie Puszcza Knyszyńska', 'grzyby Podlasie'],
  },
  {
    slug: 'workation-podlasie',
    title: 'Workation na Podlasiu: Połącz pracę zdalną z odpoczynkiem',
    excerpt: 'Domek w lesie z Wi-Fi, ciszą i naturą. Połącz produktywną pracę zdalną z regeneracją w Puszczy Knyszyńskiej.',
    image: blogCoRobic,
    date: '2026-04-09',
    readTime: '9 min',
    keywords: ['workation Podlasie', 'praca zdalna w lesie'],
  },
  {
    slug: 'podlasie-z-psem',
    title: 'Podlasie z psem – gdzie szukać noclegu i na co zwrócić uwagę?',
    excerpt: 'Planujesz wakacje z psem? Ogrodzony ogród, szlaki leśne i porady na wyjazd z czworonogiem na Podlasie.',
    image: blogSzlak,
    date: '2026-04-09',
    readTime: '9 min',
    keywords: ['Podlasie z psem', 'nocleg z psem Supraśl'],
  },
  {
    slug: 'kraina-otwartych-okiennic',
    title: 'Kraina Otwartych Okiennic: Magiczna podróż w czasie na Podlasiu',
    excerpt: 'Kolorowe okiennice, drewniana architektura i tradycje trwające od pokoleń. Odkryj szlak malowanych chałup.',
    image: blogKruszyniany,
    date: '2026-04-09',
    readTime: '11 min',
    keywords: ['Kraina Otwartych Okiennic', 'szlak Podlasie'],
  },
  {
    slug: 'szlaki-puszcza-knyszynska',
    title: 'Szlaki piesze i rowerowe w Puszczy Knyszyńskiej',
    excerpt:
      'Szlaki piesze i rowerowe dla rodzin i zaawansowanych. Green Velo, Arboretum Kopna Góra, Wzgórza Świętojańskie. Mapy i praktyczne porady.',
    image: blogSzlak,
    date: '2026-04-09',
    readTime: '14 min',
    keywords: ['szlaki Puszcza Knyszyńska', 'szlaki rowerowe Supraśl'],
  },
  {
    slug: 'suprasl-na-weekend',
    title: 'Supraśl na weekend – gotowy plan zwiedzania na 2 dni',
    excerpt:
      'Gotowy plan na idealny weekend w Supraślu: Monaster, Muzeum Ikon, kuchnia podlaska, Puszcza Knyszyńska i relaks. Dzień po dniu!',
    image: blogWeekendPlan,
    date: '2026-04-09',
    readTime: '12 min',
    keywords: ['Supraśl na weekend', 'plan Supraśl 2 dni'],
  },
  {
    slug: 'suprasl-z-dziecmi',
    title: 'Supraśl z dziećmi – atrakcje dla rodzin',
    excerpt:
      'Plaża miejska, muzea interaktywne, Park Linowy, łatwe szlaki w Puszczy Knyszyńskiej i restauracje przyjazne dzieciom. Rodzinny wyjazd na Podlasie!',
    image: blogCoRobic,
    date: '2026-04-09',
    readTime: '11 min',
    keywords: ['Supraśl z dziećmi', 'atrakcje dla dzieci Supraśl'],
  },
  {
    slug: 'aktywny-wypoczynek-suprasl',
    title: 'Supraśl Aktywnie: 5 Pomysłów na Weekend w Puszczy Knyszyńskiej',
    excerpt:
      'Szlaki rowerowe, spływy kajakowe, nordic walking, narciarstwo biegowe i Arboretum Kopna Góra.',
    image: blogCoRobic,
    date: '2026-04-09',
    readTime: '11 min',
    keywords: ['aktywny wypoczynek Supraśl', 'szlaki rowerowe Supraśl'],
  },
  {
    slug: 'uzdrowisko-spa-suprasl',
    title: 'Uzdrowisko Supraśl: Borowina, SPA i regeneracja sił',
    excerpt:
      'Jedyne uzdrowisko na Podlasiu. Borowina z Podsokołdy, grota solna, strefy wellness i sanatoria.',
    image: blogSupraslUzdrowisko,
    date: '2026-04-09',
    readTime: '10 min',
    keywords: ['uzdrowisko Supraśl', 'SPA Supraśl', 'borowina'],
  },
  {
    slug: 'przewodnik-kulinarny-suprasl',
    title: 'Smaki Supraśla: Gdzie zjeść kartacze i babkę ziemniaczaną?',
    excerpt:
      'Kulinarny przewodnik po Supraślu — restauracje, kuchnia tatarska, kawiarnie i lokalne produkty.',
    image: blogRestauracje,
    date: '2026-04-09',
    readTime: '12 min',
    keywords: ['restauracje Supraśl', 'kuchnia podlaska', 'kartacze'],
  },
  {
    slug: 'wydarzenia-suprasl-2026',
    title: 'Największe imprezy i wydarzenia w Supraślu 2026 – kalendarz + daty',
    excerpt:
      'Pełny kalendarz wydarzeń w Supraślu na 2026: Dni Supraśla, Festiwal Wertep, Święto Chleba i więcej. Daty, opisy i gdzie nocować.',
    image: blogWydarzenia,
    date: '2026-03-30',
    readTime: '12 min',
    keywords: ['wydarzenia Supraśl 2026', 'imprezy Supraśl', 'festiwale Podlasie'],
  },
  {
    slug: 'puszcza-knyszynska-historie',
    title: 'Puszcza Knyszyńska historie – 7 niezwykłych opowieści',
    excerpt:
      'Galeria Leśna Powstania Styczniowego, legendy, duchy powstańców i dom w lesie z jacuzzi 300 m od atrakcji.',
    image: blogPuszczaHistorie,
    date: '2026-03-28',
    readTime: '14 min',
    keywords: ['Puszcza Knyszyńska historie', 'Galeria Leśna'],
  },
  {
    slug: 'co-robic-suprasl',
    title: 'Co robić w Supraślu? Kompletny przewodnik po atrakcjach',
    excerpt:
      'Monaster, Muzeum Ikon, kajaki, szlaki w Puszczy Knyszyńskiej i kuchnia regionalna. Wszystko, co warto zobaczyć w Supraślu.',
    image: blogCoRobic,
    date: '2026-03-25',
    readTime: '10 min',
    keywords: ['co robić w Supraślu', 'Supraśl atrakcje'],
  },
  {
    slug: 'weekend-suprasl-plan',
    title: 'Weekend w Supraślu – plan pobytu na 2-3 dni',
    excerpt:
      'Sprawdzony plan na weekend w Supraślu: zwiedzanie, szlaki, kajaki, kuchnia regionalna i relaks w jacuzzi pod gwiazdami.',
    image: blogWeekendPlan,
    date: '2026-03-25',
    readTime: '9 min',
    keywords: ['weekend Supraśl', 'plan pobytu Supraśl'],
  },
  {
    slug: 'najlepsze-miejsca-puszcza-knyszynska',
    title: 'Najlepsze miejsca w Puszczy Knyszyńskiej – co warto zobaczyć',
    excerpt:
      'Rezerwaty, szlaki, arboretum, rzeki i dzikie ostępy. Kompletny przewodnik po największym lesie Podlasia.',
    image: blogNajlepszeMiejsca,
    date: '2026-03-25',
    readTime: '11 min',
    keywords: ['Puszcza Knyszyńska', 'najlepsze miejsca'],
  },
  {
    slug: 'kajaki-suprasl',
    title: 'Kajaki Supraśl – przewodnik po spływach rzeką Supraśl',
    excerpt:
      'Spokojna rzeka, dzika przyroda i Puszcza Knyszyńska z poziomu wody. Wszystko o spływach kajakowych w Supraślu.',
    image: blogKajaki,
    date: '2026-03-15',
    readTime: '11 min',
    keywords: ['kajaki Supraśl', 'spływ Supraśl'],
  },
  {
    slug: 'restauracje-suprasl',
    title: 'Restauracje Supraśl – gdzie zjeść podczas pobytu',
    excerpt:
      'Kartacze, babka ziemniaczana, sękacz i kuchnia tatarska. Przewodnik kulinarny po Supraślu i Podlasiu.',
    image: blogRestauracje,
    date: '2026-03-15',
    readTime: '12 min',
    keywords: ['restauracje Supraśl', 'gdzie zjeść Supraśl'],
  },
  {
    slug: 'szlak-bioroznorodnosci-suprasl',
    title: 'Szlak Bioróżnorodności Supraśl – spacer w Puszczy',
    excerpt:
      'Edukacyjna ścieżka o długości 7 km przez zróżnicowane ekosystemy Puszczy Knyszyńskiej. Flora, fauna i tablice edukacyjne.',
    image: blogSzlakBio,
    date: '2026-03-14',
    readTime: '10 min',
    keywords: ['Supraśl szlak bioróżnorodności', 'atrakcje Supraśl'],
  },
  {
    slug: 'kruszyniany-tatarska-wies',
    title: 'Kruszyniany – tatarska wieś Podlasia',
    excerpt:
      'Meczet, kuchnia tatarska i wielowiekowa tradycja — odkryj jedno z najbardziej niezwykłych miejsc w Polsce.',
    image: blogKruszyniany,
    date: '2026-03-14',
    readTime: '9 min',
    keywords: ['Kruszyniany atrakcje', 'tatarska wieś Podlasie'],
  },
  {
    slug: 'suprasl-atrakcje-uzdrowisko',
    title: 'Supraśl – atrakcje uzdrowiska Podlasia',
    excerpt:
      'Monaster, Muzeum Ikon, bulwary, Teatr Wierszalin i uzdrowiskowy klimat. Kompletny przewodnik po perle Podlasia.',
    image: blogSupraslUzdrowisko,
    date: '2026-03-14',
    readTime: '12 min',
    keywords: ['Supraśl atrakcje', 'co zobaczyć Supraśl'],
  },
  {
    slug: 'supraski-system-wodny',
    title: 'Supraski System Wodny – zapomniany cud inżynierii Podlasia',
    excerpt:
      'Odkryj fascynującą historię supraskiego systemu wodnego – unikatowego dziedzictwa hydrotechnicznego Podlasia.',
    image: blogKanal,
    date: '2026-03-10',
    readTime: '12 min',
    keywords: ['Supraski System Wodny', 'atrakcje Supraśl'],
  },
  {
    slug: 'szlak-powstania-styczniowego-suprasl',
    title: 'Szlak Powstania Styczniowego w Puszczy Knyszyńskiej',
    excerpt:
      'Śladami powstańców styczniowych przez najpiękniejsze zakątki Puszczy Knyszyńskiej. Historia, miejsca pamięci i szlaki.',
    image: blogPomnik,
    date: '2026-03-08',
    readTime: '10 min',
    keywords: ['Szlak Powstania Styczniowego', 'historia Supraśl'],
  },
  {
    slug: 'suprasl-atrakcje-national-geographic',
    title: 'Supraśl – perła Podlasia według podróżników',
    excerpt:
      'Co sprawia, że Supraśl jest jednym z najpiękniejszych miasteczek Podlasia? Architektura, Monaster i slow tourism.',
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
        title="Blog Supraśl – atrakcje i szlaki | In The Woods"
        description="Blog o Supraślu – atrakcje, szlaki, historia i turystyka w Puszczy Knyszyńskiej. Przewodnik turystyczny."
        canonical="https://www.suprasl.online/blog"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Strona główna',
              item: 'https://www.suprasl.online/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: 'https://www.suprasl.online/blog',
            },
          ],
        }}
      />
      {/* Navbar */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="font-display text-xl tracking-wide text-foreground">
            In The Woods
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/blog" className="nav-link text-foreground font-medium">
              Blog
            </Link>
            <Link
              to="/noclegi-suprasl"
              className="nav-link text-foreground/70 hover:text-foreground"
            >
              Noclegi
            </Link>
            <Link
              to="/atrakcje-suprasl"
              className="nav-link text-foreground/70 hover:text-foreground"
            >
              Atrakcje
            </Link>
            <Link
              to="/weekend-suprasl"
              className="nav-link text-foreground/70 hover:text-foreground"
            >
              Weekend
            </Link>
            <a href="tel:+48722765101" className="btn-primary text-xs py-2.5 px-6">
              Zadzwoń
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-20 md:py-28 px-6 md:px-12 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Blog — Supraśl i okolice
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Odkryj historię, atrakcje i szlaki Supraśla oraz Puszczy Knyszyńskiej. Przewodnik
            turystyczny dla miłośników natury i slow travel.
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
                  width="400"
                  height="225"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="font-heading text-xl font-light text-foreground group-hover:text-primary transition-colors">
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
          <h2 className="font-heading text-3xl font-light text-foreground">
            Planujesz wizytę w Supraślu?
          </h2>
          <p className="text-muted-foreground">
            In The Woods to komfortowy dom w lesie z jacuzzi — idealna baza wypadowa na zwiedzanie
            okolicy.
          </p>
          <a href="tel:+48722765101" className="btn-primary inline-flex items-center gap-2">
            <Phone className="w-4 h-4" /> Sprawdź dostępność
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-foreground/70 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="font-display text-lg text-foreground">In The Woods</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="hover:text-primary transition-colors">
              Strona główna
            </Link>
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/noclegi-suprasl" className="hover:text-primary transition-colors">
              Noclegi Supraśl
            </Link>
            <Link to="/domek-suprasl" className="hover:text-primary transition-colors">
              Domek Supraśl
            </Link>
            <Link to="/domek-z-jacuzzi-podlasie" className="hover:text-primary transition-colors">
              Domek z jacuzzi
            </Link>
            <Link to="/dom-w-lesie-suprasl" className="hover:text-primary transition-colors">
              Dom w lesie
            </Link>
            <Link to="/weekend-suprasl" className="hover:text-primary transition-colors">
              Weekend Supraśl
            </Link>
            <Link to="/wieczor-panienski-suprasl" className="hover:text-primary transition-colors">
              Wieczór panieński
            </Link>
            <Link to="/atrakcje-suprasl" className="hover:text-primary transition-colors">
              Atrakcje Supraśla
            </Link>
            <Link to="/puszcza-knyszynska-nocleg" className="hover:text-primary transition-colors">
              Puszcza Knyszyńska
            </Link>
            <Link to="/informator" className="hover:text-primary transition-colors">
              Informator gościa
            </Link>
          </div>
          <p className="text-xs text-foreground/40">© 2026 In The Woods. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
