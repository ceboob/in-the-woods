import { ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface FAQ {
  question: string;
  answer: string;
}

interface BlogArticleLayoutProps {
  children: ReactNode;
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  publishDate: string;
  readTime: string;
  keywords: string[];
  faqs: FAQ[];
  relatedArticles?: { title: string; slug: string }[];
  ogImage?: string;
}

const BlogArticleLayout = ({
  children,
  title,
  metaTitle,
  metaDescription,
  slug,
  publishDate,
  readTime,
  keywords,
  faqs,
  relatedArticles = [],
}: BlogArticleLayoutProps) => {
  useEffect(() => {
    document.title = metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', metaDescription);
    const metaKw = document.querySelector('meta[name="keywords"]');
    if (metaKw) metaKw.setAttribute('content', keywords.join(', '));
    window.scrollTo(0, 0);
  }, [metaTitle, metaDescription, keywords]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": metaDescription,
    "url": `https://www.suprasl.online/blog/${slug}`,
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": { "@type": "Organization", "name": "In The Woods" },
    "publisher": {
      "@type": "Organization",
      "name": "In The Woods",
      "url": "https://www.suprasl.online"
    },
    "mainEntityOfPage": `https://www.suprasl.online/blog/${slug}`,
    "keywords": keywords.join(', ')
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://www.suprasl.online/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.suprasl.online/blog" },
      { "@type": "ListItem", "position": 3, "name": title, "item": `https://www.suprasl.online/blog/${slug}` }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      {/* Navbar */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-xl font-light tracking-wide text-foreground">
            In The Woods
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/blog" className="nav-link text-foreground/70 hover:text-foreground">Blog</Link>
            <Link to="/noclegi-suprasl" className="nav-link text-foreground/70 hover:text-foreground">Noclegi</Link>
            <Link to="/atrakcje-suprasl" className="nav-link text-foreground/70 hover:text-foreground">Atrakcje</Link>
            <Link to="/weekend-suprasl" className="nav-link text-foreground/70 hover:text-foreground">Weekend</Link>
            <a href="tel:+48722765101" className="btn-primary text-xs py-2.5 px-6">Zadzwoń</a>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-6">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground transition-colors">Strona główna</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground truncate max-w-[200px]">{title}</span>
        </nav>
      </div>

      {/* Article meta */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-8 pb-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{publishDate}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{readTime}</span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 pb-12">
        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md">
          {children}
        </div>
      </article>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-8">Najczęściej zadawane pytania</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-border rounded-lg overflow-hidden">
                <summary className="cursor-pointer px-6 py-4 bg-card hover:bg-accent/30 transition-colors font-medium text-foreground flex items-center justify-between">
                  {faq.question}
                  <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 py-4 text-foreground/80 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
          <h2 className="font-serif text-2xl font-light text-foreground mb-6">Czytaj również</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedArticles.map((a, i) => (
              <Link key={i} to={`/blog/${a.slug}`} className="block p-5 border border-border rounded-lg hover:bg-card transition-colors group">
                <span className="text-foreground group-hover:text-primary transition-colors font-medium">{a.title}</span>
                <span className="block mt-1 text-sm text-muted-foreground">Czytaj więcej →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Booking CTA */}
      <section className="px-6 md:px-12 py-16 bg-secondary">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl font-light text-foreground">Gdzie nocować w Supraślu?</h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Jeśli szukasz komfortowego noclegu w Supraślu, In The Woods oferuje prywatny dom w lesie z jacuzzi i kominkiem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+48722765101" className="btn-primary inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Sprawdź dostępność
            </a>
            <a href="mailto:tutinthewood@gmail.com" className="btn-outline inline-flex items-center gap-2">
              <Mail className="w-4 h-4" /> Napisz do nas
            </a>
          </div>
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
            <Link to="/atrakcje-suprasl" className="hover:text-cream transition-colors">Atrakcje Supraśla</Link>
            <Link to="/wieczor-panienski-suprasl" className="hover:text-cream transition-colors">Wieczór panieński</Link>
            <Link to="/weekend-suprasl" className="hover:text-cream transition-colors">Weekend Supraśl</Link>
            <Link to="/puszcza-knyszynska-nocleg" className="hover:text-cream transition-colors">Puszcza Knyszyńska</Link>
          </div>
          <p className="text-xs text-cream/40">© 2026 In The Woods. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogArticleLayout;
