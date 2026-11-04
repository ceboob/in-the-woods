import type { ReactNode } from 'react';
import { Car, Footprints, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOPageLayout from '@/components/SEOPageLayout';
import CommonsPhoto from '@/components/CommonsPhoto';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import { commonsPhotos } from '@/lib/commonsPhotos';

const SITE_URL = 'https://www.suprasl.online';
const PAGE_PATH = '/atrakcje-suprasl';
// Pinezka obiektu z Map Google; od niej liczone są wszystkie trasy na tej stronie.
const HOME_COORDINATES = '53.208571,23.436589';

const directionsUrl = (destination: string) =>
  `https://www.google.com/maps/dir/?api=1&origin=${HOME_COORDINATES}&destination=${encodeURIComponent(destination)}&travelmode=driving`;

const inlineLinkClass =
  'text-foreground underline decoration-primary underline-offset-2 hover:text-primary';

interface Attraction {
  id: string;
  name: string;
  area: 'suprasl' | 'okolica';
  image: string;
  width: number;
  height: number;
  alt: string;
  /** Czas jazdy z Map Google; 0 oznacza start pieszo spod domu. */
  minutes: number;
  distance: string;
  destination?: string;
  latitude?: number;
  longitude?: number;
  locality: string;
  credit?: ReactNode;
  body: ReactNode;
}

const attractions: Attraction[] = [
  {
    id: 'monaster-zwiastowania',
    name: 'Monaster Zwiastowania NMP',
    area: 'suprasl',
    image: '/images/atrakcje/monaster-suprasl.webp',
    width: 666,
    height: 444,
    alt: 'Monaster Zwiastowania NMP w Supraślu z lotu ptaka, ceglana cerkiew i białe zabudowania klasztorne',
    minutes: 13,
    distance: '8,8 km',
    destination: 'Prawosławny Monaster Zwiastowania Przenajświętszej Bogurodzicy, Klasztorna 1, 16-030 Supraśl',
    latitude: 53.2105968,
    longitude: 23.337246,
    locality: 'Supraśl',
    body: (
      <>
        Prawosławny klasztor założony około 1500 roku przez mnichów z&nbsp;Gródka, serce
        i&nbsp;najbardziej rozpoznawalny widok Supraśla. Ceglana cerkiew z&nbsp;gotyckimi wieżami
        i&nbsp;bizantyjskimi kopułami została wysadzona w&nbsp;1944 roku i&nbsp;odbudowana. Wstęp za
        dobrowolną cegiełkę w&nbsp;furcie, obowiązuje stosowny strój, a&nbsp;w&nbsp;poniedziałki
        i&nbsp;podczas popołudniowej „ciszy monasterskiej” teren jest zamknięty.
      </>
    ),
  },
  {
    id: 'muzeum-ikon',
    name: 'Muzeum Ikon',
    area: 'suprasl',
    image: '/images/atrakcje/muzeum-ikon-suprasl.webp',
    width: 666,
    height: 444,
    alt: 'Sala Muzeum Ikon w Supraślu z ikonami na czerwonych ścianach',
    minutes: 12,
    distance: '8,4 km',
    destination: 'Muzeum Ikon w Supraślu, Klasztorna 1, 16-030 Supraśl',
    latitude: 53.2110429,
    longitude: 23.3379932,
    locality: 'Supraśl',
    body: (
      <>
        Ul. Klasztorna 1. Około 1,2&nbsp;tys. ikon, w&nbsp;dużej części przejętych przez celników na
        wschodniej granicy, pokazanych w&nbsp;9 salach urządzonych jak grota pustelnika, cerkiew czy
        wiejska chata. Są tu też ocalałe XVI-wieczne freski z&nbsp;wysadzonej cerkwi. Ikony pokazane
        tak, że nawet zatwardziały ateista stoi z&nbsp;otwartą buzią. Zarezerwujcie od godziny do
        pół dnia.
      </>
    ),
  },
  {
    id: 'muzeum-drukarstwa',
    name: 'Muzeum Sztuki Drukarskiej i Papiernictwa',
    area: 'suprasl',
    image: '/images/atrakcje/muzeum-drukarstwa-suprasl.webp',
    width: 666,
    height: 375,
    alt: 'Zabytkowy linotyp w Muzeum Sztuki Drukarskiej i Papiernictwa w Supraślu',
    minutes: 12,
    distance: '8,4 km',
    destination: 'Muzeum Sztuki Drukarskiej i Papiernictwa, Klasztorna 1, 16-030 Supraśl',
    latitude: 53.2109208,
    longitude: 23.3380526,
    locality: 'Supraśl',
    credit: 'Fot. Monika Kalicka, Polskie Radio Białystok.',
    body: (
      <>
        Tuż obok Muzeum Ikon. Drukarnia działała w&nbsp;klasztorze od 1695 roku, a&nbsp;papiernia
        była pierwszą we wschodniej Polsce. W&nbsp;muzeum zobaczycie dawne maszyny drukarskie
        i&nbsp;własnoręcznie zrobicie kartkę papieru, co dzieci uwielbiają. Uwaga: do budynku
        prowadzą schody, nie ma podjazdu dla wózków.
      </>
    ),
  },
  {
    id: 'palac-buchholtzow',
    name: 'Pałac Buchholtzów i Dom Jansena',
    area: 'suprasl',
    image: '/images/atrakcje/palac-buchholtzow-suprasl.webp',
    width: 666,
    height: 458,
    alt: 'Biała fasada Pałacu Buchholtzów w Supraślu z rzeźbą i klombem róż przed wejściem',
    minutes: 14,
    distance: '9,4 km',
    destination: 'Pałac Buchholtzów, 3 Maja 2, 16-030 Supraśl',
    latitude: 53.2069444,
    longitude: 23.3427778,
    locality: 'Supraśl',
    body: (
      <>
        Secesyjna rezydencja fabrykantów, którzy po powstaniu listopadowym przenieśli tu fabryki
        włókiennicze, a&nbsp;naprzeciwko dawne zabudowania fabryczne. Dziś oba budynki należą do
        liceum plastycznego. Zobaczycie je na końcu ulicy 3&nbsp;Maja.
      </>
    ),
  },
  {
    id: 'domy-tkaczy',
    name: 'Domy Tkaczy i drewniany Supraśl',
    area: 'suprasl',
    image: '/images/atrakcje/domy-tkaczy-suprasl.webp',
    width: 666,
    height: 433,
    alt: 'Drewniany dom tkacza z czerwonymi okiennicami przy zaśnieżonej ulicy 3 Maja w Supraślu',
    minutes: 13,
    distance: '9,2 km',
    destination: 'Domy tkaczy, 3 Maja, 16-030 Supraśl',
    latitude: 53.2060823,
    longitude: 23.3405313,
    locality: 'Supraśl',
    body: (
      <>
        Parterowe domy z&nbsp;lat 30. XIX wieku przy ulicy 3&nbsp;Maja, w&nbsp;których mieszkały
        rodziny tkaczy. Zwróćcie uwagę na masywne okiennice i&nbsp;kominy zwane „nogawicami”. Przy
        ul. Konarskiego stoi XVIII-wieczny Dom Ogrodnika, który bywał też karczmą i&nbsp;pocztą.
        Każdy dom wygląda jak z&nbsp;pocztówki, więc przygotujcie telefon.
      </>
    ),
  },
  {
    id: 'bulwary',
    name: 'Bulwary Wiktora Wołkowa i plaża miejska',
    area: 'suprasl',
    image: '/images/atrakcje/bulwary-wolkowa-suprasl.webp',
    width: 666,
    height: 445,
    alt: 'Spacerowicze na Bulwarach Wiktora Wołkowa nad rzeką Supraśl',
    minutes: 13,
    distance: '8,9 km',
    destination: 'bulwary Wiktora Wołkowa, 16-030 Supraśl',
    latitude: 53.2100362,
    longitude: 23.3415338,
    locality: 'Supraśl',
    body: (
      <>
        Około 1,1&nbsp;km alejek wzdłuż rzeki, kąpielisko, korty, boiska, minigolf i&nbsp;siłownia
        pod chmurką, a&nbsp;z&nbsp;kładki widok na monaster. Najprostszy plan na leniwe popołudnie,
        także{' '}
        <Link to="/blog/suprasl-z-dziecmi" className={inlineLinkClass}>
          z&nbsp;dziećmi w&nbsp;Supraślu
        </Link>
        .
      </>
    ),
  },
  {
    id: 'teatr-wierszalin',
    name: 'Teatr Wierszalin',
    area: 'suprasl',
    image: '/images/atrakcje/teatr-wierszalin-suprasl.webp',
    width: 666,
    height: 267,
    alt: 'Drewniany budynek Teatru Wierszalin w Supraślu wśród drzew',
    minutes: 13,
    distance: '9,2 km',
    destination: 'Teatr Wierszalin, Kościelna 4, 16-030 Supraśl',
    latitude: 53.2056421,
    longitude: 23.3364613,
    locality: 'Supraśl',
    body: (
      <>
        Teatr z&nbsp;Supraśla, o&nbsp;którym mówi się w&nbsp;całej Polsce, założony w&nbsp;1991 roku
        przez Piotra Tomaszuka. Gra w&nbsp;drewnianym domu wśród rzeźb, inspirując się podlaskim
        folklorem i&nbsp;mitami. Spektakle, po których gada się jeszcze w&nbsp;samochodzie. Latem
        scena zwykle odpoczywa, więc na teatr najlepiej przyjechać jesienią albo zimą.
      </>
    ),
  },
  {
    id: 'dom-ludowy',
    name: 'Dom Ludowy i Biały Dworek',
    area: 'suprasl',
    image: '/images/atrakcje/dom-ludowy-suprasl.webp',
    width: 666,
    height: 444,
    alt: 'Biały, drewniany Dom Ludowy w Supraślu z przeszkloną klatką schodową i restauracją Prowincja',
    minutes: 12,
    distance: '9 km',
    destination: 'Dom Ludowy, Józefa Piłsudskiego 11, 16-030 Supraśl',
    latitude: 53.206248,
    longitude: 23.3372197,
    locality: 'Supraśl',
    body: (
      <>
        Drewniany, modernistyczny Dom Ludowy z&nbsp;1934 roku z&nbsp;przeszkloną klatką schodową to
        unikat na skalę kraju, dziś mieści restaurację Prowincja. Biały Dworek z&nbsp;1822 roku
        (12&nbsp;min, 8,3&nbsp;km od domu) jest siedzibą Parku Krajobrazowego Puszczy Knyszyńskiej,
        z&nbsp;wystawą o&nbsp;faunie i&nbsp;florze puszczy. Dobry start przed leśnymi szlakami.
      </>
    ),
  },
  {
    id: 'suprasl-filmowy',
    name: 'Supraśl filmowy',
    area: 'suprasl',
    image: '/images/atrakcje/suprasl-filmowy-u-pana-boga.webp',
    width: 666,
    height: 449,
    alt: 'Duchowny w kapeluszu jadący rowerem wzdłuż drewnianego płotu, filmowy kadr z Podlasia',
    minutes: 15,
    distance: '9,8 km',
    destination: 'Zielona, 16-030 Supraśl',
    latitude: 53.2047354,
    longitude: 23.3464616,
    locality: 'Supraśl',
    body: (
      <>
        To tutaj Jacek Bromski kręcił trylogię „U&nbsp;Pana Boga…”. Filmowy posterunek
        w&nbsp;Królowym Moście stoi przy ul. Zielonej (do niej liczymy dojazd), a&nbsp;dom komendanta
        zagrał Dom Kleina przy ul. 3&nbsp;Maja. Fani znajdą też komin z&nbsp;pamiętnej sceny. Kościół
        św. Trójcy przy Piłsudskiego widać z&nbsp;kolei w&nbsp;serialu „Blondynka”.
      </>
    ),
  },
  {
    id: 'cmentarz-prawoslawny',
    name: 'Cmentarz prawosławny',
    area: 'suprasl',
    image: '/images/atrakcje/cmentarz-prawoslawny-suprasl.webp',
    width: 666,
    height: 444,
    alt: 'Ceglana brama cmentarza prawosławnego w Supraślu wśród sosen',
    minutes: 10,
    distance: '6,9 km',
    destination: 'Cmentarz prawosławny, Podsupraśl 2, 16-030 Supraśl',
    latitude: 53.2203063,
    longitude: 23.3491326,
    locality: 'Supraśl',
    body: (
      <>
        Ciche miejsce, które pokazuje wielowyznaniową historię miasteczka. Idźcie tam spokojnie
        i&nbsp;z&nbsp;szacunkiem.
      </>
    ),
  },
  {
    id: 'szlaki-puszczy-knyszynskiej',
    name: 'Szlaki Puszczy Knyszyńskiej',
    area: 'okolica',
    image: '/images/atrakcje/kladka-puszcza-knyszynska.webp',
    width: 666,
    height: 500,
    alt: 'Drewniana kładka przez podmokłą łąkę w Puszczy Knyszyńskiej',
    minutes: 0,
    distance: 'od progu',
    locality: 'Konne',
    body: (
      <>
        Zaczynają się właściwie za płotem. Krótki spacer przed śniadaniem albo cały dzień w&nbsp;lesie
        z&nbsp;kanapkami w&nbsp;plecaku. Trasy rozpisaliśmy w&nbsp;przewodniku po{' '}
        <Link to="/blog/szlaki-piesze-rowerowe-suprasl" className={inlineLinkClass}>
          szlakach pieszych i&nbsp;rowerowych wokół Supraśla
        </Link>
        .
      </>
    ),
  },
  {
    id: 'arboretum-kopna-gora',
    name: 'Arboretum w Kopnej Górze',
    area: 'okolica',
    image: '/images/atrakcje/arboretum-kopna-gora.webp',
    width: 666,
    height: 500,
    alt: 'Staw z liliami wodnymi w Arboretum w Kopnej Górze',
    minutes: 14,
    distance: '7,3 km',
    destination: 'Arboretum im. Powstańców 1863, 16-030 Kopna Góra',
    latitude: 53.2506432,
    longitude: 23.4805367,
    locality: 'Kopna Góra',
    body: (
      <>
        Ponad 20&nbsp;hektarów drzew i&nbsp;krzewów z&nbsp;całego świata, na kilka godzin łażenia.
        Dzieci zbierają szyszki, dorośli udają, że nie. Jedna z&nbsp;najładniejszych przyrodniczych
        atrakcji Podlasia, najpiękniejsza w&nbsp;maju i&nbsp;październiku.
      </>
    ),
  },
  {
    id: 'rezerwat-krzemienne-gory',
    name: 'Rezerwat Krzemienne Góry',
    area: 'okolica',
    image: '/images/atrakcje/rezerwat-krzemienne-gory.webp',
    width: 666,
    height: 502,
    alt: 'Drewniana tablica Rezerwatu Przyrody Krzemienne Góry w zimowym lesie',
    minutes: 20,
    distance: '14,2 km',
    destination: 'Rezerwat Krzemienne Góry, Supraśl',
    latitude: 53.2010394,
    longitude: 23.403201,
    locality: 'Supraśl',
    body: (
      <>Przyrodniczy zakątek niedaleko domu, dobry na leśny spacer bez długiego dojazdu.</>
    ),
  },
  {
    id: 'swieta-woda-wasilkow',
    name: 'Sanktuarium Świętej Wody w Wasilkowie',
    area: 'okolica',
    image: '/images/atrakcje/gora-krzyzy-swieta-woda-wasilkow.webp',
    width: 666,
    height: 375,
    alt: 'Tysiące drewnianych krzyży na Górze Krzyży w Świętej Wodzie koło Wasilkowa',
    minutes: 26,
    distance: '18,3 km',
    destination: 'Sanktuarium Matki Boskiej Bolesnej w Świętej Wodzie, 16-010 Wasilków',
    latitude: 53.2203215,
    longitude: 23.2221258,
    locality: 'Wasilków',
    body: (
      <>
        Źródełko i&nbsp;Góra Krzyży z&nbsp;tysiącami krzyży, po drodze między Supraślem
        a&nbsp;Białymstokiem.
      </>
    ),
  },
  {
    id: 'bialystok-palac-branickich',
    name: 'Białystok i Pałac Branickich',
    area: 'okolica',
    image: commonsPhotos.bialystok.image,
    width: commonsPhotos.bialystok.width,
    height: commonsPhotos.bialystok.height,
    alt: 'Fasada Pałacu Branickich w Białymstoku',
    minutes: 30,
    distance: '24,1 km',
    destination: 'Pałac Branickich, Jana Kilińskiego 1, 15-089 Białystok',
    latitude: 53.1306049,
    longitude: 23.1651389,
    locality: 'Białystok',
    credit: (
      <>
        Fot.{' '}
        <a
          href={commonsPhotos.bialystok.source}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {commonsPhotos.bialystok.author}
        </a>
        , licencja{' '}
        <a
          href={commonsPhotos.bialystok.licenseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {commonsPhotos.bialystok.license}
        </a>
        .
      </>
    ),
    body: (
      <>
        Pałac Branickich, nazywany Wersalem Północy, Rynek Kościuszki i&nbsp;drewniane Bojary, jeśli
        po dwóch dniach w&nbsp;lesie zatęsknicie za miastem. Rozpisaliśmy to w&nbsp;tekście{' '}
        <Link to="/blog/bialystok-i-okolice-co-zobaczyc" className={inlineLinkClass}>
          co warto zobaczyć w&nbsp;Białymstoku i&nbsp;okolicach
        </Link>
        .
      </>
    ),
  },
  {
    id: 'kruszyniany',
    name: 'Kruszyniany',
    area: 'okolica',
    image: '/images/atrakcje/meczet-kruszyniany.webp',
    width: 666,
    height: 488,
    alt: 'Zielony, drewniany meczet w Kruszynianach z lotu ptaka',
    minutes: 41,
    distance: '37,9 km',
    destination: 'Drewniany Meczet w Kruszynianach, Kruszyniany 62, 16-120 Kruszyniany',
    latitude: 53.1777642,
    longitude: 23.8137561,
    locality: 'Kruszyniany',
    body: (
      <>
        Tatarska wieś z&nbsp;drewnianym meczetem i&nbsp;mizarem. Wycieczka na pół dnia albo cały
        dzień, najlepiej połączona z&nbsp;obiadem w&nbsp;tatarskiej kuchni. Więcej w&nbsp;naszym
        tekście o{' '}
        <Link to="/blog/kruszyniany-tatarska-wies" className={inlineLinkClass}>
          Kruszynianach, tatarskiej wsi na Podlasiu
        </Link>
        .
      </>
    ),
  },
  {
    id: 'tykocin',
    name: 'Tykocin nad Narwią',
    area: 'okolica',
    image: '/images/atrakcje/tykocin-rynek.webp',
    width: 666,
    height: 375,
    alt: 'Brukowany rynek w Tykocinie z białym budynkiem i wieżami kościoła w tle',
    minutes: 51,
    distance: '53,2 km',
    destination: 'Wielka Synagoga w Tykocinie, Kozia 2, 16-080 Tykocin',
    latitude: 53.2067087,
    longitude: 22.7672439,
    locality: 'Tykocin',
    body: (
      <>
        Rynek, Wielka Synagoga i&nbsp;odbudowany zamek. W&nbsp;pakiecie z&nbsp;kładką w&nbsp;Waniewie
        to gotowy plan na niedzielę.
      </>
    ),
  },
];

const attractionsByTime = [...attractions].sort((a, b) => a.minutes - b.minutes);

const faqs = [
  {
    question: 'Co warto zobaczyć w Supraślu i na Podlasiu w jeden dzień?',
    answer:
      'Rano monaster i Muzeum Ikon, potem spacer ulicą 3 Maja obok Domów Tkaczy, obiad w miasteczku i leniwe popołudnie nad rzeką Supraśl. Jeśli zostanie Wam siły, dorzućcie Muzeum Drukarstwa albo bulwary.',
  },
  {
    question: 'Jak daleko z domu In The Woods do centrum Supraśla?',
    answer:
      'Około 9 km, czyli 12–15 minut autem. Muzeum Ikon macie w 12 minut (8,4 km), monaster w 13 minut (8,8 km), a Domy Tkaczy przy ulicy 3 Maja w 13 minut (9,2 km).',
  },
  {
    question: 'Jakie atrakcje są w okolicy Supraśla do pół godziny jazdy?',
    answer:
      'Arboretum w Kopnej Górze (14 minut), Rezerwat Krzemienne Góry (20 minut), Sanktuarium Świętej Wody w Wasilkowie (26 minut) i Pałac Branickich w Białymstoku (30 minut). Szlaki Puszczy Knyszyńskiej zaczynają się właściwie za płotem.',
  },
  {
    question: 'Czy Supraśl jest uzdrowiskiem?',
    answer:
      'Tak, Supraśl ma oficjalny status uzdrowiska. Czuć to po powietrzu i tempie: miasteczko jest małe, zielone i najlepiej zwiedza się je pieszo, bez spinania się, że trzeba zobaczyć wszystko.',
  },
  {
    question: 'Jak daleko do Kruszynian?',
    answer:
      'Z naszego domu to około 41 minut autem (37,9 km), wycieczka na pół dnia albo cały dzień. W Kruszynianach czeka drewniany meczet, mizar i tatarska kuchnia, dla której warto przyjechać głodnym.',
  },
  {
    question: 'Czy w Puszczy Knyszyńskiej można zbierać grzyby?',
    answer:
      'Tak, poza rezerwatami i miejscami oznaczonymi zakazem. Jesienią to tutaj niemal sport narodowy. Zbierajcie tylko te gatunki, które znacie na sto procent.',
  },
  {
    question: 'Gdzie zjeść kuchnię podlaską i tatarską?',
    answer:
      'Kartacze, babkę i kiszkę ziemniaczaną zjecie w Supraślu, a tatarskie pierekaczewniki i pierogi w Kruszynianach. Maciej chętnie powie, gdzie sam chodzi na obiad.',
  },
];

const attractionListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Atrakcje Supraśla i okolic',
  numberOfItems: attractions.length,
  itemListElement: attractions.map((attraction, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'TouristAttraction',
      name: attraction.name,
      url: `${SITE_URL}${PAGE_PATH}#${attraction.id}`,
      image: `${SITE_URL}${attraction.image}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: attraction.locality,
        addressRegion: 'podlaskie',
        addressCountry: 'PL',
      },
      ...(attraction.latitude && attraction.longitude
        ? {
            geo: {
              '@type': 'GeoCoordinates',
              latitude: attraction.latitude,
              longitude: attraction.longitude,
            },
          }
        : {}),
    },
  })),
};

const StayCta = ({ title, children }: { title: string; children: ReactNode }) => (
  <aside className="not-prose rounded-lg bg-secondary p-6 md:p-8">
    <h2 className="font-heading text-2xl text-foreground">{title}</h2>
    <p className="mt-2 text-muted-foreground leading-relaxed">{children}</p>
    <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
      <a href="/#rezerwacja" className="btn-primary text-center">
        Sprawdź wolne terminy
      </a>
      <a
        href="tel:+48722765101"
        className="btn-outline inline-flex items-center justify-center gap-2"
      >
        <Phone className="w-4 h-4" aria-hidden="true" /> 722 765 101
      </a>
    </div>
  </aside>
);

const AttractionCard = ({ attraction }: { attraction: Attraction }) => (
  <article
    id={attraction.id}
    className="scroll-mt-24 grid gap-5 md:grid-cols-[2fr_3fr] md:gap-8"
  >
    <figure className="m-0">
      <img
        src={attraction.image}
        alt={attraction.alt}
        width={attraction.width}
        height={attraction.height}
        loading="lazy"
        decoding="async"
        className="aspect-[3/2] w-full rounded-lg object-cover"
      />
      {attraction.credit ? (
        <figcaption className="mt-2 text-xs text-muted-foreground">{attraction.credit}</figcaption>
      ) : null}
    </figure>
    <div>
      <h3 className="font-heading text-2xl text-foreground">{attraction.name}</h3>
      <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-foreground">
        {attraction.minutes === 0 ? (
          <>
            <Footprints className="w-4 h-4" aria-hidden="true" /> Pieszo spod domu
          </>
        ) : (
          <>
            <Car className="w-4 h-4" aria-hidden="true" /> {attraction.minutes}&nbsp;min autem ·{' '}
            {attraction.distance} od domu
          </>
        )}
      </p>
      <p className="mt-3 text-muted-foreground leading-relaxed">{attraction.body}</p>
      {attraction.destination ? (
        <a
          href={directionsUrl(attraction.destination)}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-3 inline-flex items-center gap-1.5 text-sm ${inlineLinkClass}`}
        >
          <MapPin className="w-4 h-4" aria-hidden="true" /> Trasa w&nbsp;Mapach Google
        </a>
      ) : null}
    </div>
  </article>
);

