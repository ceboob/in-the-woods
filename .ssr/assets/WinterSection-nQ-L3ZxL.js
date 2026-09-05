import { jsxs, jsx } from "react/jsx-runtime";
import { u as useScrollAnimation } from "./Index-P5RrnN8F.js";
import { w as winterForest } from "./winter-forest-DRlm77Uf.js";
import "react";
import "./SEOHead-CuqvaMLz.js";
import "react-helmet-async";
import "./Navbar-B3uqN1ij.js";
import "react-router-dom";
import "lucide-react";
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
const winterCabin = "/assets/winter-cabin-real-nDZirFht.webp";
const winterGolden = "/assets/winter-cabin-golden-BsQRADyz.webp";
const ideas = ["Domek na sylwestra w lesie", "Ferie zimowe w puszczy", "Walentynki w leśnym domku", "Majówka w lesie"];
const WinterSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsxs("section", { className: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-[50vh] min-h-[350px]", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: winterGolden,
          alt: "Domek na sylwestra w lesie — chata In The Woods zimą, Puszcza Knyszyńska",
          className: "w-full h-full object-cover",
          loading: "lazy",
          width: "1920",
          height: "1080"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-foreground/30" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center px-6 max-w-2xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-3xl md:text-5xl font-light text-white mb-4", children: "Domek na sylwestra i zimowy weekend w lesie" }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-white/80 text-smallcaps", children: "Śnieg na dachu. Kominek w środku. Gorąca bania na zewnątrz." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: `section-padding bg-background transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto text-center mb-12 space-y-4", children: /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "Zima w Puszczy Knyszyńskiej ma swój niepowtarzalny urok. Kiedy śnieg przykrywa las i ciszę przerywają tylko odgłosy dzięcioła, nasz domek w lesie zamienia się w przytulny azyl. Rano rozpalasz kominek, parzysz kawę i obserwujesz las za oknem. Po południu spacer po zaśnieżonych szlakach albo narty biegowe wśród sosen. A wieczorem — gorąca bania pod rozgwieżdżonym zimowym niebem i powrót do ciepłego domu z bali na wyłączność." }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 mb-12", children: [
            /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: winterCabin,
                alt: "Domek z kominkiem w lesie zimą — leśny dom na wynajem w Puszczy Knyszyńskiej",
                className: "w-full h-[280px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-700",
                loading: "lazy",
                width: "800",
                height: "350"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: winterForest,
                alt: "Zaśnieżony las Puszczy Knyszyńskiej — domek na odludziu podlaskie zimą",
                className: "w-full h-[280px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-700",
                loading: "lazy",
                width: "800",
                height: "350"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-6", children: "Idealne miejsce na" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: ideas.map((idea, i) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-5 py-2.5 border border-border text-sm text-foreground bg-card",
                children: idea
              },
              i
            )) })
          ] })
        ] })
      }
    )
  ] });
};
export {
  WinterSection as default
};
