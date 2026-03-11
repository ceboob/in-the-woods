import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImg from '@/assets/hero-cabin.jpg';
import interiorImg from '@/assets/interior-living.jpg';
import baniaImg from '@/assets/bania-relax.jpg';
import bedroomImg from '@/assets/bedroom.jpg';
import terraceImg from '@/assets/outdoor-terrace.jpg';
import kitchenImg from '@/assets/kitchen.jpg';
import forestImg from '@/assets/forest-nature.jpg';
import riverImg from '@/assets/river-kayak.jpg';

const images = [
  { src: heroImg, alt: 'Krzemienna Chata — widok z zewnątrz', className: 'col-span-2 row-span-2' },
  { src: interiorImg, alt: 'Salon z kominkiem', className: 'col-span-1 row-span-1' },
  { src: baniaImg, alt: 'Ruska bania', className: 'col-span-1 row-span-1' },
  { src: bedroomImg, alt: 'Sypialnia', className: 'col-span-1 row-span-1' },
  { src: kitchenImg, alt: 'Kuchnia', className: 'col-span-1 row-span-1' },
  { src: terraceImg, alt: 'Taras i ognisko', className: 'col-span-1 row-span-1' },
  { src: forestImg, alt: 'Puszcza Knyszyńska', className: 'col-span-1 row-span-1' },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
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
