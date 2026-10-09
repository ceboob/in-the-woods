import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';

const PodlasieZPsem = () => (
  <BlogArticleLayout
    title="Podlasie z psem – noclegi i porady"
    metaTitle="Podlasie z psem | Nocleg z psem w Puszczy Knyszyńskiej"
    metaDescription="Planujesz wakacje z psem na Podlasiu? Sprawdź, gdzie znaleźć pet-friendly nocleg w Puszczy Knyszyńskiej. Ogrodzony ogród, szlaki leśne i porady."
    slug="podlasie-z-psem"
    publishDate="2026-04-09"
    readTime="9 min"
    keywords={['Podlasie z psem', 'nocleg z psem Supraśl', 'pet friendly Puszcza Knyszyńska', 'domek z psem']}
    faqs={[
      { question: 'Czy mogę przyjechać z psem do In The Woods?', answer: 'Tak! Psy są mile widziane i pobyt z psem jest bezpłatny. Dom ma ogrodzony ogród, a las zaczyna się za progiem.' },
      { question: 'Czy ogród jest ogrodzony?', answer: 'Tak — ogród jest w pełni ogrodzony, co pozwala psu swobodnie biegać bez smyczy.' },
      { question: 'Czy są dodatkowe opłaty za psa?', answer: 'Nie — pobyt ze zwierzętami jest bezpłatny. Prosimy jedynie o sprzątanie po pupilu.' },
    ]}
    relatedArticles={[
      { title: 'Szlaki Puszczy Knyszyńskiej', slug: 'szlaki-puszcza-knyszynska' },
      { title: 'Cyfrowy detoks w lesie', slug: 'cyfrowy-detoks-las' },
      { title: 'Weekend w Supraślu', slug: 'suprasl-na-weekend' },
    ]}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <p className="text-muted-foreground leading-relaxed text-lg">
        Planujesz wakacje z czworonogiem? <strong>Podlasie z psem</strong> to jedno z najlepszych doświadczeń,
        jakie możesz dać sobie i swojemu pupilowi. Rozległe lasy, dzikie łąki, czyste rzeki i minimum turystów
        — to raj dla psów i ich opiekunów.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Dlaczego Podlasie jest idealne na wyjazd z psem?</h2>
      <p className="text-muted-foreground leading-relaxed">
        Podlasie to najrzadziej zaludniony region Polski. Szerokie leśne drogi, brak tłumów i ogromne
        przestrzenie sprawiają, że Twój pies może naprawdę się wybiegać. Puszcza Knyszyńska oferuje
        setki kilometrów szlaków pieszych, na których spotkasz więcej saren niż ludzi.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Na co zwrócić uwagę przy wyborze noclegu?</h2>
      <ul className="space-y-3 text-muted-foreground">
        <li>🐕 <strong>Ogrodzony ogród</strong> — absolutna podstawa. Pies musi mieć bezpieczną przestrzeń do zabawy.</li>
        <li>🌲 <strong>Bliskość lasu</strong> — szlaki piesze za progiem to wygoda i oszczędność czasu.</li>
        <li>🏡 <strong>Dom na wyłączność</strong> — brak innych gości oznacza brak stresu dla psa (i dla Ciebie).</li>
        <li>💰 <strong>Brak opłat za psa</strong> — wiele miejsc dolicza 30–80 zł/noc. Szukaj tych bez dopłat.</li>
        <li>🚗 <strong>Łatwy dojazd</strong> — dobra droga dojazdowa to ważne, gdy podróżujesz z dużym psem.</li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Szlaki przyjazne psom w okolicy Supraśla</h2>
      <p className="text-muted-foreground leading-relaxed">
        Rezerwat Krzemienne Góry ma ograniczony dostęp. Nie zakładaj, że cała jego powierzchnia
        jest dostępna na spacer z psem; sprawdź aktualne zasady i poruszaj się wyłącznie po
        udostępnionej drodze. Poza rezerwatem wybieraj trasy dopuszczone dla psów.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Bulwary nad Supraślą</strong> — spacerowa trasa wzdłuż rzeki w centrum Supraśla. Psy mile widziane
        (na smyczy). Ławki, cień, dostęp do wody — Twój pies będzie zachwycony.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Green Velo</strong> — odcinki szlaku rowerowego są świetne również do spacerów z psem.
        Szerokie, utwardzone ścieżki prowadzące przez las i łąki.
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
        na wyłączność w Puszczy Knyszyńskiej, z ogrodzonym ogrodem i bez dodatkowej opłaty za psa.
        Przed przyjazdem zapoznaj się z{' '}
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
        Rezerwuj bezpośrednio: <a href="tel:+48722765101" className="text-primary hover:underline">722 765 101</a>.
      </p>
    </article>
  </BlogArticleLayout>
);

export default PodlasieZPsem;
