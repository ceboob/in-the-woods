import { jsx, jsxs } from "react/jsx-runtime";
import { u as useScrollAnimation } from "./Index-P5RrnN8F.js";
import { Link } from "react-router-dom";
import { Heart, PartyPopper, Users, Briefcase } from "lucide-react";
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
const events = [
  {
    icon: Heart,
    title: "Wieczory panieńskie",
    desc: "Prywatna balia pod gwiazdami, kominek i las na wyłączność. Niezapomniany wieczór w kameralnym gronie."
  },
  {
    icon: PartyPopper,
    title: "Wieczory kawalerskie",
    desc: "Ognisko, grill, ruska bania i absolutna wolność. Impreza w sercu Puszczy Knyszyńskiej."
  },
  {
    icon: Users,
    title: "Urodziny i rocznice",
    desc: "Kameralne świętowanie w otoczeniu natury. Dom na wyłączność dla do 8 osób."
  },
  {
    icon: Briefcase,
    title: "Integracje firmowe",
    desc: "Team building w lesie — kominek, balia i ognisko zamiast sali konferencyjnej."
  }
];
const EventsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Organizacja imprez i wydarzeń" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Prywatny dom w lesie z jacuzzi to idealne miejsce na wyjątkowe okazje. Cisza Puszczy Knyszyńskiej, premium atmosfera i pełna prywatność." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10", children: events.map((event, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "card-premium p-6 text-center space-y-4",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(event.icon, { className: "w-6 h-6 text-primary", strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-heading text-lg font-semibold text-foreground", children: event.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: event.desc })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
          Link,
          {
            to: "/wieczor-panienski-suprasl",
            className: "btn-outline inline-flex items-center gap-2",
            children: "Dowiedz się więcej o imprezach"
          }
        ) })
      ]
    }
  ) });
};
export {
  EventsSection as default
};
