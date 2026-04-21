const NAV_ITEMS = [
  { href: "/", label: "Start" },
  { href: "/noclegi-suprasl", label: "Noclegi Supraśl" },
  { href: "/dom-w-lesie-suprasl", label: "Dom w Lesie" },
  { href: "/atrakcje-suprasl", label: "Atrakcje" },
  { href: "/galeria", label: "Galeria" },
  { href: "/kontakt", label: "Kontakt" }
];

const PAGE_CONFIG = {
  index: {
    activePath: "/",
    subtitle: "Dom w lesie pod Supraślem",
    desktopCta: { href: "tel:+48722765101", text: "Zarezerwuj pobyt" },
    footerDescription:
      "Nowoczesna strona dla klimatycznego domu w lesie pod Supraślem. Zaprojektowana tak, by budować zaufanie, utrzymywać uwagę użytkownika i wzmacniać widoczność na lokalne frazy SEO.",
    footerRights: true,
    footerSections: [
      {
        title: "Nawigacja",
        links: [
          { href: "/noclegi-suprasl", label: "Noclegi Supraśl" },
          { href: "/dom-w-lesie-suprasl", label: "Dom w lesie" },
          { href: "/atrakcje-suprasl", label: "Atrakcje Supraśl" }
        ]
      },
      {
        title: "Kontakt",
        links: [
          { href: "/kontakt", label: "Kontakt i dojazd" },
          { href: "tel:+48722765101", label: "Telefon: 722 765 101" },
          { href: "/galeria", label: "Galeria obiektu" }
        ]
      }
    ]
  },
  noclegi: {
    activePath: "/noclegi-suprasl",
    subtitle: "Noclegi pod Supraślem",
    desktopCta: { href: "/kontakt", text: "Zapytaj o termin" },
    footerDescription:
      "Leśny nocleg w okolicach Supraśla dla osób, które szukają więcej klimatu, więcej ciszy i lepszej jakości pobytu.",
    footerSections: [
      {
        title: "Podstrony",
        links: [
          { href: "/dom-w-lesie-suprasl", label: "Dom w lesie" },
          { href: "/atrakcje-suprasl", label: "Atrakcje" },
          { href: "/galeria", label: "Galeria" }
        ]
      },
      {
        title: "Kontakt",
        links: [
          { href: "/kontakt", label: "Kontakt i dojazd" },
          { href: "tel:+48722765101", label: "722 765 101" }
        ]
      }
    ]
  },
  dom: {
    activePath: "/dom-w-lesie-suprasl",
    subtitle: "Dom w lesie pod Supraślem",
    desktopCta: { href: "/kontakt", text: "Zapytaj o pobyt" },
    footerDescription:
      "Dom w lesie pod Supraślem zaprojektowany na stronie tak, by sprzedawał klimat miejsca równie mocno jak lokalizację.",
    footerSections: [
      {
        title: "Zobacz też",
        links: [
          { href: "/noclegi-suprasl", label: "Noclegi Supraśl" },
          { href: "/atrakcje-suprasl", label: "Atrakcje Supraśl" }
        ]
      },
      {
        title: "Kontakt",
        links: [
          { href: "/kontakt", label: "Kontakt i rezerwacja" },
          { href: "tel:+48722765101", label: "722 765 101" }
        ]
      }
    ]
  },
  atrakcje: {
    activePath: "/atrakcje-suprasl",
    subtitle: "Atrakcje Supraśl i okolice",
    desktopCta: { href: "/kontakt", text: "Zaplanuj pobyt" },
    footerDescription:
      "Leśna baza wypadowa do odkrywania Supraśla, uzdrowiskowego klimatu i Puszczy Knyszyńskiej.",
    footerSections: [
      {
        title: "Przejdź dalej",
        links: [
          { href: "/noclegi-suprasl", label: "Noclegi Supraśl" },
          { href: "/dom-w-lesie-suprasl", label: "Dom w lesie" }
        ]
      },
      {
        title: "Kontakt",
        links: [
          { href: "/kontakt", label: "Kontakt i rezerwacja" },
          { href: "tel:+48722765101", label: "722 765 101" }
        ]
      }
    ]
  },
  galeria: {
    activePath: "/galeria",
    subtitle: "Galeria zdjęć",
    desktopCta: { href: "/kontakt", text: "Zapytaj o pobyt" },
    footerDescription:
      "Galeria wspiera zarówno wizerunek, jak i SEO: dobre zdjęcia wydłużają czas na stronie i budują zaufanie do oferty.",
    footerSections: [
      {
        title: "Na skróty",
        links: [
          { href: "/noclegi-suprasl", label: "Noclegi Supraśl" },
          { href: "/dom-w-lesie-suprasl", label: "Dom w lesie" }
        ]
      },
      {
        title: "Kontakt",
        links: [
          { href: "/kontakt", label: "Kontakt i rezerwacja" },
          { href: "tel:+48722765101", label: "722 765 101" }
        ]
      }
    ]
  },
  kontakt: {
    activePath: "/kontakt",
    subtitle: "Kontakt i rezerwacje",
    desktopCta: { href: "tel:+48722765101", text: "Zadzwoń teraz" },
    footerDescription:
      "Leśny dom pod Supraślem dla gości, którzy chcą spędzić czas bliżej natury i dalej od codziennego hałasu.",
    footerSections: [
      {
        title: "Przejdź dalej",
        links: [
          { href: "/galeria", label: "Galeria" },
          { href: "/atrakcje-suprasl", label: "Atrakcje Supraśl" }
        ]
      },
      {
        title: "Kontakt",
        links: [
          { href: "tel:+48722765101", label: "+48 722 765 101" },
          { href: "/noclegi-suprasl", label: "Oferta noclegów" }
        ]
      }
    ]
  }
};

