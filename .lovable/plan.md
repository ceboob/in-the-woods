

## Deep Canopy Theme — Color Palette Migration

### Overview
Replace the current light theme with a dark "Deep Canopy" forest palette across CSS variables, hardcoded colors in components, and Tailwind config. No typography changes.

### HSL Conversions
| Hex | HSL | Role |
|-----|-----|------|
| #1E2820 | 140 16% 14% | Background primary |
| #3A4E3D | 144 15% 27% | Background secondary (cards, inputs) |
| #EEE9DF | 38 30% 90% | Foreground text |
| #C9AA7C | 34 41% 64% | Accent primary (CTAs, links) |
| #7DAF90 | 144 24% 59% | Accent secondary (badges, icons) |

### Step 1 — Update CSS Variables in `src/index.css`
Replace all `:root` CSS custom properties:
- `--background` → 140 16% 14%
- `--foreground` → 38 30% 90%
- `--card` / `--popover` → 144 15% 27%
- `--card-foreground` / `--popover-foreground` → 38 30% 90%
- `--primary` → 34 41% 64% (gold)
- `--primary-foreground` → 140 16% 14% (dark bg for contrast on gold buttons)
- `--secondary` → 144 15% 27%
- `--secondary-foreground` → 38 30% 90%
- `--muted` → 140 12% 18% (slightly lighter than bg)
- `--muted-foreground` → 38 20% 78% (parchment at ~60%)
- `--accent` → 144 24% 59% (sage green)
- `--accent-foreground` → 140 16% 14%
- `--destructive` stays similar, `--destructive-foreground` → 38 30% 90%
- `--border` / `--input` → 144 15% 27%
- `--ring` → 34 41% 64%
- `--teal` → 34 41% 64% (remap to gold for links)
- `--wood` → 34 41% 64%, `--wood-light` → 34 41% 70%
- `--forest` → 144 24% 59%, `--forest-light` → 144 24% 65%
- `--cream` → 140 16% 14%
- `--graphite` → 38 30% 90%
- `--warm-white` → 140 12% 18%
- Sidebar vars follow same mapping

Update hardcoded `hsl()` values in body/heading/link styles (lines 71, 82, 93, etc.) to use the new palette.

### Step 2 — Update `tailwind.config.ts`
No structural changes needed — colors reference CSS vars. Confirm no hardcoded hex values exist (there are none).

### Step 3 — Fix Hardcoded Colors in Components (~18 files)

**HeroSection.tsx**: Change `from-[#333333]/75 via-[#333333]/50 to-[#333333]/80` overlay to `from-[#1E2820]/75 via-[#1E2820]/50 to-[#1E2820]/80`.

**Components using `text-white`** (~15 files): Replace `text-white` with `text-foreground`, `text-white/90` with `text-foreground/90`, `text-white/70` with `text-foreground/70`, `text-white/40` with `text-foreground/40` across:
- HeroSection.tsx
- BlogArticleLayout.tsx (footer)
- Blog.tsx (footer)
- Navbar.tsx (if applicable)
- Footer.tsx
- StickyMobileCTA.tsx
- CTASection.tsx
- And others found via search

**`bg-white` references**: Replace with `bg-card` or `bg-background` as contextually appropriate.

**StripeSecurityTooltip.tsx / PricingSection.tsx**: Keep `#635BFF` (Stripe brand — external brand color, do not change).

**chart.tsx**: Leave `#ccc`/`#fff` selectors as-is (they target recharts internal elements).

### Step 4 — Update `src/index.css` Component Classes
- `.btn-primary`: background → `hsl(var(--primary))`, text → `hsl(var(--primary-foreground))`  (already uses vars, will auto-update)
- `.btn-outline`: border/text colors use `--foreground` (will auto-update)
- `.card-premium`: uses `--card`/`--border` (will auto-update)
- Box-shadow `rgba(0,0,0,...)` values: change to slightly more visible shadows for dark theme or keep as-is (subtle on dark).

### Step 5 — Verify `index.html`
Check for any hardcoded `background-color` or `theme-color` meta tags and update to `#1E2820`.

### Files Changed
1. `src/index.css` — CSS variables + hardcoded HSL values in base styles
2. `src/components/HeroSection.tsx` — gradient overlay hex
3. `src/components/BlogArticleLayout.tsx` — footer text-white classes
4. `src/pages/Blog.tsx` — footer text-white classes
5. `src/components/Footer.tsx` — text-white classes
6. ~10-13 additional component files with `text-white` or `bg-white` references
7. `index.html` — theme-color meta if present

