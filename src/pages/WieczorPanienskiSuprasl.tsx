import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import firepitNight from '@/assets/gallery-ognisko-nocne-thumb.webp';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Czy można zorganizować wieczór panieński w\u00a0domku?',
    answer:
      'Można, i\u00a0to jest jedno z\u00a0lepszych miejsc na panieński pod Białymstokiem. Napiszcie Maciejowi, ile Was będzie, czy wpadną goście z\u00a0zewnątrz i\u00a0jak głośno planujecie świętować. Wszystko ustalicie przed rezerwacją, więc na miejscu nie będzie niespodzianek.',
  },
  {
    question: 'Ile osób zmieści się w\u00a0domku na wieczór panieński?',
    answer:
      'Nocować może maksymalnie 8\u00a0osób. Macie dwie sypialnie, salon z\u00a0kominkiem, kuchnię, łazienkę i\u00a0ogród. Jeśli ktoś ma wpaść tylko na wieczór, dogadajcie to z\u00a0Maciejem przed rezerwacją.',
  },
  {
    question: 'Ile kosztuje wieczór panieński w\u00a0In The Woods?',
    answer:
      'Od 399\u00a0zł za noc za cały dom, czyli w\u00a08\u00a0osób wychodzi mniej, niż myślicie. W\u00a0piątki i\u00a0soboty dochodzi dopłata weekendowa. Balia to 250\u00a0zł za cały pobyt i\u00a0warto ją wziąć, bo panieński bez balii to jak tort bez świeczek.',
  },
  {
    question: 'Jakie zasady obowiązują podczas wieczoru panieńskiego?',
    answer:
      'Ciszę nocną, gości z\u00a0zewnątrz i\u00a0dekoracje ustalacie z\u00a0Maciejem przed rezerwacją. Napiszcie wprost, co planujecie, a\u00a0on odpowie równie wprost, co da się zrobić.',
  },
  {
    question: 'Jak dojechać na panieński z\u00a0Białegostoku?',
    answer:
      'Z\u00a0Białegostoku jedziecie 30–40\u00a0minut. Adres: Konne 109/1, 16-030 Supraśl. Parking jest przy domu.',
  },
];

const WieczorPanienskiSuprasl = () => (
  <SEOPageLayout
    title="Wieczór panieński na Podlasiu – dom z&nbsp;balią | In The Woods"
    description="Balia, prosecco, ognisko i&nbsp;zero sąsiadów do uciszania. Cały dom dla ekipy do 8&nbsp;osób, 30–40&nbsp;min od Białegostoku."
    breadcrumbName="Wieczór panieński Supraśl"
    ogImage="https://www.suprasl.online/images/kitchen-dining.jpg"
    jsonLd={createLandingPageSchemas('/wieczor-panienski-suprasl', faqs)}
    showRelatedPages={false}
    ctaTitle="Zarezerwujcie dom na panieński"
    ctaDescription="Napiszcie, jak wyobrażacie sobie ten wieczór. Maciej odpisze z&nbsp;wolnymi terminami i&nbsp;ceną."
    ctaFormLabel="Zapytaj o&nbsp;termin"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Wieczór panieński w&nbsp;lesie koło Supraśla. Co się dzieje w&nbsp;puszczy, zostaje
        w&nbsp;puszczy
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Panieński bez klubu, bez bramkarza i&nbsp;bez sąsiadów, którzy dzwonią na policję
        o&nbsp;pierwszej. Cały dom z&nbsp;bali tylko dla Was, gorąca balia pod gwiazdami, ognisko
        i&nbsp;kominek. Najbliżsi sąsiedzi to dziki, a&nbsp;one nie składają skarg. Do Białegostoku
        30–40&nbsp;minut.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={firepitNight}
          alt="Ognisko nocą w&nbsp;ogrodzie domu w&nbsp;lesie, wieczór panieński na Podlasiu"
          width={400}
          height={267}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Cały domek tylko dla Was</h2>
      <p className="text-muted-foreground leading-relaxed">
        Drewniany dom z&nbsp;bali dla maksymalnie 8&nbsp;osób, wynajmowany w&nbsp;całości jednej
        ekipie. Dwie sypialnie, salon z&nbsp;kominkiem, kuchnia, ogród, taras, altana i&nbsp;miejsce
        na ognisko. Z&nbsp;Białegostoku jedziecie 30–40&nbsp;minut, czyli dokładnie tyle, ile trwa
        jedna playlista na rozgrzewkę.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Pomysły na panieński w&nbsp;lesie</h2>
      <ul className="text-muted-foreground space-y-3">
        <li>
          🛁 Balia z&nbsp;hydromasażem pod gwiazdami, prosecco w&nbsp;ręku i&nbsp;zero paparazzi.
          250&nbsp;zł za cały pobyt.
        </li>
        <li>🔥 Ognisko, kiełbaski i&nbsp;toasty za przyszłą pannę młodą. Dużo toastów.</li>
        <li>🎲 Planszówki przy kominku i&nbsp;rozmowy, których nikt potem nie powtórzy.</li>
        <li>
          📷 Sesja zdjęciowa w&nbsp;lesie o&nbsp;złotej godzinie. Instagram sam się nie zrobi.
        </li>
        <li>
          🛶 W&nbsp;sezonie spływ kajakowy rzeką Supraśl, żeby następnego dnia przewietrzyć głowy.
        </li>
        <li>
          🍲 Wspólne gotowanie w&nbsp;pełnej kuchni. Albo pizza na wynos i&nbsp;udawanie, że to Wy.
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Przykładowy plan wieczoru panieńskiego
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Po południu przyjazd i&nbsp;rozpakowywanie dekoracji, o&nbsp;których panna młoda nie miała
        wiedzieć. Wieczorem balia albo ognisko, potem gry i&nbsp;rozmowy przy kominku, aż ktoś
        zaśnie na kanapie. Rano wspólne śniadanie, kawa na tarasie i&nbsp;krótki spacer do lasu,
        żeby przewietrzyć głowy.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>
          Liczbę osób, ciszę nocną i&nbsp;gości z&nbsp;zewnątrz ustalcie z&nbsp;Maciejem przed
          rezerwacją.
        </li>
        <li>Balia kosztuje 250&nbsp;zł za cały pobyt. Zamawiacie ją przy rezerwacji.</li>
        <li>Pies przyjeżdża gratis, jeśli też jest druhną.</li>
        <li>Formularz to tylko pytanie o&nbsp;termin. Rezerwację potwierdzimy osobno, mailem.</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Więcej o&nbsp;balii znajdziecie na stronie{' '}
        <Link
          to="/domek-z-jacuzzi-podlasie"
          className="text-primary underline hover:text-primary/80"
        >
          domek z&nbsp;balią na Podlasiu
        </Link>
        , plan na dwa dni na stronie o{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          weekendzie w&nbsp;Supraślu
        </Link>
        , a&nbsp;pomysły na sobotę w{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          przewodniku po atrakcjach Supraśla
        </Link>
        .
      </p>

      <section aria-labelledby="hen-faq">
        <h2 id="hen-faq" className="section-title !text-2xl md:!text-3xl">
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

export default WieczorPanienskiSuprasl;
