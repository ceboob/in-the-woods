import BlogArticleLayout from '@/components/BlogArticleLayout';
import CommonsPhoto from '@/components/CommonsPhoto';
import { Link } from 'react-router-dom';
import { commonsPhotos } from '@/lib/commonsPhotos';

const SzlakBioroznorodnosci = () => {
  const faqs = [
    {
      question: 'Jak długi jest Szlak Bioróżnorodności w\u00a0Supraślu?',
      answer:
        'Długość i&nbsp;czas przejścia zależą od dostępnego odcinka oraz tempa spaceru. Informacje o&nbsp;trasie publikuje jej zarządca.',
    },
    {
      question: 'Czy Szlak Bioróżnorodności jest odpowiedni dla dzieci?',
      answer:
        'To może być ciekawy spacer dla rodzin, jeśli długość i&nbsp;nawierzchnia odpowiadają wiekowi dzieci. Wybierzcie trasę bez pośpiechu.',
    },
    {
      question: 'Kiedy najlepiej odwiedzić Szlak Bioróżnorodności?',
      answer:
        'Każda pora roku pokazuje las z&nbsp;innej strony. Wybierz pogodny dzień i&nbsp;ubierz się odpowiednio do warunków na trasie.',
    },
    {
      question: 'Gdzie nocować blisko Szlaku Bioróżnorodności?',
      answer:
        'In The Woods to dom na wyłączność w&nbsp;Konnem, niedaleko Supraśla. Z&nbsp;tej bazy łatwo zaplanować wycieczkę po okolicy.',
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
      metaDescription="Poznaj Szlak Bioróżnorodności w&nbsp;Supraślu i&nbsp;zaplanuj spokojny spacer pośród przyrody Puszczy Knyszyńskiej."
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
        <strong>Szlak Bioróżnorodności w&nbsp;Supraślu</strong> to propozycja spaceru
        w&nbsp;otoczeniu Puszczy Knyszyńskiej. 🐦 Na trasie można zwolnić, wsłuchać się w&nbsp;las
        i&nbsp;przyjrzeć się jego mieszkańcom.
      </p>

      <p>
        Jeśli szukasz <Link to="/atrakcje-suprasl">atrakcji w&nbsp;Supraślu</Link>, które łączą
        ruch z&nbsp;poznawaniem przyrody, ten szlak może być dobrym punktem planu.
      </p>

      <CommonsPhoto
        photo={commonsPhotos.forest}
        alt="Leśny krajobraz Puszczy Knyszyńskiej w okolicy Kołodna"
        loading="lazy"
      />

      <h2>Czym jest Szlak Bioróżnorodności?</h2>

      <p>
        Szlak prowadzi przez okolice Supraśla, a&nbsp;jego oznakowanie i&nbsp;stan mogą zależeć od
        pory roku. Informacje zarządcy pomogą przygotować się do spaceru.
      </p>

      <p>
        Jeśli na trasie znajdują się tablice informacyjne, korzystaj z&nbsp;nich, nie ingerując
        w&nbsp;otoczenie ani nie zrywając roślin. Przestrzegaj oznakowania i&nbsp;lokalnych zasad.
      </p>

      <h2>Jak wygląda trasa?</h2>

      <p>
        Długość, nawierzchnia i&nbsp;trudność zależą od wybranego odcinka. Wygodne buty i&nbsp;mapa
        pomogą cieszyć się spacerem niezależnie od pogody.
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

      <CommonsPhoto
        photo={commonsPhotos.river}
        alt="Rzeka Supraśl w Parku Krajobrazowym Puszczy Knyszyńskiej"
        loading="lazy"
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
        Na niektórych terenach zbieranie grzybów jest ograniczone. Respektuj oznakowanie
        i&nbsp;zostaw w&nbsp;lesie gatunki, których nie rozpoznajesz.
      </p>

      <h2>Dlaczego warto odwiedzić?</h2>

      <p>
        Szlak Bioróżnorodności to jedna z&nbsp;propozycji spaceru w&nbsp;okolicy. Zobacz także{' '}
        <Link to="/atrakcje-suprasl">mapę atrakcji Supraśla</Link>. Oto, co może sprawić, że spacer
        będzie ciekawy:
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
        Początek szlaku może znajdować się poza centrum miasta. Zaplanuj dojazd do wybranego
        wejścia, zanim wyruszysz z&nbsp;noclegu.
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
        Czas przejścia zależy od długości odcinka, pogody i&nbsp;tempa spaceru. Zostaw sobie zapas
        czasu na odpoczynek i&nbsp;powrót przed zmrokiem.
      </p>

      <h2>Gdzie nocować w&nbsp;Supraślu?</h2>

      <p>
        Po spacerze możesz odpocząć w <Link to="/">In The Woods</Link> —{' '}
        <strong>
          <Link to="/">dom w&nbsp;lesie z&nbsp;jacuzzi</Link>
        </strong>{' '}
        w&nbsp;okolicach Supraśla. Balia z&nbsp;hydromasażem (jacuzzi) jest opcjonalnym dodatkiem —
        zapytaj nas o&nbsp;dostępność przy rezerwacji.
      </p>

      <p>
        Informacje o&nbsp;wyposażeniu domu i&nbsp;dojeździe do okolicznych tras znajdziesz na
        stronie <Link to="/">In The Woods</Link>.
      </p>
    </BlogArticleLayout>
  );
};

export default SzlakBioroznorodnosci;
