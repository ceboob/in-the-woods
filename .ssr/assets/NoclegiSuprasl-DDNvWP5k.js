import { jsx, jsxs } from "react/jsx-runtime";
import { S as SEOPageLayout } from "./SEOPageLayout-Kuqbp5PI.js";
import { Link } from "react-router-dom";
import "react";
import "lucide-react";
import "./SEOHead-CuqvaMLz.js";
import "react-helmet-async";
const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://www.suprasl.online/noclegi-suprasl#lodging",
  name: "In The Woods - noclegi Supraśl",
  url: "https://www.suprasl.online/noclegi-suprasl",
  image: [
    "https://www.suprasl.online/images/exterior-main.jpg",
    "https://www.suprasl.online/images/living-fireplace.jpg",
    "https://www.suprasl.online/images/jacuzzi-night.jpg"
  ],
  description: "Prywatny dom w lesie na wyłączność koło Supraśla: kominek, ruska bania, ogrodzony ogród, szybkie Wi-Fi i pobyty z psem bez dopłat.",
  telephone: "+48722765101",
  email: "tutinthewood@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Konne 109/1",
    postalCode: "16-030",
    addressLocality: "Supraśl",
    addressRegion: "podlaskie",
    addressCountry: "PL"
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Dom na wyłączność", value: true },
    { "@type": "LocationFeatureSpecification", name: "Ruska bania z gorącą wodą", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kominek", value: true },
    { "@type": "LocationFeatureSpecification", name: "Ogrodzony teren", value: true },
    { "@type": "LocationFeatureSpecification", name: "Pobyt z psem bez dopłat", value: true },
    { "@type": "LocationFeatureSpecification", name: "Szybkie Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bezpłatny parking", value: true }
  ],
  priceRange: "$$",
  petsAllowed: true
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Gdzie zarezerwować noclegi w Supraślu blisko Puszczy Knyszyńskiej?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In The Woods to prywatny dom na wyłączność w miejscowości Konne koło Supraśla, przy Rezerwacie Przyrody Krzemienne Góry. Do centrum Supraśla dojedziesz w około 10 minut."
      }
    },
    {
      "@type": "Question",
      name: "Czy In The Woods to hotel, apartament czy domek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To cały dom z bali wynajmowany na wyłączność. Goście mają prywatny salon z kominkiem, kuchnię, sypialnie, ogród, taras, parking i ruską banię."
      }
    },
    {
      "@type": "Question",
      name: "Czy można przyjechać z psem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, psy są mile widziane bez dodatkowych opłat. Ogrodzony teren i las za progiem sprawiają, że to wygodny nocleg pod Supraślem dla gości podróżujących z psem."
      }
    },
    {
      "@type": "Question",
      name: "Jakie atrakcje są blisko noclegu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "W okolicy są szlaki Puszczy Knyszyńskiej, Rezerwat Krzemienne Góry, Monaster w Supraślu, Muzeum Ikon, bulwary nad rzeką Supraśl, kajaki oraz Arboretum w Kopnej Górze."
      }
    }
  ]
};
const highlights = [
  "cały dom i ogród tylko dla Was",
  "10 minut samochodem do centrum Supraśla",
  "kominek, ruska bania i taras w lesie",
  "psy bez dopłat i ogrodzony teren",
  "kuchnia, Wi-Fi, parking i praca zdalna",
  "baza wypadowa do Puszczy Knyszyńskiej"
];
const nearbyAttractions = [
  ["Rezerwat Krzemienne Góry", "za progiem domu"],
  ["Centrum Supraśla", "ok. 10 min samochodem"],
  ["Monaster Zwiastowania NMP", "ok. 10 min samochodem"],
  ["Muzeum Ikon", "ok. 10 min samochodem"],
  ["Bulwary nad rzeką Supraśl", "ok. 10 min samochodem"],
  ["Arboretum Kopna Góra", "ok. 20 min samochodem"]
];
const NoclegiSuprasl = () => /* @__PURE__ */ jsx(
  SEOPageLayout,
  {
    title: "Noclegi Supraśl - dom w lesie z jacuzzi | In The Woods",
    description: "Noclegi Supraśl: prywatny dom w lesie na wyłączność, 10 min od centrum. Kominek, ruska bania, ogrodzony teren, psy bez dopłat, Wi-Fi i parking.",
    breadcrumbName: "Noclegi Supraśl",
    ogImage: "https://www.suprasl.online/images/exterior-main.jpg",
    keywords: [
      "noclegi Supraśl",
      "nocleg Supraśl",
      "domek Supraśl",
      "dom na wynajem Supraśl",
      "apartamenty Supraśl alternatywa",
      "noclegi Puszcza Knyszyńska",
      "domek z jacuzzi Podlasie",
      "noclegi z psem Supraśl",
      "noclegi blisko Białegostoku"
    ],
    jsonLd: [lodgingSchema, faqSchema],
    children: /* @__PURE__ */ jsxs("article", { className: "prose prose-lg max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("header", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary", children: "Noclegi w Supraślu i okolicy" }),
        /* @__PURE__ */ jsx("h1", { className: "section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6", children: "Noclegi Supraśl - prywatny dom w lesie na wyłączność z jacuzzi i kominkiem" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed text-lg", children: [
          "Szukasz ",
          /* @__PURE__ */ jsx("strong", { children: "noclegu w Supraślu" }),
          ", ale zamiast pokoju w hotelu wolisz ciszę, przestrzeń i prawdziwy kontakt z Puszczą Knyszyńską? In The Woods to drewniany dom z bali na wyłączność w Konnych koło Supraśla: z kominkiem, ruską banią, ogrodzonym ogrodem, tarasem, kuchnią i miejscem do pracy zdalnej."
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "grid gap-3 sm:grid-cols-2 not-prose", children: highlights.map((item) => /* @__PURE__ */ jsx("div", { className: "border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground", children: item }, item)) }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
        "Nasz ",
        /* @__PURE__ */ jsx("strong", { children: "dom na wynajem w Supraślu" }),
        " jest położony przy Rezerwacie Przyrody Krzemienne Góry, około 10 minut samochodem od Monasteru, Muzeum Ikon i bulwarów nad rzeką Supraśl. To dobra alternatywa dla zapytań typu ",
        /* @__PURE__ */ jsx("strong", { children: "apartamenty Supraśl" }),
        ",",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "pokoje Supraśl" }),
        " czy ",
        /* @__PURE__ */ jsx("strong", { children: "hotel Supraśl" }),
        ", jeśli ważniejsze od recepcji i korytarzy są prywatność, las za oknem i własny rytm pobytu."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "section-title !text-2xl md:!text-3xl", children: "Dlaczego nasze noclegi pod Supraślem wygrywają z typowym hotelem" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
        "Konkurencyjne obiekty w Supraślu mocno komunikują lokalizację w centrum, pokoje, apartamenty, wyżywienie albo bliskość rzeki. In The Woods odpowiada na inną intencję:",
        /* @__PURE__ */ jsx("strong", { children: " domek w lesie blisko Supraśla" }),
        ", gdzie cały dom, ogród, taras i bania są tylko dla jednej rezerwacji. Nie mijasz innych gości na korytarzu, nie rezerwujesz godziny w strefie SPA i nie dopłacasz za psa."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
        "To szczególnie dobry wybór dla par, rodzin z dziećmi, grup przyjaciół i osób planujących workation na Podlasiu. Masz salon z kominkiem, dwie sypialnie, łazienkę, dodatkową toaletę, wyposażoną kuchnię, szybkie Wi-Fi, biurko, bezpłatny parking i ogrodzony teren. Jeśli wpisujesz w Google ",
        /* @__PURE__ */ jsx("strong", { children: "noclegi Supraśl z psem" }),
        ", to właśnie taki układ daje najwięcej swobody."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "section-title !text-2xl md:!text-3xl", children: "Domek z jacuzzi, banią i kominkiem w Puszczy Knyszyńskiej" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
        "Prywatna ruska bania z gorącą wodą działa jak leśne jacuzzi pod gwiazdami. Po spacerze, kajakach albo dniu na rowerze możesz rozpalić kominek, przygotować kolację w kuchni i odpocząć bez pośpiechu. Właśnie dlatego strona odpowiada też na frazy poboczne:",
        /* @__PURE__ */ jsx("strong", { children: " domek z jacuzzi Podlasie" }),
        ", ",
        /* @__PURE__ */ jsx("strong", { children: "domek z bali Supraśl" }),
        ",",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "nocleg w Puszczy Knyszyńskiej" }),
        " i ",
        /* @__PURE__ */ jsx("strong", { children: "weekend w Supraślu" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "section-title !text-2xl md:!text-3xl", children: "Lokalizacja - co jest blisko In The Woods" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Supraśl jest uzdrowiskowym miasteczkiem łączącym naturę, architekturę i spokojny wypoczynek. Goście często planują pobyt wokół Monasteru, Muzeum Ikon, bulwarów nad rzeką Supraśl, szlaków Puszczy Knyszyńskiej, spływów kajakowych i lokalnych restauracji. Z In The Woods możesz mieć jedno i drugie: ciszę lasu na noc oraz szybki dojazd do atrakcji." }),
      /* @__PURE__ */ jsx("div", { className: "not-prose overflow-hidden border border-border", children: /* @__PURE__ */ jsx("dl", { className: "divide-y divide-border", children: nearbyAttractions.map(([name, distance]) => /* @__PURE__ */ jsxs("div", { className: "grid gap-1 px-4 py-3 sm:grid-cols-[1fr_auto]", children: [
        /* @__PURE__ */ jsx("dt", { className: "font-medium text-foreground", children: name }),
        /* @__PURE__ */ jsx("dd", { className: "text-sm text-muted-foreground", children: distance })
      ] }, name)) }) }),
      /* @__PURE__ */ jsx("h2", { className: "section-title !text-2xl md:!text-3xl", children: "Noclegi Supraśl - dla kogo będzie najlepszy taki dom" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
        "Jeśli chcesz być w samym centrum miasteczka, najlepszy będzie pokój lub apartament przy rynku. Jeśli jednak szukasz fraz takich jak ",
        /* @__PURE__ */ jsx("strong", { children: "noclegi Supraśl cisza" }),
        ",",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "domek na wyłączność Podlasie" }),
        ", ",
        /* @__PURE__ */ jsx("strong", { children: "dom w lesie z kominkiem" }),
        " czy",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "noclegi blisko Białegostoku" }),
        ", In The Woods jest lepiej dopasowany do tej intencji. To nocleg dla osób, które chcą odpocząć od miasta, ale nie chcą rezygnować z wygody, ciepłego wnętrza i dobrego dojazdu."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "section-title !text-2xl md:!text-3xl", children: "Najczęstsze pytania o nocleg w Supraślu" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl text-foreground", children: "Czy In The Woods leży w Supraślu?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Adres to Konne 109/1, 16-030 Supraśl. Dom znajduje się w leśnej okolicy koło Supraśla, około 10 minut samochodem od centrum miasta." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl text-foreground", children: "Czy rezerwuję cały dom?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Tak. Rezerwacja obejmuje cały dom, ogród, taras i prywatną przestrzeń wypoczynku. Nie wynajmujemy pojedynczych pokoi różnym gościom w tym samym czasie." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl text-foreground", children: "Czy to dobry nocleg na weekend w Supraślu?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Tak. W dwa lub trzy dni zdążysz zobaczyć Monaster, Muzeum Ikon, bulwary, przejść leśny szlak, zjeść regionalny obiad i wrócić wieczorem do kominka albo bani." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "section-title !text-2xl md:!text-3xl", children: "Jak zaplanować pobyt" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
        "Do planowania trasy wykorzystaj nasze przewodniki po",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/atrakcje-suprasl", className: "text-primary underline hover:text-primary/80", children: "atrakcjach Supraśla" }),
        ",",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/weekend-suprasl", className: "text-primary underline hover:text-primary/80", children: "weekendzie w Supraślu" }),
        " ",
        "i",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/puszcza-knyszynska-nocleg", className: "text-primary underline hover:text-primary/80", children: "noclegach w Puszczy Knyszyńskiej" }),
        ". Dzięki temu strona nie kończy się na samej ofercie, tylko prowadzi gościa przez pełną decyzję: gdzie spać, co robić i dlaczego wybrać bazę w lesie."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-secondary p-8 text-center space-y-4 mt-12", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-heading text-2xl font-light", children: "Zarezerwuj nocleg w Supraślu bez prowizji" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Odpowiadamy zwykle w kilka godzin. Najszybciej potwierdzimy termin telefonicznie." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-4", children: [
          /* @__PURE__ */ jsx("a", { href: "tel:+48722765101", className: "btn-primary", children: "Zadzwoń: 722 765 101" }),
          /* @__PURE__ */ jsx(Link, { to: "/#rezerwacja", className: "btn-outline", children: "Sprawdź dostępność" })
        ] })
      ] })
    ] })
  }
);
export {
  NoclegiSuprasl as default
};
