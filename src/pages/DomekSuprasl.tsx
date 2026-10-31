import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MIN_NIGHTLY_RATE } from '@/lib/pricing';

const faqItems = [
  {
    question: 'Ile osób pomieści domek w\u00a0Supraślu?',
    answer:
      'Maksymalnie 8. Na piętrze są dwie sypialnie z\u00a0dużymi łóżkami i\u00a0sofami, a\u00a0dodatkowe miejsce do spania jest w\u00a0salonie. Pasuje na dwie rodziny, cztery pary albo jedną bardzo zgraną ekipę.',
  },
  {
    question: 'Ile kosztuje wynajem domku?',
    answer: `Od ${MIN_NIGHTLY_RATE} zł za noc za cały dom. Cena rośnie z\u00a0liczbą gości, w\u00a0sezonie i\u00a0w\u00a0weekendy. Balia z\u00a0hydromasażem to dodatek za ${GARDEN_TUB_PRICE} zł za cały pobyt. Podajcie daty i\u00a0liczbę osób, a\u00a0dostaniecie dokładną kwotę.`,
  },
  {
    question: 'Czy domek ma jacuzzi albo banię ogrodową?',
    answer: `Ma balię z\u00a0hydromasażem, czyli naszą ruską banię z\u00a0hydromasażem. Stoi w\u00a0ogrodzie i\u00a0kosztuje ${GARDEN_TUB_PRICE} zł za cały pobyt. Zaznaczcie ją przy rezerwacji, a\u00a0nagrzejemy ją na Wasz przyjazd.`,
  },
  {
    question: 'Czy można przyjechać z\u00a0psem?',
    answer:
      'Tak, za darmo. W\u00a0lesie i\u00a0rezerwatach trzymajcie go tylko na smyczy, bo puszcza to dom dzików i\u00a0saren.',
  },
  {
    question: 'Czy domek jest do wynajęcia na wyłączność?',
    answer:
      'Tak, wynajmujecie cały domek dla jednej ekipy. Salon, kuchnia, ogród, taras i\u00a0miejsce na ognisko są tylko Wasze.',
  },
  {
    question: 'Jak dojechać z\u00a0Białegostoku?',
    answer:
      'Samochodem zwykle 30–40\u00a0minut. Adres: Konne 109/1, 16-030 Supraśl, około 10\u00a0minut od centrum Supraśla. Parking jest przy domu.',
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
    title="Domek do wynajęcia Supraśl – dom z bali | In The Woods"
    description="2 sypialnie, salon z&nbsp;kominkiem, pełna kuchnia, taras i&nbsp;ogród. Całoroczny domek pod Supraślem, który ogrzewa kominek, a&nbsp;nie rachunki."
    breadcrumbName="Domek Supraśl"
    ogImage="https://www.suprasl.online/images/living-fireplace.jpg"
    keywords={[
      'domek Supraśl',
      'domek do wynajęcia Supraśl',
      'domek całoroczny Podlasie',
      'dom z\u00a0bali Podlasie',
      'domek dla 8\u00a0osób',
    ]}
    jsonLd={faqSchema}
    showCTA={false}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <header className="space-y-5">
        <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
          Domek Supraśl: całoroczny dom z&nbsp;bali do wynajęcia
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          In The Woods to drewniany domek z&nbsp;bali pod Supraślem, wynajmowany w&nbsp;całości
          jednej ekipie do 8&nbsp;osób. W&nbsp;Konnem, na skraju Puszczy Knyszyńskiej, czeka na Was
          zapach drewna, trzask kominka i&nbsp;cisza, od której na początku aż dzwoni w&nbsp;uszach.
        </p>
        <Link to="/#rezerwacja" className="btn-primary inline-flex">
          Sprawdź wolne terminy
        </Link>
      </header>

      <section className="not-prose grid gap-4 sm:grid-cols-2">
        <figure>
          <img
            src="/images/living-fireplace-optimized.webp"
            alt="Salon z&nbsp;kominkiem w&nbsp;drewnianym domku z&nbsp;bali koło Supraśla"
            className="h-64 w-full rounded-lg object-cover"
            loading="lazy"
            width="768"
            height="576"
          />
        </figure>
        <figure>
          <img
            src="/images/jacuzzi-night-optimized.webp"
            alt="Balia z&nbsp;hydromasażem nocą w&nbsp;ogrodzie domku na Podlasiu"
            className="h-64 w-full rounded-lg object-cover"
            loading="lazy"
            width="768"
            height="576"
          />
        </figure>
      </section>

      <ul className="grid gap-3 sm:grid-cols-2 text-muted-foreground">
        <li>🏡 Cały domek tylko dla Was, maksymalnie 8&nbsp;osób</li>
        <li>🪵 Prawdziwy dom z&nbsp;bali, całoroczny</li>
        <li>🔥 Salon z&nbsp;kominkiem i&nbsp;stara kuchnia kaflowa</li>
        <li>🛁 Balia z&nbsp;hydromasażem: {GARDEN_TUB_PRICE} zł za cały pobyt</li>
        <li>🌿 Taras, ogrodzony ogród i&nbsp;miejsce na ognisko</li>
        <li>❄️ Klimatyzacja i&nbsp;Starlink do 200&nbsp;Mb/s</li>
        <li>🅿️ Bezpłatny parking przy domu</li>
      </ul>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Co jest w&nbsp;środku</h2>
        <p className="text-muted-foreground leading-relaxed">
          Na parterze salon z&nbsp;kominkiem i&nbsp;drewnianymi belkami oraz kuchnia
          z&nbsp;indukcją, lodówką, zmywarką, ekspresem i&nbsp;tradycyjną kuchnią kaflową, która
          zimą grzeje lepiej niż niejeden kaloryfer. Na piętrze dwie sypialnie z&nbsp;dużymi
          łóżkami, sofami i&nbsp;widokiem na las.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Domek sprawdzi się na rodzinny wyjazd, tydzień pracy z&nbsp;lasu albo weekend
          z&nbsp;przyjaciółmi. We dwoje też się opłaca: cena jest za dom, więc macie 8 łóżek do
          wyboru i&nbsp;żadnego świadka. Zobaczcie{' '}
          <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
            plan na weekend w&nbsp;Supraślu
          </Link>{' '}
          i{' '}
          <Link
            to="/puszcza-knyszynska-nocleg"
            className="text-primary underline hover:text-primary/80"
          >
            trasy w&nbsp;Puszczy Knyszyńskiej
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">
          Wieczór przy ognisku, kominku i&nbsp;w&nbsp;balii
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Przy ognisku w&nbsp;ogrodzie siedzi się do nocy. Kiełbaski obowiązkowo, gitara
          opcjonalnie. Potem kominek albo gorąca balia z&nbsp;hydromasażem pod sosnami.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Chcecie balię? Dajcie znać przy rezerwacji, a&nbsp;nagrzejemy ją na Wasz przyjazd.
          Kosztuje {GARDEN_TUB_PRICE} zł za cały pobyt.
        </p>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">
          Domek całoroczny: każda pora roku ma swój plan
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Jesienią wracacie z&nbsp;grzybobrania do ciepłego kominka. Zimą śnieg na dachu, ogień
          w&nbsp;salonie i&nbsp;para nad balią. Wiosną budzą Was ptaki, i&nbsp;to bardzo wcześnie.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Latem taras, cień w&nbsp;ogrodzie i&nbsp;ognisko do późna, a&nbsp;gdy przyjdą upały,
          w&nbsp;domu działa klimatyzacja.
        </p>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
        <ul className="text-muted-foreground space-y-2">
          <li>
            Balię z&nbsp;hydromasażem zamawiacie przy rezerwacji: {GARDEN_TUB_PRICE} zł za cały
            pobyt.
          </li>
          <li>Pies przyjeżdża gratis. W&nbsp;lesie i&nbsp;rezerwatach trzymajcie go na smyczy.</li>
          <li>
            Internet to Starlink do 200&nbsp;Mb/s, więc pracę zdalną da się tu robić naprawdę.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="section-title !text-2xl md:!text-3xl">Cennik i&nbsp;rezerwacja</h2>
        <p className="text-muted-foreground leading-relaxed">
          Od {MIN_NIGHTLY_RATE} zł za noc za cały dom. Dokładna cena zależy od terminu i&nbsp;liczby
          gości. Podajcie daty i&nbsp;liczbę osób w&nbsp;formularzu, a&nbsp;Maciej odpisze
          z&nbsp;kwotą i&nbsp;wolnymi terminami. Formularz to tylko pytanie: niczego nie rezerwuje
          i&nbsp;niczego nie pobiera.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Porównujecie oferty? Zajrzyjcie też na stronę o{' '}
          <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
            noclegach w&nbsp;Supraślu dla grupy
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
          Napiszcie, kiedy chcecie przyjechać i&nbsp;w&nbsp;ile osób. Maciej odpisze zwykle
          w&nbsp;kilka godzin.
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
        <p className="text-sm text-muted-foreground">In The Woods · Konne 109/1, 16-030 Supraśl</p>
      </section>
    </article>
  </SEOPageLayout>
);

export default DomekSuprasl;
