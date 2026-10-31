import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import monastery from '@/assets/blog-monaster-suprasl-optimized.webp';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Co warto zobaczyć w\u00a0Supraślu i\u00a0na Podlasiu w\u00a0jeden dzień?',
    answer:
      'Rano monaster i\u00a0Muzeum Ikon, potem spacer ulicą 3 Maja obok Domów Tkaczy, obiad w\u00a0miasteczku i\u00a0leniwe popołudnie nad rzeką Supraśl. Jeśli zostanie Wam siły, dorzućcie Muzeum Drukarstwa albo bulwary.',
  },
  {
    question: 'Czy Supraśl jest uzdrowiskiem?',
    answer:
      'Tak, Supraśl ma oficjalny status uzdrowiska. Czuć to po powietrzu i\u00a0tempie: miasteczko jest małe, zielone i\u00a0najlepiej zwiedza się je pieszo, bez spinania się, że trzeba zobaczyć wszystko.',
  },
  {
    question: 'Jak daleko z\u00a0Supraśla do Kruszynian?',
    answer:
      'To dalsza wycieczka, na pół dnia albo cały dzień. W\u00a0Kruszynianach czeka drewniany meczet, mizar i\u00a0tatarska kuchnia, dla której warto przyjechać głodnym.',
  },
  {
    question: 'Czy w\u00a0Puszczy Knyszyńskiej można zbierać grzyby?',
    answer:
      'Tak, poza rezerwatami i\u00a0miejscami oznaczonymi zakazem. Jesienią to tutaj niemal sport narodowy. Zbierajcie tylko te gatunki, które znacie na sto procent.',
  },
  {
    question: 'Gdzie zjeść kuchnię podlaską i\u00a0tatarską?',
    answer:
      'Kartacze, babkę i\u00a0kiszkę ziemniaczaną zjecie w\u00a0Supraślu, a\u00a0tatarskie pierekaczewniki i\u00a0pierogi w\u00a0Kruszynianach. Maciej chętnie powie, gdzie sam chodzi na obiad.',
  },
];

const attractions = [
  'Monaster Zwiastowania NMP',
  'Muzeum Ikon',
  'Muzeum Drukarstwa i\u00a0Papieru',
  'Pałac Buchholtzów',
  'Domy Tkaczy',
  'Bulwary nad rzeką Supraśl i\u00a0plaża miejska',
  'Teatr Wierszalin',
  'Cmentarz prawosławny',
];

const attractionListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Atrakcje Supraśla i\u00a0okolic',
  itemListElement: attractions.map((name, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
  })),
};

