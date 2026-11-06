import type { ReactNode } from 'react';
import { Car, Footprints, MapPin } from 'lucide-react';
import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import { BlogFigure, BlogInlineCta } from '@/components/BlogArticleParts';
import { GARDEN_TUB_PRICE, MIN_NIGHTLY_RATE } from '@/lib/pricing';
import jacuzziNight from '@/assets/jacuzzi-night-md.webp';
import livingFireplace from '@/assets/living-fireplace.webp';

const SITE_URL = 'https://www.suprasl.online';
const SLUG = 'romantyczny-weekend-podlasie';
const IMG = '/images/blog';

const mapLinkClass =
  'inline-flex items-center gap-1.5 text-sm text-foreground underline decoration-primary underline-offset-2 hover:text-primary';

interface Place {
  id: string;
  name: string;
  /** Czas jazdy autem z domu w Konnem; 0 = na miejscu, bez dojazdu. */
  minutes: number;
  distance: string;
  /** true, gdy czas pochodzi z trasy Map Google; false, gdy jest szacunkiem. */
  verified: boolean;
  mapUrl?: string;
  locality: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  body: ReactNode;
}

const places: Place[] = [
  {
    id: 'monaster-suprasl',
    name: 'Monaster w\u00a0Supraślu o\u00a0zachodzie słońca',
    minutes: 13,
    distance: '8,8\u00a0km',
    verified: true,
    mapUrl: 'https://maps.app.goo.gl/PCdZaVoPY6jAjEM49',
    locality: 'Supraśl',
    image: `${IMG}/romantyczny-monaster-suprasl-zachod-slonca.webp`,
    width: 515,
    height: 595,
    alt: 'Zachód słońca nad rzeką Supraśl z\u00a0białymi wieżami monasteru w\u00a0tle',
    caption: 'Złota godzina nad rzeką, a\u00a0w\u00a0tle wieże monasteru.',
    body: (
      <>
        Ceglana cerkiew Zwiastowania z&nbsp;białymi wieżami łączy gotyk z&nbsp;Bizancjum. Wysadzona
        w&nbsp;1944 roku, dziś znów stoi na wzgórzu nad rzeką. Najpiękniej wygląda wieczorem, gdy
        słońce kładzie się na kopułach, a&nbsp;miasteczko powoli cichnie. Zajrzyjcie do Muzeum Ikon,
        gdzie zachowały się XVI-wieczne freski, a&nbsp;potem zejdźcie nad wodę. Na teren monasteru
        wchodzi się w&nbsp;stosownym stroju. Więcej o&nbsp;miasteczku przeczytacie w&nbsp;tekście{' '}
        <Link to="/blog/suprasl-atrakcje-uzdrowisko">Supraśl – atrakcje i&nbsp;uzdrowisko</Link>.
      </>
    ),
  },
  {
    id: 'bulwary-suprasl',
    name: 'Bulwary nad rzeką Supraśl',
    minutes: 13,
    distance: '8,9\u00a0km',
    verified: true,
    mapUrl: 'https://maps.app.goo.gl/WaZPNTrcXR4gB6JZ7',
    locality: 'Supraśl',
    image: `${IMG}/romantyczny-bulwary-suprasl.webp`,
    width: 1000,
    height: 668,
    alt: 'Bulwary nad rzeką Supraśl o\u00a0zachodzie słońca, odbicie nieba w\u00a0wodzie',
    caption: 'Bulwary Wiktora Wołkowa – ławka, rzeka i\u00a0nigdzie się nie spieszycie.',
    body: (
      <>
        Bulwary Wiktora Wołkowa ciągną się ponad kilometr wzdłuż rzeki: ławki, trawa, kładka
        i&nbsp;widok na monaster na wzgórzu. Rano z&nbsp;kawą na wynos, w&nbsp;letni wieczór
        z&nbsp;lodami w&nbsp;dłoni. Kto ma ochotę na więcej, bierze dwuosobowy kajak i&nbsp;płynie
        leniwie przez puszczę (o&nbsp;spływach piszemy w&nbsp;tekście{' '}
        <Link to="/blog/kajaki-suprasl">kajaki na rzece Supraśl</Link>).
      </>
    ),
  },
  {
    id: 'puszcza-knyszynska-kopna-gora',
    name: 'Puszcza Knyszyńska i\u00a0Kopna Góra — romantyczny zakątek Podlasia',
    minutes: 14,
    distance: '7,3\u00a0km',
    verified: true,
    mapUrl: 'https://maps.app.goo.gl/8xVgRhPjExV26aWE8',
    locality: 'Kopna Góra',
    image: `${IMG}/romantyczny-kopna-gora-puszcza-knyszynska.webp`,
    width: 400,
    height: 225,
    alt: 'Kopna Góra z\u00a0lotu ptaka – alejki, zieleń i\u00a0staw na skraju Puszczy Knyszyńskiej',
    caption: 'Kopna Góra – alejki, staw i\u00a0las dookoła.',
    body: (
      <>
        Puszcza Knyszyńska to idealne miejsce na spokojny wypad we dwoje. Ciche leśne ścieżki,
        zapach drzew i&nbsp;kojąca bliskość natury zachęcają do niespiesznych spacerów z&nbsp;dala
        od miejskiego zgiełku. Można tu po prostu iść przed siebie, rozmawiać albo cieszyć się
        chwilą ciszy.
        <br />
        <br />
        Szczególnym przystankiem jest Kopna Góra. Warto odwiedzić tamtejsze arboretum (około
        26&nbsp;hektarów drzew i&nbsp;krzewów z&nbsp;całego świata), gdzie zacienione alejki
        i&nbsp;różnorodne drzewa tworzą nastrojową scenerię o&nbsp;każdej porze roku: w&nbsp;maju
        kwitną różaneczniki, jesienią klony płoną czerwienią. Romantycznym akcentem może być też
        wspólne wejście na wieżę widokową i&nbsp;podziwianie leśnych panoram. To miejsca,
        w&nbsp;których prosty spacer łatwo zamienia się we wspomnienie. Trasy dla dwojga opisaliśmy
        w&nbsp;
        <Link to="/blog/puszcza-knyszynska-przewodnik">przewodniku po Puszczy Knyszyńskiej</Link>,
        a&nbsp;we wrześniu posłuchajcie{' '}
        <Link to="/blog/rykowisko-jeleni-puszcza-knyszynska">rykowiska jeleni</Link>.
      </>
    ),
  },
  {
    id: 'nocne-niebo',
    name: 'Nocny spacer po puszczy i\u00a0niebo pełne gwiazd',
    minutes: 0,
    distance: 'na miejscu',
    verified: true,
    locality: 'Konne',
    image: `${IMG}/romantyczny-nocne-niebo-puszcza.webp`,
    width: 1000,
    height: 667,
    alt: 'Rozgwieżdżone niebo nad samotnym drzewem w\u00a0Puszczy Knyszyńskiej',
    caption: 'Bez łuny miasta Droga Mleczna widać gołym okiem.',
    body: (
      <>
        Ta atrakcja czeka na Was na miejscu i&nbsp;jest <strong>wliczona w&nbsp;cenę pobytu</strong>
        . Po zmroku wyjdźcie leśną drogą kawałek od domu, zgaście latarki i&nbsp;poczekajcie, aż
        oczy oswoją się z&nbsp;ciemnością. Słychać puszczyki, czasem jelenia, a&nbsp;nad głową
        rozlewa się Droga Mleczna. Od połowy lipca niebo zamienia się w&nbsp;istną autostradę, po
        której suną mniejsze i&nbsp;większe „gwiazdki” – to Perseidy, które najgęściej spadają około
        12–13 sierpnia. Życzenia wypowiadajcie po cichu, bo w&nbsp;lesie wszystko słychać.
      </>
    ),
  },
  {
    id: 'gora-swietej-anny',
    name: 'Góra Świętej Anny i\u00a0Szlak Wzgórz Świętojańskich',
    minutes: 20,
    distance: 'ok. 15\u00a0km',
    verified: false,
    mapUrl: 'https://maps.app.goo.gl/MGXJsqL5RrE1Hert7',
    locality: 'Kołodno',
    image: `${IMG}/romantyczny-gora-swietej-anny.webp`,
    width: 1200,
    height: 801,
    alt: 'Kobieta na drewnianej wieży widokowej na Górze Świętej Anny patrzy na Puszczę Knyszyńską',
    caption: 'Z\u00a0wieży na Górze Świętej Anny puszcza wygląda jak zielone morze.',
    body: (
      <>
        Puszczę Knyszyńską wyrzeźbił lodowiec, więc są tu wzgórza i&nbsp;doliny jak w&nbsp;niskich
        górach. Szlak Wzgórz Świętojańskich ma 27&nbsp;km, ale nie musicie iść całego. Wybierzcie
        odcinek kończący się na Górze Świętej Anny przy wsi Kołodno, gdzie stoi wieża widokowa
        z&nbsp;panoramą puszczy i&nbsp;doliny Płoski. Dojedziecie przez Supraśl i&nbsp;Cieliczankę,
        a&nbsp;ostatni kawałek przejdziecie leśnym duktem. Przyjdźcie na zachód słońca, weźcie koc
        i&nbsp;termos.
      </>
    ),
  },
  {
    id: 'noc-kupaly',
    name: 'Noc Kupały nad rzeką Supraśl',
    minutes: 25,
    distance: 'ok. 22\u00a0km',
    verified: false,
    mapUrl: 'https://maps.app.goo.gl/pcj737XNxdoLM7iW7',
    locality: 'Załuki',
    image: `${IMG}/romantyczny-noc-kupaly.webp`,
    width: 500,
    height: 333,
    alt: 'Dziewczęta w\u00a0wiankach puszczają świece na wodę podczas Nocy Kupały',
    caption: 'Wianki i\u00a0świece na wodzie – najkrótsza noc roku.',
    body: (
      <>
        W&nbsp;okolicach najkrótszej nocy roku, z&nbsp;21 na 22&nbsp;czerwca, w&nbsp;Załukach nad
        rzeką Supraśl (gmina Gródek) odbywa się Kupalnoczka. To słowiańskie święto ognia, wody
        i&nbsp;miłości: koncerty, korowód z&nbsp;pochodniami i&nbsp;wianki puszczane na rzekę.
        Legenda mówi, że kto tej nocy znajdzie kwiat paproci, będzie miał szczęście w&nbsp;miłości.
        Szukanie we dwoje jest dozwolone. Dokładną datę sprawdźcie przed wyjazdem.
      </>
    ),
  },
  {
    id: 'golf-park-lipowy-most',
    name: 'Golf Park Lipowy Most – SPA, kolacja i\u00a0golf we dwoje',
    minutes: 35,
    distance: 'ok. 35\u00a0km',
    verified: false,
    mapUrl: 'https://maps.app.goo.gl/fqHFajweHYPAMRfo9',
    locality: 'Lipowy Most',
    image: `${IMG}/romantyczny-golf-park-lipowy-most.webp`,
    width: 664,
    height: 429,
    alt: 'Hotel Golf Park Lipowy Most odbijający się w\u00a0stawie wśród zieleni',
    caption: 'Golf Park Lipowy Most – elegancki przystanek na dzień we dwoje.',
    body: (
      <>
        Golf Park Lipowy Most to wyjątkowe miejsce na romantyczne chwile we dwoje. Relaksujące SPA,
        wyśmienita kuchnia i&nbsp;elegancki wystrój tworzą atmosferę sprzyjającą odpoczynkowi
        i&nbsp;celebrowaniu wspólnego czasu. Dodatkową atrakcją jest gra w&nbsp;golfa: malownicze
        otoczenie, odrobina zdrowej rywalizacji i&nbsp;piękne widoki sprawiają, że każda chwila
        nabiera wyjątkowego charakteru. Dobry pomysł na rocznicę – rano SPA, wieczorem powrót do
        kominka w&nbsp;lesie.
      </>
    ),
  },
  {
    id: 'palac-branickich',
    name: 'Pałac Branickich w\u00a0Białymstoku',
    minutes: 30,
    distance: '24,1\u00a0km',
    verified: true,
    mapUrl: 'https://maps.app.goo.gl/jufjryakEiQgpsZU9',
    locality: 'Białystok',
    image: `${IMG}/romantyczny-palac-branickich.webp`,
    width: 1200,
    height: 800,
    alt: 'Ogrody Pałacu Branickich w\u00a0Białymstoku – kwiaty, strzyżone krzewy i\u00a0balustrada',
    caption: 'Ogrody Wersalu Północy – spacer jest bezpłatny.',
    body: (
      <>
        Nazywany Wersalem Północy, z&nbsp;barokowymi ogrodami, po których spacer jest bezpłatny.
        Romantycznie robi się zwłaszcza po zmroku, gdy pałac jest podświetlony. Cały plan zwiedzania
        znajdziecie w&nbsp;tekście{' '}
        <Link to="/blog/bialystok-i-okolice-co-zobaczyc">
          co warto zobaczyć w&nbsp;Białymstoku i&nbsp;okolicach
        </Link>
        .
      </>
    ),
  },
  {
    id: 'tykocin',
    name: 'Tykocin nad Narwią',
    minutes: 51,
    distance: '53,2\u00a0km',
    verified: true,
    mapUrl: 'https://maps.app.goo.gl/FXWScdR9pvjX8fce7',
    locality: 'Tykocin',
    image: `${IMG}/romantyczny-tykocin-narew.webp`,
    width: 900,
    height: 600,
    alt: 'Odbudowany ceglany zamek w\u00a0Tykocinie z\u00a0brukowanym dziedzińcem',
    caption: 'Zamek w\u00a0Tykocinie – a\u00a0za nim zakola Narwi.',
    body: (
      <>
        Brukowany rynek, barokowy kościół, Wielka Synagoga i&nbsp;odbudowany zamek nad rzeką.
        Tykocin to idealny cel na sobotnie popołudnie albo przystanek w&nbsp;drodze do domu.
        Zostańcie na zachód słońca nad rozlewiskami Narwi.
      </>
    ),
  },
  {
    id: 'kruszyniany',
    name: 'Kruszyniany i\u00a0drewniany meczet',
    minutes: 41,
    distance: '37,9\u00a0km',
    verified: true,
    mapUrl: 'https://maps.app.goo.gl/cDamJceauoargynF6',
    locality: 'Kruszyniany',
    image: `${IMG}/romantyczny-kruszyniany-meczet.webp`,
    width: 1000,
    height: 525,
    alt: 'Zielony drewniany meczet w\u00a0Kruszynianach o\u00a0zachodzie słońca',
    caption: 'Zielony meczet w\u00a0Kruszynianach – jeden z\u00a0najstarszych w\u00a0Polsce.',
    body: (
      <>
        Tatarska wieś z&nbsp;zielonym meczetem i&nbsp;obiadem, o&nbsp;którym będziecie rozmawiać
        w&nbsp;drodze powrotnej. Pierekaczewnik na deser obowiązkowo. Szczegóły:{' '}
        <Link to="/blog/kruszyniany-tatarska-wies">Kruszyniany – tatarska wieś</Link>.
      </>
    ),
  },
  {
    id: 'folwark-zylicze',
    name: 'Folwark Żylicze – historia miłości z\u00a0awionetką w\u00a0tle',
    minutes: 40,
    distance: 'ok. 40\u00a0km',
    verified: false,
    mapUrl: 'https://maps.app.goo.gl/E4zG8GyxAYzHTLjeA',
    locality: 'Ciumicze',
    image: `${IMG}/romantyczny-folwark-zylicze.webp`,
    width: 506,
    height: 367,
    alt: 'Stary, bielony budynek folwarku Żylicze wśród drzew',
    caption: 'Folwark Żylicze – miejsce z\u00a0historią miłosną.',
    body: (
      <>
        W&nbsp;dolinie rzeki Nietupy, we wsi Ciumicze, do dawnego majątku rodu de Virion prowadzi
        aleja 200-letnich lip. Przed wojną folwark wydzierżawili Maria i&nbsp;Jacek Korytowscy,
        zakochani, których związku nie zaakceptowała rodzina. Przylecieli tu awionetką
        i&nbsp;wylądowali na łące obok dworu. Dziś folwark odnawiają nowi właściciele. Spacer pod
        lipami to dobra okazja, żeby opowiedzieć sobie własną historię. Łatwo połączyć go
        z&nbsp;Kruszynianami w&nbsp;jedną wycieczkę.
      </>
    ),
  },
  {
    id: 'kraina-otwartych-okiennic',
    name: 'Kraina Otwartych Okiennic',
    minutes: 55,
    distance: 'ok. 55\u00a0km',
    verified: false,
    mapUrl: 'https://maps.app.goo.gl/4G9KH3Mi9wErfNtH9',
    locality: 'Trześcianka',
    image: `${IMG}/romantyczny-kraina-otwartych-okiennic.webp`,
    width: 678,
    height: 452,
    alt: 'Drewniany dom z\u00a0zielonymi, rzeźbionymi okiennicami w\u00a0Krainie Otwartych Okiennic',
    caption: 'Rzeźbione okiennice w\u00a0Trześciance.',
    body: (
      <>
        Trześcianka, Soce i&nbsp;Puchły to wsie z&nbsp;kolorowymi, rzeźbionymi okiennicami, jakby
        czas się tu zatrzymał. Objedźcie je powoli, z&nbsp;postojami na zdjęcia i&nbsp;szacunkiem
        dla prywatności mieszkańców.{' '}
        <Link to="/blog/kraina-otwartych-okiennic">Trasę opisaliśmy tutaj</Link>.
      </>
    ),
  },
  {
    id: 'balia-pod-gwiazdami',
    name: 'Balia pod gwiazdami w\u00a0Konnem',
    minutes: 0,
    distance: 'na miejscu',
    verified: true,
    locality: 'Konne',
    image: jacuzziNight,
    width: 1024,
    height: 1363,
    alt: 'Balia z\u00a0hydromasażem nocą w\u00a0ogrodzie domu In The Woods',
    caption: 'Gorąca woda, chłodne powietrze i\u00a0niebo bez łuny miasta.',
    body: (
      <>
        Na koniec miejsce, którego nie znajdziecie w&nbsp;przewodnikach: Wasz własny ogród. Gorąca
        woda, chłodne powietrze, nad głową niebo bez łuny miasta. Jedyny tłum, jaki tu spotkacie, to
        komary w&nbsp;lipcu. Balię z&nbsp;hydromasażem zamawiacie przy rezerwacji (
        {GARDEN_TUB_PRICE}
        &nbsp;zł za cały pobyt), a&nbsp;my nagrzejemy ją na Wasz przyjazd.
      </>
    ),
  },
];

