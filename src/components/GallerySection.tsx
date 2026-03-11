import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import jacuzziNight from '@/assets/jacuzzi-night.jpg';
import winterCabin from '@/assets/winter-cabin-real.jpg';
import winterGolden from '@/assets/winter-cabin-golden.jpg';
import terracePorch from '@/assets/terrace-porch.jpg';
import terraceBreakfast from '@/assets/terrace-breakfast.jpg';
import kitchenDining from '@/assets/kitchen-dining.jpg';
import winterForest from '@/assets/winter-forest.jpg';
import exteriorMain from '@/assets/exterior-main.jpg';
import interiorImg from '@/assets/interior-living.webp';
import bedroomImg from '@/assets/bedroom.jpg';
import kitchenTraditional from '@/assets/kitchen-traditional.jpg';

const images = [
  { src: jacuzziNight, alt: 'Ruska bania nocą — prywatne SPA', className: 'col-span-2 row-span-2' },
  { src: kitchenDining, alt: 'Drewniana jadalnia z nakrytym stołem', className: 'col-span-1 row-span-1' },
  { src: terracePorch, alt: 'Taras z kanapą w otoczeniu lasu', className: 'col-span-1 row-span-1' },
  { src: kitchenTraditional, alt: 'Tradycyjna kuchnia z ceramiką', className: 'col-span-1 row-span-1' },
  { src: terraceBreakfast, alt: 'Śniadanie na tarasie w słońcu', className: 'col-span-1 row-span-1' },
  { src: winterGolden, alt: 'Chata w złotym zimowym świetle', className: 'col-span-2 row-span-1' },
  { src: interiorImg, alt: 'Salon z kominkiem', className: 'col-span-1 row-span-1' },
  { src: bedroomImg, alt: 'Sypialnia z dużym łóżkiem', className: 'col-span-1 row-span-1' },
  { src: exteriorMain, alt: 'Widok na chatę z ogrodu', className: 'col-span-1 row-span-1' },
  { src: winterCabin, alt: 'Chata w śnieżnej scenerii', className: 'col-span-1 row-span-1' },
  { src: winterForest, alt: 'Zimowy las Puszczy Knyszyńskiej', className: 'col-span-1 row-span-1' },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden group ${img.className}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
