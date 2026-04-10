import SEOPageLayout from '@/components/SEOPageLayout';
import { FileText, BookOpen, ClipboardList, ExternalLink } from 'lucide-react';

const documents = [
  {
    icon: BookOpen,
    title: 'Interaktywny przewodnik po domu',
    description: 'Wszystko, co musisz wiedzieć o domu In The Woods — jak obsługiwać kominek, banię, jacuzzi, co znajdziesz w kuchni i jak korzystać z ogrodu.',
    href: 'https://utn.pl/i-tw',
    label: 'Otwórz przewodnik (PDF)',
  },
  {
    icon: ClipboardList,
    title: 'Umowa najmu',
    description: 'Wzór umowy najmu domu In The Woods do wglądu. Dokument określa warunki rezerwacji, zasady pobytu, kaucję i odpowiedzialność stron.',
    href: 'https://utn.pl/contract',
    label: 'Otwórz umowę (PDF)',
  },
  {
    icon: FileText,
    title: 'Instrukcja obsługi domu',
    description: 'Szczegółowa instrukcja obsługi urządzeń w domu — ogrzewanie, sprzęt kuchenny, kominek, bania, WiFi i inne udogodnienia.',
    href: 'https://drive.google.com/file/d/1Kz6hA2My9p3MZuNTocCglt3-yow5LrE4/view?usp=drive_link',
    label: 'Otwórz instrukcję (PDF)',
  },
];

const Dokumenty = () => (
  <SEOPageLayout
    title="Dokumenty i instrukcje | In The Woods"
    description="Pobierz przewodnik po domu, umowę najmu i instrukcję obsługi In The Woods. Wszystkie dokumenty dostępne online w formacie PDF."
    breadcrumbName="Dokumenty"
    ogImage="https://www.suprasl.online/images/hero-cabin.jpg"
  >
    <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
      Dokumenty i instrukcje
    </h1>
    <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
      Wszystkie niezbędne dokumenty do Twojego pobytu w In The Woods — przewodnik, umowa najmu i instrukcja obsługi domu. Kliknij, aby otworzyć w nowej karcie.
    </p>

    <div className="grid gap-6 md:grid-cols-3">
      {documents.map(({ icon: Icon, title, description, href, label }) => (
        <a
          key={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">{title}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{description}</p>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:underline">
            {label} <ExternalLink className="w-4 h-4" />
          </span>
        </a>
      ))}
    </div>
  </SEOPageLayout>
);

export default Dokumenty;
