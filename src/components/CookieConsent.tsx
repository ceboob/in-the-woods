import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const COOKIE_KEY = 'cookie_consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-card/95 backdrop-blur-sm border-t border-border shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <p className="text-sm text-muted-foreground flex-1">
            Ta strona używa cookies, aby zapewnić najlepszą jakość usług.
            Klikając „Akceptuję", wyrażasz zgodę na ich użycie.{' '}
            <Link
              to="/polityka-prywatnosci"
              className="underline hover:text-foreground transition-colors"
            >
              Polityka prywatności i cookies
            </Link>
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={accept}
              className="bg-forest text-primary-foreground text-sm px-5 py-2 hover:opacity-90 transition-opacity"
            >
              Akceptuję
            </button>
            <button
              onClick={reject}
              className="border border-border text-sm px-4 py-2 hover:bg-secondary transition-colors text-muted-foreground"
            >
              Odrzuć
            </button>
            <button
              onClick={reject}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Zamknij"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
