import SEOPageLayout from '@/components/SEOPageLayout';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import salonKominek from '@/assets/gallery-salon-kominek-thumb.webp';
import salonPanorama from '@/assets/gallery-salon-panorama-thumb.webp';
import salonFotele from '@/assets/gallery-salon-fotele-thumb.webp';
import toaletaDrewniana from '@/assets/gallery-toaleta-drewniana-thumb.webp';
import lazienkaNowa from '@/assets/gallery-lazienka-nowoczesna-thumb.webp';
import kuchniaCeramika from '@/assets/gallery-kuchnia-ceramika-thumb.webp';
import jadalniaSniadanie from '@/assets/gallery-jadalnia-sniadanie-thumb.webp';
import jadalniaSerwis from '@/assets/gallery-jadalnia-serwis-thumb.webp';
import jadalniaKwiaty from '@/assets/gallery-jadalnia-kwiaty-thumb.webp';
import tarasGrill from '@/assets/gallery-taras-grill-thumb.webp';
import tarasSofa from '@/assets/gallery-taras-sofa-thumb.webp';
import drogaLesna from '@/assets/gallery-droga-lesna-thumb.webp';
import sypialniaGorna from '@/assets/gallery-sypialnia-gorna-thumb.webp';
import domLato from '@/assets/gallery-dom-lato-thumb.webp';
import ogrodZielen from '@/assets/gallery-ogrod-zielen-thumb.webp';
import baniaFront from '@/assets/gallery-bania-front-thumb.webp';
import baniaDom from '@/assets/gallery-bania-dom-thumb.webp';
import baniaOgrod from '@/assets/gallery-bania-ogrod-thumb.webp';
import dabPuszcza from '@/assets/gallery-dab-puszcza-thumb.webp';
import tarasPies from '@/assets/gallery-taras-pies-wieczor-thumb.webp';
import tarasRelaks from '@/assets/gallery-taras-relaks-thumb.webp';
import ogniskoDzieci from '@/assets/gallery-ognisko-dzieci-thumb.webp';
import lazienkaPrysznic from '@/assets/gallery-lazienka-prysznic-thumb.webp';
import sypialniaBalkon from '@/assets/gallery-sypialnia-balkon-thumb.webp';
import tarasObiad from '@/assets/gallery-taras-obiad-thumb.webp';
import konneDroga from '@/assets/gallery-konne-droga-thumb.webp';
import toaletaJasna from '@/assets/gallery-toaleta-jasna-thumb.webp';
import kominekZblizenie from '@/assets/gallery-kominek-zblizenie-thumb.webp';
import domSchody from '@/assets/gallery-dom-schody-thumb.webp';
import ogniskoNocne from '@/assets/gallery-ognisko-nocne-thumb.webp';
import drogaLesnaPlot from '@/assets/gallery-droga-lesna-plot-thumb.webp';
import kuchniaCegla from '@/assets/gallery-kuchnia-cegla-thumb.webp';
import jadalniaOwoce from '@/assets/gallery-jadalnia-owoce-thumb.webp';
import jacuzziNoc from '@/assets/gallery-jacuzzi-noc-thumb.webp';
import kuchniaZlew from '@/assets/gallery-kuchnia-zlew-thumb.webp';
import salonKominekSzerokie from '@/assets/gallery-salon-kominek-szerokie-thumb.webp';
import polkaCeramika from '@/assets/gallery-polka-ceramika-thumb.webp';
import balkonLezak from '@/assets/gallery-balkon-lezak-thumb.webp';
import lazienkaUmywalka from '@/assets/gallery-lazienka-umywalka-thumb.webp';
import prysznicCiemny from '@/assets/gallery-prysznic-ciemny-thumb.webp';
import sniadanieKrata from '@/assets/gallery-sniadanie-krata-thumb.webp';
import informatorGosci from '@/assets/gallery-informator-gosci-thumb.webp';
import salonSchodyKwiaty from '@/assets/gallery-salon-schody-kwiaty-thumb.webp';
import rustykalnaToaletaPolki from '@/assets/gallery-rustykalna-toaleta-polki-thumb.webp';
import kuchniaNiebieskieTalerze from '@/assets/gallery-kuchnia-niebieskie-talerze-thumb.webp';
import wiataLesna from '@/assets/gallery-wiata-lesna-thumb.webp';
import tablicaSzurakowo from '@/assets/gallery-tablica-szurakowo-thumb.webp';
import ramkiWnetrze from '@/assets/gallery-ramki-wnetrze-thumb.webp';
import salonFoteleSchody from '@/assets/gallery-salon-fotele-schody-thumb.webp';
import jadalniaKacik from '@/assets/gallery-jadalnia-kacik-thumb.webp';
import poddaszeFotel from '@/assets/gallery-poddasze-fotel-thumb.webp';
import wejscieTaras from '@/assets/gallery-wejscie-taras-thumb.webp';
import domOgrodPanorama from '@/assets/gallery-dom-ogrod-panorama-thumb.webp';
import piecKaflowyZblizenie from '@/assets/gallery-piec-kaflowy-zblizenie-thumb.webp';
import sypialniaZieloneZaslony from '@/assets/gallery-sypialnia-zielone-zaslony-thumb.webp';
import konneZnak from '@/assets/gallery-konne-znak-thumb.webp';
import jadalniaTulipanyZblizenie from '@/assets/gallery-jadalnia-tulipany-zblizenie-thumb.webp';
import tarasSofaWejscie from '@/assets/gallery-taras-sofa-wejscie-thumb.webp';
import jacuzziNight from '@/assets/jacuzzi-night.webp';

