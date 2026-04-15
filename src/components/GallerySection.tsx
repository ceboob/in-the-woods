import { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

import jacuzziNight from '@/assets/jacuzzi-night-lg.webp';
import jacuzziNightSm from '@/assets/jacuzzi-night-sm.webp';
import jacuzziNightMd from '@/assets/jacuzzi-night-md.webp';

import salonKominek from '@/assets/gallery-salon-kominek-thumb.webp';
import salonPanorama from '@/assets/gallery-salon-panorama-thumb.webp';
import salonFotele from '@/assets/gallery-salon-fotele-thumb.webp';
import toaletaDrewniana from '@/assets/gallery-toaleta-drewniana-thumb.webp';
import lazienkaNowa from '@/assets/gallery-lazienka-nowoczesna-thumb.webp';
import kuchniaCeramika from '@/assets/gallery-kuchnia-ceramika-thumb.webp';
import jadalniaSniadanie from '@/assets/gallery-jadalnia-sniadanie-thumb.webp';
import jadalniaSerwis from '@/assets/gallery-jadalnia-serwis-thumb.webp';
import jadalniaKwiaty from '@/assets/gallery-jadalnia-kwiaty-thumb.webp';
import drogaLesna from '@/assets/gallery-droga-lesna-thumb.webp';
import domLato from '@/assets/gallery-dom-lato-thumb.webp';
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

type Category = 'all' | 'wnetrze' | 'bania' | 'ogrod' | 'okolica';

interface GalleryImage {
  thumb: string;
  full: string;
  alt: string;
  caption: string;
  category: Category[];
  className?: string;
  srcSet?: string;
}

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'wnetrze', label: 'Wnętrze' },
  { id: 'bania', label: 'Ruska bania' },
  { id: 'ogrod', label: 'Ogród i taras' },
  { id: 'okolica', label: 'Okolica i las' },
];

