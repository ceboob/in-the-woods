import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import firepitNight from '@/assets/gallery-ognisko-nocne-thumb.webp';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Czy można zorganizować wieczór panieński w domku?',
    answer:
      'Dom jest wynajmowany na wyłączność dla grup do 8 osób, a pobyt grupowy lub wydarzenie wymaga wcześniejszego uzgodnienia z gospodarzem. Napiszcie, jaki planujecie wieczór, ile osób przyjedzie i czy zaprosicie gości. Gospodarz ustali, jakie zasady będą dotyczyć Waszego terminu. Dzięki temu przygotujecie wspólny wyjazd bez niedomówień.',
  },
  {
    question: 'Ile osób zmieści się w domku na wieczór panieński?',
    answer:
      'W domu może nocować maksymalnie 8 osób. Do dyspozycji grupy są dwie sypialnie, salon z kominkiem, kuchnia z płytą kaflową, łazienka oraz ogród. W sprawie osób odwiedzających napiszcie wcześniej do gospodarza, aby ustalić warunki dla Waszej grupy. Dom wynajmowany jest jednej ekipie na wyłączność.',
  },
  {
    question: 'Ile kosztuje wieczór panieński w In The Woods?',
    answer:
      'Cena noclegu zaczyna się od 399 zł za noc i zależy od daty oraz liczby gości. Weekendowa dopłata i minimalna liczba nocy wpływają na końcową kwotę. Balia ogrodowa jest osobnym dodatkiem za 250 zł za pobyt, dostępnym po potwierdzeniu terminu.',
  },
  {
    question: 'Jakie zasady obowiązują podczas wieczoru panieńskiego?',
    answer:
      'Zasady dla grupy, cisza nocna i ewentualni odwiedzający są ustalani przed rezerwacją z gospodarzem. Opiszcie, jak wyobrażacie sobie wspólny wieczór, a Maciej odpowie, jakie warunki będą obowiązywały. Dom jest na wyłączność jednej grupy, do maksymalnie 8 osób. Ustalenia pomagają dopasować pobyt do planu ekipy.',
  },
  {
    question: 'Jak dojechać na panieński z Białegostoku?',
    answer:
      'Z Białegostoku do domu pod adresem Konne 109/1 jedzie się około 30–40 minut. Centrum Supraśla znajduje się około 10 minut jazdy od domu. Na miejscu grupa ma do dyspozycji dom, taras i ogród. Zaplanujcie dojazd wcześniej, aby przyjechać bez pośpiechu.',
  },
];

const WieczorPanienskiSuprasl = () => (
  <SEOPageLayout
    title="Wieczór panieński w lesie koło Supraśla | In The Woods"
    description="Wieczór panieński w Supraślu: cały domek dla Waszej ekipy do 8 osób, balia, ognisko i kominek. Zapytajcie o termin i zasady."
    breadcrumbName="Wieczór panieński Supraśl"
    ogImage="https://www.suprasl.online/images/kitchen-dining.jpg"
    jsonLd={createLandingPageSchemas('/wieczor-panienski-suprasl', faqs)}
    showRelatedPages={false}
    ctaTitle="Zapytaj o termin panieńskiego"
    ctaDescription="Napiszcie, jak wyobrażacie sobie ten wieczór. Gospodarz odpowie z dostępnością i wyceną."
    ctaFormLabel="Zapytaj o termin"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Wieczór panieński w lesie koło Supraśla — domek na wyłączność dla Waszej ekipy
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Wieczór panieński w Supraślu może oznaczać wspólny stół, ognisko w ogrodzie i rozmowy, które
        przeciągają się do późna. W In The Woods cała przestrzeń należy do Waszej grupy, a las
        zaczyna się za progiem. To pomysł na imprezę panieńską w naturze, niedaleko Białegostoku.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={firepitNight}
          alt="Ognisko w ogrodzie leśnego domku podczas wieczoru panieńskiego na Podlasiu"
          width={400}
          height={267}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Cały domek tylko dla Was</h2>
      <p className="text-muted-foreground leading-relaxed">
        Drewniany dom z bali jest wynajmowany na wyłączność jednej grupie i mieści do 8 osób. Znajdziecie
        tu dwie sypialnie, salon z kominkiem, kuchnię, ogród, taras, altanę i miejsce na ognisko.
        Nocleg na wieczór panieński blisko Białegostoku dzieli od miasta około 30–40 minut jazdy.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Pomysły na wieczór panieński w In The Woods
      </h2>
      <ul className="text-muted-foreground space-y-3">
        <li>
          🛁 Zaplanujcie wieczór panieński z jacuzzi w balii ogrodowej — dostępność potwierdza
          gospodarz, koszt to 250 zł za pobyt.
        </li>
        <li>🔥 Rozpalcie ognisko i przygotujcie kolację na świeżym powietrzu.</li>
        <li>🎲 Zabierzcie planszówki i spędźcie wieczór przy kominku.</li>
        <li>📷 Zróbcie wspólną sesję w lesie lub na tarasie.</li>
        <li>🛶 W sezonie zapytajcie lokalnego organizatora o spływ kajakowy rzeką Supraśl.</li>
        <li>🍲 Przygotujcie coś razem w kuchni z podlaską płytą kaflową.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Przykładowy plan panieńskiego</h2>
      <p className="text-muted-foreground leading-relaxed">
        To domek dla grupy przyjaciółek, a plan może wyglądać tak: popołudniowy przyjazd i wspólne
        rozgościenie się, wieczorem balia lub ognisko, a później gry i rozmowy przy kominku. Rano
        możecie przygotować śniadanie razem i wybrać się na krótki spacer wśród drzew. Potraktujcie
        ten scenariusz jako sugestię.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>
          Przed rezerwacją uzgodnijcie z gospodarzem liczbę osób, ciszę nocną i ewentualnych
          odwiedzających.
        </li>
        <li>Balia kosztuje 250 zł za pobyt i jest dostępna na zapytanie.</li>
        <li>Pobyt z psem oraz ewentualne opłaty ustala gospodarz.</li>
        <li>Wysłanie formularza jest zapytaniem o termin; nie potwierdza rezerwacji.</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Napiszcie do nas o Waszym planie — ustalimy szczegóły, żeby wszystko się zgadzało. Zobaczcie
        także{' '}
        <Link to="/domek-z-jacuzzi-podlasie" className="text-primary underline hover:text-primary/80">
          domek z jacuzzi na Podlasiu
        </Link>
        , zaplanujcie{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          weekend w Supraślu
        </Link>{' '}
        lub sprawdźcie{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcje Supraśla
        </Link>
        .
      </p>

      <section aria-labelledby="hen-faq">
        <h2 id="hen-faq" className="section-title !text-2xl md:!text-3xl">FAQ</h2>
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

export default WieczorPanienskiSuprasl;
