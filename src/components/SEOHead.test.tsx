import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { describe, expect, it } from 'vitest';
import SEOHead from './SEOHead';

const canonical = 'https://www.suprasl.online/blog/noclegi-suprasl';

async function renderSEO(noindex = false) {
  render(
    <HelmetProvider>
      <SEOHead title="Test" description="Test page" canonical={canonical} noindex={noindex} />
    </HelmetProvider>,
  );

  await waitFor(() => expect(document.head.querySelector('meta[name="robots"]')).not.toBeNull());
}

describe('SEOHead', () => {
  it('keeps noindex pages followable and excludes them from canonical and hreflang signals', async () => {
    await renderSEO(true);

    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, follow',
    );
    expect(document.head.querySelector('link[rel="canonical"]')).toBeNull();
    expect(document.head.querySelectorAll('link[rel="alternate"][hreflang]')).toHaveLength(0);
  });

  it('emits canonical and hreflang annotations for indexable pages', async () => {
    await renderSEO();

    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute(
      'content',
      'index, follow, max-image-preview:large, max-snippet:-1',
    );
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute('href', canonical);
    expect(document.head.querySelectorAll('link[rel="alternate"][href]')).toHaveLength(2);
  });
});
