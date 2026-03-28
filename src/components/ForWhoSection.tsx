import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Heart, Users, Dog, Laptop, Baby } from 'lucide-react';

const audiences = [
  { icon: Heart, title: 'Pary', desc: 'Romantyczny azyl z balią pod gwiazdami, kominkiem i leśną ciszą. Czas tylko dla Was.' },
  { icon: Users, title: 'Rodziny', desc: 'Bezpieczny ogród, plac zabaw, przestrzeń do wspólnego gotowania i wieczory przy ognisku.' },
  { icon: Users, title: 'Przyjaciele', desc: 'Kameralne spotkania z grillem, balią i rozmowami, które trwają do rana.' },
  { icon: Dog, title: 'Z psem', desc: 'Twój pies pokocha las za progiem. Ogrodzony teren i kilometry leśnych ścieżek.' },
  { icon: Laptop, title: 'Workation', desc: 'Wi-Fi, biurko, kawa i las za oknem. Praca nigdy nie wyglądała tak dobrze.' },
];

const ForWhoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Dla kogo</p>
          <h2 className="section-title">Twój pobyt, Twoje zasady</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {audiences.map((a, i) => (
            <div key={i} className="card-premium text-center group">
              <a.icon className="w-8 h-8 mx-auto mb-4 text-forest group-hover:text-forest-light transition-colors duration-300" strokeWidth={1.5} />
              <h3 className="font-serif text-lg font-medium mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
