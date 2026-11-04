import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Phone, ArrowRight, Calendar, Clock } from 'lucide-react';
import blogKanal from '@/assets/blog-kanal-kopanica-optimized.webp';
import blogMeadow from '@/assets/Fot.-Andrzej-Stachurski-1-optimized.webp';
import blogRestauracje from '@/assets/blog-restauracje-suprasl.jpg';
import blogMushrooms from '@/assets/article-optimized.webp';
import blogBike from '@/assets/puszcza_knyszynska--optimized.webp';
import winterForest from '@/assets/winter-forest.webp';
import { commonsPhotos } from '@/lib/commonsPhotos';

const articles = [
  {
    slug: 'bialystok-i-okolice-co-zobaczyc',
    title: 'Co warto zobaczyć w\u00a0Białymstoku i\u00a0okolicach – plan na 3\u00a0dni',
    excerpt:
      'Pałac Branickich, drewniane Bojary, Tykocin, kładka w\u00a0Waniewie i\u00a0tatarskie meczety. Długi weekend na Podlasiu z\u00a0bazą w\u00a0lesie koło Supraśla.',
    image: commonsPhotos.bialystok.image,
    imageAlt: 'Pałac Branickich w Białymstoku po zmroku',
    imageCredit: commonsPhotos.bialystok,
    imageSrcSet: `${commonsPhotos.bialystok.image} 960w`,
    date: '2026-11-01',
    readTime: '11\u00a0min',
    keywords: ['co zobaczyć w\u00a0Białymstoku', 'Białystok i\u00a0okolice', 'weekend na Podlasiu'],
  },
  {
    slug: 'jesien-w-suprasliu-2026-wydarzenia-kulturalne',
    title: 'Jesień w\u00a0Supraślu 2026 – jak zaplanować pobyt',
    excerpt:
      'Koncerty, spektakle, grzyby i\u00a0kolorowy las. Jak zaplanować jesienny pobyt w\u00a0Supraślu, żeby nie przegapić tego, co najlepsze.',
    image: commonsPhotos.forest.image,
    imageAlt: 'Park Krajobrazowy Puszczy Knyszyńskiej w okolicy Kołodna',
    imageCredit: commonsPhotos.forest,
    imageSrcSet: `${commonsPhotos.forest.image} 600w`,
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
    image: winterForest,
    imageAlt: 'Zaśnieżony las w zimowej scenerii',
    date: '2026-09-30',
    readTime: '8\u00a0min',
    keywords: ['Supraśl zimą', 'Podlasie zimą', 'Puszcza Knyszyńska', 'kulig Supraśl'],
  },
  {
    slug: 'puszcza-knyszynska-przewodnik',
    title: 'Puszcza Knyszyńska — kompletny przewodnik: atrakcje, szlaki, mapy GPX',
    excerpt:
      'Odkryj Puszczę Knyszyńską: najpiękniejsze szlaki piesze, rowerowe i\u00a0narciarskie z\u00a0mapami GPX do pobrania. Kajaki, rykowisko, Kruszyniany i\u00a0Supraśl.',
    image: '/images/blog/og-puszcza-knyszynska-przewodnik.webp',
    imageAlt: 'Rowerzysta na leśnej drodze w Puszczy Knyszyńskiej',
    imageSrcSet: '/images/blog/og-puszcza-knyszynska-przewodnik.webp 1200w',
    date: '2026-04-09',
    readTime: '15\u00a0min',
    keywords: ['Puszcza Knyszyńska', 'szlaki GPX', 'atrakcje', 'przewodnik'],
  },
  {
    slug: 'romantyczny-weekend-podlasie',
    title: 'Romantyczne miejsca na Podlasiu – weekend we dwoje',
    excerpt:
      'Monaster o\u00a0zachodzie słońca, Góra Św. Anny, Noc Kupały i\u00a0balia pod gwiazdami. 13\u00a0romantycznych miejsc i\u00a0plan weekendu we dwoje.',
    image: commonsPhotos.monastery.image,
    imageAlt: 'Monaster Zwiastowania w Supraślu nad rzeką Supraśl',
    imageCredit: commonsPhotos.monastery,
    imageSrcSet: `${commonsPhotos.monastery.image} 960w`,
    date: '2026-04-09',
    readTime: '10\u00a0min',
    keywords: ['romantyczne miejsca na Podlasiu', 'weekend we dwoje'],
  },
  {
    slug: 'cyfrowy-detoks-las',
    title: 'Cyfrowy detoks w\u00a0lesie: przerwa od ekranów',
    excerpt:
      'Telefon do szuflady, las za oknem. Jak zrobić sobie przerwę od powiadomień i\u00a0nie zwariować po pierwszej godzinie.',
    image: commonsPhotos.forest.image,
    imageAlt: 'Leśny krajobraz Puszczy Knyszyńskiej w okolicy Kołodna',
    imageCredit: commonsPhotos.forest,
    imageSrcSet: `${commonsPhotos.forest.image} 600w`,
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
    image: '/images/blog/og-workation-podlasie.webp',
    imageAlt: 'Wschód słońca nad łąką we mgle — poranek na Podlasiu',
    imageSrcSet: '/images/blog/og-workation-podlasie.webp 1200w',
    date: '2026-04-09',
    readTime: '9\u00a0min',
    keywords: ['workation Podlasie', 'praca zdalna w\u00a0lesie'],
  },
  {
    slug: 'podlasie-z-psem',
    title: 'Noclegi Supraśl z\u00a0psem – przewodnik po Puszczy',
    excerpt:
      'Spacery, smycz, kleszcze i\u00a0nocleg, gdzie pies jedzie gratis. Praktyczny przewodnik po Supraślu z\u00a0psem.',
    image: '/images/blog/og-podlasie-z-psem.webp',
    imageAlt: 'Owczarek niemiecki z patykiem w pysku biegnący po trawie',
    imageSrcSet: '/images/blog/og-podlasie-z-psem.webp 1200w',
    date: '2026-04-09',
    readTime: '9\u00a0min',
    keywords: ['Podlasie z\u00a0psem', 'nocleg z\u00a0psem Supraśl'],
  },
  {
    slug: 'kraina-otwartych-okiennic',
    title: 'Kraina Otwartych Okiennic: podróż w\u00a0czasie po Podlasiu',
    excerpt:
      'Kolorowe okiennice, drewniane chałupy i\u00a0wsie, w\u00a0których czas płynie wolniej. Szlak, którego nie da się przejechać bez zatrzymywania się co kilometr.',
    image: commonsPhotos.woodenHouse.image,
    imageAlt: 'Tradycyjny drewniany dom w Golakowej Szyi, na szlaku Krainy Otwartych Okiennic',
    imageCredit: commonsPhotos.woodenHouse,
    imageSrcSet: `${commonsPhotos.woodenHouse.image} 600w`,
    date: '2026-04-09',
    readTime: '11\u00a0min',
    keywords: ['Kraina Otwartych Okiennic', 'szlak Podlasie'],
  },
  {
    slug: 'suprasl-z-dziecmi',
    title: 'Supraśl z\u00a0dziećmi – atrakcje dla rodzin',
    excerpt:
      'Plaża miejska, muzea interaktywne, Park Linowy, łatwe szlaki w\u00a0Puszczy Knyszyńskiej i\u00a0restauracje przyjazne dzieciom. Rodzinny wyjazd na Podlasie!',
    image: commonsPhotos.suprasl.image,
    imageAlt: 'Widok ogólny Supraśla',
    imageCredit: commonsPhotos.suprasl,
    imageSrcSet: `${commonsPhotos.suprasl.image} 600w`,
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
    image: commonsPhotos.suprasl.image,
    imageAlt: 'Supraśl nad rzeką Supraśl, z widokiem na monaster',
    imageCredit: commonsPhotos.suprasl,
    imageSrcSet: `${commonsPhotos.suprasl.image} 600w`,
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
    image: '/images/blog/puszcza-knyszynska-sciezka-w-sloncu.webp',
    imageAlt: 'Słoneczna ścieżka w Puszczy Knyszyńskiej',
    imageSrcSet: '/images/blog/puszcza-knyszynska-sciezka-w-sloncu.webp 1280w',
    date: '2026-03-28',
    readTime: '14\u00a0min',
    keywords: ['Puszcza Knyszyńska historie', 'Galeria Leśna'],
  },
  {
    slug: 'kajaki-suprasl',
    title: 'Kajaki Supraśl – przewodnik po spływach rzeką Supraśl',
    excerpt:
      'Spokojna rzeka, dzika przyroda i\u00a0Puszcza Knyszyńska z\u00a0poziomu wody. Wszystko o\u00a0spływach kajakowych w\u00a0Supraślu.',
    image: commonsPhotos.river.image,
    imageAlt: 'Rzeka Supraśl w Parku Krajobrazowym Puszczy Knyszyńskiej',
    imageCredit: commonsPhotos.river,
    imageSrcSet: `${commonsPhotos.river.image} 960w`,
    date: '2026-03-15',
    readTime: '11\u00a0min',
    keywords: ['kajaki Supraśl', 'spływ Supraśl'],
  },
  {
    slug: 'szlak-bioroznorodnosci-suprasl',
    title: 'Szlak Bioróżnorodności w\u00a0Supraślu – informacje przed spacerem',
    excerpt:
      'Leśna ścieżka przy Supraślu, dobra na spacer z\u00a0dziećmi i\u00a0na pierwszą randkę z\u00a0puszczą.',
    image: commonsPhotos.forest.image,
    imageAlt: 'Park Krajobrazowy Puszczy Knyszyńskiej w okolicy Kołodna',
    imageCredit: commonsPhotos.forest,
    imageSrcSet: `${commonsPhotos.forest.image} 600w`,
    date: '2026-03-14',
    readTime: '10\u00a0min',
    keywords: ['Supraśl szlak bioróżnorodności', 'atrakcje Supraśl'],
  },
  {
    slug: 'kruszyniany-tatarska-wies',
    title: 'Kruszyniany – tatarska wieś Podlasia',
    excerpt:
      'Drewniany meczet, mizar i\u00a0tatarska kuchnia, dla której warto przyjechać głodnym. Kruszyniany to wycieczka na cały dzień.',
    image: commonsPhotos.mosque.image,
    imageAlt: 'Drewniany meczet tatarski w Kruszynianach',
    imageCredit: commonsPhotos.mosque,
    imageSrcSet: `${commonsPhotos.mosque.image} 960w`,
    date: '2026-03-14',
    readTime: '9\u00a0min',
    keywords: ['Kruszyniany atrakcje', 'tatarska wieś Podlasie'],
  },
  {
    slug: 'suprasl-atrakcje-uzdrowisko',
    title: 'Supraśl – atrakcje uzdrowiska Podlasia',
    excerpt:
      'Monaster, Muzeum Ikon, bulwary i\u00a0Teatr Wierszalin. Co zobaczyć w\u00a0uzdrowisku Supraśl, gdy wyjdziecie z\u00a0lasu.',
    image: commonsPhotos.monastery.image,
    imageAlt: 'Monaster Zwiastowania w Supraślu nad rzeką Supraśl',
    imageCredit: commonsPhotos.monastery,
    imageSrcSet: `${commonsPhotos.monastery.image} 960w`,
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
    image: '/images/blog/szlak-powstania-styczniowego-galeria-rzezb.webp',
    imageAlt: 'Drewniane rzeźby przy Szlaku Powstania Styczniowego',
    imageSrcSet: '/images/blog/szlak-powstania-styczniowego-galeria-rzezb.webp 1600w',
    date: '2026-03-08',
    readTime: '10\u00a0min',
    keywords: ['Szlak Powstania Styczniowego', 'historia Supraśl'],
  },
  {
    slug: 'szlaki-piesze-rowerowe-suprasl',
    title: 'Najlepsze szlaki piesze i\u00a0rowerowe – Supraśl i\u00a0Puszcza Knyszyńska',
    excerpt:
      'Szlaki piesze i\u00a0rowerowe z\u00a0Supraśla: od krótkich spacerów po całodniowe trasy przez Puszczę Knyszyńską.',
    image: '/images/blog/szlaki-suprasl-droga-lesna.webp',
    imageAlt: 'Leśna droga w Puszczy Knyszyńskiej w okolicach Supraśla',
    imageSrcSet: '/images/blog/szlaki-suprasl-droga-lesna.webp 1600w',
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
              to="/"
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
            🌲 Szlaki, miejsca warte odwiedzenia i&nbsp;smaki Podlasia. Piszemy o&nbsp;Supraślu
            i&nbsp;Puszczy Knyszyńskiej z&nbsp;perspektywy gospodarzy mieszkających w&nbsp;Konnem.
          </p>
        </div>
      </header>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => {
            const imageAlt = 'imageAlt' in article ? article.imageAlt : article.title;
            const imageCredit = 'imageCredit' in article ? article.imageCredit : undefined;
            const imageSrcSet =
              'imageSrcSet' in article ? article.imageSrcSet : `${article.image} 600w`;

            return (
              <article
                key={article.slug}
                className="border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-card"
              >
                <Link to={`/blog/${article.slug}`} className="group block">
                  {article.image && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={article.image}
                        srcSet={imageSrcSet}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        alt={imageAlt}
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
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                      Czytaj więcej <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
                {imageCredit && (
                  <p className="px-6 pb-4 text-xs text-muted-foreground">
                    Zdjęcie:{' '}
                    <a
                      href={imageCredit.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-foreground"
                    >
                      {imageCredit.author}
                    </a>
                    {' · '}
                    <a
                      href={imageCredit.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-foreground"
                    >
                      {imageCredit.license}
                    </a>
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 bg-secondary">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl font-light text-foreground">
            Planujecie wizytę w&nbsp;Supraślu?
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
            <Link to="/" className="hover:text-white transition-colors">
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
