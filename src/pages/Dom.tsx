import SEOPageLayout from '@/components/SEOPageLayout';
import { Link } from 'react-router-dom';
import { Home, ChefHat, Bed, Bath, TreePine, Flame, Wifi, Car, Dog, Baby } from 'lucide-react';

import salonKominek from '@/assets/gallery-salon-kominek-thumb.webp';
import kuchniaCeramika from '@/assets/gallery-kuchnia-ceramika-thumb.webp';
import sypialniaGorna from '@/assets/gallery-sypialnia-gorna-thumb.webp';
import sypialniaBalkon from '@/assets/gallery-sypialnia-balkon-thumb.webp';
import lazienkaPrysznic from '@/assets/gallery-lazienka-prysznic-thumb.webp';
import tarasGrill from '@/assets/gallery-taras-grill-thumb.webp';
import poddaszeFotel from '@/assets/gallery-poddasze-fotel-thumb.webp';
import domLato from '@/assets/gallery-dom-lato-thumb.webp';
import baniaFront from '@/assets/gallery-bania-front-thumb.webp';

const amenities = [
  { icon: Flame, label: 'Kominek' },
  { icon: Wifi, label: 'WiFi' },
  { icon: Car, label: 'Parking' },
  { icon: Dog, label: 'Psy za darmo' },
  { icon: Baby, label: 'Plac zabaw' },
  { icon: Bath, label: 'Ruska bania' },
];

