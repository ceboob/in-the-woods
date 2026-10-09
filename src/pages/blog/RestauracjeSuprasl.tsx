import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Jak sprawdzić, gdzie zjeść w Supraślu?',
    answer:
      'Menu, godziny otwarcia, ceny i dostępność miejsc sprawdź bezpośrednio w wybranym lokalu przed wizytą.',
  },
  {
    question: 'Czy w lokalach są dania regionalne?',
    answer:
      'Oferta zależy od lokalu i może się zmieniać. Zapytaj obsługę o aktualne menu oraz składniki dania.',
  },
  {
    question: 'Gdzie szukać kuchni tatarskiej?',
    answer:
      'Jeśli planujesz wizytę w Kruszynianach, sprawdź trasę, godziny otwarcia i ofertę lokali przed wyjazdem.',
  },
  {
    question: 'Czy trzeba rezerwować stolik?',
    answer:
      'Zasady rezerwacji zależą od lokalu i terminu. Skontaktuj się z wybranym miejscem, szczególnie jeśli podróżujesz w większej grupie.',
  },
];

const RestauracjeSuprasl = () => (
  <BlogArticleLayout
    title="Restauracje w Supraślu — jak sprawdzić aktualną ofertę"
    metaTitle="Restauracje w Supraślu — menu, godziny i praktyczne wskazówki"
    metaDescription="Zaplanuj posiłek w Supraślu: sprawdź aktualne menu, godziny otwarcia, ceny i zasady rezerwacji bezpośrednio w wybranym lokalu."
    slug="restauracje-suprasl"
    publishDate="2026-03-15"
    readTime="4 min"
    keywords={['restauracje Supraśl', 'gdzie zjeść Supraśl', 'menu Supraśl', 'lokale Supraśl']}
    faqs={faqs}
    relatedArticles={[
      { title: 'Kuchnia regionalna — praktyczne wskazówki', slug: 'przewodnik-kulinarny-suprasl' },
      { title: 'Kruszyniany — informacje dla odwiedzających', slug: 'kruszyniany-tatarska-wies' },
      { title: 'Atrakcje Supraśla', slug: 'atrakcje-suprasl' },
    ]}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h2>Jak wybrać lokal w Supraślu?</h2>
      <p>
        Menu, ceny, godziny otwarcia i dostępność stolików mogą się zmieniać. Przed wizytą sprawdź
        aktualne informacje bezpośrednio w wybranej restauracji lub kawiarni.
      </p>
      <ul>
        <li>Potwierdź godziny otwarcia i możliwość rezerwacji.</li>
        <li>Zapytaj o aktualne menu, składniki i dostępność potraw.</li>
        <li>Jeśli masz wymagania dietetyczne, omów je z obsługą przed złożeniem zamówienia.</li>
        <li>Sprawdź adres, dojazd i zasady parkowania.</li>
      </ul>

      <h2>Potrawy regionalne</h2>
      <p>
        Lokalne menu może obejmować potrawy kojarzone z kuchnią podlaską, ale ich dostępność zależy
        od miejsca i terminu. Jeśli interesuje Cię konkretne danie, potwierdź jego obecność w menu
        przed przyjazdem.
      </p>
      <p>
        Opis pierekaczewnika znajduje się na{' '}
        <a href="https://www.gov.pl/web/rolnictwo/pierekaczewnik" target="_blank"
          rel="noopener noreferrer"
          aria-label="Opis pierekaczewnika na stronie Ministerstwa Rolnictwa (otworzy się w nowej karcie)">
          stronie Ministerstwa Rolnictwa
        </a>
        . Dostępność produktu w lokalnych punktach sprawdź bezpośrednio u sprzedawców.
      </p>
      <p>
        Jeśli planujesz wycieczkę do{' '}
        <Link to="/blog/kruszyniany-tatarska-wies">Kruszynian</Link>, przed podróżą sprawdź trasę,
        zasady zwiedzania i bieżącą ofertę lokali.
      </p>

      <h2>Przed wyjściem</h2>
      <p>
        Informacje w internecie mogą być nieaktualne. Potwierdź szczegóły bezpośrednio w lokalu i
        dopasuj plan posiłku do godzin zwiedzania.
      </p>
      <p>
        Szukasz noclegu w okolicy?{' '}
        <Link to="/noclegi-suprasl">Poznaj warunki pobytu w In The Woods</Link> i wyślij zapytanie o
        dostępność oraz cenę.
      </p>
    </article>
  </BlogArticleLayout>
);

export default RestauracjeSuprasl;
