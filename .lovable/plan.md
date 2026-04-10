

## Reduce DOM Nodes on Homepage (~7600 → target ~5500)

### Analysis of DOM-Heavy Sections

| Section | Estimated Nodes | Issue |
|---------|----------------|-------|
| TestimonialsSection | ~180 | 30 Lucide Star SVGs (5 per card × 6 cards), each ~5 nodes |
| GuideSection | ~200 | 10 Card components with Lucide icons, always fully rendered |
| GallerySection | ~100-300 | 12 hero images (each button+img+overlay), up to 56 when expanded |
| AvailabilityCalendar | ~200 | 42 day cells with buttons, spans, price labels |
| AmenitiesSection | ~150 | 10 amenity cards with Lucide icons |
| ForWhoSection | ~100 | 5 audience cards with Lucide icons |
| BookingModule | ~120 | Full form with labels, inputs, icons |
| FAQSection | ~80 | Accordion items with trigger/content pairs |
| Footer + SEOText + misc | ~150 | Links, paragraphs, icons |

### Changes

#### 1. TestimonialsSection — Replace 30 Star SVGs with text stars
Replace `[...Array(5)].map(() => <Star />)` (30 SVG elements = ~150 nodes) with a single `<span>★★★★★</span>` per card. Saves ~144 nodes.

**File**: `src/components/TestimonialsSection.tsx`

#### 2. GuideSection — Lazy-render lower subsections
This section has 4 subsections (intro, "Co warto zobaczyć" 4 cards, "Noclegi i smaki" 2 cards, "Aktywni" 4 cards, CTA). Render only the first 2 subsections initially; load the rest when the section scrolls into view using a visibility state. Saves ~100 nodes on initial render.

**File**: `src/components/GuideSection.tsx`

#### 3. AmenitiesSection — Show 6 of 10 amenities, toggle for rest
Display first 6 amenity cards by default, add "Pokaż więcej" button for remaining 4. Saves ~60 nodes initially.

**File**: `src/components/AmenitiesSection.tsx`

#### 4. GallerySection — Reduce hero images from 12 to 8
Show 8 hero images instead of 12 in the initial view (the "Show all" button still reveals the full 56). Saves ~16 nodes.

**File**: `src/components/GallerySection.tsx`

#### 5. AvailabilityCalendar — Simplify empty cell rendering
Use CSS grid gap instead of rendering `null` placeholder divs for empty cells at start of month. Minor savings (~5-7 nodes).

**File**: `src/components/AvailabilityCalendar.tsx`

#### 6. Simplify icon usage in EventsSection and GuestGuideSection
Replace Lucide icon wrapper pattern (div > div > Icon) with simpler markup where the icon container div is the icon itself. Saves ~20 nodes across both.

**Files**: `src/components/EventsSection.tsx`, `src/components/GuestGuideSection.tsx`

### Estimated Impact
- Star SVG cleanup: **-144 nodes**
- GuideSection lazy subsections: **-100 nodes**
- AmenitiesSection toggle: **-60 nodes**
- Gallery hero reduction: **-16 nodes**
- Icon simplification: **-20 nodes**
- Calendar cleanup: **-7 nodes**

**Total estimated reduction: ~350 nodes** (7624 → ~7274)

### Honest Assessment
The remaining ~7000 nodes come from essential content (text paragraphs, links, form fields, navigation) and cannot be reduced without removing content. The page has 18+ content sections — each is lean but they add up. For a further significant reduction (below 5000), the page would need to be split into multiple routes or use intersection-observer-based conditional rendering (mount sections only when scrolled to, unmount when scrolled past). This would be a more invasive architectural change.

### Optional: Intersection Observer Section Mounting (bigger impact, more complex)
Create a `<LazyMount>` wrapper that only mounts children when they enter the viewport (and optionally unmounts when they leave). Apply to all below-fold sections. This could reduce active DOM by ~2000-3000 nodes at any given time. However, this may cause re-renders and layout shifts if not carefully managed.

### Files Changed
1. `src/components/TestimonialsSection.tsx`
2. `src/components/GuideSection.tsx`
3. `src/components/AmenitiesSection.tsx`
4. `src/components/GallerySection.tsx`
5. `src/components/AvailabilityCalendar.tsx`
6. `src/components/EventsSection.tsx`
7. `src/components/GuestGuideSection.tsx`

