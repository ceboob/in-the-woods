import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MIN_NIGHTLY_RATE } from '@/lib/pricing';
import jacuzziNight from '@/assets/jacuzzi-night-md.webp';
import monaster from '@/assets/blog-monaster-suprasl-optimized.webp';
import rzeka from '@/assets/blog-rzeka-suprasl-optimized.webp';
import livingFireplace from '@/assets/living-fireplace.webp';

const faqs = [
  {
    question: 'Gdzie na romantyczny weekend na Podlasiu?',
    answer:
      'Najwięcej romantycznych miejsc na krótki wyjazd jest w\u00a0okolicach Supraśla: monaster, bulwary nad rzeką, Arboretum w\u00a0Kopnej Górze i\u00a0Puszcza Knyszyńska. Na jednodniowe wycieczki macie stamtąd Tykocin, Kruszyniany i\u00a0Krainę Otwartych Okiennic.',
  },
  {
    question: 'Ile kosztuje romantyczny weekend na Podlasiu w\u00a0domku?',
    answer: `W\u00a0In The Woods nocleg kosztuje od ${MIN_NIGHTLY_RATE}\u00a0zł za noc za cały dom, niezależnie od tego, czy przyjeżdżacie we dwoje. Balia z\u00a0hydromasażem to ${GARDEN_TUB_PRICE}\u00a0zł za cały pobyt.`,
  },
  {
    question: 'Czy balię trzeba zamówić wcześniej?',
    answer: `Tak. Zaznaczcie ją przy rezerwacji, a\u00a0nagrzejemy ją na Wasz przyjazd. Kosztuje ${GARDEN_TUB_PRICE}\u00a0zł za cały pobyt.`,
  },
  {
    question: 'Jaki termin jest najlepszy na wyjazd we dwoje na Podlasie?',
    answer:
      'Wrzesień i\u00a0październik (rykowisko, kolorowy las, ciepła balia w\u00a0chłodny wieczór) oraz luty z\u00a0okazji walentynek. Maj z\u00a0kwitnącym arboretum też wygrywa.',
  },
  {
    question: 'Czy to dobry pomysł na prezent na rocznicę albo zaręczyny?',
    answer:
      'Tak, i\u00a0chętnie pomożemy. Napiszcie przy rezerwacji, co planujecie, a\u00a0podpowiemy, kiedy nagrzać balię i\u00a0gdzie są najładniejsze miejsca na zachód słońca.',
  },
];

