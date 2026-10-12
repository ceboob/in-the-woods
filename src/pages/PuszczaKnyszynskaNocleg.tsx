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
      'In The Woods to drewniany dom na wyłączność w miejscowości Konne, blisko Supraśla i Puszczy Knyszyńskiej. Dom mieści do 8 osób i ma salon z kominkiem, dwie sypialnie z widokiem na las oraz ogród. To baza do odpoczynku i odkrywania okolicznych tras.',
  },
  {
    question: 'Ile kosztuje nocleg w Puszczy Knyszyńskiej?',
    answer:
      `Cena noclegu zaczyna się od ${MIN_NIGHTLY_RATE} zł za noc i zależy od terminu oraz liczby gości. Balia ogrodowa z funkcją jacuzzi jest dodatkowo płatna: ${GARDEN_TUB_PRICE} zł za pobyt. Minimalny pobyt to ${MIN_NIGHTS} noce, a w sezonie wysokim ${highSeasonMinNights} noce. Ostateczna wycena uwzględnia wybrany pobyt.`,
  },
  {
    question: 'Czy można przyjechać z psem?',
    answer:
      'Tak, pobyt z psem jest możliwy po uzgodnieniu z gospodarzem, który poda zasady i ewentualne opłaty. Wybierajcie trasy, na których obecność psa jest dozwolona, szczególnie w pobliżu terenów chronionych. Ogród i taras zapewniają dodatkowe miejsce do odpoczynku przy domu. Spacer może stać się częścią każdego dnia.',
  },
  {
    question: 'Jak daleko dom znajduje się od Supraśla?',
    answer:
      'In The Woods leży w miejscowości Konne, około 10 minut jazdy od centrum Supraśla. Adres to Konne 109/1, 16-030 Supraśl. Dzięki temu można połączyć spokojny nocleg w lesie z wizytą w miasteczku, jego zabytkach, muzeach i restauracjach. Spacer po centrum dobrze uzupełni pobyt.',
  },
  {
    question: 'Czy dom jest dostępny zimą?',
    answer:
      'Tak, dom jest dostępny przez cały rok. Zimą możecie odpocząć przy kominku, obserwować las za oknem i wybrać się na spacer. Balia ogrodowa kosztuje 250 zł za pobyt i jest dostępna na zapytanie, a warunki jej używania gospodarz ustala dla terminu.',
  },
];

// TODO: zatwierdź treść
const PuszczaKnyszynskaNocleg = () => (
  <SEOPageLayout
    title="Nocleg w Puszczy Knyszyńskiej – domek | In The Woods"
    description="Nocleg w Puszczy Knyszyńskiej: cały dom na wyłączność od 399 zł/noc, kominek i balia na zapytanie. Zapytaj o termin."
    breadcrumbName="Puszcza Knyszyńska"
    ogImage="https://www.suprasl.online/images/winter-cabin-golden.jpg"
    jsonLd={createLandingPageSchemas('/puszcza-knyszynska-nocleg', faqs)}
    showRelatedPages={false}
    ctaTitle="Zapytaj o nocleg w puszczy"
    ctaDescription="Podaj termin i liczbę gości, a gospodarz przygotuje informację o dostępności oraz wycenę."
    ctaFormLabel="Zapytaj o nocleg"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Nocleg w Puszczy Knyszyńskiej — domek na wyłączność
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Nocleg w Puszczy Knyszyńskiej zaczyna się tu od poranka za oknem pełnym drzew i ciszy, którą
        przerywają ptaki. In The Woods to drewniany dom w miejscowości Konne, około 10 minut od centrum Supraśla.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={forestWinter}
          alt="Zimowy las przy leśnym domku na nocleg w Puszczy Knyszyńskiej"
          width={1368}
          height={1824}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Puszcza Knyszyńska — las, który wycisza
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Puszcza Knyszyńska to rozległy kompleks leśny Podlasia, z terenami chronionymi i miejscami,
        gdzie łatwo zwolnić krok. W okolicy domu znajduje się rezerwat Krzemienne Góry, a za oknem
        czekają zmieniające się kolory lasu, śpiew ptaków i chłodne, pachnące żywicą powietrze.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Domek w lesie na wyłączność</h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom mieści do {MAX_GUESTS} osób. Na parterze są salon z kominkiem, kuchnia z płytą kaflową i
        łazienka, a na piętrze dwie sypialnie z dużymi łóżkami i widokiem na las.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Ogród, taras, altana i miejsce na ognisko dają przestrzeń na odpoczynek na zewnątrz.
        Klimatyzacja działa w sezonie letnim, a Wi-Fi i bezpłatny parking są dostępne dla gości.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Szlaki i aktywności w puszczy</h2>
      <p className="text-muted-foreground leading-relaxed">
        W okolicy możecie wybierać trasy spacerowe i rowerowe, jesienią zaplanować grzybobranie, a w
        sezonie letnim sprawdzić spływy kajakowe. Zimą leśne spacery mają inny rytm — krótszy dzień
        zachęca, by wrócić do kominka przed zmrokiem.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Więcej pomysłów znajdziecie w przewodniku po{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcjach Supraśla
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Zimowy weekend i sylwester w puszczy
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Dom jest dostępny przez cały rok. Zimą ogrzejecie dłonie przy kominku, a śnieg zmienia leśne
        ścieżki i ogród w cichą scenerię. Nocleg na sylwestra w lesie pozwala zamknąć rok spokojniej,
        w gronie Waszej grupy.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Zobaczcie także{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          weekend w Supraślu
        </Link>{' '}
        albo szczegóły oferty{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegi w Supraślu
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Balia ogrodowa z funkcją jacuzzi kosztuje 250 zł za pobyt i jest dostępna na zapytanie.</li>
        <li>Pobyt z psem oraz ewentualne opłaty ustala gospodarz.</li>
        <li>Przed wizytą w rezerwacie Krzemienne Góry sprawdźcie zasady udostępniania.</li>
        <li>Na obszarach chronionych obowiązują lokalne zasady; wybierajcie dostępne trasy.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Cennik i rezerwacja</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Cena od {MIN_NIGHTLY_RATE} zł za noc, zależnie od terminu i liczby gości.</li>
        <li>Balia ogrodowa: {GARDEN_TUB_PRICE} zł za pobyt, na zapytanie.</li>
        <li>
          Minimum {MIN_NIGHTS} noce, a w sezonie wysokim {highSeasonMinNights} noce.
        </li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Formularz służy do wysłania zapytania o dostępność i wycenę; nie potwierdza rezerwacji.
      </p>

      <section aria-labelledby="forest-faq">
        <h2 id="forest-faq" className="section-title !text-2xl md:!text-3xl">FAQ</h2>
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
