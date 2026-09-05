import { jsxs, jsx } from "react/jsx-runtime";
import { S as SEOPageLayout } from "./SEOPageLayout-Kuqbp5PI.js";
import { BookOpen, ClipboardList, FileText, ExternalLink } from "lucide-react";
import "react";
import "react-router-dom";
import "./SEOHead-CuqvaMLz.js";
import "react-helmet-async";
const documents = [
  {
    icon: BookOpen,
    title: "Interaktywny przewodnik po domu",
    description: "Wszystko, co musisz wiedzieć o domu In The Woods — jak obsługiwać kominek, banię, jacuzzi, co znajdziesz w kuchni i jak korzystać z ogrodu.",
    href: "https://drive.google.com/file/d/1Kz6hA2My9p3MZuNTocCglt3-yow5LrE4/view?usp=drive_link",
    label: "Otwórz przewodnik (PDF)"
  },
  {
    icon: ClipboardList,
    title: "Umowa najmu",
    description: "Wzór umowy najmu domu In The Woods do wglądu. Dokument określa warunki rezerwacji, zasady pobytu, kaucję i odpowiedzialność stron.",
    href: "https://utn.pl/contract",
    label: "Otwórz umowę (PDF)"
  },
  {
    icon: FileText,
    title: "Instrukcja obsługi domu",
    description: "Szczegółowa instrukcja obsługi urządzeń w domu — ogrzewanie, sprzęt kuchenny, kominek, bania, WiFi i inne udogodnienia.",
    href: "https://drive.google.com/file/d/1Kz6hA2My9p3MZuNTocCglt3-yow5LrE4/view?usp=drive_link",
    label: "Otwórz instrukcję (PDF)"
  }
];
const Dokumenty = () => /* @__PURE__ */ jsxs(
  SEOPageLayout,
  {
    title: "Dokumenty i instrukcje | In The Woods",
    description: "Pobierz przewodnik po domu, umowę najmu i instrukcję obsługi In The Woods. Wszystkie dokumenty dostępne online w formacie PDF.",
    breadcrumbName: "Dokumenty",
    ogImage: "https://www.suprasl.online/images/hero-cabin.jpg",
    children: [
      /* @__PURE__ */ jsx("h1", { className: "section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6", children: "Dokumenty i instrukcje" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-8 max-w-2xl", children: "Wszystkie niezbędne dokumenty do Twojego pobytu w In The Woods — przewodnik, umowa najmu i instrukcja obsługi domu. Kliknij, aby otworzyć w nowej karcie." }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12 max-w-2xl space-y-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl text-foreground", children: "Jak przygotować się do pobytu?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Przed przyjazdem do In The Woods zalecamy zapoznanie się z interaktywnym przewodnikiem po domu. Znajdziesz w nim praktyczne informacje o obsłudze kominka, ruskiej bani z balią, kuchni oraz zasadach korzystania z ogrodu i terenu wokół domu." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Umowa najmu zawiera szczegółowe warunki rezerwacji, w tym zasady wpłaty kaucji, regulamin pobytu oraz informacje o odpowiedzialności gości za wyposażenie domu. Dokument jest dostępny do wglądu przed dokonaniem rezerwacji." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Instrukcja obsługi domu to kompletny przewodnik techniczny — od ogrzewania i klimatyzacji, przez sprzęt kuchenny, po połączenie z Wi-Fi. Szczególnie przydatna w sezonie jesienno-zimowym, kiedy korzystanie z kominka wymaga znajomości kilku prostych zasad bezpieczeństwa." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: documents.map(({ icon: Icon, title, description, href, label }) => /* @__PURE__ */ jsxs(
        "a",
        {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-primary", strokeWidth: 1.5 }) }),
            /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl font-semibold text-foreground mb-3", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1 mb-6", children: description }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:underline", children: [
              label,
              " ",
              /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })
            ] })
          ]
        },
        title
      )) })
    ]
  }
);
export {
  Dokumenty as default
};
