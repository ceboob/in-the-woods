// Pricing configuration for the property
export interface SeasonConfig {
  name: string;
  label: string;
  startMonth: number; // 0-indexed
  startDay: number;
  endMonth: number;
  endDay: number;
  pricePerNight: number; // base price for up to 4 guests
  color: string; // tailwind class for visual indicator
}

export const SEASONS: SeasonConfig[] = [
  {
    name: 'low',
    label: 'Poza sezonem',
    startMonth: 0,
    startDay: 1,
    endMonth: 3,
    endDay: 30,
    pricePerNight: 399,
    color: 'bg-forest/10 text-forest',
  },
  {
    name: 'mid',
    label: 'Średni sezon',
    startMonth: 4,
    startDay: 1,
    endMonth: 5,
    endDay: 30,
    pricePerNight: 449,
    color: 'bg-amber-100 text-amber-800',
  },
  {
    name: 'high',
    label: 'Wysoki sezon',
    startMonth: 6,
    startDay: 1,
    endMonth: 7,
    endDay: 31,
    pricePerNight: 549,
    color: 'bg-orange-100 text-orange-800',
  },
  {
    name: 'mid2',
    label: 'Średni sezon',
    startMonth: 8,
    startDay: 1,
    endMonth: 9,
    endDay: 31,
    pricePerNight: 449,
    color: 'bg-amber-100 text-amber-800',
  },
  {
    name: 'low2',
    label: 'Poza sezonem',
    startMonth: 10,
    startDay: 1,
    endMonth: 11,
    endDay: 31,
    pricePerNight: 399,
    color: 'bg-forest/10 text-forest',
  },
];

export const EXTRA_GUEST_PRICE = 75; // PLN per night per extra guest (above 4)
export const BASE_GUESTS = 4;
export const MAX_GUESTS = 8;
export const MIN_NIGHTS = 2;

export const WEEKEND_SURCHARGE = 100; // PLN per night on Fri/Sat

export function getSeasonForDate(date: Date): SeasonConfig {
  const month = date.getMonth();
  const day = date.getDate();

  for (const season of SEASONS) {
    const afterStart =
      month > season.startMonth || (month === season.startMonth && day >= season.startDay);
    const beforeEnd =
      month < season.endMonth || (month === season.endMonth && day <= season.endDay);
    if (afterStart && beforeEnd) return season;
  }
  return SEASONS[0]; // fallback
}

export function getPriceForDate(date: Date): number {
  const season = getSeasonForDate(date);
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 5 || dayOfWeek === 6; // Fri, Sat
  return season.pricePerNight + (isWeekend ? WEEKEND_SURCHARGE : 0);
}

export function calculateTotalPrice(
  checkIn: Date,
  checkOut: Date,
  guests: number,
): { nightPrices: { date: Date; price: number }[]; total: number; extraGuestTotal: number } {
  const nightPrices: { date: Date; price: number }[] = [];
  const current = new Date(checkIn);

  while (current < checkOut) {
    nightPrices.push({ date: new Date(current), price: getPriceForDate(current) });
    current.setDate(current.getDate() + 1);
  }

  const baseTotal = nightPrices.reduce((sum, n) => sum + n.price, 0);
  const extraGuests = Math.max(0, guests - BASE_GUESTS);
  const extraGuestTotal = extraGuests * EXTRA_GUEST_PRICE * nightPrices.length;

  return { nightPrices, total: baseTotal + extraGuestTotal, extraGuestTotal };
}

export function isWeekendDay(date: Date): boolean {
  const dow = date.getDay();
  return dow === 5 || dow === 6 || dow === 0;
}

// Blocked dates (hardcoded for 2026) — last update: 2025-04-08
export const BLOCKED_DATES_LAST_UPDATED = '2025-04-10';

export const BLOCKED_DATES: Set<string> = new Set([
  // April
  ...[10, 11, 17, 18, 24, 25].map((d) => `2026-04-${String(d).padStart(2, '0')}`),
  // May
  ...[1, 2, 8, 9, 10, 15, 16, 22, 23, 31].map((d) => `2026-05-${String(d).padStart(2, '0')}`),
  // June: 1-7, 14-17, 20-26
  ...[1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17, 20, 21, 22, 23, 24, 25, 26].map(
    (d) => `2026-06-${String(d).padStart(2, '0')}`,
  ),
  // July: 1-4, 9-11, 14-17, 19-31
  ...[1, 2, 3, 4, 9, 10, 11, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(
    (d) => `2026-07-${String(d).padStart(2, '0')}`,
  ),
  // August: 2-6, 10-12, 16-28
  ...[2, 3, 4, 5, 6, 10, 11, 12, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].map(
    (d) => `2026-08-${String(d).padStart(2, '0')}`,
  ),
  // September: 25-30
  ...[25, 26, 27, 28, 29, 30].map((d) => `2026-09-${String(d).padStart(2, '0')}`),
  // October: 1-8
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
