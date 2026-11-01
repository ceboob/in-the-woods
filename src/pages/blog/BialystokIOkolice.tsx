import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import monaster from '@/assets/blog-monaster-suprasl-optimized.webp';
import kruszyniany from '@/assets/blog-kruszyniany-meczet-optimized.webp';
import puszczaPanorama from '@/assets/blog-puszcza-panorama.webp';
import cabinGarden from '@/assets/cabin-day-garden.webp';

const faqs = [
  {
    question: 'Co warto zobaczyć w\u00a0Białymstoku w\u00a0jeden dzień?',
    answer:
      'Pałac Branickich z\u00a0ogrodami, Rynek Kościuszki z\u00a0Ratuszem, katedrę i\u00a0cerkiew św. Mikołaja, a\u00a0po południu Muzeum Pamięci Sybiru albo Centrum Zamenhofa. Na koniec spacer po drewnianych Bojarach.',
  },
  {
    question: 'Co zobaczyć w\u00a0okolicach Białegostoku?',
    answer:
      'Supraśl z\u00a0monasterem i\u00a0Muzeum Ikon, Tykocin z\u00a0Wielką Synagogą i\u00a0zamkiem, pałac w\u00a0Choroszczy, kładkę w\u00a0Waniewie w\u00a0Narwiańskim Parku Narodowym, tatarskie Kruszyniany, Arboretum w\u00a0Kopnej Górze i\u00a0Puszczę Knyszyńską.',
  },
  {
    question: 'Gdzie nocować, zwiedzając Białystok i\u00a0okolice?',
    answer:
      'Jeśli wolicie ciszę niż hotel w\u00a0centrum, dobrą bazą jest Supraśl. In The Woods to dom na wyłączność w\u00a0Konnem, około 30–40\u00a0minut autem od centrum Białegostoku, z\u00a0kominkiem i\u00a0balią z\u00a0hydromasażem.',
  },
  {
    question: 'Czy ogrody Pałacu Branickich są płatne?',
    answer:
      'Spacer po ogrodach pałacowych jest bezpłatny. Za zwiedzanie wnętrz i\u00a0wystaw płaci się osobno, a\u00a0godziny warto sprawdzić przed wyjazdem.',
  },
  {
    question: 'Ile czasu potrzeba na Białystok i\u00a0okolice?',
    answer:
      'Długi weekend wystarczy: jeden dzień na Białystok, jeden na Supraśl i\u00a0puszczę, jeden na Tykocin albo Kruszyniany. Przy czterech dniach dorzućcie Narwiański Park Narodowy.',
  },
];

