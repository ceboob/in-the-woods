import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Heart, Users, Dog, Laptop, PartyPopper } from 'lucide-react';

const audiences = [
  { 
    icon: Heart, 
    title: 'Pary', 
    desc: 'Romantyczny azyl z balią pod gwiazdami, kominkiem i leśną ciszą. Śniadanie we dwoje na tarasie, wieczorna kąpiel w bani i niebo pełne gwiazd — czas tylko dla Was.',
  },
  { 
    icon: Users, 
    title: 'Rodziny', 
    desc: 'Bezpieczny ogrodzony teren z placem zabaw, ogniskiem i przestrzenią do wspólnego gotowania. Dzieci biegają po ogrodzie, a rodzice odpoczywają na tarasie z widokiem na las.',
  },
  { 
    icon: Users, 
    title: 'Przyjaciele', 
    desc: 'Kameralne spotkania z grillem w altanie, gorącą balią i rozmowami przy ognisku, które trwają do rana. Dom na wyłączność — bez obcych gości.',
  },
  { 
    icon: Dog, 
    title: 'Z psem', 
    desc: 'Twój pies pokocha las za progiem. Ogrodzony teren, kilometry leśnych ścieżek i altana z miską wody — u nas czworonogi są pełnoprawnymi gośćmi.',
  },
  { 
    icon: Laptop, 
    title: 'Workation', 
    desc: 'Szybkie Wi-Fi, biurko przy oknie z widokiem na las i kawa parzzona w ciszy. Po pracy — kajaki, rower lub spacer. Praca nigdy nie wyglądała tak dobrze.',
  },
];

const ForWhoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Dla kogo</p>
          <h2 className="section-title">Twój pobyt, Twoje zasady</h2>
          <p className="section-subtitle mx-auto">
            In The Woods wynajmujesz na wyłączność — nie dzielisz domu z innymi gośćmi. 
            To Twoja prywatna przestrzeń w lesie, gdzie sam decydujesz o rytmie dnia.
          </p>
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
