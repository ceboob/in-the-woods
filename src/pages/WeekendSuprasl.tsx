import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import weekendMorning from '@/assets/terrace-breakfast.webp';
import { Link } from 'react-router-dom';
import {
  GARDEN_TUB_PRICE,
  MIN_NIGHTLY_RATE,
  MIN_NIGHTS,
  SEASONS,
  WEEKEND_SURCHARGE,
} from '@/lib/pricing';

const faqs = [
  {
    question: 'Ile kosztuje weekend w\u00a0domku?',
    answer: `Od ${MIN_NIGHTLY_RATE} zł za noc za cały dom. W\u00a0piątki i\u00a0soboty dochodzi ${WEEKEND_SURCHARGE} zł za noc, a\u00a0balia to ${GARDEN_TUB_PRICE} zł za cały pobyt. Dokładną kwotę dla Waszych dat pokaże kalendarz albo Maciej.`,
  },
  {
    question: 'Czy weekend w\u00a0Supraślu trzeba rezerwować z\u00a0wyprzedzeniem?',
    answer:
      'Tak, jeśli zależy Wam na konkretnym weekendzie, a\u00a0już na pewno w\u00a0wakacje. Dom wynajmujemy jednej ekipie, więc jeden wolny weekend to jeden wolny weekend. Napiszcie od razu, ile Was będzie.',
  },
  {
    question: 'Co robić w\u00a0Supraślu w\u00a0weekend, gdy pada deszcz?',
    answer:
      'Muzeum Ikon, monaster i\u00a0Muzeum Drukarstwa, a\u00a0potem powrót do kominka, książka i\u00a0coś ciepłego z\u00a0kuchni. Deszcz w\u00a0lesie ma też swój urok, jeśli macie kalosze.',
  },
  {
    question: 'Czy można przyjechać z\u00a0psem na weekend w\u00a0lesie na Podlasiu?',
    answer:
      'Tak, za darmo. W\u00a0lesie i\u00a0rezerwatach trzymajcie go na smyczy, a\u00a0po spacerze może się wyszaleć w\u00a0ogrodzonym ogrodzie.',
  },
  {
    question: 'Co zobaczyć na Podlasiu w\u00a0weekend?',
    answer:
      'Z\u00a0bazą w\u00a0Supraślu zobaczycie w\u00a0dwa dni monaster i\u00a0Muzeum Ikon, Puszczę Knyszyńską i\u00a0jedną wycieczkę: Białystok z\u00a0Pałacem Branickich, Tykocin nad Narwią, tatarskie Kruszyniany albo Krainę Otwartych Okiennic. Każda trasa zajmuje pół dnia.',
  },
  {
    question: 'Czy balia jest dostępna na weekend?',
    answer: `Tak. Balia z\u00a0hydromasażem kosztuje ${GARDEN_TUB_PRICE} zł za cały pobyt i\u00a0nie jest wliczona w\u00a0cenę noclegu. Zaznaczcie ją przy rezerwacji, a\u00a0nagrzejemy ją na piątkowy wieczór.`,
  },
];