const tripPlaces = places.filter((p) => p.minutes > 0);
const averageMinutes = Math.round(
  tripPlaces.reduce((sum, p) => sum + p.minutes, 0) / tripPlaces.length,
);
const nearbyCount = tripPlaces.filter((p) => p.minutes <= 15).length;
const placesByTime = [...places].sort((a, b) => a.minutes - b.minutes);

const placeListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Romantyczne miejsca na Podlasiu w okolicy Supraśla',
  numberOfItems: places.length,
  itemListElement: places.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE_URL}/blog/${SLUG}#${p.id}`,
    item: {
      '@type': 'TouristAttraction',
      name: p.name.replace(/\u00a0/g, ' '),
      image: p.image.startsWith('/') ? `${SITE_URL}${p.image}` : undefined,
      address: {
        '@type': 'PostalAddress',
        addressLocality: p.locality,
        addressRegion: 'podlaskie',
        addressCountry: 'PL',
      },
      ...(p.mapUrl ? { hasMap: p.mapUrl } : {}),
    },
  })),
};

const TravelBadge = ({ place }: { place: Place }) => (
  <p className="not-prose mt-2 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-foreground">
    {place.minutes === 0 ? (
      <>
        <Footprints className="w-4 h-4" aria-hidden="true" /> Na miejscu, bez dojazdu
      </>
    ) : (
      <>
        <Car className="w-4 h-4" aria-hidden="true" /> {place.verified ? '' : 'ok.\u00a0'}
        {place.minutes}&nbsp;min autem · {place.distance} od domu
      </>
    )}
  </p>
);

