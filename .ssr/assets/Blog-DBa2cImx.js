import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { S as SEOHead } from "./SEOHead-CuqvaMLz.js";
import { Calendar, Clock, ArrowRight, Phone } from "lucide-react";
import { b as blogKanal } from "./blog-kanal-kopanica-CRCc1Xti.js";
import { b as blogPomnik } from "./blog-pomnik-powstanie-ByGrQUXC.js";
import { b as blogMonaster } from "./blog-monaster-suprasl-CkB4SpHd.js";
import { b as blogSzlakBio } from "./blog-szlak-bioroznorodnosci-CLScWiof.js";
import { b as blogKruszyniany } from "./blog-kruszyniany-meczet-DiwvtxRN.js";
import { b as blogSupraslUzdrowisko } from "./blog-suprasl-atrakcje-uzdrowisko-BGfzMuoz.js";
import { b as blogKajaki } from "./blog-kajaki-suprasl-CO3sU2p1.js";
import { b as blogRestauracje } from "./blog-restauracje-suprasl-DL-pWpsL.js";
import { h as heroImg } from "./blog-puszcza-historie-hero-Big5DvrT.js";
import "react-helmet-async";
const blogCoRobic = "/assets/blog-co-robic-suprasl-CQzU5fqT.jpg";
const blogWeekendPlan = "/assets/blog-weekend-plan-suprasl-BIUazrxu.jpg";
const blogNajlepszeMiejsca = "/assets/blog-najlepsze-miejsca-puszcza-BulconRN.jpg";
const blogWydarzenia = "/assets/blog-wydarzenia-suprasl-hero-VVydZbrp.jpg";
const blogMushrooms = "/assets/article-X3iwza-t.jpg";
const blogNoService = "/assets/brak-internetu-w-telefonie-co-robic-1536x878-YDpFlVd6.webp";
const blogMeadow = "/assets/Fot.-Andrzej-Stachurski-1-lHMekwEh.jpg";
const blogBike = "/assets/puszcza_knyszynska--DyoPOt-I.jpg";
const articles = [
  {
    slug: "puszcza-knyszynska-przewodnik",
    title: "Puszcza Knyszyńska — kompletny przewodnik: atrakcje, szlaki, mapy GPX",
    excerpt: "Odkryj Puszczę Knyszyńską: najpiękniejsze szlaki piesze, rowerowe i narciarskie z mapami GPX do pobrania. Kajaki, rykowisko, Kruszyniany i Supraśl.",
    image: blogMeadow,
    date: "2026-04-09",
    readTime: "15 min",
    keywords: ["Puszcza Knyszyńska", "szlaki GPX", "atrakcje", "przewodnik"]
  },
  {
    slug: "romantyczny-weekend-podlasie",
    title: "Pomysł na romantyczny weekend we dwoje na Podlasiu",
    excerpt: "Domek z kominkiem, gorąca balia pod gwiazdami, kolacja przy świecach w sercu Puszczy Knyszyńskiej. Zaplanuj idealny wypad we dwoje.",
    image: blogCoRobic,
    date: "2026-04-09",
    readTime: "10 min",
    keywords: ["romantyczny weekend Podlasie", "domek z kominkiem"]
  },
  {
    slug: "rykowisko-jeleni-puszcza-knyszynska",
    title: "Rykowisko jeleni na Podlasiu – niezwykły spektakl w Puszczy Knyszyńskiej",
    excerpt: "Poznaj najlepszy czas i zasady bezpiecznego obserwowania rykowiska jeleni w Puszczy Knyszyńskiej.",
    image: blogMeadow,
    date: "2026-08-12",
    readTime: "6 min",
    keywords: ["rykowisko jeleni", "Puszcza Knyszyńska", "atrakcje Supraśl"]
  },
  {
    slug: "cyfrowy-detoks-las",
    title: "Cyfrowy detoks w praktyce: Domek w środku lasu to najlepsze miejsce na reset",
    excerpt: "Potrzebujesz resetu od ekranów? Odkryj, dlaczego domek w lesie na Podlasiu to idealne miejsce na cyfrowy detoks.",
    image: blogNoService,
    date: "2026-04-09",
    readTime: "9 min",
    keywords: ["cyfrowy detoks", "domek w lesie"]
  },
  {
    slug: "grzybobranie-puszcza-knyszynska",
    title: "Jesienne grzybobranie w Puszczy Knyszyńskiej – przewodnik",
    excerpt: "Gdzie zbierać grzyby w Puszczy Knyszyńskiej? Najlepsze miejsca, gatunki, sezon i praktyczne porady.",
    image: blogMushrooms,
    date: "2026-04-09",
    readTime: "10 min",
    keywords: ["grzybobranie Puszcza Knyszyńska", "grzyby Podlasie"]
  },
  {
    slug: "workation-podlasie",
    title: "Workation na Podlasiu: Połącz pracę zdalną z odpoczynkiem",
    excerpt: "Domek w lesie z Wi-Fi, ciszą i naturą. Połącz produktywną pracę zdalną z regeneracją w Puszczy Knyszyńskiej.",
    image: blogCoRobic,
    date: "2026-04-09",
    readTime: "9 min",
    keywords: ["workation Podlasie", "praca zdalna w lesie"]
  },
  {
    slug: "podlasie-z-psem",
    title: "Podlasie z psem – gdzie szukać noclegu i na co zwrócić uwagę?",
    excerpt: "Planujesz wakacje z psem? Ogrodzony ogród, szlaki leśne i porady na wyjazd z czworonogiem na Podlasie.",
    image: blogMeadow,
    date: "2026-04-09",
    readTime: "9 min",
    keywords: ["Podlasie z psem", "nocleg z psem Supraśl"]
  },
  {
    slug: "kraina-otwartych-okiennic",
    title: "Kraina Otwartych Okiennic: Magiczna podróż w czasie na Podlasiu",
    excerpt: "Kolorowe okiennice, drewniana architektura i tradycje trwające od pokoleń. Odkryj szlak malowanych chałup.",
    image: blogKruszyniany,
    date: "2026-04-09",
    readTime: "11 min",
    keywords: ["Kraina Otwartych Okiennic", "szlak Podlasie"]
  },
  {
    slug: "szlaki-puszcza-knyszynska",
    title: "Puszcza Knyszyńska na piechotę i rowerem – najlepsze szlaki z Supraśla",
    excerpt: "Szlaki piesze i rowerowe dla rodzin i zaawansowanych. Green Velo, Arboretum Kopna Góra, Wzgórza Świętojańskie. Mapy i praktyczne porady.",
    image: blogBike,
    date: "2026-04-09",
    readTime: "14 min",
    keywords: ["szlaki Puszcza Knyszyńska", "szlaki rowerowe Supraśl"]
  },
  {
    slug: "suprasl-na-weekend",
    title: "Supraśl na weekend – gotowy plan zwiedzania na 2 dni",
    excerpt: "Gotowy plan na idealny weekend w Supraślu: Monaster, Muzeum Ikon, kuchnia podlaska, Puszcza Knyszyńska i relaks. Dzień po dniu!",
    image: blogWeekendPlan,
    date: "2026-04-09",
    readTime: "12 min",
    keywords: ["Supraśl na weekend", "plan Supraśl 2 dni"]
  },
  {
    slug: "suprasl-z-dziecmi",
    title: "Supraśl z dziećmi – atrakcje dla rodzin",
    excerpt: "Plaża miejska, muzea interaktywne, Park Linowy, łatwe szlaki w Puszczy Knyszyńskiej i restauracje przyjazne dzieciom. Rodzinny wyjazd na Podlasie!",
    image: blogCoRobic,
    date: "2026-04-09",
    readTime: "11 min",
    keywords: ["Supraśl z dziećmi", "atrakcje dla dzieci Supraśl"]
  },
  {
    slug: "aktywny-wypoczynek-suprasl",
    title: "Supraśl Aktywnie: 5 Pomysłów na Weekend w Puszczy Knyszyńskiej",
    excerpt: "Szlaki rowerowe, spływy kajakowe, nordic walking, narciarstwo biegowe i Arboretum Kopna Góra.",
    image: blogBike,
    date: "2026-04-09",
    readTime: "11 min",
    keywords: ["aktywny wypoczynek Supraśl", "szlaki rowerowe Supraśl"]
  },
  {
    slug: "uzdrowisko-spa-suprasl",
    title: "Uzdrowisko Supraśl: Borowina, SPA i regeneracja sił",
    excerpt: "Jedyne uzdrowisko na Podlasiu. Borowina z Podsokołdy, grota solna, strefy wellness i sanatoria.",
    image: blogSupraslUzdrowisko,
    date: "2026-04-09",
    readTime: "10 min",
    keywords: ["uzdrowisko Supraśl", "SPA Supraśl", "borowina"]
  },
  {
    slug: "przewodnik-kulinarny-suprasl",
    title: "Smaki Supraśla: Gdzie zjeść kartacze i babkę ziemniaczaną?",
    excerpt: "Kulinarny przewodnik po Supraślu — restauracje, kuchnia tatarska, kawiarnie i lokalne produkty.",
    image: blogRestauracje,
    date: "2026-04-09",
    readTime: "12 min",
    keywords: ["restauracje Supraśl", "kuchnia podlaska", "kartacze"]
  },
  {
    slug: "wydarzenia-suprasl-2026",
    title: "Największe imprezy i wydarzenia w Supraślu 2026 – kalendarz + daty",
    excerpt: "Pełny kalendarz wydarzeń w Supraślu na 2026: Dni Supraśla, Festiwal Wertep, Święto Chleba i więcej. Daty, opisy i gdzie nocować.",
    image: blogWydarzenia,
    date: "2026-03-30",
    readTime: "12 min",
    keywords: ["wydarzenia Supraśl 2026", "imprezy Supraśl", "festiwale Podlasie"]
  },
  {
    slug: "puszcza-knyszynska-historie",
    title: "Puszcza Knyszyńska historie – 7 niezwykłych opowieści",
    excerpt: "Galeria Leśna Powstania Styczniowego, legendy, duchy powstańców i dom w lesie z jacuzzi 300 m od atrakcji.",
    image: heroImg,
    date: "2026-03-28",
    readTime: "14 min",
    keywords: ["Puszcza Knyszyńska historie", "Galeria Leśna"]
  },
  {
    slug: "co-robic-suprasl",
    title: "Co robić w Supraślu? Kompletny przewodnik po atrakcjach",
    excerpt: "Monaster, Muzeum Ikon, kajaki, szlaki w Puszczy Knyszyńskiej i kuchnia regionalna. Wszystko, co warto zobaczyć w Supraślu.",
    image: blogCoRobic,
    date: "2026-03-25",
    readTime: "10 min",
    keywords: ["co robić w Supraślu", "Supraśl atrakcje"]
  },
  {
    slug: "weekend-suprasl-plan",
    title: "Weekend w Supraślu – plan pobytu na 2-3 dni",
    excerpt: "Sprawdzony plan na weekend w Supraślu: zwiedzanie, szlaki, kajaki, kuchnia regionalna i relaks w jacuzzi pod gwiazdami.",
    image: blogWeekendPlan,
    date: "2026-03-25",
    readTime: "9 min",
    keywords: ["weekend Supraśl", "plan pobytu Supraśl"]
  },
  {
    slug: "najlepsze-miejsca-puszcza-knyszynska",
    title: "Najlepsze miejsca w Puszczy Knyszyńskiej – co warto zobaczyć",
    excerpt: "Rezerwaty, szlaki, arboretum, rzeki i dzikie ostępy. Kompletny przewodnik po największym lesie Podlasia.",
    image: blogNajlepszeMiejsca,
    date: "2026-03-25",
    readTime: "11 min",
    keywords: ["Puszcza Knyszyńska", "najlepsze miejsca"]
  },
  {
    slug: "kajaki-suprasl",
    title: "Kajaki Supraśl – przewodnik po spływach rzeką Supraśl",
    excerpt: "Spokojna rzeka, dzika przyroda i Puszcza Knyszyńska z poziomu wody. Wszystko o spływach kajakowych w Supraślu.",
    image: blogKajaki,
    date: "2026-03-15",
    readTime: "11 min",
    keywords: ["kajaki Supraśl", "spływ Supraśl"]
  },
  {
    slug: "restauracje-suprasl",
    title: "Restauracje Supraśl – gdzie zjeść podczas pobytu",
    excerpt: "Kartacze, babka ziemniaczana, sękacz i kuchnia tatarska. Przewodnik kulinarny po Supraślu i Podlasiu.",
    image: blogRestauracje,
    date: "2026-03-15",
    readTime: "12 min",
    keywords: ["restauracje Supraśl", "gdzie zjeść Supraśl"]
  },
  {
    slug: "szlak-bioroznorodnosci-suprasl",
    title: "Szlak Bioróżnorodności Supraśl – spacer przez naturę Puszczy Knyszyńskiej",
    excerpt: "Edukacyjna ścieżka o długości 7 km przez zróżnicowane ekosystemy Puszczy Knyszyńskiej. Flora, fauna i tablice edukacyjne.",
    image: blogSzlakBio,
    date: "2026-03-14",
    readTime: "10 min",
    keywords: ["Supraśl szlak bioróżnorodności", "atrakcje Supraśl"]
  },
  {
    slug: "kruszyniany-tatarska-wies",
    title: "Kruszyniany – tatarska wieś Podlasia",
    excerpt: "Meczet, kuchnia tatarska i wielowiekowa tradycja — odkryj jedno z najbardziej niezwykłych miejsc w Polsce.",
    image: blogKruszyniany,
    date: "2026-03-14",
    readTime: "9 min",
    keywords: ["Kruszyniany atrakcje", "tatarska wieś Podlasie"]
  },
  {
    slug: "suprasl-atrakcje-uzdrowisko",
    title: "Supraśl – atrakcje uzdrowiska Podlasia",
    excerpt: "Monaster, Muzeum Ikon, bulwary, Teatr Wierszalin i uzdrowiskowy klimat. Kompletny przewodnik po perle Podlasia.",
    image: blogSupraslUzdrowisko,
    date: "2026-03-14",
    readTime: "12 min",
    keywords: ["Supraśl atrakcje", "co zobaczyć Supraśl"]
  },
  {
    slug: "supraski-system-wodny",
    title: "Supraski System Wodny – zapomniany cud inżynierii Podlasia",
    excerpt: "Odkryj fascynującą historię supraskiego systemu wodnego – unikatowego dziedzictwa hydrotechnicznego Podlasia.",
    image: blogKanal,
    date: "2026-03-10",
    readTime: "12 min",
    keywords: ["Supraski System Wodny", "atrakcje Supraśl"]
  },
  {
    slug: "szlak-powstania-styczniowego-suprasl",
    title: "Szlak Powstania Styczniowego w Puszczy Knyszyńskiej",
    excerpt: "Śladami powstańców styczniowych przez najpiękniejsze zakątki Puszczy Knyszyńskiej. Historia, miejsca pamięci i szlaki.",
    image: blogPomnik,
    date: "2026-03-08",
    readTime: "10 min",
    keywords: ["Szlak Powstania Styczniowego", "historia Supraśl"]
  },
  {
    slug: "suprasl-atrakcje-national-geographic",
    title: "Supraśl – perła Podlasia według podróżników",
    excerpt: "Co sprawia, że Supraśl jest jednym z najpiękniejszych miasteczek Podlasia? Architektura, Monaster i slow tourism.",
    image: blogMonaster,
    date: "2026-03-05",
    readTime: "11 min",
    keywords: ["Supraśl atrakcje", "co zobaczyć Supraśl"]
  },
  {
    slug: "szlaki-piesze-rowerowe-suprasl",
    title: "Najlepsze szlaki piesze i rowerowe – Supraśl i Puszcza Knyszyńska",
    excerpt: "Kompletny przewodnik po szlakach pieszych i rowerowych w okolicach Supraśla.",
    image: blogBike,
    date: "2026-03-01",
    readTime: "13 min",
    keywords: ["szlaki Supraśl", "trasy rowerowe Supraśl"]
  }
];
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Blog Supraśl – atrakcje i szlaki | In The Woods",
        description: "Blog o Supraślu – atrakcje, szlaki, historia i turystyka w Puszczy Knyszyńskiej. Przewodnik turystyczny.",
        canonical: "https://www.suprasl.online/blog",
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://www.suprasl.online/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.suprasl.online/blog" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Artykuły bloga In The Woods",
            itemListElement: articles.map((article, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: article.title,
              url: `https://www.suprasl.online/blog/${article.slug}`
            }))
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx("nav", { className: "bg-background border-b border-border sticky top-0 z-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "font-display text-xl tracking-wide text-foreground logo-glow", children: "In The Woods" }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6", children: [
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "nav-link text-foreground font-medium", children: "Blog" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/noclegi-suprasl",
            className: "nav-link text-foreground/70 hover:text-foreground",
            children: "Noclegi"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/atrakcje-suprasl",
            className: "nav-link text-foreground/70 hover:text-foreground",
            children: "Atrakcje"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/weekend-suprasl",
            className: "nav-link text-foreground/70 hover:text-foreground",
            children: "Weekend"
          }
        ),
        /* @__PURE__ */ jsx("a", { href: "tel:+48722765101", className: "btn-primary text-xs py-2.5 px-6", children: "Zadzwoń" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("header", { className: "relative py-20 md:py-28 px-6 md:px-12 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-heading text-4xl md:text-5xl font-light text-foreground", children: "Blog — Supraśl i okolice" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Odkryj historię, atrakcje i szlaki Supraśla oraz Puszczy Knyszyńskiej. Przewodnik turystyczny dla miłośników natury i slow travel." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 md:px-12 py-16", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: articles.map((article) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: `/blog/${article.slug}`,
        className: "group border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-card",
        children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[16/9] overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: article.image,
              srcSet: `${article.image} 600w`,
              sizes: "(min-width: 768px) 50vw, 100vw",
              alt: article.title,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
              loading: article.slug === articles[0].slug ? "eager" : "lazy",
              decoding: "async",
              width: "600",
              height: "338"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsx("time", { dateTime: article.date, children: article.date })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3" }),
                article.readTime
              ] })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl font-light text-foreground group-hover:text-primary transition-colors", children: article.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: article.excerpt }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-sm text-primary font-medium", children: [
              "Czytaj więcej ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ] })
          ] })
        ]
      },
      article.slug
    )) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 py-16 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-heading text-3xl font-light text-foreground", children: "Planujesz wizytę w Supraślu?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "In The Woods to komfortowy dom w lesie z jacuzzi — idealna baza wypadowa na zwiedzanie okolicy." }),
      /* @__PURE__ */ jsxs("a", { href: "tel:+48722765101", className: "btn-primary inline-flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
        " Sprawdź dostępność"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "bg-foreground text-white/70 px-6 md:px-12 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center space-y-4", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-lg text-white logo-glow", children: "In The Woods" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white transition-colors", children: "Strona główna" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-white transition-colors", children: "Blog" }),
        /* @__PURE__ */ jsx(Link, { to: "/noclegi-suprasl", className: "hover:text-white transition-colors", children: "Noclegi Supraśl" }),
        /* @__PURE__ */ jsx(Link, { to: "/domek-suprasl", className: "hover:text-white transition-colors", children: "Domek Supraśl" }),
        /* @__PURE__ */ jsx(Link, { to: "/domek-z-jacuzzi-podlasie", className: "hover:text-white transition-colors", children: "Domek z jacuzzi" }),
        /* @__PURE__ */ jsx(Link, { to: "/dom-w-lesie-suprasl", className: "hover:text-white transition-colors", children: "Dom w lesie" }),
        /* @__PURE__ */ jsx(Link, { to: "/weekend-suprasl", className: "hover:text-white transition-colors", children: "Weekend Supraśl" }),
        /* @__PURE__ */ jsx(Link, { to: "/wieczor-panienski-suprasl", className: "hover:text-white transition-colors", children: "Wieczór panieński" }),
        /* @__PURE__ */ jsx(Link, { to: "/atrakcje-suprasl", className: "hover:text-white transition-colors", children: "Atrakcje Supraśla" }),
        /* @__PURE__ */ jsx(Link, { to: "/puszcza-knyszynska-nocleg", className: "hover:text-white transition-colors", children: "Puszcza Knyszyńska" }),
        /* @__PURE__ */ jsx(Link, { to: "/informator", className: "hover:text-white transition-colors", children: "Informator gościa" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-white/40", children: "© 2026 In The Woods. Wszelkie prawa zastrzeżone." })
    ] }) })
  ] });
};
export {
  Blog as default
};
