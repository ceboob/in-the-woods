import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { ShieldCheck } from 'lucide-react';

interface GDPRConsentModalProps {
  open: boolean;
  onAccept: () => void;
  onReject: () => void;
}

const GDPRConsentModal = ({ open, onAccept, onReject }: GDPRConsentModalProps) => {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onReject()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="w-5 h-5 text-teal" />
            <DialogTitle className="font-serif text-lg">Zgoda na przetwarzanie danych</DialogTitle>
          </div>
          <DialogDescription className="text-left">
            Przed dokonaniem rezerwacji prosimy o wyrażenie zgody na przetwarzanie Twoich danych
            osobowych w celu:
          </DialogDescription>
        </DialogHeader>

        <ul className="space-y-2 text-sm text-muted-foreground pl-1">
          <li className="flex items-start gap-2">
            <span className="text-teal mt-0.5">•</span>
            Obsługi rezerwacji i kontaktu w sprawie pobytu
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal mt-0.5">•</span>
            Wysyłania potwierdzeń i informacji organizacyjnych
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal mt-0.5">•</span>
            Analizy statystyk (zanonimizowanych)
          </li>
        </ul>

        <p className="text-xs text-muted-foreground">
          Administratorem danych jest Krzemienna Chata. Masz prawo do wglądu, zmiany i usunięcia
          swoich danych w dowolnym momencie.{' '}
          <Link
            to="/polityka-prywatnosci"
            target="_blank"
            className="underline hover:text-foreground"
          >
            Pełna polityka prywatności
          </Link>
        </p>

        <DialogFooter className="gap-2 sm:gap-2">
          <button onClick={onReject} className="btn-outline text-sm px-5 py-2">
            Nie zgadzam się
          </button>
          <button onClick={onAccept} className="btn-primary text-sm px-5 py-2">
            Zgadzam się
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GDPRConsentModal;
