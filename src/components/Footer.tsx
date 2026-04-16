import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-foreground text-white/80 px-6 md:px-12 py-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="font-display text-2xl text-white mb-2 logo-glow">In The Woods</p>
          <p className="text-sm tracking-wider mb-3 text-white/70">Dom w Puszczy · Supraśl · Podlasie</p>
          <p className="text-xs text-white/70">Konne 109/1, 16-030 Supraśl</p>
          <p className="text-xs text-white/70">Gospodarz: Maciej</p>
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
            href="https://www.instagram.com/krzemienna_chata/"
            aria-label="Instagram"
            target="_blank"
            rel="me noopener noreferrer"
            className="text-white/70 hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/krzemienna.chata/"
            aria-label="Facebook"
            target="_blank"
            rel="me noopener noreferrer"
            className="text-white/70 hover:text-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Partner profiles */}
      <div className="mt-8 pt-6 border-t border-white/15">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <a
            href="https://www.airbnb.pl/rooms/1165170256851279014?guests=1&adults=1&s=67&unique_share_id=cd1458aa-ed37-425b-8252-1fcae5ea10b2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Airbnb"
            className="bg-white rounded-md px-3 py-2 hover:opacity-90 transition-opacity"
          >
            <img
              src="https://logo.clearbit.com/airbnb.com"
              alt="Airbnb"
              loading="lazy"
              className="h-5 w-auto"
            />
          </a>
          <a
            href="https://alohacamp.com/pl/property/dom-w-puszczy-z-ruska-bania-5875"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Alohacamp"
            className="bg-white rounded-md px-3 py-2 hover:opacity-90 transition-opacity"
          >
            <img
              src="https://logo.clearbit.com/alohacamp.com"
              alt="Alohacamp"
              loading="lazy"
              className="h-5 w-auto"
            />
          </a>
          <a
            href="https://alohacamp.com/pl/property/dom-w-puszczy-z-ruska-bania-5875"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Booking.com"
            className="bg-white rounded-md px-3 py-2 hover:opacity-90 transition-opacity"
          >
            <img
              src="https://logo.clearbit.com/booking.com"
              alt="Booking.com"
              loading="lazy"
              className="h-5 w-auto"
            />
          </a>
          <a
            href="https://doginclusive.com/oferty/in-the-woods-"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Doginclusive.pl"
            className="bg-white rounded-md px-3 py-2 hover:opacity-90 transition-opacity"
          >
            <img
              src="https://logo.clearbit.com/doginclusive.com"
              alt="Doginclusive.pl"
              loading="lazy"
              className="h-5 w-auto"
            />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/70">
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
        <p className="text-xs text-white/60">© 2026 In The Woods, Maciej Cybulko. Wszelkie prawa zastrzeżone.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
