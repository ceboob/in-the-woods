import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import forestWinter from '@/assets/winter-forest.webp';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MAX_GUESTS, MIN_NIGHTLY_RATE, MIN_NIGHTS, SEASONS } from '@/lib/pricing';

const highSeasonMinNights = Math.max(...SEASONS.map((season) => season.minNights));

const faqs = [
  {
    question: 'Gdzie znaleźć nocleg w\u00a0Puszczy Knyszyńskiej?',
    answer:
      'Na przykład u\u00a0nas. In The Woods to drewniany dom na wyłączność w\u00a0Konnem, na skraju puszczy, 10\u00a0minut od Supraśla. Do 8\u00a0osób, salon z\u00a0kominkiem, dwie sypialnie z\u00a0widokiem na las i\u00a0ogród, z\u00a0którego wychodzicie prosto na leśne dukty.',
  },
  {
    question: 'Ile kosztuje nocleg w\u00a0Puszczy Knyszyńskiej?',
    answer: `Cena noclegu zaczyna się od ${MIN_NIGHTLY_RATE} zł za noc i\u00a0zależy od terminu oraz liczby gości. Balia z\u00a0hydromasażem to dodatek: ${GARDEN_TUB_PRICE} zł za cały pobyt. Minimalny pobyt to ${MIN_NIGHTS} noce, a\u00a0w\u00a0wakacje ${highSeasonMinNights}. Cena jest za cały dom, nie za osobę.`,
  },
  {
    question: 'Czy można przyjechać z\u00a0psem?',
    answer:
      'Tak, i\u00a0to za darmo. W\u00a0lesie i\u00a0rezerwatach trzymajcie go na smyczy, bo puszcza to dom dzików i\u00a0saren. Po spacerze pies może się wyszaleć w\u00a0ogrodzonym ogrodzie.',
  },
  {
    question: 'Jak daleko dom znajduje się od Supraśla?',
    answer:
      'Około 10\u00a0minut samochodem. Adres: Konne 109/1, 16-030 Supraśl. Rano las, w\u00a0południe monaster i\u00a0Muzeum Ikon, na obiad babka ziemniaczana w\u00a0miasteczku.',
  },
  {
    question: 'Czy dom jest dostępny zimą?',
    answer:
      'Tak, dom jest całoroczny. Zimą grzeje kominek, a\u00a0za oknem leży śnieg. Balię zamawiacie przy rezerwacji (250\u00a0zł za cały pobyt), a\u00a0w\u00a0siarczysty mróz Maciej powie Wam wprost, czy da się ją nagrzać.',
  },
];

// TODO: zatwierdź treść
const PuszczaKnyszynskaNocleg = () => (
  <SEOPageLayout
    title="Nocleg w Puszczy Knyszyńskiej – dom z bali | In The Woods"
    description="Las zaczyna się za płotem. Cały dom z&nbsp;bali na wyłączność, baza na Krzemienne Góry, Kopną Górę i&nbsp;kajaki na Supraśli. Od 399&nbsp;zł za noc."
    breadcrumbName="Puszcza Knyszyńska"
    ogImage="https://www.suprasl.online/images/winter-cabin-golden.jpg"
    jsonLd={createLandingPageSchemas('/puszcza-knyszynska-nocleg', faqs)}
    showRelatedPages={false}
    ctaTitle="Sprawdźcie wolne terminy w&nbsp;puszczy"
    ctaDescription="Podajcie daty i&nbsp;liczbę osób, a&nbsp;Maciej odpisze z&nbsp;ceną, zwykle w&nbsp;kilka godzin."
    ctaFormLabel="Zapytaj o&nbsp;nocleg"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Nocleg w&nbsp;Puszczy Knyszyńskiej: dom z&nbsp;bali przy szlakach
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Budzicie się, a&nbsp;za oknem tylko drzewa. Kawa na tarasie, buty na nogi i&nbsp;jesteście
        w&nbsp;lesie. In The Woods to drewniany dom w&nbsp;Konnem, na skraju puszczy, około
        10&nbsp;minut od centrum Supraśla.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={forestWinter}
          alt="Zimowy las Puszczy Knyszyńskiej przy domu In The Woods"
          width={1368}
          height={1824}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Puszcza Knyszyńska: las, który wyłącza głowę
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        To drugi co do wielkości las Podlasia, z&nbsp;rezerwatami, rzekami i&nbsp;zwierzyną, którą
        częściej słychać, niż widać. Niedaleko domu jest rezerwat Krzemienne Góry,
        a&nbsp;w&nbsp;powietrzu czuć żywicę i&nbsp;mokry mech. Po dwóch dniach przestajecie
        sprawdzać telefon co pięć minut.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dom tylko dla Was</h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom mieści maksymalnie {MAX_GUESTS} osób. Na dole salon z&nbsp;kominkiem i&nbsp;kuchnia
        z&nbsp;tradycyjną płytą kaflową, na górze dwie sypialnie z&nbsp;dużymi łóżkami
        i&nbsp;widokiem na las.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Na zewnątrz ogród, taras, altana i&nbsp;miejsce na ognisko. W&nbsp;środku klimatyzacja
        i&nbsp;Starlink do 200&nbsp;Mb/s, a&nbsp;przed domem bezpłatny parking.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Co robić w&nbsp;puszczy</h2>
      <p className="text-muted-foreground leading-relaxed">
        Wiosną i&nbsp;latem: rower, piesze trasy i&nbsp;kajaki na rzece Supraśl. Jesienią
        grzybobranie, które tutaj jest sportem narodowym. Zimą krótkie spacery po śniegu
        i&nbsp;szybki powrót do kominka, zanim zrobi się ciemno.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Więcej pomysłów znajdziecie w&nbsp;przewodniku po{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcjach Supraśla
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Zima i&nbsp;sylwester w&nbsp;puszczy</h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom jest całoroczny. Zimą puszcza cichnie tak, że słychać, jak spada śnieg. Sylwester
        w&nbsp;lesie? Fajerwerki zostawcie miastu: tu macie ognisko, balię i&nbsp;gwiazdy. Wasz pies
        podziękuje.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Zobaczcie także{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          weekend w&nbsp;Supraślu
        </Link>{' '}
        albo zajrzyjcie na stronę o{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegach w&nbsp;Supraślu
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>
          Balia z&nbsp;hydromasażem kosztuje 250&nbsp;zł za cały pobyt. Zamawiacie ją przy
          rezerwacji.
        </li>
        <li>Pies przyjeżdża gratis.</li>
        <li>W&nbsp;rezerwacie Krzemienne Góry trzymajcie się wyznaczonych ścieżek.</li>
        <li>Do lasu zabierzcie coś na kleszcze. Jest ich tu więcej niż turystów.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Cennik i&nbsp;rezerwacja</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Cena od {MIN_NIGHTLY_RATE} zł za noc, zależnie od terminu i&nbsp;liczby gości.</li>
        <li>Balia z&nbsp;hydromasażem: {GARDEN_TUB_PRICE} zł za cały pobyt.</li>
        <li>
          Minimum {MIN_NIGHTS} noce, a&nbsp;w&nbsp;wakacje {highSeasonMinNights}.
        </li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Formularz to tylko pytanie o&nbsp;termin. Niczego nie rezerwuje i&nbsp;niczego nie pobiera.
      </p>

      <section aria-labelledby="forest-faq">
        <h2 id="forest-faq" className="section-title !text-2xl md:!text-3xl">
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

export default PuszczaKnyszynskaNocleg;
