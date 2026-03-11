import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-graphite text-cream/70 px-6 md:px-12 py-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="font-serif text-xl text-cream mb-1">Krzemienna Chata</p>
          <p className="text-xs tracking-wider mb-3">Dom w Puszczy · Supraśl · Podlasie</p>
          <p className="text-xs text-cream/50">Konne 109/1, 16-030 Supraśl</p>
          <p className="text-xs text-cream/50">Gospodarz: Maciej</p>
        </div>
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-cream/50" />
            <a href="tel:+48722765101" className="text-sm text-cream/70 hover:text-cream transition-colors">722 765 101</a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-cream/50" />
            <a href="mailto:tutinthewood@gmail.com" className="text-sm text-cream/70 hover:text-cream transition-colors">tutinthewood@gmail.com</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" aria-label="Instagram" className="text-cream/50 hover:text-cream transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" aria-label="Facebook" className="text-cream/50 hover:text-cream transition-colors"><Facebook className="w-5 h-5" /></a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-cream/10 text-center">
        <p className="text-xs text-cream/40">© 2026 Krzemienna Chata. Wszelkie prawa zastrzeżone.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
