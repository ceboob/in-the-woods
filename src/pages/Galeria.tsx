import SEOPageLayout from '@/components/SEOPageLayout';
import ImageReveal from '@/components/ImageReveal';
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

const categories = ['Wszystkie', 'Salon', 'Kuchnia i jadalnia', 'Sypialnie', 'Łazienki', 'Taras i ogród', 'Balia ogrodowa z funkcją jacuzzi', 'Okolica'];

const images: GalleryImage[] = [
  // Salon
  { thumb: salonKominek, alt: 'Salon z kominkiem i drewnianymi belkami', category: 'Salon' },
  { thumb: salonPanorama, alt: 'Widok na salon i fotel przy oknie', category: 'Salon' },
  { thumb: salonFotele, alt: 'Fotele ustawione przy kominku', category: 'Salon' },
  { thumb: salonKominekSzerokie, alt: 'Panoramiczny widok na salon z kominkiem', category: 'Salon' },
  { thumb: salonFoteleSchody, alt: 'Fotele w salonie obok drewnianych schodów', category: 'Salon' },
  { thumb: salonSchodyKwiaty, alt: 'Schody i kwiaty w salonie', category: 'Salon' },
  { thumb: kominekZblizenie, alt: 'Zbliżenie na kominek', category: 'Salon' },
  { thumb: polkaCeramika, alt: 'Ceramiczne naczynia na drewnianej półce', category: 'Salon' },
  { thumb: ramkiWnetrze, alt: 'Ramki na ścianie we wnętrzu domu', category: 'Salon' },
  { thumb: poddaszeFotel, alt: 'Fotel na poddaszu przy oknie', category: 'Salon' },
  { thumb: piecKaflowyZblizenie, alt: 'Zbliżenie na piec kaflowy i ceglaną ścianę', category: 'Salon' },
  { thumb: informatorGosci, alt: 'Informator dla gości leżący na stole', category: 'Salon' },

  // Kuchnia i jadalnia
  { thumb: kuchniaCeramika, alt: 'Ceramiczne naczynia w kuchni z płytą kaflową', category: 'Kuchnia i jadalnia' },
  { thumb: kuchniaCegla, alt: 'Kuchnia z ceglaną ścianą i płytą kaflową', category: 'Kuchnia i jadalnia' },
  { thumb: kuchniaZlew, alt: 'Zlew i drewniany blat w kuchni', category: 'Kuchnia i jadalnia' },
  { thumb: kuchniaNiebieskieTalerze, alt: 'Niebieskie talerze w kuchni', category: 'Kuchnia i jadalnia' },
  { thumb: jadalniaSniadanie, alt: 'Śniadanie podane na stole w jadalni', category: 'Kuchnia i jadalnia' },
  { thumb: jadalniaSerwis, alt: 'Zastawa stołowa przygotowana do posiłku', category: 'Kuchnia i jadalnia' },
  { thumb: jadalniaKwiaty, alt: 'Kwiaty na stole w jadalni', category: 'Kuchnia i jadalnia' },
  { thumb: jadalniaOwoce, alt: 'Owoce podane na stole w jadalni', category: 'Kuchnia i jadalnia' },
  { thumb: jadalniaKacik, alt: 'Kącik jadalniany przy kominku', category: 'Kuchnia i jadalnia' },
  { thumb: jadalniaTulipanyZblizenie, alt: 'Tulipany w wazonie na stole', category: 'Kuchnia i jadalnia' },
  { thumb: sniadanieKrata, alt: 'Śniadanie podane na stole przykrytym obrusem w kratę', category: 'Kuchnia i jadalnia' },

  // Sypialnie
  { thumb: sypialniaGorna, alt: 'Sypialnia na piętrze z drewnianymi belkami', category: 'Sypialnie' },
  { thumb: sypialniaBalkon, alt: 'Sypialnia z wyjściem na balkon', category: 'Sypialnie' },
  { thumb: sypialniaZieloneZaslony, alt: 'Sypialnia z zielonymi zasłonami', category: 'Sypialnie' },
  { thumb: balkonLezak, alt: 'Leżak ustawiony na balkonie', category: 'Sypialnie' },

  // Łazienki
  { thumb: lazienkaPrysznic, alt: 'Prysznic w jasnej łazience', category: 'Łazienki' },
  { thumb: lazienkaNowa, alt: 'Kabina prysznicowa w łazience', category: 'Łazienki' },
  { thumb: lazienkaUmywalka, alt: 'Umywalka pod podświetlanym lustrem', category: 'Łazienki' },
  { thumb: prysznicCiemny, alt: 'Prysznic z deszczownicą i ciemnymi płytkami', category: 'Łazienki' },
  { thumb: toaletaDrewniana, alt: 'Toaleta z drewnianymi elementami', category: 'Łazienki' },
  { thumb: toaletaJasna, alt: 'Jasna toaleta z umywalką', category: 'Łazienki' },
  { thumb: rustykalnaToaletaPolki, alt: 'Drewniane półki w toalecie', category: 'Łazienki' },

  // Taras i ogród
  { thumb: tarasGrill, alt: 'Grill na tarasie obok stołu i krzeseł', category: 'Taras i ogród' },
  { thumb: tarasSofa, alt: 'Sofa i stolik na tarasie', category: 'Taras i ogród' },
  { thumb: tarasObiad, alt: 'Posiłek podany na tarasie', category: 'Taras i ogród' },
  { thumb: tarasPies, alt: 'Pies odpoczywający na tarasie', category: 'Taras i ogród' },
  { thumb: tarasRelaks, alt: 'Fotele i stolik na tarasie', category: 'Taras i ogród' },
  { thumb: tarasSofaWejscie, alt: 'Sofa ustawiona przy wejściu na taras', category: 'Taras i ogród' },
  { thumb: wejscieTaras, alt: 'Wejście do domu z tarasu', category: 'Taras i ogród' },
  { thumb: domLato, alt: 'Drewniany dom latem wśród zieleni', category: 'Taras i ogród' },
  { thumb: domSchody, alt: 'Drewniane schody przy wejściu do domu', category: 'Taras i ogród' },
  { thumb: domOgrodPanorama, alt: 'Dom i ogród widziane z tarasu', category: 'Taras i ogród' },
  { thumb: ogrodZielen, alt: 'Zielony ogród przy domu', category: 'Taras i ogród' },
  { thumb: ogniskoDzieci, alt: 'Dzieci siedzące przy ognisku', category: 'Taras i ogród' },
  { thumb: ogniskoNocne, alt: 'Ognisko płonące po zmroku przy altanie', category: 'Taras i ogród' },

  // Balia ogrodowa z funkcją jacuzzi
  { thumb: jacuzziNight, alt: 'Podświetlona balia ogrodowa wieczorem', category: 'Balia ogrodowa z funkcją jacuzzi' },
  { thumb: gardenTubFront, alt: 'Balia ogrodowa widziana od frontu', category: 'Balia ogrodowa z funkcją jacuzzi' },
  { thumb: gardenTubHouse, alt: 'Balia ogrodowa obok drewnianego domu', category: 'Balia ogrodowa z funkcją jacuzzi' },
  { thumb: gardenTubGarden, alt: 'Balia ogrodowa otoczona zielenią', category: 'Balia ogrodowa z funkcją jacuzzi' },
  { thumb: jacuzziNoc, alt: 'Balia z podświetleniem po zmroku', category: 'Balia ogrodowa z funkcją jacuzzi' },

  // Okolica
  { thumb: drogaLesna, alt: 'Leśna droga biegnąca między drzewami', category: 'Okolica' },
  { thumb: drogaLesnaPlot, alt: 'Leśna droga wzdłuż ogrodzenia', category: 'Okolica' },
  { thumb: konneDroga, alt: 'Droga do miejscowości Konne', category: 'Okolica' },
  { thumb: konneZnak, alt: 'Znak drogowy w miejscowości Konne', category: 'Okolica' },
  { thumb: dabPuszcza, alt: 'Rozłożysty dąb w lesie', category: 'Okolica' },
  { thumb: wiataLesna, alt: 'Drewniana wiata w lesie', category: 'Okolica' },
  { thumb: tablicaSzurakowo, alt: 'Tablica informacyjna przy szlaku w Szurakowie', category: 'Okolica' },
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
      title="Galeria zdjęć domku w lesie | In The Woods Supraśl"
      description="Galeria In The Woods: salon z kominkiem, kuchnia, sypialnie, ogród i balia ogrodowa z funkcją jacuzzi. Zobacz domek w Puszczy Knyszyńskiej."
      breadcrumbName="Galeria"
      ogImage="https://www.suprasl.online/images/hero-cabin.jpg"
    >
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Galeria zdjęć domu i jego wyposażenia
      </h1>
      <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
        Zobacz zdjęcia salonu, kuchni, sypialni, ogrodu i balii ogrodowej z funkcją jacuzzi.
        Kliknij kategorię, aby filtrować obrazy.
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
             width="800"
             height="600"
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
