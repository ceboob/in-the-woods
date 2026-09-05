import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { S as SEOHead } from "./SEOHead-CuqvaMLz.js";
const allPages = [
  {
    path: "/noclegi-suprasl",
    label: "Noclegi Supraśl",
    desc: "Prywatny dom na wynajem blisko Supraśla"
  },
  {
    path: "/domek-suprasl",
    label: "Domek Supraśl",
    desc: "Dom na wyłączność w Puszczy Knyszyńskiej"
  },
  {
    path: "/domek-z-jacuzzi-podlasie",
    label: "Domek z jacuzzi",
    desc: "Ruska bania i balia z gorącą wodą"
  },
  { path: "/dom-w-lesie-suprasl", label: "Dom w lesie", desc: "Slow travel w sercu Puszczy" },
  { path: "/weekend-suprasl", label: "Weekend Supraśl", desc: "Plan idealnego weekendu" },
  {
    path: "/wieczor-panienski-suprasl",
    label: "Wieczór panieński",
    desc: "Impreza w lesie z jacuzzi"
  },
  {
    path: "/atrakcje-suprasl",
    label: "Atrakcje Supraśla",
    desc: "Co zobaczyć w Supraślu i okolicy"
  },
  {
    path: "/puszcza-knyszynska-nocleg",
    label: "Puszcza Knyszyńska",
    desc: "Nocleg w sercu natury"
  },
  { path: "/blog", label: "Blog", desc: "Przewodnik po Supraślu i Podlasiu" },
  { path: "/informator", label: "Informator gościa", desc: "Praktyczne informacje dla gości" },
  { path: "/dom", label: "Dom In The Woods", desc: "Szczegółowy opis domu" },
  { path: "/galeria", label: "Galeria zdjęć", desc: "Pełna galeria wnętrz i okolicy" },
  { path: "/dokumenty", label: "Dokumenty", desc: "Przewodnik, umowa, instrukcja" }
];
const RelatedPages = () => {
  const { pathname } = useLocation();
  const related = allPages.filter((p) => p.path !== pathname);
  return /* @__PURE__ */ jsxs("nav", { "aria-label": "Powiązane strony", className: "mt-16 pt-12 border-t border-border", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-heading text-2xl font-light text-foreground mb-6 text-center", children: "Zobacz również" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: related.map((page) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: page.path,
        className: "group p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200",
        children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium text-sm text-foreground group-hover:text-primary transition-colors", children: page.label }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: page.desc })
        ]
      },
      page.path
    )) })
  ] });
};
const SEOPageLayout = ({
  children,
  title,
  description,
  breadcrumbName,
  ogImage,
  keywords,
  jsonLd
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { pathname } = useLocation();
  const canonical = `https://www.suprasl.online${pathname}`;
  const breadcrumbSchema = breadcrumbName ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://www.suprasl.online/"
      },
      { "@type": "ListItem", position: 2, name: breadcrumbName, item: canonical }
    ]
  } : null;
  const pageJsonLd = [
    ...breadcrumbSchema ? [breadcrumbSchema] : [],
    ...jsonLd ? Array.isArray(jsonLd) ? jsonLd : [jsonLd] : []
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title,
        description,
        canonical,
        ogImage,
        keywords,
        jsonLd: pageJsonLd.length ? pageJsonLd : void 0
      }
    ),
    /* @__PURE__ */ jsx("nav", { className: "bg-background border-b border-border sticky top-0 z-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "font-display text-xl tracking-wide text-foreground logo-glow", children: "In The Woods" }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/noclegi-suprasl",
            className: "nav-link text-foreground/70 hover:text-foreground",
            children: "Noclegi"
          }
        ),
        /* @__PURE__ */ jsx(Link, { to: "/domek-suprasl", className: "nav-link text-foreground/70 hover:text-foreground", children: "Domek" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/domek-z-jacuzzi-podlasie",
            className: "nav-link text-foreground/70 hover:text-foreground",
            children: "Jacuzzi"
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
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/wieczor-panienski-suprasl",
            className: "nav-link text-foreground/70 hover:text-foreground",
            children: "Imprezy"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/puszcza-knyszynska-nocleg",
            className: "nav-link text-foreground/70 hover:text-foreground",
            children: "Puszcza"
          }
        ),
        /* @__PURE__ */ jsx("a", { href: "tel:+48722765101", className: "btn-primary text-xs py-2.5 px-6", children: "Zadzwoń" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 md:px-12 pt-6", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/",
        className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          " Strona główna"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("main", { className: "max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16", children: [
      children,
      /* @__PURE__ */ jsx(RelatedPages, {})
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 py-16 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-heading text-3xl font-light", children: "Sprawdź dostępność terminu" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Odpowiadamy zwykle w kilka godzin. Rezerwacja bezpośrednia — bez prowizji." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "tel:+48722765101", className: "btn-primary inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
          " 722 765 101"
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:tutinthewood@gmail.com",
            className: "btn-outline inline-flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
              " Napisz do nas"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Konne 109/1, 16-030 Supraśl · Gospodarz: Maciej" })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "bg-foreground text-white/70 px-6 md:px-12 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center space-y-4", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-lg text-white logo-glow", children: "In The Woods" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-primary transition-colors", children: "Strona główna" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-primary transition-colors", children: "Blog" }),
        /* @__PURE__ */ jsx(Link, { to: "/noclegi-suprasl", className: "hover:text-primary transition-colors", children: "Noclegi Supraśl" }),
        /* @__PURE__ */ jsx(Link, { to: "/domek-suprasl", className: "hover:text-primary transition-colors", children: "Domek Supraśl" }),
        /* @__PURE__ */ jsx(Link, { to: "/domek-z-jacuzzi-podlasie", className: "hover:text-primary transition-colors", children: "Domek z jacuzzi" }),
        /* @__PURE__ */ jsx(Link, { to: "/dom-w-lesie-suprasl", className: "hover:text-primary transition-colors", children: "Dom w lesie" }),
        /* @__PURE__ */ jsx(Link, { to: "/weekend-suprasl", className: "hover:text-primary transition-colors", children: "Weekend Supraśl" }),
        /* @__PURE__ */ jsx(Link, { to: "/wieczor-panienski-suprasl", className: "hover:text-primary transition-colors", children: "Wieczór panieński" }),
        /* @__PURE__ */ jsx(Link, { to: "/atrakcje-suprasl", className: "hover:text-primary transition-colors", children: "Atrakcje Supraśla" }),
        /* @__PURE__ */ jsx(Link, { to: "/puszcza-knyszynska-nocleg", className: "hover:text-primary transition-colors", children: "Puszcza Knyszyńska" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-white/40", children: "© 2026 In The Woods. Wszelkie prawa zastrzeżone." })
    ] }) })
  ] });
};
export {
  SEOPageLayout as S
};
