import BlogArticleLayout from '@/components/BlogArticleLayout';
import RelatedPages from '@/components/RelatedPages';
import { Link } from 'react-router-dom';
import { MapPin, TreePine, Heart, Bike, Footprints, Eye, Download } from 'lucide-react';

const gpxTrails = [
  { name: 'Puszczański szlak pieszy (czerwony)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Puszczanski_pieszy_czerwony.gpx' },
  { name: 'Skrajem Puszczy Knyszyńskiej (żółty)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Skrajem_Puszczy_Knyszynskiej_pieszy_zolty.gpx' },
  { name: 'Śladami Powstania Styczniowego (czerwony)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Sladami_Powstania_Styczniowego_pieszy_czerwony.gpx' },
  { name: 'Szlak Świętej Wody (niebieski)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Swietej_Wody_pieszy_niebieski.gpx' },
  { name: 'Szlak Tatarski Duży (zielony)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Tatarski_Duzy_pieszy_zielony.gpx' },
  { name: 'Szlak Tatarski Mały (niebieski)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Tatarski_Maly_pieszy_niebieski.gpx' },
  { name: 'Szlak Witolda Sławińskiego (zielony)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Witolda_Slawinskiego_pieszy_zielony.gpx' },
  { name: 'Borami Dorzecza Supraśli (zielony)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Borami_Dorzecza_Suprasli_zielony_pieszy.gpx' },
  { name: 'Szlak Dawnego Pogranicza (żółty)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Dawnego_Pogranicza_zolty_pieszy.gpx' },
  { name: 'Do Góran (żółty)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Do_Goran_pieszy_zolty.gpx' },
  { name: 'Szlak Królowej Bony (niebieski)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Krolowej_Bony_niebieski_pieszy.gpx' },
  { name: 'Szlak Napoleoński (niebieski)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Napoleonski_pieszy_niebieski.gpx' },
  { name: 'Ścieżka Krzemianka', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Sciezka_Krzemianka.gpx' },
  { name: 'Ścieżka Orlikowa', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Sciezka_orlikowa.gpx' },
  { name: 'Nordic Walking Supraśl', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Nordic_walking_Suprasl.gpx' },
];

const gpxBike = [
  { name: 'Jałówka — Królowy Most (żółty, rowerowy)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Jalowka_Krolowy_Most_rowerowy_zolty.gpx' },
  { name: 'Przez Gminę Michałowo (zielony, rowerowy)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Przez_Gmine_Michalowo_rowerowy_zielony.gpx' },
  { name: 'Przez Puszczę Knyszyńską (niebieski, rowerowy)', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Przez_Puszcze_Knyszynska_rowerowy_niebieski.gpx' },
];

const gpxSki = [
  { name: 'Szlak narciarski czerwony', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Szlak_narciarski_czerwony.gpx' },
  { name: 'Szlak narciarski niebieski', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Szlak_narciarski_niebieski.gpx' },
  { name: 'Szlak narciarski zielony', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Szlak_narciarski_zielony.gpx' },
  { name: 'Szlak narciarski żółty', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Szlak_narciarski_zolty.gpx' },
];

const gpxAttractions = [
  { name: 'Puszcza Knyszyńska — atrakcje turystyczne', url: 'https://wielkilas.pl/wp-content/uploads/2020/02/Puszcza_Knyszy%C5%84ska_atrakcje_turystyczne.gpx' },
];

const TrailList = ({ trails, title, icon: Icon }: { trails: { name: string; url: string }[]; title: string; icon: typeof Footprints }) => (
  <div className="mb-8">
    <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} /> {title}
    </h3>
    <div className="grid gap-2">
      {trails.map(t => (
        <a
          key={t.url}
          href={t.url}
          download
          className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 hover:border-primary/30 hover:bg-secondary/50 transition-colors group"
        >
          <Download className="w-4 h-4 text-primary shrink-0" />
          <span className="text-sm text-foreground/80 group-hover:text-foreground">{t.name}</span>
          <span className="ml-auto text-xs text-muted-foreground">.gpx</span>
        </a>
      ))}
    </div>
  </div>
);

const PuszczaKnyszynskaPrzewodnik = () => (
  <BlogArticleLayout
    title="Puszcza Knyszyńska — kompletny przewodnik: atrakcje, szlaki, mapy GPX"
    description="Odkryj Puszczę Knyszyńską: najpiękniejsze szlaki piesze, rowerowe i narciarskie z mapami GPX do pobrania. Kajaki, rykowisko, wieże widokowe, Kruszyniany i Supraśl."
    date="2026-04-09"
    readTime="15 min"
    heroImage="https://www.suprasl.online/images/hero-cabin.jpg"
  >
    <p className="text-lg leading-relaxed mb-8">
      Puszcza Knyszyńska to jeden z największych i najlepiej zachowanych kompleksów leśnych w Polsce.
      Rozciąga się na ponad 130 tysięcy hektarów w województwie podlaskim, obejmując Park Krajobrazowy
      Puszczy Knyszyńskiej. To raj dla miłośników natury, aktywnego wypoczynku i slow life — miejsce,
      gdzie czas płynie wolniej, a las leczy ciało i umysł.
    </p>

    {/* ROMANTYCZNIE */}
    <section className="mb-12">
      <h2 className="section-title !text-2xl md:!text-3xl flex items-center gap-3">
        <Heart className="w-6 h-6 text-primary" /> Romantyczne chwile w Puszczy
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Spacer we dwoje</h3>
          <p className="text-muted-foreground leading-relaxed">
            Niby tylko spacer, niby tylko w lesie. Ale jakże romantyczna może być zwykła przechadzka.
            Weź za rękę najbliższą sobie osobę i udajcie się na ścieżki Puszczy Knyszyńskiej.
            To miejsce oferuje wiele fantastycznych zakątków, w których możecie odetchnąć.
            Wystarczy wejść do lasu — reszta zadzieje się sama. Mając u boku ukochaną osobę,
            Puszcza Knyszyńska będzie baśniowa.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Rykowisko jeleni</h3>
          <p className="text-muted-foreground leading-relaxed">
            Spektakularne widowiska przedstawiające miłość wśród zwierząt. Wybierzcie się do lasu
            we wrześniu, najlepiej przed zmrokiem lub z samego rana, kiedy Słońce zaczyna wschodzić.
            Wtedy jest największa szansa na wsłuchanie się w potęgę głosu zakochanego byka.
            Miłość potrafi być wycieńczająca — podczas rykowiska byk jelenia może stracić
            nawet 30% masy swojego ciała. Pamiętajcie tylko, żeby im nie przeszkadzać!
          </p>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Wieże widokowe</h3>
          <p className="text-muted-foreground leading-relaxed">
            Piękne panoramy, możliwość podejrzenia dzikiej zwierzyny, romantyczne spacery.
            Wybierz się na jedną z wież widokowych w Puszczy i odpocznij u boku ukochanej osoby.
            Jednym z najatrakcyjniejszych miejsc jest wieża na Wzgórzach Świętojańskich,
            położona na wysokości wsi Kołodno.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Kładki nad wodą</h3>
          <p className="text-muted-foreground leading-relaxed">
            Są takie miejsca, czasem trudno dostępne, ale jakże magiczne. Niepowtarzalne chwile
            we dwójkę wśród otaczającej przyrody spotkają Was na drewnianych kładkach — na Sianożątce
            znajdziesz zaskakujące rozlewisko na maleńkim strumieniu, piękne o wschodzie lub zachodzie
            Słońca. Są też kręte, zaskakujące ścieżki tuż nad taflą wody — udaj się do
            Rezerwatu Krzemianka.
          </p>
        </div>
      </div>
    </section>

    {/* AKTYWNIE */}
    <section className="mb-12">
      <h2 className="section-title !text-2xl md:!text-3xl flex items-center gap-3">
        <Bike className="w-6 h-6 text-primary" /> Aktywnie w Puszczy
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Spływ kajakowy rzeką Supraśl</h3>
          <p className="text-muted-foreground leading-relaxed">
            Lubisz wodę? Chcesz się zmęczyć? Fascynuje Cię otaczający świat przyrody? Kajak połączy
            wszystkie te potrzeby. Proponujemy spływ kajakowy rzeką Supraśl. W dużej części będziesz
            płynąć szeroką, otwartą doliną. Możesz liczyć na urozmaicenia w postaci spiętrzeń wody,
            niskich drewnianych mostków lub powalonych drzew. Z poziomu tafli wody zobaczysz zarówno
            bogactwo roślin i zwierząt, jak i przepiękne dziedzictwo kulturowe.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Rower wyczynowy i MTB</h3>
          <p className="text-muted-foreground leading-relaxed">
            Puszcza Knyszyńska to ogromne bogactwo ukształtowania powierzchni. Ten leśny obszar kryje
            w sobie mnogość form rzeźby terenu — od rozległych dolin rzecznych, aż po okazałe
            wzniesienia. Deniwelacje w niektórych miejscach sięgają 80 metrów! To wręcz idealne
            miejsce dla chcących podnieść sobie adrenalinę, szczególnie że jest wyznaczona trasa MTB.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Biegi przełajowe</h3>
          <p className="text-muted-foreground leading-relaxed">
            Biegi w Puszczy Knyszyńskiej to nie tylko poprawa kondycji fizycznej. Powietrze wzbogacone
            o naturalne substancje eteryczne korzystnie wpłynie na Twój organizm. Nacieszysz ciało,
            a otaczająca przyroda pozwoli uspokoić myśli. Hitem numer jeden są biegi przełajowe
            ULTRAśledź — musisz tu być!
          </p>
        </div>
      </div>
    </section>

    {/* SLOW */}
    <section className="mb-12">
      <h2 className="section-title !text-2xl md:!text-3xl flex items-center gap-3">
        <TreePine className="w-6 h-6 text-primary" /> Slow life — leczenie lasem
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Kąpiele leśne (shinrin-yoku)</h3>
          <p className="text-muted-foreground leading-relaxed">
            Pobyt w lesie ukoi Cię na wielu płaszczyznach. Spokojny spacer między drzewami bardzo
            dobrze wpłynie na sprawność fizyczną, zwolni puls. Zaczniesz produkować więcej hormonów
            szczęścia i wyciszysz umysł. Zgodnie z sylwoterapią dąb zwiększy poziom energii, lipa
            rozweseli, a brzoza zrelaksuje ciało. W Puszczy Knyszyńskiej zdecydowanie możesz liczyć
            na sosnę — powietrze wzbogacone o naturalne substancje eteryczne drzew iglastych korzystnie
            wpłynie na układ oddechowy. Przyjedź i wyzdrowiej.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Obcowanie z naturą</h3>
          <p className="text-muted-foreground leading-relaxed">
            Wyjedź z miasta i zaszyj się w Puszczy Knyszyńskiej. Niech pochłonie Cię świat roślin
            i zwierząt. Zachwyć się urozmaiconą rzeźbą terenu. Na Wzgórzach Świętojańskich
            doświadczysz wspinaczki po najwyższych formach polodowcowych, w Rezerwacie Krzemianka
            będziesz chodził tuż nad rozległymi źródliskami, a w okolicach Krynek z odrobiną szczęścia
            zaobserwujesz stado żubrów.
          </p>
        </div>
      </div>
    </section>

    {/* SHORT BREAK */}
    <section className="mb-12">
      <h2 className="section-title !text-2xl md:!text-3xl flex items-center gap-3">
        <Eye className="w-6 h-6 text-primary" /> Atrakcje krótkiego pobytu
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Kruszyniany — tatarska wieś</h3>
          <p className="text-muted-foreground leading-relaxed">
            Niewielka wieś na obrzeżach Puszczy Knyszyńskiej, do granicy z Białorusią zaledwie 4 km.
            To kolebka polskich Tatarów. Sercem wsi jest drewniany meczet — wejdź i z zaciekawieniem
            wysłuchaj Dżemila, rodowitego Tatara i fascynującego przewodnika. Tuż obok, na niewielkim
            wzniesieniu, zabytkowy cmentarz tatarski — mizar. Koniecznie spróbuj słynnego
            pierekaczewnika, kołdunów lub trybuszoki!
          </p>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Podlaskie Muzeum Kultury Ludowej</h3>
          <p className="text-muted-foreground leading-relaxed">
            Spacerując po blisko 30 ha, mijać będziemy stare chałupy, spichlerze, stodoły, kapliczki
            i przydrożne krzyże. Drewniane domy otoczone ogrodami bogatymi w tradycyjne kwiaty.
            Zajrzyjcie do wnętrz — zobaczycie dawne wyposażenie chałup oraz wystawy poświęcone
            tradycyjnemu zdobnictwu architektury drewnianej. Dla dorosłych — ekspozycja leśnej
            bimbrowni. Dla dzieci — plac zabaw z drewnianymi zabawkami. Na terenie Muzeum istnieje
            również Sokolarnia z hodowlą ptaków drapieżnych.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Supraśl — serce Puszczy</h3>
          <p className="text-muted-foreground leading-relaxed">
            Niewielkie, urocze miasteczko. Najważniejszy zabytek to <strong>Monaster Zwiastowania
            Przenajświętszej Bogurodzicy</strong> — prawosławny klasztor z przełomu XV i XVI wieku,
            z bogatą historią obejmującą epokę Bazylianów, bibliotekę i działalność wydawniczą.
            Bezwzględnie trzeba doświadczyć <strong>Muzeum Ikon</strong> — około 300 ikon, unikalne
            freski i oprawa świetlno-dźwiękowa.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Supraśl to także historia włókiennictwa z XIX w. — słynne <strong>domy tkaczy</strong>
            {' '}przy ulicy 3 Maja oraz <strong>Pałac Buchholtzów</strong>, dawna siedziba łódzkiego
            potentata przemysłowego, dziś PLSP im. Artura Grottgera. Supraśl jest również uzdrowiskiem
            z jednymi z najlepszych złóż borowin w Polsce.
          </p>
        </div>
      </div>
    </section>

    {/* MAPY GPX */}
    <section className="mb-12">
      <h2 className="section-title !text-2xl md:!text-3xl flex items-center gap-3">
        <MapPin className="w-6 h-6 text-primary" /> Mapy szlaków GPX do pobrania
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Pobierz pliki GPX na swój telefon lub zegarek GPS i ruszaj na szlak. Pliki otworzysz w
        aplikacjach takich jak Mapy.cz, Komoot, Locus Map czy Garmin Connect.
      </p>

      <TrailList trails={gpxTrails} title="Szlaki piesze" icon={Footprints} />
      <TrailList trails={gpxBike} title="Szlaki rowerowe" icon={Bike} />
      <TrailList trails={gpxSki} title="Szlaki narciarskie" icon={TreePine} />
      <TrailList trails={gpxAttractions} title="Atrakcje turystyczne" icon={MapPin} />
    </section>

    {/* GDZIE NOCOWAĆ */}
    <section className="mb-12">
      <h2 className="section-title !text-2xl md:!text-3xl">Gdzie nocować w Puszczy Knyszyńskiej?</h2>
      <p className="text-muted-foreground leading-relaxed">
        Szukasz bazy wypadowej do zwiedzania Puszczy? <strong>In The Woods</strong> to drewniany dom
        na wyłączność w miejscowości Konne, zaledwie 10 minut od Supraśla. Kominek, ruska bania,
        jacuzzi, ogrodzony ogród i las za płotem. Sprawdź naszą{' '}
        <Link to="/dom" className="text-primary underline hover:text-primary/80">ofertę domu</Link>
        {' '}lub{' '}
        <Link to="/#rezerwacja" className="text-primary underline hover:text-primary/80">zarezerwuj pobyt</Link>.
      </p>
    </section>

    {/* ŹRÓDŁO */}
    <div className="bg-secondary rounded-xl p-6 mt-12 border border-border">
      <p className="text-sm text-muted-foreground leading-relaxed">
        <strong>Źródło treści i danych GPX:</strong> Stowarzyszenie Przyjaciół Puszczy Knyszyńskiej
        „Wielki Las" i Park Krajobrazowy Puszczy Knyszyńskiej im. prof. Witolda Sławińskiego.
        Dane udostępnione za pośrednictwem portalu{' '}
        <a href="https://wielkilas.pl" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
          wielkilas.pl
        </a>.
        Dane GPX udostępnione bezpłatnie do użytku prywatnego, niezwiązanego z działalnością komercyjną.
      </p>
    </div>

    <RelatedPages
      pages={[
        { title: 'Szlaki Puszczy Knyszyńskiej', href: '/blog/szlaki-puszcza-knyszynska' },
        { title: 'Atrakcje Supraśla', href: '/atrakcje-suprasl' },
        { title: 'Kajaki na Supraśli', href: '/blog/kajaki-suprasl' },
        { title: 'Dom In The Woods', href: '/dom' },
      ]}
    />
  </BlogArticleLayout>
);

export default PuszczaKnyszynskaPrzewodnik;
