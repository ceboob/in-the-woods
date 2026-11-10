import type { ReactNode } from 'react';
import { Car, ExternalLink, Footprints, Lightbulb, MapPin, Star } from 'lucide-react';
import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import { BlogFigure, BlogInlineCta } from '@/components/BlogArticleParts';
import LeadMagnetChecklist from '@/components/LeadMagnetChecklist';
import { GARDEN_TUB_PRICE, MIN_NIGHTLY_RATE } from '@/lib/pricing';
import jacuzziNight from '@/assets/jacuzzi-night-md.webp';
import livingFireplace from '@/assets/living-fireplace.webp';

const SITE_URL = 'https://www.suprasl.online';
const SLUG = 'romantyczny-weekend-podlasie';
const IMG = '/images/blog';

const linkClass =
  'inline-flex items-center gap-1.5 text-sm text-foreground underline decoration-primary underline-offset-2 hover:text-primary';

interface Place {
  id: string;
  name: string;
  /** Krótka nazwa do tabeli i spisu treści. */
  shortName: string;
  /** Czas jazdy autem z domu w Konnem; 0 = na miejscu, bez dojazdu. */
  minutes: number;
  distance: string;
  /** true, gdy czas pochodzi z trasy Map Google; false, gdy jest szacunkiem. */
  verified: boolean;
  mapUrl?: string;
  /** Zewnętrzne, wiarygodne źródło o miejscu. */
  source?: { label: string; url: string };
  locality: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  body: ReactNode;
  tip?: ReactNode;
}

