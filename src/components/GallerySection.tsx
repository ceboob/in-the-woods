import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

// Main gallery grid images (existing real photos)
import jacuzziNight from '@/assets/jacuzzi-night.webp';
import winterCabin from '@/assets/winter-cabin-real.webp';
import terracePorch from '@/assets/terrace-porch.webp';
import terraceBreakfast from '@/assets/terrace-breakfast.webp';
import kitchenDining from '@/assets/kitchen-dining.webp';
import exteriorMain from '@/assets/exterior-main.webp';
import interiorImg from '@/assets/interior-living.webp';
import bedroomImg from '@/assets/bedroom.jpg';
import kitchenTraditional from '@/assets/kitchen-traditional.webp';
import livingFireplace from '@/assets/living-fireplace.webp';
import kitchenBrick from '@/assets/kitchen-brick.webp';
import detailShelf from '@/assets/detail-shelf.webp';
import bathroom from '@/assets/bathroom.webp';
import heroCabin from '@/assets/hero-cabin.webp';
import cabinDayGarden from '@/assets/cabin-day-garden.webp';

// New gallery thumbnails from archive
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
import ogniskoDziecko from '@/assets/gallery-ognisko-dziecko-thumb.webp';
import ogniskoDzieci from '@/assets/gallery-ognisko-dzieci-thumb.webp';
import foteleVintage from '@/assets/gallery-fotele-vintage-thumb.webp';
import altanaPies from '@/assets/gallery-altana-pies-thumb.webp';

interface GalleryImage {
  thumb: string;
  full: string;
  alt: string;
  className?: string;
}

const mainImages: GalleryImage[] = [
  { thumb: jacuzziNight, full: '/images/jacuzzi-night.jpg', alt: 'Ruska bania z jacuzzi pod gwiazdami — noclegi Supraśl, In The Woods', className: 'col-span-2 row-span-2' },
  { thumb: livingFireplace, full: '/images/living-fireplace.jpg', alt: 'Salon z kominkiem i drewnianym wnętrzem — dom na wynajem Supraśl' },
  { thumb: terracePorch, full: '/images/terrace-porch.jpg', alt: 'Taras z sofą w otoczeniu Puszczy Knyszyńskiej — weekend Supraśl' },
  { thumb: kitchenBrick, full: '/images/kitchen-brick.jpg', alt: 'Kuchnia z ceglanym piecem i ceramiką — wnętrze chaty Supraśl' },
  { thumb: terraceBreakfast, full: '/images/terrace-breakfast.jpg', alt: 'Śniadanie na tarasie z widokiem na las — In The Woods Supraśl' },
  { thumb: cabinDayGarden, full: '/images/hero-cabin.jpg', alt: 'Chata z ogrodem w dziennym świetle — dom w lesie Puszcza Knyszyńska', className: 'col-span-2' },
  { thumb: interiorImg, full: '/images/interior-living.webp', alt: 'Przytulny salon z drewnianymi belkami — dom w lesie Supraśl' },
  { thumb: bedroomImg, full: '/images/bedroom.jpg', alt: 'Sypialnia z dużym łóżkiem — komfortowy nocleg Supraśl' },
  { thumb: detailShelf, full: '/images/interior-living.webp', alt: 'Ręcznie rzeźbiona drewniana półka z ceramiką — detale In The Woods' },
  { thumb: bathroom, full: '/images/bathroom.jpg', alt: 'Nowoczesna łazienka z kabiną prysznicową — wynajem domu Supraśl' },
  { thumb: heroCabin, full: '/images/hero-cabin.jpg', alt: 'Widok na chatę z dalekiej perspektywy — dom w Puszczy Knyszyńskiej' },
  { thumb: kitchenDining, full: '/images/kitchen-dining.jpg', alt: 'Jadalnia z kuchnią w drewnianym domu — In The Woods Supraśl' },
  { thumb: kitchenTraditional, full: '/images/kitchen-dining.jpg', alt: 'Tradycyjna kuchnia z ceramiką — autentyczne wnętrze chaty Supraśl' },
  { thumb: exteriorMain, full: '/images/exterior-main.jpg', alt: 'Widok na chatę z ogrodu — dom w Puszczy Knyszyńskiej blisko Supraśla' },
];

