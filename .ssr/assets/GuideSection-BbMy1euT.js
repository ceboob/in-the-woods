import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Church, Waves, TreePine, Building2, Bed, UtensilsCrossed, Sailboat, Bike, Sparkles, CalendarDays } from "lucide-react";
const Card = ({ icon: Icon, title, desc, cta, link }) => /* @__PURE__ */ jsxs("div", { className: "card-premium bg-card p-6 md:p-8 space-y-4", children: [
  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
  /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold text-foreground", children: title }),
  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: desc }),
  /* @__PURE__ */ jsxs(
    Link,
    {
      to: link,
      className: "inline-flex items-center gap-2 text-accent font-medium hover:underline",
      children: [
        cta,
        " →"
      ]
    }
  )
] });
const GuideSection = () => /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 md:px-12 space-y-20", children: [
  /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "Supraśl – Odkryj Perłę Podlasia" }),
    /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed", children: [
      "Planujesz weekend na Podlasiu, rodzinny wyjazd lub chwilę wytchnienia blisko natury?",
      " ",
      /* @__PURE__ */ jsx("strong", { children: "Supraśl" }),
      ", malownicze uzdrowisko otulone Puszczą Knyszyńską, zaprasza! Odkryj z nami miejsce, gdzie historia spotyka się z nowoczesnością, duchowość z aktywnym wypoczynkiem, a podlaska gościnność czeka na każdym kroku."
    ] })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold tracking-widest uppercase text-accent", children: "Co warto zobaczyć w Supraślu?" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Największe atrakcje w pigułce" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Supraśl to miasto, które zachwyca na każdym kroku. Od monumentalnych zabytków po urokliwe zakątki — oto miejsca, których nie możesz przegapić." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx(
        Card,
        {
          icon: Church,
          title: "Monaster Zwiastowania NMP i Muzeum Ikon",
          desc: "Duchowe serce Supraśla i jeden z najważniejszych zabytków w Polsce. Poczuj niezwykłą atmosferę prawosławnego klasztoru, a następnie zanurz się w świecie sztuki sakralnej w jedynym takim muzeum w kraju.",
          cta: "Dowiedz się więcej o godzinach i biletach",
          link: "/atrakcje-suprasl"
        }
      ),
      /* @__PURE__ */ jsx(
        Card,
        {
          icon: Waves,
          title: "Bulwary nad rzeką Supraśl i plaża miejska",
          desc: "Idealne miejsce na spacer, piknik lub podziwianie zachodu słońca. Zielone tereny wzdłuż rzeki to strefa relaksu dla całej rodziny. Latem skorzystaj z uroków plaży i kąpieliska!",
          cta: "Sprawdź trasy spacerowe",
          link: "/atrakcje-suprasl"
        }
      ),
      /* @__PURE__ */ jsx(
        Card,
        {
          icon: TreePine,
          title: "Puszcza Knyszyńska – brama do dzikiej przyrody",
          desc: "Supraśl to doskonała baza wypadowa do jednego z największych kompleksów leśnych w Polsce. Czekają na Ciebie dziesiątki kilometrów szlaków pieszych i rowerowych oraz świeże powietrze nasycone olejkami eterycznymi.",
          cta: "Zaplanuj wycieczkę po puszczy",
          link: "/blog/szlaki-puszcza-knyszynska"
        }
      ),
      /* @__PURE__ */ jsx(
        Card,
        {
          icon: Building2,
          title: "Pałac Buchholtzów i Domy Tkaczy",
          desc: "Odkryj przemysłową historię miasta, podziwiając secesyjną perłę architektury — Pałac Buchholtzów, oraz klimatyczne Domy Tkaczy, które pamiętają czasy włókienniczej potęgi Supraśla.",
          cta: "Poznaj historię Supraśla",
          link: "/atrakcje-suprasl"
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold tracking-widest uppercase text-accent", children: "Zaplanuj swój pobyt" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Noclegi i smaki Supraśla" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Komfortowy nocleg i pyszne jedzenie to podstawa udanego wyjazdu. Supraśl oferuje szeroki wybór opcji na każdą kieszeń — od luksusowych hoteli SPA po klimatyczne pensjonaty." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx(
        Card,
        {
          icon: Bed,
          title: "Gdzie spać w Supraślu?",
          desc: "Niezależnie od tego, czy szukasz hotelu z basenem, przytulnego pokoju w centrum, czy domku w lesie — w naszej bazie znajdziesz idealne miejsce.",
          cta: "Znajdź idealny nocleg",
          link: "/noclegi-suprasl"
        }
      ),
      /* @__PURE__ */ jsx(
        Card,
        {
          icon: UtensilsCrossed,
          title: "Gdzie zjeść w Supraślu?",
          desc: "Skosztuj autentycznej kuchni podlaskiej! Spróbuj kartaczy, babki ziemniaczanej i sękacza. Region słynie z prostych, ekologicznych dań łączących wpływy polskie, litewskie i białoruskie.",
          cta: "Odkryj najlepsze restauracje",
          link: "/blog/przewodnik-kulinarny-suprasl"
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold tracking-widest uppercase text-accent", children: "Supraśl dla aktywnych i nie tylko" }),
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Nuda w Supraślu? Niemożliwe!" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Sprawdź, jak aktywnie spędzić czas o każdej porze roku." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsx(
        Card,
        {
          icon: Sailboat,
          title: "Spływy kajakowe",
          desc: "Spokojny nurt rzeki Supraśl jest idealny nawet dla początkujących.",
          cta: "Zaplanuj spływ",
          link: "/blog/kajaki-suprasl"
        }
      ),
      /* @__PURE__ */ jsx(
        Card,
        {
          icon: Bike,
          title: "Szlaki rowerowe",
          desc: "Odkrywaj Puszczę Knyszyńską na dwóch kółkach dzięki licznym trasom.",
          cta: "Zobacz trasy",
          link: "/blog/szlaki-puszcza-knyszynska"
        }
      ),
      /* @__PURE__ */ jsx(
        Card,
        {
          icon: Sparkles,
          title: "Uzdrowisko i SPA",
          desc: "Skorzystaj z leczniczej borowiny i zrelaksuj się w nowoczesnych ośrodkach.",
          cta: "Sprawdź ofertę",
          link: "/blog/uzdrowisko-spa-suprasl"
        }
      ),
      /* @__PURE__ */ jsx(
        Card,
        {
          icon: CalendarDays,
          title: "Wydarzenia kulturalne",
          desc: "Festiwale, spektakle Teatru Wierszalin i imprezy plenerowe.",
          cta: "Kalendarz imprez",
          link: "/blog/wydarzenia-suprasl-2026"
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Supraśl czeka na Ciebie!" }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "Nie zwlekaj, zaplanuj swoją podróż do jednego z najpiękniejszych zakątków Podlasia. Odkryj Supraśl i zakochaj się w jego niepowtarzalnym klimacie." }),
    /* @__PURE__ */ jsx(Link, { to: "/atrakcje-suprasl", className: "btn-primary inline-block", children: "Odkryj atrakcje Supraśla" })
  ] })
] }) });
export {
  GuideSection as default
};
