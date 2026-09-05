import { jsxs, jsx } from "react/jsx-runtime";
import { S as SEOPageLayout } from "./SEOPageLayout-Kuqbp5PI.js";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { s as salonKominek, p as poddaszeFotel, k as kuchniaCeramika, a as sypialniaBalkon, l as lazienkaPrysznic, d as domLato } from "./gallery-dom-lato-thumb-BsJUDLiM.js";
import { s as salonPanorama, a as salonFotele, b as salonKominekSzerokie, c as salonFoteleSchody, d as salonSchodyKwiaty, k as kominekZblizenie, p as polkaCeramika, r as ramkiWnetrze, e as piecKaflowyZblizenie, i as informatorGosci, f as kuchniaCegla, g as kuchniaZlew, h as kuchniaNiebieskieTalerze, j as jadalniaSniadanie, l as jadalniaSerwis, m as jadalniaKwiaty, n as jadalniaOwoce, o as jadalniaKacik, q as jadalniaTulipanyZblizenie, t as sniadanieKrata, u as sypialniaZieloneZaslony, v as balkonLezak, w as lazienkaNowa, x as lazienkaUmywalka, y as prysznicCiemny, z as toaletaDrewniana, A as toaletaJasna, B as rustykalnaToaletaPolki, C as tarasObiad, D as tarasPies, E as tarasSofaWejscie, F as wejscieTaras, G as domSchody, H as domOgrodPanorama, I as ogniskoDzieci, J as ogniskoNocne, K as baniaOgrod, L as jacuzziNoc, M as drogaLesna, N as drogaLesnaPlot, O as konneDroga, P as konneZnak, Q as dabPuszcza, R as wiataLesna, S as tablicaSzurakowo } from "./gallery-taras-sofa-wejscie-thumb-0RlbbvrQ.js";
import { s as sypialniaGorna, t as tarasGrill } from "./gallery-taras-grill-thumb-BzruZsMm.js";
import { b as baniaFront } from "./gallery-bania-front-thumb-jA8fGZZ2.js";
import { b as baniaDom } from "./gallery-bania-dom-thumb-BE7yTxgd.js";
import { t as tarasRelaks } from "./gallery-taras-relaks-thumb-93cfWWE7.js";
import { j as jacuzziNight } from "./jacuzzi-night-DiOi0E6n.js";
import "react-router-dom";
import "./SEOHead-CuqvaMLz.js";
import "react-helmet-async";
const tarasSofa = "/assets/gallery-taras-sofa-thumb-uIuc7_Su.webp";
const ogrodZielen = "/assets/gallery-ogrod-zielen-thumb-CWIyc2ch.webp";
const categories = ["Wszystkie", "Salon", "Kuchnia i jadalnia", "Sypialnie", "Łazienki", "Taras i ogród", "Bania i jacuzzi", "Okolica"];
const images = [
  // Salon
  { thumb: salonKominek, alt: "Salon z kominkiem — domek z kominkiem w lesie na wyłączność", category: "Salon" },
  { thumb: salonPanorama, alt: "Panorama salonu z fotelem — dom z bali wynajem Supraśl", category: "Salon" },
  { thumb: salonFotele, alt: "Wygodne fotele przy kominku w leśnym domku do wynajęcia", category: "Salon" },
  { thumb: salonKominekSzerokie, alt: "Panorama salonu z kominkiem — dom na wyłączność w lesie", category: "Salon" },
  { thumb: salonFoteleSchody, alt: "Salon z fotelami i schodami — domek w lesie Supraśl", category: "Salon" },
  { thumb: salonSchodyKwiaty, alt: "Salon z kominkiem i kwiatami — domek z kominkiem las", category: "Salon" },
  { thumb: kominekZblizenie, alt: "Rozpalony kominek — klimatyczny domek w lesie na weekend", category: "Salon" },
  { thumb: polkaCeramika, alt: "Drewniana półka z ceramiką — dom z bali na wyłączność", category: "Salon" },
  { thumb: ramkiWnetrze, alt: "Galeria ramek — wnętrze leśnego domku do wynajęcia", category: "Salon" },
  { thumb: poddaszeFotel, alt: "Poddasze z biblioteką — praca zdalna w lesie wynajem domku", category: "Salon" },
  { thumb: piecKaflowyZblizenie, alt: "Kaflowy piec i ceglana ściana — dom z bali wynajem", category: "Salon" },
  { thumb: informatorGosci, alt: "Informator gości — domek w lesie wynajem In The Woods", category: "Salon" },
  // Kuchnia i jadalnia
  { thumb: kuchniaCeramika, alt: "Kuchnia z płytą kaflową — dom z bali na wyłączność", category: "Kuchnia i jadalnia" },
  { thumb: kuchniaCegla, alt: "Kuchnia z piecem kaflowym i ceglaną ścianą — leśny domek do wynajęcia", category: "Kuchnia i jadalnia" },
  { thumb: kuchniaZlew, alt: "Kuchnia z ceglaną ścianą — domek w lesie wynajem", category: "Kuchnia i jadalnia" },
  { thumb: kuchniaNiebieskieTalerze, alt: "Kuchnia z drewnianą zabudową — dom z bali wynajem Podlasie", category: "Kuchnia i jadalnia" },
  { thumb: jadalniaSniadanie, alt: "Jadalnia ze śniadaniem — poranek w domku w lesie na wyłączność", category: "Kuchnia i jadalnia" },
  { thumb: jadalniaSerwis, alt: "Nakryty stół z domowym jedzeniem — dom na wyłączność las", category: "Kuchnia i jadalnia" },
  { thumb: jadalniaKwiaty, alt: "Jadalnia z tulipanami — leśny domek do wynajęcia Supraśl", category: "Kuchnia i jadalnia" },
  { thumb: jadalniaOwoce, alt: "Jadalnia z owocami — domek w lesie wynajem Puszcza Knyszyńska", category: "Kuchnia i jadalnia" },
  { thumb: jadalniaKacik, alt: "Kącik jadalniany przy kominku — domek z kominkiem w lesie", category: "Kuchnia i jadalnia" },
  { thumb: jadalniaTulipanyZblizenie, alt: "Tulipany w jadalni — dom z bali na wyłączność", category: "Kuchnia i jadalnia" },
  { thumb: sniadanieKrata, alt: "Śniadanie w domku w lesie — slow travel Polska", category: "Kuchnia i jadalnia" },
  // Sypialnie
  { thumb: sypialniaGorna, alt: "Sypialnia na piętrze — domek w lesie dla 2 osób z jacuzzi", category: "Sypialnie" },
  { thumb: sypialniaBalkon, alt: "Sypialnia z balkonem — romantyczny pobyt w lesie wynajem", category: "Sypialnie" },
  { thumb: sypialniaZieloneZaslony, alt: "Sypialnia z widokiem na ogród — dom na wyłączność las", category: "Sypialnie" },
  { thumb: balkonLezak, alt: "Balkon z leżakiem i widokiem na Puszczę Knyszyńską", category: "Sypialnie" },
  // Łazienki
  { thumb: lazienkaPrysznic, alt: "Nowoczesna łazienka z prysznicem — leśny domek do wynajęcia", category: "Łazienki" },
  { thumb: lazienkaNowa, alt: "Nowoczesna łazienka z kabiną w domku w lesie", category: "Łazienki" },
  { thumb: lazienkaUmywalka, alt: "Łazienka z podświetlanym lustrem — dom z bali wynajem", category: "Łazienki" },
  { thumb: prysznicCiemny, alt: "Prysznic z deszczownicą — domek na wyłączność Supraśl", category: "Łazienki" },
  { thumb: toaletaDrewniana, alt: "Toaleta w stylu rustykalnym — dom z bali na wyłączność", category: "Łazienki" },
  { thumb: toaletaJasna, alt: "Jasna łazienka — leśny domek do wynajęcia Podlasie", category: "Łazienki" },
  { thumb: rustykalnaToaletaPolki, alt: "Rustykalna toaleta z drewnianymi półkami — domek w lesie", category: "Łazienki" },
  // Taras i ogród
  { thumb: tarasGrill, alt: "Taras z grillem — ogrodzony teren domku w lesie z miejscem na ognisko", category: "Taras i ogród" },
  { thumb: tarasSofa, alt: "Sofa na tarasie — odpoczynek w lesie weekend w domku na wyłączność", category: "Taras i ogród" },
  { thumb: tarasObiad, alt: "Obiad na tarasie — domek w lesie wynajem z ogrodzonym terenem", category: "Taras i ogród" },
  { thumb: tarasPies, alt: "Pies na tarasie — psy za darmo w domku w lesie Supraśl", category: "Taras i ogród" },
  { thumb: tarasRelaks, alt: "Relaks na tarasie z kawą — chill w lesie, slow travel Polska", category: "Taras i ogród" },
  { thumb: tarasSofaWejscie, alt: "Sofa na tarasie przy wejściu — leśny domek do wynajęcia", category: "Taras i ogród" },
  { thumb: wejscieTaras, alt: "Wejście na taras — dom z bali na wyłączność Puszcza Knyszyńska", category: "Taras i ogród" },
  { thumb: domLato, alt: "Dom z bali latem — domek w lesie Supraśl z ogrodzonym terenem", category: "Taras i ogród" },
  { thumb: domSchody, alt: "Drewniany dom i schody — leśny domek do wynajęcia na Podlasiu", category: "Taras i ogród" },
  { thumb: domOgrodPanorama, alt: "Panorama domu i ogrodu — dom na wyłączność w lesie", category: "Taras i ogród" },
  { thumb: ogrodZielen, alt: "Ogrodzony ogród z bujną zielenią — domek w lesie psy za darmo", category: "Taras i ogród" },
  { thumb: ogniskoDzieci, alt: "Dzieci przy ognisku — dom w lesie wynajem dla rodziny z dziećmi", category: "Taras i ogród" },
  { thumb: ogniskoNocne, alt: "Nocne ognisko przy altanie — domek w lesie z miejscem na ognisko", category: "Taras i ogród" },
  // Bania i jacuzzi
  { thumb: jacuzziNight, alt: "Ruska bania z jacuzzi pod gwiazdami — domek z balią w lesie", category: "Bania i jacuzzi" },
  { thumb: baniaFront, alt: "Ruska bania — domek z jacuzzi w lesie na wyłączność", category: "Bania i jacuzzi" },
  { thumb: baniaDom, alt: "Bania na tle domku z bali — domek z balią w lesie Puszcza Knyszyńska", category: "Bania i jacuzzi" },
  { thumb: baniaOgrod, alt: "Bania w ogrodzie — SPA na odludziu, domek z jacuzzi Podlasie", category: "Bania i jacuzzi" },
  { thumb: jacuzziNoc, alt: "Jacuzzi z podświetleniem nocą — domek z jacuzzi w lesie pod gwiazdami", category: "Bania i jacuzzi" },
  // Okolica
  { thumb: drogaLesna, alt: "Leśna droga w Puszczy Knyszyńskiej — domek na odludziu podlaskie", category: "Okolica" },
  { thumb: drogaLesnaPlot, alt: "Leśna droga przy ogrodzeniu — domek podlaskie odludzie", category: "Okolica" },
  { thumb: konneDroga, alt: "Droga do Konnych — domek w lesie Supraśl lokalizacja", category: "Okolica" },
  { thumb: konneZnak, alt: "Znak kierunkowy — domek w lesie na odludziu Puszcza Knyszyńska", category: "Okolica" },
  { thumb: dabPuszcza, alt: "Stary dąb w Puszczy Knyszyńskiej — rezerwat Krzemienne Góry", category: "Okolica" },
  { thumb: wiataLesna, alt: "Leśna wiata — okolica domku w lesie na Podlasiu", category: "Okolica" },
  { thumb: tablicaSzurakowo, alt: "Tablica rezerwatu — domek w lesie przy rezerwacie przyrody", category: "Okolica" }
];
const Galeria = () => {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const filtered = activeCategory === "Wszystkie" ? images : images.filter((i) => i.category === activeCategory);
  const openLightbox = (i) => {
    setLightboxIndex(i);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };
  const navigate = (dir) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + dir + filtered.length) % filtered.length);
  };
  return /* @__PURE__ */ jsxs(
    SEOPageLayout,
    {
      title: "Galeria zdjęć domku w lesie | In The Woods Supraśl",
      description: "Galeria In The Woods: salon z kominkiem, kuchnia, sypialnie, ogród i ruska bania. Zobacz domek w Puszczy Knyszyńskiej.",
      breadcrumbName: "Galeria",
      ogImage: "https://www.suprasl.online/images/hero-cabin.jpg",
      children: [
        /* @__PURE__ */ jsx("h1", { className: "section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6", children: "Galeria zdjęć — leśny domek do wynajęcia In The Woods" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-lg mb-10 max-w-2xl", children: [
          "Przeglądaj autentyczne zdjęcia naszego ",
          /* @__PURE__ */ jsx("strong", { children: "domu z bali na wyłączność" }),
          " — salon z kominkiem, kuchnia z płytą kaflową, sypialnie, ogrodzony ogród i ruska bania z balią w Puszczy Knyszyńskiej. Kliknij w kategorię, aby filtrować."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-10", children: categories.map((cat) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveCategory(cat),
            className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70 hover:text-foreground hover:bg-secondary/80"}`,
            children: cat
          },
          cat
        )) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3", children: filtered.map((img, i) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => openLightbox(i),
            className: "overflow-hidden rounded-lg group aspect-[4/3] relative",
            "aria-label": `Otwórz: ${img.alt}`,
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: img.thumb,
                  alt: img.alt,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                  loading: "lazy",
                  decoding: "async",
                  width: "400",
                  height: "300"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" }),
              /* @__PURE__ */ jsx("span", { className: "absolute bottom-2 left-2 right-2 text-xs text-white bg-foreground/60 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-1", children: img.alt })
            ]
          },
          `${img.alt}-${i}`
        )) }),
        /* @__PURE__ */ jsxs("p", { className: "text-center text-muted-foreground text-sm mt-8", children: [
          filtered.length,
          " zdjęć ",
          activeCategory !== "Wszystkie" ? `w kategorii „${activeCategory}"` : "łącznie"
        ] }),
        lightboxIndex !== null && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center", onClick: closeLightbox, children: [
          /* @__PURE__ */ jsx("button", { onClick: closeLightbox, className: "absolute top-4 right-4 text-white/80 hover:text-white p-2", "aria-label": "Zamknij", children: /* @__PURE__ */ jsx(X, { className: "w-7 h-7" }) }),
          /* @__PURE__ */ jsx("button", { onClick: (e) => {
            e.stopPropagation();
            navigate(-1);
          }, className: "absolute left-4 text-white/80 hover:text-white p-2", "aria-label": "Poprzednie", children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: filtered[lightboxIndex].thumb,
              alt: filtered[lightboxIndex].alt,
              className: "max-h-[85vh] max-w-[90vw] object-contain rounded",
              onClick: (e) => e.stopPropagation(),
              width: "800",
              height: "600"
            }
          ),
          /* @__PURE__ */ jsx("button", { onClick: (e) => {
            e.stopPropagation();
            navigate(1);
          }, className: "absolute right-4 text-white/80 hover:text-white p-2", "aria-label": "Następne", children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx("p", { className: "absolute bottom-4 text-white/70 text-sm text-center px-8", children: filtered[lightboxIndex].alt })
        ] })
      ]
    }
  );
};
export {
  Galeria as default
};
