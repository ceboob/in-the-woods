import SEOPageLayout from '@/components/SEOPageLayout';
import { createLandingPageSchemas } from '@/lib/landingPageSchemas';
import forestWinter from '@/assets/winter-forest.webp';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MAX_GUESTS, MIN_NIGHTLY_RATE, MIN_NIGHTS, SEASONS } from '@/lib/pricing';

const highSeasonMinNights = Math.max(...SEASONS.map((season) => season.minNights));

const linkClass = 'text-primary underline hover:text-primary/80';

const faqs = [
  {
    question: 'Czy dom stoi na skraju, czy w\u00a0środku Puszczy Knyszyńskiej?',
    answer:
      'W\u00a0środku. Konne leży w\u00a0sercu Puszczy Knyszyńskiej, a\u00a0nie na jej obrzeżach. Las otacza dom z\u00a0każdej strony, a\u00a0do centrum Supraśla jedziecie około 10\u00a0minut leśną drogą.',
  },
  {
    question: 'Jak daleko od domu jest rzeka?',
    answer:
      'Około 200\u00a0metrów. Rzeka Supraśl płynie tuż obok, więc poranny spacer nad wodę zajmuje mniej czasu niż zaparzenie kawy w\u00a0kawiarce.',
  },
  {
    question: 'Czy w\u00a0okolicy można łowić ryby?',
    answer:
      'Tak, ale na zasadach krainy pstrąga i\u00a0lipienia. Górny odcinek Supraśli to łowisko ze sztucznymi przynętami, haczykami bez zadziorów i\u00a0zakazem zabierania pstrąga potokowego oraz lipienia. Od 1\u00a0września do 31\u00a0grudnia obowiązuje zakaz brodzenia. Zezwolenie i\u00a0aktualny regulamin sprawdzicie w\u00a0Okręgu PZW w\u00a0Białymstoku.',
  },
  {
    question: 'Ile kosztuje nocleg w\u00a0Puszczy Knyszyńskiej?',
    answer: `Cena zaczyna się od ${MIN_NIGHTLY_RATE} zł za noc za cały dom, nie za osobę, i\u00a0zależy od terminu oraz liczby gości. Balia z\u00a0hydromasażem to dodatek: ${GARDEN_TUB_PRICE} zł za cały pobyt. Minimalny pobyt to ${MIN_NIGHTS} noce, a\u00a0w\u00a0wakacje ${highSeasonMinNights}.`,
  },
  {
    question: 'Czy to dom z\u00a0jacuzzi na wynajem?',
    answer: `Tak, w\u00a0ogrodzie stoi balia z\u00a0hydromasażem, czyli ogrodowe jacuzzi. Zamawiacie ją przy rezerwacji, kosztuje ${GARDEN_TUB_PRICE} zł za cały pobyt, niezależnie od liczby nocy.`,
  },
  {
    question: 'Czy można przyjechać z\u00a0psem?',
    answer:
      'Tak, i\u00a0to za darmo. W\u00a0lesie i\u00a0rezerwatach trzymajcie go na smyczy, bo puszcza to dom dzików, saren i\u00a0łosi. Po spacerze pies może się wyszaleć w\u00a0ogrodzonym ogrodzie.',
  },
  {
    question: 'Czy dom jest dostępny zimą?',
    answer: `Tak, dom jest całoroczny. Zimą grzeje kominek i\u00a0kaflowa kuchnia. Balię zamawiacie przy rezerwacji (${GARDEN_TUB_PRICE}\u00a0zł za cały pobyt), a\u00a0w\u00a0siarczysty mróz Maciej powie Wam wprost, czy da się ją nagrzać.`,
  },
];

