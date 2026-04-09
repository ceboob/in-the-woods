import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

import jacuzziNight from '@/assets/jacuzzi-night.webp';

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
import lazienkaPrysznic from '@/assets/gallery-lazienka-prysznic-thumb.avif';
import sypialniaBalkon from '@/assets/gallery-sypialnia-balkon-thumb.avif';
import tarasObiad from '@/assets/gallery-taras-obiad-thumb.avif';
import konneDroga from '@/assets/gallery-konne-droga-thumb.avif';
import toaletaJasna from '@/assets/gallery-toaleta-jasna-thumb.avif';
import kominekZblizenie from '@/assets/gallery-kominek-zblizenie-thumb.avif';
import domSchody from '@/assets/gallery-dom-schody-thumb.avif';
import ogniskoNocne from '@/assets/gallery-ognisko-nocne-thumb.avif';
import drogaLesnaPlot from '@/assets/gallery-droga-lesna-plot-thumb.avif';
import kuchniaCegla from '@/assets/gallery-kuchnia-cegla-thumb.avif';
import jadalniaOwoce from '@/assets/gallery-jadalnia-owoce-thumb.avif';
import jacuzziNoc from '@/assets/gallery-jacuzzi-noc-thumb.avif';
import kuchniaZlew from '@/assets/gallery-kuchnia-zlew-thumb.avif';
import salonKominekSzerokie from '@/assets/gallery-salon-kominek-szerokie-thumb.avif';
import polkaCeramika from '@/assets/gallery-polka-ceramika-thumb.avif';
import balkonLezak from '@/assets/gallery-balkon-lezak-thumb.avif';
import lazienkaUmywalka from '@/assets/gallery-lazienka-umywalka-thumb.avif';
import prysznicCiemny from '@/assets/gallery-prysznic-ciemny-thumb.avif';
import sniadanieKrata from '@/assets/gallery-sniadanie-krata-thumb.avif';
import informatorGosci from '@/assets/gallery-informator-gosci-thumb.avif';
import salonSchodyKwiaty from '@/assets/gallery-salon-schody-kwiaty-thumb.avif';
import rustykalnaToaletaPolki from '@/assets/gallery-rustykalna-toaleta-polki-thumb.avif';
import kuchniaNiebieskieTalerze from '@/assets/gallery-kuchnia-niebieskie-talerze-thumb.avif';
import wiataLesna from '@/assets/gallery-wiata-lesna-thumb.avif';
import tablicaSzurakowo from '@/assets/gallery-tablica-szurakowo-thumb.avif';
import ramkiWnetrze from '@/assets/gallery-ramki-wnetrze-thumb.avif';
import salonFoteleSchody from '@/assets/gallery-salon-fotele-schody-thumb.avif';
import jadalniaKacik from '@/assets/gallery-jadalnia-kacik-thumb.avif';
import poddaszeFotel from '@/assets/gallery-poddasze-fotel-thumb.avif';
import wejscieTaras from '@/assets/gallery-wejscie-taras-thumb.avif';
import domOgrodPanorama from '@/assets/gallery-dom-ogrod-panorama-thumb.avif';
import piecKaflowyZblizenie from '@/assets/gallery-piec-kaflowy-zblizenie-thumb.avif';
import sypialniaZieloneZaslony from '@/assets/gallery-sypialnia-zielone-zaslony-thumb.avif';
import konneZnak from '@/assets/gallery-konne-znak-thumb.avif';
import jadalniaTulipanyZblizenie from '@/assets/gallery-jadalnia-tulipany-zblizenie-thumb.avif';
import tarasSofaWejscie from '@/assets/gallery-taras-sofa-wejscie-thumb.avif';

interface GalleryImage {
  thumb: string;
  full: string;
  alt: string;
  className?: string;
}

