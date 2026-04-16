import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { pushToDataLayer } from '@/lib/gtm';

const SCROLL_THRESHOLDS = [25, 50, 75, 90];

const GTMTracker = () => {
  const location = useLocation();
  const firedThresholdsRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    firedThresholdsRef.current.clear();

    pushToDataLayer({
      event: 'page_view',
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onScroll = () => {
      const maxScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScrollable <= 0) return;

      const scrollPercent = Math.round((window.scrollY / maxScrollable) * 100);

      SCROLL_THRESHOLDS.forEach((threshold) => {
        if (scrollPercent >= threshold && !firedThresholdsRef.current.has(threshold)) {
          firedThresholdsRef.current.add(threshold);
          pushToDataLayer({
            event: 'scroll_depth',
            percent_scrolled: threshold,
            page_path: location.pathname,
          });
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest('a,button');
      if (!element) return;

      const tagName = element.tagName.toLowerCase();
      const text = (element.textContent || '').trim().toLowerCase();
      const href = tagName === 'a' ? (element as HTMLAnchorElement).getAttribute('href') || '' : '';
      const ariaLabel = (element.getAttribute('aria-label') || '').trim().toLowerCase();

      if (href.startsWith('tel:')) {
        pushToDataLayer({
          event: 'callback_click',
          phone: href.replace('tel:', ''),
          page_path: location.pathname,
          click_text: text || ariaLabel || 'tel_link',
        });
        return;
      }

      const isBookingClick =
        href.includes('#rezerwacja') ||
        text.includes('zarezerwuj') ||
        text.includes('sprawdź dostępność') ||
        text.includes('sprawdz dostępność') ||
        ariaLabel.includes('zarezerwuj');

      if (!isBookingClick) return;

      pushToDataLayer({
        event: 'booking_cta_click',
        page_path: location.pathname,
        click_text: text || ariaLabel || 'booking_button',
      });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [location.pathname]);

  return null;
};

export default GTMTracker;
