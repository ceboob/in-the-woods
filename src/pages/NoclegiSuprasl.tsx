import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';

const lodgingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': 'https://www.suprasl.online/noclegi-suprasl#lodging',
  name: 'In The Woods - noclegi Supraśl',
  url: 'https://www.suprasl.online/noclegi-suprasl',
  image: [
    'https://www.suprasl.online/images/exterior-main.jpg',
    'https://www.suprasl.online/images/living-fireplace.jpg',
    'https://www.suprasl.online/images/jacuzzi-night.jpg',
  ],
  description:
    'Prywatny dom w lesie na wyłączność koło Supraśla: kominek, balia ogrodowa z funkcją jacuzzi, ogrodzony ogród, szybkie Wi-Fi i pobyty z psem bez dopłat.',
  telephone: '+48722765101',
  email: 'tutinthewood@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Konne 109/1',
    postalCode: '16-030',
    addressLocality: 'Supraśl',
    addressRegion: 'podlaskie',
    addressCountry: 'PL',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Dom na wyłączność', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Balia ogrodowa z funkcją jacuzzi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kominek', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Ogrodzony teren', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Pobyt z psem bez dopłat', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Szybkie Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Bezpłatny parking', value: true },
  ],
  petsAllowed: true,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Gdzie zarezerwować noclegi w Supraślu blisko Puszczy Knyszyńskiej?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In The Woods to prywatny dom na wyłączność w miejscowości Konne koło Supraśla, przy Rezerwacie Przyrody Krzemienne Góry. Do centrum Supraśla dojedziesz w około 10 minut.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy In The Woods to hotel, apartament czy domek?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To cały dom z bali wynajmowany na wyłączność. Goście mają prywatny salon z kominkiem, kuchnię, sypialnie, ogród, taras, parking i balię ogrodową z funkcją jacuzzi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy można przyjechać z psem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak, psy są mile widziane bez dodatkowych opłat. Ogrodzony teren i las za progiem sprawiają, że to wygodny nocleg pod Supraślem dla gości podróżujących z psem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jakie atrakcje są blisko noclegu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'W okolicy są szlaki Puszczy Knyszyńskiej, Rezerwat Krzemienne Góry, Monaster w Supraślu, Muzeum Ikon, bulwary nad rzeką Supraśl, kajaki oraz Arboretum w Kopnej Górze.',
      },
    },
  ],
};

const highlights = [
  'cały dom i ogród tylko dla Was',
  '10 minut samochodem do centrum Supraśla',
  'kominek, balia ogrodowa z funkcją jacuzzi i taras w lesie',
  'psy bez dopłat i ogrodzony teren',
  'kuchnia, Wi-Fi, parking i praca zdalna',
  'baza wypadowa do Puszczy Knyszyńskiej',
];

const nearbyAttractions = [
  ['Rezerwat Krzemienne Góry', 'za progiem domu'],
  ['Centrum Supraśla', 'ok. 10 min samochodem'],
  ['Monaster Zwiastowania NMP', 'ok. 10 min samochodem'],
  ['Muzeum Ikon', 'ok. 10 min samochodem'],
  ['Bulwary nad rzeką Supraśl', 'ok. 10 min samochodem'],
  ['Arboretum Kopna Góra', 'ok. 20 min samochodem'],
];

