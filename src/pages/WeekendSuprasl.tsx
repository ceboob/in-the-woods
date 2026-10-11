import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import weekendMorning from '@/assets/terrace-breakfast.webp';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MIN_NIGHTLY_RATE, MIN_NIGHTS, SEASONS, WEEKEND_SURCHARGE } from '@/lib/pricing';

const faqs = [
  {
    question: 'Ile kosztuje weekend w domku?',
    answer:
      `Cena zaczyna się od ${MIN_NIGHTLY_RATE} zł za noc i zależy od terminu oraz liczby gości. W piątki i soboty obowiązuje dopłata weekendowa ${WEEKEND_SURCHARGE} zł za noc, a balia kosztuje dodatkowo ${GARDEN_TUB_PRICE} zł za pobyt. Gospodarz przygotuje dokładną wycenę dla Waszego terminu.`,
  },
  {
    question: 'Czy weekend w Supraślu trzeba rezerwować z wyprzedzeniem?',
    answer:
      'Warto wysłać zapytanie wcześniej, szczególnie jeśli interesuje Was konkretny weekend albo sezon wysoki. Dom jest wynajmowany jednej grupie, więc dostępność zależy od kalendarza. Gospodarz odpowie, czy termin jest wolny i poda cenę; samo wysłanie formularza nie potwierdza rezerwacji. Warto podać od razu liczbę gości.',
  },
  {
    question: 'Co robić w Supraślu w weekend, gdy pada deszcz?',
    answer:
      'Deszczowy dzień można spędzić w Muzeum Ikon, odwiedzić Monaster albo zajrzeć do Muzeum Drukarstwa w Supraślu. Po powrocie czeka salon z kominkiem, książka i ciepły posiłek z kuchni z płytą kaflową. Godziny placówek dopasujcie do aktualnego programu. Zostawcie przestrzeń na spokojny odpoczynek.',
  },
  {
    question: 'Czy można przyjechać z psem na weekend w lesie na Podlasiu?',
    answer:
      'Pobyt z psem jest możliwy po uzgodnieniu z gospodarzem, który poda zasady i ewentualne opłaty. W okolicy wybierajcie trasy dopuszczające psy i respektujcie zasady obszarów chronionych. W domu macie ogród i taras, a leśne spacery można dopasować do Waszego rytmu.',
  },
  {
    question: 'Czy balia jest dostępna na weekend?',
    answer:
      `Balia ogrodowa z funkcją jacuzzi jest dostępna na zapytanie i kosztuje ${GARDEN_TUB_PRICE} zł za pobyt. Warto uwzględnić ją w wiadomości o terminie, aby gospodarz potwierdził dostępność. To osobny dodatek do noclegu; w chłodny wieczór po kąpieli możecie ogrzać się przy kominku. Dodatek nie jest wliczony w cenę noclegu.`,
  },
];

