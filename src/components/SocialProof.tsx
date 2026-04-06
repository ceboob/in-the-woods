import { useState, useEffect } from 'react';
import { Eye, Clock } from 'lucide-react';

const MESSAGES = [
  'Ostatnia rezerwacja: 2 dni temu',
  'Zarezerwowany 3 razy w tym tygodniu',
  'Popularny termin — zostało kilka wolnych weekendów',
  '12 osób przeglądało ten obiekt w ostatnim tygodniu',
];

const SocialProof = () => {
  const [currentMsg, setCurrentMsg] = useState(0);
  const [visible, setVisible] = useState(true);
  const [viewerCount] = useState(() => Math.floor(Math.random() * 4) + 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentMsg((prev) => (prev + 1) % MESSAGES.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3 mb-6">
      <div className="flex items-center gap-2 text-xs text-forest bg-forest/5 px-3 py-2 rounded-lg">
        <Eye className="w-3.5 h-3.5 flex-shrink-0" />
        <span>
          <strong>{viewerCount} osób</strong> ogląda teraz ten obiekt
        </span>
      </div>
      <div
        className={`flex items-center gap-2 text-xs text-muted-foreground bg-secondary px-3 py-2 rounded-lg transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <Clock className="w-3.5 h-3.5 flex-shrink-0" />
        <span>{MESSAGES[currentMsg]}</span>
      </div>
    </div>
  );
};

export default SocialProof;
