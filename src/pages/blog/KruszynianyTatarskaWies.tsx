import BlogArticleLayout from '@/components/BlogArticleLayout';
import CommonsPhoto from '@/components/CommonsPhoto';
import { Link } from 'react-router-dom';
import { commonsPhotos } from '@/lib/commonsPhotos';

const KruszynianyTatarskaWies = () => {
  const faqs = [
    {
      question: 'Jak daleko są Kruszyniany od Supraśla?',
      answer:
        'Czas przejazdu zależy od wybranej drogi i&nbsp;warunków na trasie. Najwygodniej zaplanować Kruszyniany jako całodniową wycieczkę.',
    },
    {
      question: 'Czy meczet w Kruszynianach jest otwarty dla turystów?',
      answer:
        'Meczet jest miejscem kultu, a&nbsp;możliwość zwiedzania zależy od bieżących zasad. Informacji udzielają opiekunowie obiektu.',
    },
    {
      question: 'Gdzie można zjeść kuchnię tatarską w Kruszynianach?',
      answer:
        'W&nbsp;Kruszynianach można spróbować kuchni tatarskiej. Menu i&nbsp;godziny różnią się między lokalami, dlatego przed wizytą zajrzyj do wybranego miejsca.',
    },
    {
      question: 'Gdzie nocować odwiedzając Kruszyniany?',
      answer:
        'In The Woods to dom na wyłączność w&nbsp;Konnem, niedaleko Supraśla. Kruszyniany możesz odwiedzić podczas pobytu w&nbsp;regionie.',
    },
  ];

  const relatedArticles = [
    { title: 'Supraśl – atrakcje uzdrowiska Podlasia', slug: 'suprasl-atrakcje-uzdrowisko' },
    { title: 'Szlak Bioróżnorodności Supraśl', slug: 'szlak-bioroznorodnosci-suprasl' },
    { title: 'Rzeka Supraśl i okolica', slug: 'supraski-system-wodny' },
  ];

  return (
    <BlogArticleLayout
      title="Kruszyniany – tatarska wieś Podlasia"
      metaTitle="Kruszyniany – tatarska wieś i meczet"
      metaDescription="Kruszyniany: tatarska wieś na Podlasiu z drewnianym meczetem i kuchnią regionalną. Praktyczny przewodnik na wycieczkę."
      slug="kruszyniany-tatarska-wies"
      publishDate="2026-03-14"
      readTime="9 min"
      keywords={[
        'Kruszyniany atrakcje',
        'tatarska wieś Podlasie',
        'meczet Kruszyniany',
        'Podlasie kultura',
        'kuchnia tatarska',
        'noclegi Supraśl',
        'co zobaczyć Podlasie',
      ]}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2>Kruszyniany – tatarska wieś Podlasia</h2>

      <p>
        Na wschodnim krańcu Podlasia, wśród falistych wzgórz i zielonych łąk, leży{' '}
        <strong>Kruszyniany</strong> to jedna z&nbsp;najważniejszych miejscowości związanych
        z&nbsp;historią polskich Tatarów. Wizyta w&nbsp;drewnianym meczecie, mizarze i&nbsp;lokalnej
        restauracji pozwala poznać tę kulturę z&nbsp;bliska. 🕌
      </p>

      <p>
        Warto przeznaczyć na tę wycieczkę kilka godzin i&nbsp;zostawić sobie czas na spokojne
        zwiedzanie. Dojazd zaplanuj z&nbsp;uwzględnieniem wybranej trasy i&nbsp;warunków na drodze.
      </p>

      <CommonsPhoto
        photo={commonsPhotos.mosque}
        alt="Drewniany meczet tatarski w Kruszynianach"
        loading="lazy"
      />

      <h2>Historia Tatarów na Podlasiu</h2>

      <p>
        Tatarzy osiedlali się na ziemiach Wielkiego Księstwa Litewskiego od XIV wieku. Jan III
        Sobieski nadał ziemię Tatarom w Kruszynianach w 1679 roku — cztery lata przed odsieczą
        wiedeńską z 1683 roku. Kruszyniany i pobliskie Bohoniki są ważnymi ośrodkami polskich
        Tatarów.
      </p>

      <p>
        Kruszyniany są miejscem związanym z kulturą i religią tatarską. Podczas zwiedzania obiektów
        sakralnych i cmentarza przestrzegaj oznaczeń, zaleceń opiekunów i lokalnych zasad.
      </p>

      <h3>Tatarzy pod Wiedniem</h3>

      <p>
        Więcej o&nbsp;historii Tatarów przeczytasz w&nbsp;publikacjach poświęconych dziedzictwu
        regionu. Warto połączyć lekturę z&nbsp;wizytą w&nbsp;miejscach, które wciąż są częścią
        codziennego życia lokalnej społeczności.
      </p>

      <h2>Meczet w Kruszynianach</h2>

      <p>
        W&nbsp;Kruszynianach stoi drewniany meczet, jeden z&nbsp;charakterystycznych zabytków
        Podlasia. To także miejsce modlitwy, dlatego podczas zwiedzania warto zachować ciszę
        i&nbsp;stosować się do wskazówek opiekunów.
      </p>

      <p>
        Możliwość wejścia do środka zależy od aktualnych zasad i&nbsp;terminu. Informacje
        o&nbsp;zwiedzaniu najlepiej uzyskać u&nbsp;opiekunów meczetu.
      </p>

      <h3>Cmentarz muzułmański (mizar)</h3>

      <p>
        Mizar to muzułmański cmentarz i&nbsp;miejsce pamięci. Zachowaj ciszę, nie dotykaj
        nagrobków i&nbsp;respektuj oznaczenia oraz prośby opiekunów.
      </p>

      <h2>Kuchnia tatarska</h2>

      <p>
        🍽️ Kuchnia tatarska to ważna część wizyty w&nbsp;Kruszynianach. Lokalne menu może się
        różnić, dlatego warto wybrać restaurację i&nbsp;zajrzeć do jej aktualnej oferty.
      </p>

      <h3>Co warto spróbować?</h3>

      <ul>
        <li>
          <strong>Pierekaczewnik</strong> — tradycyjny produkt regionalny. Szczegółowy opis znajduje
          się na stronie Ministerstwa Rolnictwa:{' '}
          <a
            href="https://www.gov.pl/web/rolnictwo/pierekaczewnik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Opis pierekaczewnika na stronie Ministerstwa Rolnictwa (otworzy się w nowej karcie)"
          >
            Opis produktu na stronie Ministerstwa Rolnictwa
          </a>
          . W&nbsp;zależności od lokalu może pojawiać się w&nbsp;menu w&nbsp;różnych terminach.
        </li>
        <li>
          <strong>Czebureki</strong> — smażone pierogi z&nbsp;nadzieniem
        </li>
        <li>
          <strong>Kołduny</strong> — małe pierożki podawane najczęściej w&nbsp;rosole
        </li>
        <li>
          <strong>Kartacze</strong> — sycące kluski ziemniaczane znane w&nbsp;regionalnej kuchni
        </li>
        <li>
          <strong>Pieremiacze</strong> — drożdżowe placki z&nbsp;mięsnym nadzieniem
        </li>
      </ul>

      <p>
        Lokale mają własne menu i&nbsp;godziny otwarcia. Jeśli zależy Ci na konkretnym daniu,
        zadzwoń przed przyjazdem — unikniesz rozczarowania, gdy akurat nie będzie go w&nbsp;ofercie.
      </p>

      <h2>Dlaczego warto odwiedzić Kruszyniany?</h2>

      <ul>
        <li>
          <strong>Kultura</strong> — miejsce związane z dziedzictwem polskich Tatarów
        </li>
        <li>
          <strong>Autentyczność</strong> — Kruszyniany nie są skansenem, lecz żywą wsią z prawdziwą
          społecznością
        </li>
        <li>
          <strong>Kuchnia</strong> — spróbuj lokalnych dań tatarskich i&nbsp;podlaskich
        </li>
        <li>
          <strong>Krajobraz</strong> — okolice Kruszynian to piękne, pagórkowate tereny z rozległymi
          widokami na pola i łąki
        </li>
        <li>
          <strong>Szacunek</strong> — pamiętaj, że Kruszyniany są zamieszkaną miejscowością
        </li>
      </ul>

      <h3>Informacje praktyczne</h3>

      <ul>
        <li>
          <strong>Dojazd:</strong> Wybierz trasę z&nbsp;wyprzedzeniem i&nbsp;zostaw zapas czasu na przejazd.
        </li>
        <li>
          <strong>Czas wizyty:</strong> Zarezerwuj kilka godzin na spokojne zwiedzanie i&nbsp;posiłek.
        </li>
        <li>
          <strong>Zwiedzanie:</strong> Meczet i&nbsp;mizar są ważnymi miejscami kultu i&nbsp;pamięci — uszanuj lokalne zasady.
        </li>
      </ul>

      <h2>Gdzie nocować w Supraślu?</h2>

      <p>
        Kruszyniany możesz uwzględnić w planie pobytu w{' '}
        <Link to="/">In The Woods</Link>. Nasz{' '}
        <strong>
          <Link to="/">dom na wyłączność</Link>
        </strong>{' '}
        w&nbsp;miejscowości Konne koło Supraśla to wygodna baza do odkrywania regionu. Dojazd do
        Kruszynian możesz zaplanować jako całodniowy wypad.
      </p>

      <p>
        Jeśli szukasz{' '}
        <strong>
          <Link to="/">noclegu w Supraślu</Link>
        </strong>
        , In The Woods to dom na wyłączność. Zobacz opis wyposażenia i&nbsp;napisz do nas, jeśli
        chcesz zapytać o&nbsp;opcjonalne dodatki.
      </p>
    </BlogArticleLayout>
  );
};

export default KruszynianyTatarskaWies;
