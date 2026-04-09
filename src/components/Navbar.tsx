import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Dom', href: '#dom' },
  { label: 'Jacuzzi', href: '#jacuzzi' },
  { label: 'Okolica', href: '#lokalizacja' },
  { label: 'Cennik', href: '#cennik' },
  { label: 'Imprezy', href: '/wieczor-panienski-suprasl', isRoute: true },
  { label: 'Kontakt', href: '#kontakt' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => handleClick('#hero')}
          className={`font-display text-2xl md:text-3xl transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-white'}`}
        >
          In The Woods
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                className={`nav-link transition-colors duration-500 ${scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/70 hover:text-white'}`}
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className={`nav-link transition-colors duration-500 ${scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/70 hover:text-white'}`}
              >
                {l.label}
              </button>
            ),
          )}
          <Link
            to="/blog"
            className={`nav-link transition-colors duration-500 ${scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/70 hover:text-white'}`}
          >
            Blog
          </Link>
          <button
            onClick={() => handleClick('#rezerwacja')}
            className="btn-primary text-xs py-2.5 px-6"
          >
            Rezerwuj
          </button>
        </div>

        <button
          className={`md:hidden transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {links.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                className="block nav-link text-foreground/70 hover:text-foreground w-full text-left"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className="block nav-link text-foreground/70 hover:text-foreground w-full text-left"
              >
                {l.label}
              </button>
            ),
          )}
          <Link
            to="/blog"
            className="block nav-link text-foreground/70 hover:text-foreground w-full text-left"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <button
            onClick={() => handleClick('#rezerwacja')}
            className="btn-primary text-xs py-2.5 px-6 w-full"
          >
            Rezerwuj
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
