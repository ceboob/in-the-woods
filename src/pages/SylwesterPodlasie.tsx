import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import winterCabin from '@/assets/winter-cabin-real.webp';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MAX_GUESTS, MIN_NIGHTLY_RATE } from '@/lib/pricing';

const faqs = [
  {
    question: 'Czy domek jest jeszcze wolny na sylwestra?',
    answer:
      'Sylwester znika z kalendarza jako pierwszy. Zadzwońcie albo napiszcie do Macieja, a odpowie od razu, czy dom jest jeszcze wolny. Pytanie nic nie kosztuje i niczego nie rezerwuje.',
  },
  {
    question: 'Ile kosztuje sylwester w domku w lesie?',
    answer: `Ceny zaczynają się od ${MIN_NIGHTLY_RATE} zł za noc za cały dom, nie za osobę. Dokładną kwotę na sylwestra poda Maciej, bo zależy od liczby gości i liczby nocy. Balia z hydromasażem to ${GARDEN_TUB_PRICE} zł za cały pobyt.`,
  },
  {
    question: 'Ile osób zmieści się na sylwestra?',
    answer: `Nocować może maksymalnie ${MAX_GUESTS} osób: dwie sypialnie na piętrze i dodatkowe miejsce do spania w salonie. To idealna liczba na sylwestra w gronie najbliższych, bez obcych przy stole.`,
  },
  {
    question: 'Czy balia działa zimą?',
    answer:
      'Tak, i zimą smakuje najlepiej: para, śnieg i gwiazdy. Zamówcie ją przy rezerwacji. W siarczysty mróz Maciej powie Wam wprost, czy da się ją bezpiecznie nagrzać.',
  },
  {
    question: 'Czy można przyjechać z psem na sylwestra?',
    answer:
      'Tak, za darmo. W lesie jest dużo ciszej niż w mieście, więc psy, które boją się huku fajerwerków, zwykle przeżywają tu sylwestra dużo spokojniej.',
  },
  {
    question: 'Jak daleko jest z Białegostoku?',
    answer:
      'Zwykle 30–40 minut samochodem. Adres: Konne 109/1, 16-030 Supraśl. Zimą, przy śniegu, dajcie sobie trochę zapasu czasu.',
  },
];

const SylwesterPodlasie = () => (
  <SEOPageLayout
    title="Sylwester na Podlasiu – domek z kominkiem w lesie | In The Woods"
    description="Zamiast sali i kolejki do szatni: cały dom z kominkiem, balia pod gwiazdami i cisza o północy. Do 8 osób, 30–40 min od Białegostoku."
    breadcrumbName="Sylwester na Podlasiu"
    ogImage="https://www.suprasl.online/images/exterior-main.webp"
    jsonLd={createLandingPageSchemas('/sylwester-podlasie', faqs)}
    showRelatedPages={false}
    ctaTitle="Zapytajcie o sylwestra w lesie"
    ctaDescription="Napiszcie, ile Was będzie i na ile nocy. Maciej odpisze, czy dom jest wolny i ile to kosztuje."
    ctaFormLabel="Zapytaj o sylwestra"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Sylwester na Podlasiu: domek z kominkiem w środku lasu
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Bez sali weselnej udającej bal, bez kolejki do szatni i bez taksówki za trzysta złotych o
        trzeciej w nocy. Cały drewniany dom z bali tylko dla Was, kominek, balia pod gwiazdami
        i cisza, w której słychać, jak spada śnieg. Sylwester w lesie, 10 minut od Supraśla i 30–40
        minut od Białegostoku.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={winterCabin}
          alt="Drewniany dom In The Woods zimą, sylwester w lesie na Podlasiu"
          width={800}
          height={600}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Dlaczego sylwester w lesie</h2>
      <ul className="text-muted-foreground space-y-3">
        <li>
          🏡 <strong>Cały dom tylko dla Was.</strong> Maksymalnie {MAX_GUESTS} osób i ani jednej obcej.
          Nikt nie zajmie Wam stolika ani parkietu.
        </li>
        <li>
          🔥 <strong>Kominek zamiast klimatyzowanej sali.</strong> Ogień trzaska, ktoś gra na gitarze,
          ktoś inny udaje, że nie śpiewa.
        </li>
        <li>
          🛁 <strong>Balia o północy.</strong> Szampan w gorącej wodzie, para nad głową i zero
          sąsiadów. Kosztuje {GARDEN_TUB_PRICE} zł za cały pobyt.
        </li>
        <li>
          🌲 <strong>Noworoczny spacer zaraz za płotem.</strong> Pierwszego stycznia las jest pusty
          i cichy. Lepszego lekarstwa na kaca nie wymyślono.
        </li>
        <li>
          🐕 <strong>Pies jedzie gratis.</strong> W lesie jest dużo ciszej niż w mieście, więc psy
          bojące się huku zwykle przeżywają tu sylwestra spokojniej.
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Plan na sylwestra w In The Woods</h2>
      <p className="text-muted-foreground leading-relaxed">
        <strong>31 grudnia po południu</strong> przyjazd, rozpakowanie zapasów i kominek. Kiedy
        zrobi się ciemno, wspólne gotowanie w pełnej kuchni albo grill na tarasie, jeśli macie
        fantazję. <strong>Przed północą</strong> balia, a o północy toast pod gwiazdami.
        Fajerwerki zostawcie miastu: tu macie ognisko i niebo, na którym naprawdę widać gwiazdy.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>1 stycznia</strong> śniadanie około południa, spacer po zaśnieżonym lesie i obiad.
        Na drugą noc zostańcie koniecznie: sylwester w lesie dopiero wtedy pokazuje, co potrafi.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Nie tylko sylwester: zima w puszczy</h2>
      <p className="text-muted-foreground leading-relaxed">
        Ferie zimowe, walentynki albo zwykły zimowy weekend też wyglądają tu świetnie. Narty biegowe
        i spacery po śniegu w dzień, kominek i balia wieczorem. Więcej o zimowym pobycie przeczytacie
        we wpisie{' '}
        <Link to="/blog/suprasl-zima" className="text-primary underline hover:text-primary/80">
          Supraśl zimą
        </Link>
        , a o samej balii na stronie{' '}
        <Link
          to="/domek-z-jacuzzi-podlasie"
          className="text-primary underline hover:text-primary/80"
        >
          domek z balią na Podlasiu
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Sylwester rezerwuje się najwcześniej ze wszystkich terminów. Nie czekajcie do grudnia.</li>
        <li>Minimalny pobyt to zwykle 2 noce.</li>
        <li>Balię zamawiacie przy rezerwacji: {GARDEN_TUB_PRICE} zł za cały pobyt.</li>
        <li>Ciszę nocną i gości z zewnątrz ustalcie z Maciejem przed przyjazdem.</li>
        <li>
          Szukacie czegoś więcej o domu? Zajrzyjcie na stronę o{' '}
          <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
            noclegach w Supraślu
          </Link>
          .
        </li>
      </ul>

      <section aria-labelledby="sylwester-faq">
        <h2 id="sylwester-faq" className="section-title !text-2xl md:!text-3xl">
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

export default SylwesterPodlasie;