const PlaceSection = ({ place, index }: { place: Place; index: number }) => (
  <section id={place.id} className="scroll-mt-24">
    <h3>
      {index + 1}. {place.name}
    </h3>
    <TravelBadge place={place} />
    <BlogFigure
      src={place.image}
      alt={place.alt}
      width={place.width}
      height={place.height}
      caption={place.caption}
      className={`mx-auto ${place.height > place.width ? 'max-w-sm' : 'max-w-2xl'}`}
    />
    <p>{place.body}</p>
    {place.mapUrl ? (
      <p className="not-prose">
        <a href={place.mapUrl} target="_blank" rel="noopener noreferrer" className={mapLinkClass}>
          <MapPin className="w-4 h-4" aria-hidden="true" /> Zobacz na mapie i&nbsp;wyznacz trasę
        </a>
      </p>
    ) : null}
  </section>
);

const faqs = [
  {
    question: 'Gdzie na romantyczny weekend na Podlasiu?',
    answer:
      'Najwięcej romantycznych miejsc na krótki wyjazd jest w\u00a0okolicach Supraśla: monaster o\u00a0zachodzie słońca, bulwary nad rzeką, Puszcza Knyszyńska z\u00a0arboretum w\u00a0Kopnej Górze, wieża widokowa na Górze Świętej Anny i\u00a0nocne niebo nad puszczą. Na jednodniowe wycieczki macie stamtąd Tykocin, Kruszyniany, Folwark Żylicze, Krainę Otwartych Okiennic i\u00a0Golf Park Lipowy Most ze SPA.',
  },
  {
    question: 'Ile jedzie się z\u00a0domu In The Woods do romantycznych miejsc w\u00a0okolicy?',
    answer: `Średnio około ${averageMinutes}\u00a0minut autem. Monaster i\u00a0bulwary w\u00a0Supraślu oraz Kopna Góra są 13–14\u00a0minut od domu, Pałac Branickich w\u00a0Białymstoku 30\u00a0minut, Kruszyniany 41\u00a0minut, a\u00a0Tykocin 51\u00a0minut. Nocny spacer pod gwiazdami i\u00a0balię macie na miejscu.`,
  },
  {
    question: 'Ile kosztuje romantyczny weekend na Podlasiu w\u00a0domku?',
    answer: `W\u00a0In The Woods nocleg kosztuje od ${MIN_NIGHTLY_RATE}\u00a0zł za noc za cały dom, niezależnie od tego, czy przyjeżdżacie we dwoje. Nocne spacery po puszczy i\u00a0obserwowanie gwiazd macie w\u00a0cenie pobytu, a\u00a0balia z\u00a0hydromasażem to ${GARDEN_TUB_PRICE}\u00a0zł za cały pobyt.`,
  },
  {
    question: 'Czy balię trzeba zamówić wcześniej?',
    answer: `Tak. Zaznaczcie ją przy rezerwacji, a\u00a0nagrzejemy ją na Wasz przyjazd. Kosztuje ${GARDEN_TUB_PRICE}\u00a0zł za cały pobyt.`,
  },
  {
    question: 'Kiedy najlepiej oglądać spadające gwiazdy na Podlasiu?',
    answer:
      'Od połowy lipca do końca sierpnia, gdy nad puszczą przelatują Perseidy. Najwięcej spadających gwiazd widać około 12–13\u00a0sierpnia, najlepiej w\u00a0bezksiężycową noc. W\u00a0In The Woods wystarczy wyjść kawałek leśną drogą od domu.',
  },
  {
    question: 'Jaki termin jest najlepszy na wyjazd we dwoje na Podlasie?',
    answer:
      'Wrzesień i\u00a0październik (rykowisko, kolorowy las, ciepła balia w\u00a0chłodny wieczór), sierpień z\u00a0Perseidami oraz luty z\u00a0okazji walentynek. Maj z\u00a0kwitnącym arboretum w\u00a0Kopnej Górze też wygrywa.',
  },
  {
    question: 'Czy to dobry pomysł na prezent na rocznicę albo zaręczyny?',
    answer:
      'Tak, i\u00a0chętnie pomożemy. Napiszcie przy rezerwacji, co planujecie, a\u00a0podpowiemy, kiedy nagrzać balię i\u00a0gdzie są najładniejsze miejsca na zachód słońca.',
  },
];

