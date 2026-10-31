import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MIN_NIGHTLY_RATE } from '@/lib/pricing';

const faqItems = [
  {
    question: 'Ile osób pomieści domek w Supraślu?',
    answer:
      'Maksymalnie 8. Na piętrze są dwie sypialnie z dużymi łóżkami i sofami, a dodatkowe miejsce do spania jest w salonie. Pasuje na dwie rodziny, cztery pary albo jedną bardzo zgraną ekipę.',
  },
  {
    question: 'Ile kosztuje wynajem domku?',
    answer:
      `Od ${MIN_NIGHTLY_RATE} zł za noc za cały dom. Cena rośnie z liczbą gości, w sezonie i w weekendy. Balia z hydromasażem to dodatek za ${GARDEN_TUB_PRICE} zł za cały pobyt. Podajcie daty i liczbę osób, a dostaniecie dokładną kwotę.`,
  },
  {
    question: 'Czy domek ma jacuzzi albo banię ogrodową?',
    answer:
      `Ma balię z hydromasażem, czyli naszą ruską banię z funkcją jacuzzi. Stoi w ogrodzie i kosztuje ${GARDEN_TUB_PRICE} zł za cały pobyt. Zaznaczcie ją przy rezerwacji, a nagrzejemy ją na Wasz przyjazd.`,
  },
  {
    question: 'Czy można przyjechać z psem?',
    answer:
      'Tak, za darmo. W lesie i rezerwatach trzymajcie go tylko na smyczy, bo puszcza to dom dzików i saren.',
  },
  {
    question: 'Czy domek jest do wynajęcia na wyłączność?',
    answer:
      'Tak, wynajmujecie cały domek dla jednej ekipy. Salon, kuchnia, ogród, taras i miejsce na ognisko są tylko Wasze.',
  },
  {
    question: 'Jak dojechać z Białegostoku?',
    answer:
      'Samochodem zwykle 30–40 minut. Adres: Konne 109/1, 16-030 Supraśl, około 10 minut od centrum Supraśla. Parking jest przy domu.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

const DomekSuprasl = () => (
  <SEOPageLayout
    title="Domek do wynajęcia Supraśl – całoroczny dom z bali | In The Woods"
    description="2 sypialnie, salon z kominkiem, pełna kuchnia, taras i ogród. Całoroczny domek pod Supraślem, który ogrzewa kominek, a nie rachunki."
    breadcrumbName="Domek Supraśl"
    ogImage="https://www.suprasl.online/images/living-fireplace.jpg"
    keywords={[
      'domek Supraśl',
      'domek do wynajęcia Supraśl',
      'domek całoroczny Podlasie',
      'dom z bali Podlasie',
      'domek dla 8 osób',
    ]}
    jsonLd={faqSchema}
    showCTA={false}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <header className="space-y-5">
        <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
          Domek Supraśl: całoroczny dom z bali do wynajęcia
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          In The Woods to drewniany domek z bali pod Supraślem, wynajmowany w całości jednej ekipie do
          8 osób. W Konnem, na skraju Puszczy Knyszyńskiej, czeka na Was zapach drewna, trzask kominka
          i cisza, od której na początku aż dzwoni w uszach.
        </p>
        <Link to="/#rezerwacja" className="btn-primary inline-flex">
          Sprawdź wolne terminy
        </Link>
      </header>

      <section className="not-prose grid gap-4 sm:grid-cols-2">
        <figure>
          <img
            src="/images/living-fireplace-optimized.webp"
            alt="Salon z kominkiem w drewnianym domku z bali koło Supraśla"
            className="h-64 w-full rounded-lg object-cover"
            loading="lazy"
            width="768"
            height="576"
          />
        </figure>
        <figure>
          <img
            src="/images/jacuzzi-night-optimized.webp"
            alt="Balia z hydromasażem nocą w ogrodzie domku na Podlasiu"
            className="h-64 w-full rounded-lg object-cover"
            loading="lazy"
            width="768"
            height="576"
          />
        </figure>
      </section>

      <ul className="grid gap-3 sm:grid-cols-2 text-muted-foreground">
        <li>🏡 Cały domek tylko dla Was, maksymalnie 8 osób</li>
        <li>🪵 Prawdziwy dom z bali, całoroczny</li>
        <li>🔥 Salon z kominkiem i kaflowa kuchnia</li>
        <li>🛁 Balia z hydromasażem: {GARDEN_TUB_PRICE} zł za cały pobyt</li>
        <li>🌿 Taras, ogrodzony ogród i miejsce na ognisko</li>
        <li>❄️ Klimatyzacja i Starlink do 200 Mb/s</li>
        <li>🅿️ Bezpłatny parking przy domu</li>
      </ul>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Co jest w środku</h2>
        <p className="text-muted-foreground leading-relaxed">
          Na parterze salon z kominkiem i drewnianymi belkami oraz kuchnia z indukcją, lodówką,
          zmywarką, ekspresem i tradycyjną kaflową kuchnią, która zimą grzeje lepiej niż niejeden
          kaloryfer. Na piętrze dwie sypialnie z dużymi łóżkami, sofami i widokiem na las.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Domek sprawdzi się na rodzinny wyjazd, tydzień pracy z lasu albo weekend z przyjaciółmi. We
          dwoje też się opłaca: cena jest za dom, więc macie 8 łóżek do wyboru i żadnego świadka.
          Zobaczcie{' '}
          <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
            plan na weekend w Supraślu
          </Link>{' '}
          i{' '}
          <Link
            to="/puszcza-knyszynska-nocleg"
            className="text-primary underline hover:text-primary/80"
          >
            trasy w Puszczy Knyszyńskiej
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Wieczór przy ognisku, kominku i w balii</h2>
        <p className="text-muted-foreground leading-relaxed">
          Przy ognisku w ogrodzie siedzi się do nocy. Kiełbaski obowiązkowo, gitara opcjonalnie. Potem
          kominek albo gorąca balia z hydromasażem pod sosnami.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Chcecie balię? Dajcie znać przy rezerwacji, a nagrzejemy ją na Wasz przyjazd. Kosztuje{' '}
          {GARDEN_TUB_PRICE} zł za cały pobyt.
        </p>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Domek całoroczny: każda pora roku ma swój plan</h2>
        <p className="text-muted-foreground leading-relaxed">
          Jesienią wracacie z grzybobrania do ciepłego kominka. Zimą śnieg na dachu, ogień w salonie
          i para nad balią. Wiosną budzą Was ptaki, i to bardzo wcześnie.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Latem taras, cień w ogrodzie i ognisko do późna, a gdy przyjdą upały, w domu działa
          klimatyzacja.
        </p>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
        <ul className="text-muted-foreground space-y-2">
          <li>Balię z hydromasażem zamawiacie przy rezerwacji: {GARDEN_TUB_PRICE} zł za cały pobyt.</li>
          <li>Pies przyjeżdża gratis. W lesie i rezerwatach trzymajcie go na smyczy.</li>
          <li>Internet to Starlink do 200 Mb/s, więc pracę zdalną da się tu robić naprawdę.</li>
        </ul>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Cennik i rezerwacja</h2>
        <p className="text-muted-foreground leading-relaxed">
          Od {MIN_NIGHTLY_RATE} zł za noc za cały dom. Dokładna cena zależy od terminu i liczby gości.
          Podajcie daty i liczbę osób w formularzu, a Maciej odpisze z kwotą i wolnymi terminami.
          Formularz to tylko pytanie: niczego nie rezerwuje i niczego nie pobiera.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Porównujecie oferty? Zajrzyjcie też na stronę o{' '}
          <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
            noclegach w Supraślu dla grupy
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Najczęstsze pytania</h2>
        <div className="space-y-5">
          {faqItems.map(({ question, answer }) => (
            <div key={question}>
              <h3 className="font-heading text-xl text-foreground">{question}</h3>
              <p className="text-muted-foreground leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary p-8 text-center space-y-4 mt-12">
        <h2 className="font-heading text-2xl font-light">Sprawdźcie, czy domek jest wolny</h2>
        <p className="text-muted-foreground">
          Napiszcie, kiedy chcecie przyjechać i w ile osób. Maciej odpisze zwykle w kilka godzin.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+48722765101" className="btn-primary">
            Zadzwoń: 722 765 101
          </a>
          <a href="mailto:tutinthewood@gmail.com" className="btn-outline">
            Napisz: tutinthewood@gmail.com
          </a>
          <Link to="/#rezerwacja" className="btn-outline">
            Formularz zapytania
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          In The Woods · Konne 109/1, 16-030 Supraśl
        </p>
      </section>
    </article>
  </SEOPageLayout>
);

export default DomekSuprasl;
