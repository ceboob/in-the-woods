import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Phone, ArrowRight, Calendar, Clock } from 'lucide-react';
import blogKanal from '@/assets/blog-kanal-kopanica-optimized.webp';
import blogPomnik from '@/assets/blog-pomnik-powstanie-optimized.webp';
import blogMonaster from '@/assets/blog-monaster-suprasl-optimized.webp';
import blogSzlak from '@/assets/blog-szlak-lesny-optimized.webp';
import blogSzlakBio from '@/assets/blog-szlak-bioroznorodnosci-optimized.webp';
import blogKruszyniany from '@/assets/blog-kruszyniany-meczet-optimized.webp';
import blogSupraslUzdrowisko from '@/assets/blog-suprasl-atrakcje-uzdrowisko-optimized.webp';
import blogKajaki from '@/assets/blog-kajaki-suprasl.jpg';
import blogRestauracje from '@/assets/blog-restauracje-suprasl.jpg';
import blogCoRobic from '@/assets/blog-co-robic-suprasl-optimized.webp';
import blogPuszczaHistorie from '@/assets/blog-puszcza-historie-hero-optimized.webp';
import blogPuszczaPanorama from '@/assets/blog-puszcza-panorama.webp';
import blogMushrooms from '@/assets/article-optimized.webp';
import blogNoService from '@/assets/brak-internetu-w-telefonie-co-robic-1536x878.webp';
import blogMeadow from '@/assets/Fot.-Andrzej-Stachurski-1-optimized.webp';
import blogBike from '@/assets/puszcza_knyszynska--optimized.webp';

