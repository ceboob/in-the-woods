import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Bath, Percent, Clock, Users, TreePine, Sun, Snowflake, Leaf } from 'lucide-react';
import StripeSecurityTooltip from '@/components/StripeSecurityTooltip';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const seasonData = [
  {
    name: 'Sezon niski',
    period: '1 listopad – 31 marzec',
    icon: Snowflake,
    minNights: 2,
    accent: 'border-l-4 border-l-sky-400',
    iconColor: 'text-sky-500',
    bgAccent: 'bg-sky-50',
    rows: [
      { guests: 'do 4 osób', weekday: 399, weekend: 499 },
      { guests: 'do 6 osób', weekday: 499, weekend: 599 },
      { guests: 'do 8 osób', weekday: 599, weekend: 699 },
    ],
  },
  {
    name: 'Sezon średni',
    period: '1 kwi – 31 maj / 1 wrz – 31 paź',
    icon: Leaf,
    minNights: 2,
    accent: 'border-l-4 border-l-amber-400',
    iconColor: 'text-amber-600',
    bgAccent: 'bg-amber-50',
    rows: [
      { guests: 'do 2 osób', weekday: 399, weekend: 499 },
      { guests: 'do 4 osób', weekday: 499, weekend: 599 },
      { guests: 'do 6 osób', weekday: 599, weekend: 699 },
      { guests: 'do 8 osób', weekday: 649, weekend: 749 },
    ],
  },
  {
    name: 'Sezon wysoki',
    period: '1 czerwiec – 31 sierpień',
    icon: Sun,
    minNights: 3,
    accent: 'border-l-4 border-l-orange-500',
    iconColor: 'text-orange-600',
    bgAccent: 'bg-orange-50',
    rows: [
      { guests: 'do 2 osób', weekday: 499, weekend: 599 },
      { guests: 'do 4 osób', weekday: 599, weekend: 699 },
      { guests: 'do 6 osób', weekday: 699, weekend: 799 },
      { guests: 'do 8 osób', weekday: 799, weekend: 899 },
    ],
  },
];

const extras = [
  {
    icon: Bath,
    title: 'Ruska bania',
    desc: '250 zł za cały pobyt',
    note: 'niezależnie od liczby nocy',
  },
  {
    icon: Percent,
    title: 'Zniżka za długi pobyt',
    desc: '−10% przy 7+ nocach',
    note: 'naliczana automatycznie',
  },
  {
    icon: Clock,
    title: 'Minimalna rezerwacja',
    desc: '2 noce (3 w sezonie wysokim)',
    note: 'weekendy i długie weekendy',
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cennik" className="section-padding bg-secondary">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
            Cennik
          </p>
          <h2 className="section-title">Ile kosztuje pobyt w lesie?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Przejrzysty cennik za cały dom — bez ukrytych kosztów. Cena zależy od sezonu, liczby gości i&nbsp;dnia tygodnia.
          </p>
        </div>

        {/* Season tables */}
        <div className="space-y-6 mb-12">
          {seasonData.map((season) => {
            const Icon = season.icon;
            return (
              <div
                key={season.name}
                className={`bg-card border border-border overflow-hidden ${season.accent}`}
              >
                {/* Season header */}
                <div className={`flex items-center justify-between px-5 py-4 ${season.bgAccent}`}>
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${season.iconColor}`} strokeWidth={1.5} />
                    <div>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {season.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{season.period}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-card border border-border px-3 py-1 rounded-full text-muted-foreground whitespace-nowrap">
                    min. {season.minNights} {season.minNights === 2 ? 'noce' : 'noce'}
                  </span>
                </div>

                {/* Price table */}
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="w-1/3">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5" />
                          <span>Goście</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-center">Pn–Czw</TableHead>
                      <TableHead className="text-center">Pt–Sb</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {season.rows.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium text-sm">{row.guests}</TableCell>
                        <TableCell className="text-center">
                          <span className="font-heading text-lg font-semibold text-foreground">
                            {row.weekday}
                          </span>
                          <span className="text-xs text-muted-foreground ml-1">zł</span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-heading text-lg font-semibold text-foreground">
                            {row.weekend}
                          </span>
                          <span className="text-xs text-muted-foreground ml-1">zł</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            );
          })}
        </div>

        {/* Extras grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {extras.map((e, i) => (
            <div
              key={i}
              className="bg-card border border-border p-5 text-center space-y-2"
            >
              <e.icon className="w-6 h-6 text-primary mx-auto" strokeWidth={1.5} />
              <p className="font-heading text-sm font-semibold text-foreground">{e.title}</p>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
              <p className="text-[11px] text-muted-foreground/70">{e.note}</p>
            </div>
          ))}
        </div>

        {/* SEO content block */}
        <div className="bg-card border border-border p-6 md:p-8 mb-10 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <TreePine className="w-5 h-5 text-primary" strokeWidth={1.5} />
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Dom w lesie na wyłączność — cennik bez niespodzianek
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Wynajmujemy cały <strong>domek w lesie w Puszczy Knyszyńskiej</strong> na wyłączność — bez
            współdzielenia z innymi gośćmi. Cena obejmuje dom, ogród z ogrodzeniem, kominek, parking
            i&nbsp;dostęp do lasu wprost z&nbsp;posesji. To idealna propozycja na <strong>weekend
            w&nbsp;lesie</strong>, romantyczny wypad we dwoje, <strong>wieczór panieński na
            Podlasiu</strong> lub workation w&nbsp;ciszy natury.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Opcjonalnie możesz zarezerwować <strong>ruską banię</strong> — tradycyjną saunę opalaną drewnem,
            dostępną przez cały pobyt za jednorazową opłatą 250&nbsp;zł. Przy rezerwacji na 7 lub
            więcej nocy naliczamy <strong>10% zniżki</strong> od łącznej kwoty — dłuższy pobyt
            w&nbsp;leśnym domu naprawdę się opłaca.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Rezerwując bezpośrednio przez naszą stronę, unikasz prowizji pośredników. Zaliczkę
            (30%) opłacasz bezpiecznie online, resztę regulujesz na miejscu. Akceptujemy BLIK,
            karty płatnicze i&nbsp;przelewy.
          </p>
        </div>

        {/* Payment & CTA */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 pb-1">
            <StripeSecurityTooltip>
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground bg-background/80 border border-border rounded-full px-5 py-2.5 cursor-help">
                <svg viewBox="0 0 60 25" className="w-12 h-5 shrink-0" aria-label="Stripe" role="img">
                  <rect width="60" height="25" rx="4" fill="#635BFF" />
                  <text x="30" y="17" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700">
                    stripe
                  </text>
                </svg>
                <span className="font-medium">Zaliczka 30% · Reszta na miejscu</span>
              </div>
            </StripeSecurityTooltip>
          </div>
          <p className="text-[11px] text-muted-foreground/70">
            Akceptujemy BLIK, karty płatnicze i przelewy online
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button onClick={() => scrollTo('#rezerwacja')} className="btn-primary">
              Sprawdź dostępność
            </button>
            <a href="tel:+48722765101" className="btn-outline">
              Zapytaj o pobyt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