const allImages: GalleryImage[] = [
  // HERO row
  {
    thumb: jacuzziNight,
    full: '/images/jacuzzi-night.webp',
    alt: 'In The Woods Supraśl — ruska bania z jacuzzi pod gwiazdami',
    caption: 'Ruska bania z balią — prywatne SPA pod gwiazdami',
    category: ['bania'],
    className: 'col-span-2 row-span-2',
    srcSet: `${jacuzziNightSm} 640w, ${jacuzziNightMd} 1024w, ${jacuzziNight} 1442w`,
  },
  {
    thumb: salonKominek,
    full: '/images/gallery-salon-kominek.webp',
    alt: 'In The Woods Supraśl — salon z kominkiem i drewnianymi schodami',
    caption: 'Salon z klimatycznym kominkiem',
    category: ['wnetrze'],
  },
  {
    thumb: domLato,
    full: '/images/gallery-dom-lato.webp',
    alt: 'In The Woods Supraśl — dom z bali latem w ogrodzie',
    caption: 'Dom z bali — widok z ogrodu latem',
    category: ['ogrod'],
  },
  {
    thumb: sypialniaBalkon,
    full: '/images/gallery-sypialnia-balkon.avif',
    alt: 'In The Woods Supraśl — sypialnia z wyjściem na balkon',
    caption: 'Sypialnia z balkonem i widokiem na las',
    category: ['wnetrze'],
  },
  {
    thumb: jadalniaSniadanie,
    full: '/images/gallery-jadalnia-sniadanie.webp',
    alt: 'In The Woods Supraśl — jadalnia ze śniadaniem',
    caption: 'Poranki w jadalni z domowym śniadaniem',
    category: ['wnetrze'],
  },
  {
    thumb: baniaFront,
    full: '/images/gallery-bania-front.webp',
    alt: 'In The Woods Supraśl — ruska bania z drewnianą obudową',
    caption: 'Ruska bania — tradycyjna łaźnia parowa',
    category: ['bania'],
    className: 'col-span-2',
  },
  {
    thumb: tarasObiad,
    full: '/images/gallery-taras-obiad.avif',
    alt: 'In The Woods Supraśl — obiad na tarasie wśród zieleni',
    caption: 'Obiad na tarasie w otoczeniu natury',
    category: ['ogrod'],
  },
  {
    thumb: kuchniaCeramika,
    full: '/images/gallery-kuchnia-ceramika.webp',
    alt: 'In The Woods Supraśl — kuchnia z piecem kaflowym',
    caption: 'Kuchnia z ceglanym piecem kaflowym',
    category: ['wnetrze'],
  },
  {
    thumb: lazienkaPrysznic,
    full: '/images/gallery-lazienka-prysznic.avif',
    alt: 'In The Woods Supraśl — nowoczesna łazienka z prysznicem',
    caption: 'Nowoczesna łazienka z dużym prysznicem',
    category: ['wnetrze'],
  },
  {
    thumb: konneDroga,
    full: '/images/gallery-konne-droga.avif',
    alt: 'In The Woods Supraśl — leśna droga w Puszczy Knyszyńskiej',
    caption: 'Droga do domu przez Puszczę Knyszyńską',
    category: ['okolica'],
  },
  {
    thumb: salonPanorama,
    full: '/images/gallery-salon-panorama.webp',
    alt: 'In The Woods Supraśl — panorama salonu z fotelem i kominkiem',
    caption: 'Panorama salonu z kominkiem i fotelami',
    category: ['wnetrze'],
  },
  {
    thumb: ogniskoDzieci,
    full: '/images/gallery-ognisko-dzieci.webp',
    alt: 'In The Woods Supraśl — dzieci przy ognisku w ogrodzie',
    caption: 'Ognisko w ogrodzie — rodzinne wieczory',
    category: ['ogrod'],
  },
  // MORE
  {
    thumb: salonFotele,
    full: '/images/gallery-salon-fotele.webp',
    alt: 'In The Woods Supraśl — fotele przy kominku wieczorem',
    caption: 'Wieczór przy kominku w wygodnych fotelach',
    category: ['wnetrze'],
  },
  {
    thumb: jadalniaSerwis,
    full: '/images/gallery-jadalnia-serwis.webp',
    alt: 'In The Woods Supraśl — nakryty stół z domowym jedzeniem',
    caption: 'Nakryty stół — śniadanie w chacie',
    category: ['wnetrze'],
  },
  {
    thumb: jadalniaKwiaty,
    full: '/images/gallery-jadalnia-kwiaty.webp',
    alt: 'In The Woods Supraśl — jadalnia z tulipanami',
    caption: 'Jadalnia z tulipanami i drewnianymi meblami',
    category: ['wnetrze'],
  },
  {
    thumb: toaletaDrewniana,
    full: '/images/gallery-toaleta-drewniana.webp',
    alt: 'In The Woods Supraśl — rustykalna toaleta',
    caption: 'Toaleta w rustykalnym stylu z drewna',
    category: ['wnetrze'],
  },
  {
    thumb: lazienkaNowa,
    full: '/images/gallery-lazienka-nowoczesna.webp',
    alt: 'In The Woods Supraśl — nowoczesna łazienka z kabiną',
    caption: 'Nowoczesna łazienka z kabiną prysznicową',
    category: ['wnetrze'],
  },
  {
    thumb: baniaDom,
    full: '/images/gallery-bania-dom.webp',
    alt: 'In The Woods Supraśl — bania na tle domu z czerwonym dachem',
    caption: 'Bania w ogrodzie — widok na dom',
    category: ['bania', 'ogrod'],
  },
  {
    thumb: baniaOgrod,
    full: '/images/gallery-bania-ogrod.webp',
    alt: 'In The Woods Supraśl — bania w ogrodzie z widokiem na las',
    caption: 'Bania w ogrodzie z widokiem na Puszczę',
    category: ['bania', 'ogrod'],
  },
  {
    thumb: dabPuszcza,
    full: '/images/gallery-dab-puszcza.webp',
    alt: 'In The Woods Supraśl — stary dąb w Puszczy Knyszyńskiej',
    caption: 'Stary dąb — Puszcza Knyszyńska',
    category: ['okolica'],
  },
  {
    thumb: drogaLesna,
    full: '/images/gallery-droga-lesna.webp',
    alt: 'In The Woods Supraśl — leśna droga w Puszczy',
    caption: 'Leśna droga — okolica domu',
    category: ['okolica'],
  },
  {
    thumb: tarasPies,
    full: '/images/gallery-taras-pies-wieczor.webp',
    alt: 'In The Woods Supraśl — pies na tarasie przy świecach',
    caption: 'Pies na tarasie — wieczór w In The Woods',
    category: ['ogrod'],
  },
  {
    thumb: tarasRelaks,
    full: '/images/gallery-taras-relaks.webp',
    alt: 'In The Woods Supraśl — relaks na tarasie z kawą',
    caption: 'Kawa na tarasie — letni wieczór',
    category: ['ogrod'],
  },
  {
    thumb: toaletaJasna,
    full: '/images/gallery-toaleta-jasna.avif',
    alt: 'In The Woods Supraśl — jasna łazienka z drewnianym wykończeniem',
    caption: 'Jasna łazienka z drewnem',
    category: ['wnetrze'],
  },
  {
    thumb: kominekZblizenie,
    full: '/images/gallery-kominek-zblizenie.avif',
    alt: 'In The Woods Supraśl — zbliżenie na rozpalony kominek',
    caption: 'Rozpalony kominek — serce domu',
    category: ['wnetrze'],
  },
  {
    thumb: domSchody,
    full: '/images/gallery-dom-schody.avif',
    alt: 'In The Woods Supraśl — schody wejściowe do domu',
    caption: 'Wejście do domu z bali',
    category: ['ogrod'],
  },
  {
    thumb: ogniskoNocne,
    full: '/images/gallery-ognisko-nocne.avif',
    alt: 'In The Woods Supraśl — nocne ognisko przy altanie',
    caption: 'Nocne ognisko w ogrodzie',
    category: ['ogrod'],
  },
  {
    thumb: drogaLesnaPlot,
    full: '/images/gallery-droga-lesna-plot.avif',
    alt: 'In The Woods Supraśl — leśna droga przy ogrodzeniu',
    caption: 'Droga leśna przy posesji',
    category: ['okolica'],
  },
  {
    thumb: kuchniaCegla,
    full: '/images/gallery-kuchnia-cegla.avif',
    alt: 'In The Woods Supraśl — kuchnia z piecem kaflowym i cegłą',
    caption: 'Kuchnia z piecem kaflowym i cegłą',
    category: ['wnetrze'],
  },
  {
    thumb: jadalniaOwoce,
    full: '/images/gallery-jadalnia-owoce.avif',
    alt: 'In The Woods Supraśl — jadalnia z owocami na stole',
    caption: 'Jadalnia — nakryty stół z owocami',
    category: ['wnetrze'],
  },
  {
    thumb: jacuzziNoc,
    full: '/images/gallery-jacuzzi-noc.avif',
    alt: 'In The Woods Supraśl — jacuzzi z podświetleniem nocą',
    caption: 'Jacuzzi z podświetleniem pod gwiazdami',
    category: ['bania'],
  },
  {
    thumb: kuchniaZlew,
    full: '/images/gallery-kuchnia-zlew.avif',
    alt: 'In The Woods Supraśl — kuchnia z niebieskimi talerzami',
    caption: 'Kuchnia z ceglaną ścianą i ceramiką',
    category: ['wnetrze'],
  },
  {
    thumb: salonKominekSzerokie,
    full: '/images/gallery-salon-kominek-szerokie.avif',
    alt: 'In The Woods Supraśl — panorama salonu z kominkiem',
    caption: 'Panorama salonu — kominek i fotele',
    category: ['wnetrze'],
  },
  {
    thumb: polkaCeramika,
    full: '/images/gallery-polka-ceramika.avif',
    alt: 'In The Woods Supraśl — półka z ceramiką i szufladkami',
    caption: 'Detale wnętrza — ceramika i drewno',
    category: ['wnetrze'],
  },
  {
    thumb: balkonLezak,
    full: '/images/gallery-balkon-lezak.avif',
    alt: 'In The Woods Supraśl — balkon z leżakiem i widokiem na las',
    caption: 'Balkon z leżakiem — widok na las',
    category: ['ogrod'],
  },
  {
    thumb: lazienkaUmywalka,
    full: '/images/gallery-lazienka-umywalka.avif',
    alt: 'In The Woods Supraśl — łazienka z podświetlanym lustrem',
    caption: 'Łazienka z podświetlanym lustrem',
    category: ['wnetrze'],
  },
  {
    thumb: prysznicCiemny,
    full: '/images/gallery-prysznic-ciemny.avif',
    alt: 'In The Woods Supraśl — prysznic z deszczownicą',
    caption: 'Prysznic z deszczownicą — ciemne kafle',
    category: ['wnetrze'],
  },
  {
    thumb: sniadanieKrata,
    full: '/images/gallery-sniadanie-krata.avif',
    alt: 'In The Woods Supraśl — śniadanie z tulipanami',
    caption: 'Śniadanie na stole w kratę',
    category: ['wnetrze'],
  },
  {
    thumb: informatorGosci,
    full: '/images/gallery-informator-gosci.avif',
    alt: 'In The Woods Supraśl — informator dla gości',
    caption: 'Informator gości — In The Woods',
    category: ['wnetrze'],
  },
  {
    thumb: salonSchodyKwiaty,
    full: '/images/gallery-salon-schody-kwiaty.avif',
    alt: 'In The Woods Supraśl — salon z kominkiem i kwiatami',
    caption: 'Salon z kominkiem, schodami i kwiatami',
    category: ['wnetrze'],
  },
  {
    thumb: rustykalnaToaletaPolki,
    full: '/images/gallery-rustykalna-toaleta-polki.avif',
    alt: 'In The Woods Supraśl — rustykalna toaleta z drewnianymi półkami',
    caption: 'Rustykalna toaleta z drewnianymi półkami',
    category: ['wnetrze'],
  },
  {
    thumb: kuchniaNiebieskieTalerze,
    full: '/images/gallery-kuchnia-niebieskie-talerze.avif',
    alt: 'In The Woods Supraśl — kuchnia z niebieskimi talerzami',
    caption: 'Kuchnia — niebieskie talerze i drewno',
    category: ['wnetrze'],
  },
  {
    thumb: wiataLesna,
    full: '/images/gallery-wiata-lesna.avif',
    alt: 'In The Woods Supraśl — leśna wiata w okolicy',
    caption: 'Leśna wiata — okolica domu',
    category: ['okolica'],
  },
  {
    thumb: tablicaSzurakowo,
    full: '/images/gallery-tablica-szurakowo.avif',
    alt: 'In The Woods Supraśl — tablica rezerwatu Szurakowo zimą',
    caption: 'Rezerwat Szurakowo — zimowa atrakcja',
    category: ['okolica'],
  },
  {
    thumb: ramkiWnetrze,
    full: '/images/gallery-ramki-wnetrze.avif',
    alt: 'In The Woods Supraśl — galeria ramek na ścianie',
    caption: 'Detale wystroju — ramki na ścianie',
    category: ['wnetrze'],
  },
  {
    thumb: salonFoteleSchody,
    full: '/images/gallery-salon-fotele-schody.avif',
    alt: 'In The Woods Supraśl — salon z fotelami i schodami',
    caption: 'Salon — fotele, schody i kominek',
    category: ['wnetrze'],
  },
  {
    thumb: jadalniaKacik,
    full: '/images/gallery-jadalnia-kacik.avif',
    alt: 'In The Woods Supraśl — kącik jadalniany przy kominku',
    caption: 'Kącik jadalniany przy kominku',
    category: ['wnetrze'],
  },
  {
    thumb: poddaszeFotel,
    full: '/images/gallery-poddasze-fotel.avif',
    alt: 'In The Woods Supraśl — poddasze z biblioteką i fotelem',
    caption: 'Poddasze — strefa relaksu z biblioteką',
    category: ['wnetrze'],
  },
  {
    thumb: wejscieTaras,
    full: '/images/gallery-wejscie-taras.avif',
    alt: 'In The Woods Supraśl — wejście na taras i schody',
    caption: 'Wejście na taras — widok zewnętrzny',
    category: ['ogrod'],
  },
  {
    thumb: domOgrodPanorama,
    full: '/images/gallery-dom-ogrod-panorama.avif',
    alt: 'In The Woods Supraśl — panorama domu i ogrodu',
    caption: 'Panorama domu z czerwonym dachem',
    category: ['ogrod'],
  },
  {
    thumb: piecKaflowyZblizenie,
    full: '/images/gallery-piec-kaflowy-zblizenie.avif',
    alt: 'In The Woods Supraśl — zbliżenie na piec kaflowy',
    caption: 'Piec kaflowy — rustykalne detale kuchni',
    category: ['wnetrze'],
  },
  {
    thumb: sypialniaZieloneZaslony,
    full: '/images/gallery-sypialnia-zielone-zaslony.avif',
    alt: 'In The Woods Supraśl — sypialnia z zielonymi zasłonami',
    caption: 'Sypialnia z zielonymi zasłonami',
    category: ['wnetrze'],
  },
  {
    thumb: konneZnak,
    full: '/images/gallery-konne-znak.avif',
    alt: 'In The Woods Supraśl — znak kierunkowy w lesie',
    caption: 'Droga do Konnych — okolica domu',
    category: ['okolica'],
  },
  {
    thumb: jadalniaTulipanyZblizenie,
    full: '/images/gallery-jadalnia-tulipany-zblizenie.avif',
    alt: 'In The Woods Supraśl — tulipany w jadalni',
    caption: 'Tulipany w jadalni — detale wystroju',
    category: ['wnetrze'],
  },
  {
    thumb: tarasSofaWejscie,
    full: '/images/gallery-taras-sofa-wejscie.avif',
    alt: 'In The Woods Supraśl — sofa na tarasie przy wejściu',
    caption: 'Sofa na tarasie — relaks na świeżym powietrzu',
    category: ['ogrod'],
  },
];