const pageKey = document.body.dataset.page || "index";
const config = PAGE_CONFIG[pageKey] || PAGE_CONFIG.index;

const navLinks = NAV_ITEMS.map((item) => {
  const isActive = item.href === config.activePath;
  const current = isActive ? ' aria-current="page"' : "";
  return `<a href="${item.href}"${current}>${item.label}</a>`;
}).join("\n            ");

const sectionMarkup = (section) => {
  const links = section.links
    .map((link) => `<li><a href="${link.href}">${link.label}</a></li>`)
    .join("\n              ");

  return `          <div>
            <strong>${section.title}</strong>
            <ul class="footer-links">
              ${links}
            </ul>
          </div>`;
};

const headerMarkup = `<header class="site-header">
        <div class="container header-row">
          <a class="brand" href="/" aria-label="Krzemienna Chata - strona główna">
            <span class="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2 4 7.4V22h16V7.4L12 2Zm0 2.3 5.7 3.8v11.7H6.3V8.1L12 4.3Zm-3.2 6.2h6.4v1.9h-2.2v5.2h-2v-5.2H8.8v-1.9Z"/>
              </svg>
            </span>
            <span class="brand-copy">
              <span class="brand-title">Krzemienna Chata</span>
              <span class="brand-subtitle">${config.subtitle}</span>
            </span>
          </a>

          <button class="nav-toggle" type="button" aria-expanded="false" aria-label="Otwórz menu">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path fill="currentColor" d="M4 7h16v2H4zm0 6h16v2H4zm0-12h16v2H4z"/>
            </svg>
          </button>

          <nav class="site-nav" aria-label="Główna nawigacja">
            ${navLinks}
            <a class="header-cta" href="tel:+48722765101">Zadzwoń: 722 765 101</a>
          </nav>

          <a class="header-cta desktop-only" href="${config.desktopCta.href}">${config.desktopCta.text}</a>
        </div>
      </header>`;

const footerSections = config.footerSections.map(sectionMarkup).join("\n");
const footerNote = config.footerRights
  ? '© <span data-year></span> Krzemienna Chata. Wszystkie prawa zastrzeżone.'
  : '© <span data-year></span> Krzemienna Chata.';

const footerMarkup = `<footer class="site-footer">
        <div class="container footer-grid">
          <div>
            <strong>Krzemienna Chata</strong>
            <p>${config.footerDescription}</p>
            <p class="footer-note">${footerNote}</p>
          </div>
${footerSections}
        </div>
      </footer>`;

const headerTarget = document.querySelector("[data-site-header]");
if (headerTarget) {
  headerTarget.outerHTML = headerMarkup;
}

const footerTarget = document.querySelector("[data-site-footer]");
if (footerTarget) {
  footerTarget.outerHTML = footerMarkup;
}
