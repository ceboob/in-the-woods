import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { S as SEOHead } from "./SEOHead-CuqvaMLz.js";
import "react-helmet-async";
const PlatnoscSukces = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Płatność zakończona – In The Woods",
        description: "Dziękujemy za wpłatę zaliczki. Potwierdzimy rezerwację w ciągu kilku godzin.",
        canonical: "https://www.suprasl.online/platnosc-sukces",
        noindex: true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full text-center space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-10 h-10 text-primary" }) }),
      /* @__PURE__ */ jsx("h1", { className: "font-heading text-3xl font-semibold", children: "Dziękujemy za wpłatę!" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Zaliczka została zaksięgowana. Potwierdzimy rezerwację i wyślemy szczegóły pobytu na podany adres e-mail." }),
      /* @__PURE__ */ jsxs("div", { className: "bg-secondary p-4 rounded-lg text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx("p", { children: "Masz pytania? Zadzwoń do nas:" }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+48722765101",
            className: "text-primary font-medium flex items-center justify-center gap-2 mt-2",
            children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
              " +48 722 765 101"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Wróć na stronę główną"
          ]
        }
      )
    ] }) })
  ] });
};
export {
  PlatnoscSukces as default
};