const BialystokIOkolice = () => (
  <BlogArticleLayout
    title="Co warto zobaczyć w Białymstoku i okolicach – plan na 3 dni"
    metaTitle="Co zobaczyć w Białymstoku i okolicach? Plan na 3 dni"
    metaDescription="Co warto zobaczyć w&nbsp;Białymstoku i&nbsp;okolicach: Pałac Branickich, Bojary, Tykocin, Supraśl, Kruszyniany i&nbsp;kładka w&nbsp;Waniewie. Gotowy plan na 3&nbsp;dni i&nbsp;nocleg w&nbsp;lesie."
    slug="bialystok-i-okolice-co-zobaczyc"
    publishDate="2026-11-01"
    readTime="11&nbsp;min"
    keywords={[
      'co warto zobaczyć w\u00a0Białymstoku',
      'Białystok i\u00a0okolice atrakcje',
      'co zobaczyć w\u00a0okolicach Białegostoku',
      'weekend na Podlasiu',
      'nocleg koło Białegostoku',
    ]}
    faqs={faqs}
    relatedArticles={[
      { title: 'Romantyczne miejsca na Podlasiu', slug: 'romantyczny-weekend-podlasie' },
      { title: 'Gdzie zjeść w\u00a0Supraślu', slug: 'przewodnik-kulinarny-suprasl' },
      { title: 'Kruszyniany – tatarska wieś Podlasia', slug: 'kruszyniany-tatarska-wies' },
    ]}
  >
    <p className="text-lg leading-relaxed">
      Białystok bywa przystankiem w&nbsp;drodze na Biebrzę albo do Białowieży, a&nbsp;szkoda, bo
      w&nbsp;promieniu godziny jazdy od miasta macie barokowy pałac, drewniane osiedla, tatarskie
      meczety, żydowskie miasteczko nad Narwią i&nbsp;puszczę, która zaczyna się za rogatkami. Oto{' '}
      <strong>co warto zobaczyć w&nbsp;Białymstoku i&nbsp;okolicach</strong>, ułożone tak, żeby
      zmieścić to w&nbsp;długim weekendzie i&nbsp;nie spędzić go w&nbsp;samochodzie.
    </p>

    <img
      loading="eager"
      decoding="async"
      sizes="(min-width: 768px) 768px, 100vw"
      src={puszczaPanorama}
      alt="Panorama Puszczy Knyszyńskiej, która zaczyna się tuż za Białymstokiem"
      className="w-full rounded-lg my-8"
      width="930"
      height="480"
    />

    <h2>Co warto zobaczyć w&nbsp;Białymstoku</h2>

    <h3>Pałac Branickich i&nbsp;ogrody</h3>
    <p>
      Wizytówka miasta, XVIII-wieczna rezydencja hetmana Jana Klemensa Branickiego, nazywana
      Wersalem Północy. Ogrody z&nbsp;rzeźbami, alejami i&nbsp;pawilonami można obejść bezpłatnie,
      a&nbsp;w&nbsp;pałacu działa muzeum historii medycyny i&nbsp;farmacji. Wieczorem, gdy fasada
      jest podświetlona, robi się tu naprawdę romantycznie.
    </p>

    <h3>Rynek Kościuszki i&nbsp;Ratusz</h3>
    <p>
      Kilka minut spacerem od pałacu. W&nbsp;Ratuszu mieści się Muzeum Podlaskie z&nbsp;galerią
      malarstwa polskiego, a&nbsp;wokół rynku kawiarnie i&nbsp;ogródki. Obok stoją bazylika
      archikatedralna Wniebowzięcia NMP i&nbsp;prawosławna cerkiew św. Mikołaja, czyli dwa oblicza
      Podlasia na jednej ulicy.
    </p>

    <h3>Muzeum Pamięci Sybiru</h3>
    <p>
      Jedno z&nbsp;najnowocześniejszych muzeów historycznych w&nbsp;Polsce, opowiadające
      o&nbsp;zesłaniach na Syberię. Zarezerwujcie co najmniej dwie godziny, wychodzi się stamtąd
      w&nbsp;ciszy.
    </p>

    <h3>Śladami Zamenhofa i&nbsp;Szlak Dziedzictwa Żydowskiego</h3>
    <p>
      W&nbsp;Białymstoku urodził się Ludwik Zamenhof, twórca esperanto. Centrum jego imienia
      opowiada o&nbsp;wielokulturowym mieście, w&nbsp;którym przed wojną większość mieszkańców
      stanowili Żydzi. Szlak Dziedzictwa Żydowskiego prowadzi po miejscach, które po nich zostały.
    </p>

    <h3>Bojary – drewniany Białystok</h3>
    <p>
      Osiedle drewnianych domów z&nbsp;gankami i&nbsp;rzeźbionymi okiennicami tuż przy centrum.
      Najlepsze na spokojny spacer z&nbsp;aparatem i&nbsp;przedsmak tego, co zobaczycie
      w&nbsp;Supraślu.
    </p>

    <h3>Z&nbsp;dziećmi: Akcent ZOO i&nbsp;Muzeum Wojska</h3>
    <p>
      Akcent ZOO w&nbsp;Parku Zwierzynieckim pokazuje zwierzęta, które żyją w&nbsp;Polsce, m.in.
      żubry i&nbsp;wilki. Starsze dzieci wciągnie Muzeum Wojska. Więcej pomysłów w&nbsp;tekście{' '}
      <Link to="/blog/suprasl-z-dziecmi">Supraśl z&nbsp;dziećmi</Link>.
    </p>

    <h2>Co zobaczyć w&nbsp;okolicach Białegostoku</h2>

    <h3>Supraśl – monaster, ikony i&nbsp;babka ziemniaczana (ok. 20&nbsp;min od miasta)</h3>
    <p>
      Uzdrowiskowe miasteczko z&nbsp;Monasterem Zwiastowania, Muzeum Ikon, Pałacem Buchholtzów,
      bulwarami nad rzeką i&nbsp;Teatrem Wierszalin. Do tego kajaki, szlaki rowerowe
      i&nbsp;najlepsza babka ziemniaczana w&nbsp;regionie. Pełną listę znajdziecie na stronie{' '}
      <Link to="/atrakcje-suprasl">atrakcje Supraśla</Link>, a&nbsp;lokale w&nbsp;
      <Link to="/blog/przewodnik-kulinarny-suprasl">przewodniku kulinarnym</Link>.
    </p>

    <img
      loading="lazy"
      decoding="async"
      sizes="(min-width: 768px) 768px, 100vw"
      src={monaster}
      alt="Monaster Zwiastowania w&nbsp;Supraślu – najważniejsza atrakcja w&nbsp;okolicach Białegostoku"
      className="w-full rounded-lg my-8 aspect-[4/3] object-cover"
      width="810"
      height="1080"
    />

    <h3>Puszcza Knyszyńska i&nbsp;Arboretum w&nbsp;Kopnej Górze</h3>
    <p>
      Największy kompleks leśny w&nbsp;okolicy, z&nbsp;rezerwatami, szlakami pieszymi
      i&nbsp;rowerowymi oraz jesiennym rykowiskiem. Arboretum w&nbsp;Kopnej Górze to ponad
      20&nbsp;hektarów drzew i&nbsp;krzewów z&nbsp;różnych stron świata, najładniejsze w&nbsp;maju
      i&nbsp;październiku. Zacznijcie od{' '}
      <Link to="/blog/puszcza-knyszynska-przewodnik">przewodnika po Puszczy Knyszyńskiej</Link>.
    </p>

    <h3>Wasilków i&nbsp;Sanktuarium Świętej Wody</h3>
    <p>
      Między Białymstokiem a&nbsp;Supraślem leży Święta Woda: sanktuarium ze źródełkiem i&nbsp;Górą
      Krzyży, na której pielgrzymi stawiają tysiące krzyży. Krótki przystanek, który zostaje
      w&nbsp;głowie.
    </p>

    <h3>Choroszcz – letni pałac Branickich</h3>
    <p>
      Niewielki pałac, w&nbsp;którym Muzeum Podlaskie urządziło wnętrza pałacowe z&nbsp;epoki. Dobre
      uzupełnienie wizyty w&nbsp;Pałacu Branickich, zwłaszcza w&nbsp;deszczowy dzień.
    </p>

    <h3>Tykocin nad Narwią</h3>
    <p>
      Jedno z&nbsp;najpiękniejszych miasteczek Podlasia: brukowany rynek z&nbsp;pomnikiem
      Czarnieckiego, barokowy kościół Trójcy Przenajświętszej, Wielka Synagoga z&nbsp;muzeum
      i&nbsp;odbudowany zamek nad rzeką. Plan na pół dnia, a&nbsp;przy dobrej pogodzie na cały.
    </p>

    <h3>Narwiański Park Narodowy i&nbsp;kładka w&nbsp;Waniewie</h3>
    <p>
      Polska Amazonka w&nbsp;miniaturze: drewniana kładka przez rozlewiska Narwi z&nbsp;pływającymi
      platformami, które przeciągacie liną. Dzieci zachwycone, dorośli też, choć udają, że nie.
    </p>

    <h3>Kruszyniany i&nbsp;Bohoniki – Szlak Tatarski</h3>
    <p>
      Drewniane meczety, tatarskie mizary i&nbsp;kuchnia, dla której warto przejechać godzinę.
      W&nbsp;Kruszynianach zjecie pierekaczewnik, w&nbsp;Bohonikach zobaczycie drugi z&nbsp;dwóch
      zabytkowych drewnianych meczetów w&nbsp;Polsce. Szczegóły w&nbsp;
      <Link to="/blog/kruszyniany-tatarska-wies">przewodniku po Kruszynianach</Link>.
    </p>

    <img
      loading="lazy"
      decoding="async"
      sizes="(min-width: 768px) 768px, 100vw"
      src={kruszyniany}
      alt="Drewniany meczet w&nbsp;Kruszynianach na Szlaku Tatarskim koło Białegostoku"
      className="w-full rounded-lg my-8"
      width="1024"
      height="683"
    />

    <h3>Kraina Otwartych Okiennic</h3>
    <p>
      Trześcianka, Soce i&nbsp;Puchły, czyli wsie z&nbsp;kolorowymi okiennicami i&nbsp;cerkwiami.
      Około godziny drogi na południe. <Link to="/blog/kraina-otwartych-okiennic">Trasa tutaj</Link>
      .
    </p>

    <h2>Plan na 3&nbsp;dni: Białystok, Supraśl i&nbsp;okolice</h2>
    <ol>
      <li>
        <strong>Dzień 1 – Białystok:</strong> Pałac Branickich i&nbsp;ogrody, Rynek Kościuszki,
        obiad w&nbsp;centrum, Muzeum Pamięci Sybiru, spacer po Bojarach. Wieczorem powrót do lasu
        i&nbsp;balia.
      </li>
      <li>
        <strong>Dzień 2 – Supraśl i&nbsp;puszcza:</strong> monaster i&nbsp;Muzeum Ikon, babka
        ziemniaczana na obiad, po południu kajaki albo Arboretum w&nbsp;Kopnej Górze.
      </li>
      <li>
        <strong>Dzień 3 – do wyboru:</strong> Tykocin i&nbsp;kładka w&nbsp;Waniewie albo Kruszyniany
        i&nbsp;Bohoniki. Obie trasy da się połączyć z&nbsp;powrotem do domu.
      </li>
    </ol>
    <p>
      Wersję na dwa dni, rozpisaną godzina po godzinie, znajdziecie na stronie{' '}
      <Link to="/weekend-suprasl">weekend w&nbsp;Supraślu</Link>.
    </p>

    <h2>Nocleg koło Białegostoku: hotel w&nbsp;centrum czy dom w&nbsp;lesie?</h2>
    <p>
      Hotel w&nbsp;mieście ma sens, jeśli przyjeżdżacie na konferencję. Jeśli przyjeżdżacie
      odpocząć, lepiej spać tam, gdzie po zwiedzaniu nikt nie trąbi pod oknem.{' '}
      <Link to="/">In The Woods</Link> to cały drewniany dom w&nbsp;Konnem koło Supraśla, około
      30–40&nbsp;minut od centrum Białegostoku i&nbsp;10&nbsp;minut od Supraśla. Kominek, kuchnia
      kaflowa, ogród z&nbsp;miejscem na ognisko i&nbsp;balia z&nbsp;hydromasażem, a&nbsp;za płotem
      Puszcza Knyszyńska. Dom wynajmujecie w&nbsp;całości, dla maksymalnie 8&nbsp;osób.
    </p>

    <img
      loading="lazy"
      decoding="async"
      sizes="(min-width: 768px) 768px, 100vw"
      src={cabinGarden}
      alt="Dom In The Woods w&nbsp;Konnem – nocleg w&nbsp;lesie koło Białegostoku i&nbsp;Supraśla"
      className="w-full rounded-lg my-8 aspect-[4/3] object-cover"
      width="524"
      height="719"
    />

    <p>
      Sprawdźcie <Link to="/noclegi-suprasl">ceny i&nbsp;szczegóły noclegu</Link> albo od razu{' '}
      <Link to="/#rezerwacja">wolne terminy w&nbsp;kalendarzu</Link>. Maciej odpowiada zwykle
      w&nbsp;kilka godzin, a&nbsp;przez telefon jeszcze szybciej:{' '}
      <a href="tel:+48722765101">722&nbsp;765&nbsp;101</a>.
    </p>
  </BlogArticleLayout>
);

export default BialystokIOkolice;