interface GalleryImage {
  thumb: string;
  alt: string;
  category: string;
}

const categories = ['Wszystkie', 'Salon', 'Kuchnia i jadalnia', 'Sypialnie', 'Łazienki', 'Taras i ogród', 'Bania i jacuzzi', 'Okolica'];

const images: GalleryImage[] = [
  // Salon
  { thumb: salonKominek, alt: 'Salon z kominkiem i drewnianymi schodami', category: 'Salon' },
  { thumb: salonPanorama, alt: 'Panorama salonu z fotelem i kominkiem', category: 'Salon' },
  { thumb: salonFotele, alt: 'Wygodne fotele przy kominku', category: 'Salon' },
  { thumb: salonKominekSzerokie, alt: 'Panorama salonu z kominkiem i fotelami', category: 'Salon' },
  { thumb: salonFoteleSchody, alt: 'Salon z fotelami, schodami i kominkiem', category: 'Salon' },
  { thumb: salonSchodyKwiaty, alt: 'Salon z kominkiem, schodami i kwiatami', category: 'Salon' },
  { thumb: kominekZblizenie, alt: 'Zbliżenie na rozpalony kominek', category: 'Salon' },
  { thumb: polkaCeramika, alt: 'Drewniana półka z ceramiką i szufladkami', category: 'Salon' },
  { thumb: ramkiWnetrze, alt: 'Galeria ramek i drewniana komoda', category: 'Salon' },
  { thumb: poddaszeFotel, alt: 'Poddasze z biblioteką, fotelem i telewizorem', category: 'Salon' },
  { thumb: piecKaflowyZblizenie, alt: 'Zbliżenie na kaflowy piec i ceglaną ścianę', category: 'Salon' },
  { thumb: informatorGosci, alt: 'Informator dla gości na drewnianym stoliku', category: 'Salon' },

  // Kuchnia i jadalnia
  { thumb: kuchniaCeramika, alt: 'Kuchnia z ceglanym piecem i owocami', category: 'Kuchnia i jadalnia' },
  { thumb: kuchniaCegla, alt: 'Kuchnia z piecem kaflowym i ceglaną ścianą', category: 'Kuchnia i jadalnia' },
  { thumb: kuchniaZlew, alt: 'Kuchnia z ceglaną ścianą i niebieskimi talerzami', category: 'Kuchnia i jadalnia' },
  { thumb: kuchniaNiebieskieTalerze, alt: 'Kuchnia z niebieskimi talerzami i drewnianą zabudową', category: 'Kuchnia i jadalnia' },
  { thumb: jadalniaSniadanie, alt: 'Jadalnia ze śniadaniem — poranek w chacie', category: 'Kuchnia i jadalnia' },
  { thumb: jadalniaSerwis, alt: 'Nakryty stół z domowym jedzeniem', category: 'Kuchnia i jadalnia' },
  { thumb: jadalniaKwiaty, alt: 'Jadalnia z tulipanami i drewnianymi meblami', category: 'Kuchnia i jadalnia' },
  { thumb: jadalniaOwoce, alt: 'Jadalnia z owocami i nakrytym stołem', category: 'Kuchnia i jadalnia' },
  { thumb: jadalniaKacik, alt: 'Kącik jadalniany przy kominku i oknie', category: 'Kuchnia i jadalnia' },
  { thumb: jadalniaTulipanyZblizenie, alt: 'Zbliżenie na tulipany w jadalni', category: 'Kuchnia i jadalnia' },
  { thumb: sniadanieKrata, alt: 'Śniadanie na stole w kratę z tulipanami', category: 'Kuchnia i jadalnia' },

  // Sypialnie
  { thumb: sypialniaGorna, alt: 'Sypialnia na piętrze z dużym łóżkiem', category: 'Sypialnie' },
  { thumb: sypialniaBalkon, alt: 'Sypialnia z wyjściem na balkon i widokiem na las', category: 'Sypialnie' },
  { thumb: sypialniaZieloneZaslony, alt: 'Sypialnia z zielonymi zasłonami i widokiem na ogród', category: 'Sypialnie' },
  { thumb: balkonLezak, alt: 'Balkon z leżakiem i widokiem na las', category: 'Sypialnie' },

  // Łazienki
  { thumb: lazienkaPrysznic, alt: 'Nowoczesna łazienka z prysznicem', category: 'Łazienki' },
  { thumb: lazienkaNowa, alt: 'Nowoczesna łazienka z kabiną', category: 'Łazienki' },
  { thumb: lazienkaUmywalka, alt: 'Łazienka z podświetlanym lustrem', category: 'Łazienki' },
  { thumb: prysznicCiemny, alt: 'Prysznic z deszczownicą w ciemnych kaflach', category: 'Łazienki' },
  { thumb: toaletaDrewniana, alt: 'Drewniana toaleta w stylu rustykalnym', category: 'Łazienki' },
  { thumb: toaletaJasna, alt: 'Jasna łazienka z drewnianym wykończeniem', category: 'Łazienki' },
  { thumb: rustykalnaToaletaPolki, alt: 'Rustykalna toaleta z drewnianymi półkami', category: 'Łazienki' },

  // Taras i ogród
  { thumb: tarasGrill, alt: 'Taras z grillem i widokiem na ogród', category: 'Taras i ogród' },
  { thumb: tarasSofa, alt: 'Sofa na tarasie w otoczeniu zieleni', category: 'Taras i ogród' },
  { thumb: tarasObiad, alt: 'Obiad na tarasie wśród zieleni', category: 'Taras i ogród' },
  { thumb: tarasPies, alt: 'Pies na tarasie przy świecach', category: 'Taras i ogród' },
  { thumb: tarasRelaks, alt: 'Relaks na tarasie z kawą', category: 'Taras i ogród' },
  { thumb: tarasSofaWejscie, alt: 'Sofa na tarasie przy wejściu do domu', category: 'Taras i ogród' },
  { thumb: wejscieTaras, alt: 'Wejście na taras i schody do domu', category: 'Taras i ogród' },
  { thumb: domLato, alt: 'Dom z czerwonym dachem latem', category: 'Taras i ogród' },
  { thumb: domSchody, alt: 'Widok na drewniany dom i schody wejściowe', category: 'Taras i ogród' },
  { thumb: domOgrodPanorama, alt: 'Panorama domu i ogrodu z czerwonym dachem', category: 'Taras i ogród' },
  { thumb: ogrodZielen, alt: 'Ogród z bujną zielenią', category: 'Taras i ogród' },
  { thumb: ogniskoDzieci, alt: 'Dzieci przy ognisku z widokiem na chatę', category: 'Taras i ogród' },
  { thumb: ogniskoNocne, alt: 'Nocne ognisko przy altanie', category: 'Taras i ogród' },

  // Bania i jacuzzi
  { thumb: jacuzziNight, alt: 'Ruska bania z jacuzzi pod gwiazdami', category: 'Bania i jacuzzi' },
  { thumb: baniaFront, alt: 'Ruska bania z drewnianą obudową', category: 'Bania i jacuzzi' },
  { thumb: baniaDom, alt: 'Bania na tle chaty z czerwonym dachem', category: 'Bania i jacuzzi' },
  { thumb: baniaOgrod, alt: 'Bania w ogrodzie z widokiem na las', category: 'Bania i jacuzzi' },
  { thumb: jacuzziNoc, alt: 'Jacuzzi z niebieskim podświetleniem nocą', category: 'Bania i jacuzzi' },

  // Okolica
  { thumb: drogaLesna, alt: 'Leśna droga w Puszczy Knyszyńskiej', category: 'Okolica' },
  { thumb: drogaLesnaPlot, alt: 'Leśna droga przy ogrodzeniu', category: 'Okolica' },
  { thumb: konneDroga, alt: 'Droga w stronę Konnych', category: 'Okolica' },
  { thumb: konneZnak, alt: 'Znak kierunkowy na leśnej drodze w okolicy Konnych', category: 'Okolica' },
  { thumb: dabPuszcza, alt: 'Stary dąb w Puszczy Knyszyńskiej', category: 'Okolica' },
  { thumb: wiataLesna, alt: 'Leśne wiaty i okolica obiektu', category: 'Okolica' },
  { thumb: tablicaSzurakowo, alt: 'Tablica rezerwatu Szurakowo w zimowym lesie', category: 'Okolica' },
];

