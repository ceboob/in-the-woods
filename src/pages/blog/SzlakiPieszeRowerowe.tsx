import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import blogSzlak from '@/assets/blog-szlak-lesny.jpg';
import blogRowerowa from '@/assets/blog-trasa-rowerowa.jpg';
import jacuzziNight from '@/assets/jacuzzi-night.webp';

const SzlakiPieszeRowerowe = () => {
  const faqs = [
    {
      question: 'Jakie szlaki piesze są w Supraślu?',
      answer:
        'W okolicy są trasy spacerowe i rowerowe. Przed wyjściem sprawdź ich aktualny przebieg, długość, warunki i zasady udostępniania terenów chronionych.',
    },
    {
      question: 'Czy w Supraślu są trasy rowerowe?',
      answer:
        'Przed wyprawą sprawdź aktualne mapy tras rowerowych, ich nawierzchnię i ograniczenia w terenie.',
    },
    {
      question: 'Czy szlaki są odpowiednie dla rodzin z dziećmi?',
      answer:
        'Część tras może być odpowiednia dla rodzin, ale trudność, nawierzchnia i dostępność zależą od konkretnego odcinka. Sprawdź aktualne oznaczenia i warunki przed wyjściem.',
    },
    {
      question: 'Gdzie nocować po wędrówce?',
      answer:
        'In The Woods to dom w lesie z jacuzzi – idealny na regenerację po aktywnym dniu w Puszczy Knyszyńskiej.',
    },
  ];

  const relatedArticles = [
    { title: 'Supraski System Wodny – zapomniany cud inżynierii', slug: 'supraski-system-wodny' },
    {
      title: 'Szlak Powstania Styczniowego w Puszczy Knyszyńskiej',
      slug: 'szlak-powstania-styczniowego-suprasl',
    },
    {
      title: 'Supraśl – perła Podlasia według podróżników',
      slug: 'suprasl-atrakcje-national-geographic',
    },
  ];

  return (
    <BlogArticleLayout
      title="Szlaki Supraśl – przewodnik turystyczny"
      metaTitle="Szlaki piesze i rowerowe Supraśl | Przewodnik"
      metaDescription="Najlepsze szlaki piesze i rowerowe w Supraślu i Puszczy Knyszyńskiej. Trasy rodzinne, przyrodnicze, rowerowe. Kompletny przewodnik turystyczny."
      slug="szlaki-piesze-rowerowe-suprasl"
      publishDate="2026-03-01"
      readTime="13 min"
      keywords={[
        'szlaki Supraśl',
        'trasy rowerowe Supraśl',
        'Puszcza Knyszyńska szlaki',
        'Supraśl rowery',
        'szlaki piesze Supraśl',
        'noclegi Supraśl',
      ]}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2>Szlaki Supraśl – przewodnik turystyczny</h2>

      <p>
        Supraśl i Puszcza Knyszyńska to raj dla miłośników aktywnego wypoczynku na łonie natury.
        Setki kilometrów szlaków pieszych i rowerowych prowadzą przez jedne z najpiękniejszych i
        najlepiej zachowanych lasów w Polsce, oferując doświadczenia dla każdego — od spokojnych
        spacerów po wymagające trasy MTB.
      </p>

      <p>
        Ten przewodnik zbiera najlepsze szlaki w okolicy Supraśla: piesze, rowerowe, rodzinne i
        przyrodnicze. Niezależnie od tego, czy jesteś doświadczonym turystą, czy szukasz łatwej
        trasy na popołudniowy spacer — znajdziesz tu coś dla siebie.
      </p>

      <img loading="lazy" decoding="async" sizes="(min-width: 768px) 768px, 100vw"
        src={blogSzlak}
        alt="Puszcza Knyszyńska – szlaki piesze i rowerowe Supraśl"
        className="w-full rounded-lg my-8"
      width="800"
               height="600"
             />

      <h2>Najlepsze szlaki piesze</h2>

      <h3>1. Rezerwat Krzemienne Góry — zasady odwiedzania</h3>

      <p>
        Rezerwat chroni cenne przyrodniczo tereny. Nie zakładaj, że można swobodnie poruszać się po
        jego całym obszarze ani że przebiega przez niego ogólnodostępna pętla turystyczna. Przed
        wizytą sprawdź{' '}
        <a href="https://www.gov.pl/web/rdos-bialystok/podlaskierezerwaty--rezerwat-przyrody-krzemienne-gory"
          target="_blank" rel="noopener noreferrer"
          aria-label="Informacje RDOŚ o rezerwacie Krzemienne Góry (otworzy się w nowej karcie)">
          informacje RDOŚ o rezerwacie
        </a>{' '}
        i stosuj się do oznakowania.
      </p>

      <h3>2. Szlak wzdłuż rzeki Supraśl</h3>

      <p>
        Jeśli planujesz spacer nad rzeką Supraśl, wybierz publicznie dostępną drogę i sprawdź jej
        przebieg, nawierzchnię oraz długość przed wyruszeniem.
      </p>

      <p>
        W Supraślu można też poznać{' '}
        <Link to="/blog/supraski-system-wodny">Supraski System Wodny</Link>. Sprawdź na mapie
        położenie obiektów i wybierz sposób zwiedzania odpowiedni do warunków.
      </p>

      <h3>3. Szlak Powstania Styczniowego</h3>

      <p>
        Trasa historyczno-przyrodnicza prowadząca przez miejsca pamięci z 1863 roku. Łączy mogiły
        powstańcze, pomniki i kapliczki leśne ukryte w gęstwinie puszczy. Szczegółowy opis tego
        szlaku znajdziesz w naszym{' '}
        <Link to="/blog/szlak-powstania-styczniowego-suprasl">dedykowanym artykule</Link>.
      </p>

      <p>
        Długość i trudność wariantów sprawdź na aktualnej mapie przed wycieczką.
      </p>

      <h3>4. Arboretum w Kopnej Górze</h3>

      <p>
        Arboretum im. Powstańców 1863 w Kopnej Górze zajmuje 26 hektarów i zostało założone w 1988
        roku. Przed wizytą sprawdź dojazd, dostępność i zasady zwiedzania u Nadleśnictwa Supraśl.
      </p>

      <img loading="lazy" decoding="async" sizes="(min-width: 768px) 768px, 100vw"
        src={blogRowerowa}
        alt="Trasy rowerowe Supraśl – Puszcza Knyszyńska"
        className="w-full rounded-lg my-8"
      width="800"
               height="600"
             />

      <h2>Najlepsze trasy rowerowe</h2>

      <h3>1. Green Velo i inne trasy rowerowe</h3>

      <p>
        Green Velo to długodystansowy szlak rowerowy. Przed zaplanowaniem wycieczki sprawdź jego
        aktualny przebieg, połączenia z lokalnymi trasami i rodzaj nawierzchni.
      </p>

      <h3>2. Pętla przez Puszczę Knyszyńską</h3>

      <p>
        Planując lokalną pętlę, zweryfikuj jej przebieg, nawierzchnię i długość na aktualnej mapie.
        W terenie stosuj się do znaków oraz ograniczeń wstępu.
      </p>

      <h3>3. MTB — trasy w Puszczy Knyszyńskiej</h3>

      <p>
        Wybierając trasę MTB, sprawdź, czy dany odcinek jest dostępny dla rowerów i czy jego
        nawierzchnia oraz poziom trudności odpowiadają Twoim umiejętnościom.
      </p>

      <p>
        Wybierz trasę udostępnioną dla rowerów, sprawdź jej przebieg i warunki przed wyjazdem.
        Nie wjeżdżaj na drogi ani ścieżki objęte ograniczeniami.
      </p>

      <h2>Szlaki rodzinne</h2>

      <p>
        Nie każdy szlak musi być wyzwaniem — w okolicach Supraśla jest wiele tras idealnych dla
        rodzin z dziećmi, osób starszych i tych, którzy po prostu chcą spokojnie pospacerować.
      </p>

      <h3>Ścieżki przyrodnicze w okolicy</h3>

      <p>
        Przed wyjściem sprawdź dostępność trasy, jej długość, nawierzchnię i ograniczenia. Dobierz
        spacer do możliwości uczestników i nie wchodź poza miejsca udostępnione do ruchu.
      </p>

      <h3>Spacer po Supraślu</h3>

      <p>
        Przed spacerem z wózkiem sprawdź przebieg trasy, nawierzchnię i dostępność przejść.
      </p>

      <h3>Trasa rowerowa dla rodziny</h3>

      <p>
        Dobierz dystans i nawierzchnię do umiejętności uczestników, a przed wyjazdem sprawdź
        oznaczenia, warunki i dozwolony przebieg trasy.
      </p>

      <h2>Odpowiedzialnie na szlaku</h2>
      <p>
        Puszcza Knyszyńska obejmuje tereny o różnych zasadach ochrony i udostępniania. Poruszaj się
        wyłącznie po dozwolonych trasach, nie zbieraj roślin ani grzybów w rezerwatach i nie
        niepokój zwierząt. Aktualne informacje sprawdzaj u właściwego zarządcy terenu.
      </p>

      <h3>Obserwacja przyrody</h3>

      <p>
        Obserwuj zwierzęta z dystansu, nie płosz ich ani nie dokarmiaj. Nie schodź z udostępnionych
        tras i respektuj ograniczenia obowiązujące na obszarach chronionych.
      </p>

      <img loading="lazy" decoding="async" sizes="(min-width: 768px) 768px, 100vw"
        src={jacuzziNight}
        alt="Jacuzzi po wędrówce – In The Woods, noclegi Supraśl"
        className="w-full rounded-lg my-8"
      width="800"
               height="600"
             />

      <h2>Praktyczne wskazówki na szlak</h2>

      <ul>
        <li>
          <strong>Buty:</strong> wygodne trekkingowe na szlaki piesze, SPD lub platformy na rower
        </li>
        <li>
          <strong>Woda:</strong> zabierz ilość odpowiednią do długości trasy i warunków; nie zakładaj, że po drodze będzie dostęp do sklepu lub wody pitnej
        </li>
        <li>
          <strong>Mapa:</strong> przed wyjściem przygotuj mapę i sprawdź, czy na wybranej trasie masz dostęp do potrzebnych informacji
        </li>
        <li>
          <strong>Kleszcze:</strong> w sezonie (kwiecień–październik) używaj repelentów i sprawdzaj
          się po powrocie
        </li>
        <li>
          <strong>Pogoda:</strong> nawet latem w lesie może być chłodno — zabierz dodatkową warstwę
        </li>
        <li>
          <strong>Rower:</strong> dostępność wypożyczalni i sprzętu potwierdź przed przyjazdem
        </li>
      </ul>

      <h2>Po aktywnym dniu — regeneracja</h2>

      <p>
        Po aktywnym dniu możesz odpocząć w domu. Balia ogrodowa z funkcją jacuzzi jest opcjonalnym
        dodatkiem do pobytu; dostępność potwierdź przed przyjazdem.
      </p>

      <p>
        <Link to="/noclegi-suprasl">In The Woods</Link> to prywatny{' '}
        <Link to="/dom-w-lesie-suprasl">dom w lesie</Link> z jacuzzi, kominkiem i pełną kuchnią.
        Położona w sercu puszczy, blisko Supraśla — idealna baza na aktywny{' '}
        <Link to="/weekend-suprasl">weekend w Supraślu</Link>.
      </p>
    </BlogArticleLayout>
  );
};

export default SzlakiPieszeRowerowe;
