import { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past hero (approx 600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToBooking = () => {
    document.querySelector('#rezerwacja')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border px-4 py-3 safe-area-bottom">
      <div className="flex gap-3">
        <a href="tel:+48722765101" className="flex-1 btn-outline !py-3 !px-3 !text-xs inline-flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" /> Zadzwoń
        </a>
        <button onClick={scrollToBooking} className="flex-1 btn-primary !py-3 !px-3 !text-xs inline-flex items-center justify-center gap-2">
          <Calendar className="w-4 h-4" /> Rezerwuj
        </button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
