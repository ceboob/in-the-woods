import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import exteriorMain from '@/assets/exterior-main.jpg';
import interiorImg from '@/assets/interior-living.webp';
import baniaImg from '@/assets/bania-relax.jpg';
import bedroomImg from '@/assets/bedroom.jpg';
import terraceImg from '@/assets/outdoor-terrace.jpg';
import kitchenImg from '@/assets/kitchen.jpg';
import forestImg from '@/assets/forest-nature.jpg';
import exteriorSide from '@/assets/exterior-side.webp';
import bedroom2 from '@/assets/bedroom2.webp';
import bedroom3 from '@/assets/bedroom3.webp';
import kitchenInterior from '@/assets/kitchen-interior.jpg';
import gardenFirepit from '@/assets/garden-firepit.webp';
import exteriorEntrance from '@/assets/exterior-entrance.webp';
import bedroomTerrace from '@/assets/bedroom-terrace.webp';
import forestPanorama from '@/assets/forest-panorama.webp';

const images = [
  { src: exteriorMain, alt: 'Krzemienna Chata — widok z zewnątrz', className: 'col-span-2 row-span-2' },
  { src: baniaImg, alt: 'Ruska bania i balia', className: 'col-span-1 row-span-1' },
  { src: kitchenImg, alt: 'Wnętrze chaty', className: 'col-span-1 row-span-1' },
  { src: bedroomImg, alt: 'Sypialnia z łóżkiem king size', className: 'col-span-1 row-span-1' },
  { src: terraceImg, alt: 'Taras i ogród', className: 'col-span-1 row-span-1' },
  { src: exteriorSide, alt: 'Chata z boku — drewno i natura', className: 'col-span-1 row-span-1' },
  { src: bedroom2, alt: 'Druga sypialnia', className: 'col-span-1 row-span-1' },
  { src: forestPanorama, alt: 'Panorama Puszczy Knyszyńskiej', className: 'col-span-2 row-span-1' },
  { src: kitchenInterior, alt: 'Kuchnia z jadalnią', className: 'col-span-1 row-span-1' },
  { src: gardenFirepit, alt: 'Ogród i ognisko', className: 'col-span-1 row-span-1' },
  { src: exteriorEntrance, alt: 'Wejście do chaty', className: 'col-span-1 row-span-1' },
  { src: bedroomTerrace, alt: 'Sypialnia z tarasem', className: 'col-span-1 row-span-1' },
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