const PuszczaKnyszynskaNocleg = () => (
  <SEOPageLayout
    title="Noclegi w Supraślu w sercu Puszczy Knyszyńskiej"
    description="Noclegi w Supraślu w sercu Puszczy Knyszyńskiej: cały dom z bali dla 8 osób, rzeka 200 m od domu, balia z hydromasażem, pies gratis. Od 399 zł."
    breadcrumbName="Puszcza Knyszyńska"
    ogImage="https://www.suprasl.online/images/winter-cabin-golden.jpg"
    jsonLd={createLandingPageSchemas('/puszcza-knyszynska-nocleg', faqs)}
    showRelatedPages={false}
    ctaTitle="Sprawdźcie wolne terminy w&nbsp;sercu puszczy"
    ctaDescription="Podajcie daty i&nbsp;liczbę osób, a&nbsp;Maciej odpisze z&nbsp;ceną, zwykle w&nbsp;kilka godzin."
    ctaFormLabel="Zapytaj o&nbsp;nocleg"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Noclegi w&nbsp;Supraślu w&nbsp;sercu Puszczy Knyszyńskiej: dom w&nbsp;lesie 200&nbsp;m od
        rzeki
      </h1>
      <p className="text-muted-foreground leading-relaxed text-lg">
        Wpisujecie „noclegi w&nbsp;Supraślu”, przeglądacie zdjęcia i&nbsp;co drugi opis obiecuje
        las. Potem przyjeżdżacie, a&nbsp;las jest. Owszem. Za parkingiem, za drogą wojewódzką
        i&nbsp;za trzema innymi pensjonatami. Znacie to? My też, dlatego piszemy wprost: In The Woods
        nie stoi na skraju puszczy. Stoi w&nbsp;jej środku.
      </p>

      <aside
        aria-label="Najważniejsze w skrócie"
        className="rounded-xl border border-border bg-muted/40 p-5 not-prose"
      >
        <p className="font-heading text-lg text-foreground mb-2">W&nbsp;skrócie (TL;DR)</p>
        <p className="text-muted-foreground leading-relaxed">
          Cały drewniany dom dla {MAX_GUESTS}&nbsp;osób w&nbsp;Konnem, w&nbsp;sercu Puszczy
          Knyszyńskiej, 10&nbsp;minut od centrum Supraśla. Rzeka Supraśl płynie 200&nbsp;metrów od
          domu, a&nbsp;jej górny odcinek to kraina pstrąga i&nbsp;lipienia. Kominek, balia
          z&nbsp;hydromasażem, pies gratis, od {MIN_NIGHTLY_RATE}&nbsp;zł za noc za cały dom.
        </p>
      </aside>

      <figure className="overflow-hidden rounded-xl">
        <img
          src={forestWinter}
          alt="Zimowy las Puszczy Knyszyńskiej wokół domu In The Woods w Konnem"
          width={1368}
          height={1824}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </figure>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Skraj lasu a&nbsp;serce puszczy: skąd ta różnica?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Mieszkanie „na skraju lasu” przypomina miejsce przy oknie w&nbsp;pociągu. Widok jest, ale
        jedziecie dalej razem ze wszystkimi. Nocleg w&nbsp;sercu puszczy to coś innego. Wieczorem
        nie słychać samochodów, tylko sowę. Rano nie budzi Was śmieciarka, tylko dzięcioł, który
        uparł się na sosnę za oknem.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Konne to mała wieś wciśnięta w&nbsp;las, w&nbsp;głębi Puszczy Knyszyńskiej. Drzewa macie
        z&nbsp;każdej strony, nie tylko od frontu. Do Supraśla, z&nbsp;monasterem, Muzeum Ikon
        i&nbsp;babką ziemniaczaną, jedziecie około 10&nbsp;minut. Do Białegostoku 30–40. Czyli
        cywilizacja jest blisko, ale nie zagląda Wam przez płot.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Praktyczny wniosek? Jeśli szukacie noclegu, w&nbsp;którym cisza jest w&nbsp;standardzie,
        a&nbsp;nie w&nbsp;opisie, sprawdźcie na mapie, gdzie naprawdę kończy się asfalt. U&nbsp;nas
        kończy się przed domem.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Dom w&nbsp;Puszczy Knyszyńskiej: co macie za płotem
      </h2>

      <h3 className="font-heading text-xl text-foreground">Rzeka Supraśl 200&nbsp;metrów od domu</h3>
      <p className="text-muted-foreground leading-relaxed">
        Dwieście metrów. Tyle mniej więcej dzieli taras od rzeki. Szybciej dojdziecie nad wodę, niż
        znajdziecie w&nbsp;samochodzie drugą skarpetkę. Supraśl jest tu wąska, kręta i&nbsp;czysta,
        płynie między olszami i&nbsp;łąkami. O&nbsp;świcie leży nad nią mgła, a&nbsp;na brzegach
        łatwo wypatrzyć ślady bobrów, które pracują głównie na nocną zmianę.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Co z&nbsp;tym zrobić? Poranna kawa nad wodą, kąpiel stóp po upalnym dniu, zdjęcia
        o&nbsp;złotej godzinie. Albo nic. Siedzenie nad rzeką bez celu też jest pełnoprawnym planem
        dnia.
      </p>

      <h3 className="font-heading text-xl text-foreground">Leśne dukty zamiast chodnika</h3>
      <p className="text-muted-foreground leading-relaxed">
        Pierwszy leśny dukt zaczyna się zaraz za ogrodzeniem. Nie trzeba nigdzie dojeżdżać, szukać
        parkingu ani płacić za wjazd. Zakładacie buty i&nbsp;idziecie. Rowerem w&nbsp;kilka minut
        jesteście na szlakach, które opisaliśmy w&nbsp;
        <Link to="/blog/szlaki-piesze-rowerowe-suprasl" className={linkClass}>
          przewodniku po trasach pieszych i&nbsp;rowerowych
        </Link>
        .
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src="/images/gallery-droga-lesna-plot-optimized.webp"
          alt="Leśna droga przy ogrodzeniu domu In The Woods w Puszczy Knyszyńskiej"
          width={1000}
          height={667}
          className="w-full object-cover"
          loading="lazy"
        />
        <figcaption className="text-sm text-muted-foreground mt-2">
          Leśna droga tuż za płotem. Tak wygląda „dojazd do szlaku”.
        </figcaption>
      </figure>

      <h3 className="font-heading text-xl text-foreground">Krzemienne Góry i&nbsp;Kopna Góra</h3>
      <p className="text-muted-foreground leading-relaxed">
        Niedaleko domu jest rezerwat Krzemienne Góry: wydmy porośnięte borem, w&nbsp;którym pachnie
        żywicą i&nbsp;mokrym mchem. Trzymajcie się wyznaczonych ścieżek, bo to przyroda pod
        ochroną, a&nbsp;nie plac zabaw. Na krótką wycieczkę samochodem polecamy Kopną Górę
        z&nbsp;arboretum, gdzie na 26&nbsp;hektarach rosną drzewa i&nbsp;krzewy z&nbsp;różnych
        stron świata. Dobry plan na dzień, kiedy dzieci mają dość „zwykłego lasu”.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Kraina pstrąga i&nbsp;lipienia, czyli rzeka dla cierpliwych
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Pisaliśmy o&nbsp;tym w&nbsp;
        <Link to="/blog/supraski-system-wodny" className={linkClass}>
          artykule o&nbsp;supraskim systemie wodnym
        </Link>
        , ale tu warto to powtórzyć. Górny odcinek Supraśli, w&nbsp;okolicach Gródka
        i&nbsp;Supraśla, należy do tak zwanej krainy pstrąga i&nbsp;lipienia. To wody chłodne,
        czyste i&nbsp;szybkie, w&nbsp;których żyją ryby wymagające od człowieka wyjątkowej
        delikatności. Krótko mówiąc: pstrąg nie zamieszka w&nbsp;byle jakiej rzece. Skoro tu jest,
        woda zdała egzamin.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Dla wędkarzy oznacza to łowienie z&nbsp;zasadami, a&nbsp;nie na ilość:
      </p>
      <ul className="text-muted-foreground space-y-2">
        <li>wyłącznie sztuczne przynęty, metoda spinningowa lub muchowa,</li>
        <li>haczyki bezzadziorowe,</li>
        <li>pstrąga potokowego i&nbsp;lipienia nie wolno zabierać,</li>
        <li>od 1&nbsp;września do 31&nbsp;grudnia obowiązuje zakaz brodzenia.</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Przepisy się zmieniają, więc przed przyjazdem sprawdźcie aktualny regulamin i&nbsp;wykupcie
        zezwolenie w&nbsp;Okręgu PZW w&nbsp;Białymstoku. A&nbsp;jeśli nie łowicie? Usiądźcie na
        brzegu i&nbsp;popatrzcie, jak lipień wyskakuje po owada. To lepsze niż niejeden serial.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Dom w&nbsp;lesie na wynajem tylko dla Was
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Wynajmujecie cały dom, nie pokój. Nie dzielicie kuchni z&nbsp;obcymi, nie czekacie
        w&nbsp;kolejce do łazienki i&nbsp;nikt nie puka, bo „za głośno”. Dom mieści maksymalnie{' '}
        {MAX_GUESTS}&nbsp;osób, więc sprawdzi się dla pary, rodziny z&nbsp;dziećmi i&nbsp;paczki
        przyjaciół.
      </p>

      <h3 className="font-heading text-xl text-foreground">
        Kominek, kaflowa kuchnia i&nbsp;dwie sypialnie
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Na dole salon z&nbsp;kominkiem i&nbsp;kuchnia z&nbsp;tradycyjną płytą kaflową, na której
        zupa smakuje jak u&nbsp;babci, nawet jeśli to zupa z&nbsp;torebki. Na górze dwie sypialnie
        z&nbsp;dużymi łóżkami i&nbsp;widokiem na las. Na zewnątrz ogrodzony ogród, taras, altana
        i&nbsp;miejsce na ognisko. Latem chłodzi klimatyzacja, przed domem macie bezpłatny parking.
      </p>

      <h3 className="font-heading text-xl text-foreground">
        Dom z&nbsp;jacuzzi na wynajem? Balia pod gwiazdami
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        W&nbsp;ogrodzie stoi balia z&nbsp;hydromasażem, czyli ogrodowe jacuzzi.
        Wyobraźcie sobie: gorąca woda, para unosi się w&nbsp;zimnym powietrzu, nad głową sosny
        i&nbsp;gwiazdy, których w&nbsp;mieście nie widać przez latarnie. Balię zamawiacie przy
        rezerwacji, kosztuje {GARDEN_TUB_PRICE}&nbsp;zł za cały pobyt, a&nbsp;nie za dzień. Więcej
        o&nbsp;tym znajdziecie na stronie o&nbsp;
        <Link to="/domek-z-jacuzzi-podlasie" className={linkClass}>
          domku z&nbsp;jacuzzi na Podlasiu
        </Link>
        .
      </p>
      <figure className="overflow-hidden rounded-xl">
        <img
          src="/images/gallery-jacuzzi-noc-optimized.webp"
          alt="Balia z hydromasażem nocą w ogrodzie domu In The Woods"
          width={860}
          height={1145}
          className="w-full aspect-[4/3] object-cover"
          loading="lazy"
        />
        <figcaption className="text-sm text-muted-foreground mt-2">
          Balia wieczorem. Telefon zostawcie w&nbsp;domu, i&nbsp;tak nie będzie potrzebny.
        </figcaption>
      </figure>

      <h3 className="font-heading text-xl text-foreground">Starlink, gdy jednak trzeba</h3>
      <p className="text-muted-foreground leading-relaxed">
        Serce puszczy nie oznacza końca świata. W&nbsp;domu działa Starlink do 200&nbsp;Mb/s, więc
        spotkanie online da się odbyć, a&nbsp;wieczorny film obejrzeć bez kręcącego się kółeczka.
        Czy musicie z&nbsp;niego korzystać? Nie. Ale dobrze wiedzieć, że jest.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        <a href="/#rezerwacja" className="btn-primary inline-flex not-prose">
          Sprawdźcie wolny termin
        </a>
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Noclegi w&nbsp;Supraślu: w&nbsp;lesie czy w&nbsp;miasteczku?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Uczciwie: nie każdy potrzebuje domu w&nbsp;środku puszczy. Jeśli chcecie wieczorem wyjść na
        piwo i&nbsp;wrócić pieszo, lepszy będzie pokój w&nbsp;centrum Supraśla. Jeśli natomiast
        jedziecie po ciszę, las i&nbsp;rzekę, dom w&nbsp;lesie wygrywa bez dogrywki. Krótkie
        porównanie:
      </p>
      <div className="overflow-x-auto not-prose">
        <table className="w-full text-sm text-left text-muted-foreground border border-border">
          <thead className="bg-muted/40 text-foreground">
            <tr>
              <th scope="col" className="p-3">
                &nbsp;
              </th>
              <th scope="col" className="p-3">
                Dom w&nbsp;sercu puszczy
              </th>
              <th scope="col" className="p-3">
                Pokój w&nbsp;miasteczku
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <th scope="row" className="p-3 text-foreground font-medium">
                Cisza nocą
              </th>
              <td className="p-3">sowy i&nbsp;wiatr</td>
              <td className="p-3">ulica, sąsiedzi</td>
            </tr>
            <tr className="border-t border-border">
              <th scope="row" className="p-3 text-foreground font-medium">
                Las i&nbsp;rzeka
              </th>
              <td className="p-3">za płotem i&nbsp;200&nbsp;m dalej</td>
              <td className="p-3">dojazd lub dłuższy spacer</td>
            </tr>
            <tr className="border-t border-border">
              <th scope="row" className="p-3 text-foreground font-medium">
                Prywatność
              </th>
              <td className="p-3">cały dom na wyłączność</td>
              <td className="p-3">wspólne korytarze</td>
            </tr>
            <tr className="border-t border-border">
              <th scope="row" className="p-3 text-foreground font-medium">
                Restauracje i&nbsp;muzea
              </th>
              <td className="p-3">10&nbsp;minut autem</td>
              <td className="p-3">pieszo</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        Pełny przegląd opcji znajdziecie na stronie o&nbsp;
        <Link to="/noclegi-suprasl" className={linkClass}>
          noclegach w&nbsp;Supraślu
        </Link>
        , a&nbsp;pomysły na zwiedzanie w&nbsp;przewodniku po{' '}
        <Link to="/atrakcje-suprasl" className={linkClass}>
          atrakcjach Supraśla
        </Link>
        .
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Jak wygląda dzień w&nbsp;domu w&nbsp;Puszczy Knyszyńskiej
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Nie ma jednego planu i&nbsp;w&nbsp;tym cała przyjemność. Ale jeśli lubicie mieć ściągawkę,
        oto przykładowy dzień w&nbsp;sercu puszczy:
      </p>
      <ol className="text-muted-foreground space-y-2">
        <li>
          <strong>7:30.</strong> Kawa na tarasie, potem 200&nbsp;metrów spacerem nad rzekę. Mgła
          jeszcze leży nad wodą, więc zdjęcia robią się same.
        </li>
        <li>
          <strong>10:00.</strong> Rower albo buty i&nbsp;leśnym duktem w&nbsp;stronę Krzemiennych
          Gór. Kanapki w&nbsp;plecaku, telefon w&nbsp;trybie samolotowym.
        </li>
        <li>
          <strong>14:00.</strong> Obiad w&nbsp;Supraślu: babka ziemniaczana albo kartacze, potem
          monaster i&nbsp;Muzeum Ikon. Dziesięć minut autem i&nbsp;jesteście z&nbsp;powrotem
          w&nbsp;lesie.
        </li>
        <li>
          <strong>18:00.</strong> Ognisko w&nbsp;ogrodzie, kiełbaski, długie rozmowy. Dzieci
          zbierają patyki, dorośli udają, że wiedzą, jak rozpalić ogień bez podpałki.
        </li>
        <li>
          <strong>21:00.</strong> Balia pod gwiazdami, a&nbsp;na koniec kominek. Zasypiacie przy
          ciszy, która w&nbsp;mieście kosztowałaby fortunę, gdyby dało się ją kupić.
        </li>
      </ol>
      <p className="text-muted-foreground leading-relaxed">
        Wniosek? Większość atrakcji macie w&nbsp;zasięgu nóg. Samochód przydaje się głównie na
        zakupy i&nbsp;wyjazd do miasteczka.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Puszcza w&nbsp;każdej porze roku</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>
          <strong>Wiosna:</strong> ptasi koncert od czwartej rano i&nbsp;pierwsze zawilce. Zabierzcie
          lornetkę.
        </li>
        <li>
          <strong>Lato:</strong> rower, rzeka i&nbsp;
          <Link to="/blog/kajaki-suprasl" className={linkClass}>
            kajaki na Supraśli
          </Link>
          . Wieczorem ognisko i&nbsp;komary, które też przyjechały na wakacje.
        </li>
        <li>
          <strong>Jesień:</strong>{' '}
          <Link to="/blog/grzybobranie-puszcza-knyszynska" className={linkClass}>
            grzybobranie
          </Link>
          , które tu jest sportem narodowym, i&nbsp;rykowisko jeleni o&nbsp;zmroku.
        </li>
        <li>
          <strong>Zima:</strong> śnieg, cisza i&nbsp;kominek. Sylwester bez fajerwerków, za to
          z&nbsp;balią i&nbsp;gwiazdami. Wasz pies podziękuje.
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Dobre wiedzieć przed przyjazdem</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>Pies przyjeżdża gratis. W&nbsp;lesie i&nbsp;rezerwatach trzymajcie go na smyczy.</li>
        <li>Do lasu zabierzcie coś na kleszcze. Jest ich tu więcej niż turystów.</li>
        <li>Zakupy zróbcie w&nbsp;Supraślu, w&nbsp;lesie nie ma sklepu za rogiem.</li>
        <li>Latarka czołowa przyda się na wieczorny spacer nad rzekę. Tu nie ma latarni.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Cennik i&nbsp;rezerwacja</h2>
      <ul className="text-muted-foreground space-y-2">
        <li>
          Cena od {MIN_NIGHTLY_RATE} zł za noc za cały dom, zależnie od terminu i&nbsp;liczby gości.
        </li>
        <li>Balia z&nbsp;hydromasażem: {GARDEN_TUB_PRICE} zł za cały pobyt.</li>
        <li>
          Minimum {MIN_NIGHTS} noce, a&nbsp;w&nbsp;wakacje {highSeasonMinNights}.
        </li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Napiszcie, kiedy chcecie przyjechać i&nbsp;w&nbsp;ile osób. Formularz to tylko pytanie
        o&nbsp;termin: niczego nie rezerwuje i&nbsp;niczego nie pobiera. Maciej odpisuje zwykle
        w&nbsp;kilka godzin, a&nbsp;dobre terminy w&nbsp;sercu puszczy znikają szybciej niż
        kurki po deszczu.
      </p>

      <section aria-labelledby="forest-faq">
        <h2 id="forest-faq" className="section-title !text-2xl md:!text-3xl">
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

export default PuszczaKnyszynskaNocleg;
