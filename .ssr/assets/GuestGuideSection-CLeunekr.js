import { jsx, jsxs } from "react/jsx-runtime";
import { u as useScrollAnimation } from "./Index-P5RrnN8F.js";
import { Link } from "react-router-dom";
import { Flame, Bath, TreePine, ShieldCheck, BookOpen } from "lucide-react";
import "react";
import "./SEOHead-CuqvaMLz.js";
import "react-helmet-async";
import "./Navbar-B3uqN1ij.js";
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
const items = [
  { icon: Flame, label: "Kominek" },
  { icon: Bath, label: "Ruska bania" },
  { icon: TreePine, label: "Natura" },
  { icon: ShieldCheck, label: "Bezpieczeństwo" }
];
const GuestGuideSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx("section", { className: "section-padding bg-secondary", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-10", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans", children: "Dla gości" }),
          /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Informator gościa" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "Wszystko, co musisz wiedzieć przed przyjazdem i w trakcie pobytu — zasady, instrukcje, kontakt." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10", children: items.map(({ icon: Icon, label }) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-lg p-5 flex flex-col items-center gap-3",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", children: label })
            ]
          },
          label
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/informator", className: "btn-primary inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
            " Przeczytaj informator"
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://drive.google.com/file/d/1Kz6hA2My9p3MZuNTocCglt3-yow5LrE4/view?usp=drivesdk",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors",
              children: [
                /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
                " Pobierz PDF"
              ]
            }
          )
        ] })
      ]
    }
  ) });
};
export {
  GuestGuideSection as default
};
