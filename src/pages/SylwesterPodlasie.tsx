import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import winterCabin from '@/assets/winter-cabin-real.webp';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MAX_GUESTS, MIN_NIGHTLY_RATE } from '@/lib/pricing';

const faqs = [
  {
    question: 'Czy domek jest jeszcze wolny na sylwestra?',
    answer:
      'Sylwester znika z\u00a0kalendarza jako pierwszy. Zadzwońcie albo napiszcie do Macieja, a\u00a0odpowie od razu, czy dom jest jeszcze wolny. Pytanie nic nie kosztuje i\u00a0niczego nie rezerwuje.',
  },
  {
    question: 'Ile kosztuje sylwester w\u00a0domku w\u00a0lesie?',
    answer: `Ceny zaczynają się od ${MIN_NIGHTLY_RATE} zł za noc za cały dom, nie za osobę. Dokładną kwotę na sylwestra poda Maciej, bo zależy od liczby gości i\u00a0liczby nocy. Balia z\u00a0hydromasażem to ${GARDEN_TUB_PRICE} zł za cały pobyt.`,
  },
  {
    question: 'Ile osób zmieści się na sylwestra?',
    answer: `Nocować może maksymalnie ${MAX_GUESTS} osób: dwie sypialnie na piętrze i\u00a0dodatkowe miejsce do spania w\u00a0salonie. To w\u00a0sam raz na sylwestra w\u00a0gronie najbliższych, bez obcych przy stole.`,
  },
  {
    question: 'Czy balia działa zimą?',
    answer:
      'Tak, i\u00a0zimą smakuje najlepiej: para, śnieg i\u00a0gwiazdy. Zamówcie ją przy rezerwacji. W\u00a0siarczysty mróz Maciej powie Wam wprost, czy da się ją bezpiecznie nagrzać.',
  },
  {
    question: 'Czy można przyjechać z\u00a0psem na sylwestra?',
    answer:
      'Tak, za darmo. W\u00a0lesie jest dużo ciszej niż w\u00a0mieście, więc psy, które boją się huku fajerwerków, zwykle przeżywają tu sylwestra dużo spokojniej.',
  },
  {
    question: 'Jak daleko jest z\u00a0Białegostoku?',
    answer:
      'Zwykle 30–40\u00a0minut samochodem. Adres: Konne 109/1, 16-030 Supraśl. Zimą, przy śniegu, dajcie sobie trochę zapasu czasu.',
  },
];