const extraImages: GalleryImage[] = [
  { thumb: salonKominek, full: '/images/gallery-salon-kominek.webp', alt: 'Salon z kominkiem i drewnianymi schodami — In The Woods wnętrze' },
  { thumb: salonPanorama, full: '/images/gallery-salon-panorama.webp', alt: 'Panorama salonu z fotelem i kominkiem — dom na wynajem Supraśl' },
  { thumb: salonFotele, full: '/images/gallery-salon-fotele.webp', alt: 'Wygodne fotele przy kominku — wieczór w chacie Supraśl' },
  { thumb: sypialniaGorna, full: '/images/gallery-sypialnia-gorna.webp', alt: 'Sypialnia na poddaszu z widokiem na las — nocleg Supraśl' },
  { thumb: kuchniaCeramika, full: '/images/gallery-kuchnia-ceramika.webp', alt: 'Kuchnia z ceglanym piecem i owocami — In The Woods kuchnia' },
  { thumb: jadalniaSniadanie, full: '/images/gallery-jadalnia-sniadanie.webp', alt: 'Jadalnia ze śniadaniem — poranek w chacie Puszcza Knyszyńska' },
  { thumb: jadalniaSerwis, full: '/images/gallery-jadalnia-serwis.webp', alt: 'Nakryty stół z domowym jedzeniem — śniadanie Supraśl' },
  { thumb: jadalniaKwiaty, full: '/images/gallery-jadalnia-kwiaty.webp', alt: 'Jadalnia z tulipanami i drewnianymi meblami — dom Supraśl' },
  { thumb: tarasSofa, full: '/images/gallery-taras-sofa.webp', alt: 'Taras z sofą i trawami pampasowymi — relaks w Puszczy Knyszyńskiej' },
  { thumb: tarasGrill, full: '/images/gallery-taras-grill.webp', alt: 'Obiad na tarasie z grillem — jedzenie na świeżym powietrzu Supraśl' },
  { thumb: toaletaDrewniana, full: '/images/gallery-toaleta-drewniana.webp', alt: 'Drewniana toaleta w stylu rustykalnym — In The Woods łazienka' },
  { thumb: lazienkaNowa, full: '/images/gallery-lazienka-nowoczesna.webp', alt: 'Nowoczesna łazienka z kabiną — komfort w chacie Supraśl' },
  { thumb: domLato, full: '/images/gallery-dom-lato.webp', alt: 'Dom z czerwonym dachem latem — In The Woods widok z ogrodu' },
  { thumb: ogrodZielen, full: '/images/gallery-ogrod-zielen.webp', alt: 'Zielony ogród z hamakiem — teren In The Woods Supraśl' },
  { thumb: baniaFront, full: '/images/gallery-bania-front.webp', alt: 'Ruska bania z drewnianą obudową — prywatne SPA Supraśl' },
  { thumb: baniaDom, full: '/images/gallery-bania-dom.webp', alt: 'Bania na tle chaty z czerwonym dachem — In The Woods ogród' },
  { thumb: baniaOgrod, full: '/images/gallery-bania-ogrod.webp', alt: 'Bania w ogrodzie z widokiem na las — relaks Puszcza Knyszyńska' },
  { thumb: dabPuszcza, full: '/images/gallery-dab-puszcza.webp', alt: 'Stary dąb w Puszczy Knyszyńskiej — natura blisko Supraśla' },
  { thumb: tarasPies, full: '/images/gallery-taras-pies-wieczor.webp', alt: 'Pies na tarasie przy świecach — wieczór w In The Woods' },
  { thumb: tarasRelaks, full: '/images/gallery-taras-relaks.webp', alt: 'Relaks na tarasie z kawą — letni wieczór w Puszczy Knyszyńskiej' },
  { thumb: ogniskoDziecko, full: '/images/gallery-ognisko-dziecko.webp', alt: 'Dziecko przy ognisku — rodzinny weekend w In The Woods' },
  { thumb: ogniskoDzieci, full: '/images/gallery-ognisko-dzieci.webp', alt: 'Dzieci przy ognisku z widokiem na chatę — rodzinne noclegi Supraśl' },
  { thumb: foteleVintage, full: '/images/gallery-fotele-vintage.webp', alt: 'Zabytkowe fotele w salonie — klimatyczne wnętrze chaty Supraśl' },
  { thumb: altanaPies, full: '/images/gallery-altana-pies.webp', alt: 'Altana z nakrytym stołem i pieskiem — jedzenie na świeżym powietrzu' },
];

const allImages = [...mainImages, ...extraImages];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const displayImages = showAll ? allImages : mainImages;

  const openLightbox = (globalIndex: number) => {
    setLightboxIndex(globalIndex);
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
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Galeria</p>
          <h2 className="section-title">Obrazy mówią więcej</h2>
          <p className="section-subtitle mx-auto">
            Autentyczne zdjęcia naszego domu, wnętrz, ogrodu i okolicy — tak naprawdę wygląda In The Woods.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {displayImages.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(showAll ? i : i)}
              className={`overflow-hidden group rounded-lg cursor-pointer relative ${img.className || 'col-span-1 row-span-1'}`}
              aria-label={`Otwórz zdjęcie: ${img.alt}`}
            >
              <img
                src={img.thumb}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/20 transition-colors duration-300" />
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-graphite/95 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Powiększone zdjęcie galerii"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-cream/80 hover:text-cream z-10 p-2"
            aria-label="Zamknij galerię"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/80 hover:text-cream z-10 p-2"
            aria-label="Poprzednie zdjęcie"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/80 hover:text-cream z-10 p-2"
            aria-label="Następne zdjęcie"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-12" onClick={(e) => e.stopPropagation()}>
            <img
              src={allImages[lightboxIndex].full}
              alt={allImages[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            <p className="text-cream/70 text-sm text-center mt-4 font-sans">
              {allImages[lightboxIndex].alt}
              <span className="ml-3 text-cream/40">{lightboxIndex + 1} / {allImages.length}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
