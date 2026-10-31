import SEOPageLayout from '@/components/SEOPageLayout';
import ImageReveal from '@/components/ImageReveal';
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
import gardenTubFront from '@/assets/gallery-bania-front-thumb.webp';

const amenities = [
  { icon: Flame, label: 'Kominek' },
  { icon: Wifi, label: 'WiFi' },
  { icon: Car, label: 'Parking' },
  { icon: Dog, label: 'Pobyt z\u00a0psem — zapytaj' },
  { icon: Baby, label: 'Plac zabaw' },
  { icon: Bath, label: 'Balia z\u00a0hydromasażem (jacuzzi)' },
];

const Dom = () => (
  <SEOPageLayout
    title="Dom z&nbsp;bali na wyłączność | In The Woods Supraśl"
    description="Dom z&nbsp;bali na wyłączność w&nbsp;miejscowości Konne koło Supraśla. Sprawdź wyposażenie, zasady pobytu i&nbsp;dostępność opcjonalnej balii ogrodowej."
    breadcrumbName="Dom"
    ogImage="https://www.suprasl.online/images/exterior-main.webp"
  >
    <article className="space-y-12">
      <div>
        <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl mb-6">
          Dom z&nbsp;bali na wyłączność w&nbsp;miejscowości Konne
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          Drewniany <strong>dom na wyłączność</strong> w&nbsp;Konnem koło Supraśla, dla maksymalnie
          8&nbsp;osób. Macie kominek, pełną kuchnię i&nbsp;dwie sypialnie na piętrze. Balia
          z&nbsp;hydromasażem kosztuje 250&nbsp;zł za cały pobyt, a&nbsp;pies przyjeżdża gratis.
        </p>
      </div>

      {/* Quick amenities */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {amenities.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-2 text-center"
          >
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
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">
            Parter — salon i&nbsp;kuchnia
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Flame className="w-4 h-4 text-primary" /> Klimatyczny kominek w&nbsp;salonie
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Przestronny salon z&nbsp;prawdziwym kominkiem na drewno — serce domu. Wygodne
                fotele, sofa, ciepłe światło i&nbsp;drewniane belki tworzą klimat skandynawskiej
                chaty.
                <strong> Domek z&nbsp;kominkiem</strong> — wieczorne rozmowy przy ogniu, trzask
                drewna i&nbsp;zapach żywicy. To esencja{' '}
                <strong>spokojnego wypoczynku w&nbsp;naturze</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-primary" /> Kuchnia i&nbsp;stara kuchnia kaflowa
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Pełna kuchnia z&nbsp;tradycyjną kuchnią kaflową, ceglaną ścianą i&nbsp;drewnianymi
                meblami. Lodówka, zmywarka, płyta indukcyjna, piekarnik, ekspres do kawy
                i&nbsp;komplet naczyń. Duży stół jadalniany dla 8&nbsp;osób — śniadania w{' '}
                <strong>domu z&nbsp;bali</strong> potrafią się tu ciągnąć do południa.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Bath className="w-4 h-4 text-primary" /> Łazienka i&nbsp;toaleta
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nowoczesna łazienka z&nbsp;prysznicem z&nbsp;deszczownicą, podświetlanym lustrem
                i&nbsp;ogrzewaniem podłogowym. Oddzielna, gościnna toaleta na parterze.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <ImageReveal>
              <img
                src={salonKominek}
                alt="Salon z kominkiem i drewnianymi belkami"
                className="rounded-lg object-cover w-full h-40 md:h-48"
                loading="lazy"
                width="768"
                height="576"
              />
            </ImageReveal>
            <ImageReveal delay={60}>
              <img
                src={kuchniaCeramika}
                alt="Kuchnia kaflowa i drewniane meble w domu z bali"
                className="rounded-lg object-cover w-full h-40 md:h-48"
                loading="lazy"
                width="768"
                height="576"
              />
            </ImageReveal>
            <ImageReveal delay={120}>
              <img
                src={lazienkaPrysznic}
                alt="Łazienka z prysznicem"
                className="rounded-lg object-cover w-full h-40 md:h-48"
                loading="lazy"
                width="768"
                height="576"
              />
            </ImageReveal>
            <ImageReveal delay={180}>
              <img
                src={domLato}
                alt="Drewniany dom w letnim ogrodzie"
                className="rounded-lg object-cover w-full h-40 md:h-48"
                loading="lazy"
                width="768"
                height="576"
              />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* PIĘTRO */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Bed className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">
            Piętro — sypialnie z&nbsp;widokiem na las
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Sypialnia główna
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Duże łóżko małżeńskie (160×200 cm), zielone zasłony, widok na ogród i&nbsp;las.
                Wyjście na prywatny balkon z&nbsp;leżakiem — poranki z&nbsp;kawą i&nbsp;szumem
                drzew. W&nbsp;sam raz dla par szukających{' '}
                <strong>romantycznego pobytu w&nbsp;lesie</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Sypialnia druga
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Łóżko małżeńskie (160×200 cm) z&nbsp;drewnianym zagłówkiem. Przytulna atmosfera
                z&nbsp;widokiem na korony drzew. Idealna dla drugiej pary lub{' '}
                <strong>rodziny z&nbsp;dziećmi</strong> w <strong>domku w&nbsp;lesie</strong>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <ImageReveal>
              <img
                src={sypialniaGorna}
                alt="Sypialnia na piętrze z łóżkiem dwuosobowym"
                className="rounded-lg object-cover w-full h-40 md:h-48"
                loading="lazy"
                width="768"
                height="576"
              />
            </ImageReveal>
            <ImageReveal delay={60}>
              <img
                src={sypialniaBalkon}
                alt="Sypialnia z wyjściem na balkon"
                className="rounded-lg object-cover w-full h-40 md:h-48"
                loading="lazy"
                width="768"
                height="576"
              />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* PODDASZE */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <TreePine className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">
            Poddasze — praca zdalna w&nbsp;lesie
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-muted-foreground leading-relaxed">
            Kameralna strefa wypoczynku — fotel, biblioteczka, telewizor i&nbsp;widok na drzewa.
            Dobre miejsce na <strong>pracę zdalną w&nbsp;lesie</strong>, poranną jogę lub ciche
            czytanie. Dodatkowe miejsce do spania na rozkładanej kanapie. Po pracy możesz odpocząć
            w&nbsp;ogrodzie lub wybrać spacer po okolicy, przestrzegając zasad obowiązujących na
            terenach chronionych.
          </p>
          <ImageReveal>
            <img
              src={poddaszeFotel}
              alt="Fotel i kącik wypoczynkowy na poddaszu"
              className="rounded-lg object-cover w-full h-48"
              loading="lazy"
              width="1200"
              height="900"
            />
          </ImageReveal>
        </div>
      </section>

      {/* OGRÓD */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <TreePine className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="section-title !text-2xl md:!text-3xl !mb-0">
            Ogrodzony teren z&nbsp;miejscem na ognisko
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Na ogrodzonym terenie znajdują się altana, grill, taras i&nbsp;plac zabaw. Zasady
              korzystania z&nbsp;ogniska ustalcie z&nbsp;Maciejem. Pies przyjeżdża gratis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dom znajduje się w&nbsp;okolicy Puszczy Knyszyńskiej. Przed spacerem sprawdź aktualną
              mapę, dostępność tras oraz zasady obowiązujące na terenach chronionych.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ImageReveal>
              <img
                src={tarasGrill}
                alt="Taras i grill w ogrodzie"
                className="rounded-lg object-cover w-full h-40 md:h-48"
                loading="lazy"
                width="768"
                height="576"
              />
            </ImageReveal>
            <ImageReveal delay={60}>
              <img
                src={gardenTubFront}
                alt="Balia ogrodowa"
                className="rounded-lg object-cover w-full h-40 md:h-48"
                loading="lazy"
                width="768"
                height="576"
              />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-secondary p-8 text-center space-y-4 rounded-xl">
        <h3 className="font-heading text-2xl font-light">
          Chcesz zobaczyć więcej? Zapytaj o&nbsp;pobyt
        </h3>
        <p className="text-muted-foreground">
          Przeglądaj galerię lub wyślij zapytanie o&nbsp;dostępność i&nbsp;cenę pobytu.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/galeria" className="btn-primary">
            Galeria zdjęć
          </Link>
          <Link to="/#rezerwacja" className="btn-outline">
            Wyślij zapytanie o&nbsp;pobyt
          </Link>
        </div>
      </div>
    </article>
  </SEOPageLayout>
);

export default Dom;
