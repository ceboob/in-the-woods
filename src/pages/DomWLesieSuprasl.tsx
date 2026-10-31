import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';

const DomWLesieSuprasl = () => (
  <SEOPageLayout
    title="Dom w lesie na Podlasiu – cisza i kominek | In The Woods"
    description="Najbliżsi sąsiedzi to sarny. Drewniany dom w&nbsp;Puszczy Knyszyńskiej, z&nbsp;kominkiem i&nbsp;balią. Odludzie, ale z&nbsp;internetem 200&nbsp;Mb/s."
    breadcrumbName="Dom w&nbsp;lesie Supraśl"
    ogImage="https://www.suprasl.online/images/exterior-main.webp"
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
        Dom w&nbsp;lesie koło Supraśla: cisza w&nbsp;pakiecie
      </h1>

      <p className="text-muted-foreground leading-relaxed text-lg">
        In The Woods to drewniany dom z&nbsp;bali w&nbsp;Konnem, na skraju Puszczy Knyszyńskiej,
        około 10&nbsp;minut od Supraśla. Wynajmujecie go w&nbsp;całości: salon z&nbsp;kominkiem,
        kuchnię, dwie sypialnie, taras i&nbsp;ogród. Najbliżsi sąsiedzi? Głównie sarny. I&nbsp;jeden
        bardzo pracowity dzięcioł.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Jak tu jest naprawdę</h2>
      <p className="text-muted-foreground leading-relaxed">
        Rano słychać ptaki, a&nbsp;w&nbsp;nocy sowy. Jesienią, w&nbsp;czasie rykowiska, potrafią się
        odezwać jelenie. Jedyny ruch uliczny to lis, który sprawdza, czy zostawiliście coś przy
        grillu.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Las zaczyna się zaraz za płotem, więc na pierwszy spacer nie musicie nawet odpalać auta. Do
        Supraśla, z&nbsp;monasterem, rzeką i&nbsp;knajpami, jedziecie około 10&nbsp;minut.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Weekend bez pośpiechu</h2>
      <p className="text-muted-foreground leading-relaxed">
        Nikt Wam tu nie układa planu dnia. Śniadanie o&nbsp;11:00? Proszę bardzo. Drzemka po
        obiedzie, spacer do lasu, książka przy kominku i&nbsp;ognisko wieczorem: to nie lenistwo, to
        wypoczynek.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Jeśli jednak ciągnie Was w&nbsp;teren, w&nbsp;okolicy jest Arboretum w&nbsp;Kopnej Górze,
        szlaki Puszczy Knyszyńskiej i&nbsp;kajaki na rzece Supraśl. Wieczorem wracacie do kominka
        albo do balii.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Balia pod sosnami</h2>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Dom w&nbsp;lesie blisko Supraśla</strong> ma w&nbsp;ogrodzie gorącą balię
        z&nbsp;hydromasażem, która działa jak jacuzzi. Kosztuje 250&nbsp;zł za cały pobyt. Para nad
        wodą, gwiazdy nad drzewami, z&nbsp;dala od miejskich świateł.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Pies przyjeżdża gratis, a&nbsp;ogród jest ogrodzony. Dzieci mają plac zabaw, a&nbsp;dorośli
        chwilę spokoju.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Odludzie, ale ze Starlinkiem</h2>
      <p className="text-muted-foreground leading-relaxed">
        Jesteście w&nbsp;lesie, ale nie na końcu świata. Starlink ciągnie do 200&nbsp;Mb/s, więc
        wideorozmowa z&nbsp;biurem przejdzie bez zacinania. Chcecie cyfrowego detoksu? Wyłączcie
        router. Decyzja należy do Was.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Minimalny pobyt to 2&nbsp;noce, a&nbsp;w&nbsp;wakacje 3. Szczerze: po dwóch nocach dopiero
        zaczyna się robić naprawdę dobrze.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Każda pora roku ma swój urok</h2>
      <p className="text-muted-foreground leading-relaxed">
        Wiosną las budzi się i&nbsp;pachnie, latem jest cień i&nbsp;ognisko do późna, jesienią
        grzyby i&nbsp;rykowisko, a&nbsp;zimą śnieg, kominek i&nbsp;para nad balią. Ceny dla każdego
        sezonu znajdziecie w&nbsp;cenniku na stronie głównej.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Jak zarezerwować dom w&nbsp;lesie</h2>
      <p className="text-muted-foreground leading-relaxed">
        Zadzwońcie do Macieja pod 722 765 101 albo wyślijcie formularz na stronie głównej. Formularz
        to tylko pytanie o&nbsp;termin: niczego nie rezerwuje i&nbsp;niczego nie pobiera.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Porównujecie opcje? Zajrzyjcie na stronę o{' '}
        <Link to="/noclegi-suprasl" className="text-primary underline hover:text-primary/80">
          noclegach w&nbsp;Supraślu
        </Link>
        , weźcie gotowy{' '}
        <Link to="/weekend-suprasl" className="text-primary underline hover:text-primary/80">
          plan na weekend w&nbsp;Supraślu
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
          noclegu w&nbsp;Puszczy Knyszyńskiej
        </Link>
        . Wszystko o&nbsp;balii znajdziecie na stronie{' '}
        <Link
          to="/domek-z-jacuzzi-podlasie"
          className="text-primary underline hover:text-primary/80"
        >
          domek z&nbsp;balią na Podlasiu
        </Link>
        .
      </p>

      <div className="bg-secondary p-8 text-center space-y-4 mt-12">
        <h3 className="font-heading text-2xl font-light">Sprawdźcie wolne terminy</h3>
        <p className="text-muted-foreground">
          Maciej odpisuje zwykle w&nbsp;kilka godzin. Pytanie nic nie kosztuje.
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
