import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock, Phone, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { S as SEOHead } from "./SEOHead-CuqvaMLz.js";
const BlogArticleLayout = ({
  children,
  title,
  metaTitle,
  metaDescription,
  slug,
  publishDate,
  readTime,
  keywords,
  faqs,
  relatedArticles = [],
  ogImage = "https://www.suprasl.online/og-image.jpg",
  dateModified,
  events
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDescription,
    url: `https://www.suprasl.online/blog/${slug}`,
    datePublished: publishDate,
    dateModified: dateModified || publishDate,
    author: { "@type": "Organization", name: "In The Woods" },
    publisher: {
      "@type": "Organization",
      name: "In The Woods",
      url: "https://www.suprasl.online"
    },
    mainEntityOfPage: `https://www.suprasl.online/blog/${slug}`,
    keywords: keywords.join(", "),
    image: {
      "@type": "ImageObject",
      url: ogImage,
      width: 1200,
      height: 630,
      caption: `In The Woods Supraśl — ${title}`
    }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
    }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://www.suprasl.online/"
      },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.suprasl.online/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://www.suprasl.online/blog/${slug}`
      }
    ]
  };
  const jsonLdArray = [articleSchema, faqSchema, breadcrumbSchema];
  if (Array.isArray(events) && events.length > 0) {
    jsonLdArray.unshift(...events);
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: metaTitle,
        description: metaDescription,
        canonical: `https://www.suprasl.online/blog/${slug}`,
        ogImage,
        keywords,
        type: "article",
        jsonLd: jsonLdArray,
        publishedTime: publishDate,
        modifiedTime: dateModified || publishDate
      }
    ),
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("meta", { property: "article:author", content: "In The Woods" }),
      /* @__PURE__ */ jsx("meta", { property: "article:section", content: "Blog" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "bg-background border-b border-border sticky top-0 z-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "font-display text-xl tracking-wide text-foreground logo-glow", children: "In The Woods" }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6", children: [
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "nav-link text-foreground/70 hover:text-foreground", children: "Blog" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/noclegi-suprasl",
            className: "nav-link text-foreground/70 hover:text-foreground",
            children: "Noclegi"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/atrakcje-suprasl",
            className: "nav-link text-foreground/70 hover:text-foreground",
            children: "Atrakcje"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/weekend-suprasl",
            className: "nav-link text-foreground/70 hover:text-foreground",
            children: "Weekend"
          }
        ),
        /* @__PURE__ */ jsx("a", { href: "tel:+48722765101", className: "btn-primary text-xs py-2.5 px-6", children: "Zadzwoń" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-6 md:px-12 pt-6", children: /* @__PURE__ */ jsxs(
      "nav",
      {
        className: "flex items-center gap-1.5 text-sm text-muted-foreground",
        "aria-label": "Breadcrumb",
        children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Strona główna" }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-foreground transition-colors", children: "Blog" }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground truncate max-w-[200px]", children: title })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 md:px-12 pt-8 pb-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-heading text-3xl md:text-4xl font-light text-foreground mb-4", children: title }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx("time", { dateTime: publishDate, children: publishDate })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
          readTime
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("article", { className: "max-w-4xl mx-auto px-6 md:px-12 pb-12", children: /* @__PURE__ */ jsx("div", { className: "prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-light prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md", children }) }),
    faqs.length > 0 && /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 md:px-12 pb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-heading text-2xl md:text-3xl font-light text-foreground mb-8", children: "Najczęściej zadawane pytania" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: faqs.map((faq, i) => /* @__PURE__ */ jsxs("details", { className: "group border border-border rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ jsxs("summary", { className: "cursor-pointer px-6 py-4 bg-card hover:bg-accent/30 transition-colors font-medium text-foreground flex items-center justify-between", children: [
          faq.question,
          /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 transition-transform group-open:rotate-90" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-6 py-4 text-foreground/80 leading-relaxed", children: faq.answer })
      ] }, i)) })
    ] }),
    relatedArticles.length > 0 && /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 md:px-12 pb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-heading text-2xl font-light text-foreground mb-6", children: "Czytaj również" }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: relatedArticles.map((a, i) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/blog/${a.slug}`,
          className: "block p-5 border border-border rounded-lg hover:bg-card transition-colors group",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-foreground group-hover:text-primary transition-colors font-medium", children: a.title }),
            /* @__PURE__ */ jsx("span", { className: "block mt-1 text-sm text-muted-foreground", children: "Czytaj więcej →" })
          ]
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 py-16 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-heading text-3xl font-light text-foreground", children: "Gdzie nocować w Supraślu?" }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground/70 max-w-xl mx-auto", children: "Jeśli szukasz komfortowego noclegu w Supraślu, In The Woods oferuje prywatny dom w lesie z jacuzzi i kominkiem." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "tel:+48722765101", className: "btn-primary inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
          " Sprawdź dostępność"
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:tutinthewood@gmail.com",
            className: "btn-outline inline-flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
              " Napisz do nas"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "bg-foreground text-white/70 px-6 md:px-12 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center space-y-4", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-lg text-white logo-glow", children: "In The Woods" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-primary transition-colors", children: "Strona główna" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-primary transition-colors", children: "Blog" }),
        /* @__PURE__ */ jsx(Link, { to: "/noclegi-suprasl", className: "hover:text-primary transition-colors", children: "Noclegi Supraśl" }),
        /* @__PURE__ */ jsx(Link, { to: "/domek-suprasl", className: "hover:text-primary transition-colors", children: "Domek Supraśl" }),
        /* @__PURE__ */ jsx(Link, { to: "/domek-z-jacuzzi-podlasie", className: "hover:text-primary transition-colors", children: "Domek z jacuzzi" }),
        /* @__PURE__ */ jsx(Link, { to: "/atrakcje-suprasl", className: "hover:text-primary transition-colors", children: "Atrakcje Supraśla" }),
        /* @__PURE__ */ jsx(Link, { to: "/wieczor-panienski-suprasl", className: "hover:text-primary transition-colors", children: "Wieczór panieński" }),
        /* @__PURE__ */ jsx(Link, { to: "/weekend-suprasl", className: "hover:text-primary transition-colors", children: "Weekend Supraśl" }),
        /* @__PURE__ */ jsx(Link, { to: "/puszcza-knyszynska-nocleg", className: "hover:text-primary transition-colors", children: "Puszcza Knyszyńska" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-white/40", children: "© 2026 In The Woods, Maciej Cybulko. Wszelkie prawa zastrzeżone." })
    ] }) })
  ] });
};
export {
  BlogArticleLayout as B
};
