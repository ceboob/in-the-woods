import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import weekendMorning from '@/assets/terrace-breakfast.webp';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MIN_NIGHTLY_RATE, MIN_NIGHTS, SEASONS, WEEKEND_SURCHARGE } from '@/lib/pricing';

const faqs = [
  {
    question: 'Ile kosztuje weekend w domku?',
    answer:
      `Od ${MIN_NIGHTLY_RATE} zł za noc za cały dom. W piątki i soboty dochodzi ${WEEKEND_SURCHARGE} zł za noc, a balia to ${GARDEN_TUB_PRICE} zł za cały pobyt. Dokładną kwotę dla Waszych dat pokaże kalendarz albo Maciej.`,
  },
  {
    question: 'Czy weekend w Supraślu trzeba rezerwować z wyprzedzeniem?',
    answer:
      'Tak, jeśli zależy Wam na konkretnym weekendzie, a już na pewno w wakacje. Dom wynajmujemy jednej ekipie, więc jeden wolny weekend to jeden wolny weekend. Napiszcie od razu, ile Was będzie.',
  },
  {
    question: 'Co robić w Supraślu w weekend, gdy pada deszcz?',
    answer:
      'Muzeum Ikon, monaster i Muzeum Drukarstwa, a potem powrót do kominka, książka i coś ciepłego z kuchni. Deszcz w lesie ma też swój urok, jeśli macie kalosze.',
  },
  {
    question: 'Czy można przyjechać z psem na weekend w lesie na Podlasiu?',
    answer:
      'Tak, za darmo. W lesie i rezerwatach trzymajcie go na smyczy, a po spacerze może się wyszaleć w ogrodzonym ogrodzie.',
  },
  {
    question: 'Czy balia jest dostępna na weekend?',
    answer:
      `Tak. Balia z hydromasażem kosztuje ${GARDEN_TUB_PRICE} zł za cały pobyt i nie jest wliczona w cenę noclegu. Zaznaczcie ją przy rezerwacji, a nagrzejemy ją na piątkowy wieczór.`,
  },
];

const WeekendSuprasl = () => (
  <SEOPageLayout
    title="Weekend w Supraślu – plan od piątku do niedzieli | In The Woods"
    description="Gotowy plan na weekend: monaster i ikony, kajaki, babka ziemniaczana i wieczór w balii. Nocleg w lesie 10 minut od Supraśla."
    breadcrumbName="Weekend w Supraślu"
    ogImage="https://www.suprasl.online/images/terrace-breakfast.jpg"
    jsonLd={createLandingPageSchemas('/weekend-suprasl', faqs)}
    showRelatedPages={false}
    ctaTitle="Zarezerwujcie weekend w lesie"
    ctaDescription="Napiszcie, który weekend Was interesuje. Maciej odpisze z ceną, zwykle w kilka godzin."
    ctaFormLabel="Zapytaj o weekend"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Weekend w Supraślu: plan od piątku do niedzieli
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Piątek wieczorem przyjazd i balia, sobota w Supraślu i w puszczy, niedziela ze śniadaniem do
        południa. Śpicie w całym drewnianym domu w Konnem, 10 minut od miasteczka. Poniżej plan, który
        możecie wziąć w całości albo spokojnie olać.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Zastanawiacie się, gdzie wybrać się na weekend na Podlasiu? Supraśl ma zabytki, rzekę i knajpy,
        a dookoła zaczyna się Puszcza Knyszyńska. Do tego dom z kominkiem i balią, w którym nikt nie
        pogania Was do wyjścia o 11:00.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={weekendMorning}
          alt="Śniadanie na tarasie leśnego domku podczas weekendu w Supraślu"
          width={1368}
          height={1824}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Piątek: przyjazd i pierwszy wieczór</h2>
      <p className="text-muted-foreground leading-relaxed">
        Przyjeżdżacie po pracy, rzucacie torby i rozpalacie kominek. Kolacja w kuchni albo na grillu,
        a potem balia pod gwiazdami. Telefon można odłożyć już teraz.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Balia kosztuje 250 zł za cały pobyt. Zamówcie ją przy rezerwacji, a będzie gorąca, zanim przyjedziecie.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Sobota: Supraśl i Puszcza Knyszyńska
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Śniadanie o 9:00 (albo o 11:00, nikt nie patrzy). Około 10:30 Supraśl: monaster i Muzeum Ikon.
        O 13:00 obiad, czyli babka ziemniaczana albo kartacze, po których dieta poczeka do poniedziałku.
        Po południu leśny szlak, rower albo, w sezonie, kajaki na rzece Supraśl. Wieczorem ognisko
        w ogrodzie i kiełbaski.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Więcej podpowiedzi znajdziecie w przewodniku po{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcjach Supraśla
        </Link>
        . Nie macie siły na plan? Leżak na tarasie też jest planem.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Niedziela: śniadanie do południa
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Długie śniadanie, ostatni spacer po lesie i pakowanie, którego nikt nie lubi. W drodze powrotnej
        możecie zajrzeć do Arboretum w Kopnej Górze albo pojechać dalej, do tatarskich Kruszynian.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Weekend we dwoje czy z ekipą?</h2>
      <p className="text-muted-foreground leading-relaxed">
        We dwoje: długie śniadanie, spacer, kominek i balia, w której nikt Wam nie przeszkodzi. Romantyczny
        weekend na Podlasiu bez świadków. Z ekipą: cały dom, ogród, ognisko i miejsce dla
        maksymalnie 8 osób.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Pies jedzie gratis. Wszystko o balii znajdziecie na stronie{' '}
        <Link to="/domek-z-jacuzzi-podlasie" className="text-primary underline hover:text-primary/80">
          domek z balią na Podlasiu
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Weekend o każdej porze roku</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Jesienią: kolorowy las, grzybobranie i długie wieczory przy ogniu.</li>
        <li>Zimą: śnieg, kominek i para nad balią.</li>
        <li>Wiosną: las się budzi, a ptaki budzą Was. Bardzo wcześnie.</li>
        <li>Latem: kajaki, taras i klimatyzacja, kiedy przyjdą upały.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Praktyczne informacje</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>
          Cena od {MIN_NIGHTLY_RATE} zł za noc; w piątki i soboty dopłata wynosi {WEEKEND_SURCHARGE}{' '}
          zł za noc.
        </li>
        <li>
          Minimum {MIN_NIGHTS} noce, a w wakacje{' '}
          {Math.max(...SEASONS.map((season) => season.minNights))}.
        </li>
        <li>Adres: Konne 109/1, 16-030 Supraśl; dojazd z Białegostoku trwa około 30–40 minut.</li>
        <li>
          Więcej informacji: <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">noclegi w Supraślu</Link>.
        </li>
      </ul>

      <section aria-labelledby="weekend-faq">
        <h2 id="weekend-faq" className="section-title !text-2xl md:!text-3xl">Najczęstsze pytania</h2>
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

export default WeekendSuprasl;
