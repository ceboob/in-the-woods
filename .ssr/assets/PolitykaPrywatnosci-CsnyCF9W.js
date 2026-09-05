import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { N as Navbar } from "./Navbar-B3uqN1ij.js";
import Footer from "./Footer-DQuDx_RN.js";
import "react";
import "react-router-dom";
import "lucide-react";
const PolitykaPrywatnosci = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Polityka prywatności i cookies | In The Woods Supraśl" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Polityka prywatności, cookies i RODO obiektu In The Woods w Supraślu. Dowiedz się jak przetwarzamy Twoje dane."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.suprasl.online/polityka-prywatnosci" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Polityka prywatności | In The Woods Supraśl" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Polityka prywatności, cookies i RODO obiektu In The Woods w Supraślu." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.suprasl.online/polityka-prywatnosci" })
    ] }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-background pt-24 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 space-y-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-heading text-3xl md:text-4xl text-foreground", children: "Polityka prywatności i cookies" }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl text-foreground", children: "1. Administrator danych" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Administratorem Twoich danych osobowych jest In The Woods, Maciej Cybulko, z siedzibą w Supraślu (Konne 109/1, 16-030 Supraśl). Kontakt: tutinthewood@gmail.com, tel. +48 722 765 101." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl text-foreground", children: "2. Jakie dane zbieramy i w jakim celu" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "W ramach formularza rezerwacyjnego zbieramy: imię i nazwisko, adres e-mail, numer telefonu, daty pobytu, liczbę gości oraz opcjonalną wiadomość. Dane te przetwarzamy wyłącznie w celu:" }),
        /* @__PURE__ */ jsxs("ul", { className: "text-sm text-muted-foreground space-y-1 pl-4", children: [
          /* @__PURE__ */ jsx("li", { children: "• obsługi zapytania rezerwacyjnego i kontaktu zwrotnego," }),
          /* @__PURE__ */ jsx("li", { children: "• wysyłki potwierdzenia rezerwacji," }),
          /* @__PURE__ */ jsx("li", { children: "• realizacji płatności zaliczki przez Stripe," }),
          /* @__PURE__ */ jsx("li", { children: "• anonimowej analizy statystyk odwiedzin." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Podstawą prawną przetwarzania jest art. 6 ust. 1 lit. b RODO (wykonanie umowy) oraz art. 6 ust. 1 lit. a RODO (zgoda — w zakresie cookies analitycznych)." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl text-foreground", children: "3. Okres przechowywania" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Dane rezerwacyjne przechowywane są przez okres niezbędny do realizacji pobytu, a następnie przez okres wynikający z przepisów podatkowych i księgowych (do 5 lat). Dane z formularza kontaktowego przechowywane są przez maksymalnie 12 miesięcy od momentu zakończenia korespondencji." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl text-foreground", children: "4. Twoje prawa" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: 'Masz prawo do: dostępu do swoich danych, ich sprostowania, usunięcia („prawo do bycia zapomnianym"), ograniczenia przetwarzania, przenoszenia danych oraz wniesienia sprzeciwu. Możesz także w dowolnym momencie wycofać zgodę na przetwarzanie danych (bez wpływu na zgodność z prawem przetwarzania dokonanego przed wycofaniem). W celu skorzystania z tych praw skontaktuj się z nami: tutinthewood@gmail.com.' })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl text-foreground", children: "5. Odbiorcy danych" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Twoje dane mogą być udostępniane wyłącznie podmiotom realizującym usługi na naszą rzecz:" }),
        /* @__PURE__ */ jsxs("ul", { className: "text-sm text-muted-foreground space-y-1 pl-4", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Stripe, Inc." }),
            " — operator płatności (dane karty nie trafiają na nasz serwer),"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Lovable Cloud (Supabase)" }),
            " — hosting bazy danych (serwery w UE),"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Google Analytics" }),
            " — anonimowa analityka ruchu (po wyrażeniu zgody)."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl text-foreground", children: "6. Płatności" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
          "Płatności online obsługuje Stripe, Inc. (certyfikat PCI DSS Level 1). Dane karty płatniczej są przetwarzane wyłącznie przez Stripe i nie są zapisywane ani dostępne na naszym serwerze. Więcej informacji:",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://stripe.com/privacy",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline hover:text-foreground",
              children: "stripe.com/privacy"
            }
          ),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl text-foreground", children: "7. Cookies" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Strona korzysta z plików cookies w celu:" }),
        /* @__PURE__ */ jsxs("ul", { className: "text-sm text-muted-foreground space-y-1 pl-4", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Niezbędne" }),
            " — prawidłowe działanie strony (zawsze aktywne),"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Analityczne" }),
            " — anonimowe statystyki odwiedzin (wymagają zgody),"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Funkcjonalne" }),
            " — zapamiętywanie preferencji (np. zgoda na cookies)."
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Możesz w każdej chwili zmienić ustawienia cookies w przeglądarce lub usunąć zapisane pliki. Wyłączenie cookies niezbędnych może wpłynąć na działanie strony." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl text-foreground", children: "8. Prawo do skargi" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
          "Jeśli uważasz, że przetwarzanie Twoich danych narusza przepisy RODO, masz prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa,",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://uodo.gov.pl",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline hover:text-foreground",
              children: "uodo.gov.pl"
            }
          ),
          ")."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-heading text-xl text-foreground", children: "9. Zmiany w polityce" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Zastrzegamy sobie prawo do aktualizacji niniejszej polityki prywatności. O istotnych zmianach poinformujemy na stronie. Data ostatniej aktualizacji: kwiecień 2026." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  PolitykaPrywatnosci as default
};
