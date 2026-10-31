import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import monastery from '@/assets/blog-monaster-suprasl-optimized.webp';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Co warto zobaczyć w Supraślu i na Podlasiu w jeden dzień?',
    answer:
      'Rano monaster i Muzeum Ikon, potem spacer ulicą 3 Maja obok Domów Tkaczy, obiad w miasteczku i leniwe popołudnie nad rzeką Supraśl. Jeśli zostanie Wam siły, dorzućcie Muzeum Drukarstwa albo bulwary.',
  },
  {
    question: 'Czy Supraśl jest uzdrowiskiem?',
    answer:
      'Tak, Supraśl ma oficjalny status uzdrowiska. Czuć to po powietrzu i tempie: miasteczko jest małe, zielone i najlepiej zwiedza się je pieszo, bez spinania się, że trzeba zobaczyć wszystko.',
  },
  {
    question: 'Jak daleko z Supraśla do Kruszynian?',
    answer:
      'To dalsza wycieczka, na pół dnia albo cały dzień. W Kruszynianach czeka drewniany meczet, mizar i tatarska kuchnia, dla której warto przyjechać głodnym.',
  },
  {
    question: 'Czy w Puszczy Knyszyńskiej można zbierać grzyby?',
    answer:
      'Tak, poza rezerwatami i miejscami oznaczonymi zakazem. Jesienią to tutaj niemal sport narodowy. Zbierajcie tylko te gatunki, które znacie na sto procent.',
  },
  {
    question: 'Gdzie zjeść kuchnię podlaską i tatarską?',
    answer:
      'Kartacze, babkę i kiszkę ziemniaczaną zjecie w Supraślu, a tatarskie pierekaczewniki i pierogi w Kruszynianach. Maciej chętnie powie, gdzie sam chodzi na obiad.',
  },
];

