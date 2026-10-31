import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

// TODO: zatwierdź treść
const GrzybobraniePuszczaKnyszynska = () => (
  <BlogArticleLayout
    title="Grzybobranie w&nbsp;Puszczy Knyszyńskiej — zasady przed spacerem"
    metaTitle="Grzybobranie w&nbsp;Puszczy Knyszyńskiej – zasady"
    metaDescription="Zaplanuj grzybobranie z&nbsp;uwzględnieniem pogody, rozpoznawania gatunków i&nbsp;lokalnych ograniczeń. Sprawdź zasady dostępu przed wyjściem."
    slug="grzybobranie-puszcza-knyszynska"
    publishDate="2026-04-09"
    readTime="10&nbsp;min"
    keywords={[
      'grzybobranie Puszcza Knyszyńska',
      'grzyby Podlasie',
      'grzyby Supraśl',
      'grzybobranie las',
    ]}
    faqs={[
      {
        question: 'Kiedy zaplanować grzybobranie?',
        answer:
          'Występowanie grzybów zależy od gatunku, pogody i\u00a0lokalnych warunków. Przed wyjściem sprawdź prognozę oraz aktualne informacje zarządcy terenu.',
      },
      {
        question: 'Jakie grzyby można znaleźć w\u00a0okolicy?',
        answer:
          'Gatunki i\u00a0ich występowanie zależą od miejsca oraz warunków. Nie zbieraj ani nie spożywaj grzybów, których nie rozpoznajesz.',
      },
      {
        question: 'Czy wszędzie można zbierać grzyby?',
        answer:
          'Nie. Zasady zależą od miejsca; zbieranie jest zabronione w\u00a0rezerwatach przyrody i\u00a0może być ograniczone na innych terenach. Sprawdź lokalne przepisy i\u00a0oznakowanie.',
      },
    ]}
    relatedArticles={[
      {
        title: 'Puszcza Knyszyńska: przewodnik po szlakach',
        slug: 'puszcza-knyszynska-przewodnik',
      },
      {
        title: 'Szlaki piesze i\u00a0rowerowe z\u00a0Supraśla',
        slug: 'szlaki-piesze-rowerowe-suprasl',
      },
      { title: 'Weekend w\u00a0Supraślu: plan od piątku do niedzieli', slug: '/weekend-suprasl' },
    ]}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <p className="text-muted-foreground leading-relaxed text-lg">
        W&nbsp;lasach regionu można spotkać różne gatunki grzybów, ale ich występowanie zależy od
        pogody i&nbsp;miejsca. Przed zbiorem sprawdź, czy jest on dozwolony w&nbsp;danym terenie
        i&nbsp;zbieraj wyłącznie gatunki, które potrafisz pewnie rozpoznać.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Kiedy planować grzybobranie?</h2>
      <p className="text-muted-foreground leading-relaxed">
        Sezon i&nbsp;dostępność grzybów zależą od warunków pogodowych. Przed wyjściem zapoznaj się
        z&nbsp;komunikatami właściwego nadleśnictwa i&nbsp;oznakowaniem w&nbsp;terenie.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Nie zbieraj grzybów w&nbsp;rezerwatach przyrody. W&nbsp;rezerwacie Krzemienne Góry dostęp
        jest ograniczony; przed wizytą sprawdź{' '}
        <a
          href="https://www.gov.pl/web/rdos-bialystok/podlaskierezerwaty--rezerwat-przyrody-krzemienne-gory"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Informacje RDOŚ o&nbsp;rezerwacie Krzemienne Góry (otworzy się w&nbsp;nowej karcie)"
        >
          aktualne informacje RDOŚ
        </a>{' '}
        i&nbsp;stosuj się do zasad ochrony przyrody.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Przed wyjściem do lasu</h2>
      <ul className="space-y-3 text-muted-foreground">
        <li>Występowanie poszczególnych gatunków zależy od pory roku i&nbsp;pogody.</li>
        <li>Nie spożywaj grzybów, których rozpoznania nie jesteś pewien.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Najlepsze miejsca w&nbsp;okolicy Supraśla
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Rezerwat Krzemienne Góry nie jest miejscem do grzybobrania. Jeśli planujesz zbiory, wybieraj
        wyłącznie miejsca, w&nbsp;których są dozwolone, i&nbsp;sprawdzaj lokalne oznakowanie.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Nie zakładaj, że zbiór jest dozwolony w&nbsp;każdym lesie lub obszarze chronionym.
        W&nbsp;razie wątpliwości zrezygnuj ze zbierania i&nbsp;skontaktuj się z&nbsp;właściwym
        nadleśnictwem.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Praktyczne porady</h2>
      <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
        <li>
          <strong>Koszyk, nie reklamówka</strong> — grzyby w&nbsp;reklamówce się gniotą
          i&nbsp;psują. Koszyk wiklinowy to standard.
        </li>
        <li>
          <strong>Zbieraj tylko znane gatunki</strong> — w&nbsp;razie wątpliwości — zostaw. Nie
          ryzykuj zdrowia.
        </li>
        <li>
          <strong>Zaplanuj trasę</strong> — sprawdź mapę, oznakowanie i&nbsp;prognozę pogody przed
          wyjściem.
        </li>
        <li>
          <strong>Zabierz nóż i&nbsp;GPS</strong> — nóż do ścinania grzybów, GPS (lub mapę) do
          orientacji w&nbsp;lesie.
        </li>
        <li>
          <strong>Zachowaj ostrożność</strong> — nie wchodź na tereny zamknięte ani poza
          udostępnione trasy w&nbsp;obszarach chronionych.
        </li>
      </ol>

      <h2 className="section-title !text-2xl md:!text-3xl">Nocleg na grzybobranie</h2>
      <p className="text-muted-foreground leading-relaxed">
        <Link to="/" className="text-primary hover:underline font-medium">
          In The Woods
        </Link>{' '}
        to dom na wyłączność w&nbsp;miejscowości Konne koło Supraśla. Przed pobytem sprawdź
        lokalizację, warunki dojazdu i&nbsp;zasady korzystania z&nbsp;opcjonalnej balii
        z&nbsp;hydromasażem (jacuzzi). Grzybów nie przyrządzaj, jeśli nie masz pewności co do ich
        identyfikacji.
      </p>
    </article>
  </BlogArticleLayout>
);

export default GrzybobraniePuszczaKnyszynska;
