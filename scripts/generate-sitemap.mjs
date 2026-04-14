import fs from 'node:fs';

const APP_FILE = 'src/App.tsx';
const SITEMAP_FILE = 'public/sitemap.xml';
const BASE_URL = 'https://www.suprasl.online';
const TODAY = new Date().toISOString().slice(0, 10);

const NON_INDEXABLE_ROUTES = new Set(['/admin', '/admin/login', '/platnosc-sukces']);

const appContent = fs.readFileSync(APP_FILE, 'utf8');
const routeMatches = [...appContent.matchAll(/path="([^"]+)"/g)].map((m) => m[1]);

const routes = [...new Set(routeMatches)]
  .filter((route) => route !== '*')
  .map((route) => (route.endsWith('/') && route !== '/' ? route.slice(0, -1) : route))
  .filter((route) => !NON_INDEXABLE_ROUTES.has(route));

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
    const meta = oldMeta.get(route) ?? { changefreq: 'monthly', priority: '0.7' };
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
