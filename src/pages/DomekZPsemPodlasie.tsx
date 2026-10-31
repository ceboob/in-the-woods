import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import terraceDog from '@/assets/gallery-taras-pies-wieczor-thumb.webp';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MAX_GUESTS, MIN_NIGHTLY_RATE } from '@/lib/pricing';

const faqs = [
  {
    question: 'Ile kosztuje pobyt z psem?',
    answer:
      'Nic. Za psa ani innego pupila nie bierzemy żadnych dopłat. Płacicie tylko za dom, tak samo jak bez psa.',
  },
  {
    question: 'Czy ogród jest ogrodzony?',
    answer:
      'Tak, ogród jest ogrodzony, więc pies może się w nim wyszaleć. Jeśli Wasz pies jest mistrzem ucieczek, zapytajcie Macieja o szczegóły płotu przed przyjazdem.',
  },
  {
    question: 'Czy można przyjechać z więcej niż jednym psem?',
    answer:
      'Napiszcie o tym przy rezerwacji, ile psów i jakiej wielkości przyjedzie. Maciej odpowie wprost, czy to nie problem.',
  },
  {
    question: 'Gdzie pospacerować z psem w okolicy?',
    answer:
      'Las zaczyna się zaraz za płotem, więc pierwszy spacer zaczynacie od furtki. W lesie i rezerwatach Puszczy Knyszyńskiej trzymajcie psa na smyczy: to dom dzików, saren i łosi, a w rezerwatach obowiązują dodatkowe zasady.',
  },
  {
    question: 'Ile kosztuje nocleg z psem?',
    answer: `Od ${MIN_NIGHTLY_RATE} zł za noc za cały dom dla maksymalnie ${MAX_GUESTS} osób. Pies 0 zł. Balia z hydromasażem to ${GARDEN_TUB_PRICE} zł za cały pobyt, ale pies raczej z niej nie skorzysta.`,
  },
];

const DomekZPsemPodlasie = () => (
  <SEOPageLayout
    title="Noclegi z psem na Podlasiu – domek z ogrodzonym ogrodem | In The Woods"
    description="Pies jedzie gratis, bez dopłat. Cały dom w lesie pod Supraślem z ogrodzonym ogrodem, a las zaraz za płotem. Sprawdźcie wolne terminy."
    breadcrumbName="Domek z psem Podlasie"
    ogImage="https://www.suprasl.online/images/gallery-taras-pies-wieczor.webp"
    jsonLd={createLandingPageSchemas('/domek-z-psem-podlasie', faqs)}
    showRelatedPages={false}
    ctaTitle="Przyjedźcie z psem"
    ctaDescription="Napiszcie, kiedy chcecie przyjechać i jaki pies jedzie z Wami. Maciej odpisze, zwykle w kilka godzin."
    ctaFormLabel="Zapytaj o termin"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Domek z psem na Podlasiu: pies jedzie gratis
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Szukacie noclegu z psem, gdzie nikt nie krzywi się na widok merdającego ogona i nie dolicza
        stówki za „zwierzę”? U nas pies przyjeżdża za darmo, ogród jest ogrodzony, a las zaczyna się
        zaraz za płotem. Cały drewniany dom pod Supraślem tylko dla Was i Waszego czworonoga.
        Szczerze? On będzie zadowolony bardziej niż Wy.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={terraceDog}
          alt="Pies na tarasie domu w lesie In The Woods wieczorem, nocleg z psem na Podlasiu"
          width={450}
          height={600}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Co dostaje Wasz pies</h2>
      <ul className="text-muted-foreground space-y-3">
        <li>🐕 <strong>Zero dopłat.</strong> Pies nocuje gratis. Bez gwiazdek i drobnego druku.</li>
        <li>🌿 <strong>Ogrodzony ogród.</strong> Może biegać, kopać (w granicach rozsądku) i obszczekiwać wiewiórki.</li>
        <li>🌲 <strong>Las za płotem.</strong> Pierwszy spacer zaczynacie od furtki, bez wsiadania do auta.</li>
        <li>🏡 <strong>Cały dom bez obcych.</strong> Nikt nie narzeka, że pies szczeka, bo nie ma komu.</li>
        <li>🔥 <strong>Kominek.</strong> Najlepsze miejsce w domu, co pies odkryje w pięć minut.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Spacery z psem po Puszczy Knyszyńskiej</h2>
      <p className="text-muted-foreground leading-relaxed">
        Puszcza Knyszyńska to kilometry leśnych duktów, na których częściej spotkacie sarnę niż
        człowieka. Właśnie dlatego trzymajcie psa na smyczy: w lesie mieszkają dziki, sarny i łosie,
        a w rezerwatach obowiązują dodatkowe zasady. Po spacerze sprawdźcie psa pod kątem kleszczy,
        bo tych tu nie brakuje.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Więcej praktycznych rad o wyjeździe z psem znajdziecie we wpisie{' '}
        <Link to="/blog/podlasie-z-psem" className="text-primary underline hover:text-primary/80">
          Podlasie z psem
        </Link>
        , a trasy w okolicy opisaliśmy na stronie o{' '}
        <Link
          to="/puszcza-knyszynska-nocleg"
          className="text-primary underline hover:text-primary/80"
        >
          noclegu w Puszczy Knyszyńskiej
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Co zabrać dla psa</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Smycz, i to taką, która wytrzyma spotkanie z sarną.</li>
        <li>Coś na kleszcze. Serio.</li>
        <li>Ręcznik do wycierania łap po leśnym błocie.</li>
        <li>Ulubiony koc albo legowisko, żeby szybciej poczuł się jak u siebie.</li>
        <li>Miski i karmę na cały pobyt, na wszelki wypadek z zapasem.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Dom dla Was, nie tylko dla psa</h2>
      <p className="text-muted-foreground leading-relaxed">
        Drewniany dom z bali dla maksymalnie {MAX_GUESTS} osób: dwie sypialnie, salon z kominkiem,
        pełna kuchnia, taras i balia z hydromasażem za {GARDEN_TUB_PRICE} zł za cały pobyt. Do
        Supraśla 10 minut, do Białegostoku 30–40. Wszystko o domu znajdziecie na stronie o{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegach w Supraślu
        </Link>
        .
      </p>

      <section aria-labelledby="dog-faq">
        <h2 id="dog-faq" className="section-title !text-2xl md:!text-3xl">
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

export default DomekZPsemPodlasie;
