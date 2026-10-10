import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const GrzybobraniePuszczaKnyszynska = () => (
  <BlogArticleLayout
    title="Grzybobranie w Puszczy Knyszyńskiej — zasady przed spacerem"
    metaTitle="Grzybobranie w Puszczy Knyszyńskiej — zasady i bezpieczeństwo"
    metaDescription="Zaplanuj grzybobranie z uwzględnieniem pogody, rozpoznawania gatunków i lokalnych ograniczeń. Sprawdź zasady dostępu przed wyjściem."
    slug="grzybobranie-puszcza-knyszynska"
    publishDate="2026-04-09"
    readTime="10 min"
    keywords={['grzybobranie Puszcza Knyszyńska', 'grzyby Podlasie', 'grzyby Supraśl', 'grzybobranie las']}
    faqs={[
      { question: 'Kiedy zaplanować grzybobranie?', answer: 'Występowanie grzybów zależy od gatunku, pogody i lokalnych warunków. Przed wyjściem sprawdź prognozę oraz aktualne informacje zarządcy terenu.' },
      { question: 'Jakie grzyby można znaleźć w okolicy?', answer: 'Gatunki i ich występowanie zależą od miejsca oraz warunków. Nie zbieraj ani nie spożywaj grzybów, których nie rozpoznajesz.' },
      { question: 'Czy wszędzie można zbierać grzyby?', answer: 'Nie. Zasady zależą od miejsca; zbieranie jest zabronione w rezerwatach przyrody i może być ograniczone na innych terenach. Sprawdź lokalne przepisy i oznakowanie.' },
    ]}
    relatedArticles={[
      { title: 'Najlepsze miejsca w Puszczy Knyszyńskiej', slug: 'najlepsze-miejsca-puszcza-knyszynska' },
      { title: 'Szlaki Puszczy Knyszyńskiej', slug: 'szlaki-puszcza-knyszynska' },
      { title: 'Weekend w Supraślu', slug: 'suprasl-na-weekend' },
    ]}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <p className="text-muted-foreground leading-relaxed text-lg">
        W lasach regionu można spotkać różne gatunki grzybów, ale ich występowanie zależy od
        pogody i miejsca. Przed zbiorem sprawdź, czy jest on dozwolony w danym terenie i zbieraj
        wyłącznie gatunki, które potrafisz pewnie rozpoznać.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Kiedy planować grzybobranie?</h2>
      <p className="text-muted-foreground leading-relaxed">
        Sezon i dostępność grzybów zależą od warunków pogodowych. Przed wyjściem zapoznaj się z
        komunikatami właściwego nadleśnictwa i oznakowaniem w terenie.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Nie zbieraj grzybów w rezerwatach przyrody. W rezerwacie Krzemienne Góry dostęp jest
        ograniczony; przed wizytą sprawdź{' '}
        <a href="https://www.gov.pl/web/rdos-bialystok/podlaskierezerwaty--rezerwat-przyrody-krzemienne-gory"
          target="_blank" rel="noopener noreferrer"
          aria-label="Informacje RDOŚ o rezerwacie Krzemienne Góry (otworzy się w nowej karcie)">
          aktualne informacje RDOŚ
        </a>{' '}
        i stosuj się do zasad ochrony przyrody.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Przed wyjściem do lasu</h2>
      <ul className="space-y-3 text-muted-foreground">
        <li>Występowanie poszczególnych gatunków zależy od pory roku i pogody.</li>
        <li>Nie spożywaj grzybów, których rozpoznania nie jesteś pewien.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Najlepsze miejsca w okolicy Supraśla</h2>
      <p className="text-muted-foreground leading-relaxed">
        Rezerwat Krzemienne Góry nie jest miejscem do grzybobrania. Jeśli planujesz zbiory, wybieraj
        wyłącznie miejsca, w których są dozwolone, i sprawdzaj lokalne oznakowanie.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Nie zakładaj, że zbiór jest dozwolony w każdym lesie lub obszarze chronionym. W razie
        wątpliwości zrezygnuj ze zbierania i skontaktuj się z właściwym nadleśnictwem.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Praktyczne porady</h2>
      <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
        <li><strong>Koszyk, nie reklamówka</strong> — grzyby w reklamówce się gniotą i psują. Koszyk wiklinowy to standard.</li>
        <li><strong>Zbieraj tylko znane gatunki</strong> — w razie wątpliwości — zostaw. Nie ryzykuj zdrowia.</li>
        <li><strong>Zaplanuj trasę</strong> — sprawdź mapę, oznakowanie i prognozę pogody przed wyjściem.</li>
        <li><strong>Zabierz nóż i GPS</strong> — nóż do ścinania grzybów, GPS (lub mapę) do orientacji w lesie.</li>
        <li><strong>Zachowaj ostrożność</strong> — nie wchodź na tereny zamknięte ani poza udostępnione trasy w obszarach chronionych.</li>
      </ol>

      <h2 className="section-title !text-2xl md:!text-3xl">Nocleg na grzybobranie</h2>
      <p className="text-muted-foreground leading-relaxed">
        <Link to="/" className="text-primary hover:underline font-medium">In The Woods</Link> to dom
        na wyłączność w miejscowości Konne koło Supraśla. Przed pobytem sprawdź lokalizację, warunki
        dojazdu i zasady korzystania z opcjonalnej balii ogrodowej z funkcją jacuzzi. Grzybów nie
        przyrządzaj, jeśli nie masz pewności co do ich identyfikacji.
      </p>
    </article>
  </BlogArticleLayout>
);

export default GrzybobraniePuszczaKnyszynska;
