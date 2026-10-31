import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import firepitNight from '@/assets/gallery-ognisko-nocne-thumb.webp';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Czy można zorganizować wieczór panieński w domku?',
    answer:
      'Można, i to jest jedno z lepszych miejsc na panieński pod Białymstokiem. Napiszcie Maciejowi, ile Was będzie, czy wpadną goście z zewnątrz i jak głośno planujecie świętować. Wszystko ustalicie przed rezerwacją, więc na miejscu nie będzie niespodzianek.',
  },
  {
    question: 'Ile osób zmieści się w domku na wieczór panieński?',
    answer:
      'Nocować może maksymalnie 8 osób. Macie dwie sypialnie, salon z kominkiem, kuchnię, łazienkę i ogród. Jeśli ktoś ma wpaść tylko na wieczór, dogadajcie to z Maciejem przed rezerwacją.',
  },
  {
    question: 'Ile kosztuje wieczór panieński w In The Woods?',
    answer:
      'Od 399 zł za noc za cały dom, czyli w 8 osób wychodzi mniej, niż myślicie. W piątki i soboty dochodzi dopłata weekendowa. Balia to 250 zł za cały pobyt i warto ją wziąć, bo panieński bez balii to jak tort bez świeczek.',
  },
  {
    question: 'Jakie zasady obowiązują podczas wieczoru panieńskiego?',
    answer:
      'Ciszę nocną, gości z zewnątrz i dekoracje ustalacie z Maciejem przed rezerwacją. Napiszcie wprost, co planujecie, a on odpowie równie wprost, co da się zrobić.',
  },
  {
    question: 'Jak dojechać na panieński z Białegostoku?',
    answer:
      'Z Białegostoku jedziecie 30–40 minut. Adres: Konne 109/1, 16-030 Supraśl. Parking jest przy domu.',
  },
];

const WieczorPanienskiSuprasl = () => (
  <SEOPageLayout
    title="Wieczór panieński na Podlasiu – dom z balią | In The Woods"
    description="Balia, prosecco, ognisko i zero sąsiadów do uciszania. Cały dom dla ekipy do 8 osób, 30–40 min od Białegostoku."
    breadcrumbName="Wieczór panieński Supraśl"
    ogImage="https://www.suprasl.online/images/kitchen-dining.jpg"
    jsonLd={createLandingPageSchemas('/wieczor-panienski-suprasl', faqs)}
    showRelatedPages={false}
    ctaTitle="Zarezerwujcie dom na panieński"
    ctaDescription="Napiszcie, jak wyobrażacie sobie ten wieczór. Maciej odpisze z wolnymi terminami i ceną."
    ctaFormLabel="Zapytaj o termin"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Wieczór panieński w lesie koło Supraśla. Co się dzieje w puszczy, zostaje w puszczy
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Panieński bez klubu, bez bramkarza i bez sąsiadów, którzy dzwonią na policję o pierwszej. Cały
        dom z bali tylko dla Was, gorąca balia pod gwiazdami, ognisko i kominek. Najbliżsi sąsiedzi to
        dziki, a one nie składają skarg. Do Białegostoku 30–40 minut.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={firepitNight}
          alt="Ognisko nocą w ogrodzie domu w lesie, wieczór panieński na Podlasiu"
          width={400}
          height={267}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Cały domek tylko dla Was</h2>
      <p className="text-muted-foreground leading-relaxed">
        Drewniany dom z bali dla maksymalnie 8 osób, wynajmowany w całości jednej ekipie. Dwie
        sypialnie, salon z kominkiem, kuchnia, ogród, taras, altana i miejsce na ognisko. Z Białegostoku
        jedziecie 30–40 minut, czyli dokładnie tyle, ile trwa jedna playlista na rozgrzewkę.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Pomysły na panieński w lesie
      </h2>
      <ul className="text-muted-foreground space-y-3">
        <li>
          🛁 Balia z hydromasażem pod gwiazdami, prosecco w ręku i zero paparazzi. 250 zł za cały pobyt.
        </li>
        <li>🔥 Ognisko, kiełbaski i toasty za przyszłą pannę młodą. Dużo toastów.</li>
        <li>🎲 Planszówki przy kominku i rozmowy, których nikt potem nie powtórzy.</li>
        <li>📷 Sesja zdjęciowa w lesie o złotej godzinie. Instagram sam się nie zrobi.</li>
        <li>🛶 W sezonie spływ kajakowy rzeką Supraśl, żeby następnego dnia przewietrzyć głowy.</li>
        <li>🍲 Wspólne gotowanie w pełnej kuchni. Albo pizza na wynos i udawanie, że to Wy.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Przykładowy plan wieczoru panieńskiego</h2>
      <p className="text-muted-foreground leading-relaxed">
        Po południu przyjazd i rozpakowywanie dekoracji, o których panna młoda nie miała wiedzieć.
        Wieczorem balia albo ognisko, potem gry i rozmowy przy kominku, aż ktoś zaśnie na kanapie.
        Rano wspólne śniadanie, kawa na tarasie i krótki spacer do lasu, żeby przewietrzyć głowy.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>
          Liczbę osób, ciszę nocną i gości z zewnątrz ustalcie z Maciejem przed rezerwacją.
        </li>
        <li>Balia kosztuje 250 zł za cały pobyt. Zamawiacie ją przy rezerwacji.</li>
        <li>Pies przyjeżdża gratis, jeśli też jest druhną.</li>
        <li>Formularz to tylko pytanie o termin. Rezerwację potwierdzimy osobno, mailem.</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Więcej o balii znajdziecie na stronie{' '}
        <Link to="/domek-z-jacuzzi-podlasie" className="text-primary underline hover:text-primary/80">
          domek z balią na Podlasiu
        </Link>
        , plan na dwa dni na stronie o{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          weekendzie w Supraślu
        </Link>
        , a pomysły na sobotę w{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          przewodniku po atrakcjach Supraśla
        </Link>
        .
      </p>

      <section aria-labelledby="hen-faq">
        <h2 id="hen-faq" className="section-title !text-2xl md:!text-3xl">Najczęstsze pytania</h2>
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

export default WieczorPanienskiSuprasl;
