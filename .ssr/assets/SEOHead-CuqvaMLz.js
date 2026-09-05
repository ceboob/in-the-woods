import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "https://www.suprasl.online/og-image.jpg",
  keywords,
  type = "website",
  jsonLd,
  noindex = false,
  publishedTime,
  modifiedTime
}) => {
  const jsonLdArray = jsonLd ? Array.isArray(jsonLd) ? jsonLd : [jsonLd] : [];
  const keywordContent = Array.isArray(keywords) ? keywords.join(", ") : keywords;
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    keywordContent ? /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywordContent }) : null,
    /* @__PURE__ */ jsx(
      "meta",
      {
        name: "robots",
        content: noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1"
      }
    ),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
    /* @__PURE__ */ jsx("link", { rel: "alternate", hrefLang: "pl", href: canonical }),
    /* @__PURE__ */ jsx("link", { rel: "alternate", hrefLang: "x-default", href: canonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: type }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "pl_PL" }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "In The Woods — Dom w Puszczy Knyszyńskiej" }),
    type === "article" && publishedTime ? /* @__PURE__ */ jsx("meta", { property: "article:published_time", content: publishedTime }) : null,
    type === "article" && (modifiedTime || publishedTime) ? /* @__PURE__ */ jsx("meta", { property: "article:modified_time", content: modifiedTime || publishedTime }) : null,
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImage }),
    /* @__PURE__ */ jsx("meta", { name: "geo.region", content: "PL-20" }),
    /* @__PURE__ */ jsx("meta", { name: "geo.placename", content: "Supraśl" }),
    jsonLdArray.map((data, i) => /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(data) }, i))
  ] });
};
export {
  SEOHead as S
};
