import { jsx, jsxs } from "react/jsx-runtime";
import { u as useScrollAnimation } from "./Index-P5RrnN8F.js";
import { Flame, UtensilsCrossed, Bed, Bath, TreePine, Wifi, Wind, Monitor, Dog, Baby, FlameKindling } from "lucide-react";
import "react";
import "./SEOHead-CuqvaMLz.js";
import "react-helmet-async";
import "./Navbar-B3uqN1ij.js";
import "react-router-dom";
import "@radix-ui/react-dialog";
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
import "./client-BI8YE9oH.js";
import "@supabase/supabase-js";
const amenities = [
  {
    icon: Flame,
    title: "Klimatyczny kominek",
    desc: "Prawdziwy ogień trzaska wieczorem w salonie. Rozpal kominek, nalej wino i poczuj ciepło drewna — domek z kominkiem w lesie, o jakim marzysz."
  },
  {
    icon: UtensilsCrossed,
    title: "Kuchnia z płytą kaflową",
    desc: "W pełni wyposażona kuchnia z elegancką płytą kaflową, ekspresem do kawy i jadalnią. Gotuj wspólne posiłki z widokiem na ogród."
  },
  {
    icon: Bed,
    title: "Komfortowe sypialnie",
    desc: "Dwie sypialnie na piętrze z dużymi łóżkami, drewnianymi belkami i widokiem na las. Budzisz się do śpiewu ptaków, nie budzika."
  },
  {
    icon: Bath,
    title: "Łazienka i toaleta",
    desc: "Nowoczesna łazienka oraz dodatkowa toaleta na parterze. Ciepła woda, wygoda i prywatność dla każdego gościa."
  },
  {
    icon: TreePine,
    title: "Ogrodzony teren z altaną",
    desc: "Prywatny ogród z tarasem, altaną i miejscem na ognisko. Ogrodzony teren daje bezpieczeństwo dzieciom i psom — Twoja przestrzeń w lesie."
  },
  {
    icon: Wifi,
    title: "Starlink — szybki internet",
    desc: "Szerokopasmowy i stabilny internet Starlink od SpaceX — nawet w sercu Puszczy Knyszyńskiej. Wygodne biurko z widokiem na las. Idealny na workation i pracę zdalną."
  },
  {
    icon: Wind,
    title: "Klimatyzacja",
    desc: "Komfort termiczny niezależnie od pory roku. Latem chłód, zimą ciepło — dom gotowy na każdą pogodę."
  },
  {
    icon: Monitor,
    title: "Smart TV w pokojach",
    desc: "Telewizory w sypialniach i salonie do wieczornych seansów filmowych. Albo wyłącz ekrany i posłuchaj ciszy lasu."
  },
  {
    icon: Dog,
    title: "Psy za darmo",
    desc: "Twój pies jest pełnoprawnym gościem — bez dopłat. Ogrodzony teren w lesie i kilometry leśnych ścieżek to raj dla czworonogów."
  },
  {
    icon: Baby,
    title: "Plac zabaw dla dzieci",
    desc: "Bezpieczna przestrzeń zabawy na ogrodzonym terenie. Dzieci biegają po ogrodzie, rodzice odpoczywają na tarasie."
  },
  {
    icon: FlameKindling,
    title: "Kominek ogrodowy i ognisko",
    desc: "Wieczorne ognisko w altanie lub kominek ogrodowy pod gwiazdami. Grill, kiełbaski i rozmowy, które trwają do rana."
  }
];
const AmenitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx("section", { id: "dom", className: "section-padding bg-secondary", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans", children: "Dom i udogodnienia" }),
          /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Domek z sauną, jacuzzi i kominkiem w sercu lasu" }),
          /* @__PURE__ */ jsx("p", { className: "section-subtitle mx-auto", children: "Komfortowy dom z bali na wyłączność — do 8 osób. Ogrodzony teren, psy za darmo, pełne wyposażenie i prywatny ogród w Puszczy Knyszyńskiej." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: amenities.map((a, i) => /* @__PURE__ */ jsxs("div", { className: "card-premium p-6 text-center group space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(a.icon, { className: "w-6 h-6 text-primary", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-heading text-lg font-semibold text-foreground", children: a.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: a.desc }),
          a.title.includes("Starlink") && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 pt-1", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 120 20", className: "h-4 w-auto text-muted-foreground", fill: "currentColor", children: /* @__PURE__ */ jsx("text", { x: "0", y: "15", fontSize: "14", fontWeight: "700", fontFamily: "Arial, sans-serif", letterSpacing: "2", children: "STARLINK" }) }) })
        ] }, i)) })
      ]
    }
  ) });
};
export {
  AmenitiesSection as default
};