const heroImages: GalleryImage[] = [
  {
    thumb: jacuzziNight,
    full: '/images/jacuzzi-night.jpg',
    alt: 'Ruska bania z jacuzzi pod gwiazdami — noclegi Supraśl, In The Woods',
    className: 'col-span-2 row-span-2',
  },
  {
    thumb: salonKominek,
    full: '/images/gallery-salon-kominek.webp',
    alt: 'Salon z kominkiem i drewnianymi schodami — In The Woods wnętrze',
  },
  {
    thumb: domLato,
    full: '/images/gallery-dom-lato.webp',
    alt: 'Dom z czerwonym dachem latem — In The Woods widok z ogrodu',
  },
  {
    thumb: sypialniaBalkon,
    full: '/images/gallery-sypialnia-balkon.avif',
    alt: 'Drewniana sypialnia z wyjściem na balkon i widokiem na las — nocleg Supraśl',
  },
  {
    thumb: jadalniaSniadanie,
    full: '/images/gallery-jadalnia-sniadanie.webp',
    alt: 'Jadalnia ze śniadaniem — poranek w chacie Puszcza Knyszyńska',
  },
  {
    thumb: baniaFront,
    full: '/images/gallery-bania-front.webp',
    alt: 'Ruska bania z drewnianą obudową — prywatne SPA Supraśl',
    className: 'col-span-2',
  },
  {
    thumb: tarasObiad,
    full: '/images/gallery-taras-obiad.avif',
    alt: 'Obiad na tarasie wśród zieleni — wypoczynek na świeżym powietrzu blisko Supraśla',
  },
  {
    thumb: kuchniaCeramika,
    full: '/images/gallery-kuchnia-ceramika.webp',
    alt: 'Kuchnia z ceglanym piecem i owocami — In The Woods kuchnia',
  },
  {
    thumb: lazienkaPrysznic,
    full: '/images/gallery-lazienka-prysznic.avif',
    alt: 'Nowoczesna łazienka z prysznicem — komfortowy pobyt w In The Woods',
  },
  {
    thumb: konneDroga,
    full: '/images/gallery-konne-droga.avif',
    alt: 'Leśna droga w stronę Konnych — spokojna okolica domu w Puszczy Knyszyńskiej',
  },
  {
    thumb: salonPanorama,
    full: '/images/gallery-salon-panorama.webp',
    alt: 'Panorama salonu z fotelem i kominkiem — dom na wynajem Supraśl',
  },
  {
    thumb: ogniskoDzieci,
    full: '/images/gallery-ognisko-dzieci.webp',
    alt: 'Dzieci przy ognisku z widokiem na chatę — rodzinne noclegi Supraśl',
  },
];

