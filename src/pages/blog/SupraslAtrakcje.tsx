import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import blogMonaster from '@/assets/blog-monaster-suprasl.jpg';
import blogRzeka from '@/assets/blog-rzeka-suprasl.jpg';
import exteriorMain from '@/assets/exterior-main.webp';

const SupraslAtrakcje = () => {
  const faqs = [
    {
      question: 'Co warto zobaczyć w Supraślu?',
      answer:
        'Najważniejsze atrakcje to Monaster Zwiastowania NMP, Muzeum Ikon, ulica Cieliczańska, rzeka Supraśl, Park Konstytucji 3 Maja oraz okoliczne szlaki w Puszczy Knyszyńskiej.',
    },
    {
      question: 'Czy Supraśl nadaje się na weekend?',
      answer:
        'Tak, Supraśl to idealne miejsce na weekendowy wypad. W 2–3 dni można zwiedzić monaster, muzeum, spacerować po puszczy i zrelaksować się w kameralnej atmosferze uzdrowiskowego miasteczka.',
    },
    {
      question: 'Jak daleko jest Supraśl od Białegostoku?',
      answer:
        'Supraśl leży zaledwie 15 km od centrum Białegostoku – dojazd samochodem zajmuje ok. 20 minut.',
    },
    {
      question: 'Gdzie nocować w Supraślu?',
      answer:
        'In The Woods to prywatny dom w lesie z jacuzzi, położony blisko Supraśla w Puszczy Knyszyńskiej – idealny nocleg dla par, rodzin i grup.',
    },
  ];

  const relatedArticles = [
    { title: 'Supraski System Wodny – zapomniany cud inżynierii', slug: 'supraski-system-wodny' },
    {
      title: 'Szlak Powstania Styczniowego w Puszczy Knyszyńskiej',
      slug: 'szlak-powstania-styczniowego-suprasl',
    },
    { title: 'Najlepsze szlaki piesze i rowerowe Supraśl', slug: 'szlaki-piesze-rowerowe-suprasl' },
  ];

  return (
    <BlogArticleLayout
      title="Supraśl – co zobaczyć w jednym z najpiękniejszych miasteczek Podlasia"
      metaTitle="Supraśl atrakcje – co zobaczyć, weekend, noclegi | In The Woods"
      metaDescription="Supraśl – najpiękniejsze atrakcje, monaster, Muzeum Ikon, szlaki i slow tourism. Kompletny przewodnik po perle Podlasia."
      slug="suprasl-atrakcje-national-geographic"
      publishDate="2026-03-05"
      readTime="11 min"
      keywords={[
        'Supraśl atrakcje',
        'co zobaczyć Supraśl',
        'noclegi Supraśl',
        'weekend Supraśl',
        'Monaster Supraśl',
        'Muzeum Ikon Supraśl',
      ]}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h1>Supraśl – co zobaczyć w jednym z najpiękniejszych miasteczek Podlasia</h1>

      <p>
        Supraśl to jedno z tych miejsc, które zaskakują. Małe, ciche, niepozorne na mapie — a
        jednocześnie pełne historii, kultury i naturalnego piękna, które sprawia, że podróżnicy
        wracają tu raz za razem. To miasteczko, które docenili zarówno znawcy architektury, jak i
        miłośnicy slow travel, szukający autentycznych doświadczeń z dala od turystycznego tłumu.
      </p>

      <p>
        Położone na skraju Puszczy Knyszyńskiej, zaledwie 15 kilometrów od Białegostoku, Supraśl
        łączy uzdrowiskowy spokój z fascynującą wielokulturowością i bliskością jednych z
        najcenniejszych lasów w Europie. To idealne miejsce na{' '}
        <Link to="/weekend-suprasl">weekend</Link>, romantyczny wyjazd lub rodzinne wakacje.
      </p>

      <img
        src={blogMonaster}
        alt="Monaster Supraśl – atrakcje, co zobaczyć"
        className="w-full rounded-lg my-8"
      />

      <h2>Dlaczego Supraśl jest wyjątkowy?</h2>

      <p>
        Supraśl to miasteczko o ponad 500-letniej historii, które swoją tożsamość zawdzięcza trzem
        elementom: monasterowi, naturze i wielokulturowości. Te trzy filary tworzą unikalną
        atmosferę, której nie znajdziesz w żadnym innym miejscu w Polsce.
      </p>

      <h3>Monaster – duchowe serce Supraśla</h3>

      <p>
        Monaster Zwiastowania Najświętszej Maryi Panny to najstarsza i najważniejsza budowla w
        Supraślu. Założony w 1500 roku przez mnichów prawosławnych, przez wieki był centrum
        duchowym, kulturalnym i gospodarczym regionu. Dziś jest czynnym klasztorem prawosławnym i
        jedną z najważniejszych atrakcji turystycznych Podlasia.
      </p>

      <p>
        Kompleks monasterski obejmuje cerkiew Zwiastowania z XVI-wiecznymi freskami
        (odrestaurowanymi po zniszczeniach wojennych), budynki klasztorne z muzeum i biblioteką,
        oraz piękne ogrody. Architektura monasteru to unikatowe połączenie gotyku, renesansu i
        tradycji bizantyjskiej — świadectwo wielokulturowości, która od zawsze definiowała ten
        region.
      </p>

      <h3>Muzeum Ikon</h3>

      <p>
        W budynkach monasterskich mieści się jedno z najciekawszych muzeów w Polsce — Muzeum Ikon.
        Kolekcja obejmuje ikony z XVI–XX wieku, pochodzące z cerkwi i klasztorów całego Podlasia. To
        jedyna tak duża i systematyczna kolekcja sztuki ikonopisarskiej w kraju.
      </p>

      <p>
        Muzeum nie jest jednak tylko zbiorem obrazów — to opowieść o duchowości, tradycji i kunszcie
        artystycznym, które przez wieki kształtowały kulturę regionu. Ekspozycja jest przemyślanie
        zaaranżowana, z doskonałym oświetleniem i informacyjnymi opisami, które pozwalają zrozumieć
        kontekst i symbolikę każdego dzieła.
      </p>

      <img
        src={blogRzeka}
        alt="Rzeka Supraśl – kajaki, atrakcje Supraśl"
        className="w-full rounded-lg my-8"
      />

      <h2>Największe atrakcje Supraśla</h2>

      <h3>Rzeka Supraśl</h3>

      <p>
        Rzeka Supraśl to naturalny kręgosłup miasteczka i jeden z jego głównych atutów. Spokojna,
        malownicza, otoczona łąkami i lasami — idealnie nadaje się do spływów kajakowych, spacerów
        nadbrzeżnych i po prostu kontemplacji. Wiosną i latem wzdłuż rzeki kwitną dzikie kwiaty, a
        jesienią — złociste liście odbijają się w wodzie tworząc bajkowe widoki.
      </p>

      <p>
        <Link to="/blog/supraski-system-wodny">Supraski System Wodny</Link>, historyczna sieć
        kanałów i stawów zbudowana przez mnichów, dodaje rzece dodatkowy wymiar — spacerując wzdłuż
        koryta, można odkrywać ślady wielowiekowej ludzkiej inżynierii harmonijnie wpisanej w
        krajobraz.
      </p>

      <h3>Ulica Cieliczańska</h3>

      <p>
        Drewniana zabudowa ulicy Cieliczańskiej to prawdziwa perełka architektoniczna. Kolorowe,
        odrestaurowane domki z przełomu XIX i XX wieku tworzą jeden z najpiękniejszych ciągów
        zabudowy drewnianej na Podlasiu. Spacer tą ulicą to podróż w czasie — do epoki, gdy Supraśl
        był tętniącym życiem miasteczkiem włókienniczym.
      </p>

      <h3>Park Konstytucji 3 Maja</h3>

      <p>
        Niewielki, ale urokliwy park miejski z alejkami lipowymi, ławkami i małym amfiteatrem. Latem
        odbywają się tu koncerty i wydarzenia kulturalne. To serce towarzyskiego życia Supraśla —
        miejsce, gdzie lokalni mieszkańcy i turyści spotykają się na porannej kawie lub wieczornym
        spacerze.
      </p>

      <h3>Kawiarnie i restauracje</h3>

      <p>
        Supraśl, mimo swoich niewielkich rozmiarów, ma zaskakująco bogatą scenę gastronomiczną. Od
        tradycyjnych kuchni podlaskich, przez kawiarnie z domowymi ciastami, po restauracje
        serwujące kuchnię fusion — każdy znajdzie coś dla siebie. Wiele lokali korzysta z lokalnych
        produktów, co wpisuje się w filozofię slow food.
      </p>

      <h2>Co robić w weekend w Supraślu?</h2>

      <h3>Dzień 1: Kultura i historia</h3>

      <p>
        Poranek zacznij od wizyty w monasterze — najlepiej wejść do cerkwi rano, gdy światło wpada
        przez witraże i oświetla freski. Po monasterze — Muzeum Ikon (zarezerwuj min. 1,5 godziny).
        Obiad w jednej z restauracji w centrum. Popołudnie na spacerze ulicą Cieliczańską i w parku.
        Wieczorem — kolacja i relaks.
      </p>

      <h3>Dzień 2: Natura i aktywność</h3>

      <p>
        Rano — <Link to="/blog/szlaki-piesze-rowerowe-suprasl">szlak pieszy lub rowerowy</Link> w
        Puszczy Knyszyńskiej. Polecamy rezerwat Krzemienne Góry lub{' '}
        <Link to="/blog/szlak-powstania-styczniowego-suprasl">Szlak Powstania Styczniowego</Link>.
        Po południu — spływ kajakowy rzeką Supraśl lub spacer wzdłuż{' '}
        <Link to="/blog/supraski-system-wodny">Supraskiego Systemu Wodnego</Link>. Wieczorem —
        rozpalony kominek i jacuzzi w In The Woods.
      </p>

      <h3>Dzień 3: Slow morning i powrót</h3>

      <p>
        Leniwy poranek z kawą na tarasie w lesie. Odwiedzenie lokalnego targu (w sezonie) lub
        jeszcze jeden krótki spacer po okolicy. Powrót do domu z poczuciem, że weekend trwał
        tydzień.
      </p>

      <img
        src={exteriorMain}
        alt="In The Woods – noclegi Supraśl, dom w lesie z jacuzzi"
        className="w-full rounded-lg my-8"
      />

      <h2>Dlaczego warto nocować blisko natury?</h2>

      <p>
        Supraśl to miasteczko, które najlepiej smakuje, gdy nie spieszy się do hotelu w centrum,
        lecz zatrzymuje w miejscu, które samo w sobie jest doświadczeniem. Nocleg w lesie, z dala od
        szumu miasta, pozwala w pełni poczuć magię tego regionu — ciszę puszczy, zapach żywicy,
        śpiew ptaków o świcie.
      </p>

      <p>
        Jeśli szukasz <Link to="/noclegi-suprasl">noclegu w Supraślu</Link>, sprawdź In The Woods —{' '}
        <Link to="/dom-w-lesie-suprasl">dom w lesie</Link> zapewniający ciszę i komfort. Jacuzzi pod
        gwiazdami, kominek, pełna kuchnia i ogród w sercu Puszczy Knyszyńskiej. To baza wypadowa,
        która sama w sobie jest atrakcją.
      </p>

      <h2>Supraśl w różnych porach roku</h2>

      <h3>Wiosna</h3>
      <p>
        Kwitnienie zawilców w puszczy, spływy kajakowe, koncerty plenerowe. Temperatury idealne na
        piesze wędrówki.
      </p>

      <h3>Lato</h3>
      <p>
        Najdłuższe dni, kąpieliska nad rzeką, festiwale (m.in. Noc Kupały). Pełnia sezonu
        turystycznego.
      </p>

      <h3>Jesień</h3>
      <p>
        Złota jesień w puszczy to widok, który zapiera dech. Grzybobranie, spokojne spacery,
        kameralna atmosfera.
      </p>

      <h3>Zima</h3>
      <p>
        Śnieżne szlaki, cisza zaśnieżonego lasu, gorąca czekolada w kawiarni. Zimowy Supraśl ma swój
        niepowtarzalny urok.
      </p>

      <p>
        Niezależnie od pory roku, Supraśl oferuje autentyczne doświadczenia, których próżno szukać w
        większych, bardziej turystycznych miastach. To miejsce, które nagradza ciekawość i otwartość
        — i do którego niezmiennie chce się wracać.
      </p>
    </BlogArticleLayout>
  );
};

export default SupraslAtrakcje;
