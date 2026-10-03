import { jsx, jsxs } from "react/jsx-runtime";
import { u as useScrollAnimation } from "./Index-BymNgByc.js";
import { Heart, Users, Dog, Laptop, Snail } from "lucide-react";
import "react";
import "./SEOHead-7EoxiLOs.js";
import "react-helmet-async";
import "./Navbar-B44cr150.js";
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
const audiences = [
  {
    icon: Heart,
    title: "Pary",
    desc: "Kameralna atmosfera, rozpalony kominek, gorąca balia pod gwiazdami i poranna kawa na tarasie. Idealne miejsce na zaręczyny, rocznicę lub romantyczny weekend we dwoje na Podlasiu."
  },
  {
    icon: Users,
    title: "Rodziny z dziećmi",
    desc: "Bezpieczny, ogrodzony teren z placem zabaw, altaną i miejscem na ognisko. Dzieci bawią się blisko natury, czworonogi biegają bez smyczy, a dorośli odpoczywają na tarasie. Przestronny dom do wynajęcia w okolicach Supraśla dla całej rodziny."
  },
  {
    icon: Users,
    title: "Przyjaciele",
    desc: "Dom z bali na wyłączność — bez obcych gości i bez skrępowania. Wieczorne grillowanie w altanie, odpoczynek w balii ogrodowej z funkcją jacuzzi i rozmowy przy ognisku do białego rana. Świetna baza na spływy kajakowe rzeką Supraśl i wycieczki po okolicach Białegostoku."
  },
  {
    icon: Dog,
    title: "Z psem",
    desc: "Twój pupil jest u nas pełnoprawnym gościem bez żadnych dopłat. Szczelnie ogrodzona działka i nieskończone kilometry leśnych ścieżek tuż za furtką — prawdziwy raj dla psów i ich właścicieli."
  },
  {
    icon: Laptop,
    title: "Workation",
    desc: "Szybki i stabilny internet Starlink, wygodne biurko z widokiem na sosnowy las i absolutny spokój sprzyjający skupieniu. Efektywna praca zdalna, po której od razu ruszasz na leśne szlaki."
  },
  {
    icon: Snail,
    title: "Slow travel",
    desc: "Slow travel Polska w najczystszej formie. Oderwanie od cywilizacji, spokojny wypoczynek w naturze i chill w lesie — bez pośpiechu, bez zasięgu, bez planu."
  }
];
const ForWhoSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx("section", { className: "section-padding bg-secondary", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans", children: "Dla kogo" }),
          /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Dla kogo jest dom w lesie? Twój pobyt, Twoje zasady" }),
          /* @__PURE__ */ jsx("p", { className: "section-subtitle mx-auto", children: "Leśny domek do wynajęcia na wyłączność — nie dzielisz domu z innymi gośćmi. To Twoja prywatna przestrzeń w lesie, gdzie sam decydujesz o rytmie dnia." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: audiences.map((a, i) => /* @__PURE__ */ jsxs("div", { className: "card-premium p-6 text-center group space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(a.icon, { className: "w-6 h-6 text-primary", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-heading text-lg font-semibold text-foreground", children: a.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: a.desc })
        ] }, i)) })
      ]
    }
  ) });
};
export {
  ForWhoSection as default
};
