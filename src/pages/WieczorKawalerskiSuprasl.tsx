import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import gardenFirepit from '@/assets/garden-firepit.webp';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MAX_GUESTS, MIN_NIGHTLY_RATE, WEEKEND_SURCHARGE } from '@/lib/pricing';

const faqs = [
  {
    question: 'Czy można zorganizować wieczór kawalerski w domku?',
    answer:
      'Można. Napiszcie Maciejowi, ile Was będzie, czy wpadną goście z zewnątrz i jak głośno planujecie świętować. Wszystko ustalicie przed rezerwacją, więc na miejscu nikt nikogo nie zaskoczy.',
  },
  {
    question: 'Ile osób zmieści się na kawalerskim?',
    answer: `Nocować może maksymalnie ${MAX_GUESTS} osób: dwie sypialnie na piętrze i dodatkowe miejsce do spania w salonie. Jeśli ktoś ma wpaść tylko na wieczór, dogadajcie to z Maciejem przed rezerwacją.`,
  },
  {
    question: 'Ile kosztuje wieczór kawalerski w In The Woods?',
    answer: `Od ${MIN_NIGHTLY_RATE} zł za noc za cały dom, nie za osobę. W piątki i soboty dochodzi ${WEEKEND_SURCHARGE} zł za noc, a balia to ${GARDEN_TUB_PRICE} zł za cały pobyt. Rozłożone na całą ekipę wychodzi mniej, niż myślicie.`,
  },
  {
    question: 'Jakie zasady obowiązują?',
    answer:
      'Ciszę nocną, gości z zewnątrz i ognisko ustalacie z Maciejem przed rezerwacją. Zasada numer jeden jest prosta: dom ma przeżyć Wasz kawalerski w lepszym stanie niż pan młody.',
  },
  {
    question: 'Jak dojechać z Białegostoku?',
    answer:
      'Zwykle 30–40 minut samochodem. Adres: Konne 109/1, 16-030 Supraśl. Parking jest przy domu, a kierowcę ustalcie, zanim otworzycie pierwsze piwo.',
  },
];

const WieczorKawalerskiSuprasl = () => (
  <SEOPageLayout
    title="Wieczór kawalerski na Podlasiu – dom w lesie z balią | In The Woods"
    description="Grill, ognisko, balia i las, który nikomu nic nie powie. Cały dom dla 8 osób pod Białymstokiem. Sprawdźcie wolne weekendy."
    breadcrumbName="Wieczór kawalerski Supraśl"
    ogImage="https://www.suprasl.online/images/gallery-ognisko-nocne-optimized.webp"
    jsonLd={createLandingPageSchemas('/wieczor-kawalerski-suprasl', faqs)}
    showRelatedPages={false}
    ctaTitle="Zarezerwujcie dom na kawalerski"
    ctaDescription="Napiszcie, który weekend Was interesuje i ilu Was będzie. Maciej odpisze z ceną, zwykle w kilka godzin."
    ctaFormLabel="Zapytaj o termin"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Wieczór kawalerski w lesie koło Supraśla
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Ostatni wieczór wolności nie musi oznaczać klubu, w którym nie słychać własnych myśli,
        i rachunku, który boli bardziej niż kac. Cały dom z bali tylko dla Waszej ekipy, grill,
        ognisko, gorąca balia pod gwiazdami i las, który niejedno już widział i nikomu nic nie
        powie. Do Białegostoku 30–40 minut.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={gardenFirepit}
          alt="Miejsce na ognisko w ogrodzie domu w lesie, wieczór kawalerski na Podlasiu"
          width={662}
          height={442}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Cały dom dla ekipy</h2>
      <p className="text-muted-foreground leading-relaxed">
        Drewniany dom z bali dla maksymalnie {MAX_GUESTS} osób, wynajmowany w całości. Dwie
        sypialnie, salon z kominkiem, pełna kuchnia, ogród, taras, altana, grill i miejsce na
        ognisko. Najbliżsi sąsiedzi to dziki, a one nie dzwonią na policję.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Pomysły na kawalerski w lesie</h2>
      <ul className="text-muted-foreground space-y-3">
        <li>🔥 Grill i ognisko do nocy. Kiełbasa, karkówka i przemowy, których pan młody wolałby nie słyszeć.</li>
        <li>🛁 Balia z hydromasażem pod gwiazdami. {GARDEN_TUB_PRICE} zł za cały pobyt, dzielone na ekipę to grosze.</li>
        <li>🃏 Poker albo planszówki przy kominku. Przegrany zmywa.</li>
        <li>🛶 W sezonie kajaki na rzece Supraśl następnego dnia, żeby przewietrzyć głowy.</li>
        <li>🌲 Sobotni spacer po Puszczy Knyszyńskiej. Dla niektórych pierwszy od lat.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Przykładowy plan</h2>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Piątek:</strong> przyjazd po pracy, grill na tarasie, balia i ognisko do nocy.{' '}
        <strong>Sobota:</strong> późne śniadanie, kajaki albo rower, wieczorem druga runda przy
        ognisku i przy kominku. <strong>Niedziela:</strong> kawa na tarasie, sprzątanie, które
        idzie zaskakująco sprawnie, gdy robi je osiem osób, i powrót do domu.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Liczbę osób, ciszę nocną i gości z zewnątrz ustalcie z Maciejem przed rezerwacją.</li>
        <li>Balię zamawiacie przy rezerwacji. Nie wskakujcie do niej po kilku głębszych, zdrowy rozsądek ma pierwszeństwo.</li>
        <li>Minimalny pobyt to zwykle 2 noce, a w wakacje 3.</li>
        <li>Formularz to tylko pytanie o termin. Rezerwację potwierdzimy osobno, mailem.</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Organizujecie też panieński? Zajrzyjcie na stronę o{' '}
        <Link to="/wieczor-panienski-suprasl" className="text-primary underline hover:text-primary/80">
          wieczorze panieńskim w Supraślu
        </Link>
        . Więcej o balii przeczytacie na stronie{' '}
        <Link
          to="/domek-z-jacuzzi-podlasie"
          className="text-primary underline hover:text-primary/80"
        >
          domek z balią na Podlasiu
        </Link>
        , a pomysły na sobotę znajdziecie w{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          przewodniku po atrakcjach Supraśla
        </Link>
        .
      </p>

      <section aria-labelledby="stag-faq">
        <h2 id="stag-faq" className="section-title !text-2xl md:!text-3xl">
          Najczęstsze pytania
        </h2>
        <dl className="space-y-5">
          {faqs.map(({ question, answer }) => (
            <div key={question}>
              <dt className="font-semibold text-foreground">{question}</dt>
              <dd className="mt-1 text-muted-foreground">{answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  </SEOPageLayout>
);

export default WieczorKawalerskiSuprasl;
