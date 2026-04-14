// Pricing configuration for the property

export interface SeasonConfig {
  name: string;
  label: string;
  startMonth: number; // 1-indexed
  startDay: number;
  endMonth: number;
  endDay: number;
  minNights: number;
  prices: Record<number, number>; // guests → price per night (weekday)
  color: string;
}

export const SEASONS: SeasonConfig[] = [
  {
    name: 'low',
    label: 'Sezon niski',
    startMonth: 11,
    startDay: 1,
    endMonth: 3,
    endDay: 31,
    minNights: 2,
    prices: { 2: 399, 4: 399, 6: 499, 8: 599 },
    color: 'bg-forest/10 text-forest',
  },
  {
    name: 'mid',
    label: 'Sezon średni',
    startMonth: 4,
    startDay: 1,
    endMonth: 5,
    endDay: 31,
    minNights: 2,
    prices: { 2: 399, 4: 499, 6: 599, 8: 649 },
    color: 'bg-amber-100 text-amber-800',
  },
  {
    name: 'high',
    label: 'Sezon wysoki',
    startMonth: 6,
    startDay: 1,
    endMonth: 8,
    endDay: 31,
    minNights: 3,
    prices: { 2: 499, 4: 599, 6: 699, 8: 799 },
    color: 'bg-orange-100 text-orange-800',
  },
  {
    name: 'mid2',
    label: 'Sezon średni',
    startMonth: 9,
    startDay: 1,
    endMonth: 10,
    endDay: 31,
    minNights: 2,
    prices: { 2: 399, 4: 499, 6: 599, 8: 649 },
    color: 'bg-amber-100 text-amber-800',
  },
];

export const WEEKEND_SURCHARGE = 100; // PLN per night on Fri/Sat
export const LONG_STAY_DISCOUNT = 0.10; // 10% discount for 7+ nights
export const BANIA_PRICE = 250; // PLN per stay
export const MIN_NIGHTS = 2;
export const BASE_GUESTS = 4;
export const MAX_GUESTS = 8;
export const EXTRA_GUEST_PRICE = 75; // kept for backward compat

export function getSeasonForDate(date: Date): SeasonConfig {
  const month = date.getMonth() + 1; // convert to 1-indexed
  const day = date.getDate();

  for (const season of SEASONS) {
    let afterStart: boolean;
    let beforeEnd: boolean;

    if (season.startMonth <= season.endMonth) {
      afterStart = month > season.startMonth || (month === season.startMonth && day >= season.startDay);
      beforeEnd = month < season.endMonth || (month === season.endMonth && day <= season.endDay);
      if (afterStart && beforeEnd) return season;
    } else {
      // Wrapping season (Nov–Mar)
      afterStart = month > season.startMonth || (month === season.startMonth && day >= season.startDay);
      beforeEnd = month < season.endMonth || (month === season.endMonth && day <= season.endDay);
      if (afterStart || beforeEnd) return season;
    }
  }
  return SEASONS[0]; // fallback
}

export function getPriceForDate(date: Date, guests: number = 4): number {
  const season = getSeasonForDate(date);
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;

  // Find closest guest tier
  const tiers = [2, 4, 6, 8];
  const tier = tiers.find(t => guests <= t) || 8;
  const basePrice = season.prices[tier] || season.prices[4];

  return basePrice + (isWeekend ? WEEKEND_SURCHARGE : 0);
}

export function calculateTotalPrice(
  checkIn: Date,
  checkOut: Date,
  guests: number,
): { nightPrices: { date: Date; price: number }[]; total: number; extraGuestTotal: number; discount: number } {
  const nightPrices: { date: Date; price: number }[] = [];
  const current = new Date(checkIn);

  while (current < checkOut) {
    nightPrices.push({ date: new Date(current), price: getPriceForDate(current, guests) });
    current.setDate(current.getDate() + 1);
  }

  const baseTotal = nightPrices.reduce((sum, n) => sum + n.price, 0);
  const discount = nightPrices.length >= 7 ? Math.round(baseTotal * LONG_STAY_DISCOUNT) : 0;

  return { nightPrices, total: baseTotal - discount, extraGuestTotal: 0, discount };
}

export function isWeekendDay(date: Date): boolean {
  const dow = date.getDay();
  return dow === 5 || dow === 6 || dow === 0;
}

// Blocked dates (hardcoded for 2026) — last update: 2025-04-08
export const BLOCKED_DATES_LAST_UPDATED = '2025-04-10';

export const BLOCKED_DATES: Set<string> = new Set([
  ...[10, 11, 17, 18, 24, 25].map((d) => `2026-04-${String(d).padStart(2, '0')}`),
  ...[1, 2, 8, 9, 10, 15, 16, 22, 23, 31].map((d) => `2026-05-${String(d).padStart(2, '0')}`),
  ...[1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17, 20, 21, 22, 23, 24, 25, 26].map(
    (d) => `2026-06-${String(d).padStart(2, '0')}`,
  ),
  ...[1, 2, 3, 4, 9, 10, 11, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(
    (d) => `2026-07-${String(d).padStart(2, '0')}`,
  ),
  ...[2, 3, 4, 5, 6, 10, 11, 12, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].map(
    (d) => `2026-08-${String(d).padStart(2, '0')}`,
  ),
  ...[25, 26, 27, 28, 29, 30].map((d) => `2026-09-${String(d).padStart(2, '0')}`),
  ...[1, 2, 3, 4, 5, 6, 7, 8].map((d) => `2026-10-${String(d).padStart(2, '0')}`),
]);

export function formatDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function isDateBlocked(date: Date): boolean {
  return BLOCKED_DATES.has(formatDateKey(date));
}
