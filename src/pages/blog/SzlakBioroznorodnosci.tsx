import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import blogSzlakBio from '@/assets/blog-szlak-bioroznorodnosci.jpg';
import forestNature from '@/assets/forest-nature.jpg';
import forestPanorama from '@/assets/forest-panorama.webp';

const SzlakBioroznorodnosci = () => {
  const faqs = [
    {
      question: 'Jak długi jest Szlak Bioróżnorodności w Supraślu?',
      answer:
        'Przed wyjściem sprawdź aktualny przebieg i długość trasy na miejscu lub w informacji zarządcy. Czas przejścia zależy od warunków i tempa spaceru.',
    },
    {
      question: 'Czy Szlak Bioróżnorodności jest odpowiedni dla dzieci?',
      answer:
        'Oceń stan trasy, jej długość i warunki terenowe przed wyjściem. Dostosuj spacer do wieku i możliwości dzieci.',
    },
    {
      question: 'Kiedy najlepiej odwiedzić Szlak Bioróżnorodności?',
      answer:
        'Warunki zmieniają się w ciągu roku. Przed wyjściem sprawdź pogodę, stan trasy i ewentualne ograniczenia w dostępie.',
    },
    {
      question: 'Gdzie nocować blisko Szlaku Bioróżnorodności?',
      answer:
        'In The Woods to dom w okolicach Supraśla. Przed wyjazdem sprawdź trasę do wybranego odcinka szlaku i warunki pobytu.',
    },
  ];

  const relatedArticles = [
    {
      title: 'Najlepsze szlaki piesze i rowerowe – Supraśl',
      slug: 'szlaki-piesze-rowerowe-suprasl',
    },
    { title: 'Supraśl – atrakcje uzdrowiska Podlasia', slug: 'suprasl-atrakcje-uzdrowisko' },
    { title: 'Kruszyniany – tatarska wieś Podlasia', slug: 'kruszyniany-tatarska-wies' },
  ];

  return (
    <BlogArticleLayout
      title="Szlak Bioróżnorodności Supraśl – spacer w Puszczy"
      metaTitle="Szlak Bioróżnorodności w Supraślu – informacje przed spacerem"
      metaDescription="Planujesz spacer Szlakiem Bioróżnorodności w Supraślu? Sprawdź aktualny przebieg trasy, warunki terenowe i zasady dostępu przed wyjściem."
      slug="szlak-bioroznorodnosci-suprasl"
      publishDate="2026-03-14"
      readTime="10 min"
      keywords={[
        'Supraśl szlak bioróżnorodności',
        'atrakcje Supraśl',
        'Puszcza Knyszyńska szlaki',
        'co zobaczyć Supraśl',
        'szlaki przyrodnicze Podlasie',
        'noclegi Supraśl',
      ]}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2>Szlak Bioróżnorodności Supraśl — spacer po puszczy</h2>

      <p>
        <strong>Szlak Bioróżnorodności w Supraślu</strong> może być celem spaceru w okolicach
        Puszczy Knyszyńskiej. Przed wyjściem sprawdź aktualny przebieg, długość i dostępność trasy
        w lokalnej informacji lub u jej zarządcy.
      </p>

      <p>
        Jeśli szukasz <Link to="/atrakcje-suprasl">atrakcji w Supraślu</Link>, które łączą aktywny
        wypoczynek z poznawaniem przyrody, sprawdź informacje o szlaku i zdecyduj, czy jego aktualne
        warunki odpowiadają Twoim planom.
      </p>

      <img loading="lazy" decoding="async" sizes="(min-width: 768px) 768px, 100vw"
        src={blogSzlakBio}
        alt="Szlak Bioróżnorodności Supraśl – ścieżka edukacyjna w Puszczy Knyszyńskiej"
        className="w-full rounded-lg my-8"
      width="800"
               height="600"
             />

      <h2>Czym jest Szlak Bioróżnorodności?</h2>

      <p>
        Szlak jest trasą w okolicach Supraśla. Przebieg, oznakowanie i elementy edukacyjne mogą się
        zmieniać, dlatego przed spacerem warto sprawdzić aktualne informacje u zarządcy.
      </p>

      <p>
        Jeśli na trasie znajdują się tablice informacyjne, korzystaj z nich, nie ingerując w otoczenie
        ani nie zrywając roślin. Przestrzegaj oznakowania i lokalnych zasad.
      </p>

      <h2>Jak wygląda trasa?</h2>

      <p>
        Długość, nawierzchnia i trudność mogą zależeć od wybranego odcinka oraz aktualnego stanu
        trasy. Przed wyjściem sprawdź mapę i przygotuj się do warunków terenowych.
      </p>

      <h3>Etapy trasy</h3>

      <ul>
        <li>
          <strong>Przebieg trasy</strong> — kieruj się aktualnym oznakowaniem i informacjami zarządcy
        </li>
        <li>
          <strong>Warunki terenowe</strong> — uwzględnij pogodę, nawierzchnię i własne możliwości
        </li>
        <li>
          <strong>Ochrona przyrody</strong> — pozostaw rośliny, grzyby i inne elementy środowiska na miejscu
        </li>
        <li>
          <strong>Odpowiedzialny spacer</strong> — nie schodź z wyznaczonej trasy i zabierz ze sobą odpady
        </li>
      </ul>

      <img loading="lazy" decoding="async" sizes="(min-width: 768px) 768px, 100vw"
        src={forestNature}
        alt="Puszcza Knyszyńska – las mieszany na Szlaku Bioróżnorodności"
        className="w-full rounded-lg my-8"
      width="800"
               height="600"
             />

      <h2>Co można zobaczyć?</h2>

      <h3>Flora Puszczy Knyszyńskiej</h3>

      <p>
        Skład roślinności zależy od konkretnego miejsca i pory roku. Nie zrywaj roślin; szczególną
        ostrożność zachowaj na obszarach objętych ochroną.
      </p>

      <h3>Fauna</h3>

      <p>
        W lesie mogą występować dzikie zwierzęta, ale ich spotkanie nie jest gwarantowane. Obserwuj
        przyrodę z dystansu, nie karm zwierząt i nie zakłócaj ich spokoju.
      </p>

      <h3>Grzyby i porosty</h3>

      <p>
        Zbieranie grzybów może być ograniczone na niektórych terenach. Przed wyjściem sprawdź
        właściwe przepisy i oznakowanie; nie zbieraj grzybów, których nie rozpoznajesz.
      </p>

      <img loading="lazy" decoding="async" sizes="(min-width: 768px) 768px, 100vw"
        src={forestPanorama}
        alt="Panorama Puszczy Knyszyńskiej – szlaki przyrodnicze Supraśl"
        className="w-full rounded-lg my-8"
      width="800"
               height="600"
             />

      <h2>Dlaczego warto odwiedzić?</h2>

      <p>
        Szlak Bioróżnorodności to jedna z propozycji spaceru w okolicy. Zobacz także{' '}
        <Link to="/atrakcje-suprasl">mapie atrakcji Supraśla</Link>. Oto kilka powodów, dla których
        warto go odwiedzić:
      </p>

      <ul>
        <li>
          <strong>Edukacja w naturze</strong> — tablice informacyjne sprawiają, że spacer to nie
          tylko relaks, ale też nauka
        </li>
        <li>
          <strong>Kontakt z przyrodą</strong> — zachowaj ciszę i uszanuj zasady obowiązujące na trasie
        </li>
        <li>
          <strong>Fotografia przyrodnicza</strong> — las oferuje niezliczone okazje do robienia
          pięknych zdjęć
        </li>
        <li>
          <strong>Odpoczynek</strong> — spacer może być formą rekreacji; nie zastępuje opieki medycznej
        </li>
        <li>
          <strong>Przygotowanie</strong> — dobierz trasę i tempo do swoich możliwości
        </li>
      </ul>

      <h2>Informacje praktyczne</h2>

      <h3>Jak dojechać?</h3>

      <p>
        Przed wyjazdem sprawdź mapę, punkt rozpoczęcia trasy i aktualny dojazd. Nie zakładaj, że
        początek szlaku jest dostępny z miejsca noclegu.
      </p>

      <h3>Co zabrać ze sobą?</h3>

      <ul>
        <li>Wygodne buty do chodzenia po lesie</li>
        <li>Wodę i lekką przekąskę</li>
        <li>Lornetkę do obserwacji ptaków</li>
        <li>Aparat fotograficzny</li>
        <li>Środek na komary (szczególnie latem)</li>
      </ul>

      <h3>Czas przejścia</h3>

      <p>
        Czas przejścia zależy od długości wybranego odcinka, pogody i tempa spaceru. Sprawdź
        informacje o trasie przed wyjściem i zaplanuj powrót przed zmrokiem.
      </p>

      <h2>Gdzie nocować w Supraślu?</h2>

      <p>
        Po spacerze możesz odpocząć w <Link to="/">In The Woods</Link> —{' '}
        <strong>
          <Link to="/noclegi-suprasl">dom w lesie z jacuzzi</Link>
        </strong>{' '}
        w okolicach Supraśla. Balia ogrodowa z funkcją jacuzzi jest opcjonalnym dodatkiem; jej
        dostępność potwierdź przed pobytem.
      </p>

      <p>
        Jeśli szukasz{' '}
        <strong>
          <Link to="/noclegi-suprasl">noclegu w okolicy Supraśla</Link>
          </strong>
          , sprawdź warunki pobytu, wyposażenie i dojazd do planowanych tras.
      </p>
    </BlogArticleLayout>
  );
};

export default SzlakBioroznorodnosci;