const articles = [
  {
    slug: 'bialystok-i-okolice-co-zobaczyc',
    title: 'Co warto zobaczyć w\u00a0Białymstoku i\u00a0okolicach – plan na 3\u00a0dni',
    excerpt:
      'Pałac Branickich, drewniane Bojary, Tykocin, kładka w\u00a0Waniewie i\u00a0tatarskie meczety. Długi weekend na Podlasiu z\u00a0bazą w\u00a0lesie koło Supraśla.',
    image: blogPuszczaPanorama,
    date: '2026-11-01',
    readTime: '11\u00a0min',
    keywords: ['co zobaczyć w\u00a0Białymstoku', 'Białystok i\u00a0okolice', 'weekend na Podlasiu'],
  },
  {
    slug: 'jesien-w-suprasliu-2026-wydarzenia-kulturalne',
    title: 'Jesień w\u00a0Supraślu 2026 – jak zaplanować pobyt',
    excerpt:
      'Koncerty, spektakle, grzyby i\u00a0kolorowy las. Jak zaplanować jesienny pobyt w\u00a0Supraślu, żeby nie przegapić tego, co najlepsze.',
    image: blogPuszczaPanorama,
    date: '2026-10-03',
    readTime: '4\u00a0min',
    keywords: ['jesień w\u00a0Supraślu', 'Supraśl jesienią', 'wydarzenia w\u00a0Supraślu'],
  },
  {
    slug: 'rykowisko-jeleni-puszcza-knyszynska',
    title: 'Rykowisko jeleni na Podlasiu – gdzie i\u00a0kiedy je usłyszeć?',
    excerpt:
      'Dowiedz się, kiedy zwykle przypada rykowisko jeleni i\u00a0jak odpowiedzialnie nasłuchiwać odgłosów przyrody w\u00a0okolicach Supraśla.',
    image: blogMeadow,
    date: '2026-08-12',
    readTime: '6\u00a0min',
    keywords: [
      'rykowisko jeleni',
      'rykowisko jeleni na Podlasiu',
      'rykowisko w\u00a0Puszczy Knyszyńskiej',
      'kiedy jest rykowisko jeleni',
      'gdzie usłyszeć rykowisko jeleni',
      'obserwacja jeleni Supraśl',
    ],
  },
  {
    slug: 'suprasl-zima',
    title: 'Supraśl zimą – magia Podlasia i\u00a0Puszczy Knyszyńskiej',
    excerpt:
      'Odkryj zaśnieżone szlaki, ślady dzikich zwierząt, ciszę Poczopek i\u00a0kulig z\u00a0ogniskiem w\u00a0In The Woods Konne.',
    image: '/images/winter/puszcza-knyszynska-zima.webp',
    date: '2026-09-30',
    readTime: '8\u00a0min',
    keywords: ['Supraśl zimą', 'Podlasie zimą', 'Puszcza Knyszyńska', 'kulig Supraśl'],
  },
  {
    slug: 'puszcza-knyszynska-przewodnik',
    title: 'Puszcza Knyszyńska — kompletny przewodnik: atrakcje, szlaki, mapy GPX',
    excerpt:
      'Odkryj Puszczę Knyszyńską: najpiękniejsze szlaki piesze, rowerowe i\u00a0narciarskie z\u00a0mapami GPX do pobrania. Kajaki, rykowisko, Kruszyniany i\u00a0Supraśl.',
    image: blogMeadow,
    date: '2026-04-09',
    readTime: '15\u00a0min',
    keywords: ['Puszcza Knyszyńska', 'szlaki GPX', 'atrakcje', 'przewodnik'],
  },
  {
    slug: 'romantyczny-weekend-podlasie',
    title: 'Romantyczne miejsca na Podlasiu – weekend we dwoje',
    excerpt:
      'Monaster o\u00a0zachodzie słońca, Góra Św. Anny, Noc Kupały i\u00a0balia pod gwiazdami. 13\u00a0romantycznych miejsc i\u00a0plan weekendu we dwoje.',
    image: blogMonaster,
    date: '2026-04-09',
    readTime: '10\u00a0min',
    keywords: ['romantyczne miejsca na Podlasiu', 'weekend we dwoje'],
  },
  {
    slug: 'cyfrowy-detoks-las',
    title: 'Cyfrowy detoks w\u00a0lesie: przerwa od ekranów',
    excerpt:
      'Telefon do szuflady, las za oknem. Jak zrobić sobie przerwę od powiadomień i\u00a0nie zwariować po pierwszej godzinie.',
    image: blogMeadow,
    date: '2026-04-09',
    readTime: '9\u00a0min',
    keywords: ['cyfrowy detoks', 'przerwa od ekranów', 'odpoczynek w\u00a0lesie'],
  },
  {
    slug: 'grzybobranie-puszcza-knyszynska',
    title: 'Grzybobranie w\u00a0Puszczy Knyszyńskiej — zasady przed spacerem',
    excerpt:
      'Gdzie wolno zbierać, czego nie ruszać i\u00a0jak nie wrócić z\u00a0koszem muchomorów. Grzybobranie w\u00a0Puszczy Knyszyńskiej bez stresu.',
    image: blogMushrooms,
    date: '2026-04-09',
    readTime: '10\u00a0min',
    keywords: ['grzybobranie Puszcza Knyszyńska', 'grzyby Podlasie'],
  },
  {
    slug: 'workation-podlasie',
    title: 'Praca zdalna podczas pobytu na Podlasiu',
    excerpt:
      'Starlink, widok na sosny i\u00a0balia po pracy. Jak pracować zdalnie z\u00a0lasu i\u00a0nie dać się namówić na wieczną drzemkę.',
    image: blogCoRobic,
    date: '2026-04-09',
    readTime: '9\u00a0min',
    keywords: ['workation Podlasie', 'praca zdalna w\u00a0lesie'],
  },
  {
    slug: 'podlasie-z-psem',
    title: 'Noclegi Supraśl z\u00a0psem – przewodnik po Puszczy',
    excerpt:
      'Spacery, smycz, kleszcze i\u00a0nocleg, gdzie pies jedzie gratis. Praktyczny przewodnik po Supraślu z\u00a0psem.',
    image: blogMeadow,
    date: '2026-04-09',
    readTime: '9\u00a0min',
    keywords: ['Podlasie z\u00a0psem', 'nocleg z\u00a0psem Supraśl'],
  },
  {
    slug: 'kraina-otwartych-okiennic',
    title: 'Kraina Otwartych Okiennic: podróż w\u00a0czasie po Podlasiu',
    excerpt:
      'Kolorowe okiennice, drewniane chałupy i\u00a0wsie, w\u00a0których czas płynie wolniej. Szlak, którego nie da się przejechać bez zatrzymywania się co kilometr.',
    image: blogKruszyniany,
    date: '2026-04-09',
    readTime: '11\u00a0min',
    keywords: ['Kraina Otwartych Okiennic', 'szlak Podlasie'],
  },
  {
    slug: 'suprasl-z-dziecmi',
    title: 'Supraśl z\u00a0dziećmi – atrakcje dla rodzin',
    excerpt:
      'Plaża miejska, muzea interaktywne, Park Linowy, łatwe szlaki w\u00a0Puszczy Knyszyńskiej i\u00a0restauracje przyjazne dzieciom. Rodzinny wyjazd na Podlasie!',
    image: blogCoRobic,
    date: '2026-04-09',
    readTime: '11\u00a0min',
    keywords: ['Supraśl z\u00a0dziećmi', 'atrakcje dla dzieci Supraśl'],
  },
  {
    slug: 'aktywny-wypoczynek-suprasl',
    title: 'Supraśl aktywnie: 5 pomysłów na weekend w\u00a0Puszczy Knyszyńskiej',
    excerpt:
      'Szlaki rowerowe, spływy kajakowe, nordic walking, narciarstwo biegowe i\u00a0Arboretum Kopna Góra.',
    image: blogBike,
    date: '2026-04-09',
    readTime: '11\u00a0min',
    keywords: ['aktywny wypoczynek Supraśl', 'szlaki rowerowe Supraśl'],
  },
  {
    slug: 'uzdrowisko-spa-suprasl',
    title: 'Uzdrowisko Supraśl – wellness i\u00a0wypoczynek',
    excerpt:
      'Supraśl to prawdziwe uzdrowisko. Gdzie iść na zabiegi i\u00a0masaż, kiedy las i\u00a0balia to za mało.',
    image: blogSupraslUzdrowisko,
    date: '2026-04-09',
    readTime: '10\u00a0min',
    keywords: ['uzdrowisko Supraśl', 'wellness Supraśl', 'SPA Supraśl'],
  },
  {
    slug: 'przewodnik-kulinarny-suprasl',
    title: 'Gdzie zjeść w\u00a0Supraślu? Babka, kartacze i\u00a0najlepsze lokale',
    excerpt:
      'Babka mistrzyni świata, kartacze, sękacz i\u00a0tatarski pierekaczewnik. Restauracje, bary i\u00a0plan kulinarnego weekendu w\u00a0Supraślu.',
    image: blogRestauracje,
    date: '2026-04-09',
    readTime: '9\u00a0min',
    keywords: ['gdzie zjeść w\u00a0Supraślu', 'restauracje Supraśl', 'babka ziemniaczana'],
  },
  {
    slug: 'puszcza-knyszynska-historie',
    title: '7 historii z\u00a0Puszczy Knyszyńskiej, o\u00a0których nie uczyli w\u00a0szkole',
    excerpt:
      'Galeria Leśna Powstania Styczniowego i\u00a0inne miejsca związane z\u00a0historią regionu.',
    image: blogPuszczaHistorie,
    date: '2026-03-28',
    readTime: '14\u00a0min',
    keywords: ['Puszcza Knyszyńska historie', 'Galeria Leśna'],
  },
  {
    slug: 'kajaki-suprasl',
    title: 'Kajaki Supraśl – przewodnik po spływach rzeką Supraśl',
    excerpt:
      'Spokojna rzeka, dzika przyroda i\u00a0Puszcza Knyszyńska z\u00a0poziomu wody. Wszystko o\u00a0spływach kajakowych w\u00a0Supraślu.',
    image: blogKajaki,
    date: '2026-03-15',
    readTime: '11\u00a0min',
    keywords: ['kajaki Supraśl', 'spływ Supraśl'],
  },
  {
    slug: 'szlak-bioroznorodnosci-suprasl',
    title: 'Szlak Bioróżnorodności w\u00a0Supraślu – informacje przed spacerem',
    excerpt:
      'Leśna ścieżka przy Supraślu, dobra na spacer z\u00a0dziećmi i\u00a0na pierwszą randkę z\u00a0puszczą.',
    image: blogSzlakBio,
    date: '2026-03-14',
    readTime: '10\u00a0min',
    keywords: ['Supraśl szlak bioróżnorodności', 'atrakcje Supraśl'],
  },
  {
    slug: 'kruszyniany-tatarska-wies',
    title: 'Kruszyniany – tatarska wieś Podlasia',
    excerpt:
      'Drewniany meczet, mizar i\u00a0tatarska kuchnia, dla której warto przyjechać głodnym. Kruszyniany to wycieczka na cały dzień.',
    image: blogKruszyniany,
    date: '2026-03-14',
    readTime: '9\u00a0min',
    keywords: ['Kruszyniany atrakcje', 'tatarska wieś Podlasie'],
  },
  {
    slug: 'suprasl-atrakcje-uzdrowisko',
    title: 'Supraśl – atrakcje uzdrowiska Podlasia',
    excerpt:
      'Monaster, Muzeum Ikon, bulwary i\u00a0Teatr Wierszalin. Co zobaczyć w\u00a0uzdrowisku Supraśl, gdy wyjdziecie z\u00a0lasu.',
    image: blogSupraslUzdrowisko,
    date: '2026-03-14',
    readTime: '12\u00a0min',
    keywords: ['Supraśl atrakcje', 'co zobaczyć Supraśl'],
  },
  {
    slug: 'supraski-system-wodny',
    title: 'Rzeka Supraśl i\u00a0okolica — informacje dla odwiedzających',
    excerpt:
      'Rzeka Supraśl od kajaka po bulwary. Gdzie pospacerować nad wodą i\u00a0od czego zacząć spływ.',
    image: blogKanal,
    date: '2026-03-10',
    readTime: '4\u00a0min',
    keywords: ['rzeka Supraśl', 'spacery Supraśl', 'kajaki Supraśl'],
  },
  {
    slug: 'szlak-powstania-styczniowego-suprasl',
    title: 'Szlak Powstania Styczniowego w\u00a0Puszczy Knyszyńskiej',
    excerpt:
      'Śladami powstańców styczniowych przez najpiękniejsze zakątki Puszczy Knyszyńskiej. Historia, miejsca pamięci i\u00a0szlaki.',
    image: blogPomnik,
    date: '2026-03-08',
    readTime: '10\u00a0min',
    keywords: ['Szlak Powstania Styczniowego', 'historia Supraśl'],
  },
  {
    slug: 'szlaki-piesze-rowerowe-suprasl',
    title: 'Najlepsze szlaki piesze i\u00a0rowerowe – Supraśl i\u00a0Puszcza Knyszyńska',
    excerpt:
      'Szlaki piesze i\u00a0rowerowe z\u00a0Supraśla: od krótkich spacerów po całodniowe trasy przez Puszczę Knyszyńską.',
    image: blogBike,
    date: '2026-03-01',
    readTime: '13\u00a0min',
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
        title="Blog Supraśl – atrakcje i&nbsp;szlaki | In The Woods"
        description="Szlaki, knajpy, rykowisko i&nbsp;tatarskie pierogi. Blog o&nbsp;Supraślu i&nbsp;Puszczy Knyszyńskiej pisany przez gospodarzy z&nbsp;Konnego."
        canonical="https://www.suprasl.online/blog"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': 'https://www.suprasl.online/blog#webpage',
            url: 'https://www.suprasl.online/blog',
            name: 'Blog Supraśl – atrakcje i\u00a0szlaki | In The Woods',
            description:
              'Blog o\u00a0Supraślu – atrakcje, szlaki, historia i\u00a0turystyka w\u00a0Puszczy Knyszyńskiej. Przewodnik turystyczny.',
            mainEntity: {
              '@type': 'Blog',
              '@id': 'https://www.suprasl.online/blog#blog',
              name: 'Blog In The Woods',
              url: 'https://www.suprasl.online/blog',
            },
          },
          {
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
          },
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Artykuły bloga In The Woods',
            itemListElement: articles.map((article, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: article.title,
              url: `https://www.suprasl.online/blog/${article.slug}`,
            })),
          },
        ]}
      />
      {/* Navbar */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="font-display text-xl tracking-wide text-foreground logo-glow">
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
            Blog — Supraśl i&nbsp;okolice
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Szlaki, knajpy, rykowisko i&nbsp;tatarskie pierogi. Piszą gospodarze z&nbsp;Konnego,
            którzy sprawdzili to na własnych nogach (i&nbsp;żołądkach).
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
              {article.image && (
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={article.image}
                    srcSet={`${article.image} 600w`}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={
                      article.slug === 'jesien-w-suprasliu-2026-wydarzenia-kulturalne'
                        ? 'lazy'
                        : article.slug === articles[0].slug
                          ? 'eager'
                          : 'lazy'
                    }
                    decoding="async"
                    width="600"
                    height="338"
                  />
                </div>
              )}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <time dateTime={article.date}>{article.date}</time>
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
            Planujecie wizytę w&nbsp;Supraślu??
          </h2>
          <p className="text-muted-foreground">
            Śpijcie u&nbsp;nas: cały dom z&nbsp;bali w&nbsp;lesie, z&nbsp;kominkiem i&nbsp;balią,
            10&nbsp;minut od Supraśla.
          </p>
          <a href="tel:+48722765101" className="btn-primary inline-flex items-center gap-2">
            <Phone className="w-4 h-4" /> Sprawdź dostępność
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white/70 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="font-display text-lg text-white logo-glow">In The Woods</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              Strona główna
            </Link>
            <Link to="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link to="/noclegi-suprasl" className="hover:text-white transition-colors">
              Noclegi Supraśl
            </Link>
            <Link to="/domek-suprasl" className="hover:text-white transition-colors">
              Domek Supraśl
            </Link>
            <Link to="/domek-z-jacuzzi-podlasie" className="hover:text-white transition-colors">
              Domek z&nbsp;jacuzzi
            </Link>
            <Link to="/dom-w-lesie-suprasl" className="hover:text-white transition-colors">
              Dom w&nbsp;lesie
            </Link>
            <Link to="/weekend-suprasl" className="hover:text-white transition-colors">
              Weekend Supraśl
            </Link>
            <Link to="/wieczor-panienski-suprasl" className="hover:text-white transition-colors">
              Wieczór panieński
            </Link>
            <Link to="/atrakcje-suprasl" className="hover:text-white transition-colors">
              Atrakcje Supraśla
            </Link>
            <Link to="/puszcza-knyszynska-nocleg" className="hover:text-white transition-colors">
              Puszcza Knyszyńska
            </Link>
            <Link to="/informator" className="hover:text-white transition-colors">
              Informator gościa
            </Link>
          </div>
          <p className="text-xs text-white/40">© 2026 In The Woods. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
