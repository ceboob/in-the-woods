import { Instagram, Facebook } from 'lucide-react';

const Footer = () => (
  <footer className="bg-graphite text-cream/70 px-6 md:px-12 py-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <p className="font-serif text-xl text-cream mb-1">Krzemienna Chata</p>
        <p className="text-xs tracking-wider">Dom w Puszczy · Supraśl · Podlasie</p>
      </div>
      <div className="flex items-center gap-6">
        <a href="#" aria-label="Instagram" className="text-cream/50 hover:text-cream transition-colors"><Instagram className="w-5 h-5" /></a>
        <a href="#" aria-label="Facebook" className="text-cream/50 hover:text-cream transition-colors"><Facebook className="w-5 h-5" /></a>
      </div>
      <p className="text-xs text-cream/40">© 2026 Krzemienna Chata. Wszelkie prawa zastrzeżone.</p>
    </div>
  </footer>
);

export default Footer;
