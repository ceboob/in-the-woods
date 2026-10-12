import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import monastery from '@/assets/blog-monaster-suprasl-optimized.webp';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Co warto zobaczyć w Supraślu i na Podlasiu w jeden dzień?',
    answer:
      'W jeden dzień warto połączyć Monaster Zwiastowania NMP, Muzeum Ikon, spacer ulicą 3 Maja i odpoczynek nad rzeką Supraśl. Jeśli zostanie Wam czas, zajrzyjcie do Muzeum Drukarstwa albo na bulwary. Godziny zwiedzania i dostępność ekspozycji sprawdźcie w sekcji praktycznej przed wyjazdem.',
  },
  {
    question: 'Czy Supraśl jest uzdrowiskiem?',
    answer:
      'Tak, Supraśl ma status uzdrowiska. Kameralne centrum, zabytki i bliskość Puszczy Knyszyńskiej tworzą dobre warunki do spokojnego zwiedzania i spacerów. Warto zostawić sobie czas na bulwary nad rzeką, zamiast próbować zmieścić wszystkie miejsca w jednej krótkiej wizycie. Miasteczko odkrywa się dobrze pieszo.',
  },
  {
    question: 'Jak daleko z Supraśla do Kruszynian?',
    answer:
      'Kruszyniany są dalszym celem wycieczki z Supraśla i najlepiej zaplanować na nie osobną część dnia. Na miejscu czekają meczet, mizar i kuchnia tatarska. Dokładny dystans oraz czas przejazdu zależą od wybranej trasy, dlatego przed wyjazdem sprawdźcie aktualną nawigację. Warto uwzględnić przerwę na zwiedzanie.',
  },
  {
    question: 'Czy w Puszczy Knyszyńskiej można zbierać grzyby?',
    answer:
      'Grzybobranie jest możliwe w miejscach, w których zezwalają na to aktualne przepisy i zasady ochrony przyrody. Puszcza obejmuje także obszary chronione, gdzie mogą obowiązywać ograniczenia. Przed wyjściem sprawdźcie status konkretnego terenu i zbierajcie grzyby wyłącznie tam, gdzie jest to dozwolone.',
  },
  {
    question: 'Gdzie zjeść kuchnię podlaską i tatarską?',
    answer:
      'Kuchni podlaskiej szukajcie w restauracjach i lokalach w Supraślu, a tatarskich specjałów w Kruszynianach. Menu oraz godziny działania zmieniają się w zależności od miejsca i sezonu. Gospodarz In The Woods może podpowiedzieć, które lokale warto sprawdzić podczas Waszego pobytu. Zostawcie na posiłek chwilę bez pośpiechu.',
  },
];

const attractions = [
  'Monaster Zwiastowania NMP',
  'Muzeum Ikon',
  'Białostocki Ośrodek Drukarstwa — Muzeum Drukarstwa i Papieru',
  'Pałac Buchholtzów',
  'Domy Tkaczy',
  'Bulwary nad rzeką Supraśl i plaża miejska',
  'Teatr Wierszalin',
  'Pomnik rodzin supraskich',
  'Cmentarz prawosławny i zabytki wielokulturowe',
];

const attractionListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Atrakcje Supraśla i okolic',
  itemListElement: attractions.map((name, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
  })),
};