const RomantycznyWeekendPodlasie = () => (
  <BlogArticleLayout
    title="Romantyczne miejsca na Podlasiu – weekend we dwoje"
    metaTitle="Romantyczne miejsca na Podlasiu: 13 pomysłów na weekend we dwoje"
    metaDescription="13 romantycznych miejsc na Podlasiu ze zdjęciami i&nbsp;czasem dojazdu: monaster o&nbsp;zachodzie, Kopna Góra, gwiazdy nad puszczą, SPA. Plan weekendu i&nbsp;dom z&nbsp;balią."
    slug={SLUG}
    publishDate="2026-04-09"
    dateModified="2026-11-06"
    readTime="13&nbsp;min"
    ogImage={`${SITE_URL}${IMG}/romantyczny-monaster-suprasl-zachod-slonca.webp`}
    keywords={[
      'romantyczne miejsca na Podlasiu',
      'romantyczny weekend Podlasie',
      'weekend we dwoje Podlasie',
      'domek z\u00a0balią dla dwojga',
      'walentynki Podlasie',
      'Kopna Góra arboretum',
      'Perseidy Podlasie',
    ]}
    faqs={faqs}
    events={[placeListSchema]}
    relatedArticles={[
      { title: 'Gdzie zjeść w\u00a0Supraślu', slug: 'przewodnik-kulinarny-suprasl' },
      {
        title: 'Co zobaczyć w\u00a0Białymstoku i\u00a0okolicach',
        slug: 'bialystok-i-okolice-co-zobaczyc',
      },
      {
        title: 'Rykowisko jeleni w\u00a0Puszczy Knyszyńskiej',
        slug: 'rykowisko-jeleni-puszcza-knyszynska',
      },
    ]}
  >
    <p className="text-lg leading-relaxed">
      Wyobraźcie sobie weekend, w&nbsp;którym jedynym powiadomieniem jest trzask drewna
      w&nbsp;kominku. Podlasie to najmniej zaludniony region Polski: ciemne niebo, puste drogi
      i&nbsp;lasy, w&nbsp;których słychać własne myśli. Zebraliśmy{' '}
      <strong>13 romantycznych miejsc na Podlasiu</strong> ze zdjęciami i&nbsp;czasem dojazdu
      z&nbsp;naszego domu w&nbsp;Puszczy Knyszyńskiej, a&nbsp;do tego niespieszny plan weekendu we
      dwoje. Bez listy obowiązków – wybierzcie dwa, trzy miejsca, resztę zostawcie na następny raz.
    </p>

    <aside className="not-prose my-8 rounded-lg border border-border bg-secondary/40 p-6">
      <p className="font-heading text-xl font-light text-foreground mb-3">W&nbsp;skrócie</p>
      <ul className="space-y-2 text-foreground/80 leading-relaxed">
        <li>
          <strong>Średni czas dojazdu:</strong> ok.&nbsp;{averageMinutes}&nbsp;minut autem
          z&nbsp;domu In The Woods w&nbsp;Konnem.
        </li>
        <li>
          <strong>{nearbyCount} miejsca do 15&nbsp;minut</strong> – monaster, bulwary
          w&nbsp;Supraślu i&nbsp;Kopna Góra.
        </li>
        <li>
          <strong>2 atrakcje na miejscu:</strong> nocny spacer pod gwiazdami (w&nbsp;cenie pobytu)
          i&nbsp;balia z&nbsp;hydromasażem w&nbsp;ogrodzie.
        </li>
        <li>
          <strong>Najlepsze terminy:</strong> maj, sierpień (Perseidy), wrzesień–październik
          i&nbsp;walentynki.
        </li>
      </ul>
    </aside>

    <BlogFigure
      src="/images/blog/romantyczny-weekend-para-w-lesie.webp"
      alt="Przytulona para na leśnej drodze w&nbsp;Puszczy Knyszyńskiej"
      width={1600}
      height={1067}
      caption="Weekend we dwoje – cisza, las i&nbsp;czas tylko dla siebie."
    />

    <BlogInlineCta
      title="Cały dom w&nbsp;lesie tylko dla Was dwojga"
      text={`Kominek, balia pod gwiazdami i\u00a0puszcza za progiem, 10\u00a0minut od Supraśla. Nocleg od ${MIN_NIGHTLY_RATE}\u00a0zł za noc za cały dom.`}
    />

    <h2 id="czasy-dojazdu">Ile jedziecie: czasy dojazdu z&nbsp;domu</h2>
    <div className="not-prose mt-4 overflow-x-auto">
      <table className="w-full text-left text-sm md:text-base">
        <thead>
          <tr className="border-b border-border text-foreground">
            <th scope="col" className="py-2 pr-4 font-medium">
              Miejsce
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
          {placesByTime.map((p) => (
            <tr key={p.id} className="border-b border-border/60">
              <td className="py-2 pr-4">
                <a
                  href={`#${p.id}`}
                  className="text-foreground underline decoration-primary underline-offset-2 hover:text-primary"
                >
                  {p.name.split(/ [–—] /)[0]}
                </a>
              </td>
              <td className="py-2 pr-4 whitespace-nowrap">
                {p.minutes === 0 ? (
                  'na miejscu'
                ) : (
                  <>
                    {p.verified ? '' : 'ok.\u00a0'}
                    {p.minutes}&nbsp;min
                  </>
                )}
              </td>
              <td className="py-2 whitespace-nowrap">{p.distance}</td>
            </tr>
          ))}
          <tr className="text-foreground font-medium">
            <td className="py-2 pr-4">Średnio (bez atrakcji na miejscu)</td>
            <td className="py-2 pr-4 whitespace-nowrap">ok.&nbsp;{averageMinutes}&nbsp;min</td>
            <td className="py-2" />
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-muted-foreground">
      Najszybsze trasy samochodem liczone od domu In The Woods w&nbsp;Konnem, bez korków. Oznaczenie
      „ok.” to czas przybliżony – dokładną trasę wyznaczycie jednym kliknięciem pod opisem każdego
      miejsca.
    </p>

    <h2>13 romantycznych miejsc na Podlasiu</h2>

    {places.slice(0, 7).map((place, i) => (
      <PlaceSection key={place.id} place={place} index={i} />
    ))}

    <BlogInlineCta
      title="Rano spacer, wieczorem kominek"
      text="Po dniu w&nbsp;puszczy wracacie do własnego domu, nie do hotelowego pokoju. Sprawdźcie, czy Wasz termin jest wolny."
    />

    {places.slice(7).map((place, i) => (
      <PlaceSection key={place.id} place={place} index={i + 7} />
    ))}

    <BlogFigure
      src="/images/blog/romantyczny-weekend-kladka-nad-rozlewiskiem.webp"
      alt="Drewniana kładka nad podlaskim rozlewiskiem"
      width={1600}
      height={1200}
      caption="Drewniane kładki nad rozlewiskami to dobre miejsce na spacer we dwoje."
    />

    <h2>Plan romantycznego weekendu na Podlasiu</h2>
    <h3>Piątek: przyjazd i&nbsp;pierwszy wieczór</h3>
    <p>
      Przyjedźcie przed zmrokiem. Rozpalcie kominek, otwórzcie wino i&nbsp;po prostu nic nie róbcie.
      Jeśli zamówiliście balię, będzie już ciepła. Przed snem krótki spacer pod gwiazdami.
    </p>
    <h3>Sobota: Supraśl i&nbsp;puszcza</h3>
    <p>
      Kawa na tarasie, spacer po bulwarach i&nbsp;do monasteru, obiad z&nbsp;babką ziemniaczaną
      (gdzie najlepsza, piszemy w&nbsp;
      <Link to="/blog/przewodnik-kulinarny-suprasl">przewodniku kulinarnym po Supraślu</Link>), po
      południu arboretum w&nbsp;Kopnej Górze albo kajak. Na zachód słońca wieża na Górze Świętej
      Anny. Wieczorem kolacja przy świecach w&nbsp;domu albo w&nbsp;restauracji w&nbsp;miasteczku.
    </p>
    <h3>Niedziela: powoli</h3>
    <p>
      Bez budzika, śniadanie do południa, ostatni spacer po lesie. W&nbsp;drodze do domu możecie
      zahaczyć o&nbsp;Tykocin albo Pałac Branickich. A&nbsp;jeśli zostajecie dłużej – jeden dzień
      oddajcie Kruszynianom i&nbsp;Żyliczom, drugi SPA w&nbsp;Lipowym Moście.
    </p>

    <BlogFigure
      src="/images/blog/romantyczny-weekend-mglisty-wschod-slonca.webp"
      alt="Wschód słońca nad mglistą łąką z samotnym drzewem"
      width={1600}
      height={1000}
      caption="Poranna mgła i&nbsp;wschód słońca nad podlaskimi łąkami."
    />

    <img
      loading="lazy"
      decoding="async"
      sizes="(min-width: 768px) 768px, 100vw"
      src={livingFireplace}
      alt="Salon z&nbsp;kominkiem w&nbsp;domu In The Woods – wieczór we dwoje na Podlasiu"
      className="w-full rounded-lg my-8"
      width="1600"
      height="968"
    />

    <h2>Dlaczego dom w&nbsp;lesie, a&nbsp;nie hotel?</h2>
    <ul>
      <li>
        <strong>Cały dom tylko dla Was</strong> – bez recepcji, korytarzy i&nbsp;sąsiadów za ścianą.
      </li>
      <li>
        <strong>Kominek i&nbsp;balia z&nbsp;hydromasażem</strong> – ogień w&nbsp;salonie, gorąca
        woda w&nbsp;ogrodzie.
      </li>
      <li>
        <strong>Kuchnia kaflowa</strong> – kolacja we dwoje gotowana razem, bez karty dań.
      </li>
      <li>
        <strong>Gwiazdy w&nbsp;cenie</strong> – z&nbsp;dala od świateł miasta Drogę Mleczną widać
        gołym okiem, a&nbsp;nocny spacer po puszczy zaczyna się za furtką.
      </li>
      <li>
        <strong>10&nbsp;minut do Supraśla</strong> – restauracje i&nbsp;zabytki blisko, ale nie za
        oknem.
      </li>
    </ul>

    <h2>Zarezerwujcie weekend we dwoje</h2>
    <p>
      <Link to="/">In The Woods</Link> to drewniany dom na wyłączność w&nbsp;Konnem koło Supraśla.
      Szczegóły balii znajdziecie na stronie{' '}
      <Link to="/domek-z-jacuzzi-podlasie">domku z&nbsp;balią na Podlasiu</Link>, gotowy rozkład
      dnia w&nbsp;<Link to="/weekend-suprasl">planie weekendu w&nbsp;Supraślu</Link>, a&nbsp;więcej
      miejsc w&nbsp;okolicy na stronie{' '}
      <Link to="/atrakcje-suprasl">atrakcje Supraśla z&nbsp;czasem dojazdu</Link>. Weekendy
      walentynkowe, sierpniowe i&nbsp;wrześniowe znikają pierwsze.
    </p>

    <BlogInlineCta
      title="Zarezerwujcie swój weekend we dwoje"
      text="Sprawdźcie wolne terminy w&nbsp;kalendarzu albo zadzwońcie – podpowiemy, kiedy nagrzać balię i&nbsp;gdzie najpiękniej zachodzi słońce."
    />
  </BlogArticleLayout>
);

export default RomantycznyWeekendPodlasie;
