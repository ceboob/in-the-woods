import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import jacuzziNight from '@/assets/jacuzzi-night.jpg';
import winterCabin from '@/assets/winter-cabin-real.jpg';
import terracePorch from '@/assets/terrace-porch.jpg';
import terraceBreakfast from '@/assets/terrace-breakfast.jpg';
import kitchenDining from '@/assets/kitchen-dining.jpg';
import exteriorMain from '@/assets/exterior-main.jpg';
import interiorImg from '@/assets/interior-living.webp';
import bedroomImg from '@/assets/bedroom.jpg';
import kitchenTraditional from '@/assets/kitchen-traditional.jpg';
import livingFireplace from '@/assets/living-fireplace.jpg';
import kitchenBrick from '@/assets/kitchen-brick.jpg';
import detailShelf from '@/assets/detail-shelf.jpg';
import bathroom from '@/assets/bathroom.jpg';
import heroCabin from '@/assets/hero-cabin.jpg';
import cabinDayGarden from '@/assets/cabin-day-garden.jpg';

const images = [
  { src: jacuzziNight, alt: 'Ruska bania z jacuzzi pod gwiazdami — noclegi Supraśl, In The Woods', className: 'col-span-2 row-span-2' },
  { src: livingFireplace, alt: 'Salon z kominkiem i drewnianym wnętrzem — dom na wynajem Supraśl', className: 'col-span-1 row-span-1' },
  { src: terracePorch, alt: 'Taras z sofą w otoczeniu Puszczy Knyszyńskiej — weekend Supraśl', className: 'col-span-1 row-span-1' },
  { src: kitchenBrick, alt: 'Kuchnia z ceglanym piecem i ceramiką — wnętrze chaty Supraśl', className: 'col-span-1 row-span-1' },
  { src: terraceBreakfast, alt: 'Śniadanie na tarasie z widokiem na las — In The Woods Supraśl', className: 'col-span-1 row-span-1' },
  { src: cabinDayGarden, alt: 'Chata z ogrodem w dziennym świetle — dom w lesie Puszcza Knyszyńska', className: 'col-span-2 row-span-1' },
  { src: interiorImg, alt: 'Przytulny salon z drewnianymi belkami — dom w lesie Supraśl', className: 'col-span-1 row-span-1' },
  { src: bedroomImg, alt: 'Sypialnia z dużym łóżkiem — komfortowy nocleg Supraśl', className: 'col-span-1 row-span-1' },
  { src: detailShelf, alt: 'Ręcznie rzeźbiona drewniana półka z ceramiką — detale In The Woods', className: 'col-span-1 row-span-1' },
  { src: bathroom, alt: 'Nowoczesna łazienka z kabiną prysznicową — wynajem domu Supraśl', className: 'col-span-1 row-span-1' },
  { src: heroCabin, alt: 'Widok na chatę z dalekiej perspektywy — dom w Puszczy Knyszyńskiej', className: 'col-span-1 row-span-1' },
  { src: kitchenDining, alt: 'Jadalnia z kuchnią w drewnianym domu — In The Woods Supraśl', className: 'col-span-1 row-span-1' },
  { src: kitchenTraditional, alt: 'Tradycyjna kuchnia z ceramiką — autentyczne wnętrze chaty Supraśl', className: 'col-span-1 row-span-1' },
  { src: exteriorMain, alt: 'Widok na chatę z ogrodu — dom w Puszczy Knyszyńskiej blisko Supraśla', className: 'col-span-1 row-span-1' },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="galeria" className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Galeria</p>
          <h2 className="section-title">Obrazy mówią więcej</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <a
              key={i}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              className={`overflow-hidden group rounded-lg cursor-pointer ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
