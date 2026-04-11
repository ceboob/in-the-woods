import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-foreground text-white/80 px-6 md:px-12 py-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="font-display text-2xl text-white mb-2">In The Woods</p>
          <p className="text-sm tracking-wider mb-3 text-white/60">Dom w Puszczy · Supraśl · Podlasie</p>
          <p className="text-xs text-white/50">Konne 109/1, 16-030 Supraśl</p>
          <p className="text-xs text-white/50">Gospodarz: Maciej</p>
        </div>
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <a
              href="tel:+48722765101"
              className="text-sm text-white/80 hover:text-primary transition-colors"
            >
              722 765 101
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <a
              href="mailto:tutinthewood@gmail.com"
              className="text-sm text-white/80 hover:text-primary transition-colors"
            >
              tutinthewood@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            aria-label="Instagram"
            className="text-white/60 hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-white/60 hover:text-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* SEO Internal Links */}
      <div className="mt-8 pt-6 border-t border-white/15">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/60">
          <Link to="/noclegi-suprasl" className="hover:text-primary transition-colors">
            Noclegi Supraśl
          </Link>
          <Link to="/domek-suprasl" className="hover:text-primary transition-colors">
            Domek Supraśl
          </Link>
          <Link to="/domek-z-jacuzzi-podlasie" className="hover:text-primary transition-colors">
            Domek z jacuzzi
          </Link>
          <Link to="/dom-w-lesie-suprasl" className="hover:text-primary transition-colors">
            Dom w lesie Supraśl
          </Link>
          <Link to="/weekend-suprasl" className="hover:text-primary transition-colors">
            Weekend Supraśl
          </Link>
          <Link to="/wieczor-panienski-suprasl" className="hover:text-primary transition-colors">
            Wieczór panieński
          </Link>
          <Link to="/atrakcje-suprasl" className="hover:text-primary transition-colors">
            Atrakcje Supraśla
          </Link>
          <Link to="/puszcza-knyszynska-nocleg" className="hover:text-primary transition-colors">
            Nocleg Puszcza Knyszyńska
          </Link>
          <Link to="/informator" className="hover:text-primary transition-colors">
            Informator gościa
          </Link>
          <Link to="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-white/40">© 2026 In The Woods, Maciej Cybulko. Wszelkie prawa zastrzeżone.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
