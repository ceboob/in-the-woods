import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import terraceDog from '@/assets/gallery-taras-pies-wieczor-thumb.webp';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MAX_GUESTS, MIN_NIGHTLY_RATE } from '@/lib/pricing';

const faqs = [
  {
    question: 'Ile kosztuje pobyt z\u00a0psem?',
    answer:
      'Nic. Za psa ani innego pupila nie bierzemy żadnych dopłat. Płacicie tylko za dom, tak samo jak bez psa.',
  },
  {
    question: 'Czy ogród jest ogrodzony?',
    answer:
      'Tak, ogród jest ogrodzony, więc pies może się w\u00a0nim wyszaleć. Jeśli Wasz pies jest mistrzem ucieczek, zapytajcie Macieja o\u00a0szczegóły płotu przed przyjazdem.',
  },
  {
    question: 'Czy można przyjechać z\u00a0więcej niż jednym psem?',
    answer:
      'Napiszcie o\u00a0tym przy rezerwacji, ile psów i\u00a0jakiej wielkości przyjedzie. Maciej odpowie wprost, czy to nie problem.',
  },
  {
    question: 'Gdzie pospacerować z\u00a0psem w\u00a0okolicy?',
    answer:
      'Las zaczyna się zaraz za płotem, więc pierwszy spacer zaczynacie od furtki. W\u00a0lesie i\u00a0rezerwatach Puszczy Knyszyńskiej trzymajcie psa na smyczy: to dom dzików, saren i\u00a0łosi, a\u00a0w\u00a0rezerwatach obowiązują dodatkowe zasady.',
  },
  {
    question: 'Ile kosztuje nocleg z\u00a0psem?',
    answer: `Od ${MIN_NIGHTLY_RATE} zł za noc za cały dom dla maksymalnie ${MAX_GUESTS} osób. Pies 0\u00a0zł. Balia z\u00a0hydromasażem to ${GARDEN_TUB_PRICE} zł za cały pobyt, ale pies raczej z\u00a0niej nie skorzysta.`,
  },
];

const DomekZPsemPodlasie = () => (
  <SEOPageLayout
    title="Noclegi z psem na Podlasiu – pies gratis | In The Woods"
    description="Pies jedzie gratis, bez dopłat. Cały dom w&nbsp;lesie pod Supraślem z&nbsp;ogrodzonym ogrodem, a&nbsp;las zaraz za płotem. Sprawdźcie wolne terminy."
    breadcrumbName="Domek z&nbsp;psem Podlasie"
    ogImage="https://www.suprasl.online/images/gallery-taras-pies-wieczor.webp"
    jsonLd={createLandingPageSchemas('/domek-z-psem-podlasie', faqs)}
    showRelatedPages={false}
    ctaTitle="Przyjedźcie z&nbsp;psem"
    ctaDescription="Napiszcie, kiedy chcecie przyjechać i&nbsp;jaki pies jedzie z&nbsp;Wami. Maciej odpisze, zwykle w&nbsp;kilka godzin."
    ctaFormLabel="Zapytaj o&nbsp;termin"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Domek z&nbsp;psem na Podlasiu: pies jedzie gratis
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Szukacie noclegu z&nbsp;psem, gdzie nikt nie krzywi się na widok merdającego ogona
        i&nbsp;nie dolicza stówki za „zwierzę”? U&nbsp;nas pies przyjeżdża za darmo, ogród jest
        ogrodzony, a&nbsp;las zaczyna się zaraz za płotem. Cały drewniany dom pod Supraślem tylko
        dla Was i&nbsp;Waszego czworonoga. Szczerze? On będzie zadowolony bardziej niż Wy.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={terraceDog}
          alt="Pies na tarasie domu w&nbsp;lesie In The Woods wieczorem, nocleg z&nbsp;psem na Podlasiu"
          width={450}
          height={600}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Co dostaje Wasz pies</h2>
      <ul className="text-muted-foreground space-y-3">
        <li>
          🐕 <strong>Zero dopłat.</strong> Pies nocuje gratis. Bez gwiazdek i&nbsp;drobnego druku.
        </li>
        <li>
          🌿 <strong>Ogrodzony ogród.</strong> Może biegać, kopać (w&nbsp;granicach rozsądku)
          i&nbsp;obszczekiwać wiewiórki.
        </li>
        <li>
          🌲 <strong>Las za płotem.</strong> Pierwszy spacer zaczynacie od furtki, bez wsiadania do
          auta.
        </li>
        <li>
          🏡 <strong>Cały dom bez obcych.</strong> Nikt nie narzeka, że pies szczeka, bo nie ma
          komu.
        </li>
        <li>
          🔥 <strong>Kominek.</strong> Najlepsze miejsce w&nbsp;domu, co pies odkryje w&nbsp;pięć
          minut.
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Spacery z&nbsp;psem po Puszczy Knyszyńskiej
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Puszcza Knyszyńska to kilometry leśnych duktów, na których częściej spotkacie sarnę niż
        człowieka. Właśnie dlatego trzymajcie psa na smyczy: w&nbsp;lesie mieszkają dziki, sarny
        i&nbsp;łosie, a&nbsp;w&nbsp;rezerwatach obowiązują dodatkowe zasady. Po spacerze sprawdźcie
        psa pod kątem kleszczy, bo tych tu nie brakuje.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Więcej praktycznych rad o&nbsp;wyjeździe z&nbsp;psem znajdziecie we wpisie{' '}
        <Link to="/blog/podlasie-z-psem" className="text-primary underline hover:text-primary/80">
          Podlasie z&nbsp;psem
        </Link>
        , a&nbsp;trasy w&nbsp;okolicy opisaliśmy na stronie o{' '}
        <Link
          to="/puszcza-knyszynska-nocleg"
          className="text-primary underline hover:text-primary/80"
        >
          noclegu w&nbsp;Puszczy Knyszyńskiej
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Co zabrać dla psa</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Smycz, i&nbsp;to taką, która wytrzyma spotkanie z&nbsp;sarną.</li>
        <li>Coś na kleszcze. Serio.</li>
        <li>Ręcznik do wycierania łap po leśnym błocie.</li>
        <li>Ulubiony koc albo legowisko, żeby szybciej poczuł się jak u&nbsp;siebie.</li>
        <li>Miski i&nbsp;karmę na cały pobyt, na wszelki wypadek z&nbsp;zapasem.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Dom dla Was, nie tylko dla psa</h2>
      <p className="text-muted-foreground leading-relaxed">
        Drewniany dom z&nbsp;bali dla maksymalnie {MAX_GUESTS} osób: dwie sypialnie, salon
        z&nbsp;kominkiem, pełna kuchnia, taras i&nbsp;balia z&nbsp;hydromasażem za{' '}
        {GARDEN_TUB_PRICE} zł za cały pobyt. Do Supraśla 10&nbsp;minut, do Białegostoku 30–40.
        Wszystko o&nbsp;domu znajdziecie na stronie o{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegach w&nbsp;Supraślu
        </Link>
        .
      </p>

      <section aria-labelledby="dog-faq">
        <h2 id="dog-faq" className="section-title !text-2xl md:!text-3xl">
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

export default DomekZPsemPodlasie;