const moreImages: GalleryImage[] = [
  {
    thumb: salonFotele,
    full: '/images/gallery-salon-fotele.webp',
    alt: 'Wygodne fotele przy kominku — wieczór w chacie Supraśl',
  },
  {
    thumb: jadalniaSerwis,
    full: '/images/gallery-jadalnia-serwis.webp',
    alt: 'Nakryty stół z domowym jedzeniem — śniadanie Supraśl',
  },
  {
    thumb: jadalniaKwiaty,
    full: '/images/gallery-jadalnia-kwiaty.webp',
    alt: 'Jadalnia z tulipanami i drewnianymi meblami — dom Supraśl',
  },
  {
    thumb: toaletaDrewniana,
    full: '/images/gallery-toaleta-drewniana.webp',
    alt: 'Drewniana toaleta w stylu rustykalnym — In The Woods łazienka',
  },
  {
    thumb: lazienkaNowa,
    full: '/images/gallery-lazienka-nowoczesna.webp',
    alt: 'Nowoczesna łazienka z kabiną — komfort w chacie Supraśl',
  },
  {
    thumb: baniaDom,
    full: '/images/gallery-bania-dom.webp',
    alt: 'Bania na tle chaty z czerwonym dachem — In The Woods ogród',
  },
  {
    thumb: baniaOgrod,
    full: '/images/gallery-bania-ogrod.webp',
    alt: 'Bania w ogrodzie z widokiem na las — relaks Puszcza Knyszyńska',
  },
  {
    thumb: dabPuszcza,
    full: '/images/gallery-dab-puszcza.webp',
    alt: 'Stary dąb w Puszczy Knyszyńskiej — natura blisko Supraśla',
  },
  {
    thumb: drogaLesna,
    full: '/images/gallery-droga-lesna.webp',
    alt: 'Leśna droga w Puszczy Knyszyńskiej — okolica In The Woods',
  },
  {
    thumb: tarasPies,
    full: '/images/gallery-taras-pies-wieczor.webp',
    alt: 'Pies na tarasie przy świecach — wieczór w In The Woods',
  },
  {
    thumb: tarasRelaks,
    full: '/images/gallery-taras-relaks.webp',
    alt: 'Relaks na tarasie z kawą — letni wieczór w Puszczy Knyszyńskiej',
  },
  {
    thumb: toaletaJasna,
    full: '/images/gallery-toaleta-jasna.avif',
    alt: 'Jasna łazienka z drewnianym wykończeniem — rustykalne wnętrze domu w lesie',
  },
  {
    thumb: kominekZblizenie,
    full: '/images/gallery-kominek-zblizenie.avif',
    alt: 'Zbliżenie na rozpalony kominek — wieczorny klimat In The Woods',
  },
  {
    thumb: domSchody,
    full: '/images/gallery-dom-schody.avif',
    alt: 'Widok na drewniany dom i schody wejściowe — autentyczny charakter obiektu',
  },
  {
    thumb: ogniskoNocne,
    full: '/images/gallery-ognisko-nocne.avif',
    alt: 'Nocne ognisko przy altanie — wieczór w ogrodzie In The Woods',
  },
  {
    thumb: drogaLesnaPlot,
    full: '/images/gallery-droga-lesna-plot.avif',
    alt: 'Leśna droga przy ogrodzeniu — spokojna okolica domu w Puszczy Knyszyńskiej',
  },
  {
    thumb: kuchniaCegla,
    full: '/images/gallery-kuchnia-cegla.avif',
    alt: 'Kuchnia z piecem kaflowym i ceglaną ścianą — rustykalne wnętrze domu',
  },
  {
    thumb: jadalniaOwoce,
    full: '/images/gallery-jadalnia-owoce.avif',
    alt: 'Jadalnia z owocami i nakrytym stołem — rodzinne śniadanie w domu w lesie',
  },
  {
    thumb: jacuzziNoc,
    full: '/images/gallery-jacuzzi-noc.avif',
    alt: 'Jacuzzi z niebieskim podświetleniem nocą — prywatne SPA w ogrodzie In The Woods',
  },
  {
    thumb: kuchniaZlew,
    full: '/images/gallery-kuchnia-zlew.avif',
    alt: 'Kuchnia z ceglaną ścianą, niebieskimi talerzami i owocami — dom w Puszczy Knyszyńskiej',
  },
  {
    thumb: salonKominekSzerokie,
    full: '/images/gallery-salon-kominek-szerokie.avif',
    alt: 'Panorama salonu z kominkiem i fotelami — przytulne wnętrze domu Supraśl',
  },
  {
    thumb: polkaCeramika,
    full: '/images/gallery-polka-ceramika.avif',
    alt: 'Drewniana półka z ceramiką i szufladkami — detale wnętrza In The Woods',
  },
  {
    thumb: balkonLezak,
    full: '/images/gallery-balkon-lezak.avif',
    alt: 'Balkon z leżakiem i widokiem na las — wypoczynek na świeżym powietrzu',
  },
  {
    thumb: lazienkaUmywalka,
    full: '/images/gallery-lazienka-umywalka.avif',
    alt: 'Nowoczesna łazienka z podświetlanym lustrem — komfort w domu w lesie',
  },
  {
    thumb: prysznicCiemny,
    full: '/images/gallery-prysznic-ciemny.avif',
    alt: 'Prysznic z deszczownicą w ciemnych kaflach — elegancka łazienka In The Woods',
  },
  {
    thumb: sniadanieKrata,
    full: '/images/gallery-sniadanie-krata.avif',
    alt: 'Śniadanie na stole w kratę z tulipanami — poranek w chacie Supraśl',
  },
  {
    thumb: informatorGosci,
    full: '/images/gallery-informator-gosci.avif',
    alt: 'Informator dla gości na drewnianym stoliku — In The Woods branding',
  },
  {
    thumb: salonSchodyKwiaty,
    full: '/images/gallery-salon-schody-kwiaty.avif',
    alt: 'Salon z kominkiem, schodami i kwiatami — klimatyczne wnętrze domu w Puszczy',
  },
  {
    thumb: rustykalnaToaletaPolki,
    full: '/images/gallery-rustykalna-toaleta-polki.avif',
    alt: 'Rustykalna toaleta z drewnianymi półkami — charakterystyczne wnętrze domu w lesie',
  },
  {
    thumb: kuchniaNiebieskieTalerze,
    full: '/images/gallery-kuchnia-niebieskie-talerze.avif',
    alt: 'Kuchnia z niebieskimi talerzami i drewnianą zabudową — autentyczne wnętrze obiektu',
  },
  {
    thumb: wiataLesna,
    full: '/images/gallery-wiata-lesna.avif',
    alt: 'Leśne wiaty i okolica obiektu — spokojny zakątek blisko Supraśla',
  },
  {
    thumb: tablicaSzurakowo,
    full: '/images/gallery-tablica-szurakowo.avif',
    alt: 'Tablica rezerwatu Szurakowo w zimowym lesie — atrakcje w okolicy Supraśla',
  },
  {
    thumb: ramkiWnetrze,
    full: '/images/gallery-ramki-wnetrze.avif',
    alt: 'Galeria ramek i drewniana komoda — detale wystroju In The Woods',
  },
  {
    thumb: salonFoteleSchody,
    full: '/images/gallery-salon-fotele-schody.avif',
    alt: 'Salon z fotelami, schodami i kominkiem — przytulna strefa wypoczynku',
  },
  {
    thumb: jadalniaKacik,
    full: '/images/gallery-jadalnia-kacik.avif',
    alt: 'Kącik jadalniany przy kominku i oknie — ciepłe wnętrze domu w lesie',
  },
  {
    thumb: poddaszeFotel,
    full: '/images/gallery-poddasze-fotel.avif',
    alt: 'Poddasze z biblioteką, fotelem i telewizorem — dodatkowa strefa relaksu',
  },
  {
    thumb: wejscieTaras,
    full: '/images/gallery-wejscie-taras.avif',
    alt: 'Wejście na taras i schody do domu — zewnętrzny widok obiektu In The Woods',
  },
  {
    thumb: domOgrodPanorama,
    full: '/images/gallery-dom-ogrod-panorama.avif',
    alt: 'Panorama domu i ogrodu z czerwonym dachem — pełny widok obiektu wśród drzew',
  },
  {
    thumb: piecKaflowyZblizenie,
    full: '/images/gallery-piec-kaflowy-zblizenie.avif',
    alt: 'Zbliżenie na kaflowy piec i ceglaną ścianę — rustykalne detale kuchni',
  },
  {
    thumb: sypialniaZieloneZaslony,
    full: '/images/gallery-sypialnia-zielone-zaslony.avif',
    alt: 'Sypialnia z zielonymi zasłonami i widokiem na ogród — nocleg w Puszczy Knyszyńskiej',
  },
  {
    thumb: konneZnak,
    full: '/images/gallery-konne-znak.avif',
    alt: 'Znak kierunkowy na leśnej drodze w okolicy Konnych — okolica In The Woods Supraśl',
  },
  {
    thumb: jadalniaTulipanyZblizenie,
    full: '/images/gallery-jadalnia-tulipany-zblizenie.avif',
    alt: 'Zbliżenie na tulipany w jadalni — detale wystroju domu w lesie Supraśl',
  },
  {
    thumb: tarasSofaWejscie,
    full: '/images/gallery-taras-sofa-wejscie.avif',
    alt: 'Sofa na tarasie przy wejściu do domu — relaks na świeżym powietrzu In The Woods',
  },
];

