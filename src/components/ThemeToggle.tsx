import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const LIGHT_COLOR = '#e8f5e4';
const DARK_COLOR = '#121616';

const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const syncTheme = () => {
      setDark(document.documentElement.getAttribute('data-theme') === 'dark');
    };
    syncTheme();
    window.addEventListener('themechange', syncTheme);
    return () => window.removeEventListener('themechange', syncTheme);
  }, []);

  const toggle = () => {
    const next = document.documentElement.getAttribute('data-theme') !== 'dark';
    setDark(next);
    const root = document.documentElement;
    if (next) root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Ignore unavailable storage.
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next ? DARK_COLOR : LIGHT_COLOR);
    (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
      event: 'theme_toggle',
      theme: next ? 'dark' : 'light',
      source: 'navbar',
    });
    window.dispatchEvent(new Event('themechange'));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={className}
      aria-label={dark ? 'Włącz tryb dzienny' : 'Włącz tryb nocny'}
      aria-pressed={dark}
      title={dark ? 'Włącz tryb dzienny' : 'Włącz tryb nocny'}
    >
      <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
