import { useState, useEffect, useMemo } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface BookedRange {
  start: string;
  end: string;
}

const MONTH_NAMES = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
const DAY_NAMES = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];

const AvailabilityCalendar = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [bookedRanges, setBookedRanges] = useState<BookedRange[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('fetch-calendar');
        if (error) throw error;
        if (data?.success && data.events) {
          setBookedRanges(data.events.map((e: any) => ({ start: e.start, end: e.end })));
        }
      } catch (err) {
        console.error('Failed to fetch calendar:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCalendar();
  }, []);

  const isDateBooked = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return bookedRanges.some(range => dateStr >= range.start && dateStr < range.end);
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
    <section className="section-padding bg-warm-white">
      <div ref={ref} className={`max-w-xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-8 space-y-3">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Dostępność</p>
          <h2 className="section-title">Kalendarz terminów</h2>
          <p className="section-subtitle mx-auto">Sprawdź wolne terminy i zarezerwuj pobyt w In The Woods.</p>
        </div>

        <div className="card-premium bg-background">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <button onClick={prevMonth} disabled={!canGoPrev()} className="p-2 hover:bg-secondary rounded-lg transition-colors disabled:opacity-30">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="font-serif text-lg font-semibold !mb-0">
                  {MONTH_NAMES[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <button onClick={nextMonth} className="p-2 hover:bg-secondary rounded-lg transition-colors">
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
          )}
        </div>
      </div>
    </section>
  );
};

export default AvailabilityCalendar;
