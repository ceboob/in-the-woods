import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, Users, Phone, Mail, Send, ArrowLeft, Clock, ShieldCheck, CreditCard, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import SocialProof from '@/components/SocialProof';

interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const BookingModule = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [step, setStep] = useState<'form' | 'summary' | 'sent'>('form');
  const [sending, setSending] = useState(false);
  const { toast } = useToast();
  const [data, setData] = useState<BookingData>({
    checkIn: '', checkOut: '', guests: '2', name: '', email: '', phone: '', message: ''
  });

  const validateForm = () => {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const phoneRegex = /^\+?[0-9\s\-]{7,20}$/;
    if (!emailRegex.test(data.email)) {
      toast({ title: 'Błąd', description: 'Podaj poprawny adres e-mail.', variant: 'destructive' });
      return false;
    }
    if (!phoneRegex.test(data.phone)) {
      toast({ title: 'Błąd', description: 'Podaj poprawny numer telefonu (7-20 cyfr).', variant: 'destructive' });
      return false;
    }
    if (data.message && data.message.length > 2000) {
      toast({ title: 'Błąd', description: 'Wiadomość może mieć maksymalnie 2000 znaków.', variant: 'destructive' });
      return false;
    }
    if (new Date(data.checkOut) <= new Date(data.checkIn)) {
      toast({ title: 'Błąd', description: 'Data wyjazdu musi być późniejsza niż data przyjazdu.', variant: 'destructive' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'form') {
      if (!data.checkIn || !data.checkOut || !data.phone || !data.email) return;
      if (!validateForm()) return;
      setStep('summary');
    } else if (step === 'summary') {
      setSending(true);
      try {
        const { data: result, error } = await supabase.functions.invoke('rate-limit-submit', {
          body: {
            type: 'booking',
            check_in: data.checkIn,
            check_out: data.checkOut,
            guests: data.guests,
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
          },
        });
        if (error) throw error;
        if (result?.error) {
          if (result.error.includes('Too many')) {
            toast({ title: 'Zbyt wiele prób', description: 'Spróbuj ponownie za minutę.', variant: 'destructive' });
            return;
          }
          throw new Error(result.error);
        }
        setStep('sent');
      } catch (err) {
        console.error('Booking error:', err);
        toast({ title: 'Błąd', description: 'Nie udało się wysłać zapytania. Spróbuj ponownie lub zadzwoń.', variant: 'destructive' });
      } finally {
        setSending(false);
      }
    }
  };

  const nights = data.checkIn && data.checkOut ?
  Math.max(0, Math.ceil((new Date(data.checkOut).getTime() - new Date(data.checkIn).getTime()) / 86400000)) :
  0;

  return (
    <section id="rezerwacja" className="section-padding bg-background">
      <div ref={ref} className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10 space-y-3">
          <h2 className="section-title">Sprawdź termin</h2>
          <p className="section-subtitle mx-auto">Wypełnij formularz — odpowiemy zwykle w kilka godzin.</p>
        </div>

        <SocialProof />

        <div className="card-premium bg-warm-white">
          {step === 'sent' ?
          <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-forest/10 flex items-center justify-center">
                <Send className="w-7 h-7 text-forest" />
              </div>
              <h3 className="font-serif text-2xl">Dziękujemy za zapytanie</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Potwierdzimy dostępność i cenę w ciągu kilku godzin. Sprawdź telefon lub skrzynkę mailową.
              </p>
              <button onClick={() => {setStep('form');setData({ checkIn: '', checkOut: '', guests: '2', name: '', email: '', phone: '', message: '' });}}
            className="btn-outline mt-4 text-xs">
                Nowe zapytanie
              </button>
            </div> :

          <form onSubmit={handleSubmit} className="space-y-5">
              {step === 'summary' &&
            <button type="button" onClick={() => setStep('form')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Wróć do edycji
                </button>
            }

              {step === 'form' &&
            <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="booking-checkin" className="text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Przyjazd
                      </label>
                      <input id="booking-checkin" type="date" value={data.checkIn} onChange={(e) => setData({ ...data, checkIn: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="booking-checkout" className="text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Wyjazd
                      </label>
                      <input id="booking-checkout" type="date" value={data.checkOut} onChange={(e) => setData({ ...data, checkOut: e.target.value })}
                  min={data.checkIn} className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="booking-guests" className="text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" /> Goście
                      </label>
                      <select id="booking-guests" value={data.guests} onChange={(e) => setData({ ...data, guests: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'osoba' : n < 5 ? 'osoby' : 'osób'}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="booking-phone" className="text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4" /> Telefon
                      </label>
                      <input id="booking-phone" type="tel" placeholder="Numer telefonu" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest" required maxLength={20} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="booking-email" className="text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4" /> E-mail
                    </label>
                    <input id="booking-email" type="email" placeholder="Adres e-mail" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest" required maxLength={255} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="booking-message" className="text-xs tracking-wider uppercase text-muted-foreground">Wiadomość (opcjonalnie)</label>
                    <textarea id="booking-message" placeholder="Dodatkowe informacje..." value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest resize-none" rows={3} maxLength={1000} />
                  </div>
                </>
            }

              {step === 'summary' &&
            <div className="space-y-4">
                  <h3 className="font-serif text-xl font-medium">Podsumowanie zapytania</h3>
                  <div className="bg-secondary p-5 space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Przyjazd</span><span>{data.checkIn}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Wyjazd</span><span>{data.checkOut}</span></div>
                    {nights > 0 && <div className="flex justify-between"><span className="text-muted-foreground">Liczba nocy</span><span>{nights}</span></div>}
                    <div className="flex justify-between"><span className="text-muted-foreground">Goście</span><span>{data.guests}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Telefon</span><span>{data.phone}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">E-mail</span><span>{data.email}</span></div>
                    {data.message && <div className="flex justify-between"><span className="text-muted-foreground">Wiadomość</span><span className="text-right max-w-[60%]">{data.message}</span></div>}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    To wstępne zapytanie — potwierdzimy dostępność i cenę.
                  </p>
                </div>
            }

              <button type="submit" className="btn-primary w-full" disabled={sending}>
                {sending ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : step === 'form' ? 'Sprawdź dostępność' : 'Wyślij zapytanie'}
              </button>

              {step === 'form' &&
            <div className="flex flex-wrap justify-center gap-4 pt-2">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="w-3.5 h-3.5" /> Szybka odpowiedź</span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><CreditCard className="w-3.5 h-3.5" /> Bez prowizji</span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><ShieldCheck className="w-3.5 h-3.5" />Rabaty dla powracających klientów</span>
                </div>
            }
            </form>
          }
        </div>
      </div>
    </section>);

};

export default BookingModule;