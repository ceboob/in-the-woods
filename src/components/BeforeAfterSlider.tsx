import { useState, useRef, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Sun, Moon } from 'lucide-react';
import cabinNight from '@/assets/cabin-night-stars.jpg';
import cabinDay from '@/assets/cabin-day-garden.jpg';

const BeforeAfterSlider = () => {
  const { ref, isVisible } = useScrollAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10 space-y-3">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Atmosfera</p>
          <h2 className="section-title">Dzień i noc w In The Woods</h2>
          <p className="section-subtitle mx-auto">Przesuń suwak i zobacz, jak zmienia się atmosfera — od słonecznych poranków po magiczne wieczory.</p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/10] rounded-xl overflow-hidden cursor-col-resize select-none touch-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {/* Night (background) */}
          <img src={cabinNight} alt="In The Woods nocą — chata pod gwiazdami" className="absolute inset-0 w-full h-full object-cover object-bottom" draggable={false} />
          
          {/* Day (clipped) */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
            <img src={cabinDay} alt="In The Woods w dzień — chata w słońcu" className="absolute inset-0 w-full h-full object-cover object-bottom" style={{ width: `${containerRef.current ? containerRef.current.offsetWidth : 1000}px`, maxWidth: 'none' }} draggable={false} />
          </div>

          {/* Slider line */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-cream/80 shadow-lg" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/90 backdrop-blur-sm shadow-lg flex items-center justify-center">
              <div className="flex items-center gap-0.5">
                <div className="w-0.5 h-4 bg-graphite/40 rounded-full" />
                <div className="w-0.5 h-4 bg-graphite/40 rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-cream/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-graphite">
            <Sun className="w-3.5 h-3.5" /> Dzień
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-graphite/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-cream">
            <Moon className="w-3.5 h-3.5" /> Noc
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
