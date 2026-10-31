import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import blogSzlakBio from '@/assets/blog-szlak-bioroznorodnosci-optimized.webp';
import forestNature from '@/assets/forest-nature-optimized.webp';
import forestPanorama from '@/assets/forest-panorama.webp';

// TODO: zatwierdź treść
const SzlakBioroznorodnosci = () => {
  const faqs = [
    {
      question: 'Jak długi jest Szlak Bioróżnorodności w\u00a0Supraślu?',
      answer:
        'Przed wyjściem sprawdź aktualny przebieg i\u00a0długość trasy na miejscu lub w\u00a0informacji zarządcy. Czas przejścia zależy od warunków i\u00a0tempa spaceru.',
    },
    {
      question: 'Czy Szlak Bioróżnorodności jest odpowiedni dla dzieci?',
      answer:
        'Oceń stan trasy, jej długość i\u00a0warunki terenowe przed wyjściem. Dostosuj spacer do wieku i\u00a0możliwości dzieci.',
    },
    {
      question: 'Kiedy najlepiej odwiedzić Szlak Bioróżnorodności?',
      answer:
        'Warunki zmieniają się w\u00a0ciągu roku. Przed wyjściem sprawdź pogodę, stan trasy i\u00a0ewentualne ograniczenia w\u00a0dostępie.',
    },
    {
      question: 'Gdzie nocować blisko Szlaku Bioróżnorodności?',
      answer:
        'In The Woods to dom w\u00a0okolicach Supraśla. Przed wyjazdem sprawdź trasę do wybranego odcinka szlaku i\u00a0warunki pobytu.',
    },
  ];

  const relatedArticles = [
    {
      title: 'Najlepsze szlaki piesze i\u00a0rowerowe – Supraśl',
      slug: 'szlaki-piesze-rowerowe-suprasl',
    },
    { title: 'Supraśl – atrakcje uzdrowiska Podlasia', slug: 'suprasl-atrakcje-uzdrowisko' },
    { title: 'Kruszyniany – tatarska wieś Podlasia', slug: 'kruszyniany-tatarska-wies' },
  ];

  return (
    <BlogArticleLayout
      title="Szlak Bioróżnorodności Supraśl – spacer w&nbsp;Puszczy"
      metaTitle="Szlak Bioróżnorodności w&nbsp;Supraślu – spacer po Puszczy"
      metaDescription="Planujesz spacer Szlakiem Bioróżnorodności w&nbsp;Supraślu? Sprawdź aktualny przebieg trasy, warunki terenowe i&nbsp;zasady dostępu przed wyjściem."
      slug="szlak-bioroznorodnosci-suprasl"
      publishDate="2026-03-14"
      readTime="10&nbsp;min"
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
        <strong>Szlak Bioróżnorodności w&nbsp;Supraślu</strong> może być celem spaceru
        w&nbsp;okolicach Puszczy Knyszyńskiej. Przed wyjściem sprawdź aktualny przebieg, długość
        i&nbsp;dostępność trasy w&nbsp;lokalnej informacji lub u&nbsp;jej zarządcy.
      </p>

      <p>
        Jeśli szukasz <Link to="/atrakcje-suprasl">atrakcji w&nbsp;Supraślu</Link>, które łączą
        aktywny wypoczynek z&nbsp;poznawaniem przyrody, sprawdź informacje o&nbsp;szlaku
        i&nbsp;zdecyduj, czy jego aktualne warunki odpowiadają Twoim planom.
      </p>

      <img
        loading="lazy"
        decoding="async"
        sizes="(min-width: 768px) 768px, 100vw"
        src={blogSzlakBio}
        alt="Szlak Bioróżnorodności Supraśl – ścieżka edukacyjna w&nbsp;Puszczy Knyszyńskiej"
        className="w-full rounded-lg my-8"
        width="800"
        height="600"
      />

      <h2>Czym jest Szlak Bioróżnorodności?</h2>

      <p>
        Szlak jest trasą w&nbsp;okolicach Supraśla. Przebieg, oznakowanie i&nbsp;elementy edukacyjne
        mogą się zmieniać, dlatego przed spacerem warto sprawdzić aktualne informacje
        u&nbsp;zarządcy.
      </p>

      <p>
        Jeśli na trasie znajdują się tablice informacyjne, korzystaj z&nbsp;nich, nie ingerując
        w&nbsp;otoczenie ani nie zrywając roślin. Przestrzegaj oznakowania i&nbsp;lokalnych zasad.
      </p>

      <h2>Jak wygląda trasa?</h2>

      <p>
        Długość, nawierzchnia i&nbsp;trudność mogą zależeć od wybranego odcinka oraz aktualnego
        stanu trasy. Przed wyjściem sprawdź mapę i&nbsp;przygotuj się do warunków terenowych.
      </p>

      <h3>Etapy trasy</h3>

      <ul>
        <li>
          <strong>Przebieg trasy</strong> — kieruj się aktualnym oznakowaniem i&nbsp;informacjami
          zarządcy
        </li>
        <li>
          <strong>Warunki terenowe</strong> — uwzględnij pogodę, nawierzchnię i&nbsp;własne
          możliwości
        </li>
        <li>
          <strong>Ochrona przyrody</strong> — pozostaw rośliny, grzyby i&nbsp;inne elementy
          środowiska na miejscu
        </li>
        <li>
          <strong>Odpowiedzialny spacer</strong> — nie schodź z&nbsp;wyznaczonej trasy
          i&nbsp;zabierz ze sobą odpady
        </li>
      </ul>

      <img
        loading="lazy"
        decoding="async"
        sizes="(min-width: 768px) 768px, 100vw"
        src={forestNature}
        alt="Puszcza Knyszyńska – las mieszany na Szlaku Bioróżnorodności"
        className="w-full rounded-lg my-8"
        width="800"
        height="600"
      />

      <h2>Co można zobaczyć?</h2>

      <h3>Flora Puszczy Knyszyńskiej</h3>

      <p>
        Skład roślinności zależy od konkretnego miejsca i&nbsp;pory roku. Nie zrywaj roślin;
        szczególną ostrożność zachowaj na obszarach objętych ochroną.
      </p>

      <h3>Fauna</h3>

      <p>
        W&nbsp;lesie mogą występować dzikie zwierzęta, ale ich spotkanie nie jest gwarantowane.
        Obserwuj przyrodę z&nbsp;dystansu, nie karm zwierząt i&nbsp;nie zakłócaj ich spokoju.
      </p>

      <h3>Grzyby i&nbsp;porosty</h3>

      <p>
        Zbieranie grzybów może być ograniczone na niektórych terenach. Przed wyjściem sprawdź
        właściwe przepisy i&nbsp;oznakowanie; nie zbieraj grzybów, których nie rozpoznajesz.
      </p>

      <img
        loading="lazy"
        decoding="async"
        sizes="(min-width: 768px) 768px, 100vw"
        src={forestPanorama}
        alt="Panorama Puszczy Knyszyńskiej – szlaki przyrodnicze Supraśl"
        className="w-full rounded-lg my-8"
        width="800"
        height="600"
      />

      <h2>Dlaczego warto odwiedzić?</h2>

      <p>
        Szlak Bioróżnorodności to jedna z&nbsp;propozycji spaceru w&nbsp;okolicy. Zobacz także{' '}
        <Link to="/atrakcje-suprasl">mapie atrakcji Supraśla</Link>. Oto kilka powodów, dla których
        warto go odwiedzić:
      </p>

      <ul>
        <li>
          <strong>Edukacja w&nbsp;naturze</strong> — tablice informacyjne sprawiają, że spacer to
          nie tylko relaks, ale też nauka
        </li>
        <li>
          <strong>Kontakt z&nbsp;przyrodą</strong> — zachowaj ciszę i&nbsp;uszanuj zasady
          obowiązujące na trasie
        </li>
        <li>
          <strong>Fotografia przyrodnicza</strong> — las oferuje niezliczone okazje do robienia
          pięknych zdjęć
        </li>
        <li>
          <strong>Odpoczynek</strong> — spacer może być formą rekreacji; nie zastępuje opieki
          medycznej
        </li>
        <li>
          <strong>Przygotowanie</strong> — dobierz trasę i&nbsp;tempo do swoich możliwości
        </li>
      </ul>

      <h2>Informacje praktyczne</h2>

      <h3>Jak dojechać?</h3>

      <p>
        Przed wyjazdem sprawdź mapę, punkt rozpoczęcia trasy i&nbsp;aktualny dojazd. Nie zakładaj,
        że początek szlaku jest dostępny z&nbsp;miejsca noclegu.
      </p>

      <h3>Co zabrać ze sobą?</h3>

      <ul>
        <li>Wygodne buty do chodzenia po lesie</li>
        <li>Wodę i&nbsp;lekką przekąskę</li>
        <li>Lornetkę do obserwacji ptaków</li>
        <li>Aparat fotograficzny</li>
        <li>Środek na komary (szczególnie latem)</li>
      </ul>

      <h3>Czas przejścia</h3>

      <p>
        Czas przejścia zależy od długości wybranego odcinka, pogody i&nbsp;tempa spaceru. Sprawdź
        informacje o&nbsp;trasie przed wyjściem i&nbsp;zaplanuj powrót przed zmrokiem.
      </p>

      <h2>Gdzie nocować w&nbsp;Supraślu?</h2>

      <p>
        Po spacerze możesz odpocząć w <Link to="/">In The Woods</Link> —{' '}
        <strong>
          <Link to="/noclegi-suprasl">dom w&nbsp;lesie z&nbsp;jacuzzi</Link>
        </strong>{' '}
        w&nbsp;okolicach Supraśla. Balia z&nbsp;hydromasażem (jacuzzi) jest opcjonalnym dodatkiem;
        jej dostępność potwierdź przed pobytem.
      </p>

      <p>
        Jeśli szukasz{' '}
        <strong>
          <Link to="/noclegi-suprasl">noclegu w&nbsp;okolicy Supraśla</Link>
        </strong>
        , sprawdź warunki pobytu, wyposażenie i&nbsp;dojazd do planowanych tras.
      </p>
    </BlogArticleLayout>
  );
};

export default SzlakBioroznorodnosci;
