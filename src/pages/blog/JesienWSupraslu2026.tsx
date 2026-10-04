import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

const autumnEvents = [
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Bison Ultra',
    startDate: '2026-10-03',
    endDate: '2026-10-04',
    location: { '@type': 'Place', name: 'Supraśl' },
    url: 'https://bisonultratrail.pl',
    eventStatus: 'https://schema.org/EventScheduled',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Supraska Jesień Chopinowska 2026 – koncert Bartosza Skłodowskiego',
    startDate: '2026-10-17T17:00:00+02:00',
    location: { '@type': 'Place', name: 'Dom Ludowy', address: { '@type': 'PostalAddress', addressLocality: 'Supraśl', addressCountry: 'PL' } },
    eventStatus: 'https://schema.org/EventScheduled',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Supraska Jesień Chopinowska 2026 – koncert Marka Drewnowskiego',
    startDate: '2026-11-14T17:00:00+01:00',
    location: { '@type': 'Place', name: 'Dom Ludowy', address: { '@type': 'PostalAddress', addressLocality: 'Supraśl', addressCountry: 'PL' } },
    eventStatus: 'https://schema.org/EventScheduled',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Supraska Jesień Chopinowska 2026 – koncert Krzysztofa Wiercińskiego',
    startDate: '2026-12-05T17:00:00+01:00',
    location: { '@type': 'Place', name: 'Dom Ludowy', address: { '@type': 'PostalAddress', addressLocality: 'Supraśl', addressCountry: 'PL' } },
    eventStatus: 'https://schema.org/EventScheduled',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Jarmark Świąteczny w Supraślu – otwarcie',
    startDate: '2026-12-12T16:00:00+01:00',
    location: { '@type': 'Place', name: 'Rynek w Supraślu', address: { '@type': 'PostalAddress', addressLocality: 'Supraśl', addressCountry: 'PL' } },
    eventStatus: 'https://schema.org/EventScheduled',
  },
];

const faqs = [
  {
    question: 'Co robić w Supraślu jesienią?',
    answer:
      'W październiku, listopadzie i grudniu 2026 Centrum Kultury i Rekreacji zaplanowało m.in. koncerty Supraskiej Jesieni Chopinowskiej, wernisaże, warsztaty kulinarne, wykłady, spotkania autorskie oraz Jarmark Świąteczny. Sportowcy mogą liczyć na Bison Ultra i zawody Kolarski Supraśl.',
  },
  {
    question: 'Czy w Supraślu są wydarzenia kulturalne w listopadzie?',
    answer:
      'Tak. W listopadzie odbędą się m.in. wykład o bitwie pod Waliłami (7.11), obchody Święta Niepodległości (11.11), koncert Marka Drewnowskiego (14.11), spotkanie z Jerzym Chmielewskim (20.11) i Narodowe Czytanie „Dziadów" (25.11).',
  },
  {
    question: 'Kiedy odbędzie się Jarmark Świąteczny w Supraślu?',
    answer:
      'Otwarcie Jarmarku Świątecznego zaplanowano na 12 grudnia 2026 o godz. 16:00 na Rynku w Supraślu.',
  },
  {
    question: 'Gdzie nocować podczas Supraskiej Jesieni Chopinowskiej?',
    answer:
      'Koncerty odbędą się 17 października, 14 listopada i 5 grudnia w Domu Ludowym w Supraślu. Na czas wydarzenia możesz zarezerwować domek na Podlasiu i połączyć koncert z weekendowym wypoczynkiem.',
  },
  {
    question: 'Czy kalendarz wydarzeń może się zmienić?',
    answer:
      'Tak. Kalendarz obejmuje najbliższe trzy miesiące i może być aktualizowany. Sprawdzaj oficjalny post Centrum Kultury i Rekreacji w Supraślu: [TODO: dodaj link].',
  },
];