const AtrakcjeSuprasl = () => (
  <SEOPageLayout
    title="Atrakcje Supraśla: 17 miejsc z&nbsp;czasem dojazdu | In The Woods"
    description="Monaster, Muzeum Ikon, Kruszyniany, Tykocin: 17 atrakcji Supraśla i&nbsp;okolic ze zdjęciami, odległością i&nbsp;czasem dojazdu z&nbsp;domu w&nbsp;Puszczy Knyszyńskiej."
    breadcrumbName="Atrakcje Supraśla"
    ogImage="https://www.suprasl.online/images/terrace-porch.jpg"
    jsonLd={[...createLandingPageSchemas(PAGE_PATH, faqs), attractionListSchema]}
    showRelatedPages={false}
    ctaTitle="Planujecie pobyt? Sprawdźcie wolne terminy"
    ctaDescription="Maciej podpowie, jak połączyć zwiedzanie Supraśla z&nbsp;leniuchowaniem w&nbsp;lesie."
    ctaFormLabel="Zapytaj o&nbsp;pobyt"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Atrakcje Supraśla i&nbsp;okolic: co zobaczyć, kiedy wyjdziecie z&nbsp;balii
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Supraśl to małe uzdrowisko z&nbsp;monasterem, ikonami, rzeką i&nbsp;teatrem, o&nbsp;którym
        mówi się w&nbsp;całej Polsce, a&nbsp;dookoła zaczyna się Puszcza Knyszyńska. Z&nbsp;naszego
        domu do centrum jedziecie około 13&nbsp;minut. Poniżej 17&nbsp;miejsc, które sami polecamy
        znajomym, każde z&nbsp;czasem i&nbsp;odległością dojazdu.
      </p>
      <CommonsPhoto
        photo={commonsPhotos.river}
        alt="Rzeka Supraśl z widokiem na monaster w Supraślu"
        className="aspect-[16/9] object-cover"
      />

      <StayCta title="Cały dom w&nbsp;lesie, 13 minut od monasteru">
        In The Woods to drewniany dom dla maksymalnie 8&nbsp;osób w&nbsp;Konnem, wynajmowany
        w&nbsp;całości. Rano zwiedzacie, wieczorem kominek i&nbsp;las za oknem.
      </StayCta>

      <section aria-labelledby="dojazd-z-domu">
        <h2 id="dojazd-z-domu" className="section-title !text-2xl md:!text-3xl">
          Ile jedziecie z&nbsp;domu: odległości i&nbsp;czasy dojazdu
        </h2>
        <div className="not-prose mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-border text-foreground">
                <th scope="col" className="py-2 pr-4 font-medium">
                  Atrakcja
                </th>
                <th scope="col" className="py-2 pr-4 font-medium whitespace-nowrap">
                  Czas autem
                </th>
                <th scope="col" className="py-2 font-medium">
                  Odległość
                </th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {attractionsByTime.map((attraction) => (
                <tr key={attraction.id} className="border-b border-border/60">
                  <td className="py-2 pr-4">
                    <a href={`#${attraction.id}`} className={inlineLinkClass}>
                      {attraction.name}
                    </a>
                  </td>
                  <td className="py-2 pr-4 whitespace-nowrap">
                    {attraction.minutes === 0 ? 'pieszo' : <>{attraction.minutes}&nbsp;min</>}
                  </td>
                  <td className="py-2 whitespace-nowrap">{attraction.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Najszybsze trasy samochodem z&nbsp;Map Google, liczone od domu In The Woods w&nbsp;Konnem
          (sprawdzone w&nbsp;listopadzie 2026, bez korków). W&nbsp;sezonie doliczcie kilka minut.
        </p>
      </section>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Atrakcje w&nbsp;Supraślu: 10–15 minut autem od domu
      </h2>
      <div className="not-prose space-y-10">
        {attractions
          .filter((attraction) => attraction.area === 'suprasl')
          .map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
      </div>

      <StayCta title="Zwiedzanie rano, balia wieczorem">
        Po całym dniu w&nbsp;miasteczku wracacie do własnego domu w&nbsp;puszczy. Napiszcie, kiedy
        chcecie przyjechać, a&nbsp;Maciej sprawdzi termin i&nbsp;podpowie plan zwiedzania.
      </StayCta>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Atrakcje okolicy: wycieczki do godziny autem od domu
      </h2>
      <div className="not-prose space-y-10">
        {attractions
          .filter((attraction) => attraction.area === 'okolica')
          .map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
      </div>

      <h2 className="section-title !text-2xl md:!text-3xl">Co robić o&nbsp;różnych porach roku</h2>
      <p className="text-muted-foreground leading-relaxed">
        Latem{' '}
        <Link to="/blog/kajaki-suprasl" className={inlineLinkClass}>
          kajaki na rzece Supraśl
        </Link>
        , która płynie spokojnie, więc dacie radę nawet bez doświadczenia. Jesienią{' '}
        <Link to="/blog/grzybobranie-puszcza-knyszynska" className={inlineLinkClass}>
          grzybobranie
        </Link>{' '}
        poza rezerwatami.{' '}
        <Link to="/blog/suprasl-zima" className={inlineLinkClass}>
          Zimą
        </Link>{' '}
        spacery po śniegu i&nbsp;narty biegowe, a&nbsp;potem szybki powrót do kominka.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Gdzie zjeść: kuchnia podlaska i&nbsp;tatarska
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        W&nbsp;Supraślu zjecie kartacze, babkę ziemniaczaną i&nbsp;sękacz, m.in. w&nbsp;Łukaszówce,
        której właścicielka wygrywała mistrzostwa w&nbsp;pieczeniu babki,
        a&nbsp;w&nbsp;Kruszynianach tatarskie specjały. Lokale opisaliśmy w&nbsp;naszym{' '}
        <Link
          to="/blog/przewodnik-kulinarny-suprasl"
          className="text-primary underline hover:text-primary/80"
        >
          przewodniku kulinarnym po Supraślu
        </Link>
        , a&nbsp;Maciej chętnie powie, gdzie sam chodzi na obiad.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Baza wypadowa: dom w&nbsp;lesie koło Supraśla
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods to drewniany dom dla maksymalnie 8&nbsp;osób w&nbsp;Konnem, wynajmowany
        w&nbsp;całości. Gotowy plan znajdziecie na stronie o{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          weekendzie w&nbsp;Supraślu
        </Link>
        , trasy na stronie o{' '}
        <Link
          to="/puszcza-knyszynska-nocleg"
          className="text-primary underline hover:text-primary/80"
        >
          noclegu w&nbsp;Puszczy Knyszyńskiej
        </Link>
        , a&nbsp;ceny i&nbsp;szczegóły na stronie o{' '}
        <Link to="/" className="text-primary underline hover:text-primary/80">
          noclegach w&nbsp;Supraślu
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Zanim ruszycie: godziny, bilety, zasady
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Godziny otwarcia muzeów i&nbsp;repertuar teatru zmieniają się w&nbsp;ciągu roku. Aktualne
        informacje znajdziecie na stronach poszczególnych instytucji. W&nbsp;rezerwatach trzymajcie
        się wyznaczonych ścieżek, a&nbsp;grzyby zbierajcie poza ich granicami.
      </p>

      <section aria-labelledby="attractions-faq">
        <h2 id="attractions-faq" className="section-title !text-2xl md:!text-3xl">
          Najczęstsze pytania
        </h2>
        <div className="space-y-5">
          {faqs.map(({ question, answer }) => (
            <div key={question}>
              <h3 className="font-heading text-xl text-foreground">{question}</h3>
              <p className="mt-1 text-muted-foreground leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  </SEOPageLayout>
);

export default AtrakcjeSuprasl;
