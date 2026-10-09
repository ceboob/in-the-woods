import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const PodlasieZPsem = () => (
  <BlogArticleLayout
    title="Podlasie z psem – noclegi i porady"
    metaTitle="Podlasie z psem | Nocleg z psem w Puszczy Knyszyńskiej"
    metaDescription="Planujesz wyjazd z psem na Podlasie? Sprawdź, o co zapytać przed wyborem noclegu i jak przygotować się do spacerów w okolicy Supraśla."
    slug="podlasie-z-psem"
    publishDate="2026-04-09"
    readTime="9 min"
    keywords={['Podlasie z psem', 'nocleg z psem Supraśl', 'pet friendly Puszcza Knyszyńska', 'domek z psem']}
    faqs={[
      { question: 'Czy mogę przyjechać z psem do In The Woods?', answer: 'Przed wysłaniem zapytania potwierdź z gospodarzem, czy pobyt z psem jest możliwy i jakie zasady obowiązują.' },
      { question: 'Czy ogród jest ogrodzony?', answer: 'Informację o ogrodzeniu i warunkach dla zwierząt potwierdź przed pobytem, szczególnie jeśli planujesz wypuszczać psa bez smyczy.' },
      { question: 'Czy są dodatkowe opłaty za psa?', answer: 'Zapytaj gospodarza o ewentualne opłaty i zasady pobytu ze zwierzęciem.' },
    ]}
    relatedArticles={[
      { title: 'Szlaki Puszczy Knyszyńskiej', slug: 'szlaki-puszcza-knyszynska' },
      { title: 'Cyfrowy detoks w lesie', slug: 'cyfrowy-detoks-las' },
      { title: 'Weekend w Supraślu', slug: 'suprasl-na-weekend' },
    ]}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <p className="text-muted-foreground leading-relaxed text-lg">
        Planujesz wyjazd z czworonogiem? Przed wyborem noclegu sprawdź zasady pobytu ze zwierzętami,
        a trasę spaceru dopasuj do możliwości psa oraz lokalnych ograniczeń.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dlaczego Podlasie jest idealne na wyjazd z psem?</h2>
      <p className="text-muted-foreground leading-relaxed">
        W okolicach Supraśla znajdują się tereny leśne i trasy spacerowe, ale zasady dostępu mogą się
        różnić w zależności od miejsca. Przed wyjściem sprawdź oznakowanie, regulamin i długość trasy.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Na co zwrócić uwagę przy wyborze noclegu?</h2>
      <ul className="space-y-3 text-muted-foreground">
        <li>🐕 <strong>Zasady dla zwierząt</strong> — potwierdź, czy pies może przebywać w obiekcie i czy obowiązują dodatkowe opłaty.</li>
        <li>🌲 <strong>Dostęp do tras</strong> — zapytaj o pobliskie spacery i sprawdź ograniczenia dla psów na wybranym terenie.</li>
        <li>🏡 <strong>Warunki pobytu</strong> — ustal, czy pies może zostać sam w obiekcie i z których przestrzeni może korzystać.</li>
        <li>💧 <strong>Potrzeby psa</strong> — uwzględnij wodę, smycz, odpoczynek i trasę odpowiednią dla zwierzęcia.</li>
        <li>📍 <strong>Dojazd</strong> — sprawdź trasę do obiektu i możliwości spacerów w jego okolicy.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Szlaki przyjazne psom w okolicy Supraśla</h2>
      <p className="text-muted-foreground leading-relaxed">
        Zasady wprowadzania psów mogą zależeć od rodzaju terenu i jego ochrony. Nie planuj wejścia
        z psem do rezerwatu bez potwierdzenia, że jest to dozwolone; sprawdź oznakowanie i informacje
        właściwego organu. Na innych trasach stosuj się do lokalnych regulaminów.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Trasy spacerowe w Supraślu</strong> — przed wyjściem sprawdź lokalne zasady dotyczące
        psów i prowadź zwierzę zgodnie z oznakowaniem.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Odcinki szlaków w regionie</strong> — wybierz trasę dopuszczoną dla psów i oceń, czy
        jej nawierzchnia oraz długość będą odpowiednie dla zwierzęcia.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Zasady pobytu z psem w lesie</h2>
      <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
        <li><strong>Sprawdź zasady dostępu</strong> — ograniczenia dotyczące wprowadzania psów zależą od terenu; respektuj oznakowanie i regulaminy.</li>
        <li><strong>Sprzątaj po psie</strong> — nawet w lesie. Woreczki to standard odpowiedzialnego opiekuna.</li>
        <li><strong>Sprawdź kleszcze</strong> — po każdym spacerze w lesie dokładnie sprawdź sierść pupila.</li>
        <li><strong>Zabierz wodę</strong> — na dłuższe wyprawy zabierz miskę i butelkę z wodą.</li>
        <li><strong>Chroń dziką zwierzynę</strong> — prowadź psa na smyczy w lesie i nie pozwalaj mu płoszyć zwierząt.</li>
      </ol>

      <h2 className="section-title !text-2xl md:!text-3xl">In The Woods — dom pet-friendly</h2>
      <p className="text-muted-foreground leading-relaxed">
        <Link to="/" className="text-primary hover:underline font-medium">In The Woods</Link> to dom
        w okolicach Supraśla. Możliwość pobytu z psem, ewentualne opłaty i informację o ogrodzeniu
        potwierdź z gospodarzem. Przed przyjazdem zapoznaj się z{' '}
        <Link to="/informator" className="text-primary hover:underline font-medium">
          informatorem gościa i zasadami pobytu
        </Link>
        . Szczegóły oferty oraz dostępność znajdziesz na stronie{' '}
        <Link to="/noclegi-suprasl" className="text-primary hover:underline font-medium">
          noclegów w Supraślu
        </Link>
        .
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Zapytaj o pobyt: <a href="tel:+48722765101" className="text-primary hover:underline">722 765 101</a>.
      </p>
    </article>
  </BlogArticleLayout>
);

export default PodlasieZPsem;