const Galeria = () => {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'Wszystkie' ? images : images.filter(i => i.category === activeCategory);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };
  const navigate = (dir: number) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + dir + filtered.length) % filtered.length);
  };

  return (
    <SEOPageLayout
      title="Galeria zdjęć | In The Woods — Dom w Puszczy Knyszyńskiej"
      description="Pełna galeria zdjęć domu In The Woods — salon z kominkiem, sypialnie, kuchnia, łazienki, taras, ogród, ruska bania i okolica w Puszczy Knyszyńskiej."
      breadcrumbName="Galeria"
      ogImage="https://www.suprasl.online/images/hero-cabin.jpg"
    >
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Galeria zdjęć In The Woods
      </h1>
      <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
        Przeglądaj autentyczne zdjęcia naszego domu, wnętrz, ogrodu i okolicy. Kliknij w kategorię, aby filtrować.
      </p>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-foreground/70 hover:text-foreground hover:bg-secondary/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filtered.map((img, i) => (
          <button
            key={`${img.alt}-${i}`}
            onClick={() => openLightbox(i)}
            className="overflow-hidden rounded-lg group aspect-[4/3] relative"
            aria-label={`Otwórz: ${img.alt}`}
          >
            <img
              src={img.thumb}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            <span className="absolute bottom-2 left-2 right-2 text-xs text-white bg-foreground/60 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-1">
              {img.alt}
            </span>
          </button>
        ))}
      </div>

      <p className="text-center text-muted-foreground text-sm mt-8">
        {filtered.length} zdjęć {activeCategory !== 'Wszystkie' ? `w kategorii „${activeCategory}"` : 'łącznie'}
      </p>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/80 hover:text-white p-2" aria-label="Zamknij">
            <X className="w-7 h-7" />
          </button>
          <button onClick={e => { e.stopPropagation(); navigate(-1); }} className="absolute left-4 text-white/80 hover:text-white p-2" aria-label="Poprzednie">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={filtered[lightboxIndex].thumb}
            alt={filtered[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded"
            onClick={e => e.stopPropagation()}
          />
          <button onClick={e => { e.stopPropagation(); navigate(1); }} className="absolute right-4 text-white/80 hover:text-white p-2" aria-label="Następne">
            <ChevronRight className="w-8 h-8" />
          </button>
          <p className="absolute bottom-4 text-white/70 text-sm text-center px-8">{filtered[lightboxIndex].alt}</p>
        </div>
      )}
    </SEOPageLayout>
  );
};

export default Galeria;
