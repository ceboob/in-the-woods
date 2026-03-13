import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const SEOTextSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-warm-white">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12 space-y-4">
          <h2 className="section-title">Noclegi Supraśl – wyjątkowy dom w lesie</h2>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Szukasz <strong>noclegu w Supraślu</strong>? In The Woods – noclegi Supraśl to prywatny <strong>dom w lesie z jacuzzi</strong>,
            położony w sercu Puszczy Knyszyńskiej, zaledwie 10 minut jazdy od centrum Supraśla.
            To wyjątkowa alternatywa dla hotelu — <strong>domek Supraśl</strong> na wyłączność, otoczony lasem i ciszą natury.
          </p>

          <h3 className="font-serif text-xl text-foreground">Noclegi Supraśl – dom na wynajem</h3>
          <p>
            Nasz <strong>dom Supraśl</strong> oferuje kominek, w pełni wyposażoną kuchnię, dwie sypialnie, ogród i taras z widokiem na las.
            Goście mogą skorzystać z prywatnej ruskiej bani z balią — idealnej po dniu spędzonym na szlakach
            <Link to="/puszcza-knyszynska-nocleg" className="text-forest underline hover:text-forest-light transition-colors"> Puszczy Knyszyńskiej</Link>.
            To jeden z nielicznych <strong>noclegów w Puszczy Knyszyńskiej</strong> łączących komfort z prawdziwą bliskością natury.
          </p>

          <h3 className="font-serif text-xl text-foreground">Dom w lesie Puszcza Knyszyńska</h3>
          <p>
            Obiekt znajduje się przy rezerwacie przyrody Krzemienne Góry — w otoczeniu starych drzew, 
            ptaków i leśnych ścieżek. <strong>Nocleg Supraśl</strong> w In The Woods to turystyka przyrodnicza 
            w najlepszym wydaniu. Poranki pachną żywicą, wieczory płoną w kominku, a niebo pełne gwiazd 
            zaprasza do relaksu w balii z gorącą wodą.
          </p>

          <h3 className="font-serif text-xl text-foreground">Weekend w Supraślu</h3>
          <p>
            In The Woods to doskonały wybór na <Link to="/weekend-suprasl" className="text-forest underline hover:text-forest-light transition-colors">weekend w Supraślu</Link> —
            zarówno romantyczny wypad we dwoje, jak i dłuższy pobyt z rodziną. Zwierzęta są mile widziane, 
            a ogrodzony ogród to raj dla czworonogów. Odkryj
            <Link to="/atrakcje-suprasl" className="text-forest underline hover:text-forest-light transition-colors"> atrakcje Supraśla</Link>,
            <Link to="/blog/szlaki-piesze-rowerowe-suprasl" className="text-forest underline hover:text-forest-light transition-colors"> szlaki piesze i rowerowe</Link> oraz
            <Link to="/dom-w-lesie-suprasl" className="text-forest underline hover:text-forest-light transition-colors"> dom w lesie</Link> w Puszczy Knyszyńskiej.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOTextSection;