const WeekendSuprasl = () => (
  <SEOPageLayout
    title="Weekend w Supraślu – domek w lesie | In The Woods"
    description="Weekend w Supraślu: cały domek tylko dla Was, kominek i balia na zapytanie. Zaplanujcie pobyt w lesie, 10 minut od centrum."
    breadcrumbName="Weekend w Supraślu"
    ogImage="https://www.suprasl.online/images/terrace-breakfast.jpg"
    jsonLd={createLandingPageSchemas('/weekend-suprasl', faqs)}
    showRelatedPages={false}
    ctaTitle="Zarezerwuj weekend w lesie"
    ctaDescription="Zapytaj o wolny termin i wycenę pobytu. Cały dom będzie do dyspozycji Waszej grupy."
    ctaFormLabel="Zapytaj o weekend"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Weekend w Supraślu — plan pobytu w leśnym domku na wyłączność
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Weekend w Supraślu może zacząć się od ciszy lasu, a skończyć przy kominku po dniu pełnym
        spacerów. Zatrzymujecie się w całym domu, a miasteczko jest około 10 minut jazdy stąd.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Weekend na Podlasiu może być urlopem w rytmie relaksu w lesie. Jeśli zastanawiacie się, gdzie
        wybrać się na weekend na Podlasiu, domek na weekend z balią na zapytanie daje Wam swobodę planu.
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src={weekendMorning}
          alt="Śniadanie na tarasie leśnego domku podczas weekendu w Supraślu"
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">Piątek — przyjazd i pierwszy wieczór</h2>
      <p className="text-muted-foreground leading-relaxed">
        Przyjedźcie po pracy, rozpakujcie torby i rozpalcie ogień w kominku. Przygotujcie kolację w
        kuchni, a wieczór spędźcie na tarasie lub w balii ogrodowej, jeśli dodatek jest dostępny.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Balia kosztuje 250 zł za pobyt i wymaga wcześniejszego uzgodnienia z gospodarzem.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Sobota — Supraśl i Puszcza Knyszyńska
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Przykładowy plan — dopasujcie go do siebie: o 8:30 spokojne śniadanie, o 10:00 spacer po
        Supraślu z Monasterem i Muzeum Ikon, a około 13:00 przerwa na obiad. Po południu wybierzcie
        leśny szlak albo spływ kajakowy w sezonie, a wieczorem ognisko w ogrodzie.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Więcej podpowiedzi znajdziecie w przewodniku po{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcjach Supraśla
        </Link>
        . To weekend w lesie bez konieczności wypełniania każdej godziny planem.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Niedziela — spokojny poranek i droga powrotna
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Zjedzcie śniadanie bez pośpiechu, a potem wybierzcie się na ostatni spacer po okolicy.
        Wracając, możecie zaplanować Arboretum Kopna Góra albo dalszą wycieczkę do Kruszynian.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Weekend we dwoje czy z grupą?</h2>
      <p className="text-muted-foreground leading-relaxed">
        We dwoje możecie celebrować długie śniadanie, leśny spacer i wieczór przy kominku. Weekend z
        jacuzzi można zaplanować po uzgodnieniu dodatku. Rodziny
        oraz grupy przyjaciół mają do dyspozycji cały dom, ogród, miejsce na ognisko i przestrzeń do
        wspólnego odpoczynku — maksymalnie 8 osób.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Pobyt z psem ustala się z gospodarzem. Zobaczcie też szczegóły, jakie oferuje{' '}
        <Link to="/domek-z-jacuzzi-podlasie" className="text-primary underline hover:text-primary/80">
          domek z jacuzzi na Podlasiu
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Weekend o każdej porze roku</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Jesień przynosi kolory lasu, grzybobranie i długie wieczory przy ogniu.</li>
        <li>Zimą ogrzejecie się przy kominku; balia jest dostępna na zapytanie.</li>
        <li>Wiosną obudzi się las, a poranki wypełnią się śpiewem ptaków.</li>
        <li>Latem możecie wybrać kajaki i taras; w domu działa klimatyzacja sezonowa.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Praktyczne informacje</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>
          Cena od {MIN_NIGHTLY_RATE} zł za noc; w piątki i soboty dopłata wynosi {WEEKEND_SURCHARGE}{' '}
          zł za noc.
        </li>
        <li>
          Minimum {MIN_NIGHTS} noce, a w sezonie wysokim{' '}
          {Math.max(...SEASONS.map((season) => season.minNights))} noce.
        </li>
        <li>Adres: Konne 109/1, 16-030 Supraśl; dojazd z Białegostoku trwa około 30–40 minut.</li>
        <li>
          Więcej informacji: <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">noclegi w Supraślu</Link>.
        </li>
      </ul>

      <section aria-labelledby="weekend-faq">
        <h2 id="weekend-faq" className="section-title !text-2xl md:!text-3xl">FAQ</h2>
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

export default WeekendSuprasl;
