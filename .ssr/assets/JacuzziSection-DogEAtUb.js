import { jsxs, jsx } from "react/jsx-runtime";
import { u as useScrollAnimation } from "./Index-BymNgByc.js";
import { g as gardenTubHouse } from "./gallery-bania-dom-thumb-CZ371dnu.js";
import { Snowflake, Leaf, Bike, Heart } from "lucide-react";
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
const bullets = [
  { icon: Snowflake, text: "Idealne zimą — gorąca balia w śnieżnym lesie" },
  { icon: Leaf, text: "Idealne jesienią — ciepło wśród kolorowych liści" },
  { icon: Bike, text: "Idealne po rowerach i kajakach" },
  { icon: Heart, text: "Romantyczny weekend z gorącą balią pod gwiazdami" }
];
const JacuzziSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsxs("section", { id: "jacuzzi", className: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-[50vh] min-h-[400px]", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: gardenTubHouse,
          alt: "Balia ogrodowa z funkcją jacuzzi przy domu In The Woods w Puszczy Knyszyńskiej",
          className: "w-full h-full object-cover",
          loading: "lazy",
          width: "1920",
          height: "1440"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-foreground/40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center px-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-white/80 font-sans mb-4", children: "BALIA OGRODOWA Z FUNKCJĄ JACUZZI" }),
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-3xl md:text-5xl lg:text-6xl font-light text-white", children: "Balia ogrodowa z funkcją jacuzzi pod gwiazdami" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: `section-padding bg-background transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("p", { className: "section-subtitle mx-auto", children: "Naszą dumą jest balia ogrodowa z funkcją jacuzzi. Każdego wieczora ogród staje się miejscem odpoczynku na świeżym powietrzu — latem pod rozgwieżdżonym niebem Puszczy Knyszyńskiej, zimą w scenerii białego puchu i rześkiego powietrza." }),
            /* @__PURE__ */ jsx("div", { className: "space-y-1 text-base text-foreground/80 text-smallcaps", children: /* @__PURE__ */ jsx("p", { children: "Ciepła woda. Chłodne powietrze. Gwiazdy nad Puszczą Knyszyńską." }) }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "To moment, kiedy naprawdę się resetujesz. Balia ogrodowa z funkcją jacuzzi w leśnym ogrodzie — chwila odpoczynku bez pośpiechu." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: bullets.map((b, i) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "card-premium p-4 flex flex-col items-center gap-3",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(b.icon, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground tracking-wide", children: b.text })
              ]
            },
            i
          )) })
        ] })
      }
    )
  ] });
};
export {
  JacuzziSection as default
};
