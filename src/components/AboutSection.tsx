import { useScrollReveal } from '@/hooks/useScrollAnimation';
import ImageReveal from '@/components/ImageReveal';
import salonImg from '@/assets/gallery-salon-panorama-thumb.webp';

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="o-miejscu" className="section-padding bg-warm-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="space-y-6">
          <p className="text-xs tracking-wide text-muted-foreground font-sans">
            O miejscu
          </p>
          <h2 className="section-title">
            Tam, gdzie las
            <br />
            opowiada historie
          </h2>
          <div className="space-y-4 section-subtitle">
            <p>
              In The Woods to drewniany dom z bala w miejscowości Konne, w okolicy Supraśla i
              Puszczy Knyszyńskiej. Cały dom wynajmowany jest jednej grupie.
            </p>
            <p>
              Dom powstał z pasji do natury i drewna. Każdy element wnętrza — od rzeźbionej
              drewnianej szafki z serduszkami, przez ceglany kominek, po sosnowe belki sufitowe —
              tworzy charakter wnętrza.
            </p>
            <p>
              W domu można skorzystać z kominka, a na zewnątrz odpocząć w ogrodzie. Przed przyjazdem
              z dziećmi lub psem sprawdź zasady pobytu i informacje o ogrodzeniu.
            </p>
            <p>
              Szczegóły wyposażenia i zasady pobytu znajdziesz na stronie obiektu. Jeśli masz pytania
              dotyczące wybranego terminu, skontaktuj się z gospodarzem.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <ImageReveal>
            <img
              src={salonImg}
              alt="Salon z kominkiem w drewnianym domu In The Woods — noclegi Supraśl"
              className="w-full h-[400px] md:h-[550px] object-cover"
              loading="lazy"
              width="600"
              height="550"
            />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
