import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import jacuzziNight from '@/assets/jacuzzi-night.webp';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Ile kosztuje balia ogrodowa?',
    answer:
      '250\u00a0zł za cały pobyt, nie za noc i\u00a0nie za godzinę. To dodatek, który nie jest wliczony w\u00a0cenę noclegu. Zaznaczcie go przy rezerwacji, a\u00a0nagrzejemy balię na Wasz przyjazd i\u00a0powiemy, jak z\u00a0niej korzystać.',
  },
  {
    question: 'Czy balia działa zimą?',
    answer:
      'Tak, i\u00a0zimą smakuje najlepiej: para nad wodą, śnieg dookoła i\u00a0gwiazdy. W\u00a0siarczysty mróz Maciej powie Wam wprost, czy da się ją bezpiecznie nagrzać. Po kąpieli czeka kominek.',
  },
  {
    question: 'Czy jacuzzi jest w\u00a0domu?',
    answer:
      'Nie. Balia z\u00a0hydromasażem, czyli nasze jacuzzi, stoi w\u00a0ogrodzie, pod sosnami. W\u00a0środku macie salon z\u00a0kominkiem, dwie sypialnie, kuchnię i\u00a0łazienkę.',
  },
  {
    question: 'Czy to domek z\u00a0jacuzzi dla 8\u00a0osób?',
    answer:
      'Dom mieści maksymalnie 8\u00a0osób i\u00a0wynajmujecie go w\u00a0całości. Balia jest dla całej Waszej ekipy, a\u00a0ile osób zmieści się w\u00a0niej naraz, Maciej powie przy rezerwacji.',
  },
  {
    question: 'Ile trwa dojazd z\u00a0Białegostoku?',
    answer:
      'Zwykle 30–40\u00a0minut samochodem. Adres: Konne 109/1, 16-030 Supraśl, około 10\u00a0minut od centrum Supraśla.',
  },
];

const DomekZJacuzziPodlasie = () => (
  <SEOPageLayout
    title="Domek z balią i jacuzzi na Podlasiu | In The Woods"
    description="Gorąca balia z&nbsp;hydromasażem pod sosnami, latem i&nbsp;zimą. 250&nbsp;zł za cały pobyt, nie za godzinę. Cały dom dla Waszej ekipy do 8&nbsp;osób."
    breadcrumbName="Domek z&nbsp;jacuzzi Podlasie"
    ogImage="https://www.suprasl.online/images/jacuzzi-night.jpg"
    jsonLd={createLandingPageSchemas('/domek-z-jacuzzi-podlasie', faqs)}
    showRelatedPages={false}
    ctaTitle="Zarezerwujcie termin z&nbsp;balią"
    ctaDescription="Napiszcie albo zadzwońcie. Maciej odpisze z&nbsp;ceną i&nbsp;nagrzeje balię na Wasz przyjazd."
    ctaFormLabel="Zapytaj przez formularz"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Domek z&nbsp;balią (jacuzzi) na Podlasiu: gorąca woda pod sosnami
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Wieczór, gorąca woda, para nad balią i&nbsp;gwiazdy nad sosnami. Po dwudziestu minutach
        zapominacie, jak macie na imię. Potem szybki sprint w&nbsp;ręczniku do kominka. Tak wygląda
        nasz domek z&nbsp;jacuzzi na Podlasiu, a&nbsp;dokładniej: z&nbsp;balią z&nbsp;hydromasażem
        w&nbsp;ogrodzie.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={jacuzziNight}
          alt="Balia z&nbsp;hydromasażem nocą w&nbsp;ogrodzie domku w&nbsp;lesie na Podlasiu"
          width={1442}
          height={1920}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Balia pod gwiazdami: jak to działa</h2>
      <p className="text-muted-foreground leading-relaxed">
        Gorąca woda, zimne powietrze i&nbsp;szum sosen. Balia stoi w&nbsp;ogrodzie i&nbsp;jest tylko
        dla Was. Na Podlasiu mówi się na nią też „ruska bania”, a&nbsp;dzięki hydromasażowi działa
        jak jacuzzi.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Kosztuje 250&nbsp;zł za cały pobyt. Zaznaczcie ją w&nbsp;zapytaniu, a&nbsp;nagrzejemy ją na
        Wasz przyjazd i&nbsp;pokażemy, jak z&nbsp;niej korzystać.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Domek z&nbsp;balią i&nbsp;kominkiem: co jest w&nbsp;środku
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Drewniany dom z&nbsp;bali dla maksymalnie 8&nbsp;osób, wynajmowany w&nbsp;całości jednej
        ekipie. Na dole salon z&nbsp;kominkiem i&nbsp;kuchnia z&nbsp;tradycyjną płytą kaflową do
        gotowania.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Na górze dwie sypialnie z&nbsp;dużymi łóżkami i&nbsp;widokiem na las. Na zewnątrz ogród,
        taras, altana i&nbsp;miejsce na ognisko.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Balia zimą i&nbsp;latem</h2>
      <p className="text-muted-foreground leading-relaxed">
        Zimą: para, śnieg na czapce i&nbsp;woda tak gorąca, że zapominacie o&nbsp;mrozie. Latem
        balia po całym dniu na rowerze albo w&nbsp;kajaku, a&nbsp;w&nbsp;domu chłodzi klimatyzacja.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Najlepsza pora? Po zmroku, kiedy widać gwiazdy, a&nbsp;jedynym dźwiękiem jest szum drzew
        i&nbsp;bąbelki.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Domek z&nbsp;jacuzzi koło Białegostoku, w&nbsp;środku puszczy
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Adres: Konne 109/1, 16-030 Supraśl, około 10&nbsp;minut od centrum Supraśla.
        Z&nbsp;Białegostoku jedziecie 30–40&nbsp;minut, więc w&nbsp;piątek po pracy zdążycie jeszcze
        na wieczorną balię.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Po więcej inspiracji zajrzyjcie do przewodnika po{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcjach Supraśla
        </Link>
        . Sprawdźcie też{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegi w&nbsp;Supraślu
        </Link>{' '}
        i{' '}
        <Link to="/domek-suprasl" className="text-primary underline hover:text-primary/80">
          domek na wyłączność
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Balia kosztuje 250&nbsp;zł za cały pobyt. Zamawiacie ją przy rezerwacji.</li>
        <li>
          Jak z&nbsp;niej korzystać, pokaże Wam Maciej. Instrukcja jest też w&nbsp;informatorze.
        </li>
        <li>
          W&nbsp;siarczysty mróz albo burzę lepiej z&nbsp;niej nie korzystać. Zdrowy rozsądek
          wygrywa.
        </li>
        <li>Pies przyjeżdża gratis, ale do balii raczej nie wchodzi.</li>
        <li>Do tego Starlink, bezpłatny parking, ogród, taras i&nbsp;miejsce na ognisko.</li>
      </ul>

      <section aria-labelledby="jacuzzi-faq">
        <h2 id="jacuzzi-faq" className="section-title !text-2xl md:!text-3xl">
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

export default DomekZJacuzziPodlasie;
