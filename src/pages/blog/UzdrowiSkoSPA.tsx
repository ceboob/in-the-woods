import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const UzdrowiSkoSPA = () => (
  <BlogArticleLayout
    title="Uzdrowisko Supraśl: Leczenie borowiną i SPA"
    metaTitle="Uzdrowisko Supraśl: Borowina, SPA, Sanatoria | Przewodnik"
    metaDescription="Supraśl to jedyne uzdrowisko na Podlasiu. Borowina, grota solna, zabiegi SPA i wellness. Dowiedz się, jak zaplanować pobyt zdrowotny w Supraślu."
    slug="uzdrowisko-spa-suprasl"
    publishDate="2026-04-09"
    readTime="10 min"
    keywords={['uzdrowisko Supraśl', 'borowina Supraśl', 'SPA Supraśl', 'sanatorium Supraśl', 'leczenie borowiną Podlasie']}
    faqs={[
      { question: 'Jakie choroby leczy Uzdrowisko Supraśl?', answer: 'Uzdrowisko Supraśl specjalizuje się w leczeniu chorób narządu ruchu, chorób reumatycznych, schorzeń kardiologicznych oraz chorób układu oddechowego. Borowina z Podsokołdy jest szczególnie skuteczna w leczeniu bólów stawów i kręgosłupa.' },
      { question: 'Czy do sanatorium w Supraślu potrzebne jest skierowanie?', answer: 'Na pobyt leczniczy refundowany przez NFZ potrzebne jest skierowanie od lekarza. Pobyty komercyjne i pakiety SPA są dostępne bez skierowania — wystarczy rezerwacja w wybranym hotelu lub sanatorium.' },
      { question: 'Jakie zabiegi SPA oferują hotele w Supraślu?', answer: 'Hotele SPA w Supraślu oferują m.in. kąpiele borowinowe, masaże relaksacyjne i lecznicze, zabiegi w grocie solnej, saunę, jacuzzi, a także zabiegi kosmetyczne. Oferta różni się w zależności od obiektu.' },
      { question: 'Czy w Supraślu są tężnie solankowe?', answer: 'Tak, w okolicach Supraśla i Białegostoku znajdują się tężnie solankowe. Spacer w ich sąsiedztwie pozwala wdychać aerozol solankowy, korzystny dla dróg oddechowych.' },
    ]}
    relatedArticles={[
      { title: 'Aktywny wypoczynek w Puszczy Knyszyńskiej', slug: 'aktywny-wypoczynek-suprasl' },
      { title: 'Co robić w Supraślu? Kompletny przewodnik', slug: 'co-robic-suprasl' },
      { title: 'Restauracje Supraśl – gdzie zjeść', slug: 'restauracje-suprasl' },
      { title: 'Przewodnik kulinarny po Supraślu', slug: 'przewodnik-kulinarny-suprasl' },
    ]}
  >
    <h2>Uzdrowisko Supraśl: Jak skorzystać z leczenia borowiną i zregenerować siły?</h2>

    <p>
      Supraśl to <strong>jedyne uzdrowisko w województwie podlaskim</strong>, słynące z borowiny i
      wyjątkowego mikroklimatu Puszczy Knyszyńskiej. Dowiedz się, jakie zabiegi oferują tutejsze
      sanatoria i jak zaplanować pobyt zdrowotny, który zregeneruje Twoje ciało i umysł.
    </p>

    <h2>Borowina z Podsokołdy – naturalny skarb Supraśla</h2>
    <p>
      Borowina wydobywana z złóż w <strong>Podsokołdzie</strong>, niewielkiej miejscowości koło
      Supraśla, jest uważana za jedną z najcenniejszych w Polsce. Bogata w kwasy huminowe, minerały
      i substancje biologicznie czynne, stosowana jest w zabiegach leczniczych od dziesięcioleci.
    </p>
    <p>
      Kąpiele borowinowe, okłady i kompresy pomagają w leczeniu bólów stawów, chorób
      reumatycznych i schorzeń skórnych. Ciepłe okłady z borowiny rozluźniają mięśnie, poprawiają
      krążenie i przyspieszają regenerację po wysiłku fizycznym.
    </p>

    <h2>Profil leczenia: dla kogo jest Uzdrowisko Supraśl?</h2>
    <p>
      Uzdrowisko Supraśl specjalizuje się w leczeniu:
    </p>
    <ul>
      <li><strong>Chorób narządu ruchu</strong> — bóle kręgosłupa, zwyrodnienia stawów, reumatyzm</li>
      <li><strong>Schorzeń kardiologicznych</strong> — nadciśnienie, rehabilitacja po zawałach</li>
      <li><strong>Chorób układu oddechowego</strong> — astma, przewlekłe zapalenie oskrzeli</li>
      <li><strong>Schorzeń dermatologicznych</strong> — łuszczyca, egzema</li>
    </ul>
    <p>
      Mikroklimat Puszczy Knyszyńskiej — z wyjątkowo czystym, jonizowanym powietrzem — wspiera
      leczenie chorób oddechowych i działa kojąco na układ nerwowy.
    </p>

    <h2>Przegląd sanatoriów i hoteli SPA w Supraślu</h2>
    <p>
      Supraśl oferuje kilka obiektów z zapleczem leczniczym i wellness:
    </p>
    <ul>
      <li>
        <strong>Hotel Knieja</strong> — jeden z najstarszych obiektów uzdrowiskowych w Supraślu.
        Oferuje pełen zakres zabiegów borowinowych, fizykoterapię i rehabilitację.
      </li>
      <li>
        <strong>Holmed</strong> — nowoczesny ośrodek zdrowotny z bazą zabiegową, grotem solną
        i strefą wellness.
      </li>
      <li>
        <strong>Mniejsze pensjonaty SPA</strong> — oferujące masaże, saunę i zabiegi relaksacyjne
        w kameralnej atmosferze.
      </li>
    </ul>
    <p>
      Pobyt leczniczy trwa zwykle 2-3 tygodnie (refundowany przez NFZ ze skierowaniem). Pobyty
      komercyjne i weekendowe pakiety SPA są dostępne dla każdego — bez skierowania.
    </p>

    <h2>Nie tylko leczenie – relaks w strefie wellness</h2>
    <p>
      Nawet jeśli nie planujesz pobytu leczniczego, <strong>strefy wellness</strong> w hotelach
      Supraśla zapraszają na chwilę relaksu. Groty solne, sauny fińskie i infrared, baseny z
      hydromasażem — to idealny sposób na regenerację po{' '}
      <Link to="/blog/aktywny-wypoczynek-suprasl">aktywnym dniu na szlakach</Link>.
    </p>
    <p>
      Wiele obiektów oferuje masaże klasyczne, relaksacyjne i lecznicze, a także zabiegi
      kosmetyczne z wykorzystaniem naturalnych produktów z regionu.
    </p>

    <h2>Pijalnia wód i tężnie – gdzie ich szukać?</h2>
    <p>
      W samym Supraślu i jego okolicach znajdziesz <strong>tężnie solankowe</strong>, przy których
      warto zatrzymać się na spacerze. Aerozol solankowy jest szczególnie korzystny dla osób z
      problemami oddechowymi i alergiami.
    </p>
    <p>
      Warto także odwiedzić pijalnie wód mineralnych w sąsiednich uzdrowiskach regionu.
    </p>

    <h2>Gdzie nocować podczas pobytu uzdrowiskowego?</h2>
    <p>
      Jeśli szukasz alternatywy dla hotelowego SPA — prywatności, ciszy i kontaktu z naturą —{' '}
      <Link to="/">In The Woods</Link> to dom w lesie z ruską banią, kominkiem i ogrodem. Po
      zabiegach w uzdrowisku wracasz do swojego azylu w Puszczy Knyszyńskiej.{' '}
      <Link to="/noclegi-suprasl">Sprawdź noclegi</Link>.
    </p>
  </BlogArticleLayout>
);

export default UzdrowiSkoSPA;
