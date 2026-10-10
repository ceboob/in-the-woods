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
    'Prywatny dom na wyłączność w miejscowości Konne koło Supraśla. Sprawdź opis wyposażenia, cennik i zasady pobytu przed wysłaniem zapytania.',
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
    { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
  ],
};

const highlights = [
  'cały dom i ogród tylko dla Was',
  'Niedaleko Supraśla i Puszczy Knyszyńskiej',
  'kominek, balia ogrodowa z funkcją jacuzzi i taras w lesie',
  'kuchnia, Wi-Fi i parking',
  'zasady pobytu z psem potwierdź z gospodarzem',
  'baza wypadowa do Puszczy Knyszyńskiej',
];

const NoclegiSuprasl = () => (
  <SEOPageLayout
    title="Noclegi Supraśl - dom w lesie z jacuzzi | In The Woods"
    description="Prywatny dom na wyłączność w miejscowości Konne koło Supraśla. Poznaj wyposażenie, zasady pobytu i cennik przed wysłaniem zapytania."
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
      'noclegi blisko Białegostoku',
    ]}
    jsonLd={[lodgingSchema]}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <header className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Noclegi w Supraślu i okolicy</p>
        <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
          Noclegi Supraśl - prywatny dom w lesie na wyłączność z jacuzzi i kominkiem
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          In The Woods to drewniany dom wynajmowany na wyłączność w miejscowości Konne koło Supraśla.
          W opisie obiektu znajdziesz informacje o kominku, kuchni, tarasie i opcjonalnej balii
          ogrodowej z funkcją jacuzzi.
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
        Dom jest wynajmowany w całości, więc goście nie dzielą go z innymi grupami. Przed podróżą
        sprawdź aktualną trasę do Supraśla i godziny otwarcia wybranych atrakcji.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Prywatny dom blisko Supraśla
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods to dom wynajmowany jednej grupie na wyłączność. Na miejscu są kominek,
        wyposażona kuchnia, ogród i taras; balia ogrodowa z funkcją jacuzzi jest opcjonalnym dodatkiem.
        Możliwość pobytu z psem, ewentualne opłaty i informację o ogrodzeniu potwierdź z gospodarzem.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Dom może sprawdzić się dla par, rodzin z dziećmi, grup przyjaciół i osób planujących
        workation na Podlasiu. Masz salon z kominkiem, dwie sypialnie, łazienkę, dodatkową toaletę,
        wyposażoną kuchnię, Wi-Fi i parking. Przed przyjazdem
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
        Możesz zaplanować wizytę w Monasterze, Muzeum Ikon, spacer nad rzeką lub aktywność w okolicy.
        Przed wyjazdem potwierdź aktualne godziny, dostępność i zasady korzystania z tras.
      </p>
      <h2 className="section-title !text-2xl md:!text-3xl">Noclegi Supraśl - dla kogo będzie najlepszy taki dom</h2>
      <p className="text-muted-foreground leading-relaxed">
        Jeśli zależy Ci na noclegu poza centrum, sprawdź lokalizację obiektu, dojazd i udogodnienia.
        In The Woods jest wynajmowany jako cały dom; porównaj opis i zasady pobytu z własnymi
        potrzebami przed wysłaniem zapytania.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Najczęstsze pytania o nocleg w Supraślu</h2>
      <div className="space-y-5">
        <section>
          <h3 className="font-heading text-xl text-foreground">Czy In The Woods leży w Supraślu?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Adres to Konne 109/1, 16-030 Supraśl. Sprawdź aktualną trasę do centrum przed podróżą.
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
            Wybierz atrakcje odpowiednie do czasu pobytu. Przed wizytą sprawdź godziny otwarcia i
            dostępność, a balię ogrodową z funkcją jacuzzi uzgodnij z gospodarzem.
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
        <h3 className="font-heading text-2xl font-light">Zapytaj o pobyt w Supraślu</h3>
        <p className="text-muted-foreground">
          Wyślij zapytanie, aby otrzymać informację o dostępności i cenie. Formularz nie potwierdza rezerwacji ani nie oznacza płatności.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+48722765101" className="btn-primary">
            Zadzwoń: 722 765 101
          </a>
          <Link to="/#rezerwacja" className="btn-outline">
            Przejdź do formularza zapytania
          </Link>
        </div>
      </div>
    </article>
  </SEOPageLayout>
);

export default NoclegiSuprasl;
