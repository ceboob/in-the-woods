import { CheckCircle, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const PlatnoscSukces = () => {
  return (
    <>
      <SEOHead
        title="Płatność zakończona – In The Woods"
        description="Dziękujemy za wpłatę zaliczki. Potwierdzimy rezerwację w ciągu kilku godzin."
        canonical="https://www.suprasl.online/platnosc-sukces"
        noindex
      />
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-heading text-3xl font-semibold">Dziękujemy za wpłatę!</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Zaliczka została zaksięgowana. Potwierdzimy rezerwację i wyślemy szczegóły pobytu na
            podany adres e-mail.
          </p>
          <div className="bg-secondary p-4 rounded-lg text-sm text-muted-foreground">
            <p>Masz pytania? Zadzwoń do nas:</p>
            <a
              href="tel:+48722765101"
              className="text-primary font-medium flex items-center justify-center gap-2 mt-2"
            >
              <Phone className="w-4 h-4" /> +48 722 765 101
            </a>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Wróć na stronę główną
          </Link>
        </div>
      </div>
    </>
  );
};

export default PlatnoscSukces;
