import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { B as BlogArticleLayout } from "./BlogArticleLayout-jvYG-z3A.js";
import { Link } from "react-router-dom";
import "react";
import "lucide-react";
import "react-helmet-async";
import "./SEOHead-7EoxiLOs.js";
const autumnEvents = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Bison Ultra",
    startDate: "2026-10-03",
    endDate: "2026-10-04",
    location: { "@type": "Place", name: "Supraśl" },
    url: "https://bisonultratrail.pl",
    eventStatus: "https://schema.org/EventScheduled"
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Supraska Jesień Chopinowska 2026 – koncert Bartosza Skłodowskiego",
    startDate: "2026-10-17T17:00:00+02:00",
    location: { "@type": "Place", name: "Dom Ludowy", address: { "@type": "PostalAddress", addressLocality: "Supraśl", addressCountry: "PL" } },
    eventStatus: "https://schema.org/EventScheduled"
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Supraska Jesień Chopinowska 2026 – koncert Marka Drewnowskiego",
    startDate: "2026-11-14T17:00:00+01:00",
    location: { "@type": "Place", name: "Dom Ludowy", address: { "@type": "PostalAddress", addressLocality: "Supraśl", addressCountry: "PL" } },
    eventStatus: "https://schema.org/EventScheduled"
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Supraska Jesień Chopinowska 2026 – koncert Krzysztofa Wiercińskiego",
    startDate: "2026-12-05T17:00:00+01:00",
    location: { "@type": "Place", name: "Dom Ludowy", address: { "@type": "PostalAddress", addressLocality: "Supraśl", addressCountry: "PL" } },
    eventStatus: "https://schema.org/EventScheduled"
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Jarmark Świąteczny w Supraślu – otwarcie",
    startDate: "2026-12-12T16:00:00+01:00",
    location: { "@type": "Place", name: "Rynek w Supraślu", address: { "@type": "PostalAddress", addressLocality: "Supraśl", addressCountry: "PL" } },
    eventStatus: "https://schema.org/EventScheduled"
  }
];
const faqs = [
  {
    question: "Co robić w Supraślu jesienią?",
    answer: "W październiku, listopadzie i grudniu 2026 Centrum Kultury i Rekreacji zaplanowało m.in. koncerty Supraskiej Jesieni Chopinowskiej, wernisaże, warsztaty kulinarne, wykłady, spotkania autorskie oraz Jarmark Świąteczny. Sportowcy mogą liczyć na Bison Ultra i zawody Kolarski Supraśl."
  },
  {
    question: "Czy w Supraślu są wydarzenia kulturalne w listopadzie?",
    answer: 'Tak. W listopadzie odbędą się m.in. wykład o bitwie pod Waliłami (7.11), obchody Święta Niepodległości (11.11), koncert Marka Drewnowskiego (14.11), spotkanie z Jerzym Chmielewskim (20.11) i Narodowe Czytanie „Dziadów" (25.11).'
  },
  {
    question: "Kiedy odbędzie się Jarmark Świąteczny w Supraślu?",
    answer: "Otwarcie Jarmarku Świątecznego zaplanowano na 12 grudnia 2026 o godz. 16:00 na Rynku w Supraślu."
  },
  {
    question: "Gdzie nocować podczas Supraskiej Jesieni Chopinowskiej?",
    answer: "Koncerty odbędą się 17 października, 14 listopada i 5 grudnia w Domu Ludowym w Supraślu. Na czas wydarzenia możesz zarezerwować domek na Podlasiu i połączyć koncert z weekendowym wypoczynkiem."
  },
  {
    question: "Czy kalendarz wydarzeń może się zmienić?",
    answer: "Tak. Kalendarz obejmuje najbliższe trzy miesiące i może być aktualizowany. Sprawdzaj oficjalny post Centrum Kultury i Rekreacji w Supraślu: [TODO: dodaj link]."
  }
];
const EventTable = ({
  month,
  children
}) => /* @__PURE__ */ jsx("div", { className: "not-prose my-6 overflow-x-auto rounded-lg border border-border", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[640px] text-left text-sm", children: [
  /* @__PURE__ */ jsxs("caption", { className: "sr-only", children: [
    "Wydarzenia w Supraślu – ",
    month,
    " 2026"
  ] }),
  /* @__PURE__ */ jsx("thead", { className: "bg-secondary text-foreground", children: /* @__PURE__ */ jsxs("tr", { children: [
    /* @__PURE__ */ jsx("th", { scope: "col", className: "px-4 py-3 font-semibold", children: "Data" }),
    /* @__PURE__ */ jsx("th", { scope: "col", className: "px-4 py-3 font-semibold", children: "Godzina" }),
    /* @__PURE__ */ jsx("th", { scope: "col", className: "px-4 py-3 font-semibold", children: "Wydarzenie" }),
    /* @__PURE__ */ jsx("th", { scope: "col", className: "px-4 py-3 font-semibold", children: "Miejsce" })
  ] }) }),
  /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-border", children })
] }) });
const EventRow = ({
  date,
  time,
  event,
  place
}) => /* @__PURE__ */ jsxs("tr", { className: "bg-background", children: [
  /* @__PURE__ */ jsx("td", { className: "px-4 py-3 align-top", children: date }),
  /* @__PURE__ */ jsx("td", { className: "px-4 py-3 align-top whitespace-nowrap", children: time }),
  /* @__PURE__ */ jsx("td", { className: "px-4 py-3 align-top", children: event }),
  /* @__PURE__ */ jsx("td", { className: "px-4 py-3 align-top", children: place })
] });
const JesienWSupraslu2026 = () => /* @__PURE__ */ jsxs(
  BlogArticleLayout,
  {
    title: "Jesień w Supraślu 2026 – kalendarz wydarzeń kulturalnych",
    metaTitle: "Jesień w Supraślu 2026 – kalendarz wydarzeń kulturalnych",
    metaDescription: "Wydarzenia w Supraślu jesień 2026: koncerty, warsztaty, Jarmark Świąteczny. Sprawdź pełny kalendarz i zarezerwuj domek na Podlasiu już dziś!",
    slug: "jesien-w-suprasliu-2026-wydarzenia-kulturalne",
    publishDate: "2026-10-03",
    readTime: "12 min",
    ogImage: "https://www.suprasl.online/images/gallery-dab-puszcza.webp",
    keywords: [
      "wydarzenia w Supraślu jesienią 2026",
      "jesień w Supraślu 2026",
      "kalendarz wydarzeń Supraśl",
      "jesień na Podlasiu",
      "Supraska Jesień Chopinowska",
      "Jarmark Świąteczny Supraśl"
    ],
    faqs,
    events: autumnEvents,
    showFaqSection: false,
    relatedArticles: [
      { title: "Co robić w Supraślu – kompletny przewodnik", slug: "co-robic-suprasl" },
      { title: "Weekend w Supraślu – plan pobytu na 2-3 dni", slug: "weekend-suprasl-plan" },
      { title: "Atrakcje Supraśla – uzdrowisko w Puszczy", slug: "suprasl-atrakcje-uzdrowisko" },
      { title: "Restauracje Supraśl – gdzie zjeść", slug: "restauracje-suprasl" }
    ],
    children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/gallery-dab-puszcza.webp",
          alt: "Puszcza Knyszyńska w Supraślu – leśne tło jesiennych wydarzeń kulturalnych 2026",
          className: "mb-8 w-full rounded-lg shadow-md",
          width: "1200",
          height: "800",
          loading: "lazy",
          decoding: "async"
        }
      ),
      /* @__PURE__ */ jsxs("p", { children: [
        "Jesień na Podlasiu ma swój urok: złote liście w Puszczy Knyszyńskiej, chłodne poranki i spokojniejsze uliczki. A kiedy dni robią się krótsze, Supraśl pokazuje, że potrafi bawić także po zmroku. ",
        /* @__PURE__ */ jsx("strong", { children: "Wydarzenia w Supraślu jesienią 2026" }),
        " to koncerty, wystawy, spotkania autorskie, warsztaty i wielkie święta – od biegu Bison Ultra po Jarmark Świąteczny. Przygotowaliśmy kalendarz, który pomoże zaplanować weekend w Supraślu, a potem znaleźć domek na Podlasiu w sam raz dla Ciebie."
      ] }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("em", { children: [
        "Kalendarz może ulec zmianie – aktualne informacje znajdziesz na stronie Centrum Kultury i Rekreacji w Supraślu (",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "[TODO: dodaj link]" }),
        "). Ostatnia aktualizacja: 3 października 2026."
      ] }) }),
      /* @__PURE__ */ jsx("h2", { children: "Supraśl jesienią – dlaczego warto przyjechać?" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "To miasteczko na skraju Puszczy Knyszyńskiej, w którym kultura jest na wyciągnięcie ręki. Większość wydarzeń odbywa się w centrum – w Bibliotece Publicznej, Domu Ludowym czy na Rynku – więc łatwo połączyć spacer z koncertem lub wernisażem. To dobry pomysł na ",
        /* @__PURE__ */ jsx("strong", { children: "jesień na Podlasiu" }),
        " dla par, rodzin i grup przyjaciół."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Październik 2026" }),
      /* @__PURE__ */ jsx("p", { children: "Miesiąc zaczyna się sportowo, a kończy rodzinnie i... na rowerach." }),
      /* @__PURE__ */ jsxs(EventTable, { month: "październik", children: [
        /* @__PURE__ */ jsx(EventRow, { date: "3–4 października", time: "–", event: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("a", { href: "https://bisonultratrail.pl", target: "_blank", rel: "noopener", children: "Bison Ultra – bieg" }),
          " (bisonultratrail.pl)"
        ] }), place: "Supraśl" }),
        /* @__PURE__ */ jsx(EventRow, { date: "9 października", time: "18:00", event: "Kiszone inaczej – warsztaty kiszenia orientalnego", place: "Świetlica w Karakulach" }),
        /* @__PURE__ */ jsx(EventRow, { date: "10 października", time: "16:00", event: "Dzień Gier Planszowych", place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "12 października", time: "–", event: "Smak bezpiecznej wsi – makarony", place: "Świetlica w Karakulach" }),
        /* @__PURE__ */ jsx(EventRow, { date: "12 października", time: "17:00", event: "Moje cudeńka – wernisaż prac Danuty Ignasiak", place: "Biblioteka, sala Liliput" }),
        /* @__PURE__ */ jsx(EventRow, { date: "13 października", time: "16:00", event: "Woda ma głos – partycypacja obywateli w planowaniu", place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "17 października", time: "11:00", event: 'Konferencja „Małe miasta" – Collegium Suprasliense', place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "17 października", time: "17:00", event: "Supraska Jesień Chopinowska 2026 – koncert Bartosza Skłodowskiego", place: "Dom Ludowy" }),
        /* @__PURE__ */ jsx(EventRow, { date: "20 października", time: "14:00", event: "Ogólnopolski przegląd i warsztaty małych form filmowych", place: "Dom Ludowy" }),
        /* @__PURE__ */ jsx(EventRow, { date: "21–22 października", time: "–", event: "Smak bezpiecznej wsi – weki", place: "Świetlica w Karakulach" }),
        /* @__PURE__ */ jsx(EventRow, { date: "24 października", time: "–", event: "Dzień Seniora w Ogrodniczkach", place: "Świetlica w Ogrodniczkach" }),
        /* @__PURE__ */ jsx(EventRow, { date: "24 października", time: "10:00", event: "Hubertus – KS Victoria", place: "Stadnina koni Victoria" }),
        /* @__PURE__ */ jsx(EventRow, { date: "24 października", time: "10:00", event: "Kolarski Supraśl – zawody rowerowe", place: "Glinki, Supraśl" }),
        /* @__PURE__ */ jsx(EventRow, { date: "25 października", time: "–", event: "Dzień Seniora w Ciasnem", place: "Świetlica w Ciasnem" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Nasza rekomendacja:" }),
        " jeśli lubisz sport, zaplanuj przyjazd na pierwszy weekend października i kibicuj uczestnikom Bison Ultra. Wolisz spokojniejsze klimaty? Wybierz 17 października – przedpołudnie na konferencji, wieczorem koncert fortepianowy. Z kolei 24 października to idealna okazja na rodzinną wycieczkę: w jednym dniu możesz zobaczyć zawody rowerowe lub Hubertus w stadninie koni Victoria."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Listopad 2026" }),
      /* @__PURE__ */ jsx("p", { children: "W listopadzie program robi się bardziej refleksyjny – dużo historii, muzyki i spotkań z ludźmi kultury." }),
      /* @__PURE__ */ jsxs(EventTable, { month: "listopad", children: [
        /* @__PURE__ */ jsx(EventRow, { date: "4 listopada", time: "–", event: "Dzień Seniora w Supraślu", place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "5 listopada", time: "11:00", event: "Debata o społecznym finansowaniu kultury – konferencja Narodowego Centrum Kultury", place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "7 listopada", time: "11:00", event: "Bitwa pod Waliłami – wykład Krzysztofa Łaziuka", place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "9 listopada", time: "17:00", event: "Wieczór Pieśni Patriotycznych", place: "Świetlica w Ogrodniczkach" }),
        /* @__PURE__ */ jsx(EventRow, { date: "10 listopada", time: "11:00", event: "Niepodległość ma smak gęsiny – warsztaty pieczenia gęsiny", place: "Świetlica w Karakulach" }),
        /* @__PURE__ */ jsx(EventRow, { date: "11 listopada", time: "11:00", event: "Święto Niepodległości – uroczystości pod pomnikiem", place: "Ogród Saski" }),
        /* @__PURE__ */ jsx(EventRow, { date: "11 listopada", time: "15:00", event: "Ognisko niepodległościowe", place: "Świetlica w Karakulach" }),
        /* @__PURE__ */ jsx(EventRow, { date: "13 listopada", time: "16:30", event: "XV Turniej Szachowy z okazji odzyskania niepodległości", place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "14 listopada", time: "17:00", event: "Supraska Jesień Chopinowska 2026 – koncert Marka Drewnowskiego", place: "Dom Ludowy" }),
        /* @__PURE__ */ jsx(EventRow, { date: "17 listopada", time: /* @__PURE__ */ jsx(Fragment, { children: "11:00" }), event: "Razem możemy więcej – konferencja Otwartej Instytucji Kultury", place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "18–19 listopada", time: "16:00", event: "Woda ma głos – nowoczesna gospodarka wodna w samorządach", place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "20 listopada", time: "16:00", event: '„Wierszalin 2.0" – spotkanie autorskie z Jerzym Chmielewskim', place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "22 listopada", time: "–", event: "Dzień Seniora w Karakulach", place: "Świetlica w Karakulach" }),
        /* @__PURE__ */ jsx(EventRow, { date: "25 listopada", time: "12:00", event: '„Dziady" – Narodowe Czytanie: konteksty i historia', place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "25 listopada", time: "17:30", event: "Warsztaty pierników", place: "Świetlica w Karakulach" }),
        /* @__PURE__ */ jsx(EventRow, { date: "27 listopada", time: "16:00", event: 'Finisaż wystawy „Strój" Kaciaryny Vadanosavej + koncert muzyki dawnej', place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "29 listopada", time: "–", event: "196. rocznica Powstania Listopadowego", place: "Cmentarz Powstańców Listopadowych w Kopnej Górze" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Nasza rekomendacja:" }),
        " długi weekend wokół 11 listopada to dobry moment na wyjazd – uroczystości w Ogrodzie Saskim, ognisko, warsztaty gęsiny i turniej szachowy. Jeśli szukasz ",
        /* @__PURE__ */ jsx("strong", { children: "noclegów w Supraślu" }),
        " na ostatni weekend miesiąca, możesz połączyć finisaż wystawy z koncertem muzyki dawnej, a po drodze zajrzeć na warsztaty pierników."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Grudzień 2026" }),
      /* @__PURE__ */ jsx("p", { children: "Grudzień to początek świątecznej atmosfery." }),
      /* @__PURE__ */ jsxs(EventTable, { month: "grudzień", children: [
        /* @__PURE__ */ jsx(EventRow, { date: "3 grudnia", time: "17:00", event: 'Wernisaż wystawy „Wielkie żarcie" – Grupa Bochemia oraz ceramika z warsztatów grup działających przy CKiR', place: "Biblioteka Publiczna w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "5 grudnia", time: "17:00", event: "Supraska Jesień Chopinowska 2026 – koncert Krzysztofa Wiercińskiego", place: "Dom Ludowy" }),
        /* @__PURE__ */ jsx(EventRow, { date: "11 grudnia", time: "19:00", event: '„Krótka historia o tańcu" – spektakl Supraskiego Teatru Tańca', place: "Dom Ludowy" }),
        /* @__PURE__ */ jsx(EventRow, { date: "12 grudnia", time: "16:00", event: /* @__PURE__ */ jsx("strong", { children: "Jarmark Świąteczny w Supraślu – otwarcie" }), place: "Rynek w Supraślu" }),
        /* @__PURE__ */ jsx(EventRow, { date: "14 grudnia", time: "17:30", event: "Warsztaty świąteczne – pierogi (grupa dzieci młodszych)", place: "Świetlica w Karakulach" }),
        /* @__PURE__ */ jsx(EventRow, { date: "16 grudnia", time: "17:30", event: "Warsztaty świąteczne – pierogi (grupa młodzieży)", place: "Świetlica w Karakulach" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Nasza rekomendacja:" }),
        " weekend 12 grudnia to otwarcie jarmarku –",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "Jarmark Świąteczny Supraśl" }),
        " to dobry pretekst, by spędzić kilka dni na Podlasiu w świątecznym nastroju."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Muzyka i koncerty" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Serce jesiennego programu stanowi ",
        /* @__PURE__ */ jsx("strong", { children: "Supraska Jesień Chopinowska 2026" }),
        ' – trzy koncerty fortepianowe w Domu Ludowym: 17 października (Bartosz Skłodowski), 14 listopada (Marek Drewnowski) i 5 grudnia (Krzysztof Wierciński). Do tego 27 listopada koncert muzyki dawnej w Bibliotece. Dla fanów teatru tańca – spektakl „Krótka historia o tańcu" 11 grudnia.'
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "Dla rodzin i dzieci" }),
      /* @__PURE__ */ jsx("p", { children: "Rodziny mogą wybrać Dzień Gier Planszowych (10 października), warsztaty pierników (25 listopada) czy grudniowe warsztaty świąteczne z lepieniem pierogów. Dzieci i młodzież mają osobne terminy zajęć – 14 i 16 grudnia." }),
      /* @__PURE__ */ jsx("h2", { children: "Warsztaty i kuchnia" }),
      /* @__PURE__ */ jsx("p", { children: 'Jesień to czas przetworów i smaków. W programie są warsztaty kiszenia orientalnego, cykl „Smak bezpiecznej wsi" (makarony i weki), pieczenie gęsiny oraz pierniki. To świetny sposób, by poznać lokalną społeczność i wrócić do domu z nową umiejętnością.' }),
      /* @__PURE__ */ jsx("h2", { children: "Sport i aktywność" }),
      /* @__PURE__ */ jsx("p", { children: "Bison Ultra (3–4 października) przyciąga biegaczy, a 24 października odbywają się zawody Kolarski Supraśl oraz Hubertus w stadninie koni Victoria. Między wydarzeniami warto wyjść na jesienny spacer w Puszczy Knyszyńskiej." }),
      /* @__PURE__ */ jsx("h2", { children: "Historia i patriotyczne wydarzenia" }),
      /* @__PURE__ */ jsx("p", { children: 'Listopad to miesiąc pamięci: wykład o bitwie pod Waliłami (7 listopada), Wieczór Pieśni Patriotycznych (9 listopada), uroczystości Święta Niepodległości (11 listopada), Narodowe Czytanie „Dziadów" (25 listopada) i rocznica Powstania Listopadowego w Kopnej Górze (29 listopada).' }),
      /* @__PURE__ */ jsx("h2", { children: "Dla seniorów i społeczności lokalnej" }),
      /* @__PURE__ */ jsx("p", { children: 'Dni Seniora odbędą się w kilku miejscowościach: w Ogrodniczkach (24.10), Ciasnem (25.10), Supraślu (4.11) i Karakulach (22.11). W programie są też konferencje i debaty – m.in. „Woda ma głos" oraz konferencja „Razem możemy więcej".' }),
      /* @__PURE__ */ jsx("h2", { children: "Gdzie się zatrzymać? Domki na Podlasiu" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Chcesz zostać na dłużej niż jeden wieczór? ",
        /* @__PURE__ */ jsx("strong", { children: "Wynajem domków w Supraślu" }),
        " pozwala połączyć udział w wydarzeniach z odpoczynkiem we własnym tempie – w dobrym towarzystwie, bez pośpiechu. Sprawdź ",
        /* @__PURE__ */ jsx(Link, { to: "/domek-suprasl", children: "naszą ofertę domków" }),
        " i wybierz",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/domek-suprasl", children: "domek dla rodziny, dla par lub dla grupy" }),
        ". Masz pytania o terminy? ",
        /* @__PURE__ */ jsx("a", { href: "/#kontakt", children: "Skontaktuj się z nami" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "not-prose my-8 text-center", children: /* @__PURE__ */ jsx(Link, { to: "/domek-suprasl", className: "btn-primary inline-flex items-center justify-center", children: "Zarezerwuj domek na Podlasiu →" }) }),
      /* @__PURE__ */ jsx("h2", { children: "Najczęściej zadawane pytania (FAQ)" }),
      faqs.map((faq) => /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { children: faq.question }),
        /* @__PURE__ */ jsx("p", { children: faq.answer })
      ] }, faq.question)),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "Źródło programu: Centrum Kultury i Rekreacji w Supraślu. Ostatnia aktualizacja: 3 października 2026." }) })
    ]
  }
);
export {
  JesienWSupraslu2026 as default
};