const Dom = () => (
  <SEOPageLayout
    title="Dom z bali na wyłączność | In The Woods Supraśl"
    description="Dom z bali na wyłączność w Puszczy Knyszyńskiej: kominek, wyposażona kuchnia, sypialnie i ogrodzony ogród z banią."
    breadcrumbName="Dom"
    ogImage="https://www.suprasl.online/images/hero-cabin.jpg"
  >
    <article className="space-y-12">
      <div>
        <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
          Dom z bali na wyłączność — leśny domek do wynajęcia w Puszczy Knyszyńskiej
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          Drewniany <strong>dom na wyłączność</strong> w sercu Puszczy Knyszyńskiej. Klimatyczny kominek,
          w pełni wyposażona kuchnia z płytą kaflową, dwie sypialnie na piętrze i{' '}
          <strong>ogrodzony teren</strong> z ruską banią. <strong>Leśny domek do wynajęcia</strong>{' '}
          dla par, rodzin i grup przyjaciół do 8 osób. <strong>Psy za darmo</strong> — Twój czworonóg
          pokocha las za progiem.
        </p>
      </div>

      {/* Quick amenities */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {amenities.map(({ icon: Icon, label }) => (
          <div key={label} className="bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-2 text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>

      {/* PARTER */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Home className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">Parter — domek z kominkiem w lesie</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Flame className="w-4 h-4 text-primary" /> Klimatyczny kominek w salonie
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Przestronny salon z prawdziwym kominkiem na drewno — serce domu. Wygodne fotele,
                sofa, ciepłe światło i drewniane belki tworzą klimat skandynawskiej chaty.
                <strong> Domek z kominkiem</strong> — wieczorne rozmowy przy ogniu, trzask drewna
                i zapach żywicy. To esencja <strong>spokojnego wypoczynku w naturze</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-primary" /> Kuchnia z płytą kaflową
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                W pełni wyposażona kuchnia z elegancką płytą kaflową, ceglaną ścianą i drewnianymi meblami.
                Lodówka, zmywarka, płyta indukcyjna, piekarnik, ekspres do kawy i komplet naczyń. Duży
                stół jadalniany dla 8 osób — poranne śniadania w <strong>domu z bali</strong> to tutejszy rytuał.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Bath className="w-4 h-4 text-primary" /> Łazienka i toaleta
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nowoczesna łazienka z prysznicem z deszczownicą, podświetlanym lustrem i
                ogrzewaniem podłogowym. Oddzielna, gościnna toaleta na parterze.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img src={salonKominek} alt="Salon z kominkiem w domu z bali — domek z kominkiem w lesie Supraśl" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" width="768" height="576" />
            <img src={kuchniaCeramika} alt="Kuchnia z płytą kaflową — dom z bali na wyłączność w Puszczy Knyszyńskiej" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" width="768" height="576" />
            <img src={lazienkaPrysznic} alt="Nowoczesna łazienka z prysznicem — leśny domek do wynajęcia" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" width="768" height="576" />
            <img src={domLato} alt="Dom z bali z zewnątrz latem — domek w lesie Supraśl z ogrodzonym terenem" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" width="768" height="576" />
          </div>
        </div>
      </section>

      {/* PIĘTRO */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Bed className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">Piętro — sypialnie z widokiem na las</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Sypialnia główna
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Duże łóżko małżeńskie (160×200 cm), zielone zasłony, widok na ogród i las.
                Wyjście na prywatny balkon z leżakiem — poranki z kawą i szumem drzew.
                Idealne dla par szukających <strong>romantycznego pobytu w lesie</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Sypialnia druga
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Łóżko małżeńskie (160×200 cm) z drewnianym zagłówkiem. Przytulna atmosfera
                z widokiem na korony drzew. Idealna dla drugiej pary lub{' '}
                <strong>rodziny z dziećmi</strong> w <strong>domku w lesie</strong>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img src={sypialniaGorna} alt="Sypialnia na piętrze — domek w lesie dla 2 osób z jacuzzi" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" width="768" height="576" />
            <img src={sypialniaBalkon} alt="Sypialnia z balkonem i widokiem na Puszczę Knyszyńską" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" width="768" height="576" />
          </div>
        </div>
      </section>

      {/* PODDASZE */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <TreePine className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">Poddasze — praca zdalna w lesie</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-muted-foreground leading-relaxed">
            Kameralna strefa wypoczynku — fotel, biblioteczka, telewizor i widok na drzewa. Idealne
            miejsce na <strong>pracę zdalną w lesie</strong>, poranną jogę lub ciche czytanie.
            Dodatkowe miejsce do spania na rozkładanej kanapie.{' '}
            <strong>Praca zdalna w lesie wynajem domku</strong> — po pracy spacer do rezerwatu zamiast korki.
          </p>
          <img src={poddaszeFotel} alt="Poddasze z fotelem — praca zdalna w lesie, workation w domku na wyłączność" className="rounded-lg object-cover w-full h-48" loading="lazy" width="1200" height="900" />
        </div>
      </section>

      {/* OGRÓD */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <TreePine className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">Ogrodzony teren z miejscem na ognisko</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              <strong>Ogrodzony teren</strong> z altaną, miejscem na ognisko, grillem i placem zabaw
              dla dzieci. Taras z sofami i stołem — posiłki na świeżym powietrzu w{' '}
              <strong>domku na odludziu</strong>. <strong>Psy za darmo</strong> — Twój czworonóg
              będzie tu szczęśliwy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Za ogrodzeniem zaczyna się Puszcza Knyszyńska — szlaki piesze i rowerowe dosłownie za
              progiem domu. Rezerwat przyrody Krzemienne Góry w odległości spaceru.{' '}
              <strong>Domek w lesie podlaskie</strong> — oderwanie od cywilizacji w czystej formie.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={tarasGrill} alt="Taras z grillem i miejscem na ognisko — ogrodzony teren domku w lesie" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" width="768" height="576" />
            <img src={baniaFront} alt="Ruska bania z balią — domek z jacuzzi w lesie na wyłączność" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" width="768" height="576" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-secondary p-8 text-center space-y-4 rounded-xl">
        <h3 className="font-heading text-2xl font-light">Chcesz zobaczyć więcej? Zarezerwuj domek w lesie</h3>
        <p className="text-muted-foreground">Przeglądaj galerię lub sprawdź dostępne terminy.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/galeria" className="btn-primary">
            Galeria zdjęć
          </Link>
          <Link to="/#rezerwacja" className="btn-outline">
            Sprawdź dostępność
          </Link>
        </div>
      </div>
    </article>
  </SEOPageLayout>
);

export default Dom;
