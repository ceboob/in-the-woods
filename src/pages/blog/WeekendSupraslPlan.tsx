import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const WeekendSupraslPlan = () => (
  <BlogArticleLayout
    title="Weekend w Supraślu – plan pobytu na 2-3 dni"
    metaTitle="Weekend w Supraślu – plan na 2-3 dni"
    metaDescription="Przykładowy plan weekendu w Supraślu. Dopasuj zwiedzanie, spacery i aktywności do aktualnej dostępności atrakcji, pogody i warunków."
    slug="weekend-suprasl-plan"
    publishDate="2026-03-25"
    readTime="9 min"
    keywords={[
      'weekend Supraśl',
      'weekend Supraśl plan',
      'co robić Supraśl weekend',
      'Supraśl 2 dni',
    ]}
    faqs={[
      {
        question: 'Ile kosztuje weekend w Supraślu?',
        answer:
          'Koszt pobytu zależy od terminu, liczby gości i zasad naliczania opłat za poszczególne noce. Sprawdź wycenę w formularzu zapytania.',
      },
      {
        question: 'Jak dojechać do Supraśla?',
        answer:
          'Dojazd zależy od miejsca wyjazdu i warunków na drodze. Sprawdź aktualną trasę i rozkłady transportu publicznego przed podróżą.',
      },
      {
        question: 'Czy weekend w Supraślu nadaje się dla rodziny z dziećmi?',
        answer:
          'W Supraślu i okolicy są propozycje dla rodzin. Dobierz trasę i atrakcje do wieku dzieci oraz sprawdź ich dostępność i zasady przed wyjazdem.',
      },
    ]}
    relatedArticles={[
      { title: 'Co robić w Supraślu?', slug: 'co-robic-suprasl' },
      { title: 'Restauracje Supraśl', slug: 'restauracje-suprasl' },
      { title: 'Szlaki piesze i rowerowe', slug: 'szlaki-piesze-rowerowe-suprasl' },
    ]}
  >
    <h2>Weekend w Supraślu – plan pobytu na 2-3 dni</h2>

    <p>
      Planujesz <strong>weekend w Supraślu</strong> i zastanawiasz się, jak najlepiej wykorzystać
      czas? Poniższe propozycje pomagają ułożyć pobyt na 2–3 dni. Dopasuj plan do pogody, godzin
      otwarcia atrakcji i dostępności tras.
    </p>

    <h2>Dzień 1: Przyjazd i odkrywanie Supraśla</h2>

    <h3>Popołudnie — Monaster i Muzeum Ikon</h3>
    <p>
      Możesz zacząć od Monasteru Zwiastowania NMP, a następnie odwiedzić Muzeum Ikon, jeśli jest
      otwarte. Przed wizytą sprawdź godziny, ceny biletów i zasady zwiedzania u organizatora.
    </p>

    <h3>Późne popołudnie — Bulwary nad rzeką</h3>
    <p>
      Jeśli warunki na to pozwalają, możesz wybrać spacer po Supraślu i okolicy rzeki. Sprawdź
      nawierzchnię oraz dostępność trasy, a godziny działania lokali potwierdź przed wizytą.
    </p>

    <h3>Wieczór — Kolacja i jacuzzi</h3>
    <p>
      Wróć do <Link to="/domek-suprasl">domu In The Woods</Link> i rozpal kominek. Przygotuj
      kolację w kuchni lub wybierz lokal zgodnie z aktualnym menu{' '}
      <Link to="/blog/restauracje-suprasl">restauracji Supraśla</Link>. Możesz skorzystać także z
      balii ogrodowej z funkcją jacuzzi, jeśli wcześniej ustalisz jej dostępność.
    </p>

    <h2>Dzień 2: Natura i aktywności</h2>

    <h3>Rano — Poranna kawa w lesie</h3>
    <p>
      Jeśli pogoda pozwala, możesz zacząć dzień od kawy na tarasie. Przed spacerem sprawdź pogodę,
      lokalne zasady i dostępność wybranej trasy.
    </p>

    <h3>Przedpołudnie — Szlak przez Puszczę</h3>
    <p>
      Wyrusz na jeden z{' '}
      <Link to="/blog/szlaki-piesze-rowerowe-suprasl">tras spacerowych i rowerowych</Link>. Przed
      wyjściem sprawdź aktualny przebieg, długość i zasady ruchu na terenach chronionych.
    </p>

    <h3>Popołudnie — Kajaki lub Kruszyniany</h3>
    <p>
      Opcja A: <Link to="/blog/kajaki-suprasl">Spływ kajakowy rzeką Supraśl</Link> — dostępność,
      warunki na rzece, trasę i czas spływu potwierdź u organizatora.
    </p>
    <p>
      Opcja B: Wycieczka do <Link to="/blog/kruszyniany-tatarska-wies">Kruszynian</Link> — przed
      wyjazdem sprawdź trasę, godziny zwiedzania i dostępność dań w lokalnych jadłodajniach.
    </p>

    <h3>Wieczór — Ognisko i gwiazdy</h3>
    <p>
      Jeśli regulamin obiektu i warunki na to pozwalają, możesz skorzystać z ogniska. Widoczność
      gwiazd zależy od pogody, pory roku i oświetlenia.
    </p>

    <h2>Dzień 3 (opcjonalny): Slow morning i wyjazd</h2>

    <h3>Rano — Wspólne śniadanie</h3>
    <p>
      Nie spiesz się. Śniadanie możesz przygotować w kuchni domu. Jeśli chcesz kupić lokalne
      produkty, przed wyjazdem sprawdź aktualne miejsca i godziny sprzedaży w Supraślu.
    </p>

    <h3>Przed wyjazdem — Arboretum Kopna Góra</h3>
    <p>
      W drodze powrotnej możesz rozważyć wizytę w Arboretum Kopna Góra. Przed wyjazdem sprawdź
      aktualne godziny i zasady zwiedzania u Nadleśnictwa Supraśl.
    </p>

    <h2>Praktyczne informacje</h2>
    <ul>
      <li>
        <strong>Dojazd:</strong> przed podróżą sprawdź aktualną trasę i warunki dojazdu.
      </li>
      <li>
        <strong>Nocleg:</strong> <Link to="/noclegi-suprasl">In The Woods</Link> — dom na
        wyłączność w miejscowości Konne koło Supraśla; cena zależy od terminu i liczby gości.
      </li>
      <li>
        <strong>Check-in:</strong> od 15:00, check-out do 11:00
      </li>
      <li>
        <strong>Zwierzęta:</strong> możliwość pobytu z psem i ewentualne opłaty potwierdź z gospodarzem.
      </li>
      <li>
        <strong>Zapytanie o pobyt:</strong> tel. 722 765 101
      </li>
    </ul>

    <div className="bg-secondary p-8 rounded-lg text-center space-y-4 not-prose mt-12">
      <p className="font-heading text-xl text-foreground">Zaplanuj swój weekend w Supraślu</p>
      <p className="text-muted-foreground text-sm">
        Wyślij zapytanie, aby potwierdzić dostępność i otrzymać wycenę. Formularz nie potwierdza rezerwacji.
      </p>
      <a href="tel:+48722765101" className="btn-primary inline-block">
        Zadzwoń z pytaniem
      </a>
    </div>
  </BlogArticleLayout>
);

export default WeekendSupraslPlan;