const WeekendSuprasl = () => (
  <SEOPageLayout
    title="Weekend w Supraślu – gotowy plan na 2 dni | In The Woods"
    description="Gotowy plan na weekend: monaster i&nbsp;ikony, kajaki, babka ziemniaczana i&nbsp;wieczór w&nbsp;balii. Nocleg w&nbsp;lesie 10&nbsp;minut od Supraśla."
    breadcrumbName="Weekend w&nbsp;Supraślu"
    ogImage="https://www.suprasl.online/images/terrace-breakfast.jpg"
    jsonLd={createLandingPageSchemas('/weekend-suprasl', faqs)}
    showRelatedPages={false}
    ctaTitle="Zarezerwujcie weekend w&nbsp;lesie"
    ctaDescription="Napiszcie, który weekend Was interesuje. Maciej odpisze z&nbsp;ceną, zwykle w&nbsp;kilka godzin."
    ctaFormLabel="Zapytaj o&nbsp;weekend"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Weekend w&nbsp;Supraślu: plan od piątku do niedzieli
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Piątek wieczorem przyjazd i&nbsp;balia, sobota w&nbsp;Supraślu i&nbsp;w&nbsp;puszczy,
        niedziela ze śniadaniem do południa. Śpicie w&nbsp;całym drewnianym domu w&nbsp;Konnem,
        10&nbsp;minut od miasteczka. Poniżej plan, który możecie wziąć w&nbsp;całości albo spokojnie
        olać.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Zastanawiacie się, gdzie wybrać się na weekend na Podlasiu? Supraśl ma zabytki, rzekę
        i&nbsp;knajpy, a&nbsp;dookoła zaczyna się Puszcza Knyszyńska. Do tego dom z&nbsp;kominkiem
        i&nbsp;balią, w&nbsp;którym nikt nie pogania Was do wyjścia o&nbsp;11:00.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={weekendMorning}
          alt="Śniadanie na tarasie leśnego domku podczas weekendu w&nbsp;Supraślu"
          width={1368}
          height={1824}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Piątek: przyjazd i&nbsp;pierwszy wieczór
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Przyjeżdżacie po pracy, rzucacie torby i&nbsp;rozpalacie kominek. Kolacja w&nbsp;kuchni albo
        na grillu, a&nbsp;potem balia pod gwiazdami. Telefon można odłożyć już teraz.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Balia kosztuje 250&nbsp;zł za cały pobyt. Zamówcie ją przy rezerwacji, a&nbsp;będzie gorąca,
        zanim przyjedziecie.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Sobota: Supraśl i&nbsp;Puszcza Knyszyńska
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Śniadanie o&nbsp;9:00 (albo o&nbsp;11:00, nikt nie patrzy). Około 10:30 Supraśl: monaster
        i&nbsp;Muzeum Ikon (monaster jest zamknięty w&nbsp;poniedziałki, więc sobota to dobry
        wybór). O&nbsp;13:00 obiad, czyli babka ziemniaczana albo kartacze, po których dieta poczeka
        do poniedziałku (gdzie najlepsze, piszemy w&nbsp;tekście{' '}
        <Link
          to="/blog/przewodnik-kulinarny-suprasl"
          className="text-primary underline hover:text-primary/80"
        >
          gdzie zjeść w&nbsp;Supraślu
        </Link>
        ). Po południu leśny szlak, rower albo, w&nbsp;sezonie, kajaki na rzece Supraśl. Wieczorem
        ognisko w&nbsp;ogrodzie i&nbsp;kiełbaski.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Więcej podpowiedzi znajdziecie w&nbsp;przewodniku po{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcjach Supraśla
        </Link>
        . Nie macie siły na plan? Leżak na tarasie też jest planem.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Niedziela: śniadanie do południa</h2>
      <p className="text-muted-foreground leading-relaxed">
        Długie śniadanie, ostatni spacer po lesie i&nbsp;pakowanie, którego nikt nie lubi. Jeśli
        wracacie przez Białystok, zajedźcie na giełdę przy ul. Andersa 40 po babkę, sękacz, miód
        i&nbsp;sery korycińskie na wynos. W&nbsp;drodze powrotnej możecie zajrzeć do Arboretum
        w&nbsp;Kopnej Górze albo pojechać dalej, do tatarskich Kruszynian.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Weekend na Podlasiu: 5&nbsp;pomysłów na niedzielną wycieczkę
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Supraśl to dobra baza na cały region. Jeśli w&nbsp;niedzielę macie jeszcze energię,
        wybierzcie jedną trasę i&nbsp;połączcie ją z&nbsp;powrotem do domu:
      </p>
      <ul className="text-muted-foreground space-y-2">
        <li>
          <strong>Białystok (30–40&nbsp;min):</strong> Pałac Branickich z&nbsp;ogrodami, Rynek
          Kościuszki i&nbsp;drewniane Bojary. Pełny plan:{' '}
          <Link
            to="/blog/bialystok-i-okolice-co-zobaczyc"
            className="text-primary underline hover:text-primary/80"
          >
            co warto zobaczyć w&nbsp;Białymstoku i&nbsp;okolicach
          </Link>
          .
        </li>
        <li>
          <strong>Góra Świętej Anny (kilkanaście minut):</strong> leśny spacer do wieży widokowej
          koło Kołodna z&nbsp;panoramą puszczy i&nbsp;doliny Płoski. Idealne na zachód słońca.{' '}
          <Link
            to="/blog/romantyczny-weekend-podlasie"
            className="text-primary underline hover:text-primary/80"
          >
            Więcej romantycznych miejsc
          </Link>
          .
        </li>
        <li>
          <strong>Tykocin i&nbsp;Waniewo (ok. 1&nbsp;h):</strong> rynek, Wielka Synagoga
          i&nbsp;zamek nad Narwią, a&nbsp;potem pływające kładki w&nbsp;Narwiańskim Parku Narodowym.
        </li>
        <li>
          <strong>Kruszyniany (ok. 1&nbsp;h):</strong> drewniany meczet i&nbsp;tatarski obiad.{' '}
          <Link
            to="/blog/kruszyniany-tatarska-wies"
            className="text-primary underline hover:text-primary/80"
          >
            Przewodnik po Kruszynianach
          </Link>
          .
        </li>
        <li>
          <strong>Kraina Otwartych Okiennic (ok. 1&nbsp;h):</strong> kolorowe wsie Trześcianka, Soce
          i&nbsp;Puchły.{' '}
          <Link
            to="/blog/kraina-otwartych-okiennic"
            className="text-primary underline hover:text-primary/80"
          >
            Trasa krok po kroku
          </Link>
          .
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Co spakować na weekend w&nbsp;lesie</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Kalosze albo buty za kostkę, bo puszcza lubi błoto.</li>
        <li>Strój kąpielowy do balii, również zimą.</li>
        <li>Środek na kleszcze i&nbsp;komary od wiosny do jesieni.</li>
        <li>Latarkę czołową na wieczorny spacer i&nbsp;oglądanie gwiazd.</li>
        <li>
          Pościel, ręczniki i&nbsp;drewno do kominka już czekają, więc bagażnik zostaje na sękacz.
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Weekend we dwoje czy z&nbsp;ekipą?</h2>
      <p className="text-muted-foreground leading-relaxed">
        We dwoje: długie śniadanie, spacer, kominek i&nbsp;balia, w&nbsp;której nikt Wam nie
        przeszkodzi. Pomysły znajdziecie w&nbsp;tekście{' '}
        <Link
          to="/blog/romantyczny-weekend-podlasie"
          className="text-primary underline hover:text-primary/80"
        >
          romantyczne miejsca na Podlasiu
        </Link>
        . Z&nbsp;ekipą: cały dom, ogród, ognisko i&nbsp;miejsce dla maksymalnie 8&nbsp;osób.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Pies jedzie gratis. Wszystko o&nbsp;balii znajdziecie na stronie{' '}
        <Link
          to="/domek-z-jacuzzi-podlasie"
          className="text-primary underline hover:text-primary/80"
        >
          domek z&nbsp;balią na Podlasiu
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Weekend o&nbsp;każdej porze roku</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Jesienią: kolorowy las, grzybobranie i&nbsp;długie wieczory przy ogniu.</li>
        <li>Zimą: śnieg, kominek i&nbsp;para nad balią.</li>
        <li>Wiosną: las się budzi, a&nbsp;ptaki budzą Was. Bardzo wcześnie.</li>
        <li>Latem: kajaki, taras i&nbsp;klimatyzacja, kiedy przyjdą upały.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Praktyczne informacje</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>
          Cena od {MIN_NIGHTLY_RATE} zł za noc; w&nbsp;piątki i&nbsp;soboty dopłata wynosi{' '}
          {WEEKEND_SURCHARGE} zł za noc.
        </li>
        <li>
          Minimum {MIN_NIGHTS} noce, a&nbsp;w&nbsp;wakacje{' '}
          {Math.max(...SEASONS.map((season) => season.minNights))}.
        </li>
        <li>
          Adres: Konne 109/1, 16-030 Supraśl; dojazd z&nbsp;Białegostoku trwa około
          30–40&nbsp;minut.
        </li>
        <li>
          Więcej informacji:{' '}
          <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
            noclegi w&nbsp;Supraślu
          </Link>
          .
        </li>
      </ul>

      <section aria-labelledby="weekend-faq">
        <h2 id="weekend-faq" className="section-title !text-2xl md:!text-3xl">
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

export default WeekendSuprasl;