const AtrakcjeSuprasl = () => (
  <SEOPageLayout
    title="Atrakcje Supraśla i&nbsp;okolic – przewodnik | In The Woods"
    description="Monaster, Muzeum Ikon, Wierszalin, Krzemienne Góry, Kruszyniany. Co warto zobaczyć w&nbsp;Supraślu i&nbsp;okolicy, od ludzi, którzy tu mieszkają."
    breadcrumbName="Atrakcje Supraśla"
    ogImage="https://www.suprasl.online/images/terrace-porch.jpg"
    jsonLd={[...createLandingPageSchemas('/atrakcje-suprasl', faqs), attractionListSchema]}
    showRelatedPages={false}
    ctaTitle="Planujecie pobyt? Sprawdźcie wolne terminy"
    ctaDescription="Maciej podpowie, jak połączyć zwiedzanie Supraśla z&nbsp;leniuchowaniem w&nbsp;lesie."
    ctaFormLabel="Zapytaj o&nbsp;pobyt"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Atrakcje Supraśla: co robić, kiedy wyjdziecie z&nbsp;balii
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Supraśl to małe uzdrowisko z&nbsp;monasterem, ikonami, rzeką i&nbsp;teatrem, o&nbsp;którym
        mówi się w&nbsp;całej Polsce, a&nbsp;dookoła zaczyna się Puszcza Knyszyńska. Z&nbsp;naszego
        domu do centrum jedziecie około 10&nbsp;minut. Poniżej miejsca, które sami polecamy
        znajomym.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={monastery}
          alt="Monaster Zwiastowania NMP — jedna z&nbsp;najważniejszych atrakcji Supraśla"
          width={810}
          height={1080}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Atrakcje w&nbsp;Supraślu (około 10&nbsp;minut autem od domu)
      </h2>
      <ul className="space-y-5 text-muted-foreground">
        <li>
          <strong>Monaster Zwiastowania NMP.</strong> Prawosławny klasztor z&nbsp;przełomu XV
          i&nbsp;XVI wieku, serce i&nbsp;najbardziej rozpoznawalny widok Supraśla. Nawet jeśli nie
          lubicie zabytków, ten robi wrażenie.
        </li>
        <li>
          <strong>Muzeum Ikon.</strong> Ikony pokazane tak, że nawet zatwardziały ateista stoi
          z&nbsp;otwartą buzią. Dobre na deszczowy dzień i&nbsp;na odpoczynek od leśnych tras.
        </li>
        <li>
          <strong>Muzeum Drukarstwa i&nbsp;Papieru.</strong> Historia drukarstwa
          i&nbsp;papiernictwa, czyli rzemiosła, z&nbsp;którego Supraśl słynął przez wieki. Ciekawy
          przystanek dla rodzin i&nbsp;dla każdego, kto lubi lokalną historię.
        </li>
        <li>
          <strong>Pałac Buchholtzów.</strong> Rezydencja fabrykantów, którzy zrobili z&nbsp;Supraśla
          miasto włókiennicze. Zobaczycie go przy okazji spaceru po centrum i&nbsp;ulicy 3 Maja.
        </li>
        <li>
          <strong>Domy Tkaczy.</strong> Drewniane domy dla robotników fabryki z&nbsp;XIX wieku, przy
          ulicy 3 Maja. Każdy wygląda jak z&nbsp;pocztówki, więc przygotujcie telefon na zdjęcia.
        </li>
        <li>
          <strong>Bulwary nad rzeką Supraśl i&nbsp;plaża miejska.</strong> Spacer nad wodą, lody
          w&nbsp;ręku, a&nbsp;latem plaża. Najprostszy plan na leniwe popołudnie, także
          z&nbsp;dziećmi.
        </li>
        <li>
          <strong>Teatr Wierszalin.</strong> Teatr z&nbsp;Supraśla, o&nbsp;którym mówi się
          w&nbsp;całej Polsce. Spektakle, po których gada się jeszcze w&nbsp;samochodzie. Bilety
          znikają szybko, więc zajrzyjcie do repertuaru przed przyjazdem.
        </li>
        <li>
          <strong>Cmentarz prawosławny.</strong> Ciche miejsce, które pokazuje wielowyznaniową
          historię miasteczka. Idźcie tam spokojnie i&nbsp;z&nbsp;szacunkiem.
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Wycieczki z&nbsp;domu: atrakcje okolicy
      </h2>
      <ul className="space-y-4 text-muted-foreground">
        <li>
          <strong>Arboretum w&nbsp;Kopnej Górze.</strong> Kilka godzin łażenia między drzewami
          z&nbsp;całego świata. Dzieci zbierają szyszki, dorośli udają, że nie. Jedna
          z&nbsp;najładniejszych przyrodniczych atrakcji Podlasia.
        </li>
        <li>
          <strong>Kruszyniany.</strong> Tatarska wieś z&nbsp;drewnianym meczetem i&nbsp;mizarem.
          Wycieczka na pół dnia albo cały dzień, najlepiej połączona z&nbsp;obiadem
          w&nbsp;tatarskiej kuchni.
        </li>
        <li>
          <strong>Rezerwat Krzemienne Góry.</strong> Przyrodniczy zakątek niedaleko domu, dobry na
          leśny spacer bez długiego dojazdu.
        </li>
        <li>
          <strong>Szlaki Puszczy Knyszyńskiej.</strong> Zaczynają się właściwie za płotem. Krótki
          spacer przed śniadaniem albo cały dzień w&nbsp;lesie z&nbsp;kanapkami w&nbsp;plecaku.
        </li>
        <li>
          <strong>Białystok (30–40&nbsp;minut autem).</strong> Pałac Branickich, nazywany Wersalem
          Północy, i&nbsp;spacer po centrum, jeśli po dwóch dniach w&nbsp;lesie zatęsknicie za
          miastem.
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Co robić o&nbsp;różnych porach roku</h2>
      <p className="text-muted-foreground leading-relaxed">
        Latem kajaki na rzece Supraśl, która płynie spokojnie, więc dacie radę nawet bez
        doświadczenia. Jesienią grzybobranie poza rezerwatami. Zimą spacery po śniegu i&nbsp;narty
        biegowe, a&nbsp;potem szybki powrót do kominka.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Gdzie zjeść: kuchnia podlaska i&nbsp;tatarska
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        W&nbsp;Supraślu zjecie kartacze, babkę ziemniaczaną i&nbsp;sękacz,
        a&nbsp;w&nbsp;Kruszynianach tatarskie specjały. Lokale opisaliśmy w&nbsp;naszym{' '}
        <Link
          to="/blog/przewodnik-kulinarny-suprasl"
          className="text-primary underline hover:text-primary/80"
        >
          przewodniku kulinarnym po Supraślu
        </Link>
        , a&nbsp;Maciej chętnie powie, gdzie sam chodzi na obiad.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Baza wypadowa: dom w&nbsp;lesie koło Supraśla
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods to drewniany dom dla maksymalnie 8&nbsp;osób w&nbsp;Konnem, wynajmowany
        w&nbsp;całości. Gotowy plan znajdziecie na stronie o{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          weekendzie w&nbsp;Supraślu
        </Link>
        , trasy na stronie o{' '}
        <Link
          to="/puszcza-knyszynska-nocleg"
          className="text-primary underline hover:text-primary/80"
        >
          noclegu w&nbsp;Puszczy Knyszyńskiej
        </Link>
        , a&nbsp;ceny i&nbsp;szczegóły na stronie o{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegach w&nbsp;Supraślu
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Zanim ruszycie: godziny, bilety, zasady
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Muzea i&nbsp;teatr mają swoje godziny i&nbsp;repertuar, które zmieniają się w&nbsp;ciągu
        roku, więc zajrzyjcie na ich strony przed wyjazdem. W&nbsp;rezerwatach chodzicie
        wyznaczonymi ścieżkami, a&nbsp;grzyby zbieracie poza nimi.
      </p>

      <section aria-labelledby="attractions-faq">
        <h2 id="attractions-faq" className="section-title !text-2xl md:!text-3xl">
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

export default AtrakcjeSuprasl;
