import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import jacuzziNight from '@/assets/jacuzzi-night.webp';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Ile kosztuje balia ogrodowa?',
    answer:
      '250 zł za cały pobyt, nie za noc i nie za godzinę. To dodatek, który nie jest wliczony w cenę noclegu. Zaznaczcie go przy rezerwacji, a nagrzejemy balię na Wasz przyjazd i powiemy, jak z niej korzystać.',
  },
  {
    question: 'Czy balia działa zimą?',
    answer:
      'Tak, i zimą smakuje najlepiej: para nad wodą, śnieg dookoła i gwiazdy. W siarczysty mróz Maciej powie Wam wprost, czy da się ją bezpiecznie nagrzać. Po kąpieli czeka kominek.',
  },
  {
    question: 'Czy jacuzzi jest w domu?',
    answer:
      'Nie. Balia z hydromasażem, czyli nasze jacuzzi, stoi w ogrodzie, pod sosnami. W środku macie salon z kominkiem, dwie sypialnie, kuchnię i łazienkę.',
  },
  {
    question: 'Czy to domek z jacuzzi dla 8 osób?',
    answer:
      'Dom mieści maksymalnie 8 osób i wynajmujecie go w całości. Balia jest dla całej Waszej ekipy, a ile osób zmieści się w niej naraz, Maciej powie przy rezerwacji.',
  },
  {
    question: 'Ile trwa dojazd z Białegostoku?',
    answer:
      'Zwykle 30–40 minut samochodem. Adres: Konne 109/1, 16-030 Supraśl, około 10 minut od centrum Supraśla.',
  },
];

const DomekZJacuzziPodlasie = () => (
  <SEOPageLayout
    title="Domek z balią i jacuzzi na Podlasiu – pod Białymstokiem | In The Woods"
    description="Gorąca balia z hydromasażem pod sosnami, latem i zimą. 250 zł za cały pobyt, nie za godzinę. Cały dom dla Waszej ekipy do 8 osób."
    breadcrumbName="Domek z jacuzzi Podlasie"
    ogImage="https://www.suprasl.online/images/jacuzzi-night.jpg"
    jsonLd={createLandingPageSchemas('/domek-z-jacuzzi-podlasie', faqs)}
    showRelatedPages={false}
    ctaTitle="Zarezerwujcie termin z balią"
    ctaDescription="Napiszcie albo zadzwońcie. Maciej odpisze z ceną i nagrzeje balię na Wasz przyjazd."
    ctaFormLabel="Zapytaj przez formularz"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Domek z balią (jacuzzi) na Podlasiu: gorąca woda pod sosnami
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Wieczór, gorąca woda, para nad balią i gwiazdy nad sosnami. Po dwudziestu minutach zapominacie,
        jak macie na imię. Potem szybki sprint w ręczniku do kominka. Tak wygląda nasz domek z jacuzzi
        na Podlasiu, a dokładniej: z balią z hydromasażem w ogrodzie.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={jacuzziNight}
          alt="Balia z hydromasażem nocą w ogrodzie domku w lesie na Podlasiu"
          width={1442}
          height={1920}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Balia pod gwiazdami: jak to działa
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Gorąca woda, zimne powietrze i szum sosen. Balia stoi w ogrodzie i jest tylko dla Was. Na
        Podlasiu mówi się na nią też „ruska bania”, a dzięki hydromasażowi działa jak jacuzzi.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Kosztuje 250 zł za cały pobyt. Zaznaczcie ją w zapytaniu, a nagrzejemy ją na Wasz przyjazd
        i pokażemy, jak z niej korzystać.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Domek z balią i kominkiem: co jest w środku
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Drewniany dom z bali dla maksymalnie 8 osób, wynajmowany w całości jednej ekipie. Na dole salon
        z kominkiem i kuchnia z tradycyjną kuchnią kaflową.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Na górze dwie sypialnie z dużymi łóżkami i widokiem na las. Na zewnątrz ogród, taras, altana
        i miejsce na ognisko.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Balia zimą i latem</h2>
      <p className="text-muted-foreground leading-relaxed">
        Zimą: para, śnieg na czapce i woda tak gorąca, że zapominacie o mrozie. Latem balia po
        całym dniu na rowerze albo w kajaku, a w domu chłodzi klimatyzacja.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Najlepsza pora? Po zmroku, kiedy widać gwiazdy, a jedynym dźwiękiem jest szum drzew i bąbelki.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Domek z jacuzzi koło Białegostoku, w środku puszczy
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Adres: Konne 109/1, 16-030 Supraśl, około 10 minut od centrum Supraśla. Z Białegostoku
        jedziecie 30–40 minut, więc w piątek po pracy zdążycie jeszcze na wieczorną balię.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Po więcej inspiracji zajrzyjcie do przewodnika po{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcjach Supraśla
        </Link>
        . Sprawdźcie też{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegi w Supraślu
        </Link>{' '}
        i{' '}
        <Link to="/domek-suprasl" className="text-primary underline hover:text-primary/80">
          domek na wyłączność
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Balia kosztuje 250 zł za cały pobyt. Zamawiacie ją przy rezerwacji.</li>
        <li>Jak z niej korzystać, pokaże Wam Maciej. Instrukcja jest też w informatorze.</li>
        <li>W siarczysty mróz albo burzę lepiej z niej nie korzystać. Zdrowy rozsądek wygrywa.</li>
        <li>Pies przyjeżdża gratis, ale do balii raczej nie wchodzi.</li>
        <li>Do tego Starlink, bezpłatny parking, ogród, taras i miejsce na ognisko.</li>
      </ul>

      <section aria-labelledby="jacuzzi-faq">
        <h2 id="jacuzzi-faq" className="section-title !text-2xl md:!text-3xl">Najczęstsze pytania</h2>
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

export default DomekZJacuzziPodlasie;
