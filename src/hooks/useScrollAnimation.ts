import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const REVEAL_CLEANUP_MS = 1600;

/**
 * One-shot scroll reveal. Content stays visible without JS and when already in
 * the viewport on first render; only elements below the fold are armed
 * (hidden via CSS) and revealed once on entering the viewport.
 */
export const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
    // Already visible / above the viewport (e.g. restored scroll) / reduced motion / no observer
    if (reduced || inView || rect.bottom <= 0 || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    el.querySelectorAll<HTMLElement>('.card-premium').forEach((card, i) => {
      card.style.setProperty('--reveal-i', String(Math.min(i, 8)));
    });
    el.dataset.reveal = 'armed';

    let timer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setIsVisible(true);
        timer = window.setTimeout(() => {
          delete el.dataset.reveal;
        }, REVEAL_CLEANUP_MS);
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      delete el.dataset.reveal;
    };
  }, [threshold]);

  return { ref, isVisible };
};
