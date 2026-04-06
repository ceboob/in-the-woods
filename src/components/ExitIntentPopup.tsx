import { useState, useEffect, useCallback } from 'react';
import { X, Phone, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 5 && !dismissed && !sessionStorage.getItem('exit_popup_shown')) {
      setShow(true);
      sessionStorage.setItem('exit_popup_shown', 'true');
    }
  }, [dismissed]);

  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [handleMouseLeave]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneRegex = /^\+?[0-9\s\-]{7,20}$/;
    if (!phone || !phoneRegex.test(phone)) return;

    try {
      const { data: result, error } = await supabase.functions.invoke('rate-limit-submit', {
        body: { type: 'callback', phone, source: 'exit_intent' },
      });
      if (error) throw error;
      if (result?.error?.includes('Too many')) {
        setSubmitted(false);
        return;
      }
    } catch (err) {
      console.error('Callback save error:', err);
    }

    setSubmitted(true);
    setTimeout(() => {
      setShow(false);
      setDismissed(true);
    }, 3000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-graphite/60 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />
      
      <div className="relative bg-background rounded-xl shadow-2xl max-w-md w-full p-8 animate-fade-up" role="dialog" aria-modal="true" aria-label="Zostaw numer telefonu" style={{ animationDelay: '0s' }}>
        <button onClick={handleClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" aria-label="Zamknij okno">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-4 space-y-3">
            <div className="w-14 h-14 mx-auto rounded-full bg-forest/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-forest" />
            </div>
            <h3 className="font-serif text-xl font-semibold">Dziękujemy!</h3>
            <p className="text-sm text-muted-foreground">Oddzwonimy w ciągu 15 minut w godzinach pracy.</p>
          </div>
        ) : (
          <>
            <div className="text-center space-y-3 mb-6">
              <p className="text-xs tracking-[0.2em] uppercase text-forest font-medium">Zanim wyjdziesz</p>
              <h3 className="font-serif text-2xl font-semibold leading-tight">
                Zostaw numer —<br />oddzwonimy w 15 minut
              </h3>
              <p className="text-sm text-muted-foreground">
                Chętnie odpowiemy na pytania o dostępność, cenę i pobyt w In The Woods.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Twój numer telefonu"
                    aria-label="Numer telefonu"
                    className="w-full pl-10 pr-4 py-3 bg-secondary border border-border text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/30"
                    required
                    maxLength={15}
                  />
                </div>
                <button type="submit" className="btn-primary py-3 px-5 !text-xs" aria-label="Wyślij numer telefonu">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-center text-muted-foreground">Bez zobowiązań. Dzwonimy raz, nie spamujemy.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup;
