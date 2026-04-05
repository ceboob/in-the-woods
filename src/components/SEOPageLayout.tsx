import { ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import RelatedPages from '@/components/RelatedPages';

interface SEOPageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  breadcrumbName?: string;
  ogImage?: string;
}

const SEOPageLayout = ({ children, title, description, breadcrumbName }: SEOPageLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const canonical = `https://www.suprasl.online${window.location.pathname}`;
  const breadcrumbSchema = breadcrumbName ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://www.suprasl.online/" },
      { "@type": "ListItem", "position": 2, "name": breadcrumbName, "item": canonical }
    ]
  } : null;


  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={title} description={description} canonical={canonical} jsonLd={breadcrumbSchema || undefined} />
      {/* Navbar */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-xl font-light tracking-wide text-foreground">
            In The Woods
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/noclegi-suprasl" className="nav-link text-foreground/70 hover:text-foreground">Noclegi</Link>
            <Link to="/domek-suprasl" className="nav-link text-foreground/70 hover:text-foreground">Domek</Link>
            <Link to="/domek-z-jacuzzi-podlasie" className="nav-link text-foreground/70 hover:text-foreground">Jacuzzi</Link>
            <Link to="/atrakcje-suprasl" className="nav-link text-foreground/70 hover:text-foreground">Atrakcje</Link>
            <Link to="/weekend-suprasl" className="nav-link text-foreground/70 hover:text-foreground">Weekend</Link>
            <Link to="/wieczor-panienski-suprasl" className="nav-link text-foreground/70 hover:text-foreground">Imprezy</Link>
            <Link to="/puszcza-knyszynska-nocleg" className="nav-link text-foreground/70 hover:text-foreground">Puszcza</Link>
            <a href="tel:+48722765101" className="btn-primary text-xs py-2.5 px-6">Zadzwoń</a>
          </div>
        </div>
      </nav>

      {/* Back to home */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Strona główna
        </Link>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
        {children}
        <RelatedPages />
      </main>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 bg-secondary">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl font-light">Sprawdź dostępność terminu</h2>
          <p className="text-muted-foreground">Odpowiadamy zwykle w kilka godzin. Rezerwacja bezpośrednia — bez prowizji.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+48722765101" className="btn-primary inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> 722 765 101
            </a>
            <a href="mailto:tutinthewood@gmail.com" className="btn-outline inline-flex items-center gap-2">
              <Mail className="w-4 h-4" /> Napisz do nas
            </a>
          </div>
          <p className="text-sm text-muted-foreground">Konne 109/1, 16-030 Supraśl · Gospodarz: Maciej</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-graphite text-cream/70 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="font-serif text-lg text-cream">In The Woods</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="hover:text-cream transition-colors">Strona główna</Link>
            <Link to="/blog" className="hover:text-cream transition-colors">Blog</Link>
            <Link to="/noclegi-suprasl" className="hover:text-cream transition-colors">Noclegi Supraśl</Link>
            <Link to="/domek-suprasl" className="hover:text-cream transition-colors">Domek Supraśl</Link>
            <Link to="/domek-z-jacuzzi-podlasie" className="hover:text-cream transition-colors">Domek z jacuzzi</Link>
            <Link to="/dom-w-lesie-suprasl" className="hover:text-cream transition-colors">Dom w lesie</Link>
            <Link to="/weekend-suprasl" className="hover:text-cream transition-colors">Weekend Supraśl</Link>
            <Link to="/wieczor-panienski-suprasl" className="hover:text-cream transition-colors">Wieczór panieński</Link>
            <Link to="/atrakcje-suprasl" className="hover:text-cream transition-colors">Atrakcje Supraśla</Link>
            <Link to="/puszcza-knyszynska-nocleg" className="hover:text-cream transition-colors">Puszcza Knyszyńska</Link>
          </div>
          <p className="text-xs text-cream/40">© 2026 In The Woods. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default SEOPageLayout;