const EventTable = ({
  month,
  children,
}: {
  month: string;
  children: ReactNode;
}) => (
  <div className="not-prose my-6 overflow-x-auto rounded-lg border border-border">
    <table className="w-full min-w-[640px] text-left text-sm">
      <caption className="sr-only">Wydarzenia w Supraślu – {month} 2026</caption>
      <thead className="bg-secondary text-foreground">
        <tr>
          <th scope="col" className="px-4 py-3 font-semibold">Data</th>
          <th scope="col" className="px-4 py-3 font-semibold">Godzina</th>
          <th scope="col" className="px-4 py-3 font-semibold">Wydarzenie</th>
          <th scope="col" className="px-4 py-3 font-semibold">Miejsce</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">{children}</tbody>
    </table>
  </div>
);

const EventRow = ({
  date,
  time,
  event,
  place,
}: {
  date: string;
  time: ReactNode;
  event: ReactNode;
  place: string;
}) => (
  <tr className="bg-background">
    <td className="px-4 py-3 align-top">{date}</td>
    <td className="px-4 py-3 align-top whitespace-nowrap">{time}</td>
    <td className="px-4 py-3 align-top">{event}</td>
    <td className="px-4 py-3 align-top">{place}</td>
  </tr>
);

const JesienWSupraslu2026 = () => (
  <BlogArticleLayout
    title="Jesień w Supraślu 2026 – kalendarz wydarzeń kulturalnych"
    metaTitle="Jesień w Supraślu 2026 – kalendarz wydarzeń kulturalnych"
    metaDescription="Wydarzenia w Supraślu jesień 2026: koncerty, warsztaty, Jarmark Świąteczny. Sprawdź pełny kalendarz i zarezerwuj domek na Podlasiu już dziś!"
    slug="jesien-w-suprasliu-2026-wydarzenia-kulturalne"
    publishDate="2026-10-03"
    readTime="12 min"
    ogImage="https://www.suprasl.online/images/gallery-dab-puszcza.webp"
    keywords={[
      'wydarzenia w Supraślu jesienią 2026',
      'jesień w Supraślu 2026',
      'kalendarz wydarzeń Supraśl',
      'jesień na Podlasiu',
      'Supraska Jesień Chopinowska',
      'Jarmark Świąteczny Supraśl',
    ]}
    faqs={faqs}
    events={autumnEvents}
    showFaqSection={false}
    relatedArticles={[
      { title: 'Co robić w Supraślu – kompletny przewodnik', slug: 'co-robic-suprasl' },
      { title: 'Weekend w Supraślu – plan pobytu na 2-3 dni', slug: 'weekend-suprasl-plan' },
      { title: 'Atrakcje Supraśla – uzdrowisko w Puszczy', slug: 'suprasl-atrakcje-uzdrowisko' },
      { title: 'Restauracje Supraśl – gdzie zjeść', slug: 'restauracje-suprasl' },
    ]}
  >
    <img
      src="/images/gallery-dab-puszcza.webp"
      alt="Puszcza Knyszyńska w Supraślu – leśne tło jesiennych wydarzeń kulturalnych 2026"
      className="mb-8 w-full rounded-lg shadow-md"
      width="1200"
      height="800"
      loading="lazy"
      decoding="async"
    />
    <p>
      Jesień na Podlasiu ma swój urok: złote liście w Puszczy Knyszyńskiej, chłodne poranki i
      spokojniejsze uliczki. A kiedy dni robią się krótsze, Supraśl pokazuje, że potrafi bawić także
      po zmroku. <strong>Wydarzenia w Supraślu jesienią 2026</strong> to koncerty, wystawy, spotkania
      autorskie, warsztaty i wielkie święta – od biegu Bison Ultra po Jarmark Świąteczny.
      Przygotowaliśmy kalendarz, który pomoże zaplanować weekend w Supraślu, a potem znaleźć domek na
      Podlasiu w sam raz dla Ciebie.
    </p>
    <p>
      <em>
        Kalendarz może ulec zmianie – aktualne informacje znajdziesz na stronie Centrum Kultury i
        Rekreacji w Supraślu (<span className="font-medium">[TODO: dodaj link]</span>). Ostatnia
        aktualizacja: 3 października 2026.
      </em>
    </p>

    <h2>Supraśl jesienią – dlaczego warto przyjechać?</h2>
    <p>
      To miasteczko na skraju Puszczy Knyszyńskiej, w którym kultura jest na wyciągnięcie ręki.
      Większość wydarzeń odbywa się w centrum – w Bibliotece Publicznej, Domu Ludowym czy na Rynku –
      więc łatwo połączyć spacer z koncertem lub wernisażem. To dobry pomysł na <strong>jesień na
      Podlasiu</strong> dla par, rodzin i grup przyjaciół.
    </p>

    <h2>Październik 2026</h2>
    <p>Miesiąc zaczyna się sportowo, a kończy rodzinnie i... na rowerach.</p>
    <EventTable month="październik">
      <EventRow date="3–4 października" time="–" event={<><a href="https://bisonultratrail.pl" target="_blank" rel="noopener">Bison Ultra – bieg</a> (bisonultratrail.pl)</>} place="Supraśl" />
      <EventRow date="9 października" time="18:00" event="Kiszone inaczej – warsztaty kiszenia orientalnego" place="Świetlica w Karakulach" />
      <EventRow date="10 października" time="16:00" event="Dzień Gier Planszowych" place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="12 października" time="–" event="Smak bezpiecznej wsi – makarony" place="Świetlica w Karakulach" />
      <EventRow date="12 października" time="17:00" event="Moje cudeńka – wernisaż prac Danuty Ignasiak" place="Biblioteka, sala Liliput" />
      <EventRow date="13 października" time="16:00" event="Woda ma głos – partycypacja obywateli w planowaniu" place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="17 października" time="11:00" event={'Konferencja „Małe miasta" – Collegium Suprasliense'} place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="17 października" time="17:00" event="Supraska Jesień Chopinowska 2026 – koncert Bartosza Skłodowskiego" place="Dom Ludowy" />
      <EventRow date="20 października" time="14:00" event="Ogólnopolski przegląd i warsztaty małych form filmowych" place="Dom Ludowy" />
      <EventRow date="21–22 października" time="–" event="Smak bezpiecznej wsi – weki" place="Świetlica w Karakulach" />
      <EventRow date="24 października" time="–" event="Dzień Seniora w Ogrodniczkach" place="Świetlica w Ogrodniczkach" />
      <EventRow date="24 października" time="10:00" event="Hubertus – KS Victoria" place="Stadnina koni Victoria" />
      <EventRow date="24 października" time="10:00" event="Kolarski Supraśl – zawody rowerowe" place="Glinki, Supraśl" />
      <EventRow date="25 października" time="–" event="Dzień Seniora w Ciasnem" place="Świetlica w Ciasnem" />
    </EventTable>
    <p>
      <strong>Nasza rekomendacja:</strong> jeśli lubisz sport, zaplanuj przyjazd na pierwszy weekend
      października i kibicuj uczestnikom Bison Ultra. Wolisz spokojniejsze klimaty? Wybierz 17
      października – przedpołudnie na konferencji, wieczorem koncert fortepianowy. Z kolei 24
      października to idealna okazja na rodzinną wycieczkę: w jednym dniu możesz zobaczyć zawody
      rowerowe lub Hubertus w stadninie koni Victoria.
    </p>

    <h2>Listopad 2026</h2>
    <p>W listopadzie program robi się bardziej refleksyjny – dużo historii, muzyki i spotkań z ludźmi kultury.</p>
    <EventTable month="listopad">
      <EventRow date="4 listopada" time="–" event="Dzień Seniora w Supraślu" place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="5 listopada" time="11:00" event="Debata o społecznym finansowaniu kultury – konferencja Narodowego Centrum Kultury" place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="7 listopada" time="11:00" event="Bitwa pod Waliłami – wykład Krzysztofa Łaziuka" place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="9 listopada" time="17:00" event="Wieczór Pieśni Patriotycznych" place="Świetlica w Ogrodniczkach" />
      <EventRow date="10 listopada" time="11:00" event="Niepodległość ma smak gęsiny – warsztaty pieczenia gęsiny" place="Świetlica w Karakulach" />
      <EventRow date="11 listopada" time="11:00" event="Święto Niepodległości – uroczystości pod pomnikiem" place="Ogród Saski" />
      <EventRow date="11 listopada" time="15:00" event="Ognisko niepodległościowe" place="Świetlica w Karakulach" />
      <EventRow date="13 listopada" time="16:30" event="XV Turniej Szachowy z okazji odzyskania niepodległości" place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="14 listopada" time="17:00" event="Supraska Jesień Chopinowska 2026 – koncert Marka Drewnowskiego" place="Dom Ludowy" />
      <EventRow date="17 listopada" time={<>11:00{/* <!-- TODO: verify time – Facebook says 11:00, poster says 10:00 --> */}</>} event="Razem możemy więcej – konferencja Otwartej Instytucji Kultury" place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="18–19 listopada" time="16:00" event="Woda ma głos – nowoczesna gospodarka wodna w samorządach" place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="20 listopada" time="16:00" event={'„Wierszalin 2.0" – spotkanie autorskie z Jerzym Chmielewskim'} place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="22 listopada" time="–" event="Dzień Seniora w Karakulach" place="Świetlica w Karakulach" />
      <EventRow date="25 listopada" time="12:00" event={'„Dziady" – Narodowe Czytanie: konteksty i historia'} place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="25 listopada" time="17:30" event="Warsztaty pierników" place="Świetlica w Karakulach" />
      <EventRow date="27 listopada" time="16:00" event={'Finisaż wystawy „Strój" Kaciaryny Vadanosavej + koncert muzyki dawnej'} place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="29 listopada" time="–" event="196. rocznica Powstania Listopadowego" place="Cmentarz Powstańców Listopadowych w Kopnej Górze" />
    </EventTable>
    <p>
      <strong>Nasza rekomendacja:</strong> długi weekend wokół 11 listopada to dobry moment na
      wyjazd – uroczystości w Ogrodzie Saskim, ognisko, warsztaty gęsiny i turniej szachowy. Jeśli
      szukasz <strong>noclegów w Supraślu</strong> na ostatni weekend miesiąca, możesz połączyć
      finisaż wystawy z koncertem muzyki dawnej, a po drodze zajrzeć na warsztaty pierników.
    </p>

    <h2>Grudzień 2026</h2>
    <p>Grudzień to początek świątecznej atmosfery.</p>
    <EventTable month="grudzień">
      <EventRow date="3 grudnia" time="17:00" event={'Wernisaż wystawy „Wielkie żarcie" – Grupa Bochemia oraz ceramika z warsztatów grup działających przy CKiR'} place="Biblioteka Publiczna w Supraślu" />
      <EventRow date="5 grudnia" time="17:00" event="Supraska Jesień Chopinowska 2026 – koncert Krzysztofa Wiercińskiego" place="Dom Ludowy" />
      <EventRow date="11 grudnia" time="19:00" event={'„Krótka historia o tańcu" – spektakl Supraskiego Teatru Tańca'} place="Dom Ludowy" />
      <EventRow date="12 grudnia" time="16:00" event={<strong>Jarmark Świąteczny w Supraślu – otwarcie</strong>} place="Rynek w Supraślu" />
      <EventRow date="14 grudnia" time="17:30" event="Warsztaty świąteczne – pierogi (grupa dzieci młodszych)" place="Świetlica w Karakulach" />
      <EventRow date="16 grudnia" time="17:30" event="Warsztaty świąteczne – pierogi (grupa młodzieży)" place="Świetlica w Karakulach" />
    </EventTable>
    <p>
      <strong>Nasza rekomendacja:</strong> weekend 12 grudnia to otwarcie jarmarku –{' '}
      <strong>Jarmark Świąteczny Supraśl</strong> to dobry pretekst, by spędzić kilka dni na
      Podlasiu w świątecznym nastroju.
    </p>

    <h2>Muzyka i koncerty</h2>
    <p>
      Serce jesiennego programu stanowi <strong>Supraska Jesień Chopinowska 2026</strong> – trzy
      koncerty fortepianowe w Domu Ludowym: 17 października (Bartosz Skłodowski), 14 listopada
      (Marek Drewnowski) i 5 grudnia (Krzysztof Wierciński). Do tego 27 listopada koncert muzyki
      dawnej w Bibliotece. Dla fanów teatru tańca – spektakl „Krótka historia o tańcu" 11 grudnia.
    </p>

    <h2>Dla rodzin i dzieci</h2>
    <p>
      Rodziny mogą wybrać Dzień Gier Planszowych (10 października), warsztaty pierników (25
      listopada) czy grudniowe warsztaty świąteczne z lepieniem pierogów. Dzieci i młodzież mają
      osobne terminy zajęć – 14 i 16 grudnia.
    </p>

    <h2>Warsztaty i kuchnia</h2>
    <p>
      Jesień to czas przetworów i smaków. W programie są warsztaty kiszenia orientalnego, cykl „Smak
      bezpiecznej wsi" (makarony i weki), pieczenie gęsiny oraz pierniki. To świetny sposób, by
      poznać lokalną społeczność i wrócić do domu z nową umiejętnością.
    </p>

    <h2>Sport i aktywność</h2>
    <p>
      Bison Ultra (3–4 października) przyciąga biegaczy, a 24 października odbywają się zawody
      Kolarski Supraśl oraz Hubertus w stadninie koni Victoria. Między wydarzeniami warto wyjść na
      jesienny spacer w Puszczy Knyszyńskiej.
    </p>

    <h2>Historia i patriotyczne wydarzenia</h2>
    <p>
      Listopad to miesiąc pamięci: wykład o bitwie pod Waliłami (7 listopada), Wieczór Pieśni
      Patriotycznych (9 listopada), uroczystości Święta Niepodległości (11 listopada), Narodowe
      Czytanie „Dziadów" (25 listopada) i rocznica Powstania Listopadowego w Kopnej Górze (29
      listopada).
    </p>

    <h2>Dla seniorów i społeczności lokalnej</h2>
    <p>
      Dni Seniora odbędą się w kilku miejscowościach: w Ogrodniczkach (24.10), Ciasnem (25.10),
      Supraślu (4.11) i Karakulach (22.11). W programie są też konferencje i debaty – m.in. „Woda ma
      głos" oraz konferencja „Razem możemy więcej".
    </p>

    <h2>Gdzie się zatrzymać? Domki na Podlasiu</h2>
    <p>
      Chcesz zostać na dłużej niż jeden wieczór? <strong>Wynajem domków w Supraślu</strong> pozwala
      połączyć udział w wydarzeniach z odpoczynkiem we własnym tempie – w dobrym towarzystwie, bez
      pośpiechu. Sprawdź <Link to="/domek-suprasl">naszą ofertę domków</Link> i wybierz{' '}
      <Link to="/domek-suprasl">domek dla rodziny, dla par lub dla grupy</Link>. Masz pytania o
      terminy? <a href="/#kontakt">Skontaktuj się z nami</a>.
    </p>
    <p className="not-prose my-8 text-center">
      <Link to="/domek-suprasl" className="btn-primary inline-flex items-center justify-center">
        Zarezerwuj domek na Podlasiu →
      </Link>
    </p>

    <h2>Najczęściej zadawane pytania (FAQ)</h2>
    {faqs.map((faq) => (
      <section key={faq.question}>
        <h3>{faq.question}</h3>
        <p>{faq.answer}</p>
      </section>
    ))}
    <hr />
    <p>
      <em>Źródło programu: Centrum Kultury i Rekreacji w Supraślu. Ostatnia aktualizacja: 3 października 2026.</em>
    </p>
  </BlogArticleLayout>
);

export default JesienWSupraslu2026;
