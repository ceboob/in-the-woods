import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';

const DomWLesieSuprasl = () => (
  <SEOPageLayout
    title="Dom w lesie na Podlasiu – cisza, sarny i kominek | In The Woods"
    description="Najbliżsi sąsiedzi to sarny. Drewniany dom w Puszczy Knyszyńskiej, z kominkiem i balią. Odludzie, ale z internetem 200 Mb/s."
    breadcrumbName="Dom w lesie Supraśl"
    ogImage="https://www.suprasl.online/images/exterior-main.webp"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Dom w lesie koło Supraśla: cisza w pakiecie
      </h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        In The Woods to drewniany dom z bali w Konnem, na skraju Puszczy Knyszyńskiej, około 10 minut
        od Supraśla. Wynajmujecie go w całości: salon z kominkiem, kuchnię, dwie sypialnie, taras i
        ogród. Najbliżsi sąsiedzi? Głównie sarny. I jeden bardzo pracowity dzięcioł.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Jak tu jest naprawdę</h2>
      <p className="text-muted-foreground leading-relaxed">
        Rano słychać ptaki, a w nocy sowy. Jesienią, w czasie rykowiska, potrafią się odezwać
        jelenie. Jedyny ruch uliczny to lis, który sprawdza, czy zostawiliście coś przy grillu.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Las zaczyna się zaraz za płotem, więc na pierwszy spacer nie musicie nawet odpalać auta. Do
        Supraśla, z monasterem, rzeką i knajpami, jedziecie około 10 minut.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Weekend bez pośpiechu</h2>
      <p className="text-muted-foreground leading-relaxed">
        Nikt Wam tu nie układa planu dnia. Śniadanie o 11:00? Proszę bardzo. Drzemka po obiedzie,
        spacer do lasu, książka przy kominku i ognisko wieczorem: to nie lenistwo, to wypoczynek.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Jeśli jednak ciągnie Was w teren, w okolicy jest Arboretum w Kopnej Górze, szlaki Puszczy
        Knyszyńskiej i kajaki na rzece Supraśl. Wieczorem wracacie do kominka albo do balii.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Balia pod sosnami</h2>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Dom w lesie blisko Supraśla</strong> ma w ogrodzie gorącą balię z hydromasażem, która
        działa jak jacuzzi. Kosztuje 250 zł za cały pobyt. Para nad wodą, gwiazdy nad drzewami, z dala
        od miejskich świateł.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Pies przyjeżdża gratis, a ogród jest ogrodzony. Dzieci mają plac zabaw, a dorośli
        chwilę spokoju.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Odludzie, ale ze Starlinkiem</h2>
      <p className="text-muted-foreground leading-relaxed">
        Jesteście w lesie, ale nie na końcu świata. Starlink ciągnie do 200 Mb/s, więc wideorozmowa
        z biurem przejdzie bez zacinania. Chcecie cyfrowego detoksu? Wyłączcie router. Decyzja
        należy do Was.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Minimalny pobyt to 2 noce, a w wakacje 3. Szczerze: po dwóch nocach dopiero zaczyna się
        robić naprawdę dobrze.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Każda pora roku ma swój urok</h2>
      <p className="text-muted-foreground leading-relaxed">
        Wiosną las budzi się i pachnie, latem jest cień i ognisko do późna, jesienią grzyby i
        rykowisko, a zimą śnieg, kominek i para nad balią. Ceny dla każdego sezonu znajdziecie w
        cenniku na stronie głównej.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Jak zarezerwować dom w lesie</h2>
      <p className="text-muted-foreground leading-relaxed">
        Zadzwońcie do Macieja pod 722 765 101 albo wyślijcie formularz na stronie głównej. Formularz
        to tylko pytanie o termin: niczego nie rezerwuje i niczego nie pobiera.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Porównujecie opcje? Zajrzyjcie na stronę o{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegach w Supraślu
        </Link>
        , weźcie gotowy{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          plan na weekend w Supraślu
        </Link>
        , przejrzyjcie{' '}
        <Link to="/atrakcje-suprasl" className="text-primary underline hover:text-primary/80">
          atrakcje Supraśla
        </Link>{' '}
        albo trasy na stronie o{' '}
        <Link
          to="/puszcza-knyszynska-nocleg"
          className="text-primary underline hover:text-primary/80"
        >
          noclegu w Puszczy Knyszyńskiej
        </Link>
        . Wszystko o balii znajdziecie na stronie{' '}
        <Link
          to="/domek-z-jacuzzi-podlasie"
          className="text-primary underline hover:text-primary/80"
        >
          domek z balią na Podlasiu
        </Link>
        .
      </p>

      <div className="bg-secondary p-8 text-center space-y-4 mt-12">
        <h3 className="font-heading text-2xl font-light">Sprawdźcie wolne terminy</h3>
        <p className="text-muted-foreground">
          Maciej odpisuje zwykle w kilka godzin. Pytanie nic nie kosztuje.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+48722765101" className="btn-primary">
            Zadzwoń: 722 765 101
          </a>
          <Link to="/#rezerwacja" className="btn-outline">
            Przejdź do formularza
          </Link>
        </div>
      </div>
    </article>
  </SEOPageLayout>
);

export default DomWLesieSuprasl;
