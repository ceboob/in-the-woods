import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Sun, Moon, Coffee } from 'lucide-react';

const timeline = [
  {
    icon: Sun,
    period: 'Dzień',
    items: ['Przyjazd i powitanie', 'Spacer po Puszczy', 'Ognisko w ogrodzie'],
  },
  {
    icon: Moon,
    period: 'Wieczór',
    items: ['Sesja w ruskiej bani', 'Kolacja przy świecach', 'Kominek i cisza'],
  },
  {
    icon: Coffee,
    period: 'Poranek',
    items: ['Kawa na tarasie', 'Cisza puszczy', 'Śniadanie przy drewnianym stole'],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-warm-white">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Doświadczenie</p>
          <h2 className="section-title">Jak wygląda pobyt?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {timeline.map((t, i) => (
            <div key={i} className="text-center space-y-6">
              <t.icon className="w-8 h-8 mx-auto text-forest" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl font-medium">{t.period}</h3>
              <ul className="space-y-3">
                {t.items.map((item, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emotion block */}
        <div className="mt-20 md:mt-28 text-center max-w-2xl mx-auto space-y-6">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-snug">
            Nie wynajmujesz noclegu.<br />
            <span className="italic">Wynajmujesz doświadczenie.</span>
          </p>
          <div className="space-y-1 text-muted-foreground text-sm md:text-base font-light">
            <p>Zapach drewna. Ciszę. Ogień. Naturę.</p>
          </div>
          <p className="font-serif text-lg italic text-foreground/80">
            To miejsce, gdzie odpoczywasz naprawdę.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
