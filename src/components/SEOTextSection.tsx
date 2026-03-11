import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const SEOTextSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-warm-white">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 space-y-4">
          <h2 className="section-title">Noclegi Supraśl – komfortowy dom na wynajem</h2>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Jeśli szukasz <strong>noclegu w Supraślu</strong>, oferujemy wyjątkowy dom na wynajem położony w sercu Puszczy Knyszyńskiej.
            Krzemienna Chata to idealna alternatywa dla hotelu — prywatny dom zapewniający ciszę, naturę i komfort pobytu.
          </p>
          <p>
            Obiekt znajduje się blisko <strong>Supraśla</strong> — jednego z najpiękniejszych uzdrowisk Podlasia. 
            Zaledwie 10 minut samochodem od centrum miasteczka, a jednocześnie w pełnym otoczeniu natury, 
            przy rezerwacie przyrody Krzemienne Góry.
          </p>
          <p>
            Nasza oferta <Link to="/noclegi-suprasl" className="text-forest underline hover:text-forest-light transition-colors">noclegów w Supraślu</Link> obejmuje 
            prywatny <strong>dom na wyłączność</strong> z kominkiem, w pełni wyposażoną kuchnią, dwiema sypialniami, ogrodem i tarasem. 
            Dodatkowo goście mogą skorzystać z prywatnej ruskiej bani z balią — idealnej po dniu spędzonym na szlakach 
            <Link to="/puszcza-knyszynska-nocleg" className="text-forest underline hover:text-forest-light transition-colors"> Puszczy Knyszyńskiej</Link>.
          </p>
          <p>
            Krzemienna Chata to doskonały wybór zarówno na <Link to="/weekend-suprasl" className="text-forest underline hover:text-forest-light transition-colors">weekend w Supraślu</Link>, 
            jak i dłuższy <strong>pobyt na Podlasiu</strong>. Zwierzęta są mile widziane, a ogrodzony ogród i las za progiem to raj dla czworonogów. 
            Sprawdź <Link to="/atrakcje-suprasl" className="text-forest underline hover:text-forest-light transition-colors">atrakcje Supraśla</Link> i zaplanuj swój wymarzony 
            <Link to="/dom-w-lesie-suprasl" className="text-forest underline hover:text-forest-light transition-colors"> pobyt w domu w lesie</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOTextSection;
