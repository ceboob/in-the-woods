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
  { icon: Dog, label: 'Pet-friendly' },
  { icon: Baby, label: 'Plac zabaw' },
  { icon: Bath, label: 'Ruska bania' },
];

const Dom = () => (
  <SEOPageLayout
    title="Dom In The Woods — szczegółowy opis | Parter, piętro, ogród"
    description="Poznaj dom In The Woods od środka — salon z kominkiem, kuchnia z jadalnią, dwie sypialnie na piętrze, poddasze z biblioteką, łazienki i ogród z banią."
    breadcrumbName="Dom"
    ogImage="https://www.suprasl.online/images/hero-cabin.jpg"
  >
    <article className="space-y-12">
      <div>
        <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
          Dom In The Woods — Twój azyl w Puszczy Knyszyńskiej
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          Drewniany dom na wyłączność w sercu Puszczy Knyszyńskiej. Ciepłe wnętrza, kominek,
          w pełni wyposażona kuchnia, dwie sypialnie na piętrze i ogrodzony ogród z ruską banią.
          Miejsce stworzone do odpoczynku — dla par, rodzin i grup przyjaciół do 8 osób.
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
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">Parter</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Flame className="w-4 h-4 text-primary" /> Salon z kominkiem
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Przestronny salon z prawdziwym kominkiem na drewno — serce domu. Wygodne fotele,
                sofa, ciepłe światło i drewniane belki tworzą klimat skandynawskiej chaty.
                Idealne miejsce na wieczorne rozmowy przy ogniu lub czytanie książki.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-primary" /> Kuchnia z jadalnią
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                W pełni wyposażona kuchnia z piecem kaflowym, ceglaną ścianą i drewnianymi meblami.
                Lodówka, zmywarka, płyta indukcyjna, piekarnik, ekspres do kawy, toster i
                komplet naczyń. Duży stół jadalniany dla 8 osób — poranne śniadania przy
                świeżych kwiatach to tutejszy rytuał.
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
            <img src={salonKominek} alt="Salon z kominkiem" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" />
            <img src={kuchniaCeramika} alt="Kuchnia z ceramiką" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" />
            <img src={lazienkaPrysznic} alt="Łazienka z prysznicem" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" />
            <img src={domLato} alt="Dom z zewnątrz latem" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" />
          </div>
        </div>
      </section>

      {/* PIĘTRO */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Bed className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">Piętro — sypialnie</h2>
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
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Sypialnia druga
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Łóżko małżeńskie (160×200 cm) z drewnianym zagłówkiem. Przytulna atmosfera
                z widokiem na korony drzew. Idealna dla drugiej pary lub rodziny z dziećmi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img src={sypialniaGorna} alt="Sypialnia na piętrze" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" />
            <img src={sypialniaBalkon} alt="Sypialnia z balkonem" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" />
          </div>
        </div>
      </section>

      {/* PODDASZE */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <TreePine className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">Poddasze — strefa relaksu</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-muted-foreground leading-relaxed">
            Trzecie piętro to kameralna strefa wypoczynku — fotel, biblioteczka, telewizor i
            widok na drzewa. Idealne miejsce na ciche czytanie, pracę zdalną lub poranną jogę.
            Dodatkowe miejsce do spania na rozkładanej kanapie.
          </p>
          <img src={poddaszeFotel} alt="Poddasze z fotelem i biblioteką" className="rounded-lg object-cover w-full h-48" loading="lazy" />
        </div>
      </section>

      {/* OGRÓD */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <TreePine className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">Ogród i otoczenie</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Ogrodzony ogród z altaną, miejscem na ognisko, grillem i placem zabaw dla dzieci.
              Taras z sofami i stołem — idealne miejsce na posiłki na świeżym powietrzu.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Za ogrodzeniem zaczyna się Puszcza Knyszyńska — szlaki piesze i rowerowe
              dosłownie za progiem domu. Rezerwat przyrody Krzemienne Góry w odległości spaceru.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={tarasGrill} alt="Taras z grillem" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" />
            <img src={baniaFront} alt="Ruska bania w ogrodzie" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-secondary p-8 text-center space-y-4 rounded-xl">
        <h3 className="font-heading text-2xl font-light">Chcesz zobaczyć więcej?</h3>
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
