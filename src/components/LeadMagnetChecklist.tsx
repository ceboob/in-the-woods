import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Mail } from 'lucide-react';
import { notifyHost } from '@/lib/notifyHost';
import { pushToDataLayer } from '@/lib/gtm';

interface LeadMagnetChecklistProps {
  /** Nazwa materiału, trafia do powiadomienia e-mail i do GTM. */
  source: string;
  title: string;
  text: string;
  /** Ścieżka do pliku PDF w /public. */
  fileUrl: string;
  fileName: string;
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const LeadMagnetChecklist = ({
  source,
  title,
  text,
  fileUrl,
  fileName,
}: LeadMagnetChecklistProps) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError('Wpiszcie poprawny adres e-mail.');
      return;
    }
    if (!consent) {
      setError('Zaznaczcie zgodę, żebyśmy mogli wysłać Wam wiadomość.');
      return;
    }
    setError('');
    setStatus('sending');
    pushToDataLayer({ event: 'lead_magnet_submit', source });
    await notifyHost({ type: 'lead', email: email.trim(), consent: true, source });
    // Plik udostępniamy nawet przy błędzie wysyłki, żeby czytelnik nie został z niczym.
    setStatus('done');
  };

  return (
    <aside
      className="not-prose my-10 rounded-lg border-2 border-primary/40 bg-secondary/40 p-6"
      aria-labelledby={`${source}-title`}
    >
      <p
        id={`${source}-title`}
        className="font-heading text-xl font-light text-foreground mb-2 flex items-center gap-2"
      >
        <Download className="w-5 h-5 text-primary" aria-hidden="true" /> {title}
      </p>
      <p className="text-foreground/80 leading-relaxed mb-4">{text}</p>

      {status === 'done' ? (
        <div>
          <p className="text-foreground mb-3">Dziękujemy! Checklista jest gotowa do pobrania.</p>
          <a
            href={fileUrl}
            download={fileName}
            onClick={() => pushToDataLayer({ event: 'lead_magnet_download', source })}
            className="btn-primary inline-flex items-center gap-2 text-xs py-2.5 px-6"
          >
            <Download className="w-4 h-4" aria-hidden="true" /> Pobierz checklistę (PDF)
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <label htmlFor={`${source}-email`} className="sr-only">
              Adres e-mail
            </label>
            <div className="relative flex-1">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                id={`${source}-email`}
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Wasz adres e-mail"
                className="w-full rounded-md border border-border bg-background py-2.5 pl-9 pr-3 text-sm text-foreground"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary text-xs py-2.5 px-6 whitespace-nowrap disabled:opacity-60"
            >
              {status === 'sending' ? 'Wysyłanie…' : 'Odbierz checklistę'}
            </button>
          </div>
          <label className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5"
            />
            <span>
              Zgadzam się na kontakt e-mailowy od In The Woods (Maciej Cybulko) w&nbsp;sprawie
              pobytu i&nbsp;okazjonalnych propozycji terminów. Zgodę możecie wycofać w&nbsp;każdej
              chwili. Szczegóły w&nbsp;
              <Link to="/polityka-prywatnosci" className="underline">
                polityce prywatności
              </Link>
              .
            </span>
          </label>
          {error ? (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          ) : null}
        </form>
      )}
    </aside>
  );
};

export default LeadMagnetChecklist;
