import { jsxs, jsx } from "react/jsx-runtime";
import { B as BlogArticleLayout } from "./BlogArticleLayout-DOFSIl0q.js";
import { Link } from "react-router-dom";
import { b as blogRestauracje } from "./blog-restauracje-suprasl-DL-pWpsL.js";
import { b as blogMonaster } from "./blog-monaster-suprasl-CkB4SpHd.js";
import "react";
import "lucide-react";
import "react-helmet-async";
import "./SEOHead-CuqvaMLz.js";
const kitchenTraditional = "/assets/kitchen-traditional-MvGwrtS1.webp";
const blogBarJarzebinka = "/assets/blog-bar-jarzebinka-CN2jqzpI.jpg";
const blogBohema = "/assets/blog-bohema-suprasl-CnTgPqN2.jpg";
const blogLukaszowka = "/assets/blog-lukaszowka-suprasl-CRzVpjE6.jpg";
const RestauracjeSuprasl = () => {
  const faqs = [
    {
      question: "Gdzie zjeść w Supraślu?",
      answer: "Supraśl oferuje kilkanaście restauracji i kawiarni z kuchnią polską, regionalną i europejską. Szczególnie polecane są lokale serwujące dania kuchni podlaskiej — kartacze, babkę ziemniaczaną i pierogi."
    },
    {
      question: "Jakie dania regionalne warto spróbować w Supraślu?",
      answer: "Najbardziej charakterystyczne dania to kartacze (cepeliny), babka ziemniaczana, kiszka ziemniaczana, pierogi z mięsem lub serem, sękacz podlaski oraz regionalne wędliny i sery."
    },
    {
      question: "Czy w Supraślu są restauracje otwarte wieczorem?",
      answer: "Tak, większość restauracji w centrum Supraśla jest czynna do godziny 20:00–22:00, a w sezonie letnim niektóre lokale mają wydłużone godziny otwarcia."
    },
    {
      question: "Czy Supraśl jest dobry na weekend?",
      answer: "Zdecydowanie tak! Supraśl oferuje uzdrowiskowy klimat, piękną architekturę, Monaster, szlaki piesze, kajaki i doskonałą kuchnię regionalną — idealny na 2–3 dniowy wypad."
    },
    {
      question: "Czy w Supraślu można spróbować kuchni regionalnej?",
      answer: "Tak, restauracje w Supraślu oferują dania kuchni podlaskiej jak kartacze, babka ziemniaczana i kiszka ziemniaczana. Region jest znany z tradycji kulinarnych."
    },
    {
      question: "Gdzie nocować w Supraślu?",
      answer: "In The Woods to dom w lesie z jacuzzi, położony w Puszczy Knyszyńskiej blisko Supraśla — idealny na romantyczny weekend lub rodzinny wypoczynek."
    }
  ];
  const relatedArticles = [
    { title: "Supraśl – atrakcje uzdrowiska Podlasia", slug: "suprasl-atrakcje-uzdrowisko" },
    { title: "Kruszyniany – tatarska wieś Podlasia", slug: "kruszyniany-tatarska-wies" },
    { title: "Kajaki Supraśl – spływy rzeką Supraśl", slug: "kajaki-suprasl" },
    { title: "Szlak Bioróżnorodności Supraśl", slug: "szlak-bioroznorodnosci-suprasl" }
  ];
  return /* @__PURE__ */ jsxs(
    BlogArticleLayout,
    {
      title: "Restauracje Supraśl – gdzie zjeść?",
      metaTitle: "Restauracje Supraśl – gdzie zjeść | 2026",
      metaDescription: "Restauracje Supraśl – najlepsze miejsca na obiad, kolację i kawę. Kuchnia podlaska, kartacze, babka ziemniaczana. Przewodnik kulinarny po Supraślu.",
      slug: "restauracje-suprasl",
      publishDate: "2026-03-15",
      readTime: "12 min",
      keywords: [
        "restauracje Supraśl",
        "gdzie zjeść Supraśl",
        "Supraśl restauracje",
        "jedzenie Supraśl",
        "Supraśl gastronomia",
        "kuchnia podlaska",
        "babka ziemniaczana Podlasie",
        "noclegi Supraśl",
        "Bar Jarząbinka Supraśl",
        "Bohema Supraśl",
        "Łukaszówka Supraśl"
      ],
      faqs,
      relatedArticles,
      children: [
        /* @__PURE__ */ jsx("h2", { children: "Restauracje Supraśl – gdzie warto zjeść podczas pobytu" }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Restauracje w Supraślu" }),
          " to ważna część doświadczenia turystycznego tego uzdrowiskowego miasteczka. Podlasie, a Supraśl w szczególności, słynie z bogatej tradycji kulinarnej, w której mieszają się wpływy kuchni polskiej, litewskiej, białoruskiej i tatarskiej. Jeśli planujesz ",
          /* @__PURE__ */ jsx(Link, { to: "/weekend-suprasl", children: "weekend w Supraślu" }),
          ", ten przewodnik pomoże Ci znaleźć najlepsze miejsca na posiłek."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Od tradycyjnych kartaczy i babki ziemniaczanej po nowoczesne interpretacje kuchni regionalnej — ",
          /* @__PURE__ */ jsx("strong", { children: "Supraśl gastronomicznie" }),
          " zaskakuje różnorodnością i jakością. Kameralne lokale, domowa atmosfera i świeże, lokalne składniki sprawiają, że każdy posiłek staje się podróżą kulinarną po smakach Podlasia."
        ] }),
        /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            decoding: "async",
            sizes: "(min-width: 768px) 768px, 100vw",
            src: blogRestauracje,
            alt: "restauracje Supraśl – kuchnia podlaska, kartacze i regionalne dania",
            className: "w-full rounded-lg my-8",
            width: "800",
            height: "600"
          }
        ),
        /* @__PURE__ */ jsx("h2", { children: "Kuchnia Podlasia – czego spróbować" }),
        /* @__PURE__ */ jsx("p", { children: "Kuchnia podlaska to jedna z najbardziej oryginalnych kuchni regionalnych w Polsce. Bazuje na prostych, naturalnych składnikach — ziemniakach, mące, mięsie, grzybach i leśnych owocach. Dania są sycące, pełne smaku i przygotowywane według receptur przekazywanych z pokolenia na pokolenie." }),
        /* @__PURE__ */ jsx("h3", { children: "Kartacze (cepeliny)" }),
        /* @__PURE__ */ jsx("p", { children: "To flagowe danie Podlasia — duże, owalne kluski z ciasta ziemniaczanego, nadziewane mięsem, serem twarogowym lub grzybami. Podawane ze skwarkami, śmietaną lub sosem mięsnym, kartacze to must-try dla każdego odwiedzającego region. W Supraślu znajdziesz je w większości restauracji serwujących kuchnię regionalną." }),
        /* @__PURE__ */ jsx("h3", { children: "Babka ziemniaczana" }),
        /* @__PURE__ */ jsx("p", { children: "Zapiekanka z tartych ziemniaków, często z dodatkiem słoniny, cebuli i czosnku. Babka ziemniaczana to danie proste, ale niezwykle smakowite — chrupiące z zewnątrz, miękkie i aromatyczne w środku. To klasyka kuchni podlaskiej, którą koniecznie trzeba spróbować w autentycznym wydaniu." }),
        /* @__PURE__ */ jsx("h3", { children: "Kiszka ziemniaczana" }),
        /* @__PURE__ */ jsx("p", { children: "Kolejna specjalność regionu — kiszka ziemniaczana to nadziewane jelita wieprzowe z masą ziemniaczaną, przyprawami i słoniną. Podawana na ciepło, często z kapustą kiszoną i chlebem, stanowi świetny przykład tradycyjnej kuchni domowej Podlasia." }),
        /* @__PURE__ */ jsx("h3", { children: "Pierogi podlaskie" }),
        /* @__PURE__ */ jsx("p", { children: "Pierogi na Podlasiu mają swój własny charakter — z nadzieniami z kaszy gryczanej, twarogu, ziemniaków, grzybów leśnych czy kapusty. Ręcznie lepione, podawane z masłem i skwarkami, to danie, które smakuje jak w domu babci." }),
        /* @__PURE__ */ jsx("h3", { children: "Sękacz podlaski" }),
        /* @__PURE__ */ jsx("p", { children: "Na deser — legendarny sękacz, wyrabiany tradycyjnie nad otwartym ogniem. To ciasto o wyjątkowej, warstwowej strukturze i maślanym smaku, które jest dumą regionu i popularnym pamiątką z Podlasia." }),
        /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            decoding: "async",
            sizes: "(min-width: 768px) 768px, 100vw",
            src: blogMonaster,
            alt: "Supraśl centrum – klimatyczne miasteczko uzdrowiskowe na Podlasiu",
            className: "w-full rounded-lg my-8",
            width: "800",
            height: "600"
          }
        ),
        /* @__PURE__ */ jsx("h2", { children: "Polecane przez nas lokale w Supraślu" }),
        /* @__PURE__ */ jsx("p", { children: "Podczas wielu wizyt w Supraślu przetestowaliśmy lokalne restauracje i wybraliśmy trzy miejsca, które szczególnie polecamy naszym gościom. Każde z nich oferuje autentyczne smaki Podlasia w wyjątkowej atmosferze." }),
        /* @__PURE__ */ jsx("h3", { children: "🍽️ Bar Jarząbinka" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
          /* @__PURE__ */ jsx("strong", { children: "Adres:" }),
          " ul. 3-go Maja 22, 16-030 Supraśl"
        ] }),
        /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            decoding: "async",
            sizes: "(min-width: 768px) 768px, 100vw",
            src: blogBarJarzebinka,
            alt: "Bar Jarząbinka Supraśl – kultowy bar z kuchnią podlaską, babka ziemniaczana i kartacze",
            className: "w-full rounded-lg my-4",
            width: "800",
            height: "600"
          }
        ),
        /* @__PURE__ */ jsxs("p", { children: [
          "Kultowy ",
          /* @__PURE__ */ jsx("strong", { children: "Bar Jarząbinka" }),
          " to obowiązkowy przystanek na kulinarnej mapie Supraśla. Ten niewielki, klimatyczny lokal przy ulicy 3-go Maja serwuje jedne z najlepszych dań kuchni podlaskiej w regionie. Specjalnością domu jest doskonała",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "babka ziemniaczana" }),
          " — chrupiąca z zewnątrz, miękka w środku, podawana z surówkami. Warto spróbować również ",
          /* @__PURE__ */ jsx("strong", { children: "kiszki ziemniaczanej" }),
          " — lokalnego przysmaku w formie jelita wieprzowego wypełnionego masą ziemniaczaną z boczkiem i przyprawami. Na stole nie może zabraknąć ",
          /* @__PURE__ */ jsx("strong", { children: "kartaczy ziemniaczanych" }),
          " — dużych, sycących kluch z ciasta ziemniaczanego z mięsnym nadzieniem. Zamówienia składa się przy barze, a atmosfera jest autentycznie domowa i bezpretensjonalna. Na deser polecamy domowe ciasto Marcinek i szklankę tradycyjnego podpiwku. Mimo niewielkich rozmiarów, Jarząbinka to absolutny klasyk — miejsce, które trzeba odwiedzić choć raz, będąc w Supraślu."
        ] }),
        /* @__PURE__ */ jsx("h3", { children: "🍽️ Bohema Restauracja i Noclegi" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
          /* @__PURE__ */ jsx("strong", { children: "Adres:" }),
          " Plac Tadeusza Kościuszki 1, 16-030 Supraśl"
        ] }),
        /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            decoding: "async",
            sizes: "(min-width: 768px) 768px, 100vw",
            src: blogBohema,
            alt: "Bohema Supraśl – elegancka restauracja z kuchnią polską i regionalną na Placu Kościuszki",
            className: "w-full rounded-lg my-4",
            width: "800",
            height: "600"
          }
        ),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Bohema" }),
          " to restauracja z charakterem, usytuowana w samym sercu Supraśla, na Placu Tadeusza Kościuszki. To miejsce łączy elegancję z podlaską gościnnością, oferując starannie przygotowane dania kuchni polskiej i regionalnej. W menu znajdziesz",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "tradycyjny tatar wołowy" }),
          ", ",
          /* @__PURE__ */ jsx("strong", { children: "śledzia podlaskiego" }),
          " z cebulą,",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "półmisek rozmaitości" }),
          " z wędlinami własnego wyrobu i regionalnymi serami, a także dania mięsne i sezonowe propozycje szefa kuchni. Bohema to doskonały wybór na",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "romantyczną kolację" }),
          " lub elegancki obiad po zwiedzaniu Monasteru i Muzeum Ikon. Restauracja posiada również ogródek letni, z którego można podziwiać zabytkową architekturę placu. Wysoko oceniana przez gości (9.7/10 za lokalizację), stanowi jedno z najlepszych miejsc gastronomicznych w Supraślu."
        ] }),
        /* @__PURE__ */ jsx("h3", { children: "🍽️ Łukaszówka" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
          /* @__PURE__ */ jsx("strong", { children: "Adres:" }),
          " ul. Nowy Świat 2, 16-030 Supraśl"
        ] }),
        /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            decoding: "async",
            sizes: "(min-width: 768px) 768px, 100vw",
            src: blogLukaszowka,
            alt: "Łukaszówka Supraśl – domowe pierogi, kartacze i kuchnia regionalna Podlasia",
            className: "w-full rounded-lg my-4",
            width: "800",
            height: "600"
          }
        ),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Łukaszówka" }),
          " to miejsce, które przywołuje wspomnienia babcinych obiadów. Ta rodzinna restauracja przy ulicy Nowy Świat specjalizuje się w",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "domowych obiadach" }),
          " przygotowywanych z lokalnych produktów. W menu królują",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "kartacze litewskie z mięsem wieprzowym" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "babka ziemniaczana z sosem pieczarkowym" }),
          ", gołąbki w sosie pomidorowym oraz bogaty wybór ",
          /* @__PURE__ */ jsx("strong", { children: "pierogów" }),
          " — od ruskich po nadziewane kaszą gryczaną z białym serem. Łukaszówka słynie również z ",
          /* @__PURE__ */ jsx("strong", { children: "legendarnych pączków" }),
          ", wyrabianych od ponad 30 lat według przepisu prababci właścicieli — to jeden z najsmaczniejszych deserów, jakie spotkasz w Supraślu. Lokal prowadzi również catering i sklep z produktami regionalnymi, więc ulubione smaki Podlasia możesz zabrać ze sobą do domu."
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "Najlepsze restauracje Supraśla" }),
        /* @__PURE__ */ jsx("p", { children: "Supraśl, mimo niewielkich rozmiarów, oferuje zaskakującą różnorodność gastronomiczną. Od tradycyjnych gospód serwujących regionalne specjały po nowoczesne bistro i kawiarnie — każdy znajdzie tu coś dla siebie." }),
        /* @__PURE__ */ jsx("h3", { children: "Restauracje z kuchnią regionalną" }),
        /* @__PURE__ */ jsx("p", { children: "Najciekawsze kulinarne doświadczenie w Supraślu zapewniają lokale specjalizujące się w kuchni podlaskiej. Serwują autentyczne kartacze, babkę ziemniaczaną, pierogi i dania z dziczyzny. Warto szukać miejsc, które współpracują z lokalnymi dostawcami i wykorzystują składniki sezonowe — to gwarancja najwyższej jakości i autentyczności smaku." }),
        /* @__PURE__ */ jsx("h3", { children: "Restauracje z kuchnią polską i europejską" }),
        /* @__PURE__ */ jsx("p", { children: "Dla osób preferujących klasyczną kuchnię polską lub międzynarodowe dania, Supraśl oferuje kilka restauracji serwujących zupy, dania mięsne, ryby i sałatki. Wiele z nich łączy tradycję z nowoczesnymi trendami kulinarnymi, tworząc interesujące dania fusion." }),
        /* @__PURE__ */ jsx("h2", { children: "Gdzie zjeść obiad w Supraślu?" }),
        /* @__PURE__ */ jsx("p", { children: "Obiad w Supraślu to doskonała okazja, aby spróbować lokalnych specjalności w przystępnych cenach. Wiele restauracji oferuje zestawy obiadowe (zupy i dania główne) w atrakcyjnych cenach, szczególnie w dni powszednie. Warto pytać o dania dnia — często są to sezonowe propozycje szefa kuchni przygotowane ze świeżych, lokalnych produktów." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Po zwiedzaniu ",
          /* @__PURE__ */ jsx(Link, { to: "/blog/suprasl-atrakcje-uzdrowisko", children: "atrakcji Supraśla" }),
          " — Monasteru, Muzeum Ikon czy bulwarów — obiad w jednej z lokalnych restauracji jest naturalnym dopełnieniem programu dnia."
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "Gdzie na romantyczną kolację?" }),
        /* @__PURE__ */ jsx("p", { children: "Supraśl ma niezwykły klimat, który sprawia, że kolacja w tym miasteczku jest wyjątkowym przeżyciem. Kameralne sale, światło świec, regionalna kuchnia i bliskość natury tworzą romantyczną atmosferę, idealną na wieczór we dwoje." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Szczególnie polecamy lokale z ogródkami letnimi, gdzie w ciepłe wieczory można kolację spędzić na świeżym powietrzu, słuchając odgłosów puszczy. Po kolacji warto wrócić do",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/", children: "In The Woods" }),
          " na wieczór przy kominku i kąpiel w jacuzzi pod gwiazdami."
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "Gdzie na kawę i deser?" }),
        /* @__PURE__ */ jsx("p", { children: "Supraśl oferuje kilka uroczych kawiarni i cukierni, idealnych na popołudniową przerwę podczas spaceru po miasteczku. Lokalne wypieki — ciasta drożdżowe, serniki, szarlotki — podawane z kawą z lokalnych palarni to doskonały sposób na chwilę relaksu." }),
        /* @__PURE__ */ jsx("p", { children: "Warto poszukać kawiarni położonych przy bulwarach lub w pobliżu Monasteru — widok na rzekę Supraśl lub zabytkową architekturę dodaje smaku każdej kawie." }),
        /* @__PURE__ */ jsx("h2", { children: "Kuchnia regionalna Supraśla i Podlasia" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Region Supraśla słynie z tradycyjnej ",
          /* @__PURE__ */ jsx("strong", { children: "kuchni podlaskiej" }),
          ", szczególnie dań ziemniaczanych takich jak ",
          /* @__PURE__ */ jsx("strong", { children: "babka ziemniaczana" }),
          " oraz",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "kiszka ziemniaczana" }),
          ". Te proste, ale niezwykle smakowite potrawy są symbolem kulinarnego dziedzictwa regionu i obowiązkowym punktem programu każdego turysty."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Jednym z najbardziej charakterystycznych wydarzeń kulinarnych regionu są",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "Mistrzostwa Świata w Pieczeniu Babki i Kiszki Ziemniaczanej" }),
          " organizowane niedaleko Supraśla. Wydarzenie to przyciąga turystów oraz miłośników kuchni regionalnej z całej Polski, stając się prawdziwym świętem kulinarnych tradycji Podlasia."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Podczas wydarzenia można spróbować różnych wariantów tradycyjnych potraw oraz poznać historię kuchni Podlasia. Konkursy kulinarne, degustacje i prezentacje rzemieślnicze tworzą niepowtarzalną atmosferę, która łączy tradycję z współczesnością." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Takie wydarzenia pokazują jak silnie kuchnia regionu związana jest z lokalną kulturą i tradycją. ",
          /* @__PURE__ */ jsx("strong", { children: "Regionalne jedzenie Podlasia" }),
          " to nie tylko posiłek — to opowieść o historii, ludziach i krajobrazie tego wyjątkowego zakątka Polski."
        ] }),
        /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            decoding: "async",
            sizes: "(min-width: 768px) 768px, 100vw",
            src: kitchenTraditional,
            alt: "jedzenie Supraśl – tradycyjna kuchnia podlaska",
            className: "w-full rounded-lg my-8",
            width: "800",
            height: "600"
          }
        ),
        /* @__PURE__ */ jsx("h2", { children: "Kuchnia tatarska" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "W pobliżu Supraśla znajdują się",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/blog/kruszyniany-tatarska-wies", children: "Kruszyniany" }),
          " — tatarska wieś, gdzie można spróbować autentycznych dań kuchni tatarskiej. Pierekaczewnik (spiralny placek z mięsem), kibiny (pierożki tatarskie) i herbata z miodem to smaki, które trudno znaleźć gdzie indziej w Polsce. Wycieczka kulinarna do Kruszynian to doskonałe uzupełnienie pobytu w Supraślu."
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "Porady gastronomiczne dla turystów" }),
        /* @__PURE__ */ jsx("h3", { children: "Rezerwacja stolika" }),
        /* @__PURE__ */ jsx("p", { children: "W sezonie letnim (czerwiec–sierpień) i w weekendy restauracje w Supraślu mogą być pełne — warto zarezerwować stolik z wyprzedzeniem, szczególnie jeśli planujesz kolację w popularnym lokalu." }),
        /* @__PURE__ */ jsx("h3", { children: "Sezonowość" }),
        /* @__PURE__ */ jsx("p", { children: "Wiele restauracji w Supraślu zmienia menu sezonowo, wykorzystując lokalne, świeże produkty. Wiosną pojawiają się dania z ramsonu i szczawiu, latem z jagód i truskawek, jesienią z grzybów i dyni, a zimą rozgrzewające zupy i dania z dziczyzny." }),
        /* @__PURE__ */ jsx("h3", { children: "Ceny" }),
        /* @__PURE__ */ jsx("p", { children: "Ceny w restauracjach Supraśla są zazwyczaj niższe niż w dużych miastach, a porcje hojne. Obiad z zupą i daniem głównym kosztuje zwykle 35–60 zł, a kolacja we dwoje z winem — 150–250 zł. To doskonały stosunek jakości do ceny." }),
        /* @__PURE__ */ jsx("h2", { children: "Weekend w Supraślu – gdzie nocować?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Po dniu pełnym zwiedzania i lokalnych smaków warto odpocząć w spokojnym domu w lesie.",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/", children: "In The Woods" }),
          " oferuje",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/noclegi-suprasl", children: "noclegi blisko Supraśla" }),
          " w otoczeniu natury — z jacuzzi, kominkiem i pełnym spokojem Puszczy Knyszyńskiej. To idealna baza wypadowa na kulinarny weekend w Supraślu."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Po degustacji regionalnych smaków warto odpocząć w spokojnym miejscu blisko natury. In The Woods oferuje komfortowe noclegi blisko Supraśla — sprawdź dostępność i zaplanuj swój",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/weekend-suprasl", children: "weekend w Supraślu" }),
          "."
        ] })
      ]
    }
  );
};
export {
  RestauracjeSuprasl as default
};
