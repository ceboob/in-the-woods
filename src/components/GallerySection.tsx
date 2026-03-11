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
  { src: jacuzziNight, alt: 'Noclegi Supraśl — prywatna ruska bania z jacuzzi pod gwiazdami', className: 'col-span-2 row-span-2' },
  { src: kitchenDining, alt: 'Dom Supraśl — drewniana jadalnia z nakrytym stołem', className: 'col-span-1 row-span-1' },
  { src: terracePorch, alt: 'Domek Supraśl — taras z kanapą w otoczeniu Puszczy Knyszyńskiej', className: 'col-span-1 row-span-1' },
  { src: kitchenTraditional, alt: 'Nocleg Podlasie — tradycyjna kuchnia z ceramiką w domu w lesie', className: 'col-span-1 row-span-1' },
  { src: terraceBreakfast, alt: 'Weekend Supraśl — śniadanie na tarasie z widokiem na las', className: 'col-span-1 row-span-1' },
  { src: winterGolden, alt: 'Noclegi Supraśl zimą — chata w złotym zimowym świetle Puszczy Knyszyńskiej', className: 'col-span-2 row-span-1' },
  { src: interiorImg, alt: 'Dom Supraśl — salon z kominkiem w Krzemiennej Chacie', className: 'col-span-1 row-span-1' },
  { src: bedroomImg, alt: 'Nocleg Supraśl — komfortowa sypialnia z dużym łóżkiem', className: 'col-span-1 row-span-1' },
  { src: exteriorMain, alt: 'Domek Supraśl — widok na chatę z ogrodu w Puszczy Knyszyńskiej', className: 'col-span-1 row-span-1' },
  { src: winterCabin, alt: 'Noclegi Puszcza Knyszyńska — drewniana chata w śnieżnej scenerii', className: 'col-span-1 row-span-1' },
  { src: winterForest, alt: 'Nocleg Podlasie — zimowy las Puszczy Knyszyńskiej blisko Supraśla', className: 'col-span-1 row-span-1' },
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
