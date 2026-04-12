import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PolitykaPrywatnosci = () => {
  return (
    <>
      <Helmet>
        <title>Polityka prywatności i cookies | In The Woods Supraśl</title>
        <meta
          name="description"
          content="Polityka prywatności, cookies i RODO obiektu In The Woods w Supraślu. Dowiedz się jak przetwarzamy Twoje dane."
        />
        <link rel="canonical" href="https://www.suprasl.online/polityka-prywatnosci" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Polityka prywatności | In The Woods Supraśl" />
        <meta property="og:description" content="Polityka prywatności, cookies i RODO obiektu In The Woods w Supraślu." />
        <meta property="og:url" content="https://www.suprasl.online/polityka-prywatnosci" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 space-y-10">
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">
            Polityka prywatności i cookies
          </h1>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-foreground">1. Administrator danych</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Administratorem Twoich danych osobowych jest In The Woods, Maciej Cybulko, z siedzibą
              w Supraślu (Konne 109/1, 16-030 Supraśl). Kontakt: tutinthewood@gmail.com, tel. +48 722 765
              101.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-foreground">
              2. Jakie dane zbieramy i w jakim celu
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              W ramach formularza rezerwacyjnego zbieramy: imię i nazwisko, adres e-mail, numer
              telefonu, daty pobytu, liczbę gości oraz opcjonalną wiadomość. Dane te przetwarzamy
              wyłącznie w celu:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>• obsługi zapytania rezerwacyjnego i kontaktu zwrotnego,</li>
              <li>• wysyłki potwierdzenia rezerwacji,</li>
              <li>• realizacji płatności zaliczki przez Stripe,</li>
              <li>• anonimowej analizy statystyk odwiedzin.</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Podstawą prawną przetwarzania jest art. 6 ust. 1 lit. b RODO (wykonanie umowy) oraz
              art. 6 ust. 1 lit. a RODO (zgoda — w zakresie cookies analitycznych).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-foreground">3. Okres przechowywania</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dane rezerwacyjne przechowywane są przez okres niezbędny do realizacji pobytu, a
              następnie przez okres wynikający z przepisów podatkowych i księgowych (do 5 lat).
              Dane z formularza kontaktowego przechowywane są przez maksymalnie 12 miesięcy od
              momentu zakończenia korespondencji.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-foreground">4. Twoje prawa</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Masz prawo do: dostępu do swoich danych, ich sprostowania, usunięcia („prawo do bycia
              zapomnianym"), ograniczenia przetwarzania, przenoszenia danych oraz wniesienia
              sprzeciwu. Możesz także w dowolnym momencie wycofać zgodę na przetwarzanie danych
              (bez wpływu na zgodność z prawem przetwarzania dokonanego przed wycofaniem). W celu
              skorzystania z tych praw skontaktuj się z nami: tutinthewood@gmail.com.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-foreground">5. Odbiorcy danych</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Twoje dane mogą być udostępniane wyłącznie podmiotom realizującym usługi na naszą
              rzecz:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>
                • <strong>Stripe, Inc.</strong> — operator płatności (dane karty nie trafiają na
                nasz serwer),
              </li>
              <li>
                • <strong>Lovable Cloud (Supabase)</strong> — hosting bazy danych (serwery w UE),
              </li>
              <li>
                • <strong>Google Analytics</strong> — anonimowa analityka ruchu (po wyrażeniu
                zgody).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-foreground">6. Płatności</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Płatności online obsługuje Stripe, Inc. (certyfikat PCI DSS Level 1). Dane karty
              płatniczej są przetwarzane wyłącznie przez Stripe i nie są zapisywane ani dostępne
              na naszym serwerze. Więcej informacji:{' '}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                stripe.com/privacy
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-foreground">7. Cookies</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strona korzysta z plików cookies w celu:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>
                • <strong>Niezbędne</strong> — prawidłowe działanie strony (zawsze aktywne),
              </li>
              <li>
                • <strong>Analityczne</strong> — anonimowe statystyki odwiedzin (wymagają zgody),
              </li>
              <li>
                • <strong>Funkcjonalne</strong> — zapamiętywanie preferencji (np. zgoda na cookies).
              </li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Możesz w każdej chwili zmienić ustawienia cookies w przeglądarce lub usunąć zapisane
              pliki. Wyłączenie cookies niezbędnych może wpłynąć na działanie strony.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-foreground">8. Prawo do skargi</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Jeśli uważasz, że przetwarzanie Twoich danych narusza przepisy RODO, masz prawo
              wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193
              Warszawa,{' '}
              <a
                href="https://uodo.gov.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                uodo.gov.pl
              </a>
              ).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-foreground">9. Zmiany w polityce</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Zastrzegamy sobie prawo do aktualizacji niniejszej polityki prywatności. O istotnych
              zmianach poinformujemy na stronie. Data ostatniej aktualizacji: kwiecień 2026.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PolitykaPrywatnosci;
