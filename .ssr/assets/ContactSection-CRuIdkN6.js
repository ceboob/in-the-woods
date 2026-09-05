import { jsx, jsxs } from "react/jsx-runtime";
import { u as useScrollAnimation } from "./Index-P5RrnN8F.js";
import { User, Phone, Mail } from "lucide-react";
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
const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx("section", { id: "kontakt", className: "px-6 md:px-12 py-16 bg-background", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsx(User, { className: "w-5 h-5 text-primary", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsx("p", { className: "font-heading text-lg font-medium", children: "Gospodarz: Maciej" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxs("a", { href: "tel:+48722765101", className: "btn-primary inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
              " 722 765 101"
            ] }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "mailto:tutinthewood@gmail.com",
                className: "btn-outline inline-flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                  " tutinthewood@gmail.com"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Konne 109/1, 16-030 Supraśl" })
      ]
    }
  ) });
};
export {
  ContactSection as default
};
