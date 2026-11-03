import { useScrollReveal } from '@/hooks/useScrollAnimation';
import ImageReveal from '@/components/ImageReveal';
import { Link } from 'react-router-dom';
import {
  Church,
  Image,
  Trees,
  UtensilsCrossed,
  Bike,
  Waves,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import blogRestauracje from '@/assets/blog-restauracje-suprasl.jpg';
import { commonsPhotos } from '@/lib/commonsPhotos';

const attractions = [
  { icon: Church, name: 'Monaster Zwiastowania NMP' },
  { icon: Image, name: 'Muzeum Ikon' },
  { icon: Trees, name: 'Bulwary nad rzeką Supraśl' },
  { icon: UtensilsCrossed, name: 'Klimatyczne restauracje' },
  { icon: Bike, name: 'Trasy rowerowe puszczy' },
  { icon: Waves, name: 'Spływy kajakowe' },
];

const nearby = [
  { name: 'Supraśl' },
  { name: 'Białystok' },
  { name: 'Arboretum Kopna Góra' },
  { name: 'Kruszyniany' },
];

const guides = [
  {
    slug: 'szlak-bioroznorodnosci-suprasl',
    title: 'Szlak Bioróżnorodności Supraśl',
    excerpt: 'Leśny spacer wśród drzew i przyrodniczych ciekawostek niedaleko Supraśla.',
    image: commonsPhotos.forest.image,
    alt: 'Leśny krajobraz Puszczy Knyszyńskiej w okolicy Kołodna',
    imageCredit: commonsPhotos.forest,
  },
  {
    slug: 'kruszyniany-tatarska-wies',
    title: 'Kruszyniany – tatarska wieś Podlasia',
    excerpt: 'Drewniany meczet, tatarska historia i regionalna kuchnia — pomysł na całodniową wycieczkę.',
    image: commonsPhotos.mosque.image,
    alt: 'Drewniany meczet w\u00a0Kruszynianach',
    imageCredit: commonsPhotos.mosque,
  },
  {
    slug: 'suprasl-atrakcje-uzdrowisko',
    title: 'Supraśl – atrakcje uzdrowiska Podlasia',
    excerpt: 'Monaster, Muzeum Ikon i bulwary nad Supraślą — najciekawsze miejsca w uzdrowisku.',
    image: commonsPhotos.monastery.image,
    alt: 'Monaster Zwiastowania NMP w\u00a0Supraślu',
    imageCredit: commonsPhotos.monastery,
  },
  {
    slug: 'kajaki-suprasl',
    title: 'Kajaki Supraśl – spływy rzeką Supraśl',
    excerpt: 'Supraśl oglądana z poziomu wody i leśne brzegi, które zmieniają się z porami roku.',
    image: commonsPhotos.river.image,
    alt: 'Rzeka Supraśl w Parku Krajobrazowym Puszczy Knyszyńskiej',
    imageCredit: commonsPhotos.river,
  },
  {
    slug: 'przewodnik-kulinarny-suprasl',
    title: 'Restauracje Supraśl – gdzie zjeść',
    excerpt:
      'Kartacze, babka ziemniaczana i\u00a0kuchnia tatarska — przewodnik kulinarny po Supraślu.',
    image: blogRestauracje,
    alt: 'Drewniany budynek w Supraślu',
  },
  {
    slug: 'puszcza-knyszynska-historie',
    title: 'Puszcza Knyszyńska – 7 niezwykłych historii',
    excerpt:
      'Galeria Leśna Powstania Styczniowego i\u00a0inne miejsca związane z\u00a0historią regionu.',
    image: commonsPhotos.forest.image,
    alt: 'Leśny krajobraz Puszczy Knyszyńskiej w okolicy Kołodna',
    imageCredit: commonsPhotos.forest,
  },
];

const SupraslSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-secondary">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal-section ${isVisible ? 'is-revealed' : ''}`}
      >
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs tracking-wide text-muted-foreground font-sans">Okolica</p>
          <h2 className="section-title">Puszcza Knyszyńska i&nbsp;Supraśl – co warto zobaczyć</h2>
          <p className="section-subtitle mx-auto">
            Zebraliśmy miejsca na spokojny spacer, rodzinną wycieczkę i&nbsp;aktywny dzień na wodzie.
            Każde pokazuje inny fragment Supraśla i&nbsp;Puszczy Knyszyńskiej.
          </p>
        </div>

        {/* Attractions grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {attractions.map((a, i) => (
            <div key={i} className="flex items-center gap-3 py-4 px-5 bg-card border border-border">
              <a.icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
              <span className="text-sm text-foreground">{a.name}</span>
            </div>
          ))}
        </div>

        {/* Nearby places */}
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-wide text-muted-foreground font-sans text-center mb-6">
            Miejsca w&nbsp;okolicy
          </p>
          <div className="grid grid-cols-2 gap-3">
            {nearby.map((n, i) => (
              <div key={i} className="flex items-center py-3 px-5 bg-card border border-border">
                <span className="text-sm text-foreground flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> {n.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tourism guide cards */}
        <div className="mb-12">
          <p className="text-xs tracking-wide text-muted-foreground font-sans text-center mb-8">
            Blog
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide, i) => (
              <article
                key={guide.slug}
                className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300"
              >
                <Link to={`/blog/${guide.slug}`} className="group block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <ImageReveal delay={Math.min(i * 70, 280)}>
                      <img
                        src={guide.image}
                        alt={guide.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width="500"
                        height="313"
                      />
                    </ImageReveal>
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="font-heading text-lg font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{guide.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                      Czytaj więcej{' '}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
                {'imageCredit' in guide && (
                  <p className="px-5 pb-4 text-xs text-muted-foreground">
                    Zdjęcie:{' '}
                    <a
                      href={guide.imageCredit.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-foreground"
                    >
                      {guide.imageCredit.author}
                    </a>
                    {' · '}
                    <a
                      href={guide.imageCredit.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-foreground"
                    >
                      {guide.imageCredit.license}
                    </a>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
            W&nbsp;Puszczy Knyszyńskiej znajdziesz trasy na krótki spacer i&nbsp;całodniową wyprawę.
            Wybierz szlak dopasowany do pory roku i&nbsp;pamiętaj o&nbsp;zasadach na terenach
            chronionych.
          </p>
          <p className="text-base md:text-lg text-foreground/80 font-sans">
            Dom znajduje się w&nbsp;miejscowości Konne koło Supraśla.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupraslSection;