const attractions = [
  'Monaster Zwiastowania NMP',
  'Muzeum Ikon',
  'Muzeum Drukarstwa i Papieru',
  'Pałac Buchholtzów',
  'Domy Tkaczy',
  'Bulwary nad rzeką Supraśl i plaża miejska',
  'Teatr Wierszalin',
  'Cmentarz prawosławny',
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
    description="Monaster, Muzeum Ikon, Wierszalin, Krzemienne Góry, Kruszyniany. Co warto zobaczyć w Supraślu i okolicy, od ludzi, którzy tu mieszkają."
    breadcrumbName="Atrakcje Supraśla"
    ogImage="https://www.suprasl.online/images/terrace-porch.jpg"
    jsonLd={[
      ...createLandingPageSchemas('/atrakcje-suprasl', faqs),
      attractionListSchema,
    ]}
    showRelatedPages={false}
    ctaTitle="Planujecie pobyt? Sprawdźcie wolne terminy"
    ctaDescription="Maciej podpowie, jak połączyć zwiedzanie Supraśla z leniuchowaniem w lesie."
    ctaFormLabel="Zapytaj o pobyt"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Atrakcje Supraśla: co robić, kiedy wyjdziecie z balii
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Supraśl to małe uzdrowisko z monasterem, ikonami, rzeką i teatrem, o którym mówi się w całej
        Polsce, a dookoła zaczyna się Puszcza Knyszyńska. Z naszego domu do centrum jedziecie około
        10 minut. Poniżej miejsca, które sami polecamy znajomym.
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

      <h2 className="section-title !text-2xl md:!text-3xl">Atrakcje w Supraślu (około 10 minut autem od domu)</h2>
      <ul className="space-y-5 text-muted-foreground">
        <li>
          <strong>Monaster Zwiastowania NMP.</strong> Prawosławny klasztor z przełomu XV i XVI wieku,
          serce i najbardziej rozpoznawalny widok Supraśla. Nawet jeśli nie lubicie zabytków, ten
          robi wrażenie.
        </li>
        <li>
          <strong>Muzeum Ikon.</strong> Ikony pokazane tak, że nawet zatwardziały ateista stoi
          z otwartą buzią. Dobre na deszczowy dzień i na odpoczynek od leśnych tras.
        </li>
        <li>
          <strong>Muzeum Drukarstwa i Papieru.</strong> Historia drukarstwa i papiernictwa, czyli
          rzemiosła, z którego Supraśl słynął przez wieki. Ciekawy przystanek dla rodzin i dla
          każdego, kto lubi lokalną historię.
        </li>
        <li>
          <strong>Pałac Buchholtzów.</strong> Rezydencja fabrykantów, którzy zrobili z Supraśla
          miasto włókiennicze. Zobaczycie go przy okazji spaceru po centrum i ulicy 3 Maja.
        </li>
        <li>
          <strong>Domy Tkaczy.</strong> Drewniane domy dla robotników fabryki z XIX wieku, przy ulicy
          3 Maja. Każdy wygląda jak z pocztówki, więc przygotujcie telefon na zdjęcia.
        </li>
        <li>
          <strong>Bulwary nad rzeką Supraśl i plaża miejska.</strong> Spacer nad wodą, lody w ręku,
          a latem plaża. Najprostszy plan na leniwe popołudnie, także z dziećmi.
        </li>
        <li>
          <strong>Teatr Wierszalin.</strong> Teatr z Supraśla, o którym mówi się w całej Polsce.
          Spektakle, po których gada się jeszcze w samochodzie. Bilety znikają szybko, więc
          zajrzyjcie do repertuaru przed przyjazdem.
        </li>
        <li>
          <strong>Cmentarz prawosławny.</strong> Ciche miejsce, które pokazuje wielowyznaniową
          historię miasteczka. Idźcie tam spokojnie i z szacunkiem.
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Wycieczki z domu: atrakcje okolicy
      </h2>
      <ul className="space-y-4 text-muted-foreground">
        <li>
          <strong>Arboretum w Kopnej Górze.</strong> Kilka godzin łażenia między drzewami z całego
          świata. Dzieci zbierają szyszki, dorośli udają, że nie. Jedna z najładniejszych
          przyrodniczych atrakcji Podlasia.
        </li>
        <li>
          <strong>Kruszyniany.</strong> Tatarska wieś z drewnianym meczetem i mizarem. Wycieczka na
          pół dnia albo cały dzień, najlepiej połączona z obiadem w tatarskiej kuchni.
        </li>
        <li>
          <strong>Rezerwat Krzemienne Góry.</strong> Przyrodniczy zakątek niedaleko domu, dobry na
          leśny spacer bez długiego dojazdu.
        </li>
        <li>
          <strong>Szlaki Puszczy Knyszyńskiej.</strong> Zaczynają się właściwie za płotem. Krótki
          spacer przed śniadaniem albo cały dzień w lesie z kanapkami w plecaku.
        </li>
        <li>
          <strong>Białystok (30–40 minut autem).</strong> Pałac Branickich, nazywany Wersalem Północy,
          i spacer po centrum, jeśli po dwóch dniach w lesie zatęsknicie za miastem.
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Co robić o różnych porach roku</h2>
      <p className="text-muted-foreground leading-relaxed">
        Latem kajaki na rzece Supraśl, która płynie spokojnie, więc dacie radę nawet bez
        doświadczenia. Jesienią grzybobranie poza rezerwatami. Zimą spacery po śniegu i narty
        biegowe, a potem szybki powrót do kominka.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Gdzie zjeść: kuchnia podlaska i tatarska
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        W Supraślu zjecie kartacze, babkę ziemniaczaną i sękacz, a w Kruszynianach tatarskie
        specjały. Lokale opisaliśmy w naszym{' '}
        <Link to="/blog/przewodnik-kulinarny-suprasl" className="text-primary underline hover:text-primary/80">
          przewodniku kulinarnym po Supraślu
        </Link>
        , a Maciej chętnie powie, gdzie sam chodzi na obiad.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Baza wypadowa: dom w lesie koło Supraśla
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods to drewniany dom dla maksymalnie 8 osób w Konnem, wynajmowany w całości. Gotowy
        plan znajdziecie na stronie o{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          weekendzie w Supraślu
        </Link>
        , trasy na stronie o{' '}
        <Link to="/puszcza-knyszynska-nocleg" className="text-primary underline hover:text-primary/80">
          noclegu w Puszczy Knyszyńskiej
        </Link>
        , a ceny i szczegóły na stronie o{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegach w Supraślu
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Zanim ruszycie: godziny, bilety, zasady</h2>
      <p className="text-muted-foreground leading-relaxed">
        Muzea i teatr mają swoje godziny i repertuar, które zmieniają się w ciągu roku, więc zajrzyjcie
        na ich strony przed wyjazdem. W rezerwatach chodzicie wyznaczonymi ścieżkami, a grzyby
        zbieracie poza nimi.
      </p>

      <section aria-labelledby="attractions-faq">
        <h2 id="attractions-faq" className="section-title !text-2xl md:!text-3xl">Najczęstsze pytania</h2>
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