const AtrakcjeSuprasl = () => (
  <SEOPageLayout
    title="Atrakcje Supraśla i okolic – przewodnik | In The Woods"
    description="Atrakcje Supraśla, zabytki i Puszcza Knyszyńska. Praktyczny przewodnik z odległościami z domku w lesie. Zaplanuj zwiedzanie."
    breadcrumbName="Atrakcje Supraśla"
    ogImage="https://www.suprasl.online/images/terrace-porch.jpg"
    jsonLd={[
      ...createLandingPageSchemas('/atrakcje-suprasl', faqs),
      attractionListSchema,
    ]}
    showRelatedPages={false}
    ctaTitle="Planujecie pobyt? Zapytajcie o termin w domku w lesie"
    ctaDescription="Gospodarz podpowie, jak połączyć zwiedzanie Supraśla ze spokojnym pobytem w miejscowości Konne."
    ctaFormLabel="Zapytaj o pobyt"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Atrakcje Supraśla — przewodnik po miasteczku i Puszczy Knyszyńskiej
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Atrakcje Supraśla łączą zabytki, uzdrowiskowy spokój i bliskość Puszczy Knyszyńskiej.
        Z leśnego domu dojedziecie do centrum Supraśla w około 10 minut.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={monastery}
          alt="Monaster Zwiastowania NMP — jedna z najważniejszych atrakcji Supraśla"
          width={810}
          height={1080}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Atrakcje w Supraślu</h2>
      <ul className="space-y-5 text-muted-foreground">
        <li>
          <strong>Monaster w Supraślu, Zwiastowania NMP — [X km | Y min autem/spacerem z Konne].</strong>{' '}
          Zespół klasztorny jest ważnym punktem historii i architektury miasteczka. Warto tu zajrzeć,
          jeśli interesuje Was duchowe dziedzictwo Podlasia.
        </li>
        <li>
          <strong>Muzeum Ikon Supraśl — [X km | Y min autem/spacerem z Konne].</strong> Ekspozycja
          pokazuje sztukę ikon w zabudowaniach poklasztornych. To propozycja na spokojne zwiedzanie
          także wtedy, gdy chcecie odpocząć od leśnych tras.
        </li>
        <li>
          <strong>Białostocki Ośrodek Drukarstwa — [X km | Y min autem/spacerem z Konne].</strong>{' '}
          Muzeum Drukarstwa i Papieru opowiada o dawnym rzemiośle i pracy z papierem. To ciekawy
          przystanek dla rodzin i osób, które lubią miejsca z lokalną historią, a także jedna z
          atrakcji dla dzieci w Supraślu.
        </li>
        <li>
          <strong>Pałac Buchholtzów — [X km | Y min autem/spacerem z Konne].</strong> Secesyjna
          rezydencja przypomina o przemysłowej przeszłości Supraśla. Zobaczcie ją podczas spaceru po
          centrum i ulicy 3 Maja.
        </li>
        <li>
          <strong>Domy Tkaczy — [X km | Y min autem/spacerem z Konne].</strong> Drewniana zabudowa
          opowiada o tkackich tradycjach miasteczka. To krótki, niewymagający przystanek dla
          zwiedzających, którzy chcą poczuć dawny rytm Supraśla.
        </li>
        <li>
          <strong>Bulwary nad rzeką Supraśl i plaża miejska — [X km | Y min autem/spacerem z Konne].</strong>{' '}
          Nad rzeką można zwolnić po spacerze po centrum i odpocząć wśród zieleni. Plaża miejska
          sprawdzi się w ciepły dzień, szczególnie podczas rodzinnego pobytu.
        </li>
        <li>
          <strong>Teatr Wierszalin — [X km | Y min autem/spacerem z Konne].</strong> Teatr słynie z
          własnego języka scenicznego i zakorzenienia w regionie. Sprawdźcie repertuar, jeśli lubicie
          kameralne wydarzenia kulturalne.
        </li>
        <li>
          <strong>Pomnik rodzin supraskich — [X km | Y min autem/spacerem z Konne].</strong> Pomnik
          upamiętnia mieszkańców i rodziny związane z historią miasteczka. To krótki przystanek dla
          osób chcących lepiej poznać lokalne dziedzictwo.
        </li>
        <li>
          <strong>Cmentarz prawosławny i zabytki wielokulturowe — [X km | Y min autem/spacerem z Konne].</strong>{' '}
          To ciche miejsce pamięci, które przypomina o wielowyznaniowej historii Supraśla. Wybierzcie
          się tam z szacunkiem dla charakteru nekropolii.
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Wycieczki z domku — atrakcje okolicy
      </h2>
      <ul className="space-y-4 text-muted-foreground">
        <li>
          <strong>Arboretum Kopna Góra — [X km | Y min autem z Konne].</strong> Leśne kolekcje roślin
          i ścieżki tworzą cel spokojnej wycieczki na kilka godzin. To dobre miejsce dla osób, które
          chcą poznać przyrodnicze atrakcje Podlasia.
        </li>
        <li>
          <strong>Kruszyniany — [X km | Y min autem z Konne].</strong> Zobaczycie tu meczet i mizar,
          a regionalną wyprawę można połączyć z kuchnią tatarską. To ważny punkt na mapie
          wielokulturowych zabytków Podlasia.
        </li>
        <li>
          <strong>Rezerwat Krzemienne Góry — [X km | Y min autem z Konne].</strong> To przyrodniczy
          zakątek w pobliżu domu, dobry kierunek dla osób szukających leśnego spaceru.
        </li>
        <li>
          <strong>Szlaki Puszczy Knyszyńskiej — [X km | Y min autem/spacerem od domu].</strong>{' '}
          Wybierzcie trasę na krótki spacer lub dłuższy dzień wśród drzew; to część atrakcji Podlasia
          blisko domu.
        </li>
        <li>
          <strong>Białystok — [X km | Y min autem z Konne].</strong> Pałac Branickich i Stare Miasto
          pozwalają urozmaicić pobyt miejskim spacerem i architekturą.
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Aktywności sezonowe</h2>
      <p className="text-muted-foreground leading-relaxed">
        Latem można zaplanować spływ kajakowy rzeką Supraśl z lokalnym organizatorem. Jesienne
        grzybobranie w Puszczy Knyszyńskiej zaplanujcie na terenach, gdzie zezwalają na to aktualne
        zasady. Zimą sprawdźcie warunki na trasach spacerowych i narciarskich przed wyjściem.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Gdzie zjeść — kuchnia podlaska i tatarska
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        W Supraślu znajdziecie lokale z kuchnią regionalną, a w Kruszynianach warto poszukać tatarskich
        specjałów. Zajrzyjcie do naszego{' '}
        <Link to="/blog/przewodnik-kulinarny-suprasl" className="text-primary underline hover:text-primary/80">
          przewodnika po restauracjach Supraśla
        </Link>
        ; gospodarz chętnie podpowie też miejsca warte sprawdzenia.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Baza wypadowa: domek w lesie koło Supraśla
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods to drewniany dom do 8 osób w miejscowości Konne, wynajmowany na wyłączność. Zobaczcie{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          pomysły na weekend w Supraślu
        </Link>{' '}
        i{' '}
        <Link to="/puszcza-knyszynska-nocleg" className="text-primary underline hover:text-primary/80">
          nocleg w Puszczy Knyszyńskiej
        </Link>
        . Szczegóły oferty znajdziecie na stronie{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegi w Supraślu
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Praktycznie przed zwiedzaniem</h2>
      <p className="text-muted-foreground leading-relaxed">
        Odległości oznaczono placeholderami do uzupełnienia po weryfikacji w Google Maps przez
        gospodarza. Przed wizytą sprawdźcie godziny otwarcia, repertuar, dostępność plaży i zasady
        poruszania się po terenach chronionych. Jeśli planujecie, co warto zobaczyć na Podlasiu,
        dopasujcie trasę do godzin otwarcia i czasu, jaki macie na zwiedzanie. Aktualne warunki
        zbierania grzybów ustalcie dla konkretnego obszaru.
      </p>

      <section aria-labelledby="attractions-faq">
        <h2 id="attractions-faq" className="section-title !text-2xl md:!text-3xl">FAQ</h2>
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

export default AtrakcjeSuprasl;
