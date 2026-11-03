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
  'Dom Ludowy',
  'Biały Dworek – Park Krajobrazowy Puszczy Knyszyńskiej',
  'Cmentarz prawosławny',
  'Arboretum w\u00a0Kopnej Górze',
  'Sanktuarium Świętej Wody w\u00a0Wasilkowie',
  'Pałac Branickich w\u00a0Białymstoku',
  'Tykocin',
  'Kruszyniany',
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
          <strong>Monaster Zwiastowania NMP.</strong> Prawosławny klasztor założony około 1500 roku
          przez mnichów z&nbsp;Gródka, serce i&nbsp;najbardziej rozpoznawalny widok Supraśla.
          Ceglana cerkiew z&nbsp;gotyckimi wieżami i&nbsp;bizantyjskimi kopułami została wysadzona
          w&nbsp;1944 roku i&nbsp;odbudowana. Wstęp za dobrowolną cegiełkę w&nbsp;furcie, obowiązuje
          stosowny strój, a&nbsp;w&nbsp;poniedziałki i&nbsp;podczas popołudniowej „ciszy
          monasterskiej” teren jest zamknięty.
        </li>
        <li>
          <strong>Muzeum Ikon (ul. Klasztorna 1).</strong> Około 1,2&nbsp;tys. ikon, w&nbsp;dużej
          części przejętych przez celników na wschodniej granicy, pokazanych w&nbsp;9 salach
          urządzonych jak grota pustelnika, cerkiew czy wiejska chata. Są tu też ocalałe XVI-wieczne
          freski z&nbsp;wysadzonej cerkwi. Ikony pokazane tak, że nawet zatwardziały ateista stoi
          z&nbsp;otwartą buzią. Zarezerwujcie od godziny do pół dnia.
        </li>
        <li>
          <strong>Muzeum Sztuki Drukarskiej i&nbsp;Papiernictwa.</strong> Tuż obok Muzeum Ikon.
          Drukarnia działała w&nbsp;klasztorze od 1695 roku, a&nbsp;papiernia była pierwszą we
          wschodniej Polsce. W&nbsp;muzeum zobaczycie dawne maszyny drukarskie i&nbsp;własnoręcznie
          zrobicie kartkę papieru, co dzieci uwielbiają. Uwaga: do budynku prowadzą schody, nie ma
          podjazdu dla wózków.
        </li>
        <li>
          <strong>Pałac Buchholtzów i&nbsp;Dom Jansena.</strong> Secesyjna rezydencja fabrykantów,
          którzy po powstaniu listopadowym przenieśli tu fabryki włókiennicze, a&nbsp;naprzeciwko
          dawne zabudowania fabryczne. Dziś oba budynki należą do liceum plastycznego. Zobaczycie je
          na końcu ulicy 3&nbsp;Maja.
        </li>
        <li>
          <strong>Domy Tkaczy i&nbsp;drewniany Supraśl.</strong> Parterowe domy z&nbsp;lat 30. XIX
          wieku przy ulicy 3&nbsp;Maja, w&nbsp;których mieszkały rodziny tkaczy. Zwróćcie uwagę na
          masywne okiennice i&nbsp;kominy zwane „nogawicami”. Przy ul. Konarskiego stoi
          XVIII-wieczny Dom Ogrodnika, który bywał też karczmą i&nbsp;pocztą. Każdy dom wygląda jak
          z&nbsp;pocztówki, więc przygotujcie telefon.
        </li>
        <li>
          <strong>Bulwary Wiktora Wołkowa i&nbsp;plaża miejska.</strong> Około 1,1&nbsp;km alejek
          wzdłuż rzeki, kąpielisko, korty, boiska, minigolf i&nbsp;siłownia pod chmurką,
          a&nbsp;z&nbsp;kładki widok na monaster. Najprostszy plan na leniwe popołudnie, także
          z&nbsp;dziećmi.
        </li>
        <li>
          <strong>Teatr Wierszalin.</strong> Teatr z&nbsp;Supraśla, o&nbsp;którym mówi się
          w&nbsp;całej Polsce, założony w&nbsp;1991 roku przez Piotra Tomaszuka. Gra
          w&nbsp;drewnianym domu wśród rzeźb, inspirując się podlaskim folklorem i&nbsp;mitami.
          Spektakle, po których gada się jeszcze w&nbsp;samochodzie. Latem scena zwykle odpoczywa,
          więc na teatr najlepiej przyjechać jesienią albo zimą.
        </li>
        <li>
          <strong>Dom Ludowy i&nbsp;Biały Dworek.</strong> Drewniany, modernistyczny Dom Ludowy
          z&nbsp;1934 roku z&nbsp;przeszkloną klatką schodową to unikat na skalę kraju, dziś mieści
          restaurację Prowincja. Biały Dworek z&nbsp;1822 roku jest siedzibą Parku Krajobrazowego
          Puszczy Knyszyńskiej, z&nbsp;wystawą o&nbsp;faunie i&nbsp;florze puszczy. Dobry start
          przed leśnymi szlakami.
        </li>
        <li>
          <strong>Supraśl filmowy.</strong> To tutaj Jacek Bromski kręcił trylogię „U&nbsp;Pana
          Boga…”. Filmowy posterunek w&nbsp;Królowym Moście stoi przy ul. Zielonej, a&nbsp;dom
          komendanta zagrał Dom Kleina przy ul. 3&nbsp;Maja. Fani znajdą też komin z&nbsp;pamiętnej
          sceny. Kościół św. Trójcy przy Piłsudskiego widać z&nbsp;kolei w&nbsp;serialu „Blondynka”.
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
          <strong>Arboretum w&nbsp;Kopnej Górze.</strong> Ponad 20&nbsp;hektarów drzew
          i&nbsp;krzewów z&nbsp;całego świata, kilkanaście minut od domu. Najpiękniejsze w&nbsp;maju
          i&nbsp;październiku.
        </li>
        <li>
          <strong>Sanktuarium Świętej Wody w&nbsp;Wasilkowie.</strong> Źródełko i&nbsp;Góra Krzyży
          z&nbsp;tysiącami krzyży, po drodze między Supraślem a&nbsp;Białymstokiem.
        </li>
        <li>
          <strong>Białystok (30–40&nbsp;minut autem).</strong> Pałac Branickich, nazywany Wersalem
          Północy, Rynek Kościuszki i&nbsp;drewniane Bojary, jeśli po dwóch dniach w&nbsp;lesie
          zatęsknicie za miastem. Rozpisaliśmy to w&nbsp;tekście{' '}
          <Link
            to="/blog/bialystok-i-okolice-co-zobaczyc"
            className="text-primary underline hover:text-primary/80"
          >
            co warto zobaczyć w&nbsp;Białymstoku i&nbsp;okolicach
          </Link>
          .
        </li>
        <li>
          <strong>Tykocin nad Narwią (około godziny).</strong> Rynek, Wielka Synagoga
          i&nbsp;odbudowany zamek. W&nbsp;pakiecie z&nbsp;kładką w&nbsp;Waniewie to gotowy plan na
          niedzielę.
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
        W&nbsp;Supraślu zjecie kartacze, babkę ziemniaczaną i&nbsp;sękacz, m.in. w&nbsp;Łukaszówce,
        której właścicielka wygrywała mistrzostwa w&nbsp;pieczeniu babki,
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
