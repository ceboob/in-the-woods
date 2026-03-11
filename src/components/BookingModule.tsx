import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, Users, Dog, Flame, TreePine, Send, ArrowLeft } from 'lucide-react';

interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: string;
  pets: boolean;
  bania: boolean;
  firewood: boolean;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const BASE_PRICE = 650;
const BANIA_PRICE = 200;
const FIREWOOD_PRICE = 50;

const BookingModule = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [step, setStep] = useState<'form' | 'summary' | 'sent'>('form');
  const [data, setData] = useState<BookingData>({
    checkIn: '', checkOut: '', guests: '2', pets: false,
    bania: false, firewood: false, name: '', email: '', phone: '', message: '',
  });

  const nights = data.checkIn && data.checkOut
    ? Math.max(0, Math.ceil((new Date(data.checkOut).getTime() - new Date(data.checkIn).getTime()) / 86400000))
    : 0;

  const estimate = nights * BASE_PRICE + (data.bania ? BANIA_PRICE : 0) + (data.firewood ? FIREWOOD_PRICE : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'form') {
      if (!data.checkIn || !data.checkOut || !data.name || !data.email) return;
      setStep('summary');
    } else if (step === 'summary') {
      setStep('sent');
    }
  };

  return (
    <section id="rezerwacja" className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Rezerwacja</p>
          <h2 className="section-title">Zaplanuj swój pobyt</h2>
          <p className="section-subtitle mx-auto">Wypełnij formularz, a potwierdzimy dostępność i przedstawimy szczegółową ofertę.</p>
        </div>

        <div className="card-premium bg-warm-white">
          {step === 'sent' ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-forest/10 flex items-center justify-center">
                <Send className="w-7 h-7 text-forest" />
              </div>
              <h3 className="font-serif text-2xl">Dziękujemy za zapytanie</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                To wstępne zapytanie — potwierdzimy dostępność i cenę w ciągu 24 godzin. Sprawdź skrzynkę mailową.
              </p>
              <button onClick={() => { setStep('form'); setData({ checkIn: '', checkOut: '', guests: '2', pets: false, bania: false, firewood: false, name: '', email: '', phone: '', message: '' }); }}
                className="btn-outline mt-4 text-xs">
                Nowe zapytanie
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 'summary' && (
                <button type="button" onClick={() => setStep('form')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Wróć do edycji
                </button>
              )}

              {step === 'form' && (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Data przyjazdu
                      </label>
                      <input type="date" value={data.checkIn} onChange={e => setData({ ...data, checkIn: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Data wyjazdu
                      </label>
                      <input type="date" value={data.checkOut} onChange={e => setData({ ...data, checkOut: e.target.value })}
                        min={data.checkIn} className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" /> Liczba gości
                      </label>
                      <select value={data.guests} onChange={e => setData({ ...data, guests: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest">
                        {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'osoba' : n < 5 ? 'osoby' : 'osób'}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-wider uppercase text-muted-foreground flex items-center gap-2">
                        <Dog className="w-4 h-4" /> Zwierzęta
                      </label>
                      <div className="flex gap-4 pt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" checked={data.pets} onChange={() => setData({ ...data, pets: true })} className="accent-forest" />
                          <span className="text-sm">Tak</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" checked={!data.pets} onChange={() => setData({ ...data, pets: false })} className="accent-forest" />
                          <span className="text-sm">Nie</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-border pt-4">
                    <p className="text-xs tracking-wider uppercase text-muted-foreground">Opcjonalne dodatki</p>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={data.bania} onChange={e => setData({ ...data, bania: e.target.checked })} className="accent-forest w-4 h-4" />
                      <Flame className="w-4 h-4 text-wood" />
                      <span className="text-sm">Balia / ruska bania (+{BANIA_PRICE} zł)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={data.firewood} onChange={e => setData({ ...data, firewood: e.target.checked })} className="accent-forest w-4 h-4" />
                      <TreePine className="w-4 h-4 text-wood" />
                      <span className="text-sm">Drewno / opał (+{FIREWOOD_PRICE} zł)</span>
                    </label>
                  </div>

                  {nights > 0 && (
                    <div className="bg-secondary p-4 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{nights} {nights === 1 ? 'noc' : nights < 5 ? 'noce' : 'nocy'} × {BASE_PRICE} zł</span>
                        <span>{nights * BASE_PRICE} zł</span>
                      </div>
                      {data.bania && <div className="flex justify-between text-sm"><span>Balia / bania</span><span>{BANIA_PRICE} zł</span></div>}
                      {data.firewood && <div className="flex justify-between text-sm"><span>Drewno / opał</span><span>{FIREWOOD_PRICE} zł</span></div>}
                      <div className="flex justify-between font-medium border-t border-border pt-2 mt-2">
                        <span>Szacunkowy koszt</span>
                        <span>{estimate} zł</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Cena orientacyjna — końcowa kwota zależy od terminu i dodatków.</p>
                    </div>
                  )}

                  <div className="border-t border-border pt-6 space-y-4">
                    <p className="text-xs tracking-wider uppercase text-muted-foreground">Dane kontaktowe</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Imię i nazwisko" value={data.name} onChange={e => setData({ ...data, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest" required maxLength={100} />
                      <input type="email" placeholder="E-mail" value={data.email} onChange={e => setData({ ...data, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest" required maxLength={255} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="tel" placeholder="Telefon (opcjonalnie)" value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest" maxLength={20} />
                      <textarea placeholder="Wiadomość (opcjonalnie)" value={data.message} onChange={e => setData({ ...data, message: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-forest resize-none" rows={1} maxLength={1000} />
                    </div>
                  </div>
                </>
              )}

              {step === 'summary' && (
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-medium">Podsumowanie zapytania</h3>
                  <div className="bg-secondary p-5 space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Przyjazd</span><span>{data.checkIn}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Wyjazd</span><span>{data.checkOut}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Goście</span><span>{data.guests}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Zwierzęta</span><span>{data.pets ? 'Tak' : 'Nie'}</span></div>
                    {data.bania && <div className="flex justify-between"><span className="text-muted-foreground">Balia / bania</span><span>Tak</span></div>}
                    {data.firewood && <div className="flex justify-between"><span className="text-muted-foreground">Drewno</span><span>Tak</span></div>}
                    <div className="border-t border-border pt-2 mt-2 flex justify-between font-medium">
                      <span>Szacunkowy koszt</span><span>{estimate} zł</span>
                    </div>
                  </div>
                  <div className="bg-secondary p-5 space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Imię:</span> {data.name}</p>
                    <p><span className="text-muted-foreground">E-mail:</span> {data.email}</p>
                    {data.phone && <p><span className="text-muted-foreground">Telefon:</span> {data.phone}</p>}
                    {data.message && <p><span className="text-muted-foreground">Wiadomość:</span> {data.message}</p>}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    To wstępne zapytanie — potwierdzimy dostępność i cenę. Cena końcowa może się różnić w zależności od terminu i wybranych dodatków.
                  </p>
                </div>
              )}

              <button type="submit" className="btn-primary w-full">
                {step === 'form' ? 'Sprawdź dostępność' : 'Wyślij zapytanie'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingModule;
