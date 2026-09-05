import { jsx, jsxs } from "react/jsx-runtime";
import { u as useScrollAnimation } from "./Index-P5RrnN8F.js";
import { b as baniaFront } from "./gallery-bania-front-thumb-jA8fGZZ2.js";
import { t as tarasRelaks } from "./gallery-taras-relaks-thumb-93cfWWE7.js";
import { Snowflake, Sun, Leaf, Flower2 } from "lucide-react";
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
const rituals = [
  {
    icon: Snowflake,
    season: "Zimą",
    text: "po spacerach w śnieżnej puszczy — zanurz się w gorącej bani i posłuchaj szeptów lasu"
  },
  {
    icon: Sun,
    season: "Latem",
    text: "po kajakach i rowerach — ochłódź się w wieczornym powietrzu, patrząc na gwiazdy"
  },
  {
    icon: Leaf,
    season: "Jesienią",
    text: "po grzybobraniu w Puszczy — zanurz się w ciepłej wodzie wśród kolorowych liści"
  },
  {
    icon: Flower2,
    season: "Wiosną",
    text: "po odkrywaniu budzącej się natury — wypij herbatę na tarasie przy śpiewie ptaków"
  }
];
const RelaxSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx("section", { id: "relaks", className: "section-padding bg-secondary", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans", children: "Strefa relaksu" }),
          /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Odpoczynek w lesie na weekend — slow travel w Puszczy Knyszyńskiej" }),
          /* @__PURE__ */ jsx("p", { className: "section-subtitle mx-auto", children: "Wyobraź sobie wieczór, w którym jedynym dźwiękiem jest trzask drewna. Spokojny wypoczynek w naturze, gdzie szepty puszczy otulają Cię ciepłem, a gorąca ruska bania czeka w ogrodzie — chill w lesie, z dala od cywilizacji. Zapalamy świece, podgrzewamy wodę drewnem i oddajemy się rytuałowi odpoczynku, który goście wspominają jeszcze długo po powrocie do miasta." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 md:gap-6 mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "overflow-hidden relative group", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: baniaFront,
                alt: "Prywatna ruska bania — domek z balią w lesie, SPA na odludziu w Puszczy Knyszyńskiej",
                className: "w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700",
                loading: "lazy",
                width: "600",
                height: "450"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-graphite/70 to-transparent p-6", children: /* @__PURE__ */ jsx("p", { className: "text-base text-white text-smallcaps", children: "Ostoja spokoju — prywatna ruska bania" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "overflow-hidden relative group", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: tarasRelaks,
                alt: "Odpoczynek w lesie weekend — relaks na tarasie leśnego domku w Supraślu",
                className: "w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700",
                loading: "lazy",
                width: "600",
                height: "450"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-graphite/70 to-transparent p-6", children: /* @__PURE__ */ jsx("p", { className: "text-base text-white text-smallcaps", children: "Luksus w sercu lasu" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto mb-16", children: [
          /* @__PURE__ */ jsx("p", { className: "text-center font-heading text-xl md:text-2xl font-light text-foreground mb-8", children: "Pomysły na weekend: rytuał na każdą porę roku" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4", children: rituals.map((r, i) => /* @__PURE__ */ jsxs("div", { className: "card-premium p-6 text-center space-y-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(r.icon, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }) }),
            /* @__PURE__ */ jsx("p", { className: "font-heading text-lg font-semibold text-foreground", children: r.season }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground px-3 leading-relaxed", children: r.text })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-heading text-2xl md:text-3xl font-light text-foreground", children: "Wieczorem:" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-muted-foreground text-base text-smallcaps", children: [
            /* @__PURE__ */ jsx("p", { children: "Ogień trzaska w kominku. Na niebie pojawiają się gwiazdy." }),
            /* @__PURE__ */ jsx("p", { children: "Ciepła woda w bani. Zapach drewna. Szepty Puszczy." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-foreground/80 text-smallcaps pt-4", children: "To esencja odpoczynku w lesie na weekend — ostoja spokoju, gdzie czas płynie inaczej." })
        ] })
      ]
    }
  ) });
};
export {
  RelaxSection as default
};
