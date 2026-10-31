import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import gardenFirepit from '@/assets/garden-firepit.webp';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MAX_GUESTS, MIN_NIGHTLY_RATE, WEEKEND_SURCHARGE } from '@/lib/pricing';

const faqs = [
  {
    question: 'Czy można zorganizować wieczór kawalerski w\u00a0domku?',
    answer:
      'Można. Napiszcie Maciejowi, ile Was będzie, czy wpadną goście z\u00a0zewnątrz i\u00a0jak głośno planujecie świętować. Wszystko ustalicie przed rezerwacją, więc na miejscu nikt nikogo nie zaskoczy.',
  },
  {
    question: 'Ile osób zmieści się na kawalerskim?',
    answer: `Nocować może maksymalnie ${MAX_GUESTS} osób: dwie sypialnie na piętrze i\u00a0dodatkowe miejsce do spania w\u00a0salonie. Jeśli ktoś ma wpaść tylko na wieczór, dogadajcie to z\u00a0Maciejem przed rezerwacją.`,
  },
  {
    question: 'Ile kosztuje wieczór kawalerski w\u00a0In The Woods?',
    answer: `Od ${MIN_NIGHTLY_RATE} zł za noc za cały dom, nie za osobę. W\u00a0piątki i\u00a0soboty dochodzi ${WEEKEND_SURCHARGE} zł za noc, a\u00a0balia to ${GARDEN_TUB_PRICE} zł za cały pobyt. Rozłożone na całą ekipę wychodzi mniej, niż myślicie.`,
  },
  {
    question: 'Jakie zasady obowiązują?',
    answer:
      'Ciszę nocną, gości z\u00a0zewnątrz i\u00a0ognisko ustalacie z\u00a0Maciejem przed rezerwacją. Zasada numer jeden jest prosta: dom ma przeżyć Wasz kawalerski w\u00a0lepszym stanie niż pan młody.',
  },
  {
    question: 'Jak dojechać z\u00a0Białegostoku?',
    answer:
      'Zwykle 30–40\u00a0minut samochodem. Adres: Konne 109/1, 16-030 Supraśl. Parking jest przy domu, a\u00a0kierowcę ustalcie, zanim otworzycie pierwsze piwo.',
  },
];

const WieczorKawalerskiSuprasl = () => (
  <SEOPageLayout
    title="Wieczór kawalerski na Podlasiu | In The Woods"
    description="Grill, ognisko, balia i&nbsp;las, który nikomu nic nie powie. Cały dom dla 8&nbsp;osób pod Białymstokiem. Sprawdźcie wolne weekendy."
    breadcrumbName="Wieczór kawalerski Supraśl"
    ogImage="https://www.suprasl.online/images/gallery-ognisko-nocne-optimized.webp"
    jsonLd={createLandingPageSchemas('/wieczor-kawalerski-suprasl', faqs)}
    showRelatedPages={false}
    ctaTitle="Zarezerwujcie dom na kawalerski"
    ctaDescription="Napiszcie, który weekend Was interesuje i&nbsp;ilu Was będzie. Maciej odpisze z&nbsp;ceną, zwykle w&nbsp;kilka godzin."
    ctaFormLabel="Zapytaj o&nbsp;termin"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Wieczór kawalerski w&nbsp;lesie koło Supraśla
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Ostatni wieczór wolności nie musi oznaczać klubu, w&nbsp;którym nie słychać własnych myśli,
        i&nbsp;rachunku, który boli bardziej niż kac. Cały dom z&nbsp;bali tylko dla Waszej ekipy,
        grill, ognisko, gorąca balia pod gwiazdami i&nbsp;las, który niejedno już widział
        i&nbsp;nikomu nic nie powie. Do Białegostoku 30–40&nbsp;minut.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={gardenFirepit}
          alt="Miejsce na ognisko w&nbsp;ogrodzie domu w&nbsp;lesie, wieczór kawalerski na Podlasiu"
          width={662}
          height={442}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Cały dom dla ekipy</h2>
      <p className="text-muted-foreground leading-relaxed">
        Drewniany dom z&nbsp;bali dla maksymalnie {MAX_GUESTS} osób, wynajmowany w&nbsp;całości.
        Dwie sypialnie, salon z&nbsp;kominkiem, pełna kuchnia, ogród, taras, altana, grill
        i&nbsp;miejsce na ognisko. Najbliżsi sąsiedzi to dziki, a&nbsp;one nie dzwonią na policję.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Pomysły na kawalerski w&nbsp;lesie</h2>
      <ul className="text-muted-foreground space-y-3">
        <li>
          🔥 Grill i&nbsp;ognisko do nocy. Kiełbasa, karkówka i&nbsp;przemowy, których pan młody
          wolałby nie słyszeć.
        </li>
        <li>
          🛁 Balia z&nbsp;hydromasażem pod gwiazdami. {GARDEN_TUB_PRICE} zł za cały pobyt, dzielone
          na ekipę to grosze.
        </li>
        <li>🃏 Poker albo planszówki przy kominku. Przegrany zmywa.</li>
        <li>🛶 W&nbsp;sezonie kajaki na rzece Supraśl następnego dnia, żeby przewietrzyć głowy.</li>
        <li>🌲 Sobotni spacer po Puszczy Knyszyńskiej. Dla niektórych pierwszy od lat.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Przykładowy plan</h2>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Piątek:</strong> przyjazd po pracy, grill na tarasie, balia i&nbsp;ognisko do nocy.{' '}
        <strong>Sobota:</strong> późne śniadanie, kajaki albo rower, wieczorem druga runda przy
        ognisku i&nbsp;przy kominku. <strong>Niedziela:</strong> kawa na tarasie, sprzątanie, które
        idzie zaskakująco sprawnie, gdy robi je osiem osób, i&nbsp;powrót do domu.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>
          Liczbę osób, ciszę nocną i&nbsp;gości z&nbsp;zewnątrz ustalcie z&nbsp;Maciejem przed
          rezerwacją.
        </li>
        <li>
          Balię zamawiacie przy rezerwacji. Nie wskakujcie do niej po kilku głębszych, zdrowy
          rozsądek ma pierwszeństwo.
        </li>
        <li>Minimalny pobyt to zwykle 2&nbsp;noce, a&nbsp;w&nbsp;wakacje 3.</li>
        <li>Formularz to tylko pytanie o&nbsp;termin. Rezerwację potwierdzimy osobno, mailem.</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Organizujecie też panieński? Zajrzyjcie na stronę o{' '}
        <Link
          to="/wieczor-panienski-suprasl"
          className="text-primary underline hover:text-primary/80"
        >
          wieczorze panieńskim w&nbsp;Supraślu
        </Link>
        . Więcej o&nbsp;balii przeczytacie na stronie{' '}
        <Link
          to="/domek-z-jacuzzi-podlasie"
          className="text-primary underline hover:text-primary/80"
        >
          domek z&nbsp;balią na Podlasiu
        </Link>
        , a&nbsp;pomysły na sobotę znajdziecie w{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          przewodniku po atrakcjach Supraśla
        </Link>
        .
      </p>

      <section aria-labelledby="stag-faq">
        <h2 id="stag-faq" className="section-title !text-2xl md:!text-3xl">
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

export default WieczorKawalerskiSuprasl;
