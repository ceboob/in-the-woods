import { jsx, jsxs } from "react/jsx-runtime";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
const socialLinkClass = "group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground";
const contactLinkClass = "group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:bg-white/10 hover:text-white";
const Footer = () => /* @__PURE__ */ jsx("footer", { className: "bg-foreground px-6 py-12 text-white/80 md:px-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between gap-8 md:flex-row md:items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
      /* @__PURE__ */ jsx("p", { className: "logo-glow mb-2 font-display text-2xl text-white", children: "In The Woods" }),
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-sm tracking-wider text-white/70", children: "Dom w Puszczy · Supraśl · Podlasie" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-white/70", children: "Konne 109/1, 16-030 Supraśl" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-white/70", children: "Gospodarz: Maciej" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3 text-center", children: [
      /* @__PURE__ */ jsxs("a", { href: "tel:+48722765101", className: contactLinkClass, children: [
        /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-primary transition-transform duration-200 group-hover:scale-110" }),
        /* @__PURE__ */ jsx("span", { children: "722 765 101" })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "mailto:tutinthewood@gmail.com", className: contactLinkClass, children: [
        /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-primary transition-transform duration-200 group-hover:scale-110" }),
        /* @__PURE__ */ jsx("span", { children: "tutinthewood@gmail.com" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.24em] text-white/50", children: "Social media" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.instagram.com/krzemienna_chata/",
            "aria-label": "Instagram",
            className: socialLinkClass,
            target: "_blank",
            rel: "noreferrer",
            children: /* @__PURE__ */ jsx(Instagram, { className: "h-5 w-5 transition-transform duration-200 group-hover:scale-110" })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.facebook.com/krzemienna.chata/",
            "aria-label": "Facebook",
            className: socialLinkClass,
            target: "_blank",
            rel: "noreferrer",
            children: /* @__PURE__ */ jsx(Facebook, { className: "h-5 w-5 transition-transform duration-200 group-hover:scale-110" })
          }
        )
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "mt-8 border-t border-white/15 pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/70", children: [
    /* @__PURE__ */ jsx(Link, { to: "/noclegi-suprasl", className: "transition-colors hover:text-primary", children: "Noclegi Supraśl" }),
    /* @__PURE__ */ jsx(Link, { to: "/domek-suprasl", className: "transition-colors hover:text-primary", children: "Domek Supraśl" }),
    /* @__PURE__ */ jsx(Link, { to: "/domek-z-jacuzzi-podlasie", className: "transition-colors hover:text-primary", children: "Domek z jacuzzi" }),
    /* @__PURE__ */ jsx(Link, { to: "/dom-w-lesie-suprasl", className: "transition-colors hover:text-primary", children: "Dom w lesie Supraśl" }),
    /* @__PURE__ */ jsx(Link, { to: "/weekend-suprasl", className: "transition-colors hover:text-primary", children: "Weekend Supraśl" }),
    /* @__PURE__ */ jsx(Link, { to: "/wieczor-panienski-suprasl", className: "transition-colors hover:text-primary", children: "Wieczór panieński" }),
    /* @__PURE__ */ jsx(Link, { to: "/atrakcje-suprasl", className: "transition-colors hover:text-primary", children: "Atrakcje Supraśla" }),
    /* @__PURE__ */ jsx(Link, { to: "/puszcza-knyszynska-nocleg", className: "transition-colors hover:text-primary", children: "Nocleg Puszcza Knyszyńska" }),
    /* @__PURE__ */ jsx(Link, { to: "/informator", className: "transition-colors hover:text-primary", children: "Informator gościa" }),
    /* @__PURE__ */ jsx(Link, { to: "/blog", className: "transition-colors hover:text-primary", children: "Blog" })
  ] }) }),
  /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-white/60", children: "© 2026 In The Woods, Maciej Cybulko. Wszelkie prawa zastrzeżone." }) })
] }) });
export {
  Footer as default
};
