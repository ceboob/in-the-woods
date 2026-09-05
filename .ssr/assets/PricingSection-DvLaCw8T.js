import { jsxs, jsx } from "react/jsx-runtime";
import { u as useScrollAnimation } from "./Index-P5RrnN8F.js";
import { ShieldCheck, Snowflake, Leaf, Sun, Users, Bath, Percent, Clock, TreePine } from "lucide-react";
import { T as Tooltip, a as TooltipTrigger, b as TooltipContent } from "../entry-server.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-DZKBCLML.js";
import "react";
import "./SEOHead-CuqvaMLz.js";
import "react-helmet-async";
import "./Navbar-B3uqN1ij.js";
import "react-router-dom";
import "@radix-ui/react-dialog";
import "./client-BI8YE9oH.js";
import "@supabase/supabase-js";
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
const StripeSecurityTooltip = ({ children }) => {
  return /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children }),
    /* @__PURE__ */ jsxs(TooltipContent, { side: "top", className: "max-w-xs p-4 space-y-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-primary shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Bezpieczna płatność" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Twoja płatność jest chroniona przez Stripe — lidera płatności online. Dane karty nie są zapisywane na naszym serwerze. Wszystkie transakcje spełniają standard PCI DSS." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-1", children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 60 25", className: "w-10 h-4", "aria-label": "Stripe", role: "img", children: [
          /* @__PURE__ */ jsx("rect", { width: "60", height: "25", rx: "4", fill: "#635BFF" }),
          /* @__PURE__ */ jsx(
            "text",
            {
              x: "30",
              y: "17",
              textAnchor: "middle",
              fill: "white",
              fontFamily: "Arial, sans-serif",
              fontSize: "13",
              fontWeight: "700",
              children: "stripe"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground tracking-wider uppercase", children: "PCI DSS Level 1" })
      ] })
    ] })
  ] });
};
const seasonData = [
  {
    name: "Sezon niski",
    period: "1 listopad – 31 marzec",
    icon: Snowflake,
    minNights: 2,
    accent: "border-l-4 border-l-sky-400",
    iconColor: "text-sky-500",
    bgAccent: "bg-sky-50",
    rows: [
      { guests: "do 4 osób", weekday: 399, weekend: 499 },
      { guests: "do 6 osób", weekday: 499, weekend: 599 },
      { guests: "do 8 osób", weekday: 599, weekend: 699 }
    ]
  },
  {
    name: "Sezon średni",
    period: "1 kwi – 31 maj / 1 wrz – 31 paź",
    icon: Leaf,
    minNights: 2,
    accent: "border-l-4 border-l-amber-400",
    iconColor: "text-amber-600",
    bgAccent: "bg-amber-50",
    rows: [
      { guests: "do 2 osób", weekday: 399, weekend: 499 },
      { guests: "do 4 osób", weekday: 499, weekend: 599 },
      { guests: "do 6 osób", weekday: 599, weekend: 699 },
      { guests: "do 8 osób", weekday: 649, weekend: 749 }
    ]
  },
  {
    name: "Sezon wysoki",
    period: "1 czerwiec – 31 sierpień",
    icon: Sun,
    minNights: 3,
    accent: "border-l-4 border-l-orange-500",
    iconColor: "text-orange-600",
    bgAccent: "bg-orange-50",
    rows: [
      { guests: "do 2 osób", weekday: 499, weekend: 599 },
      { guests: "do 4 osób", weekday: 599, weekend: 699 },
      { guests: "do 6 osób", weekday: 699, weekend: 799 },
      { guests: "do 8 osób", weekday: 799, weekend: 899 }
    ]
  }
];
const extras = [
  {
    icon: Bath,
    title: "Ruska bania",
    desc: "250 zł za cały pobyt",
    note: "niezależnie od liczby nocy"
  },
  {
    icon: Percent,
    title: "Zniżka za długi pobyt",
    desc: "−10% przy 7+ nocach",
    note: "naliczana automatycznie"
  },
  {
    icon: Clock,
    title: "Minimalna rezerwacja",
    desc: "2 noce (3 w sezonie wysokim)",
    note: "weekendy i długie weekendy"
  }
];
const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const scrollTo = (id) => {
    var _a;
    (_a = document.querySelector(id)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx("section", { id: "cennik", className: "section-padding bg-secondary", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans", children: "Cennik" }),
          /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Ile kosztuje pobyt w lesie?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto text-sm md:text-base", children: "Przejrzysty cennik za cały dom — bez ukrytych kosztów. Cena zależy od sezonu, liczby gości i dnia tygodnia." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6 mb-12", children: seasonData.map((season) => {
          const Icon = season.icon;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: `bg-card border border-border overflow-hidden ${season.accent}`,
              children: [
                /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between px-5 py-4 ${season.bgAccent}`, children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(Icon, { className: `w-5 h-5 ${season.iconColor}`, strokeWidth: 1.5 }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-heading text-base font-semibold text-foreground", children: season.name }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: season.period })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "text-xs bg-card border border-border px-3 py-1 rounded-full text-muted-foreground whitespace-nowrap", children: [
                    "min. ",
                    season.minNights,
                    " ",
                    season.minNights === 2 ? "noce" : "noce"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(Table, { children: [
                  /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { className: "hover:bg-transparent", children: [
                    /* @__PURE__ */ jsx(TableHead, { className: "w-1/3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsx(Users, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Goście" })
                    ] }) }),
                    /* @__PURE__ */ jsx(TableHead, { className: "text-center", children: "Pn–Czw" }),
                    /* @__PURE__ */ jsx(TableHead, { className: "text-center", children: "Pt–Sb" })
                  ] }) }),
                  /* @__PURE__ */ jsx(TableBody, { children: season.rows.map((row, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
                    /* @__PURE__ */ jsx(TableCell, { className: "font-medium text-sm", children: row.guests }),
                    /* @__PURE__ */ jsxs(TableCell, { className: "text-center", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-heading text-lg font-semibold text-foreground", children: row.weekday }),
                      /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground ml-1", children: "zł" })
                    ] }),
                    /* @__PURE__ */ jsxs(TableCell, { className: "text-center", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-heading text-lg font-semibold text-foreground", children: row.weekend }),
                      /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground ml-1", children: "zł" })
                    ] })
                  ] }, i)) })
                ] })
              ]
            },
            season.name
          );
        }) }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-4 mb-10", children: extras.map((e, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-card border border-border p-5 text-center space-y-2",
            children: [
              /* @__PURE__ */ jsx(e.icon, { className: "w-6 h-6 text-primary mx-auto", strokeWidth: 1.5 }),
              /* @__PURE__ */ jsx("p", { className: "font-heading text-sm font-semibold text-foreground", children: e.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: e.desc }),
              /* @__PURE__ */ jsx("p", { className: "text-[11px] text-muted-foreground/70", children: e.note })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border p-6 md:p-8 mb-10 space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx(TreePine, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-lg font-semibold text-foreground", children: "Dom w lesie na wyłączność — cennik bez niespodzianek" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
            "Wynajmujemy cały ",
            /* @__PURE__ */ jsx("strong", { children: "domek w lesie w Puszczy Knyszyńskiej" }),
            " na wyłączność — bez współdzielenia z innymi gośćmi. Cena obejmuje dom, ogród z ogrodzeniem, kominek, parking i dostęp do lasu wprost z posesji. To idealna propozycja na ",
            /* @__PURE__ */ jsx("strong", { children: "weekend w lesie" }),
            ", romantyczny wypad we dwoje, ",
            /* @__PURE__ */ jsx("strong", { children: "wieczór panieński na Podlasiu" }),
            " lub workation w ciszy natury."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
            "Opcjonalnie możesz zarezerwować ",
            /* @__PURE__ */ jsx("strong", { children: "ruską banię" }),
            " — tradycyjną saunę opalaną drewnem, dostępną przez cały pobyt za jednorazową opłatą 250 zł. Przy rezerwacji na 7 lub więcej nocy naliczamy ",
            /* @__PURE__ */ jsx("strong", { children: "10% zniżki" }),
            " od łącznej kwoty — dłuższy pobyt w leśnym domu naprawdę się opłaca."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Rezerwując bezpośrednio przez naszą stronę, unikasz prowizji pośredników. Zaliczkę (30%) opłacasz bezpiecznie online, resztę regulujesz na miejscu. Akceptujemy BLIK, karty płatnicze i przelewy." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-3 pb-1", children: /* @__PURE__ */ jsx(StripeSecurityTooltip, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 text-xs text-muted-foreground bg-background/80 border border-border rounded-full px-5 py-2.5 cursor-help", children: [
            /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 60 25", className: "w-12 h-5 shrink-0", "aria-label": "Stripe", role: "img", children: [
              /* @__PURE__ */ jsx("rect", { width: "60", height: "25", rx: "4", fill: "#635BFF" }),
              /* @__PURE__ */ jsx("text", { x: "30", y: "17", textAnchor: "middle", fill: "white", fontFamily: "Arial, sans-serif", fontSize: "13", fontWeight: "700", children: "stripe" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Zaliczka 30% · Reszta na miejscu" })
          ] }) }) }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-muted-foreground/70", children: "Akceptujemy BLIK, karty płatnicze i przelewy online" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center pt-4", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => scrollTo("#rezerwacja"), className: "btn-primary", children: "Sprawdź dostępność" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+48722765101", className: "btn-outline", children: "Zapytaj o pobyt" })
          ] })
        ] })
      ]
    }
  ) });
};
export {
  PricingSection as default
};