const RomantycznyWeekendPodlasie = () => (
  <BlogArticleLayout
    title="Romantyczne miejsca na Podlasiu – weekend we dwoje"
    metaTitle="Romantyczne miejsca na Podlasiu | Weekend we dwoje"
    metaDescription="9 romantycznych miejsc na Podlasiu: monaster w&nbsp;Supraślu, Tykocin, arboretum, Kraina Otwartych Okiennic. Plan weekendu we dwoje i&nbsp;domek z&nbsp;balią w&nbsp;lesie."
    slug="romantyczny-weekend-podlasie"
    publishDate="2026-04-09"
    dateModified="2026-11-01"
    readTime="10&nbsp;min"
    keywords={[
      'romantyczne miejsca na Podlasiu',
      'romantyczny weekend Podlasie',
      'weekend we dwoje Podlasie',
      'domek z\u00a0balią dla dwojga',
      'walentynki Podlasie',
    ]}
    faqs={faqs}
    relatedArticles={[
      { title: 'Gdzie zjeść w\u00a0Supraślu', slug: 'przewodnik-kulinarny-suprasl' },
      { title: 'Co zobaczyć w\u00a0Białymstoku i\u00a0okolicach', slug: 'bialystok-i-okolice-co-zobaczyc' },
      {
        title: 'Rykowisko jeleni w\u00a0Puszczy Knyszyńskiej',
        slug: 'rykowisko-jeleni-puszcza-knyszynska',
      },
    ]}
  >
    <p className="text-lg leading-relaxed">
      Szukacie miejsca, gdzie jedynym powiadomieniem będzie trzask drewna w&nbsp;kominku? Podlasie
      to najmniej zaludniony region Polski, a&nbsp;to oznacza ciemne niebo, puste drogi i&nbsp;lasy,
      w&nbsp;których słychać własne myśli. Zebraliśmy{' '}
      <strong>romantyczne miejsca na Podlasiu</strong>, do których dojedziecie w&nbsp;jeden dzień
      z&nbsp;okolic Supraśla, i&nbsp;plan na weekend we dwoje, po którym nie będzie się chciało
      wracać.
    </p>

    <img
      loading="eager"
      decoding="async"
      sizes="(min-width: 768px) 768px, 100vw"
      src={jacuzziNight}
      alt="Balia z&nbsp;hydromasażem nocą w&nbsp;ogrodzie domu In The Woods – romantyczny wieczór na Podlasiu"
      className="w-full rounded-lg my-8 aspect-[16/10] object-cover"
      width="1024"
      height="1363"
    />

    <h2>9 romantycznych miejsc na Podlasiu</h2>

    <h3>1. Monaster w&nbsp;Supraślu o&nbsp;zachodzie słońca</h3>
    <p>
      Białe mury Monasteru Zwiastowania Przenajświętszej Bogurodzicy najpiękniej wyglądają
      wieczorem, gdy słońce kładzie się na kopułach. Zajrzyjcie do Muzeum Ikon, a&nbsp;potem
      zejdźcie nad rzekę. Więcej o&nbsp;miasteczku w&nbsp;tekście{' '}
      <Link to="/blog/suprasl-atrakcje-uzdrowisko">Supraśl – atrakcje i&nbsp;uzdrowisko</Link>.
    </p>

    <img
      loading="lazy"
      decoding="async"
      sizes="(min-width: 768px) 768px, 100vw"
      src={monaster}
      alt="Monaster Zwiastowania w&nbsp;Supraślu – romantyczne miejsce na spacer we dwoje"
      className="w-full rounded-lg my-8 aspect-[4/3] object-cover"
      width="810"
      height="1080"
    />

    <h3>2. Bulwary nad rzeką Supraśl</h3>
    <p>
      Spacerowe ścieżki wzdłuż rzeki, ławki, kładki i&nbsp;widok na monaster. Najlepiej z&nbsp;kawą
      na wynos rano albo z&nbsp;lodami w&nbsp;letni wieczór. Kto ma ochotę na więcej, wypożycza
      dwuosobowy kajak i&nbsp;płynie przez puszczę.
    </p>

    <img
      loading="lazy"
      decoding="async"
      sizes="(min-width: 768px) 768px, 100vw"
      src={rzeka}
      alt="Rzeka Supraśl wśród drzew Puszczy Knyszyńskiej"
      className="w-full rounded-lg my-8 aspect-[16/9] object-cover"
      width="1024"
      height="1024"
    />

    <h3>3. Arboretum w&nbsp;Kopnej Górze</h3>
    <p>
      Około 26&nbsp;hektarów drzew i&nbsp;krzewów z&nbsp;całego świata, kilkanaście minut od
      Supraśla. W&nbsp;maju kwitną różaneczniki, jesienią klony robią się czerwone. Ciche alejki,
      ławki nad stawem i&nbsp;prawie zero tłumów.
    </p>

    <h3>4. Puszcza Knyszyńska i&nbsp;Góra Kopna</h3>
    <p>
      Za domem zaczyna się las. Rano mgła nad łąkami, wieczorem jelenie na skraju polany,
      a&nbsp;wrzesień to <Link to="/blog/rykowisko-jeleni-puszcza-knyszynska">rykowisko</Link>,
      którego słucha się z&nbsp;tarasu z&nbsp;herbatą w&nbsp;dłoni. Trasy na spacer we dwoje
      opisaliśmy w&nbsp;
      <Link to="/blog/puszcza-knyszynska-przewodnik">przewodniku po Puszczy Knyszyńskiej</Link>.
    </p>

    <h3>5. Tykocin nad Narwią</h3>
    <p>
      Brukowany rynek, barokowy kościół, Wielka Synagoga i&nbsp;odbudowany zamek nad rzeką. Tykocin
      to około godziny drogi z&nbsp;Supraśla i&nbsp;idealny cel na sobotnie popołudnie. Zostańcie na
      zachód słońca nad Narwią.
    </p>

    <h3>6. Pałac Branickich w&nbsp;Białymstoku</h3>
    <p>
      Nazywany Wersalem Północy, z&nbsp;ogrodami, w&nbsp;których spacer jest bezpłatny. Romantycznie
      robi się zwłaszcza po zmroku, kiedy pałac jest podświetlony. Cały plan zwiedzania znajdziecie
      w&nbsp;tekście{' '}
      <Link to="/blog/bialystok-i-okolice-co-zobaczyc">
        co warto zobaczyć w&nbsp;Białymstoku i&nbsp;okolicach
      </Link>
      .
    </p>

    <h3>7. Kraina Otwartych Okiennic</h3>
    <p>
      Trześcianka, Soce i&nbsp;Puchły to wsie z&nbsp;kolorowymi, rzeźbionymi okiennicami, jakby czas
      się tu zatrzymał. Najlepiej objechać je powoli, z&nbsp;postojami na zdjęcia.{' '}
      <Link to="/blog/kraina-otwartych-okiennic">Trasę opisaliśmy tutaj</Link>.
    </p>

    <h3>8. Kruszyniany i&nbsp;drewniany meczet</h3>
    <p>
      Tatarska wieś z&nbsp;zielonym meczetem i&nbsp;obiadem, o&nbsp;którym będziecie rozmawiać
      w&nbsp;drodze powrotnej. Pierekaczewnik na deser obowiązkowo. Szczegóły:{' '}
      <Link to="/blog/kruszyniany-tatarska-wies">Kruszyniany – tatarska wieś</Link>.
    </p>

    <h3>9. Balia pod gwiazdami w&nbsp;Konnem</h3>
    <p>
      Na koniec miejsce, którego nie znajdziecie w&nbsp;przewodnikach: Wasz własny ogród. Gorąca
      woda, chłodne powietrze, nad głową niebo bez łuny miasta. Jedyny tłum, jaki tu spotkacie, to
      komary w&nbsp;lipcu.
    </p>

    <h2>Plan romantycznego weekendu na Podlasiu</h2>
    <h3>Piątek: przyjazd i&nbsp;pierwszy wieczór</h3>
    <p>
      Przyjedźcie przed zmrokiem. Rozpalcie kominek, otwórzcie wino i&nbsp;nie róbcie nic. Jeśli
      zamówiliście balię, będzie już ciepła.
    </p>
    <h3>Sobota: Supraśl i&nbsp;puszcza</h3>
    <p>
      Kawa na tarasie, spacer do monasteru, obiad z&nbsp;babką ziemniaczaną (gdzie najlepsza,
      piszemy w&nbsp;
      <Link to="/blog/przewodnik-kulinarny-suprasl">przewodniku kulinarnym po Supraślu</Link>), po
      południu arboretum albo kajak. Wieczorem kolacja przy świecach w&nbsp;domu albo
      w&nbsp;restauracji w&nbsp;miasteczku.
    </p>
    <h3>Niedziela: powoli</h3>
    <p>
      Bez budzika, śniadanie do południa, ostatni spacer po lesie. Jeśli jeszcze macie siłę,
      w&nbsp;drodze do domu zahaczcie o&nbsp;Tykocin.
    </p>

    <img
      loading="lazy"
      decoding="async"
      sizes="(min-width: 768px) 768px, 100vw"
      src={livingFireplace}
      alt="Salon z&nbsp;kominkiem w&nbsp;domu In The Woods – wieczór we dwoje na Podlasiu"
      className="w-full rounded-lg my-8"
      width="1600"
      height="968"
    />

    <h2>Dlaczego dom w&nbsp;lesie, a&nbsp;nie hotel?</h2>
    <ul>
      <li>
        <strong>Cały dom tylko dla Was</strong> – bez recepcji, korytarzy i&nbsp;sąsiadów za ścianą.
      </li>
      <li>
        <strong>Kominek i&nbsp;balia z&nbsp;hydromasażem</strong> – ogień w&nbsp;salonie, gorąca
        woda w&nbsp;ogrodzie.
      </li>
      <li>
        <strong>Kuchnia kaflowa</strong> – kolacja we dwoje gotowana razem, bez karty dań.
      </li>
      <li>
        <strong>Ciemne niebo</strong> – z&nbsp;dala od świateł miasta, gwiazdy widać gołym okiem.
      </li>
      <li>
        <strong>10&nbsp;minut do Supraśla</strong> – restauracje i&nbsp;zabytki blisko, ale nie za
        oknem.
      </li>
    </ul>

    <h2>Zarezerwujcie weekend we dwoje</h2>
    <p>
      <Link to="/">In The Woods</Link> to drewniany dom na wyłączność w&nbsp;Konnem koło Supraśla.
      Szczegóły balii znajdziecie na stronie{' '}
      <Link to="/domek-z-jacuzzi-podlasie">domku z&nbsp;balią na Podlasiu</Link>, a&nbsp;gotowy
      rozkład dnia w&nbsp;<Link to="/weekend-suprasl">planie weekendu w&nbsp;Supraślu</Link>. Wolne
      terminy sprawdzicie w&nbsp;<Link to="/#rezerwacja">kalendarzu rezerwacji</Link> albo dzwoniąc
      pod <a href="tel:+48722765101">722&nbsp;765&nbsp;101</a>. Weekendy walentynkowe
      i&nbsp;wrześniowe znikają pierwsze.
    </p>
  </BlogArticleLayout>
);

export default RomantycznyWeekendPodlasie;
