import { useState, useMemo } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MONTH_NAMES = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
const DAY_NAMES = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];

// Hardcoded blocked dates for 2026
const BLOCKED_DATES: Set<string> = new Set([
  // Marzec
  ...[14,15,16,20,21,27,28].map(d => `2026-03-${String(d).padStart(2,'0')}`),
  // Kwiecień
  ...[4,5,17,18].map(d => `2026-04-${String(d).padStart(2,'0')}`),
  // Maj
  ...[8,9,10,15,16].map(d => `2026-05-${String(d).padStart(2,'0')}`),
  // Czerwiec 1-7, 14-17
  ...[1,2,3,4,5,6,7,14,15,16,17].map(d => `2026-06-${String(d).padStart(2,'0')}`),
  // Lipiec — cały miesiąc z wyjątkiem 5-8, 12, 18
  ...Array.from({length:31},(_,i)=>i+1).filter(d => ![5,6,7,8,12,18].includes(d)).map(d => `2026-07-${String(d).padStart(2,'0')}`),
  // Sierpień 2-6, 10-12, 16-28
  ...[2,3,4,5,6,10,11,12,16,17,18,19,20,21,22,23,24,25,26,27,28].map(d => `2026-08-${String(d).padStart(2,'0')}`),
  // Wrzesień - Grudzień — wszystkie dni
  ...Array.from({length:30},(_,i)=>i+1).map(d => `2026-09-${String(d).padStart(2,'0')}`),
  ...Array.from({length:31},(_,i)=>i+1).map(d => `2026-10-${String(d).padStart(2,'0')}`),
  ...Array.from({length:30},(_,i)=>i+1).map(d => `2026-11-${String(d).padStart(2,'0')}`),
  ...Array.from({length:31},(_,i)=>i+1).map(d => `2026-12-${String(d).padStart(2,'0')}`),
]);

const AvailabilityCalendar = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const isDateBooked = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return BLOCKED_DATES.has(`${y}-${m}-${d}`);
  };

  const isPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Monday = 0
    let startDow = firstDay.getDay() - 1;
    if (startDow < 0) startDow = 6;
    
    const days: (Date | null)[] = [];
    for (let i = 0; i < startDow; i++) days.push(null);
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }
    return days;
  }, [currentMonth]);

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const canGoPrev = () => {
    const now = new Date();
    return currentMonth > new Date(now.getFullYear(), now.getMonth(), 1);
  };

  return (
    <section className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8 space-y-3">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Dostępność</p>
          <h2 className="section-title">Kalendarz terminów</h2>
          <p className="section-subtitle mx-auto">Sprawdź wolne terminy i zarezerwuj pobyt w In The Woods.</p>
        </div>

        <div className="card-premium bg-background">
          <>

              <div className="flex items-center justify-between mb-6">
                <button onClick={prevMonth} disabled={!canGoPrev()} className="p-2 hover:bg-secondary rounded-lg transition-colors disabled:opacity-30" aria-label="Poprzedni miesiąc">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="font-serif text-lg font-semibold !mb-0">
                  {MONTH_NAMES[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <button onClick={nextMonth} className="p-2 hover:bg-secondary rounded-lg transition-colors" aria-label="Następny miesiąc">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {DAY_NAMES.map(d => (
                  <div key={d} className="text-center text-xs font-medium text-muted-foreground py-2">{d}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((date, i) => {
                  if (!date) return <div key={`empty-${i}`} />;
                  const booked = isDateBooked(date);
                  const past = isPast(date);
                  const isToday = date.toDateString() === new Date().toDateString();

                  return (
                    <div
                      key={date.toISOString()}
                      className={`relative text-center py-2.5 text-sm rounded-lg transition-colors ${
                        past
                          ? 'text-muted-foreground/40'
                          : booked
                            ? 'bg-destructive/10 text-destructive line-through'
                            : 'bg-forest/5 text-forest font-medium'
                      } ${isToday ? 'ring-2 ring-forest/30' : ''}`}
                    >
                      {date.getDate()}
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-forest/10 border border-forest/20" />
                  <span className="text-xs text-muted-foreground">Wolny</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-destructive/10 border border-destructive/20" />
                  <span className="text-xs text-muted-foreground">Zajęty</span>
                </div>
              </div>
            </>

        </div>
      </div>
    </section>
  );
};

export default AvailabilityCalendar;
