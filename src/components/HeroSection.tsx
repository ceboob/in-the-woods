import heroImgSm from '@/assets/exterior-main-sm.webp';
import heroImgLg from '@/assets/exterior-main-lg.webp';
import { Phone, Star, Users, TreePine, Sparkles, CalendarCheck, Flame, Dog } from 'lucide-react';
import { useMemo } from 'react';
import { BLOCKED_DATES, formatDateKey } from '@/lib/pricing';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const availabilityText = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();

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
          src={heroImgLg}
          srcSet={`${heroImgSm} 640w, ${heroImgLg} 1028w`}
          sizes="100vw"
          alt="Leśny dom na wyłączność z jacuzzi i sauną w Puszczy Knyszyńskiej — In The Woods noclegi Supraśl"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#333333]/75 via-[#333333]/50 to-[#333333]/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 animate-fade-up drop-shadow-lg font-accent mt-8 sm:mt-0"
        >
          Leśny dom na wyłączność — domek w lesie z jacuzzi i sauną
        </h1>
        <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/90 mb-3 animate-fade-in">
          Puszcza Knyszyńska · Supraśl · Podlasie
        </p>

        <div className="flex flex-col items-center gap-1 mb-10 animate-fade-up delay-100">
          <p className="text-base md:text-lg text-white font-normal">
            Ucieczka od zgiełku miasta. Detoks cyfrowy w lesie.
          </p>
          <p className="text-base md:text-lg text-white font-normal">
            Spokojny wypoczynek w naturze — kominek, balia, cisza.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 animate-fade-up delay-200">
          <div className="flex items-center gap-2 text-white/90">
            <Users className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide font-medium">Dom z bali na wyłączność</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Dog className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide font-medium">Ogrodzony teren · psy za darmo</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Flame className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide font-medium">Domek z kominkiem w lesie</span>
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
            className="btn-outline border-white text-white hover:bg-primary hover:text-primary-foreground hover:border-primary inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" /> Zadzwoń
          </a>
        </div>

        {availabilityText && (
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in delay-400">
            <CalendarCheck className="w-4 h-4 text-primary/80" />
            <span className="text-sm text-primary/90 font-medium tracking-wide">
              {availabilityText}
            </span>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 animate-fade-in delay-500">
          <div className="flex items-center gap-1.5 text-primary text-sm font-medium">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span>4,82★ opinie</span>
          </div>
          <span className="text-white/50 text-sm">·</span>
          <span className="text-white font-medium text-sm">Ponad 110 zadowolonych gości</span>
          <span className="text-white/50 text-sm">·</span>
          <span className="text-white font-medium text-sm">Rezerwacje bezpośrednie</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  );
};

export default HeroSection;