const INITIAL_COUNT = 12;

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? allImages
      : allImages.filter((img) => img.category.includes(activeCategory));

  const displayImages = showAll ? filteredImages : filteredImages.slice(0, INITIAL_COUNT);

  const openLightbox = (displayIndex: number) => {
    // Map display index to filtered array index
    const img = displayImages[displayIndex];
    const realIndex = filteredImages.indexOf(img);
    setLightboxIndex(realIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const navigate = useCallback(
    (dir: number) => {
      if (lightboxIndex === null) return;
      const next = (lightboxIndex + dir + filteredImages.length) % filteredImages.length;
      setLightboxIndex(next);
    },
    [lightboxIndex, filteredImages.length]
  );

  // ESC + arrow key support
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, navigate]);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  return (
    <section id="galeria" className="section-padding bg-background">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-10 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Galeria
          </p>
          <h2 className="section-title">Zobacz In The Woods</h2>
          <p className="section-subtitle mx-auto">
            Autentyczne zdjęcia naszego <strong>domu z bali na wyłączność</strong> — wnętrza,
            ruska bania, ogrodzony ogród i okolica w Puszczy Knyszyńskiej.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {displayImages.map((img, i) => (
            <button
              key={`${activeCategory}-${i}`}
              onClick={() => openLightbox(i)}
              className="overflow-hidden group rounded-lg cursor-pointer relative aspect-[3/2]"
              aria-label={`Otwórz zdjęcie: ${img.alt}`}
            >
              <img
                src={img.thumb}
                srcSet={img.srcSet}
                sizes={img.srcSet ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw' : undefined}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading={i < 3 ? 'eager' : 'lazy'}
                fetchPriority={i < 3 ? 'high' : undefined}
                decoding="async"
                width="600"
                height="400"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              {/* Caption overlay on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-sans">{img.caption}</p>
              </div>
            </button>
          ))}
        </div>

        {!showAll && filteredImages.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 btn-outline border-border text-foreground hover:bg-secondary"
            >
              <Camera className="w-4 h-4" />
              Zobacz więcej ({filteredImages.length} zdjęć)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center animate-in fade-in duration-200"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Powiększone zdjęcie galerii"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
            aria-label="Zamknij galerię (ESC)"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10 p-2"
            aria-label="Poprzednie zdjęcie"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10 p-2"
            aria-label="Następne zdjęcie"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-12 relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[lightboxIndex].full}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain mx-auto rounded"
              decoding="async"
            />
            {/* Caption overlay at the bottom of the image */}
            <div className="absolute bottom-0 left-12 right-12 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b">
              <p className="text-white text-base font-sans">
                {filteredImages[lightboxIndex].caption}
              </p>
              <p className="text-white/50 text-xs mt-1 font-sans">
                {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
