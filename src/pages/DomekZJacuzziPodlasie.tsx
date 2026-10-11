import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import jacuzziNight from '@/assets/jacuzzi-night.webp';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Ile kosztuje balia ogrodowa?',
    answer:
      'Balia ogrodowa kosztuje 250 zł za cały pobyt. To płatny dodatek do wynajmu domu, nie jest wliczona w cenę noclegu. Napisz przed rezerwacją, że chcecie z niej skorzystać; gospodarz potwierdzi dostępność i przekaże informacje o przygotowaniu oraz bezpiecznym użytkowaniu przed przyjazdem.',
  },
  {
    question: 'Czy balia jest dostępna zimą?',
    answer:
      'Balia może być dostępna także zimą, a możliwość skorzystania z niej zależy od terminu i warunków. Gospodarz potwierdzi ją na zapytanie. Po kąpieli możecie wrócić do ciepłego salonu, gdzie czeka kominek i spokojny wieczór w domu z bali. To przyjemny plan na chłodny wieczór.',
  },
  {
    question: 'Czy jacuzzi znajduje się w domu?',
    answer:
      'Nie, jacuzzi nie znajduje się wewnątrz domu. Balia z funkcją jacuzzi stoi w ogrodzie i jest dostępna jako płatny dodatek dla Waszej grupy. W środku znajdziecie salon z kominkiem, dwie sypialnie z widokiem na las, kuchnię i łazienkę. To wygodny układ na wspólny wyjazd.',
  },
  {
    question: 'Czy to dom z jacuzzi dla 8 osób?',
    answer:
      'Dom jest przygotowany dla maksymalnie 8 osób i wynajmowany w całości jednej grupie. Na parterze są salon, kuchnia z płytą kaflową i łazienka, a na piętrze dwie sypialnie. Balia ogrodowa jest opcjonalnym dodatkiem za 250 zł za pobyt. Warto dopasować nocleg do składu grupy.',
  },
  {
    question: 'Ile trwa dojazd z Białegostoku?',
    answer:
      'Z Białegostoku do Konnego dojeżdża się zwykle w około 30–40 minut. Dom stoi pod adresem Konne 109/1, około 10 minut jazdy od centrum Supraśla. To spokojna leśna baza niedaleko miasta, z całym domem i ogrodem dla Waszej grupy. Przed podróżą zaplanujcie trasę do Konnego.',
  },
];

const DomekZJacuzziPodlasie = () => (
  <SEOPageLayout
    title="Domek z jacuzzi na Podlasiu – balia i kominek | In The Woods"
    description="Domek z jacuzzi na Podlasiu: balia ogrodowa 250 zł/pobyt, cały dom na wyłączność do 8 osób. Zapytaj o termin w In The Woods."
    breadcrumbName="Domek z jacuzzi Podlasie"
    ogImage="https://www.suprasl.online/images/jacuzzi-night.jpg"
    jsonLd={createLandingPageSchemas('/domek-z-jacuzzi-podlasie', faqs)}
    showRelatedPages={false}
    ctaTitle="Zapytaj o termin z balią"
    ctaDescription="Napisz lub zadzwoń. Gospodarz potwierdzi dostępność balii i przygotuje wycenę pobytu."
    ctaFormLabel="Zapytaj przez formularz"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Domek z jacuzzi na Podlasiu — balia ogrodowa w lesie na wyłączność
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Domek z jacuzzi na Podlasiu to wieczór w ciepłej wodzie, gdy nad balią unosi się para, a nad
        ogrodem widać gwiazdy. Las otula dom, a po kąpieli czeka trzask ognia w kominku.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={jacuzziNight}
          alt="Balia ogrodowa z funkcją jacuzzi przy domku na wyłączność w lesie na Podlasiu"
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Balia ogrodowa z jacuzzi pod gwiazdami
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Ciepła woda, szum drzew i chłodne powietrze tworzą prosty rytuał odpoczynku po dniu w
        Puszczy Knyszyńskiej. Balia, nazywana też banią ogrodową, stoi w ogrodzie i jest przeznaczona
        wyłącznie dla Waszej grupy.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Balia ogrodowa z funkcją jacuzzi kosztuje 250 zł za pobyt. Dopiszcie ją do zapytania, a
        gospodarz potwierdzi dostępność i przekaże zasady korzystania.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Domek z jacuzzi i kominkiem — co czeka w środku
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Drewniany dom z bali mieści do 8 osób i jest wynajmowany jednej grupie. Na parterze znajdziecie
        salon z kominkiem, kuchnię z podlaskim akcentem — płytą kaflową — oraz łazienkę.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Na piętrze są dwie sypialnie z dużymi łóżkami i widokiem na las. Ogród, taras, altana i
        miejsce na ognisko zapraszają, by zwolnić tempo.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Balia zimą i latem</h2>
      <p className="text-muted-foreground leading-relaxed">
        Zimą para nad wodą kontrastuje ze śniegiem, a po kąpieli można ogrzać się przy kominku.
        Latem wieczór przenosi się na taras; klimatyzacja działa w sezonie letnim.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Jacuzzi w lesie najlepiej smakuje bez pośpiechu: po spacerze, przy gwiazdach i w ciszy, którą
        przerywają tylko ptaki albo trzask drewna.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Lokalizacja: Puszcza Knyszyńska i Białystok na wyciągnięcie ręki
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        In The Woods znajduje się pod adresem Konne 109/1, około 10 minut jazdy od centrum Supraśla.
        To dom z jacuzzi niedaleko Białegostoku — dojazd z miasta zajmuje około 30–40 minut. Balia
        ogrodowa na Podlasiu pozwala połączyć wieczorną kąpiel z odpoczynkiem po leśnym spacerze.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Po więcej inspiracji zajrzyjcie do przewodnika po{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcjach Supraśla
        </Link>
        . Sprawdźcie też{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegi w Supraślu
        </Link>{' '}
        i{' '}
        <Link to="/domek-suprasl" className="text-primary underline hover:text-primary/80">
          domek na wyłączność
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Balia ogrodowa kosztuje 250 zł za pobyt i jest dostępna na zapytanie.</li>
        <li>Instrukcję obsługi oraz zasady bezpieczeństwa otrzymacie od gospodarza.</li>
        <li>Warunki pogodowe mogą wpływać na możliwość korzystania z balii.</li>
        <li>Pobyt z psem i ewentualne opłaty ustala gospodarz.</li>
        <li>W domu jest Wi-Fi, bezpłatny parking, ogród, taras i miejsce na ognisko.</li>
      </ul>

      <section aria-labelledby="jacuzzi-faq">
        <h2 id="jacuzzi-faq" className="section-title !text-2xl md:!text-3xl">FAQ</h2>
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

export default DomekZJacuzziPodlasie;
