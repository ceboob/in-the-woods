import { jsx, jsxs } from "react/jsx-runtime";
import { u as useScrollAnimation } from "./Index-P5RrnN8F.js";
import { MapPin, Navigation } from "lucide-react";
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
const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx("section", { id: "lokalizacja", className: "section-padding bg-background", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans", children: "Lokalizacja" }),
          /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Domek w lesie Podlasie — Puszcza Knyszyńska, Supraśl" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Konne 109/1, 16-030 Supraśl" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto mb-8 space-y-4 text-muted-foreground leading-relaxed text-center", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "Nasz leśny domek do wynajęcia znajduje się w miejscowości ",
            /* @__PURE__ */ jsx("strong", { children: "Konne" }),
            " — malowniczej osadzie w samym sercu ",
            /* @__PURE__ */ jsx("strong", { children: "Puszczy Knyszyńskiej" }),
            ", przy ",
            /* @__PURE__ */ jsx("strong", { children: "Rezerwacie Przyrody Krzemienne Góry" }),
            ". To domek podlaskie odludzie w najczystszej formie — gruntowa droga przez las prowadzi do ogrodzonej posesji otoczonej stuletnią puszczą."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Domek na odludziu podlaskie, zaledwie ",
            /* @__PURE__ */ jsx("strong", { children: "10 minut od Supraśla" }),
            " i ",
            /* @__PURE__ */ jsx("strong", { children: "25 minut od Białegostoku" }),
            ". W okolicy: Monaster w Supraślu, Muzeum Ikon, szlaki piesze i rowerowe Puszczy Knyszyńskiej, spływ kajakowy rzeką Supraśl, tatarska wieś Kruszyniany. Las wynajem Puszcza Knyszyńska — to adres, do którego chce się wracać."
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden border border-border mb-6 rounded-lg", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            src: "https://maps.google.com/maps?q=53.208577,23.436622&z=14&output=embed&hl=pl",
            width: "100%",
            height: "400",
            style: { border: 0 },
            allowFullScreen: true,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            title: "Lokalizacja In The Woods — domek w lesie Supraśl",
            className: "w-full"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-xl mx-auto", children: "Przy Rezerwacie Krzemienne Góry, w sercu Puszczy Knyszyńskiej — domek w lesie Supraśl." }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://www.google.com/maps/dir/?api=1&destination=53.208577,23.436622",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn-outline inline-flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(Navigation, { className: "w-4 h-4" }),
                " Wyznacz trasę"
              ]
            }
          )
        ] })
      ]
    }
  ) });
};
export {
  LocationSection as default
};
