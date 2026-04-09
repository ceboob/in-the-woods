import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Phone,
  Mail,
  Home,
  Flame,
  Droplets,
  TreePine,
  Cross,
  ShieldCheck,
  Bath,
  AlertTriangle,
  Bug,
  Heart,
  BookOpen,
  Users,
} from 'lucide-react';
import guestGuideBook from '@/assets/guest-guide-book.webp';
import livingWide from '@/assets/living-wide.webp';
import stoveDetail from '@/assets/stove-detail.webp';
import kitchenBrick from '@/assets/kitchen-brick.webp';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Informator = () => {
  useEffect(() => {
    document.title = 'Informator gościa – In The Woods Supraśl';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        'content',
        'Informator gościa In The Woods – zasady pobytu, instrukcja kominka, regulamin jacuzzi, informacje o domu w Puszczy Knyszyńskiej. Noclegi Supraśl.',
      );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/" className="font-heading text-xl font-light tracking-wide text-foreground">
            In The Woods
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="nav-link text-foreground/70 hover:text-foreground">
              Strona główna
            </Link>
            <Link
              to="/noclegi-suprasl"
              className="nav-link text-foreground/70 hover:text-foreground"
            >
              Noclegi
            </Link>
            <Link
              to="/atrakcje-suprasl"
              className="nav-link text-foreground/70 hover:text-foreground"
            >
              Atrakcje
            </Link>
            <a href="tel:+48790625990" className="btn-primary text-xs py-2.5 px-6">
              Zadzwoń
            </a>
          </div>
        </div>
      </nav>

      {/* Back */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Strona główna
        </Link>
      </div>

      {/* Hero Header */}
      <header className="max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-4">
          Informator gościa
        </p>
        <h1 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-6">
          Witamy w In The Woods
        </h1>
        <div className="w-16 h-px bg-primary mx-auto mb-8" />
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
          Oddajemy do Państwa dyspozycji dom, w który włożyliśmy dużo pracy i serca, aby zapewnić
          komfortowy wypoczynek blisko natury.
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-4 text-base md:text-lg">
          Prosimy o traktowanie domu jak własnego i pozostawienie go w takim stanie, w jakim został
          przekazany.
        </p>
      </header>

      {/* Photo strip */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          <img
            src={guestGuideBook}
            alt="Informator gościa — książka powitalna In The Woods Supraśl"
            className="w-full h-[180px] md:h-[220px] object-cover rounded-lg"
            loading="lazy"
          />
          <img
            src={livingWide}
            alt="Salon z kominkiem i fotele — wnętrze domu na wynajem Supraśl"
            className="w-full h-[180px] md:h-[220px] object-cover rounded-lg"
            loading="lazy"
          />
          <img
            src={stoveDetail}
            alt="Kaflowy piec kuchenny — tradycyjne ogrzewanie chaty w Puszczy Knyszyńskiej"
            className="w-full h-[180px] md:h-[220px] object-cover rounded-lg"
            loading="lazy"
          />
          <img
            src={kitchenBrick}
            alt="Kuchnia z ceglanym piecem i porcelaną — dom Supraśl kuchnia"
            className="w-full h-[180px] md:h-[220px] object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
        <Accordion type="multiple" className="space-y-3">
          {/* ZASADY POBYTU */}
          <AccordionItem
            value="zasady"
            className="bg-card border border-border rounded-lg px-6 overflow-hidden"
          >
            <AccordionTrigger className="hover:no-underline py-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-lg md:text-xl font-medium text-left">
                  Zasady pobytu
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dom jest przestrzenią wypoczynkową przeznaczoną do spokojnego pobytu. Prosimy o:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Dbanie o wyposażenie domu i jego otoczenia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Utrzymanie porządku w trakcie i po pobycie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Szanowanie otaczającej nas natury i przyrody</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Zachowanie ciszy nocnej (22:00–7:00)</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* KOMINEK */}
          <AccordionItem
            value="kominek"
            className="bg-card border border-border rounded-lg px-6 overflow-hidden"
          >
            <AccordionTrigger className="hover:no-underline py-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-lg md:text-xl font-medium text-left">
                  Instrukcja korzystania z kominka
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Kominek jest głównym źródłem ogrzewania domu w okresie jesienno-zimowym.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Nie przeładowywać paleniska — max 2–3 polana naraz</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Używać wyłącznie przygotowanego drewna (drewutnia przy domu)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Nie używać drewna z ogrodu ani lasu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Wyznaczyć jedną osobę odpowiedzialną za obsługę kominka</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Nie pozostawiać ognia bez nadzoru</span>
                </li>
              </ul>
              <div className="bg-secondary/60 rounded-lg p-4 space-y-2">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-wood" /> Ważne informacje
                </p>
                <p className="text-sm text-muted-foreground">
                  W okresie letnim palenie w kominku jest zabronione.
                </p>
                <p className="text-sm text-muted-foreground">
                  Ogrzewanie elektryczne jest dodatkowo płatne według zużycia energii.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* EKOLOGIA */}
          <AccordionItem
            value="ekologia"
            className="bg-card border border-border rounded-lg px-6 overflow-hidden"
          >
            <AccordionTrigger className="hover:no-underline py-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Droplets className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-lg md:text-xl font-medium text-left">
                  Ekologia – oczyszczalnia ścieków
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Obiekt korzysta z ekologicznej oczyszczalni ścieków. Prosimy o przestrzeganie
                poniższych zasad.
              </p>
              <p className="text-muted-foreground font-medium">
                Do toalety można wrzucać wyłącznie papier toaletowy.
              </p>
              <p className="text-muted-foreground">Nie wolno wrzucać:</p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>Ręczników papierowych, chusteczek</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>Tamponów, podpasek</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>Plastiku i innych odpadów</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                Nie wylewać środków chemicznych do kanalizacji.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* NATURA */}
          <AccordionItem
            value="natura"
            className="bg-card border border-border rounded-lg px-6 overflow-hidden"
          >
            <AccordionTrigger className="hover:no-underline py-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <TreePine className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-lg md:text-xl font-medium text-left">
                  Dom w lesie – natura
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Dom znajduje się w środku lasu, w bezpośrednim sąsiedztwie Puszczy Knyszyńskiej. Z
                tego powodu mogą pojawić się:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Owady', 'Komary', 'Kleszcze', 'Myszy leśne'].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 bg-secondary/60 rounded-full px-4 py-2 text-sm text-muted-foreground"
                  >
                    <Bug className="w-3.5 h-3.5" /> {item}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground font-medium mt-2">Zalecamy:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Zabranie środków przeciwko owadom</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Zamykanie okien wieczorem i w nocy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Chowanie jedzenia i zamykanie szafek kuchennych</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* APTECZKA */}
          <AccordionItem
            value="apteczka"
            className="bg-card border border-border rounded-lg px-6 overflow-hidden"
          >
            <AccordionTrigger className="hover:no-underline py-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Cross className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-lg md:text-xl font-medium text-left">
                  Apteczka
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="text-muted-foreground leading-relaxed">
                Apteczka pierwszej pomocy znajduje się w szufladzie nad stołem w jadalni. Zawiera
                podstawowe środki opatrunkowe i leki.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* JACUZZI / BANIA */}
          <AccordionItem
            value="jacuzzi"
            className="bg-card border border-border rounded-lg px-6 overflow-hidden"
          >
            <AccordionTrigger className="hover:no-underline py-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Bath className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-lg md:text-xl font-medium text-left">
                  Regulamin ruskiej bani i balii
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Balia z gorącą wodą jest dostępna po wcześniejszej rezerwacji u gospodarza.
              </p>
              <p className="text-muted-foreground font-medium">Zasady korzystania:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Korzystanie na własną odpowiedzialność</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Zakaz korzystania przy problemach zdrowotnych (serce, ciśnienie)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Nie korzystać pod wpływem alkoholu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Dzieci wyłącznie pod opieką dorosłych</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Zakaz używania olejków, pianek i kosmetyków</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Zakaz szkła w pobliżu balii</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Zakaz palenia przy balii</span>
                </li>
              </ul>
              <div className="bg-secondary/60 rounded-lg p-4 space-y-2">
                <p className="text-sm font-medium text-foreground">Ważne:</p>
                <p className="text-sm text-muted-foreground">
                  Maksymalna temperatura wody: 40°C. Należy regularnie uzupełniać płyny. Nie dotykać
                  pieca — gorąca powierzchnia!
                </p>
              </div>

              <p className="text-muted-foreground font-medium mt-2">Instrukcja obsługi balii:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Nigdy nie rozpalać pieca bez wody w balii</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Utrzymywać odpowiedni poziom wody (powyżej kratki pieca)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Regularnie kontrolować temperaturę wody</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Zamykać dopływ powietrza do pieca przy zbyt wysokiej temperaturze</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* BEZPIECZEŃSTWO */}
          <AccordionItem
            value="bezpieczenstwo"
            className="bg-card border border-border rounded-lg px-6 overflow-hidden"
          >
            <AccordionTrigger className="hover:no-underline py-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-lg md:text-xl font-medium text-left">
                  Bezpieczeństwo
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                Goście ponoszą odpowiedzialność za szkody powstałe z ich winy w trakcie pobytu.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wszelkie nieprawidłowości, usterki lub uszkodzenia prosimy niezwłocznie zgłaszać
                gospodarzowi.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* KONTAKT */}
          <AccordionItem
            value="kontakt"
            className="bg-card border border-border rounded-lg px-6 overflow-hidden"
          >
            <AccordionTrigger className="hover:no-underline py-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-heading text-lg md:text-xl font-medium text-left">
                  Dane kontaktowe
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" /> Gospodarz: Maciej
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <a
                      href="tel:+48790625990"
                      className="flex items-center gap-2 hover:text-foreground transition-colors"
                    >
                      <Phone className="w-4 h-4" /> 790 625 990
                    </a>
                    <a
                      href="tel:+48722765101"
                      className="flex items-center gap-2 hover:text-foreground transition-colors"
                    >
                      <Phone className="w-4 h-4" /> 722 765 101{' '}
                      <span className="text-xs">(dodatkowy)</span>
                    </a>
                    <a
                      href="mailto:tutinthewood@gmail.com"
                      className="flex items-center gap-2 hover:text-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" /> tutinthewood@gmail.com
                    </a>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">Adres:</p>
                  <p className="text-muted-foreground">
                    Konne 109/1
                    <br />
                    16-030 Supraśl
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Bottom note */}
        <div className="mt-12 text-center space-y-4">
          <div className="w-16 h-px bg-primary mx-auto" />
          <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
            Dziękujemy za zapoznanie się z informatorem. Życzymy spokojnego i regenerującego pobytu
            w In The Woods.
          </p>
          <p className="font-heading text-lg text-foreground">— Maciej, gospodarz</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white/70 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="font-display text-lg text-white">In The Woods</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              Strona główna
            </Link>
            <Link to="/noclegi-suprasl" className="hover:text-white transition-colors">
              Noclegi Supraśl
            </Link>
            <Link to="/informator" className="hover:text-white transition-colors">
              Informator gościa
            </Link>
          </div>
          <p className="text-xs text-white/40">© 2026 In The Woods. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Informator;
