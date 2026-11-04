import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import { BlogFigure } from '@/components/BlogArticleParts';

const GrzybobraniePuszczaKnyszynska = () => (
  <BlogArticleLayout
    title="Grzybobranie w&nbsp;Puszczy Knyszyńskiej – gdzie i&nbsp;jak zbierać?"
    metaTitle="Grzybobranie w&nbsp;Puszczy Knyszyńskiej – zasady"
    metaDescription="Poznaj zasady grzybobrania w&nbsp;Puszczy Knyszyńskiej: sezonowość, rozpoznawanie gatunków i&nbsp;ochrona przyrody."
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
          'Występowanie grzybów zależy od gatunku i&nbsp;warunków pogodowych. Najlepszy termin trudno przewidzieć z&nbsp;wyprzedzeniem — w&nbsp;lesie sezon zmienia się z&nbsp;roku na rok.',
      },
      {
        question: 'Jakie grzyby można znaleźć w\u00a0okolicy?',
        answer:
          'Gatunki i\u00a0ich występowanie zależą od miejsca oraz warunków. Nie zbieraj ani nie spożywaj grzybów, których nie rozpoznajesz.',
      },
      {
        question: 'Czy wszędzie można zbierać grzyby?',
        answer:
          'Nie. W&nbsp;rezerwatach przyrody grzybów zbierać nie wolno, a&nbsp;na innych obszarach mogą obowiązywać dodatkowe ograniczenia. Kieruj się oznakowaniem i&nbsp;przepisami.',
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
        🍄 Puszcza Knyszyńska zachęca do jesiennych spacerów, ale udane grzybobranie zależy od
        pogody i&nbsp;miejsca. Zbieraj tylko gatunki, które rozpoznajesz bez wątpliwości,
        i&nbsp;zawsze respektuj zasady obowiązujące na danym terenie.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Kiedy planować grzybobranie?</h2>
      <BlogFigure
        src="/images/blog/grzybobranie-puszcza-kosz-i-kurki.webp"
        alt="Wiklinowy koszyk i kurki na mchu w sosnowym lesie"
        width={1600}
        height={899}
        caption="Koszyk wiklinowy to podstawa grzybiarza."
      />
      <p className="text-muted-foreground leading-relaxed">
        Sezon i&nbsp;liczba grzybów zmieniają się wraz z&nbsp;pogodą. Warto śledzić lokalne
        komunikaty nadleśnictwa — zwłaszcza gdy planujesz wycieczkę w&nbsp;okolice rezerwatu.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Nie zbieraj grzybów w&nbsp;rezerwatach przyrody. W&nbsp;rezerwacie Krzemienne Góry dostęp
        jest ograniczony. RDOŚ publikuje{' '}
        <a
          href="https://www.gov.pl/web/rdos-bialystok/podlaskierezerwaty--rezerwat-przyrody-krzemienne-gory"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Informacje RDOŚ o&nbsp;rezerwacie Krzemienne Góry (otworzy się w&nbsp;nowej karcie)"
        >
          aktualne informacje o&nbsp;rezerwacie
        </a>{' '}
        i&nbsp;stosuj się do zasad ochrony przyrody.
      </p>

      <BlogFigure
        src="/images/blog/grzybobranie-puszcza-grzyb-przy-drzewie.webp"
        alt="Borowik szlachetny rosnący przy pniu drzewa"
        width={1600}
        height={1061}
        caption="Zbieraj tylko grzyby, które rozpoznajesz bez wątpliwości."
      />
      <h2 className="section-title !text-2xl md:!text-3xl">Zanim wyruszysz na grzyby</h2>
      <ul className="space-y-3 text-muted-foreground">
        <li>Występowanie poszczególnych gatunków zależy od pory roku i&nbsp;pogody.</li>
        <li>Nie spożywaj grzybów, których rozpoznania nie jesteś pewien.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Najlepsze miejsca w&nbsp;okolicy Supraśla
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Rezerwat Krzemienne Góry nie jest miejscem do grzybobrania. Zbieraj grzyby wyłącznie tam,
        gdzie zezwalają na to przepisy i&nbsp;lokalne oznaczenia.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Zasady różnią się zależnie od miejsca. Jeśli nie masz pewności, czy wolno tu zbierać, zostaw
        grzyby w&nbsp;lesie i&nbsp;skontaktuj się z&nbsp;nadleśnictwem.
      </p>

      <BlogFigure
        src="/images/blog/grzybobranie-puszcza-grzyby-w-mchu.webp"
        alt="Trzy borowiki w mchu w leśnym runie"
        width={1600}
        height={1061}
      />
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
          <strong>Zaplanuj trasę</strong> — zabierz mapę i&nbsp;ubierz się odpowiednio do pogody.
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
        to dom na wyłączność w&nbsp;miejscowości Konne koło Supraśla. W&nbsp;opisie obiektu
        znajdziesz informacje o&nbsp;lokalizacji, dojeździe i&nbsp;opcjonalnej balii
        z&nbsp;hydromasażem (jacuzzi). Grzybów nie przyrządzaj, jeśli nie masz pewności co do ich
        identyfikacji.
      </p>
    </article>
  </BlogArticleLayout>
);

export default GrzybobraniePuszczaKnyszynska;
