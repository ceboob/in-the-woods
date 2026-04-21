import fs from 'node:fs';
import { getRouteManifest } from './lib/route-manifest.mjs';

const SITEMAP_FILE = 'public/sitemap.xml';
const BASE_URL = 'https://www.suprasl.online';
const TODAY = new Date().toISOString().slice(0, 10);

function defaultMetaForRoute(route) {
  if (route === '/') {
    return { changefreq: 'weekly', priority: '1.0' };
  }

  if (route === '/blog') {
    return { changefreq: 'weekly', priority: '0.8' };
  }

  if (route.startsWith('/blog/')) {
    return { changefreq: 'monthly', priority: '0.7' };
  }

  if (route === '/informator' || route === '/dokumenty' || route === '/polityka-prywatnosci') {
    return { changefreq: 'monthly', priority: '0.6' };
  }

  return { changefreq: 'weekly', priority: '0.8' };
}

const { indexableRoutes: routes } = getRouteManifest();

const oldSitemap = fs.readFileSync(SITEMAP_FILE, 'utf8');

const oldMeta = new Map();
for (const block of oldSitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
  const chunk = block[1];
  const locMatch = chunk.match(/<loc>([^<]+)<\/loc>/);
  if (!locMatch) continue;
  const path = locMatch[1].replace(BASE_URL, '') || '/';
  const route = path.startsWith('/') ? path : `/${path}`;
  const changefreq = chunk.match(/<changefreq>([^<]+)<\/changefreq>/)?.[1] ?? 'monthly';
  const priority = chunk.match(/<priority>([^<]+)<\/priority>/)?.[1] ?? '0.7';
  oldMeta.set(route, { changefreq, priority });
}

const xmlEntries = routes
  .map((route) => {
    const loc = route === '/' ? `${BASE_URL}/` : `${BASE_URL}${route}`;
    const meta = oldMeta.get(route) ?? defaultMetaForRoute(route);
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>
`;

fs.writeFileSync(SITEMAP_FILE, xml);
console.log(`Generated sitemap for ${routes.length} routes (${TODAY}).`);
