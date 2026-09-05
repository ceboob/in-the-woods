import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useMemo, useRef, useState, useEffect, useCallback, Suspense, lazy } from "react";
import { S as SEOHead } from "./SEOHead-CuqvaMLz.js";
import { N as Navbar } from "./Navbar-B3uqN1ij.js";
import { Users, Dog, Flame, Sparkles, Phone, CalendarCheck, Star, TreePine, Home, Volume2, Heart, Snail, Bath, Wifi, Shield, X, ShieldCheck, Eye, Clock, Send, ArrowLeft, Calendar, Mail, Loader2, CreditCard, Filter, ChevronLeft, ChevronRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { c as cn, u as useToast } from "../entry-server.js";
import { s as supabase } from "./client-BI8YE9oH.js";
const heroImgSm = "/assets/exterior-main-sm-S0uKQW4D.webp";
const heroImgLg = "/assets/exterior-main-lg-BFWeInDY.webp";
const SEASONS = [
  {
    name: "low",
    label: "Sezon niski",
    startMonth: 11,
    startDay: 1,
    endMonth: 3,
    endDay: 31,
    minNights: 2,
    prices: { 2: 399, 4: 399, 6: 499, 8: 599 },
    color: "bg-forest/10 text-forest"
  },
  {
    name: "mid",
    label: "Sezon średni",
    startMonth: 4,
    startDay: 1,
    endMonth: 5,
    endDay: 31,
    minNights: 2,
    prices: { 2: 399, 4: 499, 6: 599, 8: 649 },
    color: "bg-amber-100 text-amber-800"
  },
  {
    name: "high",
    label: "Sezon wysoki",
    startMonth: 6,
    startDay: 1,
    endMonth: 8,
    endDay: 31,
    minNights: 3,
    prices: { 2: 499, 4: 599, 6: 699, 8: 799 },
    color: "bg-orange-100 text-orange-800"
  },
  {
    name: "mid2",
    label: "Sezon średni",
    startMonth: 9,
    startDay: 1,
    endMonth: 10,
    endDay: 31,
    minNights: 2,
    prices: { 2: 399, 4: 499, 6: 599, 8: 649 },
    color: "bg-amber-100 text-amber-800"
  }
];
const WEEKEND_SURCHARGE = 100;
const LONG_STAY_DISCOUNT = 0.1;
const MIN_NIGHTS = 2;
const MAX_GUESTS = 8;
function getSeasonForDate(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  for (const season of SEASONS) {
    let afterStart;
    let beforeEnd;
    if (season.startMonth <= season.endMonth) {
      afterStart = month > season.startMonth || month === season.startMonth && day >= season.startDay;
      beforeEnd = month < season.endMonth || month === season.endMonth && day <= season.endDay;
      if (afterStart && beforeEnd) return season;
    } else {
      afterStart = month > season.startMonth || month === season.startMonth && day >= season.startDay;
      beforeEnd = month < season.endMonth || month === season.endMonth && day <= season.endDay;
      if (afterStart || beforeEnd) return season;
    }
  }
  return SEASONS[0];
}
function getPriceForDate(date, guests = 4) {
  const season = getSeasonForDate(date);
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
  const tiers = [2, 4, 6, 8];
  const tier = tiers.find((t) => guests <= t) || 8;
  const basePrice = season.prices[tier] || season.prices[4];
  return basePrice + (isWeekend ? WEEKEND_SURCHARGE : 0);
}
function calculateTotalPrice(checkIn, checkOut, guests) {
  const nightPrices = [];
  const current = new Date(checkIn);
  while (current < checkOut) {
    nightPrices.push({ date: new Date(current), price: getPriceForDate(current, guests) });
    current.setDate(current.getDate() + 1);
  }
  const baseTotal = nightPrices.reduce((sum, n) => sum + n.price, 0);
  const discount = nightPrices.length >= 7 ? Math.round(baseTotal * LONG_STAY_DISCOUNT) : 0;
  return { nightPrices, total: baseTotal - discount, extraGuestTotal: 0, discount };
}
function isWeekendDay(date) {
  const dow = date.getDay();
  return dow === 5 || dow === 6 || dow === 0;
}
const BLOCKED_DATES_LAST_UPDATED = "2026-08-12";
const BLOCKED_DATES = /* @__PURE__ */ new Set([
  // 13.08.2026 - 03.09.2026
  ...[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((d) => `2026-08-${String(d).padStart(2, "0")}`),
  ...[1, 2, 3].map((d) => `2026-09-${String(d).padStart(2, "0")}`),
  // 08.09.2026 - 27.09.2026
  ...[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27].map((d) => `2026-09-${String(d).padStart(2, "0")}`),
  // 29.09.2026 - 08.10.2026
  ...[29, 30].map((d) => `2026-09-${String(d).padStart(2, "0")}`),
  ...[1, 2, 3, 4, 5, 6, 7, 8].map((d) => `2026-10-${String(d).padStart(2, "0")}`),
  // 15.10.2026 - 18.10.2026
  ...[15, 16, 17, 18].map((d) => `2026-10-${String(d).padStart(2, "0")}`),
  // 23.12.2026 - 01.01.2027
  ...[23, 24, 25, 26, 27, 28, 29, 30, 31].map((d) => `2026-12-${String(d).padStart(2, "0")}`),
  ...[1].map((d) => `2027-01-${String(d).padStart(2, "0")}`)
]);
function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function isDateBlocked(date) {
  return BLOCKED_DATES.has(formatDateKey(date));
}
const HeroSection = () => {
  const scrollTo = (id) => {
    var _a;
    (_a = document.querySelector(id)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  const availabilityText = useMemo(() => {
    const now = /* @__PURE__ */ new Date();
    const currentMonth = now.getMonth();
    let freeDays = 0;
    let freeWeekends = 0;
    const check = new Date(now);
    check.setHours(0, 0, 0, 0);
    for (let i = 0; i < 60; i++) {
      const d = new Date(check);
      d.setDate(d.getDate() + i);
      if (!BLOCKED_DATES.has(formatDateKey(d))) {
        freeDays++;
        const dow = d.getDay();
        if (dow === 5 || dow === 6) freeWeekends++;
      }
    }
    const weekends = Math.floor(freeWeekends / 2);
    if (freeDays === 0) return null;
    const monthNames = ["styczniu", "lutym", "marcu", "kwietniu", "maju", "czerwcu", "lipcu", "sierpniu", "wrześniu", "październiku", "listopadzie", "grudniu"];
    const nextMonth = (currentMonth + 1) % 12;
    if (weekends <= 3) {
      return `Tylko ${weekends} woln${weekends === 1 ? "y" : "e"} weekend${weekends === 1 ? "" : "y"} w ${monthNames[currentMonth]} i ${monthNames[nextMonth]}!`;
    }
    return `${freeDays} wolnych dni w najbliższych 2 miesiącach`;
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "hero",
      className: "relative min-h-screen flex items-center justify-center overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: heroImgLg,
              srcSet: `${heroImgSm} 640w, ${heroImgLg} 1028w`,
              sizes: "100vw",
              alt: "Leśny dom na wyłączność z jacuzzi i sauną w Puszczy Knyszyńskiej — In The Woods noclegi Supraśl",
              className: "w-full h-full object-cover",
              width: "1028",
              height: "771",
              loading: "eager",
              fetchpriority: "high"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#333333]/75 via-[#333333]/50 to-[#333333]/80" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center px-6 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsx(
            "h1",
            {
              className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 animate-fade-up drop-shadow-lg font-accent mt-8 sm:mt-0",
              children: "Leśny dom na wyłączność — domek w lesie z jacuzzi i sauną"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/90 mb-3 animate-fade-in", children: "Puszcza Knyszyńska · Supraśl · Podlasie" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 mb-10 animate-fade-up delay-100", children: [
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-white text-smallcaps", children: "Ucieczka od zgiełku miasta. Detoks cyfrowy w lesie." }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-white text-smallcaps", children: "Spokojny wypoczynek w naturze — kominek, balia, cisza." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 md:gap-8 mb-10 animate-fade-up delay-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white/90", children: [
              /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs md:text-sm tracking-wide font-medium", children: "Dom z bali na wyłączność" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white/90", children: [
              /* @__PURE__ */ jsx(Dog, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs md:text-sm tracking-wide font-medium", children: "Ogrodzony teren · psy za darmo" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white/90", children: [
              /* @__PURE__ */ jsx(Flame, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs md:text-sm tracking-wide font-medium", children: "Domek z kominkiem w lesie" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white/90", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs md:text-sm tracking-wide font-medium", children: "Jacuzzi pod gwiazdami" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-up delay-300", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => scrollTo("#rezerwacja"),
                className: "btn-primary bg-primary text-primary-foreground hover:bg-primary/90",
                children: "Sprawdź dostępność"
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "tel:+48722765101",
                className: "btn-outline border-white text-white hover:bg-primary hover:text-primary-foreground hover:border-primary inline-flex items-center justify-center gap-2",
                children: [
                  /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
                  " Zadzwoń"
                ]
              }
            )
          ] }),
          availabilityText && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-8 animate-fade-in delay-400", children: [
            /* @__PURE__ */ jsx(CalendarCheck, { className: "w-4 h-4 text-primary/80" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-primary/90 font-medium tracking-wide", children: availabilityText })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4 md:gap-6 animate-fade-in delay-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-primary text-sm font-medium", children: [
              /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-primary text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "4,82★ opinie" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-white/50 text-sm", children: "·" }),
            /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm", children: "Ponad 110 zadowolonych gości" }),
            /* @__PURE__ */ jsx("span", { className: "text-white/50 text-sm", children: "·" }),
            /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm", children: "Rezerwacje bezpośrednie" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce", children: /* @__PURE__ */ jsx("div", { className: "w-px h-12 bg-white/40" }) })
      ]
    }
  );
};
const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
};
const benefits = [
  {
    icon: TreePine,
    title: "Zanurz się w naturze",
    text: "Puszcza Knyszyńska tuż za progiem — szepty puszczy, śpiew ptaków i poranne mgły. Supraśl z jego atrakcjami zaledwie 10 minut drogi. To domek w lesie na Podlasiu, jakiego szukasz."
  },
  {
    icon: Home,
    title: "Dom z bali — komfort w sercu lasu",
    text: "Drewniane belki, klimatyczny kominek, płyta kaflowa i eleganckie wnętrza. Ogrodzony teren z altaną i miejscem na ognisko. Dom z bali na wyłączność — Twoja prywatna przestrzeń."
  },
  {
    icon: Volume2,
    title: "Dom na wyłączność — tylko dla Was",
    text: "Cały dom i ogród na wyłączność. Żadnych obcych gości — to Wasze miejsce na oderwanie od cywilizacji, gotowanie i wspólne chwile w absolutnej prywatności."
  },
  {
    icon: Heart,
    title: "Cisza, która leczy",
    text: "Domek na odludziu — bez hałaśliwych sąsiadów, tylko las i świeże powietrze. Poczuj, jak oddech sam zwalnia. Psy za darmo — Twój czworonóg pokocha to miejsce."
  }
];
const HeroWelcome = () => {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", "aria-label": "O naszym domu", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-4 text-center", children: "Od gospodarza" }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg sm:text-xl md:text-2xl text-foreground mb-6 text-center font-accent", children: "Leśny domek do wynajęcia — dom z bali na wyłączność" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 text-muted-foreground font-sans text-base md:text-lg leading-relaxed text-center", children: /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed font-accent", children: "Oddajemy w Wasze ręce nasz dom — miejsce, w które włożyliśmy mnóstwo serca, potu, pracy i litry kawy. Zanurz się w naturze i poczuj, jak czas się zatrzymuje." }) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10", children: benefits.map((b, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `group flex gap-4 p-5 bg-secondary/60 rounded-xl transition-all duration-500 hover:bg-secondary hover:shadow-md hover:-translate-y-0.5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
            style: { transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" },
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsx(b.icon, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-heading text-sm font-semibold text-foreground !mb-1", children: b.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed !mb-0", children: b.text })
              ] })
            ]
          },
          b.title
        )) }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `mt-10 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
            style: { transitionDelay: isVisible ? "700ms" : "0ms" },
            children: [
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground font-sans text-base leading-relaxed max-w-xl mx-auto", children: [
                "Traktujcie ten dom jak swój — z szacunkiem i uśmiechem. Zostawcie go tak, jakbyście chcieli go zastać za rok, kiedy ",
                /* @__PURE__ */ jsx("em", { children: "wrócicie" }),
                "."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mt-4 font-accent", children: "Pamiętajcie: dom jest dla ludzi, a nie ludzie dla domu. Bawcie się dobrze!" }),
              /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "— Maciej, gospodarz" })
            ]
          }
        )
      ]
    }
  ) });
};
const badges = [
  { icon: Dog, label: "Pet friendly", href: "/blog/podlasie-z-psem" },
  { icon: TreePine, label: "Nature retreat", href: "/dom-w-lesie-suprasl" },
  { icon: Snail, label: "Slow travel", href: "/blog/cyfrowy-detoks-las" },
  { icon: Home, label: "Dom na wyłączność", href: "/noclegi-suprasl" },
  { icon: Bath, label: "Balia / Jacuzzi", href: "/domek-z-jacuzzi-podlasie" },
  { icon: Flame, label: "Kominek", href: "#dom" },
  { icon: Sparkles, label: "Ruska bania", href: "#jacuzzi" },
  { icon: Wifi, label: "Starlink Internet", href: "/blog/workation-podlasie" }
];
const BadgesBar = () => /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 py-8 bg-secondary border-y border-border overflow-x-auto", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-4 md:gap-6 min-w-max mx-auto", children: badges.map(
  (b, i) => b.href.startsWith("#") ? /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => {
        var _a;
        return (_a = document.querySelector(b.href)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      },
      className: "flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",
      children: [
        /* @__PURE__ */ jsx(b.icon, { className: "w-4 h-4 text-primary", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsx("span", { className: "text-xs tracking-wider uppercase whitespace-nowrap", children: b.label })
      ]
    },
    i
  ) : /* @__PURE__ */ jsxs(
    Link,
    {
      to: b.href,
      className: "flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",
      children: [
        /* @__PURE__ */ jsx(b.icon, { className: "w-4 h-4 text-primary", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsx("span", { className: "text-xs tracking-wider uppercase whitespace-nowrap", children: b.label })
      ]
    },
    i
  )
) }) });
const items = [
  { icon: TreePine, title: "Lokalizacja", desc: "Serce Puszczy Knyszyńskiej" },
  { icon: Shield, title: "Prywatność", desc: "Dom i ogród tylko dla gości" },
  { icon: Flame, title: "Relaks", desc: "Ruska bania i kominek" }
];
const TrustSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsx("section", { className: "px-6 md:px-12 py-12 md:py-16 bg-background", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: `max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
      children: items.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "card-premium p-6 text-center space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(item.icon, { className: "w-6 h-6 text-primary", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.desc })
      ] }, i))
    }
  ) });
};
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const GDPRConsentModal = ({ open, onAccept, onReject }) => {
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: (v) => !v && onReject(), children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx(DialogTitle, { className: "font-heading text-lg", children: "Zgoda na przetwarzanie danych" })
      ] }),
      /* @__PURE__ */ jsx(DialogDescription, { className: "text-left", children: "Przed dokonaniem rezerwacji prosimy o wyrażenie zgody na przetwarzanie Twoich danych osobowych w celu:" })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground pl-1", children: [
      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary mt-0.5", children: "•" }),
        "Obsługi rezerwacji i kontaktu w sprawie pobytu"
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary mt-0.5", children: "•" }),
        "Wysyłania potwierdzeń i informacji organizacyjnych"
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary mt-0.5", children: "•" }),
        "Analizy statystyk (zanonimizowanych)"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "Administratorem danych jest Krzemienna Chata. Masz prawo do wglądu, zmiany i usunięcia swoich danych w dowolnym momencie.",
      " ",
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/polityka-prywatnosci",
          target: "_blank",
          className: "underline hover:text-foreground",
          children: "Pełna polityka prywatności"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 sm:gap-2", children: [
      /* @__PURE__ */ jsx("button", { onClick: onReject, className: "btn-outline text-sm px-5 py-2", children: "Nie zgadzam się" }),
      /* @__PURE__ */ jsx("button", { onClick: onAccept, className: "btn-primary text-sm px-5 py-2", children: "Zgadzam się" })
    ] })
  ] }) });
};
const MESSAGES = [
  "Ostatnia rezerwacja: 2 dni temu",
  "Zarezerwowany 3 razy w tym tygodniu",
  "Popularny termin — zostało kilka wolnych weekendów",
  "12 osób przeglądało ten obiekt w ostatnim tygodniu"
];
const SocialProof = () => {
  const [currentMsg, setCurrentMsg] = useState(0);
  const [visible, setVisible] = useState(true);
  const [viewerCount] = useState(() => Math.floor(Math.random() * 4) + 2);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentMsg((prev) => (prev + 1) % MESSAGES.length);
        setVisible(true);
      }, 400);
    }, 5e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-3 mb-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-primary bg-primary/5 px-3 py-2 rounded-lg", children: [
      /* @__PURE__ */ jsx(Eye, { className: "w-3.5 h-3.5 flex-shrink-0" }),
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsxs("strong", { children: [
          viewerCount,
          " osób"
        ] }),
        " ogląda teraz ten obiekt"
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex items-center gap-2 text-xs text-muted-foreground bg-secondary px-3 py-2 rounded-lg transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: MESSAGES[currentMsg] })
        ]
      }
    )
  ] });
};
const BookingModule = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [step, setStep] = useState("form");
  const [sending, setSending] = useState(false);
  const [showGDPR, setShowGDPR] = useState(false);
  const { toast } = useToast();
  const [data, setData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const validateForm = () => {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const phoneRegex = /^\+?[0-9\s\-]{7,20}$/;
    if (!emailRegex.test(data.email)) {
      toast({ title: "Błąd", description: "Podaj poprawny adres e-mail.", variant: "destructive" });
      return false;
    }
    if (!phoneRegex.test(data.phone)) {
      toast({
        title: "Błąd",
        description: "Podaj poprawny numer telefonu (7-20 cyfr).",
        variant: "destructive"
      });
      return false;
    }
    if (data.message && data.message.length > 2e3) {
      toast({
        title: "Błąd",
        description: "Wiadomość może mieć maksymalnie 2000 znaków.",
        variant: "destructive"
      });
      return false;
    }
    if (new Date(data.checkOut) <= new Date(data.checkIn)) {
      toast({
        title: "Błąd",
        description: "Data wyjazdu musi być późniejsza niż data przyjazdu.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    var _a, _b, _c, _d;
    e.preventDefault();
    if (step === "form") {
      if (!data.checkIn || !data.checkOut || !data.phone || !data.email) return;
      if (!validateForm()) return;
      setShowGDPR(true);
    } else if (step === "summary") {
      setSending(true);
      try {
        const { data: result, error } = await supabase.functions.invoke("rate-limit-submit", {
          body: {
            type: "booking",
            check_in: data.checkIn,
            check_out: data.checkOut,
            guests: data.guests,
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
          }
        });
        const body = result ?? (error == null ? void 0 : error.context) ? await ((_b = (_a = error == null ? void 0 : error.context) == null ? void 0 : _a.json) == null ? void 0 : _b.call(_a).catch(() => null)) : null;
        if ((_d = (_c = body == null ? void 0 : body.error) == null ? void 0 : _c.includes) == null ? void 0 : _d.call(_c, "Too many")) {
          toast({
            title: "Zbyt wiele prób",
            description: "Spróbuj ponownie za minutę.",
            variant: "destructive"
          });
          return;
        }
        if (error) throw error;
        if (body == null ? void 0 : body.error) throw new Error(body.error);
        setStep("sent");
      } catch (err) {
        console.error("Booking error:", err);
        toast({
          title: "Błąd",
          description: "Nie udało się wysłać zapytania. Spróbuj ponownie lub zadzwoń.",
          variant: "destructive"
        });
      } finally {
        setSending(false);
      }
    }
  };
  const nights = data.checkIn && data.checkOut ? Math.max(
    0,
    Math.ceil(
      (new Date(data.checkOut).getTime() - new Date(data.checkIn).getTime()) / 864e5
    )
  ) : 0;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      GDPRConsentModal,
      {
        open: showGDPR,
        onAccept: () => {
          setShowGDPR(false);
          setStep("summary");
        },
        onReject: () => setShowGDPR(false)
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "rezerwacja", className: "section-padding bg-background", children: /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: `max-w-2xl mx-auto transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.97]"}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-10 space-y-3", children: [
            /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Sprawdź termin" }),
            /* @__PURE__ */ jsx("p", { className: "section-subtitle mx-auto", children: "Wypełnij formularz — odpowiemy zwykle w kilka godzin." })
          ] }),
          /* @__PURE__ */ jsx(SocialProof, {}),
          /* @__PURE__ */ jsx("div", { className: "card-premium bg-warm-white", children: step === "sent" ? /* @__PURE__ */ jsxs("div", { className: "text-center py-12 space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Send, { className: "w-7 h-7 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-2xl", children: "Dziękujemy za zapytanie" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm max-w-md mx-auto", children: "Potwierdzimy dostępność i cenę w ciągu kilku godzin. Sprawdź telefon lub skrzynkę mailową." }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  setStep("form");
                  setData({
                    checkIn: "",
                    checkOut: "",
                    guests: "2",
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                  });
                },
                className: "btn-outline mt-4 text-xs",
                children: "Nowe zapytanie"
              }
            )
          ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
            step === "summary" && /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setStep("form"),
                className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
                children: [
                  /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
                  " Wróć do edycji"
                ]
              }
            ),
            step === "form" && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs(
                    "label",
                    {
                      htmlFor: "booking-checkin",
                      className: "text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
                        " Przyjazd"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "booking-checkin",
                      type: "date",
                      value: data.checkIn,
                      onChange: (e) => setData({ ...data, checkIn: e.target.value }),
                      className: "w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-teal",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs(
                    "label",
                    {
                      htmlFor: "booking-checkout",
                      className: "text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
                        " Wyjazd"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "booking-checkout",
                      type: "date",
                      value: data.checkOut,
                      onChange: (e) => setData({ ...data, checkOut: e.target.value }),
                      min: data.checkIn,
                      className: "w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-teal",
                      required: true
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs(
                    "label",
                    {
                      htmlFor: "booking-guests",
                      className: "text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }),
                        " Goście"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "select",
                    {
                      id: "booking-guests",
                      value: data.guests,
                      onChange: (e) => setData({ ...data, guests: e.target.value }),
                      className: "w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-teal",
                      children: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => /* @__PURE__ */ jsxs("option", { value: n, children: [
                        n,
                        " ",
                        n === 1 ? "osoba" : n < 5 ? "osoby" : "osób"
                      ] }, n))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs(
                    "label",
                    {
                      htmlFor: "booking-phone",
                      className: "text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
                        " Telefon"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "booking-phone",
                      type: "tel",
                      placeholder: "Numer telefonu",
                      value: data.phone,
                      onChange: (e) => setData({ ...data, phone: e.target.value }),
                      className: "w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-teal",
                      required: true,
                      maxLength: 20
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs(
                  "label",
                  {
                    htmlFor: "booking-email",
                    className: "text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                      " E-mail"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "booking-email",
                    type: "email",
                    placeholder: "Adres e-mail",
                    value: data.email,
                    onChange: (e) => setData({ ...data, email: e.target.value }),
                    className: "w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-teal",
                    required: true,
                    maxLength: 255
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "booking-message",
                    className: "text-xs tracking-wider uppercase text-muted-foreground",
                    children: "Wiadomość (opcjonalnie)"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: "booking-message",
                    placeholder: "Dodatkowe informacje...",
                    value: data.message,
                    onChange: (e) => setData({ ...data, message: e.target.value }),
                    className: "w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-teal resize-none",
                    rows: 3,
                    maxLength: 1e3
                  }
                )
              ] })
            ] }),
            step === "summary" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-medium", children: "Podsumowanie zapytania" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-secondary p-5 space-y-2 text-sm", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Przyjazd" }),
                  /* @__PURE__ */ jsx("span", { children: data.checkIn })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Wyjazd" }),
                  /* @__PURE__ */ jsx("span", { children: data.checkOut })
                ] }),
                nights > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Liczba nocy" }),
                  /* @__PURE__ */ jsx("span", { children: nights })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Goście" }),
                  /* @__PURE__ */ jsx("span", { children: data.guests })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Telefon" }),
                  /* @__PURE__ */ jsx("span", { children: data.phone })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "E-mail" }),
                  /* @__PURE__ */ jsx("span", { children: data.email })
                ] }),
                data.message && /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Wiadomość" }),
                  /* @__PURE__ */ jsx("span", { className: "text-right max-w-[60%]", children: data.message })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "To wstępne zapytanie — potwierdzimy dostępność i cenę." })
            ] }),
            /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-primary w-full", disabled: sending, children: sending ? /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin mx-auto" }) : step === "form" ? "Sprawdź dostępność" : "Wyślij zapytanie" }),
            step === "form" && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 pt-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
                " Szybka odpowiedź"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsx(CreditCard, { className: "w-3.5 h-3.5" }),
                " Bez prowizji"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5" }),
                "Rabaty dla powracających klientów"
              ] })
            ] })
          ] }) })
        ]
      }
    ) })
  ] });
};
const MONTH_NAMES = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień"
];
const DAY_NAMES = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];
const FILTER_OPTIONS = [
  { value: "all", label: "Wszystkie" },
  { value: "free", label: "Tylko wolne" },
  { value: "weekends", label: "Weekendy" },
  { value: "high_season", label: "Wysoki sezon" }
];
const AvailabilityCalendar = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = /* @__PURE__ */ new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [filter, setFilter] = useState("all");
  const [selectedRange, setSelectedRange] = useState({
    start: null,
    end: null
  });
  const [hoverDate, setHoverDate] = useState(null);
  const [guests, setGuests] = useState(4);
  const isPast = (date) => {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  const shouldShowDate = useCallback(
    (date) => {
      if (isPast(date)) return true;
      const blocked = isDateBlocked(date);
      switch (filter) {
        case "free":
          return !blocked;
        case "weekends":
          return isWeekendDay(date) && !blocked;
        case "high_season": {
          const season = getSeasonForDate(date);
          return season.name === "high";
        }
        default:
          return true;
      }
    },
    [filter]
  );
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    let startDow = firstDay.getDay() - 1;
    if (startDow < 0) startDow = 6;
    const days = [];
    for (let i = 0; i < startDow; i++) days.push(null);
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }
    return days;
  }, [currentMonth]);
  const handleDateClick = (date) => {
    if (isPast(date) || isDateBlocked(date)) return;
    if (!selectedRange.start || selectedRange.end) {
      setSelectedRange({ start: date, end: null });
    } else {
      if (date <= selectedRange.start) {
        setSelectedRange({ start: date, end: null });
      } else {
        const current = new Date(selectedRange.start);
        while (current <= date) {
          if (isDateBlocked(current)) {
            setSelectedRange({ start: date, end: null });
            return;
          }
          current.setDate(current.getDate() + 1);
        }
        setSelectedRange({ start: selectedRange.start, end: date });
      }
    }
  };
  const isInRange = (date) => {
    if (!selectedRange.start) return false;
    const end = selectedRange.end || hoverDate;
    if (!end || end <= selectedRange.start) return false;
    return date >= selectedRange.start && date <= end;
  };
  const isRangeStart = (date) => !!selectedRange.start && formatDateKey(date) === formatDateKey(selectedRange.start);
  const isRangeEnd = (date) => !!selectedRange.end && formatDateKey(date) === formatDateKey(selectedRange.end);
  const priceCalc = useMemo(() => {
    if (!selectedRange.start || !selectedRange.end) return null;
    return calculateTotalPrice(selectedRange.start, selectedRange.end, guests);
  }, [selectedRange.start, selectedRange.end, guests]);
  const nights = (priceCalc == null ? void 0 : priceCalc.nightPrices.length) || 0;
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  const canGoPrev = () => {
    const now = /* @__PURE__ */ new Date();
    return currentMonth > new Date(now.getFullYear(), now.getMonth(), 1);
  };
  const scrollToBooking = () => {
    var _a;
    (_a = document.querySelector("#rezerwacja")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx("section", { className: "section-padding bg-secondary", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `max-w-xl mx-auto transition-all duration-1000 delay-200 ease-out ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.97]"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 space-y-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans", children: "Dostępność i ceny" }),
          /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Kalendarz terminów" }),
          /* @__PURE__ */ jsx("p", { className: "section-subtitle mx-auto", children: "Kliknij datę, aby zobaczyć cenę. Wybierz zakres dat, aby obliczyć koszt pobytu." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4 flex-wrap justify-center", children: [
          /* @__PURE__ */ jsx(Filter, { className: "w-4 h-4 text-muted-foreground" }),
          FILTER_OPTIONS.map((f) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setFilter(f.value),
              className: `text-xs px-3 py-1.5 border transition-colors ${filter === f.value ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border text-muted-foreground hover:bg-secondary"}`,
              children: f.label
            },
            f.value
          ))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-premium bg-background", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: prevMonth,
                disabled: !canGoPrev(),
                className: "p-2 hover:bg-secondary rounded-lg transition-colors disabled:opacity-30",
                "aria-label": "Poprzedni miesiąc",
                children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsxs("h3", { className: "font-heading text-lg font-semibold !mb-0", children: [
              MONTH_NAMES[currentMonth.getMonth()],
              " ",
              currentMonth.getFullYear()
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: nextMonth,
                className: "p-2 hover:bg-secondary rounded-lg transition-colors",
                "aria-label": "Następny miesiąc",
                children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7 gap-1 mb-2", children: DAY_NAMES.map((d) => /* @__PURE__ */ jsx("div", { className: "text-center text-xs font-medium text-muted-foreground py-2", children: d }, d)) }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7 gap-1", children: calendarDays.map((date, i) => {
            if (!date) return /* @__PURE__ */ jsx("div", {}, `empty-${i}`);
            const blocked = isDateBlocked(date);
            const past = isPast(date);
            const show = shouldShowDate(date);
            const isToday = date.toDateString() === (/* @__PURE__ */ new Date()).toDateString();
            const inRange = isInRange(date);
            const rangeStart = isRangeStart(date);
            const rangeEnd = isRangeEnd(date);
            const price = !past && !blocked ? getPriceForDate(date) : null;
            const season = getSeasonForDate(date);
            if (!show && !past) {
              return /* @__PURE__ */ jsx("div", { className: "text-center py-2.5 text-sm opacity-20", children: /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: date.getDate() }) }, formatDateKey(date));
            }
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                disabled: past || blocked,
                onClick: () => handleDateClick(date),
                onMouseEnter: () => selectedRange.start && !selectedRange.end && setHoverDate(date),
                onMouseLeave: () => setHoverDate(null),
                className: `relative text-center py-1.5 text-sm transition-colors cursor-pointer disabled:cursor-default ${past ? "text-muted-foreground/40" : blocked ? "bg-destructive/10 text-destructive line-through" : rangeStart || rangeEnd ? "bg-primary text-primary-foreground font-semibold" : inRange ? "bg-primary/20 text-primary font-medium" : `${season.color} font-medium hover:ring-2 hover:ring-teal/40`} ${isToday ? "ring-2 ring-teal/30" : ""}`,
                title: price ? `${price} zł/noc — ${season.label}` : void 0,
                children: [
                  /* @__PURE__ */ jsx("span", { children: date.getDate() }),
                  price && !past && /* @__PURE__ */ jsxs("span", { className: "block text-[9px] leading-tight opacity-70", children: [
                    price,
                    " zł"
                  ] })
                ]
              },
              formatDateKey(date)
            );
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4 mt-6 pt-4 border-t border-border", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded bg-primary/10 border border-primary/20" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Poza sezonem" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded bg-amber-100 border border-amber-300" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Średni sezon" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded bg-orange-100 border border-orange-300" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Wysoki sezon" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded bg-destructive/10 border border-destructive/20" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Zajęty" })
            ] })
          ] })
        ] }),
        selectedRange.start && /* @__PURE__ */ jsxs("div", { className: "card-premium bg-background mt-4 space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Calculator, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsx("h4", { className: "font-heading text-base font-semibold", children: "Kalkulator ceny" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx("label", { className: "text-sm text-muted-foreground", children: "Goście:" }),
            /* @__PURE__ */ jsx(
              "select",
              {
                value: guests,
                onChange: (e) => setGuests(Number(e.target.value)),
                className: "px-3 py-1.5 bg-background border border-border text-sm",
                children: Array.from({ length: MAX_GUESTS }, (_, i) => i + 1).map((n) => /* @__PURE__ */ jsxs("option", { value: n, children: [
                  n,
                  " ",
                  n === 1 ? "osoba" : n < 5 ? "osoby" : "osób"
                ] }, n))
              }
            )
          ] }),
          selectedRange.end ? /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            nights < MIN_NIGHTS && /* @__PURE__ */ jsxs("p", { className: "text-xs text-destructive", children: [
              "Minimalny pobyt to ",
              MIN_NIGHTS,
              " noce. Wybierz dłuższy termin."
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-secondary p-4 space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Termin" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  selectedRange.start.toLocaleDateString("pl-PL"),
                  " –",
                  " ",
                  selectedRange.end.toLocaleDateString("pl-PL")
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Liczba nocy" }),
                /* @__PURE__ */ jsx("span", { children: nights })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Goście" }),
                /* @__PURE__ */ jsx("span", { children: guests })
              ] }),
              priceCalc && priceCalc.discount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-green-700", children: [
                /* @__PURE__ */ jsx("span", { children: "Zniżka za długi pobyt (−10%)" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "−",
                  priceCalc.discount,
                  " zł"
                ] })
              ] }),
              priceCalc && /* @__PURE__ */ jsxs("div", { className: "flex justify-between font-semibold text-base pt-2 border-t border-border", children: [
                /* @__PURE__ */ jsx("span", { children: "Szacunkowy koszt" }),
                /* @__PURE__ */ jsxs("span", { className: "text-primary", children: [
                  priceCalc.total,
                  " zł"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-muted-foreground", children: "Cena orientacyjna. Dokładną ofertę potwierdzimy po wysłaniu zapytania. Przy pobytach 5+ nocy możliwy rabat." }),
            nights >= MIN_NIGHTS && /* @__PURE__ */ jsx("button", { onClick: scrollToBooking, className: "btn-primary w-full mt-2", children: "Zarezerwuj ten termin" })
          ] }) : /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Wybierz drugą datę (wyjazd), aby zobaczyć cenę." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 text-center space-y-1", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Ceny od ",
            /* @__PURE__ */ jsx("strong", { children: "399 zł/noc" }),
            " za cały dom. Weekendy (pt–so):",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "+100 zł/noc" }),
            ". Przy 7+ nocach: ",
            /* @__PURE__ */ jsx("strong", { children: "−10% zniżki" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-muted-foreground/60", children: [
            "Ostatnia aktualizacja dostępności: ",
            new Date(BLOCKED_DATES_LAST_UPDATED).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" })
          ] })
        ] })
      ]
    }
  ) });
};
const AmenitiesSection = lazy(() => import("./AmenitiesSection-BzjMYId0.js"));
const JacuzziSection = lazy(() => import("./JacuzziSection-CZ3v7sLA.js"));
const RelaxSection = lazy(() => import("./RelaxSection-vRfpV9f5.js"));
const ForWhoSection = lazy(() => import("./ForWhoSection-D59T5Tvc.js"));
const GallerySection = lazy(() => import("./GallerySection-CEAxQlSY.js"));
const WinterSection = lazy(() => import("./WinterSection-nQ-L3ZxL.js"));
const PricingSection = lazy(() => import("./PricingSection-DvLaCw8T.js"));
const TestimonialsSection = lazy(() => import("./TestimonialsSection-CsS1h9XC.js"));
const LocationSection = lazy(() => import("./LocationSection-D72WmD7q.js"));
const EventsSection = lazy(() => import("./EventsSection-Ck76c0lc.js"));
const FAQSection = lazy(() => import("./FAQSection-DfWq2QHB.js"));
const GuestGuideSection = lazy(() => import("./GuestGuideSection-CLeunekr.js"));
const GuideSection = lazy(() => import("./GuideSection-BbMy1euT.js"));
const SEOTextSection = lazy(() => import("./SEOTextSection-Cz8sOEuZ.js"));
const CTASection = lazy(() => import("./CTASection-DG0sK4VV.js"));
const ContactSection = lazy(() => import("./ContactSection-CRuIdkN6.js"));
const Footer = lazy(() => import("./Footer-DQuDx_RN.js"));
const ExitIntentPopup = lazy(() => import("./ExitIntentPopup-CPR0di0x.js"));
const StickyMobileCTA = lazy(() => import("./StickyMobileCTA-C-TF0U6U.js"));
const SectionFallback = () => /* @__PURE__ */ jsx("div", { className: "py-20 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-6 h-6 border-2 border-primary/30 border-t-teal rounded-full animate-spin" }) });
const Index = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Domek w lesie z jacuzzi | In The Woods — Podlasie",
        description: "Zarezerwuj leśny dom z sauną i balią w Puszczy Knyszyńskiej na wyłączność. Cisza, kominek, ogrodzony teren. Sprawdź wolne terminy!",
        canonical: "https://www.suprasl.online/"
      }
    ),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(HeroWelcome, {}),
      /* @__PURE__ */ jsx(BookingModule, {}),
      /* @__PURE__ */ jsx(AvailabilityCalendar, {}),
      /* @__PURE__ */ jsx(BadgesBar, {}),
      /* @__PURE__ */ jsx(TrustSection, {}),
      /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx(SectionFallback, {}), children: [
        /* @__PURE__ */ jsx(AmenitiesSection, {}),
        /* @__PURE__ */ jsx(GallerySection, {}),
        /* @__PURE__ */ jsx(GuideSection, {}),
        /* @__PURE__ */ jsx(JacuzziSection, {}),
        /* @__PURE__ */ jsx(RelaxSection, {}),
        /* @__PURE__ */ jsx(ForWhoSection, {}),
        /* @__PURE__ */ jsx(WinterSection, {}),
        /* @__PURE__ */ jsx(PricingSection, {}),
        /* @__PURE__ */ jsx(TestimonialsSection, {}),
        /* @__PURE__ */ jsx(LocationSection, {}),
        /* @__PURE__ */ jsx(EventsSection, {}),
        /* @__PURE__ */ jsx(FAQSection, {}),
        /* @__PURE__ */ jsx(GuestGuideSection, {}),
        /* @__PURE__ */ jsx(SEOTextSection, {}),
        /* @__PURE__ */ jsx(CTASection, {}),
        /* @__PURE__ */ jsx(ContactSection, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Suspense, { fallback: null, children: [
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(ExitIntentPopup, {}),
      /* @__PURE__ */ jsx(StickyMobileCTA, {})
    ] })
  ] });
};
const Index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
export {
  Index$1 as I,
  useScrollAnimation as u
};
