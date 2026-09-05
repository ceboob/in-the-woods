import { jsx, jsxs } from "react/jsx-runtime";
import { u as useScrollAnimation } from "./Index-P5RrnN8F.js";
import { Clock, CreditCard, ShieldCheck, TreePine } from "lucide-react";
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
const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
      children: [
        /* @__PURE__ */ jsx("h2", { className: "section-title mb-4", children: "Zarezerwuj leśny domek do wynajęcia — Twój dom na wyłączność" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 text-lg", children: "Domek w lesie wynajem na Podlasiu — szepty Puszczy Knyszyńskiej, klimatyczny kominek, ruska bania pod gwiazdami i absolutna prywatność. Wszystko czeka na Ciebie." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Odpowiadamy zwykle w kilka godzin. Rezerwacja bezpośrednia — bez prowizji pośrednika." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-6 mb-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-primary" }),
            " Szybka odpowiedź"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(CreditCard, { className: "w-4 h-4 text-primary" }),
            " Bez prowizji pośrednika"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-primary" }),
            " Dom na wyłączność"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(TreePine, { className: "w-4 h-4 text-primary" }),
            " Leśny domek do wynajęcia"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-smallcaps", children: "Najlepsze terminy są rezerwowane z wyprzedzeniem — domek na sylwestra, walentynki czy majówkę w lesie znika pierwszy." })
      ]
    }
  ) });
};
export {
  CTASection as default
};
