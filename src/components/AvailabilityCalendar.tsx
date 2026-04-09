import { useState, useMemo, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Filter, Users, Calculator } from 'lucide-react';
import {
  SEASONS,
  getPriceForDate,
  getSeasonForDate,
  isDateBlocked,
  isWeekendDay,
  formatDateKey,
  calculateTotalPrice,
  EXTRA_GUEST_PRICE,
  BASE_GUESTS,
  MAX_GUESTS,
  MIN_NIGHTS,
  BLOCKED_DATES_LAST_UPDATED,
} from '@/lib/pricing';

const MONTH_NAMES = [
  'Styczeń',
  'Luty',
  'Marzec',
  'Kwiecień',
  'Maj',
  'Czerwiec',
  'Lipiec',
  'Sierpień',
  'Wrzesień',
  'Październik',
  'Listopad',
  'Grudzień',
];
const DAY_NAMES = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];

type FilterType = 'all' | 'free' | 'weekends' | 'weekly' | 'high_season';

const FILTER_OPTIONS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'Wszystkie' },
  { value: 'free', label: 'Tylko wolne' },
  { value: 'weekends', label: 'Weekendy' },
  { value: 'high_season', label: 'Wysoki sezon' },
];

const AvailabilityCalendar = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedRange, setSelectedRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(4);

  const isPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const shouldShowDate = useCallback(
    (date: Date): boolean => {
      if (isPast(date)) return true;
      const blocked = isDateBlocked(date);
      switch (filter) {
        case 'free':
          return !blocked;
        case 'weekends':
          return isWeekendDay(date) && !blocked;
        case 'high_season': {
          const season = getSeasonForDate(date);
          return season.name === 'high';
        }
        default:
          return true;
      }
    },
    [filter],
  );

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let startDow = firstDay.getDay() - 1;
    if (startDow < 0) startDow = 6;

    const days: (Date | null)[] = [];
    for (let i = 0; i < startDow; i++) days.push(null);
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }
    return days;
  }, [currentMonth]);

  const handleDateClick = (date: Date) => {
    if (isPast(date) || isDateBlocked(date)) return;

    if (!selectedRange.start || selectedRange.end) {
      setSelectedRange({ start: date, end: null });
    } else {
      if (date <= selectedRange.start) {
        setSelectedRange({ start: date, end: null });
      } else {
        // Check if any blocked dates in range
        const current = new Date(selectedRange.start);
        while (current <= date) {
          if (isDateBlocked(current)) {
            setSelectedRange({ start: date, end: null });
            return;
          }
          current.setDate(current.getDate() + 1);
        }
        setSelectedRange({ start: selectedRange.start, end: date });
      }
    }
  };

  const isInRange = (date: Date): boolean => {
    if (!selectedRange.start) return false;
    const end = selectedRange.end || hoverDate;
    if (!end || end <= selectedRange.start) return false;
    return date >= selectedRange.start && date <= end;
  };

  const isRangeStart = (date: Date): boolean =>
    !!selectedRange.start && formatDateKey(date) === formatDateKey(selectedRange.start);

  const isRangeEnd = (date: Date): boolean =>
    !!selectedRange.end && formatDateKey(date) === formatDateKey(selectedRange.end);

  const priceCalc = useMemo(() => {
    if (!selectedRange.start || !selectedRange.end) return null;
    return calculateTotalPrice(selectedRange.start, selectedRange.end, guests);
  }, [selectedRange.start, selectedRange.end, guests]);

  const nights = priceCalc?.nightPrices.length || 0;

  const prevMonth = () =>
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const nextMonth = () =>
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const canGoPrev = () => {
    const now = new Date();
    return currentMonth > new Date(now.getFullYear(), now.getMonth(), 1);
  };

  const scrollToBooking = () => {
    document.querySelector('#rezerwacja')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-secondary">
      <div
        ref={ref}
        className={`max-w-xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-8 space-y-3">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Dostępność i ceny
          </p>
          <h2 className="section-title">Kalendarz terminów</h2>
          <p className="section-subtitle mx-auto">
            Kliknij datę, aby zobaczyć cenę. Wybierz zakres dat, aby obliczyć koszt pobytu.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-4 flex-wrap justify-center">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {FILTER_OPTIONS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`text-xs px-3 py-1.5 border transition-colors ${
                filter === f.value
                  ? 'bg-teal text-primary-foreground border-teal'
                  : 'bg-background border-border text-muted-foreground hover:bg-secondary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="card-premium bg-background">
          {/* Month navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              disabled={!canGoPrev()}
              className="p-2 hover:bg-secondary rounded-lg transition-colors disabled:opacity-30"
              aria-label="Poprzedni miesiąc"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-lg font-semibold !mb-0">
              {MONTH_NAMES[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Następny miesiąc"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Day names */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAY_NAMES.map((d) => (
              <div key={d} className="text-center text-xs font-medium text-muted-foreground py-2">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((date, i) => {
              if (!date) return <div key={`empty-${i}`} />;
              const blocked = isDateBlocked(date);
              const past = isPast(date);
              const show = shouldShowDate(date);
              const isToday = date.toDateString() === new Date().toDateString();
              const inRange = isInRange(date);
              const rangeStart = isRangeStart(date);
              const rangeEnd = isRangeEnd(date);
              const price = !past && !blocked ? getPriceForDate(date) : null;
              const season = getSeasonForDate(date);

              if (!show && !past) {
                return (
                  <div key={formatDateKey(date)} className="text-center py-2.5 text-sm opacity-20">
                    <span className="text-muted-foreground">{date.getDate()}</span>
                  </div>
                );
              }

              return (
                <button
                  key={formatDateKey(date)}
                  type="button"
                  disabled={past || blocked}
                  onClick={() => handleDateClick(date)}
                  onMouseEnter={() =>
                    selectedRange.start && !selectedRange.end && setHoverDate(date)
                  }
                  onMouseLeave={() => setHoverDate(null)}
                  className={`relative text-center py-1.5 text-sm transition-colors cursor-pointer disabled:cursor-default ${
                    past
                      ? 'text-muted-foreground/40'
                      : blocked
                        ? 'bg-destructive/10 text-destructive line-through'
                        : rangeStart || rangeEnd
                          ? 'bg-teal text-primary-foreground font-semibold'
                          : inRange
                            ? 'bg-teal/20 text-teal font-medium'
                            : `${season.color} font-medium hover:ring-2 hover:ring-teal/40`
                  } ${isToday ? 'ring-2 ring-teal/30' : ''}`}
                  title={price ? `${price} zł/noc — ${season.label}` : undefined}
                >
                  <span>{date.getDate()}</span>
                  {price && !past && (
                    <span className="block text-[9px] leading-tight opacity-70">{price} zł</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-teal/10 border border-teal/20" />
              <span className="text-xs text-muted-foreground">Poza sezonem</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-amber-100 border border-amber-300" />
              <span className="text-xs text-muted-foreground">Średni sezon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-orange-100 border border-orange-300" />
              <span className="text-xs text-muted-foreground">Wysoki sezon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-destructive/10 border border-destructive/20" />
              <span className="text-xs text-muted-foreground">Zajęty</span>
            </div>
          </div>
        </div>

        {/* Price calculator */}
        {selectedRange.start && (
          <div className="card-premium bg-background mt-4 space-y-4">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-teal" />
              <h4 className="font-serif text-base font-semibold">Kalkulator ceny</h4>
            </div>

            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-muted-foreground" />
              <label className="text-sm text-muted-foreground">Goście:</label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="px-3 py-1.5 bg-background border border-border text-sm"
              >
                {Array.from({ length: MAX_GUESTS }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'osoba' : n < 5 ? 'osoby' : 'osób'}
                  </option>
                ))}
              </select>
            </div>

            {selectedRange.end ? (
              <div className="space-y-2">
                {nights < MIN_NIGHTS && (
                  <p className="text-xs text-destructive">
                    Minimalny pobyt to {MIN_NIGHTS} noce. Wybierz dłuższy termin.
                  </p>
                )}
                <div className="bg-secondary p-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Termin</span>
                    <span>
                      {selectedRange.start.toLocaleDateString('pl-PL')} –{' '}
                      {selectedRange.end.toLocaleDateString('pl-PL')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Liczba nocy</span>
                    <span>{nights}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Goście</span>
                    <span>{guests}</span>
                  </div>
                  {priceCalc && guests > BASE_GUESTS && (
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">
                        Dopłata za {guests - BASE_GUESTS} dodatkow.{' '}
                        {guests - BASE_GUESTS === 1 ? 'osobę' : 'osoby'}
                      </span>
                      <span>+{priceCalc.extraGuestTotal} zł</span>
                    </div>
                  )}
                  {priceCalc && (
                    <div className="flex justify-between font-semibold text-base pt-2 border-t border-border">
                      <span>Szacunkowy koszt</span>
                      <span className="text-teal">{priceCalc.total} zł</span>
                    </div>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Cena orientacyjna. Dokładną ofertę potwierdzimy po wysłaniu zapytania. Przy
                  pobytach 5+ nocy możliwy rabat.
                </p>
                {nights >= MIN_NIGHTS && (
                  <button onClick={scrollToBooking} className="btn-primary w-full mt-2">
                    Zarezerwuj ten termin
                  </button>
                )}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">
                Wybierz drugą datę (wyjazd), aby zobaczyć cenę.
              </p>
            )}
          </div>
        )}

        {/* Season info */}
        <div className="mt-4 text-center space-y-1">
          <p className="text-xs text-muted-foreground">
            Ceny od <strong>399 zł/noc</strong> (do {BASE_GUESTS} osób). Każda dodatkowa osoba:{' '}
            <strong>+{EXTRA_GUEST_PRICE} zł/noc</strong>. Weekendy (pt–so):{' '}
            <strong>+100 zł/noc</strong>.
          </p>
          <p className="text-[11px] text-muted-foreground/60">
            Ostatnia aktualizacja dostępności: {new Date(BLOCKED_DATES_LAST_UPDATED).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityCalendar;
