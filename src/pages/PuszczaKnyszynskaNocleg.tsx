import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import forestWinter from '@/assets/winter-forest.webp';
import { Link } from 'react-router-dom';
import {
  GARDEN_TUB_PRICE,
  MAX_GUESTS,
  MIN_NIGHTLY_RATE,
  MIN_NIGHTS,
  SEASONS,
} from '@/lib/pricing';

const highSeasonMinNights = Math.max(...SEASONS.map((season) => season.minNights));

const faqs = [
  {
    question: 'Gdzie znaleźć nocleg w Puszczy Knyszyńskiej?',
    answer:
      'Na przykład u nas. In The Woods to drewniany dom na wyłączność w Konnem, na skraju puszczy, 10 minut od Supraśla. Do 8 osób, salon z kominkiem, dwie sypialnie z widokiem na las i ogród, z którego wychodzicie prosto na leśne dukty.',
  },
  {
    question: 'Ile kosztuje nocleg w Puszczy Knyszyńskiej?',
    answer:
      `Cena noclegu zaczyna się od ${MIN_NIGHTLY_RATE} zł za noc i zależy od terminu oraz liczby gości. Balia z hydromasażem to dodatek: ${GARDEN_TUB_PRICE} zł za cały pobyt. Minimalny pobyt to ${MIN_NIGHTS} noce, a w wakacje ${highSeasonMinNights}. Cena jest za cały dom, nie za osobę.`,
  },
  {
    question: 'Czy można przyjechać z psem?',
    answer:
      'Tak, i to za darmo. W lesie i rezerwatach trzymajcie go na smyczy, bo puszcza to dom dzików i saren. Po spacerze pies może się wyszaleć w ogrodzonym ogrodzie.',
  },
  {
    question: 'Jak daleko dom znajduje się od Supraśla?',
    answer:
      'Około 10 minut samochodem. Adres: Konne 109/1, 16-030 Supraśl. Rano las, w południe monaster i Muzeum Ikon, na obiad babka ziemniaczana w miasteczku.',
  },
  {
    question: 'Czy dom jest dostępny zimą?',
    answer:
      'Tak, dom jest całoroczny. Zimą grzeje kominek, a za oknem leży śnieg. Balię zamawiacie przy rezerwacji (250 zł za cały pobyt), a w siarczysty mróz Maciej powie Wam wprost, czy da się ją nagrzać.',
  },
];

// TODO: zatwierdź treść
const PuszczaKnyszynskaNocleg = () => (
  <SEOPageLayout
    title="Nocleg w Puszczy Knyszyńskiej – dom przy szlakach | In The Woods"
    description="Las zaczyna się za płotem. Cały dom z bali na wyłączność, baza na Krzemienne Góry, Kopną Górę i kajaki na Supraśli. Od 399 zł za noc."
    breadcrumbName="Puszcza Knyszyńska"
    ogImage="https://www.suprasl.online/images/winter-cabin-golden.jpg"
    jsonLd={createLandingPageSchemas('/puszcza-knyszynska-nocleg', faqs)}
    showRelatedPages={false}
    ctaTitle="Sprawdźcie wolne terminy w puszczy"
    ctaDescription="Podajcie daty i liczbę osób, a Maciej odpisze z ceną, zwykle w kilka godzin."
    ctaFormLabel="Zapytaj o nocleg"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Nocleg w Puszczy Knyszyńskiej: dom z bali przy szlakach
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Budzicie się, a za oknem tylko drzewa. Kawa na tarasie, buty na nogi i jesteście w lesie.
        In The Woods to drewniany dom w Konnem, na skraju puszczy, około 10 minut od centrum Supraśla.
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
        To drugi co do wielkości las Podlasia, z rezerwatami, rzekami i zwierzyną, którą częściej
        słychać, niż widać. Niedaleko domu jest rezerwat Krzemienne Góry, a w powietrzu czuć żywicę
        i mokry mech. Po dwóch dniach przestajecie sprawdzać telefon co pięć minut.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dom tylko dla Was</h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom mieści maksymalnie {MAX_GUESTS} osób. Na dole salon z kominkiem i kuchnia z tradycyjną
        kuchnią kaflową, na górze dwie sypialnie z dużymi łóżkami i widokiem na las.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Na zewnątrz ogród, taras, altana i miejsce na ognisko. W środku klimatyzacja i Starlink do
        200 Mb/s, a przed domem bezpłatny parking.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Co robić w puszczy</h2>
      <p className="text-muted-foreground leading-relaxed">
        Wiosną i latem: rower, piesze trasy i kajaki na rzece Supraśl. Jesienią grzybobranie, które
        tutaj jest sportem narodowym. Zimą krótkie spacery po śniegu i szybki powrót do kominka, zanim
        zrobi się ciemno.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Więcej pomysłów znajdziecie w przewodniku po{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcjach Supraśla
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Zima i sylwester w puszczy
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom jest całoroczny. Zimą puszcza cichnie tak, że słychać, jak spada śnieg. Sylwester w lesie?
        Fajerwerki zostawcie miastu: tu macie ognisko, balię i gwiazdy. Wasz pies podziękuje.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Zobaczcie także{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          weekend w Supraślu
        </Link>{' '}
        albo zajrzyjcie na stronę o{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegach w Supraślu
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Balia z hydromasażem kosztuje 250 zł za cały pobyt. Zamawiacie ją przy rezerwacji.</li>
        <li>Pies przyjeżdża gratis.</li>
        <li>W rezerwacie Krzemienne Góry trzymajcie się wyznaczonych ścieżek.</li>
        <li>Do lasu zabierzcie coś na kleszcze. Jest ich tu więcej niż turystów.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Cennik i rezerwacja</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Cena od {MIN_NIGHTLY_RATE} zł za noc, zależnie od terminu i liczby gości.</li>
        <li>Balia z hydromasażem: {GARDEN_TUB_PRICE} zł za cały pobyt.</li>
        <li>
          Minimum {MIN_NIGHTS} noce, a w wakacje {highSeasonMinNights}.
        </li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Formularz to tylko pytanie o termin. Niczego nie rezerwuje i niczego nie pobiera.
      </p>

      <section aria-labelledby="forest-faq">
        <h2 id="forest-faq" className="section-title !text-2xl md:!text-3xl">Najczęstsze pytania</h2>
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

export default PuszczaKnyszynskaNocleg;
