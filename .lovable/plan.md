

## Fix CLS 0.24 — Reserve Space for Lazy-Loaded Sections

### Problem
The `SectionFallback` spinner has minimal height (`py-20` ≈ 160px), but each lazy-loaded section renders at 400-800px+. When content loads, the page shifts — causing CLS 0.24.

### Solution
1. **Increase `SectionFallback` min-height** in `src/pages/Index.tsx` — set `min-h-[400px]` to reserve vertical space matching average section height.

2. **Wrap each `<Suspense>` group with individual fallbacks** — instead of one shared `<Suspense>` for all lazy sections, wrap each section (or logical group) in its own `<Suspense>` with the taller fallback. This prevents a single spinner from collapsing when 15+ sections load.

3. **Eagerly load the first below-fold section** (`AmenitiesSection`) — remove it from lazy loading since it's likely visible on scroll. Import it statically alongside `HeroSection`.

### Changes

**`src/pages/Index.tsx`**:
- Change `SectionFallback` from `py-20` to `min-h-[400px] py-20`
- Move `AmenitiesSection` and `GuideSection` to static imports (they appear right after the fold)
- Split the single `<Suspense>` into 2-3 groups so each group's fallback reserves space independently

### Files
- `src/pages/Index.tsx` — only file changed

