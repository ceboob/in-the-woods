import heroImg from '@/assets/exterior-main.webp';
import { Phone, Star, Users, TreePine, Sparkles, CalendarCheck } from 'lucide-react';
import { useMemo } from 'react';
import { BLOCKED_DATES, formatDateKey } from '@/lib/pricing';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Dynamic availability counter for current + next month
  const availabilityText = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    // Count free days in the next 60 days
    let freeDays = 0;
    let freeWeekends = 0;
    const check = new Date(now);
    check.setHours(0, 0, 0, 0);

    for (let i = 0; i < 60; i++) {
      const d = new Date(check);
      d.setDate(d.getDate() + i);
      if (!BLOCKED_DATES.has(formatDateKey(d))) {
        freeDays++;
        const dow = d.getDay();
        if (dow === 5 || dow === 6) freeWeekends++;
      }
    }

    const weekends = Math.floor(freeWeekends / 2);
    if (freeDays === 0) return null;

    const monthNames = ['styczniu', 'lutym', 'marcu', 'kwietniu', 'maju', 'czerwcu', 'lipcu', 'sierpniu', 'wrześniu', 'październiku', 'listopadzie', 'grudniu'];
    const nextMonth = (currentMonth + 1) % 12;

    if (weekends <= 3) {
      return `Tylko ${weekends} woln${weekends === 1 ? 'y' : 'e'} weekend${weekends === 1 ? '' : 'y'} w ${monthNames[currentMonth]} i ${monthNames[nextMonth]}!`;
    }
    return `${freeDays} wolnych dni w najbliższych 2 miesiącach`;
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Noclegi Supraśl — dom w lesie z jacuzzi, In The Woods, Puszcza Knyszyńska"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#333333]/75 via-[#333333]/50 to-[#333333]/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-cream leading-tight mb-4 animate-fade-up"
          style={{ fontFamily: "'Luckiest Guy', cursive", letterSpacing: '0.02em' }}
        >
          In The Woods – noclegi Supraśl
        </h1>
        <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/90 mb-3 animate-fade-in">
          Dom w lesie z jacuzzi blisko Supraśla
        </p>

        <div className="flex flex-col items-center gap-1 mb-10 animate-fade-up delay-100">
          <p className="font-serif text-lg md:text-xl text-white italic">
            Prywatny dom w lesie.
          </p>
          <p className="font-serif text-lg md:text-xl text-white italic">
            Kominek. Ruska bania. Cisza natury.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 animate-fade-up delay-200">
          <div className="flex items-center gap-2 text-white/90">
            <Users className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide font-medium">Dom na wyłączność</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <TreePine className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide font-medium">10 min od Supraśla</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide font-medium">Jacuzzi pod gwiazdami</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-up delay-300">
          <button
            onClick={() => scrollTo('#rezerwacja')}
            className="btn-primary bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Sprawdź dostępność
          </button>
          <a
            href="tel:+48722765101"
            className="btn-outline border-cream text-cream hover:bg-primary hover:text-primary-foreground hover:border-primary inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" /> Zadzwoń
          </a>
        </div>

        {/* Dynamic availability counter */}
        {availabilityText && (
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in delay-400">
            <CalendarCheck className="w-4 h-4 text-primary/80" />
            <span className="text-sm text-primary/90 font-medium tracking-wide">
              {availabilityText}
            </span>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-6 animate-fade-in delay-500">
          <div className="flex items-center gap-1.5 text-primary/70 text-xs">
            <Star className="w-3.5 h-3.5 fill-primary/70 text-primary/70" />
            <span>5★ opinie</span>
          </div>
          <span className="text-primary/30">·</span>
          <span className="text-primary/70 text-xs">Ponad 100 zadowolonych gości</span>
          <span className="text-primary/30">·</span>
          <span className="text-primary/70 text-xs">Rezerwacje bezpośrednie</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-cream/40" />
      </div>
    </section>
  );
};

export default HeroSection;
