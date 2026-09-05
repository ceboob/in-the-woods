import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Flame, AlertTriangle, Droplets, TreePine, Bug, Cross, Bath, ShieldCheck, Phone, Users, Mail } from "lucide-react";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DzPw4ikz.js";
import "@radix-ui/react-accordion";
import "../entry-server.js";
import "node:stream";
import "@tanstack/react-query";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "next-themes";
import "sonner";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
const guestGuideBook = "/assets/guest-guide-book-DZg5Ea05.webp";
const livingWide = "/assets/living-wide-Cb-JLk7X.webp";
const stoveDetail = "/assets/stove-detail-BTeYwueR.webp";
const kitchenBrick = "/assets/kitchen-brick-CXfFJNSC.webp";
const Informator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Informator gościa – In The Woods Supraśl" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Informator gościa In The Woods – zasady pobytu, instrukcja kominka, regulamin jacuzzi, informacje o domu w Puszczy Knyszyńskiej. Noclegi Supraśl." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.suprasl.online/informator" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Informator gościa – In The Woods Supraśl" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Informator gościa In The Woods – zasady pobytu, instrukcja kominka, regulamin jacuzzi." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.suprasl.online/informator" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://www.suprasl.online/images/hero-cabin.jpg" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "bg-background border-b border-border sticky top-0 z-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "font-display text-xl tracking-wide text-foreground", children: "In The Woods" }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "nav-link text-foreground/70 hover:text-foreground", children: "Strona główna" }),
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
        /* @__PURE__ */ jsx("a", { href: "tel:+48790625990", className: "btn-primary text-xs py-2.5 px-6", children: "Zadzwoń" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-6 md:px-12 pt-6", children: /* @__PURE__ */ jsxs(
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
    /* @__PURE__ */ jsxs("header", { className: "max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-8 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-4", children: "Informator gościa" }),
      /* @__PURE__ */ jsx("h1", { className: "font-heading text-3xl md:text-5xl font-light text-foreground mb-6", children: "Witamy w In The Woods" }),
      /* @__PURE__ */ jsx("div", { className: "w-16 h-px bg-primary mx-auto mb-8" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base md:text-lg", children: "Oddajemy do Państwa dyspozycji dom, w który włożyliśmy dużo pracy i serca, aby zapewnić komfortowy wypoczynek blisko natury. In The Woods to drewniany dom na wyłączność w sercu Puszczy Knyszyńskiej, zaledwie 10 minut od centrum Supraśla." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-4 text-base md:text-lg", children: "Prosimy o traktowanie domu jak własnego i pozostawienie go w takim stanie, w jakim został przekazany. Poniżej znajdziesz wszystkie zasady pobytu, instrukcje obsługi kominka i ruskiej bani, regulamin jacuzzi, informacje o ekologicznej oczyszczalni ścieków oraz praktyczne wskazówki dotyczące życia w lesie. Ten informator pomoże Ci w pełni cieszyć się pobytem." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 md:px-12 pb-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: guestGuideBook,
          alt: "Informator gościa — In The Woods Supraśl",
          className: "w-full h-[180px] md:h-[220px] object-cover rounded-lg",
          loading: "lazy",
          width: "400",
          height: "220"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: livingWide,
          alt: "Salon z kominkiem — dom na wynajem Supraśl",
          className: "w-full h-[180px] md:h-[220px] object-cover rounded-lg",
          loading: "lazy",
          width: "400",
          height: "220"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: stoveDetail,
          alt: "Kaflowy piec kuchenny — chata w Puszczy",
          className: "w-full h-[180px] md:h-[220px] object-cover rounded-lg",
          loading: "lazy",
          width: "400",
          height: "220"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: kitchenBrick,
          alt: "Kuchnia z ceglanym piecem — dom Supraśl",
          className: "w-full h-[180px] md:h-[220px] object-cover rounded-lg",
          loading: "lazy",
          width: "400",
          height: "220"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("main", { className: "max-w-4xl mx-auto px-6 md:px-12 pb-16", children: [
      /* @__PURE__ */ jsxs(Accordion, { type: "multiple", className: "space-y-3", children: [
        /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: "zasady",
            className: "bg-card border border-border rounded-lg px-6 overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "hover:no-underline py-6 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Home, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("h2", { className: "font-heading text-lg md:text-xl font-medium text-left", children: "Zasady pobytu" })
              ] }) }),
              /* @__PURE__ */ jsxs(AccordionContent, { className: "pb-6", children: [
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Dom jest przestrzenią wypoczynkową przeznaczoną do spokojnego pobytu. Prosimy o:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Dbanie o wyposażenie domu i jego otoczenia" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Utrzymanie porządku w trakcie i po pobycie" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Szanowanie otaczającej nas natury i przyrody" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Zachowanie ciszy nocnej (22:00–7:00)" })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: "kominek",
            className: "bg-card border border-border rounded-lg px-6 overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "hover:no-underline py-6 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Flame, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("h2", { className: "font-heading text-lg md:text-xl font-medium text-left", children: "Instrukcja korzystania z kominka" })
              ] }) }),
              /* @__PURE__ */ jsxs(AccordionContent, { className: "pb-6 space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Kominek jest głównym źródłem ogrzewania domu w okresie jesienno-zimowym." }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Nie przeładowywać paleniska — max 2–3 polana naraz" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Używać wyłącznie przygotowanego drewna (drewutnia przy domu)" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Nie używać drewna z ogrodu ani lasu" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Wyznaczyć jedną osobę odpowiedzialną za obsługę kominka" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Nie pozostawiać ognia bez nadzoru" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-secondary/60 rounded-lg p-4 space-y-2", children: [
                  /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-foreground flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-wood" }),
                    " Ważne informacje"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "W okresie letnim palenie w kominku jest zabronione." }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Ogrzewanie elektryczne jest dodatkowo płatne według zużycia energii." })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: "ekologia",
            className: "bg-card border border-border rounded-lg px-6 overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "hover:no-underline py-6 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Droplets, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("h2", { className: "font-heading text-lg md:text-xl font-medium text-left", children: "Ekologia – oczyszczalnia ścieków" })
              ] }) }),
              /* @__PURE__ */ jsxs(AccordionContent, { className: "pb-6 space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Obiekt korzysta z ekologicznej oczyszczalni ścieków. Prosimy o przestrzeganie poniższych zasad." }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground font-medium", children: "Do toalety można wrzucać wyłącznie papier toaletowy." }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Nie wolno wrzucać:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground ml-4", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Ręczników papierowych, chusteczek" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Tamponów, podpasek" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Plastiku i innych odpadów" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Nie wylewać środków chemicznych do kanalizacji." })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: "natura",
            className: "bg-card border border-border rounded-lg px-6 overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "hover:no-underline py-6 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(TreePine, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("h2", { className: "font-heading text-lg md:text-xl font-medium text-left", children: "Dom w lesie – natura" })
              ] }) }),
              /* @__PURE__ */ jsxs(AccordionContent, { className: "pb-6 space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Dom znajduje się w środku lasu, w bezpośrednim sąsiedztwie Puszczy Knyszyńskiej. Z tego powodu mogą pojawić się:" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: ["Owady", "Komary", "Kleszcze", "Myszy leśne"].map((item) => /* @__PURE__ */ jsxs(
                  "span",
                  {
                    className: "flex items-center gap-2 bg-secondary/60 rounded-full px-4 py-2 text-sm text-muted-foreground",
                    children: [
                      /* @__PURE__ */ jsx(Bug, { className: "w-3.5 h-3.5" }),
                      " ",
                      item
                    ]
                  },
                  item
                )) }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground font-medium mt-2", children: "Zalecamy:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Zabranie środków przeciwko owadom" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Zamykanie okien wieczorem i w nocy" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Chowanie jedzenia i zamykanie szafek kuchennych" })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: "apteczka",
            className: "bg-card border border-border rounded-lg px-6 overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "hover:no-underline py-6 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("h2", { className: "font-heading text-lg md:text-xl font-medium text-left", children: "Apteczka" })
              ] }) }),
              /* @__PURE__ */ jsx(AccordionContent, { className: "pb-6", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Apteczka pierwszej pomocy znajduje się w szufladzie nad stołem w jadalni. Zawiera podstawowe środki opatrunkowe i leki." }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: "jacuzzi",
            className: "bg-card border border-border rounded-lg px-6 overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "hover:no-underline py-6 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Bath, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("h2", { className: "font-heading text-lg md:text-xl font-medium text-left", children: "Regulamin ruskiej bani i balii" })
              ] }) }),
              /* @__PURE__ */ jsxs(AccordionContent, { className: "pb-6 space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Balia z gorącą wodą jest dostępna po wcześniejszej rezerwacji u gospodarza." }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground font-medium", children: "Zasady korzystania:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Korzystanie na własną odpowiedzialność" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Zakaz korzystania przy problemach zdrowotnych (serce, ciśnienie)" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Nie korzystać pod wpływem alkoholu" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Dzieci wyłącznie pod opieką dorosłych" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Zakaz używania olejków, pianek i kosmetyków" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Zakaz szkła w pobliżu balii" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Zakaz palenia przy balii" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-secondary/60 rounded-lg p-4 space-y-2", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Ważne:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Maksymalna temperatura wody: 40°C. Należy regularnie uzupełniać płyny. Nie dotykać pieca — gorąca powierzchnia!" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground font-medium mt-2", children: "Instrukcja obsługi balii:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Nigdy nie rozpalać pieca bez wody w balii" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Utrzymywać odpowiedni poziom wody (powyżej kratki pieca)" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Regularnie kontrolować temperaturę wody" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: "Zamykać dopływ powietrza do pieca przy zbyt wysokiej temperaturze" })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: "bezpieczenstwo",
            className: "bg-card border border-border rounded-lg px-6 overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "hover:no-underline py-6 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("h2", { className: "font-heading text-lg md:text-xl font-medium text-left", children: "Bezpieczeństwo" })
              ] }) }),
              /* @__PURE__ */ jsxs(AccordionContent, { className: "pb-6 space-y-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Goście ponoszą odpowiedzialność za szkody powstałe z ich winy w trakcie pobytu." }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Wszelkie nieprawidłowości, usterki lub uszkodzenia prosimy niezwłocznie zgłaszać gospodarzowi." })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: "kontakt",
            className: "bg-card border border-border rounded-lg px-6 overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "hover:no-underline py-6 gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("h2", { className: "font-heading text-lg md:text-xl font-medium text-left", children: "Dane kontaktowe" })
              ] }) }),
              /* @__PURE__ */ jsx(AccordionContent, { className: "pb-6", children: /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("p", { className: "font-medium text-foreground flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-primary" }),
                    " Gospodarz: Maciej"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: "tel:+48790625990",
                        className: "flex items-center gap-2 hover:text-foreground transition-colors",
                        children: [
                          /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
                          " 790 625 990"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: "tel:+48722765101",
                        className: "flex items-center gap-2 hover:text-foreground transition-colors",
                        children: [
                          /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
                          " 722 765 101",
                          " ",
                          /* @__PURE__ */ jsx("span", { className: "text-xs", children: "(dodatkowy)" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: "mailto:tutinthewood@gmail.com",
                        className: "flex items-center gap-2 hover:text-foreground transition-colors",
                        children: [
                          /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                          " tutinthewood@gmail.com"
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Adres:" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                    "Konne 109/1",
                    /* @__PURE__ */ jsx("br", {}),
                    "16-030 Supraśl"
                  ] })
                ] })
              ] }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 text-center space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-px bg-primary mx-auto" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto", children: "Dziękujemy za zapoznanie się z informatorem. Życzymy spokojnego i regenerującego pobytu w In The Woods." }),
        /* @__PURE__ */ jsx("p", { className: "font-heading text-lg text-foreground", children: "— Maciej, gospodarz" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "bg-foreground text-white/70 px-6 md:px-12 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center space-y-4", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-lg text-white", children: "In The Woods" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white transition-colors", children: "Strona główna" }),
        /* @__PURE__ */ jsx(Link, { to: "/noclegi-suprasl", className: "hover:text-white transition-colors", children: "Noclegi Supraśl" }),
        /* @__PURE__ */ jsx(Link, { to: "/informator", className: "hover:text-white transition-colors", children: "Informator gościa" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-white/40", children: "© 2026 In The Woods. Wszelkie prawa zastrzeżone." })
    ] }) })
  ] });
};
export {
  Informator as default
};
