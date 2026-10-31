import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import { GARDEN_TUB_PRICE, MIN_NIGHTLY_RATE } from '@/lib/pricing';

const RomantycznyWeekendPodlasie = () => (
  <BlogArticleLayout
    title="Pomysł na romantyczny weekend we dwoje na Podlasiu"
    metaTitle="Romantyczny weekend na Podlasiu | Domek i&nbsp;balia"
    metaDescription="Romantyczny weekend na Podlasiu: domek z&nbsp;kominkiem, gorąca balia i&nbsp;kolacja przy świecach w&nbsp;sercu puszczy."
    slug="romantyczny-weekend-podlasie"
    publishDate="2026-04-09"
    readTime="10&nbsp;min"
    keywords={[
      'romantyczny weekend Podlasie',
      'domek z\u00a0kominkiem',
      'weekend we dwoje',
      'domek z\u00a0balią',
    ]}
    faqs={[
      {
        question: 'Ile kosztuje romantyczny weekend na Podlasiu?',
        answer: `Cena noclegu zaczyna się od ${MIN_NIGHTLY_RATE} zł za noc i\u00a0zależy od terminu oraz liczby gości. Korzystanie z\u00a0balii z\u00a0hydromasażem (jacuzzi) kosztuje ${GARDEN_TUB_PRICE} zł za cały pobyt.`,
      },
      {
        question: 'Czy trzeba rezerwować jacuzzi z\u00a0wyprzedzeniem?',
        answer:
          'Tak, zamówcie ją przy rezerwacji, a\u00a0nagrzejemy ją na Wasz przyjazd. Kosztuje 250\u00a0zł za cały pobyt.',
      },
      {
        question: 'Gdzie najlepiej na romantyczny wypad na Podlasiu?',
        answer:
          'Okolice Supraśla i\u00a0Puszcza Knyszyńska oferują najpiękniejsze odosobnione domki w\u00a0lesie, idealne na weekend we dwoje.',
      },
    ]}
    relatedArticles={[
      { title: 'Cyfrowy detoks w\u00a0lesie', slug: 'cyfrowy-detoks-las' },
      { title: 'Weekend w\u00a0Supraślu: plan od piątku do niedzieli', slug: '/weekend-suprasl' },
      { title: 'Workation na Podlasiu', slug: 'workation-podlasie' },
    ]}
  >
    <article className="prose prose-lg max-w-none space-y-8">
      <p className="text-muted-foreground leading-relaxed text-lg">
        Wyobraź sobie wieczór, w&nbsp;którym jedynym dźwiękiem jest trzask drewna w&nbsp;kominku,
        a&nbsp;za oknem — <strong>szepty puszczy</strong>. Gorąca balia czeka w&nbsp;ogrodzie, niebo
        pełne gwiazd, a&nbsp;Ty dzielisz ten moment z&nbsp;osobą, na której Ci zależy. To nie
        fantazja — to <strong>romantyczny weekend na Podlasiu</strong>.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">
        Dlaczego Podlasie na romantyczny wypad?
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        Podlasie to najrzadziej zaludniony region Polski. Tutaj cisza jest prawdziwa,
        a&nbsp;prywatność — absolutna. Zapomnij o&nbsp;zatłoczonych hotelach i&nbsp;hałaśliwych
        kurortach. Na Podlasiu odnajdziesz <strong>ostoje spokoju</strong>, gdzie czas płynie
        wolniej, a&nbsp;każdy moment spędzony we dwoje nabiera głębi.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Puszcza Knyszyńska — jeden z&nbsp;największych kompleksów leśnych w&nbsp;Europie Środkowej —
        otacza Cię ze wszystkich stron. Poranne mgły nad łąkami, zachody słońca malujące niebo na
        złoto, nocne niebo bez sztucznego światła. To sceneria, której żaden hotel miejski nie jest
        w&nbsp;stanie Ci zaoferować.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Idealny plan romantycznego weekendu</h2>

      <h3 className="font-heading text-xl font-semibold text-foreground">
        Piątek wieczór — przywitanie z&nbsp;puszczą
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Przyjedź przed zmrokiem. Rozpakuj się, rozpal kominek i&nbsp;otwórz butelkę wina. Pierwszy
        wieczór poświęć na <strong>zwolnienie tempa</strong>. Jeśli zarezerwowałeś balię
        z&nbsp;hydromasażem (jacuzzi) — to najlepszy moment na odpoczynek pod gwiazdami.
      </p>

      <h3 className="font-heading text-xl font-semibold text-foreground">
        Sobota — dzień odkrywania
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Poranek zacznij od kawy na tarasie z&nbsp;widokiem na las. Po śniadaniu wybierzcie spacer po
        okolicy. Przed wizytą w <strong>Rezerwacie Krzemienne Góry</strong> sprawdź zasady
        udostępniania i&nbsp;wybierz wyłącznie dozwoloną trasę. W&nbsp;Supraślu możecie odwiedzić
        Monaster lub przejść się bulwarami nad rzeką.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Wieczorem przygotujcie kolację we dwoje w&nbsp;pełni wyposażonej kuchni. Rozpalcie ognisko
        w&nbsp;ogrodzie. Albo zamówcie kolację z&nbsp;lokalnej restauracji — smaki Podlasia
        (kartacze, sękacz) to osobne doświadczenie.
      </p>

      <h3 className="font-heading text-xl font-semibold text-foreground">
        Niedziela — slow morning
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        Żadnego budzika. Poranne promienie słońca przebijające przez korony drzew, leniwe śniadanie,
        ostatni spacer po lesie. Wymeldowanie do 11:00, ale wspomnienia zostają na długo.
      </p>

      <h2 className="section-title !text-2xl md:!text-3xl">Co sprawia, że to wyjątkowe?</h2>
      <ul className="space-y-3 text-muted-foreground">
        <li>
          🔥 <strong>Prywatny kominek</strong> — prawdziwy ogień, prawdziwa atmosfera
        </li>
        <li>
          🛁 <strong>Balia z&nbsp;hydromasażem (jacuzzi)</strong> — chwila odpoczynku pod gwiazdami
        </li>
        <li>
          🌲 <strong>Absolutna prywatność</strong> — cały dom i&nbsp;ogród tylko dla Was
        </li>
        <li>
          🌙 <strong>Ciemne niebo</strong> — daleko od miejskiego zanieczyszczenia świetlnego
        </li>
        <li>
          🍳 <strong>W&nbsp;pełni wyposażona kuchnia</strong> — gotujcie razem, w&nbsp;swoim tempie
        </li>
      </ul>

      <h2 className="section-title !text-2xl md:!text-3xl">Gdzie zarezerwować?</h2>
      <p className="text-muted-foreground leading-relaxed">
        <Link to="/" className="text-primary hover:underline font-medium">
          In The Woods
        </Link>{' '}
        to prywatny dom w&nbsp;lesie, położony w&nbsp;miejscowości Konne, niedaleko Supraśla
        i&nbsp;Puszczy Knyszyńskiej. Kominek, ogród i&nbsp;taras tworzą spokojne miejsce na wspólny
        wyjazd. Jeśli balia z&nbsp;hydromasażem (jacuzzi) jest ważną częścią planu, sprawdź
        szczegóły oferty{' '}
        <Link to="/domek-z-jacuzzi-podlasie" className="text-primary hover:underline font-medium">
          domku z&nbsp;balią na Podlasiu
        </Link>
        .
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <strong>Kontakt bezpośredni</strong> — zadzwoń pod{' '}
        <a href="tel:+48722765101" className="text-primary hover:underline">
          722 765 101
        </a>{' '}
        lub wyślij zapytanie przez{' '}
        <Link to="/#rezerwacja" className="text-primary hover:underline">
          formularz na stronie
        </Link>
        .
      </p>
    </article>
  </BlogArticleLayout>
);

export default RomantycznyWeekendPodlasie;