const SylwesterPodlasie = () => (
  <SEOPageLayout
    title="Sylwester na Podlasiu – domek w lesie | In The Woods"
    description="Zamiast sali i&nbsp;kolejki do szatni: cały dom z&nbsp;kominkiem, balia pod gwiazdami i&nbsp;cisza o&nbsp;północy. Do 8&nbsp;osób, 30–40&nbsp;min od Białegostoku."
    breadcrumbName="Sylwester na Podlasiu"
    ogImage="https://www.suprasl.online/images/exterior-main.webp"
    jsonLd={createLandingPageSchemas('/sylwester-podlasie', faqs)}
    showRelatedPages={false}
    ctaTitle="Zapytajcie o&nbsp;sylwestra w&nbsp;lesie"
    ctaDescription="Napiszcie, ile Was będzie i&nbsp;na ile nocy. Maciej odpisze, czy dom jest wolny i&nbsp;ile to kosztuje."
    ctaFormLabel="Zapytaj o&nbsp;sylwestra"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Sylwester na Podlasiu: domek z&nbsp;kominkiem w&nbsp;środku lasu
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Bez sali weselnej udającej bal, bez kolejki do szatni i&nbsp;bez taksówki za trzysta złotych
        o&nbsp;trzeciej w&nbsp;nocy. Cały drewniany dom z&nbsp;bali tylko dla Was, kominek, balia
        pod gwiazdami i&nbsp;cisza, w&nbsp;której słychać, jak spada śnieg. Sylwester w&nbsp;lesie,
        10&nbsp;minut od Supraśla i&nbsp;30–40 minut od Białegostoku.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={winterCabin}
          alt="Drewniany dom In The Woods zimą, sylwester w&nbsp;lesie na Podlasiu"
          width={800}
          height={600}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Dlaczego sylwester w&nbsp;lesie</h2>
      <ul className="text-muted-foreground space-y-3">
        <li>
          🏡 <strong>Cały dom tylko dla Was.</strong> Maksymalnie {MAX_GUESTS} osób i&nbsp;ani
          jednej obcej. Nikt nie zajmie Wam stolika ani parkietu.
        </li>
        <li>
          🔥 <strong>Kominek zamiast klimatyzowanej sali.</strong> Ogień trzaska, ktoś gra na
          gitarze, ktoś inny udaje, że nie śpiewa.
        </li>
        <li>
          🛁 <strong>Balia o&nbsp;północy.</strong> Szampan w&nbsp;gorącej wodzie, para nad głową
          i&nbsp;zero sąsiadów. Kosztuje {GARDEN_TUB_PRICE} zł za cały pobyt.
        </li>
        <li>
          🌲 <strong>Noworoczny spacer zaraz za płotem.</strong> Pierwszego stycznia las jest pusty
          i&nbsp;cichy. Lepszego lekarstwa na kaca nie wymyślono.
        </li>
        <li>
          🐕 <strong>Pies jedzie gratis.</strong> W&nbsp;lesie jest dużo ciszej niż w&nbsp;mieście,
          więc psy bojące się huku zwykle przeżywają tu sylwestra spokojniej.
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Plan na sylwestra w&nbsp;In The Woods
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        <strong>31 grudnia po południu</strong> przyjazd, rozpakowanie zapasów i&nbsp;kominek. Kiedy
        zrobi się ciemno, wspólne gotowanie w&nbsp;pełnej kuchni albo grill na tarasie, jeśli macie
        fantazję. <strong>Przed północą</strong> balia, a&nbsp;o&nbsp;północy toast pod gwiazdami.
        Fajerwerki zostawcie miastu: tu macie ognisko i&nbsp;niebo, na którym naprawdę widać
        gwiazdy.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>1 stycznia</strong> śniadanie około południa, spacer po zaśnieżonym lesie
        i&nbsp;obiad. Na drugą noc zostańcie koniecznie: sylwester w&nbsp;lesie dopiero wtedy
        pokazuje, co potrafi.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Nie tylko sylwester: zima w&nbsp;puszczy
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Ferie zimowe, walentynki albo zwykły zimowy weekend też wyglądają tu świetnie. Narty biegowe
        i&nbsp;spacery po śniegu w&nbsp;dzień, kominek i&nbsp;balia wieczorem. Więcej o&nbsp;zimowym
        pobycie przeczytacie we wpisie{' '}
        <Link to="/blog/suprasl-zima" className="text-primary underline hover:text-primary/80">
          Supraśl zimą
        </Link>
        , a&nbsp;o&nbsp;samej balii na stronie{' '}
        <Link
          to="/domek-z-jacuzzi-podlasie"
          className="text-primary underline hover:text-primary/80"
        >
          domek z&nbsp;balią na Podlasiu
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>
          Sylwester rezerwuje się najwcześniej ze wszystkich terminów. Nie czekajcie do grudnia.
        </li>
        <li>Minimalny pobyt to zwykle 2&nbsp;noce.</li>
        <li>Balię zamawiacie przy rezerwacji: {GARDEN_TUB_PRICE} zł za cały pobyt.</li>
        <li>Ciszę nocną i&nbsp;gości z&nbsp;zewnątrz ustalcie z&nbsp;Maciejem przed przyjazdem.</li>
        <li>
          Szukacie czegoś więcej o&nbsp;domu? Zajrzyjcie na stronę o{' '}
          <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
            noclegach w&nbsp;Supraślu
          </Link>
          .
        </li>
      </ul>

      <section aria-labelledby="sylwester-faq">
        <h2 id="sylwester-faq" className="section-title !text-2xl md:!text-3xl">
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

export default SylwesterPodlasie;