const places: Place[] = [
  {
    id: 'monaster-suprasl',
    name: 'Monaster w\u00a0Supraślu o\u00a0zachodzie słońca',
    shortName: 'Monaster w\u00a0Supraślu',
    minutes: 13,
    distance: '8,8\u00a0km',
    verified: true,
    mapUrl: 'https://maps.app.goo.gl/PCdZaVoPY6jAjEM49',
    source: {
      label: 'Monaster Zwiastowania w\u00a0Supraślu – Wikipedia',
      url: 'https://pl.wikipedia.org/wiki/Monaster_Zwiastowania_Przenajświętszej_Bogurodzicy_w_Supraślu',
    },
    locality: 'Supraśl',
    image: `${IMG}/romantyczny-monaster-suprasl-zachod-slonca.webp`,
    width: 515,
    height: 595,
    alt: 'Romantyczny zachód słońca nad rzeką Supraśl z\u00a0białymi wieżami monasteru w\u00a0tle',
    caption: 'Złota godzina nad rzeką, a\u00a0w\u00a0tle wieże monasteru.',
    body: (
      <>
        <p>
          Ceglana cerkiew Zwiastowania z&nbsp;białymi wieżami łączy gotyk z&nbsp;Bizancjum.
          Wysadzona w&nbsp;1944 roku, dziś znów stoi na wzgórzu nad rzeką.{' '}
          <strong>Najpiękniej wygląda wieczorem</strong>, gdy słońce kładzie się na kopułach,
          a&nbsp;miasteczko powoli cichnie.
        </p>
        <p>
          Zajrzyjcie do Muzeum Ikon z&nbsp;ocalałymi XVI-wiecznymi freskami, a&nbsp;potem zejdźcie
          nad wodę. Więcej o&nbsp;miasteczku:{' '}
          <Link to="/blog/suprasl-atrakcje-uzdrowisko">Supraśl – atrakcje i&nbsp;uzdrowisko</Link>.
        </p>
      </>
    ),
    tip: 'Na teren monasteru wchodzi się w\u00a0stroju zakrywającym ramiona i\u00a0kolana. W\u00a0poniedziałki teren monasteru jest zamknięty.',
  },
  {
    id: 'bulwary-suprasl',
    name: 'Bulwary nad rzeką Supraśl',
    shortName: 'Bulwary nad rzeką Supraśl',
    minutes: 13,
    distance: '8,9\u00a0km',
    verified: true,
    mapUrl: 'https://maps.app.goo.gl/WaZPNTrcXR4gB6JZ7',
    locality: 'Supraśl',
    image: `${IMG}/romantyczny-bulwary-suprasl.webp`,
    width: 1000,
    height: 668,
    alt: 'Bulwary nad rzeką Supraśl o\u00a0zachodzie słońca – spacer we dwoje w\u00a0Supraślu',
    caption: 'Bulwary Wiktora Wołkowa – ławka, rzeka i\u00a0nigdzie się nie spieszycie.',
    body: (
      <>
        <p>
          Bulwary Wiktora Wołkowa ciągną się <strong>ponad kilometr wzdłuż rzeki</strong>: ławki,
          trawa, kładka i&nbsp;widok na monaster na wzgórzu. Rano z&nbsp;kawą na wynos, w&nbsp;letni
          wieczór z&nbsp;lodami w&nbsp;dłoni.
        </p>
        <p>
          Kto ma ochotę na więcej, bierze dwuosobowy kajak i&nbsp;płynie leniwie przez puszczę.
          Trasy spływów opisaliśmy w&nbsp;tekście{' '}
          <Link to="/blog/kajaki-suprasl">kajaki na rzece Supraśl</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'puszcza-knyszynska-kopna-gora',
    name: 'Puszcza Knyszyńska i\u00a0Kopna Góra — romantyczny zakątek Podlasia',
    shortName: 'Puszcza Knyszyńska i\u00a0Kopna Góra',
    minutes: 14,
    distance: '7,3\u00a0km',
    verified: true,
    mapUrl: 'https://maps.app.goo.gl/8xVgRhPjExV26aWE8',
    source: {
      label: 'Park Krajobrazowy Puszczy Knyszyńskiej – Wikipedia',
      url: 'https://pl.wikipedia.org/wiki/Park_Krajobrazowy_Puszczy_Knyszyńskiej',
    },
    locality: 'Kopna Góra',
    image: `${IMG}/romantyczny-kopna-gora-puszcza-knyszynska.webp`,
    width: 400,
    height: 225,
    alt: 'Kopna Góra z\u00a0lotu ptaka – alejki, zieleń i\u00a0staw w\u00a0Puszczy Knyszyńskiej',
    caption: 'Kopna Góra – alejki, staw i\u00a0las dookoła.',
    body: (
      <>
        <p>
          Puszcza Knyszyńska to idealne miejsce na spokojny wypad we dwoje.{' '}
          <strong>Ciche leśne ścieżki, zapach drzew i&nbsp;kojąca bliskość natury</strong> zachęcają
          do niespiesznych spacerów z&nbsp;dala od miejskiego zgiełku. Można tu po prostu iść przed
          siebie, rozmawiać albo cieszyć się chwilą ciszy.
        </p>
        <p>
          Szczególnym przystankiem jest Kopna Góra. Warto odwiedzić tamtejsze arboretum, około
          26&nbsp;hektarów drzew i&nbsp;krzewów z&nbsp;całego świata. Zacienione alejki tworzą
          nastrojową scenerię o&nbsp;każdej porze roku: w&nbsp;maju kwitną różaneczniki, jesienią
          klony płoną czerwienią.
        </p>
        <p>
          Romantycznym akcentem może być też <strong>wspólne wejście na wieżę widokową</strong>{' '}
          i&nbsp;podziwianie leśnych panoram. To miejsca, w&nbsp;których prosty spacer łatwo
          zamienia się we wspomnienie. Trasy dla dwojga znajdziecie w&nbsp;
          <Link to="/blog/puszcza-knyszynska-przewodnik">przewodniku po Puszczy Knyszyńskiej</Link>.
        </p>
      </>
    ),
    tip: (
      <>
        We wrześniu przyjedźcie o&nbsp;zmierzchu i&nbsp;posłuchajcie{' '}
        <Link to="/blog/rykowisko-jeleni-puszcza-knyszynska">rykowiska jeleni</Link>. Weźcie ciepłą
        herbatę w&nbsp;termosie.
      </>
    ),
  },
  {
    id: 'nocne-niebo',
    name: 'Nocny spacer po puszczy i\u00a0niebo pełne gwiazd',
    shortName: 'Nocny spacer i\u00a0gwiazdy',
    minutes: 0,
    distance: 'na miejscu',
    verified: true,
    source: { label: 'Perseidy – Wikipedia', url: 'https://pl.wikipedia.org/wiki/Perseidy' },
    locality: 'Konne',
    image: `${IMG}/romantyczny-nocne-niebo-puszcza.webp`,
    width: 1000,
    height: 667,
    alt: 'Rozgwieżdżone niebo nad samotnym drzewem w\u00a0Puszczy Knyszyńskiej – nocny spacer we dwoje',
    caption: 'Bez łuny miasta Drogę Mleczną widać gołym okiem.',
    body: (
      <>
        <p>
          Ta atrakcja czeka na Was na miejscu i&nbsp;jest{' '}
          <strong>wliczona w&nbsp;cenę pobytu</strong>. Po zmroku wyjdźcie leśną drogą kawałek od
          domu, zgaście latarki i&nbsp;poczekajcie, aż oczy oswoją się z&nbsp;ciemnością. Słychać
          puszczyki, czasem jelenia, a&nbsp;nad głową rozlewa się Droga Mleczna.
        </p>
        <p>
          <strong>Od połowy lipca niebo zamienia się w&nbsp;istną autostradę</strong>, po której
          suną mniejsze i&nbsp;większe „gwiazdki”. To Perseidy, które najgęściej spadają około 12–13
          sierpnia. Życzenia wypowiadajcie po cichu, bo w&nbsp;lesie wszystko słychać.
        </p>
      </>
    ),
    tip: 'Najwięcej gwiazd zobaczycie w\u00a0bezksiężycową noc. Weźcie koc i\u00a0latarkę z\u00a0czerwonym światłem – nie oślepia.',
  },
  {
    id: 'gora-swietej-anny',
    name: 'Góra Świętej Anny i\u00a0Szlak Wzgórz Świętojańskich',
    shortName: 'Góra Świętej Anny',
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
        <p>
          Puszczę Knyszyńską wyrzeźbił lodowiec, więc są tu wzgórza i&nbsp;doliny jak w&nbsp;niskich
          górach. Szlak Wzgórz Świętojańskich ma 27&nbsp;km, ale nie musicie iść całego.
        </p>
        <p>
          Wybierzcie odcinek kończący się na Górze Świętej Anny przy wsi Kołodno.{' '}
          <strong>Stoi tu wieża widokowa z&nbsp;panoramą puszczy</strong> i&nbsp;doliny Płoski.
          Dojedziecie przez Supraśl i&nbsp;Cieliczankę, a&nbsp;ostatni kawałek przejdziecie leśnym
          duktem.
        </p>
      </>
    ),
    tip: 'Przyjdźcie na zachód słońca, z\u00a0kocem i\u00a0termosem. Wracajcie z\u00a0latarką.',
  },
  {
    id: 'noc-kupaly',
    name: 'Noc Kupały nad rzeką Supraśl',
    shortName: 'Noc Kupały w\u00a0Załukach',
    minutes: 25,
    distance: 'ok. 22\u00a0km',
    verified: false,
    mapUrl: 'https://maps.app.goo.gl/pcj737XNxdoLM7iW7',
    source: { label: 'Noc Kupały – Wikipedia', url: 'https://pl.wikipedia.org/wiki/Noc_Kupały' },
    locality: 'Załuki',
    image: `${IMG}/romantyczny-noc-kupaly.webp`,
    width: 500,
    height: 333,
    alt: 'Dziewczęta w\u00a0wiankach puszczają świece na wodę podczas Nocy Kupały na Podlasiu',
    caption: 'Wianki i\u00a0świece na wodzie – najkrótsza noc roku.',
    body: (
      <>
        <p>
          W&nbsp;okolicach najkrótszej nocy roku, z&nbsp;21 na 22&nbsp;czerwca, w&nbsp;Załukach nad
          rzeką Supraśl (gmina Gródek) odbywa się Kupalnoczka.{' '}
          <strong>To słowiańskie święto ognia, wody i&nbsp;miłości</strong>: koncerty, korowód
          z&nbsp;pochodniami i&nbsp;wianki puszczane na rzekę.
        </p>
        <p>
          Legenda mówi, że kto tej nocy znajdzie kwiat paproci, będzie miał szczęście
          w&nbsp;miłości. Szukanie we dwoje jest dozwolone.
        </p>
      </>
    ),
    tip: 'Dokładną datę wydarzenia sprawdźcie przed wyjazdem. Czerwcowe weekendy rezerwujcie wcześniej.',
  },
  {
    id: 'golf-park-lipowy-most',
    name: 'Golf Park Lipowy Most – SPA, kolacja i\u00a0golf we dwoje',
    shortName: 'Golf Park Lipowy Most',
    minutes: 35,
    distance: 'ok. 35\u00a0km',
    verified: false,
    mapUrl: 'https://maps.app.goo.gl/fqHFajweHYPAMRfo9',
    locality: 'Lipowy Most',
    image: `${IMG}/romantyczny-golf-park-lipowy-most.webp`,
    width: 664,
    height: 429,
    alt: 'Hotel Golf Park Lipowy Most odbijający się w\u00a0stawie – SPA dla par na Podlasiu',
    caption: 'Golf Park Lipowy Most – elegancki przystanek na dzień we dwoje.',
    body: (
      <>
        <p>
          Golf Park Lipowy Most to wyjątkowe miejsce na romantyczne chwile we dwoje.{' '}
          <strong>Relaksujące SPA, wyśmienita kuchnia i&nbsp;elegancki wystrój</strong> tworzą
          atmosferę sprzyjającą odpoczynkowi i&nbsp;celebrowaniu wspólnego czasu.
        </p>
        <p>
          Dodatkową atrakcją jest gra w&nbsp;golfa: malownicze otoczenie, odrobina zdrowej
          rywalizacji i&nbsp;piękne widoki sprawiają, że każda chwila nabiera wyjątkowego
          charakteru.
        </p>
      </>
    ),
    tip: 'Pomysł na rocznicę: rano SPA, wieczorem powrót do kominka w\u00a0lesie. Zabiegi rezerwujcie z\u00a0wyprzedzeniem.',
  },
  {
    id: 'palac-branickich',
    name: 'Pałac Branickich w\u00a0Białymstoku',
    shortName: 'Pałac Branickich',
    minutes: 30,
    distance: '24,1\u00a0km',
    verified: true,
    mapUrl: 'https://maps.app.goo.gl/jufjryakEiQgpsZU9',
    source: {
      label: 'Pałac Branickich w\u00a0Białymstoku – Wikipedia',
      url: 'https://pl.wikipedia.org/wiki/Pałac_Branickich_w_Białymstoku',
    },
    locality: 'Białystok',
    image: `${IMG}/romantyczny-palac-branickich.webp`,
    width: 1200,
    height: 800,
    alt: 'Ogrody Pałacu Branickich w\u00a0Białymstoku – kwiaty, strzyżone krzewy i\u00a0balustrada',
    caption: 'Ogrody Wersalu Północy – spacer jest bezpłatny.',
    body: (
      <>
        <p>
          Nazywany Wersalem Północy, z&nbsp;barokowymi ogrodami,{' '}
          <strong>po których spacer jest bezpłatny</strong>. Romantycznie robi się zwłaszcza po
          zmroku, gdy pałac jest podświetlony.
        </p>
        <p>
          Cały plan zwiedzania znajdziecie w&nbsp;tekście{' '}
          <Link to="/blog/bialystok-i-okolice-co-zobaczyc">
            co warto zobaczyć w&nbsp;Białymstoku i&nbsp;okolicach
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: 'tykocin',
    name: 'Tykocin nad Narwią',
    shortName: 'Tykocin nad Narwią',
    minutes: 51,
    distance: '53,2\u00a0km',
    verified: true,
    mapUrl: 'https://maps.app.goo.gl/FXWScdR9pvjX8fce7',
    source: { label: 'Tykocin – Wikipedia', url: 'https://pl.wikipedia.org/wiki/Tykocin' },
    locality: 'Tykocin',
    image: `${IMG}/romantyczny-tykocin-narew.webp`,
    width: 900,
    height: 600,
    alt: 'Odbudowany ceglany zamek w\u00a0Tykocinie nad Narwią z\u00a0brukowanym dziedzińcem',
    caption: 'Zamek w\u00a0Tykocinie – a\u00a0za nim zakola Narwi.',
    body: (
      <p>
        Brukowany rynek, barokowy kościół, Wielka Synagoga i&nbsp;odbudowany zamek nad rzeką.{' '}
        <strong>Idealny cel na sobotnie popołudnie</strong> albo przystanek w&nbsp;drodze do domu.
        Zostańcie na zachód słońca nad rozlewiskami Narwi.
      </p>
    ),
  },
  {
    id: 'kruszyniany',
    name: 'Kruszyniany i\u00a0drewniany meczet',
    shortName: 'Kruszyniany',
    minutes: 41,
    distance: '37,9\u00a0km',
    verified: true,
    mapUrl: 'https://maps.app.goo.gl/cDamJceauoargynF6',
    source: {
      label: 'Meczet w\u00a0Kruszynianach – Wikipedia',
      url: 'https://pl.wikipedia.org/wiki/Meczet_w_Kruszynianach',
    },
    locality: 'Kruszyniany',
    image: `${IMG}/romantyczny-kruszyniany-meczet.webp`,
    width: 1000,
    height: 525,
    alt: 'Zielony drewniany meczet w\u00a0Kruszynianach o\u00a0zachodzie słońca',
    caption: 'Zielony meczet w\u00a0Kruszynianach – jeden z\u00a0najstarszych w\u00a0Polsce.',
    body: (
      <p>
        Tatarska wieś z&nbsp;zielonym meczetem i&nbsp;obiadem, o&nbsp;którym będziecie rozmawiać
        w&nbsp;drodze powrotnej. <strong>Pierekaczewnik na deser obowiązkowo.</strong> Szczegóły:{' '}
        <Link to="/blog/kruszyniany-tatarska-wies">Kruszyniany – tatarska wieś</Link>.
      </p>
    ),
  },
  {
    id: 'folwark-zylicze',
    name: 'Folwark Żylicze – historia miłości z\u00a0awionetką w\u00a0tle',
    shortName: 'Folwark Żylicze',
    minutes: 40,
    distance: 'ok. 40\u00a0km',
    verified: false,
    mapUrl: 'https://maps.app.goo.gl/E4zG8GyxAYzHTLjeA',
    locality: 'Ciumicze',
    image: `${IMG}/romantyczny-folwark-zylicze.webp`,
    width: 506,
    height: 367,
    alt: 'Stary, bielony dwór Folwarku Żylicze wśród drzew na Podlasiu',
    caption: 'Folwark Żylicze – miejsce z\u00a0historią miłosną.',
    body: (
      <>
        <p>
          W&nbsp;dolinie rzeki Nietupy, we wsi Ciumicze, do dawnego majątku rodu de Virion prowadzi{' '}
          <strong>aleja 200-letnich lip</strong>. Przed wojną folwark wydzierżawili Maria
          i&nbsp;Jacek Korytowscy, zakochani, których związku nie zaakceptowała rodzina.
        </p>
        <p>
          Przylecieli tu awionetką i&nbsp;wylądowali na łące obok dworu. Dziś folwark odnawiają nowi
          właściciele. Spacer pod lipami to dobra okazja, żeby opowiedzieć sobie własną historię.
        </p>
      </>
    ),
    tip: 'Połączcie Żylicze z\u00a0Kruszynianami w\u00a0jedną niespieszną wycieczkę.',
  },
  {
    id: 'kraina-otwartych-okiennic',
    name: 'Kraina Otwartych Okiennic',
    shortName: 'Kraina Otwartych Okiennic',
    minutes: 55,
    distance: 'ok. 55\u00a0km',
    verified: false,
    mapUrl: 'https://maps.app.goo.gl/4G9KH3Mi9wErfNtH9',
    locality: 'Trześcianka',
    image: `${IMG}/romantyczny-kraina-otwartych-okiennic.webp`,
    width: 678,
    height: 452,
    alt: 'Drewniany dom z\u00a0zielonymi, rzeźbionymi okiennicami w\u00a0Krainie Otwartych Okiennic na Podlasiu',
    caption: 'Rzeźbione okiennice w\u00a0Trześciance.',
    body: (
      <p>
        Trześcianka, Soce i&nbsp;Puchły to wsie z&nbsp;kolorowymi, rzeźbionymi okiennicami,{' '}
        <strong>jakby czas się tu zatrzymał</strong>. Objedźcie je powoli, z&nbsp;postojami na
        zdjęcia i&nbsp;szacunkiem dla prywatności mieszkańców.{' '}
        <Link to="/blog/kraina-otwartych-okiennic">Trasę opisaliśmy tutaj</Link>.
      </p>
    ),
  },
  {
    id: 'balia-pod-gwiazdami',
    name: 'Balia pod gwiazdami w\u00a0Konnem',
    shortName: 'Balia pod gwiazdami',
    minutes: 0,
    distance: 'na miejscu',
    verified: true,
    locality: 'Konne',
    image: jacuzziNight,
    width: 1024,
    height: 1363,
    alt: 'Balia z\u00a0hydromasażem nocą w\u00a0ogrodzie domu In The Woods – romantyczny wieczór na Podlasiu',
    caption: 'Gorąca woda, chłodne powietrze i\u00a0niebo bez łuny miasta.',
    body: (
      <>
        <p>
          Na koniec miejsce, którego nie znajdziecie w&nbsp;przewodnikach:{' '}
          <strong>Wasz własny ogród</strong>. Gorąca woda, chłodne powietrze, nad głową niebo bez
          łuny miasta. Jedyny tłum, jaki tu spotkacie, to komary w&nbsp;lipcu.
        </p>
        <p>
          Balię z&nbsp;hydromasażem zamawiacie przy rezerwacji ({GARDEN_TUB_PRICE}&nbsp;zł za cały
          pobyt), a&nbsp;my nagrzejemy ją na Wasz przyjazd.
        </p>
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
      ...(p.source ? { sameAs: p.source.url } : {}),
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
    {place.body}
    {place.tip ? (
      <aside className="not-prose my-4 flex gap-3 rounded-lg border-l-4 border-primary bg-secondary/50 px-4 py-3 text-sm text-foreground/85 leading-relaxed">
        <Lightbulb className="w-5 h-5 shrink-0 text-primary" aria-hidden="true" />
        <span>
          <strong className="text-foreground">Wskazówka dla dwojga:</strong> {place.tip}
        </span>
      </aside>
    ) : null}
    <p className="not-prose flex flex-wrap gap-x-5 gap-y-2">
      {place.mapUrl ? (
        <a href={place.mapUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <MapPin className="w-4 h-4" aria-hidden="true" /> Mapa i&nbsp;trasa
        </a>
      ) : null}
      {place.source ? (
        <a href={place.source.url} target="_blank" rel="noopener" className={linkClass}>
          <ExternalLink className="w-4 h-4" aria-hidden="true" /> {place.source.label}
        </a>
      ) : null}
    </p>
  </section>
);

/**
 * Prawdziwe opinie gości z Booking.com (ocena ogólna 10/10). Fragmenty oznaczone (…);
 * tłumaczenia pochodzą z Booking.com.
 */
const guestReviews: {
  id: string;
  author?: string;
  date: string;
  title?: string;
  text: string;
  translatedFrom?: string;
}[] = [
  {
    id: 'iryna-2026-01',
    author: 'Iryna',
    date: 'styczeń 2026',
    title: 'Wszystko było super, po prostu bajka.',
    text: 'Naprawdę nam się tam podobało. Przyjechaliśmy tam na Sylwestra 🎄 i okazało się, że to bajka. Nie było ludzi, było cicho, były wysokie drzewa, dużo śniegu, kadź [balia], po prostu bajka. 😍 (…)',
    translatedFrom: 'rosyjskiego',
  },
  {
    id: 'darek-2026-04',
    author: 'Darek',
    date: 'kwiecień 2026',
    title: 'Dom z duszą i fantastyczna lokalizacja! Cisza „zakłócona” jedynie śpiewem ptaków!',
    text: 'Lokalizacja była fantastyczna. Dom znajdował się w środku lasu. (…) Można było usiąść na werandzie lub w jacuzzi, zupełnie bez przeszkód, i po prostu cieszyć się kakofonią śpiewu ptaków lub rozgwieżdżonego nieba… Atmosfera pełna przygód! Gospodarz był bardzo pomocny i bardzo miły! (…)',
    translatedFrom: 'norweskiego',
  },
  {
    id: 'natalia-2025-10',
    author: 'Natalia',
    date: 'październik 2025',
    title: 'Cudowne miejsce na odpoczynek ❤️',
    text: 'Cudowna lokalizacja i okolica domku, po zjechaniu z głównej drogi dojazdowej, 6 km jedzie się przez las. Idealne miejsce na odpoczynek, spacery po lesie, słuchanie ptaków, a nocą jeleni i łosi – każdej nocy było słychać „buczenie” dochodzące z lasu 🦌 🫎 Piękne gwiaździste niebo w bezchmurne noce 🌌 Właściciel bardzo pomocny, przygotował dodatkowo drewno na ogniska. (…)',
  },
  {
    id: 'gosc-2025-04',
    date: 'kwiecień 2025',
    text: 'Piękny dom utrzymany w wiejskim klimatem zlokalizowany pośrodku lasu! Cisza, spokój, śpiew ptaków. Świetna opcja na zrelaksowanie się i odpoczynek od dużego miasta. Kominek, balia, duży ogródek. W domku wszystko, co potrzebne. Bardzo dobry kontakt z właścicielem. Marzymy o szybkim powrocie!',
  },
];

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

const ctaText = `Kominek, balia pod gwiazdami i\u00a0puszcza za furtką, 10\u00a0minut od Supraśla. Cały dom tylko dla Was, od ${MIN_NIGHTLY_RATE}\u00a0zł za noc.`;

const RomantycznyWeekendPodlasie = () => (
  <BlogArticleLayout
    title="Romantyczne miejsca na Podlasiu – weekend we dwoje"
    metaTitle="Romantyczne miejsca na Podlasiu: 13 pomysłów na weekend we dwoje"
    metaDescription="13 romantycznych miejsc na Podlasiu ze zdjęciami i&nbsp;czasem dojazdu: monaster o&nbsp;zachodzie, Kopna Góra, gwiazdy nad puszczą, SPA. Plan weekendu i&nbsp;checklista PDF."
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
      w&nbsp;kominku. <strong>Romantyczny weekend na Podlasiu</strong> to ciemne niebo, puste drogi
      i&nbsp;lasy, w&nbsp;których słychać własne myśli.
    </p>
    <p>
      Zebraliśmy <strong>13 romantycznych miejsc na Podlasiu</strong> ze zdjęciami i&nbsp;czasem
      dojazdu z&nbsp;naszego domu w&nbsp;Puszczy Knyszyńskiej, a&nbsp;do tego niespieszny plan
      weekendu we dwoje. Bez listy obowiązków: wybierzcie dwa, trzy miejsca, resztę zostawcie na
      następny raz.
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
          <strong>Opinie gości na Booking.com:</strong> 10/10 – „Cisza, spokój, śpiew ptaków”
          i&nbsp;„piękne gwiaździste niebo”.{' '}
          <a href="#opinie-gosci" className="underline decoration-primary underline-offset-2">
            Przeczytajcie opinie
          </a>
        </li>
        <li>
          <strong>Najlepsze terminy:</strong> maj, sierpień (Perseidy), wrzesień–październik
          i&nbsp;walentynki.
        </li>
      </ul>
    </aside>

    <nav aria-labelledby="spis-tresci" className="not-prose my-8">
      <p id="spis-tresci" className="font-heading text-lg text-foreground mb-2">
        Spis treści
      </p>
      <ol className="list-decimal pl-5 space-y-1 text-sm text-foreground/80">
        <li>
          <a href="#czasy-dojazdu" className="underline decoration-primary underline-offset-2">
            Czasy dojazdu z&nbsp;domu
          </a>
        </li>
        <li>
          <a
            href="#romantyczne-miejsca"
            className="underline decoration-primary underline-offset-2"
          >
            13 romantycznych miejsc na Podlasiu
          </a>
        </li>
        <li>
          <a href="#plan-weekendu" className="underline decoration-primary underline-offset-2">
            Plan romantycznego weekendu
          </a>
        </li>
        <li>
          <a href="#dlaczego-dom" className="underline decoration-primary underline-offset-2">
            Dlaczego dom w&nbsp;lesie, a&nbsp;nie hotel
          </a>
        </li>
        <li>
          <a href="#opinie-gosci" className="underline decoration-primary underline-offset-2">
            Co mówią goście
          </a>
        </li>
      </ol>
    </nav>

    <BlogFigure
      src="/images/blog/romantyczny-weekend-para-w-lesie.webp"
      alt="Przytulona para na leśnej drodze – romantyczny weekend w&nbsp;Puszczy Knyszyńskiej"
      width={1600}
      height={1067}
      caption="Weekend we dwoje – cisza, las i&nbsp;czas tylko dla siebie."
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
                  {p.shortName}
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
      „ok.” to czas przybliżony. Dokładną trasę wyznaczycie jednym kliknięciem pod opisem każdego
      miejsca.
    </p>

    <h2 id="romantyczne-miejsca">13 romantycznych miejsc na Podlasiu</h2>

    {places.slice(0, 7).map((place, i) => (
      <PlaceSection key={place.id} place={place} index={i} />
    ))}

    <BlogInlineCta
      title="Rano spacer, wieczorem kominek – w&nbsp;Waszym własnym domu"
      text={ctaText}
    />

    {places.slice(7).map((place, i) => (
      <PlaceSection key={place.id} place={place} index={i + 7} />
    ))}

    <LeadMagnetChecklist
      source="checklista-romantyczny-weekend"
      title="Darmowa checklista: romantyczny weekend na Podlasiu"
      text="Jedna strona do wydruku: co zarezerwować przed wyjazdem, co spakować na wieczór pod gwiazdami, gotowy plan weekendu i&nbsp;czasy dojazdu do wszystkich 13 miejsc. Zostawcie e-mail, a&nbsp;plik pobierzecie od razu."
      fileUrl="/downloads/checklista-romantyczny-weekend-podlasie.pdf"
      fileName="checklista-romantyczny-weekend-podlasie.pdf"
    />

    <h2 id="plan-weekendu">Plan romantycznego weekendu na Podlasiu</h2>
    <h3>Piątek: przyjazd i&nbsp;pierwszy wieczór</h3>
    <ul>
      <li>
        <strong>Przyjedźcie przed zmrokiem</strong>, rozpalcie kominek i&nbsp;otwórzcie wino.
      </li>
      <li>Jeśli zamówiliście balię, będzie już ciepła.</li>
      <li>Przed snem krótki spacer pod gwiazdami.</li>
    </ul>
    <h3>Sobota: Supraśl i&nbsp;puszcza</h3>
    <ul>
      <li>Kawa na tarasie, potem bulwary i&nbsp;monaster.</li>
      <li>
        Obiad z&nbsp;babką ziemniaczaną – gdzie najlepsza, piszemy w&nbsp;
        <Link to="/blog/przewodnik-kulinarny-suprasl">przewodniku kulinarnym po Supraślu</Link>.
      </li>
      <li>Po południu arboretum w&nbsp;Kopnej Górze albo kajak.</li>
      <li>
        <strong>Na zachód słońca wieża na Górze Świętej Anny</strong>, wieczorem kolacja przy
        świecach.
      </li>
    </ul>
    <h3>Niedziela: powoli</h3>
    <ul>
      <li>Bez budzika, śniadanie do południa, ostatni spacer po lesie.</li>
      <li>W&nbsp;drodze do domu Tykocin albo Pałac Branickich.</li>
      <li>
        Zostajecie dłużej? Jeden dzień oddajcie Kruszynianom i&nbsp;Żyliczom, drugi SPA
        w&nbsp;Lipowym Moście.
      </li>
    </ul>

    <BlogFigure
      src="/images/blog/romantyczny-weekend-mglisty-wschod-slonca.webp"
      alt="Wschód słońca nad mglistą łąką z samotnym drzewem na Podlasiu"
      width={1600}
      height={1000}
      caption="Poranna mgła i&nbsp;wschód słońca nad podlaskimi łąkami."
    />

    <h2 id="dlaczego-dom">Dlaczego dom w&nbsp;lesie, a&nbsp;nie hotel?</h2>
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
        <strong>Gwiazdy w&nbsp;cenie</strong> – Drogę Mleczną widać gołym okiem, a&nbsp;nocny spacer
        po puszczy zaczyna się za furtką.
      </li>
      <li>
        <strong>10&nbsp;minut do Supraśla</strong> – restauracje i&nbsp;zabytki blisko, ale nie za
        oknem.
      </li>
    </ul>

    <img
      loading="lazy"
      decoding="async"
      sizes="(min-width: 768px) 768px, 100vw"
      src={livingFireplace}
      alt="Salon z&nbsp;kominkiem w&nbsp;domu In The Woods – romantyczny wieczór we dwoje na Podlasiu"
      className="w-full rounded-lg my-8"
      width="1600"
      height="968"
    />

    <h2 id="opinie-gosci">Co mówią goście In The Woods</h2>
    <p>
      Nie musicie wierzyć nam na słowo. Oto fragmenty opinii, które goście zostawili po pobycie na{' '}
      <strong>Booking.com</strong> – każda z&nbsp;oceną 10/10.
    </p>
    <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
      {guestReviews.map((review) => (
        <figure
          key={review.id}
          className="flex flex-col rounded-lg border border-border bg-card p-5 shadow-sm"
        >
          <p className="flex items-center gap-1 text-primary" aria-label="Ocena 10 na 10">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
            ))}
            <span className="ml-2 text-sm font-medium text-foreground">10/10</span>
          </p>
          {review.title ? (
            <p className="mt-3 font-medium text-foreground leading-snug">{review.title}</p>
          ) : null}
          <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-foreground/85">
            „{review.text}”
          </blockquote>
          <figcaption className="mt-3 text-xs text-muted-foreground">
            <strong className="text-foreground">{review.author ?? 'Gość'}</strong> · Booking.com ·{' '}
            {review.date}
            {review.translatedFrom ? (
              <span className="block">
                Przetłumaczono z&nbsp;{review.translatedFrom} przez Booking.com
              </span>
            ) : null}
          </figcaption>
        </figure>
      ))}
    </div>

    <aside className="not-prose my-8 rounded-lg border border-border bg-card p-6">
      <p className="font-heading text-lg text-foreground mb-2">Kto poleca te miejsca?</p>
      <p className="text-foreground/80 leading-relaxed">
        Ten przewodnik przygotował <strong>Maciej, gospodarz In The Woods</strong>. Dom stoi
        w&nbsp;Konnem, w&nbsp;sercu Puszczy Knyszyńskiej, a&nbsp;wszystkie miejsca z&nbsp;listy są
        w&nbsp;zasięgu jednego dnia. Na miejscu podpowiemy, gdzie najładniej zachodzi słońce
        i&nbsp;kiedy wyjść na gwiazdy.
      </p>
      <blockquote className="mt-4 border-l-4 border-primary pl-4 italic text-foreground/80">
        „Kanapa jest do leżenia, a&nbsp;kominek do gapienia się w&nbsp;ogień. Korzystajcie śmiało
        i&nbsp;bawcie się dobrze!”
        <footer className="mt-1 not-italic text-sm text-muted-foreground">
          — Maciej, gospodarz
        </footer>
      </blockquote>
    </aside>

    <h2>Zarezerwujcie romantyczny weekend we dwoje</h2>
    <p>
      <Link to="/">In The Woods</Link> to drewniany dom na wyłączność w&nbsp;Konnem koło Supraśla.
      Szczegóły balii znajdziecie na stronie{' '}
      <Link to="/domek-z-jacuzzi-podlasie">domku z&nbsp;balią na Podlasiu</Link>, gotowy rozkład
      dnia w&nbsp;<Link to="/weekend-suprasl">planie weekendu w&nbsp;Supraślu</Link>, a&nbsp;więcej
      miejsc na stronie <Link to="/atrakcje-suprasl">atrakcje Supraśla z&nbsp;czasem dojazdu</Link>.
    </p>
    <p>
      <strong>Weekendy walentynkowe, sierpniowe i&nbsp;wrześniowe znikają pierwsze.</strong>
    </p>

    <BlogInlineCta title="Sprawdźcie wolny termin na weekend we dwoje" text={ctaText} />
  </BlogArticleLayout>
);

export default RomantycznyWeekendPodlasie;
