import SEOPageLayout from '@/components/SEOPageLayout';
import ImageReveal from '@/components/ImageReveal';
import { pushToDataLayer } from '@/lib/gtm';
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
import gardenTubFront from '@/assets/gallery-bania-front-thumb.webp';
import gardenTubHouse from '@/assets/gallery-bania-dom-thumb.webp';
import gardenTubGarden from '@/assets/gallery-bania-ogrod-thumb.webp';
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

const categories = [
  'Wszystkie',
  'Salon',
  'Kuchnia i\u00a0jadalnia',
  'Sypialnie',
  'Łazienki',
  'Taras i\u00a0ogród',
  'Balia z\u00a0hydromasażem',
  'Okolica',
];

const images: GalleryImage[] = [
  // Salon
  {
    thumb: salonKominek,
    alt: 'Salon z\u00a0kominkiem i\u00a0drewnianymi belkami',
    category: 'Salon',
  },
  { thumb: salonPanorama, alt: 'Widok na salon i\u00a0fotel przy oknie', category: 'Salon' },
  { thumb: salonFotele, alt: 'Fotele ustawione przy kominku', category: 'Salon' },
  {
    thumb: salonKominekSzerokie,
    alt: 'Panoramiczny widok na salon z\u00a0kominkiem',
    category: 'Salon',
  },
  {
    thumb: salonFoteleSchody,
    alt: 'Fotele w\u00a0salonie obok drewnianych schodów',
    category: 'Salon',
  },
  { thumb: salonSchodyKwiaty, alt: 'Schody i\u00a0kwiaty w\u00a0salonie', category: 'Salon' },
  { thumb: kominekZblizenie, alt: 'Zbliżenie na kominek', category: 'Salon' },
  { thumb: polkaCeramika, alt: 'Ceramiczne naczynia na drewnianej półce', category: 'Salon' },
  { thumb: ramkiWnetrze, alt: 'Ramki na ścianie we wnętrzu domu', category: 'Salon' },
  { thumb: poddaszeFotel, alt: 'Fotel na poddaszu przy oknie', category: 'Salon' },
  {
    thumb: piecKaflowyZblizenie,
    alt: 'Zbliżenie na piec kaflowy i\u00a0ceglaną ścianę',
    category: 'Salon',
  },
  { thumb: informatorGosci, alt: 'Informator dla gości leżący na stole', category: 'Salon' },

  // Kuchnia i jadalnia
  {
    thumb: kuchniaCeramika,
    alt: 'Ceramiczne naczynia przy kuchni kaflowej',
    category: 'Kuchnia i\u00a0jadalnia',
  },
  {
    thumb: kuchniaCegla,
    alt: 'Kuchnia z\u00a0ceglaną ścianą i\u00a0tradycyjną kuchnią kaflową',
    category: 'Kuchnia i\u00a0jadalnia',
  },
  {
    thumb: kuchniaZlew,
    alt: 'Zlew i\u00a0drewniany blat w\u00a0kuchni',
    category: 'Kuchnia i\u00a0jadalnia',
  },
  {
    thumb: kuchniaNiebieskieTalerze,
    alt: 'Niebieskie talerze w\u00a0kuchni',
    category: 'Kuchnia i\u00a0jadalnia',
  },
  {
    thumb: jadalniaSniadanie,
    alt: 'Śniadanie podane na stole w\u00a0jadalni',
    category: 'Kuchnia i\u00a0jadalnia',
  },
  {
    thumb: jadalniaSerwis,
    alt: 'Zastawa stołowa przygotowana do posiłku',
    category: 'Kuchnia i\u00a0jadalnia',
  },
  {
    thumb: jadalniaKwiaty,
    alt: 'Kwiaty na stole w\u00a0jadalni',
    category: 'Kuchnia i\u00a0jadalnia',
  },
  {
    thumb: jadalniaOwoce,
    alt: 'Owoce podane na stole w\u00a0jadalni',
    category: 'Kuchnia i\u00a0jadalnia',
  },
  {
    thumb: jadalniaKacik,
    alt: 'Kącik jadalniany przy kominku',
    category: 'Kuchnia i\u00a0jadalnia',
  },
  {
    thumb: jadalniaTulipanyZblizenie,
    alt: 'Tulipany w\u00a0wazonie na stole',
    category: 'Kuchnia i\u00a0jadalnia',
  },
  {
    thumb: sniadanieKrata,
    alt: 'Śniadanie podane na stole przykrytym obrusem w\u00a0kratę',
    category: 'Kuchnia i\u00a0jadalnia',
  },

  // Sypialnie
  {
    thumb: sypialniaGorna,
    alt: 'Sypialnia na piętrze z\u00a0drewnianymi belkami',
    category: 'Sypialnie',
  },
  { thumb: sypialniaBalkon, alt: 'Sypialnia z\u00a0wyjściem na balkon', category: 'Sypialnie' },
  {
    thumb: sypialniaZieloneZaslony,
    alt: 'Sypialnia z\u00a0zielonymi zasłonami',
    category: 'Sypialnie',
  },
  { thumb: balkonLezak, alt: 'Leżak ustawiony na balkonie', category: 'Sypialnie' },

  // Łazienki
  { thumb: lazienkaPrysznic, alt: 'Prysznic w\u00a0jasnej łazience', category: 'Łazienki' },
  { thumb: lazienkaNowa, alt: 'Kabina prysznicowa w\u00a0łazience', category: 'Łazienki' },
  { thumb: lazienkaUmywalka, alt: 'Umywalka pod podświetlanym lustrem', category: 'Łazienki' },
  {
    thumb: prysznicCiemny,
    alt: 'Prysznic z\u00a0deszczownicą i\u00a0ciemnymi płytkami',
    category: 'Łazienki',
  },
  { thumb: toaletaDrewniana, alt: 'Toaleta z\u00a0drewnianymi elementami', category: 'Łazienki' },
  { thumb: toaletaJasna, alt: 'Jasna toaleta z\u00a0umywalką', category: 'Łazienki' },
  { thumb: rustykalnaToaletaPolki, alt: 'Drewniane półki w\u00a0toalecie', category: 'Łazienki' },

  // Taras i ogród
  {
    thumb: tarasGrill,
    alt: 'Grill na tarasie obok stołu i\u00a0krzeseł',
    category: 'Taras i\u00a0ogród',
  },
  { thumb: tarasSofa, alt: 'Sofa i\u00a0stolik na tarasie', category: 'Taras i\u00a0ogród' },
  { thumb: tarasObiad, alt: 'Posiłek podany na tarasie', category: 'Taras i\u00a0ogród' },
  { thumb: tarasPies, alt: 'Pies odpoczywający na tarasie', category: 'Taras i\u00a0ogród' },
  { thumb: tarasRelaks, alt: 'Fotele i\u00a0stolik na tarasie', category: 'Taras i\u00a0ogród' },
  {
    thumb: tarasSofaWejscie,
    alt: 'Sofa ustawiona przy wejściu na taras',
    category: 'Taras i\u00a0ogród',
  },
  { thumb: wejscieTaras, alt: 'Wejście do domu z\u00a0tarasu', category: 'Taras i\u00a0ogród' },
  { thumb: domLato, alt: 'Drewniany dom latem wśród zieleni', category: 'Taras i\u00a0ogród' },
  {
    thumb: domSchody,
    alt: 'Drewniane schody przy wejściu do domu',
    category: 'Taras i\u00a0ogród',
  },
  {
    thumb: domOgrodPanorama,
    alt: 'Dom i\u00a0ogród widziane z\u00a0tarasu',
    category: 'Taras i\u00a0ogród',
  },
  { thumb: ogrodZielen, alt: 'Zielony ogród przy domu', category: 'Taras i\u00a0ogród' },
  { thumb: ogniskoDzieci, alt: 'Dzieci siedzące przy ognisku', category: 'Taras i\u00a0ogród' },
  {
    thumb: ogniskoNocne,
    alt: 'Ognisko płonące po zmroku przy altanie',
    category: 'Taras i\u00a0ogród',
  },

  // Balia z hydromasażem (jacuzzi)
  {
    thumb: jacuzziNight,
    alt: 'Podświetlona balia ogrodowa wieczorem',
    category: 'Balia z\u00a0hydromasażem',
  },
  {
    thumb: gardenTubFront,
    alt: 'Balia ogrodowa widziana od frontu',
    category: 'Balia z\u00a0hydromasażem',
  },
  {
    thumb: gardenTubHouse,
    alt: 'Balia ogrodowa obok drewnianego domu',
    category: 'Balia z\u00a0hydromasażem',
  },
  {
    thumb: gardenTubGarden,
    alt: 'Balia ogrodowa otoczona zielenią',
    category: 'Balia z\u00a0hydromasażem',
  },
  {
    thumb: jacuzziNoc,
    alt: 'Balia z\u00a0podświetleniem po zmroku',
    category: 'Balia z\u00a0hydromasażem',
  },

  // Okolica
  { thumb: drogaLesna, alt: 'Leśna droga biegnąca między drzewami', category: 'Okolica' },
  { thumb: drogaLesnaPlot, alt: 'Leśna droga wzdłuż ogrodzenia', category: 'Okolica' },
  { thumb: konneDroga, alt: 'Droga do miejscowości Konne', category: 'Okolica' },
  { thumb: konneZnak, alt: 'Znak drogowy w\u00a0miejscowości Konne', category: 'Okolica' },
  { thumb: dabPuszcza, alt: 'Rozłożysty dąb w\u00a0lesie', category: 'Okolica' },
  { thumb: wiataLesna, alt: 'Drewniana wiata w\u00a0lesie', category: 'Okolica' },
  {
    thumb: tablicaSzurakowo,
    alt: 'Tablica informacyjna przy szlaku w\u00a0Szurakowie',
    category: 'Okolica',
  },
];

