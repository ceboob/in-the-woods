import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinkClass =
  'group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground';

const contactLinkClass =
  'group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:bg-white/10 hover:text-white';

const Footer = () => (
  <footer className="bg-foreground px-6 py-12 text-white/80 md:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        <div className="text-center md:text-left">
          <p className="logo-glow mb-2 font-display text-2xl text-white">In The Woods</p>
          <p className="mb-3 text-sm tracking-wider text-white/70">Dom w Puszczy · Supraśl · Podlasie</p>
          <p className="text-xs text-white/70">Konne 109/1, 16-030 Supraśl</p>
          <p className="text-xs text-white/70">Gospodarz: Maciej</p>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <a href="tel:+48722765101" className={contactLinkClass}>
            <Phone className="h-4 w-4 text-primary transition-transform duration-200 group-hover:scale-110" />
            <span>722 765 101</span>
          </a>
          <a href="mailto:tutinthewood@gmail.com" className={contactLinkClass}>
            <Mail className="h-4 w-4 text-primary transition-transform duration-200 group-hover:scale-110" />
            <span>tutinthewood@gmail.com</span>
          </a>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.24em] text-white/50">Social media</span>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/krzemienna_chata/"
              aria-label="Instagram"
              className={socialLinkClass}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
            </a>
            <a
              href="https://www.facebook.com/krzemienna.chata/"
              aria-label="Facebook"
              className={socialLinkClass}
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/15 pt-6">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <a
            href="https://www.airbnb.pl/rooms/1165170256851279014?guests=1&adults=1&s=67&unique_share_id=cd1458aa-ed37-425b-8252-1fcae5ea10b2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Airbnb"
            className="bg-white rounded-md px-3 py-2 hover:opacity-90 transition-opacity"
          >
            <img
              src="/logos/ai.png"
              alt="Airbnb"
              loading="lazy"
              className="h-7 w-auto max-w-32 object-contain"
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
              src="/logos/a.png"
              alt="Alohacamp"
              loading="lazy"
              className="h-7 w-auto max-w-32 object-contain"
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
              src="/logos/b.png"
              alt="Booking.com"
              loading="lazy"
              className="h-7 w-auto max-w-32 object-contain"
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
              src="/logos/d.png"
              alt="Doginclusive.pl"
              loading="lazy"
              className="h-7 w-auto max-w-32 object-contain"
            />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/70">
          <Link to="/noclegi-suprasl" className="text-white/90 transition-colors hover:text-primary">
            Noclegi Supraśl
          </Link>
          <Link to="/domek-suprasl" className="text-white/90 transition-colors hover:text-primary">
            Domek Supraśl
          </Link>
          <Link to="/domek-z-jacuzzi-podlasie" className="text-white/90 transition-colors hover:text-primary">
            Domek z jacuzzi
          </Link>
          <Link to="/dom-w-lesie-suprasl" className="text-white/90 transition-colors hover:text-primary">
            Dom w lesie Supraśl
          </Link>
          <Link to="/weekend-suprasl" className="text-white/90 transition-colors hover:text-primary">
            Weekend Supraśl
          </Link>
          <Link to="/wieczor-panienski-suprasl" className="text-white/90 transition-colors hover:text-primary">
            Wieczór panieński
          </Link>
          <Link to="/atrakcje-suprasl" className="text-white/90 transition-colors hover:text-primary">
            Atrakcje Supraśla
          </Link>
          <Link to="/puszcza-knyszynska-nocleg" className="text-white/90 transition-colors hover:text-primary">
            Nocleg Puszcza Knyszyńska
          </Link>
          <Link to="/informator" className="text-white/90 transition-colors hover:text-primary">
            Informator gościa
          </Link>
          <Link to="/blog" className="text-white/90 transition-colors hover:text-primary">
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
