import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import blogSupraslUzdrowisko from '@/assets/blog-suprasl-atrakcje-uzdrowisko.jpg';
import blogMonaster from '@/assets/blog-monaster-suprasl.jpg';
import blogRzeka from '@/assets/blog-rzeka-suprasl.jpg';

const SupraslAtrakcjeUzdrowisko = () => {
  const faqs = [
    {
      question: 'Jakie są najważniejsze atrakcje Supraśla?',
      answer:
        'Najważniejsze atrakcje to Monaster Zwiastowania NMP, Muzeum Ikon, bulwary nad rzeką Supraśl, Teatr Wierszalin, zabytkowe wille uzdrowiskowe i liczne szlaki w Puszczy Knyszyńskiej.',
    },
    {
      question: 'Czy Supraśl to uzdrowisko?',
      answer:
        'Tak, Supraśl posiada status uzdrowiska. Miasteczko słynie z doskonałej jakości powietrza, mikroklimatu leśnego i warunków sprzyjających wypoczynkowi i regeneracji.',
    },
    {
      question: 'Ile czasu potrzeba na zwiedzanie Supraśla?',
      answer:
        'Na podstawowe atrakcje warto przeznaczyć 1–2 dni. Jeśli chcesz poznać okolicę głębiej — szlaki, rzekę, Puszczę Knyszyńską — idealny jest pobyt 3–5 dni.',
    },
    {
      question: 'Gdzie nocować w Supraślu?',
      answer:
        'In The Woods to prywatny dom w lesie z jacuzzi, położony 10 minut od centrum Supraśla — idealny nocleg dla par, rodzin i grup szukających spokoju w naturze.',
    },
    {
      question: 'Jak dojechać do Supraśla?',
      answer:
        'Supraśl leży 15 km od Białegostoku. Dojazd samochodem zajmuje ok. 20 minut. Kursują też autobusy miejskie z Białegostoku.',
    },
  ];

  const relatedArticles = [
    { title: 'Szlak Bioróżnorodności Supraśl', slug: 'szlak-bioroznorodnosci-suprasl' },
    { title: 'Kruszyniany – tatarska wieś Podlasia', slug: 'kruszyniany-tatarska-wies' },
    { title: 'Supraski System Wodny – zapomniany cud inżynierii', slug: 'supraski-system-wodny' },
    {
      title: 'Najlepsze szlaki piesze i rowerowe – Supraśl',
      slug: 'szlaki-piesze-rowerowe-suprasl',
    },
  ];

  return (
    <BlogArticleLayout
      title="Supraśl – atrakcje uzdrowiska Podlasia"
      metaTitle="Supraśl atrakcje – co zobaczyć w uzdrowiskowym miasteczku | In The Woods"
      metaDescription="Supraśl to perła Podlasia. Monaster, Muzeum Ikon, bulwary, Teatr Wierszalin i uzdrowiskowy klimat. Kompletny przewodnik po atrakcjach Supraśla."
      slug="suprasl-atrakcje-uzdrowisko"
      publishDate="2026-03-14"
      readTime="12 min"
      keywords={[
        'Supraśl atrakcje',
        'co zobaczyć Supraśl',
        'weekend Supraśl',
        'noclegi Supraśl',
        'Monaster Supraśl',
        'Muzeum Ikon',
        'uzdrowisko Supraśl',
        'Teatr Wierszalin',
      ]}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h1>Supraśl – atrakcje uzdrowiska Podlasia</h2>

      <p>
        <strong>Supraśl</strong> to jedno z najbardziej wyjątkowych miasteczek w Polsce — uzdrowisko
        o ponad 500-letniej historii, położone na skraju Puszczy Knyszyńskiej. Łączy w sobie klimat
        slow life, fascynującą wielokulturowość i bliskość jednych z najcenniejszych lasów w
        Europie. To idealne miejsce na <Link to="/weekend-suprasl">weekend</Link>, romantyczny
        wyjazd lub dłuższy pobyt w otoczeniu natury.
      </p>

      <p>
        W tym przewodniku znajdziesz kompletny opis <strong>atrakcji Supraśla</strong> — od
        historycznego monasteru, przez Muzeum Ikon, bulwary nad rzeką, po ukryte perełki, które
        znają tylko lokalni mieszkańcy.
      </p>

      <img
        src={blogSupraslUzdrowisko}
        alt="Supraśl atrakcje – Monaster Zwiastowania NMP, uzdrowisko Podlasia"
        className="w-full rounded-lg my-8"
      />

      <h2>Monaster Zwiastowania Najświętszej Maryi Panny</h2>

      <p>
        <strong>Monaster w Supraślu</strong> to najważniejszy zabytek miasteczka i jedno z
        najcenniejszych miejsc dziedzictwa prawosławnego w Polsce. Założony w 1498 roku przez
        biskupa Józefa Sołtana i książąt litewskich, monaster przetrwał wieki wojen, zniszczeń i
        odbudowy.
      </p>

      <p>
        Kompleks klasztorny składa się z Cerkwi Zwiastowania NMP z unikalnymi freskami, dzwonnicy i
        budynków klasztornych. Po zniszczeniu podczas II wojny światowej, cerkiew została
        pieczołowicie odbudowana, a jej wnętrze przyozdobiono nowymi freskami nawiązującymi do
        tradycji bizantyjskiej.
      </p>

      <h3>Co warto zobaczyć w monasterze?</h3>

      <ul>
        <li>
          <strong>Cerkiew Zwiastowania NMP</strong> — z odrestaurowanymi freskami w stylu
          bizantyjskim
        </li>
        <li>
          <strong>Dzwonnica</strong> — punkt widokowy na okolicę
        </li>
        <li>
          <strong>Ogrody klasztorne</strong> — miejsce spokoju i medytacji
        </li>
        <li>
          <strong>Sklep klasztorny</strong> — z lokalnymi produktami: miodami, ziołami i nalewkami
        </li>
      </ul>

      <img
        src={blogMonaster}
        alt="Monaster Supraśl – cerkiew i ogrody klasztorne"
        className="w-full rounded-lg my-8"
      />

      <h2>Muzeum Ikon</h2>

      <p>
        <strong>Muzeum Ikon w Supraślu</strong> to jedyne w Polsce muzeum w całości poświęcone
        sztuce ikonopisania. Mieści się w budynkach przyklasztornych i gromadzi ponad 1200 ikon z
        XVI–XX wieku — od drobnych ikon podróżnych po monumentalne ikonostasy.
      </p>

      <p>
        Ekspozycja przedstawia historię ikony od jej bizantyjskich korzeni, przez tradycję ruską i
        grecką, po współczesne ikonopisarstwo. To unikalne miejsce, które pozwala zrozumieć duchową
        i artystyczną głębię sztuki sakralnej Wschodu.
      </p>

      <h2>Bulwary nad rzeką Supraśl</h2>

      <p>
        Rzeka Supraśl przepływa przez centrum miasteczka, tworząc malownicze{' '}
        <strong>bulwary</strong> — idealne miejsce na spacer, poranny jogging lub wieczorny relaks.
        Wzdłuż rzeki ciągną się ścieżki spacerowe, ławki i punkty widokowe z widokiem na wodę i
        otaczający las.
      </p>

      <p>
        Latem rzeka tętni życiem — <Link to="/blog/supraski-system-wodny">spływy kajakowe</Link> są
        jedną z najpopularniejszych atrakcji regionu. Jesienią bulwary zachwycają gamą kolorów liści
        odbijających się w spokojnej tafli wody.
      </p>

      <img
        src={blogRzeka}
        alt="Bulwary nad rzeką Supraśl – spacery i kajaki"
        className="w-full rounded-lg my-8"
      />

      <h2>Charakter uzdrowiskowy</h2>

      <p>
        Supraśl posiada <strong>status uzdrowiska</strong>, co potwierdza wyjątkowe walory zdrowotne
        tego miejsca. Mikrokomfort leśny, doskonała jakość powietrza i cisza Puszczy Knyszyńskiej
        tworzą idealne warunki do regeneracji i odpoczynku.
      </p>

      <p>
        W miasteczku zachowały się zabytkowe <strong>wille uzdrowiskowe</strong> z przełomu XIX i XX
        wieku — drewniane budynki z werandami i ogrodami, które nadają Supraślowi niepowtarzalny
        klimat. Spacer ulicą Cieliczańską to podróż w czasie do epoki, gdy Supraśl był modnym
        kurortem.
      </p>

      <h2>Zabytkowe domy i architektura</h2>

      <p>
        Supraśl zachował unikatowy zespół <strong>zabytkowej architektury drewnianej</strong>. Wille
        z początku XX wieku, zdobione werandami i balkonami, tworzą charakter miasteczka, którego
        nie sposób pomylić z żadnym innym miejscem. Wiele budynków zostało odrestaurowanych i pełni
        dziś funkcję pensjonatów, kawiarni i galerii.
      </p>

      <h2>Teatr Wierszalin</h2>

      <p>
        <strong>Teatr Wierszalin</strong> to legendarny teatr offowy, który od lat 90. tworzy
        spektakle inspirowane kulturą, mitologią i duchowością Podlasia. Założony przez Piotra
        Tomaszuka, teatr zdobył uznanie na festiwalach w Polsce i za granicą. Spektakle Wierszalina
        to niezapomniane przeżycie artystyczne, głęboko zakorzenione w lokalnej tradycji.
      </p>

      <h2>Rzeka Supraśl</h2>

      <p>
        Rzeka Supraśl to nie tylko malownicza sceneria, ale też raj dla kajakarzy.{' '}
        <Link to="/blog/supraski-system-wodny">Supraski system wodny</Link> — sieć kanałów i jazów
        zbudowanych w XVIII i XIX wieku — to fascynujący zabytek inżynierii, który można odkrywać z
        poziomu wody. Spływy kajakowe rzeką Supraśl prowadzą przez dzikie, nienaruszone fragmenty
        Puszczy Knyszyńskiej.
      </p>

      <h2>Restauracje i kultura kulinarna</h2>

      <p>
        Supraśl oferuje zaskakująco bogatą scenę gastronomiczną jak na tak małe miasteczko.
        Restauracje i kawiarnie serwują dania regionalne inspirowane kuchnią polską, litewską i
        tatarską. Warto spróbować:
      </p>

      <ul>
        <li>
          <strong>Kuchnię regionalną</strong> — pierogi z serem ziemniaczanym, babka ziemniaczana,
          kartacze
        </li>
        <li>
          <strong>Lokalne miody i nalewki</strong> — z klasztornego sklepu w monasterze
        </li>
        <li>
          <strong>Kawiarnie z tarasem</strong> — idealne na popołudniową kawę z widokiem na rzekę
        </li>
      </ul>

      <h2>Puszcza Knyszyńska — serce regionu</h2>

      <p>
        Supraśl to brama do <strong>Puszczy Knyszyńskiej</strong> — jednego z największych i
        najcenniejszych kompleksów leśnych w Polsce. Setki kilometrów{' '}
        <Link to="/blog/szlaki-piesze-rowerowe-suprasl">szlaków pieszych i rowerowych</Link>,{' '}
        <Link to="/blog/szlak-bioroznorodnosci-suprasl">ścieżki edukacyjne</Link> i dzikie ostępy
        leśne czekają na odkrycie.
      </p>

      <h2>Gdzie nocować w Supraślu?</h2>

      <p>
        Jeśli szukasz{' '}
        <strong>
          <Link to="/noclegi-suprasl">noclegu w Supraślu</Link>
        </strong>
        , <Link to="/">In The Woods</Link> oferuje dom w lesie z jacuzzi blisko centrum miasta. To
        prywatna chata w Puszczy Knyszyńskiej z kominkiem, ogrodem i pełnym spokojem — zaledwie 10
        minut od centrum Supraśla.
      </p>

      <p>
        Po dniu pełnym zwiedzania monasteru, spacerów po bulwarach i degustacji lokalnej kuchni,
        wracasz do lasu — do ciszy, ognia i gwiazd. To sposób na{' '}
        <Link to="/weekend-suprasl">weekend w Supraślu</Link>, który zapamiętasz na długo.
      </p>
    </BlogArticleLayout>
  );
};

export default SupraslAtrakcjeUzdrowisko;