const allImages = [...heroImages, ...moreImages];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const displayImages = showAll ? allImages : heroImages;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const navigate = (dir: number) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + dir + allImages.length) % allImages.length;
    setLightboxIndex(next);
  };

  return (
    <section id="galeria" className="section-padding bg-background">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Galeria
          </p>
          <h2 className="section-title">Obrazy mówią więcej</h2>
          <p className="section-subtitle mx-auto">
            Autentyczne zdjęcia naszego domu, wnętrz, ogrodu i okolicy — tak naprawdę wygląda
            In&nbsp;The&nbsp;Woods.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {displayImages.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className={`overflow-hidden group rounded-lg cursor-pointer relative ${img.className || 'col-span-1 row-span-1'}`}
              aria-label={`Otwórz zdjęcie: ${img.alt}`}
            >
              <img
                src={img.thumb}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading={i < 2 ? 'eager' : 'lazy'}
                fetchPriority={i < 2 ? 'high' : undefined}
                decoding="async"
                width="400"
                height="300"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </button>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 btn-outline border-border text-foreground hover:bg-secondary"
            >
              <Camera className="w-4 h-4" />
              Zobacz pełną galerię ({allImages.length} zdjęć)
            </button>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Powiększone zdjęcie galerii"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
            aria-label="Zamknij galerię"
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

          <div className="max-w-5xl max-h-[85vh] px-12" onClick={(e) => e.stopPropagation()}>
            <img
              src={allImages[lightboxIndex].full}
              alt={allImages[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
              decoding="async"
            />
            <p className="text-white/70 text-sm text-center mt-4 font-sans">
              {allImages[lightboxIndex].alt}
              <span className="ml-3 text-white/40">
                {lightboxIndex + 1} / {allImages.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
