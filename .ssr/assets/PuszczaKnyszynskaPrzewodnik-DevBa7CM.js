import { jsxs, jsx } from "react/jsx-runtime";
import { B as BlogArticleLayout } from "./BlogArticleLayout-DOFSIl0q.js";
import { Link } from "react-router-dom";
import { Heart, Bike, TreePine, Eye, MapPin, Footprints, Download } from "lucide-react";
import "react";
import "react-helmet-async";
import "./SEOHead-CuqvaMLz.js";
const gpxTrails = [
  { name: "Puszczański szlak pieszy (czerwony)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Puszczanski_pieszy_czerwony.gpx" },
  { name: "Skrajem Puszczy Knyszyńskiej (żółty)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Skrajem_Puszczy_Knyszynskiej_pieszy_zolty.gpx" },
  { name: "Śladami Powstania Styczniowego (czerwony)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Sladami_Powstania_Styczniowego_pieszy_czerwony.gpx" },
  { name: "Szlak Świętej Wody (niebieski)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Swietej_Wody_pieszy_niebieski.gpx" },
  { name: "Szlak Tatarski Duży (zielony)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Tatarski_Duzy_pieszy_zielony.gpx" },
  { name: "Szlak Tatarski Mały (niebieski)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Tatarski_Maly_pieszy_niebieski.gpx" },
  { name: "Szlak Witolda Sławińskiego (zielony)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Witolda_Slawinskiego_pieszy_zielony.gpx" },
  { name: "Borami Dorzecza Supraśli (zielony)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Borami_Dorzecza_Suprasli_zielony_pieszy.gpx" },
  { name: "Szlak Dawnego Pogranicza (żółty)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Dawnego_Pogranicza_zolty_pieszy.gpx" },
  { name: "Do Góran (żółty)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Do_Goran_pieszy_zolty.gpx" },
  { name: "Szlak Królowej Bony (niebieski)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Krolowej_Bony_niebieski_pieszy.gpx" },
  { name: "Szlak Napoleoński (niebieski)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Napoleonski_pieszy_niebieski.gpx" },
  { name: "Ścieżka Krzemianka", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Sciezka_Krzemianka.gpx" },
  { name: "Ścieżka Orlikowa", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Sciezka_orlikowa.gpx" },
  { name: "Nordic Walking Supraśl", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Nordic_walking_Suprasl.gpx" }
];
const gpxBike = [
  { name: "Jałówka — Królowy Most (żółty, rowerowy)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Jalowka_Krolowy_Most_rowerowy_zolty.gpx" },
  { name: "Przez Gminę Michałowo (zielony, rowerowy)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Przez_Gmine_Michalowo_rowerowy_zielony.gpx" },
  { name: "Przez Puszczę Knyszyńską (niebieski, rowerowy)", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Przez_Puszcze_Knyszynska_rowerowy_niebieski.gpx" }
];
const gpxSki = [
  { name: "Szlak narciarski czerwony", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Szlak_narciarski_czerwony.gpx" },
  { name: "Szlak narciarski niebieski", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Szlak_narciarski_niebieski.gpx" },
  { name: "Szlak narciarski zielony", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Szlak_narciarski_zielony.gpx" },
  { name: "Szlak narciarski żółty", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Szlak_narciarski_zolty.gpx" }
];
const gpxAttractions = [
  { name: "Puszcza Knyszyńska — atrakcje turystyczne", url: "https://wielkilas.pl/wp-content/uploads/2020/02/Puszcza_Knyszy%C5%84ska_atrakcje_turystyczne.gpx" }
];
const TrailList = ({ trails, title, icon: Icon }) => /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
  /* @__PURE__ */ jsxs("h3", { className: "font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2", children: [
    /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }),
    " ",
    title
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid gap-2", children: trails.map((t) => /* @__PURE__ */ jsxs(
    "a",
    {
      href: t.url,
      download: true,
      className: "flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 hover:border-primary/30 hover:bg-secondary/50 transition-colors group",
      children: [
        /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 text-primary shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/80 group-hover:text-foreground", children: t.name }),
        /* @__PURE__ */ jsx("span", { className: "ml-auto text-xs text-muted-foreground", children: ".gpx" })
      ]
    },
    t.url
  )) })
] });
const faqs = [
  { question: "Jakie szlaki piesze są w Puszczy Knyszyńskiej?", answer: "W Puszczy Knyszyńskiej wyznaczonych jest ponad 15 szlaków pieszych o różnym stopniu trudności, w tym Puszczański szlak pieszy, Szlak Tatarski, Szlak Świętej Wody i wiele innych. Pliki GPX dostępne do pobrania w artykule." },
  { question: "Gdzie pobrać mapy GPX szlaków Puszczy Knyszyńskiej?", answer: "Mapy GPX szlaków pieszych, rowerowych i narciarskich Puszczy Knyszyńskiej można pobrać bezpłatnie z naszego artykułu lub z portalu wielkilas.pl." },
  { question: "Jakie atrakcje turystyczne są w Puszczy Knyszyńskiej?", answer: "Puszcza Knyszyńska oferuje wieże widokowe, kładki nad wodą, rezerwaty przyrody, Kruszyniany, Monaster w Supraślu, Muzeum Ikon, Podlaskie Muzeum Kultury Ludowej i wiele szlaków pieszych i rowerowych." }
];
const PuszczaKnyszynskaPrzewodnik = () => /* @__PURE__ */ jsxs(
  BlogArticleLayout,
  {
    title: "Puszcza Knyszyńska – przewodnik i szlaki GPX",
    metaTitle: "Puszcza Knyszyńska – szlaki GPX i atrakcje",
    metaDescription: "Przewodnik po Puszczy Knyszyńskiej: szlaki piesze, rowerowe i narciarskie z GPX, plus atrakcje i praktyczne wskazówki.",
    slug: "puszcza-knyszynska-przewodnik",
    publishDate: "2026-04-09",
    readTime: "15 min",
    keywords: ["Puszcza Knyszyńska", "szlaki GPX", "atrakcje", "szlaki piesze", "szlaki rowerowe", "Supraśl", "Kruszyniany"],
    faqs,
    ogImage: "https://www.suprasl.online/images/hero-cabin.jpg",
    relatedArticles: [
      { title: "Szlaki Puszczy Knyszyńskiej", slug: "szlaki-puszcza-knyszynska" },
      { title: "Kajaki na Supraśli", slug: "kajaki-suprasl" },
      { title: "Atrakcje Supraśla", slug: "suprasl-atrakcje-national-geographic" }
    ],
    children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed mb-8", children: "Puszcza Knyszyńska to jeden z największych i najlepiej zachowanych kompleksów leśnych w Polsce. Rozciąga się na ponad 130 tysięcy hektarów w województwie podlaskim, obejmując Park Krajobrazowy Puszczy Knyszyńskiej. To raj dla miłośników natury, aktywnego wypoczynku i slow life — miejsce, gdzie czas płynie wolniej, a las leczy ciało i umysł." }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "section-title !text-2xl md:!text-3xl flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Heart, { className: "w-6 h-6 text-primary" }),
          " Romantyczne chwile w Puszczy"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Spacer we dwoje" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Niby tylko spacer, niby tylko w lesie. Ale jakże romantyczna może być zwykła przechadzka. Weź za rękę najbliższą sobie osobę i udajcie się na ścieżki Puszczy Knyszyńskiej. Wystarczy wejść do lasu — reszta zadzieje się sama." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Rykowisko jeleni" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Spektakularne widowiska we wrześniu. Wybierzcie się do lasu przed zmrokiem lub o świcie — wtedy jest największa szansa na wsłuchanie się w potęgę głosu zakochanego byka. Podczas rykowiska byk jelenia może stracić nawet 30% masy swojego ciała." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Wieże widokowe" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Piękne panoramy, możliwość podejrzenia dzikiej zwierzyny. Jednym z najatrakcyjniejszych miejsc jest wieża na Wzgórzach Świętojańskich, położona na wysokości wsi Kołodno." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Kładki nad wodą" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Magiczne, czasem trudno dostępne miejsca. Na Sianożątce znajdziesz zaskakujące rozlewisko, piękne o wschodzie lub zachodzie Słońca. W Rezerwacie Krzemianka — kręte ścieżki tuż nad taflą wody." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "section-title !text-2xl md:!text-3xl flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Bike, { className: "w-6 h-6 text-primary" }),
          " Aktywnie w Puszczy"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Spływ kajakowy rzeką Supraśl" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Płyń szeroką, otwartą doliną. Spiętrzenia wody, niskie drewniane mostki, powalone drzewa — z poziomu tafli wody zobaczysz bogactwo roślin, zwierząt i dziedzictwo kulturowe regionu." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Rower wyczynowy i MTB" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Deniwelacje sięgające 80 metrów! Rozległe doliny rzeczne i okazałe wzniesienia. Wyznaczona trasa MTB czeka na chcących podnieść sobie adrenalinę." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Biegi przełajowe" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Powietrze wzbogacone o substancje eteryczne, uspokajająca przyroda. Hitem numer jeden są biegi przełajowe ULTRAśledź." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "section-title !text-2xl md:!text-3xl flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(TreePine, { className: "w-6 h-6 text-primary" }),
          " Slow life — leczenie lasem"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Kąpiele leśne (shinrin-yoku)" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Spokojny spacer między drzewami zwolni puls i wyciszysz umysł. Dąb zwiększy energię, lipa rozweseli, brzoza zrelaksuje. Sosna — powietrze wzbogacone o substancje eteryczne korzystnie wpłynie na układ oddechowy. Przyjedź i wyzdrowiej." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Obcowanie z naturą" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Na Wzgórzach Świętojańskich doświadczysz wspinaczki po formach polodowcowych. W Rezerwacie Krzemianka chodzisz tuż nad źródliskami. W okolicach Krynek — stado żubrów." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "section-title !text-2xl md:!text-3xl flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Eye, { className: "w-6 h-6 text-primary" }),
          " Atrakcje krótkiego pobytu"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Kruszyniany — tatarska wieś" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Kolebka polskich Tatarów z drewnianym meczetem i zabytkowym cmentarzem — mizarem. Spróbuj słynnego pierekaczewnika, kołdunów lub trybuszoki!" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Podlaskie Muzeum Kultury Ludowej" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Blisko 30 ha ze starymi chałupami, spichlerzami, stodołami. Dla dorosłych — ekspozycja leśnej bimbrowni. Dla dzieci — plac zabaw. Na terenie Muzeum jest też Sokolarnia." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground mb-2", children: "Supraśl — serce Puszczy" }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
              "Monaster z XV/XVI w. z ",
              /* @__PURE__ */ jsx("strong", { children: "Muzeum Ikon" }),
              " (ok. 300 ikon, unikalne freski), domy tkaczy, Pałac Buchholtzów, uzdrowisko z jednymi z najlepszych złóż borowin w Polsce."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "section-title !text-2xl md:!text-3xl flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-primary" }),
          " Mapy szlaków GPX do pobrania"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "Pobierz pliki GPX na telefon lub zegarek GPS. Otworzysz je w Mapy.cz, Komoot, Locus Map lub Garmin Connect." }),
        /* @__PURE__ */ jsx(TrailList, { trails: gpxTrails, title: "Szlaki piesze", icon: Footprints }),
        /* @__PURE__ */ jsx(TrailList, { trails: gpxBike, title: "Szlaki rowerowe", icon: Bike }),
        /* @__PURE__ */ jsx(TrailList, { trails: gpxSki, title: "Szlaki narciarskie", icon: TreePine }),
        /* @__PURE__ */ jsx(TrailList, { trails: gpxAttractions, title: "Atrakcje turystyczne", icon: MapPin })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "section-title !text-2xl md:!text-3xl", children: "Gdzie nocować w Puszczy Knyszyńskiej?" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsx("strong", { children: "In The Woods" }),
          " to drewniany dom na wyłączność w Konnych, 10 min od Supraśla. Kominek, ruska bania, jacuzzi, ogrodzony ogród i las za płotem.",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/dom", className: "text-primary underline hover:text-primary/80", children: "Zobacz dom" }),
          " ",
          "lub",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/#rezerwacja", className: "text-primary underline hover:text-primary/80", children: "zarezerwuj pobyt" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-secondary rounded-xl p-6 mt-12 border border-border", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsx("strong", { children: "Źródło treści i danych GPX:" }),
        ' Stowarzyszenie Przyjaciół Puszczy Knyszyńskiej „Wielki Las" i Park Krajobrazowy Puszczy Knyszyńskiej im. prof. Witolda Sławińskiego. Dane udostępnione za pośrednictwem portalu',
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://wielkilas.pl", target: "_blank", rel: "noopener noreferrer", className: "text-primary underline hover:text-primary/80", children: "wielkilas.pl" }),
        ". Dane GPX udostępnione bezpłatnie do użytku prywatnego."
      ] }) })
    ]
  }
);
export {
  PuszczaKnyszynskaPrzewodnik as default
};
