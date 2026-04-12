import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  isRoute?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Dom',
    href: '#dom',
    dropdown: [
      { label: 'Opis domu', href: '/dom', isRoute: true },
      { label: 'Galeria zdjęć', href: '/galeria', isRoute: true },
      { label: 'Dokumenty i instrukcje', href: '/dokumenty', isRoute: true },
      { label: 'Dom w lesie', href: '/dom-w-lesie-suprasl', isRoute: true },
      { label: 'Domek z jacuzzi', href: '/domek-z-jacuzzi-podlasie', isRoute: true },
      { label: 'Noclegi Supraśl', href: '/noclegi-suprasl', isRoute: true },
    ],
  },
  {
    label: 'Atrakcje',
    href: '#lokalizacja',
    dropdown: [
      { label: 'Co zobaczyć', href: '/atrakcje-suprasl', isRoute: true },
      { label: 'Szlaki i natura', href: '/blog/szlaki-puszcza-knyszynska', isRoute: true },
      { label: 'Puszcza Knyszyńska', href: '/blog/puszcza-knyszynska-przewodnik', isRoute: true },
      { label: 'Restauracje', href: '/blog/przewodnik-kulinarny-suprasl', isRoute: true },
    ],
  },
  {
    label: 'Pomysły na pobyt',
    href: '#',
    dropdown: [
      { label: 'Romantyczny weekend', href: '/blog/romantyczny-weekend-podlasie', isRoute: true },
      { label: 'Z psem', href: '/blog/podlasie-z-psem', isRoute: true },
      { label: 'Dla rodzin', href: '/blog/suprasl-z-dziecmi', isRoute: true },
      { label: 'Wieczór panieński', href: '/wieczor-panienski-suprasl', isRoute: true },
      { label: 'Workation', href: '/blog/workation-podlasie', isRoute: true },
    ],
  },
  { label: 'Cennik', href: '#cennik' },
  { label: 'Przewodnik', href: '/blog', isRoute: true },
  { label: 'Kontakt', href: '#kontakt' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    setMobileExpanded(null);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDropdownEnter = (label: string) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const textClass = scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/70 hover:text-white';
  const activeTextClass = scrolled ? 'text-foreground' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => handleClick('#hero')}
          className={`font-display text-2xl md:text-3xl transition-colors duration-500 logo-glow ${scrolled ? 'text-foreground' : 'text-white'}`}
        >
          In The Woods
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`nav-link transition-colors duration-500 inline-flex items-center gap-1 ${textClass}`}
                >
                  {item.label}
                  <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                    <div className="bg-background border border-border rounded-lg shadow-lg py-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link transition-colors duration-500 ${textClass}`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`nav-link transition-colors duration-500 ${textClass}`}
              >
                {item.label}
              </button>
            ),
          )}
          <button
            onClick={() => handleClick('#rezerwacja')}
            className="btn-primary text-xs py-2.5 px-6"
          >
            Rezerwuj
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full py-3 nav-link text-foreground/70 hover:text-foreground text-left"
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpanded === item.label && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block py-2 text-sm text-foreground/60 hover:text-foreground"
                        onClick={() => setMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className="block py-3 nav-link text-foreground/70 hover:text-foreground w-full text-left"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="block py-3 nav-link text-foreground/70 hover:text-foreground w-full text-left"
              >
                {item.label}
              </button>
            ),
          )}
          <button
            onClick={() => handleClick('#rezerwacja')}
            className="btn-primary text-xs py-2.5 px-6 w-full mt-4"
          >
            Rezerwuj
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
