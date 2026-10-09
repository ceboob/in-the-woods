import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

interface ImageRevealProps {
  children: ReactNode;
  delay?: number;
}

const REVEAL_DURATION_MS = 1000;

const ImageReveal = ({ children, delay = 0 }: ImageRevealProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') return;

    const reducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const bounds = element.getBoundingClientRect();
    if (reducedMotion || bounds.top < window.innerHeight || bounds.bottom <= 0) return;

    let cleanupTimer: number | undefined;
    let observer: IntersectionObserver | undefined;
    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer?.disconnect();
          element.dataset.imageReveal = 'revealed';
          cleanupTimer = window.setTimeout(() => {
            delete element.dataset.imageReveal;
          }, REVEAL_DURATION_MS + delay);
        },
        { rootMargin: '80px 0px', threshold: 0 },
      );
      observer.observe(element);
    } catch {
      observer?.disconnect();
      return;
    }
    element.dataset.imageReveal = 'armed';
    return () => {
      observer.disconnect();
      window.clearTimeout(cleanupTimer);
      delete element.dataset.imageReveal;
    };
  }, [delay]);

  const style = { '--image-reveal-delay': `${delay}ms` } as CSSProperties;

  return (
    <span ref={ref} className="image-reveal" style={style}>
      {children}
    </span>
  );
};

export default ImageReveal;