const Galeria = () => {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === 'Wszystkie' ? images : images.filter((i) => i.category === activeCategory);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    document.body.style.overflow = 'hidden';
    pushToDataLayer({
      event: 'gallery_open',
      gallery_category: activeCategory,
      image_alt: filtered[i]?.alt,
      image_index: i,
    });
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
      title="Galeria zdjęć domku w&nbsp;lesie | In The Woods Supraśl"
      description="Galeria In The Woods: salon z&nbsp;kominkiem, kuchnia, sypialnie, ogród i&nbsp;balia z&nbsp;hydromasażem (jacuzzi). Zobacz domek w&nbsp;Puszczy Knyszyńskiej."
      breadcrumbName="Galeria"
      ogImage="https://www.suprasl.online/images/exterior-main.webp"
    >
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Galeria zdjęć domu i&nbsp;jego wyposażenia
      </h1>
      <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
        Zobacz zdjęcia salonu, kuchni, sypialni, ogrodu i&nbsp;balii z&nbsp;hydromasażem (jacuzzi).
        Kliknij kategorię, aby filtrować obrazy.
      </p>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
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
            <ImageReveal delay={Math.min(i * 45, 315)}>
              <img
                src={img.thumb}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
            </ImageReveal>
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 dark:group-hover:bg-black/20 transition-colors" />
            <span className="absolute bottom-2 left-2 right-2 text-xs text-white bg-foreground/60 dark:bg-black/60 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-1">
              {img.alt}
            </span>
          </button>
        ))}
      </div>

      <p className="text-center text-muted-foreground text-sm mt-8">
        {filtered.length} zdjęć{' '}
        {activeCategory !== 'Wszystkie' ? `w\u00a0kategorii „${activeCategory}"` : 'łącznie'}
      </p>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 dark:bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Zamknij"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            className="absolute left-4 text-white/80 hover:text-white p-2"
            aria-label="Poprzednie"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={filtered[lightboxIndex].thumb}
            alt={filtered[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
            width="800"
            height="600"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            className="absolute right-4 text-white/80 hover:text-white p-2"
            aria-label="Następne"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <p className="absolute bottom-4 text-white/70 text-sm text-center px-8">
            {filtered[lightboxIndex].alt}
          </p>
        </div>
      )}
    </SEOPageLayout>
  );
};

export default Galeria;
