import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const SEOTextSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 space-y-4">
          <h2 className="section-title">Noclegi Supraśl – wyjątkowy dom w lesie</h2>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Szukasz <strong>noclegu w Supraślu</strong>? In The Woods – noclegi Supraśl to prywatny <strong>dom w lesie z jacuzzi</strong>,
            położony w sercu Puszczy Knyszyńskiej, zaledwie 10 minut jazdy od centrum Supraśla.
            To wyjątkowa alternatywa dla hotelu — <Link to="/domek-suprasl" className="text-forest underline hover:text-forest-light transition-colors">domek Supraśl</Link> na wyłączność, otoczony lasem i ciszą natury.
          </p>

          <h3 className="font-serif text-xl text-foreground">Noclegi Supraśl – dom na wynajem</h3>
          <p>
            Nasz <strong>dom Supraśl</strong> oferuje kominek, w pełni wyposażoną kuchnię, dwie sypialnie, ogród i taras z widokiem na las.
            Goście mogą skorzystać z prywatnej ruskiej bani z balią — idealnej po dniu spędzonym na szlakach
            <Link to="/puszcza-knyszynska-nocleg" className="text-forest underline hover:text-forest-light transition-colors"> Puszczy Knyszyńskiej</Link>.
            To jeden z nielicznych <strong>noclegów w Puszczy Knyszyńskiej</strong> łączących komfort z prawdziwą bliskością natury.
          </p>

          <h3 className="font-serif text-xl text-foreground">Domek z jacuzzi Podlasie</h3>
          <p>
            Szukasz <Link to="/domek-z-jacuzzi-podlasie" className="text-forest underline hover:text-forest-light transition-colors">domku z jacuzzi na Podlasiu</Link>?
            Nasza ruska bania z balią z gorącą wodą to wyjątkowy element oferty. Gorąca woda pod gwiazdami, 
            w otoczeniu Puszczy Knyszyńskiej — to rytuał relaksu, który goście wspominają najczęściej.
            Obiekt znajduje się przy rezerwacie przyrody Krzemienne Góry — w otoczeniu starych drzew i leśnych ścieżek.
          </p>

          <h3 className="font-serif text-xl text-foreground">Weekend w Supraślu</h3>
          <p>
            In The Woods to doskonały wybór na <Link to="/weekend-suprasl" className="text-forest underline hover:text-forest-light transition-colors">weekend w Supraślu</Link> —
            zarówno romantyczny wypad we dwoje, jak i dłuższy pobyt z rodziną. Organizujemy również
            <Link to="/wieczor-panienski-suprasl" className="text-forest underline hover:text-forest-light transition-colors"> wieczory panieńskie</Link> i 
            imprezy okolicznościowe. Odkryj
            <Link to="/atrakcje-suprasl" className="text-forest underline hover:text-forest-light transition-colors"> atrakcje Supraśla</Link>,
            <Link to="/blog/szlaki-piesze-rowerowe-suprasl" className="text-forest underline hover:text-forest-light transition-colors"> szlaki piesze i rowerowe</Link> oraz
            <Link to="/dom-w-lesie-suprasl" className="text-forest underline hover:text-forest-light transition-colors"> dom w lesie</Link> w Puszczy Knyszyńskiej.
          </p>

          <h3 className="font-serif text-xl text-foreground">Sprawdź noclegi w Supraślu</h3>
          <p>
            Szukasz sprawdzonego <Link to="/noclegi-suprasl" className="text-forest underline hover:text-forest-light transition-colors">noclegu w Supraślu</Link>?
            Sprawdź nasz <Link to="/blog/weekend-suprasl-plan" className="text-forest underline hover:text-forest-light transition-colors">plan na weekend w Supraślu</Link>,
            dowiedz się <Link to="/blog/co-robic-suprasl" className="text-forest underline hover:text-forest-light transition-colors">co robić w Supraślu</Link>,
            odkryj najlepsze <Link to="/blog/restauracje-suprasl" className="text-forest underline hover:text-forest-light transition-colors">restauracje Supraśla</Link> i zaplanuj
            <Link to="/blog/kajaki-suprasl" className="text-forest underline hover:text-forest-light transition-colors"> spływ kajakowy rzeką Supraśl</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOTextSection;