const NoclegiSuprasl = () => (
  <SEOPageLayout
    title="Noclegi Supraśl - dom w lesie z jacuzzi | In The Woods"
    description="Noclegi Supraśl: prywatny dom w lesie na wyłączność, 10 min od centrum. Kominek, balia ogrodowa z funkcją jacuzzi, ogrodzony teren, psy bez dopłat, Wi-Fi i parking."
    breadcrumbName="Noclegi Supraśl"
    ogImage="https://www.suprasl.online/images/exterior-main.jpg"
    keywords={[
      'noclegi Supraśl',
      'nocleg Supraśl',
      'domek Supraśl',
      'dom na wynajem Supraśl',
      'apartamenty Supraśl alternatywa',
      'noclegi Puszcza Knyszyńska',
      'domek z jacuzzi Podlasie',
      'noclegi z psem Supraśl',
      'noclegi blisko Białegostoku',
    ]}
    jsonLd={[lodgingSchema, faqSchema]}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <header className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Noclegi w Supraślu i okolicy</p>
        <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
          Noclegi Supraśl - prywatny dom w lesie na wyłączność z jacuzzi i kominkiem
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Szukasz <strong>noclegu w Supraślu</strong>, ale zamiast pokoju w hotelu wolisz ciszę,
          przestrzeń i prawdziwy kontakt z Puszczą Knyszyńską? In The Woods to drewniany dom z bali
          na wyłączność w Konnych koło Supraśla: z kominkiem, balią ogrodową z funkcją jacuzzi, ogrodzonym ogrodem,
          tarasem, kuchnią i miejscem do pracy zdalnej.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 not-prose">
        {highlights.map((item) => (
          <div key={item} className="border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground">
            {item}
          </div>
        ))}
      </section>

      <p className="text-muted-foreground leading-relaxed">
        Nasz <strong>dom na wynajem w Supraślu</strong> jest położony przy Rezerwacie Przyrody
        Krzemienne Góry, około 10 minut samochodem od Monasteru, Muzeum Ikon i bulwarów nad rzeką
        Supraśl. Dom jest wynajmowany w całości, więc goście mają do dyspozycji prywatny salon,
        kuchnię, sypialnie, taras i ogród. Do centrum Supraśla można dojechać samochodem w około
        10 minut.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Prywatny dom blisko Supraśla
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods to dom wynajmowany jednej grupie na wyłączność. Na miejscu są kominek,
        wyposażona kuchnia, ogród i taras; balia ogrodowa z funkcją jacuzzi jest opcjonalnym dodatkiem.
        Pobyt z psem jest możliwy bez dodatkowej opłaty.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Dom może sprawdzić się dla par, rodzin z dziećmi, grup przyjaciół i osób planujących
        workation na Podlasiu. Masz salon z kominkiem, dwie sypialnie, łazienkę, dodatkową toaletę,
        wyposażoną kuchnię, Wi-Fi, biurko, bezpłatny parking i ogrodzony teren. Przed przyjazdem
        warto zaplanować dojazd i aktywności w okolicy zgodnie z własnymi potrzebami.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Domek z jacuzzi i kominkiem w Puszczy Knyszyńskiej</h2>
      <p className="text-muted-foreground leading-relaxed">
        Balia ogrodowa z funkcją jacuzzi pozwala odpocząć pod gwiazdami. Po spacerze,
        kajakach albo dniu na rowerze możesz rozpalić kominek, przygotować kolację w kuchni i
        odpocząć bez pośpiechu. Balia ogrodowa z funkcją jacuzzi jest dodatkowo płatna; jej
        dostępność i warunki korzystania warto potwierdzić podczas składania zapytania.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Lokalizacja - co jest blisko In The Woods</h2>
      <p className="text-muted-foreground leading-relaxed">
        Supraśl jest uzdrowiskowym miasteczkiem łączącym naturę, architekturę i spokojny wypoczynek.
        Goście często planują pobyt wokół Monasteru, Muzeum Ikon, bulwarów nad rzeką Supraśl,
        szlaków Puszczy Knyszyńskiej, spływów kajakowych i lokalnych restauracji. Z In The Woods
        możesz mieć jedno i drugie: ciszę lasu na noc oraz szybki dojazd do atrakcji.
      </p>
      <div className="not-prose overflow-hidden border border-border">
        <dl className="divide-y divide-border">
          {nearbyAttractions.map(([name, distance]) => (
            <div key={name} className="grid gap-1 px-4 py-3 sm:grid-cols-[1fr_auto]">
              <dt className="font-medium text-foreground">{name}</dt>
              <dd className="text-sm text-muted-foreground">{distance}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h2 className="section-title !text-2xl md:!text-3xl">Noclegi Supraśl - dla kogo będzie najlepszy taki dom</h2>
      <p className="text-muted-foreground leading-relaxed">
        Jeśli chcesz być w samym centrum miasteczka, najlepszy będzie pokój lub apartament przy
        rynku. Jeśli jednak szukasz fraz takich jak <strong>noclegi Supraśl cisza</strong>,{' '}
        <strong>domek na wyłączność Podlasie</strong>, <strong>dom w lesie z kominkiem</strong> czy{' '}
        <strong>noclegi blisko Białegostoku</strong>, In The Woods jest lepiej dopasowany do tej
        intencji. To nocleg dla osób, które chcą odpocząć od miasta, ale nie chcą rezygnować z
        wygody, ciepłego wnętrza i dobrego dojazdu.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Najczęstsze pytania o nocleg w Supraślu</h2>
      <div className="space-y-5">
        <section>
          <h3 className="font-heading text-xl text-foreground">Czy In The Woods leży w Supraślu?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Adres to Konne 109/1, 16-030 Supraśl. Dom znajduje się w leśnej okolicy koło Supraśla,
            około 10 minut samochodem od centrum miasta.
          </p>
        </section>
        <section>
          <h3 className="font-heading text-xl text-foreground">Czy rezerwuję cały dom?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Tak. Rezerwacja obejmuje cały dom, ogród, taras i prywatną przestrzeń wypoczynku.
            Nie wynajmujemy pojedynczych pokoi różnym gościom w tym samym czasie.
          </p>
        </section>
        <section>
          <h3 className="font-heading text-xl text-foreground">Czy to dobry nocleg na weekend w Supraślu?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Tak. W dwa lub trzy dni zdążysz zobaczyć Monaster, Muzeum Ikon, bulwary, przejść leśny
            szlak, zjeść regionalny obiad i wrócić wieczorem do kominka albo balii ogrodowej z funkcją jacuzzi.
          </p>
        </section>
      </div>

      <h2 className="section-title !text-2xl md:!text-3xl">Jak zaplanować pobyt</h2>
      <p className="text-muted-foreground leading-relaxed">
        Do planowania trasy wykorzystaj nasze przewodniki po{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcjach Supraśla
        </Link>
        ,{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          weekendzie w Supraślu
        </Link>{' '}
        i{' '}
        <Link to="/puszcza-knyszynska-nocleg" className="text-primary underline hover:text-primary/80">
          noclegach w Puszczy Knyszyńskiej
        </Link>
        . Dzięki temu strona nie kończy się na samej ofercie, tylko prowadzi gościa przez pełną
        decyzję: gdzie spać, co robić i dlaczego wybrać bazę w lesie.
      </p>

      <div className="bg-secondary p-8 text-center space-y-4 mt-12">
        <h3 className="font-heading text-2xl font-light">Zarezerwuj nocleg w Supraślu bez prowizji</h3>
        <p className="text-muted-foreground">
          Odpowiadamy zwykle w kilka godzin. Najszybciej potwierdzimy termin telefonicznie.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+48722765101" className="btn-primary">
            Zadzwoń: 722 765 101
          </a>
          <Link to="/#rezerwacja" className="btn-outline">
            Sprawdź dostępność
          </Link>
        </div>
      </div>
    </article>
  </SEOPageLayout>
);

export default NoclegiSuprasl;
